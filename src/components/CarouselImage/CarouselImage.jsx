import { Carousel } from 'react-bootstrap';
import Glory from '../images/Glory.jpg';
import img1 from "../images/img1.jpeg"
import img2 from "../images/img2.jpeg"
import "./CarouselImage.css";

const CarouselImage = () => {
    return (
        <>
            <div  className="wrapper_Carousel">
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Glory} alt="image" />
                        <Carousel.Caption>
                            <h3>Доброго дня</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="image" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="image" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> 
            </div>
        </>
    );
}

export {CarouselImage};