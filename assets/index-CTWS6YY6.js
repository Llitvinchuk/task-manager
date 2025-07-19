function s1(a,r){for(var u=0;u<r.length;u++){const o=r[u];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in a)){const d=Object.getOwnPropertyDescriptor(o,s);d&&Object.defineProperty(a,s,d.get?d:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function u(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(s){if(s.ep)return;s.ep=!0;const d=u(s);fetch(s.href,d)}})();function f1(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Bs={exports:{}},pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function d1(){if(m0)return pi;m0=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(o,s,d){var m=null;if(d!==void 0&&(m=""+d),s.key!==void 0&&(m=""+s.key),"key"in s){d={};for(var y in s)y!=="key"&&(d[y]=s[y])}else d=s;return s=d.ref,{$$typeof:a,type:o,key:m,ref:s!==void 0?s:null,props:d}}return pi.Fragment=r,pi.jsx=u,pi.jsxs=u,pi}var g0;function h1(){return g0||(g0=1,Bs.exports=d1()),Bs.exports}var w=h1(),zs={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function m1(){if(v0)return ye;v0=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.iterator;function _(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,D={};function M(x,R,Q){this.props=x,this.context=R,this.refs=D,this.updater=Q||T}M.prototype.isReactComponent={},M.prototype.setState=function(x,R){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,R,"setState")},M.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Y(){}Y.prototype=M.prototype;function B(x,R,Q){this.props=x,this.context=R,this.refs=D,this.updater=Q||T}var j=B.prototype=new Y;j.constructor=B,N(j,M.prototype),j.isPureReactComponent=!0;var te=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},ee=Object.prototype.hasOwnProperty;function ne(x,R,Q,V,I,re){return Q=re.ref,{$$typeof:a,type:x,key:R,ref:Q!==void 0?Q:null,props:re}}function pe(x,R){return ne(x.type,R,void 0,void 0,void 0,x.props)}function he(x){return typeof x=="object"&&x!==null&&x.$$typeof===a}function be(x){var R={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Q){return R[Q]})}var Re=/\/+/g;function ze(x,R){return typeof x=="object"&&x!==null&&x.key!=null?be(""+x.key):R.toString(36)}function Oe(){}function rt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Oe,Oe):(x.status="pending",x.then(function(R){x.status==="pending"&&(x.status="fulfilled",x.value=R)},function(R){x.status==="pending"&&(x.status="rejected",x.reason=R)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Ae(x,R,Q,V,I){var re=typeof x;(re==="undefined"||re==="boolean")&&(x=null);var ae=!1;if(x===null)ae=!0;else switch(re){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(x.$$typeof){case a:case r:ae=!0;break;case b:return ae=x._init,Ae(ae(x._payload),R,Q,V,I)}}if(ae)return I=I(x),ae=V===""?"."+ze(x,0):V,te(I)?(Q="",ae!=null&&(Q=ae.replace(Re,"$&/")+"/"),Ae(I,R,Q,"",function(Xe){return Xe})):I!=null&&(he(I)&&(I=pe(I,Q+(I.key==null||x&&x.key===I.key?"":(""+I.key).replace(Re,"$&/")+"/")+ae)),R.push(I)),1;ae=0;var Ne=V===""?".":V+":";if(te(x))for(var ge=0;ge<x.length;ge++)V=x[ge],re=Ne+ze(V,ge),ae+=Ae(V,R,Q,re,I);else if(ge=_(x),typeof ge=="function")for(x=ge.call(x),ge=0;!(V=x.next()).done;)V=V.value,re=Ne+ze(V,ge++),ae+=Ae(V,R,Q,re,I);else if(re==="object"){if(typeof x.then=="function")return Ae(rt(x),R,Q,V,I);throw R=String(x),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return ae}function U(x,R,Q){if(x==null)return x;var V=[],I=0;return Ae(x,V,"","",function(re){return R.call(Q,re,I++)}),V}function W(x){if(x._status===-1){var R=x._result;R=R(),R.then(function(Q){(x._status===0||x._status===-1)&&(x._status=1,x._result=Q)},function(Q){(x._status===0||x._status===-1)&&(x._status=2,x._result=Q)}),x._status===-1&&(x._status=0,x._result=R)}if(x._status===1)return x._result.default;throw x._result}var J=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function Z(){}return ye.Children={map:U,forEach:function(x,R,Q){U(x,function(){R.apply(this,arguments)},Q)},count:function(x){var R=0;return U(x,function(){R++}),R},toArray:function(x){return U(x,function(R){return R})||[]},only:function(x){if(!he(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ye.Component=M,ye.Fragment=u,ye.Profiler=s,ye.PureComponent=B,ye.StrictMode=o,ye.Suspense=g,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ye.__COMPILER_RUNTIME={__proto__:null,c:function(x){return K.H.useMemoCache(x)}},ye.cache=function(x){return function(){return x.apply(null,arguments)}},ye.cloneElement=function(x,R,Q){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=N({},x.props),I=x.key,re=void 0;if(R!=null)for(ae in R.ref!==void 0&&(re=void 0),R.key!==void 0&&(I=""+R.key),R)!ee.call(R,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&R.ref===void 0||(V[ae]=R[ae]);var ae=arguments.length-2;if(ae===1)V.children=Q;else if(1<ae){for(var Ne=Array(ae),ge=0;ge<ae;ge++)Ne[ge]=arguments[ge+2];V.children=Ne}return ne(x.type,I,void 0,void 0,re,V)},ye.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:d,_context:x},x},ye.createElement=function(x,R,Q){var V,I={},re=null;if(R!=null)for(V in R.key!==void 0&&(re=""+R.key),R)ee.call(R,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(I[V]=R[V]);var ae=arguments.length-2;if(ae===1)I.children=Q;else if(1<ae){for(var Ne=Array(ae),ge=0;ge<ae;ge++)Ne[ge]=arguments[ge+2];I.children=Ne}if(x&&x.defaultProps)for(V in ae=x.defaultProps,ae)I[V]===void 0&&(I[V]=ae[V]);return ne(x,re,void 0,void 0,null,I)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(x){return{$$typeof:y,render:x}},ye.isValidElement=he,ye.lazy=function(x){return{$$typeof:b,_payload:{_status:-1,_result:x},_init:W}},ye.memo=function(x,R){return{$$typeof:v,type:x,compare:R===void 0?null:R}},ye.startTransition=function(x){var R=K.T,Q={};K.T=Q;try{var V=x(),I=K.S;I!==null&&I(Q,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(Z,J)}catch(re){J(re)}finally{K.T=R}},ye.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ye.use=function(x){return K.H.use(x)},ye.useActionState=function(x,R,Q){return K.H.useActionState(x,R,Q)},ye.useCallback=function(x,R){return K.H.useCallback(x,R)},ye.useContext=function(x){return K.H.useContext(x)},ye.useDebugValue=function(){},ye.useDeferredValue=function(x,R){return K.H.useDeferredValue(x,R)},ye.useEffect=function(x,R,Q){var V=K.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(x,R)},ye.useId=function(){return K.H.useId()},ye.useImperativeHandle=function(x,R,Q){return K.H.useImperativeHandle(x,R,Q)},ye.useInsertionEffect=function(x,R){return K.H.useInsertionEffect(x,R)},ye.useLayoutEffect=function(x,R){return K.H.useLayoutEffect(x,R)},ye.useMemo=function(x,R){return K.H.useMemo(x,R)},ye.useOptimistic=function(x,R){return K.H.useOptimistic(x,R)},ye.useReducer=function(x,R,Q){return K.H.useReducer(x,R,Q)},ye.useRef=function(x){return K.H.useRef(x)},ye.useState=function(x){return K.H.useState(x)},ye.useSyncExternalStore=function(x,R,Q){return K.H.useSyncExternalStore(x,R,Q)},ye.useTransition=function(){return K.H.useTransition()},ye.version="19.1.0",ye}var p0;function _f(){return p0||(p0=1,zs.exports=m1()),zs.exports}var p=_f();const Ga=f1(p),g1=s1({__proto__:null,default:Ga},[p]);var Hs={exports:{}},yi={},Rs={exports:{}},js={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function v1(){return y0||(y0=1,function(a){function r(U,W){var J=U.length;U.push(W);e:for(;0<J;){var Z=J-1>>>1,x=U[Z];if(0<s(x,W))U[Z]=W,U[J]=x,J=Z;else break e}}function u(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var W=U[0],J=U.pop();if(J!==W){U[0]=J;e:for(var Z=0,x=U.length,R=x>>>1;Z<R;){var Q=2*(Z+1)-1,V=U[Q],I=Q+1,re=U[I];if(0>s(V,J))I<x&&0>s(re,V)?(U[Z]=re,U[I]=J,Z=I):(U[Z]=V,U[Q]=J,Z=Q);else if(I<x&&0>s(re,J))U[Z]=re,U[I]=J,Z=I;else break e}}return W}function s(U,W){var J=U.sortIndex-W.sortIndex;return J!==0?J:U.id-W.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var m=Date,y=m.now();a.unstable_now=function(){return m.now()-y}}var g=[],v=[],b=1,S=null,_=3,T=!1,N=!1,D=!1,M=!1,Y=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function te(U){for(var W=u(v);W!==null;){if(W.callback===null)o(v);else if(W.startTime<=U)o(v),W.sortIndex=W.expirationTime,r(g,W);else break;W=u(v)}}function K(U){if(D=!1,te(U),!N)if(u(g)!==null)N=!0,ee||(ee=!0,ze());else{var W=u(v);W!==null&&Ae(K,W.startTime-U)}}var ee=!1,ne=-1,pe=5,he=-1;function be(){return M?!0:!(a.unstable_now()-he<pe)}function Re(){if(M=!1,ee){var U=a.unstable_now();he=U;var W=!0;try{e:{N=!1,D&&(D=!1,B(ne),ne=-1),T=!0;var J=_;try{t:{for(te(U),S=u(g);S!==null&&!(S.expirationTime>U&&be());){var Z=S.callback;if(typeof Z=="function"){S.callback=null,_=S.priorityLevel;var x=Z(S.expirationTime<=U);if(U=a.unstable_now(),typeof x=="function"){S.callback=x,te(U),W=!0;break t}S===u(g)&&o(g),te(U)}else o(g);S=u(g)}if(S!==null)W=!0;else{var R=u(v);R!==null&&Ae(K,R.startTime-U),W=!1}}break e}finally{S=null,_=J,T=!1}W=void 0}}finally{W?ze():ee=!1}}}var ze;if(typeof j=="function")ze=function(){j(Re)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,rt=Oe.port2;Oe.port1.onmessage=Re,ze=function(){rt.postMessage(null)}}else ze=function(){Y(Re,0)};function Ae(U,W){ne=Y(function(){U(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(U){U.callback=null},a.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<U?Math.floor(1e3/U):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(U){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var J=_;_=W;try{return U()}finally{_=J}},a.unstable_requestPaint=function(){M=!0},a.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=_;_=U;try{return W()}finally{_=J}},a.unstable_scheduleCallback=function(U,W,J){var Z=a.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Z+J:Z):J=Z,U){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=J+x,U={id:b++,callback:W,priorityLevel:U,startTime:J,expirationTime:x,sortIndex:-1},J>Z?(U.sortIndex=J,r(v,U),u(g)===null&&U===u(v)&&(D?(B(ne),ne=-1):D=!0,Ae(K,J-Z))):(U.sortIndex=x,r(g,U),N||T||(N=!0,ee||(ee=!0,ze()))),U},a.unstable_shouldYield=be,a.unstable_wrapCallback=function(U){var W=_;return function(){var J=_;_=W;try{return U.apply(this,arguments)}finally{_=J}}}}(js)),js}var b0;function p1(){return b0||(b0=1,Rs.exports=v1()),Rs.exports}var Us={exports:{}},Ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function y1(){if(S0)return Ht;S0=1;var a=_f();function r(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)v+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(g,v,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:S==null?null:""+S,children:g,containerInfo:v,implementation:b}}var m=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ht.createPortal=function(g,v){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(r(299));return d(g,v,null,b)},Ht.flushSync=function(g){var v=m.T,b=o.p;try{if(m.T=null,o.p=2,g)return g()}finally{m.T=v,o.p=b,o.d.f()}},Ht.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,o.d.C(g,v))},Ht.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},Ht.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var b=v.as,S=y(b,v.crossOrigin),_=typeof v.integrity=="string"?v.integrity:void 0,T=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;b==="style"?o.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:T}):b==="script"&&o.d.X(g,{crossOrigin:S,integrity:_,fetchPriority:T,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ht.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var b=y(v.as,v.crossOrigin);o.d.M(g,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&o.d.M(g)},Ht.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var b=v.as,S=y(b,v.crossOrigin);o.d.L(g,b,{crossOrigin:S,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ht.preloadModule=function(g,v){if(typeof g=="string")if(v){var b=y(v.as,v.crossOrigin);o.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else o.d.m(g)},Ht.requestFormReset=function(g){o.d.r(g)},Ht.unstable_batchedUpdates=function(g,v){return g(v)},Ht.useFormState=function(g,v,b){return m.H.useFormState(g,v,b)},Ht.useFormStatus=function(){return m.H.useHostTransitionStatus()},Ht.version="19.1.0",Ht}var x0;function jg(){if(x0)return Us.exports;x0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Us.exports=y1(),Us.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function b1(){if(E0)return yi;E0=1;var a=p1(),r=_f(),u=jg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(d(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var i=n.return;if(i===null)break;var c=i.alternate;if(c===null){if(l=i.return,l!==null){n=l;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===n)return y(i),e;if(c===l)return y(i),t;c=c.sibling}throw Error(o(188))}if(n.return!==l.return)n=i,l=c;else{for(var f=!1,h=i.child;h;){if(h===n){f=!0,n=i,l=c;break}if(h===l){f=!0,l=i,n=c;break}h=h.sibling}if(!f){for(h=c.child;h;){if(h===n){f=!0,n=c,l=i;break}if(h===l){f=!0,l=c,n=i;break}h=h.sibling}if(!f)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),j=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function ze(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case M:return"Profiler";case D:return"StrictMode";case K:return"Suspense";case ee:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case j:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:rt(e.type)||"Memo";case pe:t=e._payload,e=e._init;try{return rt(e(t))}catch{}}return null}var Ae=Array.isArray,U=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},Z=[],x=-1;function R(e){return{current:e}}function Q(e){0>x||(e.current=Z[x],Z[x]=null,x--)}function V(e,t){x++,Z[x]=e.current,e.current=t}var I=R(null),re=R(null),ae=R(null),Ne=R(null);function ge(e,t){switch(V(ae,t),V(re,e),V(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qm(t),e=Pm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(I),V(I,e)}function Xe(){Q(I),Q(re),Q(ae)}function St(e){e.memoizedState!==null&&V(Ne,e);var t=I.current,n=Pm(t,e.type);t!==n&&(V(re,e),V(I,n))}function Fe(e){re.current===e&&(Q(I),Q(re)),Ne.current===e&&(Q(Ne),di._currentValue=J)}var je=Object.prototype.hasOwnProperty,jt=a.unstable_scheduleCallback,za=a.unstable_cancelCallback,Ea=a.unstable_shouldYield,Nt=a.unstable_requestPaint,Je=a.unstable_now,qt=a.unstable_getCurrentPriorityLevel,Ut=a.unstable_ImmediatePriority,at=a.unstable_UserBlockingPriority,it=a.unstable_NormalPriority,_a=a.unstable_LowPriority,Sl=a.unstable_IdlePriority,qe=a.log,Vn=a.unstable_setDisableYieldValue,Ha=null,xt=null;function et(e){if(typeof qe=="function"&&Vn(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(Ha,e)}catch{}}var dt=Math.clz32?Math.clz32:ve,ie=Math.log,ce=Math.LN2;function ve(e){return e>>>=0,e===0?32:31-(ie(e)/ce|0)|0}var Ce=256,We=4194304;function Ue(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qt(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var i=0,c=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=l&134217727;return h!==0?(l=h&~c,l!==0?i=Ue(l):(f&=h,f!==0?i=Ue(f):n||(n=h&~e,n!==0&&(i=Ue(n))))):(h=l&~c,h!==0?i=Ue(h):f!==0?i=Ue(f):n||(n=l&~e,n!==0&&(i=Ue(n)))),i===0?0:t!==0&&t!==i&&(t&c)===0&&(c=i&-i,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:i}function Te(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var e=Ce;return Ce<<=1,(Ce&4194048)===0&&(Ce=256),e}function ra(){var e=We;return We<<=1,(We&62914560)===0&&(We=4194304),e}function ia(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fn(e,t,n,l,i,c){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,E=e.expirationTimes,C=e.hiddenUpdates;for(n=f&~n;0<n;){var L=31-dt(n),P=1<<L;h[L]=0,E[L]=-1;var z=C[L];if(z!==null)for(C[L]=null,L=0;L<z.length;L++){var H=z[L];H!==null&&(H.lane&=-536870913)}n&=~P}l!==0&&ua(e,l,0),c!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=c&~(f&~t))}function ua(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-dt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function Ri(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-dt(n),i=1<<l;i&t|e[l]&t&&(e[l]|=t),n&=~i}}function xl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ra(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xn(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:o0(e.type))}function wa(e,t){var n=W.p;try{return W.p=e,t()}finally{W.p=n}}var oa=Math.random().toString(36).slice(2),nt="__reactFiber$"+oa,Ct="__reactProps$"+oa,$a="__reactContainer$"+oa,El="__reactEvents$"+oa,br="__reactListeners$"+oa,ca="__reactHandles$"+oa,Va="__reactResources$"+oa,Bt="__reactMarker$"+oa;function Sr(e){delete e[nt],delete e[Ct],delete e[El],delete e[br],delete e[ca]}function Xa(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$a]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qm(e);e!==null;){if(n=e[nt])return n;e=Qm(e)}return t}e=n,n=e.parentNode}return null}function sa(e){if(e=e[nt]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Qa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function dn(e){var t=e[Va];return t||(t=e[Va]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ht(e){e[Bt]=!0}var ji=new Set,Ui={};function Na(e,t){fa(e,t),fa(e+"Capture",t)}function fa(e,t){for(Ui[e]=t,e=0;e<t.length;e++)ji.add(t[e])}var Mo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Li={},xr={};function Oo(e){return je.call(xr,e)?!0:je.call(Li,e)?!1:Mo.test(e)?xr[e]=!0:(Li[e]=!0,!1)}function hn(e,t,n){if(Oo(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function _l(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ta(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Er,mn;function Ma(e){if(Er===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Er=t&&t[1]||"",mn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Er+e+mn}var _r=!1;function wl(e,t){if(!e||_r)return"";_r=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(H){var z=H}Reflect.construct(e,[],P)}else{try{P.call()}catch(H){z=H}e.call(P.prototype)}}else{try{throw Error()}catch(H){z=H}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(H){if(H&&z&&typeof H.stack=="string")return[H.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),f=c[0],h=c[1];if(f&&h){var E=f.split(`
`),C=h.split(`
`);for(i=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(l===E.length||i===C.length)for(l=E.length-1,i=C.length-1;1<=l&&0<=i&&E[l]!==C[i];)i--;for(;1<=l&&0<=i;l--,i--)if(E[l]!==C[i]){if(l!==1||i!==1)do if(l--,i--,0>i||E[l]!==C[i]){var L=`
`+E[l].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=l&&0<=i);break}}}finally{_r=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ma(n):""}function Ao(e){switch(e.tag){case 26:case 27:case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return wl(e.type,!1);case 11:return wl(e.type.render,!1);case 1:return wl(e.type,!0);case 31:return Ma("Activity");default:return""}}function Yi(e){try{var t="";do t+=Ao(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ki(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Do(e){var t=ki(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){l=""+f,c.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(f){l=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $l(e){e._valueTracker||(e._valueTracker=Do(e))}function qi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=ki(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pi=/[\n"\\]/g;function F(e){return e.replace(Pi,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function se(e,t,n,l,i,c,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Qe(e,f,Tt(t)):n!=null?Qe(e,f,Tt(n)):l!=null&&e.removeAttribute("value"),i==null&&c!=null&&(e.defaultChecked=!!c),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Tt(h):e.removeAttribute("name")}function ue(e,t,n,l,i,c,f,h){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;n=n!=null?""+Tt(n):"",t=t!=null?""+Tt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=h?e.checked:!!l,e.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Qe(e,t,n){t==="number"&&Qn(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ct(e,t,n,l){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gn(e,t,n){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Tt(n):""}function ja(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(Ae(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Tt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Lt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wr(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Gi.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Nl(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&n[i]!==l&&wr(e,i,l)}else for(var c in t)t.hasOwnProperty(c)&&wr(e,c,t[c])}function Co(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(e){return cp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bo=null;function zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,Ml=null;function Gf(e){var t=sa(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(se(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+F(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var i=l[Ct]||null;if(!i)throw Error(o(90));se(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&qi(l)}break e;case"textarea":gn(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ct(e,!!n.multiple,t,!1)}}}var Ho=!1;function Vf(e,t,n){if(Ho)return e(t,n);Ho=!0;try{var l=e(t);return l}finally{if(Ho=!1,(Tl!==null||Ml!==null)&&(Au(),Tl&&(t=Tl,e=Ml,Ml=Tl=null,Gf(t),e)))for(t=0;t<e.length;t++)Gf(e[t])}}function $r(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Ct]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Za=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=!1;if(Za)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Ro=!1}var vn=null,jo=null,Xi=null;function Xf(){if(Xi)return Xi;var e,t=jo,n=t.length,l,i="value"in vn?vn.value:vn.textContent,c=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(l=1;l<=f&&t[n-l]===i[c-l];l++);return Xi=i.slice(e,1<l?1-l:void 0)}function Qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function Qf(){return!1}function Pt(e){function t(n,l,i,c,f){this._reactName=n,this._targetInst=i,this.type=l,this.nativeEvent=c,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(c):c[h]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Zi:Qf,this.isPropagationStopped=Qf,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fi=Pt(Zn),Tr=b({},Zn,{view:0,detail:0}),sp=Pt(Tr),Uo,Lo,Mr,Wi=b({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(Uo=e.screenX-Mr.screenX,Lo=e.screenY-Mr.screenY):Lo=Uo=0,Mr=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),Zf=Pt(Wi),fp=b({},Wi,{dataTransfer:0}),dp=Pt(fp),hp=b({},Tr,{relatedTarget:0}),Yo=Pt(hp),mp=b({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),gp=Pt(mp),vp=b({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pp=Pt(vp),yp=b({},Zn,{data:0}),Ff=Pt(yp),bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ep(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xp[e])?!!t[e]:!1}function ko(){return Ep}var _p=b({},Tr,{key:function(e){if(e.key){var t=bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ko,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wp=Pt(_p),$p=b({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wf=Pt($p),Np=b({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ko}),Tp=Pt(Np),Mp=b({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Op=Pt(Mp),Ap=b({},Wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dp=Pt(Ap),Cp=b({},Zn,{newState:0,oldState:0}),Bp=Pt(Cp),zp=[9,13,27,32],qo=Za&&"CompositionEvent"in window,Or=null;Za&&"documentMode"in document&&(Or=document.documentMode);var Hp=Za&&"TextEvent"in window&&!Or,Kf=Za&&(!qo||Or&&8<Or&&11>=Or),Jf=" ",If=!1;function ed(e,t){switch(e){case"keyup":return zp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ol=!1;function Rp(e,t){switch(e){case"compositionend":return td(t);case"keypress":return t.which!==32?null:(If=!0,Jf);case"textInput":return e=t.data,e===Jf&&If?null:e;default:return null}}function jp(e,t){if(Ol)return e==="compositionend"||!qo&&ed(e,t)?(e=Xf(),Xi=jo=vn=null,Ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kf&&t.locale!=="ko"?null:t.data;default:return null}}var Up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Up[e.type]:t==="textarea"}function nd(e,t,n,l){Tl?Ml?Ml.push(l):Ml=[l]:Tl=l,t=Ru(t,"onChange"),0<t.length&&(n=new Fi("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Ar=null,Dr=null;function Lp(e){jm(e,0)}function Ki(e){var t=Qa(e);if(qi(t))return e}function ld(e,t){if(e==="change")return t}var rd=!1;if(Za){var Po;if(Za){var Go="oninput"in document;if(!Go){var id=document.createElement("div");id.setAttribute("oninput","return;"),Go=typeof id.oninput=="function"}Po=Go}else Po=!1;rd=Po&&(!document.documentMode||9<document.documentMode)}function ud(){Ar&&(Ar.detachEvent("onpropertychange",od),Dr=Ar=null)}function od(e){if(e.propertyName==="value"&&Ki(Dr)){var t=[];nd(t,Dr,e,zo(e)),Vf(Lp,t)}}function Yp(e,t,n){e==="focusin"?(ud(),Ar=t,Dr=n,Ar.attachEvent("onpropertychange",od)):e==="focusout"&&ud()}function kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(Dr)}function qp(e,t){if(e==="click")return Ki(t)}function Pp(e,t){if(e==="input"||e==="change")return Ki(t)}function Gp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:Gp;function Cr(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var i=n[l];if(!je.call(t,i)||!Kt(e[i],t[i]))return!1}return!0}function cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sd(e,t){var n=cd(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cd(n)}}function fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qn(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qn(e.document)}return t}function Vo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Vp=Za&&"documentMode"in document&&11>=document.documentMode,Al=null,Xo=null,Br=null,Qo=!1;function hd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qo||Al==null||Al!==Qn(l)||(l=Al,"selectionStart"in l&&Vo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Br&&Cr(Br,l)||(Br=l,l=Ru(Xo,"onSelect"),0<l.length&&(t=new Fi("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Al)))}function Fn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dl={animationend:Fn("Animation","AnimationEnd"),animationiteration:Fn("Animation","AnimationIteration"),animationstart:Fn("Animation","AnimationStart"),transitionrun:Fn("Transition","TransitionRun"),transitionstart:Fn("Transition","TransitionStart"),transitioncancel:Fn("Transition","TransitionCancel"),transitionend:Fn("Transition","TransitionEnd")},Zo={},md={};Za&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete Dl.animationend.animation,delete Dl.animationiteration.animation,delete Dl.animationstart.animation),"TransitionEvent"in window||delete Dl.transitionend.transition);function Wn(e){if(Zo[e])return Zo[e];if(!Dl[e])return e;var t=Dl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in md)return Zo[e]=t[n];return e}var gd=Wn("animationend"),vd=Wn("animationiteration"),pd=Wn("animationstart"),Xp=Wn("transitionrun"),Qp=Wn("transitionstart"),Zp=Wn("transitioncancel"),yd=Wn("transitionend"),bd=new Map,Fo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fo.push("scrollEnd");function Oa(e,t){bd.set(e,t),Na(t,[e])}var Sd=new WeakMap;function da(e,t){if(typeof e=="object"&&e!==null){var n=Sd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Yi(t)},Sd.set(e,t),t)}return{value:e,source:t,stack:Yi(t)}}var ha=[],Cl=0,Wo=0;function Ji(){for(var e=Cl,t=Wo=Cl=0;t<e;){var n=ha[t];ha[t++]=null;var l=ha[t];ha[t++]=null;var i=ha[t];ha[t++]=null;var c=ha[t];if(ha[t++]=null,l!==null&&i!==null){var f=l.pending;f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i}c!==0&&xd(n,i,c)}}function Ii(e,t,n,l){ha[Cl++]=e,ha[Cl++]=t,ha[Cl++]=n,ha[Cl++]=l,Wo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ko(e,t,n,l){return Ii(e,t,n,l),eu(e)}function Bl(e,t){return Ii(e,null,null,t),eu(e)}function xd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var i=!1,c=e.return;c!==null;)c.childLanes|=n,l=c.alternate,l!==null&&(l.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(i=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,i&&t!==null&&(i=31-dt(n),e=c.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=n|536870912),c):null}function eu(e){if(50<li)throw li=0,ns=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zl={};function Fp(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,l){return new Fp(e,t,n,l)}function Jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fa(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ed(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tu(e,t,n,l,i,c){var f=0;if(l=e,typeof e=="function")Jo(e)&&(f=1);else if(typeof e=="string")f=Ky(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=Jt(31,n,t,i),e.elementType=he,e.lanes=c,e;case N:return Kn(n.children,i,c,t);case D:f=8,i|=24;break;case M:return e=Jt(12,n,t,i|2),e.elementType=M,e.lanes=c,e;case K:return e=Jt(13,n,t,i),e.elementType=K,e.lanes=c,e;case ee:return e=Jt(19,n,t,i),e.elementType=ee,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:case j:f=10;break e;case B:f=9;break e;case te:f=11;break e;case ne:f=14;break e;case pe:f=16,l=null;break e}f=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Jt(f,n,t,i),t.elementType=e,t.type=l,t.lanes=c,t}function Kn(e,t,n,l){return e=Jt(7,e,l,t),e.lanes=n,e}function Io(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function ec(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hl=[],Rl=0,au=null,nu=0,ma=[],ga=0,Jn=null,Wa=1,Ka="";function In(e,t){Hl[Rl++]=nu,Hl[Rl++]=au,au=e,nu=t}function _d(e,t,n){ma[ga++]=Wa,ma[ga++]=Ka,ma[ga++]=Jn,Jn=e;var l=Wa;e=Ka;var i=32-dt(l)-1;l&=~(1<<i),n+=1;var c=32-dt(t)+i;if(30<c){var f=i-i%5;c=(l&(1<<f)-1).toString(32),l>>=f,i-=f,Wa=1<<32-dt(t)+i|n<<i|l,Ka=c+e}else Wa=1<<c|n<<i|l,Ka=e}function tc(e){e.return!==null&&(In(e,1),_d(e,1,0))}function ac(e){for(;e===au;)au=Hl[--Rl],Hl[Rl]=null,nu=Hl[--Rl],Hl[Rl]=null;for(;e===Jn;)Jn=ma[--ga],ma[ga]=null,Ka=ma[--ga],ma[ga]=null,Wa=ma[--ga],ma[ga]=null}var Yt=null,ut=null,Be=!1,el=null,Ua=!1,nc=Error(o(519));function tl(e){var t=Error(o(418,""));throw Rr(da(t,e)),nc}function wd(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[nt]=e,t[Ct]=l,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<ii.length;n++)we(ii[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),ue(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),$l(t);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),ja(t,l.value,l.defaultValue,l.children),$l(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||km(t.textContent,n)?(l.popover!=null&&(we("beforetoggle",t),we("toggle",t)),l.onScroll!=null&&we("scroll",t),l.onScrollEnd!=null&&we("scrollend",t),l.onClick!=null&&(t.onclick=ju),t=!0):t=!1,t||tl(e)}function $d(e){for(Yt=e.return;Yt;)switch(Yt.tag){case 5:case 13:Ua=!1;return;case 27:case 3:Ua=!0;return;default:Yt=Yt.return}}function zr(e){if(e!==Yt)return!1;if(!Be)return $d(e),Be=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||bs(e.type,e.memoizedProps)),n=!n),n&&ut&&tl(e),$d(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){ut=Da(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}ut=null}}else t===27?(t=ut,Cn(e.type)?(e=_s,_s=null,ut=e):ut=t):ut=Yt?Da(e.stateNode.nextSibling):null;return!0}function Hr(){ut=Yt=null,Be=!1}function Nd(){var e=el;return e!==null&&(Xt===null?Xt=e:Xt.push.apply(Xt,e),el=null),e}function Rr(e){el===null?el=[e]:el.push(e)}var lc=R(null),al=null,Ja=null;function pn(e,t,n){V(lc,t._currentValue),t._currentValue=n}function Ia(e){e._currentValue=lc.current,Q(lc)}function rc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function ic(e,t,n,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){var f=i.child;c=c.firstContext;e:for(;c!==null;){var h=c;c=i;for(var E=0;E<t.length;E++)if(h.context===t[E]){c.lanes|=n,h=c.alternate,h!==null&&(h.lanes|=n),rc(c.return,n,e),l||(f=null);break e}c=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(o(341));f.lanes|=n,c=f.alternate,c!==null&&(c.lanes|=n),rc(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function jr(e,t,n,l){e=null;for(var i=t,c=!1;i!==null;){if(!c){if((i.flags&524288)!==0)c=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var h=i.type;Kt(i.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(i===Ne.current){if(f=i.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(di):e=[di])}i=i.return}e!==null&&ic(t,e,n,l),t.flags|=262144}function lu(e){for(e=e.firstContext;e!==null;){if(!Kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nl(e){al=e,Ja=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zt(e){return Td(al,e)}function ru(e,t){return al===null&&nl(e),Td(e,t)}function Td(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ja===null){if(e===null)throw Error(o(308));Ja=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ja=Ja.next=t;return n}var Wp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Kp=a.unstable_scheduleCallback,Jp=a.unstable_NormalPriority,pt={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uc(){return{controller:new Wp,data:new Map,refCount:0}}function Ur(e){e.refCount--,e.refCount===0&&Kp(Jp,function(){e.controller.abort()})}var Lr=null,oc=0,jl=0,Ul=null;function Ip(e,t){if(Lr===null){var n=Lr=[];oc=0,jl=ss(),Ul={status:"pending",value:void 0,then:function(l){n.push(l)}}}return oc++,t.then(Md,Md),t}function Md(){if(--oc===0&&Lr!==null){Ul!==null&&(Ul.status="fulfilled");var e=Lr;Lr=null,jl=0,Ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ey(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),l}var Od=U.S;U.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ip(e,t),Od!==null&&Od(e,t)};var ll=R(null);function cc(){var e=ll.current;return e!==null?e:Ke.pooledCache}function iu(e,t){t===null?V(ll,ll.current):V(ll,t.pool)}function Ad(){var e=cc();return e===null?null:{parent:pt._currentValue,pool:e}}var Yr=Error(o(460)),Dd=Error(o(474)),uu=Error(o(542)),sc={then:function(){}};function Cd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ou(){}function Bd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ou,ou),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hd(e),e;default:if(typeof t.status=="string")t.then(ou,ou);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hd(e),e}throw kr=t,Yr}}var kr=null;function zd(){if(kr===null)throw Error(o(459));var e=kr;return kr=null,e}function Hd(e){if(e===Yr||e===uu)throw Error(o(483))}var yn=!1;function fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=eu(e),xd(e,null,n),t}return Ii(e,l,t,n),eu(e)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Ri(e,n)}}function hc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var i=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?i=c=f:c=c.next=f,n=n.next}while(n!==null);c===null?i=c=t:c=c.next=t}else i=c=t;n={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var mc=!1;function Pr(){if(mc){var e=Ul;if(e!==null)throw e}}function Gr(e,t,n,l){mc=!1;var i=e.updateQueue;yn=!1;var c=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var E=h,C=E.next;E.next=null,f===null?c=C:f.next=C,f=E;var L=e.alternate;L!==null&&(L=L.updateQueue,h=L.lastBaseUpdate,h!==f&&(h===null?L.firstBaseUpdate=C:h.next=C,L.lastBaseUpdate=E))}if(c!==null){var P=i.baseState;f=0,L=C=E=null,h=c;do{var z=h.lane&-536870913,H=z!==h.lane;if(H?(Me&z)===z:(l&z)===z){z!==0&&z===jl&&(mc=!0),L!==null&&(L=L.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var me=e,fe=h;z=t;var Ve=n;switch(fe.tag){case 1:if(me=fe.payload,typeof me=="function"){P=me.call(Ve,P,z);break e}P=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=fe.payload,z=typeof me=="function"?me.call(Ve,P,z):me,z==null)break e;P=b({},P,z);break e;case 2:yn=!0}}z=h.callback,z!==null&&(e.flags|=64,H&&(e.flags|=8192),H=i.callbacks,H===null?i.callbacks=[z]:H.push(z))}else H={lane:z,tag:h.tag,payload:h.payload,callback:h.callback,next:null},L===null?(C=L=H,E=P):L=L.next=H,f|=z;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;H=h,h=H.next,H.next=null,i.lastBaseUpdate=H,i.shared.pending=null}}while(!0);L===null&&(E=P),i.baseState=E,i.firstBaseUpdate=C,i.lastBaseUpdate=L,c===null&&(i.shared.lanes=0),Mn|=f,e.lanes=f,e.memoizedState=P}}function Rd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function jd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rd(n[e],t)}var Ll=R(null),cu=R(0);function Ud(e,t){e=un,V(cu,e),V(Ll,t),un=e|t.baseLanes}function gc(){V(cu,un),V(Ll,Ll.current)}function vc(){un=cu.current,Q(Ll),Q(cu)}var xn=0,xe=null,Pe=null,mt=null,su=!1,Yl=!1,rl=!1,fu=0,Vr=0,kl=null,ty=0;function st(){throw Error(o(321))}function pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function yc(e,t,n,l,i,c){return xn=c,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?xh:Eh,rl=!1,c=n(l,i),rl=!1,Yl&&(c=Yd(t,n,l,i)),Ld(e),c}function Ld(e){U.H=pu;var t=Pe!==null&&Pe.next!==null;if(xn=0,mt=Pe=xe=null,su=!1,Vr=0,kl=null,t)throw Error(o(300));e===null||Et||(e=e.dependencies,e!==null&&lu(e)&&(Et=!0))}function Yd(e,t,n,l){xe=e;var i=0;do{if(Yl&&(kl=null),Vr=0,Yl=!1,25<=i)throw Error(o(301));if(i+=1,mt=Pe=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}U.H=oy,c=t(n,l)}while(Yl);return c}function ay(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Xr(t):t,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(xe.flags|=1024),t}function bc(){var e=fu!==0;return fu=0,e}function Sc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xc(e){if(su){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}su=!1}xn=0,mt=Pe=xe=null,Yl=!1,Vr=fu=0,kl=null}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?xe.memoizedState=mt=e:mt=mt.next=e,mt}function gt(){if(Pe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=mt===null?xe.memoizedState:mt.next;if(t!==null)mt=t,Pe=e;else{if(e===null)throw xe.alternate===null?Error(o(467)):Error(o(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},mt===null?xe.memoizedState=mt=e:mt=mt.next=e}return mt}function Ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xr(e){var t=Vr;return Vr+=1,kl===null&&(kl=[]),e=Bd(kl,e,t),t=xe,(mt===null?t.memoizedState:mt.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?xh:Eh),e}function du(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xr(e);if(e.$$typeof===j)return zt(e)}throw Error(o(438,String(e)))}function _c(e){var t=null,n=xe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ec(),xe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=be;return t.index++,n}function en(e,t){return typeof t=="function"?t(e):t}function hu(e){var t=gt();return wc(t,Pe,e)}function wc(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var i=e.baseQueue,c=l.pending;if(c!==null){if(i!==null){var f=i.next;i.next=c.next,c.next=f}t.baseQueue=i=c,l.pending=null}if(c=e.baseState,i===null)e.memoizedState=c;else{t=i.next;var h=f=null,E=null,C=t,L=!1;do{var P=C.lane&-536870913;if(P!==C.lane?(Me&P)===P:(xn&P)===P){var z=C.revertLane;if(z===0)E!==null&&(E=E.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),P===jl&&(L=!0);else if((xn&z)===z){C=C.next,z===jl&&(L=!0);continue}else P={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},E===null?(h=E=P,f=c):E=E.next=P,xe.lanes|=z,Mn|=z;P=C.action,rl&&n(c,P),c=C.hasEagerState?C.eagerState:n(c,P)}else z={lane:P,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},E===null?(h=E=z,f=c):E=E.next=z,xe.lanes|=P,Mn|=P;C=C.next}while(C!==null&&C!==t);if(E===null?f=c:E.next=h,!Kt(c,e.memoizedState)&&(Et=!0,L&&(n=Ul,n!==null)))throw n;e.memoizedState=c,e.baseState=f,e.baseQueue=E,l.lastRenderedState=c}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function $c(e){var t=gt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,i=n.pending,c=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do c=e(c,f.action),f=f.next;while(f!==i);Kt(c,t.memoizedState)||(Et=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,l]}function kd(e,t,n){var l=xe,i=gt(),c=Be;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var f=!Kt((Pe||i).memoizedState,n);f&&(i.memoizedState=n,Et=!0),i=i.queue;var h=Gd.bind(null,l,i,e);if(Qr(2048,8,h,[e]),i.getSnapshot!==t||f||mt!==null&&mt.memoizedState.tag&1){if(l.flags|=2048,ql(9,mu(),Pd.bind(null,l,i,n,t),null),Ke===null)throw Error(o(349));c||(xn&124)!==0||qd(l,t,n)}return n}function qd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t=Ec(),xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pd(e,t,n,l){t.value=n,t.getSnapshot=l,Vd(t)&&Xd(e)}function Gd(e,t,n){return n(function(){Vd(t)&&Xd(e)})}function Vd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Xd(e){var t=Bl(e,2);t!==null&&na(t,e,2)}function Nc(e){var t=Gt();if(typeof e=="function"){var n=e;if(e=n(),rl){et(!0);try{n()}finally{et(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:e},t}function Qd(e,t,n,l){return e.baseState=n,wc(e,Pe,typeof l=="function"?l:en)}function ny(e,t,n,l,i){if(vu(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){c.listeners.push(f)}};U.T!==null?n(!0):c.isTransition=!1,l(c),n=t.pending,n===null?(c.next=t.pending=c,Zd(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Zd(e,t){var n=t.action,l=t.payload,i=e.state;if(t.isTransition){var c=U.T,f={};U.T=f;try{var h=n(i,l),E=U.S;E!==null&&E(f,h),Fd(e,t,h)}catch(C){Tc(e,t,C)}finally{U.T=c}}else try{c=n(i,l),Fd(e,t,c)}catch(C){Tc(e,t,C)}}function Fd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Wd(e,t,l)},function(l){return Tc(e,t,l)}):Wd(e,t,n)}function Wd(e,t,n){t.status="fulfilled",t.value=n,Kd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zd(e,n)))}function Tc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Kd(t),t=t.next;while(t!==l)}e.action=null}function Kd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Jd(e,t){return t}function Id(e,t){if(Be){var n=Ke.formState;if(n!==null){e:{var l=xe;if(Be){if(ut){t:{for(var i=ut,c=Ua;i.nodeType!==8;){if(!c){i=null;break t}if(i=Da(i.nextSibling),i===null){i=null;break t}}c=i.data,i=c==="F!"||c==="F"?i:null}if(i){ut=Da(i.nextSibling),l=i.data==="F!";break e}}tl(l)}l=!1}l&&(t=n[0])}}return n=Gt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jd,lastRenderedState:t},n.queue=l,n=yh.bind(null,xe,l),l.dispatch=n,l=Nc(!1),c=Cc.bind(null,xe,!1,l.queue),l=Gt(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,n=ny.bind(null,xe,i,c,n),i.dispatch=n,l.memoizedState=e,[t,n,!1]}function eh(e){var t=gt();return th(t,Pe,e)}function th(e,t,n){if(t=wc(e,t,Jd)[0],e=hu(en)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Xr(t)}catch(f){throw f===Yr?uu:f}else l=t;t=gt();var i=t.queue,c=i.dispatch;return n!==t.memoizedState&&(xe.flags|=2048,ql(9,mu(),ly.bind(null,i,n),null)),[l,c,e]}function ly(e,t){e.action=t}function ah(e){var t=gt(),n=Pe;if(n!==null)return th(t,n,e);gt(),t=t.memoizedState,n=gt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function ql(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=xe.updateQueue,t===null&&(t=Ec(),xe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function mu(){return{destroy:void 0,resource:void 0}}function nh(){return gt().memoizedState}function gu(e,t,n,l){var i=Gt();l=l===void 0?null:l,xe.flags|=e,i.memoizedState=ql(1|t,mu(),n,l)}function Qr(e,t,n,l){var i=gt();l=l===void 0?null:l;var c=i.memoizedState.inst;Pe!==null&&l!==null&&pc(l,Pe.memoizedState.deps)?i.memoizedState=ql(t,c,n,l):(xe.flags|=e,i.memoizedState=ql(1|t,c,n,l))}function lh(e,t){gu(8390656,8,e,t)}function rh(e,t){Qr(2048,8,e,t)}function ih(e,t){return Qr(4,2,e,t)}function uh(e,t){return Qr(4,4,e,t)}function oh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ch(e,t,n){n=n!=null?n.concat([e]):null,Qr(4,4,oh.bind(null,t,e),n)}function Mc(){}function sh(e,t){var n=gt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&pc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function fh(e,t){var n=gt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&pc(t,l[1]))return l[0];if(l=e(),rl){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[l,t],l}function Oc(e,t,n){return n===void 0||(xn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=mm(),xe.lanes|=e,Mn|=e,n)}function dh(e,t,n,l){return Kt(n,t)?n:Ll.current!==null?(e=Oc(e,n,l),Kt(e,t)||(Et=!0),e):(xn&42)===0?(Et=!0,e.memoizedState=n):(e=mm(),xe.lanes|=e,Mn|=e,t)}function hh(e,t,n,l,i){var c=W.p;W.p=c!==0&&8>c?c:8;var f=U.T,h={};U.T=h,Cc(e,!1,t,n);try{var E=i(),C=U.S;if(C!==null&&C(h,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var L=ey(E,l);Zr(e,t,L,aa(e))}else Zr(e,t,l,aa(e))}catch(P){Zr(e,t,{then:function(){},status:"rejected",reason:P},aa())}finally{W.p=c,U.T=f}}function ry(){}function Ac(e,t,n,l){if(e.tag!==5)throw Error(o(476));var i=mh(e).queue;hh(e,i,t,J,n===null?ry:function(){return gh(e),n(l)})}function mh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:J},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gh(e){var t=mh(e).next.queue;Zr(e,t,{},aa())}function Dc(){return zt(di)}function vh(){return gt().memoizedState}function ph(){return gt().memoizedState}function iy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=aa();e=bn(n);var l=Sn(t,e,n);l!==null&&(na(l,t,n),qr(l,t,n)),t={cache:uc()},e.payload=t;return}t=t.return}}function uy(e,t,n){var l=aa();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},vu(e)?bh(t,n):(n=Ko(e,t,n,l),n!==null&&(na(n,e,l),Sh(n,t,l)))}function yh(e,t,n){var l=aa();Zr(e,t,n,l)}function Zr(e,t,n,l){var i={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(vu(e))bh(t,i);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var f=t.lastRenderedState,h=c(f,n);if(i.hasEagerState=!0,i.eagerState=h,Kt(h,f))return Ii(e,t,i,0),Ke===null&&Ji(),!1}catch{}finally{}if(n=Ko(e,t,i,l),n!==null)return na(n,e,l),Sh(n,t,l),!0}return!1}function Cc(e,t,n,l){if(l={lane:2,revertLane:ss(),action:l,hasEagerState:!1,eagerState:null,next:null},vu(e)){if(t)throw Error(o(479))}else t=Ko(e,n,l,2),t!==null&&na(t,e,2)}function vu(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function bh(e,t){Yl=su=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sh(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Ri(e,n)}}var pu={readContext:zt,use:du,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st},xh={readContext:zt,use:du,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:lh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gu(4194308,4,oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gu(4194308,4,e,t)},useInsertionEffect:function(e,t){gu(4,2,e,t)},useMemo:function(e,t){var n=Gt();t=t===void 0?null:t;var l=e();if(rl){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Gt();if(n!==void 0){var i=n(t);if(rl){et(!0);try{n(t)}finally{et(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=uy.bind(null,xe,e),[l.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:function(e){e=Nc(e);var t=e.queue,n=yh.bind(null,xe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Mc,useDeferredValue:function(e,t){var n=Gt();return Oc(n,e,t)},useTransition:function(){var e=Nc(!1);return e=hh.bind(null,xe,e.queue,!0,!1),Gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=xe,i=Gt();if(Be){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ke===null)throw Error(o(349));(Me&124)!==0||qd(l,t,n)}i.memoizedState=n;var c={value:n,getSnapshot:t};return i.queue=c,lh(Gd.bind(null,l,c,e),[e]),l.flags|=2048,ql(9,mu(),Pd.bind(null,l,c,n,t),null),n},useId:function(){var e=Gt(),t=Ke.identifierPrefix;if(Be){var n=Ka,l=Wa;n=(l&~(1<<32-dt(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=fu++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=ty++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Dc,useFormState:Id,useActionState:Id,useOptimistic:function(e){var t=Gt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Cc.bind(null,xe,!0,n),n.dispatch=t,[e,t]},useMemoCache:_c,useCacheRefresh:function(){return Gt().memoizedState=iy.bind(null,xe)}},Eh={readContext:zt,use:du,useCallback:sh,useContext:zt,useEffect:rh,useImperativeHandle:ch,useInsertionEffect:ih,useLayoutEffect:uh,useMemo:fh,useReducer:hu,useRef:nh,useState:function(){return hu(en)},useDebugValue:Mc,useDeferredValue:function(e,t){var n=gt();return dh(n,Pe.memoizedState,e,t)},useTransition:function(){var e=hu(en)[0],t=gt().memoizedState;return[typeof e=="boolean"?e:Xr(e),t]},useSyncExternalStore:kd,useId:vh,useHostTransitionStatus:Dc,useFormState:eh,useActionState:eh,useOptimistic:function(e,t){var n=gt();return Qd(n,Pe,e,t)},useMemoCache:_c,useCacheRefresh:ph},oy={readContext:zt,use:du,useCallback:sh,useContext:zt,useEffect:rh,useImperativeHandle:ch,useInsertionEffect:ih,useLayoutEffect:uh,useMemo:fh,useReducer:$c,useRef:nh,useState:function(){return $c(en)},useDebugValue:Mc,useDeferredValue:function(e,t){var n=gt();return Pe===null?Oc(n,e,t):dh(n,Pe.memoizedState,e,t)},useTransition:function(){var e=$c(en)[0],t=gt().memoizedState;return[typeof e=="boolean"?e:Xr(e),t]},useSyncExternalStore:kd,useId:vh,useHostTransitionStatus:Dc,useFormState:ah,useActionState:ah,useOptimistic:function(e,t){var n=gt();return Pe!==null?Qd(n,Pe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:_c,useCacheRefresh:ph},Pl=null,Fr=0;function yu(e){var t=Fr;return Fr+=1,Pl===null&&(Pl=[]),Bd(Pl,e,t)}function Wr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bu(e,t){throw t.$$typeof===S?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _h(e){var t=e._init;return t(e._payload)}function wh(e){function t(O,$){if(e){var A=O.deletions;A===null?(O.deletions=[$],O.flags|=16):A.push($)}}function n(O,$){if(!e)return null;for(;$!==null;)t(O,$),$=$.sibling;return null}function l(O){for(var $=new Map;O!==null;)O.key!==null?$.set(O.key,O):$.set(O.index,O),O=O.sibling;return $}function i(O,$){return O=Fa(O,$),O.index=0,O.sibling=null,O}function c(O,$,A){return O.index=A,e?(A=O.alternate,A!==null?(A=A.index,A<$?(O.flags|=67108866,$):A):(O.flags|=67108866,$)):(O.flags|=1048576,$)}function f(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function h(O,$,A,k){return $===null||$.tag!==6?($=Io(A,O.mode,k),$.return=O,$):($=i($,A),$.return=O,$)}function E(O,$,A,k){var le=A.type;return le===N?L(O,$,A.props.children,k,A.key):$!==null&&($.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===pe&&_h(le)===$.type)?($=i($,A.props),Wr($,A),$.return=O,$):($=tu(A.type,A.key,A.props,null,O.mode,k),Wr($,A),$.return=O,$)}function C(O,$,A,k){return $===null||$.tag!==4||$.stateNode.containerInfo!==A.containerInfo||$.stateNode.implementation!==A.implementation?($=ec(A,O.mode,k),$.return=O,$):($=i($,A.children||[]),$.return=O,$)}function L(O,$,A,k,le){return $===null||$.tag!==7?($=Kn(A,O.mode,k,le),$.return=O,$):($=i($,A),$.return=O,$)}function P(O,$,A){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Io(""+$,O.mode,A),$.return=O,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return A=tu($.type,$.key,$.props,null,O.mode,A),Wr(A,$),A.return=O,A;case T:return $=ec($,O.mode,A),$.return=O,$;case pe:var k=$._init;return $=k($._payload),P(O,$,A)}if(Ae($)||ze($))return $=Kn($,O.mode,A,null),$.return=O,$;if(typeof $.then=="function")return P(O,yu($),A);if($.$$typeof===j)return P(O,ru(O,$),A);bu(O,$)}return null}function z(O,$,A,k){var le=$!==null?$.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return le!==null?null:h(O,$,""+A,k);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case _:return A.key===le?E(O,$,A,k):null;case T:return A.key===le?C(O,$,A,k):null;case pe:return le=A._init,A=le(A._payload),z(O,$,A,k)}if(Ae(A)||ze(A))return le!==null?null:L(O,$,A,k,null);if(typeof A.then=="function")return z(O,$,yu(A),k);if(A.$$typeof===j)return z(O,$,ru(O,A),k);bu(O,A)}return null}function H(O,$,A,k,le){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return O=O.get(A)||null,h($,O,""+k,le);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return O=O.get(k.key===null?A:k.key)||null,E($,O,k,le);case T:return O=O.get(k.key===null?A:k.key)||null,C($,O,k,le);case pe:var Ee=k._init;return k=Ee(k._payload),H(O,$,A,k,le)}if(Ae(k)||ze(k))return O=O.get(A)||null,L($,O,k,le,null);if(typeof k.then=="function")return H(O,$,A,yu(k),le);if(k.$$typeof===j)return H(O,$,A,ru($,k),le);bu($,k)}return null}function me(O,$,A,k){for(var le=null,Ee=null,oe=$,de=$=0,wt=null;oe!==null&&de<A.length;de++){oe.index>de?(wt=oe,oe=null):wt=oe.sibling;var De=z(O,oe,A[de],k);if(De===null){oe===null&&(oe=wt);break}e&&oe&&De.alternate===null&&t(O,oe),$=c(De,$,de),Ee===null?le=De:Ee.sibling=De,Ee=De,oe=wt}if(de===A.length)return n(O,oe),Be&&In(O,de),le;if(oe===null){for(;de<A.length;de++)oe=P(O,A[de],k),oe!==null&&($=c(oe,$,de),Ee===null?le=oe:Ee.sibling=oe,Ee=oe);return Be&&In(O,de),le}for(oe=l(oe);de<A.length;de++)wt=H(oe,O,de,A[de],k),wt!==null&&(e&&wt.alternate!==null&&oe.delete(wt.key===null?de:wt.key),$=c(wt,$,de),Ee===null?le=wt:Ee.sibling=wt,Ee=wt);return e&&oe.forEach(function(jn){return t(O,jn)}),Be&&In(O,de),le}function fe(O,$,A,k){if(A==null)throw Error(o(151));for(var le=null,Ee=null,oe=$,de=$=0,wt=null,De=A.next();oe!==null&&!De.done;de++,De=A.next()){oe.index>de?(wt=oe,oe=null):wt=oe.sibling;var jn=z(O,oe,De.value,k);if(jn===null){oe===null&&(oe=wt);break}e&&oe&&jn.alternate===null&&t(O,oe),$=c(jn,$,de),Ee===null?le=jn:Ee.sibling=jn,Ee=jn,oe=wt}if(De.done)return n(O,oe),Be&&In(O,de),le;if(oe===null){for(;!De.done;de++,De=A.next())De=P(O,De.value,k),De!==null&&($=c(De,$,de),Ee===null?le=De:Ee.sibling=De,Ee=De);return Be&&In(O,de),le}for(oe=l(oe);!De.done;de++,De=A.next())De=H(oe,O,de,De.value,k),De!==null&&(e&&De.alternate!==null&&oe.delete(De.key===null?de:De.key),$=c(De,$,de),Ee===null?le=De:Ee.sibling=De,Ee=De);return e&&oe.forEach(function(c1){return t(O,c1)}),Be&&In(O,de),le}function Ve(O,$,A,k){if(typeof A=="object"&&A!==null&&A.type===N&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case _:e:{for(var le=A.key;$!==null;){if($.key===le){if(le=A.type,le===N){if($.tag===7){n(O,$.sibling),k=i($,A.props.children),k.return=O,O=k;break e}}else if($.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===pe&&_h(le)===$.type){n(O,$.sibling),k=i($,A.props),Wr(k,A),k.return=O,O=k;break e}n(O,$);break}else t(O,$);$=$.sibling}A.type===N?(k=Kn(A.props.children,O.mode,k,A.key),k.return=O,O=k):(k=tu(A.type,A.key,A.props,null,O.mode,k),Wr(k,A),k.return=O,O=k)}return f(O);case T:e:{for(le=A.key;$!==null;){if($.key===le)if($.tag===4&&$.stateNode.containerInfo===A.containerInfo&&$.stateNode.implementation===A.implementation){n(O,$.sibling),k=i($,A.children||[]),k.return=O,O=k;break e}else{n(O,$);break}else t(O,$);$=$.sibling}k=ec(A,O.mode,k),k.return=O,O=k}return f(O);case pe:return le=A._init,A=le(A._payload),Ve(O,$,A,k)}if(Ae(A))return me(O,$,A,k);if(ze(A)){if(le=ze(A),typeof le!="function")throw Error(o(150));return A=le.call(A),fe(O,$,A,k)}if(typeof A.then=="function")return Ve(O,$,yu(A),k);if(A.$$typeof===j)return Ve(O,$,ru(O,A),k);bu(O,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,$!==null&&$.tag===6?(n(O,$.sibling),k=i($,A),k.return=O,O=k):(n(O,$),k=Io(A,O.mode,k),k.return=O,O=k),f(O)):n(O,$)}return function(O,$,A,k){try{Fr=0;var le=Ve(O,$,A,k);return Pl=null,le}catch(oe){if(oe===Yr||oe===uu)throw oe;var Ee=Jt(29,oe,null,O.mode);return Ee.lanes=k,Ee.return=O,Ee}finally{}}}var Gl=wh(!0),$h=wh(!1),va=R(null),La=null;function En(e){var t=e.alternate;V(yt,yt.current&1),V(va,e),La===null&&(t===null||Ll.current!==null||t.memoizedState!==null)&&(La=e)}function Nh(e){if(e.tag===22){if(V(yt,yt.current),V(va,e),La===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(La=e)}}else _n()}function _n(){V(yt,yt.current),V(va,va.current)}function tn(e){Q(va),La===e&&(La=null),Q(yt)}var yt=R(0);function Su(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Es(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Bc(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=aa(),i=bn(l);i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,l),t!==null&&(na(t,e,l),qr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=aa(),i=bn(l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,l),t!==null&&(na(t,e,l),qr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=aa(),l=bn(n);l.tag=2,t!=null&&(l.callback=t),t=Sn(e,l,n),t!==null&&(na(t,e,n),qr(t,e,n))}};function Th(e,t,n,l,i,c,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,f):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,l)||!Cr(i,c):!0}function Mh(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&zc.enqueueReplaceState(t,t.state,null)}function il(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var xu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Oh(e){xu(e)}function Ah(e){console.error(e)}function Dh(e){xu(e)}function Eu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ch(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Hc(e,t,n){return n=bn(n),n.tag=3,n.payload={element:null},n.callback=function(){Eu(e,t)},n}function Bh(e){return e=bn(e),e.tag=3,e}function zh(e,t,n,l){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var c=l.value;e.payload=function(){return i(c)},e.callback=function(){Ch(t,n,l)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Ch(t,n,l),typeof i!="function"&&(On===null?On=new Set([this]):On.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function cy(e,t,n,l,i){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&jr(t,n,i,!0),n=va.current,n!==null){switch(n.tag){case 13:return La===null?rs():n.alternate===null&&ot===0&&(ot=3),n.flags&=-257,n.flags|=65536,n.lanes=i,l===sc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),us(e,l,i)),!1;case 22:return n.flags|=65536,l===sc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),us(e,l,i)),!1}throw Error(o(435,n.tag))}return us(e,l,i),rs(),!1}if(Be)return t=va.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==nc&&(e=Error(o(422),{cause:l}),Rr(da(e,n)))):(l!==nc&&(t=Error(o(423),{cause:l}),Rr(da(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=da(l,n),i=Hc(e.stateNode,l,i),hc(e,i),ot!==4&&(ot=2)),!1;var c=Error(o(520),{cause:l});if(c=da(c,n),ni===null?ni=[c]:ni.push(c),ot!==4&&(ot=2),t===null)return!0;l=da(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Hc(n.stateNode,l,e),hc(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(On===null||!On.has(c))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Bh(i),zh(i,e,n,l),hc(n,i),!1}n=n.return}while(n!==null);return!1}var Hh=Error(o(461)),Et=!1;function Mt(e,t,n,l){t.child=e===null?$h(t,null,n,l):Gl(t,e.child,n,l)}function Rh(e,t,n,l,i){n=n.render;var c=t.ref;if("ref"in l){var f={};for(var h in l)h!=="ref"&&(f[h]=l[h])}else f=l;return nl(t),l=yc(e,t,n,f,c,i),h=bc(),e!==null&&!Et?(Sc(e,t,i),an(e,t,i)):(Be&&h&&tc(t),t.flags|=1,Mt(e,t,l,i),t.child)}function jh(e,t,n,l,i){if(e===null){var c=n.type;return typeof c=="function"&&!Jo(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Uh(e,t,c,l,i)):(e=tu(n.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Pc(e,i)){var f=c.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(f,l)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=Fa(c,l),e.ref=t.ref,e.return=t,t.child=e}function Uh(e,t,n,l,i){if(e!==null){var c=e.memoizedProps;if(Cr(c,l)&&e.ref===t.ref)if(Et=!1,t.pendingProps=l=c,Pc(e,i))(e.flags&131072)!==0&&(Et=!0);else return t.lanes=e.lanes,an(e,t,i)}return Rc(e,t,n,l,i)}function Lh(e,t,n){var l=t.pendingProps,i=l.children,c=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=c!==null?c.baseLanes|n:n,e!==null){for(i=t.child=e.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;t.childLanes=c&~l}else t.childLanes=0,t.child=null;return Yh(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&iu(t,c!==null?c.cachePool:null),c!==null?Ud(t,c):gc(),Nh(t);else return t.lanes=t.childLanes=536870912,Yh(e,t,c!==null?c.baseLanes|n:n,n)}else c!==null?(iu(t,c.cachePool),Ud(t,c),_n(),t.memoizedState=null):(e!==null&&iu(t,null),gc(),_n());return Mt(e,t,i,n),t.child}function Yh(e,t,n,l){var i=cc();return i=i===null?null:{parent:pt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&iu(t,null),gc(),Nh(t),e!==null&&jr(e,t,l,!0),null}function _u(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Rc(e,t,n,l,i){return nl(t),n=yc(e,t,n,l,void 0,i),l=bc(),e!==null&&!Et?(Sc(e,t,i),an(e,t,i)):(Be&&l&&tc(t),t.flags|=1,Mt(e,t,n,i),t.child)}function kh(e,t,n,l,i,c){return nl(t),t.updateQueue=null,n=Yd(t,l,n,i),Ld(e),l=bc(),e!==null&&!Et?(Sc(e,t,c),an(e,t,c)):(Be&&l&&tc(t),t.flags|=1,Mt(e,t,n,c),t.child)}function qh(e,t,n,l,i){if(nl(t),t.stateNode===null){var c=zl,f=n.contextType;typeof f=="object"&&f!==null&&(c=zt(f)),c=new n(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=zc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},fc(t),f=n.contextType,c.context=typeof f=="object"&&f!==null?zt(f):zl,c.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Bc(t,n,f,l),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(f=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),f!==c.state&&zc.enqueueReplaceState(c,c.state,null),Gr(t,l,c,i),Pr(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var h=t.memoizedProps,E=il(n,h);c.props=E;var C=c.context,L=n.contextType;f=zl,typeof L=="object"&&L!==null&&(f=zt(L));var P=n.getDerivedStateFromProps;L=typeof P=="function"||typeof c.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,L||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h||C!==f)&&Mh(t,c,l,f),yn=!1;var z=t.memoizedState;c.state=z,Gr(t,l,c,i),Pr(),C=t.memoizedState,h||z!==C||yn?(typeof P=="function"&&(Bc(t,n,P,l),C=t.memoizedState),(E=yn||Th(t,n,E,l,z,C,f))?(L||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),c.props=l,c.state=C,c.context=f,l=E):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,dc(e,t),f=t.memoizedProps,L=il(n,f),c.props=L,P=t.pendingProps,z=c.context,C=n.contextType,E=zl,typeof C=="object"&&C!==null&&(E=zt(C)),h=n.getDerivedStateFromProps,(C=typeof h=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==P||z!==E)&&Mh(t,c,l,E),yn=!1,z=t.memoizedState,c.state=z,Gr(t,l,c,i),Pr();var H=t.memoizedState;f!==P||z!==H||yn||e!==null&&e.dependencies!==null&&lu(e.dependencies)?(typeof h=="function"&&(Bc(t,n,h,l),H=t.memoizedState),(L=yn||Th(t,n,L,l,z,H,E)||e!==null&&e.dependencies!==null&&lu(e.dependencies))?(C||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,H,E),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,H,E)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=H),c.props=l,c.state=H,c.context=E,l=L):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,_u(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=Gl(t,e.child,null,i),t.child=Gl(t,null,n,i)):Mt(e,t,n,i),t.memoizedState=c.state,e=t.child):e=an(e,t,i),e}function Ph(e,t,n,l){return Hr(),t.flags|=256,Mt(e,t,n,l),t.child}var jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(e){return{baseLanes:e,cachePool:Ad()}}function Lc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=pa),e}function Gh(e,t,n){var l=t.pendingProps,i=!1,c=(t.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(yt.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Be){if(i?En(t):_n(),Be){var h=ut,E;if(E=h){e:{for(E=h,h=Ua;E.nodeType!==8;){if(!h){h=null;break e}if(E=Da(E.nextSibling),E===null){h=null;break e}}h=E}h!==null?(t.memoizedState={dehydrated:h,treeContext:Jn!==null?{id:Wa,overflow:Ka}:null,retryLane:536870912,hydrationErrors:null},E=Jt(18,null,null,0),E.stateNode=h,E.return=t,t.child=E,Yt=t,ut=null,E=!0):E=!1}E||tl(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Es(h)?t.lanes=32:t.lanes=536870912,null;tn(t)}return h=l.children,l=l.fallback,i?(_n(),i=t.mode,h=wu({mode:"hidden",children:h},i),l=Kn(l,i,n,null),h.return=t,l.return=t,h.sibling=l,t.child=h,i=t.child,i.memoizedState=Uc(n),i.childLanes=Lc(e,f,n),t.memoizedState=jc,l):(En(t),Yc(t,h))}if(E=e.memoizedState,E!==null&&(h=E.dehydrated,h!==null)){if(c)t.flags&256?(En(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState!==null?(_n(),t.child=e.child,t.flags|=128,t=null):(_n(),i=l.fallback,h=t.mode,l=wu({mode:"visible",children:l.children},h),i=Kn(i,h,n,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,Gl(t,e.child,null,n),l=t.child,l.memoizedState=Uc(n),l.childLanes=Lc(e,f,n),t.memoizedState=jc,t=i);else if(En(t),Es(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var C=f.dgst;f=C,l=Error(o(419)),l.stack="",l.digest=f,Rr({value:l,source:null,stack:null}),t=kc(e,t,n)}else if(Et||jr(e,t,n,!1),f=(n&e.childLanes)!==0,Et||f){if(f=Ke,f!==null&&(l=n&-n,l=(l&42)!==0?1:xl(l),l=(l&(f.suspendedLanes|n))!==0?0:l,l!==0&&l!==E.retryLane))throw E.retryLane=l,Bl(e,l),na(f,e,l),Hh;h.data==="$?"||rs(),t=kc(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,ut=Da(h.nextSibling),Yt=t,Be=!0,el=null,Ua=!1,e!==null&&(ma[ga++]=Wa,ma[ga++]=Ka,ma[ga++]=Jn,Wa=e.id,Ka=e.overflow,Jn=t),t=Yc(t,l.children),t.flags|=4096);return t}return i?(_n(),i=l.fallback,h=t.mode,E=e.child,C=E.sibling,l=Fa(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,C!==null?i=Fa(C,i):(i=Kn(i,h,n,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,h=e.child.memoizedState,h===null?h=Uc(n):(E=h.cachePool,E!==null?(C=pt._currentValue,E=E.parent!==C?{parent:C,pool:C}:E):E=Ad(),h={baseLanes:h.baseLanes|n,cachePool:E}),i.memoizedState=h,i.childLanes=Lc(e,f,n),t.memoizedState=jc,l):(En(t),n=e.child,e=n.sibling,n=Fa(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Yc(e,t){return t=wu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wu(e,t){return e=Jt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function kc(e,t,n){return Gl(t,e.child,null,n),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vh(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),rc(e.return,t,n)}function qc(e,t,n,l,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=n,c.tailMode=i)}function Xh(e,t,n){var l=t.pendingProps,i=l.revealOrder,c=l.tail;if(Mt(e,t,l.children,n),l=yt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vh(e,n,t);else if(e.tag===19)Vh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(V(yt,l),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Su(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qc(t,!1,i,n,c);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Su(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qc(t,!0,n,null,c);break;case"together":qc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(jr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Fa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&lu(e)))}function sy(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),pn(t,pt,e.memoizedState.cache),Hr();break;case 27:case 5:St(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:pn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(En(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Gh(e,t,n):(En(t),e=an(e,t,n),e!==null?e.sibling:null);En(t);break;case 19:var i=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(jr(e,t,n,!1),l=(n&t.childLanes)!==0),i){if(l)return Xh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(yt,yt.current),l)break;return null;case 22:case 23:return t.lanes=0,Lh(e,t,n);case 24:pn(t,pt,e.memoizedState.cache)}return an(e,t,n)}function Qh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Et=!0;else{if(!Pc(e,n)&&(t.flags&128)===0)return Et=!1,sy(e,t,n);Et=(e.flags&131072)!==0}else Et=!1,Be&&(t.flags&1048576)!==0&&_d(t,nu,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,i=l._init;if(l=i(l._payload),t.type=l,typeof l=="function")Jo(l)?(e=il(l,e),t.tag=1,t=qh(null,t,l,e,n)):(t.tag=0,t=Rc(null,t,l,e,n));else{if(l!=null){if(i=l.$$typeof,i===te){t.tag=11,t=Rh(null,t,l,e,n);break e}else if(i===ne){t.tag=14,t=jh(null,t,l,e,n);break e}}throw t=rt(l)||l,Error(o(306,t,""))}}return t;case 0:return Rc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,i=il(l,t.pendingProps),qh(e,t,l,i,n);case 3:e:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var c=t.memoizedState;i=c.element,dc(e,t),Gr(t,l,null,n);var f=t.memoizedState;if(l=f.cache,pn(t,pt,l),l!==c.cache&&ic(t,[pt],n,!0),Pr(),l=f.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Ph(e,t,l,n);break e}else if(l!==i){i=da(Error(o(424)),t),Rr(i),t=Ph(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ut=Da(e.firstChild),Yt=t,Be=!0,el=null,Ua=!0,n=$h(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Hr(),l===i){t=an(e,t,n);break e}Mt(e,t,l,n)}t=t.child}return t;case 26:return _u(e,t),e===null?(n=Km(t.type,null,t.pendingProps,null))?t.memoizedState=n:Be||(n=t.type,e=t.pendingProps,l=Uu(ae.current).createElement(n),l[nt]=t,l[Ct]=e,At(l,n,e),ht(l),t.stateNode=l):t.memoizedState=Km(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return St(t),e===null&&Be&&(l=t.stateNode=Zm(t.type,t.pendingProps,ae.current),Yt=t,Ua=!0,i=ut,Cn(t.type)?(_s=i,ut=Da(l.firstChild)):ut=i),Mt(e,t,t.pendingProps.children,n),_u(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Be&&((i=l=ut)&&(l=Uy(l,t.type,t.pendingProps,Ua),l!==null?(t.stateNode=l,Yt=t,ut=Da(l.firstChild),Ua=!1,i=!0):i=!1),i||tl(t)),St(t),i=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,l=c.children,bs(i,c)?l=null:f!==null&&bs(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=yc(e,t,ay,null,null,n),di._currentValue=i),_u(e,t),Mt(e,t,l,n),t.child;case 6:return e===null&&Be&&((e=n=ut)&&(n=Ly(n,t.pendingProps,Ua),n!==null?(t.stateNode=n,Yt=t,ut=null,e=!0):e=!1),e||tl(t)),null;case 13:return Gh(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Gl(t,null,l,n):Mt(e,t,l,n),t.child;case 11:return Rh(e,t,t.type,t.pendingProps,n);case 7:return Mt(e,t,t.pendingProps,n),t.child;case 8:return Mt(e,t,t.pendingProps.children,n),t.child;case 12:return Mt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,pn(t,t.type,l.value),Mt(e,t,l.children,n),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,nl(t),i=zt(i),l=l(i),t.flags|=1,Mt(e,t,l,n),t.child;case 14:return jh(e,t,t.type,t.pendingProps,n);case 15:return Uh(e,t,t.type,t.pendingProps,n);case 19:return Xh(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=wu(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Fa(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Lh(e,t,n);case 24:return nl(t),l=zt(pt),e===null?(i=cc(),i===null&&(i=Ke,c=uc(),i.pooledCache=c,c.refCount++,c!==null&&(i.pooledCacheLanes|=n),i=c),t.memoizedState={parent:l,cache:i},fc(t),pn(t,pt,i)):((e.lanes&n)!==0&&(dc(e,t),Gr(t,null,null,n),Pr()),i=e.memoizedState,c=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),pn(t,pt,l)):(l=c.cache,pn(t,pt,l),l!==i.cache&&ic(t,[pt],n,!0))),Mt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function nn(e){e.flags|=4}function Zh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!a0(t)){if(t=va.current,t!==null&&((Me&4194048)===Me?La!==null:(Me&62914560)!==Me&&(Me&536870912)===0||t!==La))throw kr=sc,Dd;e.flags|=8192}}function $u(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ra():536870912,e.lanes|=t,Zl|=t)}function Kr(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function fy(e,t,n){var l=t.pendingProps;switch(ac(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return lt(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ia(pt),Xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zr(t)?nn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nd())),lt(t),null;case 26:return n=t.memoizedState,e===null?(nn(t),n!==null?(lt(t),Zh(t,n)):(lt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(nn(t),lt(t),Zh(t,n)):(lt(t),t.flags&=-16777217):(e.memoizedProps!==l&&nn(t),lt(t),t.flags&=-16777217),null;case 27:Fe(t),n=ae.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&nn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return lt(t),null}e=I.current,zr(t)?wd(t):(e=Zm(i,l,n),t.stateNode=e,nn(t))}return lt(t),null;case 5:if(Fe(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&nn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return lt(t),null}if(e=I.current,zr(t))wd(t);else{switch(i=Uu(ae.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?i.createElement(n,{is:l.is}):i.createElement(n)}}e[nt]=t,e[Ct]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(At(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&nn(t)}}return lt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&nn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ae.current,zr(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,i=Yt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[nt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||km(e.nodeValue,n)),e||tl(t)}else e=Uu(e).createTextNode(l),e[nt]=t,t.stateNode=e}return lt(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=zr(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[nt]=t}else Hr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),i=!1}else i=Nd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(tn(t),t):(tn(t),null)}if(tn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool);var c=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==i&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),$u(t,t.updateQueue),lt(t),null;case 4:return Xe(),e===null&&ms(t.stateNode.containerInfo),lt(t),null;case 10:return Ia(t.type),lt(t),null;case 19:if(Q(yt),i=t.memoizedState,i===null)return lt(t),null;if(l=(t.flags&128)!==0,c=i.rendering,c===null)if(l)Kr(i,!1);else{if(ot!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Su(e),c!==null){for(t.flags|=128,Kr(i,!1),e=c.updateQueue,t.updateQueue=e,$u(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ed(n,e),n=n.sibling;return V(yt,yt.current&1|2),t.child}e=e.sibling}i.tail!==null&&Je()>Mu&&(t.flags|=128,l=!0,Kr(i,!1),t.lanes=4194304)}else{if(!l)if(e=Su(c),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,$u(t,e),Kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Be)return lt(t),null}else 2*Je()-i.renderingStartTime>Mu&&n!==536870912&&(t.flags|=128,l=!0,Kr(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Je(),t.sibling=null,e=yt.current,V(yt,l?e&1|2:e&1),t):(lt(t),null);case 22:case 23:return tn(t),vc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),n=t.updateQueue,n!==null&&$u(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Q(ll),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ia(pt),lt(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function dy(e,t){switch(ac(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ia(pt),Xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fe(t),null;case 13:if(tn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(yt),null;case 4:return Xe(),null;case 10:return Ia(t.type),null;case 22:case 23:return tn(t),vc(),e!==null&&Q(ll),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ia(pt),null;case 25:return null;default:return null}}function Fh(e,t){switch(ac(t),t.tag){case 3:Ia(pt),Xe();break;case 26:case 27:case 5:Fe(t);break;case 4:Xe();break;case 13:tn(t);break;case 19:Q(yt);break;case 10:Ia(t.type);break;case 22:case 23:tn(t),vc(),e!==null&&Q(ll);break;case 24:Ia(pt)}}function Jr(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){l=void 0;var c=n.create,f=n.inst;l=c(),f.destroy=l}n=n.next}while(n!==i)}}catch(h){Ze(t,t.return,h)}}function wn(e,t,n){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var c=i.next;l=c;do{if((l.tag&e)===e){var f=l.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=t;var E=n,C=h;try{C()}catch(L){Ze(i,E,L)}}}l=l.next}while(l!==c)}}catch(L){Ze(t,t.return,L)}}function Wh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{jd(t,n)}catch(l){Ze(e,e.return,l)}}}function Kh(e,t,n){n.props=il(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ze(e,t,l)}}function Ir(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(i){Ze(e,t,i)}}function Ya(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(i){Ze(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Ze(e,t,i)}else n.current=null}function Jh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(i){Ze(e,e.return,i)}}function Gc(e,t,n){try{var l=e.stateNode;By(l,e.type,n,t),l[Ct]=t}catch(i){Ze(e,e.return,i)}}function Ih(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cn(e.type)||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ih(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ju));else if(l!==4&&(l===27&&Cn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Nu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Cn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Nu(e,t,n),e=e.sibling;e!==null;)Nu(e,t,n),e=e.sibling}function em(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);At(t,l,n),t[nt]=e,t[Ct]=n}catch(c){Ze(e,e.return,c)}}var ln=!1,ft=!1,Qc=!1,tm=typeof WeakSet=="function"?WeakSet:Set,_t=null;function hy(e,t){if(e=e.containerInfo,ps=Gu,e=dd(e),Vo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var i=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var f=0,h=-1,E=-1,C=0,L=0,P=e,z=null;t:for(;;){for(var H;P!==n||i!==0&&P.nodeType!==3||(h=f+i),P!==c||l!==0&&P.nodeType!==3||(E=f+l),P.nodeType===3&&(f+=P.nodeValue.length),(H=P.firstChild)!==null;)z=P,P=H;for(;;){if(P===e)break t;if(z===n&&++C===i&&(h=f),z===c&&++L===l&&(E=f),(H=P.nextSibling)!==null)break;P=z,z=P.parentNode}P=H}n=h===-1||E===-1?null:{start:h,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(ys={focusedElem:e,selectionRange:n},Gu=!1,_t=t;_t!==null;)if(t=_t,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,_t=e;else for(;_t!==null;){switch(t=_t,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,i=c.memoizedProps,c=c.memoizedState,l=n.stateNode;try{var me=il(n.type,i,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(me,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Ze(n,n.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)xs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,_t=e;break}_t=t.return}}function am(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:$n(e,n),l&4&&Jr(5,n);break;case 1:if($n(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Ze(n,n.return,f)}else{var i=il(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ze(n,n.return,f)}}l&64&&Wh(n),l&512&&Ir(n,n.return);break;case 3:if($n(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{jd(e,t)}catch(f){Ze(n,n.return,f)}}break;case 27:t===null&&l&4&&em(n);case 26:case 5:$n(e,n),t===null&&l&4&&Jh(n),l&512&&Ir(n,n.return);break;case 12:$n(e,n);break;case 13:$n(e,n),l&4&&rm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ey.bind(null,n),Yy(e,n))));break;case 22:if(l=n.memoizedState!==null||ln,!l){t=t!==null&&t.memoizedState!==null||ft,i=ln;var c=ft;ln=l,(ft=t)&&!c?Nn(e,n,(n.subtreeFlags&8772)!==0):$n(e,n),ln=i,ft=c}break;case 30:break;default:$n(e,n)}}function nm(e){var t=e.alternate;t!==null&&(e.alternate=null,nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Sr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tt=null,Vt=!1;function rn(e,t,n){for(n=n.child;n!==null;)lm(e,t,n),n=n.sibling}function lm(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Ha,n)}catch{}switch(n.tag){case 26:ft||Ya(n,t),rn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ft||Ya(n,t);var l=tt,i=Vt;Cn(n.type)&&(tt=n.stateNode,Vt=!1),rn(e,t,n),oi(n.stateNode),tt=l,Vt=i;break;case 5:ft||Ya(n,t);case 6:if(l=tt,i=Vt,tt=null,rn(e,t,n),tt=l,Vt=i,tt!==null)if(Vt)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(n.stateNode)}catch(c){Ze(n,t,c)}else try{tt.removeChild(n.stateNode)}catch(c){Ze(n,t,c)}break;case 18:tt!==null&&(Vt?(e=tt,Xm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vi(e)):Xm(tt,n.stateNode));break;case 4:l=tt,i=Vt,tt=n.stateNode.containerInfo,Vt=!0,rn(e,t,n),tt=l,Vt=i;break;case 0:case 11:case 14:case 15:ft||wn(2,n,t),ft||wn(4,n,t),rn(e,t,n);break;case 1:ft||(Ya(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Kh(n,t,l)),rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:ft=(l=ft)||n.memoizedState!==null,rn(e,t,n),ft=l;break;default:rn(e,t,n)}}function rm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vi(e)}catch(n){Ze(t,t.return,n)}}function my(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tm),t;default:throw Error(o(435,e.tag))}}function Zc(e,t){var n=my(e);t.forEach(function(l){var i=_y.bind(null,e,l);n.has(l)||(n.add(l),l.then(i,i))})}function It(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l],c=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(Cn(h.type)){tt=h.stateNode,Vt=!1;break e}break;case 5:tt=h.stateNode,Vt=!1;break e;case 3:case 4:tt=h.stateNode.containerInfo,Vt=!0;break e}h=h.return}if(tt===null)throw Error(o(160));lm(c,f,i),tt=null,Vt=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)im(t,e),t=t.sibling}var Aa=null;function im(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:It(t,e),ea(e),l&4&&(wn(3,e,e.return),Jr(3,e),wn(5,e,e.return));break;case 1:It(t,e),ea(e),l&512&&(ft||n===null||Ya(n,n.return)),l&64&&ln&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var i=Aa;if(It(t,e),ea(e),l&512&&(ft||n===null||Ya(n,n.return)),l&4){var c=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":c=i.getElementsByTagName("title")[0],(!c||c[Bt]||c[nt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=i.createElement(l),i.head.insertBefore(c,i.querySelector("head > title"))),At(c,l,n),c[nt]=e,ht(c),l=c;break e;case"link":var f=e0("link","href",i).get(l+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(c=f[h],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}c=i.createElement(l),At(c,l,n),i.head.appendChild(c);break;case"meta":if(f=e0("meta","content",i).get(l+(n.content||""))){for(h=0;h<f.length;h++)if(c=f[h],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}c=i.createElement(l),At(c,l,n),i.head.appendChild(c);break;default:throw Error(o(468,l))}c[nt]=e,ht(c),l=c}e.stateNode=l}else t0(i,e.type,e.stateNode);else e.stateNode=Im(i,l,e.memoizedProps);else c!==l?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,l===null?t0(i,e.type,e.stateNode):Im(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Gc(e,e.memoizedProps,n.memoizedProps)}break;case 27:It(t,e),ea(e),l&512&&(ft||n===null||Ya(n,n.return)),n!==null&&l&4&&Gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(It(t,e),ea(e),l&512&&(ft||n===null||Ya(n,n.return)),e.flags&32){i=e.stateNode;try{Lt(i,"")}catch(H){Ze(e,e.return,H)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Gc(e,i,n!==null?n.memoizedProps:i)),l&1024&&(Qc=!0);break;case 6:if(It(t,e),ea(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(H){Ze(e,e.return,H)}}break;case 3:if(ku=null,i=Aa,Aa=Lu(t.containerInfo),It(t,e),Aa=i,ea(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(H){Ze(e,e.return,H)}Qc&&(Qc=!1,um(e));break;case 4:l=Aa,Aa=Lu(e.stateNode.containerInfo),It(t,e),ea(e),Aa=l;break;case 12:It(t,e),ea(e);break;case 13:It(t,e),ea(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(es=Je()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zc(e,l)));break;case 22:i=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,C=ln,L=ft;if(ln=C||i,ft=L||E,It(t,e),ft=L,ln=C,ea(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||E||ln||ft||ul(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(c=E.stateNode,i)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=E.stateNode;var P=E.memoizedProps.style,z=P!=null&&P.hasOwnProperty("display")?P.display:null;h.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(H){Ze(E,E.return,H)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=i?"":E.memoizedProps}catch(H){Ze(E,E.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Zc(e,n))));break;case 19:It(t,e),ea(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zc(e,l)));break;case 30:break;case 21:break;default:It(t,e),ea(e)}}function ea(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Ih(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,c=Vc(e);Nu(e,c,i);break;case 5:var f=n.stateNode;n.flags&32&&(Lt(f,""),n.flags&=-33);var h=Vc(e);Nu(e,h,f);break;case 3:case 4:var E=n.stateNode.containerInfo,C=Vc(e);Xc(e,C,E);break;default:throw Error(o(161))}}catch(L){Ze(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function um(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;um(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $n(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)am(e,t.alternate,t),t=t.sibling}function ul(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wn(4,t,t.return),ul(t);break;case 1:Ya(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Kh(t,t.return,n),ul(t);break;case 27:oi(t.stateNode);case 26:case 5:Ya(t,t.return),ul(t);break;case 22:t.memoizedState===null&&ul(t);break;case 30:ul(t);break;default:ul(t)}e=e.sibling}}function Nn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,c=t,f=c.flags;switch(c.tag){case 0:case 11:case 15:Nn(i,c,n),Jr(4,c);break;case 1:if(Nn(i,c,n),l=c,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){Ze(l,l.return,C)}if(l=c,i=l.updateQueue,i!==null){var h=l.stateNode;try{var E=i.shared.hiddenCallbacks;if(E!==null)for(i.shared.hiddenCallbacks=null,i=0;i<E.length;i++)Rd(E[i],h)}catch(C){Ze(l,l.return,C)}}n&&f&64&&Wh(c),Ir(c,c.return);break;case 27:em(c);case 26:case 5:Nn(i,c,n),n&&l===null&&f&4&&Jh(c),Ir(c,c.return);break;case 12:Nn(i,c,n);break;case 13:Nn(i,c,n),n&&f&4&&rm(i,c);break;case 22:c.memoizedState===null&&Nn(i,c,n),Ir(c,c.return);break;case 30:break;default:Nn(i,c,n)}t=t.sibling}}function Fc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ur(n))}function Wc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ur(e))}function ka(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)om(e,t,n,l),t=t.sibling}function om(e,t,n,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ka(e,t,n,l),i&2048&&Jr(9,t);break;case 1:ka(e,t,n,l);break;case 3:ka(e,t,n,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ur(e)));break;case 12:if(i&2048){ka(e,t,n,l),e=t.stateNode;try{var c=t.memoizedProps,f=c.id,h=c.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Ze(t,t.return,E)}}else ka(e,t,n,l);break;case 13:ka(e,t,n,l);break;case 23:break;case 22:c=t.stateNode,f=t.alternate,t.memoizedState!==null?c._visibility&2?ka(e,t,n,l):ei(e,t):c._visibility&2?ka(e,t,n,l):(c._visibility|=2,Vl(e,t,n,l,(t.subtreeFlags&10256)!==0)),i&2048&&Fc(f,t);break;case 24:ka(e,t,n,l),i&2048&&Wc(t.alternate,t);break;default:ka(e,t,n,l)}}function Vl(e,t,n,l,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,f=t,h=n,E=l,C=f.flags;switch(f.tag){case 0:case 11:case 15:Vl(c,f,h,E,i),Jr(8,f);break;case 23:break;case 22:var L=f.stateNode;f.memoizedState!==null?L._visibility&2?Vl(c,f,h,E,i):ei(c,f):(L._visibility|=2,Vl(c,f,h,E,i)),i&&C&2048&&Fc(f.alternate,f);break;case 24:Vl(c,f,h,E,i),i&&C&2048&&Wc(f.alternate,f);break;default:Vl(c,f,h,E,i)}t=t.sibling}}function ei(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,i=l.flags;switch(l.tag){case 22:ei(n,l),i&2048&&Fc(l.alternate,l);break;case 24:ei(n,l),i&2048&&Wc(l.alternate,l);break;default:ei(n,l)}t=t.sibling}}var ti=8192;function Xl(e){if(e.subtreeFlags&ti)for(e=e.child;e!==null;)cm(e),e=e.sibling}function cm(e){switch(e.tag){case 26:Xl(e),e.flags&ti&&e.memoizedState!==null&&Iy(Aa,e.memoizedState,e.memoizedProps);break;case 5:Xl(e);break;case 3:case 4:var t=Aa;Aa=Lu(e.stateNode.containerInfo),Xl(e),Aa=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ti,ti=16777216,Xl(e),ti=t):Xl(e));break;default:Xl(e)}}function sm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];_t=l,dm(l,e)}sm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fm(e),e=e.sibling}function fm(e){switch(e.tag){case 0:case 11:case 15:ai(e),e.flags&2048&&wn(9,e,e.return);break;case 3:ai(e);break;case 12:ai(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Tu(e)):ai(e);break;default:ai(e)}}function Tu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];_t=l,dm(l,e)}sm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wn(8,t,t.return),Tu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Tu(t));break;default:Tu(t)}e=e.sibling}}function dm(e,t){for(;_t!==null;){var n=_t;switch(n.tag){case 0:case 11:case 15:wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ur(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,_t=l;else e:for(n=e;_t!==null;){l=_t;var i=l.sibling,c=l.return;if(nm(l),l===n){_t=null;break e}if(i!==null){i.return=c,_t=i;break e}_t=c}}}var gy={getCacheForType:function(e){var t=zt(pt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},vy=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ke=null,_e=null,Me=0,Ye=0,ta=null,Tn=!1,Ql=!1,Kc=!1,un=0,ot=0,Mn=0,ol=0,Jc=0,pa=0,Zl=0,ni=null,Xt=null,Ic=!1,es=0,Mu=1/0,Ou=null,On=null,Ot=0,An=null,Fl=null,Wl=0,ts=0,as=null,hm=null,li=0,ns=null;function aa(){if((Le&2)!==0&&Me!==0)return Me&-Me;if(U.T!==null){var e=jl;return e!==0?e:ss()}return Xn()}function mm(){pa===0&&(pa=(Me&536870912)===0||Be?Ft():536870912);var e=va.current;return e!==null&&(e.flags|=32),pa}function na(e,t,n){(e===Ke&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Kl(e,0),Dn(e,Me,pa,!1)),Wt(e,n),((Le&2)===0||e!==Ke)&&(e===Ke&&((Le&2)===0&&(ol|=n),ot===4&&Dn(e,Me,pa,!1)),qa(e))}function gm(e,t,n){if((Le&6)!==0)throw Error(o(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Te(e,t),i=l?by(e,t):is(e,t,!0),c=l;do{if(i===0){Ql&&!l&&Dn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!py(n)){i=is(e,t,!1),c=!1;continue}if(i===2){if(c=t,e.errorRecoveryDisabledLanes&c)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;i=ni;var E=h.current.memoizedState.isDehydrated;if(E&&(Kl(h,f).flags|=256),f=is(h,f,!1),f!==2){if(Kc&&!E){h.errorRecoveryDisabledLanes|=c,ol|=c,i=4;break e}c=Xt,Xt=i,c!==null&&(Xt===null?Xt=c:Xt.push.apply(Xt,c))}i=f}if(c=!1,i!==2)continue}}if(i===1){Kl(e,0),Dn(e,t,0,!0);break}e:{switch(l=e,c=i,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Dn(l,t,pa,!Tn);break e;case 2:Xt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=es+300-Je(),10<i)){if(Dn(l,t,pa,!Tn),Qt(l,0,!0)!==0)break e;l.timeoutHandle=Gm(vm.bind(null,l,n,Xt,Ou,Ic,t,pa,ol,Zl,Tn,c,2,-0,0),i);break e}vm(l,n,Xt,Ou,Ic,t,pa,ol,Zl,Tn,c,0,-0,0)}}break}while(!0);qa(e)}function vm(e,t,n,l,i,c,f,h,E,C,L,P,z,H){if(e.timeoutHandle=-1,P=t.subtreeFlags,(P&8192||(P&16785408)===16785408)&&(fi={stylesheets:null,count:0,unsuspend:Jy},cm(t),P=e1(),P!==null)){e.cancelPendingCommit=P(_m.bind(null,e,t,c,n,l,i,f,h,E,L,1,z,H)),Dn(e,c,f,!C);return}_m(e,t,c,n,l,i,f,h,E)}function py(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var i=n[l],c=i.getSnapshot;i=i.value;try{if(!Kt(c(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t,n,l){t&=~Jc,t&=~ol,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var c=31-dt(i),f=1<<c;l[c]=-1,i&=~f}n!==0&&ua(e,n,t)}function Au(){return(Le&6)===0?(ri(0),!1):!0}function ls(){if(_e!==null){if(Ye===0)var e=_e.return;else e=_e,Ja=al=null,xc(e),Pl=null,Fr=0,e=_e;for(;e!==null;)Fh(e.alternate,e),e=e.return;_e=null}}function Kl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Hy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ls(),Ke=e,_e=n=Fa(e.current,null),Me=t,Ye=0,ta=null,Tn=!1,Ql=Te(e,t),Kc=!1,Zl=pa=Jc=ol=Mn=ot=0,Xt=ni=null,Ic=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-dt(l),c=1<<i;t|=e[i],l&=~c}return un=t,Ji(),n}function pm(e,t){xe=null,U.H=pu,t===Yr||t===uu?(t=zd(),Ye=3):t===Dd?(t=zd(),Ye=4):Ye=t===Hh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ta=t,_e===null&&(ot=1,Eu(e,da(t,e.current)))}function ym(){var e=U.H;return U.H=pu,e===null?pu:e}function bm(){var e=U.A;return U.A=gy,e}function rs(){ot=4,Tn||(Me&4194048)!==Me&&va.current!==null||(Ql=!0),(Mn&134217727)===0&&(ol&134217727)===0||Ke===null||Dn(Ke,Me,pa,!1)}function is(e,t,n){var l=Le;Le|=2;var i=ym(),c=bm();(Ke!==e||Me!==t)&&(Ou=null,Kl(e,t)),t=!1;var f=ot;e:do try{if(Ye!==0&&_e!==null){var h=_e,E=ta;switch(Ye){case 8:ls(),f=6;break e;case 3:case 2:case 9:case 6:va.current===null&&(t=!0);var C=Ye;if(Ye=0,ta=null,Jl(e,h,E,C),n&&Ql){f=0;break e}break;default:C=Ye,Ye=0,ta=null,Jl(e,h,E,C)}}yy(),f=ot;break}catch(L){pm(e,L)}while(!0);return t&&e.shellSuspendCounter++,Ja=al=null,Le=l,U.H=i,U.A=c,_e===null&&(Ke=null,Me=0,Ji()),f}function yy(){for(;_e!==null;)Sm(_e)}function by(e,t){var n=Le;Le|=2;var l=ym(),i=bm();Ke!==e||Me!==t?(Ou=null,Mu=Je()+500,Kl(e,t)):Ql=Te(e,t);e:do try{if(Ye!==0&&_e!==null){t=_e;var c=ta;t:switch(Ye){case 1:Ye=0,ta=null,Jl(e,t,c,1);break;case 2:case 9:if(Cd(c)){Ye=0,ta=null,xm(t);break}t=function(){Ye!==2&&Ye!==9||Ke!==e||(Ye=7),qa(e)},c.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Cd(c)?(Ye=0,ta=null,xm(t)):(Ye=0,ta=null,Jl(e,t,c,7));break;case 5:var f=null;switch(_e.tag){case 26:f=_e.memoizedState;case 5:case 27:var h=_e;if(!f||a0(f)){Ye=0,ta=null;var E=h.sibling;if(E!==null)_e=E;else{var C=h.return;C!==null?(_e=C,Du(C)):_e=null}break t}}Ye=0,ta=null,Jl(e,t,c,5);break;case 6:Ye=0,ta=null,Jl(e,t,c,6);break;case 8:ls(),ot=6;break e;default:throw Error(o(462))}}Sy();break}catch(L){pm(e,L)}while(!0);return Ja=al=null,U.H=l,U.A=i,Le=n,_e!==null?0:(Ke=null,Me=0,Ji(),ot)}function Sy(){for(;_e!==null&&!Ea();)Sm(_e)}function Sm(e){var t=Qh(e.alternate,e,un);e.memoizedProps=e.pendingProps,t===null?Du(e):_e=t}function xm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=kh(n,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=kh(n,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:xc(t);default:Fh(n,t),t=_e=Ed(t,un),t=Qh(n,t,un)}e.memoizedProps=e.pendingProps,t===null?Du(e):_e=t}function Jl(e,t,n,l){Ja=al=null,xc(t),Pl=null,Fr=0;var i=t.return;try{if(cy(e,i,t,n,Me)){ot=1,Eu(e,da(n,e.current)),_e=null;return}}catch(c){if(i!==null)throw _e=i,c;ot=1,Eu(e,da(n,e.current)),_e=null;return}t.flags&32768?(Be||l===1?e=!0:Ql||(Me&536870912)!==0?e=!1:(Tn=e=!0,(l===2||l===9||l===3||l===6)&&(l=va.current,l!==null&&l.tag===13&&(l.flags|=16384))),Em(t,e)):Du(t)}function Du(e){var t=e;do{if((t.flags&32768)!==0){Em(t,Tn);return}e=t.return;var n=fy(t.alternate,t,un);if(n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);ot===0&&(ot=5)}function Em(e,t){do{var n=dy(e.alternate,e);if(n!==null){n.flags&=32767,_e=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){_e=e;return}_e=e=n}while(e!==null);ot=6,_e=null}function _m(e,t,n,l,i,c,f,h,E){e.cancelPendingCommit=null;do Cu();while(Ot!==0);if((Le&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Wo,fn(e,n,c,f,h,E),e===Ke&&(_e=Ke=null,Me=0),Fl=t,An=e,Wl=n,ts=c,as=i,hm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wy(it,function(){return Mm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,i=W.p,W.p=2,f=Le,Le|=4;try{hy(e,t,n)}finally{Le=f,W.p=i,U.T=l}}Ot=1,wm(),$m(),Nm()}}function wm(){if(Ot===1){Ot=0;var e=An,t=Fl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var l=W.p;W.p=2;var i=Le;Le|=4;try{im(t,e);var c=ys,f=dd(e.containerInfo),h=c.focusedElem,E=c.selectionRange;if(f!==h&&h&&h.ownerDocument&&fd(h.ownerDocument.documentElement,h)){if(E!==null&&Vo(h)){var C=E.start,L=E.end;if(L===void 0&&(L=C),"selectionStart"in h)h.selectionStart=C,h.selectionEnd=Math.min(L,h.value.length);else{var P=h.ownerDocument||document,z=P&&P.defaultView||window;if(z.getSelection){var H=z.getSelection(),me=h.textContent.length,fe=Math.min(E.start,me),Ve=E.end===void 0?fe:Math.min(E.end,me);!H.extend&&fe>Ve&&(f=Ve,Ve=fe,fe=f);var O=sd(h,fe),$=sd(h,Ve);if(O&&$&&(H.rangeCount!==1||H.anchorNode!==O.node||H.anchorOffset!==O.offset||H.focusNode!==$.node||H.focusOffset!==$.offset)){var A=P.createRange();A.setStart(O.node,O.offset),H.removeAllRanges(),fe>Ve?(H.addRange(A),H.extend($.node,$.offset)):(A.setEnd($.node,$.offset),H.addRange(A))}}}}for(P=[],H=h;H=H.parentNode;)H.nodeType===1&&P.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<P.length;h++){var k=P[h];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}Gu=!!ps,ys=ps=null}finally{Le=i,W.p=l,U.T=n}}e.current=t,Ot=2}}function $m(){if(Ot===2){Ot=0;var e=An,t=Fl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var l=W.p;W.p=2;var i=Le;Le|=4;try{am(e,t.alternate,t)}finally{Le=i,W.p=l,U.T=n}}Ot=3}}function Nm(){if(Ot===4||Ot===3){Ot=0,Nt();var e=An,t=Fl,n=Wl,l=hm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ot=5:(Ot=0,Fl=An=null,Tm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(On=null),Ra(n),t=t.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Ha,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=U.T,i=W.p,W.p=2,U.T=null;try{for(var c=e.onRecoverableError,f=0;f<l.length;f++){var h=l[f];c(h.value,{componentStack:h.stack})}}finally{U.T=t,W.p=i}}(Wl&3)!==0&&Cu(),qa(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===ns?li++:(li=0,ns=e):li=0,ri(0)}}function Tm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ur(t)))}function Cu(e){return wm(),$m(),Nm(),Mm()}function Mm(){if(Ot!==5)return!1;var e=An,t=ts;ts=0;var n=Ra(Wl),l=U.T,i=W.p;try{W.p=32>n?32:n,U.T=null,n=as,as=null;var c=An,f=Wl;if(Ot=0,Fl=An=null,Wl=0,(Le&6)!==0)throw Error(o(331));var h=Le;if(Le|=4,fm(c.current),om(c,c.current,f,n),Le=h,ri(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Ha,c)}catch{}return!0}finally{W.p=i,U.T=l,Tm(e,t)}}function Om(e,t,n){t=da(n,t),t=Hc(e.stateNode,t,2),e=Sn(e,t,2),e!==null&&(Wt(e,2),qa(e))}function Ze(e,t,n){if(e.tag===3)Om(e,e,n);else for(;t!==null;){if(t.tag===3){Om(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(On===null||!On.has(l))){e=da(n,e),n=Bh(2),l=Sn(t,n,2),l!==null&&(zh(n,l,t,e),Wt(l,2),qa(l));break}}t=t.return}}function us(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new vy;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(n)||(Kc=!0,i.add(n),e=xy.bind(null,e,t,n),t.then(e,e))}function xy(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ke===e&&(Me&n)===n&&(ot===4||ot===3&&(Me&62914560)===Me&&300>Je()-es?(Le&2)===0&&Kl(e,0):Jc|=n,Zl===Me&&(Zl=0)),qa(e)}function Am(e,t){t===0&&(t=ra()),e=Bl(e,t),e!==null&&(Wt(e,t),qa(e))}function Ey(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Am(e,n)}function _y(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Am(e,n)}function wy(e,t){return jt(e,t)}var Bu=null,Il=null,os=!1,zu=!1,cs=!1,cl=0;function qa(e){e!==Il&&e.next===null&&(Il===null?Bu=Il=e:Il=Il.next=e),zu=!0,os||(os=!0,Ny())}function ri(e,t){if(!cs&&zu){cs=!0;do for(var n=!1,l=Bu;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var c=0;else{var f=l.suspendedLanes,h=l.pingedLanes;c=(1<<31-dt(42|e)+1)-1,c&=i&~(f&~h),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,zm(l,c))}else c=Me,c=Qt(l,l===Ke?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Te(l,c)||(n=!0,zm(l,c));l=l.next}while(n);cs=!1}}function $y(){Dm()}function Dm(){zu=os=!1;var e=0;cl!==0&&(zy()&&(e=cl),cl=0);for(var t=Je(),n=null,l=Bu;l!==null;){var i=l.next,c=Cm(l,t);c===0?(l.next=null,n===null?Bu=i:n.next=i,i===null&&(Il=n)):(n=l,(e!==0||(c&3)!==0)&&(zu=!0)),l=i}ri(e)}function Cm(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var f=31-dt(c),h=1<<f,E=i[f];E===-1?((h&n)===0||(h&l)!==0)&&(i[f]=Zt(h,t)):E<=t&&(e.expiredLanes|=h),c&=~h}if(t=Ke,n=Me,n=Qt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&za(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Te(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&za(l),Ra(n)){case 2:case 8:n=at;break;case 32:n=it;break;case 268435456:n=Sl;break;default:n=it}return l=Bm.bind(null,e),n=jt(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&za(l),e.callbackPriority=2,e.callbackNode=null,2}function Bm(e,t){if(Ot!==0&&Ot!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Cu()&&e.callbackNode!==n)return null;var l=Me;return l=Qt(e,e===Ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(gm(e,l,t),Cm(e,Je()),e.callbackNode!=null&&e.callbackNode===n?Bm.bind(null,e):null)}function zm(e,t){if(Cu())return null;gm(e,t,!0)}function Ny(){Ry(function(){(Le&6)!==0?jt(Ut,$y):Dm()})}function ss(){return cl===0&&(cl=Ft()),cl}function Hm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vi(""+e)}function Rm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ty(e,t,n,l,i){if(t==="submit"&&n&&n.stateNode===i){var c=Hm((i[Ct]||null).action),f=l.submitter;f&&(t=(t=f[Ct]||null)?Hm(t.formAction):f.getAttribute("formAction"),t!==null&&(c=t,f=null));var h=new Fi("action","action",null,l,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(cl!==0){var E=f?Rm(i,f):new FormData(i);Ac(n,{pending:!0,data:E,method:i.method,action:c},null,E)}}else typeof c=="function"&&(h.preventDefault(),E=f?Rm(i,f):new FormData(i),Ac(n,{pending:!0,data:E,method:i.method,action:c},c,E))},currentTarget:i}]})}}for(var fs=0;fs<Fo.length;fs++){var ds=Fo[fs],My=ds.toLowerCase(),Oy=ds[0].toUpperCase()+ds.slice(1);Oa(My,"on"+Oy)}Oa(gd,"onAnimationEnd"),Oa(vd,"onAnimationIteration"),Oa(pd,"onAnimationStart"),Oa("dblclick","onDoubleClick"),Oa("focusin","onFocus"),Oa("focusout","onBlur"),Oa(Xp,"onTransitionRun"),Oa(Qp,"onTransitionStart"),Oa(Zp,"onTransitionCancel"),Oa(yd,"onTransitionEnd"),fa("onMouseEnter",["mouseout","mouseover"]),fa("onMouseLeave",["mouseout","mouseover"]),fa("onPointerEnter",["pointerout","pointerover"]),fa("onPointerLeave",["pointerout","pointerover"]),Na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Na("onBeforeInput",["compositionend","keypress","textInput","paste"]),Na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function jm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],i=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var f=l.length-1;0<=f;f--){var h=l[f],E=h.instance,C=h.currentTarget;if(h=h.listener,E!==c&&i.isPropagationStopped())break e;c=h,i.currentTarget=C;try{c(i)}catch(L){xu(L)}i.currentTarget=null,c=E}else for(f=0;f<l.length;f++){if(h=l[f],E=h.instance,C=h.currentTarget,h=h.listener,E!==c&&i.isPropagationStopped())break e;c=h,i.currentTarget=C;try{c(i)}catch(L){xu(L)}i.currentTarget=null,c=E}}}}function we(e,t){var n=t[El];n===void 0&&(n=t[El]=new Set);var l=e+"__bubble";n.has(l)||(Um(t,e,2,!1),n.add(l))}function hs(e,t,n){var l=0;t&&(l|=4),Um(n,e,l,t)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function ms(e){if(!e[Hu]){e[Hu]=!0,ji.forEach(function(n){n!=="selectionchange"&&(Ay.has(n)||hs(n,!1,e),hs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hu]||(t[Hu]=!0,hs("selectionchange",!1,t))}}function Um(e,t,n,l){switch(o0(t)){case 2:var i=n1;break;case 8:i=l1;break;default:i=Ms}n=i.bind(null,t,n,e),i=void 0,!Ro||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gs(e,t,n,l,i){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var h=l.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=l.return;f!==null;){var E=f.tag;if((E===3||E===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=Xa(h),f===null)return;if(E=f.tag,E===5||E===6||E===26||E===27){l=c=f;continue e}h=h.parentNode}}l=l.return}Vf(function(){var C=c,L=zo(n),P=[];e:{var z=bd.get(e);if(z!==void 0){var H=Fi,me=e;switch(e){case"keypress":if(Qi(n)===0)break e;case"keydown":case"keyup":H=wp;break;case"focusin":me="focus",H=Yo;break;case"focusout":me="blur",H=Yo;break;case"beforeblur":case"afterblur":H=Yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Tp;break;case gd:case vd:case pd:H=gp;break;case yd:H=Op;break;case"scroll":case"scrollend":H=sp;break;case"wheel":H=Dp;break;case"copy":case"cut":case"paste":H=pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Wf;break;case"toggle":case"beforetoggle":H=Bp}var fe=(t&4)!==0,Ve=!fe&&(e==="scroll"||e==="scrollend"),O=fe?z!==null?z+"Capture":null:z;fe=[];for(var $=C,A;$!==null;){var k=$;if(A=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||A===null||O===null||(k=$r($,O),k!=null&&fe.push(ui($,k,A))),Ve)break;$=$.return}0<fe.length&&(z=new H(z,me,null,n,L),P.push({event:z,listeners:fe}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",z&&n!==Bo&&(me=n.relatedTarget||n.fromElement)&&(Xa(me)||me[$a]))break e;if((H||z)&&(z=L.window===L?L:(z=L.ownerDocument)?z.defaultView||z.parentWindow:window,H?(me=n.relatedTarget||n.toElement,H=C,me=me?Xa(me):null,me!==null&&(Ve=d(me),fe=me.tag,me!==Ve||fe!==5&&fe!==27&&fe!==6)&&(me=null)):(H=null,me=C),H!==me)){if(fe=Zf,k="onMouseLeave",O="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Wf,k="onPointerLeave",O="onPointerEnter",$="pointer"),Ve=H==null?z:Qa(H),A=me==null?z:Qa(me),z=new fe(k,$+"leave",H,n,L),z.target=Ve,z.relatedTarget=A,k=null,Xa(L)===C&&(fe=new fe(O,$+"enter",me,n,L),fe.target=A,fe.relatedTarget=Ve,k=fe),Ve=k,H&&me)t:{for(fe=H,O=me,$=0,A=fe;A;A=er(A))$++;for(A=0,k=O;k;k=er(k))A++;for(;0<$-A;)fe=er(fe),$--;for(;0<A-$;)O=er(O),A--;for(;$--;){if(fe===O||O!==null&&fe===O.alternate)break t;fe=er(fe),O=er(O)}fe=null}else fe=null;H!==null&&Lm(P,z,H,fe,!1),me!==null&&Ve!==null&&Lm(P,Ve,me,fe,!0)}}e:{if(z=C?Qa(C):window,H=z.nodeName&&z.nodeName.toLowerCase(),H==="select"||H==="input"&&z.type==="file")var le=ld;else if(ad(z))if(rd)le=Pp;else{le=kp;var Ee=Yp}else H=z.nodeName,!H||H.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?C&&Co(C.elementType)&&(le=ld):le=qp;if(le&&(le=le(e,C))){nd(P,le,n,L);break e}Ee&&Ee(e,z,C),e==="focusout"&&C&&z.type==="number"&&C.memoizedProps.value!=null&&Qe(z,"number",z.value)}switch(Ee=C?Qa(C):window,e){case"focusin":(ad(Ee)||Ee.contentEditable==="true")&&(Al=Ee,Xo=C,Br=null);break;case"focusout":Br=Xo=Al=null;break;case"mousedown":Qo=!0;break;case"contextmenu":case"mouseup":case"dragend":Qo=!1,hd(P,n,L);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":hd(P,n,L)}var oe;if(qo)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Ol?ed(e,n)&&(de="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(de="onCompositionStart");de&&(Kf&&n.locale!=="ko"&&(Ol||de!=="onCompositionStart"?de==="onCompositionEnd"&&Ol&&(oe=Xf()):(vn=L,jo="value"in vn?vn.value:vn.textContent,Ol=!0)),Ee=Ru(C,de),0<Ee.length&&(de=new Ff(de,e,null,n,L),P.push({event:de,listeners:Ee}),oe?de.data=oe:(oe=td(n),oe!==null&&(de.data=oe)))),(oe=Hp?Rp(e,n):jp(e,n))&&(de=Ru(C,"onBeforeInput"),0<de.length&&(Ee=new Ff("onBeforeInput","beforeinput",null,n,L),P.push({event:Ee,listeners:de}),Ee.data=oe)),Ty(P,e,C,n,L)}jm(P,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ru(e,t){for(var n=t+"Capture",l=[];e!==null;){var i=e,c=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||c===null||(i=$r(e,n),i!=null&&l.unshift(ui(e,i,c)),i=$r(e,t),i!=null&&l.push(ui(e,i,c))),e.tag===3)return l;e=e.return}return[]}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lm(e,t,n,l,i){for(var c=t._reactName,f=[];n!==null&&n!==l;){var h=n,E=h.alternate,C=h.stateNode;if(h=h.tag,E!==null&&E===l)break;h!==5&&h!==26&&h!==27||C===null||(E=C,i?(C=$r(n,c),C!=null&&f.unshift(ui(n,C,E))):i||(C=$r(n,c),C!=null&&f.push(ui(n,C,E)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Dy=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function Ym(e){return(typeof e=="string"?e:""+e).replace(Dy,`
`).replace(Cy,"")}function km(e,t){return t=Ym(t),Ym(e)===t}function ju(){}function Ge(e,t,n,l,i,c){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Lt(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Lt(e,""+l);break;case"className":_l(e,"class",l);break;case"tabIndex":_l(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_l(e,n,l);break;case"style":Nl(e,l,c);break;case"data":if(t!=="object"){_l(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Vi(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ge(e,t,"name",i.name,i,null),Ge(e,t,"formEncType",i.formEncType,i,null),Ge(e,t,"formMethod",i.formMethod,i,null),Ge(e,t,"formTarget",i.formTarget,i,null)):(Ge(e,t,"encType",i.encType,i,null),Ge(e,t,"method",i.method,i,null),Ge(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Vi(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=ju);break;case"onScroll":l!=null&&we("scroll",e);break;case"onScrollEnd":l!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Vi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":we("beforetoggle",e),we("toggle",e),hn(e,"popover",l);break;case"xlinkActuate":Ta(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ta(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ta(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ta(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ta(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ta(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":hn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=op.get(n)||n,hn(e,n,l))}}function vs(e,t,n,l,i,c){switch(n){case"style":Nl(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Lt(e,l):(typeof l=="number"||typeof l=="bigint")&&Lt(e,""+l);break;case"onScroll":l!=null&&we("scroll",e);break;case"onScrollEnd":l!=null&&we("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ui.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),c=e[Ct]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,i),typeof l=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,i);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):hn(e,n,l)}}}function At(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var l=!1,i=!1,c;for(c in n)if(n.hasOwnProperty(c)){var f=n[c];if(f!=null)switch(c){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ge(e,t,c,f,n,null)}}i&&Ge(e,t,"srcSet",n.srcSet,n,null),l&&Ge(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var h=c=f=i=null,E=null,C=null;for(l in n)if(n.hasOwnProperty(l)){var L=n[l];if(L!=null)switch(l){case"name":i=L;break;case"type":f=L;break;case"checked":E=L;break;case"defaultChecked":C=L;break;case"value":c=L;break;case"defaultValue":h=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,t));break;default:Ge(e,t,l,L,n,null)}}ue(e,c,h,E,C,f,i,!1),$l(e);return;case"select":we("invalid",e),l=f=c=null;for(i in n)if(n.hasOwnProperty(i)&&(h=n[i],h!=null))switch(i){case"value":c=h;break;case"defaultValue":f=h;break;case"multiple":l=h;default:Ge(e,t,i,h,n,null)}t=c,n=f,e.multiple=!!l,t!=null?ct(e,!!l,t,!1):n!=null&&ct(e,!!l,n,!0);return;case"textarea":we("invalid",e),c=i=l=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":l=h;break;case"defaultValue":i=h;break;case"children":c=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:Ge(e,t,f,h,n,null)}ja(e,l,i,c),$l(e);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(l=n[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ge(e,t,E,l,n,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(l=0;l<ii.length;l++)we(ii[l],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(l=n[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ge(e,t,C,l,n,null)}return;default:if(Co(t)){for(L in n)n.hasOwnProperty(L)&&(l=n[L],l!==void 0&&vs(e,t,L,l,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(l=n[h],l!=null&&Ge(e,t,h,l,n,null))}function By(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,c=null,f=null,h=null,E=null,C=null,L=null;for(H in n){var P=n[H];if(n.hasOwnProperty(H)&&P!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":E=P;default:l.hasOwnProperty(H)||Ge(e,t,H,null,l,P)}}for(var z in l){var H=l[z];if(P=n[z],l.hasOwnProperty(z)&&(H!=null||P!=null))switch(z){case"type":c=H;break;case"name":i=H;break;case"checked":C=H;break;case"defaultChecked":L=H;break;case"value":f=H;break;case"defaultValue":h=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,t));break;default:H!==P&&Ge(e,t,z,H,l,P)}}se(e,f,h,E,C,L,c,i);return;case"select":H=f=h=z=null;for(c in n)if(E=n[c],n.hasOwnProperty(c)&&E!=null)switch(c){case"value":break;case"multiple":H=E;default:l.hasOwnProperty(c)||Ge(e,t,c,null,l,E)}for(i in l)if(c=l[i],E=n[i],l.hasOwnProperty(i)&&(c!=null||E!=null))switch(i){case"value":z=c;break;case"defaultValue":h=c;break;case"multiple":f=c;default:c!==E&&Ge(e,t,i,c,l,E)}t=h,n=f,l=H,z!=null?ct(e,!!n,z,!1):!!l!=!!n&&(t!=null?ct(e,!!n,t,!0):ct(e,!!n,n?[]:"",!1));return;case"textarea":H=z=null;for(h in n)if(i=n[h],n.hasOwnProperty(h)&&i!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Ge(e,t,h,null,l,i)}for(f in l)if(i=l[f],c=n[f],l.hasOwnProperty(f)&&(i!=null||c!=null))switch(f){case"value":z=i;break;case"defaultValue":H=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==c&&Ge(e,t,f,i,l,c)}gn(e,z,H);return;case"option":for(var me in n)if(z=n[me],n.hasOwnProperty(me)&&z!=null&&!l.hasOwnProperty(me))switch(me){case"selected":e.selected=!1;break;default:Ge(e,t,me,null,l,z)}for(E in l)if(z=l[E],H=n[E],l.hasOwnProperty(E)&&z!==H&&(z!=null||H!=null))switch(E){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ge(e,t,E,z,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)z=n[fe],n.hasOwnProperty(fe)&&z!=null&&!l.hasOwnProperty(fe)&&Ge(e,t,fe,null,l,z);for(C in l)if(z=l[C],H=n[C],l.hasOwnProperty(C)&&z!==H&&(z!=null||H!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:Ge(e,t,C,z,l,H)}return;default:if(Co(t)){for(var Ve in n)z=n[Ve],n.hasOwnProperty(Ve)&&z!==void 0&&!l.hasOwnProperty(Ve)&&vs(e,t,Ve,void 0,l,z);for(L in l)z=l[L],H=n[L],!l.hasOwnProperty(L)||z===H||z===void 0&&H===void 0||vs(e,t,L,z,l,H);return}}for(var O in n)z=n[O],n.hasOwnProperty(O)&&z!=null&&!l.hasOwnProperty(O)&&Ge(e,t,O,null,l,z);for(P in l)z=l[P],H=n[P],!l.hasOwnProperty(P)||z===H||z==null&&H==null||Ge(e,t,P,z,l,H)}var ps=null,ys=null;function Uu(e){return e.nodeType===9?e:e.ownerDocument}function qm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ss=null;function zy(){var e=window.event;return e&&e.type==="popstate"?e===Ss?!1:(Ss=e,!0):(Ss=null,!1)}var Gm=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(e){return Vm.resolve(null).then(e).catch(jy)}:Gm;function jy(e){setTimeout(function(){throw e})}function Cn(e){return e==="head"}function Xm(e,t){var n=t,l=0,i=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(0<l&&8>l){n=l;var f=e.ownerDocument;if(n&1&&oi(f.documentElement),n&2&&oi(f.body),n&4)for(n=f.head,oi(n),f=n.firstChild;f;){var h=f.nextSibling,E=f.nodeName;f[Bt]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(i===0){e.removeChild(c),vi(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:l=n.charCodeAt(0)-48;else l=0;n=c}while(n);vi(t)}function xs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xs(n),Sr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Uy(e,t,n,l){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Bt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Da(e.nextSibling),e===null)break}return null}function Ly(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Da(e.nextSibling),e===null))return null;return e}function Es(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Yy(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Da(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var _s=null;function Qm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Zm(e,t,n){switch(t=Uu(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function oi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Sr(e)}var ya=new Map,Fm=new Set;function Lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var on=W.d;W.d={f:ky,r:qy,D:Py,C:Gy,L:Vy,m:Xy,X:Zy,S:Qy,M:Fy};function ky(){var e=on.f(),t=Au();return e||t}function qy(e){var t=sa(e);t!==null&&t.tag===5&&t.type==="form"?gh(t):on.r(e)}var tr=typeof document>"u"?null:document;function Wm(e,t,n){var l=tr;if(l&&typeof t=="string"&&t){var i=F(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Fm.has(i)||(Fm.add(i),e={rel:e,crossOrigin:n,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),At(t,"link",e),ht(t),l.head.appendChild(t)))}}function Py(e){on.D(e),Wm("dns-prefetch",e,null)}function Gy(e,t){on.C(e,t),Wm("preconnect",e,t)}function Vy(e,t,n){on.L(e,t,n);var l=tr;if(l&&e&&t){var i='link[rel="preload"][as="'+F(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+F(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+F(n.imageSizes)+'"]')):i+='[href="'+F(e)+'"]';var c=i;switch(t){case"style":c=ar(e);break;case"script":c=nr(e)}ya.has(c)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ya.set(c,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(ci(c))||t==="script"&&l.querySelector(si(c))||(t=l.createElement("link"),At(t,"link",e),ht(t),l.head.appendChild(t)))}}function Xy(e,t){on.m(e,t);var n=tr;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+F(l)+'"][href="'+F(e)+'"]',c=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=nr(e)}if(!ya.has(c)&&(e=b({rel:"modulepreload",href:e},t),ya.set(c,e),n.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(si(c)))return}l=n.createElement("link"),At(l,"link",e),ht(l),n.head.appendChild(l)}}}function Qy(e,t,n){on.S(e,t,n);var l=tr;if(l&&e){var i=dn(l).hoistableStyles,c=ar(e);t=t||"default";var f=i.get(c);if(!f){var h={loading:0,preload:null};if(f=l.querySelector(ci(c)))h.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ya.get(c))&&ws(e,n);var E=f=l.createElement("link");ht(E),At(E,"link",e),E._p=new Promise(function(C,L){E.onload=C,E.onerror=L}),E.addEventListener("load",function(){h.loading|=1}),E.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Yu(f,t,l)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(c,f)}}}function Zy(e,t){on.X(e,t);var n=tr;if(n&&e){var l=dn(n).hoistableScripts,i=nr(e),c=l.get(i);c||(c=n.querySelector(si(i)),c||(e=b({src:e,async:!0},t),(t=ya.get(i))&&$s(e,t),c=n.createElement("script"),ht(c),At(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(i,c))}}function Fy(e,t){on.M(e,t);var n=tr;if(n&&e){var l=dn(n).hoistableScripts,i=nr(e),c=l.get(i);c||(c=n.querySelector(si(i)),c||(e=b({src:e,async:!0,type:"module"},t),(t=ya.get(i))&&$s(e,t),c=n.createElement("script"),ht(c),At(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(i,c))}}function Km(e,t,n,l){var i=(i=ae.current)?Lu(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ar(n.href),n=dn(i).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ar(n.href);var c=dn(i).hoistableStyles,f=c.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,f),(c=i.querySelector(ci(e)))&&!c._p&&(f.instance=c,f.state.loading=5),ya.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ya.set(e,n),c||Wy(i,e,n,f.state))),t&&l===null)throw Error(o(528,""));return f}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=nr(n),n=dn(i).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ar(e){return'href="'+F(e)+'"'}function ci(e){return'link[rel="stylesheet"]['+e+"]"}function Jm(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Wy(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),At(t,"link",n),ht(t),e.head.appendChild(t))}function nr(e){return'[src="'+F(e)+'"]'}function si(e){return"script[async]"+e}function Im(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+F(n.href)+'"]');if(l)return t.instance=l,ht(l),l;var i=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ht(l),At(l,"style",i),Yu(l,n.precedence,e),t.instance=l;case"stylesheet":i=ar(n.href);var c=e.querySelector(ci(i));if(c)return t.state.loading|=4,t.instance=c,ht(c),c;l=Jm(n),(i=ya.get(i))&&ws(l,i),c=(e.ownerDocument||e).createElement("link"),ht(c);var f=c;return f._p=new Promise(function(h,E){f.onload=h,f.onerror=E}),At(c,"link",l),t.state.loading|=4,Yu(c,n.precedence,e),t.instance=c;case"script":return c=nr(n.src),(i=e.querySelector(si(c)))?(t.instance=i,ht(i),i):(l=n,(i=ya.get(c))&&(l=b({},n),$s(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),ht(i),At(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Yu(l,n.precedence,e));return t.instance}function Yu(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,c=i,f=0;f<l.length;f++){var h=l[f];if(h.dataset.precedence===t)c=h;else if(c!==i)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ws(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $s(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ku=null;function e0(e,t,n){if(ku===null){var l=new Map,i=ku=new Map;i.set(n,l)}else i=ku,l=i.get(n),l||(l=new Map,i.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var c=n[i];if(!(c[Bt]||c[nt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var f=c.getAttribute(t)||"";f=e+f;var h=l.get(f);h?h.push(c):l.set(f,[c])}}return l}function t0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ky(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function a0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var fi=null;function Jy(){}function Iy(e,t,n){if(fi===null)throw Error(o(475));var l=fi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=ar(n.href),c=e.querySelector(ci(i));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=qu.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=c,ht(c);return}c=e.ownerDocument||e,n=Jm(n),(i=ya.get(i))&&ws(n,i),c=c.createElement("link"),ht(c);var f=c;f._p=new Promise(function(h,E){f.onload=h,f.onerror=E}),At(c,"link",n),t.instance=c}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=qu.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function e1(){if(fi===null)throw Error(o(475));var e=fi;return e.stylesheets&&e.count===0&&Ns(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ns(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function qu(){if(this.count--,this.count===0){if(this.stylesheets)Ns(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pu=null;function Ns(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pu=new Map,t.forEach(t1,e),Pu=null,qu.call(e))}function t1(e,t){if(!(t.state.loading&4)){var n=Pu.get(e);if(n)var l=n.get(null);else{n=new Map,Pu.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<i.length;c++){var f=i[c];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),l=f)}l&&n.set(null,l)}i=t.instance,f=i.getAttribute("data-precedence"),c=n.get(f)||l,c===l&&n.set(null,i),n.set(f,i),this.count++,l=qu.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),c?c.parentNode.insertBefore(i,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var di={$$typeof:j,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function a1(e,t,n,l,i,c,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ia(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.hiddenUpdates=ia(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=c,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function n0(e,t,n,l,i,c,f,h,E,C,L,P){return e=new a1(e,t,n,f,h,E,C,P),t=1,c===!0&&(t|=24),c=Jt(3,null,null,t),e.current=c,c.stateNode=e,t=uc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:n,cache:t},fc(c),e}function l0(e){return e?(e=zl,e):zl}function r0(e,t,n,l,i,c){i=l0(i),l.context===null?l.context=i:l.pendingContext=i,l=bn(t),l.payload={element:n},c=c===void 0?null:c,c!==null&&(l.callback=c),n=Sn(e,l,t),n!==null&&(na(n,e,t),qr(n,e,t))}function i0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ts(e,t){i0(e,t),(e=e.alternate)&&i0(e,t)}function u0(e){if(e.tag===13){var t=Bl(e,67108864);t!==null&&na(t,e,67108864),Ts(e,67108864)}}var Gu=!0;function n1(e,t,n,l){var i=U.T;U.T=null;var c=W.p;try{W.p=2,Ms(e,t,n,l)}finally{W.p=c,U.T=i}}function l1(e,t,n,l){var i=U.T;U.T=null;var c=W.p;try{W.p=8,Ms(e,t,n,l)}finally{W.p=c,U.T=i}}function Ms(e,t,n,l){if(Gu){var i=Os(l);if(i===null)gs(e,t,l,Vu,n),c0(e,l);else if(i1(i,e,t,n,l))l.stopPropagation();else if(c0(e,l),t&4&&-1<r1.indexOf(e)){for(;i!==null;){var c=sa(i);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var f=Ue(c.pendingLanes);if(f!==0){var h=c;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var E=1<<31-dt(f);h.entanglements[1]|=E,f&=~E}qa(c),(Le&6)===0&&(Mu=Je()+500,ri(0))}}break;case 13:h=Bl(c,2),h!==null&&na(h,c,2),Au(),Ts(c,2)}if(c=Os(l),c===null&&gs(e,t,l,Vu,n),c===i)break;i=c}i!==null&&l.stopPropagation()}else gs(e,t,l,null,n)}}function Os(e){return e=zo(e),As(e)}var Vu=null;function As(e){if(Vu=null,e=Xa(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Vu=e,null}function o0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qt()){case Ut:return 2;case at:return 8;case it:case _a:return 32;case Sl:return 268435456;default:return 32}default:return 32}}var Ds=!1,Bn=null,zn=null,Hn=null,hi=new Map,mi=new Map,Rn=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c0(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function gi(e,t,n,l,i,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:c,targetContainers:[i]},t!==null&&(t=sa(t),t!==null&&u0(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function i1(e,t,n,l,i){switch(t){case"focusin":return Bn=gi(Bn,e,t,n,l,i),!0;case"dragenter":return zn=gi(zn,e,t,n,l,i),!0;case"mouseover":return Hn=gi(Hn,e,t,n,l,i),!0;case"pointerover":var c=i.pointerId;return hi.set(c,gi(hi.get(c)||null,e,t,n,l,i)),!0;case"gotpointercapture":return c=i.pointerId,mi.set(c,gi(mi.get(c)||null,e,t,n,l,i)),!0}return!1}function s0(e){var t=Xa(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,wa(e.priority,function(){if(n.tag===13){var l=aa();l=xl(l);var i=Bl(n,l);i!==null&&na(i,n,l),Ts(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Os(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Bo=l,n.target.dispatchEvent(l),Bo=null}else return t=sa(n),t!==null&&u0(t),e.blockedOn=n,!1;t.shift()}return!0}function f0(e,t,n){Xu(e)&&n.delete(t)}function u1(){Ds=!1,Bn!==null&&Xu(Bn)&&(Bn=null),zn!==null&&Xu(zn)&&(zn=null),Hn!==null&&Xu(Hn)&&(Hn=null),hi.forEach(f0),mi.forEach(f0)}function Qu(e,t){e.blockedOn===t&&(e.blockedOn=null,Ds||(Ds=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,u1)))}var Zu=null;function d0(e){Zu!==e&&(Zu=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Zu===e&&(Zu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(As(l||n)===null)continue;break}var c=sa(n);c!==null&&(e.splice(t,3),t-=3,Ac(c,{pending:!0,data:i,method:n.method,action:l},l,i))}}))}function vi(e){function t(E){return Qu(E,e)}Bn!==null&&Qu(Bn,e),zn!==null&&Qu(zn,e),Hn!==null&&Qu(Hn,e),hi.forEach(t),mi.forEach(t);for(var n=0;n<Rn.length;n++){var l=Rn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&Rn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var i=n[l],c=n[l+1],f=i[Ct]||null;if(typeof c=="function")f||d0(n);else if(f){var h=null;if(c&&c.hasAttribute("formAction")){if(i=c,f=c[Ct]||null)h=f.formAction;else if(As(i)!==null)continue}else h=f.action;typeof h=="function"?n[l+1]=h:(n.splice(l,3),l-=3),d0(n)}}}function Cs(e){this._internalRoot=e}Fu.prototype.render=Cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=aa();r0(n,l,e,t,null,null)},Fu.prototype.unmount=Cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;r0(e.current,2,null,e,null,null),Au(),t[$a]=null}};function Fu(e){this._internalRoot=e}Fu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rn.length&&t!==0&&t<Rn[n].priority;n++);Rn.splice(n,0,e),n===0&&s0(e)}};var h0=r.version;if(h0!=="19.1.0")throw Error(o(527,h0,"19.1.0"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var o1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{Ha=Wu.inject(o1),xt=Wu}catch{}}return yi.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,l="",i=Oh,c=Ah,f=Dh,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=n0(e,1,!1,null,null,n,l,i,c,f,h,null),e[$a]=t.current,ms(e),new Cs(t)},yi.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var l=!1,i="",c=Oh,f=Ah,h=Dh,E=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),t=n0(e,1,!0,t,n??null,l,i,c,f,h,E,C),t.context=l0(null),n=t.current,l=aa(),l=xl(l),i=bn(l),i.callback=null,Sn(n,i,l),n=l,t.current.lanes=n,Wt(t,n),qa(t),e[$a]=t.current,ms(e),new Fu(t)},yi.version="19.1.0",yi}var _0;function S1(){if(_0)return Hs.exports;_0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Hs.exports=b1(),Hs.exports}var x1=S1(),E1=jg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $i(){return $i=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},$i.apply(this,arguments)}var Yn;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(Yn||(Yn={}));const w0="popstate";function _1(a){a===void 0&&(a={});function r(o,s){let{pathname:d,search:m,hash:y}=o.location;return Fs("",{pathname:d,search:m,hash:y},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function u(o,s){return typeof s=="string"?s:Lg(s)}return $1(r,u,null,a)}function bt(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Ug(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function w1(){return Math.random().toString(36).substr(2,8)}function $0(a,r){return{usr:a.state,key:a.key,idx:r}}function Fs(a,r,u,o){return u===void 0&&(u=null),$i({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof r=="string"?vr(r):r,{state:u,key:r&&r.key||o||w1()})}function Lg(a){let{pathname:r="/",search:u="",hash:o=""}=a;return u&&u!=="?"&&(r+=u.charAt(0)==="?"?u:"?"+u),o&&o!=="#"&&(r+=o.charAt(0)==="#"?o:"#"+o),r}function vr(a){let r={};if(a){let u=a.indexOf("#");u>=0&&(r.hash=a.substr(u),a=a.substr(0,u));let o=a.indexOf("?");o>=0&&(r.search=a.substr(o),a=a.substr(0,o)),a&&(r.pathname=a)}return r}function $1(a,r,u,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:d=!1}=o,m=s.history,y=Yn.Pop,g=null,v=b();v==null&&(v=0,m.replaceState($i({},m.state,{idx:v}),""));function b(){return(m.state||{idx:null}).idx}function S(){y=Yn.Pop;let M=b(),Y=M==null?null:M-v;v=M,g&&g({action:y,location:D.location,delta:Y})}function _(M,Y){y=Yn.Push;let B=Fs(D.location,M,Y);v=b()+1;let j=$0(B,v),te=D.createHref(B);try{m.pushState(j,"",te)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;s.location.assign(te)}d&&g&&g({action:y,location:D.location,delta:1})}function T(M,Y){y=Yn.Replace;let B=Fs(D.location,M,Y);v=b();let j=$0(B,v),te=D.createHref(B);m.replaceState(j,"",te),d&&g&&g({action:y,location:D.location,delta:0})}function N(M){let Y=s.location.origin!=="null"?s.location.origin:s.location.href,B=typeof M=="string"?M:Lg(M);return B=B.replace(/ $/,"%20"),bt(Y,"No window.location.(origin|href) available to create URL for href: "+B),new URL(B,Y)}let D={get action(){return y},get location(){return a(s,m)},listen(M){if(g)throw new Error("A history only accepts one active listener");return s.addEventListener(w0,S),g=M,()=>{s.removeEventListener(w0,S),g=null}},createHref(M){return r(s,M)},createURL:N,encodeLocation(M){let Y=N(M);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:_,replace:T,go(M){return m.go(M)}};return D}var N0;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(N0||(N0={}));function N1(a,r,u){return u===void 0&&(u="/"),T1(a,r,u)}function T1(a,r,u,o){let s=typeof r=="string"?vr(r):r,d=qg(s.pathname||"/",u);if(d==null)return null;let m=Yg(a);M1(m);let y=null;for(let g=0;y==null&&g<m.length;++g){let v=Y1(d);y=j1(m[g],v)}return y}function Yg(a,r,u,o){r===void 0&&(r=[]),u===void 0&&(u=[]),o===void 0&&(o="");let s=(d,m,y)=>{let g={relativePath:y===void 0?d.path||"":y,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};g.relativePath.startsWith("/")&&(bt(g.relativePath.startsWith(o),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(o.length));let v=dl([o,g.relativePath]),b=u.concat(g);d.children&&d.children.length>0&&(bt(d.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),Yg(d.children,r,b,v)),!(d.path==null&&!d.index)&&r.push({path:v,score:H1(v,d.index),routesMeta:b})};return a.forEach((d,m)=>{var y;if(d.path===""||!((y=d.path)!=null&&y.includes("?")))s(d,m);else for(let g of kg(d.path))s(d,m,g)}),r}function kg(a){let r=a.split("/");if(r.length===0)return[];let[u,...o]=r,s=u.endsWith("?"),d=u.replace(/\?$/,"");if(o.length===0)return s?[d,""]:[d];let m=kg(o.join("/")),y=[];return y.push(...m.map(g=>g===""?d:[d,g].join("/"))),s&&y.push(...m),y.map(g=>a.startsWith("/")&&g===""?"/":g)}function M1(a){a.sort((r,u)=>r.score!==u.score?u.score-r.score:R1(r.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}const O1=/^:[\w-]+$/,A1=3,D1=2,C1=1,B1=10,z1=-2,T0=a=>a==="*";function H1(a,r){let u=a.split("/"),o=u.length;return u.some(T0)&&(o+=z1),r&&(o+=D1),u.filter(s=>!T0(s)).reduce((s,d)=>s+(O1.test(d)?A1:d===""?C1:B1),o)}function R1(a,r){return a.length===r.length&&a.slice(0,-1).every((o,s)=>o===r[s])?a[a.length-1]-r[r.length-1]:0}function j1(a,r,u){let{routesMeta:o}=a,s={},d="/",m=[];for(let y=0;y<o.length;++y){let g=o[y],v=y===o.length-1,b=d==="/"?r:r.slice(d.length)||"/",S=U1({path:g.relativePath,caseSensitive:g.caseSensitive,end:v},b),_=g.route;if(!S)return null;Object.assign(s,S.params),m.push({params:s,pathname:dl([d,S.pathname]),pathnameBase:X1(dl([d,S.pathnameBase])),route:_}),S.pathnameBase!=="/"&&(d=dl([d,S.pathnameBase]))}return m}function U1(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,o]=L1(a.path,a.caseSensitive,a.end),s=r.match(u);if(!s)return null;let d=s[0],m=d.replace(/(.)\/+$/,"$1"),y=s.slice(1);return{params:o.reduce((v,b,S)=>{let{paramName:_,isOptional:T}=b;if(_==="*"){let D=y[S]||"";m=d.slice(0,d.length-D.length).replace(/(.)\/+$/,"$1")}const N=y[S];return T&&!N?v[_]=void 0:v[_]=(N||"").replace(/%2F/g,"/"),v},{}),pathname:d,pathnameBase:m,pattern:a}}function L1(a,r,u){r===void 0&&(r=!1),u===void 0&&(u=!0),Ug(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let o=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,g)=>(o.push({paramName:y,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(o.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),o]}function Y1(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ug(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),a}}function qg(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,o=a.charAt(u);return o&&o!=="/"?null:a.slice(u)||"/"}function k1(a,r){r===void 0&&(r="/");let{pathname:u,search:o="",hash:s=""}=typeof a=="string"?vr(a):a;return{pathname:u?u.startsWith("/")?u:q1(u,r):r,search:Q1(o),hash:Z1(s)}}function q1(a,r){let u=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?u.length>1&&u.pop():s!=="."&&u.push(s)}),u.length>1?u.join("/"):"/"}function Ls(a,r,u,o){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+u+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function P1(a){return a.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function G1(a,r){let u=P1(a);return r?u.map((o,s)=>s===u.length-1?o.pathname:o.pathnameBase):u.map(o=>o.pathnameBase)}function V1(a,r,u,o){o===void 0&&(o=!1);let s;typeof a=="string"?s=vr(a):(s=$i({},a),bt(!s.pathname||!s.pathname.includes("?"),Ls("?","pathname","search",s)),bt(!s.pathname||!s.pathname.includes("#"),Ls("#","pathname","hash",s)),bt(!s.search||!s.search.includes("#"),Ls("#","search","hash",s)));let d=a===""||s.pathname==="",m=d?"/":s.pathname,y;if(m==null)y=u;else{let S=r.length-1;if(!o&&m.startsWith("..")){let _=m.split("/");for(;_[0]==="..";)_.shift(),S-=1;s.pathname=_.join("/")}y=S>=0?r[S]:"/"}let g=k1(s,y),v=m&&m!=="/"&&m.endsWith("/"),b=(d||m===".")&&u.endsWith("/");return!g.pathname.endsWith("/")&&(v||b)&&(g.pathname+="/"),g}const dl=a=>a.join("/").replace(/\/\/+/g,"/"),X1=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Q1=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Z1=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function F1(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const Pg=["post","put","patch","delete"];new Set(Pg);const W1=["get",...Pg];new Set(W1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ni(){return Ni=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Ni.apply(this,arguments)}const wf=p.createContext(null),K1=p.createContext(null),go=p.createContext(null),vo=p.createContext(null),yl=p.createContext({outlet:null,matches:[],isDataRoute:!1}),Gg=p.createContext(null);function po(){return p.useContext(vo)!=null}function Vg(){return po()||bt(!1),p.useContext(vo).location}function Xg(a){p.useContext(go).static||p.useLayoutEffect(a)}function $f(){let{isDataRoute:a}=p.useContext(yl);return a?fb():J1()}function J1(){po()||bt(!1);let a=p.useContext(wf),{basename:r,future:u,navigator:o}=p.useContext(go),{matches:s}=p.useContext(yl),{pathname:d}=Vg(),m=JSON.stringify(G1(s,u.v7_relativeSplatPath)),y=p.useRef(!1);return Xg(()=>{y.current=!0}),p.useCallback(function(v,b){if(b===void 0&&(b={}),!y.current)return;if(typeof v=="number"){o.go(v);return}let S=V1(v,JSON.parse(m),d,b.relative==="path");a==null&&r!=="/"&&(S.pathname=S.pathname==="/"?r:dl([r,S.pathname])),(b.replace?o.replace:o.push)(S,b.state,b)},[r,o,m,d,a])}function I1(){let{matches:a}=p.useContext(yl),r=a[a.length-1];return r?r.params:{}}function eb(a,r){return tb(a,r)}function tb(a,r,u,o){po()||bt(!1);let{navigator:s}=p.useContext(go),{matches:d}=p.useContext(yl),m=d[d.length-1],y=m?m.params:{};m&&m.pathname;let g=m?m.pathnameBase:"/";m&&m.route;let v=Vg(),b;if(r){var S;let M=typeof r=="string"?vr(r):r;g==="/"||(S=M.pathname)!=null&&S.startsWith(g)||bt(!1),b=M}else b=v;let _=b.pathname||"/",T=_;if(g!=="/"){let M=g.replace(/^\//,"").split("/");T="/"+_.replace(/^\//,"").split("/").slice(M.length).join("/")}let N=N1(a,{pathname:T}),D=ib(N&&N.map(M=>Object.assign({},M,{params:Object.assign({},y,M.params),pathname:dl([g,s.encodeLocation?s.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?g:dl([g,s.encodeLocation?s.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),d,u,o);return r&&D?p.createElement(vo.Provider,{value:{location:Ni({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:Yn.Pop}},D):D}function ab(){let a=sb(),r=F1(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},r),u?p.createElement("pre",{style:s},u):null,null)}const nb=p.createElement(ab,null);class lb extends p.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,u){return u.location!==r.location||u.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:u.error,location:u.location,revalidation:r.revalidation||u.revalidation}}componentDidCatch(r,u){console.error("React Router caught the following error during render",r,u)}render(){return this.state.error!==void 0?p.createElement(yl.Provider,{value:this.props.routeContext},p.createElement(Gg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rb(a){let{routeContext:r,match:u,children:o}=a,s=p.useContext(wf);return s&&s.static&&s.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=u.route.id),p.createElement(yl.Provider,{value:r},o)}function ib(a,r,u,o){var s;if(r===void 0&&(r=[]),u===void 0&&(u=null),o===void 0&&(o=null),a==null){var d;if(!u)return null;if(u.errors)a=u.matches;else if((d=o)!=null&&d.v7_partialHydration&&r.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let m=a,y=(s=u)==null?void 0:s.errors;if(y!=null){let b=m.findIndex(S=>S.route.id&&(y==null?void 0:y[S.route.id])!==void 0);b>=0||bt(!1),m=m.slice(0,Math.min(m.length,b+1))}let g=!1,v=-1;if(u&&o&&o.v7_partialHydration)for(let b=0;b<m.length;b++){let S=m[b];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(v=b),S.route.id){let{loaderData:_,errors:T}=u,N=S.route.loader&&_[S.route.id]===void 0&&(!T||T[S.route.id]===void 0);if(S.route.lazy||N){g=!0,v>=0?m=m.slice(0,v+1):m=[m[0]];break}}}return m.reduceRight((b,S,_)=>{let T,N=!1,D=null,M=null;u&&(T=y&&S.route.id?y[S.route.id]:void 0,D=S.route.errorElement||nb,g&&(v<0&&_===0?(db("route-fallback"),N=!0,M=null):v===_&&(N=!0,M=S.route.hydrateFallbackElement||null)));let Y=r.concat(m.slice(0,_+1)),B=()=>{let j;return T?j=D:N?j=M:S.route.Component?j=p.createElement(S.route.Component,null):S.route.element?j=S.route.element:j=b,p.createElement(rb,{match:S,routeContext:{outlet:b,matches:Y,isDataRoute:u!=null},children:j})};return u&&(S.route.ErrorBoundary||S.route.errorElement||_===0)?p.createElement(lb,{location:u.location,revalidation:u.revalidation,component:D,error:T,children:B(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):B()},null)}var Qg=function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a}(Qg||{}),Zg=function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a}(Zg||{});function ub(a){let r=p.useContext(wf);return r||bt(!1),r}function ob(a){let r=p.useContext(K1);return r||bt(!1),r}function cb(a){let r=p.useContext(yl);return r||bt(!1),r}function Fg(a){let r=cb(),u=r.matches[r.matches.length-1];return u.route.id||bt(!1),u.route.id}function sb(){var a;let r=p.useContext(Gg),u=ob(),o=Fg();return r!==void 0?r:(a=u.errors)==null?void 0:a[o]}function fb(){let{router:a}=ub(Qg.UseNavigateStable),r=Fg(Zg.UseNavigateStable),u=p.useRef(!1);return Xg(()=>{u.current=!0}),p.useCallback(function(s,d){d===void 0&&(d={}),u.current&&(typeof s=="number"?a.navigate(s):a.navigate(s,Ni({fromRouteId:r},d)))},[a,r])}const M0={};function db(a,r,u){M0[a]||(M0[a]=!0)}function hb(a,r){a==null||a.v7_startTransition,a==null||a.v7_relativeSplatPath}function to(a){bt(!1)}function mb(a){let{basename:r="/",children:u=null,location:o,navigationType:s=Yn.Pop,navigator:d,static:m=!1,future:y}=a;po()&&bt(!1);let g=r.replace(/^\/*/,"/"),v=p.useMemo(()=>({basename:g,navigator:d,static:m,future:Ni({v7_relativeSplatPath:!1},y)}),[g,y,d,m]);typeof o=="string"&&(o=vr(o));let{pathname:b="/",search:S="",hash:_="",state:T=null,key:N="default"}=o,D=p.useMemo(()=>{let M=qg(b,g);return M==null?null:{location:{pathname:M,search:S,hash:_,state:T,key:N},navigationType:s}},[g,b,S,_,T,N,s]);return D==null?null:p.createElement(go.Provider,{value:v},p.createElement(vo.Provider,{children:u,value:D}))}function gb(a){let{children:r,location:u}=a;return eb(Ws(r),u)}new Promise(()=>{});function Ws(a,r){r===void 0&&(r=[]);let u=[];return p.Children.forEach(a,(o,s)=>{if(!p.isValidElement(o))return;let d=[...r,s];if(o.type===p.Fragment){u.push.apply(u,Ws(o.props.children,d));return}o.type!==to&&bt(!1),!o.props.index||!o.props.children||bt(!1);let m={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(m.children=Ws(o.props.children,d)),u.push(m)}),u}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vb="6";try{window.__reactRouterVersion=vb}catch{}const pb="startTransition",O0=g1[pb];function yb(a){let{basename:r,children:u,future:o,window:s}=a,d=p.useRef();d.current==null&&(d.current=_1({window:s,v5Compat:!0}));let m=d.current,[y,g]=p.useState({action:m.action,location:m.location}),{v7_startTransition:v}=o||{},b=p.useCallback(S=>{v&&O0?O0(()=>g(S)):g(S)},[g,v]);return p.useLayoutEffect(()=>m.listen(b),[m,b]),p.useEffect(()=>hb(o),[o]),p.createElement(mb,{basename:r,children:u,location:y.location,navigationType:y.action,navigator:m,future:o})}var A0;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(A0||(A0={}));var D0;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(D0||(D0={}));var Rt=function(){return Rt=Object.assign||function(r){for(var u,o=1,s=arguments.length;o<s;o++){u=arguments[o];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(r[d]=u[d])}return r},Rt.apply(this,arguments)};function Ti(a,r,u){if(u||arguments.length===2)for(var o=0,s=r.length,d;o<s;o++)(d||!(o in r))&&(d||(d=Array.prototype.slice.call(r,0,o)),d[o]=r[o]);return a.concat(d||Array.prototype.slice.call(r))}var Ie="-ms-",wi="-moz-",He="-webkit-",Wg="comm",yo="rule",Nf="decl",bb="@import",Kg="@keyframes",Sb="@layer",Jg=Math.abs,Tf=String.fromCharCode,Ks=Object.assign;function xb(a,r){return $t(a,0)^45?(((r<<2^$t(a,0))<<2^$t(a,1))<<2^$t(a,2))<<2^$t(a,3):0}function Ig(a){return a.trim()}function cn(a,r){return(a=r.exec(a))?a[0]:a}function Se(a,r,u){return a.replace(r,u)}function ao(a,r,u){return a.indexOf(r,u)}function $t(a,r){return a.charCodeAt(r)|0}function or(a,r,u){return a.slice(r,u)}function Pa(a){return a.length}function ev(a){return a.length}function Ei(a,r){return r.push(a),a}function Eb(a,r){return a.map(r).join("")}function C0(a,r){return a.filter(function(u){return!cn(u,r)})}var bo=1,cr=1,tv=0,Sa=0,vt=0,pr="";function So(a,r,u,o,s,d,m,y){return{value:a,root:r,parent:u,type:o,props:s,children:d,line:bo,column:cr,length:m,return:"",siblings:y}}function Ln(a,r){return Ks(So("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function lr(a){for(;a.root;)a=Ln(a.root,{children:[a]});Ei(a,a.siblings)}function _b(){return vt}function wb(){return vt=Sa>0?$t(pr,--Sa):0,cr--,vt===10&&(cr=1,bo--),vt}function Ca(){return vt=Sa<tv?$t(pr,Sa++):0,cr++,vt===10&&(cr=1,bo++),vt}function hl(){return $t(pr,Sa)}function no(){return Sa}function xo(a,r){return or(pr,a,r)}function Js(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $b(a){return bo=cr=1,tv=Pa(pr=a),Sa=0,[]}function Nb(a){return pr="",a}function Ys(a){return Ig(xo(Sa-1,Is(a===91?a+2:a===40?a+1:a)))}function Tb(a){for(;(vt=hl())&&vt<33;)Ca();return Js(a)>2||Js(vt)>3?"":" "}function Mb(a,r){for(;--r&&Ca()&&!(vt<48||vt>102||vt>57&&vt<65||vt>70&&vt<97););return xo(a,no()+(r<6&&hl()==32&&Ca()==32))}function Is(a){for(;Ca();)switch(vt){case a:return Sa;case 34:case 39:a!==34&&a!==39&&Is(vt);break;case 40:a===41&&Is(a);break;case 92:Ca();break}return Sa}function Ob(a,r){for(;Ca()&&a+vt!==57;)if(a+vt===84&&hl()===47)break;return"/*"+xo(r,Sa-1)+"*"+Tf(a===47?a:Ca())}function Ab(a){for(;!Js(hl());)Ca();return xo(a,Sa)}function Db(a){return Nb(lo("",null,null,null,[""],a=$b(a),0,[0],a))}function lo(a,r,u,o,s,d,m,y,g){for(var v=0,b=0,S=m,_=0,T=0,N=0,D=1,M=1,Y=1,B=0,j="",te=s,K=d,ee=o,ne=j;M;)switch(N=B,B=Ca()){case 40:if(N!=108&&$t(ne,S-1)==58){ao(ne+=Se(Ys(B),"&","&\f"),"&\f",Jg(v?y[v-1]:0))!=-1&&(Y=-1);break}case 34:case 39:case 91:ne+=Ys(B);break;case 9:case 10:case 13:case 32:ne+=Tb(N);break;case 92:ne+=Mb(no()-1,7);continue;case 47:switch(hl()){case 42:case 47:Ei(Cb(Ob(Ca(),no()),r,u,g),g);break;default:ne+="/"}break;case 123*D:y[v++]=Pa(ne)*Y;case 125*D:case 59:case 0:switch(B){case 0:case 125:M=0;case 59+b:Y==-1&&(ne=Se(ne,/\f/g,"")),T>0&&Pa(ne)-S&&Ei(T>32?z0(ne+";",o,u,S-1,g):z0(Se(ne," ","")+";",o,u,S-2,g),g);break;case 59:ne+=";";default:if(Ei(ee=B0(ne,r,u,v,b,s,y,j,te=[],K=[],S,d),d),B===123)if(b===0)lo(ne,r,ee,ee,te,d,S,y,K);else switch(_===99&&$t(ne,3)===110?100:_){case 100:case 108:case 109:case 115:lo(a,ee,ee,o&&Ei(B0(a,ee,ee,0,0,s,y,j,s,te=[],S,K),K),s,K,S,y,o?te:K);break;default:lo(ne,ee,ee,ee,[""],K,0,y,K)}}v=b=T=0,D=Y=1,j=ne="",S=m;break;case 58:S=1+Pa(ne),T=N;default:if(D<1){if(B==123)--D;else if(B==125&&D++==0&&wb()==125)continue}switch(ne+=Tf(B),B*D){case 38:Y=b>0?1:(ne+="\f",-1);break;case 44:y[v++]=(Pa(ne)-1)*Y,Y=1;break;case 64:hl()===45&&(ne+=Ys(Ca())),_=hl(),b=S=Pa(j=ne+=Ab(no())),B++;break;case 45:N===45&&Pa(ne)==2&&(D=0)}}return d}function B0(a,r,u,o,s,d,m,y,g,v,b,S){for(var _=s-1,T=s===0?d:[""],N=ev(T),D=0,M=0,Y=0;D<o;++D)for(var B=0,j=or(a,_+1,_=Jg(M=m[D])),te=a;B<N;++B)(te=Ig(M>0?T[B]+" "+j:Se(j,/&\f/g,T[B])))&&(g[Y++]=te);return So(a,r,u,s===0?yo:y,g,v,b,S)}function Cb(a,r,u,o){return So(a,r,u,Wg,Tf(_b()),or(a,2,-2),0,o)}function z0(a,r,u,o,s){return So(a,r,u,Nf,or(a,0,o),or(a,o+1,-1),o,s)}function av(a,r,u){switch(xb(a,r)){case 5103:return He+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return He+a+a;case 4789:return wi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return He+a+wi+a+Ie+a+a;case 5936:switch($t(a,r+11)){case 114:return He+a+Ie+Se(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return He+a+Ie+Se(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return He+a+Ie+Se(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return He+a+Ie+a+a;case 6165:return He+a+Ie+"flex-"+a+a;case 5187:return He+a+Se(a,/(\w+).+(:[^]+)/,He+"box-$1$2"+Ie+"flex-$1$2")+a;case 5443:return He+a+Ie+"flex-item-"+Se(a,/flex-|-self/g,"")+(cn(a,/flex-|baseline/)?"":Ie+"grid-row-"+Se(a,/flex-|-self/g,""))+a;case 4675:return He+a+Ie+"flex-line-pack"+Se(a,/align-content|flex-|-self/g,"")+a;case 5548:return He+a+Ie+Se(a,"shrink","negative")+a;case 5292:return He+a+Ie+Se(a,"basis","preferred-size")+a;case 6060:return He+"box-"+Se(a,"-grow","")+He+a+Ie+Se(a,"grow","positive")+a;case 4554:return He+Se(a,/([^-])(transform)/g,"$1"+He+"$2")+a;case 6187:return Se(Se(Se(a,/(zoom-|grab)/,He+"$1"),/(image-set)/,He+"$1"),a,"")+a;case 5495:case 3959:return Se(a,/(image-set\([^]*)/,He+"$1$`$1");case 4968:return Se(Se(a,/(.+:)(flex-)?(.*)/,He+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+He+a+a;case 4200:if(!cn(a,/flex-|baseline/))return Ie+"grid-column-align"+or(a,r)+a;break;case 2592:case 3360:return Ie+Se(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(o,s){return r=s,cn(o.props,/grid-\w+-end/)})?~ao(a+(u=u[r].value),"span",0)?a:Ie+Se(a,"-start","")+a+Ie+"grid-row-span:"+(~ao(u,"span",0)?cn(u,/\d+/):+cn(u,/\d+/)-+cn(a,/\d+/))+";":Ie+Se(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(o){return cn(o.props,/grid-\w+-start/)})?a:Ie+Se(Se(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Se(a,/(.+)-inline(.+)/,He+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pa(a)-1-r>6)switch($t(a,r+1)){case 109:if($t(a,r+4)!==45)break;case 102:return Se(a,/(.+:)(.+)-([^]+)/,"$1"+He+"$2-$3$1"+wi+($t(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~ao(a,"stretch",0)?av(Se(a,"stretch","fill-available"),r,u)+a:a}break;case 5152:case 5920:return Se(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,d,m,y,g,v){return Ie+s+":"+d+v+(m?Ie+s+"-span:"+(y?g:+g-+d)+v:"")+a});case 4949:if($t(a,r+6)===121)return Se(a,":",":"+He)+a;break;case 6444:switch($t(a,$t(a,14)===45?18:11)){case 120:return Se(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+He+($t(a,14)===45?"inline-":"")+"box$3$1"+He+"$2$3$1"+Ie+"$2box$3")+a;case 100:return Se(a,":",":"+Ie)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Se(a,"scroll-","scroll-snap-")+a}return a}function co(a,r){for(var u="",o=0;o<a.length;o++)u+=r(a[o],o,a,r)||"";return u}function Bb(a,r,u,o){switch(a.type){case Sb:if(a.children.length)break;case bb:case Nf:return a.return=a.return||a.value;case Wg:return"";case Kg:return a.return=a.value+"{"+co(a.children,o)+"}";case yo:if(!Pa(a.value=a.props.join(",")))return""}return Pa(u=co(a.children,o))?a.return=a.value+"{"+u+"}":""}function zb(a){var r=ev(a);return function(u,o,s,d){for(var m="",y=0;y<r;y++)m+=a[y](u,o,s,d)||"";return m}}function Hb(a){return function(r){r.root||(r=r.return)&&a(r)}}function Rb(a,r,u,o){if(a.length>-1&&!a.return)switch(a.type){case Nf:a.return=av(a.value,a.length,u);return;case Kg:return co([Ln(a,{value:Se(a.value,"@","@"+He)})],o);case yo:if(a.length)return Eb(u=a.props,function(s){switch(cn(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lr(Ln(a,{props:[Se(s,/:(read-\w+)/,":"+wi+"$1")]})),lr(Ln(a,{props:[s]})),Ks(a,{props:C0(u,o)});break;case"::placeholder":lr(Ln(a,{props:[Se(s,/:(plac\w+)/,":"+He+"input-$1")]})),lr(Ln(a,{props:[Se(s,/:(plac\w+)/,":"+wi+"$1")]})),lr(Ln(a,{props:[Se(s,/:(plac\w+)/,Ie+"input-$1")]})),lr(Ln(a,{props:[s]})),Ks(a,{props:C0(u,o)});break}return""})}}var jb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},la={},sr=typeof process<"u"&&la!==void 0&&(la.REACT_APP_SC_ATTR||la.SC_ATTR)||"data-styled",nv="active",lv="data-styled-version",Eo="6.1.19",Mf=`/*!sc*/
`,so=typeof window<"u"&&typeof document<"u",Ub=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&la!==void 0&&la.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&la.REACT_APP_SC_DISABLE_SPEEDY!==""?la.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&la.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&la!==void 0&&la.SC_DISABLE_SPEEDY!==void 0&&la.SC_DISABLE_SPEEDY!==""&&la.SC_DISABLE_SPEEDY!=="false"&&la.SC_DISABLE_SPEEDY),_o=Object.freeze([]),fr=Object.freeze({});function Lb(a,r,u){return u===void 0&&(u=fr),a.theme!==u.theme&&a.theme||r||u.theme}var rv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Yb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kb=/(^-|-$)/g;function H0(a){return a.replace(Yb,"-").replace(kb,"")}var qb=/(a)(d)/gi,Ku=52,R0=function(a){return String.fromCharCode(a+(a>25?39:97))};function ef(a){var r,u="";for(r=Math.abs(a);r>Ku;r=r/Ku|0)u=R0(r%Ku)+u;return(R0(r%Ku)+u).replace(qb,"$1-$2")}var ks,iv=5381,ir=function(a,r){for(var u=r.length;u;)a=33*a^r.charCodeAt(--u);return a},uv=function(a){return ir(iv,a)};function ov(a){return ef(uv(a)>>>0)}function Pb(a){return a.displayName||a.name||"Component"}function qs(a){return typeof a=="string"&&!0}var cv=typeof Symbol=="function"&&Symbol.for,sv=cv?Symbol.for("react.memo"):60115,Gb=cv?Symbol.for("react.forward_ref"):60112,Vb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qb=((ks={})[Gb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ks[sv]=fv,ks);function j0(a){return("type"in(r=a)&&r.type.$$typeof)===sv?fv:"$$typeof"in a?Qb[a.$$typeof]:Vb;var r}var Zb=Object.defineProperty,Fb=Object.getOwnPropertyNames,U0=Object.getOwnPropertySymbols,Wb=Object.getOwnPropertyDescriptor,Kb=Object.getPrototypeOf,L0=Object.prototype;function dv(a,r,u){if(typeof r!="string"){if(L0){var o=Kb(r);o&&o!==L0&&dv(a,o,u)}var s=Fb(r);U0&&(s=s.concat(U0(r)));for(var d=j0(a),m=j0(r),y=0;y<s.length;++y){var g=s[y];if(!(g in Xb||u&&u[g]||m&&g in m||d&&g in d)){var v=Wb(r,g);try{Zb(a,g,v)}catch{}}}}return a}function vl(a){return typeof a=="function"}function Of(a){return typeof a=="object"&&"styledComponentId"in a}function fl(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function tf(a,r){if(a.length===0)return"";for(var u=a[0],o=1;o<a.length;o++)u+=a[o];return u}function Mi(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function af(a,r,u){if(u===void 0&&(u=!1),!u&&!Mi(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)a[o]=af(a[o],r[o]);else if(Mi(r))for(var o in r)a[o]=af(a[o],r[o]);return a}function Af(a,r){Object.defineProperty(a,"toString",{value:r})}function Pn(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Jb=function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var u=0,o=0;o<r;o++)u+=this.groupSizes[o];return u},a.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,d=s;r>=d;)if((d<<=1)<0)throw Pn(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var m=s;m<d;m++)this.groupSizes[m]=0}for(var y=this.indexOfGroup(r+1),g=(m=0,u.length);m<g;m++)this.tag.insertRule(y,u[m])&&(this.groupSizes[r]++,y++)},a.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],o=this.indexOfGroup(r),s=o+u;this.groupSizes[r]=0;for(var d=o;d<s;d++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var o=this.groupSizes[r],s=this.indexOfGroup(r),d=s+o,m=s;m<d;m++)u+="".concat(this.tag.getRule(m)).concat(Mf);return u},a}(),ro=new Map,fo=new Map,io=1,Ju=function(a){if(ro.has(a))return ro.get(a);for(;fo.has(io);)io++;var r=io++;return ro.set(a,r),fo.set(r,a),r},Ib=function(a,r){io=r+1,ro.set(a,r),fo.set(r,a)},eS="style[".concat(sr,"][").concat(lv,'="').concat(Eo,'"]'),tS=new RegExp("^".concat(sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),aS=function(a,r,u){for(var o,s=u.split(","),d=0,m=s.length;d<m;d++)(o=s[d])&&a.registerName(r,o)},nS=function(a,r){for(var u,o=((u=r.textContent)!==null&&u!==void 0?u:"").split(Mf),s=[],d=0,m=o.length;d<m;d++){var y=o[d].trim();if(y){var g=y.match(tS);if(g){var v=0|parseInt(g[1],10),b=g[2];v!==0&&(Ib(b,v),aS(a,b,g[3]),a.getTag().insertRules(v,s)),s.length=0}else s.push(y)}}},Y0=function(a){for(var r=document.querySelectorAll(eS),u=0,o=r.length;u<o;u++){var s=r[u];s&&s.getAttribute(sr)!==nv&&(nS(a,s),s.parentNode&&s.parentNode.removeChild(s))}};function lS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hv=function(a){var r=document.head,u=a||r,o=document.createElement("style"),s=function(y){var g=Array.from(y.querySelectorAll("style[".concat(sr,"]")));return g[g.length-1]}(u),d=s!==void 0?s.nextSibling:null;o.setAttribute(sr,nv),o.setAttribute(lv,Eo);var m=lS();return m&&o.setAttribute("nonce",m),u.insertBefore(o,d),o},rS=function(){function a(r){this.element=hv(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,s=0,d=o.length;s<d;s++){var m=o[s];if(m.ownerNode===u)return m}throw Pn(17)}(this.element),this.length=0}return a.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},a}(),iS=function(){function a(r){this.element=hv(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a}(),uS=function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,u){return r<=this.length&&(this.rules.splice(r,0,u),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a}(),k0=so,oS={isServer:!so,useCSSOMInjection:!Ub},mv=function(){function a(r,u,o){r===void 0&&(r=fr),u===void 0&&(u={});var s=this;this.options=Rt(Rt({},oS),r),this.gs=u,this.names=new Map(o),this.server=!!r.isServer,!this.server&&so&&k0&&(k0=!1,Y0(this)),Af(this,function(){return function(d){for(var m=d.getTag(),y=m.length,g="",v=function(S){var _=function(Y){return fo.get(Y)}(S);if(_===void 0)return"continue";var T=d.names.get(_),N=m.getGroup(S);if(T===void 0||!T.size||N.length===0)return"continue";var D="".concat(sr,".g").concat(S,'[id="').concat(_,'"]'),M="";T!==void 0&&T.forEach(function(Y){Y.length>0&&(M+="".concat(Y,","))}),g+="".concat(N).concat(D,'{content:"').concat(M,'"}').concat(Mf)},b=0;b<y;b++)v(b);return g}(s)})}return a.registerId=function(r){return Ju(r)},a.prototype.rehydrate=function(){!this.server&&so&&Y0(this)},a.prototype.reconstructWithOptions=function(r,u){return u===void 0&&(u=!0),new a(Rt(Rt({},this.options),r),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=function(u){var o=u.useCSSOMInjection,s=u.target;return u.isServer?new uS(s):o?new rS(s):new iS(s)}(this.options),new Jb(r)));var r},a.prototype.hasNameForId=function(r,u){return this.names.has(r)&&this.names.get(r).has(u)},a.prototype.registerName=function(r,u){if(Ju(r),this.names.has(r))this.names.get(r).add(u);else{var o=new Set;o.add(u),this.names.set(r,o)}},a.prototype.insertRules=function(r,u,o){this.registerName(r,u),this.getTag().insertRules(Ju(r),o)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(Ju(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a}(),cS=/&/g,sS=/^\s*\/\/.*$/gm;function gv(a,r){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=gv(u.children,r)),u})}function fS(a){var r,u,o,s=fr,d=s.options,m=d===void 0?fr:d,y=s.plugins,g=y===void 0?_o:y,v=function(_,T,N){return N.startsWith(u)&&N.endsWith(u)&&N.replaceAll(u,"").length>0?".".concat(r):_},b=g.slice();b.push(function(_){_.type===yo&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(cS,u).replace(o,v))}),m.prefix&&b.push(Rb),b.push(Bb);var S=function(_,T,N,D){T===void 0&&(T=""),N===void 0&&(N=""),D===void 0&&(D="&"),r=D,u=T,o=new RegExp("\\".concat(u,"\\b"),"g");var M=_.replace(sS,""),Y=Db(N||T?"".concat(N," ").concat(T," { ").concat(M," }"):M);m.namespace&&(Y=gv(Y,m.namespace));var B=[];return co(Y,zb(b.concat(Hb(function(j){return B.push(j)})))),B};return S.hash=g.length?g.reduce(function(_,T){return T.name||Pn(15),ir(_,T.name)},iv).toString():"",S}var dS=new mv,nf=fS(),vv=Ga.createContext({shouldForwardProp:void 0,styleSheet:dS,stylis:nf});vv.Consumer;Ga.createContext(void 0);function q0(){return p.useContext(vv)}var pv=function(){function a(r,u){var o=this;this.inject=function(s,d){d===void 0&&(d=nf);var m=o.name+d.hash;s.hasNameForId(o.id,m)||s.insertRules(o.id,m,d(o.rules,m,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,Af(this,function(){throw Pn(12,String(o.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=nf),this.name+r.hash},a}(),hS=function(a){return a>="A"&&a<="Z"};function P0(a){for(var r="",u=0;u<a.length;u++){var o=a[u];if(u===1&&o==="-"&&a[0]==="-")return a;hS(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var yv=function(a){return a==null||a===!1||a===""},bv=function(a){var r,u,o=[];for(var s in a){var d=a[s];a.hasOwnProperty(s)&&!yv(d)&&(Array.isArray(d)&&d.isCss||vl(d)?o.push("".concat(P0(s),":"),d,";"):Mi(d)?o.push.apply(o,Ti(Ti(["".concat(s," {")],bv(d),!1),["}"],!1)):o.push("".concat(P0(s),": ").concat((r=s,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||r in jb||r.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function ml(a,r,u,o){if(yv(a))return[];if(Of(a))return[".".concat(a.styledComponentId)];if(vl(a)){if(!vl(d=a)||d.prototype&&d.prototype.isReactComponent||!r)return[a];var s=a(r);return ml(s,r,u,o)}var d;return a instanceof pv?u?(a.inject(u,o),[a.getName(o)]):[a]:Mi(a)?bv(a):Array.isArray(a)?Array.prototype.concat.apply(_o,a.map(function(m){return ml(m,r,u,o)})):[a.toString()]}function mS(a){for(var r=0;r<a.length;r+=1){var u=a[r];if(vl(u)&&!Of(u))return!1}return!0}var gS=uv(Eo),vS=function(){function a(r,u,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&mS(r),this.componentId=u,this.baseHash=ir(gS,u),this.baseStyle=o,mv.registerId(u)}return a.prototype.generateAndInjectStyles=function(r,u,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))s=fl(s,this.staticRulesId);else{var d=tf(ml(this.rules,r,u,o)),m=ef(ir(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,m)){var y=o(d,".".concat(m),void 0,this.componentId);u.insertRules(this.componentId,m,y)}s=fl(s,m),this.staticRulesId=m}else{for(var g=ir(this.baseHash,o.hash),v="",b=0;b<this.rules.length;b++){var S=this.rules[b];if(typeof S=="string")v+=S;else if(S){var _=tf(ml(S,r,u,o));g=ir(g,_+b),v+=_}}if(v){var T=ef(g>>>0);u.hasNameForId(this.componentId,T)||u.insertRules(this.componentId,T,o(v,".".concat(T),void 0,this.componentId)),s=fl(s,T)}}return s},a}(),Oi=Ga.createContext(void 0);Oi.Consumer;function Df(){var a=p.useContext(Oi);if(!a)throw Pn(18);return a}function pS(a){var r=Ga.useContext(Oi),u=p.useMemo(function(){return function(o,s){if(!o)throw Pn(14);if(vl(o)){var d=o(s);return d}if(Array.isArray(o)||typeof o!="object")throw Pn(8);return s?Rt(Rt({},s),o):o}(a.theme,r)},[a.theme,r]);return a.children?Ga.createElement(Oi.Provider,{value:u},a.children):null}var Ps={};function yS(a,r,u){var o=Of(a),s=a,d=!qs(a),m=r.attrs,y=m===void 0?_o:m,g=r.componentId,v=g===void 0?function(te,K){var ee=typeof te!="string"?"sc":H0(te);Ps[ee]=(Ps[ee]||0)+1;var ne="".concat(ee,"-").concat(ov(Eo+ee+Ps[ee]));return K?"".concat(K,"-").concat(ne):ne}(r.displayName,r.parentComponentId):g,b=r.displayName,S=b===void 0?function(te){return qs(te)?"styled.".concat(te):"Styled(".concat(Pb(te),")")}(a):b,_=r.displayName&&r.componentId?"".concat(H0(r.displayName),"-").concat(r.componentId):r.componentId||v,T=o&&s.attrs?s.attrs.concat(y).filter(Boolean):y,N=r.shouldForwardProp;if(o&&s.shouldForwardProp){var D=s.shouldForwardProp;if(r.shouldForwardProp){var M=r.shouldForwardProp;N=function(te,K){return D(te,K)&&M(te,K)}}else N=D}var Y=new vS(u,_,o?s.componentStyle:void 0);function B(te,K){return function(ee,ne,pe){var he=ee.attrs,be=ee.componentStyle,Re=ee.defaultProps,ze=ee.foldedComponentIds,Oe=ee.styledComponentId,rt=ee.target,Ae=Ga.useContext(Oi),U=q0(),W=ee.shouldForwardProp||U.shouldForwardProp,J=Lb(ne,Ae,Re)||fr,Z=function(re,ae,Ne){for(var ge,Xe=Rt(Rt({},ae),{className:void 0,theme:Ne}),St=0;St<re.length;St+=1){var Fe=vl(ge=re[St])?ge(Xe):ge;for(var je in Fe)Xe[je]=je==="className"?fl(Xe[je],Fe[je]):je==="style"?Rt(Rt({},Xe[je]),Fe[je]):Fe[je]}return ae.className&&(Xe.className=fl(Xe.className,ae.className)),Xe}(he,ne,J),x=Z.as||rt,R={};for(var Q in Z)Z[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&Z.theme===J||(Q==="forwardedAs"?R.as=Z.forwardedAs:W&&!W(Q,x)||(R[Q]=Z[Q]));var V=function(re,ae){var Ne=q0(),ge=re.generateAndInjectStyles(ae,Ne.styleSheet,Ne.stylis);return ge}(be,Z),I=fl(ze,Oe);return V&&(I+=" "+V),Z.className&&(I+=" "+Z.className),R[qs(x)&&!rv.has(x)?"class":"className"]=I,pe&&(R.ref=pe),p.createElement(x,R)}(j,te,K)}B.displayName=S;var j=Ga.forwardRef(B);return j.attrs=T,j.componentStyle=Y,j.displayName=S,j.shouldForwardProp=N,j.foldedComponentIds=o?fl(s.foldedComponentIds,s.styledComponentId):"",j.styledComponentId=_,j.target=o?s.target:a,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=o?function(K){for(var ee=[],ne=1;ne<arguments.length;ne++)ee[ne-1]=arguments[ne];for(var pe=0,he=ee;pe<he.length;pe++)af(K,he[pe],!0);return K}({},s.defaultProps,te):te}}),Af(j,function(){return".".concat(j.styledComponentId)}),d&&dv(j,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function G0(a,r){for(var u=[a[0]],o=0,s=r.length;o<s;o+=1)u.push(r[o],a[o+1]);return u}var V0=function(a){return Object.assign(a,{isCss:!0})};function q(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if(vl(a)||Mi(a))return V0(ml(G0(_o,Ti([a],r,!0))));var o=a;return r.length===0&&o.length===1&&typeof o[0]=="string"?ml(o):V0(ml(G0(o,r)))}function lf(a,r,u){if(u===void 0&&(u=fr),!r)throw Pn(1,r);var o=function(s){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return a(r,u,q.apply(void 0,Ti([s],d,!1)))};return o.attrs=function(s){return lf(a,r,Rt(Rt({},u),{attrs:Array.prototype.concat(u.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return lf(a,r,Rt(Rt({},u),s))},o}var Sv=function(a){return lf(yS,a)},X=Sv;rv.forEach(function(a){X[a]=Sv(a)});function xv(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var o=tf(q.apply(void 0,Ti([a],r,!1))),s=ov(o);return new pv(s,o)}const bS={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F5F5F6","Neutral/Neutral 10":"#EAEBEC","Neutral/Neutral 20":"#D7D8DA","Neutral/Neutral 30":"#B2B5B8","Neutral/Neutral 40":"#9EA0A4","Neutral/Neutral 50":"#74767B","Neutral/Neutral 60":"#67696D","Neutral/Neutral 70":"#515256","Neutral/Neutral 80":"#37383B","Neutral/Neutral 90":"#252629","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#0000009A","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#0000000A","Opacity/Neutral 8":"#00000014","Opacity/Neutral 12":"#0000001F","Opacity/Neutral 16":"#00000029","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},SS={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #D6D8DD inset;
`},xS={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},X0={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},imageViewer:{flipHorizontallyText:"Flip horizontally",flipVerticallyText:"Flip vertically",rotateLeftText:"Rotate left",rotateRightText:"Rotate right",zoomInText:"Zoom in",zoomOutText:"Zoom out",backwardText:"Back",forwardText:"Forward"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(a,r)=>`Page ${a} of ${r}`,pageSizeSelectLabel:(a,r)=>`Entries ${a} out of ${r}`,itemRangeText:(a,r,u)=>`${a}–${r}  entries out of ${u}`,pageRangeText:a=>`from ${a} ${a===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(a,r,u)=>`${a}–${r} entries out of ${u}`},progressStepper:{renderNextStepName:a=>`Next - ${a}`,stepName:["step","steps"],progressText:(a,r,u)=>`${a} from ${r} ${u}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"},textArea:{copyTextMessage:"Copy text",copiedMessage:"Copied"}},ES={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},imageViewer:{flipHorizontallyText:"Отразить по горизонтали",flipVerticallyText:"Отразить по вертикали",rotateLeftText:"Повернуть влево",rotateRightText:"Повернуть вправо",zoomOutText:"Уменьшить",zoomInText:"Увеличить",backwardText:"Назад",forwardText:"Вперед"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(a,r)=>`Страница ${a} из ${r}`,pageSizeSelectLabel:(a,r)=>`Записей ${a} из ${r}`,itemRangeText:(a,r,u)=>`${a}–${r} записей из ${u}`,pageRangeText:a=>`из ${a} ${a===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(a,r,u)=>`${a}–${r} записей из ${u}`},progressStepper:{renderNextStepName:a=>`Далее - ${a}`,stepName:["шаг","шагов"],progressText:(a,r,u)=>`${a} из ${r} ${u}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"},textArea:{copyTextMessage:"Копировать текст",copiedMessage:"Скопировано"}},en:X0,"en-US":{...X0,firstDayOfWeek:0}},$e=_S();function _S(){return{"Main/XXL":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/S":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/XS":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL1":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL2":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL3":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H1":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H2":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H3":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H4":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H5":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H6":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 1":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 2":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 3":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Long":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Short":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Long":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Short":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 1":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 2":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 1":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 2":q`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `}}const wo={color:bS,shadow:SS,zIndex:xS,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:ES,typography:$e,fontFamily:"'VTB Group UI', sans-serif"};function dr(a){switch(a.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function bl(a){switch(a.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function Q0(a){return a!==null&&!Array.isArray(a)&&typeof a=="object"}const ho={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let a=0;a<24;a+=1)ho[112+a]="F"+(a+1);for(let a=0;a<26;a+=1){let r=a+65;ho[r]=[String.fromCharCode(r+32),String.fromCharCode(r)]}const G={codes:ho,getCode(a){return Q0(a)?a.keyCode||a.which||this[a.key]:this[a]},getKey(a){const r=Q0(a);if(r&&a.key)return a.key;let u=ho[r?a.keyCode||a.which:a];return Array.isArray(u)&&(u=r?u[a.shiftKey?1:0]:u[0]),u},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};G.Spacebar=G[" "],G.Digit0=G[0],G.Digit1=G[1],G.Digit2=G[2],G.Digit3=G[3],G.Digit4=G[4],G.Digit5=G[5],G.Digit6=G[6],G.Digit7=G[7],G.Digit8=G[8],G.Digit9=G[9],G.Tilde=G["~"],G.GraveAccent=G["`"],G.ExclamationPoint=G["!"],G.AtSign=G["@"],G.PoundSign=G["#"],G.PercentSign=G["%"],G.Caret=G["^"],G.Ampersand=G["&"],G.PlusSign=G["+"],G.MinusSign=G["-"],G.EqualsSign=G["="],G.DivisionSign=G["/"],G.MultiplicationSign=G["*"],G.Comma=G[","],G.Decimal=G["."],G.Colon=G[":"],G.Semicolon=G[";"],G.Pipe=G["|"],G.BackSlash=G["\\"],G.QuestionMark=G["?"],G.SingleQuote=G["'"],G.DoubleQuote=G['"'],G.LeftCurlyBrace=G["{"],G.RightCurlyBrace=G["}"],G.LeftParenthesis=G["("],G.RightParenthesis=G[")"],G.LeftAngleBracket=G["<"],G.RightAngleBracket=G[">"],G.LeftSquareBracket=G["["],G.RightSquareBracket=G["]"];var Z0;function rf(){return rf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},rf.apply(null,arguments)}var wS=function(a){return p.createElement("svg",rf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Z0||(Z0=p.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};function $S(a,r){zi(a,r,"data-container",!0)}function NS(a){const r={};return zi(a,r,"data-dropdown-container",!0),r}function Ev(a){const r={};return zi(a,r,"data-menu",!0),r}function zi(a,r,u,o){Object.keys(a).forEach(s=>{typeof s=="string"&&s.startsWith(u)&&(r[s]=a[s],o&&delete a[s])})}const TS=X(wS)`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${a=>a.$isOpen?180:0}deg);
  & *[fill^='#'] {
    fill: ${({appearance:a,theme:r})=>a==="white"?`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`:`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`};
  }

  &:hover *[fill^='#'] {
    fill: ${a=>a.appearance==="white"?"":`var(--admiral-color-Primary_Primary70, ${a.theme.color["Primary/Primary 70"]})`};
  }

  &[data-loading] {
    pointer-events: none;
  }

  &[data-disabled] {
    pointer-events: none;

    *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,$o=a=>{let r=a;return r=r.replace("box-shadow: ",""),r=r.replace(";",""),r},MS=(a,r)=>{return(u=a,Object.keys(u)).some(o=>a[o]!==r[o]);var u};function _v(a,r){const u={};return{observe(){u.rafId&&cancelAnimationFrame(u.rafId);const o=()=>{if(u.isObserving){const{scrollHeight:s,scrollLeft:d,scrollTop:m,scrollWidth:y}=a,{bottom:g,height:v,left:b,right:S,top:_,width:T,x:N,y:D}=a.getBoundingClientRect(),M={bottom:g,height:v,left:b,right:S,top:_,width:T,x:N||b,y:D||_,scrollHeight:s,scrollLeft:d,scrollTop:m,scrollWidth:y};MS(M,u.rect||{})&&(u.rect=M,r(M)),u.rafId=requestAnimationFrame(o)}};u.rafId=requestAnimationFrame(o),u.isObserving=!0},unobserve(){u.rafId&&cancelAnimationFrame(u.rafId),u.isObserving&&(u.isObserving=!1)}}}const OS=X.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:a})=>a.zIndex.dropdown});
`,Cf=({targetElement:a,rootRef:r,fullContainerWidth:u,...o})=>{const s=p.useRef(null);return p.useEffect(()=>{const d=s.current;if(d&&a){const m=_v(a,y=>{if(y){const{x:g,y:v,height:b,width:S}=y,{style:_}=d;_.top=`${v}px`,_.left=u?"0px":`${g}px`,_.height=`${b}px`,_.width=u?"100%":`${S}px`}});return m.observe(),()=>{m.unobserve()}}},[a,u]),E1.createPortal(w.jsx(OS,{ref:s,...o}),(r==null?void 0:r.current)||document.body)};function AS(a,r){const u=p.useRef(null),o=p.useRef(a);return p.useEffect(()=>{o.current=a},[a]),p.useEffect(()=>(u.current=setInterval(()=>o.current(),r),()=>clearInterval(u.current||0)),[r]),u}function xa(...a){return r=>{a.forEach(u=>{u&&(typeof u=="function"?u(r):u.current=r)})}}const Hi=p.createContext({}),DS=({rootRef:a,...r})=>{const[u,o]=p.useState([]),[s,d]=p.useState(void 0),m=p.useCallback(S=>{d(S)},[]),y=p.useCallback(S=>{d(_=>_===S?void 0:_)},[]),g=p.useCallback(S=>{o(_=>{const T=_.indexOf(S);return T>-1?_.slice(0,T):_})},[]),v=p.useCallback(S=>{o(_=>[..._,S])},[]),b=p.useMemo(()=>({addDropdown:v,removeDropdown:g,dropdowns:u,rootRef:a,activateMenu:m,deactivateMenu:y,currentActiveMenu:s}),[v,g,u,a,m,y,s]);return w.jsx(Hi.Provider,{value:b,children:r.children})};function wv(a){const{dropdowns:r=[],addDropdown:u,removeDropdown:o,activateMenu:s,deactivateMenu:d,currentActiveMenu:m}=p.useContext(Hi),y=r.indexOf(a);return{addDropdown:u,removeDropdown:o,dropdowns:y>-1?r.slice(y+1,r.length):[],activateMenu:s,deactivateMenu:d,currentActiveMenu:m}}const CS=(a,r)=>!r.some(u=>u.current&&u.current.contains(a.target)),BS=(a,r,u)=>{const o=a.bottom-a.top+8,s=r.top>=o,d=u-r.bottom>=o,m=r.top>=0&&r.bottom<=u,y=r.bottom<=0,g=r.top>=u,v=r.top<0&&0<r.bottom&&r.bottom<u,b=0<r.top&&r.top<u&&r.bottom>u;if(m){if(!s&&!d)return{upward:!1,translateY:u-r.bottom-o-16+"px"};if(s&&d)return{upward:!1,translateY:"0"};if(!s&&d)return{upward:!1,translateY:"0"};if(s&&!d)return{upward:!0,translateY:"0"}}else{if(y)return{upward:!1,translateY:0-r.bottom+8+"px"};if(g)return{upward:!0,translateY:u-r.top-8+"px"};if(v)return d?{upward:!1,translateY:"0"}:{upward:!1,translateY:0-r.bottom+8+"px"};if(b)return s?{upward:!0,translateY:"0"}:{upward:!0,translateY:""+(u-r.top-8)}}return{upward:!1,translateY:"0"}},zS=(a,r,u)=>{const o=a.right-a.left,s=r.left>=0&&r.right<=u,d=r.right<=0,m=r.left>=u,y=r.left<0&&0<r.right&&r.right<u,g=r.right>u&&0<r.left&&r.left<u;if(s){const v=u-r.left>=o,b=r.right>=o,S=o>r.width;if(!b&&!v)return{align:"flex-end",translateX:u-r.right-16+"px"};if(b&&v)return{align:"flex-end",translateX:"0"};if(S&&!b&&v)return{align:"flex-start",translateX:"0"};if(S&&!v&&b)return{align:"flex-end",translateX:"0"}}else{if(d||y)return{align:"flex-start",translateX:0-r.left+16+"px"};if(m||g)return{align:"flex-end",translateX:u-r.right-16+"px"}}return{align:"",translateX:"0"}},HS=X.div`
  pointer-events: initial;
  margin: 8px 0;
  flex: 0 0 auto;
  ${a=>a.$alignSelf?`align-self: ${a.$alignSelf};`:""};
  max-width: calc(100vw - 32px);
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;

  &:focus-visible {
    border: 2px solid blue;
  }

  ${a=>a.$dropContainerCssMixin}
`,RS=X.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`,jS=X(Cf)`
  display: flex;
  flex-direction: ${a=>a.$reverse?"column-reverse":"column"};
  flex-wrap: nowrap;
`,US=()=>null,Bf=p.forwardRef(({targetElement:a,onClickOutside:r=US,className:u="",alignSelf:o,dropContainerCssMixin:s,...d},m)=>{const y=p.useRef(null),[g,v]=p.useState(!1),{rootRef:b}=p.useContext(Hi);p.useLayoutEffect(()=>{var N;y.current!==document.activeElement&&((N=y==null?void 0:y.current)==null||N.focus())},[]);const S=p.useCallback(()=>{const N=y.current;if(N&&a){const D=N.getBoundingClientRect(),M=a.getBoundingClientRect(),Y=globalThis.innerHeight,B=globalThis.innerWidth,{upward:j,translateY:te}=BS(D,M,Y);if(g!==j&&v(j),o&&o!=="auto")N.style.transform=`translateY(${te})`;else{const{align:K,translateX:ee}=zS(D,M,B);N.style.transform=`translate(${ee}, ${te})`,N.style.alignSelf=K}}},[g,a]);AS(S,100),p.useEffect(()=>{y.current&&(y.current.style.opacity="1")},[]);const[_,T]=p.useState(!1);return p.useEffect(()=>{function N(){T(!0)}return document.addEventListener("mousedown",N,!0),document.addEventListener("touchstart",N,!0),()=>{document.removeEventListener("mousedown",N,!0),document.removeEventListener("touchstart",N,!0)}},[]),p.useEffect(()=>{function N(D){r(D)}if(_)return document.addEventListener("mouseup",N),document.addEventListener("touchend",N),()=>{document.removeEventListener("mouseup",N),document.removeEventListener("touchend",N)}},[_]),w.jsx(w.Fragment,{children:w.jsxs(jS,{targetElement:a,$reverse:g,rootRef:b,onMouseDown:()=>T(!1),children:[w.jsx(RS,{}),w.jsx(HS,{ref:xa(m,y),...d,className:u+" dropdown-container",$alignSelf:o,$dropContainerCssMixin:s})]})})});Bf.displayName="DropdownContainer";const LS=X(Bf)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>$o(a.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${a=>bl(a.theme.shape)});
  overflow: hidden;
  width: max-content;
  background: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
`;LS.displayName="StyledDropdownContainer";function YS(...a){return r=>a.forEach(u=>function(o,s){typeof o=="function"?o(s):o!=null&&(o.current=s)}(u,r))}function uf(...a){return p.useCallback(YS(...a),a)}function $v(a){return p.forwardRef(a)}const zf=q`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,kS=X.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,qS=X.div`
  ${zf}
`,PS=X.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 10px;
`,GS=X.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10px;
`,VS=X.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  border-block: 4px solid transparent;
`,XS=X.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-inline: 4px solid transparent;
`,QS=X.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${a=>a.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,ZS=X.div`
  pointer-events: all;
  position: relative;
  height: 6px;
  border-radius: 6px;
  background-color: ${a=>a.theme.color["Opacity/Neutral 16"]};
  width: var(${"--horizontal-thumb-width"}, 20px);
`,FS=X.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${a=>a.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,WS=X.div`
  pointer-events: all;
  position: relative;
  width: 6px;
  border-radius: 6px;
  background-color: ${a=>a.theme.color["Opacity/Neutral 16"]};
  height: var(${"--vertical-thumb-height"}, 20px);
`,KS=$v(({children:a,verticalScrollProps:r,horizontalScrollProps:u,minThumbSize:o=20,contentBlockProps:s={},...d},m)=>{const y=p.useMemo(()=>s.id?s.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[s.id]),[g,v]=p.useState(null),b=uf(s.ref,S=>v(S));return w.jsxs(kS,{ref:m,...d,children:[w.jsx(qS,{...s,id:y,ref:b,children:a}),w.jsx(Nv,{contentNode:g,verticalScrollProps:r,horizontalScrollProps:u,minThumbSize:o})]})}),Nv=({verticalScrollProps:a={},horizontalScrollProps:r={},contentNode:u,minThumbSize:o=20})=>{const s=p.useMemo(()=>u!=null&&u.id?u==null?void 0:u.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[u==null?void 0:u.id]),[d,m]=p.useState(null),[y,g]=p.useState(null),[v,b]=p.useState(null),[S,_]=p.useState(null),[T,N]=p.useState(null),[D,M]=p.useState(null),[Y,B]=p.useState(!1),[j,te]=p.useState(!1),[K,ee]=p.useState(0),[ne,pe]=p.useState(0),[he,be]=p.useState(0),[Re,ze]=p.useState(0),[Oe,rt]=p.useState(0),[Ae,U]=p.useState(0),W=uf(a.ref,Z=>m(Z)),J=uf(r.ref,Z=>b(Z));return p.useLayoutEffect(()=>{if(u&&T&&D&&d&&v&&y&&S){const{observe:Z,unobserve:x}=_v(u,R=>{if(R){const Q=function(Nt){const{clientHeight:Je,scrollHeight:qt}=Nt;return qt-Je>=1}(u),V=function(Nt){const{clientWidth:Je,scrollWidth:qt}=Nt;return qt-Je>=1}(u),I=Math.min(Math.max(0,R.scrollTop),R.scrollHeight-R.height),re=Math.min(Math.max(0,R.scrollLeft),R.scrollWidth-R.width);u.style.setProperty("--vertical-content-scroll",`${I}px`),u.style.setProperty("--horizontal-content-scroll",`${re}px`),d.style.setProperty("display",Q?null:"none"),d.style.setProperty("bottom",V?"10px":null),v.style.setProperty("display",V?null:"none"),v.style.setProperty("right",Q?"10px":null);const ae=function(Nt,Je){const{clientHeight:qt,scrollHeight:Ut}=Nt,{clientHeight:at}=Je;return Math.max(Math.round(qt*at/Ut),o)}(u,y),Ne=function(Nt,Je){const{clientWidth:qt,scrollWidth:Ut}=Nt,{clientWidth:at}=Je;return Math.max(Math.round(qt*at/Ut),o)}(u,S);T.style.setProperty("--vertical-thumb-height",`${ae}px`),D.style.setProperty("--horizontal-thumb-width",`${Ne}px`);const{scrollTop:ge,scrollLeft:Xe,scrollHeight:St,scrollWidth:Fe}=u,{clientHeight:je}=y,{clientWidth:jt}=S,za=Math.round(Math.min(ge/St*je,je-ae)),Ea=Math.round(Math.min(Xe/Fe*jt,jt-Ne));T.style.top=`${za}px`,D.style.left=`${Ea}px`}});return Z(),x}},[u,T,D,d,v,y,S]),p.useEffect(()=>{function Z(R){R.preventDefault(),R.stopPropagation(),Y&&B(!1),j&&te(!1)}function x(R){if(u){if(R.preventDefault(),R.stopPropagation(),Y){const{scrollHeight:Q,clientHeight:V}=u,I=(R.clientY-K)*(Q/V),re=Math.round(Math.min(he+I,Q-V));u.scrollTop=re}if(j){const{scrollWidth:Q,clientWidth:V}=u,I=(R.clientX-ne)*(Q/V),re=Math.round(Math.min(Re+I,Q-V));u.scrollLeft=re}}}if(Y||j)return document.addEventListener("mousemove",x),document.addEventListener("mouseup",Z),()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",Z)}},[u,Y,j,he,Re,K,ne]),p.useEffect(()=>{if(u){const{scrollHeight:Z,clientHeight:x}=u,R=Math.round(Oe*Z-x/2);u.scrollTo({top:R,behavior:"smooth"})}},[Oe]),p.useEffect(()=>{if(u){const{scrollWidth:Z,clientWidth:x}=u,R=Math.round(Ae*Z-x/2);u.scrollTo({left:R,behavior:"smooth"})}},[Ae]),p.useEffect(()=>{document.body.style.setProperty("cursor",Y||j?"grabbing":null)},[Y,j]),w.jsxs(w.Fragment,{children:[w.jsxs(PS,{...a,ref:W,role:"scrollbar","aria-controls":s,children:[w.jsx(FS,{onClick:function(Z){if(Z.preventDefault(),Z.stopPropagation(),u){const{clientHeight:x}=u,{top:R}=u.getBoundingClientRect();rt((Z.clientY-R)/x)}}}),w.jsx(VS,{ref:Z=>g(Z),children:w.jsx(WS,{ref:N,onMouseDown:function(Z){Z.preventDefault(),Z.stopPropagation(),ee(Z.clientY),u&&be(u.scrollTop),B(!0)},style:{cursor:Y?"grabbing":"grab"}})})]}),w.jsxs(GS,{...r,ref:J,role:"scrollbar","aria-controls":s,children:[w.jsx(QS,{onClick:function(Z){if(Z.preventDefault(),Z.stopPropagation(),u){const{clientWidth:x}=u,{left:R}=u.getBoundingClientRect();U((Z.clientX-R)/x)}}}),w.jsx(XS,{ref:Z=>_(Z),children:w.jsx(ZS,{ref:M,onMouseDown:function(Z){Z.preventDefault(),Z.stopPropagation(),pe(Z.clientX),u&&ze(u.scrollLeft),te(!0)},style:{cursor:j?"grabbing":"grab"}})})]})]})},JS=q`
  ${({$dimension:a})=>a==="s"?$e["Body/Body 2 Long"]:$e["Body/Body 1 Long"]}
  ul[data-dimension='s'] & {
    ${$e["Body/Body 2 Long"]}
  }
`,IS=q`
  color: ${({theme:a,$disabled:r})=>r?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`};
`,ex=q`
  background: ${({theme:a,$selected:r,$preselected:u,$hovered:o})=>o?`var(--admiral-color-Opacity_Hover, ${a.color["Opacity/Hover"]})`:u?`var(--admiral-color-Opacity_Press, ${a.color["Opacity/Press"]})`:r?`var(--admiral-color-Opacity_Focus, ${a.color["Opacity/Focus"]})`:`var(--admiral-color-Special_ElevatedBG, ${a.color["Special/Elevated BG"]})`};
`,tx=q`
  padding: ${({$dimension:a})=>{switch(a){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}};
  ul[data-dimension='m'] && {
    padding: 8px 16px;
  }
  ul[data-dimension='s'] && {
    padding: 6px 12px;
  }
`;var F0;function of(){return of=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},of.apply(null,arguments)}var ax=function(a){return p.createElement("svg",of({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),F0||(F0=p.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};const nx=X(ax)`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
  [data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
`,lx=a=>{a.preventDefault(),a.stopPropagation()},Hf=p.forwardRef(({children:a,expandIcon:r=w.jsx(nx,{}),hasSubmenu:u,onHover:o,disabled:s,readOnly:d,hovered:m,dimension:y="l",selected:g=!1,preselected:v=!1,selfRef:b,onMouseDown:S,onLeave:_,containerRef:T,...N},D)=>{const M=s?lx:S,Y=b?xa(D,b):D;return w.jsxs(rx,{ref:Y,$dimension:y,$preselected:v,$selected:g,$hovered:m,"data-preselected":v,"data-hovered":m,"data-disabled":s,"data-readonly":d,"data-dimension":y,onMouseEnter:B=>{var j;o==null||o(B),(j=N.onMouseEnter)==null||j.call(N,B)},onMouseLeave:B=>{var j;_==null||_(B),(j=N.onMouseLeave)==null||j.call(N,B)},onMouseMove:B=>{var j;o==null||o(B),(j=N.onMouseMove)==null||j.call(N,B)},onMouseDown:M,...N,children:[p.Children.toArray(a).map((B,j)=>typeof B=="string"?w.jsx(ix,{children:B},B+j):B),u&&r]})});Hf.displayName="MenuItem";const rx=X.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  box-sizing: border-box;
  ${tx}
  ${JS}
  ${IS}
  ${ex}

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
    && input[type='checkbox'] + * [fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
    }
  }

  &&[data-readonly='true'] {
    cursor: default;
  }
`,ix=X.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;function Rf(a){const r=p.useRef();return p.useEffect(()=>{r.current=a}),r.current}const W0=X.div`
  display: flex;
  flex: 0 0 auto;
`,ux=({scrollContainerRef:a,itemHeight:r,rowCount:u=6,aheadItemsCount:o=3,model:s,activeId:d,selected:m,onRenderItem:y})=>{const[g,v]=p.useState(0),[b,S]=p.useState({startIndex:0,endIndex:u,topPadding:"",bottomPadding:"",needAddListener:!1}),_=Rf({activeId:d}),T=p.useCallback(M=>{requestAnimationFrame(()=>{M.target&&v(M.target.scrollTop)})},[a]);p.useEffect(()=>{const M=a.current;return v((M==null?void 0:M.scrollTop)||0),M==null||M.addEventListener("scroll",T),()=>M==null?void 0:M.removeEventListener("scroll",T)},[T]),p.useEffect(()=>{b.needAddListener&&(setTimeout(()=>{var M;return(M=a==null?void 0:a.current)==null?void 0:M.addEventListener("scroll",T)}),S({...b,needAddListener:!1}))},[b,a]);const N=p.useCallback(M=>{const Y=s.length,B=Math.max(0,M);let j=u+2*o;return j=Math.min(Y-B,j),{startIndex:B,endIndex:B+j,topPadding:B*r+"px",bottomPadding:(Y-B-j)*r+"px"}},[r,o,s,u]);p.useEffect(()=>{const M=Math.floor(g/r-o),Y={...N(M),needAddListener:!1};S(Y)},[g,N]),p.useEffect(()=>{var Y;if(!d||!_||_.activeId===d)return;const M=s.findIndex(B=>B.id===d);M!==-1&&(M<b.startIndex||M>b.endIndex)&&((Y=a==null?void 0:a.current)==null||Y.removeEventListener("scroll",T),S({...N(M),needAddListener:!0}))},[d,b,N,a]);const D=p.useMemo(()=>[...s].slice(b.startIndex,b.endIndex).map((M,Y)=>y==null?void 0:y(M,Y)),[s,d,m,b]);return w.jsxs(w.Fragment,{children:[w.jsx(W0,{style:{minHeight:b.topPadding}}),D,w.jsx(W0,{style:{minHeight:b.bottomPadding}})]})},Tv=(a,r)=>{const u=p.useCallback(o=>{a.every(s=>s.current&&!s.current.contains(o.target))&&r(o)},[r,a]);p.useEffect(()=>(document.addEventListener("mousedown",u,!0),document.addEventListener("touchstart",u),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("touchstart",u)}),[u])},ox=(a,r)=>{let u,o=!1,s=!1;return[(...d)=>{if(s||o)return;const m=a(...d);return o=!0,u=setTimeout(()=>{o=!1},r),m},()=>{s=!0,clearTimeout(u)}]};function cx(a,r,u){const o=a.getBoundingClientRect(),s=r.getBoundingClientRect(),d=document.documentElement.clientWidth-o.right>s.width,m=o.left>s.width,y=u==="right"?!d&&m?"left":"right":!m&&d?"right":"left";return document.documentElement.clientHeight-o.top>s.height-1?{position:`${y}Bottom`}:{position:y,bottomOffset:8-(document.documentElement.clientHeight-o.top-s.height)}}const Mv=(a,r)=>{for(let u=0;u<a.length;u++){const o=a[u];if(o.id===r)return o;if(o.subItems&&o.subItems.length>0){const s=Mv(o.subItems,r);if(s)return s}}},Ov=(a,r)=>!!a.subItems&&a.subItems.some(u=>r.includes(u.id)||Ov(u,r)),K0=a=>Array.isArray(a)?[...a]:[a],sx=X.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`,fx=X(Cf)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:a})=>a?`flex-direction: ${a};`:"flex-direction: column;"}
`,dx=X.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,hx=X.div`
  position: relative;
  align-self: flex-start;
`,mx=X.div`
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>$o(a.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${a=>bl(a.theme.shape)});
  overflow: hidden;
  box-sizing: border-box;
`,Av=({targetElement:a,children:r,onClickOutside:u,defaultRenderDirection:o="right",...s})=>{const{rootRef:d}=p.useContext(Hi),m=p.useRef(null),[y,g]=p.useState(null),[v,b]=p.useState("row");p.useLayoutEffect(()=>{const[N,D]=ox(()=>{g({})},100);return addEventListener("resize",N),addEventListener("scroll",N),()=>{removeEventListener("resize",N),removeEventListener("scroll",N),D()}});const{addDropdown:S,removeDropdown:_,dropdowns:T}=wv(m);return p.useLayoutEffect(()=>(S==null||S(m),()=>{_==null||_(m)}),[]),Tv([m],N=>{a&&!a.contains(N.target)&&CS(N,T)&&(u==null||u(N))}),p.useLayoutEffect(()=>{const N=m.current;if(a&&N){const{position:D,bottomOffset:M=0}=cx(a,N,o);switch(D){case"right":b("row"),N.style.bottom=`${M}px`;break;case"left":b("row-reverse"),N.style.bottom=`${M}px`;break;case"rightBottom":default:b("row"),N.style.bottom="8px";break;case"leftBottom":b("row-reverse"),N.style.bottom="8px"}}},[a,y]),a&&w.jsx(sx,{children:w.jsxs(fx,{targetElement:a,rootRef:d,$flexDirection:v,fullContainerWidth:!1,children:[w.jsx(dx,{}),w.jsx(hx,{ref:m,...s,children:w.jsx(mx,{children:r})})]})})};Av.displayName="SubMenu";const Dv=a=>{switch(a){case"l":default:return 48;case"m":return 40;case"s":return 32}},gx=q`
  max-height: ${({$dimension:a,$rowCount:r})=>{return`min(calc(100vh - 16px), ${u=r,o=a,Dv(o)*u+16}px)`;var u,o}};
`,vx=X.div`
  overflow: hidden;
  position: relative;

  padding: 0;
  ${a=>a.$hasTopPanel?"padding-top: 8px":""};
  ${a=>a.$hasBottomPanel?"padding-bottom: 8px":""};
  box-sizing: border-box;
  display: flex;

  flex-direction: column;
  align-items: stretch;
  pointer-events: initial;
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  max-width: calc(100vw - 32px);
  border-color: transparent;
  &:focus-visible {
    border: 0;
    outline: none;
  }
`,px=X(KS)`
  position: relative;
  ${a=>a.$hasTopPanel?"":"padding-top: 8px"};
  ${a=>a.$hasBottomPanel?"":"padding-bottom: 8px"};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  box-sizing: border-box;
  ${gx};
  ${a=>a.$maxHeight?`max-height: ${a.$maxHeight}`:""};
`,jf=p.forwardRef(({model:a,defaultSelected:r,selected:u,preselected:o,active:s,onPreselectItem:d,onSelectItem:m,onDeselectItem:y,onActivateItem:g,renderTopPanel:v,renderBottomPanel:b,dimension:S="l",multiSelection:_=!1,disableSelectedOptionHighlight:T=!1,onForwardCycleApprove:N,onBackwardCycleApprove:D,containerRef:M,virtualScroll:Y,rowCount:B=6,parentMenuRef:j,onCloseQuery:te,defaultIsActive:K=!0,subMenuRenderDirection:ee,preventFocusSteal:ne,maxHeight:pe,preselectedModeActive:he=!1,onMenuKeyDown:be,disableSelectionOnSpace:Re,disableSelectionOnEnter:ze,...Oe},rt)=>{const Ae=ie=>{const ce=ie?a.findIndex(We=>We.id===ie):-1;let ve=ce<a.length-1?ce+1:0,Ce=!1;for(;(a[ve].disabled||a[ve].readOnly)&&!Ce;)ve=ve<a.length-1?ve+1:0,Ce=ce===-1?ve===0:ve===ce;return ve=!(ce>-1&&ve<ce)||!N||N()?ve:ce,a[ve].disabled||a[ve].readOnly?void 0:a[ve].id},U=a.length>0?Ae():void 0,[W,J]=p.useState(r?K0(r):[]),[Z,x]=p.useState(U),[R,Q]=p.useState(U),V=p.useRef(null),I=p.useRef(null),[re,ae]=p.useState(null),[Ne,ge]=p.useState(!1),Xe=p.useRef();p.useEffect(()=>{x(U)},[a]);const St=T?[]:u===void 0?W:K0(u),Fe=s===void 0?Z:s,je=he?o===void 0?R:o:void 0,jt=p.useRef(null),za=p.useRef(null),Ea=!!v,Nt=!!b,Je=ie=>{Fe!==ie&&x(ie),g==null||g(ie)},qt=ie=>{je!==ie&&Q(ie),d==null||d(ie)},Ut=ie=>{const ce=Mv(a,ie);if(ce&&!ce.disabled&&!ce.readOnly){const ve=W.findIndex(Ce=>Ce===ie);_?ve>-1?(J(W.splice(ve,1)),y==null||y(ie)):(J([...W,ie]),m==null||m(ie)):(ve===-1&&J([ie]),m==null||m(ie))}},{currentActiveMenu:at,activateMenu:it,deactivateMenu:_a}=wv(V);p.useEffect(()=>{function ie(ce){if((at==null?void 0:at.current)===V.current)switch(G.getCode(ce)){case G[" "]:if(Re)break;he&&je?Ut(je):Fe&&Ut(Fe),ce.preventDefault();break;case G.Enter:if(ze)break;he&&je?Ut(je):Fe&&Ut(Fe),ce.preventDefault();break;case G.ArrowDown:{const ve=Ae(he&&je||Fe);he?qt(ve):Je(ve),ce.preventDefault();break}case G.ArrowUp:{const ve=(Ce=>{const We=Ce?a.findIndex(Te=>Te.id===Ce):-1;let Ue=We>0?We-1:a.length-1,Qt=!1;for(;(a[Ue].disabled||a[Ue].readOnly)&&!Qt;)Ue=Ue>0?Ue-1:a.length-1,Qt=We===-1?Ue===0:Ue===We;return Ue=We>-1&&Ue>We&&D&&!D()?We:Ue,a[Ue].disabled||a[Ue].readOnly?void 0:a[Ue].id})(he&&je||Fe);he?qt(ve):Je(ve),ce.preventDefault();break}case G.ArrowRight:{const ve=he&&je||Fe,Ce=a.find(We=>We.id===ve);!Ce||Ce.disabled||Ce.readOnly||!Ce.subItems||Ne||ge(!0),I&&I.current&&(it==null||it(I));break}case G.ArrowLeft:j&&j.current&&(te==null||te());break;default:be==null||be(ce)}}return document.addEventListener("keydown",ie),()=>{document.removeEventListener("keydown",ie)}},[s,Fe,Z,at,je,Re,ze]),p.useEffect(()=>(K&&(it==null||it(V)),()=>{K&&at===V&&(_a==null||_a(V))}),[K]);const Sl=()=>{ge(!1),it==null||it(V)},qe=(ie,ce)=>{const{id:ve,subItems:Ce,render:We,...Ue}=ie,Qt=!!Ce&&Ce.length>0,Te=Fe===ve,Zt=St.includes(ve)||Ov(ie,St),Ft={hovered:Te,preselected:je!==void 0?je===ve:void 0,selected:Zt,onLeave:ra=>{var Wt,fn;const ia=ra.relatedTarget;ia&&Object.hasOwn(ia,"nodeName")&&!((Wt=I.current)!=null&&Wt.contains(ia))&&!((fn=za.current)!=null&&fn.contains(ia))&&ge(!1)},onHover:ra=>{Je(ve),ge(Qt),ae(ra.currentTarget)},onMouseDown:ne?ra=>ra.preventDefault():void 0,onClick:()=>Ut(ve),hasSubmenu:Qt,disabled:Ue.disabled,...Ue};return typeof We=="function"?We({containerRef:M,...Ft}):w.jsx(Hf,{...Ft,children:We},`${ie.id}-${ce}`)},Vn=p.useRef(),Ha=p.useRef(),xt=p.useRef(),et=p.useRef();p.useLayoutEffect(()=>{setTimeout(()=>{var ce,ve;let ie;if(s&&Vn.current!==s||Ha.current!==Z?ie=(ce=jt.current)==null?void 0:ce.querySelector('[data-hovered="true"]'):(o&&xt.current!==o||et.current!==R)&&(ie=(ve=jt.current)==null?void 0:ve.querySelector('[data-preselected="true"]')),ie){const Ce=Date.now(),We=Xe.current;ie==null||ie.scrollIntoView({behavior:!We||Ce-We<150?"auto":"smooth",inline:"center",block:"nearest"}),Xe.current=Ce,Vn.current=s,Ha.current=Z,xt.current=o,et.current=R}},0)},[s,Z,o,R,a]);const dt=Ev(Oe);return p.useEffect(()=>{if(!re||!jt.current)return;const ie={root:jt.current,rootMargin:"0px",threshold:.5},ce=new IntersectionObserver(ve=>{ve.forEach(Ce=>{ge(!(Ce.intersectionRatio<ie.threshold))})},ie);return ce.observe(re),()=>ce.disconnect()},[re]),w.jsxs(vx,{ref:xa(V,rt),$dimension:S,$hasTopPanel:Ea,$hasBottomPanel:Nt,onMouseEnter:ie=>{var ce;at!==V&&(it==null||it(V)),(ce=Oe.onMouseEnter)==null||ce.call(Oe,ie)},onMouseLeave:ie=>{var ce;Je(void 0),(ce=Oe.onMouseLeave)==null||ce.call(Oe,ie)},onFocus:ie=>{var ce;at!==V&&(it==null||it(V)),(ce=Oe.onFocus)==null||ce.call(Oe,ie)},onBlur:ie=>{var ce;at===V&&(_a==null||_a(V)),(ce=Oe.onBlur)==null||ce.call(Oe,ie)},...Oe,children:[Ea&&v({dimension:S}),w.jsx(px,{$dimension:S,$rowCount:B,$hasTopPanel:Ea,$hasBottomPanel:Nt,$maxHeight:pe,...dt,verticalScrollProps:{ref:za},contentBlockProps:{ref:jt},children:Y?(()=>{if(!Y)return null;const ie=Y.itemHeight==="auto"?Dv(S):Y.itemHeight;return w.jsx(ux,{scrollContainerRef:jt,itemHeight:ie,model:a,rowCount:B,activeId:Fe,selected:St,onRenderItem:qe})})():a.map((ie,ce)=>qe({dimension:S,...ie},ce))}),Ne&&re&&w.jsx(Av,{targetElement:re,defaultRenderDirection:ee,onClickOutside:j?void 0:()=>{ge(!1)},children:(()=>{const ie=a.find(ce=>ce.id===Fe);return ie&&ie.subItems&&ie.subItems.length>0&&w.jsx(jf,{ref:I,dimension:S,parentMenuRef:V,model:ie.subItems,subMenuRenderDirection:ee,onCloseQuery:Sl,selected:St,onSelectItem:ce=>Ut(ce),virtualScroll:Y,preventFocusSteal:!0})})()}),Nt&&b({dimension:S})]})});jf.displayName="Menu";var J0;function cf(){return cf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},cf.apply(null,arguments)}var No=function(a){return p.createElement("svg",cf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),J0||(J0=p.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};function Ai(a){switch(a){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function Cv(a){switch(a){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function I0(a){return Ai(a)+2*Cv(a)}const yx=q`
  & *[fill^='#'] {
    fill: ${a=>{switch(a.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`;default:return a.$iconColor}}};
  }
`,bx=X.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${yx}

  & > svg {
    height: ${a=>Ai(a.$dimension)}px;
    width: ${a=>Ai(a.$dimension)}px;
  }
`,_i=X.div`
  width: ${a=>I0(a.$dimension)}px;
  height: ${a=>I0(a.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,Sx=q`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${_i} {
      background-color: ${a=>a.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${a.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${_i} {
      background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${_i} {
      background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${_i} {
      background-color: transparent;
    }
  }
`,xx=X.button`
  position: relative;
  padding: 0;
  margin: ${a=>Cv(a.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${a=>Ai(a.$dimension)}px;
  width: ${a=>Ai(a.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
  &:not(:disabled) {
    ${Sx}
  }
`,Ex=p.forwardRef(({type:a="button",dimension:r="lBig",disabled:u=!1,highlightFocus:o=!0,appearance:s,children:d,...m},y)=>{const g=typeof s=="object"?s.iconColor?s.iconColor:"secondary":s;return w.jsxs(xx,{ref:y,type:a,$dimension:r,disabled:u,$highlightFocus:o,...m,children:[w.jsx(_i,{$dimension:r,"aria-hidden":!0}),w.jsx(bx,{$dimension:r,$iconColor:g,"aria-hidden":!0,children:d})]})}),_x=p.forwardRef(({className:a,...r},u)=>w.jsx(Ex,{ref:u,className:`close-button ${a||""}`,...r,children:w.jsx(No,{"aria-hidden":!0})}));var eg,tg,ag,ng,lg,rg;function sf(){return sf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},sf.apply(null,arguments)}var wx=function(a){return p.createElement("svg",sf({xmlns:"http://www.w3.org/2000/svg",fill:"none"},a),eg||(eg=p.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),tg||(tg=p.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),ag||(ag=p.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),ng||(ng=p.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),lg||(lg=p.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),rg||(rg=p.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))};const $x=xv`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Bv=X(wx)`
  animation: ${$x} 1s linear infinite;
  path {
    fill: ${({$inverse:a,theme:r})=>a?`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`};
  }
  width: 100%;
  height: 100%;
`,Nx=a=>xv`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, ${a.theme.color["Neutral/Neutral 20"]});
    border-color: var(--admiral-color-Neutral_Neutral20, ${a.theme.color["Neutral/Neutral 20"]});
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
  }
`,zv=q`
  animation: ${a=>Nx(a)} 2s ease infinite;
`,Tx=()=>{let a=0;const r=document.createElement("div");return r.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,r.style.overflow="scroll",r.style.fontSize="14px",r.style.height="50px",r.style.maxHeight="50px",r.style.width="100px",r.style.position="absolute",r.style.top="-100000px",r.style.left="-100000px",document.body.appendChild(r),a=r.offsetWidth-r.clientWidth,document.body.removeChild(r),a||16},Mx=X.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,Ox=X.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${a=>a.theme.color["Neutral/Neutral 80"]});
  ${a=>a.$dimension==="m"?$e["Body/Body 2 Short"]:$e["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${a=>$o(a.theme.shadow["Shadow 04"])});
  padding: ${a=>a.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,Ax=X.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,Dx=X(Cf)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:a})=>a?`flex-direction: ${a};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:a})=>a.zIndex.tooltip});
`;function Cx(a,r,u,o){const s=a.getBoundingClientRect(),d=r.getBoundingClientRect(),m=Object.entries(function(v){return{bottom:{check:(b,S)=>{const _=globalThis.innerHeight-b.bottom-v>8+S.height,T=b.left+b.width/2>S.width/2,N=globalThis.innerWidth-b.right-v+b.width/2>S.width/2;return _&&T&&N}},top:{check:(b,S)=>{const _=b.top>8+S.height,T=b.left+b.width/2>S.width/2,N=globalThis.innerWidth-b.right-v+b.width/2>S.width/2;return _&&T&&N}},left:{check:(b,S)=>{const _=b.left>8+S.width,T=b.top>(S.height-b.height)/2,N=globalThis.innerHeight-b.bottom-v>(S.height-b.height)/2;return _&&N&&T}},right:{check:(b,S)=>{const _=globalThis.innerWidth-b.right-v>8+S.width,T=b.top>(S.height-b.height)/2,N=globalThis.innerHeight-b.bottom-v>(S.height-b.height)/2;return _&&N&&T}},bottomRight:{check:(b,S)=>{const _=globalThis.innerHeight-b.bottom-v>8+S.height,T=globalThis.innerWidth-b.left-v>S.width;return _&&T}},bottomLeft:{check:(b,S)=>{const _=globalThis.innerHeight-b.bottom-v>8+S.height,T=b.right>S.width;return _&&T}},topRight:{check:(b,S)=>{const _=b.top>8+S.height,T=globalThis.innerWidth-b.left-v>S.width;return _&&T}},topLeft:{check:(b,S)=>{const _=b.top>8+S.height,T=b.right>S.width;return _&&T}},leftBottom:{check:(b,S)=>{const _=b.left>8+S.width,T=globalThis.innerHeight-b.top-v>S.height;return _&&T}},leftTop:{check:(b,S)=>{const _=b.left>8+S.width,T=b.bottom>S.height;return _&&T}},rightBottom:{check:(b,S)=>{const _=globalThis.innerWidth-b.right-v>8+S.width,T=globalThis.innerHeight-b.top-v>S.height;return _&&T}},rightTop:{check:(b,S)=>{const _=globalThis.innerWidth-b.right-v>8+S.width,T=b.bottom>S.height;return _&&T}},bottomPageCenter:{check:(b,S)=>{const _=globalThis.innerHeight-b.bottom-v>8+S.height,T=globalThis.innerWidth-v>=S.width;return _&&T}},topPageCenter:{check:(b,S)=>{const _=b.top>8+S.height,T=globalThis.innerWidth-v>=S.width;return _&&T}}}}(u)),y=o?m.filter(v=>v[0].includes(o)&&v[1].check(s,d)):m.filter(v=>v[1].check(s,d)),g=o||"bottom";return y.length?y[0][0]:g}const Bx=1500,yr=p.forwardRef(({dimension:a="m",renderContent:r,targetElement:u,tooltipPosition:o,...s},d)=>{const m=p.useRef(null),y=p.useRef(0),{rootRef:g}=p.useContext(Hi),v=p.useMemo(()=>!r()&&r()!==0,[r]),[b,S]=p.useState(),[_,T]=p.useState(!1),[N,D]=p.useState({});return p.useEffect(()=>{(M=>{const Y=u;if(Y&&m.current){const B=Cx(Y,m.current,M,o),j=m.current;switch(B){case"leftBottom":case"leftTop":case"left":S("row-reverse"),T(!1),j.style.margin="0 8px 0 0",j.style.alignSelf=B==="leftBottom"?"flex-start":B==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":S("row"),T(!1),j.style.margin="0 0 0 8px",j.style.alignSelf=B==="rightBottom"?"flex-start":B==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":S("column-reverse"),T(B==="topPageCenter"),j.style.margin="0 0 8px 0",j.style.alignSelf=B==="topLeft"?"flex-end":B==="topRight"?"flex-start":"center";break;default:S("column"),T(B==="bottomPageCenter"),j.style.margin="8px 0 0 0",j.style.alignSelf=B==="bottomLeft"?"flex-end":B==="bottomRight"?"flex-start":"center"}}})(Tx())},[r(),u,o,N]),p.useLayoutEffect(()=>{if(m.current&&!v){const M=new ResizeObserver(Y=>{Y.forEach(B=>{y.current===0?y.current=B.contentRect.height:D({})})});return M.observe(m.current),()=>{M.disconnect()}}},[v]),p.useEffect(()=>{m.current&&!v&&(m.current.style.opacity="1")},[v]),v?null:w.jsxs(Dx,{targetElement:u,rootRef:g,$flexDirection:b,fullContainerWidth:_,children:[w.jsx(Ax,{}),w.jsx(Mx,{ref:xa(d,m),children:w.jsx(Ox,{role:"tooltip",$dimension:a,...s,children:r()})})]})});yr.displayName="Tooltip";function zx(a){return $v((r,u)=>{const{renderContent:o,container:s,withDelay:d,tooltipRef:m,tooltipPosition:y,tooltipDimension:g,...v}=r,b=!o()&&o()!==0,S=p.useRef(null),[_,T]=p.useState(!1),[N,D]=p.useState(null),[M,Y]=p.useState();return p.useEffect(()=>{function B(){Y(setTimeout(()=>T(!0),d?Bx:0))}function j(){clearTimeout(M),T(!1)}if(N)return N.addEventListener("mouseenter",B),N.addEventListener("focus",B),N.addEventListener("mouseleave",j),N.addEventListener("blur",j),()=>{M&&clearTimeout(M),N.removeEventListener("mouseenter",B),N.removeEventListener("focus",B),N.removeEventListener("mouseleave",j),N.removeEventListener("blur",j)}},[N,Y,T,M]),w.jsxs(w.Fragment,{children:[w.jsx(a,{...v,ref:xa(u,S,D)}),_&&!b&&w.jsx(yr,{targetElement:S.current,renderContent:o,container:s,tooltipPosition:y,dimension:g,ref:m})]})})}const Hx=q`
  background: ${({$appearance:a,theme:r})=>{switch(a){case"info":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"warning":return`var(--admiral-color-Warning_Warning50Main, ${r.color["Warning/Warning 50 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`;case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"grey":return`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral80, ${r.color["Neutral/Neutral 80"]})`;case"whiteBlue":return`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`;case"white":case"whiteInactive":case"whiteDisable":return`var(--admiral-color-Neutral_Neutral00, ${r.color["Neutral/Neutral 00"]})`;default:return`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`}}};
`,Rx=q`
  color: ${({$appearance:a,theme:r})=>{switch(a){case"info":case"warning":case"success":case"error":case"grey":return`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral00, ${r.color["Neutral/Neutral 00"]})`;case"whiteBlue":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"lightInactive":case"whiteInactive":return`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`;case"whiteDisable":case"lightDisable":return`var(--admiral-color-Neutral_Neutral30, ${r.color["Neutral/Neutral 30"]})`;default:return`var(--admiral-color-Neutral_Neutral90, ${r.color["Neutral/Neutral 90"]})`}}};
`,jx=X.div`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({$dimension:a})=>a==="s"?"0 5px":"0 6px"};
  height: ${({$dimension:a})=>a==="s"?"16px":"20px"};
  border-radius: ${({$dimension:a})=>a==="s"?"8px":"10px"};
  ${({$dimension:a})=>a==="s"?$e["Caption/Caption 1"]:$e["Body/Body 2 Long"]}
  ${Hx}
  ${Rx}
  user-select: none;
`,Uf=p.forwardRef(({children:a,dimension:r="m",appearance:u="light",locale:o,...s},d)=>{const m=Df()||wo,y=(o==null?void 0:o.amountAriaLabel)||m.locales[m.currentLocale].badge.amountAriaLabel;return w.jsx(jx,{ref:d,$dimension:r,$appearance:u,"aria-label":`${y} ${a}`,...s,children:a})});Uf.displayName="Badge";X(Uf)`
  &:is(input:checked + div *) {
    background: ${a=>a.$disabled?`var(--admiral-color-Neutral_Neutral00, ${a.theme.color["Neutral/Neutral 00"]})`:`var(--admiral-color-Special_StaticWhite, ${a.theme.color["Special/Static White"]})`};
    color: ${a=>a.$disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`};
  }
`;const ig=q`
  background-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
    border-color: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Primary_Primary80, ${a=>a.theme.color["Primary/Primary 80"]});
    border-color: var(--admiral-color-Primary_Primary80, ${a=>a.theme.color["Primary/Primary 80"]});
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,ug=q`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    &:not(.button-group > button) {
      border-color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,og=q`
  background-color: var(--admiral-color-Opacity_Neutral8, ${a=>a.theme.color["Opacity/Neutral 8"]});
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Neutral12, ${a=>a.theme.color["Opacity/Neutral 12"]});
    color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Neutral16, ${a=>a.theme.color["Opacity/Neutral 16"]});
    color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Opacity_Neutral8, ${a=>a.theme.color["Opacity/Neutral 8"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Ux=q`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Lx=q`
  background-color: transparent;
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(
      --admiral-color-Opacity_DarkStaticHover,
      ${a=>a.theme.color["Opacity/Dark Static Hover"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    }
  }

  &&&:active {
    background-color: var(
      --admiral-color-Opacity_DarkStaticPress,
      ${a=>a.theme.color["Opacity/Dark Static Press"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    border-color: var(
      --admiral-color-Special_DarkStaticNeutral30,
      ${a=>a.theme.color["Special/Dark Static Neutral 30"]}
    );
    color: var(--admiral-color-Special_DarkStaticNeutral30, ${a=>a.theme.color["Special/Dark Static Neutral 30"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral30, ${a=>a.theme.color["Special/Dark Static Neutral 30"]});
    }
  }
`,Yx=q`
  background-color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
    border-color: var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Error_Error80, ${a=>a.theme.color["Error/Error 80"]});
    border-color: var(--admiral-color-Error_Error80, ${a=>a.theme.color["Error/Error 80"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,kx=q`
  background-color: var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
    border-color: var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Success_Success70, ${a=>a.theme.color["Success/Success 70"]});
    border-color: var(--admiral-color-Success_Success70, ${a=>a.theme.color["Success/Success 70"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,qx=q`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,Px=q`
  &[data-appearance~='primary']:not(.button-group > button) {
    ${ig}
  }
  &[data-appearance~='secondary']:not(.button-group > button) {
    ${ug}
  }
  &[data-appearance~='tertiary']:not(.button-group > button) {
    ${og}
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    ${Ux}
  }
  &[data-appearance~='white']:not(.button-group > button) {
    ${Lx}
  }
  &[data-appearance~='danger']:not(.button-group > button) {
    ${Yx}
  }
  &[data-appearance~='success']:not(.button-group > button) {
    ${kx}
  }
  &:is(.button-group[data-appearance='primary'] > button) {
    ${ig}
  }
  &:is(.button-group[data-appearance='secondary'] > button) {
    ${ug}
  }
  &:is(.button-group[data-appearance='tertiary'] > button) {
    ${og}
  }

  ${qx}
`,hr=X.div``;function kn(a){switch(a){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}q`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${kn("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${kn("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${kn("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${kn("s")}px;`}
  }
`;q`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${kn("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${kn("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${kn("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${kn("s")}px;`}
  }
`;const cg=q`
  padding: 0;
  height: 56px;
  ${a=>a.$displayAsSquare?"width: 56px;":"padding: 0 29px;"}
  ${hr} {
    width: 24px;
    height: 24px;
  }

  ${$e["Button/Button 1"]}
`,Gx=q`
  ${cg}

  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${cg}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    height: 48px;
    ${a=>a.$displayAsSquare?"width: 48px;":"padding: 0 21px;"}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    height: 40px;
    ${a=>a.$displayAsSquare?"width: 40px;":"padding: 0 17px;"}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    height: 32px;
    ${a=>a.$displayAsSquare?"width: 32px;":"padding: 0 13px;"}
    ${hr} {
      width: 20px;
      height: 20px;
    }
    ${$e["Button/Button 2"]}
  }
`,Hv=X.div`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - ${a=>a.$addPadding}px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${hr} {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  .button-group[data-dimension='m'] &&,
  .button-group[data-dimension='l'] &&,
  .button-group[data-dimension='xl'] && {
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  .button-group[data-dimension='s'] &&,
  [data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`,Vx=X(hr)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
  .button-group[data-appearance='primary'] & {
    & path {
      fill: ${a=>`var(--admiral-color-Special_StaticWhite, ${a.theme.color["Special/Static White"]})`};
    }
  }
  .button-group[data-appearance='secondary'] &,
  .button-group[data-appearance='tertiary'] & {
    & path {
      fill: ${a=>`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`};
    }
  }
`,sg=X.div`
  display: inline-block;
  width: 2px;
`,qn=p.forwardRef(({appearance:a="primary",dimension:r="xl",type:u="button",loading:o=!1,skeleton:s=!1,iconStart:d,iconEnd:m,icon:y,iconPlace:g="left",children:v,buttonCssMixin:b,displayAsDisabled:S,displayAsSquare:_,...T},N)=>{const D=!!d||!!y&&g==="left",M=!!m||!!y&&g==="right",Y=(_||D?0:2)+(_||M?0:2);return w.jsxs(Xx,{ref:N,$appearance:a,$dimension:r,type:u,$loading:o,$skeleton:s,$buttonCssMixin:b,$displayAsSquare:_,$displayAsDisabled:S,...T,children:[o&&w.jsx(Vx,{children:w.jsx(Bv,{$inverse:a!=="secondary"&&a!=="tertiary"&&a!=="ghost"})}),!_&&!D&&w.jsx(sg,{}),w.jsxs(Hv,{$addPadding:Y,children:[D?w.jsx(hr,{children:d||y}):null,p.Children.toArray(v).map((B,j)=>typeof B=="string"?w.jsx("div",{children:B},B+j):B),M?w.jsx(hr,{children:m||y}):null]}),!_&&!M&&w.jsx(sg,{})]})}),Xx=X.button.attrs(a=>({"data-dimension":a.$dimension,"data-appearance":[a.$appearance,a.$displayAsDisabled?"disabled":void 0].filter(r=>r!==void 0).join(" ")}))`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${bl(a.theme.shape)})`};
  appearance: none;
  vertical-align: middle;
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  ${a=>(a.$loading||a.$skeleton)&&"pointer-events: none"};

  ${Px};
  ${Gx};
  ${a=>a.$buttonCssMixin};
  ${({$skeleton:a})=>a&&zv};

  ${Hv} {
    ${a=>a.$loading||a.$skeleton?"visibility: hidden;":""}
  }
`;qn.displayName="Button";var fg;function ff(){return ff=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},ff.apply(null,arguments)}var Qx=function(a){return p.createElement("svg",ff({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},a),fg||(fg=p.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))},dg;function df(){return df=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},df.apply(null,arguments)}var Zx=function(a){return p.createElement("svg",df({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},a),dg||(dg=p.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))};const Fx=q`
  width: ${({$dimension:a})=>{switch(a){case"m":default:return"20px";case"s":return"16px"}}};

  fieldset[data-dimension='s'] & {
    width: 16px;
  }
`,Wx=q`
  height: ${({$dimension:a})=>{switch(a){case"m":default:return"20px";case"s":return"16px"}}};
  fieldset[data-dimension='s'] & {
    height: 16px;
  }
`,Kx=X(Qx)`
  pointer-events: none;
`,Jx=X(Zx)`
  pointer-events: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }
`,Ix=X.div`
  position: relative;
  box-sizing: border-box;
  cursor: ${a=>a.$disabled?"not-allowed":a.$readOnly?"default":"pointer"};

  overflow: visible;
  ${Fx};
  ${Wx};
  flex: 0 0 auto; // при вставке во flex контейнер не должны изменяться размеры
`,gl=X.div`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
  outline: 0;
  transition: background-color 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  border: 1px solid
    ${({$error:a,theme:r})=>a?`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`};
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }
`,Rv=q`
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
`,hg=q`
  &:not(:disabled) {
    &::after {
      ${Rv};
      background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    }
  }
`,e2=q`
  &:not(:disabled) {
    &::after {
      ${Rv};
      background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    }
  }
`,mg=q`
  pointer-events: none;
  & + ${gl} {
    border: 1px solid var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  }
`,hf=q`
  background-color: var(--admiral-color-Primary_Primary30, ${a=>a.theme.color["Primary/Primary 30"]});
  border: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  }
`,jv=q`
  background-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: none;
`,t2=q`
  & + ${gl} {
    ${jv}
  }
`,Uv=q`
  & + ${gl} {
    ${hf}
  }
`,a2=q`
  ${a=>a.readOnly?Uv:t2}
`,n2=X.input`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
  margin: 0;
  padding: 0;

  ${a=>a.readOnly&&mg}

  &:checked + ${gl} {
    ${a=>a.readOnly?hf:jv}
  }
  &:checked:disabled + ${gl} {
    ${hf}
  }

  ${a=>a.$indeterminate&&a2}

  &:not(:checked) + ${gl} {
    > * {
      display: ${a=>a.$indeterminate?"block":"none"};
    }
  }

  &:disabled {
    cursor: not-allowed;
    ${mg}
    ${a=>a.$indeterminate&&Uv}
  }

  ${a=>!a.readOnly&&a.$hovered&&hg}

  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${hg}

  &:active:not(:disabled) {
    ${e2}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,Lv=p.forwardRef(({className:a,dimension:r="m",disabled:u,readOnly:o,hovered:s,indeterminate:d,error:m,...y},g)=>w.jsxs(Ix,{$dimension:r,$disabled:u,$readOnly:o,className:a,children:[w.jsx(n2,{ref:g,disabled:u,readOnly:o,...y,type:"checkbox",$indeterminate:d,onKeyDown:v=>{var b;o&&G.getCode(v)===G[" "]&&v.preventDefault(),(b=y.onKeyDown)==null||b.call(y,v)},"data-hovered":s,$hovered:s}),w.jsx(gl,{$error:m,children:w.jsx(d?Jx:Kx,{"aria-hidden":"true",focusable:"false"})})]}));Lv.displayName="Checkbox";function Yv(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}const l2=q`
  height: ${({$dimension:a})=>{switch(a){case"xl":return"56px";case"s":return"32px";default:return"40px"}}};
`,kv=q`
  ${zv}
  & > * {
    visibility: hidden;
  }
`,qv=X.div`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${bl(a.theme.shape)})`};

  pointer-events: ${a=>a.$skeleton?"none":"all"};
  ${({$skeleton:a})=>a&&kv};
`,r2=X(qv)`
  ${l2};
`;function mf(a,r){return a.value!==r.value||a.selectionStart!==r.selectionStart||a.selectionEnd!==r.selectionEnd}function ba(a,r){var d;const{value:u=a.value,selectionStart:o,selectionEnd:s}=r;if(mf(a,{value:u,selectionStart:o,selectionEnd:s})){const m=(d=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a),"value"))==null?void 0:d.set;let y;m==null||m.call(a,u),typeof o=="number"&&typeof s=="number"&&a.setSelectionRange(o,s),typeof Event=="function"?y=new Event("input",{bubbles:!0}):(y=document.createEvent("Event"),y.initEvent("input",!0,!0)),a.dispatchEvent(y)}}var gg;function gf(){return gf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},gf.apply(null,arguments)}var i2=function(a){return p.createElement("svg",gf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),gg||(gg=p.createElement("path",{fill:"#74767B",d:"M21.7 10.04c.29.2.38.6.18.9-.5.75-1.14 1.57-1.92 2.36l1.84 1.84c.25.25.25.66 0 .91a.64.64 0 0 1-.92 0l-1.87-1.86c-.93.8-2.01 1.51-3.22 2.02l1.03 2.49a.65.65 0 0 1-1.2.5l-1.06-2.56a9.7 9.7 0 0 1-5.13.01L8.37 19.2a.65.65 0 0 1-1.2-.5l1.03-2.47c-1.25-.52-2.32-1.25-3.23-2.04l-1.86 1.86a.64.64 0 0 1-.92 0 .646.646 0 0 1 0-.91l1.84-1.85c-.8-.83-1.43-1.67-1.9-2.34-.2-.29-.13-.7.16-.9.3-.21.7-.13.91.16 1.46 2.1 4.34 5.48 8.8 5.48 4.03 0 7.14-2.98 8.79-5.47.2-.3.61-.38.91-.18"})))},vg;function vf(){return vf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},vf.apply(null,arguments)}var u2=function(a){return p.createElement("svg",vf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),vg||(vg=p.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.43 10.68C3.86 8.65 7.11 5 12 5c4.88 0 8.13 3.65 9.56 5.68.56.8.56 1.83 0 2.63C20.13 15.34 16.88 19 12 19c-4.89 0-8.14-3.66-9.57-5.69-.56-.8-.56-1.83 0-2.63M6.29 12c0 3.14 2.56 5.7 5.71 5.7 3.14 0 5.7-2.56 5.7-5.7 0-3.15-2.56-5.71-5.7-5.71-3.15 0-5.71 2.56-5.71 5.71m14.21-.57c-.53-.74-1.27-1.66-2.21-2.51.45.93.71 1.97.71 3.08 0 1.1-.26 2.14-.71 3.07.94-.85 1.68-1.77 2.21-2.51.24-.35.24-.78 0-1.13m-17.01 0c.53-.74 1.27-1.66 2.21-2.51-.45.93-.7 1.97-.7 3.08 0 1.1.25 2.14.7 3.07-.94-.85-1.68-1.77-2.21-2.51a.98.98 0 0 1 0-1.13M12 9.7c0-.39-.32-.71-.7-.62A3.002 3.002 0 0 0 12 15a3 3 0 0 0 2.91-2.31c.09-.38-.23-.69-.62-.69h-1c-.71 0-1.29-.59-1.29-1.3z"})))};function o2({icon:a,...r}){return w.jsx(a,{...r})}const Di=X(o2)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
  cursor: pointer;

  [data-loading] &&& {
    pointer-events: none;
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
  }
`,c2=q`
  width: ${({$dimension:a})=>{switch(a){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
  height: ${({$dimension:a})=>{switch(a){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
`,s2=X.div`
  position: relative;
  container-type: inline-size;
  ${c2};

  & svg {
    ${a=>a.$svgMixin||""}
  }
`,Lf=({dimension:a="m",inverse:r=!1,svgMixin:u,...o})=>w.jsx(s2,{$dimension:a,$svgMixin:u,role:"alert","aria-live":"assertive",...o,children:w.jsx(Bv,{$inverse:r})});Lf.displayName="Spinner";const pl=a=>!!a&&(a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth),pf=a=>{switch(a.$dimension){case"xl":default:return 24;case"s":return 20}},Ci=a=>{switch(a.$dimension){case"xl":default:return 16;case"s":return 12}},f2=q`
  padding-right: ${a=>Ci(a)+(pf(a)+8)*(a.$iconsAfterCount??0)}px;
  padding-left: ${a=>Ci(a)+(pf(a)+8)*(a.$iconsBeforeCount??0)}px;
`,d2=q`
  background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,h2=q`
  ${({$status:a,theme:r})=>{if(!a)return`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`}}}
`,ur=X.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-radius: inherit;

  border: 1px solid ${h2};
  ${a=>a.disabled&&"border-color: transparent;"};
`,m2=q`
  border-color: ${({$status:a,theme:r})=>{if(!a)return`var(--admiral-color-Neutral_Neutral60, ${r.color["Neutral/Neutral 60"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error70, ${r.color["Error/Error 70"]})`;case"success":return`var(--admiral-color-Success_Success60, ${r.color["Success/Success 60"]})`}}};
`,g2=q`
  border: 2px solid
    ${({$status:a,theme:r})=>{if(!a)return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`}}};
`,v2=q`
  &:focus-within:not(:disabled) > ${ur} {
    ${a=>a.disabled||a.readOnly?"border-color: transparent":a.$isLoading?"":g2}
  }

  &:hover:not(:focus-within) > ${ur} {
    ${a=>a.$isLoading?"":a.disabled||a.readOnly?"transparent":m2};
  }
`,p2=q`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,y2=X.input`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  text-overflow: ellipsis;
  padding: 0 ${Ci}px;

  ${a=>a.$dimension==="s"?$e["Body/Body 2 Long"]:$e["Body/Body 1 Long"]}

  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    &::selection {
      background-color: transparent;
    }
  }

  background-color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});

  &&&:user-invalid + ${ur} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  &&&:user-invalid:hover:not(:disabled) + ${ur} {
    border: 1px solid var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  &&&:user-invalid:focus:not(:disabled) + ${ur} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${d2}
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  ${f2}
  ${p2}
`,Pv=X.div`
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  & svg {
    border-radius: var(--admiral-border-radius-Medium, ${a=>bl(a.theme.shape)});
    display: block;
    width: ${pf}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
    }
  }
`,b2=X(Pv)`
  left: 0;

  padding-left: ${Ci}px;

  & > *:not(:first-child) {
    margin-right: 8px;
  }
`,S2=X(Pv)`
  right: 0;

  padding-right: ${Ci}px;

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`,x2=X(r2)`
  ${v2}
  ${a=>a.disabled?"cursor: not-allowed;":a.$isLoading?"cursor: default;":""}
`;function E2(a){return a||{}}const Gv=p.forwardRef(({dimension:a="m",type:r,displayClearIcon:u,isLoading:o,status:s,handleInput:d=E2,containerRef:m,icons:y,iconsBefore:g,iconsAfter:v,children:b,className:S,style:_,placeholder:T,skeleton:N=!1,showTooltip:D=!0,disableCopying:M,...Y},B)=>{const j=p.useRef(null),te=m||p.useRef(null),K=p.Children.toArray(v||y),ee=p.Children.toArray(g),[ne,pe]=p.useState(!1),[he,be]=p.useState(!1),[Re,ze]=p.useState(Y.defaultValue??void 0),Oe=Y.value??Re;p.useEffect(()=>{pl(j.current)?pe(!0):pe(!1)},[he,pe]),p.useLayoutEffect(()=>{function J(){document.activeElement!==j.current&&be(!0)}function Z(){be(!1)}const x=te.current;if(x)return x.addEventListener("mouseenter",J),x.addEventListener("mouseleave",Z),x.addEventListener("mousedown",Z),()=>{x.removeEventListener("mouseenter",J),x.removeEventListener("mouseleave",Z),x.removeEventListener("mousedown",Z)}},[be]);const[rt,Ae]=p.useState(!1);if(!Y.readOnly&&r==="password"){const J=rt?u2:i2;K.push(w.jsx(Di,{icon:J,onClick:()=>{Ae(!rt)},"aria-hidden":!0},"eye-icon"))}!Y.readOnly&&u&&Oe&&K.unshift(w.jsx(Di,{icon:No,onMouseDown:J=>{J.preventDefault()},onClick:()=>{j.current&&ba(j.current,{value:""})},"aria-hidden":!0},"clear-icon")),o&&K.unshift(w.jsx(Lf,{dimension:a==="s"?"ms":"m"},"loading-icon"));const U=ee.length,W=K.length;return p.useLayoutEffect(()=>{const J=d(null);function Z(x){const{value:R,selectionStart:Q,selectionEnd:V}=this,I=d({value:R,selectionStart:Q,selectionEnd:V},x);T&&!mf(J,I)?ba(this,{...I,value:""}):ba(this,I)}if(r!=="date"&&j.current){const x=j.current;x.addEventListener("input",Z);const{value:R,selectionStart:Q,selectionEnd:V}=x,I=d({value:R,selectionStart:Q,selectionEnd:V});return T&&!mf(J,I)?ba(x,{...I,value:""}):ba(x,I),()=>{x.removeEventListener("input",Z)}}},[d,T]),p.useEffect(()=>{function J(){this.selectionEnd=this.selectionStart}if(M&&j.current){const Z=j.current;return Z.addEventListener("select",J,!0),()=>Z.removeEventListener("select",J,!0)}},[M]),w.jsxs(w.Fragment,{children:[w.jsxs(x2,{className:S,style:_,$dimension:a,ref:te,disabled:Y.disabled,readOnly:Y.readOnly,$isLoading:o,$status:s,"data-disabled":!!Y.disabled||void 0,"data-read-only":!!Y.readOnly||void 0,"data-loading":!!o||void 0,"data-status":s,$skeleton:N,"data-disable-copying":!!M||void 0,children:[w.jsx(y2,{ref:xa(B,j),...Y,onChange:J=>{var Z;ze(J.currentTarget.value),(Z=Y.onChange)==null||Z.call(Y,J)},placeholder:T,$dimension:a,$iconsAfterCount:W,$iconsBeforeCount:U,type:r==="password"&&rt?"text":r}),w.jsx(ur,{$status:s,disabled:Y.disabled||Y.readOnly}),U>0&&w.jsx(b2,{disabled:Y.disabled,$dimension:a,children:ee}),W>0&&w.jsx(S2,{disabled:Y.disabled,$dimension:a,children:K}),b]}),D&&he&&ne&&w.jsx(yr,{renderContent:()=>{var J;return((J=j==null?void 0:j.current)==null?void 0:J.value)||""},targetElement:te.current})]})});Gv.displayName="TextInput";const Vv=p.createContext(null),Xv=()=>p.useContext(Vv),_2=({children:a,...r})=>w.jsx(Vv.Provider,{value:r,children:a}),w2=p.createContext(null),Qv=()=>p.useContext(w2),mr=35,pg=4,Yf=q`
  height: ${({$dimension:a})=>a==="m"?"32px":"24px"};
`,$2=q`
  width: ${({$dimension:a})=>a==="m"?"32px":"24px"};
`,yf=q`
  height: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,N2=q`
  height: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,bf=q`
  width: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,T2=q`
  padding: ${({$dimension:a})=>a==="m"?"6px 12px":"4px 8px"};
`,M2=q`
  padding: ${({$dimension:a})=>a==="m"?"5px 11px":"3px 7px"};
`,O2=q`
  ${({$appearance:a})=>a==="filled"?T2:M2}
`,A2=q`
  &:hover {
    color: ${({theme:a,$appearance:r,$selected:u})=>u?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:r!=="filled"||u?`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`};
  }
`,D2=q`
  ${({$dimension:a})=>a==="s"?$e["Caption/Caption 1"]:$e["Body/Body 2 Long"]}
  color: ${({theme:a,$appearance:r,$disabled:u,$selected:o})=>u&&!o?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:o||o&&u?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:r==="filled"?`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};

  ${a=>!a&&A2}
`,C2=q`
  &:hover {
    ${({theme:a,$appearance:r,$selected:u,$withCloseIcon:o})=>u?`background-color: var(--admiral-color-Primary_Primary70, ${a.color["Primary/Primary 70"]});`:r==="filled"?`background-color: var(--admiral-color-Opacity_Neutral12, ${a.color["Opacity/Neutral 12"]});`:o?void 0:`background-color: var(--admiral-color-Opacity_Hover, ${a.color["Opacity/Hover"]});`};
    ${a=>a.$selected&&`
      border-color: var(--admiral-color-Primary_Primary70, ${a.theme.color["Primary/Primary 70"]});
    `}
  }
  &:active {
    ${({theme:a,$appearance:r,$selected:u,$withCloseIcon:o})=>u?`background-color: var(--admiral-color-Primary_Primary80, ${a.color["Primary/Primary 80"]});`:r==="filled"?`background-color: var(--admiral-color-Opacity_Neutral16, ${a.color["Opacity/Neutral 16"]});`:o?void 0:`background-color: var(--admiral-color-Opacity_Press, ${a.color["Opacity/Press"]});`};
    ${a=>a.$selected&&`
      border-color: var(--admiral-color-Primary_Primary80, ${a.theme.color["Primary/Primary 80"]});
    `}
  }
`,B2=q`
  background-color: ${({theme:a,$appearance:r,$selected:u,$disabled:o})=>u&&!o?`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`:u&&o?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:r==="filled"?`var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`:"transparent"};

  border: ${({theme:a,$appearance:r,$disabled:u})=>r==="filled"?"none":u?`1px solid var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:`1px solid var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};

  border-radius: 16px;

  ${a=>a.$clickable&&!a.$disabled&&C2}

  &:focus-visible {
    outline: 0;

    &:before {
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
      border-radius: 20px;
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      pointer-events: none;
    }
  }
`,z2=X.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-width: 190px;
  user-select: none;
  & > * {
    pointer-events: ${({$disabled:a})=>a?"none":"auto"};
  }
  cursor: ${({$defaultChip:a,$disabled:r,$withTooltip:u})=>!a&&!u||r?r?"not-allowed":"default":"pointer"};
  ${B2}
  ${Yf}
  ${a=>a.$withCloseIcon?`padding-inline-start: ${(a.$dimension==="s"?8:12)-(a.$appearance==="outlined"?1:0)}px;`:O2}
  ${a=>a.$withBadge&&!a.$withCloseIcon?`padding-inline-end: ${(a.$dimension==="s"?4:6)-(a.$appearance==="outlined"?1:0)}px;
         padding-inline-start: ${(a.$dimension==="s"?8:12)-(a.$appearance==="outlined"?1:0)}px;`:""}
  ${D2}
`,Zv=q`
  display: flex;
  align-items: center;
  justify-content: center;
`,H2=X.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  ${a=>a.$withCloseIcon&&Zv}
  ${a=>a.$withCloseIcon?Yf:N2}
  & svg {
    ${yf}
    ${bf}
    & *[fill^='#'] {
      fill: ${({theme:a,$appearance:r,$disabled:u,$selected:o})=>o?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:u?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:r==="filled"?`var(--admiral-color-Neutral_Neutral50, ${a.color["Neutral/Neutral 50"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};
    }
  }
`,R2=X.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`,j2=X.div`
  display: inline-block;
  margin-inline-end: 8px;
`,U2=X.div`
  display: inline-block;
  margin-inline-start: ${a=>a.$withCloseIcon?"2px":"8px"};
`,yg=X.div`
  ${a=>a.$withCloseIcon&&Zv}
  ${a=>a.$withCloseIcon?Yf:yf}
  ${a=>a.$withCloseIcon?$2:bf}
  & > svg {
    ${yf}
    ${bf}
  }
`,L2=X(Uf)`
  margin-inline-start: ${({dimension:a})=>a==="s"?"6px":"8px"};
`,Y2=X(_x)`
  //дополнительный отступ в 2px, чтобы кружок ховера не стоял вплотную к элементу слева
  margin-inline-start: ${a=>a.dimension==="s"?"6px":"8px"};
  ${a=>a.appearance==="primary"?a.dimension==="s"?"margin-inline-end: 3px":"margin-inline-end: 5px":""};
`,k2=()=>"",kf=p.forwardRef(({dimension:a="m",disabled:r,appearance:u="outlined",selected:o,onClose:s,children:d,renderContentTooltip:m=k2,iconBefore:y,iconAfter:g,iconStart:v,iconEnd:b,badge:S,..._},T)=>{const N=o!==void 0,[D,M]=p.useState(!1),[Y,B]=p.useState(!1),j=!!s,te=!!S,K=p.useMemo(()=>o&&!r?"whiteBlue":r?o||u==="filled"?"whiteDisable":"lightDisable":u==="filled"?"white":"info",[u,o,r]),ee=p.useRef(null),ne=p.useRef(null);return p.useEffect(()=>{ne.current&&pl(ne.current)!==D&&M(pl(ne.current))},[Y,M]),p.useLayoutEffect(()=>{function pe(){B(!0)}function he(){B(!1)}const be=ee.current;if(be)return be.addEventListener("mouseenter",pe),be.addEventListener("mouseleave",he),be.addEventListener("focus",pe),be.addEventListener("blur",he),()=>{be.removeEventListener("mouseenter",pe),be.removeEventListener("mouseleave",he),be.removeEventListener("focus",pe),be.removeEventListener("blur",he)}},[B]),w.jsxs(w.Fragment,{children:[w.jsx(z2,{..._,ref:xa(T,ee),$dimension:a,$disabled:r,$appearance:u,$selected:o,$defaultChip:N,$withCloseIcon:j,$withTooltip:D,$withBadge:te,onKeyDown:pe=>{var he,be;if(!r){const Re=G.getCode(pe);Re!==G.Enter&&Re!==G[" "]||(j?s==null||s():(he=_.onClick)==null||he.call(_,pe)),(be=_.onKeyDown)==null||be.call(_,pe)}},tabIndex:_.tabIndex??(r?-1:0),$clickable:!!_.onClick,children:w.jsxs(H2,{$dimension:a,$disabled:r,$appearance:u,$selected:o,$withCloseIcon:j,children:[(v||y)&&w.jsx(j2,{children:w.jsx(yg,{$dimension:a,$withCloseIcon:j,children:v||y})}),w.jsx(R2,{ref:ne,children:d}),S!==void 0&&w.jsx(L2,{"data-badge":!0,dimension:a,appearance:K,children:S}),!s&&(b||g)&&w.jsx(U2,{$dimension:a,children:w.jsx(yg,{$dimension:a,$withCloseIcon:j,children:b||g})}),s&&w.jsx(Y2,{dimension:a==="m"?"mBig":"s",highlightFocus:!1,onMouseDown:pe=>{pe.preventDefault(),s==null||s(_.id)},disabled:r,tabIndex:-1,appearance:u==="outlined"?"primary":"secondary"})]})}),Y&&D&&w.jsx(yr,{targetElement:ee.current,renderContent:m})]})});kf.displayName="Chips";const Fv=X.div`
  width: ${mr}px;
  height: 24px;
`,q2=X.div`
  display: flex;
  width: ${mr}px;
  visibility: hidden;
  [data-show-count] & {
    visibility: visible;
  }
  > * {
    width: ${mr}px;
    border-radius: 16px;
    // Убирает действие inline-block
    display: flex;
  }
`,P2=X(kf)`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 4px 0;
  cursor: pointer;
`,G2=X.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`,V2=q`
  // оставлено, чтоб обрабатывался onClick
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
`,X2=X(kf)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({disabled:a})=>a&&V2};

  min-width: ${mr}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }

  // По дизайну при наведении цвет самого чипса меняться не должен, но т.к. есть обработчик onClick для stopPropagation,
  // то крестик чипса получается clickable и при ховере меняет цвет
  // disabled и readOnly чипсы не меняют цвет при ховере (в readOnly в целом отсутствует кнопка крестика)
  &:hover {
    ${({theme:a,disabled:r})=>{if(!r)return`background-color: var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`}}
  }
`,Iu=({value:a,disabled:r,renderChip:u,...o},s)=>{const d=u(),m={};return zi(o,m,"data",!1),(y=>typeof y=="object"&&y!==null&&!p.isValidElement(y))(d)?{...d,onClose:()=>{var y;return(y=d.onClose)==null?void 0:y.call(d,{value:a,disabled:r,...m})}}:{disabled:r,onClose:()=>s(a),children:d}},bg=({className:a,option:r,disabled:u,readOnly:o,onClick:s,onChipRemove:d})=>{const m=p.useCallback(y=>()=>w.jsx(G2,{children:y}),[]);return w.jsx(X2,{className:a,tabIndex:-1,dimension:"s",appearance:"filled",onClick:s,onClose:o?void 0:Iu(r,d).onClose,disabled:Iu(r,d).disabled||u,renderContentTooltip:m(Iu(r,d).children),children:Iu(r,d).children})},Q2=({count:a,disabled:r,onClick:u})=>{const o=p.useRef(null),s=p.useRef(null);return a?w.jsx(q2,{onClick:u,ref:o,className:"counter",children:w.jsxs(P2,{ref:s,"data-visible":!0,tabIndex:-1,dimension:"s",appearance:"filled",disabled:r,children:["+",a]})}):w.jsx(Fv,{})},Z2=X.div`
  display: flex;
`,F2=p.forwardRef(({option:a,childrenOptions:r,containerRef:u,shouldShowCount:o,disabled:s,readOnly:d,onChipClick:m,onChipRemove:y},g)=>{const v=p.useRef(null),[b,S]=p.useState(!1);return p.useLayoutEffect(()=>{const _=new IntersectionObserver(function(T){if(T[0].isIntersecting&&!b){S(!0),T[0].target.setAttribute("data-visible","true");const N=T[0].target.previousElementSibling,D=T[0].target.nextElementSibling;return N&&N.removeAttribute("data-show-count"),void(D&&!D.getAttribute("data-visible")&&T[0].target.setAttribute("data-show-count",""))}if(b&&!T[0].isIntersecting){S(!1),T[0].target.removeAttribute("data-visible"),T[0].target.removeAttribute("data-show-count");const N=T[0].target.previousElementSibling;N&&N.getAttribute("data-visible")&&N.setAttribute("data-show-count","true")}},{root:u.current,threshold:[0,1]});return u.current&&v.current&&_.observe(v.current),()=>_.disconnect()},[b]),w.jsxs(Z2,{ref:xa(g,v),onMouseDown:_=>_.preventDefault(),children:[w.jsx(bg,{className:"chip",option:a,disabled:s,readOnly:d,onClick:m,onChipRemove:y}),o&&r.length>0&&w.jsx(Q2,{count:r.length,disabled:s,children:r.map(_=>w.jsx(bg,{option:_,disabled:s,readOnly:d,onClick:m,onChipRemove:y},_.value))}),!o&&w.jsx(Fv,{})]},a.value)}),W2=({options:a,isOptionsListOpen:r,containerRef:u,hasMaxHeight:o,...s})=>{const d=Rf(r);return p.useEffect(()=>{var m,y,g;o&&a.length!==0&&(d&&!r&&((m=u.current)==null||m.scrollTo({top:0,left:0,behavior:"smooth"})),!d&&r&&setTimeout(()=>{var v,b,S;(v=u.current)==null||v.scrollTo({top:0,left:0,behavior:"instant"}),(S=u.current)==null||S.scrollTo({top:(b=u.current)==null?void 0:b.scrollHeight,left:0,behavior:"smooth"})}),r&&d&&((g=u.current)==null||g.scrollTo({top:(y=u.current)==null?void 0:y.scrollHeight,left:0,behavior:"smooth"})))},[r,a,o]),w.jsx(w.Fragment,{children:a.map((m,y)=>w.jsx(F2,{option:m,childrenOptions:y<a.length-1?a.slice(y+1):[],containerRef:u,...s},m.value))})},sn=X.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-width: 1px;
  border-style: solid;
  border-radius: inherit;
`,K2=q`
  min-height: ${({$multiple:a,$minRowCount:r,$dimension:u})=>a?r?24*r+4*(r-1)+"px":"24px":(u==="s"?20:24)+"px"};

  max-height: ${({$multiple:a,$maxRowCount:r,$opened:u,$idleHeight:o})=>a?r?24*r+4*(r-1)+"px":u||o!=="fixed"?"none":"24px":"none"};
`,J2=q`
  > * {
    margin-left: ${`-${mr+pg}px`};
  }

  padding-left: ${`${mr+pg}px`};
`,Wv=X.div`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;

  ${({$multiple:a,$isEmpty:r})=>a&&!r&&J2}

  gap: 4px;
  flex-wrap: ${({$multiple:a})=>a?"wrap":"unset"};
  align-items: center;
  align-content: flex-start;

  ${a=>a.$dimension==="s"?$e["Body/Body 2 Long"]:$e["Body/Body 1 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${K2}
  [data-disabled='true'] &&& {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
`,I2=X.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e6=q`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,t6=X.input`
  outline: none;
  appearance: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  width: 1px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${({$dimension:a})=>a==="s"?$e["Body/Body 2 Long"]:$e["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:read-only {
    cursor: inherit;
  }

  &:disabled,
  &:disabled::placeholder {
    cursor: inherit;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  height: ${({$dimension:a,$isMultiple:r})=>{return u=r,(a!=="s"||u?24:20)+"px";var u}};

  ${e6};
`,a6=q`
  pointer-events: none;
  cursor: default;
`,n6=q`
  && > *:not(${Wv}) {
    pointer-events: none;
  }

  & ${sn} {
    border-color: transparent;
  }
`,l6=q`
  ${sn} {
    border-width: 2px;
  }
`,r6=X.div`
  flex: 0 0 auto;

  display: flex;
  align-items: center;

  padding: ${({$dimension:a,$multiple:r})=>a==="s"&&r?"2px 0":"0"};

  & > * {
    margin-left: 8px;
    display: block;
    width: ${({$dimension:a})=>a==="s"?20:24}px;
    height: ${({$dimension:a})=>a==="s"?20:24}px;
  }

  [data-disabled='true'] &&& {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,i6=X.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${a=>a.$multiple?"flex-start":"center"};
  cursor: ${({disabled:a,$readonly:r,$isLoading:u})=>a?"not-allowed":r||u?"default":"pointer"};

  padding: ${({$dimension:a,$multiple:r})=>{switch(a){case"xl":return"16px 16px";case"s":return r?"4px 12px":"6px 12px";default:return"8px 16px"}}};

  background: ${({theme:a,disabled:r,$readonly:u})=>r||u?`var(--admiral-color-Neutral_Neutral10, ${a.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${a.color["Neutral/Neutral 00"]})`};

  ${({disabled:a,$readonly:r})=>r||a?n6:""};
  ${({$focused:a,$readonly:r,$isLoading:u})=>!a||r||u?"":l6};

  & ${sn} {
    border-color: ${a=>a.disabled||a.$readonly?"transparent":a.$focused&&!a.$isLoading?`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral40, ${a.theme.color["Neutral/Neutral 40"]})`};
  }

  &:hover ${sn} {
    ${a=>!a.disabled&&!a.$readonly&&!a.$focused&&!a.$isLoading&&`
      border-color: var(--admiral-color-Neutral_Neutral60, ${a.theme.color["Neutral/Neutral 60"]});
    `};
  }

  &[data-status='success'] {
    ${a=>!a.disabled&&!a.$readonly&&!a.$isLoading&&`
      ${sn} {
      border-color: var(--admiral-color-Success_Success50Main, ${a.theme.color["Success/Success 50 Main"]});
      }
      &:hover ${sn} {
        border-color: var(--admiral-color-Success_Success60, ${a.theme.color["Success/Success 60"]});
      }
    `}
  }

  &[data-status='error'],
  &:user-invalid {
    ${a=>!a.disabled&&!a.$readonly&&!a.$isLoading&&`
      ${sn} {
        border-color: var(--admiral-color-Error_Error60Main, ${a.theme.color["Error/Error 60 Main"]});
      }
  
      &:hover ${sn} {
        border-color: var(--admiral-color-Error_Error70, ${a.theme.color["Error/Error 70"]});
      }
    `}
  }

  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${bl(a.theme.shape)})`};

  ${({$skeleton:a})=>a&&kv};
  ${({$skeleton:a})=>a&&a6};
`,Kv=X.div`
  flex: 0 0 auto;

  word-break: break-word;
  display: flex;
  align-items: center;
  padding: ${({$dimension:a})=>{switch(a){case"xl":return"12px 16px";case"s":return"6px 12px";default:return"8px 16px"}}};

  background-color: transparent;

  ${({$dimension:a})=>{switch(a){case"xl":return $e["Body/Body 1 Long"];case"s":return $e["Body/Body 2 Long"];default:return $e["Body/Body 1 Short"]}}}
`,u6=q`
  ${$e["Body/Body 1 Short"]}
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  border-radius: var(--admiral-border-radius-Medium, ${a=>bl(a.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>$o(a.theme.shadow["Shadow 08"])});
  overflow: auto;
`,o6=X(jf)`
  ${u6}
`,c6=X.div`
  user-select: none;
`,s6=X(Hf)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
  ${a=>a.$selected&&!a.$hovered&&!a.$preselected&&a.$multiple&&"background-color: transparent;"}
`,f6=({visibleValue:a,isSearchPanelOpen:r,targetRef:u,forceHideOverflowTooltip:o})=>{const s=p.useRef(null),[d,m]=p.useState(!1),[y,g]=p.useState(!1);p.useEffect(()=>{s.current&&pl(s.current)!==d&&m(pl(s.current))},[y,m]),p.useEffect(()=>{function b(){g(!0)}function S(){g(!1)}const _=s.current;if(_)return _.addEventListener("mouseenter",b),_.addEventListener("mouseleave",S),()=>{_.removeEventListener("mouseenter",b),_.removeEventListener("mouseleave",S)}},[g]);const v=!o&&!r&&y&&d;return w.jsxs(w.Fragment,{children:[w.jsx(I2,{ref:s,children:a}),v&&w.jsx(yr,{renderContent:()=>a,targetElement:u.current})]})},d6=a=>a.stopPropagation(),h6=X.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  pointer-events: none;
`,m6=p.forwardRef(({options:a,...r},u)=>{const o=p.useRef(null);return p.useEffect(()=>{var d;function s(m){const y=G.getCode(m);y&&[G[" "],G.Enter,G.ArrowDown,G.ArrowUp].includes(y)&&m.preventDefault()}return(d=o.current)==null||d.addEventListener("keydown",s),()=>{var m;return(m=o.current)==null?void 0:m.removeEventListener("keydown",s)}},[]),w.jsxs(h6,{ref:xa(u,o),...r,onClick:d6,children:[w.jsx("option",{value:""}),a.map(s=>w.jsx("option",{value:s.value,disabled:s.disabled,children:s.value},s.value))]})}),Jv=p.createContext(null),g6=()=>p.useContext(Jv),v6=({children:a,...r})=>w.jsx(Jv.Provider,{value:r,children:a}),p6=(a="",r="",u="wholly")=>{const o=(u==="word"?r.split(" "):[r]).filter(Boolean).map(y=>y.toLowerCase()),s=["[","]","\\","^","$",".","|","?","*","+","(",")"],d=o.map(y=>`(${y.split("").map(g=>s.includes(g)?`\\${g}`:g).join("")})?`).join(""),m=a.split(new RegExp(d,"gi")).filter(Boolean);return!r||m.some(y=>o.includes(y.toLowerCase()))},y6=X.label`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: 0;
  user-select: none;

  cursor: ${a=>a.disabled?"not-allowed":a.readOnly?"default":"pointer"};

  ${a=>a.$dimension==="s"?$e["Body/Body 2 Short"]:$e["Body/Body 1 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.theme.color["Neutral/Neutral 90"]})`};

  fieldset[data-dimension='s'] && {
    ${$e["Body/Body 2 Short"]};
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    cursor: not-allowed;
  }

  ${a=>a.readOnly?"pointer-events: none":""};
`,b6=X.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: ${"8px"};
  ${a=>a.$dimension==="s"?$e["Body/Body 2 Short"]:$e["Body/Body 1 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.theme.color["Neutral/Neutral 90"]})`};
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
  fieldset[data-dimension='s'] && {
    ${$e["Body/Body 2 Short"]}
  }
`,S6=X.div`
  margin-top: 4px;
  ${a=>a.$dimension==="s"?$e["Caption/Caption 1"]:$e["Body/Body 2 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`};

  fieldset[data-dimension='s'] && {
    ${$e["Caption/Caption 1"]}
  }
`,x6=X(Lv)`
  margin-top: 2px;
`,Iv=p.forwardRef(({children:a,disabled:r=!1,readOnly:u=!1,hovered:o,dimension:s="m",error:d,indeterminate:m=!1,extraText:y,className:g,id:v,name:b,style:S,..._},T)=>{const N=p.useMemo(()=>v||Yv(),[v]),D={"data-field-id":N,"data-field-name":b};return $S(_,D),w.jsxs(y6,{className:g,$dimension:s,disabled:r,readOnly:u,style:S,...D,onClick:M=>{M.target.tagName!=="INPUT"&&M.stopPropagation()},children:[w.jsx(x6,{..._,ref:T,disabled:r,readOnly:u,type:"checkbox",indeterminate:m,onKeyDown:M=>{var Y;u&&G.getCode(M)===G[" "]&&M.preventDefault(),(Y=_.onKeyDown)==null||Y.call(_,M)},"data-hovered":o,hovered:o,dimension:s,id:N,name:b,error:d}),a&&w.jsxs(b6,{$dimension:s,disabled:r,children:[a,y&&w.jsx(S6,{disabled:r,$dimension:s,children:y})]})]})});Iv.displayName="CheckboxField";X(Kv)`
  background-color: ${({active:a,selected:r,theme:u})=>r?`var(--admiral-color-Opacity_Focus, ${u.color["Opacity/Focus"]})`:a?`var(--admiral-color-Opacity_Hover, ${u.color["Opacity/Hover"]})`:"transparent"};

  color: ${({disabled:a,theme:r})=>a?`var(--admiral-color-Neutral_Neutral30, ${r.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${r.color["Neutral/Neutral 90"]})`};
  cursor: ${({disabled:a})=>a?"not-allowed":"pointer"};
  & > * {
    pointer-events: ${({disabled:a})=>a?"none":"all"};
  }
`;const E6=X(Iv)`
  margin-right: 8px;
  flex-shrink: 0;
`,_6=a=>Xv()?w.jsx(w6,{...a}):null,w6=({disabled:a=!1,id:r,value:u,children:o,renderOption:s,renderChip:d,...m})=>{const y=Xv(),g=Qv(),v=(g==null?void 0:g.disabled)||a,b=p.useCallback(()=>o,[o]),S=d||b,_=p.useMemo(()=>s?s({disabled:a}):o,[s,a,u,o]),T={};zi(m,T,"data",!1);const N=p.useMemo(()=>({id:r,value:u,disabled:v,children:_,renderChip:S,...T}),[r,u,v,_,S]);return p.useEffect(()=>{var D;return(D=y==null?void 0:y.onConstantOptionMount)==null||D.call(y,N),()=>{var M;return(M=y==null?void 0:y.onConstantOptionUnMount)==null?void 0:M.call(y,N)}},[y==null?void 0:y.onConstantOptionMount,y==null?void 0:y.onConstantOptionUnMount,N]),null},$6=({id:a,disabled:r=!1,readOnly:u=!1,value:o,children:s,renderOption:d,renderChip:m,...y})=>{const g=g6(),v=Qv(),b=(v==null?void 0:v.disabled)||r,S=_=>g!=null&&g.multiple?(({selected:T=!1,hovered:N=!1})=>w.jsxs(w.Fragment,{children:[(g==null?void 0:g.showCheckbox)&&w.jsx(E6,{checked:T,hovered:N,dimension:(g==null?void 0:g.dimension)==="s"?"s":"m",disabled:r,onChange:()=>!1}),s]}))(_):s;return p.useEffect(()=>{var N;const _=a||o,T={id:o,value:o,render:D=>{return d?d(D):p.createElement(s6,{...D,dimension:(M=g==null?void 0:g.dimension,M==="xl"?"l":M),key:_,...y,$selected:D.selected,$hovered:D.hovered,$preselected:D.preselected,$multiple:g==null?void 0:g.multiple},S({selected:D.selected,hovered:D.hovered}));var M},disabled:b,readOnly:u};return(N=g==null?void 0:g.onDropDownOptionMount)==null||N.call(g,T),()=>{var D;return(D=g==null?void 0:g.onDropDownOptionUnMount)==null?void 0:D.call(g,T)}},[g==null?void 0:g.onDropDownOptionMount,g==null?void 0:g.onDropDownOptionUnMount,g==null?void 0:g.dimension,g==null?void 0:g.multiple]),null},Gs=a=>w.jsxs(w.Fragment,{children:[w.jsx(_6,{...a}),w.jsx($6,{...a})]}),N6=X(Kv)`
  color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
`,Sg=a=>a.stopPropagation(),xg=()=>{},uo=p.forwardRef(({value:a,isLoading:r,className:u,style:o,status:s,icons:d,portalTargetRef:m,targetElement:y,inputTargetRef:g,disabled:v,readOnly:b,placeholder:S,defaultValue:_,dimension:T="m",idleHeight:N="fixed",minRowCount:D="none",maxRowCount:M="none",mode:Y="select",multiple:B=!1,showCheckbox:j=!0,displayClearIcon:te=!1,onClearIconClick:K,onInputChange:ee,inputValue:ne,defaultInputValue:pe,renderSelectValue:he,onFocus:be,onBlur:Re,children:ze,alignDropdown:Oe="stretch",alignSelf:rt="stretch",skeleton:Ae=!1,locale:U,dropContainerCssMixin:W,dropContainerClassName:J,dropContainerStyle:Z,renderDropDownTopPanel:x,renderDropDownBottomPanel:R,renderTopPanel:Q,renderBottomPanel:V,forcedOpen:I=!1,onChangeDropDownState:re,onInputKeyDown:ae,onInputKeyUp:Ne,onInputKeyUpCapture:ge,onInputKeyDownCapture:Xe,searchFormat:St="wholly",onFilterItem:Fe=p6,virtualScroll:je,title:jt,forceHideOverflowTooltip:za=!1,onSelectedChange:Ea,moveSelectedOnTop:Nt,clearInputValueAfterSelect:Je=!0,openButtonPropsConfig:qt=xg,clearButtonPropsConfig:Ut=xg,...at},it)=>{const _a=Df()||wo,Sl=(U==null?void 0:U.emptyMessage)||w.jsx(N6,{$dimension:T,children:_a.locales[_a.currentLocale].select.emptyMessage}),[qe,Vn]=p.useState(a??_),[Ha,xt]=p.useState(""),et=ne===void 0?Ha:ne,[dt,ie]=p.useState(!1),[ce,ve]=p.useState(),[Ce,We]=p.useState([]),[Ue,Qt]=p.useState([]),[Te,Zt]=p.useState(I),[Ft,ra]=p.useState(!1),[ia,Wt]=p.useState(void 0),fn=a===void 0,ua=Y==="select",Ri=p.useMemo(()=>M!=="none"&&M>0?M:N==="fixed"?1:"none",[M,N])!=="none",xl=a??_,Ra=p.useRef(Array.isArray(xl)?xl:[]),Xn=p.useRef(!1),wa=p.useRef([]);p.useEffect(()=>{Array.isArray(a)&&(Ra.current=a)},[a]);const oa=p.useMemo(()=>B?null:Ce.find(F=>F.value===qe),[B,Ce,qe]),nt=p.useMemo(()=>B&&Array.isArray(qe)?qe.reduce((F,se)=>{const ue=Ce.find(Qe=>Qe.value===se);return ue&&F.push(ue),F},[]):[],[Ce,qe,B]),Ct=Rf(Te),[$a,El]=p.useState([]);p.useEffect(()=>{if(B&&Nt||!($a.length>0)||El([]),B&&Nt&&Ct!==Te&&Te){const F=nt.map(ue=>ue.value),se=F.length>0?F.reduce((ue,Qe)=>{const ct=Ue.find(gn=>gn.value===Qe);return ct&&ue.push(ct),ue},[]):[];El(se)}},[Ue,Te,nt,B,Nt]);const br=p.useMemo(()=>{const F=$a.map(ue=>ue.value),se=Ue.filter(ue=>Fe(ue.value,et,St)).reduce((ue,Qe)=>(F.includes(Qe.value)||ue.push(Qe),ue),[...$a]);return se.length?se:[{id:"emptyMessage",render:()=>w.jsx(c6,{children:Sl},"empty"),disabled:!0}]},[r,Ue,T,et,$a]);p.useEffect(()=>{ce&&(br.find(F=>F.id===ce)||ve(void 0))},[br,ce]);const ca=g??p.useRef(null),Va=p.useRef(null),Bt=p.useRef(null),Sr=y||(m==null?void 0:m.current)||Bt.current,Xa=p.useRef(null),sa=p.useRef(null),Qa=p.useRef({shouldExtendInputValue:!1}),dn=F=>{We(se=>[...se,F]),wa.current.includes(F.value)&&(wa.current=wa.current.filter(se=>se!==F.value))},ht=F=>{Ra.current.includes(F.value)&&(wa.current=[...wa.current,F.value]),We(se=>se.filter(ue=>ue.value!==F.value))},ji=p.useCallback(F=>{Qt(se=>[...se,F])},[]),Ui=p.useCallback(F=>{Qt(se=>se.filter(ue=>ue.id!==F.id))},[]),Na=p.useCallback(()=>{Zt(!1),ca.current&&ba(ca.current,{value:""}),ie(!0)},[qe]),fa=p.useCallback(F=>{const se=Va.current;if(!se)return;const ue=Array.from(se.options),Qe=ue.find(ct=>ct.value===F);if(Qe&&(B||ue.forEach(ct=>ct.selected=!1),Qe.selected=!B||!Qe.selected,se.dispatchEvent(new Event("change",{bubbles:!0})),B||Na(),et&&ca.current&&Je)){ba(ca.current,{value:"",selectionEnd:0,selectionStart:0});const ct=ce;ve(""),setTimeout(()=>ve(ct))}},[Na,B,et,ce]),Mo=p.useCallback(()=>{const F=Va.current;F&&(F.selectedIndex=-1,F.dispatchEvent(new Event("change",{bubbles:!0})))},[]);p.useEffect(()=>{I!==Te&&Zt(I)},[I]),p.useEffect(()=>{var F;re==null||re(Te),!Te&&Ft&&document.activeElement!==Bt.current&&((F=Va.current)==null||F.focus())},[Te,Ft]);const Li=K||Mo,xr=Ri&&!Te,Oo=p.useCallback(()=>w.jsx(W2,{containerRef:Xa,options:nt,shouldShowCount:xr,disabled:v,readOnly:b,onChipRemove:fa,onChipClick:Sg,isOptionsListOpen:Te,hasMaxHeight:!!M&&M!=="none"}),[nt,xr,v,b,fa,Te,M]),hn=(B?!(qe!=null&&qe.length):!qe)&&!!S&&!et,_l=he==null?void 0:he(qe,et),Ta=oa==null?void 0:oa.children,Er=B?Oo():Ta,mn=_l||Er||qe||null,Ma=typeof mn=="string",_r=Ma?w.jsx(f6,{visibleValue:mn,isSearchPanelOpen:Te,targetRef:Bt,forceHideOverflowTooltip:za}):mn,wl=()=>{Zt(F=>!F)},Ao=()=>{if(!et&&qe)return B?void(()=>{var ue;const F=(se=[...nt].reverse(),(ue=se.find(({disabled:Qe})=>!Qe))==null?void 0:ue.value);var se;F&&fa(F)})():ie(!1)};p.useEffect(()=>{var se;if(!b&&!v)return(se=Bt.current)==null||se.addEventListener("keydown",F),()=>{var ue;(ue=Bt.current)==null||ue.removeEventListener("keydown",F)};function F(ue){const Qe=G.getCode(ue);Qe===G[" "]&&(!ua&&et?ue.stopPropagation():Te||(ue.preventDefault(),Zt(!0),ue.stopPropagation())),Qe!==G.Enter||Te||(ue.preventDefault(),Zt(!0),ue.stopPropagation()),Qe!==G.ArrowDown&&Qe!==G.ArrowUp||Te||(Zt(!0),ue.stopPropagation());const ct=ue.ctrlKey||ue.metaKey||ue.altKey;ue.key.length!==1||ct||Ma&&!et&&dt&&(Qa.current.shouldExtendInputValue=!0),Qe!==G.Backspace||ue.repeat||Ao(),Qe===G.Backspace&&((gn=>{if(!Ma||!ca.current||et||!dt||!qe)return;gn.preventDefault();const ja=mn.slice(0,-1);ba(ca.current,{value:ja,selectionEnd:ja.length,selectionStart:ja.length})})(ue),Zt(!0)),Qe===G.Escape&&Te&&(Zt(!1),ue.preventDefault(),ue.stopPropagation())}},[b,v,ua,et,Te,nt]),p.useEffect(()=>{var se;function F(){Xn.current=!1}return(se=Bt.current)==null||se.addEventListener("keyup",F),()=>{var ue;(ue=Bt.current)==null||ue.removeEventListener("keyup",F)}},[]),p.useEffect(()=>{(!Ft&&!B||B)&&(ca.current&&ba(ca.current,{value:""}),ie(!0))},[B,Ft]),p.useEffect(()=>{var F,se;Te&&(ua?(F=Va.current)==null||F.focus():(se=ca.current)==null||se.focus(),Wt(""))},[Te,ua]),p.useEffect(()=>{ia&&ve("")},[ia]),p.useEffect(()=>{ce&&Wt("")},[ce]),p.useEffect(()=>{if(Te){const F=qe&&!Array.isArray(qe)?qe:void 0;ve(F)}},[Te]),p.useEffect(()=>{fn||Vn(a)},[a,fn]),Tv([Bt,sa],F=>{var se;F.target&&((se=Bt.current)!=null&&se.contains(F.target))||(ra(!1),Na())});const Yi=dt&&(B?!!(qe!=null&&qe.length):!!qe),Tt=p.useMemo(()=>p.Children.map(ze,F=>p.isValidElement(F)?p.cloneElement(F,{key:Yv(),...F.props}):null),[ze]),ki=p.useMemo(()=>w.jsx(v6,{onDropDownOptionMount:ji,onDropDownOptionUnMount:Ui,dimension:T,multiple:B,showCheckbox:j,children:Tt}),[Tt,T,j,B]),Do=p.useMemo(()=>w.jsx(_2,{onConstantOptionMount:dn,onConstantOptionUnMount:ht,children:Tt}),[Tt]),$l=NS(at),qi=Ev(at),Qn={icon:No,id:"searchSelectClearIcon",onClick:Li,"aria-hidden":!0},Pi={$isOpen:Te,onClick:wl,"aria-hidden":!0};return w.jsxs(i6,{className:u,style:o,$focused:Ft,$multiple:B,disabled:v,"data-disabled":v,$readonly:b,$isLoading:r,$dimension:T,ref:Bt,"data-status":s,onClick:v||b||r?void 0:F=>{var se;F.target&&((se=sa.current)!=null&&se.contains(F.target))||!ua&&Te||wl()},onFocus:F=>{Ft||(ra(!0),be==null||be(F))},onMouseDown:F=>{Ft&&F.preventDefault()},$skeleton:Ae,onBlur:F=>{var se,ue;F.currentTarget.contains(F.relatedTarget)||(se=sa.current)!=null&&se.contains(F.relatedTarget)||(ra(!1),Zt(!1),(ue=Va.current)==null||ue.blur(),Re==null||Re(F),Xn.current=!1)},title:jt,children:[Do,ki,w.jsx(m6,{ref:xa(it,Va),value:qe,multiple:B,disabled:v,options:Ce,...at,onChange:F=>{var Qe;if(Xn.current&&ua)return void Wt(F.target.value);const se=B?Array.from(F.target.selectedOptions).map(ct=>ct.value):F.target.value;let ue=[];if(B&&Array.isArray(se)){const ct=se.filter(Lt=>!Ra.current.includes(Lt)&&!wa.current.includes(Lt)),gn=Ra.current.filter(Lt=>!se.includes(Lt)&&!wa.current.includes(Lt));ue=[...Ra.current,...ct];const ja=[...wa.current];gn.forEach(Lt=>{const Gi=ue.findIndex(Nl=>Lt===Nl);Gi>-1&&ue.splice(Gi,1);const wr=ja.findIndex(Nl=>Lt===Nl);wr>-1&&ja.splice(wr,1)}),Ra.current=ue,wa.current=ja}fn&&Vn(B?ue:se),(Qe=at.onChange)==null||Qe.call(at,F),Ea==null||Ea(B?ue:se)}}),w.jsx(sn,{}),w.jsxs(Wv,{tabIndex:-1,ref:Xa,className:"selectValueWrapper",$dimension:T,$multiple:B,$minRowCount:D!=="none"?D:void 0,$maxRowCount:M!=="none"?M:void 0,$idleHeight:N,$opened:Te,$isEmpty:hn,children:[dt&&_r,(S&&hn||!ua)&&w.jsx(t6,{"data-id":at.id,placeholder:hn?S:"",tabIndex:-1,ref:ca,disabled:v,readOnly:b||ua,value:et,defaultValue:pe,$isMultiple:B,$dimension:T,onChange:F=>{B||ie(!1),(se=>{Qa.current.shouldExtendInputValue&&Ma&&(se.target.value=`${mn}${se.target.value}`,Qa.current.shouldExtendInputValue=!1)})(F),ne===void 0&&xt(F.target.value),ee==null||ee(F)},onKeyDown:ae,onKeyUp:Ne,onKeyUpCapture:ge,onKeyDownCapture:Xe})]}),Te&&!Ae&&w.jsx(Bf,{ref:sa,tabIndex:-1,targetElement:Sr,"data-dimension":T,alignSelf:Oe||rt,dropContainerCssMixin:W,className:J,style:Z,...$l,children:w.jsx(o6,{dimension:T==="xl"?"l":T,active:ce,selected:qe,onActivateItem:F=>ve(F),onSelectItem:fa,onDeselectItem:fa,multiSelection:B,model:br,renderTopPanel:x||Q,renderBottomPanel:R||V,containerRef:sa,virtualScroll:je,preventFocusSteal:!0,preselectedModeActive:ua,preselected:ia,onPreselectItem:Wt,onMenuKeyDown:()=>{Xn.current=!0},...qi})}),w.jsxs(r6,{$multiple:B,$dimension:T,onClick:Sg,onMouseDown:F=>F.preventDefault(),children:[r&&w.jsx(Lf,{dimension:T==="s"?"ms":"m"}),te&&!b&&Yi&&w.jsx(Di,{...Qn,...Ut(Qn)}),d,!b&&w.jsx(TS,{"data-disabled":!!v||void 0,"data-loading":!!r||void 0,...Pi,...qt(Pi)})]})]})});uo.displayName="Select";var Eg;function Sf(){return Sf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Sf.apply(null,arguments)}var T6=function(a){return p.createElement("svg",Sf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Eg||(Eg=p.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M20.65 18c0 1.66-1.35 3-3 3h-8c-1.31 0-2.43-.84-2.84-2.01q-.36-.015-.69-.12a.65.65 0 0 1-.43-.81c.1-.35.46-.54.81-.44.05.02.1.03.15.04V8c0-1.66 1.34-3 3-3h7.16a1 1 0 0 0-.04-.15.64.64 0 0 1 .43-.81c.35-.11.71.09.81.43q.09.27.12.57A3 3 0 0 1 20.65 8zm-11 1.7h8c.93 0 1.7-.76 1.7-1.7V8c0-.94-.77-1.7-1.7-1.7h-8c-.94 0-1.71.76-1.71 1.7v10c0 .94.77 1.7 1.71 1.7m-4.28-3.2c.02.06.03.12.03.19a.647.647 0 0 1-1.27.18C4.04 16.6 4 16.3 4 16v-.95c0-.35.29-.65.65-.65.35 0 .65.3.65.65V16c0 .17.02.34.07.5m-.07-4.56c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65v-1.89c0-.36.29-.65.65-.65.35 0 .65.29.65.65zm0-5c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65v-.95c0-.36.05-.72.15-1.06.11-.34.47-.54.82-.43a.64.64 0 0 1 .43.81c-.07.21-.1.45-.1.68zm1.66-3.19c-.34.1-.71-.09-.81-.44a.6.6 0 0 1-.03-.19c0-.27.18-.53.46-.62.34-.1.7-.16 1.07-.16h.64c.36 0 .65.3.65.65 0 .36-.29.65-.65.65h-.64c-.24 0-.47.04-.69.11m9.06-1.27a.64.64 0 0 1 .43.81c-.1.34-.47.53-.81.43-.16-.05-.32-.08-.5-.08h-.77c-.36 0-.65-.29-.65-.65 0-.35.29-.65.65-.65h.77c.31 0 .6.05.88.14m-5.6 1.16c-.35 0-.65-.29-.65-.65 0-.35.3-.65.65-.65h1.42c.36 0 .65.3.65.65 0 .36-.29.65-.65.65z"})))};const xf=a=>{switch(a.$dimension){case"xl":default:return 24;case"s":return 20}},qf=a=>{switch(a.$dimension){case"xl":return 16;case"m":default:return 8;case"s":return 6}},Pf=a=>{switch(a.$dimension){case"xl":case"m":default:return 16;case"s":return 12}},M6=q`
  padding-right: ${a=>Pf(a)+(a.$iconsAfterCount?xf(a)+8:0)}px;
`,O6=q`
  background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,kt=X.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid var(--admiral-color-Neutral_Neutral40, ${a=>a.theme.color["Neutral/Neutral 40"]});
  border-radius: inherit;

  [data-status='error'] &&& {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] &&& {
    border: 1px solid var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  }

  [data-read-only] &&& {
    border-color: transparent;
  }
`,A6=q`
  background-color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});

  &:focus + ${kt} {
    border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:disabled + ${kt}, [data-read-only] &&& + ${kt} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${kt} {
    border-color: ${a=>a.disabled?"transparent":`var(--admiral-color-Neutral_Neutral60, ${a.theme.color["Neutral/Neutral 60"]})`};
  }

  &:user-invalid + ${kt}, &:user-invalid:hover + ${kt} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='error']
    &&&:hover:not(:disabled)
    + ${kt},
    &:user-invalid:hover:not(:disabled)
    + ${kt} {
    border: 1px solid var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  [data-status='success'] &&&:hover:not(:disabled) + ${kt} {
    border: 1px solid var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
  }

  [data-status='error']
    &&&:focus:not(:disabled)
    + ${kt},
    &:user-invalid:focus:not(:disabled)
    + ${kt} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] &&&:focus:not(:disabled) + ${kt} {
    border: 2px solid var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${O6}
  }

  [data-read-only] &&&:hover + ${kt}, [data-read-only] &&&:focus + ${kt} {
    border-color: transparent;
  }
`,D6=q`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,ep=q`
  outline: none;
  appearance: none;
  border-radius: inherit;
  border: none;
  box-sizing: border-box;
  margin: 0;
  padding: ${qf}px ${Pf}px;
  overflow-wrap: break-word;

  ${a=>a.$dimension==="s"?$e["Body/Body 2 Long"]:$e["Body/Body 1 Long"]}
  ${A6}
  ${M6}
`,C6=X.div`
  ${zf}
  ${ep}

  [data-disable-copying] & {
    cursor: default;
  }
`,B6=X.textarea`
  ${zf}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  resize: none;

  flex: 1 1 auto;
  min-width: 10px;
  background: transparent;

  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${a=>a.$dimension==="s"?$e["Body/Body 2 Long"]:$e["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder,
  &:disabled {
    cursor: not-allowed;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  ${ep}
  ${D6}
`,z6=X.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: ${Pf}px;
  padding-top: ${qf}px;

  & > * {
    display: block;
    width: ${xf}px;
    height: ${xf}px;
  }
`;function H6(a){return a}const R6=a=>a.preventDefault(),Vs=(a,r)=>a*(r==="s"?20:24)+2*qf({$dimension:r}),j6=X(qv)`
  min-height: ${a=>Vs(a.$rows,a.$dimension)}px;
  ${a=>a.$maxRows?`max-height: ${Vs(a.$maxRows,a.$dimension)}px;`:""}
  ${a=>a.$autoHeight?"":`height: ${Vs(a.$rows,a.$dimension)}px;`}
  ${a=>a.disabled?"cursor: not-allowed;":""}
`,U6=zx(p.forwardRef((a,r)=>w.jsx("div",{ref:r,children:w.jsx(Di,{...a})})));function _g(a){return String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/(\r?\n)$/g,"<br /><br />").replace(/\r?\n/g,"<br /> ")}const wg=()=>{},tp=p.forwardRef(({rows:a=3,maxRows:r,value:u,displayClearIcon:o,displayCopyIcon:s,status:d,handleInput:m=H6,containerRef:y,icons:g,iconsAfter:v,children:b,className:S,autoHeight:_,skeleton:T=!1,dimension:N="m",disableCopying:D,locale:M,clearIconPropsConfig:Y=wg,copyIconPropsConfig:B=wg,...j},te)=>{var x,R,Q,V,I;const K=Df()||wo,ee=p.useRef(null),[ne,pe]=p.useState(null),he=p.useRef(null),be=p.Children.toArray(v||g),Re=(M==null?void 0:M.copyTextMessage)||((R=(x=K.locales[K.currentLocale])==null?void 0:x.textArea)==null?void 0:R.copyTextMessage),ze=(M==null?void 0:M.copiedMessage)||((V=(Q=K.locales[K.currentLocale])==null?void 0:Q.textArea)==null?void 0:V.copiedMessage),[Oe,rt]=p.useState(Re),Ae=re=>{re.preventDefault()},U={icon:No,onMouseDown:Ae,onClick:()=>{ee.current&&ba(ee.current,{value:""})},"aria-hidden":!0},W={tooltipDimension:"s",renderContent:()=>Oe,icon:T6,onMouseDown:Ae,onClick:()=>{document.hasFocus()||window.focus(),ee.current&&(navigator.clipboard.writeText(ee.current.value),rt(ze),setTimeout(()=>rt(Re),2e3))},"aria-hidden":!0};!j.readOnly&&((I=ee==null?void 0:ee.current)!=null&&I.value)&&(o?be.unshift(p.createElement(Di,{...U,...Y(U),key:"clear-icon"})):s&&be.unshift(p.createElement(U6,{...W,...B(W),key:"copy-icon"})));const J=be.length,Z=u!=null?m({value:String(u)}):{};return p.useLayoutEffect(()=>{function re(){const{value:ae,selectionStart:Ne,selectionEnd:ge}=this,Xe=m({value:ae,selectionStart:Ne,selectionEnd:ge});ba(this,Xe)}if(ee.current){const ae=ee.current;ae.addEventListener("input",re);const{value:Ne,selectionStart:ge,selectionEnd:Xe}=ae,St=m({value:Ne,selectionStart:ge,selectionEnd:Xe});return ba(ae,St),()=>{ae.removeEventListener("input",re)}}},[m]),p.useEffect(()=>{function re(){const{value:ae}=this,Ne=he.current;Ne&&(Ne.innerHTML=_g(ae),this.style.overflowY=Ne.clientHeight<Ne.scrollHeight?"":"hidden")}if(_&&ee.current&&he.current){const ae=ee.current;return he.current.innerHTML=_g(ae.value),ae.addEventListener("input",re),ae.style.overflowY=he.current.clientHeight<he.current.scrollHeight?"":"hidden",()=>{ae.removeEventListener("input",re),ae.style.overflowY=""}}},[_,Z.value,j.defaultValue]),w.jsxs(j6,{className:S,ref:y,"data-read-only":!!j.readOnly||void 0,"data-status":d,$skeleton:T,disabled:j.disabled,"data-disable-copying":!!D||void 0,$autoHeight:!!_,$rows:a,$maxRows:r,$dimension:N,...D&&{onMouseDown:R6},children:[w.jsx(C6,{ref:he,$dimension:N,disabled:j.disabled,$iconsAfterCount:J}),w.jsx(B6,{ref:xa(te,ee,re=>pe(re)),...j,$dimension:N,$iconsAfterCount:J,$autoHeight:_,value:Z.value}),w.jsx(kt,{}),w.jsx(Nv,{contentNode:ne}),J>0&&w.jsx(z6,{disabled:j.disabled,$dimension:N,children:be}),b]})});tp.displayName="TextArea";const L6=q`
  background: ${({$background:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning50Main, ${r.color["Warning/Warning 50 Main"]})`;default:return a}}};
`,Y6=q`
  background: ${({$background:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success10, ${r.color["Success/Success 10"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary10, ${r.color["Primary/Primary 10"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error10, ${r.color["Error/Error 10"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning10, ${r.color["Warning/Warning 10"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`;default:return a||`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`}}};
`,k6=q`
  border: 1px solid
    ${({$border:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success40, ${r.color["Success/Success 40"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary50, ${r.color["Primary/Primary 50"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error50, ${r.color["Error/Error 50"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning40, ${r.color["Warning/Warning 40"]})`;case"neutral":return`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`;default:return a||`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`}}};
`,q6=q`
  background: ${({$backgroundHover:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success20, ${r.color["Success/Success 20"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary20, ${r.color["Primary/Primary 20"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error20, ${r.color["Error/Error 20"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning20, ${r.color["Warning/Warning 20"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]})`;default:return a||`var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]})`}}};
`,P6=X.button`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;

  ${({$dimension:a})=>`
    height: ${a==="s"?20:24}px;
    padding: ${a==="s"?1:3}px ${a==="s"?5:7}px;
  `}

  ${({$width:a})=>a&&`width: ${typeof a=="number"?`${a}px`:a};`}
  border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
  ${({$statusViaBackground:a,theme:r})=>a?Y6:`background: var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]});`}
  ${({$statusViaBackground:a})=>a?k6:"border: 1px solid transparent;"}

  display: inline-flex;
  align-items: center;
  cursor: ${({$clickable:a})=>a?"pointer":"default"};

  &:hover,
  &:active {
    ${({$statusViaBackground:a,$clickable:r})=>r&&!a?"border: 1px solid transparent;":""}
    ${({$statusViaBackground:a,theme:r,$clickable:u})=>u?a?q6:`background: var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]});`:""}
  }

  &:focus-visible {
    outline: none;

    &:before {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }
`,G6=X.span`
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${$e["Caption/Caption 1"]}
`,V6=X.div`
  display: flex;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  ${L6}
`,X6=X.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
`,Q6=X.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-left: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:hover {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }
`,oo=p.forwardRef(({children:a,kind:r="neutral",dimension:u="m",width:o,statusViaBackground:s=!1,isBorderHidden:d=!1,icon:m,statusIcon:y,onClick:g,...v},b)=>{const S=p.useRef(null),_=p.useRef(null),[T,N]=p.useState(!1),[D,M]=p.useState(!1),Y=typeof r=="object"?r.background?r.background:"neutral":r,B=d?"transparent":typeof r=="object"?r.background&&r.border?r.border:"neutral":r,j=typeof r=="object"?r.backgroundHover?r.backgroundHover:r.background?r.background:"neutral":r;return p.useLayoutEffect(()=>{const te=_.current;te&&pl(te)!==T&&N(pl(te))},[D,N]),p.useLayoutEffect(()=>{function te(){M(!0)}function K(){M(!1)}const ee=S.current;if(ee)return ee.addEventListener("mouseenter",te),ee.addEventListener("mouseleave",K),ee.addEventListener("focus",te),ee.addEventListener("blur",K),()=>{ee.removeEventListener("mouseenter",te),ee.removeEventListener("mouseleave",K),ee.removeEventListener("focus",te),ee.removeEventListener("blur",K)}},[M]),w.jsxs(w.Fragment,{children:[w.jsxs(P6,{ref:xa(b,S),$width:o,onClick:g,$clickable:!!g,$statusViaBackground:s,$border:B,$background:Y,$backgroundHover:j,$dimension:u,type:"button",...v,children:[Y!=="neutral"&&!s&&w.jsx(V6,{$background:Y}),s&&m&&w.jsx(X6,{children:m}),a&&w.jsx(G6,{ref:_,children:a}),y&&w.jsx(Q6,{children:y})]}),D&&T&&w.jsx(yr,{targetElement:S.current,renderContent:()=>a})]})});oo.displayName="Tag";const Z6="/task-manager/assets/VTBGroupUI-SemiBold-Wupg3RVc.ttf",F6="/task-manager/assets/VTBGroupUI-Medium-CJW7SkqK.otf",W6="/task-manager/assets/VTBGroupUI-Regular-JWIonCWQ.otf",K6=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${Z6}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${F6}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${W6}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`;function J6(a){return w.jsx("style",{type:"text/css",children:K6,...a})}const I6="_card_bfucj_1",e3="_tags_bfucj_9",t3="_actions_bfucj_15",a3="_date_bfucj_21",eo={card:I6,tags:e3,actions:t3,date:a3},ap=6048e5,n3=864e5,$g=Symbol.for("constructDateFrom");function Gn(a,r){return typeof a=="function"?a(r):a&&typeof a=="object"&&$g in a?a[$g](r):a instanceof Date?new a.constructor(r):new Date(r)}function Ba(a,r){return Gn(r||a,a)}let l3={};function To(){return l3}function Bi(a,r){var y,g,v,b;const u=To(),o=(r==null?void 0:r.weekStartsOn)??((g=(y=r==null?void 0:r.locale)==null?void 0:y.options)==null?void 0:g.weekStartsOn)??u.weekStartsOn??((b=(v=u.locale)==null?void 0:v.options)==null?void 0:b.weekStartsOn)??0,s=Ba(a,r==null?void 0:r.in),d=s.getDay(),m=(d<o?7:0)+d-o;return s.setDate(s.getDate()-m),s.setHours(0,0,0,0),s}function mo(a,r){return Bi(a,{...r,weekStartsOn:1})}function np(a,r){const u=Ba(a,r==null?void 0:r.in),o=u.getFullYear(),s=Gn(u,0);s.setFullYear(o+1,0,4),s.setHours(0,0,0,0);const d=mo(s),m=Gn(u,0);m.setFullYear(o,0,4),m.setHours(0,0,0,0);const y=mo(m);return u.getTime()>=d.getTime()?o+1:u.getTime()>=y.getTime()?o:o-1}function Ng(a){const r=Ba(a),u=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return u.setUTCFullYear(r.getFullYear()),+a-+u}function r3(a,...r){const u=Gn.bind(null,r.find(o=>typeof o=="object"));return r.map(u)}function Tg(a,r){const u=Ba(a,r==null?void 0:r.in);return u.setHours(0,0,0,0),u}function i3(a,r,u){const[o,s]=r3(u==null?void 0:u.in,a,r),d=Tg(o),m=Tg(s),y=+d-Ng(d),g=+m-Ng(m);return Math.round((y-g)/n3)}function u3(a,r){const u=np(a,r),o=Gn(a,0);return o.setFullYear(u,0,4),o.setHours(0,0,0,0),mo(o)}function o3(a){return a instanceof Date||typeof a=="object"&&Object.prototype.toString.call(a)==="[object Date]"}function c3(a){return!(!o3(a)&&typeof a!="number"||isNaN(+Ba(a)))}function s3(a,r){const u=Ba(a,r==null?void 0:r.in);return u.setFullYear(u.getFullYear(),0,1),u.setHours(0,0,0,0),u}const f3={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},d3=(a,r,u)=>{let o;const s=f3[a];return typeof s=="string"?o=s:r===1?o=s.one:o=s.other.replace("{{count}}",r.toString()),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"in "+o:o+" ago":o};function Xs(a){return(r={})=>{const u=r.width?String(r.width):a.defaultWidth;return a.formats[u]||a.formats[a.defaultWidth]}}const h3={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},m3={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},g3={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v3={date:Xs({formats:h3,defaultWidth:"full"}),time:Xs({formats:m3,defaultWidth:"full"}),dateTime:Xs({formats:g3,defaultWidth:"full"})},p3={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},y3=(a,r,u,o)=>p3[a];function bi(a){return(r,u)=>{const o=u!=null&&u.context?String(u.context):"standalone";let s;if(o==="formatting"&&a.formattingValues){const m=a.defaultFormattingWidth||a.defaultWidth,y=u!=null&&u.width?String(u.width):m;s=a.formattingValues[y]||a.formattingValues[m]}else{const m=a.defaultWidth,y=u!=null&&u.width?String(u.width):a.defaultWidth;s=a.values[y]||a.values[m]}const d=a.argumentCallback?a.argumentCallback(r):r;return s[d]}}const b3={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},S3={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},x3={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},E3={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},_3={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},w3={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},$3=(a,r)=>{const u=Number(a),o=u%100;if(o>20||o<10)switch(o%10){case 1:return u+"st";case 2:return u+"nd";case 3:return u+"rd"}return u+"th"},N3={ordinalNumber:$3,era:bi({values:b3,defaultWidth:"wide"}),quarter:bi({values:S3,defaultWidth:"wide",argumentCallback:a=>a-1}),month:bi({values:x3,defaultWidth:"wide"}),day:bi({values:E3,defaultWidth:"wide"}),dayPeriod:bi({values:_3,defaultWidth:"wide",formattingValues:w3,defaultFormattingWidth:"wide"})};function Si(a){return(r,u={})=>{const o=u.width,s=o&&a.matchPatterns[o]||a.matchPatterns[a.defaultMatchWidth],d=r.match(s);if(!d)return null;const m=d[0],y=o&&a.parsePatterns[o]||a.parsePatterns[a.defaultParseWidth],g=Array.isArray(y)?M3(y,S=>S.test(m)):T3(y,S=>S.test(m));let v;v=a.valueCallback?a.valueCallback(g):g,v=u.valueCallback?u.valueCallback(v):v;const b=r.slice(m.length);return{value:v,rest:b}}}function T3(a,r){for(const u in a)if(Object.prototype.hasOwnProperty.call(a,u)&&r(a[u]))return u}function M3(a,r){for(let u=0;u<a.length;u++)if(r(a[u]))return u}function O3(a){return(r,u={})=>{const o=r.match(a.matchPattern);if(!o)return null;const s=o[0],d=r.match(a.parsePattern);if(!d)return null;let m=a.valueCallback?a.valueCallback(d[0]):d[0];m=u.valueCallback?u.valueCallback(m):m;const y=r.slice(s.length);return{value:m,rest:y}}}const A3=/^(\d+)(th|st|nd|rd)?/i,D3=/\d+/i,C3={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},B3={any:[/^b/i,/^(a|c)/i]},z3={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},H3={any:[/1/i,/2/i,/3/i,/4/i]},R3={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},j3={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},U3={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},L3={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Y3={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},k3={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},q3={ordinalNumber:O3({matchPattern:A3,parsePattern:D3,valueCallback:a=>parseInt(a,10)}),era:Si({matchPatterns:C3,defaultMatchWidth:"wide",parsePatterns:B3,defaultParseWidth:"any"}),quarter:Si({matchPatterns:z3,defaultMatchWidth:"wide",parsePatterns:H3,defaultParseWidth:"any",valueCallback:a=>a+1}),month:Si({matchPatterns:R3,defaultMatchWidth:"wide",parsePatterns:j3,defaultParseWidth:"any"}),day:Si({matchPatterns:U3,defaultMatchWidth:"wide",parsePatterns:L3,defaultParseWidth:"any"}),dayPeriod:Si({matchPatterns:Y3,defaultMatchWidth:"any",parsePatterns:k3,defaultParseWidth:"any"})},P3={code:"en-US",formatDistance:d3,formatLong:v3,formatRelative:y3,localize:N3,match:q3,options:{weekStartsOn:0,firstWeekContainsDate:1}};function G3(a,r){const u=Ba(a,r==null?void 0:r.in);return i3(u,s3(u))+1}function V3(a,r){const u=Ba(a,r==null?void 0:r.in),o=+mo(u)-+u3(u);return Math.round(o/ap)+1}function lp(a,r){var b,S,_,T;const u=Ba(a,r==null?void 0:r.in),o=u.getFullYear(),s=To(),d=(r==null?void 0:r.firstWeekContainsDate)??((S=(b=r==null?void 0:r.locale)==null?void 0:b.options)==null?void 0:S.firstWeekContainsDate)??s.firstWeekContainsDate??((T=(_=s.locale)==null?void 0:_.options)==null?void 0:T.firstWeekContainsDate)??1,m=Gn((r==null?void 0:r.in)||a,0);m.setFullYear(o+1,0,d),m.setHours(0,0,0,0);const y=Bi(m,r),g=Gn((r==null?void 0:r.in)||a,0);g.setFullYear(o,0,d),g.setHours(0,0,0,0);const v=Bi(g,r);return+u>=+y?o+1:+u>=+v?o:o-1}function X3(a,r){var y,g,v,b;const u=To(),o=(r==null?void 0:r.firstWeekContainsDate)??((g=(y=r==null?void 0:r.locale)==null?void 0:y.options)==null?void 0:g.firstWeekContainsDate)??u.firstWeekContainsDate??((b=(v=u.locale)==null?void 0:v.options)==null?void 0:b.firstWeekContainsDate)??1,s=lp(a,r),d=Gn((r==null?void 0:r.in)||a,0);return d.setFullYear(s,0,o),d.setHours(0,0,0,0),Bi(d,r)}function Q3(a,r){const u=Ba(a,r==null?void 0:r.in),o=+Bi(u,r)-+X3(u,r);return Math.round(o/ap)+1}function ke(a,r){const u=a<0?"-":"",o=Math.abs(a).toString().padStart(r,"0");return u+o}const Un={y(a,r){const u=a.getFullYear(),o=u>0?u:1-u;return ke(r==="yy"?o%100:o,r.length)},M(a,r){const u=a.getMonth();return r==="M"?String(u+1):ke(u+1,2)},d(a,r){return ke(a.getDate(),r.length)},a(a,r){const u=a.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return u.toUpperCase();case"aaa":return u;case"aaaaa":return u[0];case"aaaa":default:return u==="am"?"a.m.":"p.m."}},h(a,r){return ke(a.getHours()%12||12,r.length)},H(a,r){return ke(a.getHours(),r.length)},m(a,r){return ke(a.getMinutes(),r.length)},s(a,r){return ke(a.getSeconds(),r.length)},S(a,r){const u=r.length,o=a.getMilliseconds(),s=Math.trunc(o*Math.pow(10,u-3));return ke(s,r.length)}},rr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Mg={G:function(a,r,u){const o=a.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return u.era(o,{width:"abbreviated"});case"GGGGG":return u.era(o,{width:"narrow"});case"GGGG":default:return u.era(o,{width:"wide"})}},y:function(a,r,u){if(r==="yo"){const o=a.getFullYear(),s=o>0?o:1-o;return u.ordinalNumber(s,{unit:"year"})}return Un.y(a,r)},Y:function(a,r,u,o){const s=lp(a,o),d=s>0?s:1-s;if(r==="YY"){const m=d%100;return ke(m,2)}return r==="Yo"?u.ordinalNumber(d,{unit:"year"}):ke(d,r.length)},R:function(a,r){const u=np(a);return ke(u,r.length)},u:function(a,r){const u=a.getFullYear();return ke(u,r.length)},Q:function(a,r,u){const o=Math.ceil((a.getMonth()+1)/3);switch(r){case"Q":return String(o);case"QQ":return ke(o,2);case"Qo":return u.ordinalNumber(o,{unit:"quarter"});case"QQQ":return u.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return u.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return u.quarter(o,{width:"wide",context:"formatting"})}},q:function(a,r,u){const o=Math.ceil((a.getMonth()+1)/3);switch(r){case"q":return String(o);case"qq":return ke(o,2);case"qo":return u.ordinalNumber(o,{unit:"quarter"});case"qqq":return u.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return u.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return u.quarter(o,{width:"wide",context:"standalone"})}},M:function(a,r,u){const o=a.getMonth();switch(r){case"M":case"MM":return Un.M(a,r);case"Mo":return u.ordinalNumber(o+1,{unit:"month"});case"MMM":return u.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return u.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return u.month(o,{width:"wide",context:"formatting"})}},L:function(a,r,u){const o=a.getMonth();switch(r){case"L":return String(o+1);case"LL":return ke(o+1,2);case"Lo":return u.ordinalNumber(o+1,{unit:"month"});case"LLL":return u.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return u.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return u.month(o,{width:"wide",context:"standalone"})}},w:function(a,r,u,o){const s=Q3(a,o);return r==="wo"?u.ordinalNumber(s,{unit:"week"}):ke(s,r.length)},I:function(a,r,u){const o=V3(a);return r==="Io"?u.ordinalNumber(o,{unit:"week"}):ke(o,r.length)},d:function(a,r,u){return r==="do"?u.ordinalNumber(a.getDate(),{unit:"date"}):Un.d(a,r)},D:function(a,r,u){const o=G3(a);return r==="Do"?u.ordinalNumber(o,{unit:"dayOfYear"}):ke(o,r.length)},E:function(a,r,u){const o=a.getDay();switch(r){case"E":case"EE":case"EEE":return u.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return u.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return u.day(o,{width:"short",context:"formatting"});case"EEEE":default:return u.day(o,{width:"wide",context:"formatting"})}},e:function(a,r,u,o){const s=a.getDay(),d=(s-o.weekStartsOn+8)%7||7;switch(r){case"e":return String(d);case"ee":return ke(d,2);case"eo":return u.ordinalNumber(d,{unit:"day"});case"eee":return u.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return u.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return u.day(s,{width:"short",context:"formatting"});case"eeee":default:return u.day(s,{width:"wide",context:"formatting"})}},c:function(a,r,u,o){const s=a.getDay(),d=(s-o.weekStartsOn+8)%7||7;switch(r){case"c":return String(d);case"cc":return ke(d,r.length);case"co":return u.ordinalNumber(d,{unit:"day"});case"ccc":return u.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return u.day(s,{width:"narrow",context:"standalone"});case"cccccc":return u.day(s,{width:"short",context:"standalone"});case"cccc":default:return u.day(s,{width:"wide",context:"standalone"})}},i:function(a,r,u){const o=a.getDay(),s=o===0?7:o;switch(r){case"i":return String(s);case"ii":return ke(s,r.length);case"io":return u.ordinalNumber(s,{unit:"day"});case"iii":return u.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return u.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return u.day(o,{width:"short",context:"formatting"});case"iiii":default:return u.day(o,{width:"wide",context:"formatting"})}},a:function(a,r,u){const s=a.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return u.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return u.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return u.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return u.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(a,r,u){const o=a.getHours();let s;switch(o===12?s=rr.noon:o===0?s=rr.midnight:s=o/12>=1?"pm":"am",r){case"b":case"bb":return u.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return u.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return u.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return u.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(a,r,u){const o=a.getHours();let s;switch(o>=17?s=rr.evening:o>=12?s=rr.afternoon:o>=4?s=rr.morning:s=rr.night,r){case"B":case"BB":case"BBB":return u.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return u.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return u.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(a,r,u){if(r==="ho"){let o=a.getHours()%12;return o===0&&(o=12),u.ordinalNumber(o,{unit:"hour"})}return Un.h(a,r)},H:function(a,r,u){return r==="Ho"?u.ordinalNumber(a.getHours(),{unit:"hour"}):Un.H(a,r)},K:function(a,r,u){const o=a.getHours()%12;return r==="Ko"?u.ordinalNumber(o,{unit:"hour"}):ke(o,r.length)},k:function(a,r,u){let o=a.getHours();return o===0&&(o=24),r==="ko"?u.ordinalNumber(o,{unit:"hour"}):ke(o,r.length)},m:function(a,r,u){return r==="mo"?u.ordinalNumber(a.getMinutes(),{unit:"minute"}):Un.m(a,r)},s:function(a,r,u){return r==="so"?u.ordinalNumber(a.getSeconds(),{unit:"second"}):Un.s(a,r)},S:function(a,r){return Un.S(a,r)},X:function(a,r,u){const o=a.getTimezoneOffset();if(o===0)return"Z";switch(r){case"X":return Ag(o);case"XXXX":case"XX":return sl(o);case"XXXXX":case"XXX":default:return sl(o,":")}},x:function(a,r,u){const o=a.getTimezoneOffset();switch(r){case"x":return Ag(o);case"xxxx":case"xx":return sl(o);case"xxxxx":case"xxx":default:return sl(o,":")}},O:function(a,r,u){const o=a.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Og(o,":");case"OOOO":default:return"GMT"+sl(o,":")}},z:function(a,r,u){const o=a.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Og(o,":");case"zzzz":default:return"GMT"+sl(o,":")}},t:function(a,r,u){const o=Math.trunc(+a/1e3);return ke(o,r.length)},T:function(a,r,u){return ke(+a,r.length)}};function Og(a,r=""){const u=a>0?"-":"+",o=Math.abs(a),s=Math.trunc(o/60),d=o%60;return d===0?u+String(s):u+String(s)+r+ke(d,2)}function Ag(a,r){return a%60===0?(a>0?"-":"+")+ke(Math.abs(a)/60,2):sl(a,r)}function sl(a,r=""){const u=a>0?"-":"+",o=Math.abs(a),s=ke(Math.trunc(o/60),2),d=ke(o%60,2);return u+s+r+d}const Dg=(a,r)=>{switch(a){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},rp=(a,r)=>{switch(a){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},Z3=(a,r)=>{const u=a.match(/(P+)(p+)?/)||[],o=u[1],s=u[2];if(!s)return Dg(a,r);let d;switch(o){case"P":d=r.dateTime({width:"short"});break;case"PP":d=r.dateTime({width:"medium"});break;case"PPP":d=r.dateTime({width:"long"});break;case"PPPP":default:d=r.dateTime({width:"full"});break}return d.replace("{{date}}",Dg(o,r)).replace("{{time}}",rp(s,r))},F3={p:rp,P:Z3},W3=/^D+$/,K3=/^Y+$/,J3=["D","DD","YY","YYYY"];function I3(a){return W3.test(a)}function eE(a){return K3.test(a)}function tE(a,r,u){const o=aE(a,r,u);if(console.warn(o),J3.includes(a))throw new RangeError(o)}function aE(a,r,u){const o=a[0]==="Y"?"years":"days of the month";return`Use \`${a.toLowerCase()}\` instead of \`${a}\` (in \`${r}\`) for formatting ${o} to the input \`${u}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const nE=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,lE=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rE=/^'([^]*?)'?$/,iE=/''/g,uE=/[a-zA-Z]/;function oE(a,r,u){var b,S,_,T;const o=To(),s=o.locale??P3,d=o.firstWeekContainsDate??((S=(b=o.locale)==null?void 0:b.options)==null?void 0:S.firstWeekContainsDate)??1,m=o.weekStartsOn??((T=(_=o.locale)==null?void 0:_.options)==null?void 0:T.weekStartsOn)??0,y=Ba(a,u==null?void 0:u.in);if(!c3(y))throw new RangeError("Invalid time value");let g=r.match(lE).map(N=>{const D=N[0];if(D==="p"||D==="P"){const M=F3[D];return M(N,s.formatLong)}return N}).join("").match(nE).map(N=>{if(N==="''")return{isToken:!1,value:"'"};const D=N[0];if(D==="'")return{isToken:!1,value:cE(N)};if(Mg[D])return{isToken:!0,value:N};if(D.match(uE))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return{isToken:!1,value:N}});s.localize.preprocessor&&(g=s.localize.preprocessor(y,g));const v={firstWeekContainsDate:d,weekStartsOn:m,locale:s};return g.map(N=>{if(!N.isToken)return N.value;const D=N.value;(eE(D)||I3(D))&&tE(D,r,String(a));const M=Mg[D[0]];return M(y,D,s.localize,v)}).join("")}function cE(a){const r=a.match(rE);return r?r[1].replace(iE,"'"):a}const sE=({task:a,onDelete:r,onStatusChange:u})=>{const o=$f(),s=m=>{switch(m){case"Low":return"#D1FADF";case"Medium":return"#FEF9C3";case"High":return"#FECACA";default:return"#E5E7EB"}},d=m=>{switch(m){case"To Do":return"#FACC15";case"In Progress":return"#60A5FA";case"Done":return"#34D399";default:return"#E5E7EB"}};return w.jsxs("div",{className:eo.card,children:[w.jsx("h3",{children:a.title}),a.description&&w.jsx("p",{children:a.description}),w.jsxs("div",{className:eo.tags,children:[w.jsx(oo,{style:{backgroundColor:d(a.status)},children:a.status}),w.jsx(oo,{style:{backgroundColor:s(a.priority)},children:a.priority}),w.jsx(oo,{children:a.category})]}),a.createdAt&&w.jsxs("div",{className:eo.date,children:["Создано: ",oE(new Date(a.createdAt),"dd.MM.yyyy HH:mm")]}),w.jsxs("div",{className:eo.actions,children:[w.jsx(qn,{dimension:"s",onClick:()=>u(a.id,"left"),children:"←"}),w.jsx(qn,{dimension:"s",onClick:()=>o(`/task/${a.id}`),children:"Edit"}),w.jsx(qn,{dimension:"s",appearance:"secondary",onClick:()=>r(a.id),children:"Delete"}),w.jsx(qn,{dimension:"s",onClick:()=>u(a.id,"right"),children:"→"})]})]})},fE="_board_p03e7_1",dE="_column_p03e7_9",hE="_row_p03e7_16",mE="_button_p03e7_19",gE="_columnTitle_p03e7_24",xi={board:fE,column:dE,row:hE,button:mE,columnTitle:gE},Cg=a=>{let r;const u=new Set,o=(v,b)=>{const S=typeof v=="function"?v(r):v;if(!Object.is(S,r)){const _=r;r=b??(typeof S!="object"||S===null)?S:Object.assign({},r,S),u.forEach(T=>T(r,_))}},s=()=>r,y={setState:o,getState:s,getInitialState:()=>g,subscribe:v=>(u.add(v),()=>u.delete(v))},g=r=a(o,s,y);return y},vE=a=>a?Cg(a):Cg,pE=a=>a;function yE(a,r=pE){const u=Ga.useSyncExternalStore(a.subscribe,()=>r(a.getState()),()=>r(a.getInitialState()));return Ga.useDebugValue(u),u}const bE=a=>{const r=vE(a),u=o=>yE(r,o);return Object.assign(u,r),u},SE=a=>bE;function xE(a,r){let u;try{u=a()}catch{return}return{getItem:s=>{var d;const m=g=>g===null?null:JSON.parse(g,void 0),y=(d=u.getItem(s))!=null?d:null;return y instanceof Promise?y.then(m):m(y)},setItem:(s,d)=>u.setItem(s,JSON.stringify(d,void 0)),removeItem:s=>u.removeItem(s)}}const Ef=a=>r=>{try{const u=a(r);return u instanceof Promise?u:{then(o){return Ef(o)(u)},catch(o){return this}}}catch(u){return{then(o){return this},catch(o){return Ef(o)(u)}}}},EE=(a,r)=>(u,o,s)=>{let d={storage:xE(()=>localStorage),partialize:D=>D,version:0,merge:(D,M)=>({...M,...D}),...r},m=!1;const y=new Set,g=new Set;let v=d.storage;if(!v)return a((...D)=>{console.warn(`[zustand persist middleware] Unable to update item '${d.name}', the given storage is currently unavailable.`),u(...D)},o,s);const b=()=>{const D=d.partialize({...o()});return v.setItem(d.name,{state:D,version:d.version})},S=s.setState;s.setState=(D,M)=>{S(D,M),b()};const _=a((...D)=>{u(...D),b()},o,s);s.getInitialState=()=>_;let T;const N=()=>{var D,M;if(!v)return;m=!1,y.forEach(B=>{var j;return B((j=o())!=null?j:_)});const Y=((M=d.onRehydrateStorage)==null?void 0:M.call(d,(D=o())!=null?D:_))||void 0;return Ef(v.getItem.bind(v))(d.name).then(B=>{if(B)if(typeof B.version=="number"&&B.version!==d.version){if(d.migrate){const j=d.migrate(B.state,B.version);return j instanceof Promise?j.then(te=>[!0,te]):[!0,j]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,B.state];return[!1,void 0]}).then(B=>{var j;const[te,K]=B;if(T=d.merge(K,(j=o())!=null?j:_),u(T,!0),te)return b()}).then(()=>{Y==null||Y(T,void 0),T=o(),m=!0,g.forEach(B=>B(T))}).catch(B=>{Y==null||Y(void 0,B)})};return s.persist={setOptions:D=>{d={...d,...D},D.storage&&(v=D.storage)},clearStorage:()=>{v==null||v.removeItem(d.name)},getOptions:()=>d,rehydrate:()=>N(),hasHydrated:()=>m,onHydrate:D=>(y.add(D),()=>{y.delete(D)}),onFinishHydration:D=>(g.add(D),()=>{g.delete(D)})},d.skipHydration||N(),T||_},_E=EE,Dt=[];for(let a=0;a<256;++a)Dt.push((a+256).toString(16).slice(1));function wE(a,r=0){return(Dt[a[r+0]]+Dt[a[r+1]]+Dt[a[r+2]]+Dt[a[r+3]]+"-"+Dt[a[r+4]]+Dt[a[r+5]]+"-"+Dt[a[r+6]]+Dt[a[r+7]]+"-"+Dt[a[r+8]]+Dt[a[r+9]]+"-"+Dt[a[r+10]]+Dt[a[r+11]]+Dt[a[r+12]]+Dt[a[r+13]]+Dt[a[r+14]]+Dt[a[r+15]]).toLowerCase()}let Qs;const $E=new Uint8Array(16);function NE(){if(!Qs){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Qs=crypto.getRandomValues.bind(crypto)}return Qs($E)}const TE=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Bg={randomUUID:TE};function ip(a,r,u){var s;if(Bg.randomUUID&&!a)return Bg.randomUUID();a=a||{};const o=a.random??((s=a.rng)==null?void 0:s.call(a))??NE();if(o.length<16)throw new Error("Random bytes length must be >= 16");return o[6]=o[6]&15|64,o[8]=o[8]&63|128,wE(o)}const gr=SE()(_E((a,r)=>({tasks:[],createTask:u=>{const o={...u,id:ip(),createdAt:new Date().toISOString()};a(s=>({tasks:[o,...s.tasks]}))},deleteTask:u=>{a(o=>({tasks:o.tasks.filter(s=>s.id!==u)}))},updateTask:u=>{a(o=>({tasks:o.tasks.map(s=>s.id===u.id?u:s)}))},getTaskById:u=>r().tasks.find(o=>o.id===u)}),{name:"task-storage"})),Zs=async a=>gr.getState().tasks,ME=async a=>gr.getState().getTaskById(a),OE=async a=>{const r={...a,id:crypto.randomUUID(),createdAt:new Date().toISOString()};return gr.getState().createTask(a),r},up=async(a,r)=>{const u=gr.getState().getTaskById(a);if(!u)return;const o={...u,...r};return gr.getState().updateTask(o),o},AE=async a=>{gr.getState().deleteTask(a)},DE=()=>{const[a,r]=p.useState([]);p.useEffect(()=>{(async()=>{const y=await Zs();r(y)})()},[]);const u=$f(),o=["To Do","In Progress","Done"],s=async(m,y)=>{const g=a.find(_=>_.id===m);if(!g)return;const v=o.indexOf(g.status),b=y==="left"?v-1:v+1;if(b<0||b>=o.length)return;await up(m,{status:o[b]});const S=await Zs();r(S)},d=async m=>{await AE(m);const y=await Zs();r(y)};return w.jsxs("div",{className:xi.board,children:[w.jsx("div",{className:xi.button,children:w.jsx(qn,{appearance:"primary",onClick:()=>u("/task/new"),children:"Добавить задачу"})}),w.jsx("div",{className:xi.row,children:o.map(m=>w.jsxs("div",{className:xi.column,children:[w.jsx("h3",{className:xi.columnTitle,children:m}),a.filter(y=>y.status===m).map(y=>w.jsx(sE,{task:y,onDelete:d,onStatusChange:s},y.id))]},m))})]})},CE="_formContainer_1pecu_1",BE="_actions_1pecu_21",zg={formContainer:CE,actions:BE},zE=["Bug","Feature","Documentation","Refactor","Test"],HE=["To Do","In Progress","Done"],RE=["Low","Medium","High"],Hg=()=>{const a=$f(),{id:r}=I1(),[u,o]=p.useState(null),[s,d]=p.useState(null);p.useEffect(()=>{(async()=>{if(r){const v=await ME(r);v&&o(v)}else o({id:ip(),title:"",description:"",category:"Feature",status:"To Do",priority:"Medium",createdAt:new Date().toISOString()})})()},[r]);const m=(g,v)=>{u&&(o(b=>({...b,[g]:v})),g==="title"&&v.trim()&&d(null))},y=async()=>{if(u){if(!u.title.trim()){d("Заголовок обязателен");return}try{r?await up(r,u):await OE(u),a("/")}catch(g){console.error("Ошибка при сохранении задачи:",g)}}};return u?w.jsxs("div",{className:zg.formContainer,children:[w.jsx("h2",{children:r?"Редактировать задачу":"Создать задачу"}),w.jsxs("div",{children:[w.jsx(Gv,{placeholder:"Заголовок",value:u.title,status:s?"error":void 0,onChange:g=>m("title",g.target.value)}),s&&w.jsx("div",{style:{color:"red",fontSize:"12px",marginTop:"4px"},children:s})]}),w.jsx(tp,{placeholder:"Описание",value:u.description,onChange:g=>m("description",g.target.value)}),w.jsx(uo,{value:u.category,onChange:g=>m("category",g.target.value),children:zE.map(g=>w.jsx(Gs,{value:g,children:g},g))}),w.jsx(uo,{value:u.status,onChange:g=>m("status",g.target.value),children:HE.map(g=>w.jsx(Gs,{value:g,children:g},g))}),w.jsx(uo,{value:u.priority,onChange:g=>m("priority",g.target.value),children:RE.map(g=>w.jsx(Gs,{value:g,children:g},g))}),w.jsxs("div",{className:zg.actions,children:[w.jsx(qn,{appearance:"secondary",onClick:()=>a("/"),children:"Отмена"}),w.jsx(qn,{appearance:"primary",onClick:y,children:"Сохранить"})]})]}):null},jE="_wrapper_ouhcw_1",UE="_title_ouhcw_7",Rg={wrapper:jE,title:UE},LE=()=>w.jsxs(pS,{theme:wo,children:[J6({}),w.jsx(DS,{children:w.jsxs("div",{className:Rg.wrapper,children:[w.jsx("h1",{className:Rg.title,children:"Task Manager"}),w.jsxs(gb,{children:[w.jsx(to,{path:"/",element:w.jsx(DE,{})}),w.jsx(to,{path:"/task/:id",element:w.jsx(Hg,{})}),w.jsx(to,{path:"/task/new",element:w.jsx(Hg,{})})]})]})})]});x1.createRoot(document.getElementById("root")).render(w.jsx(p.StrictMode,{children:w.jsx(yb,{basename:"/task-manager",children:w.jsx(LE,{})})}));
