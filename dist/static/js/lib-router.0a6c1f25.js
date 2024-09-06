/*! For license information please see lib-router.0a6c1f25.js.LICENSE.txt */
"use strict";(self.webpackChunkSpartisan=self.webpackChunkSpartisan||[]).push([["118"],{2599:function(e,t,n){var r,a,o,l;function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Ep:function(){return f},J0:function(){return c},RQ:function(){return R},WK:function(){return O},X3:function(){return k},Zn:function(){return E},aU:function(){return r},cP:function(){return m},cm:function(){return C},fp:function(){return v},lX:function(){return s},pC:function(){return w}}),(o=r||(r={})).Pop="POP",o.Push="PUSH",o.Replace="REPLACE";let u="popstate";function s(e){return void 0===e&&(e={}),function(e,t,n,a){void 0===a&&(a={});let{window:o=document.defaultView,v5Compat:l=!1}=a,s=o.history,p=r.Pop,m=null,v=g();function g(){return(s.state||{idx:null}).idx}function y(){p=r.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:p,location:E.location,delta:t})}null==v&&(v=0,s.replaceState(i({},s.state,{idx:v}),""));function b(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"==typeof e?e:f(e);return c(t,"No window.location.(origin|href) available to create URL for href: "+(n=n.replace(/ $/,"%20"))),new URL(n,t)}let E={get action(){return p},get location(){return e(o,s)},listen(e){if(m)throw Error("A history only accepts one active listener");return o.addEventListener(u,y),m=e,()=>{o.removeEventListener(u,y),m=null}},createHref:e=>t(o,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p=r.Push;let a=d(E.location,e,t);n&&n(a,e);let i=h(a,v=g()+1),u=E.createHref(a);try{s.pushState(i,"",u)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;o.location.assign(u)}l&&m&&m({action:p,location:E.location,delta:1})},replace:function(e,t){p=r.Replace;let a=d(E.location,e,t);n&&n(a,e);let o=h(a,v=g()),i=E.createHref(a);s.replaceState(o,"",i),l&&m&&m({action:p,location:E.location,delta:0})},go:e=>s.go(e)};return E}(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return d("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:f(t)},null,e)}function c(e,t){if(!1===e||null==e)throw Error(t)}function p(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function h(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,n,r){return void 0===n&&(n=null),i({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?m(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function v(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let a=E(("string"==typeof t?m(t):t).pathname||"/",n);if(null==a)return null;let o=function e(t,n,r,a){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===a&&(a="");let o=(t,o,l)=>{let i={relativePath:void 0===l?t.path||"":l,caseSensitive:!0===t.caseSensitive,childrenIndex:o,route:t};i.relativePath.startsWith("/")&&(c(i.relativePath.startsWith(a),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+a)+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(a.length));let u=R([a,i.relativePath]),s=r.concat(i);if(t.children&&t.children.length>0&&(c(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+u+'".'),e(t.children,n,s,u)),null!=t.path||!!t.index)n.push({path:u,score:function(e,t){let n=e.split("/"),r=n.length;return n.some(y)&&(r+=-2),t&&(r+=2),n.filter(e=>!y(e)).reduce((e,t)=>e+(g.test(t)?3:""===t?1:10),r)}(u,t.index),routesMeta:s})};return t.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...a]=n,o=r.endsWith("?"),l=r.replace(/\?$/,"");if(0===a.length)return o?[l,""]:[l];let i=e(a.join("/")),u=[];return u.push(...i.map(e=>""===e?l:[l,e].join("/"))),o&&u.push(...i),u.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))o(e,t,n);else o(e,t)}),n}(e);(function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))})(o);let l=null;for(let e=0;null==l&&e<o.length;++e){let t=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return p(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t)+")."),e}}(a);l=function(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",l=[];for(let e=0;e<r.length;++e){let i=r[e],u=e===r.length-1,s="/"===o?t:t.slice(o.length)||"/",c=b({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},s),p=i.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=b({path:i.relativePath,caseSensitive:i.caseSensitive,end:!1},s)),!c)return null;Object.assign(a,c.params),l.push({params:a,pathname:R([o,c.pathname]),pathnameBase:S(R([o,c.pathnameBase])),route:p}),"/"!==c.pathnameBase&&(o=R([o,c.pathnameBase]))}return l}(o[e],t,r)}return l}(e,t,n,!1)}(l=a||(a={})).data="data",l.deferred="deferred",l.redirect="redirect",l.error="error";let g=/^:[\w-]+$/,y=e=>"*"===e;function b(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),p("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*"))+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, '+('please change the route path to "'+e.replace(/\*$/,"/*"))+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=i[n]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}let u=i[n];return a&&!u?e[r]=void 0:e[r]=(u||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:l,pattern:e}}function E(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function x(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r))+"].  Please separate it out to the "+("`to."+n)+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function C(e,t){let n=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function w(e,t,n,r){let a,o;void 0===r&&(r=!1),"string"==typeof e?a=m(e):(c(!(a=i({},e)).pathname||!a.pathname.includes("?"),x("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),x("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),x("#","search","hash",a)));let l=""===e||""===a.pathname,u=l?"/":a.pathname;if(null==u)o=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?m(e):e;return{pathname:n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t,search:U(r),hash:P(a)}}(a,o),p=u&&"/"!==u&&u.endsWith("/"),h=(l||"."===u)&&n.endsWith("/");return!s.pathname.endsWith("/")&&(p||h)&&(s.pathname+="/"),s}let R=e=>e.join("/").replace(/\/\/+/g,"/"),S=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",P=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class k extends Error{}function O(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}Symbol("deferred")},9655:function(e,t,n){n.d(t,{VK:function(){return x},rU:function(){return R}});var r,a,o,l,i,u,s=n(7294),c=n(3935),p=n(9250),h=n(2599);function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let f="application/x-www-form-urlencoded";function m(e){return null!=e&&"string"==typeof e.tagName}let v=null,g=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function y(e){return null==e||g.has(e)?e:null}let b=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}let E=(o||(o=n.t(s,2))).startTransition;(l||(l=n.t(c,2))).flushSync;(o||(o=n.t(s,2))).useId;function x(e){let{basename:t,children:n,future:r,window:a}=e,o=s.useRef();null==o.current&&(o.current=(0,h.lX)({window:a,v5Compat:!0}));let l=o.current,[i,u]=s.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},d=s.useCallback(e=>{c&&E?E(()=>u(e)):u(e)},[u,c]);return s.useLayoutEffect(()=>l.listen(d),[l,d]),s.createElement(p.F0,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:l,future:r})}let C="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R=s.forwardRef(function(e,t){let n,{onClick:r,relative:a,reloadDocument:o,replace:l,state:i,target:u,to:c,preventScrollReset:f,unstable_viewTransition:m}=e,v=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}(e,b),{basename:g}=s.useContext(p.Us),y=!1;if("string"==typeof c&&w.test(c)&&(n=c,C))try{let e=new URL(window.location.href),t=new URL(c.startsWith("//")?e.protocol+c:c),n=(0,h.Zn)(t.pathname,g);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:y=!0}catch(e){}let E=(0,p.oQ)(c,{relative:a}),x=function(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:l,unstable_viewTransition:i}=void 0===t?{}:t,u=(0,p.s0)(),c=(0,p.TH)(),d=(0,p.WU)(e,{relative:l});return s.useCallback(t=>{var s,p,f;if(s=t,p=n,0===s.button&&(!p||"_self"===p)&&!((f=s).metaKey||f.altKey||f.ctrlKey||f.shiftKey))t.preventDefault(),u(e,{replace:void 0!==r?r:(0,h.Ep)(c)===(0,h.Ep)(d),state:a,preventScrollReset:o,relative:l,unstable_viewTransition:i})},[c,u,d,r,a,n,e,o,l,i])}(c,{replace:l,state:i,target:u,preventScrollReset:f,relative:a,unstable_viewTransition:m});return s.createElement("a",d({},v,{href:n||E,onClick:y||o?r:function(e){r&&r(e),!e.defaultPrevented&&x(e)},ref:t,target:u}))});function S(e){let t=React.useContext(UNSAFE_DataRouterContext);return t||UNSAFE_invariant(!1),t}(r=i||(i={})).UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState",(a=u||(u={})).UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration";let U=0,P=()=>"__"+String(++U)+"__"},9250:function(e,t,n){n.d(t,{AW:function(){return O},F0:function(){return L},TH:function(){return y},Us:function(){return h},WU:function(){return x},Z5:function(){return W},oQ:function(){return v},s0:function(){return E}});var r,a,o,l,i=n(7294),u=n(2599);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let c=i.createContext(null),p=i.createContext(null),h=i.createContext(null),d=i.createContext(null),f=i.createContext({outlet:null,matches:[],isDataRoute:!1}),m=i.createContext(null);function v(e,t){let{relative:n}=void 0===t?{}:t;g()||(0,u.J0)(!1);let{basename:r,navigator:a}=i.useContext(h),{hash:o,pathname:l,search:s}=x(e,{relative:n}),c=l;return"/"!==r&&(c="/"===l?r:(0,u.RQ)([r,l])),a.createHref({pathname:c,search:s,hash:o})}function g(){return null!=i.useContext(d)}function y(){return g()||(0,u.J0)(!1),i.useContext(d).location}function b(e){!i.useContext(h).static&&i.useLayoutEffect(e)}function E(){let{isDataRoute:e}=i.useContext(f);return e?function(){var e;let t;let{router:n}=(e=S.UseNavigateStable,(t=i.useContext(c))||(0,u.J0)(!1),t),r=P(U.UseNavigateStable),a=i.useRef(!1);return b(()=>{a.current=!0}),i.useCallback(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?n.navigate(e):n.navigate(e,s({fromRouteId:r},t)))},[n,r])}():function(){g()||(0,u.J0)(!1);let e=i.useContext(c),{basename:t,future:n,navigator:r}=i.useContext(h),{matches:a}=i.useContext(f),{pathname:o}=y(),l=JSON.stringify((0,u.cm)(a,n.v7_relativeSplatPath)),s=i.useRef(!1);return b(()=>{s.current=!0}),i.useCallback(function(n,a){if(void 0===a&&(a={}),!s.current)return;if("number"==typeof n){r.go(n);return}let i=(0,u.pC)(n,JSON.parse(l),o,"path"===a.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,u.RQ)([t,i.pathname])),(a.replace?r.replace:r.push)(i,a.state,a)},[t,r,l,o,e])}()}function x(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=i.useContext(h),{matches:a}=i.useContext(f),{pathname:o}=y(),l=JSON.stringify((0,u.cm)(a,r.v7_relativeSplatPath));return i.useMemo(()=>(0,u.pC)(e,JSON.parse(l),o,"path"===n),[e,l,o,n])}let C=i.createElement(function(){let e=function(){var e,t;let n;let r=i.useContext(m);let a=(t=U.UseRouteError,(n=i.useContext(p))||(0,u.J0)(!1),n),o=P(U.UseRouteError);return void 0!==r?r:null==(e=a.errors)?void 0:e[o]}(),t=(0,u.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return i.createElement(i.Fragment,null,i.createElement("h2",null,"Unexpected Application Error!"),i.createElement("h3",{style:{fontStyle:"italic"}},t),n?i.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},n):null,null)},null);class w extends i.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?i.createElement(f.Provider,{value:this.props.routeContext},i.createElement(m.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function R(e){let{routeContext:t,match:n,children:r}=e,a=i.useContext(c);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),i.createElement(f.Provider,{value:t},r)}var S=((r=S||{}).UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r);var U=((a=U||{}).UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a);function P(e){var t;let n;let r=(t=0,(n=i.useContext(f))||(0,u.J0)(!1),n),a=r.matches[r.matches.length-1];return a.route.id||(0,u.J0)(!1),a.route.id}let k={};function O(e){(0,u.J0)(!1)}function L(e){let{basename:t="/",children:n=null,location:r,navigationType:a=u.aU.Pop,navigator:o,static:l=!1,future:c}=e;g()&&(0,u.J0)(!1);let p=t.replace(/^\/*/,"/"),f=i.useMemo(()=>({basename:p,navigator:o,static:l,future:s({v7_relativeSplatPath:!1},c)}),[p,c,o,l]);"string"==typeof r&&(r=(0,u.cP)(r));let{pathname:m="/",search:v="",hash:y="",state:b=null,key:E="default"}=r,x=i.useMemo(()=>{let e=(0,u.Zn)(m,p);return null==e?null:{location:{pathname:e,search:v,hash:y,state:b,key:E},navigationType:a}},[p,m,v,y,b,E,a]);return null==x?null:i.createElement(h.Provider,{value:f},i.createElement(d.Provider,{children:n,value:x}))}function W(e){var t;let{children:n,location:r}=e;return t=function e(t,n){void 0===n&&(n=[]);let r=[];return i.Children.forEach(t,(t,a)=>{if(!i.isValidElement(t))return;let o=[...n,a];if(t.type===i.Fragment){r.push.apply(r,e(t.props.children,o));return}t.type!==O&&(0,u.J0)(!1),!t.props.index||!t.props.children||(0,u.J0)(!1);let l={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(l.children=e(t.props.children,o)),r.push(l)}),r}(n),function(e,t,n,r){let a;g()||(0,u.J0)(!1);let{navigator:o}=i.useContext(h),{matches:l}=i.useContext(f),c=l[l.length-1],p=c?c.params:{};c&&c.pathname;let m=c?c.pathnameBase:"/";c&&c.route;let v=y();if(t){var b;let e="string"==typeof t?(0,u.cP)(t):t;"/"===m||(null==(b=e.pathname)?void 0:b.startsWith(m))||(0,u.J0)(!1),a=e}else a=v;let E=a.pathname||"/",x=E;if("/"!==m){let e=m.replace(/^\//,"").split("/");x="/"+E.replace(/^\//,"").split("/").slice(e.length).join("/")}let S=(0,u.fp)(e,{pathname:x}),U=function(e,t,n,r){var a,o;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){if(null==(o=n)||!o.errors)return null;e=n.matches}let l=e,s=null==(a=n)?void 0:a.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&(null==s?void 0:s[e.route.id])!==void 0);e>=0||(0,u.J0)(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,p=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<l.length;e++){let t=l[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(p=e),t.route.id){let{loaderData:e,errors:r}=n,a=t.route.loader&&void 0===e[t.route.id]&&(!r||void 0===r[t.route.id]);if(t.route.lazy||a){c=!0,l=p>=0?l.slice(0,p+1):[l[0]];break}}}return l.reduceRight((e,r,a)=>{let o;let u=!1,h=null,d=null;n&&(o=s&&r.route.id?s[r.route.id]:void 0,h=r.route.errorElement||C,c&&(p<0&&0===a?(function(e,t,n){!t&&!k[e]&&(k[e]=!0)}("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,d=null):p===a&&(u=!0,d=r.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,a+1)),m=()=>{let t;return t=o?h:u?d:r.route.Component?i.createElement(r.route.Component,null):r.route.element?r.route.element:e,i.createElement(R,{match:r,routeContext:{outlet:e,matches:f,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?i.createElement(w,{location:n.location,revalidation:n.revalidation,component:h,error:o,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}(S&&S.map(e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:(0,u.RQ)([m,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:(0,u.RQ)([m,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),l,n,r);return t&&U?i.createElement(d.Provider,{value:{location:s({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:u.aU.Pop}},U):U}(t,r)}(l||(l=n.t(i,2))).startTransition;var B=((o=B||{})[o.pending=0]="pending",o[o.success=1]="success",o[o.error=2]="error",o);new Promise(()=>{})}}]);