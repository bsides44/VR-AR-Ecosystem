const MapListEntity = (props) => {
  const buildTree = (nodes, parent, level = 1) => {
    const children = nodes.filter((node) => node.parent === parent)
    return (
      <ul>
        {children.map((node) => (
          <li key={node.id}>
            {node.url ? <a href={node.url}>{node.name}</a> : node.name}
            {buildTree(nodes, node.id)}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>{Array.isArray(props.nodes) ? buildTree(props.nodes, null) : ''}</div>
  )
}

export default MapListEntity
