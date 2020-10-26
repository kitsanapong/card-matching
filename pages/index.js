import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import ControlPanel from '../components/ControlPanel'
import CardBoard from '../components/CardBoard/CardBoard.module'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className=" d-flex flex-row">
          <ControlPanel/>
          <CardBoard/>
        </div>
      </main>
    </div>
  )
}
