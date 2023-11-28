import propTypes from 'prop-types';
import './card.css'

function Card ({image, title, category, price, addToCart }) {


    return (
        <div className='card'>
            <img className="productImage" src={image} alt="" />
            <div >{title}</div>
            <div className='category'>{category}</div>
            <div>${price}</div>
            <button onClick={addToCart}>Add to Bag</button>
        </div>
    )
}

Card.propTypes ={
    image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    addToCart: propTypes.func,
}

export default Card;