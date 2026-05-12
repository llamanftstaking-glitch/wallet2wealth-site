---
type: chapter
chapter: 5
title: Storing and Securing Your Assets
subtitle: Because "not your keys, not your coins" isn't a cliché
---

Em 11 de novembro de 2022, a exchange FTX de Sam Bankman-Fried pediu falência. Cerca de 8 bilhões de dólares em fundos de clientes haviam desaparecido. Pessoas que achavam que seus criptoativos estavam em segurança — porque ficavam numa conta em que podiam entrar todos os dias — acordaram e descobriram que não tinham mais nada. A exchange estava secretamente emprestando os fundos dos clientes, e quando a música parou, o dinheiro havia sumido.

Essa é a verdade central da segurança em cripto: possuir criptomoeda e ter acesso a criptomoeda são duas coisas diferentes. A maioria dos iniciantes confunde as duas. E essa diferença pode custar tudo.

## 5.1 Carteiras vs. Contas em Exchanges

Quando você compra Bitcoin na Coinbase, você não tem Bitcoin no sentido tradicional. Você tem uma promessa de Bitcoin que a Coinbase está guardando em seu nome. É o equivalente digital de um depósito bancário — só que sem seguro de depósito.

Uma carteira de cripto é diferente. Ela não "armazena" seus criptoativos da forma como uma carteira guarda dinheiro físico. Suas moedas vivem no blockchain — sempre. Uma carteira guarda a **chave privada**: a senha criptográfica que prova que você tem o direito de movimentar essas moedas. Quem possui a chave privada controla os fundos. Ponto final.

É por isso que a frase "not your keys, not your coins" se tornou um princípio, não um meme. É uma afirmação de fato matemático.

Existem duas categorias de carteiras:

**Carteiras custodiais** — Você entrega a terceiros (uma exchange como Coinbase, Binance ou Kraken) o controle das suas chaves. Conveniente. Arriscado para grandes quantias. Você está confiando que essa empresa vai se manter solvente, segura e sem sofrer ataques.

**Carteiras não custodiais** — Você guarda as chaves. Carteiras de software como MetaMask ou Trust Wallet funcionam no seu celular ou navegador. Carteiras de hardware são dispositivos físicos que mantêm as chaves offline. A autocustódia significa que você é o próprio banco — com toda a responsabilidade que isso implica.

Para pequenas quantias e negociações ativas, uma exchange confiável é suficiente. Para qualquer valor cuja perda seria devastadora, a autocustódia é o caminho certo.

## 5.2 Carteiras de Hardware — Armazenamento a Frio do Jeito Certo

Uma carteira de hardware é um pequeno dispositivo físico — mais ou menos do tamanho de um pendrive — projetado para armazenar chaves privadas em um ambiente isolado que nunca se conecta à internet. As duas marcas dominantes são **Ledger** e **Trezor**, e funcionam pelo mesmo princípio: sua chave privada é gerada no dispositivo, fica no dispositivo e assina as transações no dispositivo. Seu computador nunca a vê.

Veja como uma transação realmente funciona com uma carteira de hardware: você a inicia no computador, a transação não assinada é enviada ao dispositivo, o dispositivo a assina internamente usando sua chave privada, e apenas a transação assinada (não a chave) retorna para a rede. Mesmo que seu computador esteja infectado por malware, a chave nunca fica exposta.

Quando você realmente precisa de uma? A regra geral: se você tem mais de 1.000–2.000 dólares em cripto que pretende guardar a longo prazo, uma carteira de hardware vale os 80–150 dólares que custa. Abaixo desse limite, uma carteira de software confiável é aceitável. Acima de 10.000 dólares, uma carteira de hardware não é opcional — é diligência básica.

Compre somente no site oficial do fabricante. Nunca compre uma carteira de hardware usada ou de um vendedor terceirizado na Amazon. Há casos documentados de dispositivos pré-comprometidos sendo vendidos especificamente para roubar os fundos do comprador.

:::detective
**A Violação de Dados da Ledger**

Em julho de 2020, a Ledger — a empresa de carteiras de hardware — sofreu uma violação de dados que expôs as informações pessoais de 270.000 clientes: nomes, números de telefone e endereços residenciais. Os próprios dispositivos não foram comprometidos. Os criptoativos estavam seguros.

Mas o que se seguiu foi uma onda de sofisticadas campanhas de phishing, solicitações falsas de seed phrase e até ameaças físicas enviadas às residências das pessoas. A lição não foi "não use Ledger" — foi que a segurança funciona em camadas. O dispositivo protege suas chaves; o seu comportamento protege todo o resto. Use uma caixa postal para envios, se possível. Nunca registre carteiras de hardware com seu nome real online.
:::

## 5.3 Seed Phrases — A Chave Mestra

Quando você configura qualquer carteira não custodial — de hardware ou software — ela gera uma **seed phrase**: uma sequência de 12 ou 24 palavras comuns em inglês. Essa frase é tudo. É uma codificação legível por humanos da sua chave privada mestra, e ela pode recuperar sua carteira inteira em qualquer dispositivo compatível, em qualquer lugar do mundo.

Perca-a, e seus fundos se vão para sempre. Se outra pessoa a obtiver, seus fundos desaparecem imediatamente.

As regras são simples e inegociáveis:

**Nunca a guarde digitalmente.** Nem em uma foto no celular. Nem num Google Doc. Nem num e-mail para si mesmo. Nem num gerenciador de senhas. Nem numa mensagem de texto. Arquivos digitais são hackeados, sincronizados com a nuvem e roubados. A seed phrase vive no papel ou no metal — em nada mais.

**Anote-a no momento em que aparecer.** Durante a configuração. Palavra por palavra, número por número. Confira tudo antes de fechar a tela.

**Guarde-a fisicamente em múltiplos locais seguros.** Uma cópia em casa. Uma num cofre à prova de fogo, num cofre bancário ou com um familiar de confiança. Incêndio e enchente são riscos reais. Uma cópia só não basta.

**Placas de backup em metal** estão disponíveis por 20–50 dólares e permitem que você grave sua seed phrase em aço inoxidável. Isso é exagero para pequenas quantias — é essencial para grandes. Papel pega fogo. Metal não.

A frase nunca deve ser digitada em nenhum site ou aplicativo que a solicite. O único uso legítimo de uma seed phrase é importá-la para um software de carteira oficial que você mesmo instalou. Qualquer site que peça sua seed phrase está roubando-a.

## 5.4 Autenticação de Dois Fatores e Segurança de Conta

Para contas em exchanges e qualquer serviço custodial que você use, a autenticação de dois fatores (2FA) é obrigatória — mas nem todo 2FA é igual.

**2FA por SMS** é a forma mais fraca. É vulnerável a ataques de SIM swap, em que um criminoso liga para a sua operadora, se passa por você e transfere o seu número de telefone para o dispositivo dele. Leva minutos. Milhares de pessoas perderam fundos significativos dessa forma.

**Aplicativos de autenticação** (Google Authenticator, Authy, Aegis) geram códigos baseados em tempo localmente no seu dispositivo. Eles não podem ser interceptados pela rede telefônica. Esse é o nível mínimo para qualquer conta séria.

**Chaves de segurança de hardware** (YubiKey) são o padrão ouro. Uma chave física que você conecta para autenticar. Virtualmente impossível de ser enganada remotamente. Se você tem saldos significativos em alguma exchange, isso vale a pena considerar.

Além do 2FA: use uma senha única e forte para cada conta em exchange. Use um endereço de e-mail dedicado para contas de cripto que você não utiliza para mais nada. Ative o whitelisting de endereços de saque onde for oferecido — isso restringe os saques apenas a endereços pré-aprovados, de modo que, mesmo se uma conta for comprometida, ela não consiga enviar fundos para uma carteira desconhecida.

## 5.5 Phishing — O Vetor de Ataque Mais Comum

Hackers raramente quebram sistemas criptográficos. Eles quebram pessoas.

Um ataque de phishing é uma armadilha de engenharia social projetada para fazer você entregar voluntariamente credenciais ou seed phrases. Eles chegam como e-mails que parecem exatamente com comunicações da Ledger, Coinbase ou MetaMask. Chegam como mensagens diretas no Twitter de "equipes de suporte". Chegam como anúncios no Google para "MetaMask" que levam a cópias convincentes. Chegam como airdrops falsos exigindo que você "conecte sua carteira e verifique".

A anatomia de um site de phishing: a URL está errada. Não MetaMask.io — é Metarnask.io, ou metamask-support.net. A página parece perfeita até o último pixel. O único sinal de alerta é o domínio.

Salve nos favoritos todos os sites que você usa para cripto. Acesse-os pelo favorito, não por resultados de pesquisa ou links em e-mails. Nunca clique em um link em um e-mail não solicitado que afirme ser de uma exchange ou provedor de carteira. Em caso de dúvida, vá direto ao site oficial digitando a URL você mesmo.

A proteção mais eficaz contra phishing é o ceticismo. Se algo está pedindo que você tome uma ação urgente — "sua conta será suspensa", "resgate seu airdrop agora", "verifique sua carteira" — pare e respire. A urgência é a ferramenta do manipulador.

:::detective
**O Colapso da FTX**

Em novembro de 2022, a FTX era a segunda maior exchange de cripto do mundo. Tinha endossos de celebridades, anúncios no Super Bowl, um contrato de nomenclatura com uma arena esportiva e um fundador na capa da Forbes. Processava bilhões em volume diário.

Ela também estava secretamente emprestando fundos de clientes para a Alameda Research, a firma de trading de SBF, que havia feito apostas catastróficas. Quando um concorrente publicou o balanço da Alameda e os clientes começaram a sacar, a liquidez evaporou em 72 horas. Mais de um milhão de clientes viram suas contas bloqueadas da noite para o dia.

O blockchain funcionou perfeitamente durante todo esse período. As transações de Bitcoin continuaram sendo liquidadas. A falha estava em confiar suas chaves a uma instituição centralizada. Clientes que guardavam seu Bitcoin em carteiras de autocustódia não sentiram nada. Os que confiaram na FTX perderam tudo.
:::

## 5.6 Carteiras Multi-Assinatura para Saldos Elevados

Para grandes detentores — pense em 100.000 dólares ou mais, ou fundos compartilhados entre várias pessoas — as **carteiras multi-assinatura (multisig)** adicionam uma camada extra de proteção. Uma configuração multisig exige várias chaves privadas para autorizar qualquer transação. Um multisig 2 de 3, por exemplo, exige que duas das três chaves designadas assinem antes que os fundos se movam.

O benefício prático: nenhum ponto único de falha. Uma chave pode ser comprometida e seus fundos ainda estão seguros. Uma chave pode ser perdida e você ainda consegue recuperar usando as outras duas. É o equivalente a um cofre bancário que exige dois gerentes girando suas chaves ao mesmo tempo.

Ferramentas como o Gnosis Safe (agora chamado apenas de Safe) tornam o multisig acessível para indivíduos e equipes. Exige mais configuração do que uma carteira padrão, mas para saldos que representam riqueza significativa, a arquitetura vale a pena ser entendida e considerada.

:::action
**W2W Passo a Passo — Auditoria de Segurança**

Abra cada conta onde você guarda cripto. Para cada uma, responda a três perguntas: (1) Ela é custodial ou não custodial? (2) O 2FA está ativado, e é baseado em aplicativo autenticador em vez de SMS? (3) Se for custodial, o valor armazenado ali é algo cuja perda seria devastadora para você? Se a resposta à terceira pergunta for sim, mova para uma carteira de hardware ou, no mínimo, para uma carteira de software não custodial ainda esta semana. Não um dia desses — esta semana. Segurança é a única coisa em cripto que não pode esperar um momento mais conveniente.
:::
