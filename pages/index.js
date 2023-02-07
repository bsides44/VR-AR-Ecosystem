import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import PrintText from '@/components/PrintText'

function Home(props) {
  const router = useRouter()
  const Graph = dynamic(() => import('@/components/Graph'), {
    ssr: false,
  })

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>VR AR Ecosystem of New Zealand</title>
        <meta name="description" content="A 3D directory map of Augmented Reality (AR) and Virtual Reality (VR) developers, workers, thinkers, makers and practitioners in New Zealand" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit = no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/api/v2/vrmap" as="fetch" crossOrigin="anonymous" />
      </Head>

        <main className={styles.main}>
        <a href="/additem" target="_blank" rel="noopener noreferrer" className={styles.addButton} >
       Add item</a>
          <Graph></Graph>
          <PrintText></PrintText>
        </main>

    </>
  )
}

export default Home
