import './Item.css'
function Item(props) {
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
           <button className='btn'>Add To Cart</button>
        </div>
    )
}

export default Item
