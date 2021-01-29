import{c as a}from"./_tslib-e6397ef4.js";import"./vars.js";import{resolveIcon as n}from"./spritesheets.js";import{hasOwnProperty as e}from"./helpers.js";import{save as r,VANILLA_DRAGON_LEVEL_AMOUNT as o}from"./saves.js";import"./eventemitter.js";import"./generic.js";import{a as s}from"./basegame-16a3dd65.js";var i=function(a,o,s){this.name=a,this.desc=o,this.isCppkies=!0,"string"==typeof s&&(s=Game.Objects[s]),s instanceof Game.Object?this.pic=n([s.iconColumn,25,e(s,"iconLink")&&"string"==typeof s.iconLink?s.iconLink:void 0]):this.pic=s,Game.dragonAuras[Object.keys(Game.dragonAuras).length]=this,"sync"!==r.dragon.auras[0]&&Object.keys(Game.dragonAuras).length>=r.dragon.auras[0]&&(Game.dragonAura=r.dragon.auras[0]),"sync"!==r.dragon.auras[1]&&Object.keys(Game.dragonAuras).length>=r.dragon.auras[1]&&(Game.dragonAura2=r.dragon.auras[1])},t=function a(n,e,o,s,i,t,g){void 0===g&&(g=Game.dragonLevels.length-3),this.buy=i,this.isCppkies=!0,this.picY=0;var d=Game.dragonLevels[g-1];this.name=null!=n?n:d.name,this.action=e,this.costStr="string"==typeof o?function(){return o}:o,this.cost=s,t?(this.pic=t[0],this.picY=t[1],0!==this.picY&&console.warn("For now, all dragon levels must not use pic Y, sorry."),this.picLink=t[2]):(this.pic=d.pic,d instanceof a&&(this.picY=d.picY,this.picLink=d.picLink)),Game.dragonLevels.splice(g,0,this),"sync"!==r.dragon.level&&Game.dragonLevels.length>=r.dragon.level&&(Game.dragonLevel=r.dragon.level)},g=function(n){function e(a,e,r){return"string"==typeof r&&(r=Game.Objects[r]),n.call(this,null,"Train "+a+"<br/><small>Aura : "+e+"</small>","100 "+r.plural,(function(){return r.amount>=100}),(function(){return r.sacrifice(100)}))||this}return a(e,n),e}(t);s.on("preSave",(function(){if(0!==Game.dragonAura&&(r.dragon.auras[0]="sync"),0!==Game.dragonAura2&&(r.dragon.auras[1]="sync"),Game.dragonAuras[Game.dragonAura]instanceof i&&(r.dragon.auras[0]=Game.dragonAura,Game.dragonAura=0),Game.dragonAuras[Game.dragonAura2]instanceof i&&(r.dragon.auras[1]=Game.dragonAura2,Game.dragonAura2=0),Game.dragonLevels[Game.dragonLevel]instanceof t||Game.dragonLevel>=o)for(r.dragon.level=Game.dragonLevel;Game.dragonLevels[Game.dragonLevel]instanceof t||Game.dragonLevel>=o;)Game.dragonLevel--})),s.on("postSave",(function(){"sync"!==r.dragon.auras[0]&&Game.dragonAuras[r.dragon.auras[0]]&&(Game.dragonAura=r.dragon.auras[0]),"sync"!==r.dragon.auras[1]&&Game.dragonAuras[r.dragon.auras[1]]&&(Game.dragonAura2=r.dragon.auras[1]),"sync"!==r.dragon.level&&Game.dragonLevels[r.dragon.level]&&(Game.dragonLevel=r.dragon.level)})),s.on("reset",(function(){r.dragon.auras=["sync","sync"],r.dragon.level="sync"})),s.on("specialPic",(function(a){var n,e=Game.dragonLevels[Game.dragonLevel];return"dragon"===a.tab&&e instanceof t&&(a.pic=null!==(n=e.picLink)&&void 0!==n?n:a.pic),a}));export{i as DragonAura,g as DragonAuraLevel,t as DragonLevel};
