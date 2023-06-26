import { useLocation } from "react-router";
import "./NewsDescription.css"

const NewsDescription = () => {
    
    const index = useLocation().state;
    console.log(index);

    const {imgN: img, titleN: title, articleN: article} = useLocation().state;

    return (
        <>
            <div className="wrapper_NewsD">
                <div className="imgdiv_NewsD"><img className="img_NewsD" src={img} alt="Img" /></div>
                <div className="title_NewsD"><h2>{title}</h2></div>
                <div className="txtdiv_NewsD"><p className="txtArea_NewsD">{article}</p></div>
            </div>
        </>
    );
}

export {NewsDescription};