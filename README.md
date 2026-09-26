# Toranja Links

Uma página de links rápida, responsiva e acessível para reunir os canais oficiais de Henrique Maciel em um só lugar.

O projeto foi desenvolvido com a identidade visual da [Toranja Tech](https://toranjatech.com.br/) e será publicado como uma página para bio de redes sociais, com domínio planejado em `link.toranjatech.com`.

## Links disponíveis

- Kick
- Instagram
- TikTok
- Twitch
- YouTube

Cada canal é apresentado como um botão completo, com ícone, chamada e nome de usuário. Essa abordagem deixa a navegação mais clara do que uma lista formada somente por ícones.

## Identidade visual

O layout utiliza as cores oficiais da Toranja Tech:

- Laranja: `#F38A0F`
- Amarelo: `#FFCD04`
- Marrom escuro: `#1E1208`
- Marrom café: `#300E00`

As fontes utilizadas são Clash Display nos títulos e Inter nos textos da interface.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- SVG
- Ionicons

## Estrutura do projeto

```text
devlinks-master/
├── assets/
│   ├── avatar.png
│   ├── instagram.svg
│   ├── kick.svg
│   ├── tiktok.svg
│   ├── toranja-mark.svg
│   └── toranja-wordmark.svg
├── index.html
├── script.js
└── style.css
```

## Como executar

Clone ou baixe o projeto e abra o arquivo `index.html` no navegador.

Para executar com um servidor local:

```bash
python -m http.server 4173
```

Depois, acesse `http://localhost:4173`.

## Como editar os links

Os canais estão centralizados no array `socialLinks`, localizado no início do arquivo `script.js`:

```js
{
  platform: "Instagram",
  title: "Me siga no Instagram",
  url: "https://www.instagram.com/zhenriquemaciel",
  handle: "@zhenriquemaciel",
  icon: { type: "image", source: "./assets/instagram.svg" },
}
```

Para adicionar um canal, inclua um novo objeto no array. O cartão será renderizado automaticamente na página.

## Acessibilidade e experiência

- Layout mobile-first e responsivo
- Áreas de toque amplas
- Navegação por teclado
- Foco visível nos elementos interativos
- Rótulos descritivos para leitores de tela
- Suporte a `prefers-reduced-motion`
- Links externos protegidos com `noopener noreferrer`

## Publicação na Vercel

O projeto é totalmente estático e não exige etapa de build:

1. Importe o repositório na Vercel.
2. Selecione a opção de projeto estático.
3. Mantenha os campos de build e diretório de saída vazios.
4. Após a publicação, configure o domínio `link.toranjatech.com`.

## Próximos passos

- Criar um painel para cadastrar, editar e ordenar links
- Persistir os dados em um banco de dados
- Adicionar autenticação para administração
- Medir cliques e desempenho de cada canal
- Preparar espaços para monetização por anúncios

## Créditos

- Identidade visual: [Toranja Tech](https://toranjatech.com.br/)
- Ícones de Kick, Instagram e TikTok: [Streamline](https://www.streamlinehq.com/)
- Desenvolvimento: Henrique Maciel
