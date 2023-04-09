import Location from "./Location";
import FooterButton from "./FooterButton";
import "../styles/footer.css"
import Leaf from "./Leaf"
const Footer = () => {
    return(
        <div className="footer">
            <div className="location"><Location /></div>
             <hr/>
            <div className="moreinfo">
                <div className="about">
                    <FooterButton text = {"About"}/>
                    <FooterButton text = {"Advertising"}/>
                    <FooterButton text = {"Business"} />
                    <FooterButton text = {"How Search work"}/>
                </div>
                <div className="carbon">
                    <Leaf />
                    <FooterButton text = {"Carbon neutral since 2007"}/>
                </div>
                <div className="privacy">
                    <FooterButton text = {"Privacy"} />
                    <FooterButton text = {"Terms"} />
                    <FooterButton text = {"Settings"} />
                </div>
            </div>
        </div>
    )
}

export default Footer;