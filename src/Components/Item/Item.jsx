import './Item.css'
function Item(props) {
    return (
        <div className="item">
           <img src='/hero_image.png' width={'300px'} alt="" /> 
           <p>{props.title}</p>
           <div className="item-prices">
            <div className="item-price-new">
                ${props.price}
            </div>
            <div className="item-price-old">
                $900
            </div>
           </div>
           <button>Add To Cart</button>
        </div>
    )
}

export default Item
