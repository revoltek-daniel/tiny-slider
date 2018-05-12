var tns=function(){function t(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i}function e(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function n(t,e,n){return n&&localStorage.setItem(t,e),e}function i(){var t=window.tnsId;return window.tnsId=t?t+1:1,"tns"+window.tnsId}function a(){var t=document,e=t.body;return e||(e=t.createElement("body"),e.fake=!0),e}function r(t){var e="";return t.fake&&(e=k.style.overflow,t.style.background="",t.style.overflow=k.style.overflow="hidden",k.appendChild(t)),e}function o(t,e){t.fake&&(t.remove(),k.style.overflow=e,k.offsetHeight)}function s(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}function l(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function c(t){return("insertRule"in t?t.cssRules:t.rules).length}function u(t,e){return Math.atan2(t,e)*(180/Math.PI)}function f(t,e){var n=!1,i=Math.abs(90-Math.abs(t));return i>=90-e?n="horizontal":i<=e&&(n="vertical"),n}function d(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}function v(t,e){return t.hasAttribute(e)}function h(t,e){return t.getAttribute(e)}function p(t){return void 0!==t.item}function m(t,e){if(t=p(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function y(t,e){t=p(t)||t instanceof Array?t:[t],e=e instanceof Array?e:[e];for(var n=e.length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function g(t){t.style.cssText=""}function x(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function b(t){v(t,"hidden")||m(t,{hidden:""})}function A(t){v(t,"hidden")&&y(t,"hidden")}function w(t){return t.offsetWidth>0&&t.offsetHeight>0}function T(t){for(var e=document.createElement("fakeelement"),n=(t.length,0);n<t.length;n++){var i=t[n];if(void 0!==e.style[i])return i}return!1}function C(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function E(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&H;t.addEventListener(n,e[n],i)}}function O(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;t.removeEventListener(n,e[n],i)}}function N(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}function D(t,e,n,i,a,r,o){function s(){r-=l,u+=f,t.style[e]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(t.style[e].replace(n,"").replace(i,"").replace(c,"")),f=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var k=document.documentElement,M="classList"in document.createElement("_"),P=M?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},I=M?function(t,e){P(t,e)||t.classList.add(e)}:function(t,e){P(t,e)||(t.className+=" "+e)},S=M?function(t,e){P(t,e)&&t.classList.remove(e)}:function(t,e){P(t,e)&&(t.className=t.className.replace(e,""))},W=!1;try{var L=Object.defineProperty({},"passive",{get:function(){W=!0}});window.addEventListener("test",null,L)}catch(t){}var H=!!W&&{passive:!0},R=window,z=R.requestAnimationFrame||R.webkitRequestAnimationFrame||R.mozRequestAnimationFrame||R.msRequestAnimationFrame||function(t){return setTimeout(t,16)},B=window,q=B.cancelAnimationFrame||B.mozCancelAnimationFrame||function(t){clearTimeout(t)},F=navigator.userAgent,j=!0,G={};try{G=localStorage,G.tnsApp&&G.tnsApp!==F&&["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){G.removeItem(t)}),G.tnsApp=F}catch(t){j=!1}j&&!localStorage&&(G={});var U=document,Q=window,X={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},V=e(G.tC)||n("tC",function(){var t=document,e=a(),n=r(e),i=t.createElement("div"),s=!1;e.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(t){}return e.fake?o(e,n):i.remove(),s}(),j),Y=e(G.tSP)||n("tSP",function(){var t,e,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",t=c.cloneNode(!0),l.appendChild(c),l.appendChild(t),i.appendChild(l),e=c.offsetTop!==t.offsetTop,i.fake?o(i,s):l.remove(),e}(),j),K=e(G.tMQ)||n("tMQ",function(){var t,e=document,n=a(),i=r(n),s=e.createElement("div"),l=e.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(e.createTextNode(c)),t=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===t}(),j),J=e(G.tTf)||n("tTf",T(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),j),_=e(G.tTDu)||n("tTDu",T(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),j),Z=e(G.tTDe)||n("tTDe",T(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),j),$=e(G.tADu)||n("tADu",T(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),j),tt=e(G.tADe)||n("tADe",T(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),j),et=e(G.tTE)||n("tTE",C(_,"Transition"),j),nt=e(G.tAE)||n("tAE",C($,"Animation"),j);K||(Y=!1);var it=function(e){function n(){return Q.innerWidth||U.documentElement.clientWidth||U.body.clientWidth}function a(t){return t.clientWidth||a(t.parentNode)}function r(t){var n=e[t];return!n&&Pe&&Me.indexOf(t)>=0&&Pe.forEach(function(e){ke[e][t]&&(n=!0)}),n}function o(t,n){n=n?n:Se;var i,a={slideBy:"page",edgePadding:!1};if(!pe&&t in a)i=a[t];else if("items"===t&&o("fixedWidth"))i=Math.floor(We/(o("fixedWidth")+o("gutter")));else if("autoHeight"===t&&"outer"===Fe)i=!0;else if(i=e[t],Pe&&Me.indexOf(t)>=0)for(var r=0,s=Pe.length;r<s;r++){var l=Pe[r];if(!(n>=l))break;t in ke[l]&&(i=ke[l][t])}return"slideBy"===t&&"page"===i&&(i=o("items")),i}function p(t){return V?V+"("+100*t+"% / "+tn+")":100*t/tn+"%"}function T(t,e,n){var i="";if(t){var a=t;e&&(a+=e),i=n?"margin: 0px "+(We%(n+e)+e)/2+"px":we?"margin: 0 "+t+"px 0 "+a+"px;":"padding: "+a+"px 0 "+t+"px 0;"}else if(e&&!n){var r="-"+e+"px",o=we?r+" 0 0":"0 "+r+" 0";i="margin: 0 "+o+";"}return i}function C(t,e,n){return t?(t+e)*tn+"px":V?V+"("+100*tn+"% / "+n+")":100*tn/n+"%"}function k(t,e,n){var i="";if(we){if(i="width:",t)i+=t+e+"px";else{var a=pe?tn:n;i+=V?V+"(100% / "+a+")":100/a+"%"}i+=Tn+";"}return i}function M(t){var e="";if(t!==!1){e=(we?"padding-":"margin-")+(we?"right":"bottom")+": "+t+"px;"}return e}function W(t){var e=_.substring(0,_.length-18).toLowerCase(),n="transition-duration: "+t/1e3+"s";return e&&(n="-"+e+"-"+n),n}function L(t){z(function(){H(Yt(t))})}function H(t){if(Ae){Se=n(),"outer"===Fe&&mn.emit("outerResized",re(t));var e=Ie,i=ln,r=Be,s=wn;if(Ue&&(We=a(Te)),be=a(Ce),Pe&&R(),e!==Ie||Ue){var u=Qe,f=Ke,d=Ue,v=Ge,h=je,p=bn;if(Be=o("items"),qe=o("slideBy"),bn=o("disable"),wn=!!bn||!!An&&De<=Be,Be!==r&&(fn=tn-Be,Ti()),bn!==p&&j(bn),wn!==s&&(wn&&(ln=pe?$e:0),B()),e!==Ie&&(Xe=o("speed"),Ge=o("edgePadding"),je=o("gutter"),Ue=o("fixedWidth"),bn||Ue===d||Tt(),(Ke=o("autoHeight"))!==f&&(Ke||(Ce.style.height=""))),Qe=!wn&&o("arrowKeys"),Qe!==u&&(Qe?E(U,Dn):O(U,Dn)),Pn){var m=Un,y=Qn;Un=!wn&&o("controls"),Qn=o("controlsText"),Un!==m&&(Un?A(Xn):b(Xn)),Qn!==y&&(qn.innerHTML=Qn[0],Fn.innerHTML=Qn[1])}if(In){var g=Yn;Yn=!wn&&o("nav"),Yn!==g&&(Yn?(A(Kn),ae()):b(Kn))}if(Ln){var x=Ai;Ai=!wn&&o("touch"),Ai!==x&&pe&&(Ai?E(Ee,kn):O(Ee,kn))}if(Hn){var w=wi;wi=!wn&&o("mouseDrag"),wi!==w&&pe&&(wi?E(Ee,Mn):O(Ee,Mn))}if(Wn){var N=si,D=fi,P=vi,I=ui;if(wn?si=fi=vi=!1:(si=o("autoplay"),si?(fi=o("autoplayHoverPause"),vi=o("autoplayResetOnVisibility")):fi=vi=!1),ui=o("autoplayText"),li=o("autoplayTimeout"),si!==N&&(si?(di&&A(di),ii||ri||Lt()):(di&&b(di),ii&&Ht())),fi!==D&&(fi?E(Ee,On):O(Ee,On)),vi!==P&&(vi?E(U,Nn):O(U,Nn)),di&&ui!==I){var S=si?1:0,W=di.innerHTML,L=W.length-I[S].length;W.substring(L)===I[S]&&(di.innerHTML=W.substring(0,L)+ui[S])}}if(!K){if(wn||Ge===v&&je===h||(Ce.style.cssText=T(Ge,je,Ue)),pe&&we&&(Ue!==d||je!==h||Be!==r)&&(Ee.style.width=C(Ue,je,Be)),we&&(Be!==r||je!==h||Ue!=d)){var H=k(Ue,je,Be)+M(je);Je.removeRule(c(Je)-1),l(Je,"#"+xn+" > .tns-item",H,c(Je))}Ue||ln!==i||Et(0)}ln!==i&&(mn.emit("indexChanged",re()),Et(0),cn=ln),Be!==r&&(lt(),ht(),navigator.msMaxTouchPoints&&dt())}we||bn||(ft(),ne(),Tt()),F(!0),!Ke&&pe||bn||ot()}}function R(){Ie=0,Pe.forEach(function(t,e){Se>=t&&(Ie=e+1)})}function B(){var t="tns-transparent";if(wn){if(!Re){if(Ge&&(Ce.style.margin="0px"),$e)for(var e=$e;e--;)pe&&I(Ne[e],t),I(Ne[tn-e-1],t);Re=!0}}else if(Re){if(Ge&&!Ue&&K&&(Ce.style.margin=""),$e)for(var e=$e;e--;)pe&&S(Ne[e],t),S(Ne[tn-e-1],t);Re=!1}}function F(t){Ue&&Ge&&(wn||We<=Ue+je?"0px"!==Ce.style.margin&&(Ce.style.margin="0px"):t&&(Ce.style.cssText=T(Ge,je,Ue)))}function j(t){var e=Ne.length;if(t){if(Je.disabled=!0,Ee.className=Ee.className.replace(gn.substring(1),""),g(Ee),Ye)for(var n=$e;n--;)pe&&b(Ne[n]),b(Ne[e-n-1]);if(we&&pe||g(Ce),!pe)for(var i=ln,a=ln+De;i<a;i++){var r=Ne[i];g(r),S(r,me),S(r,xe)}}else{if(Je.disabled=!1,Ee.className+=gn,we||ft(),Tt(),Ye)for(var n=$e;n--;)pe&&A(Ne[n]),A(Ne[e-n-1]);if(!pe)for(var i=ln,a=ln+De;i<a;i++){var r=Ne[i],o=i<ln+Be?me:xe;r.style.left=100*(i-ln)/Be+"%",I(r,o)}}}function G(){if(_e&&!bn){var t=ln,e=ln+Be;for(Ge&&(t-=1,e+=1);t<e;t++)d(Ne[t].querySelectorAll(".tns-lazy-img"),function(t){var e={};e[et]=function(t){t.stopPropagation()},E(t,e),P(t,"loaded")||(t.src=h(t,"data-src"),I(t,"loaded"))})}}function at(t){var e=Kt(t);I(e,zn),O(e,Bn)}function rt(t,e){for(var n=[],i=t,a=t+e;i<a;i++)d(Ne[i].querySelectorAll("img"),function(t){n.push(t)});return n}function ot(){var t=Ke?rt(ln,Be):rt($e,De);z(function(){st(t,ut)})}function st(t,e){return ze?e():(t.forEach(function(e,n){P(e,zn)&&t.splice(n,1)}),t.length?void z(function(){st(t,e)}):e())}function lt(){G(),vt(),bt(),ae(),pt()}function ct(t,e){for(var n=[],i=t,a=t+e;i<a;i++)n.push(Ne[i].offsetHeight);return Math.max.apply(null,n)}function ut(){var t=Ke?ct(ln,Be):ct($e,De);Ce.style.height!==t&&(_&&At(Xe),Ce.style.height=t+"px")}function ft(){He=[0];for(var t,e=Ne[0].getBoundingClientRect().top,n=1;n<tn;n++)t=Ne[n].getBoundingClientRect().top,He.push(t-e)}function dt(){Te.style.msScrollSnapPointsX="snapInterval(0%, "+100/Be+"%)"}function vt(){for(var t=ln+Math.min(De,Be),e=tn;e--;){var n=Ne[e];e>=ln&&e<t?v(n,"tabindex")&&(m(n,{"aria-hidden":"false"}),y(n,["tabindex"]),I(n,Rn)):(v(n,"tabindex")||m(n,{"aria-hidden":"true",tabindex:"-1"}),P(n,Rn)&&S(n,Rn))}}function ht(){if(!pe){for(var t=ln+Math.min(De,Be),e=tn;e--;){var n=Ne[e];e>=ln&&e<t?(I(n,"tns-moving"),n.style.left=100*(e-ln)/Be+"%",I(n,me),S(n,xe)):n.style.left&&(n.style.left="",I(n,xe),S(n,me)),S(n,ye)}setTimeout(function(){d(Ne,function(t){S(t,"tns-moving")})},300)}}function pt(){if(Yn&&($n=Zn!==-1?Zn:ln%De,Zn=-1,$n!==ti)){var t=Vn[ti],e=Vn[$n];m(t,{tabindex:"-1","aria-selected":"false"}),m(e,{tabindex:"0","aria-selected":"true"}),S(t,ei),I(e,ei)}}function mt(t){return t.nodeName.toLowerCase()}function yt(t){return"button"===mt(t)}function gt(t){return"true"===t.getAttribute("aria-disabled")}function xt(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function bt(){if(Un&&!Ve&&!Ye){var t=jn?qn.disabled:gt(qn),e=Gn?Fn.disabled:gt(Fn),n=ln===un,i=!Ve&&ln===fn;n&&!t&&xt(jn,qn,!0),!n&&t&&xt(jn,qn,!1),i&&!e&&xt(Gn,Fn,!0),!i&&e&&xt(Gn,Fn,!1)}}function At(t,e){t=t?t/1e3+"s":"",e=e||Ee,e.style[_]=t,pe||(e.style[$]=t),we||(Ce.style[_]=t)}function wt(){var t;if(we)if(Ue)t=-(Ue+je)*ln+"px";else{var e=J?tn:Be;t=100*-ln/e+"%"}else t=-He[ln]+"px";return t}function Tt(t){t||(t=wt()),Ee.style[an]=rn+t+on}function Ct(t,e,n,i){for(var a=t,r=t+Be;a<r;a++){var o=Ne[a];i||(o.style.left=100*(a-ln)/Be+"%"),_&&At(Xe,o),ge&&Z&&(o.style[Z]=o.style[tt]=ge*(a-t)/1e3+"s"),S(o,e),I(o,n),i&&Ze.push(o)}}function Et(t,e){isNaN(t)&&(t=Xe),ii&&!w(Ee)&&(t=0),_&&At(t),Ci(t,e)}function Ot(t,e){nn&&Ti(),(ln!==cn||e)&&(mn.emit("indexChanged",re()),mn.emit("transitionStart",re()),ii&&t&&["click","keydown"].indexOf(t.type)>=0&&Ht(),hn=!0,Et())}function Nt(t){return t.toLowerCase().replace(/-/g,"")}function Dt(t){if(pe||hn){if(mn.emit("transitionEnd",re(t)),!pe&&Ze.length>0)for(var e=0;e<Be;e++){var n=Ze[e];n.style.left="",_&&At(0,n),ge&&Z&&(n.style[Z]=n.style[tt]=""),S(n,ye),I(n,xe)}if(!t||!pe&&t.target.parentNode===Ee||t.target===Ee&&Nt(t.propertyName)===Nt(an)){if(!nn){var i=ln;Ti(),ln!==i&&(mn.emit("indexChanged",re()),_&&At(0),Tt())}Ke&&ot(),"inner"===Fe&&mn.emit("innerLoaded",re()),hn=!1,ti=$n,cn=ln}}}function kt(t,e){if(!wn)if("prev"===t)Mt(e,-1);else if("next"===t)Mt(e,1);else if(!hn){var n=ln%De,i=0;if(n<0&&(n+=De),"first"===t)i=-n;else if("last"===t)i=De-Be-n;else if("number"!=typeof t&&(t=parseInt(t)),!isNaN(t)){var a=t%De;a<0&&(a+=De),i=a-n}ln+=i,ln%De!=cn%De&&Ot(e)}}function Mt(t,e){if(!hn){var n;if(!e){t=Yt(t);for(var i=t.target||t.srcElement;i!==Xn&&[qn,Fn].indexOf(i)<0;)i=i.parentNode;var a=[qn,Fn].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Ve){if(ln===un&&e===-1)return void kt("last",t);if(ln===fn&&1===e)return void kt(0,t)}e&&(ln+=qe*e,Ot(n||t&&"keydown"===t.type?t:null))}}function Pt(t){if(!hn){t=Yt(t);for(var e,n=t.target||t.srcElement;n!==Kn&&!v(n,"data-nav");)n=n.parentNode;v(n,"data-nav")&&(e=Zn=[].indexOf.call(Vn,n),kt(e,t))}}function It(){ni=setInterval(function(){Mt(null,ci)},li),ii=!0}function St(){clearInterval(ni),ii=!1}function Wt(t,e){m(di,{"data-action":t}),di.innerHTML=hi[0]+t+hi[1]+e}function Lt(){It(),di&&Wt("stop",ui[1])}function Ht(){St(),di&&Wt("start",ui[0])}function Rt(){si&&!ii&&(Lt(),ri=!1)}function zt(){ii&&(Ht(),ri=!0)}function Bt(){ii?(Ht(),ri=!0):(Lt(),ri=!1)}function qt(){U.hidden?ii&&(St(),oi=!0):oi&&(It(),oi=!1)}function Ft(){ii&&(St(),ai=!0)}function jt(){ai&&(It(),ai=!1)}function Gt(t){switch(t=Yt(t),t.keyCode){case X.LEFT:Mt(t,-1);break;case X.RIGHT:Mt(t,1)}}function Ut(t){switch(t=Yt(t),t.keyCode){case X.LEFT:case X.UP:case X.PAGEUP:qn.disabled||Mt(t,-1);break;case X.RIGHT:case X.DOWN:case X.PAGEDOWN:Fn.disabled||Mt(t,1);break;case X.HOME:kt(0,t);break;case X.END:kt(De-1,t)}}function Qt(t){t.focus()}function Xt(t){function n(t){return e.navContainer?t:Jn[t]}var i=U.activeElement;if(v(i,"data-nav")){t=Yt(t);var a=t.keyCode,r=[].indexOf.call(Vn,i),o=Jn.length,s=Jn.indexOf(r);switch(e.navContainer&&(o=De,s=r),a){case X.LEFT:case X.PAGEUP:s>0&&Qt(Vn[n(s-1)]);break;case X.UP:case X.HOME:s>0&&Qt(Vn[n(0)]);break;case X.RIGHT:case X.PAGEDOWN:s<o-1&&Qt(Vn[n(s+1)]);break;case X.DOWN:case X.END:s<o-1&&Qt(Vn[n(o-1)]);break;case X.ENTER:case X.SPACE:Zn=r,kt(r,t)}}}function Vt(){Et(0,Ee.scrollLeft()),cn=ln}function Yt(t){return t=t||Q.event,Jt(t)?t.changedTouches[0]:t}function Kt(t){return t.target||Q.event.srcElement}function Jt(t){return t.type.indexOf("touch")>=0}function _t(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Zt(t){gi=!0,q(xi),xi=z(function(){te(t)}),t=Yt(t),mn.emit(Jt(t)?"touchStart":"dragStart",re(t)),!Jt(t)&&["img","a"].indexOf(mt(Kt(t)))>=0&&_t(t),mi.x=parseInt(t.clientX),mi.y=parseInt(t.clientY),pi=parseFloat(Ee.style[an].replace(rn,"").replace(on,""))}function $t(t){gi&&(t=Yt(t),yi.x=parseInt(t.clientX),yi.y=parseInt(t.clientY))}function te(t){if(vn){q(xi),gi&&(xi=z(function(){te(t)})),"?"===vn&&(vn=f(u(yi.y-mi.y,yi.x-mi.x),dn)===e.axis),mn.emit(Jt(t)?"touchMove":"dragMove",re(t));var n=pi,i=bi(yi,mi);if(!we||Ue)n+=i,n+="px";else{n+=J?i*Be*100/(be*tn):100*i/be,n+="%"}J&&At(0),Ee.style[an]=rn+n+on}}function ee(t){if(gi){q(xi),dn&&(vn="?"),gi=!1,yi.x=parseInt(t.clientX),yi.y=parseInt(t.clientY);var e=bi(yi,mi);if(mi={x:0,y:0},yi={x:0,y:0},Math.abs(e)>=5){if(!Jt(t)){var n=Kt(t);E(n,{click:function t(e){_t(e),O(n,{click:t})}})}xi=z(function(){if(t=Yt(t),mn.emit(Jt(t)?"touchEnd":"dragEnd",re(t)),we){var n=-e*Be/be;n=e>0?Math.floor(n):Math.ceil(n),ln+=n}else{var i=-(pi+e);if(i<=0)ln=un;else if(i>=He[He.length-1])ln=fn;else{var a=0;do{a++,ln=e<0?a+1:a}while(a<tn&&i>=He[a+1])}}Ot(t,e)})}}}function ne(){Ce.style.height=He[ln+Be]-He[ln]+"px"}function ie(){Jn=[];for(var t=ln%De%Be;t<De;)!Ye&&t+Be>De&&(t=De-Be),Jn.push(t),t+=Be;(Ye&&Jn.length*Be<De||!Ye&&Jn[0]>0)&&Jn.unshift(0)}function ae(){Yn&&!Sn&&(ie(),Jn!==_n&&(d(Vn,function(t,e){Jn.indexOf(e)<0?b(t):A(t)}),_n=Jn))}function re(t){return{container:Ee,slideItems:Ne,navContainer:Kn,navItems:Vn,controlsContainer:Xn,hasControls:Pn,prevButton:qn,nextButton:Fn,items:Be,slideBy:qe,cloneCount:$e,slideCount:De,slideCountNew:tn,index:ln,indexCached:cn,navCurrentIndex:$n,navCurrentIndexCached:ti,visibleNavIndexes:Jn,visibleNavIndexesCached:_n,sheet:Je,event:t||{}}}e=t({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1},e||{});for(var oe=Q.console&&"function"==typeof Q.console.warn,se=["container","controlsContainer","navContainer","autoplayButton"],le=se.length;le--;){var ce=se[le];if("string"==typeof e[ce]){var ue=U.querySelector(e[ce]);if(!ue||!ue.nodeName)return void(oe&&console.warn("Can't find",e[ce]));e[ce]=ue}}if(e.container.children&&e.container.children.length<1)return void(oe&&console.warn("No slides found in",e.container));if(e.responsive){var fe={},de=e.responsive;for(var ve in de){var he=de[ve];fe[ve]="number"==typeof he?{items:he}:he}e.responsive=fe,fe=null,0 in e.responsive&&(e=t(e,e.responsive[0]),delete e.responsive[0])}var pe="carousel"===e.mode;if(!pe){e.axis="horizontal",e.rewind=!1,e.loop=!0,e.edgePadding=!1;var me="tns-fadeIn",ye="tns-fadeOut",ge=!1,xe=e.animateNormal||"tns-normal";et&&nt&&(me=e.animateIn||me,ye=e.animateOut||ye,ge=e.animateDelay||ge)}var be,Ae,we="horizontal"===e.axis,Te=U.createElement("div"),Ce=U.createElement("div"),Ee=e.container,Oe=Ee.parentNode,Ne=Ee.children,De=Ne.length,ke=e.responsive,Me=[],Pe=!1,Ie=0,Se=n();if(e.fixedWidth)var We=a(Oe);if(ke){Pe=Object.keys(ke).map(function(t){return parseInt(t)}).sort(function(t,e){return t-e}),Pe.forEach(function(t){Me=Me.concat(Object.keys(ke[t]))});var Le=[];Me.forEach(function(t){Le.indexOf(t)<0&&Le.push(t)}),Me=Le,R()}var He,Re,ze,Be=o("items"),qe="page"===o("slideBy")?Be:o("slideBy"),Fe=e.nested,je=o("gutter"),Ge=o("edgePadding"),Ue=o("fixedWidth"),Qe=o("arrowKeys"),Xe=o("speed"),Ve=e.rewind,Ye=!Ve&&e.loop,Ke=o("autoHeight"),Je=s(),_e=e.lazyload,Ze=[],$e=Ye?2*De:0,tn=pe?De+2*$e:De+$e,en=!(!Ue||Ye||Ge),nn=!pe||!Ye,an=we?"left":"top",rn="",on="",sn=o("startIndex"),ln=sn?function(t){return t%=De,t<0&&(t+=De),t=Math.min(t,tn-Be)}(sn):pe?$e:0,cn=ln,un=0,fn=tn-Be,dn=e.swipeAngle,vn=!dn||"?",hn=!1,pn=e.onInit,mn=new N,yn=Ee.id,gn=" tns-slider tns-"+e.mode,xn=Ee.id||i(),bn=o("disable"),An=e.freezable,wn=!!bn||!!An&&De<=Be,Tn="inner"===Fe?" !important":"",Cn={click:Mt,keydown:Ut},En={click:Pt,keydown:Xt},On={mouseover:Ft,mouseout:jt},Nn={visibilitychange:qt},Dn={keydown:Gt},kn={touchstart:Zt,touchmove:$t,touchend:ee,touchcancel:ee},Mn={mousedown:Zt,mousemove:$t,mouseup:ee,mouseleave:ee},Pn=r("controls"),In=r("nav"),Sn=e.navAsThumbnails,Wn=r("autoplay"),Ln=r("touch"),Hn=r("mouseDrag"),Rn="tns-slide-active",zn="tns-complete",Bn={load:at,error:at};if(Pn)var qn,Fn,jn,Gn,Un=o("controls"),Qn=o("controlsText"),Xn=e.controlsContainer;if(In)var Vn,Yn=o("nav"),Kn=e.navContainer,Jn=[],_n=Jn,Zn=-1,$n=ln%De,ti=$n,ei="tns-nav-active";if(Wn)var ni,ii,ai,ri,oi,si=o("autoplay"),li=o("autoplayTimeout"),ci="forward"===e.autoplayDirection?1:-1,ui=o("autoplayText"),fi=o("autoplayHoverPause"),di=e.autoplayButton,vi=o("autoplayResetOnVisibility"),hi=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ln||Hn)var pi,mi={x:0,y:0},yi={x:0,y:0},gi=!1,xi=0,bi=we?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(Ln)var Ai=o("touch");if(Hn)var wi=o("mouseDrag");wn&&(Un=Yn=Ai=wi=Qe=si=fi=vi=!1),J&&(an=J,rn="translate",rn+=we?"X(":"Y(",on=")"),function(){Te.appendChild(Ce),Oe.insertBefore(Te,Ee),Ce.appendChild(Ee),be=a(Ce);var t="tns-outer",n="tns-inner",i=r("gutter");if(pe?we&&(r("edgePadding")||i&&!e.fixedWidth)?t+=" tns-ovh":n+=" tns-ovh":i&&(t+=" tns-ovh"),Te.className=t,Ce.className=n,Ce.id=xn+"-iw",Ke&&(Ce.className+=" tns-ah",Ce.style[_]=Xe/1e3+"s"),""===Ee.id&&(Ee.id=xn),gn+=Y?" tns-subpixel":" tns-no-subpixel",gn+=V?" tns-calc":" tns-no-calc",pe&&(gn+=" tns-"+e.axis),Ee.className+=gn,pe&&et){var s={};s[et]=Dt,E(Ee,s)}t=n=null;for(var u=0;u<De;u++){var f=Ne[u];f.id||(f.id=xn+"-item"+u),I(f,"tns-item"),!pe&&xe&&I(f,xe),m(f,{"aria-hidden":"true",tabindex:"-1"})}if(Ye||Ge){for(var v=U.createDocumentFragment(),h=U.createDocumentFragment(),g=$e;g--;){var A=g%De,w=Ne[A].cloneNode(!0);if(y(w,"id"),h.insertBefore(w,h.firstChild),pe){var O=Ne[De-1-A].cloneNode(!0);y(O,"id"),v.appendChild(O)}}Ee.insertBefore(v,Ee.firstChild),Ee.appendChild(h),Ne=Ee.children}if(r("autoHeight")||!pe){var N=Ee.querySelectorAll("img");d(N,function(t){E(t,Bn);var e=t.src;t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e}),z(function(){st(x(N),function(){ze=!0})})}for(var D=ln,P=ln+Math.min(De,Be);D<P;D++){var f=Ne[D];m(f,{"aria-hidden":"false"}),y(f,["tabindex"]),I(f,Rn),pe||(f.style.left=100*(D-ln)/Be+"%",I(f,me),S(f,xe))}if(pe&&we&&(Y?(l(Je,"#"+xn+" > .tns-item","font-size:"+Q.getComputedStyle(Ne[0]).fontSize+";",c(Je)),l(Je,"#"+xn,"font-size:0;",c(Je))):d(Ne,function(t,e){t.style.marginLeft=p(e)})),K){var R=T(e.edgePadding,e.gutter,e.fixedWidth);if(l(Je,"#"+xn+"-iw",R,c(Je)),pe&&we){var q=_?W(Xe):"";R="width:"+C(e.fixedWidth,e.gutter,e.items)+";"+q,l(Je,"#"+xn,R,c(Je))}(we||e.gutter)&&(R=k(e.fixedWidth,e.gutter,e.items)+M(e.gutter),l(Je,"#"+xn+" > .tns-item",R,c(Je)))}else if(Ce.style.cssText=T(Ge,je,Ue),pe&&we&&(Ee.style.width=C(Ue,je,Be)),we||je){var R=k(Ue,je,Be)+M(je);l(Je,"#"+xn+" > .tns-item",R,c(Je))}if(we||bn||(ft(),ne()),ke&&K&&Pe.forEach(function(t){var e=ke[t],n="",i="",a="",s="",l=o("items",t),c=o("fixedWidth",t),u=o("edgePadding",t),f=o("gutter",t);("edgePadding"in e||"gutter"in e)&&(i="#"+xn+"-iw{"+T(u,f,c)+"}"),pe&&we&&("fixedWidth"in e||"gutter"in e||"items"in e)&&(a="#"+xn+"{width:"+C(c,f,l)+q+"}"),("fixedWidth"in e||r("fixedWidth")&&"gutter"in e||!pe&&"items"in e)&&(s+=k(c,f,l)),"gutter"in e&&(s+=M(f)),s.length>0&&(s="#"+xn+" > .tns-item{"+s+"}"),n=i+a+s,n.length>0&&Je.insertRule("@media (min-width: "+t/16+"em) {"+n+"}",Je.cssRules.length)}),pe&&!bn&&Tt(),navigator.msMaxTouchPoints&&(I(Te,"ms-touch"),E(Te,{scroll:Vt}),dt()),In){var X=pe?$e:0;if(Kn)m(Kn,{"aria-label":"Carousel Pagination"}),Vn=Kn.children,d(Vn,function(t,e){m(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":Ne[X+e].id})});else{for(var J="",Z=Sn?"":" hidden",D=0;D<De;D++)J+='<button data-nav="'+D+'" tabindex="-1" aria-selected="false" aria-controls="'+Ne[X+D].id+Z+'" type="button"></button>';J='<div class="tns-nav" aria-label="Carousel Pagination">'+J+"</div>",Te.insertAdjacentHTML("afterbegin",J),Kn=Te.querySelector(".tns-nav"),Vn=Kn.children}if(ae(),_){var $=_.substring(0,_.length-18).toLowerCase(),R="transition: all "+Xe/1e3+"s";$&&(R="-"+$+"-"+R),l(Je,"[aria-controls^="+xn+"-item]",R,c(Je))}m(Vn[$n],{tabindex:"0","aria-selected":"true"}),I(Vn[$n],ei),E(Kn,En),Yn||b(Kn)}if(Wn){var tt=si?"stop":"start";di?m(di,{"data-action":tt}):e.autoplayButtonOutput&&(Ce.insertAdjacentHTML("beforebegin",'<button data-action="'+tt+'" type="button">'+hi[0]+tt+hi[1]+ui[0]+"</button>"),di=Te.querySelector("[data-action]")),di&&E(di,{click:Bt}),si?(Lt(),fi&&E(Ee,On),vi&&E(Ee,Nn)):di&&b(di)}Pn&&(Xn?(qn=Xn.children[0],Fn=Xn.children[1],m(Xn,{"aria-label":"Carousel Navigation",tabindex:"0"}),m(qn,{"data-controls":"prev"}),m(Fn,{"data-controls":"next"}),m(Xn.children,{"aria-controls":xn,tabindex:"-1"})):(Te.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+xn+'" type="button">'+Qn[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+xn+'" type="button">'+Qn[1]+"</button></div>"),Xn=Te.querySelector(".tns-controls"),qn=Xn.children[0],Fn=Xn.children[1]),jn=yt(qn),Gn=yt(Fn),bt(),E(Xn,Cn),Un||b(Xn)),Ai&&E(Ee,kn),wi&&E(Ee,Mn),Qe&&E(U,Dn),"inner"===Fe?mn.on("outerResized",function(){H(),mn.emit("innerLoaded",re())}):E(Q,{resize:L}),"outer"===Fe?mn.on("innerLoaded",ot):!Ke&&pe||bn||ot(),G(),B(),F(),mn.on("indexChanged",lt),"function"==typeof pn&&pn(re()),"inner"===Fe&&mn.emit("innerLoaded",re()),bn&&j(!0),Ae=!0}();var Ti=function(){return Ye?function(){var t=un,e=fn;if(pe)if(t+=qe,e-=qe,Ge)t+=1,e-=1;else if(Ue){var n=je?je:0;We%(Ue+n)>n&&(e-=1)}if(ln>e)for(;ln>=t+De;)ln-=De;else if(ln<t)for(;ln<=e-De;)ln+=De}:function(){ln=Math.max(un,Math.min(fn,ln))}}(),Ci=function(){return pe?function(t,e){e||(e=wt()),en&&ln===fn&&(e=-((Ue+je)*tn-be)+"px"),_||!t?(Tt(e),t&&w(Ee)||Dt()):D(Ee,an,rn,on,e,Xe,Dt),we||ne()}:function(t){Ze=[];var e={};e[et]=e[nt]=Dt,O(Ne[cn],e),E(Ne[ln],e),Ct(cn,me,ye,!0),Ct(ln,xe,me),et&&nt&&t||Dt()}}();return{getInfo:re,events:mn,goTo:kt,play:Rt,pause:zt,isOn:Ae,updateSliderHeight:ut,rebuild:function(){return it(e)},destroy:function(){if(O(Q,{resize:L}),O(U,Dn),Je.disabled=!0,Ye)for(var t=$e;t--;)pe&&Ne[0].remove(),Ne[Ne.length-1].remove();var n=["tns-item",Rn];pe||(n=n.concat("tns-normal",me));for(var i=De;i--;){var a=Ne[i];a.id.indexOf(xn+"-item")>=0&&(a.id=""),n.forEach(function(t){S(a,t)})}if(y(Ne,["style","aria-hidden","tabindex"]),Ne=xn=De=tn=$e=null,Un&&(O(Xn,Cn),e.controlsContainer&&(y(Xn,["aria-label","tabindex"]),y(Xn.children,["aria-controls","aria-disabled","tabindex"])),Xn=qn=Fn=null),Yn&&(O(Kn,En),e.navContainer&&(y(Kn,["aria-label"]),y(Vn,["aria-selected","aria-controls","tabindex"])),Kn=Vn=null),si&&(clearInterval(ni),di&&O(di,{click:Bt}),O(Ee,On),O(Ee,Nn),e.autoplayButton&&y(di,["data-action"])),Ee.id=yn||"",Ee.className=Ee.className.replace(gn,""),g(Ee),pe&&et){var r={};r[et]=Dt,O(Ee,r)}O(Ee,kn),O(Ee,Mn),Oe.insertBefore(Ee,Te),Te.remove(),Te=Ce=Ee=ln=cn=Be=qe=$n=ti=Pn=Jn=_n=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=Ae=!1}}};return it}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
