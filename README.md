# Frontend Test - Leadster Landing Page

A [Leadster](https://leadster.com.br/) está com [uma vaga aberta](https://www.linkedin.com/jobs/view/3642375120) para o cargo de desenvolvedor front-end. A primeira etapa do processo de seleção é completar o desafio descrito neste documento.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screencast](#screencast)
  - [Links](#links)
  - [Getting started](#getting-started)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Questions](#questions)
  - [Known bugs](#known-bugs)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

O desafio exige que o candidato desenvolva uma *landing page* utilizando HTML e CSS para estrutura e *layout* e Next.js para renderização da página no lado do servidor. As exigências podem ser consultadas em detalhes [nessa apresentação](https://docs.google.com/presentation/d/1nq7d1rpntpfQGOabVO0R7TZzf6_rfFTd/edit#slide=id.g1e43248c0b5_0_22).

### The challenge

O desafio propõe a construção de uma *landing page* para apresentação de conteúdo em vídeo da Leadster. A página, além do cabeçalho e rodapé, possui uma galeria de vídeos. Cada *card* de vídeo abre um *modal* onde o vídeo é reproduzido. O usuário também pode filtrar e ordenar os vídeos, bem como paginar pela galeria.

#### Design

- ✓ Aplicação correta¹ de fontes, cores, tamanhos, espaçamentos, ilustrações, ícones, textos e imagens;
- ✓ Reação de botões e links a *hover over* e *focus*;
- ✓ Responsividade entre 320px e 4k em ambas orientações
  - Texto e espaçamento fluidos;
  - Galeria responsiva;
- ✓ Animações entre transições de estados.

  ¹ Com uma margem de erro por conta das medidas manuais.

#### Funcionalidades

- ✓ Página incrementalmente estática de rápido carregamento renderizada no servidor;
- ✓ Paginação (pelo cliente) da galeria;
- ✓ Filtragem dos vídeos;
- ✓ Ordenação dos vídeos;
- ✓ Vídeo apresentado no *modal* carregado pelo *iframe* oficial do YouTube.

### Screencast

![App preview](./screenshots/screencast.gif)

### Links

- [Remote repository](https://github.com/jvmdo/leadster-frontend-test)

- [Live preview](https://leadster-jvmdo.vercel.app)

### Getting started

Você pode utilizar a aplicação disponível na URL de *live preview* acima. Porém, caso queira construí-la em sua máquina:

#### Prerequisites

Certifique-se de que sua máquina possui Node 18+ instalado e o gerenciador de pacotes `npm`.

#### Installation

Clone o repositório do projeto para sua máquina.

```bash
# Using HTTPS
git clone https://github.com/jvmdo/leadster-frontend-test.git

# Using GitHub CLI
gh repo clone jvmdo/leadster-frontend-test
```

Navegue para o diretório recém-baixado:

```bash
cd leadster-frontend-test
```

Instale as dependências do projeto utilizando `npm`:

```bash
npm install
```

#### Development

Para executar o projeto em modo de desenvolvimento, execute o comando:

```bash
npm run dev
```

Isso irá iniciar o servidor de desenvolvimento no endereço `http://localhost:3000`. Abra seu navegador e cole o endereço para visualizar a aplicação.

#### Building for Production

Para construir o projeto para produção, execute o comando:

To build the project for production, run the following command:

```bash
npm run build
```

Isso irá gerar uma versão otimizada e minificada da aplicação na pasta `.next`.

#### Running in Production Mode

Após a construção do projeto, você pode iniciar um servidor em modo de produção executando o comando:

```bash
npm run start
```

Isso irá iniciar o servidor de produção no mesmo endereço `http://localhost:3000`. Abra seu navegador e cole o endereço para visualizar a aplicação otimizada.

## My process

Inicialmente, eu analisei o *design* fornecido para criar a árvore de componentes, separando entre componentes implementados completamente por mim e componentes disponíveis em bibliotecas. Então, pensei sobre os estados exigidos na tela.

Em seguida, medi os tamanhos dos elementos, fontes e espaçamentos da tela manualmente, para se aproximar ao máximo do original no resultado final.

Por conseguinte, iniciei o projeto. O meu passo zero é sempre configurar o básico necessário: ESLint, *design tokens*, Global CSS reset, *assets* e arquitetura da aplicação. Ainda, modifiquei a propriedade `pageExtensions` [do Next.js](./next.config.js), o que me permite manter arquivos de componentes juntos em um só diretório.

No que diz respeito à estrutura do projeto, adotei uma divisão que acredito ser considerada como "separação de responsabilidades em camadas". É a estrutura mais convencional que encontro em projetos enquanto estudo/pratico.

Para esse projeto, decidi utilizar a abordagem de tamanhos de fonte e espaçamentos fluídos. Para tanto, defini propriedades CSS customizadas no arquivo [Stitches](./src/styles/stitches.config.ts) utilizando seu poderoso recurso `utils`.

--

Finalizadas as configurações, comecei o desenvolvimento de fato. Criei o *layout* padrão e implementei as seções estáticas na seguinte sequência: *header*, *footer*, *call to action*. Para cada uma delas, implementei seus componentes individualmente e os juntei na seção, um por um.

Para a galeria de vídeos, eu segui o mesmo processo: implementação dos componentes individualmente e, então, integração deles na seção um por um. Finalizadas as UI estáticas, partir para o estado da galeria: filtragem, ordenação e paginação.

Na seção principal, pude reaproveitar componentes (*chips*, *select*, *pagination* e *dialog*) que havia utilizado em projetos que desenvolvi anteriormente, com algum nível de adaptação. Isso me ajudou bastante com o tempo que levei para finalizar o desafio.

Por fim, adicionei a funcionalidade de SSG para construção da página com os dados recuperados dos [arquivos JSON](./public/data/), conforme solicitado nas instruções do desafio.

--

Minha intenção inicial era utilizar o novo App Router do Next.js, porém, infelizmente, a biblioteca Stitches está com problemas com Server Components. Por isso, estou utilizando o Page Router.

Por que Stitches? É uma biblioteca no estilo *styled-componentes* com funcionalidades adicionais que facilitam muito a implementação de telas responsivas.

### Built with

#### Technologies, libraries and tools

- React.js
- Next.js
- TypeScript
- Stitches
- Radix UI
- React YouTube
- day.js
- Next SEO
- Phosphor Icons

#### Techniques, concepts and more

- Mobile-first workflow
- Semantic HTML5 markup
- Flexbox / Grid
- Mantine hooks (`use-media-query` only)
- Hosted on Vercel

### What I learned

1. Stitches is currently facing issues with Server Components 😥

2. CSS `calc()` may be tricky! Division requires the divisor to be unit-less. Multiplication requires one of the operands to be unit-less.

    Since Stitches replaces token with the actual value in CSS properties, the `clamp()` calculation does not work. That’s why I use unit-less values in my `theme` object.

    Also, the expression `calc(${token}${unit})` where `token` is a Stitches token and `unit` is string is resulting in `var(--tokenrem)`. Certainly a weird bug.

3. `prop: value, '&': { prop: value }` can be used I a workaround to fallback properties in Stitches.

4. How to embed YouTube videos in React application

5. Next.js `Link` smooth scroll will work only if you `!important` the global `scroll-behavior` rule.

6. In Next.js, during the build process, the server is not running, so you can't make requests to localhost in the build phase. However, you can access the static assets directly from the public folder.

    That's why I can't `fetch('/videos.json')` in the [`fetchVideos()` service](./src/services/videos.ts).

### Questions

1. It would be very wrong if I used Radix UI’s `Accordion` as a way to make the video’s gallery accessible (keyboard navigation)?

2. `grid` and `inset: 0` definitely introduce height and scroll issues I don’t know why. It happened with me again in `DialogOverflow`. Fortunately, `flex` fix the scroll problem.

3. Why does `VideoDialog` animation on close is not working? 😤

4. Why does `scrollIntoView` does not work properly, mainly when the window scroll is near the end? It results in unexpected scroll position every now and then.

5. My filtering logic relies on the `initialState`: whenever the chips change, I apply the filter to the initial state rather than the current state. As a result, if the current state is sorted, the subsequent state won't retain the sorting since it is filtered from the `initialState`. I'm concerned about the effectiveness of my logic. Is there a more optimal approach I can implement?

6. What’s the best way to use `filterOptions` and `sortingOptions` items? Plain strings (as I am using) is error prone. I am thinking about `enum` but I’m not sure it’s really any better.

7. Why does linter complains about `public/data.json` but for files of other types (img, svg, etc)?

### Known bugs

**THE MOST ANNOYING ONE**: `scrollIntoView()` is not really working on Edge Desktop (maybe Chrome as well) 😠😠😠. So, when you paginate through gallery, the scrollbar snaps to random positions. It is working on Firefox Desktop and on my Chrome mobile.

1. The current pagination page remains through orientation change, which can lead to an `empty` page. For example, suppose you are on page 4 in portrait mode then change to landscape. In this mode, the last page is 3, but the app state is still 4. On landscape, the total number of pages was reduced (since each page has more room on larger viewport).
    - Reproduce: emulate iPhone SE (375x667). On portrait mode, go to page 4. Change to landscape.

      Result: page without content. Click on any controls to fix (except `next page`).

    - Thoughts: I think reset to page 1 is not good for UX reasons.

    - Proposed solution: update the state to the last available page.

2. The page scrolls smoothly to the top of main content when pagination controls are used. However, it does not work when scroll position is near to the end of the window.
    - Reproduce: emulate iPhone SE (375x667). Go from page 3 to 4.

      Result: unexpected scroll position or no scroll at all.

### Continued development

**MUST HAVE**: tests (at least unit and integration)

1. Gallery could be lazy loaded with server pagination

2. I tried Mantine UI to use its `Rating` and `Pagination` components. However, I went through hydration problems I could not solve at time. So, I decided to drop it for now

3. A nice future feature would be a responsive gallery according to the amount of items available and the viewport width. My "responsive" implementation changes the rows per page on fixed breakpoints, which leads to the presence of empty cells for some device sizes.

4. Improve accessibility

5. Improve SEO

6. Get videos data from Google APIs (I didn't do that because of the challenge instructions)

7. Fix that errors generated by bad YouTube *iframe* setup.

### Useful resources

1. [Is Stitches dead? 💀](https://github.com/stitchesjs/stitches/issues/1144)

2. [Stitches App Router issues](https://github.com/stitchesjs/stitches/issues/1109)

3. [mayank99's CSS reset](https://github.com/mayank99/reset.css/blob/main/package/index.css?utm_source=pocket_saves)

4. [Next.js Font optimization](https://blog.logrocket.com/next-js-font-optimization-custom-google-fonts/#adding-global-font-style)

5. [Change the YouTube iframe sizes](https://github.com/tjallingt/react-youtube/issues/242#issuecomment-623885531)

6. [Next.js Link smooth scroll issue](https://www.reddit.com/r/nextjs/comments/y7cdtj/comment/itqxdvn/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

7. [Intro to the new `text-wrap: balance`](https://ishadeed.com/article/css-text-wrap-balance/)

## Author

- GitHub - [jvmdo](https://github.com/jvmdo)

- Frontend Mentor - [@jvmdo](https://www.frontendmentor.io/profile/jvmdo)

- CodeWars - [jvmdo](https://www.codewars.com/users/jvmdo)

- LinkedIn - [João Oliveira](https://www.linkedin.com/in/de-oliveira-joao/)

## Acknowledgments

Agradeço aos responsáveis da vaga pela oportunidade de mostrar um pouco do que posso fazer na prática, ao invés de exigirem uma ~~caralh~~ carga de tecnologias e ferramentas 👍👍
