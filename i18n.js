(function () {
    const STORAGE_KEY = "wasup-language";
    const svgDataUri = function (svg) {
        return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    };
    const flagSvg = function (code) {
        const flags = {
            BR: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'><rect width='36' height='24' fill='#1f8f3a'/><polygon points='18,3 31,12 18,21 5,12' fill='#f3c63f'/><circle cx='18' cy='12' r='5.2' fill='#234aa7'/></svg>",
            US: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'><rect width='36' height='24' fill='#fff'/><g fill='#c83b3b'><rect width='36' height='2.4' y='0'/><rect width='36' height='2.4' y='4.8'/><rect width='36' height='2.4' y='9.6'/><rect width='36' height='2.4' y='14.4'/><rect width='36' height='2.4' y='19.2'/></g><rect width='15' height='10.8' fill='#234aa7'/></svg>",
            ES: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'><rect width='36' height='24' fill='#b72d2d'/><rect y='6' width='36' height='12' fill='#f2c94c'/></svg>",
            DE: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'><rect width='36' height='8' fill='#1e1e1e'/><rect y='8' width='36' height='8' fill='#b72d2d'/><rect y='16' width='36' height='8' fill='#f2c94c'/></svg>",
            IT: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'><rect width='12' height='24' fill='#1f8f3a'/><rect x='12' width='12' height='24' fill='#fff'/><rect x='24' width='12' height='24' fill='#c83b3b'/></svg>",
            FR: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'><rect width='12' height='24' fill='#234aa7'/><rect x='12' width='12' height='24' fill='#fff'/><rect x='24' width='12' height='24' fill='#c83b3b'/></svg>",
            JP: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'><rect width='36' height='24' fill='#fff'/><circle cx='18' cy='12' r='6' fill='#c83b3b'/></svg>",
            CN: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'><rect width='36' height='24' fill='#c83b3b'/><polygon points='8,4 9.4,8 13.6,8 10.2,10.6 11.6,14.6 8,12 4.4,14.6 5.8,10.6 2.4,8 6.6,8' fill='#f2c94c'/></svg>"
        };
        return svgDataUri(flags[code]);
    };

    const LANGUAGES = {
        pt: { flag: flagSvg("BR"), label: "Português", locale: "pt-BR" },
        en: { flag: flagSvg("US"), label: "English", locale: "en" },
        es: { flag: flagSvg("ES"), label: "Español", locale: "es" },
        de: { flag: flagSvg("DE"), label: "Deutsch", locale: "de" },
        it: { flag: flagSvg("IT"), label: "Italiano", locale: "it" },
        fr: { flag: flagSvg("FR"), label: "Français", locale: "fr" },
        ja: { flag: flagSvg("JP"), label: "日本語", locale: "ja" },
        zh: { flag: flagSvg("CN"), label: "中文", locale: "zh-CN" }
    };

    const footerRights = {
        pt: "&copy; 2026 WASUP. Todos os direitos reservados. <br><span style=\"font-size: 0.75rem; opacity: 0.4;\">by Rafael Botossi</span>",
        en: "&copy; 2026 WASUP. All rights reserved. <br><span style=\"font-size: 0.75rem; opacity: 0.4;\">by Rafael Botossi</span>",
        es: "&copy; 2026 WASUP. Todos los derechos reservados. <br><span style=\"font-size: 0.75rem; opacity: 0.4;\">by Rafael Botossi</span>",
        de: "&copy; 2026 WASUP. Alle Rechte vorbehalten. <br><span style=\"font-size: 0.75rem; opacity: 0.4;\">by Rafael Botossi</span>",
        it: "&copy; 2026 WASUP. Tutti i diritti riservati. <br><span style=\"font-size: 0.75rem; opacity: 0.4;\">by Rafael Botossi</span>",
        fr: "&copy; 2026 WASUP. Tous droits réservés. <br><span style=\"font-size: 0.75rem; opacity: 0.4;\">by Rafael Botossi</span>",
        ja: "&copy; 2026 WASUP. All rights reserved. <br><span style=\"font-size: 0.75rem; opacity: 0.4;\">by Rafael Botossi</span>",
        zh: "&copy; 2026 WASUP. 版权所有。<br><span style=\"font-size: 0.75rem; opacity: 0.4;\">by Rafael Botossi</span>"
    };

    const HOME = {
        pt: {
            metaTitle: "WASUP - Comunicação Imediata",
            metaDescription: "WASUP é o aplicativo definitivo para casais. Comunicação ultrarrápida direto na tela inicial.",
            commonLogoAlt: "Logo do WASUP",
            nav: { features: "Recursos", premium: "Premium", privacy: "Privacidade", store: "Na Google Play Store" },
            hero: {
                logoAlt: "Logo principal do app WASUP",
                badge: "Novo no Android",
                title: "Conecte-se com seu par na <span class=\"highlight\">velocidade da luz</span>.",
                subtitle: "Esqueça bater papo em apps tradicionais. O WASUP envia pequenos recados que aparecem diretamente na tela inicial do celular do seu par através de um widget nativo.",
                cta: "Disponível na Google Play Store"
            },
            widget: {
                partnerName: "Rafa ❤️",
                messages: ["\"Tô em casa!\"", "\"Estou com saudades\"", "\"Te amo!\"", "\"Não esquece o ovo!\""],
                times: ["Agora mesmo", "Há 5 min", "Há 2 horas", "Ontem"]
            },
            features: {
                tag: "Funcionalidades",
                title: "As telas do app mostram como o WASUP funciona no dia a dia",
                subtitle: "Da escolha rápida de mensagens ao widget na tela inicial, tudo foi pensado para enviar carinho e recados em poucos toques.",
                cards: [
                    {
                        alt: "Tela principal do app WASUP com categorias e mensagens prontas",
                        title: "💬 Mensagens por Categoria",
                        text: "O app organiza recados prontos em categorias como amor, bom dia, cuidado, apoio e mensagens leves para enviar sem perder tempo."
                    },
                    {
                        alt: "Widget do WASUP mostrando mensagem recente na tela inicial",
                        title: "⚡ Zero Fricção",
                        text: "O recado aparece direto na tela inicial do seu par, sem precisar abrir conversa ou navegar por menus."
                    },
                    {
                        alt: "Variação do widget do WASUP com mensagem em destaque",
                        title: "✨ Destaque Imediato",
                        text: "O widget valoriza a mensagem com leitura rápida e visual limpo, ideal para pequenos gestos e lembretes importantes."
                    },
                    {
                        alt: "Widget do WASUP exibindo outra mensagem enviada",
                        title: "🔒 Privacidade em Primeiro Lugar",
                        text: "As mensagens são protegidas com criptografia em trânsito e cifragem ponta a ponta para manter a experiência segura."
                    }
                ]
            },
            premium: {
                tag: "WASUP Premium",
                title: "Digite o que quiser",
                text: "Na versão premium, além das mensagens prontas, você desbloqueia o campo para escrever recados personalizados do seu jeito.",
                items: [
                    "Digite mensagens livres direto no app.",
                    "Mantenha as categorias prontas para uso instantâneo.",
                    "Envie recados únicos quando quiser sair do padrão."
                ],
                alt: "Tela do WASUP Premium com entrada de texto livre"
            },
            footerPrivacy: "Política de Privacidade"
        },
        en: {
            metaTitle: "WASUP - Instant Connection",
            metaDescription: "WASUP is the ultimate app for couples. Ultra-fast communication right on the home screen.",
            commonLogoAlt: "WASUP logo",
            nav: { features: "Features", premium: "Premium", privacy: "Privacy", store: "On Google Play Store" },
            hero: {
                logoAlt: "Main WASUP app logo",
                badge: "New on Android",
                title: "Connect with your person at <span class=\"highlight\">light speed</span>.",
                subtitle: "Forget chatting through traditional apps. WASUP sends short notes that appear directly on your partner's home screen through a native widget.",
                cta: "Available on Google Play Store"
            },
            widget: {
                partnerName: "Rafa ❤️",
                messages: ["\"I'm home!\"", "\"I miss you\"", "\"Love you!\"", "\"Don't forget the eggs!\""],
                times: ["Just now", "5 min ago", "2 hours ago", "Yesterday"]
            },
            features: {
                tag: "Features",
                title: "The app screens show how WASUP fits into everyday life",
                subtitle: "From quick message picking to the home screen widget, everything was designed to send affection and quick notes in just a few taps.",
                cards: [
                    {
                        alt: "WASUP main screen with categories and ready-made messages",
                        title: "💬 Category-Based Messages",
                        text: "The app organizes ready-to-send notes into categories like love, good morning, care, support, and light messages so you can send something fast."
                    },
                    {
                        alt: "WASUP widget showing a recent message on the home screen",
                        title: "⚡ Zero Friction",
                        text: "The note lands right on your partner's home screen, without opening a chat or navigating through menus."
                    },
                    {
                        alt: "WASUP widget variation with a highlighted message",
                        title: "✨ Instant Highlight",
                        text: "The widget gives the message quick readability and a clean visual style, perfect for little gestures and important reminders."
                    },
                    {
                        alt: "WASUP widget displaying another sent message",
                        title: "🔒 Privacy First",
                        text: "Messages are protected with encryption in transit and end-to-end encryption to keep the experience safe."
                    }
                ]
            },
            premium: {
                tag: "WASUP Premium",
                title: "Type whatever you want",
                text: "With premium, beyond ready-made messages, you unlock a field to write your own custom notes your own way.",
                items: [
                    "Type free-form messages directly in the app.",
                    "Keep the ready categories for instant use.",
                    "Send unique notes whenever you want to go beyond the defaults."
                ],
                alt: "WASUP Premium screen with free text input"
            },
            footerPrivacy: "Privacy Policy"
        },
        es: {
            metaTitle: "WASUP - Conexión Inmediata",
            metaDescription: "WASUP es la app definitiva para parejas. Comunicación ultrarrápida directamente en la pantalla de inicio.",
            commonLogoAlt: "Logo de WASUP",
            nav: { features: "Funciones", premium: "Premium", privacy: "Privacidad", store: "En Google Play Store" },
            hero: {
                logoAlt: "Logo principal de la app WASUP",
                badge: "Nuevo en Android",
                title: "Conéctate con tu persona a la <span class=\"highlight\">velocidad de la luz</span>.",
                subtitle: "Olvídate de chatear en apps tradicionales. WASUP envía mensajes cortos que aparecen directamente en la pantalla de inicio del celular de tu pareja mediante un widget nativo.",
                cta: "Disponible en Google Play Store"
            },
            widget: {
                partnerName: "Rafa ❤️",
                messages: ["\"¡Ya llegué a casa!\"", "\"Te extraño\"", "\"¡Te amo!\"", "\"¡No olvides los huevos!\""],
                times: ["Ahora mismo", "Hace 5 min", "Hace 2 horas", "Ayer"]
            },
            features: {
                tag: "Funciones",
                title: "Las pantallas de la app muestran cómo WASUP encaja en el día a día",
                subtitle: "Desde elegir mensajes rápidos hasta el widget en la pantalla de inicio, todo fue pensado para enviar cariño y recados en pocos toques.",
                cards: [
                    {
                        alt: "Pantalla principal de WASUP con categorías y mensajes listos",
                        title: "💬 Mensajes por Categoría",
                        text: "La app organiza mensajes listos en categorías como amor, buenos días, cuidado, apoyo y mensajes ligeros para enviar sin perder tiempo."
                    },
                    {
                        alt: "Widget de WASUP mostrando un mensaje reciente en la pantalla de inicio",
                        title: "⚡ Cero Fricción",
                        text: "El mensaje aparece directo en la pantalla de inicio de tu pareja, sin abrir chats ni navegar por menús."
                    },
                    {
                        alt: "Variación del widget de WASUP con un mensaje destacado",
                        title: "✨ Impacto Inmediato",
                        text: "El widget destaca el mensaje con lectura rápida y un diseño limpio, ideal para pequeños gestos y recordatorios importantes."
                    },
                    {
                        alt: "Widget de WASUP mostrando otro mensaje enviado",
                        title: "🔒 Privacidad Primero",
                        text: "Los mensajes están protegidos con cifrado en tránsito y cifrado de extremo a extremo para mantener la experiencia segura."
                    }
                ]
            },
            premium: {
                tag: "WASUP Premium",
                title: "Escribe lo que quieras",
                text: "En la versión premium, además de los mensajes listos, desbloqueas un campo para escribir mensajes personalizados a tu manera.",
                items: [
                    "Escribe mensajes libres directamente en la app.",
                    "Mantén las categorías listas para uso instantáneo.",
                    "Envía mensajes únicos cuando quieras salir de lo común."
                ],
                alt: "Pantalla de WASUP Premium con entrada de texto libre"
            },
            footerPrivacy: "Política de Privacidad"
        },
        de: {
            metaTitle: "WASUP - Sofortige Verbindung",
            metaDescription: "WASUP ist die ideale App für Paare. Ultraschnelle Kommunikation direkt auf dem Homescreen.",
            commonLogoAlt: "WASUP-Logo",
            nav: { features: "Funktionen", premium: "Premium", privacy: "Datenschutz", store: "Im Google Play Store" },
            hero: {
                logoAlt: "Hauptlogo der WASUP-App",
                badge: "Neu auf Android",
                title: "Verbinde dich mit deinem Lieblingsmenschen in <span class=\"highlight\">Lichtgeschwindigkeit</span>.",
                subtitle: "Vergiss klassische Chats. WASUP sendet kurze Nachrichten, die direkt auf dem Homescreen deines Gegenübers über ein natives Widget erscheinen.",
                cta: "Verfügbar im Google Play Store"
            },
            widget: {
                partnerName: "Rafa ❤️",
                messages: ["\"Ich bin zu Hause!\"", "\"Ich vermisse dich\"", "\"Ich liebe dich!\"", "\"Vergiss die Eier nicht!\""],
                times: ["Gerade eben", "Vor 5 Min.", "Vor 2 Stunden", "Gestern"]
            },
            features: {
                tag: "Funktionen",
                title: "Die App-Screens zeigen, wie WASUP im Alltag funktioniert",
                subtitle: "Von schnellen Nachrichten bis zum Widget auf dem Homescreen wurde alles dafür entwickelt, Zuneigung und kurze Botschaften mit wenigen Fingertipps zu senden.",
                cards: [
                    {
                        alt: "WASUP-Startbildschirm mit Kategorien und vorbereiteten Nachrichten",
                        title: "💬 Nachrichten nach Kategorien",
                        text: "Die App organisiert fertige Nachrichten in Kategorien wie Liebe, Guten Morgen, Fürsorge, Unterstützung und leichte Botschaften für schnelle Sends."
                    },
                    {
                        alt: "WASUP-Widget mit einer aktuellen Nachricht auf dem Homescreen",
                        title: "⚡ Reibungslos",
                        text: "Die Nachricht erscheint direkt auf dem Homescreen deines Gegenübers, ohne Chat zu öffnen oder Menüs zu durchsuchen."
                    },
                    {
                        alt: "Variante des WASUP-Widgets mit hervorgehobener Nachricht",
                        title: "✨ Sofort im Blick",
                        text: "Das Widget hebt die Nachricht mit schneller Lesbarkeit und klarem Look hervor, ideal für kleine Gesten und wichtige Erinnerungen."
                    },
                    {
                        alt: "WASUP-Widget mit einer anderen gesendeten Nachricht",
                        title: "🔒 Datenschutz zuerst",
                        text: "Nachrichten werden durch Verschlüsselung während der Übertragung und Ende-zu-Ende-Verschlüsselung geschützt."
                    }
                ]
            },
            premium: {
                tag: "WASUP Premium",
                title: "Schreib, was du willst",
                text: "Mit der Premium-Version entsperrst du zusätzlich zu den vorgefertigten Nachrichten ein Feld für eigene persönliche Mitteilungen.",
                items: [
                    "Schreibe freie Nachrichten direkt in der App.",
                    "Behalte die fertigen Kategorien für den Soforteinsatz.",
                    "Sende individuelle Nachrichten, wenn du etwas Eigenes sagen willst."
                ],
                alt: "WASUP Premium-Bildschirm mit freiem Texteingabefeld"
            },
            footerPrivacy: "Datenschutzerklärung"
        },
        it: {
            metaTitle: "WASUP - Connessione Immediata",
            metaDescription: "WASUP è l'app definitiva per coppie. Comunicazione ultrarapida direttamente nella schermata iniziale.",
            commonLogoAlt: "Logo di WASUP",
            nav: { features: "Funzionalità", premium: "Premium", privacy: "Privacy", store: "Su Google Play Store" },
            hero: {
                logoAlt: "Logo principale dell'app WASUP",
                badge: "Nuovo su Android",
                title: "Connettiti con la tua persona alla <span class=\"highlight\">velocità della luce</span>.",
                subtitle: "Dimentica le chat tradizionali. WASUP invia piccoli messaggi che compaiono direttamente nella schermata iniziale del telefono del partner tramite un widget nativo.",
                cta: "Disponibile su Google Play Store"
            },
            widget: {
                partnerName: "Rafa ❤️",
                messages: ["\"Sono a casa!\"", "\"Mi manchi\"", "\"Ti amo!\"", "\"Non dimenticare le uova!\""],
                times: ["Proprio adesso", "5 min fa", "2 ore fa", "Ieri"]
            },
            features: {
                tag: "Funzionalità",
                title: "Le schermate dell'app mostrano come WASUP funziona nella vita quotidiana",
                subtitle: "Dalla scelta rapida dei messaggi al widget nella schermata iniziale, tutto è stato pensato per inviare affetto e promemoria in pochi tocchi.",
                cards: [
                    {
                        alt: "Schermata principale di WASUP con categorie e messaggi pronti",
                        title: "💬 Messaggi per Categoria",
                        text: "L'app organizza messaggi pronti in categorie come amore, buongiorno, cura, supporto e messaggi leggeri da inviare senza perdere tempo."
                    },
                    {
                        alt: "Widget di WASUP che mostra un messaggio recente nella schermata iniziale",
                        title: "⚡ Zero Attrito",
                        text: "Il messaggio appare direttamente nella schermata iniziale del partner, senza aprire chat o navigare nei menu."
                    },
                    {
                        alt: "Variazione del widget di WASUP con messaggio in evidenza",
                        title: "✨ In Evidenza Subito",
                        text: "Il widget valorizza il messaggio con lettura rapida e look pulito, ideale per piccoli gesti e promemoria importanti."
                    },
                    {
                        alt: "Widget di WASUP che mostra un altro messaggio inviato",
                        title: "🔒 Privacy al Primo Posto",
                        text: "I messaggi sono protetti con crittografia in transito e crittografia end-to-end per mantenere l'esperienza sicura."
                    }
                ]
            },
            premium: {
                tag: "WASUP Premium",
                title: "Scrivi quello che vuoi",
                text: "Nella versione premium, oltre ai messaggi pronti, sblocchi il campo per scrivere messaggi personalizzati a modo tuo.",
                items: [
                    "Scrivi messaggi liberi direttamente nell'app.",
                    "Mantieni le categorie pronte per un uso immediato.",
                    "Invia messaggi unici quando vuoi uscire dagli schemi."
                ],
                alt: "Schermata WASUP Premium con inserimento di testo libero"
            },
            footerPrivacy: "Informativa sulla Privacy"
        },
        fr: {
            metaTitle: "WASUP - Connexion Instantanée",
            metaDescription: "WASUP est l'application idéale pour les couples. Une communication ultra-rapide directement sur l'écran d'accueil.",
            commonLogoAlt: "Logo WASUP",
            nav: { features: "Fonctionnalités", premium: "Premium", privacy: "Confidentialité", store: "Sur Google Play Store" },
            hero: {
                logoAlt: "Logo principal de l'application WASUP",
                badge: "Nouveau sur Android",
                title: "Connectez-vous à votre moitié à la <span class=\"highlight\">vitesse de la lumière</span>.",
                subtitle: "Oubliez les messageries classiques. WASUP envoie de petits messages qui apparaissent directement sur l'écran d'accueil du téléphone de votre partenaire via un widget natif.",
                cta: "Disponible sur Google Play Store"
            },
            widget: {
                partnerName: "Rafa ❤️",
                messages: ["\"Je suis à la maison !\"", "\"Tu me manques\"", "\"Je t'aime !\"", "\"N'oublie pas les oeufs !\""],
                times: ["À l'instant", "Il y a 5 min", "Il y a 2 h", "Hier"]
            },
            features: {
                tag: "Fonctionnalités",
                title: "Les écrans de l'app montrent comment WASUP s'intègre au quotidien",
                subtitle: "Du choix rapide des messages au widget sur l'écran d'accueil, tout a été pensé pour envoyer de l'affection et des petits mots en quelques gestes.",
                cards: [
                    {
                        alt: "Écran principal de WASUP avec catégories et messages prêts",
                        title: "💬 Messages par Catégorie",
                        text: "L'application organise les messages prêts à envoyer dans des catégories comme amour, bonjour, attention, soutien et messages légers."
                    },
                    {
                        alt: "Widget WASUP affichant un message récent sur l'écran d'accueil",
                        title: "⚡ Zéro Friction",
                        text: "Le message apparaît directement sur l'écran d'accueil de votre partenaire, sans ouvrir de conversation ni parcourir des menus."
                    },
                    {
                        alt: "Variation du widget WASUP avec message mis en avant",
                        title: "✨ Impact Immédiat",
                        text: "Le widget met le message en valeur avec une lecture rapide et un visuel épuré, idéal pour les petits gestes et les rappels importants."
                    },
                    {
                        alt: "Widget WASUP affichant un autre message envoyé",
                        title: "🔒 Confidentialité d'Abord",
                        text: "Les messages sont protégés par le chiffrement en transit et le chiffrement de bout en bout."
                    }
                ]
            },
            premium: {
                tag: "WASUP Premium",
                title: "Écrivez ce que vous voulez",
                text: "Avec la version premium, en plus des messages prêts, vous débloquez un champ pour écrire vos propres messages personnalisés.",
                items: [
                    "Écrivez des messages libres directement dans l'app.",
                    "Gardez les catégories prêtes pour un usage instantané.",
                    "Envoyez des messages uniques quand vous voulez sortir du cadre."
                ],
                alt: "Écran WASUP Premium avec saisie de texte libre"
            },
            footerPrivacy: "Politique de Confidentialité"
        },
        ja: {
            metaTitle: "WASUP - すぐにつながる",
            metaDescription: "WASUP はカップルのためのアプリです。超高速のやり取りをホーム画面からすぐに届けます。",
            commonLogoAlt: "WASUP のロゴ",
            nav: { features: "機能", premium: "プレミアム", privacy: "プライバシー", store: "Google Play で公開中" },
            hero: {
                logoAlt: "WASUP アプリのメインロゴ",
                badge: "Android に新登場",
                title: "<span class=\"highlight\">光の速さ</span>で大切な人とつながろう。",
                subtitle: "普通のチャットアプリはもう不要。WASUP はネイティブウィジェットを通じて、短いメッセージを相手のホーム画面に直接表示します。",
                cta: "Google Play で利用可能"
            },
            widget: {
                partnerName: "Rafa ❤️",
                messages: ["「家に着いたよ！」", "「会いたいな」", "「愛してる！」", "「卵を忘れないで！」"],
                times: ["たった今", "5分前", "2時間前", "昨日"]
            },
            features: {
                tag: "機能",
                title: "WASUP が毎日の中でどう使えるかをアプリ画面で紹介します",
                subtitle: "メッセージ選択からホーム画面ウィジェットまで、やさしさやちょっとした伝言を数タップで送れるように設計されています。",
                cards: [
                    {
                        alt: "カテゴリと定型メッセージが表示された WASUP のメイン画面",
                        title: "💬 カテゴリ別メッセージ",
                        text: "愛情、おはよう、気づかい、応援、軽いひとことなど、すぐ送れるメッセージをカテゴリごとに整理しています。"
                    },
                    {
                        alt: "ホーム画面に最近のメッセージを表示する WASUP ウィジェット",
                        title: "⚡ 迷わずすぐ届く",
                        text: "メッセージは相手のホーム画面にそのまま表示されるので、チャットを開いたりメニューを探したりする必要がありません。"
                    },
                    {
                        alt: "強調表示されたメッセージを見せる WASUP ウィジェットのバリエーション",
                        title: "✨ ひと目で伝わる",
                        text: "読みやすくすっきりしたデザインで、ちょっとした気持ちや大事なリマインダーをすぐに伝えられます。"
                    },
                    {
                        alt: "別の送信メッセージを表示する WASUP ウィジェット",
                        title: "🔒 プライバシーを最優先",
                        text: "メッセージは通信中の暗号化とエンドツーエンド暗号化で保護され、安全な体験を保ちます。"
                    }
                ]
            },
            premium: {
                tag: "WASUP Premium",
                title: "好きな言葉をそのまま送れる",
                text: "プレミアム版では、定型メッセージに加えて、自分の言葉で自由にメッセージを書ける入力欄が使えます。",
                items: [
                    "自由入力のメッセージをアプリから直接送信。",
                    "定型カテゴリもそのまま素早く使える。",
                    "型にはまらないひとことを送りたい時にぴったり。"
                ],
                alt: "自由入力欄を備えた WASUP Premium の画面"
            },
            footerPrivacy: "プライバシーポリシー"
        },
        zh: {
            metaTitle: "WASUP - 即刻连接",
            metaDescription: "WASUP 是情侣专属应用。超快沟通，直接显示在主屏幕上。",
            commonLogoAlt: "WASUP 标志",
            nav: { features: "功能", premium: "高级版", privacy: "隐私", store: "Google Play 上架中" },
            hero: {
                logoAlt: "WASUP 应用主标志",
                badge: "Android 新上线",
                title: "以<span class=\"highlight\">光速</span>与你的另一半保持连接。",
                subtitle: "不用再依赖传统聊天应用。WASUP 通过原生小组件，把简短留言直接显示在对方手机的主屏幕上。",
                cta: "现已登陆 Google Play"
            },
            widget: {
                partnerName: "Rafa ❤️",
                messages: ["“我到家啦！”", "“我想你了”", "“我爱你！”", "“别忘了买鸡蛋！”"],
                times: ["刚刚", "5 分钟前", "2 小时前", "昨天"]
            },
            features: {
                tag: "功能",
                title: "通过应用界面了解 WASUP 如何融入日常",
                subtitle: "从快速选择消息到主屏小组件，一切都为用最少操作发送关心和提醒而设计。",
                cards: [
                    {
                        alt: "WASUP 主界面，包含分类和预设消息",
                        title: "💬 分类消息",
                        text: "应用将预设留言按爱情、早安、关心、支持和轻松问候等分类整理，方便快速发送。"
                    },
                    {
                        alt: "WASUP 小组件在主屏显示最近消息",
                        title: "⚡ 零阻力沟通",
                        text: "留言会直接出现在对方的主屏幕上，无需打开聊天窗口或层层进入菜单。"
                    },
                    {
                        alt: "WASUP 小组件高亮展示消息的变体",
                        title: "✨ 立刻看见",
                        text: "小组件用清晰醒目的方式展示消息，非常适合表达小心意和重要提醒。"
                    },
                    {
                        alt: "WASUP 小组件显示另一条已发送消息",
                        title: "🔒 隐私优先",
                        text: "消息通过传输加密和端到端加密进行保护，保证体验安全可靠。"
                    }
                ]
            },
            premium: {
                tag: "WASUP Premium",
                title: "想写什么就写什么",
                text: "高级版除了预设消息外，还会解锁自由输入框，让你按自己的方式写下专属留言。",
                items: [
                    "直接在应用中输入自由内容。",
                    "预设分类依然保留，方便即时发送。",
                    "想跳出模板时，可以发送独一无二的留言。"
                ],
                alt: "WASUP Premium 自由文本输入界面"
            },
            footerPrivacy: "隐私政策"
        }
    };

    function privacySection(meta, title, paragraphs, bullets, highlight, contact) {
        return { meta, title, paragraphs, bullets, highlight, contact };
    }

    const PRIVACY = {
        pt: {
            metaTitle: "Política de Privacidade - WASUP",
            metaDescription: "Política de Privacidade do WASUP com informações sobre coleta, uso, segurança, retenção e exclusão de dados.",
            commonLogoAlt: "Logo do WASUP",
            nav: { home: "Início", privacy: "Privacidade" },
            hero: {
                back: "← Voltar para a página inicial",
                eyebrow: "Privacidade e Data Safety",
                title: "Política de Privacidade do WASUP",
                intro: "Esta página descreve como o WASUP coleta, usa, armazena, protege e exclui dados pessoais e técnicos. O texto foi atualizado com base no funcionamento atual do aplicativo, incluindo autenticação com Firebase, Firestore, notificações com FCM, widget Android, validação de compras premium em backend e distribuição pela Google Play Store.",
                updatedLabel: "Última atualização",
                updatedValue: "19/04/2026",
                ownerLabel: "Responsável",
                ownerValue: "Rafael Botossi",
                contactLabel: "Contato",
                availabilityLabel: "Disponibilidade",
                availabilityValue: "Disponível na Google Play Store"
            },
            sidebarTitle: "Nesta página",
            sidebar: [
                ["resumo", "Resumo rápido"],
                ["quem-somos", "1. Quem somos"],
                ["dados", "2. Dados tratados"],
                ["uso", "3. Uso dos dados"],
                ["armazenamento", "4. Armazenamento"],
                ["seguranca", "5. Segurança e criptografia"],
                ["local", "6. Dados locais no dispositivo"],
                ["widget", "7. Widget"],
                ["compras", "8. Compras e premium"],
                ["terceiros", "9. Compartilhamento"],
                ["retencao", "10. Retenção"],
                ["exclusao", "11. Exclusão de conta"],
                ["acesso", "12. Segurança e acesso"],
                ["bases-legais", "13. Bases legais"],
                ["permissoes", "14. Permissões"],
                ["infantil", "15. Privacidade infantil"],
                ["alteracoes", "16. Alterações"],
                ["contato", "17. Contato"]
            ],
            summary: [
                {
                    label: "Coleta essencial",
                    title: "Apenas o necessário para conta, pareamento, mensagens e premium.",
                    text: "O app trata dados de autenticação, identificadores técnicos, mensagens criptografadas, notificações, estado do widget e metadados técnicos de compra."
                },
                {
                    label: "Segurança",
                    title: "Mensagens e estado compartilhado usam criptografia ponta a ponta.",
                    text: "O fluxo atual usa ECDH, HKDF SHA-256 e AES/GCM, com chave privada protegida no AndroidKeyStore."
                },
                {
                    label: "Terceiros",
                    title: "Firebase e Google Play atuam como infraestrutura operacional.",
                    text: "O WASUP não vende dados pessoais e não armazena diretamente dados financeiros sensíveis."
                },
                {
                    label: "Controle do usuário",
                    title: "O app possui fluxo interno para exclusão de conta e limpeza associada.",
                    text: "Quando acionado, o sistema busca remover conta, pareamento, cache local e registros operacionais vinculados, preservando apenas o que for tecnicamente necessário para segurança, auditoria ou obrigações legais."
                }
            ],
            sections: [
                privacySection("1. Quem somos", "Responsável pelo app", ["Desenvolvedor responsável: Rafael Botossi.", "E-mail para contato: <a href=\"mailto:rafabotossi@gmail.com\" style=\"color: #ffd07a; text-decoration: none;\">rafabotossi@gmail.com</a>."], null, null, null),
                privacySection("2. Quais dados o app coleta e trata", "Dados necessários para o funcionamento do WASUP", ["O WASUP trata apenas os dados necessários para criação de conta, pareamento entre usuários, envio de mensagens curtas, exibição de estado no app e widget, e liberação de recursos premium."], [
                    "E-mail e senha para criação da conta, login e recuperação de acesso via Firebase Authentication.",
                    "Identificador técnico da conta gerado pelo Firebase Authentication.",
                    "Nome exibido configurado pelo próprio usuário dentro do app.",
                    "Código de pareamento para conectar duas pessoas no app.",
                    "Identificadores de pareamento, como <code>pairId</code>, <code>pairedUserId</code>, códigos dos membros e solicitações de pareamento.",
                    "Chave pública de criptografia ponta a ponta.",
                    "Token do Firebase Cloud Messaging para notificações e atualização do widget.",
                    "Conteúdo de mensagens e último estado exibido entre o par, armazenados remotamente em formato criptografado.",
                    "Dados locais do widget, como nome do par, última mensagem, remetente e data da última atualização.",
                    "Status premium por meio do indicador técnico <code>isPremiumUser</code>.",
                    "Dados técnicos de compra consultados junto ao Google Play para confirmar aquisições premium, como <code>productId</code>, <code>purchaseToken</code>, hash técnico do token, <code>orderId</code>, estado da compra, estado de acknowledgement e carimbo de verificação."
                ]),
                privacySection("3. Como os dados são usados", "Finalidades do tratamento", null, [
                    "Autenticar o usuário e manter a sessão ativa.",
                    "Permitir recuperação de acesso por e-mail.",
                    "Gerar e manter o perfil do usuário no app.",
                    "Permitir envio, recebimento e exibição de mensagens curtas entre pessoas pareadas.",
                    "Viabilizar pedidos de pareamento e manutenção do vínculo entre usuários.",
                    "Enviar notificações push e atualizar o widget da tela principal.",
                    "Mostrar conteúdo recente no widget quando o usuário optar por adicioná-lo.",
                    "Identificar e habilitar recursos premium adquiridos pelo Google Play Billing.",
                    "Validar compras premium com apoio de backend autenticado e da Google Play Developer API.",
                    "Manter a operação técnica e a segurança do serviço."
                ]),
                privacySection("4. Como os dados são armazenados", "Infraestrutura utilizada pelo app", null, [
                    "Firebase Authentication para login por e-mail e senha.",
                    "Cloud Firestore para perfil, pareamento, pedidos de conexão, estado atual e mensagens.",
                    "Firebase Cloud Messaging para notificações e entrega de eventos técnicos de mensagens.",
                    "Android DataStore local para cache do widget.",
                    "Google Play Billing para consulta, processamento e confirmação de compras.",
                    "Firebase Cloud Functions para validação autenticada de compras premium e atualização segura do status premium no Firestore.",
                    "Google Play Developer API para validação de compras premium pelo backend.",
                    "Componentes do Android e do Google Play necessários para disponibilização do produto na Google Play Store e para funcionamento do app."
                ], {
                    title: "Configuração adicional de segurança",
                    text: "O aplicativo foi configurado com <code>usesCleartextTraffic=false</code>, não foi projetado para trafegar dados em HTTP inseguro, e também possui <code>allowBackup=false</code> com extração de dados desabilitada no manifesto atual."
                }),
                privacySection("5. Como os dados são protegidos", "Criptografia e proteção técnica", ["O WASUP usa criptografia ponta a ponta para proteger o conteúdo principal trocado entre usuários pareados."], [
                    "Cada dispositivo gera e mantém sua própria chave criptográfica no AndroidKeyStore.",
                    "A troca de segredo usa ECDH na curva <code>secp256r1</code>.",
                    "A derivação de chave usa HKDF com SHA-256.",
                    "A cifragem do conteúdo usa <code>AES/GCM/NoPadding</code> com chave de 256 bits.",
                    "O app armazena remotamente o conteúdo cifrado e o vetor IV correspondente.",
                    "A chave privada permanece no dispositivo, protegida pelo AndroidKeyStore."
                ], {
                    title: "Em termos práticos",
                    text: "As mensagens e o estado compartilhado são tratados em formato criptografado antes de serem salvos remotamente."
                }),
                privacySection("6. Dados armazenados localmente", "Cache local no dispositivo", ["Para melhorar a experiência do usuário e permitir exibição rápida do widget, o app pode manter localmente:"], [
                    "Identificador do pareamento.",
                    "Nome exibido do par.",
                    "Última mensagem exibida.",
                    "Identificador e código do último remetente.",
                    "Horário da última atualização."
                ], null),
                privacySection("7. Widget na tela principal", "Uso opcional do widget", [
                    "O app possui um botão para solicitar ao sistema Android a adição do widget na tela principal. Se o usuário optar por esse recurso, parte do estado recente do relacionamento ou da mensagem pode ser mantida localmente no aparelho para exibição rápida.",
                    "Esse recurso depende de confirmação do próprio usuário na interface do sistema Android."
                ]),
                privacySection("8. Compras, Google Play Billing, backend de validação e premium", "Recursos pagos e confirmação de compra", ["O WASUP possui integração com Google Play Billing para produtos premium. Quando o usuário inicia uma compra:"], [
                    "O fluxo de pagamento ocorre pelo ecossistema do Google Play.",
                    "O app consulta detalhes do produto e compras existentes pela API de billing.",
                    "O app pode receber e usar o token ou estado técnico da compra para iniciar a validação da aquisição.",
                    "O app envia ao backend autenticado apenas os identificadores técnicos necessários para validação da compra, como <code>productId</code> e <code>purchaseToken</code>.",
                    "O backend consulta a Google Play Developer API para verificar se a compra existe, se pertence ao produto premium esperado e se está concluída.",
                    "Uma vez confirmada a compra, o backend pode marcar o usuário como premium por meio do campo técnico <code>isPremiumUser</code>.",
                    "O backend também pode registrar metadados técnicos da verificação da compra, incluindo hash do token, <code>orderId</code>, horário da verificação e estado técnico retornado pela Google Play."
                ]),
                privacySection("9. Compartilhamento de dados com terceiros", "Compartilhamento limitado à operação do serviço", [
                    "O app não vende dados pessoais.",
                    "Os dados podem ser tratados por terceiros que atuam como operadores ou processadores, estritamente na medida necessária para viabilizar a operação técnica do serviço, incluindo:"
                ], [
                    "Google Firebase Authentication.",
                    "Cloud Firestore.",
                    "Firebase Cloud Messaging.",
                    "Google Play Billing e Google Play.",
                    "Firebase Cloud Functions.",
                    "Google Play Developer API.",
                    "Infraestrutura Google e Google Cloud relacionada ao funcionamento desses serviços."
                ]),
                privacySection("10. Retenção dos dados", "Por quanto tempo os dados podem permanecer", ["Os dados são mantidos enquanto forem necessários para operação da conta e do serviço, ou até a exclusão da conta pelo usuário, observado o comportamento técnico atual do app."], [
                    "O perfil do usuário pode ser removido do Firestore.",
                    "A conta autenticada pode ser removida do Firebase Authentication.",
                    "O pareamento ativo pode ser desativado e removido.",
                    "O cache local do widget pode ser apagado.",
                    "Pedidos de pareamento podem ser removidos.",
                    "Códigos de pareamento vinculados ao usuário podem ser removidos.",
                    "O estado compartilhado do par e o histórico remoto de mensagens podem ser removidos.",
                    "Os registros técnicos de validação de compra premium vinculados à conta podem permanecer pelo período necessário para segurança, prevenção a fraude, auditoria técnica, cumprimento de obrigações legais ou defesa do serviço.",
                    "O vínculo de pareamento do outro membro remanescente pode ser limpo automaticamente."
                ]),
                privacySection("11. Exclusão de conta e apagamento", "Fluxo de exclusão dentro do app", ["O app possui um botão interno de \"Excluir conta\". Quando o usuário usa esse recurso, o fluxo atual busca:"], [
                    "Desativar o pareamento ativo, quando existir.",
                    "Excluir o documento principal do usuário no Firestore.",
                    "Acionar limpeza complementar no backend para remover código de pareamento, pedidos pendentes, mensagens, estado do par e documentos associados.",
                    "Limpar o vínculo de pareamento do outro usuário remanescente, quando aplicável.",
                    "Excluir a conta autenticada no Firebase Authentication.",
                    "Encerrar a sessão.",
                    "Apagar o cache local do widget e atualizar o widget para limpar a exibição."
                ], {
                    title: "Importante",
                    text: "Esse processo é irreversível do ponto de vista da conta do usuário e foi projetado para apagar a conta e os principais registros associados ao uso do app."
                }),
                privacySection("12. Segurança, acesso e anti-fraude", "Restrições de leitura, escrita e validação", [
                    "As regras do Firestore foram configuradas para restringir leitura e escrita, exigindo autenticação e validações específicas para perfis, pareamentos, pedidos de conexão e conteúdo criptografado.",
                    "O campo de status premium também possui proteção por regras para evitar alteração direta indevida pelo cliente.",
                    "No fluxo atual, a liberação do premium depende de validação no backend autenticado. O app não deve conseguir definir diretamente <code>isPremiumUser</code> no Firestore por conta própria.",
                    "O backend também pode usar técnicas de vinculação técnica da compra à conta autenticada e registrar hash do token de compra para ajudar na prevenção de fraude, reuso indevido ou associação incorreta da compra a outra conta."
                ]),
                privacySection("13. Bases legais para tratamento", "LGPD e fundamentos aplicáveis", ["Quando aplicável, o tratamento de dados pessoais no WASUP pode se fundamentar nas seguintes bases legais da LGPD:"], [
                    "Execução de contrato ou de procedimentos preliminares relacionados ao uso do aplicativo.",
                    "Consentimento do usuário, quando necessário para recursos específicos do dispositivo ou operações que dependam de manifestação livre, informada e inequívoca do titular.",
                    "Cumprimento de obrigações legais ou regulatórias, quando aplicável.",
                    "Exercício regular de direitos, proteção da segurança e prevenção a fraudes, quando necessário para proteger o serviço, os usuários e a integridade da plataforma."
                ]),
                privacySection("14. Permissões e recursos do dispositivo", "O que o app usa no aparelho", ["Pelo funcionamento atual, o app usa:"], [
                    "Internet, para autenticação, banco de dados, notificações e recursos online.",
                    "Notificações, incluindo a permissão de notificação do Android quando exigida pelo sistema, para avisos de novas mensagens e atualizações do app.",
                    "Widget de tela principal, somente quando o usuário opta por adicioná-lo."
                ]),
                privacySection("15. Privacidade infantil", "Uso por menores", ["O app não é destinado a menores de 13 anos. O código atual não apresenta recursos voltados especificamente para crianças nem fluxo dedicado para tratamento de dados infantis."]),
                privacySection("16. Alterações desta política", "Atualizações futuras", ["Esta política pode ser atualizada para refletir mudanças no aplicativo, em integrações com o Google Play, em fluxos de exclusão, em mecanismos de pagamento, em segurança ou em obrigações legais e regulatórias."]),
                privacySection("17. Contato", "Fale com o responsável", ["Para dúvidas sobre privacidade, segurança, compras, exclusão de dados ou exercício de direitos relacionados aos seus dados, entre em contato:"], null, null, {
                    name: "Rafael Botossi",
                    email: "rafabotossi@gmail.com"
                })
            ],
            footerPrivacy: "Política de Privacidade"
        }
    };

    ["en", "es", "de", "it", "fr", "ja", "zh"].forEach(function (code) {
        PRIVACY[code] = {
            metaTitle: HOME[code].footerPrivacy + " - WASUP",
            metaDescription: HOME[code].footerPrivacy + " for WASUP with information about data collection, use, security, retention, and deletion.",
            commonLogoAlt: HOME[code].commonLogoAlt,
            nav: {
                home: HOME[code].nav.features ? {
                    en: "Home", es: "Inicio", de: "Start", it: "Home", fr: "Accueil", ja: "ホーム", zh: "首页"
                }[code] : "Home",
                privacy: HOME[code].nav.privacy
            },
            hero: {
                back: {
                    en: "← Back to the home page",
                    es: "← Volver a la página principal",
                    de: "← Zurück zur Startseite",
                    it: "← Torna alla pagina iniziale",
                    fr: "← Retour à la page d'accueil",
                    ja: "← ホームページに戻る",
                    zh: "← 返回首页"
                }[code],
                eyebrow: {
                    en: "Privacy and Data Safety",
                    es: "Privacidad y Seguridad de Datos",
                    de: "Datenschutz und Datensicherheit",
                    it: "Privacy e Sicurezza dei Dati",
                    fr: "Confidentialité et Sécurité des Données",
                    ja: "プライバシーとデータ安全性",
                    zh: "隐私与数据安全"
                }[code],
                title: HOME[code].footerPrivacy + {
                    en: "",
                    es: "",
                    de: "",
                    it: "",
                    fr: "",
                    ja: "",
                    zh: ""
                }[code],
                intro: {
                    en: "This page explains how WASUP collects, uses, stores, protects, and deletes personal and technical data. The text reflects the app's current operation, including Firebase authentication, Firestore, FCM notifications, Android widgets, backend premium purchase validation, and Google Play Store distribution.",
                    es: "Esta página describe cómo WASUP recopila, usa, almacena, protege y elimina datos personales y técnicos. El texto refleja el funcionamiento actual de la app, incluyendo autenticación con Firebase, Firestore, notificaciones con FCM, widget de Android, validación de compras premium en backend y distribución por Google Play Store.",
                    de: "Diese Seite beschreibt, wie WASUP personenbezogene und technische Daten erhebt, nutzt, speichert, schützt und löscht. Der Text basiert auf dem aktuellen Funktionsumfang der App, einschließlich Firebase-Authentifizierung, Firestore, FCM-Benachrichtigungen, Android-Widget, Backend-Validierung von Premium-Käufen und Vertrieb über den Google Play Store.",
                    it: "Questa pagina descrive come WASUP raccoglie, usa, conserva, protegge ed elimina dati personali e tecnici. Il testo riflette il funzionamento attuale dell'app, inclusi autenticazione Firebase, Firestore, notifiche FCM, widget Android, validazione backend degli acquisti premium e distribuzione tramite Google Play Store.",
                    fr: "Cette page explique comment WASUP collecte, utilise, stocke, protège et supprime les données personnelles et techniques. Le texte reflète le fonctionnement actuel de l'application, y compris l'authentification Firebase, Firestore, les notifications FCM, le widget Android, la validation backend des achats premium et la distribution via Google Play Store.",
                    ja: "このページでは、WASUP が個人データと技術データをどのように収集、利用、保存、保護、削除するかを説明します。内容は、Firebase 認証、Firestore、FCM 通知、Android ウィジェット、プレミアム購入のバックエンド検証、Google Play Store 配信を含む現在のアプリ仕様に基づいています。",
                    zh: "本页面说明 WASUP 如何收集、使用、存储、保护和删除个人与技术数据。内容基于应用当前的运行方式，包括 Firebase 身份验证、Firestore、FCM 通知、Android 小组件、高级版购买后端校验以及 Google Play Store 分发。"
                }[code],
                updatedLabel: {
                    en: "Last updated", es: "Última actualización", de: "Letzte Aktualisierung", it: "Ultimo aggiornamento", fr: "Dernière mise à jour", ja: "最終更新", zh: "最后更新"
                }[code],
                updatedValue: "2026-04-19",
                ownerLabel: {
                    en: "Owner", es: "Responsable", de: "Verantwortlich", it: "Responsabile", fr: "Responsable", ja: "責任者", zh: "负责人"
                }[code],
                ownerValue: "Rafael Botossi",
                contactLabel: {
                    en: "Contact", es: "Contacto", de: "Kontakt", it: "Contatto", fr: "Contact", ja: "連絡先", zh: "联系方式"
                }[code],
                availabilityLabel: {
                    en: "Availability", es: "Disponibilidad", de: "Verfügbarkeit", it: "Disponibilità", fr: "Disponibilité", ja: "提供状況", zh: "可用性"
                }[code],
                availabilityValue: {
                    en: "Available on Google Play Store",
                    es: "Disponible en Google Play Store",
                    de: "Im Google Play Store verfügbar",
                    it: "Disponibile su Google Play Store",
                    fr: "Disponible sur Google Play Store",
                    ja: "Google Play で利用可能",
                    zh: "可在 Google Play 获取"
                }[code]
            },
            sidebarTitle: {
                en: "On this page", es: "En esta página", de: "Auf dieser Seite", it: "In questa pagina", fr: "Dans cette page", ja: "このページについて", zh: "本页内容"
            }[code],
            sidebar: [
                ["resumo", { en: "Quick summary", es: "Resumen rápido", de: "Kurzübersicht", it: "Riepilogo rapido", fr: "Résumé rapide", ja: "概要", zh: "快速摘要" }[code]],
                ["quem-somos", { en: "1. Who we are", es: "1. Quiénes somos", de: "1. Wer wir sind", it: "1. Chi siamo", fr: "1. Qui nous sommes", ja: "1. 私たちについて", zh: "1. 我们是谁" }[code]],
                ["dados", { en: "2. Data processed", es: "2. Datos tratados", de: "2. Verarbeitete Daten", it: "2. Dati trattati", fr: "2. Données traitées", ja: "2. 処理するデータ", zh: "2. 处理的数据" }[code]],
                ["uso", { en: "3. Data use", es: "3. Uso de los datos", de: "3. Datennutzung", it: "3. Uso dei dati", fr: "3. Utilisation des données", ja: "3. データの利用", zh: "3. 数据用途" }[code]],
                ["armazenamento", { en: "4. Storage", es: "4. Almacenamiento", de: "4. Speicherung", it: "4. Conservazione", fr: "4. Stockage", ja: "4. 保存方法", zh: "4. 存储方式" }[code]],
                ["seguranca", { en: "5. Security and encryption", es: "5. Seguridad y cifrado", de: "5. Sicherheit und Verschlüsselung", it: "5. Sicurezza e crittografia", fr: "5. Sécurité et chiffrement", ja: "5. セキュリティと暗号化", zh: "5. 安全与加密" }[code]],
                ["local", { en: "6. Local device data", es: "6. Datos locales del dispositivo", de: "6. Lokale Gerätedaten", it: "6. Dati locali sul dispositivo", fr: "6. Données locales sur l'appareil", ja: "6. 端末内データ", zh: "6. 设备本地数据" }[code]],
                ["widget", { en: "7. Widget", es: "7. Widget", de: "7. Widget", it: "7. Widget", fr: "7. Widget", ja: "7. ウィジェット", zh: "7. 小组件" }[code]],
                ["compras", { en: "8. Purchases and premium", es: "8. Compras y premium", de: "8. Käufe und Premium", it: "8. Acquisti e premium", fr: "8. Achats et premium", ja: "8. 購入とプレミアム", zh: "8. 购买与高级版" }[code]],
                ["terceiros", { en: "9. Sharing", es: "9. Compartición", de: "9. Weitergabe", it: "9. Condivisione", fr: "9. Partage", ja: "9. 共有", zh: "9. 数据共享" }[code]],
                ["retencao", { en: "10. Retention", es: "10. Retención", de: "10. Aufbewahrung", it: "10. Conservazione", fr: "10. Conservation", ja: "10. 保持期間", zh: "10. 保留期限" }[code]],
                ["exclusao", { en: "11. Account deletion", es: "11. Eliminación de cuenta", de: "11. Kontolöschung", it: "11. Eliminazione dell'account", fr: "11. Suppression du compte", ja: "11. アカウント削除", zh: "11. 账户删除" }[code]],
                ["acesso", { en: "12. Security and access", es: "12. Seguridad y acceso", de: "12. Sicherheit und Zugriff", it: "12. Sicurezza e accesso", fr: "12. Sécurité et accès", ja: "12. セキュリティとアクセス", zh: "12. 安全与访问" }[code]],
                ["bases-legais", { en: "13. Legal bases", es: "13. Bases legales", de: "13. Rechtsgrundlagen", it: "13. Basi giuridiche", fr: "13. Bases légales", ja: "13. 法的根拠", zh: "13. 法律依据" }[code]],
                ["permissoes", { en: "14. Permissions", es: "14. Permisos", de: "14. Berechtigungen", it: "14. Permessi", fr: "14. Autorisations", ja: "14. 権限", zh: "14. 权限" }[code]],
                ["infantil", { en: "15. Children's privacy", es: "15. Privacidad infantil", de: "15. Datenschutz für Kinder", it: "15. Privacy dei minori", fr: "15. Confidentialité des enfants", ja: "15. 子どものプライバシー", zh: "15. 儿童隐私" }[code]],
                ["alteracoes", { en: "16. Changes", es: "16. Cambios", de: "16. Änderungen", it: "16. Modifiche", fr: "16. Modifications", ja: "16. 変更", zh: "16. 政策变更" }[code]],
                ["contato", { en: "17. Contact", es: "17. Contacto", de: "17. Kontakt", it: "17. Contatto", fr: "17. Contact", ja: "17. お問い合わせ", zh: "17. 联系方式" }[code]]
            ],
            summary: [
                {
                    label: { en: "Essential collection", es: "Recopilación esencial", de: "Wesentliche Datenerhebung", it: "Raccolta essenziale", fr: "Collecte essentielle", ja: "必要最小限の収集", zh: "必要数据收集" }[code],
                    title: { en: "Only what is needed for accounts, pairing, messages, and premium.", es: "Solo lo necesario para cuentas, vinculación, mensajes y premium.", de: "Nur das Nötige für Konto, Verknüpfung, Nachrichten und Premium.", it: "Solo ciò che serve per account, abbinamento, messaggi e premium.", fr: "Uniquement le nécessaire pour le compte, l'appairage, les messages et le premium.", ja: "アカウント、ペアリング、メッセージ、プレミアムに必要な範囲のみ。", zh: "仅收集账户、配对、消息和高级功能所需的数据。" }[code],
                    text: { en: "The app handles authentication data, technical identifiers, encrypted messages, notifications, widget state, and technical purchase metadata.", es: "La app trata datos de autenticación, identificadores técnicos, mensajes cifrados, notificaciones, estado del widget y metadatos técnicos de compra.", de: "Die App verarbeitet Authentifizierungsdaten, technische Kennungen, verschlüsselte Nachrichten, Benachrichtigungen, Widget-Status und technische Kauf-Metadaten.", it: "L'app tratta dati di autenticazione, identificatori tecnici, messaggi crittografati, notifiche, stato del widget e metadati tecnici di acquisto.", fr: "L'application traite les données d'authentification, les identifiants techniques, les messages chiffrés, les notifications, l'état du widget et les métadonnées techniques d'achat.", ja: "アプリは認証情報、技術識別子、暗号化メッセージ、通知、ウィジェット状態、購入に関する技術メタデータを扱います。", zh: "应用会处理身份验证数据、技术标识符、加密消息、通知、小组件状态以及购买相关技术元数据。" }[code]
                },
                {
                    label: { en: "Security", es: "Seguridad", de: "Sicherheit", it: "Sicurezza", fr: "Sécurité", ja: "セキュリティ", zh: "安全" }[code],
                    title: { en: "Messages and shared state use end-to-end encryption.", es: "Los mensajes y el estado compartido usan cifrado de extremo a extremo.", de: "Nachrichten und gemeinsamer Status nutzen Ende-zu-Ende-Verschlüsselung.", it: "Messaggi e stato condiviso usano crittografia end-to-end.", fr: "Les messages et l'état partagé utilisent un chiffrement de bout en bout.", ja: "メッセージと共有状態にはエンドツーエンド暗号化を使用。", zh: "消息和共享状态采用端到端加密。" }[code],
                    text: { en: "The current flow uses ECDH, HKDF SHA-256, and AES/GCM, with the private key protected by AndroidKeyStore.", es: "El flujo actual usa ECDH, HKDF SHA-256 y AES/GCM, con la clave privada protegida por AndroidKeyStore.", de: "Der aktuelle Ablauf nutzt ECDH, HKDF SHA-256 und AES/GCM; der private Schlüssel wird im AndroidKeyStore geschützt.", it: "Il flusso attuale usa ECDH, HKDF SHA-256 e AES/GCM, con chiave privata protetta da AndroidKeyStore.", fr: "Le flux actuel utilise ECDH, HKDF SHA-256 et AES/GCM, avec une clé privée protégée dans AndroidKeyStore.", ja: "現在の仕組みでは ECDH、HKDF SHA-256、AES/GCM を使用し、秘密鍵は AndroidKeyStore で保護されます。", zh: "当前流程使用 ECDH、HKDF SHA-256 和 AES/GCM，私钥由 AndroidKeyStore 保护。" }[code]
                },
                {
                    label: { en: "Third parties", es: "Terceros", de: "Drittparteien", it: "Terze parti", fr: "Tiers", ja: "第三者", zh: "第三方" }[code],
                    title: { en: "Firebase and Google Play act as operational infrastructure.", es: "Firebase y Google Play actúan como infraestructura operativa.", de: "Firebase und Google Play dienen als Betriebsinfrastruktur.", it: "Firebase e Google Play fungono da infrastruttura operativa.", fr: "Firebase et Google Play servent d'infrastructure opérationnelle.", ja: "Firebase と Google Play は運用インフラとして利用されます。", zh: "Firebase 和 Google Play 作为运营基础设施使用。" }[code],
                    text: { en: "WASUP does not sell personal data and does not directly store sensitive financial data.", es: "WASUP no vende datos personales ni almacena directamente datos financieros sensibles.", de: "WASUP verkauft keine personenbezogenen Daten und speichert keine sensiblen Finanzdaten direkt.", it: "WASUP non vende dati personali e non archivia direttamente dati finanziari sensibili.", fr: "WASUP ne vend pas de données personnelles et ne stocke pas directement de données financières sensibles.", ja: "WASUP は個人データを販売せず、機微な金融データを直接保存しません。", zh: "WASUP 不出售个人数据，也不会直接存储敏感金融信息。" }[code]
                },
                {
                    label: { en: "User control", es: "Control del usuario", de: "Nutzerkontrolle", it: "Controllo dell'utente", fr: "Contrôle utilisateur", ja: "ユーザー管理", zh: "用户控制" }[code],
                    title: { en: "The app includes an internal account deletion and cleanup flow.", es: "La app incluye un flujo interno de eliminación y limpieza de cuenta.", de: "Die App enthält einen internen Ablauf zur Kontolöschung und Bereinigung.", it: "L'app include un flusso interno di eliminazione account e pulizia dati.", fr: "L'application inclut un flux interne de suppression de compte et de nettoyage.", ja: "アプリにはアカウント削除と関連データ整理の内部フローがあります。", zh: "应用内提供账户删除和关联清理流程。" }[code],
                    text: { en: "When triggered, the system attempts to remove the account, pairing, local cache, and linked operational records, keeping only what is technically required for security, audits, or legal obligations.", es: "Cuando se activa, el sistema intenta eliminar la cuenta, la vinculación, la caché local y los registros operativos vinculados, conservando solo lo técnicamente necesario para seguridad, auditoría u obligaciones legales.", de: "Wenn der Vorgang ausgelöst wird, versucht das System, Konto, Verknüpfung, lokalen Cache und verknüpfte Betriebsdaten zu entfernen und nur technisch Erforderliches für Sicherheit, Audits oder gesetzliche Pflichten zu behalten.", it: "Quando attivato, il sistema tenta di rimuovere account, abbinamento, cache locale e registri operativi collegati, mantenendo solo quanto tecnicamente necessario per sicurezza, audit o obblighi legali.", fr: "Lorsqu'il est lancé, le système tente de supprimer le compte, l'appairage, le cache local et les enregistrements opérationnels liés, en conservant uniquement ce qui est techniquement nécessaire pour la sécurité, l'audit ou les obligations légales.", ja: "実行されると、システムはアカウント、ペアリング、ローカルキャッシュ、関連する運用記録の削除を試み、セキュリティ、監査、法的義務に必要なものだけを残します。", zh: "当用户触发删除时，系统会尝试移除账户、配对关系、本地缓存和相关运营记录，仅保留出于安全、审计或法律义务必须保留的内容。" }[code]
                }
            ],
            sections: PRIVACY.pt.sections.map(function (section, index) {
                const titles = [
                    { en: "App controller", es: "Responsable de la app", de: "Verantwortlich für die App", it: "Responsabile dell'app", fr: "Responsable de l'application", ja: "アプリの管理者", zh: "应用负责人" },
                    { en: "Data needed for WASUP to operate", es: "Datos necesarios para el funcionamiento de WASUP", de: "Für den Betrieb von WASUP erforderliche Daten", it: "Dati necessari al funzionamento di WASUP", fr: "Données nécessaires au fonctionnement de WASUP", ja: "WASUP の動作に必要なデータ", zh: "WASUP 运行所需数据" },
                    { en: "Purpose of data processing", es: "Finalidades del tratamiento", de: "Zwecke der Verarbeitung", it: "Finalità del trattamento", fr: "Finalités du traitement", ja: "データ利用の目的", zh: "数据处理目的" },
                    { en: "Infrastructure used by the app", es: "Infraestructura utilizada por la app", de: "Von der App verwendete Infrastruktur", it: "Infrastruttura utilizzata dall'app", fr: "Infrastructure utilisée par l'application", ja: "アプリで使用するインフラ", zh: "应用使用的基础设施" },
                    { en: "Encryption and technical protection", es: "Cifrado y protección técnica", de: "Verschlüsselung und technischer Schutz", it: "Crittografia e protezione tecnica", fr: "Chiffrement et protection technique", ja: "暗号化と技術的保護", zh: "加密与技术保护" },
                    { en: "Local cache on the device", es: "Caché local en el dispositivo", de: "Lokaler Cache auf dem Gerät", it: "Cache locale sul dispositivo", fr: "Cache local sur l'appareil", ja: "端末上のローカルキャッシュ", zh: "设备本地缓存" },
                    { en: "Optional widget usage", es: "Uso opcional del widget", de: "Optionale Nutzung des Widgets", it: "Uso opzionale del widget", fr: "Utilisation optionnelle du widget", ja: "任意利用のウィジェット", zh: "可选小组件功能" },
                    { en: "Paid features and purchase confirmation", es: "Funciones de pago y confirmación de compra", de: "Bezahlfunktionen und Kaufbestätigung", it: "Funzioni a pagamento e conferma dell'acquisto", fr: "Fonctionnalités payantes et confirmation d'achat", ja: "有料機能と購入確認", zh: "付费功能与购买确认" },
                    { en: "Sharing limited to service operation", es: "Compartición limitada a la operación del servicio", de: "Weitergabe nur für den Betrieb des Dienstes", it: "Condivisione limitata al funzionamento del servizio", fr: "Partage limité au fonctionnement du service", ja: "サービス運用に限定した共有", zh: "仅限服务运行所需的数据共享" },
                    { en: "How long data may be retained", es: "Cuánto tiempo pueden conservarse los datos", de: "Wie lange Daten aufbewahrt werden können", it: "Per quanto tempo i dati possono essere conservati", fr: "Durée de conservation des données", ja: "データ保持期間", zh: "数据可保留多久" },
                    { en: "Deletion flow inside the app", es: "Flujo de eliminación dentro de la app", de: "Löschablauf innerhalb der App", it: "Flusso di eliminazione nell'app", fr: "Processus de suppression dans l'application", ja: "アプリ内の削除フロー", zh: "应用内删除流程" },
                    { en: "Read, write, and validation restrictions", es: "Restricciones de lectura, escritura y validación", de: "Lese-, Schreib- und Validierungsbeschränkungen", it: "Restrizioni di lettura, scrittura e validazione", fr: "Restrictions de lecture, d'écriture et de validation", ja: "読み取り・書き込み・検証の制限", zh: "读取、写入与校验限制" },
                    { en: "Applicable legal bases", es: "Bases legales aplicables", de: "Anwendbare Rechtsgrundlagen", it: "Basi giuridiche applicabili", fr: "Bases légales applicables", ja: "適用される法的根拠", zh: "适用法律依据" },
                    { en: "What the app uses on the device", es: "Qué usa la app en el dispositivo", de: "Was die App auf dem Gerät nutzt", it: "Cosa usa l'app sul dispositivo", fr: "Ce que l'application utilise sur l'appareil", ja: "端末上でアプリが使用するもの", zh: "应用在设备上使用的能力" },
                    { en: "Use by minors", es: "Uso por menores", de: "Nutzung durch Minderjährige", it: "Uso da parte di minori", fr: "Utilisation par des mineurs", ja: "未成年者による利用", zh: "未成年人使用" },
                    { en: "Future updates", es: "Actualizaciones futuras", de: "Künftige Aktualisierungen", it: "Aggiornamenti futuri", fr: "Mises à jour futures", ja: "今後の更新", zh: "未来更新" },
                    { en: "Contact the responsible person", es: "Habla con el responsable", de: "Kontakt zur verantwortlichen Person", it: "Contatta il responsabile", fr: "Contacter le responsable", ja: "担当者への連絡", zh: "联系负责人" }
                ];

                const metas = {
                    en: ["1. Who we are", "2. What data the app collects and processes", "3. How data is used", "4. How data is stored", "5. How data is protected", "6. Data stored locally", "7. Home screen widget", "8. Purchases, Google Play Billing, validation backend, and premium", "9. Sharing data with third parties", "10. Data retention", "11. Account deletion and erasure", "12. Security, access, and anti-fraud", "13. Legal bases for processing", "14. Device permissions and features", "15. Children's privacy", "16. Changes to this policy", "17. Contact"],
                    es: ["1. Quiénes somos", "2. Qué datos recopila y trata la app", "3. Cómo se usan los datos", "4. Cómo se almacenan los datos", "5. Cómo se protegen los datos", "6. Datos almacenados localmente", "7. Widget en la pantalla principal", "8. Compras, Google Play Billing, backend de validación y premium", "9. Compartición de datos con terceros", "10. Retención de datos", "11. Eliminación de cuenta y borrado", "12. Seguridad, acceso y antifraude", "13. Bases legales del tratamiento", "14. Permisos y funciones del dispositivo", "15. Privacidad infantil", "16. Cambios en esta política", "17. Contacto"],
                    de: ["1. Wer wir sind", "2. Welche Daten die App erhebt und verarbeitet", "3. Wie Daten verwendet werden", "4. Wie Daten gespeichert werden", "5. Wie Daten geschützt werden", "6. Lokal gespeicherte Daten", "7. Widget auf dem Homescreen", "8. Käufe, Google Play Billing, Validierungs-Backend und Premium", "9. Datenweitergabe an Dritte", "10. Datenaufbewahrung", "11. Kontolöschung und Datenlöschung", "12. Sicherheit, Zugriff und Betrugsschutz", "13. Rechtsgrundlagen der Verarbeitung", "14. Geräteberechtigungen und Funktionen", "15. Datenschutz für Kinder", "16. Änderungen dieser Richtlinie", "17. Kontakt"],
                    it: ["1. Chi siamo", "2. Quali dati raccoglie e tratta l'app", "3. Come vengono usati i dati", "4. Come i dati vengono conservati", "5. Come i dati sono protetti", "6. Dati memorizzati localmente", "7. Widget nella schermata iniziale", "8. Acquisti, Google Play Billing, backend di validazione e premium", "9. Condivisione dei dati con terze parti", "10. Conservazione dei dati", "11. Eliminazione dell'account e cancellazione", "12. Sicurezza, accesso e anti-frode", "13. Basi giuridiche del trattamento", "14. Permessi e funzioni del dispositivo", "15. Privacy dei minori", "16. Modifiche a questa informativa", "17. Contatto"],
                    fr: ["1. Qui nous sommes", "2. Données collectées et traitées par l'application", "3. Utilisation des données", "4. Stockage des données", "5. Protection des données", "6. Données stockées localement", "7. Widget sur l'écran d'accueil", "8. Achats, Google Play Billing, backend de validation et premium", "9. Partage des données avec des tiers", "10. Conservation des données", "11. Suppression du compte et effacement", "12. Sécurité, accès et anti-fraude", "13. Bases légales du traitement", "14. Autorisations et fonctions de l'appareil", "15. Confidentialité des enfants", "16. Modifications de cette politique", "17. Contact"],
                    ja: ["1. 私たちについて", "2. アプリが収集・処理するデータ", "3. データの利用方法", "4. データの保存方法", "5. データの保護方法", "6. 端末内に保存されるデータ", "7. ホーム画面ウィジェット", "8. 購入、Google Play Billing、検証バックエンド、プレミアム", "9. 第三者とのデータ共有", "10. データ保持", "11. アカウント削除と消去", "12. セキュリティ、アクセス、不正対策", "13. 処理の法的根拠", "14. 端末の権限と機能", "15. 子どものプライバシー", "16. 本ポリシーの変更", "17. お問い合わせ"],
                    zh: ["1. 我们是谁", "2. 应用收集和处理的数据", "3. 数据如何使用", "4. 数据如何存储", "5. 数据如何保护", "6. 本地存储的数据", "7. 主屏小组件", "8. 购买、Google Play Billing、校验后端与高级版", "9. 与第三方共享数据", "10. 数据保留", "11. 账户删除与清除", "12. 安全、访问与反欺诈", "13. 处理数据的法律依据", "14. 设备权限与功能", "15. 儿童隐私", "16. 本政策的变更", "17. 联系方式"]
                }[code];

                return {
                    meta: metas[index],
                    title: titles[index][code],
                    paragraphs: section.paragraphs,
                    bullets: section.bullets,
                    highlight: section.highlight,
                    contact: section.contact
                };
            }),
            footerPrivacy: HOME[code].footerPrivacy
        };
    });

    PRIVACY.en.metaDescription = "WASUP Privacy Policy with information about data collection, use, security, retention, and deletion.";
    PRIVACY.en.hero.title = "WASUP Privacy Policy";
    PRIVACY.en.hero.updatedValue = "April 19, 2026";
    PRIVACY.en.sections = [
        privacySection("1. Who we are", "App controller", ["Developer responsible for the app: Rafael Botossi.", "Contact email: <a href=\"mailto:rafabotossi@gmail.com\" style=\"color: #ffd07a; text-decoration: none;\">rafabotossi@gmail.com</a>."], null, null, null),
        privacySection("2. What data the app collects and processes", "Data needed for WASUP to operate", ["WASUP only processes the data required for account creation, user pairing, short message delivery, status display in the app and widget, and premium feature activation."], [
            "Email and password for account creation, sign-in, and account recovery through Firebase Authentication.",
            "Technical account identifier generated by Firebase Authentication.",
            "Display name configured by the user inside the app.",
            "Pairing code used to connect two people.",
            "Pairing identifiers such as <code>pairId</code>, <code>pairedUserId</code>, member codes, and pairing requests.",
            "Public key used for end-to-end encryption.",
            "Firebase Cloud Messaging token for notifications and widget updates.",
            "Message content and latest shared state stored remotely in encrypted form.",
            "Local widget data such as partner name, latest message, sender identifier, and last update timestamp.",
            "Premium status through the technical field <code>isPremiumUser</code>.",
            "Technical purchase data used to confirm premium acquisitions, including <code>productId</code>, <code>purchaseToken</code>, token hash, <code>orderId</code>, purchase status, acknowledgement status, and verification timestamp."
        ]),
        privacySection("3. How data is used", "Purpose of processing", null, [
            "Authenticate users and keep sessions active.",
            "Allow email-based account recovery.",
            "Create and maintain the user's profile.",
            "Enable sending, receiving, and showing short messages between paired users.",
            "Support pairing requests and active relationships between users.",
            "Send push notifications and refresh the home screen widget.",
            "Display recent content in the widget when the user adds it.",
            "Identify and unlock premium features acquired through Google Play Billing.",
            "Validate premium purchases through an authenticated backend and the Google Play Developer API.",
            "Maintain the service's technical operation and security."
        ]),
        privacySection("4. How data is stored", "Infrastructure used by the app", null, [
            "Firebase Authentication for email and password sign-in.",
            "Cloud Firestore for profile, pairing, connection requests, current state, and messages.",
            "Firebase Cloud Messaging for notifications and technical message events.",
            "Android DataStore for local widget cache.",
            "Google Play Billing for purchase lookup, processing, and confirmation.",
            "Firebase Cloud Functions for authenticated premium purchase validation and secure premium status updates.",
            "Google Play Developer API for backend purchase verification.",
            "Android and Google Play components required to distribute and run the app."
        ], {
            title: "Additional security setup",
            text: "The app is configured with <code>usesCleartextTraffic=false</code>, is not designed to send data over insecure HTTP, and also uses <code>allowBackup=false</code> with data extraction disabled in the current manifest."
        }),
        privacySection("5. How data is protected", "Encryption and technical protection", ["WASUP uses end-to-end encryption to protect the main content exchanged between paired users."], [
            "Each device generates and keeps its own cryptographic key in AndroidKeyStore.",
            "Secret exchange uses ECDH on curve <code>secp256r1</code>.",
            "Key derivation uses HKDF with SHA-256.",
            "Content encryption uses <code>AES/GCM/NoPadding</code> with a 256-bit key.",
            "Encrypted content and its IV are stored remotely.",
            "The private key remains on the device, protected by AndroidKeyStore."
        ], {
            title: "In practice",
            text: "Messages and shared state are encrypted before being stored remotely."
        }),
        privacySection("6. Data stored locally", "Local cache on the device", ["To improve usability and allow the widget to render quickly, the app may keep the following data locally:"], [
            "Pair identifier.",
            "Partner display name.",
            "Latest displayed message.",
            "Identifier and code of the last sender.",
            "Time of the last update."
        ]),
        privacySection("7. Home screen widget", "Optional widget usage", [
            "The app includes a button that asks the Android system to add the widget to the home screen. If the user enables that feature, a portion of recent relationship or message state may be kept locally on the device for fast display.",
            "This depends on the user's confirmation in the Android system interface."
        ]),
        privacySection("8. Purchases, Google Play Billing, validation backend, and premium", "Paid features and purchase confirmation", ["WASUP integrates with Google Play Billing for premium products. When a user starts a purchase:"], [
            "Payment is handled inside the Google Play ecosystem.",
            "The app checks product details and existing purchases through the billing API.",
            "The app may use the purchase token or technical purchase state to start validation.",
            "Only the technical identifiers needed for validation, such as <code>productId</code> and <code>purchaseToken</code>, are sent to the authenticated backend.",
            "The backend checks the Google Play Developer API to confirm that the purchase exists, matches the expected premium product, and is completed.",
            "After confirmation, the backend may mark the user as premium through <code>isPremiumUser</code>.",
            "The backend may also record technical verification metadata such as token hash, <code>orderId</code>, verification time, and technical state returned by Google Play."
        ]),
        privacySection("9. Sharing data with third parties", "Sharing limited to service operation", [
            "The app does not sell personal data.",
            "Data may be processed by third parties acting as operators or processors only to the extent needed to run the service, including:"
        ], [
            "Google Firebase Authentication.",
            "Cloud Firestore.",
            "Firebase Cloud Messaging.",
            "Google Play Billing and Google Play.",
            "Firebase Cloud Functions.",
            "Google Play Developer API.",
            "Google and Google Cloud infrastructure related to those services."
        ]),
        privacySection("10. Data retention", "How long data may be retained", ["Data is kept while needed for account and service operation, or until the user deletes the account, subject to the app's current technical behavior."], [
            "User profile data may be removed from Firestore.",
            "Authenticated accounts may be removed from Firebase Authentication.",
            "Active pairings may be disabled and removed.",
            "Local widget cache may be deleted.",
            "Pairing requests may be removed.",
            "Pairing codes linked to the user may be removed.",
            "Shared pair state and remote message history may be removed.",
            "Technical premium purchase verification records may remain for the period needed for security, fraud prevention, technical auditing, legal compliance, or service defense.",
            "The remaining partner's pairing link may be cleaned automatically."
        ]),
        privacySection("11. Account deletion and erasure", "Deletion flow inside the app", ["The app includes an internal \"Delete account\" button. When the user uses this feature, the current flow attempts to:"], [
            "Disable the active pairing, when present.",
            "Delete the user's main Firestore document.",
            "Trigger backend cleanup to remove pairing code, pending requests, messages, pair state, and related documents.",
            "Clear the remaining paired user's relationship state when applicable.",
            "Delete the authenticated account in Firebase Authentication.",
            "Sign the user out.",
            "Clear local widget cache and refresh the widget to wipe the display."
        ], {
            title: "Important",
            text: "This process is irreversible from the user's account perspective and is designed to erase the account and the main records associated with app usage."
        }),
        privacySection("12. Security, access, and anti-fraud", "Read, write, and validation restrictions", [
            "Firestore rules are configured to restrict read and write access, requiring authentication and specific validations for profiles, pairings, connection requests, and encrypted content.",
            "The premium status field is also protected by rules to avoid improper direct changes by the client.",
            "In the current flow, premium access depends on validation through an authenticated backend. The app should not be able to define <code>isPremiumUser</code> in Firestore by itself.",
            "The backend may also link a purchase technically to the authenticated account and store a purchase token hash to help prevent fraud, token reuse, or incorrect purchase assignment."
        ]),
        privacySection("13. Legal bases for processing", "Applicable legal bases", ["When applicable, WASUP may rely on the following legal bases for personal data processing under Brazilian law (LGPD):"], [
            "Contract performance or preliminary procedures related to use of the application.",
            "User consent, when required for device-specific features or operations depending on free, informed, and explicit manifestation by the data subject.",
            "Compliance with legal or regulatory obligations, when applicable.",
            "Regular exercise of rights, security protection, and fraud prevention, when necessary to protect the service, users, and platform integrity."
        ]),
        privacySection("14. Device permissions and features", "What the app uses on the device", ["Based on the current implementation, the app uses:"], [
            "Internet access for authentication, database, notifications, and online resources.",
            "Notifications, including Android notification permission when required by the system, for new message alerts and app updates.",
            "Home screen widget support only when the user chooses to add it."
        ]),
        privacySection("15. Children's privacy", "Use by minors", ["The app is not intended for children under 13. The current code does not show child-directed features or a dedicated flow for children's data processing."]),
        privacySection("16. Changes to this policy", "Future updates", ["This policy may be updated to reflect changes in the application, Google Play integrations, deletion flows, payment mechanisms, security measures, or legal and regulatory obligations."]),
        privacySection("17. Contact", "Contact the responsible person", ["For questions about privacy, security, purchases, data deletion, or the exercise of rights related to your data, contact:"], null, null, {
            name: "Rafael Botossi",
            email: "rafabotossi@gmail.com"
        })
    ];

    PRIVACY.es.metaDescription = "Política de Privacidad de WASUP con información sobre recopilación, uso, seguridad, retención y eliminación de datos.";
    PRIVACY.es.hero.title = "Política de Privacidad de WASUP";
    PRIVACY.es.hero.updatedValue = "19 de abril de 2026";
    PRIVACY.es.sections = [
        privacySection("1. Quiénes somos", "Responsable de la app", ["Desarrollador responsable de la aplicación: Rafael Botossi.", "Correo de contacto: <a href=\"mailto:rafabotossi@gmail.com\" style=\"color: #ffd07a; text-decoration: none;\">rafabotossi@gmail.com</a>."], null, null, null),
        privacySection("2. Qué datos recopila y trata la app", "Datos necesarios para el funcionamiento de WASUP", ["WASUP solo trata los datos necesarios para crear la cuenta, vincular usuarios, enviar mensajes cortos, mostrar estado en la app y en el widget, y habilitar funciones premium."], [
            "Correo electrónico y contraseña para crear la cuenta, iniciar sesión y recuperar acceso mediante Firebase Authentication.",
            "Identificador técnico de la cuenta generado por Firebase Authentication.",
            "Nombre visible configurado por el usuario dentro de la app.",
            "Código de vinculación para conectar a dos personas.",
            "Identificadores de vinculación como <code>pairId</code>, <code>pairedUserId</code>, códigos de miembros y solicitudes de vinculación.",
            "Clave pública usada para cifrado de extremo a extremo.",
            "Token de Firebase Cloud Messaging para notificaciones y actualización del widget.",
            "Contenido de mensajes y último estado compartido almacenados de forma remota y cifrada.",
            "Datos locales del widget como nombre de la pareja, último mensaje, remitente y fecha de actualización.",
            "Estado premium mediante el campo técnico <code>isPremiumUser</code>.",
            "Datos técnicos de compra usados para confirmar adquisiciones premium, como <code>productId</code>, <code>purchaseToken</code>, hash del token, <code>orderId</code>, estado de compra, acknowledgement y fecha de verificación."
        ]),
        privacySection("3. Cómo se usan los datos", "Finalidades del tratamiento", null, [
            "Autenticar al usuario y mantener la sesión activa.",
            "Permitir recuperación de acceso por correo electrónico.",
            "Crear y mantener el perfil del usuario.",
            "Permitir envío, recepción y visualización de mensajes cortos entre personas vinculadas.",
            "Gestionar solicitudes de vinculación y el vínculo activo entre usuarios.",
            "Enviar notificaciones push y actualizar el widget principal.",
            "Mostrar contenido reciente en el widget cuando el usuario lo agregue.",
            "Identificar y habilitar funciones premium adquiridas por Google Play Billing.",
            "Validar compras premium mediante backend autenticado y Google Play Developer API.",
            "Mantener la operación técnica y la seguridad del servicio."
        ]),
        privacySection("4. Cómo se almacenan los datos", "Infraestructura utilizada por la app", null, [
            "Firebase Authentication para acceso con correo y contraseña.",
            "Cloud Firestore para perfil, vinculación, solicitudes, estado actual y mensajes.",
            "Firebase Cloud Messaging para notificaciones y eventos técnicos de mensajes.",
            "Android DataStore para caché local del widget.",
            "Google Play Billing para consulta, procesamiento y confirmación de compras.",
            "Firebase Cloud Functions para validar compras premium y actualizar el estado premium de forma segura.",
            "Google Play Developer API para verificación de compras desde backend.",
            "Componentes de Android y Google Play necesarios para distribuir y ejecutar la app."
        ], {
            title: "Configuración adicional de seguridad",
            text: "La aplicación está configurada con <code>usesCleartextTraffic=false</code>, no fue diseñada para transmitir datos por HTTP inseguro y también usa <code>allowBackup=false</code> con extracción de datos deshabilitada en el manifiesto actual."
        }),
        privacySection("5. Cómo se protegen los datos", "Cifrado y protección técnica", ["WASUP usa cifrado de extremo a extremo para proteger el contenido principal intercambiado entre usuarios vinculados."], [
            "Cada dispositivo genera y mantiene su propia clave criptográfica en AndroidKeyStore.",
            "El intercambio de secreto usa ECDH sobre la curva <code>secp256r1</code>.",
            "La derivación de clave usa HKDF con SHA-256.",
            "El cifrado usa <code>AES/GCM/NoPadding</code> con clave de 256 bits.",
            "El contenido cifrado y su IV se almacenan de forma remota.",
            "La clave privada permanece protegida en el dispositivo."
        ], {
            title: "En la práctica",
            text: "Los mensajes y el estado compartido se cifran antes de guardarse remotamente."
        }),
        privacySection("6. Datos almacenados localmente", "Caché local en el dispositivo", ["Para mejorar la experiencia y permitir una visualización rápida del widget, la app puede mantener localmente:"], [
            "Identificador de vinculación.",
            "Nombre visible de la pareja.",
            "Último mensaje mostrado.",
            "Identificador y código del último remitente.",
            "Hora de la última actualización."
        ]),
        privacySection("7. Widget en la pantalla principal", "Uso opcional del widget", ["La app incluye un botón para pedir al sistema Android que agregue el widget a la pantalla principal. Si el usuario lo habilita, una parte del estado reciente o del mensaje puede mantenerse localmente para mostrarse con rapidez.", "Este recurso depende de la confirmación del propio usuario en la interfaz del sistema Android."]),
        privacySection("8. Compras, Google Play Billing, backend de validación y premium", "Funciones de pago y confirmación de compra", ["WASUP se integra con Google Play Billing para productos premium. Cuando el usuario inicia una compra:"], [
            "El pago ocurre dentro del ecosistema de Google Play.",
            "La app consulta detalles del producto y compras existentes mediante la API de billing.",
            "La app puede usar el token o el estado técnico de la compra para iniciar la validación.",
            "Solo se envían al backend autenticado los identificadores técnicos necesarios, como <code>productId</code> y <code>purchaseToken</code>.",
            "El backend consulta Google Play Developer API para confirmar que la compra existe, corresponde al producto premium esperado y está completada.",
            "Después de la confirmación, el backend puede marcar al usuario como premium mediante <code>isPremiumUser</code>.",
            "El backend también puede registrar metadatos técnicos como hash del token, <code>orderId</code>, hora de verificación y estado técnico devuelto por Google Play."
        ]),
        privacySection("9. Compartición de datos con terceros", "Compartición limitada a la operación del servicio", ["La app no vende datos personales.", "Los datos pueden ser tratados por terceros que actúan como operadores o encargados solo en la medida necesaria para operar el servicio, incluyendo:"], [
            "Google Firebase Authentication.",
            "Cloud Firestore.",
            "Firebase Cloud Messaging.",
            "Google Play Billing y Google Play.",
            "Firebase Cloud Functions.",
            "Google Play Developer API.",
            "Infraestructura de Google y Google Cloud vinculada a esos servicios."
        ]),
        privacySection("10. Retención de datos", "Cuánto tiempo pueden conservarse los datos", ["Los datos se conservan mientras sean necesarios para operar la cuenta y el servicio, o hasta que el usuario elimine la cuenta, según el comportamiento técnico actual de la app."], [
            "El perfil puede eliminarse de Firestore.",
            "La cuenta autenticada puede eliminarse de Firebase Authentication.",
            "La vinculación activa puede desactivarse y eliminarse.",
            "La caché local del widget puede borrarse.",
            "Las solicitudes de vinculación pueden eliminarse.",
            "Los códigos de vinculación asociados al usuario pueden eliminarse.",
            "El estado compartido y el historial remoto de mensajes pueden eliminarse.",
            "Los registros técnicos de verificación de compras premium pueden conservarse durante el tiempo necesario para seguridad, prevención de fraude, auditoría técnica, cumplimiento legal o defensa del servicio.",
            "El vínculo del otro miembro puede limpiarse automáticamente."
        ]),
        privacySection("11. Eliminación de cuenta y borrado", "Flujo de eliminación dentro de la app", ["La app incluye un botón interno de \"Eliminar cuenta\". Cuando el usuario lo utiliza, el flujo actual busca:"], [
            "Desactivar la vinculación activa, si existe.",
            "Eliminar el documento principal del usuario en Firestore.",
            "Ejecutar limpieza en backend para quitar código de vinculación, solicitudes pendientes, mensajes, estado compartido y documentos relacionados.",
            "Limpiar el vínculo del otro usuario cuando corresponda.",
            "Eliminar la cuenta autenticada en Firebase Authentication.",
            "Cerrar la sesión.",
            "Borrar la caché local del widget y actualizarlo para limpiar la visualización."
        ], {
            title: "Importante",
            text: "Este proceso es irreversible desde la perspectiva de la cuenta del usuario y está diseñado para borrar la cuenta y los registros principales asociados al uso de la app."
        }),
        privacySection("12. Seguridad, acceso y antifraude", "Restricciones de lectura, escritura y validación", [
            "Las reglas de Firestore restringen lectura y escritura y exigen autenticación y validaciones específicas para perfiles, vinculaciones, solicitudes de conexión y contenido cifrado.",
            "El campo de estado premium también está protegido para evitar modificaciones directas indebidas desde el cliente.",
            "En el flujo actual, el acceso premium depende de validación en backend autenticado. La app no debería poder definir <code>isPremiumUser</code> por sí sola.",
            "El backend también puede vincular técnicamente la compra con la cuenta autenticada y almacenar el hash del token para ayudar a prevenir fraude, reutilización o asignación incorrecta."
        ]),
        privacySection("13. Bases legales del tratamiento", "Bases legales aplicables", ["Cuando corresponda, WASUP puede basarse en las siguientes bases legales de la LGPD brasileña:"], [
            "Ejecución de contrato o procedimientos preliminares relacionados con el uso de la aplicación.",
            "Consentimiento del usuario cuando sea necesario para funciones del dispositivo u operaciones que dependan de manifestación libre, informada e inequívoca.",
            "Cumplimiento de obligaciones legales o regulatorias, cuando corresponda.",
            "Ejercicio regular de derechos, protección de seguridad y prevención de fraude, cuando sea necesario para proteger el servicio, a los usuarios y la integridad de la plataforma."
        ]),
        privacySection("14. Permisos y funciones del dispositivo", "Qué usa la app en el dispositivo", ["Según la implementación actual, la app usa:"], [
            "Internet para autenticación, base de datos, notificaciones y recursos en línea.",
            "Notificaciones, incluida la autorización de Android cuando el sistema lo requiera, para avisos de nuevos mensajes y actualizaciones.",
            "Soporte de widget en la pantalla principal solo cuando el usuario decide agregarlo."
        ]),
        privacySection("15. Privacidad infantil", "Uso por menores", ["La app no está dirigida a menores de 13 años. El código actual no muestra funciones orientadas a niños ni un flujo dedicado al tratamiento de datos infantiles."]),
        privacySection("16. Cambios en esta política", "Actualizaciones futuras", ["Esta política puede actualizarse para reflejar cambios en la aplicación, integraciones con Google Play, flujos de eliminación, mecanismos de pago, medidas de seguridad u obligaciones legales y regulatorias."]),
        privacySection("17. Contacto", "Habla con el responsable", ["Para dudas sobre privacidad, seguridad, compras, eliminación de datos o ejercicio de derechos relacionados con tus datos, contacta con:"], null, null, {
            name: "Rafael Botossi",
            email: "rafabotossi@gmail.com"
        })
    ];

    PRIVACY.de.metaDescription = "Datenschutzerklärung von WASUP mit Informationen zu Datenerhebung, Nutzung, Sicherheit, Aufbewahrung und Löschung.";
    PRIVACY.de.hero.title = "WASUP Datenschutzerklärung";
    PRIVACY.de.hero.updatedValue = "19. April 2026";
    PRIVACY.de.sections = [
        privacySection("1. Wer wir sind", "Verantwortlich für die App", ["Verantwortlicher Entwickler: Rafael Botossi.", "Kontakt: <a href=\"mailto:rafabotossi@gmail.com\" style=\"color: #ffd07a; text-decoration: none;\">rafabotossi@gmail.com</a>."], null, null, null),
        privacySection("2. Welche Daten die App erhebt und verarbeitet", "Für den Betrieb von WASUP erforderliche Daten", ["WASUP verarbeitet nur die Daten, die für Kontoerstellung, Verknüpfung zweier Nutzer, Versand kurzer Nachrichten, Anzeige im Widget und Freischaltung von Premium-Funktionen erforderlich sind."], [
            "E-Mail und Passwort für Registrierung, Anmeldung und Wiederherstellung über Firebase Authentication.",
            "Technische Kontokennung aus Firebase Authentication.",
            "Anzeigename, den der Nutzer in der App festlegt.",
            "Verknüpfungscode zum Verbinden zweier Personen.",
            "Verknüpfungskennungen wie <code>pairId</code>, <code>pairedUserId</code> und Anfragen.",
            "Öffentlicher Schlüssel für Ende-zu-Ende-Verschlüsselung.",
            "Firebase Cloud Messaging Token für Benachrichtigungen und Widget-Aktualisierung.",
            "Nachrichteninhalt und letzter gemeinsamer Status in verschlüsselter Form.",
            "Lokale Widget-Daten wie Partnername, letzte Nachricht und Zeitstempel.",
            "Premium-Status über <code>isPremiumUser</code>.",
            "Technische Kaufdaten wie <code>productId</code>, <code>purchaseToken</code>, Hash, <code>orderId</code> und Prüfzeitpunkt."
        ]),
        privacySection("3. Wie Daten verwendet werden", "Zwecke der Verarbeitung", null, [
            "Nutzer authentifizieren und Sitzungen aufrechterhalten.",
            "Zugang per E-Mail wiederherstellen.",
            "Benutzerprofil verwalten.",
            "Kurze Nachrichten zwischen verknüpften Nutzern senden und anzeigen.",
            "Verknüpfungsanfragen und aktive Beziehungen verwalten.",
            "Push-Benachrichtigungen senden und das Widget aktualisieren.",
            "Premium-Funktionen aktivieren und Käufe validieren.",
            "Technischen Betrieb und Sicherheit des Dienstes gewährleisten."
        ]),
        privacySection("4. Wie Daten gespeichert werden", "Von der App verwendete Infrastruktur", null, [
            "Firebase Authentication.",
            "Cloud Firestore.",
            "Firebase Cloud Messaging.",
            "Android DataStore.",
            "Google Play Billing.",
            "Firebase Cloud Functions.",
            "Google Play Developer API.",
            "Android- und Google-Play-Komponenten für Verteilung und Betrieb."
        ], {
            title: "Zusätzliche Sicherheit",
            text: "Die App verwendet <code>usesCleartextTraffic=false</code>, ist nicht für unsicheres HTTP ausgelegt und nutzt <code>allowBackup=false</code> mit deaktivierter Datenextraktion."
        }),
        privacySection("5. Wie Daten geschützt werden", "Verschlüsselung und technischer Schutz", ["WASUP schützt den Hauptinhalt mit Ende-zu-Ende-Verschlüsselung."], [
            "Gerätespezifische Schlüssel im AndroidKeyStore.",
            "ECDH auf <code>secp256r1</code>.",
            "HKDF mit SHA-256.",
            "<code>AES/GCM/NoPadding</code> mit 256-Bit-Schlüssel.",
            "Verschlüsselter Inhalt und IV werden remote gespeichert."
        ], {
            title: "Praktisch bedeutet das",
            text: "Nachrichten und gemeinsamer Status werden vor dem Speichern verschlüsselt."
        }),
        privacySection("6. Lokal gespeicherte Daten", "Lokaler Cache auf dem Gerät", ["Für eine schnellere Darstellung kann die App lokal Verknüpfungs-ID, Anzeigenamen, letzte Nachricht, letzten Absender und Zeitstempel speichern."]),
        privacySection("7. Widget auf dem Homescreen", "Optionale Nutzung des Widgets", ["Das Widget wird nur hinzugefügt, wenn der Nutzer dies im Android-System bestätigt. Dafür können aktuelle Zustandsdaten lokal auf dem Gerät gehalten werden."]),
        privacySection("8. Käufe, Google Play Billing, Validierungs-Backend und Premium", "Bezahlfunktionen und Kaufbestätigung", ["Premium-Käufe laufen über Google Play. Die App und das Backend verwenden technische Kaufdaten zur Prüfung und Aktivierung von Premium-Funktionen."], [
            "Die Zahlung erfolgt über Google Play.",
            "Nur erforderliche technische Daten werden an das authentifizierte Backend gesendet.",
            "Der Backend-Dienst prüft die Daten über die Google Play Developer API.",
            "Nach Bestätigung kann <code>isPremiumUser</code> aktualisiert werden."
        ]),
        privacySection("9. Datenweitergabe an Dritte", "Weitergabe nur für den Betrieb des Dienstes", ["WASUP verkauft keine personenbezogenen Daten. Daten können nur an Infrastrukturpartner weitergegeben werden, soweit dies für Authentifizierung, Datenbank, Benachrichtigungen und Kaufabwicklung erforderlich ist."]),
        privacySection("10. Datenaufbewahrung", "Wie lange Daten gespeichert werden können", ["Daten bleiben gespeichert, solange sie für den Betrieb des Kontos und des Dienstes erforderlich sind oder bis der Nutzer die Löschung anstößt."], [
            "Profil, Verknüpfung, Nachrichten und lokaler Cache können entfernt werden.",
            "Technische Kaufprüfprotokolle können aus Sicherheits- oder Rechtsgründen länger bestehen bleiben."
        ]),
        privacySection("11. Kontolöschung und Datenlöschung", "Löschablauf innerhalb der App", ["Über die Funktion \"Konto löschen\" versucht die App, Verknüpfungen, Profildaten, Nachrichten, lokalen Cache und das Authentifizierungskonto zu entfernen."], null, {
            title: "Wichtig",
            text: "Dieser Vorgang ist aus Sicht des Benutzerkontos nicht umkehrbar."
        }),
        privacySection("12. Sicherheit, Zugriff und Betrugsschutz", "Lese-, Schreib- und Validierungsbeschränkungen", ["Firestore-Regeln beschränken Zugriff und Änderungen. Premium-Freischaltung hängt von validierter Backend-Prüfung ab, und technische Schutzmaßnahmen können Kaufdaten mit dem authentifizierten Konto verknüpfen."]),
        privacySection("13. Rechtsgrundlagen der Verarbeitung", "Anwendbare Rechtsgrundlagen", ["Je nach Fall kann sich WASUP auf Vertragserfüllung, Einwilligung, gesetzliche Pflichten sowie Betrugsprävention und Schutz der Plattform nach der brasilianischen LGPD stützen."]),
        privacySection("14. Geräteberechtigungen und Funktionen", "Was die App auf dem Gerät nutzt", ["Die App nutzt Internetzugang, Benachrichtigungen und optional das Homescreen-Widget. Der aktuell analysierte Code zeigt keine Nutzung von Standort, Kontakten, Fotos, Mikrofon oder Kamera."]),
        privacySection("15. Datenschutz für Kinder", "Nutzung durch Minderjährige", ["Die App ist nicht für Kinder unter 13 Jahren bestimmt und enthält derzeit keine speziell auf Kinder ausgerichteten Funktionen."]),
        privacySection("16. Änderungen dieser Richtlinie", "Künftige Aktualisierungen", ["Diese Richtlinie kann aktualisiert werden, wenn sich App-Funktionen, Google-Play-Integrationen, Zahlungsabläufe, Sicherheitsmaßnahmen oder gesetzliche Anforderungen ändern."]),
        privacySection("17. Kontakt", "Kontakt zur verantwortlichen Person", ["Bei Fragen zu Datenschutz, Sicherheit, Käufen oder Löschung kontaktieren Sie bitte:"], null, null, {
            name: "Rafael Botossi",
            email: "rafabotossi@gmail.com"
        })
    ];

    PRIVACY.it.metaDescription = "Informativa sulla Privacy di WASUP con dettagli su raccolta, uso, sicurezza, conservazione ed eliminazione dei dati.";
    PRIVACY.it.hero.title = "Informativa sulla Privacy di WASUP";
    PRIVACY.it.hero.updatedValue = "19 aprile 2026";
    PRIVACY.it.sections = [
        privacySection("1. Chi siamo", "Responsabile dell'app", ["Sviluppatore responsabile: Rafael Botossi.", "Contatto: <a href=\"mailto:rafabotossi@gmail.com\" style=\"color: #ffd07a; text-decoration: none;\">rafabotossi@gmail.com</a>."], null, null, null),
        privacySection("2. Quali dati raccoglie e tratta l'app", "Dati necessari al funzionamento di WASUP", ["WASUP tratta solo i dati necessari per creare l'account, collegare due utenti, inviare messaggi brevi, mostrare lo stato nell'app e nel widget e abilitare il premium."], [
            "Email e password per registrazione, accesso e recupero tramite Firebase Authentication.",
            "Identificatore tecnico dell'account generato da Firebase.",
            "Nome visibile impostato dall'utente.",
            "Codice di abbinamento per collegare due persone.",
            "Identificatori di abbinamento come <code>pairId</code> e <code>pairedUserId</code>.",
            "Chiave pubblica per la crittografia end-to-end.",
            "Token Firebase Cloud Messaging per notifiche e widget.",
            "Messaggi e stato condiviso memorizzati in forma crittografata.",
            "Dati locali del widget come nome del partner, ultimo messaggio e orario.",
            "Stato premium tramite <code>isPremiumUser</code>.",
            "Dati tecnici di acquisto come <code>productId</code>, <code>purchaseToken</code>, hash, <code>orderId</code> e stato di verifica."
        ]),
        privacySection("3. Come vengono usati i dati", "Finalità del trattamento", null, [
            "Autenticare l'utente e mantenere attiva la sessione.",
            "Consentire il recupero dell'accesso via email.",
            "Gestire il profilo utente.",
            "Permettere l'invio e la visualizzazione di messaggi brevi tra utenti abbinati.",
            "Gestire richieste di abbinamento e relazione attiva.",
            "Inviare notifiche push e aggiornare il widget.",
            "Attivare funzioni premium e validare gli acquisti.",
            "Mantenere il funzionamento tecnico e la sicurezza del servizio."
        ]),
        privacySection("4. Come i dati vengono conservati", "Infrastruttura utilizzata dall'app", null, [
            "Firebase Authentication.",
            "Cloud Firestore.",
            "Firebase Cloud Messaging.",
            "Android DataStore.",
            "Google Play Billing.",
            "Firebase Cloud Functions.",
            "Google Play Developer API.",
            "Componenti Android e Google Play necessari alla distribuzione."
        ], {
            title: "Configurazione aggiuntiva di sicurezza",
            text: "L'app usa <code>usesCleartextTraffic=false</code>, non è progettata per HTTP non sicuro e imposta <code>allowBackup=false</code> con estrazione dati disabilitata."
        }),
        privacySection("5. Come i dati sono protetti", "Crittografia e protezione tecnica", ["WASUP usa crittografia end-to-end per proteggere il contenuto principale scambiato tra utenti abbinati."], [
            "Chiavi del dispositivo custodite in AndroidKeyStore.",
            "Scambio segreto con ECDH su <code>secp256r1</code>.",
            "Derivazione con HKDF SHA-256.",
            "Cifratura con <code>AES/GCM/NoPadding</code> a 256 bit.",
            "Contenuto cifrato e IV memorizzati da remoto."
        ], {
            title: "In pratica",
            text: "Messaggi e stato condiviso vengono cifrati prima del salvataggio remoto."
        }),
        privacySection("6. Dati memorizzati localmente", "Cache locale sul dispositivo", ["Per migliorare l'esperienza e velocizzare il widget, l'app può memorizzare localmente identificatore di abbinamento, nome del partner, ultimo messaggio, ultimo mittente e ora di aggiornamento."]),
        privacySection("7. Widget nella schermata iniziale", "Uso opzionale del widget", ["Il widget viene aggiunto solo se l'utente lo conferma tramite l'interfaccia di Android. In questo caso una parte dello stato recente può essere mantenuta localmente per una visualizzazione rapida."]),
        privacySection("8. Acquisti, Google Play Billing, backend di validazione e premium", "Funzioni a pagamento e conferma dell'acquisto", ["Gli acquisti premium avvengono tramite Google Play. L'app e il backend usano dati tecnici minimi per verificare l'acquisto e sbloccare il premium."], [
            "Il pagamento è gestito da Google Play.",
            "Al backend autenticato vengono inviati solo identificatori tecnici necessari.",
            "La verifica avviene tramite Google Play Developer API.",
            "Dopo la conferma, il campo <code>isPremiumUser</code> può essere aggiornato."
        ]),
        privacySection("9. Condivisione dei dati con terze parti", "Condivisione limitata al funzionamento del servizio", ["WASUP non vende dati personali. Eventuali terze parti trattano dati solo nella misura necessaria per autenticazione, database, notifiche e gestione tecnica degli acquisti."]),
        privacySection("10. Conservazione dei dati", "Per quanto tempo i dati possono essere conservati", ["I dati restano conservati finché sono necessari per il funzionamento dell'account e del servizio o finché l'utente non elimina l'account."], [
            "Profilo, abbinamento, messaggi e cache locale possono essere rimossi.",
            "I registri tecnici di verifica acquisti possono rimanere più a lungo per sicurezza, audit o obblighi legali."
        ]),
        privacySection("11. Eliminazione dell'account e cancellazione", "Flusso di eliminazione nell'app", ["Con il pulsante interno \"Elimina account\", l'app tenta di rimuovere abbinamento, documento principale, messaggi, cache locale e account autenticato."], null, {
            title: "Importante",
            text: "Il processo è irreversibile dal punto di vista dell'account utente."
        }),
        privacySection("12. Sicurezza, accesso e anti-frode", "Restrizioni di lettura, scrittura e validazione", ["Le regole di Firestore limitano lettura e scrittura. L'attivazione del premium dipende da verifica backend autenticata e possono essere adottate misure tecniche per prevenire frodi o riutilizzo improprio degli acquisti."]),
        privacySection("13. Basi giuridiche del trattamento", "Basi giuridiche applicabili", ["Quando applicabile, WASUP può basarsi su esecuzione del contratto, consenso, obblighi legali e tutela della sicurezza e dell'integrità della piattaforma ai sensi della LGPD brasiliana."]),
        privacySection("14. Permessi e funzioni del dispositivo", "Cosa usa l'app sul dispositivo", ["L'app utilizza Internet, notifiche e supporto widget solo se l'utente decide di aggiungerlo. Il codice analizzato non indica raccolta di posizione, contatti, foto, microfono o fotocamera."]),
        privacySection("15. Privacy dei minori", "Uso da parte di minori", ["L'app non è destinata a minori di 13 anni e non presenta funzioni specificamente rivolte ai bambini."]),
        privacySection("16. Modifiche a questa informativa", "Aggiornamenti futuri", ["Questa informativa può essere aggiornata per riflettere cambiamenti dell'app, delle integrazioni con Google Play, dei flussi di eliminazione, dei pagamenti o degli obblighi normativi."]),
        privacySection("17. Contatto", "Contatta il responsabile", ["Per domande su privacy, sicurezza, acquisti o cancellazione dei dati, contatta:"], null, null, {
            name: "Rafael Botossi",
            email: "rafabotossi@gmail.com"
        })
    ];

    PRIVACY.fr.metaDescription = "Politique de Confidentialité de WASUP avec des informations sur la collecte, l'utilisation, la sécurité, la conservation et la suppression des données.";
    PRIVACY.fr.hero.title = "Politique de Confidentialité de WASUP";
    PRIVACY.fr.hero.updatedValue = "19 avril 2026";
    PRIVACY.fr.sections = [
        privacySection("1. Qui nous sommes", "Responsable de l'application", ["Développeur responsable : Rafael Botossi.", "Contact : <a href=\"mailto:rafabotossi@gmail.com\" style=\"color: #ffd07a; text-decoration: none;\">rafabotossi@gmail.com</a>."], null, null, null),
        privacySection("2. Données collectées et traitées par l'application", "Données nécessaires au fonctionnement de WASUP", ["WASUP traite uniquement les données nécessaires à la création de compte, à l'appairage de deux utilisateurs, à l'envoi de messages courts, à l'affichage dans l'application et le widget, ainsi qu'à l'activation du premium."], [
            "Adresse e-mail et mot de passe pour création de compte, connexion et récupération via Firebase Authentication.",
            "Identifiant technique de compte généré par Firebase.",
            "Nom affiché défini par l'utilisateur dans l'application.",
            "Code d'appairage pour connecter deux personnes.",
            "Identifiants d'appairage comme <code>pairId</code> et <code>pairedUserId</code>.",
            "Clé publique utilisée pour le chiffrement de bout en bout.",
            "Jeton Firebase Cloud Messaging pour notifications et widget.",
            "Messages et dernier état partagé stockés à distance sous forme chiffrée.",
            "Données locales du widget comme le nom du partenaire, le dernier message et l'horodatage.",
            "Statut premium via <code>isPremiumUser</code>.",
            "Données techniques d'achat comme <code>productId</code>, <code>purchaseToken</code>, hash, <code>orderId</code> et état de vérification."
        ]),
        privacySection("3. Utilisation des données", "Finalités du traitement", null, [
            "Authentifier l'utilisateur et maintenir la session.",
            "Permettre la récupération de l'accès par e-mail.",
            "Gérer le profil utilisateur.",
            "Permettre l'envoi, la réception et l'affichage de messages courts entre utilisateurs appairés.",
            "Gérer les demandes d'appairage et la relation active.",
            "Envoyer des notifications push et mettre à jour le widget.",
            "Activer les fonctions premium et valider les achats.",
            "Assurer le fonctionnement technique et la sécurité du service."
        ]),
        privacySection("4. Stockage des données", "Infrastructure utilisée par l'application", null, [
            "Firebase Authentication.",
            "Cloud Firestore.",
            "Firebase Cloud Messaging.",
            "Android DataStore.",
            "Google Play Billing.",
            "Firebase Cloud Functions.",
            "Google Play Developer API.",
            "Composants Android et Google Play nécessaires à la distribution."
        ], {
            title: "Configuration de sécurité supplémentaire",
            text: "L'application utilise <code>usesCleartextTraffic=false</code>, n'est pas conçue pour du HTTP non sécurisé et active <code>allowBackup=false</code> avec extraction de données désactivée."
        }),
        privacySection("5. Protection des données", "Chiffrement et protection technique", ["WASUP utilise un chiffrement de bout en bout pour protéger le contenu principal échangé entre utilisateurs appairés."], [
            "Clés propres à chaque appareil dans AndroidKeyStore.",
            "Échange de secret via ECDH sur <code>secp256r1</code>.",
            "Dérivation de clé via HKDF SHA-256.",
            "Chiffrement avec <code>AES/GCM/NoPadding</code> en 256 bits.",
            "Contenu chiffré et IV stockés à distance."
        ], {
            title: "Concrètement",
            text: "Les messages et l'état partagé sont chiffrés avant stockage distant."
        }),
        privacySection("6. Données stockées localement", "Cache local sur l'appareil", ["Pour améliorer l'expérience et accélérer l'affichage du widget, l'application peut conserver localement l'identifiant d'appairage, le nom du partenaire, le dernier message, le dernier expéditeur et l'heure de mise à jour."]),
        privacySection("7. Widget sur l'écran d'accueil", "Utilisation optionnelle du widget", ["Le widget n'est ajouté que si l'utilisateur le confirme dans Android. Une partie de l'état récent peut alors rester localement sur l'appareil pour un affichage rapide."]),
        privacySection("8. Achats, Google Play Billing, backend de validation et premium", "Fonctionnalités payantes et confirmation d'achat", ["Les achats premium sont gérés via Google Play. L'application et le backend utilisent uniquement les données techniques nécessaires pour vérifier l'achat et débloquer le premium."], [
            "Le paiement est traité par Google Play.",
            "Seuls les identifiants techniques indispensables sont envoyés au backend authentifié.",
            "La vérification s'effectue via Google Play Developer API.",
            "Après confirmation, le champ <code>isPremiumUser</code> peut être mis à jour."
        ]),
        privacySection("9. Partage des données avec des tiers", "Partage limité au fonctionnement du service", ["WASUP ne vend pas de données personnelles. Des tiers peuvent traiter des données uniquement dans la mesure nécessaire à l'authentification, à la base de données, aux notifications et au traitement technique des achats."]),
        privacySection("10. Conservation des données", "Durée de conservation des données", ["Les données sont conservées tant qu'elles sont nécessaires au fonctionnement du compte et du service, ou jusqu'à suppression du compte par l'utilisateur."], [
            "Le profil, l'appairage, les messages et le cache local peuvent être supprimés.",
            "Les journaux techniques de validation d'achat peuvent être conservés plus longtemps pour des raisons de sécurité, d'audit ou d'obligation légale."
        ]),
        privacySection("11. Suppression du compte et effacement", "Processus de suppression dans l'application", ["Avec le bouton interne \"Supprimer le compte\", l'application tente de retirer l'appairage, le document principal, les messages, le cache local et le compte authentifié."], null, {
            title: "Important",
            text: "Cette opération est irréversible du point de vue du compte utilisateur."
        }),
        privacySection("12. Sécurité, accès et anti-fraude", "Restrictions de lecture, d'écriture et de validation", ["Les règles Firestore limitent lecture et écriture. L'accès premium dépend d'une validation backend authentifiée, et des mesures techniques peuvent relier un achat au compte afin de prévenir fraude et réutilisation abusive."]),
        privacySection("13. Bases légales du traitement", "Bases légales applicables", ["Lorsque cela s'applique, WASUP peut s'appuyer sur l'exécution du contrat, le consentement, les obligations légales et la protection de la sécurité et de l'intégrité de la plateforme selon la LGPD brésilienne."]),
        privacySection("14. Autorisations et fonctions de l'appareil", "Ce que l'application utilise sur l'appareil", ["L'application utilise Internet, les notifications et la prise en charge du widget uniquement si l'utilisateur choisit de l'ajouter. Le code analysé n'indique pas de collecte de localisation, contacts, photos, micro ou caméra."]),
        privacySection("15. Confidentialité des enfants", "Utilisation par des mineurs", ["L'application n'est pas destinée aux enfants de moins de 13 ans et ne présente pas actuellement de fonctions spécifiquement conçues pour eux."]),
        privacySection("16. Modifications de cette politique", "Mises à jour futures", ["Cette politique peut être mise à jour pour refléter des changements dans l'application, les intégrations Google Play, les flux de suppression, les paiements, la sécurité ou les obligations réglementaires."]),
        privacySection("17. Contact", "Contacter le responsable", ["Pour toute question relative à la confidentialité, à la sécurité, aux achats ou à la suppression de données, contactez :"], null, null, {
            name: "Rafael Botossi",
            email: "rafabotossi@gmail.com"
        })
    ];

    PRIVACY.ja.metaDescription = "WASUP のプライバシーポリシー。データ収集、利用、安全性、保持、削除について説明します。";
    PRIVACY.ja.hero.title = "WASUP プライバシーポリシー";
    PRIVACY.ja.hero.updatedValue = "2026年4月19日";
    PRIVACY.ja.sections = [
        privacySection("1. 私たちについて", "アプリの管理者", ["本アプリの開発責任者は Rafael Botossi です。", "連絡先: <a href=\"mailto:rafabotossi@gmail.com\" style=\"color: #ffd07a; text-decoration: none;\">rafabotossi@gmail.com</a>"], null, null, null),
        privacySection("2. アプリが収集・処理するデータ", "WASUP の動作に必要なデータ", ["WASUP は、アカウント作成、2人のペアリング、短いメッセージ送信、アプリとウィジェットでの表示、プレミアム機能の有効化に必要な範囲のデータのみを扱います。"], [
            "Firebase Authentication による登録、ログイン、再設定のためのメールアドレスとパスワード。",
            "Firebase が発行する技術的なアカウント識別子。",
            "アプリ内でユーザーが設定する表示名。",
            "2人を接続するためのペアリングコード。",
            "<code>pairId</code> や <code>pairedUserId</code> などのペアリング識別子。",
            "エンドツーエンド暗号化に使う公開鍵。",
            "通知とウィジェット更新のための FCM トークン。",
            "暗号化されたメッセージ内容と共有状態。",
            "相手の名前、最新メッセージ、更新時刻などのローカルウィジェット情報。",
            "<code>isPremiumUser</code> によるプレミアム状態。",
            "購入確認に必要な <code>productId</code>、<code>purchaseToken</code>、<code>orderId</code> などの技術情報。"
        ]),
        privacySection("3. データの利用方法", "利用目的", null, [
            "ユーザー認証とセッション維持。",
            "メールによるアカウント復旧。",
            "プロフィール管理。",
            "ペア相手との短いメッセージ送受信。",
            "ペアリング申請と関係状態の管理。",
            "プッシュ通知とウィジェット更新。",
            "プレミアム機能の有効化と購入検証。",
            "サービス運用と安全性の維持。"
        ]),
        privacySection("4. データの保存方法", "アプリで使用するインフラ", null, [
            "Firebase Authentication",
            "Cloud Firestore",
            "Firebase Cloud Messaging",
            "Android DataStore",
            "Google Play Billing",
            "Firebase Cloud Functions",
            "Google Play Developer API"
        ], {
            title: "追加の安全設定",
            text: "アプリは <code>usesCleartextTraffic=false</code> を使用し、安全でない HTTP 通信を前提としていません。さらに <code>allowBackup=false</code> でバックアップ抽出も無効化しています。"
        }),
        privacySection("5. データの保護方法", "暗号化と技術的保護", ["WASUP は、ペアになったユーザー間でやり取りされる主要な内容をエンドツーエンド暗号化で保護します。"], [
            "端末ごとの鍵を AndroidKeyStore に保存。",
            "ECDH と <code>secp256r1</code> を使用。",
            "HKDF SHA-256 による鍵導出。",
            "<code>AES/GCM/NoPadding</code> による 256bit 暗号化。",
            "暗号化済みデータと IV はリモート保存。"
        ], {
            title: "要点",
            text: "メッセージと共有状態は保存前に暗号化されます。"
        }),
        privacySection("6. 端末内に保存されるデータ", "ローカルキャッシュ", ["表示を高速にするため、ペア識別子、相手の表示名、最新メッセージ、最終送信者、更新時刻などを端末内に保存する場合があります。"]),
        privacySection("7. ホーム画面ウィジェット", "任意利用のウィジェット", ["ウィジェットは Android 上でユーザーが追加を承認した場合のみ利用されます。その際、直近の状態の一部が端末内に保持されることがあります。"]),
        privacySection("8. 購入、Google Play Billing、検証バックエンド、プレミアム", "有料機能と購入確認", ["プレミアム購入は Google Play を通じて行われます。アプリとバックエンドは、購入確認とプレミアム解放のために必要最小限の技術情報を使用します。"]),
        privacySection("9. 第三者とのデータ共有", "サービス運用に限定した共有", ["WASUP は個人データを販売しません。認証、データベース、通知、購入処理など、サービス運用に必要な範囲でのみ第三者インフラが関与します。"]),
        privacySection("10. データ保持", "データ保持期間", ["データはアカウントとサービス運用に必要な期間、またはユーザーが削除するまで保持されます。"], [
            "プロフィール、ペアリング、メッセージ、ローカルキャッシュは削除対象となる場合があります。",
            "購入検証の技術記録は、安全性や法的義務のため一定期間保持されることがあります。"
        ]),
        privacySection("11. アカウント削除と消去", "アプリ内の削除フロー", ["アプリ内の「アカウント削除」機能を使うと、ペアリング、主要ドキュメント、メッセージ、ローカルキャッシュ、認証アカウントの削除が試行されます。"], null, {
            title: "重要",
            text: "この処理はユーザーアカウントの観点では元に戻せません。"
        }),
        privacySection("12. セキュリティ、アクセス、不正対策", "アクセス制限と検証", ["Firestore ルールにより読み書きが制限され、プレミアム解放には認証済みバックエンドでの検証が必要です。不正利用や購入の使い回し防止のための技術的対策も行われます。"]),
        privacySection("13. 処理の法的根拠", "適用される法的根拠", ["該当する場合、WASUP はブラジル LGPD に基づき、契約履行、同意、法的義務、安全確保や不正防止を根拠としてデータを処理することがあります。"]),
        privacySection("14. 端末の権限と機能", "端末上でアプリが使用するもの", ["現在の実装では、インターネット、通知、そしてユーザーが追加した場合のみホーム画面ウィジェットを使用します。位置情報、連絡先、写真、マイク、カメラの収集は現在のコードでは確認されていません。"]),
        privacySection("15. 子どものプライバシー", "未成年者による利用", ["本アプリは 13 歳未満の子どもを対象としておらず、子ども向け専用機能も現在は含まれていません。"]),
        privacySection("16. 本ポリシーの変更", "今後の更新", ["アプリ機能、Google Play 連携、削除フロー、支払い方式、安全対策、法的義務の変更に応じて本ポリシーは更新されることがあります。"]),
        privacySection("17. お問い合わせ", "担当者への連絡", ["プライバシー、安全性、購入、データ削除についての質問は次までご連絡ください。"], null, null, {
            name: "Rafael Botossi",
            email: "rafabotossi@gmail.com"
        })
    ];

    PRIVACY.zh.metaDescription = "WASUP 隐私政策，说明数据收集、使用、安全、保留与删除方式。";
    PRIVACY.zh.hero.title = "WASUP 隐私政策";
    PRIVACY.zh.hero.updatedValue = "2026年4月19日";
    PRIVACY.zh.sections = [
        privacySection("1. 我们是谁", "应用负责人", ["本应用的负责人为 Rafael Botossi。", "联系方式：<a href=\"mailto:rafabotossi@gmail.com\" style=\"color: #ffd07a; text-decoration: none;\">rafabotossi@gmail.com</a>"], null, null, null),
        privacySection("2. 应用收集和处理的数据", "WASUP 运行所需数据", ["WASUP 仅处理创建账户、配对两位用户、发送短消息、在应用和小组件中显示状态以及启用高级功能所必需的数据。"], [
            "通过 Firebase Authentication 完成注册、登录和找回访问权限所需的邮箱和密码。",
            "Firebase 生成的技术账户标识符。",
            "用户在应用内设置的显示名称。",
            "连接两人的配对代码。",
            "<code>pairId</code>、<code>pairedUserId</code> 等配对标识符。",
            "用于端到端加密的公钥。",
            "用于通知和小组件更新的 FCM Token。",
            "以加密形式存储的消息内容和共享状态。",
            "本地小组件信息，如伴侣名称、最新消息和更新时间。",
            "通过 <code>isPremiumUser</code> 表示的高级状态。",
            "用于购买验证的 <code>productId</code>、<code>purchaseToken</code>、<code>orderId</code> 等技术数据。"
        ]),
        privacySection("3. 数据如何使用", "处理目的", null, [
            "验证用户身份并保持会话。",
            "通过邮箱恢复访问权限。",
            "管理用户资料。",
            "在已配对用户之间发送、接收和显示短消息。",
            "管理配对请求和配对关系。",
            "发送推送通知并更新主屏小组件。",
            "启用高级功能并验证购买。",
            "维护服务运行和安全。"
        ]),
        privacySection("4. 数据如何存储", "应用使用的基础设施", null, [
            "Firebase Authentication",
            "Cloud Firestore",
            "Firebase Cloud Messaging",
            "Android DataStore",
            "Google Play Billing",
            "Firebase Cloud Functions",
            "Google Play Developer API"
        ], {
            title: "额外安全设置",
            text: "应用启用了 <code>usesCleartextTraffic=false</code>，并未设计为通过不安全的 HTTP 传输数据，同时设置了 <code>allowBackup=false</code> 以禁用数据提取。"
        }),
        privacySection("5. 数据如何保护", "加密与技术保护", ["WASUP 使用端到端加密来保护已配对用户之间交换的核心内容。"], [
            "每台设备的密钥保存在 AndroidKeyStore。",
            "使用 <code>secp256r1</code> 曲线上的 ECDH。",
            "使用 HKDF SHA-256 派生密钥。",
            "使用 256 位 <code>AES/GCM/NoPadding</code> 加密。",
            "加密内容与 IV 远程存储。"
        ], {
            title: "实际含义",
            text: "消息和共享状态会在远程保存前完成加密。"
        }),
        privacySection("6. 本地存储的数据", "本地缓存", ["为了提升体验并加快小组件显示，应用可能会在设备本地保存配对标识、对方名称、最新消息、最后发送者以及更新时间。"]),
        privacySection("7. 主屏小组件", "可选小组件功能", ["只有在用户通过 Android 系统界面确认后，主屏小组件才会被添加。启用后，部分最近状态可能保存在本地以便快速显示。"]),
        privacySection("8. 购买、Google Play Billing、校验后端与高级版", "付费功能与购买确认", ["高级版购买通过 Google Play 完成。应用和后端仅使用验证购买和开通高级功能所需的最少技术数据。"]),
        privacySection("9. 与第三方共享数据", "仅限服务运行所需的数据共享", ["WASUP 不出售个人数据。只有在身份验证、数据库、通知和购买技术处理所需范围内，第三方基础设施才会处理相关数据。"]),
        privacySection("10. 数据保留", "数据可保留多久", ["数据会在账户和服务运行所需期间内保留，或直到用户删除账户。"], [
            "资料、配对关系、消息和本地缓存可能被删除。",
            "购买验证技术记录可能因安全、审计或法律义务而保留更久。"
        ]),
        privacySection("11. 账户删除与清除", "应用内删除流程", ["使用应用内“删除账户”功能后，系统会尝试移除配对关系、主文档、消息、本地缓存以及身份验证账户。"], null, {
            title: "重要提示",
            text: "从用户账户角度看，该流程不可逆。"
        }),
        privacySection("12. 安全、访问与反欺诈", "访问限制与校验", ["Firestore 规则会限制读写访问。高级功能的开通依赖经过身份验证的后端校验，并可能采用技术手段将购买与账户绑定，以防止欺诈或重复使用。"]),
        privacySection("13. 处理数据的法律依据", "适用法律依据", ["在适用情况下，WASUP 可依据巴西 LGPD 中的合同履行、用户同意、法律义务以及安全保护和反欺诈等依据处理个人数据。"]),
        privacySection("14. 设备权限与功能", "应用在设备上使用的能力", ["当前实现会使用互联网、通知，以及仅在用户主动添加时启用的主屏小组件。当前代码未显示收集定位、联系人、照片、麦克风或相机数据。"]),
        privacySection("15. 儿童隐私", "未成年人使用", ["本应用不面向 13 岁以下儿童，当前也没有专门面向儿童的数据处理流程。"]),
        privacySection("16. 本政策的变更", "未来更新", ["当应用功能、Google Play 集成、删除流程、支付机制、安全措施或法律义务发生变化时，本政策可能会更新。"]),
        privacySection("17. 联系方式", "联系负责人", ["如对隐私、安全、购买或数据删除有疑问，请联系："], null, null, {
            name: "Rafael Botossi",
            email: "rafabotossi@gmail.com"
        })
    ];

    function detectLanguage() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && LANGUAGES[saved]) return saved;
        const candidates = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language || "pt-BR"];
        for (const value of candidates) {
            if (!value) continue;
            const base = String(value).toLowerCase().split("-")[0];
            if (LANGUAGES[base]) return base;
        }
        return "pt";
    }

    function setText(id, value) {
        const element = document.getElementById(id);
        if (!element || value == null) return;
        element.textContent = value;
    }

    function setHTML(id, value) {
        const element = document.getElementById(id);
        if (!element || value == null) return;
        element.innerHTML = value;
    }

    function setAttr(id, attr, value) {
        const element = document.getElementById(id);
        if (!element || value == null) return;
        element.setAttribute(attr, value);
    }

    function renderLanguageSwitcher(currentLanguage, onChange) {
        const holders = document.querySelectorAll("[data-language-switcher]");
        holders.forEach(function (holder) {
            holder.innerHTML = "";
            const button = document.createElement("button");
            button.className = "language-switcher-button";
            button.type = "button";
            button.setAttribute("aria-expanded", "false");

            const menu = document.createElement("div");
            menu.className = "language-switcher-menu";

            function syncButton() {
                const info = LANGUAGES[currentLanguage];
                button.innerHTML = "<img class=\"flag-image\" src=\"" + info.flag + "\" alt=\"\"><span>" + info.label + "</span><span class=\"caret\">▾</span>";
            }

            function closeMenu() {
                menu.classList.remove("open");
                button.setAttribute("aria-expanded", "false");
            }

            button.addEventListener("click", function () {
                const open = menu.classList.toggle("open");
                button.setAttribute("aria-expanded", String(open));
            });

            Object.keys(LANGUAGES).forEach(function (code) {
                const info = LANGUAGES[code];
                const option = document.createElement("button");
                option.type = "button";
                option.className = "language-option" + (code === currentLanguage ? " active" : "");
                option.innerHTML = "<img class=\"flag-image\" src=\"" + info.flag + "\" alt=\"\"><span class=\"language-name\">" + info.label + "</span><span class=\"language-code\">" + code + "</span>";
                option.addEventListener("click", function () {
                    currentLanguage = code;
                    localStorage.setItem(STORAGE_KEY, code);
                    closeMenu();
                    onChange(code);
                });
                menu.appendChild(option);
            });

            document.addEventListener("click", function (event) {
                if (!holder.contains(event.target)) {
                    closeMenu();
                }
            });

            syncButton();
            holder.appendChild(button);
            holder.appendChild(menu);
        });
    }

    function renderHome(lang) {
        const copy = HOME[lang];
        document.documentElement.lang = LANGUAGES[lang].locale;
        document.title = copy.metaTitle;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", copy.metaDescription);

        setAttr("common-logo-alt", "alt", copy.commonLogoAlt);
        setAttr("hero-logo-alt", "alt", copy.hero.logoAlt);
        setText("nav-features", copy.nav.features);
        setText("nav-premium", copy.nav.premium);
        setText("nav-privacy", copy.nav.privacy);
        setText("nav-store", copy.nav.store);
        setText("hero-badge", copy.hero.badge);
        setHTML("hero-title", copy.hero.title);
        setText("hero-subtitle", copy.hero.subtitle);
        setText("hero-cta", copy.hero.cta);
        setText("widget-partner-name", copy.widget.partnerName);
        copy.widget.messages.forEach(function (message, index) {
            setText("widget-message-" + (index + 1), message);
        });
        copy.widget.times.forEach(function (time, index) {
            setText("widget-time-" + (index + 1), time);
        });
        setText("features-tag", copy.features.tag);
        setText("features-title", copy.features.title);
        setText("features-subtitle", copy.features.subtitle);
        copy.features.cards.forEach(function (card, index) {
            setAttr("feature-" + (index + 1) + "-alt", "alt", card.alt);
            setText("feature-" + (index + 1) + "-title", card.title);
            setText("feature-" + (index + 1) + "-text", card.text);
        });
        setText("premium-tag", copy.premium.tag);
        setText("premium-title", copy.premium.title);
        setText("premium-text", copy.premium.text);
        copy.premium.items.forEach(function (item, index) {
            setText("premium-item-" + (index + 1), item);
        });
        setAttr("premium-alt", "alt", copy.premium.alt);
        setText("footer-privacy", copy.footerPrivacy);
        setHTML("footer-rights", footerRights[lang]);
    }

    function renderPrivacy(lang) {
        const copy = PRIVACY[lang];
        document.documentElement.lang = LANGUAGES[lang].locale;
        document.title = copy.metaTitle;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", copy.metaDescription);

        setAttr("common-logo-alt", "alt", copy.commonLogoAlt);
        setText("nav-home", copy.nav.home);
        setText("nav-privacy", copy.nav.privacy);
        setText("privacy-back", copy.hero.back);
        setText("privacy-eyebrow", copy.hero.eyebrow);
        setText("privacy-title", copy.hero.title);
        setText("privacy-intro", copy.hero.intro);
        setText("privacy-updated-label", copy.hero.updatedLabel);
        setText("privacy-updated-value", copy.hero.updatedValue);
        setText("privacy-owner-label", copy.hero.ownerLabel);
        setText("privacy-owner-value", copy.hero.ownerValue);
        setText("privacy-contact-label", copy.hero.contactLabel);
        setText("privacy-availability-label", copy.hero.availabilityLabel);
        setText("privacy-availability-value", copy.hero.availabilityValue);
        setText("privacy-sidebar-title", copy.sidebarTitle);
        setText("footer-privacy", copy.footerPrivacy);
        setHTML("footer-rights", footerRights[lang]);

        const sidebar = document.getElementById("privacy-sidebar-list");
        sidebar.innerHTML = copy.sidebar.map(function (item) {
            return "<li><a href=\"#" + item[0] + "\">" + item[1] + "</a></li>";
        }).join("");

        const summary = document.getElementById("resumo");
        summary.innerHTML = copy.summary.map(function (card) {
            return "<article class=\"summary-card glass-card\"><span>" + card.label + "</span><strong>" + card.title + "</strong><p>" + card.text + "</p></article>";
        }).join("");

        const ids = ["quem-somos", "dados", "uso", "armazenamento", "seguranca", "local", "widget", "compras", "terceiros", "retencao", "exclusao", "acesso", "bases-legais", "permissoes", "infantil", "alteracoes", "contato"];
        const container = document.getElementById("privacy-sections");
        container.innerHTML = copy.sections.map(function (section, index) {
            const paragraphs = (section.paragraphs || []).map(function (paragraph) {
                return "<p>" + paragraph + "</p>";
            }).join("");
            const bullets = section.bullets && section.bullets.length
                ? "<ul>" + section.bullets.map(function (bullet) { return "<li>" + bullet + "</li>"; }).join("") + "</ul>"
                : "";
            const highlight = section.highlight
                ? "<div class=\"highlight-box\"><strong>" + section.highlight.title + "</strong><p>" + section.highlight.text + "</p></div>"
                : "";
            const contact = section.contact
                ? "<div class=\"contact-box\"><strong>" + section.contact.name + "</strong><a href=\"mailto:" + section.contact.email + "\">" + section.contact.email + "</a></div>"
                : "";
            return "<section id=\"" + ids[index] + "\" class=\"policy-card glass-card\"><span class=\"section-meta\">" + section.meta + "</span><h2>" + section.title + "</h2>" + paragraphs + bullets + highlight + contact + "</section>";
        }).join("");
    }

    function applyLanguage(lang) {
        if (document.body.dataset.page === "home") {
            renderHome(lang);
        }
        if (document.body.dataset.page === "privacy") {
            renderPrivacy(lang);
        }
        renderLanguageSwitcher(lang, applyLanguage);
    }

    applyLanguage(detectLanguage());
})();
