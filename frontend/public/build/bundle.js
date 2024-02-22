var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function d(){return i(" ")}function u(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function f(t,n){n=""+n,t.data!==n&&(t.data=n)}function p(t,n,e,s){null==e?t.style.removeProperty(n):t.style.setProperty(n,e,s?"important":"")}let y;function h(t){y=t}const m=[],$=[];let x=[];const g=[],_=Promise.resolve();let v=!1;function b(t){x.push(t)}const T=new Set;let q=0;function j(){if(0!==q)return;const t=y;do{try{for(;q<m.length;){const t=m[q];q++,h(t),k(t.$$)}}catch(t){throw m.length=0,q=0,t}for(h(null),m.length=0,q=0;$.length;)$.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];T.has(n)||(T.add(n),n())}x.length=0}while(m.length);for(;g.length;)g.pop()();v=!1,T.clear(),h(t)}function k(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const w=new Set;function M(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];x.forEach((s=>-1===t.indexOf(s)?n.push(s):e.push(s))),e.forEach((t=>t())),x=n}(e.after_update),s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function D(t,n){-1===t.$$.dirty[0]&&(m.push(t),v||(v=!0,_.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(r,a,c,i,d,u,f,p=[-1]){const m=y;h(r);const $=r.$$={fragment:null,ctx:[],props:u,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:a.target||m.$$.root};f&&f($.root);let x=!1;if($.ctx=c?c(r,a.props||{},((t,n,...e)=>{const s=e.length?e[0]:n;return $.ctx&&d($.ctx[t],$.ctx[t]=s)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](s),x&&D(r,t)),n})):[],$.update(),x=!0,s($.before_update),$.fragment=!!i&&i($.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);$.fragment&&$.fragment.l(t),t.forEach(l)}else $.fragment&&$.fragment.c();a.intro&&((g=r.$$.fragment)&&g.i&&(w.delete(g),g.i(_))),function(t,e,r,a){const{fragment:l,after_update:c}=t.$$;l&&l.m(e,r),a||b((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):s(e),t.$$.on_mount=[]})),c.forEach(b)}(r,a.target,a.anchor,a.customElement),j()}var g,_;h(m)}class A{$destroy(){M(this,1),this.$destroy=t}$on(n,e){if(!o(e))return t;const s=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function C(n){let e,s,o,r,y,h,m,$,x,g,_,v,b,T,q,j,k,w,M,D,E,A;return{c(){e=c("main"),s=c("div"),o=c("h2"),r=c("span"),y=c("p"),h=i(n[1]),m=d(),$=c("h2"),x=c("span"),x.textContent="💬 ",g=c("p"),_=i(n[3]),v=d(),b=c("div"),T=c("h2"),q=c("span"),j=c("p"),k=i(n[0]),w=d(),M=c("h2"),D=c("span"),D.textContent="🎤 ",E=c("p"),A=i(n[2]),u(r,"class","svelte-yq0lpy"),u(y,"class","svelte-yq0lpy"),u(o,"class","translation-discord discord-smaller svelte-yq0lpy"),u(x,"class","svelte-yq0lpy"),u(g,"class","svelte-yq0lpy"),u($,"class","translation-discord main-discord svelte-yq0lpy"),u(s,"class","translation-container translation-container-discord svelte-yq0lpy"),u(q,"class","svelte-yq0lpy"),u(j,"class","svelte-yq0lpy"),u(T,"class","translation-mic mic-smaller svelte-yq0lpy"),u(D,"class","svelte-yq0lpy"),u(E,"class","svelte-yq0lpy"),u(M,"class","translation-mic main-mic svelte-yq0lpy"),u(b,"class","translation-container svelte-yq0lpy"),p(e,"--size",n[5]+"rem"),p(e,"--bg-color",n[4]),u(e,"class","svelte-yq0lpy")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),a(e,s),a(s,o),a(o,r),a(o,y),a(y,h),a(s,m),a(s,$),a($,x),a($,g),a(g,_),a(e,v),a(e,b),a(b,T),a(T,q),a(T,j),a(j,k),a(b,w),a(b,M),a(M,D),a(M,E),a(E,A)},p(t,[n]){2&n&&f(h,t[1]),8&n&&f(_,t[3]),1&n&&f(k,t[0]),4&n&&f(A,t[2])},i:t,o:t,d(t){t&&l(e)}}}function N(t,n,e){let{translationTextMic:s="fsjdflsjflsk"}=n,{translationTextDiscord:o="fsjdflsjflsk"}=n,{translationTextMic2:r="fsjdflsjflsk"}=n,{translationTextDiscord2:a="fsjdflsjflsk"}=n;const l=window.location.search,c=new URLSearchParams(l),i=c.get("bg_color")||"green",d=c.get("size")||4;return window.setInterval((function(){fetch("/api/translation/").then((t=>t.json())).then((t=>{t.mic.translated_text!==s&&(e(2,r=t.mic.previous_translated_text),e(0,s=t.mic.translated_text)),t.discord.translated_text!==o&&(e(3,a=t.discord.previous_translated_text),e(1,o=t.discord.translated_text))}))}),1e3),t.$$set=t=>{"translationTextMic"in t&&e(0,s=t.translationTextMic),"translationTextDiscord"in t&&e(1,o=t.translationTextDiscord),"translationTextMic2"in t&&e(2,r=t.translationTextMic2),"translationTextDiscord2"in t&&e(3,a=t.translationTextDiscord2)},[s,o,r,a,i,d]}return new class extends A{constructor(t){super(),E(this,t,N,C,r,{translationTextMic:0,translationTextDiscord:1,translationTextMic2:2,translationTextDiscord2:3})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
