# Gabrielly | Digital Design

Landing page em HTML, CSS e JavaScript puros (sem build): hero com foto em Tilted Card, Tech Text, soluções em Accordion Gallery, diferenciais, portfólio SwipeCard com Chroma Grid, fundo líquido (WebGL) e contato pelo WhatsApp.

## Estrutura

```
index.html          página
css/style.css       estilos
js/main.js          animações e interações
assets/img/         foto de perfil e conceitos do portfólio
assets/fonts/       fonte Circuit Forem
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie todos os arquivos desta pasta (inclusive `.nojekyll`).
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`, e salve.
4. Em alguns minutos o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## O que editar

- **WhatsApp:** o número está em `js/main.js` (constante `wa`) e nos links `https://wa.me/...` do `index.html`.
- **E-mail:** procure `gabrielygamachagas@gmail.com` no `index.html`.
- **Instagram:** há um comentário no rodapé do `index.html` indicando onde colocar o link.
- **Portfólio:** os três cards são conceitos demonstrativos; troque os arquivos em `assets/img/` e os textos no `index.html`.
- **Soluções:** os quatro painéis do acordeão estão no `index.html` (classe `ag`).

## Aviso sobre a fonte

A Circuit Forem foi baixada com licença de uso pessoal. Para uso comercial (como neste site, que divulga um serviço), adquira a licença com o autor antes de publicar, ou troque a fonte em `css/style.css` (variável `--fd`).
