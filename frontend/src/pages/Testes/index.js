import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';


// import logoImg from '../../assets/logo.svg';
// import herosImg from '../../assets/heroes.png';

export default function Logon() {
    function handleLogin() {
        //alert(1);
    }

    const id = '';

    function geraButoes() {
        var html = '';
        const button = [{
            0: {"src":"", "name": ""},
            1: {"src":"expressionless face", "name": ""},
            2: {"src":"3-slightly-frowning-face", "name": ""},
        }];

        for(var i = 0; i <= 3; i++) {
            html = <button className="button" type="submit"></button>;
        }

        return html;
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src="" alt=""/>

                <form onSubmit={handleLogin}>
                    <h1>Testando botões de reações</h1>

                    <button className="button" type="submit"></button>

                    <Link className="back-link" to="/register">
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src="" alt="Heroes"/>
        </div>
    );

}