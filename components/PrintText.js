import { useMapData } from '../lib/useMapData'
import styles from '@/styles/Home.module.css'

const PrintText = () => {

  const { data, isLoading, isError } = useMapData()

  return (
    <div className={styles.directory}>
    {(!isLoading && data.nodes && data.links) &&
        data.nodes.map(node => 
          <div className='row' key={node.id}>
          <p>
          {node.name}
          </p>
          <p>
            {node.url ? <a href={node.url} rel="noopener noreferrer" target="_blank">{node.url}</a> : ""}
          </p>
          </div>
          )
    }
    </div>
    
  )
}

export default PrintText
