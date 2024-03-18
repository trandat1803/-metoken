import './RoadMap.scss';
import {pricingInfo} from '../../Data'
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const RoadMap = () => {
    useEffect(() =>{
        Aos.init({duration: 1000});
    });
  return (
    <section className='pricing'>
        <h2 data-aos="fade-up">Roadmap</h2>
        <div className='pricing__container wrapper'>
            {
                pricingInfo.map(({image, name, price}) => (
                    <div className='pricing__card' data-aos="fade-up">
                        <img src={image} alt={name}/>
                        <span>{price}</span>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default RoadMap
