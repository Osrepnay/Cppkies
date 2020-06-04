(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a.Cppkies=b())})(this,function(){'use strict';var q=Math.max;function a(a){return a instanceof Function?a():a}function b(a){return a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function c(c,d,e,f){var g,h=c.toString(),i=null===d;i||(d=a(d),g="string"==typeof d?new RegExp(b(d),"g"):d),e=a(e);var j=/(\)[^{]*{)/,k=/(}?)$/;switch(i||g.test(h)||console.warn("Nothing to inject."),f){case"before":h=i?h.replace(j,"$1"+e):h.replace(g,""+e+d);break;case"replace":h=i?""+e:h.replace(g,""+e);break;case"after":h=i?h.replace(k,e+"$1"):h.replace(g,""+d+e);break;default:throw new Error("where Parameter must be \"before\", \"replace\" or \"after\"");}var l=new Function("return ("+h+")")();return l.prototype=c.prototype,l}function d(){U.save.mods={},U.save.foreign=J,U.save.saveVer=0,U.save.exists=!0}function e(a){return U.save.foreign.buildings[a.name]||H}function f(a){var b=a.amount,c=a.bought,d=a.free,e=a.totalCookies,f=a.level,g=a.muted,h=a.minigameSave,i=a.name;U.save.foreign.buildings[i]={amount:b,bought:c,free:d,totalCookies:e,level:f,muted:g,minigameSave:h}}function g(a){return U.save.foreign.upgrades[a.name]||I}function h(a){U.save.foreign.upgrades[a.name]={unlocked:a.unlocked,bought:a.bought}}function i(a,c){function b(){this.constructor=a}K(a,c),a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)}function j(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(a){f(a)}}function h(a){try{i(d["throw"](a))}catch(a){f(a)}}function i(a){a.done?e(a.value):new c(function(b){b(a.value)}).then(g,h)}i((d=d.apply(a,b||[])).next())})}function k(a,b){function c(a){return function(b){return d([a,b])}}function d(c){if(e)throw new TypeError("Generator is already executing.");for(;k;)try{if(e=1,h&&(i=2&c[0]?h["return"]:c[0]?h["throw"]||((i=h["return"])&&i.call(h),0):h.next)&&!(i=i.call(h,c[1])).done)return i;switch((h=0,i)&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return k.label++,{value:c[1],done:!1};case 5:k.label++,h=c[1],c=[0];continue;case 7:c=k.ops.pop(),k.trys.pop();continue;default:if((i=k.trys,!(i=0<i.length&&i[i.length-1]))&&(6===c[0]||2===c[0])){k=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){k.label=c[1];break}if(6===c[0]&&k.label<i[1]){k.label=i[1],i=c;break}if(i&&k.label<i[2]){k.label=i[2],k.ops.push(c);break}i[2]&&k.ops.pop(),k.trys.pop();continue;}c=b.call(a,k)}catch(a){c=[6,a],h=0}finally{e=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}var e,h,i,j,k={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return j={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(j[Symbol.iterator]=function(){return this}),j}function l(a,b){M[a]=b}function m(a){if(N.includes(a))throw new Error("Recursive alias");return(N.push(a),a in M)?m(M[a]):(N=[],a)}function n(a,b,c,d,e){return new Promise(function(f){c[0]instanceof Array||(c=[c]),c=c;var g={};for(var h in c)for(var i in c[h]){if(c[h][i]=c[h][i].toString().toLowerCase(),!(c[h][i]in b))throw new Error("Invalid icon name");g[c[h][i]]=[parseInt(i),parseInt(h)]}var j=document.createElement("canvas").getContext("2d"),k=new Image;k.src=a,k.crossOrigin="Anonymous",k.addEventListener("load",function(){for(var a in j.canvas.width=e[0],j.canvas.height=e[1],g)j.drawImage(k,g[a][0]*d[0],g[a][1]*d[1],d[0],d[1],b[a][0]*d[0],b[a][1]*d[1],d[0],d[1]);j.canvas.toBlob(function(a){f(URL.createObjectURL(a))})})})}function o(a){var b=[new r("tooltip",function(){a.tooltip=c(c(a.tooltip,"return","let ret = ","replace"),null,"\n//Cppkies injection\n\t\tfor(const i in Cppkies.buildingHooks[\""+a.name+"\"].tooltip) {\n\t\t\tconst tempRet = Cppkies.buildingHooks[\""+a.name+"\"].tooltip[i].call(this, ret)\n\t\t\tret = tempRet || ret\n\t\t}\n\t\treturn ret","after")})],d={};b.forEach(function(a){d[a.value]=a.defValue,a.func&&a.func()}),U.buildingHooks[a.name]=d}function p(){U.hooks.customGetIcon.push(function(a,b,c){return U.customTiers.forEach(function(a){a.keyName===b.toString()&&a.iconLink&&(c[2]=a.iconLink)}),c},function(a,b,c){return U.customBuildings.forEach(function(b){b.name===a&&b.iconLink&&(c[2]=b.iconLink)}),c})}var r=function(){return function(a,b){this.value=a,this.func=b,this.defValue=[]}}(),s={PATH_SEPARATOR:".",TARGET:Symbol("target"),UNSUBSCRIBE:Symbol("unsubscribe")},t=Array.isArray,u=a=>"symbol"==typeof a;const{PATH_SEPARATOR:v}=s;var w={after:(a,b)=>t(a)?a.slice(b.length):""===b?a:a.slice(b.length+1),concat:(a,b)=>t(a)?(a=a.slice(),b&&a.push(b),a):b&&void 0!==b.toString?(""!==a&&(a+=v),u(b)?a+"Symbol("+b.description+")":a+b):a,initial:a=>{if(t(a))return a.slice(0,-1);if(""===a)return a;const b=a.lastIndexOf(v);return-1===b?"":a.slice(0,b)},walk:(a,b)=>{if(t(a))a.forEach(b);else if(""!==a){let c=0,d=a.indexOf(v);if(-1===d)b(a);else for(;c<a.length;)-1===d&&(d=a.length),b(a.slice(c,d)),c=d+1,d=a.indexOf(v,c)}}};const{TARGET:x,UNSUBSCRIBE:y}=s,z=a=>null===a||"object"!=typeof a&&"function"!=typeof a,A=a=>a instanceof RegExp||a instanceof Number,B=a=>a instanceof Date,C=(c,a)=>void 0!==c&&void 0!==a&&Object.is(c.value,a.value)&&(c.writable||!1)===(a.writable||!1)&&(c.enumerable||!1)===(a.enumerable||!1)&&(c.configurable||!1)===(a.configurable||!1),D=a=>t(a)?a.slice():{...a},E=(a,b,c={})=>{const d=Symbol("ProxyTarget");let e,f,g=!1,h=!1,i=!1;const j=c.equals||Object.is;let k=new WeakMap,l=new WeakMap,m=new WeakMap;const n=(a,c,d,j)=>{if(!i){if(!g)return void b(w.concat(a,c),j,d);if(g&&f&&void 0!==d&&void 0!==j&&"length"!==c){let b=f;a!==e&&(a=w.after(a,e),w.walk(a,a=>{b[a]=D(b[a]),b=b[a]})),b[c]=d}h=!0}},o=(a,b)=>{let c=null!==k&&k.get(a);if(c&&(c=c.get(b)),c)return c;c=new Map,k.set(a,c);let d=c.get(b);return d||(d=Reflect.getOwnPropertyDescriptor(a,b),c.set(b,d)),d},p=(a,b)=>{const c=k?k.get(a):void 0;c&&c.delete(b)},q=(a,b)=>{if(i)return a;l.set(a,b);let c=m.get(a);return void 0===c&&(c=new Proxy(a,v),m.set(a,c)),c},r=a=>(i=!0,k=null,l=null,m=null,a),s=a=>i||!0===c.ignoreSymbols&&u(a)||!0===c.ignoreUnderscores&&"_"===a.charAt(0)||void 0!==c.ignoreKeys&&c.ignoreKeys.includes(a),v={get(a,b,e){if(b===d||b===x)return a;if(b===y&&null!==l&&""===l.get(a))return r(a);const f=Reflect.get(a,b,e);if(z(f)||A(f)||"constructor"===b||!0===c.isShallow||s(b))return f;const g=o(a,b);if(g&&!g.configurable){if(g.set&&!g.get)return;if(!1===g.writable)return f}return q(f,w.concat(l.get(a),b))},set(a,b,c,e){c&&void 0!==c[d]&&(c=c[d]);const f=s(b),g=f?null:Reflect.get(a,b,e),h=!(b in a)||!j(g,c);let i=!0;return h&&(i=Reflect.set(a[d]||a,b,c),!f&&i&&n(l.get(a),b,g,c)),i},defineProperty(a,b,c){let d=!0;return C(c,o(a,b))||(d=Reflect.defineProperty(a,b,c),d&&!s(b)&&!C()&&(p(a,b),n(l.get(a),b,void 0,c.value))),d},deleteProperty(a,b){if(!Reflect.has(a,b))return!0;const c=s(b),d=c?null:Reflect.get(a,b),e=Reflect.deleteProperty(a,b);return!c&&e&&(p(a,b),n(l.get(a),b,d)),e},apply(a,b,c){const i=B(b);if(i&&(b=b[d]),!g){g=!0,i&&(f=b.valueOf()),(t(b)||"[object Object]"===toString.call(b))&&(f=D(b[d])),e=w.initial(l.get(a));const k=Reflect.apply(a,b,c);return g=!1,(h||i&&!j(f,b.valueOf()))&&(n(e,"",f,b[d]||b),f=null,h=!1),k}return Reflect.apply(a,b,c)}},E=q(a,!0===c.pathAsArray?[]:"");return b=b.bind(E),E};E.target=a=>a[x]||a,E.unsubscribe=a=>a[y]||a;var F,G=function(){function a(a){var b=this;this.name=a,this.updateValues(a),this.store||(this.store={}),this.store=E(this.store,function(){b.writeValues()})}return a.prototype.updateValues=function(a){this.store=JSON.parse(localStorage.getItem(a))},a.prototype.writeValues=function(){localStorage.setItem(this.name,JSON.stringify(this.store))},a}(),H={amount:0,bought:0,free:0,totalCookies:0,level:0,muted:0,minigameSave:""},I={bought:!1,unlocked:!1},J={buildings:{},upgrades:{}},K=function(a,c){return K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])},K(a,c)},L=function(){return L=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a},L.apply(this,arguments)},M={},N=[],O={"3d":[0,21],milestone1:[0,22],milestone2:[0,23],milestone3:[0,24],krumblor:[0,25],level1:[0,26],level2:[0,27]},P=function(a){function b(b,c,d,f,g,h,j,k,l,n){var p=this;0!==f[0]&&console.warn("All icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder"),0!==g[1]&&console.warn("All big icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder"),p=a.call(this,b,c,d,g[0],f[1],h,0,j,k)||this,U.customBuildings.push(p),o(p);var q=function(a){if(0>=parseInt(a))return"continue";var b=window.Game.ObjectsById[a];if(b.canvas=window.l("rowCanvas"+a),b.ctx=b.canvas.getContext("2d"),window.AddEvent(b.canvas,"mouseover",function(){b.mouseOn=!0}),window.AddEvent(b.canvas,"mouseout",function(){b.mouseOn=!1}),window.AddEvent(b.canvas,"mousemove",function(a){var c=b.canvas.getBoundingClientRect();b.mousePos[0]=a.pageX-c.left,b.mousePos[1]=a.pageY-c.top}),b.minigame&&b.minigameLoaded){var c=b.minigame.save();b.minigame.launch(),b.minigame.load(c)}};for(var r in window.Game.ObjectsById)q(r);p.buildingLink=g[2]||U.buildingLink+"",p.iconLink=m(f[2]||U.iconLink+""),l&&(window.Game.foolObjects[b]=l),n&&(window.Game.goldenCookieBuildingBuffs[b]=n),p.iconLink&&U.buildingHooks[p.name].tooltip.push(function(a){return p.locked?a:a.replace("background-position","background-image:url("+p.iconLink+");background-position")}),window.Game.BuildStore(),p.buildingLink&&U.hooks.postBuildStore.push(function(){window.l("productIcon"+p.id).style.backgroundImage="url("+p.buildingLink+")",window.l("productIconOff"+p.id).style.backgroundImage="url("+p.buildingLink+")"}),window.Game.BuildStore(),p.canvas=window.l("rowCanvas"+p.id),p.ctx=p.canvas.getContext("2d"),p.context=p.ctx,p.pics=[];var s=document.createElement("div");s.className="tinyProductIcon",s.id="mutedProduct"+p.id,s.style.display="none",p.buildingLink&&(s.style.backgroundImage="url("+p.buildingLink+")"),s.style.backgroundPositionX="-"+f[0]+"px",s.style.backgroundPositionY="-"+f[1]+"px",s.addEventListener("click",function(){p.mute(0),window.PlaySound(p.muted?"snd/clickOff.mp3":"snd/clickOn.mp3")}),window.AddEvent(p.canvas,"mouseover",function(){p.mouseOn=!0}),window.AddEvent(p.canvas,"mouseout",function(){p.mouseOn=!1}),window.AddEvent(p.canvas,"mousemove",function(a){var b=p.canvas.getBoundingClientRect();p.mousePos[0]=a.pageX-b.left,p.mousePos[1]=a.pageY-b.top}),window.l("buildingsMute").appendChild(s);var t=e(p);for(var r in t)p[r]=t[r];return window.Game.recalculateGains=1,p}return i(b,a),b}(window.Game.Object),Q=function(a){function b(b,c,d,e,f){void 0===f&&(f=function(){});var h=this;e[2]||(e[2]=U.iconLink+""),e[2]=m(e[2]),h=a.call(this,b,"function"==typeof c?"":c,"function"==typeof d?0:d,"function"==typeof e?[0,0]:e,f)||this,"function"==typeof c&&(h.descFunc=c),"function"==typeof d&&(h.priceFunc=d),"function"==typeof e&&(h.iconFunction=e),U.customUpgrades.push(h);var j=g(h);for(var k in j)h[k]=j[k];return h}return i(b,a),b}(window.Game.Upgrade),R=function(a){function b(b,c,d,e,f,g,h){void 0===g&&(g=["Legacy"]),void 0===h&&(h=function(){});var j=a.call(this,b,c,d,e,h)||this;for(var k in j.parents=g,j.pool="prestige",j.posX=f[0],j.posY=f[1],j.parents){var i=j.parents[k];j.parents[k]=window.Game.Upgrades[i]||window.Game.UpgradesById[i]}return window.Game.PrestigeUpgrades.push(j),window.Game.UpgradePositions[j.id]=f,j}return i(b,a),b}(Q),S=function(a){function b(b,c,d,e){var f=Math.min,g=a.call(this,b,c,window.Game.Objects[d].basePrice*window.Game.Tiers[e].price,window.Game.GetIcon(d,e))||this;return window.Game.SetTier(d,e),g.buildingTie1=window.Game.Objects[d],"fortune"===e&&(window.Game.Objects[d].fortune=g),"number"==typeof e&&(g.order=100*(window.Game.Objects[d].id+1)+e),g.order-=75*q(0,f(window.Game.Objects[d].id-4,3)),g}return i(b,a),b}(Q),T=function(){return function(a,b,c,d,e,f,g,h,i){void 0===d&&(d=!1),void 0===e&&(e="auto"),void 0===f&&(f=null),void 0===g&&(g=null),void 0===h&&(h=null),void 0===i&&(i="auto"),this.name=a,this.color=c,this.price=e,this.unlock=f,this.keyName=i,this.upgrades=[],this.special=d,null===f&&(this.unlock=-1),"number"==typeof g&&(this.achievUnlock=g),h&&(this.req=h),"auto"===e&&(this.price=1e8*window.Game.Tiers[Object.keys(window.Game.Tiers).filter(function(a){return!isNaN(parseInt(a))}).length.toString()].price),this.iconRow=b[1],b[2]&&(this.iconLink=b[2]),"auto"===i&&(d?this.keyName=a:this.keyName=(Object.keys(window.Game.Tiers).filter(function(a){return!isNaN(parseInt(a))}).length+1).toString()),(!1===d&&null===f||"auto"===f)&&(this.unlock=window.Game.Tiers[parseInt(this.keyName)-1].unlock+50),(!1===d&&null===g||"auto"===g)&&(this.achievUnlock=window.Game.Tiers[parseInt(this.keyName)-1].achievUnlock+50),window.Game.Tiers[this.keyName]=this,U.customTiers.push(this)}}(),U={hooks:null,iconLink:"",buildingLink:"",buildingHooks:{},buildingHooksById:[],customBuildings:[],customUpgrades:[],customTiers:[],save:function(){var a=new G("cppkiesSave").store;return a.exists||d(),a}(),onLoad:[],Building:P,Upgrade:Q,TieredUpgrade:S,Tier:T,HeavenlyUpgrade:R,injectCode:c,DEFAULT_ONBUY:function(){window.Game.UnlockTiered(this),this.amount>=window.Game.SpecialGrandmaUnlock&&0<window.Game.Objects.Grandma.amount&&this.grandma&&window.Game.Unlock(this.grandma.name)},DEFAULT_CPS:function(a){return window.Game.GetTieredCpsMult(a)*window.Game.magicCpS(a.name)*a.baseCps},icons:{relinkColumn:function(a,b){return j(this,void 0,void 0,function(){var c,d,e,f;return k(this,function(g){switch(g.label){case 0:for(d in c=L({},O),window.Game.Tiers)c[window.Game.Tiers[d].name.toLowerCase()]=c[d.toString()]=[0,window.Game.Tiers[d].iconRow];return e=l,f=[a],[4,n(a,c,b,[48,48],[48,48*(Object.values(c).reduce(function(a,b){return q(a,b[1])},-Infinity)+1)])];case 1:return e.apply(void 0,f.concat([g.sent()])),[2];}})})},relinkRow:null}};window.Cppkies?F=window.Cppkies:(F=U,window.Game.customSave.push(function(){for(var a in U.customBuildings)f(U.customBuildings[a]);for(var a in U.customUpgrades)h(U.customUpgrades[a])}),function(){return new Promise(function(a){var b={},d=[new r("customMenu",function(){window.Game.UpdateMenu=c(window.Game.UpdateMenu,null,"\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tswitch (Game.onMenu) {\n\t\t\t\t\t\tcase \"prefs\":\n\t\t\t\t\t\t\tfor(const i in Cppkies.hooks.customOptionsMenu) Cppkies.hooks.customOptionsMenu[i]()\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t\tcase \"stats\":\n\t\t\t\t\t\t\tfor(const i in Cppkies.hooks.customStatsMenu) Cppkies.hooks.customStatsMenu[i]()\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t\tcase \"log\":\n\t\t\t\t\t\t\tfor(const i in Cppkies.hooks.customInfoMenu) Cppkies.hooks.customInfoMenu[i]()\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t}\n\t\t\t\t\tfor(const i in Cppkies.hooks.customMenu) Cppkies.hooks.customMenu[i]()\n\t\t\t\t\t","before")}),new r("customOptionsMenu"),new r("customStatsMenu"),new r("customInfoMenu"),new r("customLoad",function(){window.Game.LoadSave=c(window.Game.LoadSave,"if (Game.prefs.showBackupWarning==1)","\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tfor(const i in Cppkies.hooks.customLoad) Cppkies.hooks.customLoad[i]()\n\t\t\t\t\t","before")}),new r("customReset",function(){window.Game.Reset=c(window.Game.Reset,null,"\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tfor(const i in Cppkies.hooks.customReset) Cppkies.hooks.customReset[i](hard)\n\t\t\t\t\t","before")}),new r("customGetIcon",function(){window.Game.GetIcon=c(window.Game.GetIcon,"return [col,Game.Tiers[tier].iconRow];","\n\t\t\t\t\t// Cppkies Injection\n\t\t\t\t\tlet icon = [col, Game.Tiers[tier].iconRow]\n\t\t\t\t\tfor(const i in Cppkies.hooks.customGetIcon) icon = Cppkies.hooks.customGetIcon[i](type, tier, icon) || icon\n\t\t\t\t\treturn icon\n","replace")}),new r("postBuildStore",function(){window.Game.BuildStore=c(window.Game.BuildStore,null,";\nfor(const i in Cppkies.hooks.postBuildStore) Cppkies.hooks.postBuildStore[i]()","after")}),new r("customGrandmaPic",function(){window.Game.Objects.Grandma.art.pic=c(window.Game.Objects.Grandma.art.pic,"return choose(list)+'.png'","// Cppkies injection\n\t\t\t\t\tlist = list.concat(Cppkies.hooks.customGrandmaPic.map(val=> val()).filter(val => val))\n\t\t\t\t\t","before")})];d.forEach(function(a){var c,d;b[a.value]=a.defValue,null===(d=(c=a).func)||void 0===d?void 0:d.call(c)}),window.Game.Loader.Load=c(window.Game.Loader.Load,"img.src=this.domain","\n\t\t\t// Cppkies injection\n\t\t\timg.src = (assets[i].indexOf('http') !== -1 ? \"\" : this.domain)\n","replace"),window.Game.Objects.Cursor.buyFunction=c(window.Game.Objects.Cursor.buyFunction,"Game.Unlock('Octillion fingers');","\n \t\t\t// Cppkies injection\n\t\t\tfor(const i in this.tieredUpgrades) {\n\t\t\t\tif (isNaN(parseInt(i))) break\n\t\t\t\tif (this.amount >= window.Game.Tiers[this.tieredUpgrades[i].tier].unlock - 50) this.tieredUpgrades[i].unlock()\n\t\t\t}\n","after"),a(b)})}().then(function(a){F.hooks=a,window.Game.Notify("Cppkies loaded!","",[32,17]),window.Game.Win("Third-party"),U.onLoad.forEach(function(a){return a()}),U.onLoad=new Proxy(U.onLoad,{set:function(a,b,c){return"length"!==b&&c(),!0}}),p(),window.Cppkies=F}));var V=F;return V});
//# sourceMappingURL=index.js.map
