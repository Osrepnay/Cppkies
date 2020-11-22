(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a.Cppkies=b())})(this,function(){'use strict';var z=Math.max;function a(a){return a instanceof Function?a():a}function b(a){return a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function c(c,d,e,f,g={}){for(const a in g)if(!/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(a))throw new Error("Invalid context variable name!");let h=c.toString();const i=null===d;let j;i||(d=a(d),j="string"==typeof d?new RegExp(b(d),"g"):d),e=a(e);const k=/(\)[^{]*{)/,m=/(}?)$/;switch(i||j.test(h)||console.warn("Nothing to inject."),f){case"before":h=i?h.replace(k,`$1${e}`):h.replace(j,`${e}${d}`);break;case"replace":h=i?`${e}`:h.replace(j,`${e}`);break;case"after":h=i?h.replace(m,`${e}$1`):h.replace(j,`${d}${e}`);break;default:throw new Error("where Parameter must be \"before\", \"replace\" or \"after\"");}let n="";for(const a in g)n+=`var ${a} = globalThis.tempCtx.${a}\n`;globalThis.tempCtx=g;const o=new Function(`${n}globalThis.tempCtx = null\nreturn (${h})`)();return o.prototype=c.prototype,o}function d(a,b){for(const c in b)a[c]=b[c]}function e(a){return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()}function f(){S.save=C={mods:{},foreign:F,saveVer:0,exists:!0}}function g(a){return C.foreign.buildings[a.name]||D}function h({amount:a,bought:b,free:c,totalCookies:d,level:e,muted:f,minigameSave:g,name:h}){C.foreign.buildings[h]={amount:a,bought:b,free:c,totalCookies:d,level:e,muted:f,minigameSave:g}}function j(a){return C.foreign.upgrades[a.name]||E}function k(a){C.foreign.upgrades[a.name]={unlocked:!!a.unlocked,bought:!!a.bought}}function m(){for(const a in S.customBuildings){const b=S.customBuildings[a];d(Game.Objects[b.name],g(b))}for(const a in S.customUpgrades){const b=S.customUpgrades[a];d(Game.Upgrades[b.name],j(b))}}function n(){for(const a in S.customBuildings)h(S.customBuildings[a]);for(const a in S.customUpgrades)k(S.customUpgrades[a])}function o(a){try{S.save=C=JSON.parse(a),C.exists||f()}catch(a){f()}m()}function p(){return n(),JSON.stringify(C)}function q(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(a){f(a)}}function h(a){try{i(d["throw"](a))}catch(a){f(a)}}function i(a){a.done?e(a.value):new c(function(b){b(a.value)}).then(g,h)}i((d=d.apply(a,b||[])).next())})}function r(a,b){G[a]=b}function s(a){if(H.includes(a))throw new Error("Recursive alias");return(H.push(a),a in G)?s(G[a]):(H=[],a)}function t(a){return new Promise(b=>{const c=new Image;c.addEventListener("load",()=>{b(c)}),c.crossOrigin="Anonymous",c.src=a})}function u(a){return new Promise(b=>{a.canvas.toBlob(a=>{b(URL.createObjectURL(a))})})}function v(a,b,c,d,e,f){return new Promise(g=>{c[0]instanceof Array||(c=[c]),c=c;const h={};for(const a in c)for(const d in c[a])if(c[a][d]){if(c[a][d]=c[a][d].toString().toLowerCase(),!(c[a][d]in b))throw new Error("Invalid icon name");h[c[a][d]]=[parseInt(d),parseInt(a)]}const j=document.createElement("canvas").getContext("2d"),k=new Image;k.addEventListener("load",()=>{for(const a in j.canvas.width=e[0],j.canvas.height=e[1],h)j.drawImage(k,h[a][0]*d[0],h[a][1]*d[1],d[0],d[1],b[a][0]*d[0],b[a][1]*d[1],d[0],d[1]);const a=()=>{u(j).then(g)};let c;f&&(c=f(j)),c instanceof Promise?c.then(a):a()}),k.crossOrigin="Anonymous",k.src=a})}function w(a){const b=[new B("tooltip",()=>{a.tooltip=c(c(a.tooltip,"return","let ret = ","replace"),null,`\n//Cppkies injection
		for(const i in Cppkies.buildingHooks["${a.name}"].tooltip) {
			const tempRet = Cppkies.buildingHooks["${a.name}"].tooltip[i].call(this, ret)
			ret = tempRet || ret
		}
		return ret`,"after")})],d={};b.forEach(a=>{d[a.value]=a.defValue,a.func&&a.func()}),M[a.name]=d}function x(a){return"fortune"===a.tier}function y(){S.hooks.on("getIcon",({icon:a,type:b,tier:c})=>(S.customTiers.forEach(b=>{b.keyName===c.toString()&&b.iconLink&&(a[2]=b.iconLink)}),{icon:a,type:b,tier:c})),S.hooks.on("getIcon",({icon:a,type:b,tier:c})=>(S.customBuildings.forEach(c=>{c.name===b&&c.iconLink&&(a[2]=c.iconLink)}),{icon:a,tier:c,type:b}))}class A{constructor(){this._events={}}on(a,b){this._events[a]?this._events[a].push(b):this._events[a]=[b]}once(a,b){this.on(a,c=>(this.off(a,b),b(c)))}off(a,b){this._events[a].splice(this._events[a].indexOf(b),1)}emit(a,...b){let c=b[0];this._events[a]||(this._events[a]=[]);for(const d of this._events[a])c=d(c);return c}constEmit(a,...b){this._events[a]||(this._events[a]=[]);for(const c of this._events[a])c(b[0])}}class B{constructor(a,b){this.value=a,this.func=b,this.defValue=[]}}let C=null;const D={amount:0,bought:0,free:0,totalCookies:0,level:0,muted:0,minigameSave:""},E={bought:!1,unlocked:!1},F={buildings:{},upgrades:{}},G={};let H=[];const I={},J={"3d":[0,21],milestone1:[0,22],milestone2:[0,23],milestone3:[0,24],krumblor:[0,25],level1:[0,26],level2:[0,27]},K={},L={research:[9,0],cookie:[10,0],mouse:[11,0],multicursor:[12,0],kitten:[18,0]},M={},N=[];class O extends Game.Object{constructor(a,b,c,d,e,f,h,j,k,m){for(const g in 0!==d[1]&&console.warn("All icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder?id=relink-column"),0!==e[0]&&console.warn("All big icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder?id=big-icons"),super(a,b,c,e[1],d[0],f,0,h,j),N.push(this),w(this),Game.ObjectsById){if(0>=parseInt(g))continue;const a=Game.ObjectsById[g];if(a.canvas=l(`rowCanvas${g}`),a.canvas&&(a.ctx=a.canvas.getContext("2d"),a.canvas.addEventListener("mouseover",()=>{a.mouseOn=!0}),a.canvas.addEventListener("mouseout",()=>{a.mouseOn=!1}),a.canvas.addEventListener("mousemove",b=>{const c=a.canvas.getBoundingClientRect();a.mousePos[0]=b.pageX-c.left,a.mousePos[1]=b.pageY-c.top}),a.minigame&&a.minigameLoaded)){const b=a.minigame.save();a.minigame.launch(),a.minigame.load(b)}}this.buildingLink=e[2]||S.buildingLink+"",this.iconLink=s(d[2]||S.iconLink+""),k&&(Game.foolObjects[a]=k),m&&(Game.goldenCookieBuildingBuffs[a]=m),this.iconLink&&M[this.name].tooltip.push(a=>this.locked?a:a.replace("background-position",`background-image:url(${this.iconLink});background-position`)),Game.BuildStore(),this.buildingLink&&S.hooks.on("buildStore",()=>{l(`productIcon${this.id}`).style.backgroundImage=`url(${this.buildingLink})`,l(`productIconOff${this.id}`).style.backgroundImage=`url(${this.buildingLink})`}),Game.BuildStore(),this.canvas=l(`rowCanvas${this.id}`),this.ctx=this.canvas.getContext("2d"),this.pics=[];const n=document.createElement("div");n.className="tinyProductIcon",n.id=`mutedProduct${this.id}`,n.style.display="none",this.buildingLink&&(n.style.backgroundImage=`url(${this.buildingLink})`),n.style.backgroundPositionX=`-${d[0]}px`,n.style.backgroundPositionY=`-${d[1]}px`,n.addEventListener("click",()=>{this.mute(0),window.PlaySound(this.muted?"snd/clickOff.mp3":"snd/clickOn.mp3")}),window.AddEvent(this.canvas,"mouseover",()=>{this.mouseOn=!0}),window.AddEvent(this.canvas,"mouseout",()=>{this.mouseOn=!1}),this.canvas.addEventListener("mousemove",a=>{const b=this.canvas.getBoundingClientRect();this.mousePos[0]=a.pageX-b.left,this.mousePos[1]=a.pageY-b.top}),l("buildingsMute").appendChild(n);const o=g(this);for(const g in o)this[g]=o[g];Game.recalculateGains=1}}const P=[];class Q extends Game.Upgrade{constructor(a,b,c,d,e=()=>{}){d[2]||(d[2]=S.iconLink+""),d[2]=s(d[2]),super(a,"function"==typeof b?"":b,"function"==typeof c?0:c,"function"==typeof d?[0,0]:d,e),"function"==typeof b&&(this.descFunc=b),"function"==typeof c&&(this.priceFunc=c),"function"==typeof d&&(this.iconFunction=d),P.push(this);const f=j(this);for(const g in f)this[g]=f[g]}}const R=[];const S={hooks:null,on:null,iconLink:"",buildingLink:"",buildingHooks:M,buildingHooksById:[],customBuildings:N,customUpgrades:P,customTiers:R,save:C,onLoad:[],Building:O,Upgrade:Q,TieredUpgrade:class extends Q{constructor(a,b,c,d){"string"==typeof c&&(c=Game.Objects[c]),super(a,`${e(c.plural)} are <b>twice</b> as efficient.<q>${b}</q>`,c.basePrice*Game.Tiers[d.toString()].price,Game.GetIcon(c.name,d)),Game.SetTier(c.name,d),this.buildingTie1=c,x(this)&&(this.order=19e3,c.fortune=this),isNaN(parseInt(d.toString()))||(d=parseInt(d.toString())),"number"==typeof d&&(this.order=100*(c.id+1)+d,this.order-=75*z(0,Math.min(c.id-4,3)))}},Tier:class{constructor(a,b,c,d=!1,e="auto",f=null,g=null,h=null,i="auto"){this.name=a,this.color=c,this.upgrades=[],this.special=d,this.keyName="auto"===i?d?a:(Object.keys(Game.Tiers).filter(a=>!isNaN(parseInt(a))).length+1).toString():i,null===f&&(this.unlock=-1),"number"==typeof f&&(this.unlock=f),(!1===d&&null===f||"auto"===f)&&(this.unlock=Game.Tiers[parseInt(this.keyName)-1].unlock+50),"number"==typeof g&&(this.achievUnlock=g),(!1===d&&null===g||"auto"===g)&&(this.achievUnlock=Game.Tiers[parseInt(this.keyName)-1].achievUnlock+50),h&&(this.req=h),this.price="auto"===e?1e8*Game.Tiers[Object.keys(Game.Tiers).filter(a=>!isNaN(parseInt(a))).length.toString()].price:e,this.iconRow=b[1],this.iconLink=s(b[2]||S.iconLink+""),Game.Tiers[this.keyName]=this,R.push(this)}},HeavenlyUpgrade:class extends Q{constructor(a,b,c,d,e,f=["Legacy"],g=()=>{}){super(a,b,c,d,g),this.pool="prestige",this.posX=e[0],this.posY=e[1],this.parents=f.map(a=>Game.Upgrades[a]||Game.UpgradesById[a]),Game.PrestigeUpgrades.push(this),Game.UpgradePositions[this.id]=e}},GrandmaSynergy:class extends Q{constructor(a,b,c,d){"string"==typeof c&&(c=Game.Objects[c]);let f=c.id-1;f=1===f?"grandma":`${f} grandmas`,super(a,`Grandmas are <b>twice</b> as efficient.${e(c.plural)} gain <b>+1% CpS</b> per ${f}.<q>${b}</q>`,c.basePrice*Game.Tiers[2].price,[10,9],Game.Objects.Grandma.redraw),c.grandma=this,this.buildingTie=c,this.order=250+5*(c.id/12),Game.GrandmaSynergies.push(this.name),d&&S.hooks.on("grandmaPic",a=>{if(this.bought)return[...a,d]})}},SynergyUpgrade:class extends Q{constructor(a,b,c,d,f){"string"==typeof c&&(c=Game.Objects[c]),"string"==typeof d&&(d=Game.Objects[d]),b=`${e(c.plural)} gain <b>+5% CpS</b> per ${d.name.toLowerCase()}.<br>${e(d.plural)} gain <b>+0.1% CpS</b> per 
			${c.name.toLowerCase()}.<q>${b}</q>`,super(a,b,(10*c.basePrice+1*d.basePrice)*Game.Tiers[f].price,Game.GetIcon(c.name,f)),this.tier=f,this.buildingTie1=c,this.buildingTie2=d,this.order=5e3,c.synergies.push(this),d.synergies.push(this)}},injectCode:c,DEFAULT_ONBUY:function(){Game.UnlockTiered(this),this.amount>=Game.SpecialGrandmaUnlock&&0<Game.Objects.Grandma.amount&&this.grandma&&Game.Unlock(this.grandma.name)},DEFAULT_CPS:a=>Game.GetTieredCpsMult(a)*Game.magicCpS(a.name)*a.baseCps,icons:{relinkColumn:function(a,b,c,d=!1){return q(this,void 0,void 0,function*(){c===void 0&&(!I[a]&&(I[a]=0),c=I[a]++);const e={};for(const a in J)e[a]=[c,J[a][1]];for(const a in Game.Tiers)e[Game.Tiers[a].name.toLowerCase()]=e[a.toString()]=[c,Game.Tiers[a].iconRow];r(a,(yield v(d?s(a):a,e,b,[48,48],[48*(c+1),48*(Object.values(e).reduce((a,b)=>z(a,b[1]),-Infinity)+1)],b=>new Promise(c=>{if(s(a)!==a){const d=new Image;d.addEventListener("load",()=>{b.drawImage(d,0,0),c()}),d.src=s(a),d.crossOrigin="Anonymous"}else c()}))))})},relinkRow:function(a,b,c,d=!1){return q(this,void 0,void 0,function*(){c===void 0&&(!K[a]&&(K[a]=0),c=K[a]++);const e={};for(const a in L)e[a]=[L[a][0],c];for(const a in Game.ObjectsById)e[Game.ObjectsById[a].single.toLowerCase()]=e[a]=[Game.ObjectsById[a].iconColumn,c];r(a,(yield v(d?s(a):a,e,b,[48,48],[48*(Object.values(e).reduce((a,b)=>z(a,b[0]),-Infinity)+1),48*(c+1)],b=>new Promise(c=>{if(s(a)!==a){const d=new Image;d.addEventListener("load",()=>{b.drawImage(d,0,0),c()}),d.src=s(a),d.crossOrigin="Anonymous"}else c()}))))})},patchIconsheet:function(a,b,c=!0){var d;return q(this,void 0,void 0,function*(){const e=document.createElement("canvas").getContext("2d"),f=yield t(c?s(a):a),g=[f.width,f.height];for(const a of b)48*a[0][0]>g[0]&&(g[0]=48*a[0][0]),48*a[0][1]>g[1]&&(g[1]=48*a[0][1]);e.canvas.width=g[0],e.canvas.height=g[1],e.drawImage(f,0,0);const h={};for(const a of b){const b=s((null!==(d=a[1][2])&&void 0!==d?d:S.iconLink)||"img/icons.png");h[b]||(h[b]=yield t(b)),e.clearRect(48*a[0][0],48*a[0][1],48,48),e.drawImage(h[b],48*a[1][0],48*a[1][1],48,48,48*a[0][0],48*a[0][1],48,48)}r(a,(yield u(e)))})}}};let T;window.Cppkies?T=window.Cppkies:(T=S,function(){return new Promise(a=>{const b=new A,d=[new B("customMenu",()=>{Game.UpdateMenu=c(Game.UpdateMenu,null,`
					// Cppkies injection
					switch (Game.onMenu) {
						case "prefs":
							Cppkies.hooks.emit("optionsMenu")
							break
						case "stats":
							Cppkies.hooks.emit("statsMenu")
							break
						case "log":
							Cppkies.hooks.emit("logMenu")
							break
					}
					Cppkies.hooks.emit("menu")
					`,"before")}),new B("getIcon",()=>{Game.GetIcon=c(Game.GetIcon,"return [col,Game.Tiers[tier].iconRow];",`
					// Cppkies Injection
					return Cppkies.hooks.emit("getIcon", { icon: [col, Game.Tiers[tier].iconRow], tier: tier, type: type })`,"replace")}),new B("buildStore",()=>{Game.BuildStore=c(Game.BuildStore,null,`;\nCppkies.hooks.emit("buildStore")`,"after")}),new B("grandmaPic",()=>{Game.Objects.Grandma.art.pic=c(Game.Objects.Grandma.art.pic,"return choose(list)+'.png'",`// Cppkies injection
					list = Cppkies.hooks.emit("grandmaPic", list)
					`,"before")}),new B("cps",()=>{Game.CalculateGains=c(Game.CalculateGains,"Game.cookiesPsRaw=rawCookiesPs;","rawCookiesPs = Cppkies.hooks.emit(\"rawCps\", rawCookiesPs);\n","before"),Game.CalculateGains=c(Game.CalculateGains,"Game.cookiesPs=Game.runModHookOnValue('cps',Game.cookiesPs);",`mult = Cppkies.hooks.emit("cpsMult", mult);
Game.cookiesPs = Cppkies.hooks.emit("cps", Game.cookiesPs);\n`,"before")})];d.forEach(a=>{var b;null===(b=a.func)||void 0===b?void 0:b.call(a)}),Game.Loader.Load=c(Game.Loader.Load,"img.src=this.domain",`
			// Cppkies injection
			img.src = (assets[i].indexOf('http') !== -1 ? "" : this.domain)
`,"replace"),Game.Objects.Cursor.buyFunction=c(Game.Objects.Cursor.buyFunction,"Game.Unlock('Octillion fingers');",`
 			// Cppkies injection
			for(const i in this.tieredUpgrades) {
				if (isNaN(parseInt(i))) break
				if (this.amount >= Game.Tiers[this.tieredUpgrades[i].tier].unlock - 50) this.tieredUpgrades[i].unlock()
			}
`,"after"),a(b)})}().then(a=>{T.hooks=a,T.on=a.on.bind(a),Game.Notify("Cppkies loaded!","",[32,17]),Game.modSaveData.cppkies||(Game.modSaveData.cppkies="{}"),Game.registerMod("cppkies",{save:p,load:o}),Game.Win("Third-party"),S.onLoad.forEach(a=>a()),S.onLoad=new Proxy(S.onLoad,{set:(a,b,c)=>("length"!==b&&c(),!0)}),window.CPPKIES_ONLOAD||(window.CPPKIES_ONLOAD=[]),window.CPPKIES_ONLOAD.forEach(a=>a()),window.CPPKIES_ONLOAD=new Proxy(S.onLoad,{set:(a,b,c)=>("length"!==b&&c(),!0)}),y(),window.Cppkies=T}));var U=T;return U});
//# sourceMappingURL=index.js.map
