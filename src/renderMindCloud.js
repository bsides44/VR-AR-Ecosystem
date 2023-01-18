import React from 'react';
import data from './data';
import initializeScene from './initializeScene';
import ThreeForceGraph from 'three-forcegraph';
import renderToSprite from './renderToSprite';
import MindMapNode from './MindMapNode';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import * as THREE from 'three';
import colorsByLevel from './colorsByLevel';

export default async function renderMindCloud(div) {
    // adapted from @pahund https://dev.to/pahund/drawing-a-mind-map-with-three-js-and-react-force-directed-graphs-nuffshell-coding-diary-part-iv-1b74

    const { scene, renderer, camera } = initializeScene(div, data);

    // Create labels 
    data.nodes = await Promise.all(
        data.nodes.map((node) =>
            renderToSprite(<MindMapNode label={node.name} level={node.level} />, {
            width: 120,
            height: 200
            }).then((sprite) => ({ ...node, sprite }))
        )
    );

    // Add data
    const Graph = new ThreeForceGraph()
    .graphData(data);

    // Draw labels
    Graph.nodeThreeObject(({ sprite }) => sprite );
    Graph.linkMaterial(
        ({ level }) => new THREE.MeshBasicMaterial({ color: colorsByLevel[level] })
      );
    Graph.linkWidth(1);
    Graph.scale.set(0.005, 0.005, 0.005);
    scene.add(Graph);

    // const N = 300;
    // camera.lookAt(Graph.position);
    // camera.position.z = Math.cbrt(N) * 180;

    camera.lookAt(Graph.position);
    // camera.position.z = -300
    // camera.position.x = -220
    // camera.position.y = -100
    
    // Add camera controls
    const tbControls = new TrackballControls(camera, renderer.domElement);

    // Kick-off renderer
    (function animate() { // IIFE
        Graph.tickFrame();

        // Frame cycle
        tbControls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    })();
}