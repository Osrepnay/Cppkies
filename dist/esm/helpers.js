import{b as e}from"./_tslib-e6397ef4.js";function r(e){return e instanceof Function?e():e}function t(e){return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function n(e,r){var n=null===r[0],o=new RegExp("");null!==r[0]&&((o="string"==typeof r[0]?new RegExp(t(r[0]),"g"):r[0]).test(e)||console.warn("Nothing to inject."));switch(r[2]){case"before":e=n?e.replace(/(\)[^{]*{)/,"$1"+r[1]):e.replace(o,""+r[1]+r[0]);break;case"replace":e=n?r[1]:e.replace(o,r[1]);break;case"after":e=n?e.replace(/(}?)$/,r[1]+"$1"):e.replace(o,""+r[0]+r[1]);break;default:throw new Error('where Parameter must be "before", "replace" or "after"')}return e}function o(r,t,o,a,c){void 0===c&&(c={});var p=Function.apply(void 0,e(Object.keys(c),["return ("+n(r.toString(),[t,o,a])+")"])).apply(void 0,Object.values(c));return p.prototype=r.prototype,p}function a(r,t,o){void 0===o&&(o={});for(var a=r.toString(),c=0,p=t;c<p.length;c++){a=n(a,p[c])}var i=Function.apply(void 0,e(Object.keys(o),["return ("+a+")"])).apply(void 0,Object.values(o));return i.prototype=r.prototype,i}function c(e,r){for(var t in r)e[t]=r[t]}function p(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function i(e,r){return e.hasOwnProperty(r)}function u(e){for(var r="",t=0,n=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];t<n.length;t++)for(var o=n[t];e>=o[0];)r+=o[1],e-=o[0];return r}export{c as applyAllProps,t as escapeRegExp,r as getValue,i as hasOwnProperty,o as injectCode,a as injectCodes,u as toRomanNumeral,p as toSentenseCase};
