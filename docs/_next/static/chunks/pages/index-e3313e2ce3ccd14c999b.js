(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{97494:function(e,n,t){"use strict";var i=t(67294),r=t(29163),o=t(85893);n.Z=i.memo((0,r.ZP)((function(e){var n=e.src,t=void 0===n?"/images/logo_22x.png":n,i=e.className;return(0,o.jsx)("div",{className:i,children:(0,o.jsx)("img",{src:t})})})).withConfig({displayName:"Logo",componentId:"sc-lchex5-0"})(["display:inline-block;img{display:inline-block;height:2.5rem;width:auto;object-fit:contain;}span{font-size:2.45rem;font-weight:400;line-height:2.45rem;color:white;display:inline-block;}"]))},55444:function(e,n,t){"use strict";t.d(n,{Y:function(){return l}});var i=t(67294),r=t(29163),o=t(85893),a=[{style:{left:"42%",top:0,position:"absolute",transform:"rotate(-45deg)"},items:[{indexLine:0,indexInLine:0},{indexLine:1,indexInLine:1},{indexLine:2,indexInLine:0},{indexLine:2,indexInLine:2}]},{style:{right:239,top:84,position:"absolute",transform:"rotate(-43deg)"},items:[{indexLine:0,indexInLine:2},{indexLine:0,indexInLine:4},{indexLine:1,indexInLine:1},{indexLine:1,indexInLine:3},{indexLine:1,indexInLine:5},{indexLine:2,indexInLine:0},{indexLine:2,indexInLine:2},{indexLine:2,indexInLine:4},{indexLine:2,indexInLine:6}]},{style:{right:224,bottom:80,position:"absolute"},items:[{indexLine:0,indexInLine:2},{indexLine:0,indexInLine:4},{indexLine:1,indexInLine:1},{indexLine:1,indexInLine:3},{indexLine:1,indexInLine:5},{indexLine:2,indexInLine:0},{indexLine:2,indexInLine:2},{indexLine:2,indexInLine:4},{indexLine:2,indexInLine:6}]},{style:{left:"50%",bottom:80,position:"absolute"},items:[{indexLine:0,indexInLine:0},{indexLine:1,indexInLine:1},{indexLine:2,indexInLine:0},{indexLine:2,indexInLine:2}]},{style:{left:0,bottom:128,position:"absolute"},items:[{indexLine:0,indexInLine:3},{indexLine:1,indexInLine:2},{indexLine:2,indexInLine:1},{indexLine:2,indexInLine:3},{indexLine:3,indexInLine:0},{indexLine:3,indexInLine:2}]},{style:{left:0,top:"50%",position:"absolute"},items:[{indexLine:0,indexInLine:0},{indexLine:1,indexInLine:1}]},{style:{left:-16,top:"20%",position:"absolute"},items:[{indexLine:0,indexInLine:2},{indexLine:1,indexInLine:1},{indexLine:2,indexInLine:0},{indexLine:2,indexInLine:2},{indexLine:3,indexInLine:1},{indexLine:5,indexInLine:0}]}],s=[{style:{left:16,top:-16,position:"absolute"},items:[{indexLine:0,indexInLine:1},{indexLine:1,indexInLine:0},{indexLine:1,indexInLine:2}]},{style:{left:"40%",top:0,position:"absolute",transform:"rotate(-45deg)"},items:[{indexLine:0,indexInLine:0},{indexLine:1,indexInLine:1},{indexLine:2,indexInLine:0},{indexLine:2,indexInLine:2}]},{style:{right:108,top:16,position:"absolute"},items:[{indexLine:0,indexInLine:2},{indexLine:1,indexInLine:1},{indexLine:1,indexInLine:3},{indexLine:2,indexInLine:0},{indexLine:2,indexInLine:2}]},{style:{right:100,bottom:88,position:"absolute"},items:[{indexLine:0,indexInLine:2},{indexLine:1,indexInLine:1},{indexLine:1,indexInLine:3},{indexLine:2,indexInLine:0},{indexLine:2,indexInLine:2}]},{style:{left:"46%",bottom:88,position:"absolute"},items:[{indexLine:0,indexInLine:0},{indexLine:1,indexInLine:1},{indexLine:2,indexInLine:0},{indexLine:2,indexInLine:2}]},{style:{left:12,bottom:56,position:"absolute"},items:[{indexLine:0,indexInLine:1},{indexLine:1,indexInLine:0}]}];var l=(0,r.ZP)((function(e){var n=e.className,t=e.type,r=void 0===t?1:t,l=e.color,c=void 0===l?"#333333":l,u=(0,i.useMemo)((function(){return(1===r?a:s).map((function(e){return e.items=e.items.map((function(e){return e.style={position:"absolute",left:32*e.indexInLine,top:32*e.indexLine,width:32,height:32,backgroundColor:c},e})),e}))}),[c,r]);return(0,o.jsx)("div",{className:n,children:u.map((function(e,n){return(0,o.jsx)("div",{style:e.style,children:e.items.map((function(e,n){return(0,o.jsx)("span",{style:e.style},"item_".concat(n))}))},"g_".concat(n))}))})})).withConfig({displayName:"PixelBg",componentId:"sc-1bqekci-0"})(["position:absolute;width:100%;height:100%;overflow:hidden;top:0;right:0;"])},12415:function(e,n,t){"use strict";t.d(n,{JV:function(){return l},Cj:function(){return u}});var i=t(94184),r=t.n(i),o=t(67294),a=t(29163),s=t(85893);var l=(0,a.ZP)((function(e){var n=e.className,t=e.position,i=void 0===t?"left":t,a=e.fullH,l=void 0!==a&&a,c=e.count,u=void 0===c?3:c,d=e.width,p=void 0===d?120:d,g=e.color,m=void 0===g?"#191919":g,f=e.fillColor,x=void 0===f?"#000000":f,h=e.type,b=void 0===h?2:h,v=l?u+1:u,w=(0,o.useMemo)((function(){return Math.round(p/v)}),[p,v]),k=(0,o.useMemo)((function(){return(2*(v-1)+b)*w}),[v,b,w]),L=(0,o.useMemo)((function(){for(var e=[],n=0;n<v;n++){var t=0===n&&l,r=t?"100%":k-2*n*w,o=t?0:"calc(50% - ".concat(Math.round(r/2),"px)"),a={position:"absolute",height:r,width:w,top:o,backgroundColor:m};"left"===i?a.left=n*w:"right"===i&&(a.right=n*w),e.push({style:a})}return e}),[v,w,k,l,i]),y=(0,o.useMemo)((function(){for(var e=[],n=0;n<v-1;n++){var t=k-2*(n+1)*w,r="calc(50% - ".concat(Math.round(t/2),"px)"),o={position:"absolute",height:t,width:w,top:r,zIndex:2,backgroundColor:x};"left"===i?o.left=n*w:"right"===i&&(o.right=n*w),e.push({style:o})}return e}),[v,w,k,l,i]);return(0,s.jsxs)("div",{className:r()(n,i),children:[L.map((function(e,n){return(0,s.jsx)("div",{style:e.style},"pixels_".concat(n))})),y.map((function(e,n){return(0,s.jsx)("div",{style:e.style},"fill_pixels_".concat(n))}))]})})).withConfig({displayName:"Pixels__Pixel",componentId:"sc-1vz4at9-0"})(["z-index:2;display:flex;height:100%;position:relative;width:","px;&.left{flex-direction:row;}&.right{flex-direction:row-reverse;}"],(function(e){var n=e.width;return void 0===n?120:n})),c="#000000";var u=(0,a.ZP)((function(e){var n=e.height,t=void 0===n?60:n,i=e.className,r=e.color,o=void 0===r?"#999999":r,a=e.fillColor,u=void 0===a?c:a,d=e.content,p=e.onClick,g=Math.round(t/5*3);return(0,s.jsxs)("div",{className:i,onClick:p,children:[(0,s.jsx)(l,{type:1,width:g,color:o,fillColor:u,position:"right"}),(0,s.jsx)("div",{className:"btn_content",children:d}),(0,s.jsx)(l,{type:1,width:g,color:o,fillColor:u,position:"left"})]})})).withConfig({displayName:"Pixels__PixelBtn",componentId:"sc-1vz4at9-1"})(["display:flex;align-items:center;width:min-content;height:","px;cursor:pointer;.btn_content{height:100%;line-height:","px;padding:0 20px;min-width:230px;font-size:24px;font-family:OpenSans-SemiBold;color:white;text-align:center;background-color:",";}&:hover{}"],(function(e){return e.height}),(function(e){return e.height}),(function(e){var n=e.fillColor;return void 0===n?c:n})),d=51,p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.round(.725*e*n)};a.ZP.div.withConfig({displayName:"Pixels__PixelBtn1",componentId:"sc-1vz4at9-2"})(["color:white;font-family:'OpenSans-SemiBold';font-size:32px;line-height:","px;height:","px;text-align:center;width:357px;cursor:pointer;background-image:url('/images/btn/btn_bg_l.png'),url('/images/btn/btn_bg_c.png'),url('/images/btn/btn_bg_r.png');background-position:0 0,","px 0,right center;background-repeat:no-repeat;background-attachment:scroll;background-size:","px 100%,calc(100% - ","px) 100%,","px 100%;&.dark{background-image:url('/images/btn/btn_dark_bg_l.png'),url('/images/btn/btn_dark_bg_c.png'),url('/images/btn/btn_dark_bg_r.png');}&.style_left{background-image:url('/images/btn/btn_bg_l.png'),url('/images/btn/btn_bg_c.png'),url('/images/btn/btn_bg_r2.png');&.dark{background-image:url('/images/btn/btn_dark_bg_l.png'),url('/images/btn/btn_dark_bg_c.png'),url('/images/btn/btn_dark_bg_r2.png');}}&.style_right{background-image:url('/images/btn/btn_bg_l2.png'),url('/images/btn/btn_bg_c.png'),url('/images/btn/btn_bg_r.png');&.dark{background-image:url('/images/btn/btn_dark_bg_l2.png'),url('/images/btn/btn_dark_bg_c.png'),url('/images/btn/btn_dark_bg_r.png');}}"],(function(e){var n=e.height;return void 0===n?d:n}),(function(e){var n=e.height;return void 0===n?d:n}),(function(e){var n=e.height;return p(void 0===n?d:n)}),(function(e){var n=e.height;return p(void 0===n?d:n)}),(function(e){var n=e.height;return p(void 0===n?d:n,2)}),(function(e){var n=e.height;return p(void 0===n?d:n)}))},59996:function(e,n,t){"use strict";t.d(n,{H:function(){return a}});var i=t(9669),r=t.n(i),o=t(45129);function a(e){return r().post((0,o.uJ)("/common/report"),e).catch(console.error)}},97376:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var i=t(30266),r=t(809),o=t.n(r),a=t(94184),s=t.n(a),l=t(96486),c=t.n(l),u=t(67294),d=t(23499),p=t(29163),g=t(55444),m=t(12415),f=t(52423),x=t(97494),h=t(12752),b=t(75282),v=t(83789),w=t(68216),k=t(92809),L=function e(){(0,w.Z)(this,e),(0,k.Z)(this,"value",!1)};function y(e,n){var t=(0,u.useMemo)((function(){for(var e=[],t=0;t<n;t++)e.push(new L);return e}),[n]),i=(0,u.useState)(t),r=i[0],o=i[1];return(0,u.useEffect)((function(){var i=n+1;o(t);var r=setInterval((function(){i>=t.length?i-=1:i<0?clearInterval(r):(console.info("setValueTrue--\x3e",i),o((function(e){return e[i].value=!0,(0,v.Z)(e)})),i-=1)}),e);return function(){return clearInterval(r)}}),[t,e,n]),(0,u.useMemo)((function(){return{data:r}}),[r])}var _=t(59996),I=t(99056),C=t(48278),j=t(96705),N=t(85893),P={Crust:"/images/group_wallet_crust.png",Polkadot:"/images/group_wallet_polkadot.png",MetaMask:"/images/group_wallet_metamask.png","Web 3":"/images/group_wallet_other.png",WalletConnect:"/images/group_wallet_connect.png"};function M(e){var n=e.gw,t=n.items.length,i=y(100,t).data;return(0,N.jsx)("div",{className:"wallet_items",children:n.items.map((function(e,n){return(0,N.jsxs)("div",{onClick:function(){return e.onClick(e)},className:s()("wallet_item",{animFinal:i[t-1-n].value}),children:[(0,N.jsx)("img",{className:"item_image",src:e.image}),(0,N.jsx)("span",{className:"item_name",children:e.name})]},"wallet_item_".concat(n))}))})}var S=u.memo((0,p.ZP)((function(e){var n=e.className,t=(0,d.$)().t,r=(0,j.WY)(),a=(0,u.useContext)(h.Il).alert,l=function(e){e&&a.error(e)},p=function(e){r.setLoginUser(e),(0,_.H)({type:1,walletType:e.wallet,address:e.account,data:{}})},v=(0,u.useCallback)((0,i.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(""),e.next=4,r.crust.init();case 4:if(r.crust.provider){e.next=7;break}return l("Crust Wallet not installed"),e.abrupt("return");case 7:return e.next=9,r.crust.login();case 9:n=e.sent,(t=(0,j.A4)("crust"))&&n.includes(t.account)?p(t):n.length>0&&p({account:n[0],wallet:"crust"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),[r,t]),w=(0,u.useCallback)((function(){window.open(b.up,"_blank")}),[]),k=(0,u.useCallback)((function(){window.open("https://swap.crustapps.net","_blank")}),[]),L=(0,u.useCallback)((0,i.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(""),e.next=4,r.polkadotJs.init();case 4:if(r.polkadotJs.provider){e.next=7;break}return l("Polkadot (.js Extension) not installed"),e.abrupt("return");case 7:return e.next=9,r.polkadotJs.login();case 9:n=e.sent,(t=(0,j.A4)("polkadot-js"))&&n.includes(t.account)?p(t):n.length>0&&p({account:n[0],wallet:"polkadot-js"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),[r,t]),S=(0,u.useCallback)(function(){var e=(0,i.Z)(o().mark((function e(n){var t,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.next=3,r.metamask.init();case 3:i=null===(t=r.metamask.ethereum)||void 0===t?void 0:t.request,r.metamask.isInstalled&&i?i({method:"eth_requestAccounts"}).then((function(e){var t;console.info("accounts:",e);var i=null===(t=r.metamask.ethereum)||void 0===t?void 0:t.selectedAddress,o="Polygon"===n.name?"metamask-Polygon":"Moonriver"===n.name?"metamask-Moonriver":"metamask";i&&e.includes(i)?p({account:i,wallet:o}):e.length&&p({account:e[0],wallet:o})})).catch((function(e){console.error("accountsError:",e)})):l("MetaMask not installed");case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[r,t]),O=(0,u.useCallback)((0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.next=3,r.near.init();case 3:return e.next=5,r.near.wallet.requestSignIn(C.h.contractName,"Crust Files");case 5:case"end":return e.stop()}}),e)}))),[r,t]);(0,u.useEffect)((function(){r.near.init().then((function(){r.near.keyPair&&r.near.wallet.isSignedIn()&&p({account:r.near.wallet.getAccountId(),wallet:"near",pubKey:r.near.keyPair.getPublicKey().toString().substring(8)})})).catch(console.error)}),[r]);var z=(0,u.useCallback)((0,i.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.next=3,r.flow.init();case 3:if(n=r.flow.fcl){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,n.currentUser().snapshot();case 8:if((t=e.sent).loggedIn){e.next=12;break}return e.next=12,n.authenticate();case 12:return e.next=14,n.currentUser().snapshot();case 14:t=e.sent,p({account:t.addr,wallet:"flow"});case 16:case"end":return e.stop()}}),e)}))),[r]),Z=(0,u.useCallback)((0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.next=3,r.solana.init();case 3:if(r.solana.isInstalled||l("Solana (Phantom Wallet) not installed"),!r.solana.solana.isConnected){e.next=7;break}return p({account:r.solana.solana.publicKey.toBase58(),wallet:"solana"}),e.abrupt("return");case 7:r.solana.solana.connect(),r.solana.solana.on("connect",(function(){p({account:r.solana.solana.publicKey.toBase58(),wallet:"solana"})}));case 9:case"end":return e.stop()}}),e)}))),[r,t]),E=(0,u.useCallback)((0,i.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.next=3,r.elrond.init();case 3:if(r.elrond.provider){e.next=6;break}return l("Elrond (Maiar Wallet) not installed"),e.abrupt("return");case 6:return e.next=8,r.elrond.provider.login({callbackUrl:encodeURIComponent("".concat(window.location.origin,"/#/files"))});case 8:n=r.elrond.provider.account.address,p({account:n,wallet:"elrond"});case 10:case"end":return e.stop()}}),e)}))),[r,t]),A=(0,u.useCallback)((0,i.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.walletConnect.init();case 2:return e.prev=2,e.next=5,r.walletConnect.connect.killSession();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.next=12,null===(n=r.walletConnect.connect)||void 0===n?void 0:n.createSession();case 12:null===(t=r.walletConnect.connect)||void 0===t||t.on("connect",(function(e,n){var t=n.params[0].accounts;p({account:t[0],wallet:"wallet-connect"})}));case 13:case"end":return e.stop()}}),e,null,[[2,7]])}))),[r]),W=(0,u.useMemo)((function(){return[{group:"Crust",name:"Crust Wallet",image:"/images/wallet_crust.png",onClick:v},{group:"Crust",name:"Download",image:"/images/crust_down.png",onClick:w},{group:"Crust",name:"Get CRU",image:"/images/crust_get_cru.png",onClick:k},{group:"Polkadot",name:"Polkadot",image:"/images/wallet_polkadot.png",onClick:L},{group:"MetaMask",name:"Ethereum",image:"/images/wallet_ethereum.png",onClick:S},{group:"MetaMask",name:"Polygon",image:"/images/wallet_polygon.png",onClick:S},{group:"MetaMask",name:"Moonriver",image:"/images/wallet_moonriver.png",onClick:S},{group:"Web 3",name:"Near",image:"/images/wallet_near.png",onClick:O},{group:"Web 3",name:"Elrond",image:"/images/wallet_elrond.png",onClick:E},{group:"Web 3",name:"Solana",image:"/images/wallet_solana.png",onClick:Z},{group:"Web 3",name:"Flow",image:"/images/wallet_flow.png",onClick:z},{group:"WalletConnect",name:"WalletConnect",image:"/images/wallet_connect.png",onClick:A}]}),[v,w,k,L,S,O,z,Z,E,A]),F=(0,u.useMemo)((function(){var e=c().groupBy(W,"group"),n=c().keys(e);return c().map(n,(function(n){var t={items:e[n],group:n,img:P[n]};return 1===t.items.length&&(t.onClick=t.items[0].onClick),t}))}),[W]),T=(0,u.useState)(null),B=T[0],U=T[1],D=y(100,5).data;return(0,N.jsxs)("div",{className:n,children:[(0,N.jsxs)("div",{className:"left_panel",children:[(0,N.jsx)(g.Y,{className:"bg"}),(0,N.jsxs)("div",{className:"panel",children:[(0,N.jsx)(x.Z,{className:"logo"}),(0,N.jsx)("div",{className:"docs",onClick:function(){return(0,I.Sk)("/docs/CrustFiles_Welcome")},children:"Docs"}),(0,N.jsx)("div",{style:{flex:1}}),(0,N.jsxs)("div",{className:"slog font-sans-semibold",children:["Your",(0,N.jsx)("br",{}),"first personal",(0,N.jsx)("br",{}),(0,N.jsx)("span",{children:"Web3.0"})," storage",(0,N.jsx)("br",{}),"in ",(0,N.jsx)("span",{children:"Metaverse"}),"."]}),(0,N.jsx)("div",{style:{flex:1}}),(0,N.jsx)(f.y,{className:"links"})]})]}),(0,N.jsxs)("div",{className:"center_panel",children:[(0,N.jsx)("div",{className:"cosmos"}),(0,N.jsx)(m.JV,{className:"pixel_left",position:"left",fullH:!0}),(0,N.jsx)(m.JV,{className:"pixel_right",position:"right",fullH:!0,color:"#E46A11",fillColor:"#FF8D00"})]}),(0,N.jsxs)("div",{className:"right_panel",children:[(0,N.jsx)("div",{style:{flex:1}}),(0,N.jsx)("div",{className:"wallets_title",children:"Sign-in with a Wallet"}),(0,N.jsx)("div",{className:"wallets",style:{alignItems:B?"flex-start":"center"},children:F.map((function(e,n){return(0,N.jsxs)("div",{onClick:function(){e.onClick&&e.onClick(e.items[0])},style:{opacity:B&&B.group!==e.group?.4:1},onMouseEnter:function(){return U((function(){return e}))},onMouseLeave:function(){return U((function(){return null}))},className:s()("wallet_group",{animFinal:D[n].value}),children:[(0,N.jsx)("img",{className:"image",src:e.img}),(0,N.jsx)("span",{className:"text",children:e.group}),e.items.length>1&&B&&B.group===e.group&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("img",{className:"arrow",src:"/images/arrow_fill.png"}),(0,N.jsx)(M,{gw:e})]})]},"wallet_group_".concat(n))}))}),(0,N.jsx)("div",{style:{flex:2}})]})]})})).withConfig({displayName:"pages",componentId:"sc-1oxyt9b-0"})(["color:white;display:flex;width:100%;height:100vh;min-height:960px;.left_panel{background-color:#000000;flex:1;height:100%;position:relative;.bg{overflow:hidden;width:100%;height:100%;position:absolute;z-index:0;}.panel{z-index:1;display:flex;width:100%;height:100%;flex-direction:column;align-items:center;overflow:auto;position:relative;}.docs{cursor:pointer;position:absolute;top:50px;right:2.3rem;font-size:18px;line-height:25px;font-weight:600;}}.center_panel{width:360px;height:100%;flex-shrink:0;position:relative;.cosmos{width:calc(100% - ","px);margin-left:",'px;height:100%;background:url("/images/cosmos.png");background-size:contain;background-position:center;background-repeat:repeat-y;}.pixel_left{position:absolute;left:0;top:0;}.pixel_right{position:absolute;right:0;top:0;}}.right_panel{background-color:var(--primary-color);width:295px;height:100%;flex-shrink:0;display:flex;flex-direction:column;align-items:center;}.logo{margin-left:3.5rem;margin-top:3rem;align-self:flex-start;}.slog{font-size:86px;line-height:117px;width:650px;span{color:var(--primary-color)}}.links{width:650px;height:100px;flex-shrink:0;}.wallets_title{font-weight:600;font-size:24px;line-height:33px;padding-bottom:32px;}.wallets{height:min-content;display:flex;width:100%;flex-direction:column;overflow:visible;flex-shrink:0;&:hover{.wallet_group{.image,.text{position:relative;transform:translateX(-55px);}}}.wallet_group{display:flex;flex-direction:column;align-items:center;overflow:visible;width:100%;text-align:center;padding-top:2.285714rem;position:relative;cursor:pointer;&:hover{.image,.text{filter:drop-shadow(0px 4px 16px rgba(255,255,255,0.5));position:relative;}}.image{transition:all ease-in-out 300ms;width:5.142857rem;height:5.142857rem;display:block;}.text{transition:all ease-in-out 300ms;font-size:1.2857rem;line-height:2.357rem;}.arrow{position:absolute;top:4.4rem;right:9.285714rem;width:10px;height:16px;}.wallet_items{position:absolute;display:flex;overflow:hidden;flex-direction:column;align-items:flex-start;width:6.86rem;padding-right:1rem;top:1.6rem;right:2rem;z-index:2;}}.wallet_item{display:inline-block;width:5.857rem;text-align:center;cursor:pointer;padding-top:1.714286rem;transform:translateX(100px);transition:all cubic-bezier(.41,.19,.21,1.25) 300ms;.item_image{margin-left:1.14rem;width:3.57rem;height:3.57rem;}.item_text{font-size:0.857rem;line-height:1.43rem;}}.spaceLeft{margin-left:1.4rem;}.animFinal{transform:none;}}'],80,40))},45301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(97376)}])},23499:function(e,n,t){"use strict";function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,r,o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(i=t.next()).done)&&(o.push(i.value),!n||o.length!==n);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==t.return||t.return()}finally{if(s)throw r}}return o}}(e,n)||function(e,n){if(e){if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{$:function(){return f}});var o=t(4942),a=t(67294),s=t(68718);function l(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var c={};function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&c[n[0]]||("string"===typeof n[0]&&(c[n[0]]=new Date),l.apply(void 0,n))}function d(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function p(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return u("i18n.languages were undefined or empty",n.languages),!0;var i=n.languages[0],r=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===i.toLowerCase())return!0;var a=function(e,t){var i=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===i||2===i};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(i,e)||(!n.services.backendConnector.backend||!(!a(i,e)||r&&!a(o,e))))}function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,i=(0,a.useContext)(s.OO)||{},o=i.i18n,l=i.defaultNS,c=t||o||(0,s.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new s.zv),!c){u("You will need to pass in an i18next instance by using initReactI18next");var g=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[g,{},!1];return f.t=g,f.i18n={},f.ready=!1,f}c.options.react&&void 0!==c.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var x=m(m(m({},(0,s.JP)()),c.options.react),n),h=x.useSuspense,b=x.keyPrefix,v=e||l||c.options&&c.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(v);var w=(c.isInitialized||c.initializedStoreOnce)&&v.every((function(e){return p(e,c,x)}));function k(){return c.getFixedT(null,"fallback"===x.nsMode?v:v[0],b)}var L=(0,a.useState)(k),y=r(L,2),_=y[0],I=y[1],C=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=x.bindI18n,n=x.bindI18nStore;function t(){C.current&&I(k)}return C.current=!0,w||h||d(c,v,(function(){C.current&&I(k)})),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){C.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,v.join()]);var j=(0,a.useRef)(!0);(0,a.useEffect)((function(){C.current&&!j.current&&I(k),j.current=!1}),[c]);var N=[_,c,w];if(N.t=_,N.i18n=c,N.ready=w,w)return N;if(!w&&!h)return N;throw new Promise((function(e){d(c,v,(function(){e()}))}))}},83789:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(56586);var r=t(16988);function o(e){return function(e){if(Array.isArray(e))return(0,i.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[774,888,179],(function(){return n=45301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);