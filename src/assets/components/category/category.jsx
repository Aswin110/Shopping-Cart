import './category.css';
// import { useState } from 'react';
// import { Link } from 'react-router-dom'

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

    const images = [{key:1, url:'src/assets/images/nikemen.png',func: men},
                    {key:2, url:'src/assets/images/nikewomen.png', func: women},
                    {key:3, url:'src/assets/images/nikekids.png', func: kids}];

    

    return (
        <div>
            {images.map((image) =>
                <img className='cat' src={image.url} key={image.key} onClick={image.func} ></img>
            )}
        </div>
    )
}

export default Category;
