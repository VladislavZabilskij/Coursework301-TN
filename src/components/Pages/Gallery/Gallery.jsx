import "./Gallery.css"
import logoNUPP from "../../images/logoNUPP.png"
import Glory from "../../images/Glory.jpg"

const Gallery = () => {
    const imgArr = [Glory, logoNUPP, Glory, logoNUPP,logoNUPP,logoNUPP,logoNUPP,logoNUPP];

    return (
        <>
            <div className="page_title"><h1>Галерея</h1></div>
            <div className="wrapper_gallery">
                {imgArr.reverse().map(img => (
                    <img className="img_gallery" src={img} alt="img" />
                ))}
            </div>
        </>
    );
}

export {Gallery};