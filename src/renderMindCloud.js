import React from 'react';
import initializeScene from './initializeScene';
import ThreeForceGraph from 'three-forcegraph';
import renderToSprite from './renderToSprite';
import MindMapNode from './MindMapNode';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import * as THREE from 'three';
import colorsByLevel from './colorsByLevel';

export default async function renderMindCloud(div) {
    
    let selectedObject = null;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    let group;
    let groupArr = []
    let returnColor;

    const { scene, renderer, camera } = initializeScene(div);

    // Get data
    window.fetch('https://nextjsdemo-eight-bay.vercel.app/api/v1/vrmap').then(response => {
            response.json().then(dataJson => {
                addData(dataJson)
            })
        })
    
    async function addData(dataVar){
        group = new THREE.Group();
        scene.add( group );

        // Create labels 
        // adapted from @pahund https://dev.to/pahund/drawing-a-mind-map-with-three-js-and-react-force-directed-graphs-nuffshell-coding-diary-part-iv-1b74
        dataVar.nodes = await Promise.all(
            dataVar.nodes.map((node) =>
                renderToSprite(<MindMapNode label={node.name} level={node.level} val={node.val} />, {
                width: 150,
                height: 250
                }).then((sprite) => {
                    // change position of label based on length, so it is still close to link
                    if (node.name.length < 15) sprite.center.y = 0.65
                    if (node.name.length > 16 && node.name.length < 40 ) sprite.center.y = 0.6
                    if (node.name.length > 41 && node.name.length < 60 ) sprite.center.y = 0.45
                    if (node.name.length > 61) sprite.center.y = 0.2

                    groupArr.push(sprite);
                    return ({ ...node, sprite })
                })
            )
        );

        // Create graph from data
        const Graph = new ThreeForceGraph()
        .graphData(dataVar);

        // Draw labels
        Graph.nodeThreeObject(({ sprite }) => sprite );
        Graph.linkMaterial(
            ({ level }) => new THREE.MeshBasicMaterial({ color: colorsByLevel[level] })
        );
        Graph.linkWidth(0.9);
        Graph.linkResolution(10)
        // reduce length of last link so it doesn't intersect label
        Graph.linkPositionUpdate((line, { start, end }, linkData) => {
           const linkIsNotLast = dataVar.links.find((link) => {
                return link.source.id === linkData.target.id
            })

            if (!linkIsNotLast) {
                const vStart = new THREE.Vector3(start.x, start.y, start.z);
                const vEnd = new THREE.Vector3(end.x, end.y, end.z + 2);
                const distance = vStart.distanceTo(vEnd);
              
                line.position.x = vStart.x;
                line.position.y = vStart.y;
                line.position.z = vStart.z;
              
                line.scale.z = distance;
              
                line.parent.localToWorld(vEnd);
                line.lookAt(vEnd);
              
                return true;
            }
            else return false;
          })

        scene.add(Graph);

        camera.lookAt(Graph.position);
        camera.position.z = -300
        camera.position.x = -220
        camera.position.y = -100

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
        
        window.addEventListener( 'resize', onWindowResize );
        document.addEventListener( 'pointermove', onPointerMove );
        // document.addEventListener( 'click', onClick );
        // document.addEventListener( 'touchstart', onClick );
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function onPointerMove( event ) {
        // reset selected sprite after hover
        if ( selectedObject ) {
            selectedObject.material.color.set( returnColor );
            selectedObject = null;
        }

        pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        // set up raycaster 
        raycaster.setFromCamera( pointer, camera );

        // add sprites to group object so we know where they are in scene
        groupArr.map((item => {
            return group.add(item)
        }))
        // collect hovered sprites
        const intersects = raycaster.intersectObject( group, true );

        if ( intersects.length > 0 ) {
            // get the first one
            const res = intersects.filter( function ( res ) {
                return res && res.object;
            } )[ 0 ];

            if ( res && res.object ) {
                // change colour of hovered sprite
                selectedObject = res.object;
                returnColor = selectedObject.material.color.getHex()
                selectedObject.material.color.set( '#f103c8' );
            }

        }

    }

    // async function onClick( event ) {
    //     // go to url prop on click
    //     if (selectedObject && selectedObject.__data.url) {
    //         window.innerWidth >= 600 ?
    //             // open new tab on desktop
    //             window.open(selectedObject.__data.url, '_blank', 'noopener') :
    //             // new window works better on mobile
    //             window.location = (selectedObject.__data.url)
    //     }
    // }
}