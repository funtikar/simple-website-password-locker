// ==UserScript==
// @name         WhatsappLocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Locks web whatsapp
// @author       AzmoRamon
// @match        https://web.whatsapp.com/*
// @grant        none
// ==/UserScript==
/* eslint-env jquery */
(function() {
    'use strict';
    var pinDiv = document.createElement("div");
    var pin = "pissword";
    var timeoutMinutes = 2;

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
        pinDiv.style = "position: fixed; z-index: 9999; top: 0px; left: 0px; width: 100%; height: 100%; background-color: #fff";
        pinDiv.innerHTML = ``;
        pinDiv.addEventListener('click', unloker, true);
        document.body.appendChild(pinDiv);

        var sheesh = prompt("what password?");
        if (sheesh == pin) {
                //alert("truee")
                pinDiv.style = "position: fixed; z-index: 0; top: 0px; left: 0px; width: 0%; height: 0%; background-color: #fff";

        };
    }
  
    function unloker() {
        var sheesh = prompt("what password?");
        if (sheesh == pin) {
                //alert("truee")
                pinDiv.style = "position: fixed; z-index: 0; top: 0px; left: 0px; width: 0%; height: 0%; background-color: #fff";
        }
    }


})();
