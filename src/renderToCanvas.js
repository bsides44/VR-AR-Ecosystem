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
  <style type="text/css">
    <![CDATA[
      ${document.getElementById('styles').innerHTML}
    ]]>
  </style>
  <foreignObject width="${width}" height="${height}">
  </foreignObject>
  </svg>`;
  const image = await loadImage(url)
  console.log('image loaded')
  ctx.drawImage(image, 0, 30);
  console.log('drawing image')

  return canvas;
}
