// ==UserScript==
// @name         WhatsappLocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Locks web whatsapp
// @author       AzmoRamon
// @match        https://web.whatsapp.com/*
// @match        https://keep.google.com/*
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==
/* eslint-env jquery */
(function() {
    'use strict';
    var pinDiv = document.createElement("div");
    document.body.appendChild(pinDiv);

    var pin = "femon";
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
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("authOK").click();
  }
    }, false);
    window.document.getElementById("thePass").focus();

    function setupInterval() {
        idleTimer = setInterval(hide, timeoutMinutes * 60000);
    }
function cubafokus() {
            window.document.getElementById("thePass").focus();
        }
    function hide() {

        var thisWindow = window;
        var theHTMLA =""
        pinDiv.style = "position: fixed; z-index: 9999; top: 0px; left: 0px; width: 100%; height: 100%; background-color: #fff";
        theHTMLA += "<h3>Timeout has happen</h3>";
        theHTMLA += "Password: <input type='password' id='thePass' placeholder='Enter Password...'/>";
        theHTMLA += "<br />";
        theHTMLA += "<input type='button' value='OK' id='authOK' hidden />"
        pinDiv.innerHTML = theHTMLA;
        var thePass = thisWindow.document.getElementById("thePass").value;
        window.document.getElementById("thePass").addEventListener('focusout',cubafokus )
        window.addEventListener('load', function () {
            window.document.getElementById("thePass").focus();
        })
        thisWindow.document.getElementById("authOK").onclick = function () {
            doAuthentication(thisWindow,thisWindow.document.getElementById("thePass").value);
        }


    }

    function doAuthentication(wodo, pass) {
        if (pass==pin){
            pinDiv.style = "position: fixed; z-index: 0; top: 0px; left: 0px; width: 0%; height: 0%; background-color: #fff";
            window.document.getElementById("thePass").removeEventListener('focusout', cubafokus)
        }
    }


})();
