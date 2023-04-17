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
        <meta name="keywords" content="virtual reality, vr, augmented reality, ar, webvr, webxr, webar, mixed reality, xr, headset, quest, hmd, vive, metaverse, oculus, niantic, unity, unreal, 360, immersive" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit = no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/android-chrome-192.png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preload" href="/api/v2/vrmap" as="fetch" crossOrigin="anonymous" />
        <meta property="og:image" content="/vr-ar-xr-new-zealand.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024"/>
      </Head>

        <main className={styles.main}>
        <a href="/additem" target="_blank" rel="noopener noreferrer" className={styles.addButton} >
       Add item</a>
       <a href='https://github.com/bsides44/VR-AR-Ecosystem' target='_blank' rel='noopener noreferrer'><img id={styles.gitButton} src="./github.png" /></a>
          <PrintText></PrintText>
          <Graph></Graph>
        </main>

    </>
  )
}

export default Home
