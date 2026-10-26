# Website da Multiconcetto

## Correr localmente

Na pasta `website`, executar `npm install` (na primeira vez) e `npm run dev`. Para verificar o projeto: `npm run lint` e `npm run build`.

## Onde alterar cada parte

| Alteração | Ficheiro |
| --- | --- |
| Ordem das secções da página inicial | `src/pages/HomePage.tsx` |
| Página completa "Quem Somos" | `src/pages/AboutPage.tsx` e `AboutPage.css` |
| Página "Representadas/Parceiros" | `src/pages/RepresentadasPage.tsx`, `RepresentadasPage.css` e `src/components/BrandShowcase.tsx` |
| Efeito de entrada ao fazer scroll pelas marcas | `src/components/BrandShowcase.css` e `src/hooks/useRevealOnScroll.ts` |
| Aspeto dos botões "Ir" | `src/components/BrandShowcase.css` |
| Marcas, ordem e caminhos dos botões "Ir" | `src/data/representedBrands.ts` |
| Fotografias e logótipos das representadas | `src/services/representedMediaRepository.ts` |
| Página temporária dos detalhes ainda não criados | `src/pages/BrandDetailPendingPage.tsx` |
| Página da Arkimueble, texto e secções | `src/pages/ArkimueblePage.tsx` e `ArkimueblePage.css` |
| Fotografias da Arkimueble | `src/services/arkimuebleMediaRepository.ts` |
| Página da Romero, texto e secções | `src/pages/RomeroPage.tsx` e `RomeroPage.css` |
| Fotografias e logótipo da Romero | `src/services/romeroMediaRepository.ts` |
| Página da Exportjunk, texto e secções | `src/pages/ExportjunkPage.tsx` e `ExportjunkPage.css` |
| Fotografias e logótipo da Exportjunk | `src/services/exportjunkMediaRepository.ts` |
| Dois catálogos da Exportjunk | `src/components/ExportjunkCatalogues.tsx` |
| Bloco partilhado com nomes dos catálogos e botões ao lado | `src/components/CatalogueBanner.tsx` e `CatalogueBanner.css` |
| Página da ROCO, texto e secções | `src/pages/RocoPage.tsx` e `RocoPage.css` |
| Fotografias e logótipo da ROCO | `src/services/rocoMediaRepository.ts` |
| Página da Nardi, texto e secções | `src/pages/NardiPage.tsx` e `NardiPage.css` |
| Fotografias da Nardi | `src/services/nardiMediaRepository.ts` |
| Três catálogos apresentados na página da Nardi | `src/components/NardiCatalogues.tsx` |
| Página da Ezpeleta, texto e secções | `src/pages/EzpeletaPage.tsx` e `EzpeletaPage.css` |
| Fotografias e logótipo da Ezpeleta | `src/services/ezpeletaMediaRepository.ts` |
| Página da LMM, texto e secções | `src/pages/LmmPage.tsx` e `LmmPage.css` |
| Fotografias e logótipo da LMM | `src/services/lmmMediaRepository.ts` |
| Seis catálogos da LMM e ordem nas três colunas | `src/components/LmmCatalogues.tsx` |
| Página e ordem dos catálogos apresentados | `src/pages/CatalogosPage.tsx` e `CatalogosPage.css` |
| Página de contactos, localização e disposição das secções | `src/pages/ContactosPage.tsx` e `ContactosPage.css` |
| Fotografias e mapa da página de contactos | `src/services/contactMediaRepository.ts` |
| Campos, botão Enviar e mensagens do pedido de informação | `src/components/ContactRequestForm.tsx` e `ContactRequestForm.css` |
| Ligação futura do pedido de informação ao servidor | `src/services/contactRequestService.ts` |
| Fotografias do topo e do rodapé da página de catálogos | `src/services/catalogueMediaRepository.ts` |
| Ficheiros PDF e capas de todos os catálogos | `src/data/catalogues.ts` |
| Visualizador reutilizável de catálogos | `src/components/CatalogueViewer.tsx`, `PdfPreview.tsx` e respetivos CSS |
| Descodificadores de imagens dos PDFs, incluindo JPEG 2000 | `src/services/pdfBinaryDataFactory.ts` |
| Texto e estrutura das secções | `src/pages/HomeSections.tsx` |
| Estilo das secções | `src/pages/HomeSections.css` |
| Secção "Quem Somos" e transição | `src/pages/AboutSection.tsx`, `AboutSection.css` e `src/hooks/useRevealOnScroll.ts` |
| Ritmo das transições ao fazer scroll | `src/styles/reveal.css` |
| Barra superior e mudança de cor com scroll | `src/components/TopBar.tsx` e `TopBar.css` |
| Fotografia inicial e rotação | `src/components/HomeHero.tsx` e `HomeHero.css` |
| Cartões de imagens | `src/components/ImageStrip.tsx` e `ImageStrip.css` |
| Rodapé e newsletter | `src/components/SiteFooter.tsx` e `SiteFooter.css` |
| Estrutura comum da barra superior, conteúdo e rodapé | `src/components/SiteLayout.tsx` |
| Links de navegação | `src/data/navigation.ts` |
| Correspondência entre fotografias e secções | `src/services/mediaRepository.ts` |
| Fotografias da página "Quem Somos" | `src/services/aboutMediaRepository.ts` |

As fotografias da página inicial estão em `../Fotos/Página Inicial` e são importadas apenas por `mediaRepository.ts`. A função `getHomeMedia()` já devolve uma `Promise`, para que uma futura API ou base de dados possa ser ligada nesse ficheiro sem modificar as secções. Para compilar, a pasta `Fotos` deve manter-se ao lado da pasta `website`.

A página `/quem-somos` usa as fotografias de `../Fotos/Quem Somos` através de `aboutMediaRepository.ts`. A fotografia `Equipa.jpg` foi extraída do PowerPoint de referência. O rodapé é inserido por `SiteLayout.tsx` no fim de cada página; cada página fornece a sua fotografia de rodapé.

A página `/representadas` segue a ordem de `../Representadas_2.pdf`: Arkimueble, Romero, Exportjunk, ROCO, Nardi, Ezpeleta e LMM. As fotografias estão em `../Fotos/Representadas_Parceiros`; a ROCO usa `RP 6.png` e a LMM usa a versão editada `RP 7.png`. Os logótipos estão associados em `src/services/representedMediaRepository.ts`: os de Arkimueble, Romero, Exportjunk, Nardi e Ezpeleta estão em `../Fotos/Representadas_Parceiros`, o da ROCO em `../Fotos/Roco/Logo.jpg` e o da LMM em `../Fotos/LMM/Logo.jpg`. `Logo Arkimueble.png` foi extraído do PowerPoint. A ROCO apresenta o logótipo à direita, conforme a referência. Todas as marcas reutilizam `BrandShowcase`, incluindo o botão "Ir", que usa o `detailPath` em `src/data/representedBrands.ts`. Todas as marcas abrem agora a respetiva página completa.

A página `/representadas/arkimueble` usa as fotografias de `../Fotos/Arkimueble`. O botão "Ver catálogo" abre um visualizador sobre a página, com navegação entre páginas e zoom; nele também é possível voltar ao site, abrir o PDF noutra janela ou descarregá-lo. O link para o site oficial está na própria página.

A página `/representadas/romero` segue a referência `../Romero.pdf`, com apresentação, catálogo, Restauração, Catering, link para o site oficial e Exterior. As fotografias estão em `../Fotos/Romero` e o logótipo em `../Fotos/Representadas_Parceiros/Logo Romero White.png`, associados em `romeroMediaRepository.ts` e carregados por `useRomeroMedia.ts`. O botão "Ver catálogo" reutiliza `CatalogueViewer` com `catalogues.romero`, incluindo pré-visualização e download. O rodapé usa `Fundo Romero.jpg`.

A página `/representadas/exportjunc` segue `../Exportjunc.pdf` e usa as fotografias de `../Fotos/Exportjunk` através de `exportjunkMediaRepository.ts` e `useExportjunkMedia.ts`. Inclui Mesas e Cadeiras, Espreguiçadeiras, Sofás, Daybeds e o site oficial. `ExportjunkCatalogues` apresenta os dois botões "Ver catálogo" ao lado dos respetivos nomes e abre o visualizador existente com `catalogues.exportjunk2024` (principal) ou `catalogues.exportjunk2026` (novidades), tanto em desktop como em telemóvel.

O bloqueio de scroll da página de fundo é partilhado por todos os catálogos e definido em `CatalogueViewer.css`: enquanto existe um `.catalogue-viewer[open]`, a página fica bloqueada e o PDF mantém o seu scroll interno. Ao fechar ou desmontar o visualizador, o scroll da página é reposto automaticamente, mantendo a posição e o espaço da barra de scroll durante a abertura.

`PdfPreview` usa `PdfBinaryDataFactory` para carregar os descodificadores WASM fornecidos pelo próprio `pdfjs-dist`. O Vite inclui esses ficheiros no build, sem cópias manuais nem serviços externos. São necessários, por exemplo, para as imagens JPEG 2000 do catálogo ROCO; sem o descodificador OpenJPEG, a pré-visualização omite essas imagens.

A página `/representadas/roco` segue `../Roco.pdf`, com apresentação, catálogo, Hotéis, Restauração, site oficial, Lobbies e Exterior. As fotografias são associadas em `rocoMediaRepository.ts` e carregadas por `useRocoMedia.ts`. Estão em `../Fotos/Roco`, incluindo `Introducao.jpg`, extraída da segunda página do PDF porque não estava na pasta fornecida. O bloco do site oficial reutiliza `../Fotos/Romero/ROMERO 2.png`, a mesma imagem da referência. O rodapé usa `hero-portada.jpg`. O botão "Ver catálogo" abre `CatalogueViewer` com `catalogues.roco`, incluindo pré-visualização, download e bloqueio do scroll de fundo.

A página `/representadas/nardi` segue `../Nardi.pdf`, com apresentação, catálogos, Mesas e Cadeiras, Sofás, site oficial, Lounge e Restauração. As nove fotografias estão em `../Fotos/Nardi`, associadas em `nardiMediaRepository.ts` e carregadas por `useNardiMedia.ts`. `NardiCatalogues` apresenta Contract, Outdoor e Sunday, todos de 2027, a partir das entradas existentes em `src/data/catalogues.ts`. Tal como `ExportjunkCatalogues`, usa `CatalogueBanner` para alinhar os nomes e os botões "Ver catálogo" lado a lado. Este componente partilha o desenho, as animações e a abertura de `CatalogueViewer`, com pré-visualização, download e bloqueio de scroll do fundo. O rodapé usa `NARDI 8.jpg`.

A página `/representadas/ezpeleta` segue `../Ezpeleta.pdf`, com apresentação, catálogo, Mesas e Cadeiras, Lounge, site oficial, Guarda-sóis e Separadores. As fotografias estão em `../Fotos/Ezpeleta` e o logótipo em `../Fotos/Representadas_Parceiros/Logo Ezpeleta.jpg`, associados em `ezpeletaMediaRepository.ts` e carregados por `useEzpeletaMedia.ts`. O botão "Ver catálogo" abre `CatalogueViewer` com `catalogues.ezpeletaContract`, incluindo pré-visualização, download e bloqueio de scroll do fundo. O rodapé usa `Fundo Página.jpg`.

A página `/representadas/lmm` segue `../LMM.pdf`, com apresentação, seis catálogos, Cadeiras, Bancos Bar, site oficial, Mesas e Cadeiras de Escritório. As fotografias estão em `../Fotos/LMM`, associadas em `lmmMediaRepository.ts` e carregadas por `useLmmMedia.ts`. O topo usa `Living.jpg` com `Logo.jpg`, e o rodapé usa `Fundo.jpg`. `LmmCatalogues` reutiliza `CatalogueBanner` com `layout="three-columns"`: duas linhas por coluna, com Cadeiras e Cadeiras de Escritório à esquerda, Bancos Bar e Consolas ao centro, Mesas e Mesas de Centro à direita. Os botões "Ver catálogo" ficam ao lado dos nomes e abrem as seis entradas LMM existentes em `catalogues.ts` no visualizador partilhado. Até 1000px, os pares nome/botão passam a uma coluna para manter a leitura em ecrãs pequenos. A disposição habitual da Nardi e da Exportjunk mantém-se como valor predefinido do componente.

Todos os PDFs de `../Catalogos` e todas as capas de `../Catalogos/Capas` têm referência em `src/data/catalogues.ts`. É nesse único ficheiro que se substituem as importações e os nomes nas atualizações anuais. O catálogo principal Modesto Navarro usa `../Fotos/Catálogos/Capa Modesto Navarro.jpg`, porque a respetiva capa não está em `Catalogos/Capas`; a ampliação de 2025 usa `../Catalogos/Capas/Capa Modesto Navarro Novidades.jpg`. A página da Arkimueble usa a entrada `catalogues.arkimueble`.

A página `/catalogos` apresenta os 17 PDFs disponíveis, com os catálogos da mesma empresa lado a lado na grelha. Todos os cartões abrem o mesmo `CatalogueViewer` usado na página da Arkimueble. A capa Exportjunk da referência é a do catálogo de 2024; o de 2026 aparece com o nome "Exportjunk Novidades". A ampliação Modesto Navarro 2025 aparece com o nome "Modesto Navarro Novidades" e usa a capa `Capa Modesto Navarro Novidades.jpg`, tanto no cartão como no visualizador. As novas cópias das capas LMM e Exportjunk 2026 em `../Fotos/Catálogos` são idênticas às de `../Catalogos/Capas`, que continuam a ser as referências em `src/data/catalogues.ts`.

Nota: `Outdoor.jpg` mostra uma imagem diferente da usada no bloco "Outdoor" do PDF. `Outdoor - PDF.jpg` foi extraída do PDF fornecido para que o site corresponda à referência visual.

A newsletter abre um email para `info@multiconcetto.pt` até existir um serviço de subscrição.

## Contactos e envio futuro de pedidos

A página `/contactos` segue `../Contactos.pdf`, incluindo o pedido de informação da página 3 e um botão **Enviar** no fim do formulário. Usa as quatro imagens de `../Fotos/Contactos`, associadas exclusivamente em `src/services/contactMediaRepository.ts` e carregadas por `src/hooks/useContactMedia.ts`: `Rattan Contctos.jpg` no topo, `Maps.jpg` na localização, `20260915_164750.jpg` ao lado do formulário e `Fundo Contactos.jpg` no rodapé. O mapa é uma imagem com ligação ao Google Maps. A navegação do topo e do rodapé aponta para `/contactos` através de `src/data/navigation.ts`; a rota e o título estão em `src/App.tsx`.

Neste momento, o botão valida os campos mas **não envia emails, não faz pedidos de rede, não abre a aplicação de email e não guarda os dados**. Depois de uma submissão válida, informa que o envio ainda não está disponível e mantém os campos preenchidos. A newsletter do rodapé mantém o comportamento existente de abrir a aplicação de email; não usa este serviço.

### Onde ligar o Resend quando for ativado

1. **Criar um endpoint no servidor**, por exemplo `POST /api/contact`, usando o backend ou as funções da plataforma onde o site for alojado. O projeto atual só tem React/Vite; este endpoint ainda não existe. O alojamento deve também servir `/contactos` através do `index.html`, tal como as restantes rotas.
2. **Alterar apenas a implementação de `submitContactRequest()` em `src/services/contactRequestService.ts`** para fazer um `fetch` ao endpoint, enviando JSON no formato `ContactRequest`: `name` (Nome), `email` (Email), `phone` (Telefone, opcional) e `message` (texto da área Assunto). Preservar o tipo de retorno: devolver `{ status: 'sent' }` apenas depois de o servidor confirmar que o Resend aceitou o envio; lançar um erro quando o pedido falhar. Não devolver sucesso só porque o botão foi clicado.
3. **Configurar os segredos no servidor**: `RESEND_API_KEY`, o email do pai como destinatário (por exemplo, `CONTACT_TO_EMAIL`) e o remetente do domínio verificado (por exemplo, `CONTACT_FROM_EMAIL`). Estes nomes são uma proposta para o futuro backend. A chave do Resend nunca deve entrar em `src/`, em variáveis `VITE_*`, nem no código enviado ao navegador. Verificar o domínio no Resend e configurar os respetivos registos DNS.
4. **No endpoint, validar os campos novamente e limitar envios abusivos.** O destinatário e o remetente são fixos na configuração do servidor, nunca escolhidos pelo visitante. Enviar o email através do Resend com o email do visitante em `Reply-To`, um título como “Novo pedido de informação pelo site” e o corpo em linhas separadas: `Nome: …`, `Email: …`, `Telefone: …` e `Assunto: …`. Se for usado HTML, escapar o conteúdo introduzido pelo visitante. Tratar as respostas de erro do Resend antes de responder ao formulário.
5. **Verificar a integração no alojamento**: submissão válida, campos inválidos, falha do servidor, prevenção de cliques repetidos, email recebido no destinatário configurado e botão Responder dirigido ao visitante. `ContactRequestForm.tsx` já prepara os dados, aguarda a resposta, desativa Enviar enquanto espera, apresenta os estados indisponível/sucesso/erro e limpa o formulário apenas depois de sucesso real. Não precisa de ser reescrito para ligar o backend.

A futura integração da newsletter é independente: o ponto de entrada atual é `handleSubscribe()` em `src/components/SiteFooter.tsx`. Deve passar a chamar um endpoint próprio, caso se pretenda substituir o `mailto:` por uma notificação automática e/ou guardar subscritores numa lista.
