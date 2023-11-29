import './carousel.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import nike1 from '../../../../public/images/nike1.png';
import nike2 from '../../../../public/images/nike2.png';
import nike3 from '../../../../public/images/nike3.png';
import nike4 from '../../../../public/images/nike4.png';
import nike5 from '../../../../public/images/nike5.png';


function Carousel () {
    let [current, setCurrent] = useState (0)
    const images = [nike1, nike2, nike3, nike4, nike5];
    const length = images.length;

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