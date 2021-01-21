import React from "react";
import './style.css'
import heroesimg from "../../assets/heroes.png"
import logo from "../../assets/webhero10.png"
import {FiLogIn} from "react-icons/fi"
import {FiInfo} from "react-icons/fi"
export default function login() {
    return (
    <div className="login-container">
    
        <section className="form">
        <img src={logo} id="logo" alt="Webehero" height={200}/>
        <form>
            
            <input placeholder="Login de ONG digite aqui seu ID:"></input>
            <button className="button" type="submit">Entrar</button>
            <div className="links">
            <FiLogIn size={16} color="#d81f27"/>
            <a href="/register">Clique aqui caso não tenha uma conta</a>

              </div>
              <div className="links">
           
            <FiInfo size={16} color="rgb(0, 189,215)"/>
            <a href="/register">Para mais informações sobre o Webehero</a>
              </div>
           
        </form>
        </section>
        <img src={heroesimg} alt="Heores" id="capa"/>
    </div>
    );
}