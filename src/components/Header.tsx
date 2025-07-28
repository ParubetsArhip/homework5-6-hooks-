interface NavItem {
    name: string;
    link: string;
    id: number;
}

import logo from '../assets/icons/logo.svg'
import basket from '../assets/icons/basket.svg'
import { useState } from 'react';

export default function Header() {
    const menuItems: NavItem[] = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Menu", link: "/" },
        { id: 3, name: "Events", link: "/" },
        { id: 4, name: "About us", link: "/" }
    ]
    
    const [activeItem, setActiveItem] = useState<number>(1)

	return (
        <header className={'flex items-center justify-between mt-[57px]'}>
            <img className={'cursor-pointer'} src={logo} alt="Logo" />

            <ul className={'flex items-center gap-[80px]'}>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => setActiveItem(item.id)}
                            className={`text-[18px] transition cursor-pointer
                            ${activeItem === item.id ? "text-orange-500" : "text-gray-300"}`}
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>

            <div className={'flex items-center gap-[20px]'}>
                <button
                    className={'bg-[linear-gradient(262deg,#FF5D29_12.12%,#FE9C1C_86.72%)]' +
                        ' rounded-full px-[56px] py-[11px] text-[#fff] font-medium text-[18px] ' +
                        'cursor-pointer'
                }
                >
                    Log in
                </button>
                <button className={'cursor-pointer  rounded-full ' +
                    'bg-[linear-gradient(262deg,#FF5D29_12.12%,#FE9C1C_86.72%)]'}>
                    <img className={'px-[11px] py-[11px]'} src={basket} alt="Basket" />
                </button>
            </div>
        </header>
	);
}
