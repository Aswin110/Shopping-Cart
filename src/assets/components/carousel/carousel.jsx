import './carousel.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

function Carousel () {
    let [current, setCurrent] = useState (0)
    const images = [ 'src/assets/images/nike1.png', 'src/assets/images/nike2.png','src/assets/images/nike3.png', 'src/assets/images/nike4.png', 'src/assets/images/nike5.png']
    const length = images.length;
    console.log(current);

    const prev = () => {
        setCurrent(current === 0? length - 1: current - 1)
    }

    const next = () => {
        setCurrent(current === length - 1? 0: current + 1)
    }


    return (
        <div>
            <span className="arrowIcon">
                <FontAwesomeIcon className='arrow' onClick={prev} icon={faCircleChevronLeft} style={{"--fa-secondary-color": "#ffffff",}} />
                <FontAwesomeIcon className='arrow' onClick={next} icon={faCircleChevronRight} style={{"--fa-secondary-color": "#ffffff",}} />
            </span>
            <img className='images' src={images[current]}></img>
            
        </div>
    )
}

export default Carousel;