import './category.css';
import nikeKids from '../../../../public/images/nikekids.png'
import nikeMen from '../../../../public/images/nikemen.png'
import nikeWomen from '../../../../public/images/nikewomen.png'

const Category = () => {

    function men() {
        console.log('men');
    }

    const women = () => {
        console.log('women');
    }

    const kids = () => {
        console.log('kids');
    }

    const images = [{key:1, url:nikeMen ,func: men},
                    {key:2, url:nikeWomen, func: women},
                    {key:3, url: nikeKids, func: kids}];

    

    return (
        <div>
            {images.map((image) =>
                <img className='cat' src={image.url} key={image.key} onClick={image.func} ></img>
            )}
        </div>
    )
}

export default Category;
