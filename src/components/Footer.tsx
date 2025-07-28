import FooterList from "./FooterList.tsx";
import logo from "../assets/icons/logo.svg"

import numberPhone from "../assets/icons/numberPhone.svg"
// import insta from "../assets/icons/insta.svg"

const Footer = () => {
    return (
        <footer className={'bg-[linear-gradient(246deg,#170A00_4.96%,#170600_33.7%,#0F0700_68.41%,#170A00_96.42%)]' +
            'px-[130px] py-[70px]'
        }>
            <div>
                <div className="flex justify-between items-start">
                    <img src={logo} alt={logo}/>

                    <FooterList title={"Home"} items={["To Order", "About us", "Events", "Menu"]} />
                    <FooterList title={"Events"} items={["3 Pizza 1 Free Coffee", "2 Pizza for 1 Price", "Kitchen Tour"]} />
                    <FooterList title={"Menu"} items={["Show All", "Seaproducts ", "Vegan", "Meat"]} />
                    <FooterList title={"About Us"} items={["Our History", "Why We?"]} />
                </div>

                <div className={'flex justify-between mt-[109px]'}>
                    <img src={numberPhone} alt={numberPhone}/>

                    {/*<ul>*/}
                    {/*    <li>*/}
                    {/*        <img src={insta} alt={insta}/>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <img src="" alt=""/>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <img src="" alt=""/>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
