import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

function Score(props) {
  const { name = '', value = '-'} = props
  return (
    <div className="score click-number d-flex flex-column">
      <div className="name">{name}</div>
      <div className="value">{value}</div>
    </div>
  )
}

function Button() {
  return (
    <div>New Game</div>
  )
}

function ControlPanel() {
  return (
    <div className="control-panel d-flx flex-column">
      <Score name="Click"/>
      <Score name="My Best"/>
      <Score name="Global Best"/>
      <Button/>
    </div>
  )
}

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
        </div>
      </main>
    </div>
  )
}
