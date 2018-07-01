parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({6:[function(require,module,exports) {
AFRAME.registerComponent("enemy",{schema:{speed:{type:"number"}},init:function(){var e=this;this.directionVec3=new THREE.Vector3,this.el.addEventListener("mousedown",function(){window.dispatchEvent(new CustomEvent("add-score",{detail:{value:e.el.getAttribute("position")}}));var t=e.el;t.parentNode.removeChild(t)})},tick:function(e,t){var i=this.directionVec3,n=new THREE.Vector3;n.x=1.3,n.y=0,n.z=0;var o=this.el.object3D.position;i.copy(n).sub(o);var r=i.length();if(r<1){var s=this.el;return s.parentNode.removeChild(s),void window.dispatchEvent(new CustomEvent("remove-score",{detail:{value:this.el.getAttribute("position")}}))}var a=this.data.speed/r;["x","y","z"].forEach(function(e){i[e]*=1e-5*a}),this.el.setAttribute("position",{x:o.x+i.x,y:o.y+i.y,z:o.z+i.z})}});
},{}],7:[function(require,module,exports) {
var e=AFRAME.utils.extendDeep,i=AFRAME.primitives.getMeshMixin();AFRAME.registerPrimitive("a-enemy",{defaultComponents:{enemy:{speed:"1000"},"animation-mixer":"",position:"-1 0 0",scale:"0.3 0.3 0.3",rotation:"0 90 0"},mappings:{speed:"enemy.speed"}});
},{}],2:[function(require,module,exports) {
"use strict";require("./components/enemy"),require("./primatives/a-enemy");var t=[{model:"#bad-boss"},{model:"#caveman"},{model:"#dictator"}],e=10;window.onload=function(){var i="",r=!1,n=0,o=e,s=document.getElementById("start-button"),u=document.getElementById("score"),a=document.getElementById("score-enemy"),d=document.getElementById("starting"),l=document.getElementById("gameover");d.setAttribute("visible",!1),s.addEventListener("mousedown",function(s){r||(r=!0,n=0,o=e,s.target.setAttribute("visible",!1),d.setAttribute("visible",!0),d.setAttribute("value",o),a.setAttribute("visible",!0),a.setAttribute("position","0 -1 0"),u.setAttribute("value",n),l.setAttribute("visible",!1),i=setInterval(function(){for(var e=0;e<Math.floor(3*Math.random())+1;e++){var i=document.createElement("a-enemy"),r=Math.floor(3*Math.random()),n=t[r];i.setAttribute("gltf-model",n.model),i.setAttribute("position","-1 0.5 "+.5*Math.random()),i.setAttribute("speed",3e3*Math.random()),i.setAttribute("animation-mixer",{}),document.getElementById("scene").appendChild(i)}o-=1,d.setAttribute("value",o)},1e3),setTimeout(function(){s.target.setAttribute("visible",!0),d.setAttribute("visible",!1),a.setAttribute("visible",!1),l.setAttribute("visible",!0),document.querySelectorAll("a-enemy").forEach(function(t){return t.parentNode.removeChild(t)}),clearInterval(i),r=!1},1e3*e))}),window.addEventListener("add-score",function(t){n+=1,u.setAttribute("value",n);var e=t.detail.value;e.y+=.5,a.setAttribute("value","+1"),a.setAttribute("position",e)}),window.addEventListener("remove-score",function(t){n-=1,u.setAttribute("value",n),a.setAttribute("value","-1");var e=t.detail.value;e.y+=.5,a.setAttribute("position",e)})};
},{"./components/enemy":6,"./primatives/a-enemy":7}]},{},[2], null)
//# sourceMappingURL=/example.41e7d16b.map