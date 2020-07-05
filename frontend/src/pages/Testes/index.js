import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';


import './styles.css';


import smiley from '../../../assets/1-smiley.png';
import neutral from '../../../assets/2-neutral-face.png';
import slightly from '../../../assets/3-slightly-frowning-face.png';

export default function Testes() {
    function handleLogin() {
        //alert(1);
    }

    const id = '';

    const button = [{
        0: {"src":"1-smiley", "name": "smile"},
        1: {"src":"2-neutral-face", "name": "neutral"},
        2: {"src":"3-slightly-frowning-face", "name": "slightly"},
    }];

    // var state = {
    //     show: false
    // }
    //
    // handleOpen = () => {
    //     this.setState({ show: true })
    // }
    //
    //
    // handleClose = () => {
    //     this.setState({ show: false })
    // }

    return (
        <div className="logon-container">
            <section className="form">
                <img src="" alt=""/>

                <form onSubmit={handleLogin}>
                    <h1>Testando botões de reações</h1>

                    <img className="smile first" src={smiley} alt=""/>
                    <img className="smile" src={neutral} alt=""/>
                    <img className="smile" src={slightly} alt=""/>


                    {/*Alerta que deveria mostrar as ações*/}
                    {/*<SCLAlert*/}
                        {/*theme="info"*/}
                        {/*show="true"*/}
                        {/*title="Lorem"*/}
                        {/*subtitle="Lorem ipsum dolor"*/}
                    {/*>*/}
                        {/*<SCLAlertButton theme="info" onPress="false">Done</SCLAlertButton>*/}
                    {/*</SCLAlert>*/}

                </form>
            </section>
        </div>
    );


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })

}