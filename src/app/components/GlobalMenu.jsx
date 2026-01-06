'use client'
import { useEffect, useState } from "react";
import PcMenu from "./PcMenu";
import SpMenu from "./SpMenu";

const GlobalMenu = () => {
    const [isOn, setIsOn] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const windowMedia = window.matchMedia('(max-width: 768px)');
        setIsOn(windowMedia.matches);
        const handleChange = (e) => {
            setIsOn(e.matches);
        };
        windowMedia.addEventListener("change",handleChange);

        return () => windowMedia.removeEventListener("change", handleChange);
    },[])

    if (!mounted) return null;
    return (
        <>
        {isOn ? <SpMenu /> : <PcMenu /> }
        </>

    )
}
export default GlobalMenu;
