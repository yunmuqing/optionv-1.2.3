var e;e=function(e){var n=/\+/g;function o(e){return t.raw?e:encodeURIComponent(e)}function i(e){return o(t.json?JSON.stringify(e):String(e))}function r(o,i){var r=t.raw?o:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),t.json?JSON.parse(e):e}catch(e){}}(o);return e.isFunction(i)?i(r):r}var t=e.cookie=function(n,c,a){if(void 0!==c&&!e.isFunction(c)){if("number"==typeof(a=e.extend({},t.defaults,a)).expires){var u=a.expires,d=a.expires=new Date;d.setTime(+d+864e5*u)}return document.cookie=[o(n),"=",i(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}for(var f,s=n?void 0:{},p=document.cookie?document.cookie.split("; "):[],m=0,v=p.length;m<v;m++){var x=p[m].split("="),k=(f=x.shift(),t.raw?f:decodeURIComponent(f)),l=x.join("=");if(n&&n===k){s=r(l,c);break}n||void 0===(l=r(l))||(s[k]=l)}return s};t.defaults={},e.removeCookie=function(n,o){return void 0!==e.cookie(n)&&(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}},"function"==typeof ymq_define&&ymq_define.amd?ymq_define(["jquery"],e):e(ymqJq);