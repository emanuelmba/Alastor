import Card from './shared/Card'

function CatalogoItem({ item }) {
  return (
    <Card>
      <img
        className='book'
        src={item.cover}
        alt={item.author + ' - ' + item.title}
        title={item.author + ' - ' + item.title}
      />
    </Card>
  )
}

export default CatalogoItem
