import"./_tslib-e6397ef4.js";import{customBuildings as e,customUpgrades as n,customAchievements as r,mods as a}from"./vars.js";import{hasOwnProperty as o,applyAllProps as t}from"./helpers.js";var u=Game.dragonLevels.length+0,i=3;function s(e){switch(e){case"mod":return{achievements:{},buildings:{},upgrades:{},ui:{},custom:null};case"dragon":return{level:"sync",auras:["sync","sync"]};case"achievement":return{won:!1};case"upgrade":return{bought:!1,unlocked:!1};case"building":return{amount:0,bought:0,free:0,totalCookies:0,level:0,muted:0,minigameSave:""};default:throw new Error("Invalid fragment name!")}}function g(){return{mods:{},foreign:s("mod"),saveVer:3,dragon:s("dragon")}}var l=g();function d(){var e=g();for(var n in e)l[n]=e[n]}function m(e){var n=e.amount,r=e.bought,a=e.free,o=e.totalCookies,t=e.level,u=e.muted,i=e.minigameSave,s=e.name;l.foreign.buildings[s]={amount:n,bought:r,free:a,totalCookies:o,level:t,muted:u,minigameSave:i}}function f(e){return l.foreign.buildings[e.name]||s("building")}function c(e){l.foreign.upgrades[e.name]={unlocked:!!e.unlocked,bought:!!e.bought}}function v(e){return l.foreign.upgrades[e.name]||s("upgrade")}function h(e){l.foreign.achievements[e.name]={won:!!e.won}}function b(e){return l.foreign.achievements[e.name]||s("achievement")}function p(){"sync"!==l.dragon.level&&l.dragon.level<=Game.dragonLevels.length-1&&(Game.dragonLevel=l.dragon.level),"sync"!==l.dragon.auras[0]&&l.dragon.auras[0]<=Object.keys(Game.dragonAuras).length-1&&(Game.dragonAura=l.dragon.auras[0]),"sync"!==l.dragon.auras[1]&&l.dragon.auras[1]<=Object.keys(Game.dragonAuras).length-1&&(Game.dragonAura2=l.dragon.auras[1])}function y(e){for(var n={},r=0,a=e.toggles;r<a.length;r++){var o=a[r];o.save&&(n[o.keyname]=o.save())}l.mods[e.keyname]={achievements:{},upgrades:{},buildings:{},custom:e.custom,ui:n}}function j(e){return l.mods[e.keyname]||s("mod")}function k(e,n){e.custom=n.custom;for(var r=0,a=e.toggles;r<a.length;r++){var t=a[r];t.load&&o(n.ui,t.keyname)&&t.load(n.ui[t.keyname])}}function w(){for(var o=0,u=e;o<u.length;o++){var i=u[o];t(i,f(i))}for(var s=0,g=n;s<g.length;s++){var l=g[s];t(l,v(l)),l.bought&&Game.CountsAsUpgradeOwned(l.pool)&&Game.UpgradesOwned++}for(var d=0,m=r;d<m.length;d++){var c=m[d];t(c,b(c)),c.won&&Game.CountsAsAchievementOwned(c.pool)&&Game.AchievementsOwned++}p();for(var h=0,y=a;h<y.length;h++){var w=y[h];k(w,j(w))}}function G(){for(var o=0,t=e;o<t.length;o++){m(t[o])}for(var u=0,i=n;u<i.length;u++){c(i[u])}for(var s=0,g=r;s<g.length;s++){h(g[s])}for(var l=0,d=a;l<d.length;l++){y(d[l])}}function A(e){var n=g();if("object"!=typeof e||null===e)return n;if(!o(e,"saveVer")||"number"!=typeof e.saveVer||e.saveVer>3)return n;function r(e){var n=s("mod");if("object"!=typeof e||null===e)return n;if(o(e,"buildings")&&"object"==typeof e.buildings&&null!==e.buildings)for(var r in e.buildings){var a=e.buildings[r];"object"==typeof a&&null!==a&&(n.buildings[r]=s("building"),t(n.buildings[r],a))}if(o(e,"upgrades")&&"object"==typeof e.upgrades&&null!==e.upgrades)for(var u in e.upgrades){var i=e.upgrades[u];"object"==typeof i&&null!==i&&(n.upgrades[u]=s("upgrade"),t(n.upgrades[u],i))}if(o(e,"achievements")&&"object"==typeof e.achievements&&null!==e.achievements)for(var g in e.achievements){var l=e.achievements[g];"object"==typeof l&&null!==l&&(n.achievements[g]=s("achievement"),t(n.achievements[g],l))}if(o(e,"ui")&&"object"==typeof e.ui&&null!==e.ui)for(var d in e.ui)n.ui[d]=e.ui[d];return o(e,"custom")&&"object"==typeof e.custom&&(n.custom=e.custom),n}if(o(e,"foreign")?n.foreign=r(e.foreign):n.foreign=s("mod"),o(e,"mods")&&"object"==typeof e.mods&&null!==e.mods)for(var a in e.mods)n.mods[a]=r(e.mods[a]);if(o(e,"dragon")&&"object"==typeof e.dragon&&null!==e.dragon&&(!o(e.dragon,"level")||"number"!=typeof e.dragon.level&&"sync"!==e.dragon.level||(n.dragon.level=e.dragon.level),o(e.dragon,"auras")&&e.dragon.auras instanceof Array))for(var u in e.dragon.auras){var i=e.dragon.auras[u];"number"!=typeof i&&"sync"!==i||(n.dragon.auras[u]=i)}return n}function O(e){var n;try{n=JSON.parse(e)}catch(n){""!==e&&"{}"!==e&&console.warn("CPPKIES: Found invalid save, creating new one..."),d()}var r=A(n);for(var a in r)l[a]=r[a];w()}function C(){return G(),JSON.stringify(l)}export{i as SAVE_VER,u as VANILLA_DRAGON_LEVEL_AMOUNT,k as applyModSave,A as applySave,C as exportSave,O as importSave,d as initSave,b as loadAchievement,w as loadAll,f as loadBuilding,p as loadDragon,j as loadMod,v as loadUpgrade,l as save,h as saveAchievement,G as saveAll,m as saveBuilding,y as saveMod,c as saveUpgrade};
