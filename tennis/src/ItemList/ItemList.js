import './ItemList.css'
import Item from '../ItemList/Item'

const ItemList = ({products }) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList