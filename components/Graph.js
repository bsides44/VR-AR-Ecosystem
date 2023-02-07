import { useRef, useEffect } from 'react'
import { useWindowSize } from '@react-hook/window-size/throttled'
import { useMapData } from '../lib/useMapData'
import ForceGraph3D from 'react-force-graph-3d'
import SpriteText from 'three-spritetext'

function _handleNodeClick(event) {
  if (event.url) {
    window.open(event.url)
  }
} 

export default function Graph(props) {
  const [width, height] = useWindowSize();
  const forceRef = useRef(null);

  const { data, isLoading, isError } = useMapData()

  // with [] - only runs when component is first mounted
  useEffect(() => {
    // example of accessing the instance
    if (forceRef.current) {
      forceRef.current.d3Force('charge').strength(-500);
      forceRef.current.width = width
      forceRef.current.height = height
    }
  }, [data, width, height])

  const colours = ['#f103c8', '#8603f1', '#0064d2', '#0ba075', '#0591d0', '#cb9310'];
  const textHeights = [14, 12, 10, 9, 9, 9];

  return (
    // see https://www.npmjs.com/package/3d-force-graph for options
    <>
    {(!isLoading && data.nodes && data.links) &&
        <ForceGraph3D
      graphData={ data }
      nodeAutoColorBy="level"
      nodeOpacity={1}
      linkAutoColorBy="level"
      linkWidth={1.5}
      linkOpacity={0.7}
      width={width}
      height={height}
      ref={forceRef}
      nodeThreeObject={(node) => {
        const sprite = new SpriteText(node.name)
        sprite.material.depthWrite = false; // make sprite background transparent
        sprite.color = colours[node.level]
        sprite.textHeight = textHeights[node.level]
        return sprite
      }}
      onNodeClick={_handleNodeClick}
      // --- saves the nodes when you move them ---
      onNodeDragEnd={(node) => {
        node.fx = node.x
        node.fy = node.y
        node.fz = node.z
      }}
    />
    }
    </>
    
  )
}
