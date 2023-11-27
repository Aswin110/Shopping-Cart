import './category.css'

const Category = () => {
    const images = ['src/assets/images/nikemen.png', 'src/assets/images/nikewomen.png', 'src/assets/images/nikekids.png']

    return (
        <div>
            {images.map((image, index) =>
                <img className='cat' src={image} key={index} ></img>
            )}
        </div>
    )
}

export default Category;
