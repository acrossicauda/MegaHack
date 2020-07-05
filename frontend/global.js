import React from 'react';
import { StyleSheet } from 'react-native';
import App from "./App";
// @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
export const style = StyleSheet.create({

// * {
//     margin: 0;
//     padding: 0;
//     outline: 0;
//     box-sizing: border-box;
// },

    body: {
        backgroundColor: "#641A4C"
    },

    name: {

        position: "absolute !important",
        width: "257px !important",
        height: "62px !important",
        margin: "25% 0% 0 42px",

        background: "#7B1B60",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "6px",

        fontFamily: "Times New Roman",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "21px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        color: "#FFF9F9",

        border: "1px solid #FBF2F2",
        paddinLeft: "27%",
    },

    config: {

        position: "absolute !important",
        width: "257px !important",
        height: "62px !important",
        margin: "47% 0% 0 42px",

        background: "#7B1B60",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "6px",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "16px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        color: "#F8F0F0",
        paddingLeft: "25%",
    },

    alerta: {
        position: "absolute !important",
        width: "257px !important",
        height: "62px !important",
        margin: "69% 0% 0 42px",
        background: "#7B1B60",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "6px",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "16px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        color: "#F4EBEB",

        paddingLeft: "25%",

        /*background: url('baseline_alarm_add_white_18dp.png'),*/

    },


    fieldSet: {
        margin: "93% 0% 0 12%",
        paddingHorizontal: "10",
        paddingBottom: "10",
        borderRadius: "5",
        borderWidth: "1",
        alignItems: 'center',
        borderColor: '#000',

        position: "absolute",
        width: "257px",
        height: "303px",

        background: "#FEF7FC",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
    },

    legend: {
        position: "absolute",
        top: "-10px",
        left: "10px",
        fontWeight: "bold",
        backgroundColor: "#FFFFFF",
    },


    bgColor2: {
        backgroundColor: "#641A4C",
    },

    campos1: {
        backgroundColor: "#7B1B60",
    },

    smile: {
        width: "87px",
        height: "87px",
        margin: "63% 27px 0 0",
    },
    first : {
        marginLeft: "10% !important",
    },

});

export default style;