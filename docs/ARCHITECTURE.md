# Architecture

## Visao Geral

O WASUP e um app Android de comunicacao pareada com backend serverless em Firebase e regras fortes no Firestore.

Objetivos principais da arquitetura:
- manter o fluxo simples para o usuario
- restringir escrita sensivel no cliente
- proteger conteudo principal com criptografia ponta a ponta
- permitir notificacao e widget com atualizacao rapida
- separar UI, dados remotos, cache local e validacao premium

## Camadas

### UI

Pacote principal:
- `ui/home`
- `ui/history`

Responsabilidades:
- renderizar a tela principal em Compose como hub de Widgets e Mensagens
- renderizar a tela de Widgets com acao de adicionar widget
- renderizar a tela de Mensagens com composer e historico das ultimas 20 mensagens
- renderizar a tela de Relacionamento com dados compartilhados do casal
- renderizar o proximo evento do casal na tela principal, com nome, foto e data futura
- renderizar album compartilhado de relacionamento com importacao, visualizacao e exclusao de fotos
- renderizar a tela de Perfil com nome e foto sincronizada do usuario
- manter o componente de historico reutilizavel em `ui/history`
- exibir feedbacks usando `UiText`
- controlar dialogos, fluxo de login, selecao de idioma e selecao de tema
- resolver fallback visual por idioma na camada certa
- aplicar tema global persistido via Compose

Arquivos centrais:
- `HomeScreen.kt`
- `ui/history/MessageHistoryScreen.kt`
- `HomeViewModel.kt`
- `HomeUiState.kt`
- `QuickMessageCatalog.kt`
- `UiText.kt`
- `ui/theme/Color.kt`
- `ui/theme/Theme.kt`

### Data

Pacotes principais:
- `data`
- `firebase`

Responsabilidades:
- autenticacao
- leitura/escrita em Firestore
- pareamento
- mensagens
- FCM token
- cache local do widget
- foto de perfil criptografada de ponta a ponta antes do Firebase Storage, com cache local
- fotos do album do relacionamento criptografadas de ponta a ponta antes do Firebase Storage, com cache local para app e widget
- foto do proximo evento criptografada de ponta a ponta antes do Firebase Storage, com rastreio do usuario que fez upload
- persistencia local do tema global do app

Repositorios principais:
- `FirebaseAuthRepository`
- `FirebaseUserRepository`
- `FirebasePairRepository`
- `FirebaseMessageRepository`
- `DataStoreWidgetCacheRepository`
- `DataStoreAppThemeRepository`
- `ProfilePhotoRepository`

### Domain

Responsabilidades:
- validacoes
- regras de mensagens
- tipos de erro traduziveis reutilizaveis

Arquivos centrais:
- `Validators.kt`
- `MessageRules.kt`
- `StringResException.kt`

### Security

Responsabilidades:
- geracao de chaves locais
- troca de segredo entre pares
- criptografia/decriptografia do conteudo principal

Arquivo central:
- `PairE2eService.kt`

### Billing

Responsabilidades:
- abrir fluxo de assinatura
- observar status local da assinatura
- enviar token para verificacao segura no backend
- abrir a tela oficial da Google Play para gerenciamento/cancelamento da assinatura

Arquivos centrais:
- `BillingManager.kt`
- `PremiumPurchaseVerifier.kt`

### Widget e Notifications

Responsabilidades:
- manter snapshot local
- renderizar widget com Glance
- renderizar contador de dias do relacionamento com as fotos do casal
- renderizar rotacionador de fotos do relacionamento com Glance, atualizando a cada 5 minutos
- renderizar widget do proximo evento com titulo, foto e tempo restante, atualizando periodicamente e na virada do dia
- hidratar estado quando necessario
- exibir notificacao local apos push
- reagir a mudanca de locale
- reagir a virada do dia para manter contadores coerentes

Arquivos centrais:
- `WassupWidget.kt`
- `RelationshipCounterWidget.kt`
- `NextEventWidget.kt`
- `WassupWidgetUpdater.kt`
- `WassupNotificationHelper.kt`

## Fluxo Principal

1. O usuario cria conta ou entra com e-mail e senha.
2. O app exige verificacao de e-mail antes do uso completo.
3. O perfil do usuario e criado/atualizado no Firestore.
4. O usuario pode alterar nome e escolher uma foto de perfil criptografada de ponta a ponta e sincronizada via Firebase Storage.
5. Cada usuario recebe um codigo proprio de pareamento.
6. Um usuario envia pedido de pareamento ao outro.
7. O outro usuario aceita e os dois passam a compartilhar um `pairId`.
8. As mensagens e o estado atual do par sao sincronizados no Firestore.
9. A home expoe cards para abrir Relacionamento, Widgets e Mensagens.
10. A tela de Relacionamento salva a data de inicio com criptografia de ponta a ponta.
11. A tela de Mensagens carrega o historico e exibe envio + ultimas mensagens no mesmo fluxo.
12. Os widgets usam snapshot local para exibicao rapida.
13. FCM pode notificar novas mensagens e reforcar a atualizacao dos widgets.
14. Assinaturas premium sao verificadas no backend antes de liberar `isPremiumUser`.

## Modelagem de Dados

Colecoes principais:

```text
users/{userId}
pair_codes/{code}
pair_requests/{requestId}
pair_request_cooldowns/{pairKey}
pairs/{pairId}
pairs/{pairId}/messages/{messageId}
pairs/{pairId}/state/current
pairs/{pairId}/relationship/current
pairs/{pairId}/album_photos/{photoId}
premium_entitlements/{purchaseTokenHash}
storage: profile_photos/{userId}/profile_photo_{timestamp}.enc
storage: relationship_photos/{pairId}/{userId}/{photoId}_{timestamp}.enc
storage: relationship_events/{pairId}/{userId}/event_{timestamp}.enc
```

Campos relevantes:

### `users/{userId}`
- `code`
- `pairedUserId`
- `pairId`
- `displayName`
- `photoStoragePath`
- `photoKeyForOwner`
- `photoKeyIvForOwner`
- `photoKeyForPartner`
- `photoKeyIvForPartner`
- `fcmToken`
- `e2ePublicKey`
- `isPremiumUser`
- `premiumProductId`
- `premiumPurchaseTokenHash`
- `premiumSubscriptionState`
- `premiumExpiresAtEpochMillis`
- `premiumAutoRenewEnabled`
- `premiumVerifiedAtEpochMillis`
- `premiumLastVerifiedAtEpochMillis`
- `createdAtEpochMillis`
- `updatedAtEpochMillis`

### `pairs/{pairId}`
- `memberIds`
- `memberCodes`
- `isActive`
- `createdAtEpochMillis`
- `updatedAtEpochMillis`

### `pairs/{pairId}/messages/{messageId}`
- `pairId`
- `senderId`
- `senderCode`
- `content`
- `contentIv`
- `sentAtEpochMillis`
- `serverSentAt`

### `pairs/{pairId}/state/current`
- `partnerDisplayName`
- `lastMessage`
- `lastMessageIv`
- `lastSenderId`
- `lastSenderCode`
- `updatedAtEpochMillis`
- `serverUpdatedAt`

### `pairs/{pairId}/relationship/current`
- `startedAtIsoDate`
- `startedAtIsoDateIv`
- `nextEventTitle`
- `nextEventTitleIv`
- `nextEventAtIso`
- `nextEventAtIsoIv`
- `nextEventPhotoStoragePath`
- `nextEventPhotoUploaderUserId`
- `nextEventPhotoUploaderPublicKey`
- `nextEventPhotoKeyForOwner`
- `nextEventPhotoKeyIvForOwner`
- `nextEventPhotoKeyForPartner`
- `nextEventPhotoKeyIvForPartner`
- `nextEventUpdatedByUserId`
- `updatedByUserId`
- `updatedAtEpochMillis`
- `serverUpdatedAt`

## Internacionalizacao

O app hoje usa resources Android por idioma e suporta selecao manual com `AppCompatDelegate`.

Pontos relevantes:
- strings visiveis foram centralizadas em resources
- `UiText` foi introduzido para mensagens fora do Compose
- widget e notificacoes usam resources
- defaults localizados nao ficam gravados em DTOs e modelos
- a troca de idioma tambem forca refresh do widget

Resources de locale:
- `values/`
- `values-en/`
- `values-es/`
- `values-de/`
- `values-fr/`
- `values-it/`
- `values-ja/`
- `values-zh-rCN/`

## Temas

O app e o widget compartilham a mesma fonte de verdade para os temas visuais.

Pontos relevantes:
- os ids de tema ficam em `AppThemeId`
- as paletas do app e do widget ficam centralizadas em `ui/theme/Color.kt`
- o tema global do app e persistido com `DataStore`
- a `MainActivity` observa o tema salvo e injeta `WassupTheme`
- a `HomeScreen` expoe o seletor de tema ao lado do seletor de idioma
- o widget reutiliza a mesma paleta central para ciclar os temas e renderizar cores/fundo

Arquivos centrais:
- `MainActivity.kt`
- `data/AppThemeStore.kt`
- `data/AppThemeRepository.kt`
- `ui/theme/Color.kt`
- `ui/theme/Theme.kt`
- `widget/WassupWidget.kt`

## Widget

O widget usa Glance + DataStore local.

Comportamento:
- sem pareamento: mostra estado vazio traduzido
- com cache: reaproveita ultimo snapshot salvo
- o widget de mensagem pode ser fixado em tres modos independentes por instancia: ultima mensagem do casal, ultima enviada pelo usuario atual ou ultima enviada pelo par
- o widget de proximo evento usa snapshot local descriptografado e atualizacao agendada periodica, incluindo a virada do dia
- com push ou refresh local: tenta hidratar snapshot mais novo
- quando disponivel, usa a foto local de perfil do remetente da ultima mensagem
- com mudanca de idioma: faz refresh para re-renderizar resources
- com troca de tema: usa a mesma paleta central de temas do app
- a busca direcional por remetente usa indice Firestore declarado em `firestore.indexes.json`

## Seguranca

Pontos principais:
- `allowBackup=false`
- `usesCleartextTraffic=false`
- conteudo principal criptografado ponta a ponta
- as variantes do widget usam o mesmo cache local criptograficamente derivado das mensagens ja descriptografadas no aparelho; o Firestore continua armazenando `content`/`contentIv`
- foto de perfil criptografada de ponta a ponta antes do upload para Storage
- `isPremiumUser` nao deve ser liberado pelo cliente
- assinatura premium validada no backend
- RTDN da Google Play recebido por Pub/Sub para recalcular expiracao, cancelamento e renovacao
- regras do Firestore sao a fonte oficial de permissao

Arquivos sensiveis:
- `firestore.rules`
- `functions/index.js`

## Dependencias Externas Criticas

- Firebase Authentication
- Cloud Firestore
- Firebase Cloud Messaging
- Firebase Functions
- Google Play Billing
- componentes Google Play/Firebase compativeis no dispositivo para recursos como push e ecossistema Play

## Decisoes Recentes Importantes

- suporte a multiplos idiomas e seletor manual de locale
- suporte a temas globais no app com persistencia local
- unificacao das paletas do app e do widget em uma fonte central
- hardening para evitar texto localizado fixo na camada de dados
- padronizacao de erros traduziveis com `StringResException`
- ajuste do dialogo de login para idiomas mais longos
- refresh do widget ao trocar idioma
