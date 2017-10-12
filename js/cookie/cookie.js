'use strict';

import { cookie } from "cookie_js";

// var cookie = require("cookie_js");

var cookieDom = document.querySelector('.cookie-consent');
var ccButton = document.querySelector('.cookie-consent .button');

log('var');

// log(cookie.get('cc'));

// cookie.set('cc', 'agree');

ccButton.addEventListener('click', acceptCookie);

log('event');

if (!cookie.get('cc')) {
    cookie.set('cc', 'deny', {expires: 30});
}

if (cookie.get('cc') === 'agree') {
    cookieDom.classList.add('hide');
} else {
    cookieDom.classList.remove('hide');
}

function acceptCookie () {
    console.log('acceptCookie');
    cookie.set('cc', 'agree', {expires: 30});
    this.parentNode.classList.add('hide');
}

function log(x) {
    console.log(x);
}
