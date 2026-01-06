'use client'
import {  useState } from "react";
import { SiteData } from "@/data/SiteData";
import Link from "next/link";
const SpMenu = () => {
    const [isOpen,setIsOpen] = useState(false);



    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="header">
            <button onClick={handleClick} className={`hamburger ${isOpen ? "active": ""}`}>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
            </button>

            <nav id="nav-menu" className={`nav ${isOpen ? "active": ""}`}>
                <ul className="nav__list">
                {SiteData.map((data) => (
                    <li className="nav__item" key={data.id}><Link onClick={handleClick} className="nav__link" href={data.url}>{data.title}</Link></li>
                ))}

                </ul>
            </nav>
        </div>
    )
}
export default SpMenu;
