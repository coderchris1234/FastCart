import { useCart } from '../../Context/UseCart'
import './Item.css'
function Item(props) {
    const {addToCart} = useCart()
    return (
        <div className="item">
           <img src={props.image[0]} width={'300px'} alt="" /> 
           <p>{props.title}</p>
           <div className="item-prices">
            <div className="item-price-new">
                ${props.price}
            </div>
            <div className="item-price-old">
                $900
            </div>
           </div>
           <button 
            onClick={() => addToCart(props) }
           className='btn'>Add To Cart</button>
        </div>
    )
}

export default Item
