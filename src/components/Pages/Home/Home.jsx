import { CarouselImage } from "../../CarouselImage";
import { News } from "../../News";

const Home = () => {

    return (
        <>
            <div className="page_title"><h1>Навчальна частина факультету закладу вищої освіти</h1></div>
            <CarouselImage />
            <News amount={10}/>
        </>
    );
}

export {Home};