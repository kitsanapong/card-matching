import Card from './Card/Card.module'

function CardBoard() {
  return (
    <div className="card-baord d-flex flex-row flex-wrap">
      <Card value={1}/>
      <Card value={2}/>
      <Card value={3}/>
      <Card value={4}/>
      <Card value={5}/>
      <Card value={6}/>
      <Card value={7}/>
      <Card value={8}/>
      <Card value={9}/>
    </div>
  )
}

export default CardBoard