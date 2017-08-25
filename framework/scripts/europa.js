var ECL=function(e){"use strict";function t(e,t){return t={exports:{}},e(t,t.exports),t.exports}function n(e){var t=void 0===e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":u(e))}function o(e){return"symbol"==(void 0===e?"undefined":u(e))||i(e)&&S.call(e)==v}function r(e){if("number"==typeof e)return e;if(o(e))return f;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var i=h.test(e);return i||g.test(e)?y(e.slice(2),i?2:8):p.test(e)?f:+e}function c(e,t){return e===t||!!(16&e.compareDocumentPosition(t))}function l(e){e.setAttribute("aria-hidden",!0)}var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))},s="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",f=NaN,v="[object Symbol]",m=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,b="object"==u(s)&&s&&s.Object===Object&&s,E="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,_=b||E||Function("return this")(),S=Object.prototype.toString,L=Math.max,k=Math.min,w=function(){return _.Date.now()},A=function(e,t,i){function o(t){var n=v,i=m;return v=m=void 0,b=t,h=e.apply(i,n)}function c(e){return b=e,g=setTimeout(s,t),E?o(e):h}function l(e){var n=e-b,i=t-(e-y);return _?k(i,p-n):i}function a(e){var n=e-y,i=e-b;return void 0===y||n>=t||n<0||_&&i>=p}function s(){var e=w();if(a(e))return u(e);g=setTimeout(s,l(e))}function u(e){return g=void 0,S&&v?o(e):(v=m=void 0,h)}function f(){var e=w(),n=a(e);if(v=arguments,m=this,y=e,n){if(void 0===g)return c(y);if(_)return g=setTimeout(s,t),o(y)}return void 0===g&&(g=setTimeout(s,t)),h}var v,m,p,h,g,y,b=0,E=!1,_=!1,S=!0;if("function"!=typeof e)throw new TypeError(d);return t=r(t)||0,n(i)&&(E=!!i.leading,p=(_="maxWait"in i)?L(r(i.maxWait)||0,t):p,S="trailing"in i?!!i.trailing:S),f.cancel=function(){void 0!==g&&clearTimeout(g),b=0,v=y=m=g=void 0},f.flush=function(){return void 0===g?h:u(w())},f},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.classToRemove,o=void 0===i?"ecl-context-nav__item--over-limit":i,r=n.hiddenElementsSelector,c=void 0===r?".ecl-context-nav__item--over-limit":r,l=n.context,s=void 0===l?document:l;e&&(a(c,s).forEach(function(e){e.classList.remove(o)}),t.parentNode.removeChild(t))},q=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.context,o=void 0===i?document:i,r=n.forceClose,c=void 0!==r&&r,l=n.closeSiblings,a=void 0!==l&&l,s=n.siblingsSelector,u=void 0===s?"[aria-controls][aria-expanded]":s;if(t){var d=document.getElementById(t.getAttribute("aria-controls"));if(d){var f=!0===c||"true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!f),d.setAttribute("aria-hidden",f),!0===a&&Array.prototype.slice.call(o.querySelectorAll(u)).filter(function(e){return e!==t}).forEach(function(t){e(t,{context:o,forceClose:!0})})}}},C=t(function(e,t){!function(t,n){e.exports=n()}(0,function(){function e(e,t){return this.el=e,this.se=t&&t.scrollEl||window,this.offset=t&&t.stickyBitStickyOffset||0,this.vp=t&&t.verticalPosition||"top",this.useClasses=t&&t.useStickyClasses||!1,this.styles=this.el.style,this.setStickyPosition(),"fixed"!==this.positionVal&&!0!==this.useClasses||this.manageStickiness(),this}function t(e){this.privateInstances=e||[];var t=this.privateInstances;this.cleanup=function(){for(var e=0;e<t.length;e+=1)t[e].cleanup()}}return e.prototype.setStickyPosition=function(){for(var e=["","-o-","-webkit-","-moz-","-ms-"],t=this.styles,n=this.vp,i=0;i<e.length;i+=1)t.position=e[i]+"sticky";return""!==t.position?(this.positionVal=t.position,"top"===n&&(t[n]=this.offset+"px")):this.positionVal="fixed",this},e.prototype.manageStickiness=function(){function e(e,n){var i=t.className.split(" ");n&&-1===i.indexOf(n)&&i.push(n);var o=i.indexOf(e);-1!==o&&i.splice(o,1),t.className=i.join(" ")}var t=this.el,n=t.parentNode,i=this.positionVal,o=this.vp,r=this.styles,c=this.se,l=c===window,a=l||"fixed"!==i?0:c.getBoundingClientRect().top,s=a+this.offset,u=void 0!==c.requestAnimationFrame?c.requestAnimationFrame:function(e){e()};n.className+=" js-stickybit-parent";var d=l?n.getBoundingClientRect().top:n.getBoundingClientRect().top-a,f=d+n.offsetHeight-(t.offsetHeight-s),v="default";return this.manageState=function(){var t=l?c.scrollY||c.pageYOffset:c.scrollTop,n=t>d&&t<f&&("default"===v||"stuck"===v),a=t<d&&"sticky"===v,m=t>f&&"sticky"===v;n?(v="sticky",u(function(){e("js-is-stuck","js-is-sticky"),r.bottom="",r.position=i,r[o]=s+"px"})):a?(v="default",u(function(){e("js-is-sticky"),"fixed"===i&&(r.position="")})):m&&(v="stuck",u(function(){e("js-is-sticky","js-is-stuck"),"fixed"===i&&(r.top="",r.bottom="0",r.position="absolute")}))},c.addEventListener("scroll",this.manageState),this},e.prototype.cleanup=function(){function e(e,t){var n=e,i=n.className.split(" "),o=i.indexOf(t);-1!==o&&i.splice(o,1),n.className=i.join(" ")}var t=this.el,n=this.styles;n.position="",n[this.vp]="",e(t,"js-is-sticky"),e(t,"js-is-stuck"),e(t.parentNode,"js-stickybit-parent"),this.se.removeEventListener("scroll",this.manageState),this.manageState=!1},function(n,i){var o="string"==typeof n?document.querySelectorAll(n):n;"length"in o||(o=[o]);for(var r=[],c=0;c<o.length;c+=1){var l=o[c];r.push(new e(l,i))}return new t(r)}})}),T=t(function(e,t){!function(t,n){e.exports=n(t)}(void 0!==s?s:s.window||s.global,function(e){var t,n,i,o,r,c,l,a={},s="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),u=[],d={selector:"[data-gumshoe] a",selectorHeader:"[data-gumshoe-header]",container:e,offset:0,activeClass:"active",scrollDelay:!1,callback:function(){}},f=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(n,e[i],i,e);else for(var o=0,r=e.length;o<r;o++)t.call(n,e[o],o,e)},v=function e(){var t={},n=!1,i=0,o=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],i++);i<o;i++)!function(i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n&&"[object Object]"===Object.prototype.toString.call(i[o])?t[o]=e(!0,t[o],i[o]):t[o]=i[o])}(arguments[i]);return t},m=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},p=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},h=function(e){var n=0;if(e.offsetParent)do{n+=e.offsetTop,e=e.offsetParent}while(e);else n=e.offsetTop;return(n=n-r-t.offset)>=0?n:0},g=function(t){var n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(e.innerHeight||document.documentElement.clientHeight)&&n.right<=(e.innerWidth||document.documentElement.clientWidth)},y=function(){u.sort(function(e,t){return e.distance>t.distance?-1:e.distance<t.distance?1:0})};a.setDistances=function(){i=p(),r=o?m(o)+h(o):0,f(u,function(e){e.distance=h(e.target)}),y()};var b=function(){var e=document.querySelectorAll(t.selector);f(e,function(e){if(e.hash){var t=document.querySelector(e.hash);t&&u.push({nav:e,target:t,parent:"li"===e.parentNode.tagName.toLowerCase()?e.parentNode:null,distance:0})}})},E=function(){c&&(c.nav.classList.remove(t.activeClass),c.parent&&c.parent.classList.remove(t.activeClass))},_=function(e){E(),e.nav.classList.add(t.activeClass),e.parent&&e.parent.classList.add(t.activeClass),t.callback(e),c={nav:e.nav,parent:e.parent}};a.getCurrentNav=function(){var n=e.pageYOffset;if(e.innerHeight+n>=i&&g(u[0].target))return _(u[0]),u[0];for(var o=0,r=u.length;o<r;o++){var c=u[o];if(c.distance<=n)return _(c),c}E(),t.callback()};var S=function(){f(u,function(e){e.nav.classList.contains(t.activeClass)&&(c={nav:e.nav,parent:e.parent})})};a.destroy=function(){t&&(t.container.removeEventListener("resize",k,!1),t.container.removeEventListener("scroll",k,!1),u=[],t=null,n=null,i=null,o=null,r=null,c=null,l=null)};var L=function(e){window.clearTimeout(n),n=setTimeout(function(){a.setDistances(),a.getCurrentNav()},66)},k=function(e){n||(n=setTimeout(function(){n=null,"scroll"===e.type&&a.getCurrentNav(),"resize"===e.type&&(a.setDistances(),a.getCurrentNav())},66))};return a.init=function(e){s&&(a.destroy(),t=v(d,e||{}),o=document.querySelector(t.selectorHeader),b(),0!==u.length&&(S(),a.setDistances(),a.getCurrentNav(),t.container.addEventListener("resize",k,!1),t.scrollDelay?t.container.addEventListener("scroll",L,!1):t.container.addEventListener("scroll",k,!1)))},a})}),j=function(e,t){return function(n){if(e&&e.hasAttribute("aria-haspopup")){var i=e.getAttribute("aria-haspopup");""!==i&&"true"!==i||(n.preventDefault(),q(e,{context:t,closeSiblings:!0}))}}},N=function(e,t){return function(n){var i=e.parentElement,o=i.previousElementSibling||i.parentElement.lastElementChild,r=i.nextElementSibling||i.parentElement.firstElementChild;if(!n.metaKey&&!n.altKey)switch(n.keyCode){case 13:case 32:j(n.currentTarget,t)(n);break;case 37:case 38:n.preventDefault(),o.querySelector("a").focus();break;case 39:case 40:n.preventDefault(),r.querySelector("a").focus()}}},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.classToRemove,o=void 0===i?"ecl-timeline__item--over-limit":i,r=n.hiddenElementsSelector,c=void 0===r?".ecl-timeline__item--over-limit":r;e&&(Array.prototype.slice.call(e.querySelectorAll(c)).forEach(function(e){e.classList.remove(o)}),t.parentNode.removeChild(t))};return e.accordions=function(){function e(e){var t=document.getElementById(e.getAttribute("aria-controls"));e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true")}function t(e){var t=document.getElementById(e.getAttribute("aria-controls"));e.setAttribute("tabindex",0),e.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false")}function n(n){"true"!==n.getAttribute("aria-expanded")?t(n):e(n)}function i(e,t){e[t].focus()}function o(e){n(e.currentTarget)}function r(e){var t=e.currentTarget,o=e.metaKey||e.altKey,r=t.parentNode.parentNode,c=a(m,r),l=[].indexOf.call(c,t);if(!o)switch(e.keyCode){case 13:case 32:n(t),e.preventDefault();break;case 37:case 38:i(c,0===l?c.length-1:l-1),e.preventDefault();break;case 39:case 40:i(c,l<c.length-1?l+1:0),e.preventDefault()}}function c(e){a(m,e).forEach(function(e){e.addEventListener("click",o),e.addEventListener("keydown",r)})}function l(e){a(m,e).forEach(function(e){e.removeEventListener("click",o),e.removeEventListener("keydown",r)})}function s(){p.length&&p.forEach(function(e){c(e)})}var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=u.selector,f=void 0===d?".ecl-accordion":d,v=u.headerSelector,m=void 0===v?".ecl-accordion__header":v;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var p=a(f);return s(),{init:s,destroy:function(){p.forEach(function(e){l(e)})}}},e.carousels=function(){function e(){return h.querySelector(".ecl-carousel__item").offsetWidth}function t(e){g[p].classList.remove("ecl-carousel__item--showing"),p=(e+g.length)%g.length,g[p].classList.add("ecl-carousel__item--showing")}function n(){var t=e(),n="translate3d("+-p*t+"px, 0, 0)";y.style.MozTransform=n,y.style.msTransform=n,y.style.OTransform=n,y.style.WebkitTransform=n,y.style.transform=n}function i(){h.querySelector(".ecl-carousel__meta-slide").textContent=p+1+" / "+g.length}function o(){var e=a("[data-image]");e&&e.forEach(function(e){return e.style.display="none"}),h.querySelector('[data-image="'+p+'"]').style.display="block"}function r(){t(p-1),n(),i(),o()}function c(){t(p+1),n(),i(),o()}function l(){var e=document.createElement("ul");e.className="ecl-carousel__controls ecl-list--unstyled",e.innerHTML='\n      <li>\n        <button type="button" class="ecl-icon ecl-icon--left ecl-carousel__button ecl-carousel__button--previous">\n          <span class="ecl-u-sr-only">Previous</span></button>\n      </li>\n      <li>\n        <button type="button" class="ecl-icon ecl-icon--right ecl-carousel__button ecl-carousel__button--next">\n          <span class="ecl-u-sr-only">Next</span>\n        </button>\n      </li>\n    ',e.querySelector(".ecl-carousel__button--previous",".ecl-carousel__controls").addEventListener("click",r),e.querySelector(".ecl-carousel__button--next",".ecl-carousel__controls").addEventListener("click",c),h.querySelector(".ecl-carousel__list-wrapper").appendChild(e)}function s(){var e=h.querySelector(".ecl-carousel__controls");h.querySelector(".ecl-carousel__list-wrapper").removeChild(e)}function u(){var e=document.createElement("div");e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.classList.add("ecl-carousel__meta-slide"),h.querySelector(".ecl-carousel__live-region").appendChild(e)}function d(){var e=h.querySelector(".ecl-carousel__meta-slide");h.querySelector(".ecl-carousel__live-region").removeChild(e)}function f(){l(),u(),t(0),i(),o(),window.addEventListener("resize",b)}var v=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).selectorId,m=void 0===v?"ecl-carousel":v;if(!("querySelector"in document&&"addEventListener"in window))return null;var p=0,h=document.getElementById(m),g=a(".ecl-carousel__item",h),y=h.querySelector(".ecl-carousel__list"),b=function(){return A(function(){n()},100,{maxWait:300})()};return f(),{init:f,destroy:function(){s(),d(),window.removeEventListener("resize",b)}}},e.contextualNavs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-context-nav":t,i=e.buttonSelector,o=void 0===i?".ecl-context-nav__more":i,r=e.hiddenElementsSelector,c=void 0===r?".ecl-context-nav__item--over-limit":r,l=e.classToRemove,s=void 0===l?"ecl-context-nav__item--over-limit":l,u=e.context,d=void 0===u?document:u;a(n,d).forEach(function(e){var t=d.querySelector(o);t&&t.addEventListener("click",function(){return x(e,t,{classToRemove:s,hiddenElementsSelector:c})})})},e.dropdown=function(e){var t=Array.prototype.slice.call(document.querySelectorAll(e));document.addEventListener("click",function(n){t.forEach(function(t){if(!c(t,n.target)){var i=document.querySelector(e+" > [aria-expanded=true]"),o=document.querySelector(e+" > [aria-hidden=false]");o&&(i.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0))}})})},e.dialogs=function(){function e(){p.setAttribute("aria-hidden",!0),h.setAttribute("aria-hidden",!0),b&&b.focus()}function t(t){switch(t.keyCode){case 9:if(1===y.length){t.preventDefault();break}t.shiftKey?document.activeElement===E&&(t.preventDefault(),_.focus()):document.activeElement===_&&(t.preventDefault(),E.focus());break;case 27:e()}}function n(){p.setAttribute("aria-hidden",!1),h.setAttribute("aria-hidden",!1),b=document.activeElement,E.focus(),h.addEventListener("click",e),p.addEventListener("keydown",t)}function i(t){t.forEach(function(e){return e.addEventListener("click",n)}),a(".ecl-message__dismiss").forEach(function(t){t.addEventListener("click",e)})}function o(t){t.forEach(function(e){return e.removeEventListener("click",n)}),a(".ecl-message__dismiss").forEach(function(t){t.removeEventListener("click",e)})}function r(){m.length&&i(m)}var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=c.triggerElementsSelector,s=void 0===l?"[data-ecl-dialog]":l,u=c.dialogWindowId,d=void 0===u?"ecl-dialog":u,f=c.dialogOverlayId,v=void 0===f?"ecl-overlay":f;if(!("querySelector"in document&&"addEventListener"in window))return null;var m=a(s),p=document.getElementById(d),h=document.getElementById(v);if(!h){var g=document.createElement("div");g.setAttribute("id","ecl-overlay"),g.setAttribute("class","ecl-dialog__overlay"),g.setAttribute("aria-hidden","true"),document.body.appendChild(g),h=g}var y=[].slice.call(a('\n        a[href],\n        area[href],\n        input:not([disabled]),\n        select:not([disabled]),\n        textarea:not([disabled]),\n        button:not([disabled]),\n        [tabindex="0"]\n      ',p)),b=null,E=y[0],_=y[y.length-1];return r(),{init:r,destroy:function(){o(m)}}},e.toggleExpandable=q,e.initExpandables=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[aria-controls][aria-expanded]",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;Array.prototype.slice.call(t.querySelectorAll(e)).forEach(function(e){return e.addEventListener("click",function(n){q(e,{context:t}),n.preventDefault()})})},e.fileUploads=function(){function e(e,t){if(0!==t.length){for(var n="",i=0;i<t.length;i+=1){var o=t[i];"name"in o&&(i>0&&(n+=", "),n+=o.name)}e.innerHTML=n}}function t(t){"files"in t.target&&a(v,t.target.parentNode).forEach(function(n){e(n,t.target.files)})}function n(e){var t=e.metaKey||e.altKey;a(d,e.target.parentNode).forEach(function(n){if(!t)switch(e.keyCode){case 13:case 32:e.preventDefault(),n.click()}})}function i(e){a(d,e).forEach(function(e){e.addEventListener("change",t)}),a(p,e).forEach(function(e){e.addEventListener("keydown",n)})}function o(e){a(d,e).forEach(function(e){e.removeEventListener("change",t)}),a(p,e).forEach(function(e){e.removeEventListener("keydown",n)})}function r(){h.length&&h.forEach(function(e){i(e)})}var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=c.selector,s=void 0===l?".ecl-file-upload":l,u=c.inputSelector,d=void 0===u?".ecl-file-upload__input":u,f=c.valueSelector,v=void 0===f?".ecl-file-upload__value":f,m=c.browseSelector,p=void 0===m?".ecl-file-upload__browse":m;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var h=a(s);return r(),{init:r,destroy:function(){h.forEach(function(e){o(e)})}}},e.eclLangSelectPages=function(){function e(e){if(!e)return null;var t=a(l,e)[0];return e.classList.contains(r)?a(u,e)[0].offsetLeft+t.offsetWidth<e.offsetWidth&&e.classList.remove(r):t&&t.offsetLeft+t.offsetWidth>e.offsetWidth&&e.classList.add(r),!0}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.selector,i=void 0===n?".ecl-lang-select-page":n,o=t.toggleClass,r=void 0===o?"ecl-lang-select-page--dropdown":o,c=t.listSelector,l=void 0===c?".ecl-lang-select-page__list":c,s=t.dropdownSelector,u=void 0===s?".ecl-lang-select-page__dropdown":s,d=t.dropdownOnChange,f=void 0===d?void 0:d;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var v=a(i);return v.forEach(function(t){if(e(t),f){var n=a(u,t)[0];n&&n.addEventListener("change",f)}}),void window.addEventListener("resize",A(function(){v.forEach(e)},100,{maxWait:300}))},e.initMessages=function(){Array.prototype.slice.call(document.getElementsByClassName("ecl-message__dismiss")).forEach(function(e){return e.addEventListener("click",function(){return l(e.parentElement)})})},e.navigationInpages=function(){function e(){C(r,{useStickyClasses:!0})}function t(){T.init({selector:l,activeClass:s,offset:v,callback:function(e){e&&(document.querySelector(d).innerHTML=e.nav.innerHTML)}})}function n(){e(),t()}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=i.stickySelector,r=void 0===o?".ecl-navigation-inpage":o,c=i.spySelector,l=void 0===c?".ecl-navigation-inpage__link":c,a=i.spyClass,s=void 0===a?"ecl-navigation-inpage__link--is-active":a,u=i.spyTrigger,d=void 0===u?".ecl-navigation-inpage__trigger":u,f=i.spyOffset,v=void 0===f?20:f;return"querySelector"in document&&"addEventListener"in window&&document.documentElement.classList?(n(),{init:n}):null},e.megamenu=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-navigation-menu":t,i=e.toggleSelector,o=void 0===i?".ecl-navigation-menu__toggle":i,r=e.listSelector,c=void 0===r?".ecl-navigation-menu__root":r,l=e.linkSelector,s=void 0===l?".ecl-navigation-menu__link":l;a(n).forEach(function(e){var t=e.querySelector(o);t&&t.addEventListener("click",function(){return q(t,{context:e})});var n=e.querySelector(c);a(s,n).forEach(function(e){e.addEventListener("click",j(e,n)),e.addEventListener("keydown",N(e,n))})})},e.eclTables=function(){var e=document.getElementsByClassName("ecl-table");[].forEach.call(e,function(e){for(var t=[],n="",i=0,o=[],r=e.querySelectorAll("tbody tr"),c=e.querySelectorAll("thead tr th"),l=e.querySelectorAll("thead tr")[0].querySelectorAll("th").length-1,a=e.querySelectorAll("tbody tr")[0].querySelectorAll("td").length,s=-1,u=0;u<c.length;u+=1)c[u].getAttribute("colspan")&&(s=u),t[u]=[],t[u]=c[u].textContent;if(-1!==s){n=t.splice(s,1),i=s,o=e.querySelectorAll("th[colspan]")[0].getAttribute("colspan");for(var d=0;d<o;d+=1)t.splice(i+d,0,t[l+d]),t.splice(l+1+d,1)}[].forEach.call(r,function(e){for(var i=0;i<a;i+=1)if(""===t[i]||" "===t[i]?e.querySelectorAll("td")[i].setAttribute("class","ecl-table__heading"):e.querySelectorAll("td")[i].setAttribute("data-th",t[i]),-1!==s){var r=e.querySelectorAll("td")[s];r.setAttribute("class","ecl-table__group-label"),r.setAttribute("data-th-group",n);for(var c=1;c<o;c+=1)e.querySelectorAll("td")[s+c].setAttribute("class","ecl-table__group_element")}})})},e.tabs=function(){function e(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=a(d+" li",e.parentElement.parentElement),i=a(v,e.parentElement.parentElement);n.forEach(function(e){e.setAttribute("tabindex",-1),e.removeAttribute("aria-selected")}),i.forEach(function(e){e.setAttribute("aria-hidden","true")}),e.setAttribute("tabindex",0),e.setAttribute("aria-selected","true"),t&&e.focus(),document.getElementById(e.getAttribute("aria-controls")).removeAttribute("aria-hidden")}function t(t){e(t.currentTarget),t.preventDefault()}function n(t){var n=t.currentTarget,i=n.previousElementSibling||n.parentElement.lastElementChild,o=n.nextElementSibling||n.parentElement.firstElementChild;if(!t.metaKey&&!t.altKey)switch(t.keyCode){case 37:case 38:e(i),t.preventDefault();break;case 39:case 40:e(o),t.preventDefault()}}function i(e){a(p,e).forEach(function(e){e.addEventListener("click",t),e.addEventListener("keydown",n)})}function o(e){a(p,e).forEach(function(e){e.removeEventListener("click",t),e.removeEventListener("keydown",n)})}function r(){h.forEach(i)}var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=c.selector,s=void 0===l?".ecl-tabs":l,u=c.tablistSelector,d=void 0===u?".ecl-tabs__tablist":u,f=c.tabpanelSelector,v=void 0===f?".ecl-tabs__tabpanel":f,m=c.tabelementsSelector,p=void 0===m?d+" li":m;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var h=a(s);return r(),{init:r,destroy:function(){h.forEach(o)}}},e.timelines=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-timeline":t,i=e.buttonSelector,o=void 0===i?".ecl-timeline__button":i,r=e.hiddenElementsSelector,c=void 0===r?".ecl-timeline__item--over-limit":r,l=e.classToRemove,a=void 0===l?"ecl-timeline__item--over-limit":l,s=e.context,u=void 0===s?document:s;Array.prototype.slice.call(u.querySelectorAll(n)).forEach(function(e){var t=u.querySelector(o);t&&t.addEventListener("click",function(){return O(e,t,{classToRemove:a,hiddenElementsSelector:c})})})},e}({});