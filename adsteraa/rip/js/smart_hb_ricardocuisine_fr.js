!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(1),i=r(a),u=n(3),o=n(5),s=r(o),l=n(8),c=r(l),f=n(6),d=r(f),p={spy:i.default,ssps:u.ssps,winners:s.default,cmd:c.default,utils:d.default};window.districtmSAS=p,p.spy.exec()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),o=r(u),s=n(3),l=r(s),c=n(5),f=r(c),d=n(6),p=r(d),v=n(8),h=r(v);window.callRender=0;var m=function(){function e(){a(this,e),this.placement=[]}return i(e,[{key:"listener",value:function(){return"undefined"!=typeof sas}},{key:"exec",value:function(){this.listener()&&this.run(sas)}},{key:"emit",value:function(){var e=sas.call,t=sas.render;sas.call=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var a="string"==typeof arguments[1].formatId?arguments[1].formatId.split(","):[arguments[1].formatId],i=(n[1],0),u=this;a.forEach(function(t){o.default[t]&&!function(){var r={pls:t,sizes:o.default[t][1],div:"sas_"+t,modifiers:n,callback:e,id:o.default[t][0],that:u};l.default.forEach(function(e){try{e.execute(r)}catch(t){p.default.logger(e+" display errors "+t.message)}})}(),i=1}),p.default.logger(arguments),"std"===n[0]?(n[1].targetId="sas_"+a[0],setTimeout(function(){e(n[0],n[1],n[2])},300)):h.default.runtime.push(function(){e(n[0],n[1])})},sas.render=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=n[0];document.getElementById("sas_"+a)||document.write('<div id="sas_'+a+'"></div>'),0===window.callRender&&(setTimeout(function(){h.default.run()},1e3),window.callRender++),f.default.fetch(n[0]),h.default.runtime.push(function(){t(n[0])})}}},{key:"run",value:function(){this.emit()}}]),e}();t.default=new m},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={3766:["141570",["728x90","970x90","970x250"]],3767:["141567",["300x250"]],31236:["141569",["728x90"]],32177:["141568",["300x250"]],34570:["141567",["300x250"]]};t.default=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ssps=void 0;var a=n(4),i=r(a),u=n(7),o=r(u),s=[];s.push(o.default);t.ssps={test:i.default,appnexus:o.default};t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(5),o=r(u),s=function(){function e(){a(this,e)}return i(e,[{key:"paste",value:function(e){e.cpm>4&&o.default.add(e)}},{key:"callback",value:function(e){var t=this,n=e.pls,r=e.sizes,a=e.div,i=r.map(function(e){var r=new Image,i=e.split("x"),u=parseFloat(t.randomCPM()/100);return r.src="https://placeholdit.imgix.net/~text?txtsize=28&bg=fff455&txt="+u+"&w="+i[0]+"&h="+i[1],r.style.width=i[0]+"px",r.style.height=i[1]+"px",r.style.display="block",r.style.position="relative",r.style.zIndex=1e5,{div:a,pls:n,size:e,cpm:u,creative:r}});console.log("list of return bids",i);var u=i.reduce(function(e,t){return e.cpm<t.cpm?t:e},{cpm:0});console.log("winning impressions:",u),this.paste(u)}},{key:"randomCPM",value:function(){return Math.floor(600*Math.random())}},{key:"execute",value:function(e){console.log(e),this.callback(e)}}]),e}();t.default=new s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),o=r(u),s=function(){function e(){a(this,e),this.list=[],this.bids={},this.col={}}return i(e,[{key:"add",value:function(e){this.list.push(e)}},{key:"register",value:function(e,t){this.bids[e]=t}},{key:"fetch",value:function(e){this.list.forEach(function(t){t.pls===e&&setTimeout(function(){document.querySelector("#"+t.div).appendChild(t.creative)},2e3)})}},{key:"update",value:function(e,t){if(this.bids[e])for(var n in t)this.bids[e][n]=t[n];else o.default.logger(e," can't be updated")}},{key:"select",value:function(e){return o.default.logger(e),this.bids[e.auctionId]}},{key:"selectById",value:function(e){return this.bids[e]}},{key:"selectByServer",value:function(e){for(var t in this.bids)if(this.bids[t].fromServer===e)return this.bids[t]}},{key:"findByGle",value:function(e){for(var t in this.bids)this.bids[t].ggle===e&&parseFloat(this.bids[t].winBid)>0&&o.default.setTargeting(this.col[t])}},{key:"storeHistory",value:function(){this.history.push(Object.create(this.bids)),this.col={}}},{key:"selectField",value:function(e,t){return this.bids[e][t]||"error"}},{key:"selectWin",value:function(){var e={};for(var t in this.col)return""!==this.col[t].winBid&&(e[t]=this.col[t]),e}},{key:"loadTime",value:function(e){this.update(e.auctionId,{load:e.end-e.start})}}]),e}();t.default=new s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5),s=r(o),l=function(){function e(){a(this,e)}return u(e,[{key:"theShowMustGoOn",value:function(e,t){var n=(s.default.selectByServer(t),s.default.selectByServer(t)),r=n.adUrl,a=n.placementCode;e.write(r);try{console.log("hb_displayed for "+a)}catch(e){}}},{key:"logger",value:function(e){try{typeof localStorage.dmConsole===!0&&console.log("District Header SAS: "+e)}catch(e){}}},{key:"setLogger",value:function(){var e=window.location.search.replace("?","").split("&"),t=e.map(function(e){return e.split("=")});t.forEach(function(e){if("dmDebug"===e[0])try{localStorage.dmConsole=!0}catch(e){}})}},{key:"generateId",value:function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}},{key:"clone",value:function(e,t){var n;if(Array.isArray(t)){var r=i(t,1);n=r[0]}else n=t;this.utils(n);for(var a in n)e[a]=n[a];return e}},{key:"setTargeting",value:function(e){setTimeout(function(){e.params.callback(e.params.modifiers[0],e.params.modifiers[1])},100)}},{key:"timer",value:function(){return(new Date).getDate()}}]),e}();t.default=new l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),o=r(u),s=n(5),l=r(s),c=1908,f=0,d=function(){function e(){a(this,e)}return i(e,[{key:"parse",value:function(e){var t=document.createElement("script");t.src=e,t.async=!0;var n=document.getElementsByTagName("head")[0];n.appendChild(t)}},{key:"response",value:function(e){if(e.result&&e.result.cpm&&0!==e.result.cpm){var t,n=e.callback_uid;if(e.result&&e.result.cpm){t=parseInt(e.result.cpm,10),t/=1e4;var r=(e.result.ad,e.result.creative_id,l.default.selectById(e.callback_uid)),a={};a.winBid=parseFloat(.9*t*1.32).toFixed(2),a.adUrl="<IFRAME src='"+e.result.ad+"' FRAMEBORDER='0' SCROLLING='no' MARGINHEIGHT='0' MARGINWIDTH='0' TOPMARGIN='0' LEFTMARGIN='0' ALLOWTRANSPARENCY='true' WIDTH='"+e.result.width+"' HEIGHT='"+e.result.height+"'></IFRAME>",a.trackingUrl="",a.callBackId=n,a.auctionId=n,a.size=e.result.width+"x"+e.result.height,a.target=r.params.pls,a.params=r.params,a.ssp="appnexus",a.end=o.default.timer(),a.fromServer=a.size+"_"+r.params.pls+"_200",l.default.update(a.callBackId,a),l.default.loadTime(l.default.select(a)),a.load=l.default.selectField(a.auctionId,"load"),o.default.logger("response bid from appnexus"),o.default.logger(a),";"!==r.params.modifiers[1].target.slice(-1)?r.params.modifiers[1].target=r.params.modifiers[1].target+(";dm="+a.fromServer):r.params.modifiers[1].target=r.params.modifiers[1].target+("dm="+a.fromServer)}}0===f&&f++}},{key:"jpt",value:function(e){var t=e.seat,n=e.params,r=e.auctionId,a="",i="http:"===document.location.protocol?"http://ib.adnxs.com/jpt?":"https://secure.adnxs.com/jpt?",u=r,o=0,s=t,l=t,c="window.districtmSAS.ssps.appnexus.response",f="dm-pl-"+n.id,d=n.sizes[0],p="",v=n.floor?parseFloat(n.floor).toFixed(2):"",h={memberId:s,member:l,callback_uid:u,psa:o,callback:c,code:f,size:d,promo_sizes:p,reserve:v};a=i;for(var m in h)("reserve"!==m||"reserve"===m&&""!==h[m])&&(a+=m+"="+h[m]+"&");a+="referrer="+window.location.href,this.parse(a)}},{key:"execute",value:function(e){var t=o.default.generateId(30),n=e,r=e.div,a="appnexus",i=(n.id,{seat:c,auctionId:t,params:n,placementCode:r,bidder:a});l.default.register(i.auctionId,i),this.jpt(i)}}]),e}();t.default=new d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),o=r(u),s=function(){function e(){a(this,e),this.runtime=[]}return i(e,[{key:"run",value:function(){this.runtime.forEach(function(e){e(),o.default.logger("run SAS command back")})}}]),e}();t.default=new s}]);