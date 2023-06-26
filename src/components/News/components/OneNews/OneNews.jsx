import "./OneNews.css"
import { Link } from 'react-router-dom';

const OneNews = ({img, title, article}) => {

    return (
        <>
            <div className="wrapper_OneNews">
                <div className="imgdiv_OneNews"><img className="img_OneNews" src={img} alt="Img" /></div>
                <div className="title_OneNews"><Link to="/newsdescription/" state={{imgN: img, titleN: title, articleN: article}} ><h2>{title}</h2></Link></div>
                <div className="txtdiv_OneNews"><p className="txtArea_OneNews">{article}</p></div>
            </div>
        </>
    );
}

export {OneNews};