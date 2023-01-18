import { renderToStaticMarkup } from 'react-dom/server';

function loadImage(url) {
  const image = new window.Image();
  console.log('loading image')

  return new Promise((resolve) => {
    image.onload = () => resolve(image);
    image.src = url;
  });
}

export default async function renderToCanvas(content, { width, height }) {
  console.log('Rendering to canvas')

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  console.log('canvase created')

  const ctx = canvas.getContext('2d');
  console.log('canvase context')

  // const url = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  //     <style type="text/css">
  //       <![CDATA[
  //         ${document.getElementById('styles').innerHTML}
  //       ]]>
  //     </style>
  //     <foreignObject width="${width}" height="${height}">
  //     ${renderToStaticMarkup(content)}
  //     </foreignObject>
  //     </svg>`;
  const url = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <style id="styles" type="text/css">
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  foreignObject {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  .mind-map-node {
    padding: 10px;
    width: 120px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 3px;
    border-style: solid;
    border-radius: 12px;
    text-align: center;
    font-weight: bold;
  }

  .magenta {
    color: rgb(241, 3, 200);
    border-color: rgb(241, 3, 200);
    background-color: rgb(251, 175, 238);
  }

  .violet {
    color: rgb(134, 3, 241);
    border-color: rgb(134, 3, 241);
    background-color: rgb(215, 166, 254);
  }

  .blue {
    color: rgb(0, 100, 210);
    border-color: rgb(0, 100, 210);
    background-color: rgb(176, 213, 254);
  }

  .turquoise {
    color: rgb(3, 211, 207);
    border-color: rgb(3, 211, 207);
    background-color: rgb(190, 254, 253);
  }
</style>
      <foreignObject width="${width}" height="${height}">
      ${renderToStaticMarkup(content)}
      </foreignObject>
      </svg>`;
  const image = await loadImage(url)
  console.log('image loaded')
  ctx.drawImage(image, 0, 30);
  console.log('drawing image')

  return canvas;
}
