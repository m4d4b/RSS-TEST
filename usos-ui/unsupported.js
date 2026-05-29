function n(){const e={pl:{h1:"Niewspierana przegl\u0105darka",content:`Ta przegl\u0105darka nie jest wspierana w USOSweb.
            Aby korzysta\u0107 z serwisu, pobierz aktualn\u0105 wersj\u0119 jednej z poni\u017Cszych przegl\u0105darek`},en:{h1:"Unsupported browser",content:`This browser is not supported in USOSweb.
            In order to use the service, please download the current version of one of the browsers listed below\u201D`}},t=document.documentElement.lang,o=e[t]||e.pl;document.body.innerHTML=`<div class="usos-ui" style="margin: 5rem auto; max-width: max(20rem, 50vw);">
            <h1>${o.h1}</h1>
            <p>${o.content}:</p>
            <ul>
                <li><em><a href="https://www.mozilla.org/pl-PL/firefox/new/">Mozilla Firefox</a></em></li>
                <li><em><a href="https://www.google.com/chrome/">Google Chrome</a></em></li>
            </ul>
        </div>`}window.addEventListener("DOMContentLoaded",function(){const e=[!!window.customElements,(function(){return"noModule"in document.createElement("script")})(),CSS.supports("color","var(--test)"),CSS.supports("selector(:is(div))"),(function(){const o=document.createElement("dialog");return!!window.HTMLDialogElement&&typeof o.showModal=="function"})()],t=[CSS.supports("grid-template-columns","subgrid"),CSS.supports("selector(:focus-within"),CSS.supports("selector(:focus-visible"),HTMLElement.prototype.hasOwnProperty("popover")];if(!e.every(Boolean)){n();return}t.every(Boolean)||console.warn("Ta przegl\u0105darka mog\u0142aby by\u0107 nowsza")});
//# sourceMappingURL=unsupported.js.map
