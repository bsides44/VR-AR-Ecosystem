import React from 'react';
import initializeScene from './initializeScene';
import ThreeForceGraph from 'three-forcegraph';
import renderToSprite from './renderToSprite';
import MindMapNode from './MindMapNode';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import * as THREE from 'three';
import colorsByLevel from './colorsByLevel';

export default async function renderMindCloud(div) {
    // adapted from @pahund https://dev.to/pahund/drawing-a-mind-map-with-three-js-and-react-force-directed-graphs-nuffshell-coding-diary-part-iv-1b74

    // Get data
    window.fetch('data.json').then(response => {
            response.json().then(dataJson => {
                console.log('fetched', dataJson)
                addData(dataJson)
            })
        })
    
    async function addData(dataVar){
        const { scene, renderer, camera } = initializeScene(div, dataVar);
        console.log('initializeScene')
        // Create labels 
        dataVar.nodes = await Promise.all(
            dataVar.nodes.map((node) =>
                renderToSprite(<MindMapNode label={node.name} level={node.level} />, {
                width: 120,
                height: 200
                }).then((sprite) => ({ ...node, sprite }))
            )
        );
        console.log('labels created')
        // Create graoh from data
        const Graph = new ThreeForceGraph()
        .graphData(dataVar);
        console.log('graph')

        // Draw labels
        Graph.nodeThreeObject(({ sprite }) => sprite );
        Graph.linkMaterial(
            ({ level }) => new THREE.MeshBasicMaterial({ color: colorsByLevel[level] })
        );
        Graph.linkWidth(1);
        console.log('labels lines drawn')
        scene.add(Graph);
        console.log('graph added to scene')
        // const N = 300;
        // camera.lookAt(Graph.position);
        // camera.position.z = Math.cbrt(N) * 180;

        camera.lookAt(Graph.position);
        camera.position.z = -300
        camera.position.x = -220
        camera.position.y = -100
        console.log('camera set up')
        // Add camera controls
        const tbControls = new TrackballControls(camera, renderer.domElement);
        console.log('trackball cotrolls', tbControls)

        // Kick-off renderer
        (function animate() { // IIFE
            Graph.tickFrame();

            // Frame cycle
            tbControls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        })();
    }
}