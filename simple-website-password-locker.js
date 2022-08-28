// ==UserScript==
// @name         WhatsappLocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Locks web whatsapp
// @author       AzmoRamon
// @match        https://web.whatsapp.com/*
// @match        https://keep.google.com/*
// @grant        none
// ==/UserScript==
/* eslint-env jquery */
(function() {
    'use strict';
    var pinDiv = document.createElement("div");
    var pin = "pokol";
    var timeoutMinutes = 1.5;

    var idleTimer = null;

    hide();
    setupInterval();
    document.addEventListener("click", function () {
        clearInterval(idleTimer);
        setupInterval();
    }, false);
    document.addEventListener("keypress", function () {
        clearInterval(idleTimer);
        setupInterval();
    }, false);





    function setupInterval() {
        idleTimer = setInterval(hide, timeoutMinutes * 60000);
    }

    function hide() {

        //var pinDiv = document.createElement("div");
        pinDiv.style = "position: fixed; z-index: 9999; top: 0px; left: 0px; width: 100%; height: 100%; background-color: #fff";
        pinDiv.innerHTML = ``;
        pinDiv.addEventListener('click', prontog, true);
        document.body.appendChild(pinDiv);

    }
    function unloker() {
        var sheesh = prompt("what password?");

        if (sheesh == pin) {
                //alert("truee")
                pinDiv.style = "position: fixed; z-index: 0; top: 0px; left: 0px; width: 0%; height: 0%; background-color: #fff";
                //document.body.removeChild(pinDiv);

        }
        }
    function prontog() {
        var thePrompt = window.open("", "", "left=512,top=340,width=300,height=200");

        var theHTML = "";
        //theHTML +="<head><link rel=”stylesheet” href=”https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css”rel=”nofollow” integrity=”sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I” crossorigin=”anonymous”></head>"
        theHTML += "<h3>Timeout has happen</h3>";
        theHTML += "<br/>";
        theHTML += "Password: <input type='password' id='thePass' placeholder='Enter Password...'/>";
        theHTML += "<br />";
        theHTML += "<input type='button' value='OK' id='authOK'/>"
        theHTML += "<title>Login Page</title>";
        thePrompt.document.body.innerHTML = theHTML;

        //var theUser = thePrompt.document.getElementById("theUser").value;
        var thePass = thePrompt.document.getElementById("thePass").value;
        thePrompt.document.getElementById("authOK").onclick = function () {
            doAuthentication(thePrompt,thePrompt.document.getElementById("thePass").value);
        }
    }
    function doAuthentication(wodo, pass) {
        if (pass==pin){
            pinDiv.style = "position: fixed; z-index: 0; top: 0px; left: 0px; width: 0%; height: 0%; background-color: #fff";
        }
        wodo.close();


    }


})();
