import React from "react";
import style from "./Navbar.module.css";
import {AiOutlineHome} from "react-icons/ai"
import {
    BsFillPersonFill, 
    BsFillClipboardCheckFill, 
    BsFillEnvelopePlusFill, 
    BsFillFolderFill} 
    from "react-icons/bs"
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={style.container}>
            <div className={style.nav}>
                <Link to={"/"}><a><AiOutlineHome/> INICIO</a></Link>
                <Link to={"sobremi"}><a href="#"><BsFillPersonFill/> SOBRE MI</a></Link>
                <a href="#"><BsFillClipboardCheckFill/> EXPERIENCIA</a>
                <a href="#"><BsFillFolderFill/> PROYECTOS</a>
                <a href="#"><BsFillEnvelopePlusFill/> CONTACTAME</a>
            </div>
        </nav>
    )
}

export default Navbar;