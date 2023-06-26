import "./Contacts.css"

const Contacts = () => {
    return (
        <>
           <div className="page_title"><h1>Контакти</h1></div>
           <div className="wrapper_contacts">
                <p><b>Адреса:</b>  36011, м. Полтава Першотравневий проспект, 24</p>
                <p><b>Телефон приймальної комісії:</b>  +38 (0532)56-16-04, +38 (099)057-65-17</p>
                <div className="wrapper_links">
                    <a href="https://www.instagram.com/itm.nupp/">Instagram</a>
                    <a href="https://www.facebook.com/it.nupp">Facebook</a>
                    <a href="mailto:itm@nupp.edu.ua">itm@nupp.edu.ua</a>
                </div>
           </div>
        </>
    );
}

export {Contacts};