import React from "react";
import style from "./Home.module.css";
import fotoperfil from "../../Images/perfil.png"


const Home = () => {
    return (
        <div className={style.container}>
            <div className={style.cuadro1}>
                <img src={fotoperfil} alt="Profile" className={style.img}/>
                <h1>HOLA! SOY MATEO</h1>
            </div>
        </div>
    );
}

export default Home;
