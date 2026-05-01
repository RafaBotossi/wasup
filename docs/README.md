# WASUP

WASUP e um app Android nativo em Kotlin para comunicacao rapida entre duas pessoas pareadas.

Hoje o projeto suporta:
- autenticacao por e-mail e senha com verificacao de e-mail
- preparacao para autenticacao com conta Google via Firebase
- pareamento por codigo entre dois usuarios
- mensagens rapidas gratuitas
- tela principal limpa com cards para Widgets e Mensagens
- historico com as ultimas 20 mensagens na tela de Mensagens
- mensagem personalizada como recurso premium
- sincronizacao em tempo real com Cloud Firestore
- notificacoes push com Firebase Cloud Messaging
- foto de perfil sincronizada via Firebase Storage com criptografia ponta a ponta
- album de fotos do relacionamento com limite de 20 imagens, compressao e criptografia ponta a ponta
- widget Android com Glance
- suporte a multiplos idiomas e selecao manual de idioma no app
- temas visuais globais no app e no widget com paleta compartilhada
- validacao segura de assinatura premium via Google Play Billing + Cloud Functions

## Stack

- Kotlin
- Android nativo
- Jetpack Compose
- Jetpack Glance
- Firebase Authentication
- Cloud Firestore
- Firebase Cloud Messaging
- Firebase Storage
- Firebase Cloud Functions
- Google Play Billing
- DataStore Preferences
- Gradle Kotlin DSL

## Requisitos Rapidos

- JDK 17
- Android SDK 36
- `minSdk 26`
- `google-services.json` de dev em `app/src/debug/google-services.json`
- `google-services.json` de prod em `app/src/release/google-services.json`
- projetos Firebase de dev e prod configurados
- provedor Google habilitado no Firebase Authentication para login Google
- assinatura `wasup_premium` com base plan ativo configurada no Google Play Console para testar premium
- tópico Pub/Sub `play-billing-notifications` configurado no RTDN da Google Play para sincronizar renovacao/cancelamento/expiracao de assinatura

Detalhes completos em [REQUIREMENTS.md](REQUIREMENTS.md).

## Documentacao

- requisitos e setup: [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md)
- arquitetura e fluxos tecnicos: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- politica de privacidade atual: [docs/politicaprivacidade.txt](docs/politicaprivacidade.txt)

## Estado Atual

Fluxos implementados:
- criacao de conta com e-mail e senha
- login com e-mail e senha
- redefinicao de senha
- verificacao de e-mail antes de liberar acesso completo
- tela de perfil para alterar nome e foto sincronizada
- upload da foto de perfil como arquivo criptografado de ponta a ponta, sem imagem aberta no Storage
- geracao e manutencao do codigo proprio de pareamento
- pedido, aceite e recusa de pareamento
- despareamento
- mensagens rapidas gratis
- mensagem personalizada premium
- atualizacao do estado atual do par
- tela principal com acesso dedicado para Widgets e Mensagens
- tela de Mensagens com envio e historico das ultimas 20 mensagens com remetente
- widget com cache local
- widget de mensagem com modos independentes por instancia: ultima do casal, minha ultima ou ultima do par
- widget exibe o nome e a foto do remetente da mensagem selecionada quando disponivel
- FCM para novas mensagens
- assinatura premium validada no backend
- gerenciamento de assinatura abrindo a pagina oficial da Google Play
- exclusao de conta com limpeza complementar
- troca manual de idioma no app
- atualizacao do widget apos troca de idioma
- troca manual de tema no app
- widget com os mesmos temas visuais do app
- widget de album do casal com rotacao de fotos a cada 5 minutos e tamanho padrao 2x2

Idiomas atualmente preparados:
- Portugues
- English
- Espanol
- Deutsch
- Francais
- Italiano
- Japanese
- Chinese (Simplified)

## Estrutura Principal

```text
app/src/main/java/com/wassup/app
|- billing
|- data
|- domain
|- firebase
|- model
|- navigation
|- notifications
|- security
|- ui
|- widget
```

## Como Executar

1. Abra o projeto no Android Studio.
2. Configure o projeto para usar `JDK 17`.
3. Crie ou selecione dois projetos Firebase: um para dev/testes e outro para prod.
4. No Firebase dev, adicione o app Android `com.wassup.app.dev` e salve o JSON em `app/src/debug/google-services.json`.
5. No Firebase prod, adicione o app Android `com.wassup.app` e salve o JSON em `app/src/release/google-services.json`.
6. Se for usar login Google, registre tambem as fingerprints SHA do app e habilite o provedor `Google` no Firebase Authentication em ambos os projetos.
7. Publique `firestore.rules` e `storage.rules` no Firebase dev/prod conforme o ambiente.
8. Sincronize o Gradle.
9. Rode em dispositivo ou emulador Android compativel.

### Ambientes Firebase

O build `debug` usa `applicationId` `com.wassup.app.dev` e deve apontar para o Firebase dev.
O build `release` usa `applicationId` `com.wassup.app` e deve apontar para o Firebase prod.

Arquivos esperados:

```text
app/src/debug/google-services.json
app/src/release/google-services.json
```

O caminho antigo `app/google-services.json` nao deve mais ser usado para evitar que debug e release apontem para o mesmo projeto Firebase por engano.

Scripts disponiveis:

```text
deploy-dev-functions.bat
deploy-prod-functions.bat
deploy-dev-rules.bat
deploy-prod-rules.bat
```

## Notas Importantes

- O app depende de Firebase e Google Play corretamente configurados.
- Recursos como notificacoes push e parte da experiencia do ecossistema Android dependem de componentes Google/Firebase compativeis no dispositivo.
- O premium depende de assinatura ativa no Play Console, RTDN configurado e instalacao por release da Play Store para teste real.
- O widget usa cache local e tambem reage a mudanca de idioma do app.
- os temas do app e do widget compartilham a mesma definicao central de paletas em `ui/theme/Color.kt`
- A consulta direcional do widget de mensagem usa o indice Firestore em `firestore.indexes.json`; publique indices junto das regras quando mudar essa feature.

## Validacao Local

Ultima validacao registrada nesta fase:

```text
.\gradlew.bat :app:compileDebugKotlin
```

Compilacao passou apos a atualizacao do suporte a idiomas e do layout de login.
Compilacao continua passando apos a introducao dos temas globais do app e da paleta compartilhada com o widget.
Compilacao passou apos separar a home em cards para Widgets e Mensagens.
Compilacao passou apos proteger a foto de perfil com criptografia ponta a ponta antes do upload ao Storage.
Compilacao passou apos adicionar album de fotos do relacionamento e widget rotacionador 2x2.
