import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="d-flex flex-row">
          <div>Hello</div>
          <div>Hello</div>
        </div>
      </main>
    </div>
  )
}
