import React from "react";
import style from "./Footer.module.css";
import {AiOutlineHome} from "react-icons/ai"
import {
    BsFillPersonFill, 
    BsFillClipboardCheckFill, 
    BsFillEnvelopePlusFill, 
    BsFillFolderFill} 
    from "react-icons/bs"


const Footer = () => {
    return (
        <nav className={style.container}>
            <div className={style.nav}>
                <a href="#"><AiOutlineHome/> INICIO</a>
                <a href="#"><BsFillPersonFill/> SOBRE MI</a>
                <a href="#"><BsFillClipboardCheckFill/> EXPERIENCIA</a>
                <a href="#"><BsFillFolderFill/> PROYECTOS</a>
                <a href="#"><BsFillEnvelopePlusFill/> CONTACTAME</a>
            </div>
        </nav>
    )
}

export default Footer;