var W_=Object.create;var fd=Object.defineProperty;var X_=Object.getOwnPropertyDescriptor;var Y_=Object.getOwnPropertyNames;var q_=Object.getPrototypeOf,Z_=Object.prototype.hasOwnProperty;var rr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var $_=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Y_(e))!Z_.call(t,r)&&r!==n&&fd(t,r,{get:()=>e[r],enumerable:!(i=X_(e,r))||i.enumerable});return t};var vc=(t,e,n)=>(n=t!=null?W_(q_(t)):{},$_(e||!t||!t.__esModule?fd(n,"default",{value:t,enumerable:!0}):n,t));var Ed=rr(Ve=>{"use strict";var Gs=Symbol.for("react.element"),J_=Symbol.for("react.portal"),K_=Symbol.for("react.fragment"),j_=Symbol.for("react.strict_mode"),Q_=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),nv=Symbol.for("react.forward_ref"),iv=Symbol.for("react.suspense"),rv=Symbol.for("react.memo"),sv=Symbol.for("react.lazy"),dd=Symbol.iterator;function ov(t){return t===null||typeof t!="object"?null:(t=dd&&t[dd]||t["@@iterator"],typeof t=="function"?t:null)}var gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_d=Object.assign,vd={};function Dr(t,e,n){this.props=t,this.context=e,this.refs=vd,this.updater=n||gd}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Dr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yd(){}yd.prototype=Dr.prototype;function xc(t,e,n){this.props=t,this.context=e,this.refs=vd,this.updater=n||gd}var Sc=xc.prototype=new yd;Sc.constructor=xc;_d(Sc,Dr.prototype);Sc.isPureReactComponent=!0;var pd=Array.isArray,xd=Object.prototype.hasOwnProperty,Mc={current:null},Sd={key:!0,ref:!0,__self:!0,__source:!0};function Md(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xd.call(e,i)&&!Sd.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Gs,type:t,key:s,ref:o,props:r,_owner:Mc.current}}function av(t,e){return{$$typeof:Gs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ec(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gs}function lv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var md=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lv(""+t.key):e.toString(36)}function Qo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Gs:case J_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+yc(o,0):i,pd(r)?(n="",t!=null&&(n=t.replace(md,"$&/")+"/"),Qo(r,e,n,"",function(c){return c})):r!=null&&(Ec(r)&&(r=av(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(md,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",pd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+yc(s,a);o+=Qo(s,e,n,l,r)}else if(l=ov(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+yc(s,a++),o+=Qo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function jo(t,e,n){if(t==null)return t;var i=[],r=0;return Qo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function cv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},ea={transition:null},uv={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:ea,ReactCurrentOwner:Mc};Ve.Children={map:jo,forEach:function(t,e,n){jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!Ec(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Dr;Ve.Fragment=K_;Ve.Profiler=Q_;Ve.PureComponent=xc;Ve.StrictMode=j_;Ve.Suspense=iv;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=_d({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xd.call(e,l)&&!Sd.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Gs,type:t.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(t){return t={$$typeof:tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ev,_context:t},t.Consumer=t};Ve.createElement=Md;Ve.createFactory=function(t){var e=Md.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:nv,render:t}};Ve.isValidElement=Ec;Ve.lazy=function(t){return{$$typeof:sv,_payload:{_status:-1,_result:t},_init:cv}};Ve.memo=function(t,e){return{$$typeof:rv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=ea.transition;ea.transition={};try{t()}finally{ea.transition=e}};Ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ve.useCallback=function(t,e){return Wt.current.useCallback(t,e)};Ve.useContext=function(t){return Wt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Wt.current.useEffect(t,e)};Ve.useId=function(){return Wt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Wt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Wt.current.useRef(t)};Ve.useState=function(t){return Wt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Wt.current.useTransition()};Ve.version="18.2.0"});var ta=rr((yT,wd)=>{"use strict";wd.exports=Ed()});var Ud=rr(je=>{"use strict";function bc(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<na(r,e))t[i]=e,t[n]=r,n=i;else break e}}function Cn(t){return t.length===0?null:t[0]}function ra(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>na(a,n))l<r&&0>na(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>na(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function na(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Td=performance,je.unstable_now=function(){return Td.now()}):(wc=Date,Ad=wc.now(),je.unstable_now=function(){return wc.now()-Ad});var Td,wc,Ad,Xn=[],Mi=[],hv=1,gn=null,Nt=3,sa=!1,sr=!1,Xs=!1,Rd=typeof setTimeout=="function"?setTimeout:null,Pd=typeof clearTimeout=="function"?clearTimeout:null,bd=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Cc(t){for(var e=Cn(Mi);e!==null;){if(e.callback===null)ra(Mi);else if(e.startTime<=t)ra(Mi),e.sortIndex=e.expirationTime,bc(Xn,e);else break;e=Cn(Mi)}}function Rc(t){if(Xs=!1,Cc(t),!sr)if(Cn(Xn)!==null)sr=!0,Lc(Pc);else{var e=Cn(Mi);e!==null&&Ic(Rc,e.startTime-t)}}function Pc(t,e){sr=!1,Xs&&(Xs=!1,Pd(Ys),Ys=-1),sa=!0;var n=Nt;try{for(Cc(e),gn=Cn(Xn);gn!==null&&(!(gn.expirationTime>e)||t&&!Nd());){var i=gn.callback;if(typeof i=="function"){gn.callback=null,Nt=gn.priorityLevel;var r=i(gn.expirationTime<=e);e=je.unstable_now(),typeof r=="function"?gn.callback=r:gn===Cn(Xn)&&ra(Xn),Cc(e)}else ra(Xn);gn=Cn(Xn)}if(gn!==null)var s=!0;else{var o=Cn(Mi);o!==null&&Ic(Rc,o.startTime-e),s=!1}return s}finally{gn=null,Nt=n,sa=!1}}var oa=!1,ia=null,Ys=-1,Ld=5,Id=-1;function Nd(){return!(je.unstable_now()-Id<Ld)}function Tc(){if(ia!==null){var t=je.unstable_now();Id=t;var e=!0;try{e=ia(!0,t)}finally{e?Ws():(oa=!1,ia=null)}}else oa=!1}var Ws;typeof bd=="function"?Ws=function(){bd(Tc)}:typeof MessageChannel<"u"?(Ac=new MessageChannel,Cd=Ac.port2,Ac.port1.onmessage=Tc,Ws=function(){Cd.postMessage(null)}):Ws=function(){Rd(Tc,0)};var Ac,Cd;function Lc(t){ia=t,oa||(oa=!0,Ws())}function Ic(t,e){Ys=Rd(function(){t(je.unstable_now())},e)}je.unstable_IdlePriority=5;je.unstable_ImmediatePriority=1;je.unstable_LowPriority=4;je.unstable_NormalPriority=3;je.unstable_Profiling=null;je.unstable_UserBlockingPriority=2;je.unstable_cancelCallback=function(t){t.callback=null};je.unstable_continueExecution=function(){sr||sa||(sr=!0,Lc(Pc))};je.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ld=0<t?Math.floor(1e3/t):5};je.unstable_getCurrentPriorityLevel=function(){return Nt};je.unstable_getFirstCallbackNode=function(){return Cn(Xn)};je.unstable_next=function(t){switch(Nt){case 1:case 2:case 3:var e=3;break;default:e=Nt}var n=Nt;Nt=e;try{return t()}finally{Nt=n}};je.unstable_pauseExecution=function(){};je.unstable_requestPaint=function(){};je.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Nt;Nt=t;try{return e()}finally{Nt=n}};je.unstable_scheduleCallback=function(t,e,n){var i=je.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:hv++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,bc(Mi,t),Cn(Xn)===null&&t===Cn(Mi)&&(Xs?(Pd(Ys),Ys=-1):Xs=!0,Ic(Rc,n-i))):(t.sortIndex=r,bc(Xn,t),sr||sa||(sr=!0,Lc(Pc))),t};je.unstable_shouldYield=Nd;je.unstable_wrapCallback=function(t){var e=Nt;return function(){var n=Nt;Nt=e;try{return t.apply(this,arguments)}finally{Nt=n}}}});var Od=rr((ST,Dd)=>{"use strict";Dd.exports=Ud()});var Hg=rr(fn=>{"use strict";var Gp=ta(),un=Od();function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wp=new Set,mo={};function vr(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(mo[t]=e,t=0;t<e.length;t++)Wp.add(e[t])}var ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=Object.prototype.hasOwnProperty,fv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fd={},zd={};function dv(t){return tu.call(zd,t)?!0:tu.call(Fd,t)?!1:fv.test(t)?zd[t]=!0:(Fd[t]=!0,!1)}function pv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mv(t,e,n,i){if(e===null||typeof e>"u"||pv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var qu=/[\-:]([a-z])/g;function Zu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qu,Zu);Rt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qu,Zu);Rt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qu,Zu);Rt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $u(t,e,n,i){var r=Rt.hasOwnProperty(e)?Rt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mv(e,n,r,i)&&(n=null),i||r===null?dv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var li=Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),nu=Symbol.for("react.profiler"),Xp=Symbol.for("react.provider"),Yp=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),ru=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),wi=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var qp=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Bd=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=Bd&&t[Bd]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Nc;function to(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Uc=!1;function Dc(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function gv(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function su(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case zr:return"Portal";case nu:return"Profiler";case Ju:return"StrictMode";case iu:return"Suspense";case ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yp:return(t.displayName||"Context")+".Consumer";case Xp:return(t._context.displayName||"Context")+".Provider";case Ku:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ju:return e=t.displayName||null,e!==null?e:su(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return su(t(e))}catch{}}return null}function _v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return su(e);case 8:return e===Ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vv(t){var e=Zp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function la(t){t._valueTracker||(t._valueTracker=vv(t))}function $p(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ou(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jp(t,e){e=e.checked,e!=null&&$u(t,"checked",e,!1)}function au(t,e){Jp(t,e);var n=zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&lu(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lu(t,e,n){(e!=="number"||Oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function Jr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(no(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zi(n)}}function Kp(t,e){var n=zi(e.value),i=zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ca,Qp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yv=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function em(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function tm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=em(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var xv=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(t,e){if(e){if(xv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var du=null;function Qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pu=null,Kr=null,jr=null;function Wd(t){if(t=Uo(t)){if(typeof pu!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=ul(e),pu(t.stateNode,t.type,e))}}function nm(t){Kr?jr?jr.push(t):jr=[t]:Kr=t}function im(){if(Kr){var t=Kr,e=jr;if(jr=Kr=null,Wd(t),e)for(t=0;t<e.length;t++)Wd(e[t])}}function rm(t,e){return t(e)}function sm(){}var Oc=!1;function om(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return rm(t,e,n)}finally{Oc=!1,(Kr!==null||jr!==null)&&(sm(),im())}}function _o(t,e){var n=t.stateNode;if(n===null)return null;var i=ul(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var mu=!1;if(ri)try{Or={},Object.defineProperty(Or,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{mu=!1}var Or;function Sv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var oo=!1,Fa=null,za=!1,gu=null,Mv={onError:function(t){oo=!0,Fa=t}};function Ev(t,e,n,i,r,s,o,a,l){oo=!1,Fa=null,Sv.apply(Mv,arguments)}function wv(t,e,n,i,r,s,o,a,l){if(Ev.apply(this,arguments),oo){if(oo){var c=Fa;oo=!1,Fa=null}else throw Error(Z(198));za||(za=!0,gu=c)}}function yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function am(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xd(t){if(yr(t)!==t)throw Error(Z(188))}function Tv(t){var e=t.alternate;if(!e){if(e=yr(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xd(r),t;if(s===i)return Xd(r),e;s=s.sibling}throw Error(Z(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function lm(t){return t=Tv(t),t!==null?cm(t):null}function cm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cm(t);if(e!==null)return e;t=t.sibling}return null}var um=un.unstable_scheduleCallback,Yd=un.unstable_cancelCallback,Av=un.unstable_shouldYield,bv=un.unstable_requestPaint,dt=un.unstable_now,Cv=un.unstable_getCurrentPriorityLevel,eh=un.unstable_ImmediatePriority,hm=un.unstable_UserBlockingPriority,Ba=un.unstable_NormalPriority,Rv=un.unstable_LowPriority,fm=un.unstable_IdlePriority,ol=null,$n=null;function Pv(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:Nv,Lv=Math.log,Iv=Math.LN2;function Nv(t){return t>>>=0,t===0?32:31-(Lv(t)/Iv|0)|0}var ua=64,ha=4194304;function io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=io(a):(s&=o,s!==0&&(i=io(s)))}else o=n&~r,o!==0?i=io(o):s!==0&&(i=io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Nn(e),r=1<<n,i|=t[n],e&=~r;return i}function Uv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Uv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _u(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dm(){var t=ua;return ua<<=1,!(ua&4194240)&&(ua=64),t}function Fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function Ov(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Nn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function th(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Nn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ye=0;function pm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mm,nh,gm,_m,vm,vu=!1,fa=[],Pi=null,Li=null,Ii=null,vo=new Map,yo=new Map,Ai=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qd(t,e){switch(t){case"focusin":case"focusout":Pi=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Zs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uo(e),e!==null&&nh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function zv(t,e,n,i,r){switch(e){case"focusin":return Pi=Zs(Pi,t,e,n,i,r),!0;case"dragenter":return Li=Zs(Li,t,e,n,i,r),!0;case"mouseover":return Ii=Zs(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return vo.set(s,Zs(vo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,yo.set(s,Zs(yo.get(s)||null,t,e,n,i,r)),!0}return!1}function ym(t){var e=lr(t.target);if(e!==null){var n=yr(e);if(n!==null){if(e=n.tag,e===13){if(e=am(n),e!==null){t.blockedOn=e,vm(t.priority,function(){gm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);du=i,n.target.dispatchEvent(i),du=null}else return e=Uo(n),e!==null&&nh(e),t.blockedOn=n,!1;e.shift()}return!0}function Zd(t,e,n){Aa(t)&&n.delete(e)}function Bv(){vu=!1,Pi!==null&&Aa(Pi)&&(Pi=null),Li!==null&&Aa(Li)&&(Li=null),Ii!==null&&Aa(Ii)&&(Ii=null),vo.forEach(Zd),yo.forEach(Zd)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,vu||(vu=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,Bv)))}function xo(t){function e(r){return $s(r,t)}if(0<fa.length){$s(fa[0],t);for(var n=1;n<fa.length;n++){var i=fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Pi!==null&&$s(Pi,t),Li!==null&&$s(Li,t),Ii!==null&&$s(Ii,t),vo.forEach(e),yo.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)ym(n),n.blockedOn===null&&Ai.shift()}var Qr=li.ReactCurrentBatchConfig,Va=!0;function kv(t,e,n,i){var r=Ye,s=Qr.transition;Qr.transition=null;try{Ye=1,ih(t,e,n,i)}finally{Ye=r,Qr.transition=s}}function Vv(t,e,n,i){var r=Ye,s=Qr.transition;Qr.transition=null;try{Ye=4,ih(t,e,n,i)}finally{Ye=r,Qr.transition=s}}function ih(t,e,n,i){if(Va){var r=yu(t,e,n,i);if(r===null)Wc(t,e,i,Ha,n),qd(t,i);else if(zv(r,t,e,n,i))i.stopPropagation();else if(qd(t,i),e&4&&-1<Fv.indexOf(t)){for(;r!==null;){var s=Uo(r);if(s!==null&&mm(s),s=yu(t,e,n,i),s===null&&Wc(t,e,i,Ha,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wc(t,e,i,null,n)}}var Ha=null;function yu(t,e,n,i){if(Ha=null,t=Qu(i),t=lr(t),t!==null)if(e=yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=am(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ha=t,null}function xm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cv()){case eh:return 1;case hm:return 4;case Ba:case Rv:return 16;case fm:return 536870912;default:return 16}default:return 16}}var Ci=null,rh=null,ba=null;function Sm(){if(ba)return ba;var t,e=rh,n=e.length,i,r="value"in Ci?Ci.value:Ci.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ba=r.slice(t,1<i?1-i:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function $d(){return!1}function hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?da:$d,this.isPropagationStopped=$d,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),e}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sh=hn(cs),No=ct({},cs,{view:0,detail:0}),Hv=hn(No),zc,Bc,Js,al=ct({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(zc=t.screenX-Js.screenX,Bc=t.screenY-Js.screenY):Bc=zc=0,Js=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Jd=hn(al),Gv=ct({},al,{dataTransfer:0}),Wv=hn(Gv),Xv=ct({},No,{relatedTarget:0}),kc=hn(Xv),Yv=ct({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=hn(Yv),Zv=ct({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$v=hn(Zv),Jv=ct({},cs,{data:0}),Kd=hn(Jv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qv[t])?!!e[t]:!1}function oh(){return ey}var ty=ct({},No,{key:function(t){if(t.key){var e=Kv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ny=hn(ty),iy=ct({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=hn(iy),ry=ct({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),sy=hn(ry),oy=ct({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ay=hn(oy),ly=ct({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=hn(ly),uy=[9,13,27,32],ah=ri&&"CompositionEvent"in window,ao=null;ri&&"documentMode"in document&&(ao=document.documentMode);var hy=ri&&"TextEvent"in window&&!ao,Mm=ri&&(!ah||ao&&8<ao&&11>=ao),Qd=" ",ep=!1;function Em(t,e){switch(t){case"keyup":return uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function fy(t,e){switch(t){case"compositionend":return wm(e);case"keypress":return e.which!==32?null:(ep=!0,Qd);case"textInput":return t=e.data,t===Qd&&ep?null:t;default:return null}}function dy(t,e){if(kr)return t==="compositionend"||!ah&&Em(t,e)?(t=Sm(),ba=rh=Ci=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mm&&e.locale!=="ko"?null:e.data;default:return null}}var py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!py[t.type]:e==="textarea"}function Tm(t,e,n,i){nm(i),e=Ga(e,"onChange"),0<e.length&&(n=new sh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var lo=null,So=null;function my(t){Om(t,0)}function ll(t){var e=Gr(t);if($p(e))return t}function gy(t,e){if(t==="change")return e}var Am=!1;ri&&(ri?(ma="oninput"in document,ma||(Vc=document.createElement("div"),Vc.setAttribute("oninput","return;"),ma=typeof Vc.oninput=="function"),pa=ma):pa=!1,Am=pa&&(!document.documentMode||9<document.documentMode));var pa,ma,Vc;function np(){lo&&(lo.detachEvent("onpropertychange",bm),So=lo=null)}function bm(t){if(t.propertyName==="value"&&ll(So)){var e=[];Tm(e,So,t,Qu(t)),om(my,e)}}function _y(t,e,n){t==="focusin"?(np(),lo=e,So=n,lo.attachEvent("onpropertychange",bm)):t==="focusout"&&np()}function vy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(So)}function yy(t,e){if(t==="click")return ll(e)}function xy(t,e){if(t==="input"||t==="change")return ll(e)}function Sy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:Sy;function Mo(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!tu.call(e,r)||!Dn(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function Cm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rm(){for(var t=window,e=Oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oa(t.document)}return e}function lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function My(t){var e=Rm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cm(n.ownerDocument.documentElement,n)){if(i!==null&&lh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rp(n,s);var o=rp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ey=ri&&"documentMode"in document&&11>=document.documentMode,Vr=null,xu=null,co=null,Su=!1;function sp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||Vr==null||Vr!==Oa(i)||(i=Vr,"selectionStart"in i&&lh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),co&&Mo(co,i)||(co=i,i=Ga(xu,"onSelect"),0<i.length&&(e=new sh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vr)))}function ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hr={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Hc={},Pm={};ri&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function cl(t){if(Hc[t])return Hc[t];if(!Hr[t])return t;var e=Hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pm)return Hc[t]=e[n];return t}var Lm=cl("animationend"),Im=cl("animationiteration"),Nm=cl("animationstart"),Um=cl("transitionend"),Dm=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,e){Dm.set(t,e),vr(e,[t])}for(_a=0;_a<op.length;_a++)va=op[_a],ap=va.toLowerCase(),lp=va[0].toUpperCase()+va.slice(1),ki(ap,"on"+lp);var va,ap,lp,_a;ki(Lm,"onAnimationEnd");ki(Im,"onAnimationIteration");ki(Nm,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(Um,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function cp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wv(i,e,void 0,t),t.currentTarget=null}function Om(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cp(r,a,c),s=l}}}if(za)throw t=gu,za=!1,gu=null,t}function et(t,e){var n=e[Au];n===void 0&&(n=e[Au]=new Set);var i=t+"__bubble";n.has(i)||(Fm(e,t,2,!1),n.add(i))}function Gc(t,e,n){var i=0;e&&(i|=4),Fm(n,t,i,e)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[ya]){t[ya]=!0,Wp.forEach(function(n){n!=="selectionchange"&&(wy.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ya]||(e[ya]=!0,Gc("selectionchange",!1,e))}}function Fm(t,e,n,i){switch(xm(e)){case 1:var r=kv;break;case 4:r=Vv;break;default:r=ih}n=r.bind(null,e,n,t),r=void 0,!mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}om(function(){var c=s,h=Qu(n),d=[];e:{var f=Dm.get(t);if(f!==void 0){var p=sh,v=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":p=ny;break;case"focusin":v="focus",p=kc;break;case"focusout":v="blur",p=kc;break;case"beforeblur":case"afterblur":p=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sy;break;case Lm:case Im:case Nm:p=qv;break;case Um:p=ay;break;case"scroll":p=Hv;break;case"wheel":p=cy;break;case"copy":case"cut":case"paste":p=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jd}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,g;_!==null;){g=_;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,u!==null&&(E=_o(_,u),E!=null&&y.push(wo(_,E,g)))),m)break;_=_.return}0<y.length&&(f=new p(f,v,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==du&&(v=n.relatedTarget||n.fromElement)&&(lr(v)||v[si]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?lr(v):null,v!==null&&(m=yr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=Jd,E="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=jd,E="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?f:Gr(p),g=v==null?f:Gr(v),f=new y(E,_+"leave",p,n,h),f.target=m,f.relatedTarget=g,E=null,lr(h)===c&&(y=new y(u,_+"enter",v,n,h),y.target=g,y.relatedTarget=m,E=y),m=E,p&&v)t:{for(y=p,u=v,_=0,g=y;g;g=Fr(g))_++;for(g=0,E=u;E;E=Fr(E))g++;for(;0<_-g;)y=Fr(y),_--;for(;0<g-_;)u=Fr(u),g--;for(;_--;){if(y===u||u!==null&&y===u.alternate)break t;y=Fr(y),u=Fr(u)}y=null}else y=null;p!==null&&up(d,f,p,y,!1),v!==null&&m!==null&&up(d,m,v,y,!0)}}e:{if(f=c?Gr(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=gy;else if(tp(f))if(Am)w=xy;else{w=vy;var b=_y}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=yy);if(w&&(w=w(t,c))){Tm(d,w,n,h);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&lu(f,"number",f.value)}switch(b=c?Gr(c):window,t){case"focusin":(tp(b)||b.contentEditable==="true")&&(Vr=b,xu=c,co=null);break;case"focusout":co=xu=Vr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,sp(d,n,h);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":sp(d,n,h)}var C;if(ah)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else kr?Em(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Mm&&n.locale!=="ko"&&(kr||I!=="onCompositionStart"?I==="onCompositionEnd"&&kr&&(C=Sm()):(Ci=h,rh="value"in Ci?Ci.value:Ci.textContent,kr=!0)),b=Ga(c,I),0<b.length&&(I=new Kd(I,t,null,n,h),d.push({event:I,listeners:b}),C?I.data=C:(C=wm(n),C!==null&&(I.data=C)))),(C=hy?fy(t,n):dy(t,n))&&(c=Ga(c,"onBeforeInput"),0<c.length&&(h=new Kd("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=C))}Om(d,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ga(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_o(t,n),s!=null&&i.unshift(wo(t,s,r)),s=_o(t,e),s!=null&&i.push(wo(t,s,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function up(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=_o(n,s),l!=null&&o.unshift(wo(n,l,a))):r||(l=_o(n,s),l!=null&&o.push(wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ty=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function hp(t){return(typeof t=="string"?t:""+t).replace(Ty,`
`).replace(Ay,"")}function xa(t,e,n){if(e=hp(e),hp(t)!==e&&n)throw Error(Z(425))}function Wa(){}var Mu=null,Eu=null;function wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(t){return fp.resolve(null).then(t).catch(Ry)}:Tu;function Ry(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);xo(e)}function Ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),Zn="__reactFiber$"+us,To="__reactProps$"+us,si="__reactContainer$"+us,Au="__reactEvents$"+us,Py="__reactListeners$"+us,Ly="__reactHandles$"+us;function lr(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[si]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dp(t);t!==null;){if(n=t[Zn])return n;t=dp(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[Zn]||t[si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function ul(t){return t[To]||null}var bu=[],Wr=-1;function Vi(t){return{current:t}}function tt(t){0>Wr||(t.current=bu[Wr],bu[Wr]=null,Wr--)}function Qe(t,e){Wr++,bu[Wr]=t.current,t.current=e}var Bi={},Ft=Vi(Bi),Qt=Vi(!1),dr=Bi;function is(t,e){var n=t.type.contextTypes;if(!n)return Bi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function Xa(){tt(Qt),tt(Ft)}function pp(t,e,n){if(Ft.current!==Bi)throw Error(Z(168));Qe(Ft,e),Qe(Qt,n)}function zm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,_v(t)||"Unknown",r));return ct({},n,i)}function Ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bi,dr=Ft.current,Qe(Ft,t),Qe(Qt,Qt.current),!0}function mp(t,e,n){var i=t.stateNode;if(!i)throw Error(Z(169));n?(t=zm(t,e,dr),i.__reactInternalMemoizedMergedChildContext=t,tt(Qt),tt(Ft),Qe(Ft,t)):tt(Qt),Qe(Qt,n)}var ei=null,hl=!1,Yc=!1;function Bm(t){ei===null?ei=[t]:ei.push(t)}function Iy(t){hl=!0,Bm(t)}function Hi(){if(!Yc&&ei!==null){Yc=!0;var t=0,e=Ye;try{var n=ei;for(Ye=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ei=null,hl=!1}catch(r){throw ei!==null&&(ei=ei.slice(t+1)),um(eh,Hi),r}finally{Ye=e,Yc=!1}}return null}var Xr=[],Yr=0,qa=null,Za=0,_n=[],vn=0,pr=null,ti=1,ni="";function or(t,e){Xr[Yr++]=Za,Xr[Yr++]=qa,qa=t,Za=e}function km(t,e,n){_n[vn++]=ti,_n[vn++]=ni,_n[vn++]=pr,pr=t;var i=ti;t=ni;var r=32-Nn(i)-1;i&=~(1<<r),n+=1;var s=32-Nn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ti=1<<32-Nn(e)+r|n<<r|i,ni=s+t}else ti=1<<s|n<<r|i,ni=t}function ch(t){t.return!==null&&(or(t,1),km(t,1,0))}function uh(t){for(;t===qa;)qa=Xr[--Yr],Xr[Yr]=null,Za=Xr[--Yr],Xr[Yr]=null;for(;t===pr;)pr=_n[--vn],_n[vn]=null,ni=_n[--vn],_n[vn]=null,ti=_n[--vn],_n[vn]=null}var cn=null,ln=null,it=!1,In=null;function Vm(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,ln=Ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pr!==null?{id:ti,overflow:ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,ln=null,!0):!1;default:return!1}}function Cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ru(t){if(it){var e=ln;if(e){var n=e;if(!gp(t,e)){if(Cu(t))throw Error(Z(418));e=Ni(n.nextSibling);var i=cn;e&&gp(t,e)?Vm(i,n):(t.flags=t.flags&-4097|2,it=!1,cn=t)}}else{if(Cu(t))throw Error(Z(418));t.flags=t.flags&-4097|2,it=!1,cn=t}}}function _p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function Sa(t){if(t!==cn)return!1;if(!it)return _p(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wu(t.type,t.memoizedProps)),e&&(e=ln)){if(Cu(t))throw Hm(),Error(Z(418));for(;e;)Vm(t,e),e=Ni(e.nextSibling)}if(_p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=cn?Ni(t.stateNode.nextSibling):null;return!0}function Hm(){for(var t=ln;t;)t=Ni(t.nextSibling)}function rs(){ln=cn=null,it=!1}function hh(t){In===null?In=[t]:In.push(t)}var Ny=li.ReactCurrentBatchConfig;function Pn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $a=Vi(null),Ja=null,qr=null,fh=null;function dh(){fh=qr=Ja=null}function ph(t){var e=$a.current;tt($a),t._currentValue=e}function Pu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function es(t,e){Ja=t,fh=qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(fh!==t)if(t={context:t,memoizedValue:e,next:null},qr===null){if(Ja===null)throw Error(Z(308));qr=t,Ja.dependencies={lanes:0,firstContext:t}}else qr=qr.next=t;return e}var cr=null;function mh(t){cr===null?cr=[t]:cr.push(t)}function Gm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mh(e)):(n.next=r.next,r.next=n),e.interleaved=n,oi(t,i)}function oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function gh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,oi(t,n)}return r=i.interleaved,r===null?(e.next=e,mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,oi(t,n)}function Ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,th(t,n)}}function vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ka(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,h=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=ct({},d,f);break e;case 2:Ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);gr|=o,t.lanes=o,t.memoizedState=d}}function yp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var Xm=new Gp.Component().refs;function Lu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fl={isMounted:function(t){return(t=t._reactInternals)?yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Oi(t),s=ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Un(e,t,r,i),Ra(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Oi(t),s=ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Un(e,t,r,i),Ra(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Oi(t),r=ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(Un(e,t,i,n),Ra(e,t,i))}};function xp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(n,i)||!Mo(r,s):!0}function Ym(t,e,n){var i=!1,r=Bi,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(r=en(e)?dr:Ft.current,i=e.contextTypes,s=(i=i!=null)?is(t,r):Bi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fl.enqueueReplaceState(e,e.state,null)}function Iu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Xm,gh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Sn(s):(s=en(e)?dr:Ft.current,r.context=is(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fl.enqueueReplaceState(r,r.state,null),Ka(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var i=n.stateNode}if(!i)throw Error(Z(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Xm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function Ma(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mp(t){var e=t._init;return e(t._payload)}function qm(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Fi(u,_),u.index=0,u.sibling=null,u}function s(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,g,E){return _===null||_.tag!==6?(_=Qc(g,u.mode,E),_.return=u,_):(_=r(_,g),_.return=u,_)}function l(u,_,g,E){var w=g.type;return w===Br?h(u,_,g.props.children,E,g.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===wi&&Mp(w)===_.type)?(E=r(_,g.props),E.ref=Ks(u,_,g),E.return=u,E):(E=Da(g.type,g.key,g.props,null,u.mode,E),E.ref=Ks(u,_,g),E.return=u,E)}function c(u,_,g,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=eu(g,u.mode,E),_.return=u,_):(_=r(_,g.children||[]),_.return=u,_)}function h(u,_,g,E,w){return _===null||_.tag!==7?(_=fr(g,u.mode,E,w),_.return=u,_):(_=r(_,g),_.return=u,_)}function d(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Qc(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case aa:return g=Da(_.type,_.key,_.props,null,u.mode,g),g.ref=Ks(u,null,_),g.return=u,g;case zr:return _=eu(_,u.mode,g),_.return=u,_;case wi:var E=_._init;return d(u,E(_._payload),g)}if(no(_)||qs(_))return _=fr(_,u.mode,g,null),_.return=u,_;Ma(u,_)}return null}function f(u,_,g,E){var w=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:a(u,_,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case aa:return g.key===w?l(u,_,g,E):null;case zr:return g.key===w?c(u,_,g,E):null;case wi:return w=g._init,f(u,_,w(g._payload),E)}if(no(g)||qs(g))return w!==null?null:h(u,_,g,E,null);Ma(u,g)}return null}function p(u,_,g,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(g)||null,a(_,u,""+E,w);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case aa:return u=u.get(E.key===null?g:E.key)||null,l(_,u,E,w);case zr:return u=u.get(E.key===null?g:E.key)||null,c(_,u,E,w);case wi:var b=E._init;return p(u,_,g,b(E._payload),w)}if(no(E)||qs(E))return u=u.get(g)||null,h(_,u,E,w,null);Ma(_,E)}return null}function v(u,_,g,E){for(var w=null,b=null,C=_,I=_=0,S=null;C!==null&&I<g.length;I++){C.index>I?(S=C,C=null):S=C.sibling;var A=f(u,C,g[I],E);if(A===null){C===null&&(C=S);break}t&&C&&A.alternate===null&&e(u,C),_=s(A,_,I),b===null?w=A:b.sibling=A,b=A,C=S}if(I===g.length)return n(u,C),it&&or(u,I),w;if(C===null){for(;I<g.length;I++)C=d(u,g[I],E),C!==null&&(_=s(C,_,I),b===null?w=C:b.sibling=C,b=C);return it&&or(u,I),w}for(C=i(u,C);I<g.length;I++)S=p(C,u,I,g[I],E),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?I:S.key),_=s(S,_,I),b===null?w=S:b.sibling=S,b=S);return t&&C.forEach(function(k){return e(u,k)}),it&&or(u,I),w}function y(u,_,g,E){var w=qs(g);if(typeof w!="function")throw Error(Z(150));if(g=w.call(g),g==null)throw Error(Z(151));for(var b=w=null,C=_,I=_=0,S=null,A=g.next();C!==null&&!A.done;I++,A=g.next()){C.index>I?(S=C,C=null):S=C.sibling;var k=f(u,C,A.value,E);if(k===null){C===null&&(C=S);break}t&&C&&k.alternate===null&&e(u,C),_=s(k,_,I),b===null?w=k:b.sibling=k,b=k,C=S}if(A.done)return n(u,C),it&&or(u,I),w;if(C===null){for(;!A.done;I++,A=g.next())A=d(u,A.value,E),A!==null&&(_=s(A,_,I),b===null?w=A:b.sibling=A,b=A);return it&&or(u,I),w}for(C=i(u,C);!A.done;I++,A=g.next())A=p(C,u,I,A.value,E),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?I:A.key),_=s(A,_,I),b===null?w=A:b.sibling=A,b=A);return t&&C.forEach(function(X){return e(u,X)}),it&&or(u,I),w}function m(u,_,g,E){if(typeof g=="object"&&g!==null&&g.type===Br&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case aa:e:{for(var w=g.key,b=_;b!==null;){if(b.key===w){if(w=g.type,w===Br){if(b.tag===7){n(u,b.sibling),_=r(b,g.props.children),_.return=u,u=_;break e}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===wi&&Mp(w)===b.type){n(u,b.sibling),_=r(b,g.props),_.ref=Ks(u,b,g),_.return=u,u=_;break e}n(u,b);break}else e(u,b);b=b.sibling}g.type===Br?(_=fr(g.props.children,u.mode,E,g.key),_.return=u,u=_):(E=Da(g.type,g.key,g.props,null,u.mode,E),E.ref=Ks(u,_,g),E.return=u,u=E)}return o(u);case zr:e:{for(b=g.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=r(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=eu(g,u.mode,E),_.return=u,u=_}return o(u);case wi:return b=g._init,m(u,_,b(g._payload),E)}if(no(g))return v(u,_,g,E);if(qs(g))return y(u,_,g,E);Ma(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,g),_.return=u,u=_):(n(u,_),_=Qc(g,u.mode,E),_.return=u,u=_),o(u)):n(u,_)}return m}var ss=qm(!0),Zm=qm(!1),Do={},Jn=Vi(Do),Ao=Vi(Do),bo=Vi(Do);function ur(t){if(t===Do)throw Error(Z(174));return t}function _h(t,e){switch(Qe(bo,e),Qe(Ao,t),Qe(Jn,Do),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uu(e,t)}tt(Jn),Qe(Jn,e)}function os(){tt(Jn),tt(Ao),tt(bo)}function $m(t){ur(bo.current);var e=ur(Jn.current),n=uu(e,t.type);e!==n&&(Qe(Ao,t),Qe(Jn,n))}function vh(t){Ao.current===t&&(tt(Jn),tt(Ao))}var at=Vi(0);function ja(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function yh(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var Pa=li.ReactCurrentDispatcher,Zc=li.ReactCurrentBatchConfig,mr=0,lt=null,gt=null,Mt=null,Qa=!1,uo=!1,Co=0,Uy=0;function Ut(){throw Error(Z(321))}function xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function Sh(t,e,n,i,r,s){if(mr=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pa.current=t===null||t.memoizedState===null?zy:By,t=n(i,r),uo){s=0;do{if(uo=!1,Co=0,25<=s)throw Error(Z(301));s+=1,Mt=gt=null,e.updateQueue=null,Pa.current=ky,t=n(i,r)}while(uo)}if(Pa.current=el,e=gt!==null&&gt.next!==null,mr=0,Mt=gt=lt=null,Qa=!1,e)throw Error(Z(300));return t}function Mh(){var t=Co!==0;return Co=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?lt.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Mn(){if(gt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Mt===null?lt.memoizedState:Mt.next;if(e!==null)Mt=e,gt=t;else{if(t===null)throw Error(Z(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Mt===null?lt.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function Ro(t,e){return typeof e=="function"?e(t):e}function $c(t){var e=Mn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((mr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,lt.lanes|=h,gr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Dn(i,e.memoizedState)||(jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Dn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Jm(){}function Km(t,e){var n=lt,i=Mn(),r=e(),s=!Dn(i.memoizedState,r);if(s&&(i.memoizedState=r,jt=!0),i=i.queue,Eh(eg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Mt!==null&&Mt.memoizedState.tag&1){if(n.flags|=2048,Po(9,Qm.bind(null,n,i,r,e),void 0,null),Et===null)throw Error(Z(349));mr&30||jm(n,e,r)}return r}function jm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qm(t,e,n,i){e.value=n,e.getSnapshot=i,tg(e)&&ng(t)}function eg(t,e,n){return n(function(){tg(e)&&ng(t)})}function tg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function ng(t){var e=oi(t,1);e!==null&&Un(e,t,1,-1)}function Ep(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},e.queue=t,t=t.dispatch=Fy.bind(null,lt,t),[e.memoizedState,t]}function Po(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ig(){return Mn().memoizedState}function La(t,e,n,i){var r=qn();lt.flags|=t,r.memoizedState=Po(1|e,n,void 0,i===void 0?null:i)}function dl(t,e,n,i){var r=Mn();i=i===void 0?null:i;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,i!==null&&xh(i,o.deps)){r.memoizedState=Po(e,n,s,i);return}}lt.flags|=t,r.memoizedState=Po(1|e,n,s,i)}function wp(t,e){return La(8390656,8,t,e)}function Eh(t,e){return dl(2048,8,t,e)}function rg(t,e){return dl(4,2,t,e)}function sg(t,e){return dl(4,4,t,e)}function og(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ag(t,e,n){return n=n!=null?n.concat([t]):null,dl(4,4,og.bind(null,e,t),n)}function wh(){}function lg(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function cg(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ug(t,e,n){return mr&21?(Dn(n,e)||(n=dm(),lt.lanes|=n,gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function Dy(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var i=Zc.transition;Zc.transition={};try{t(!1),e()}finally{Ye=n,Zc.transition=i}}function hg(){return Mn().memoizedState}function Oy(t,e,n){var i=Oi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},fg(t))dg(e,n);else if(n=Gm(t,e,n,i),n!==null){var r=Yt();Un(n,t,i,r),pg(n,e,i)}}function Fy(t,e,n){var i=Oi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(fg(t))dg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Dn(a,o)){var l=e.interleaved;l===null?(r.next=r,mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gm(t,e,r,i),n!==null&&(r=Yt(),Un(n,t,i,r),pg(n,e,i))}}function fg(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function dg(t,e){uo=Qa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,th(t,n)}}var el={readContext:Sn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},zy={readContext:Sn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,og.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Oy.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Ep,useDebugValue:wh,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Ep(!1),e=t[0];return t=Dy.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=qn();if(it){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),Et===null)throw Error(Z(349));mr&30||jm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,wp(eg.bind(null,i,s,t),[t]),i.flags|=2048,Po(9,Qm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Et.identifierPrefix;if(it){var n=ni,i=ti;n=(i&~(1<<32-Nn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Uy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},By={readContext:Sn,useCallback:lg,useContext:Sn,useEffect:Eh,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:cg,useReducer:$c,useRef:ig,useState:function(){return $c(Ro)},useDebugValue:wh,useDeferredValue:function(t){var e=Mn();return ug(e,gt.memoizedState,t)},useTransition:function(){var t=$c(Ro)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:Jm,useSyncExternalStore:Km,useId:hg,unstable_isNewReconciler:!1},ky={readContext:Sn,useCallback:lg,useContext:Sn,useEffect:Eh,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:cg,useReducer:Jc,useRef:ig,useState:function(){return Jc(Ro)},useDebugValue:wh,useDeferredValue:function(t){var e=Mn();return gt===null?e.memoizedState=t:ug(e,gt.memoizedState,t)},useTransition:function(){var t=Jc(Ro)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:Jm,useSyncExternalStore:Km,useId:hg,unstable_isNewReconciler:!1};function as(t,e){try{var n="",i=e;do n+=gv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vy=typeof WeakMap=="function"?WeakMap:Map;function mg(t,e,n){n=ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nl||(nl=!0,Gu=i),Nu(t,e)},n}function gg(t,e,n){n=ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Nu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nu(t,e),typeof i!="function"&&(Di===null?Di=new Set([this]):Di.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Vy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tx.bind(null,t,e,n),e.then(t,t))}function Ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ii(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var Hy=li.ReactCurrentOwner,jt=!1;function Xt(t,e,n,i){e.child=t===null?Zm(e,null,n,i):ss(e,t.child,n,i)}function Cp(t,e,n,i,r){n=n.render;var s=e.ref;return es(e,r),i=Sh(t,e,n,i,s,r),n=Mh(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ai(t,e,r)):(it&&n&&ch(e),e.flags|=1,Xt(t,e,i,r),e.child)}function Rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ih(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_g(t,e,s,i,r)):(t=Da(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(o,i)&&t.ref===e.ref)return ai(t,e,r)}return e.flags|=1,t=Fi(s,i),t.ref=e.ref,t.return=e,e.child=t}function _g(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Mo(s,i)&&t.ref===e.ref)if(jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,ai(t,e,r)}return Uu(t,e,n,i,r)}function vg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe($r,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe($r,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Qe($r,an),an|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Qe($r,an),an|=i;return Xt(t,e,r,n),e.child}function yg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uu(t,e,n,i,r){var s=en(n)?dr:Ft.current;return s=is(e,s),es(e,r),n=Sh(t,e,n,i,s,r),i=Mh(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ai(t,e,r)):(it&&i&&ch(e),e.flags|=1,Xt(t,e,n,r),e.child)}function Pp(t,e,n,i,r){if(en(n)){var s=!0;Ya(e)}else s=!1;if(es(e,r),e.stateNode===null)Ia(t,e),Ym(e,n,i),Iu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Sn(c):(c=en(n)?dr:Ft.current,c=is(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Sp(e,o,i,c),Ti=!1;var f=e.memoizedState;o.state=f,Ka(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Qt.current||Ti?(typeof h=="function"&&(Lu(e,n,h,i),l=e.memoizedState),(a=Ti||xp(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Wm(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=en(n)?dr:Ft.current,l=is(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Sp(e,o,i,l),Ti=!1,f=e.memoizedState,o.state=f,Ka(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||Qt.current||Ti?(typeof p=="function"&&(Lu(e,n,p,i),v=e.memoizedState),(c=Ti||xp(e,n,c,i,f,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Du(t,e,n,i,s,r)}function Du(t,e,n,i,r,s){yg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mp(e,n,!1),ai(t,e,s);i=e.stateNode,Hy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ss(e,t.child,null,s),e.child=ss(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&mp(e,n,!0),e.child}function xg(t){var e=t.stateNode;e.pendingContext?pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pp(t,e.context,!1),_h(t,e.containerInfo)}function Lp(t,e,n,i,r){return rs(),hh(r),e.flags|=256,Xt(t,e,n,i),e.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sg(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Qe(at,r&1),t===null)return Ru(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gl(o,i,0,null),t=fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fu(n),e.memoizedState=Ou,t):Th(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Gy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Fi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Fi(a,s):(s=fr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ou,i}return s=t.child,t=s.sibling,i=Fi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Th(t,e){return e=gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ea(t,e,n,i){return i!==null&&hh(i),ss(e,t.child,null,n),t=Th(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Kc(Error(Z(422))),Ea(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gl({mode:"visible",children:i.children},r,0,null),s=fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ss(e,t.child,null,o),e.child.memoizedState=Fu(o),e.memoizedState=Ou,s);if(!(e.mode&1))return Ea(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Z(419)),i=Kc(s,i,void 0),Ea(t,e,o,i)}if(a=(o&t.childLanes)!==0,jt||a){if(i=Et,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,oi(t,r),Un(i,t,r,-1))}return Lh(),i=Kc(Error(Z(421))),Ea(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ln=Ni(r.nextSibling),cn=e,it=!0,In=null,t!==null&&(_n[vn++]=ti,_n[vn++]=ni,_n[vn++]=pr,ti=t.id,ni=t.overflow,pr=e),e=Th(e,i.children),e.flags|=4096,e)}function Ip(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Pu(t.return,e,n)}function jc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Mg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ip(t,n,e);else if(t.tag===19)Ip(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Qe(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ja(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),jc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ja(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}jc(e,!0,n,null,s);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=Fi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wy(t,e,n){switch(e.tag){case 3:xg(e),rs();break;case 5:$m(e);break;case 1:en(e.type)&&Ya(e);break;case 4:_h(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Qe($a,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Qe(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?Sg(t,e,n):(Qe(at,at.current&1),t=ai(t,e,n),t!==null?t.sibling:null);Qe(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Mg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Qe(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,vg(t,e,n)}return ai(t,e,n)}var Eg,zu,wg,Tg;Eg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};wg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Jn.current);var s=null;switch(n){case"input":r=ou(t,r),i=ou(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=cu(t,r),i=cu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wa)}hu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Tg=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Xy(t,e,n){var i=e.pendingProps;switch(uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return en(e.type)&&Xa(),Dt(e),null;case 3:return i=e.stateNode,os(),tt(Qt),tt(Ft),yh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Yu(In),In=null))),zu(t,e),Dt(e),null;case 5:vh(e);var r=ur(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)wg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Dt(e),null}if(t=ur(Jn.current),Sa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[To]=s,t=(e.mode&1)!==0,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(r=0;r<ro.length;r++)et(ro[r],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":kd(i,s),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},et("invalid",i);break;case"textarea":Hd(i,s),et("invalid",i)}hu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",""+a]):mo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&et("scroll",i)}switch(n){case"input":la(i),Vd(i,s,!0);break;case"textarea":la(i),Gd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zn]=e,t[To]=i,Eg(t,e,!1,!1),e.stateNode=t;e:{switch(o=fu(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<ro.length;r++)et(ro[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":kd(t,i),r=ou(t,i),et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),et("invalid",t);break;case"textarea":Hd(t,i),r=cu(t,i),et("invalid",t);break;default:r=i}hu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&go(t,l):typeof l=="number"&&go(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&et("scroll",t):l!=null&&$u(t,s,l,o))}switch(n){case"input":la(t),Vd(t,i,!1);break;case"textarea":la(t),Gd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Jr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Jr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)Tg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(n=ur(bo.current),ur(Jn.current),Sa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return Dt(e),null;case 13:if(tt(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&ln!==null&&e.mode&1&&!(e.flags&128))Hm(),rs(),e.flags|=98560,s=!1;else if(s=Sa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[Zn]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else In!==null&&(Yu(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?_t===0&&(_t=3):Lh())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return os(),zu(t,e),t===null&&Eo(e.stateNode.containerInfo),Dt(e),null;case 10:return ph(e.type._context),Dt(e),null;case 17:return en(e.type)&&Xa(),Dt(e),null;case 19:if(tt(at),s=e.memoizedState,s===null)return Dt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)js(s,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ja(t),o!==null){for(e.flags|=128,js(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&dt()>ls&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=ja(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!it)return Dt(e),null}else 2*dt()-s.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=dt(),e.sibling=null,n=at.current,Qe(at,i?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return Ph(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?an&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function Yy(t,e){switch(uh(e),e.tag){case 1:return en(e.type)&&Xa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),tt(Qt),tt(Ft),yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vh(e),null;case 13:if(tt(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(at),null;case 4:return os(),null;case 10:return ph(e.type._context),null;case 22:case 23:return Ph(),null;case 24:return null;default:return null}}var wa=!1,Ot=!1,qy=typeof WeakSet=="function"?WeakSet:Set,he=null;function Zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Bu(t,e,n){try{n()}catch(i){ht(t,e,i)}}var Np=!1;function Zy(t,e){if(Mu=Va,t=Rm(),lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++h===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:t,selectionRange:n},Va=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(E){ht(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return v=Np,Np=!1,v}function ho(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Bu(e,n,s)}r=r.next}while(r!==i)}}function pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ag(t){var e=t.alternate;e!==null&&(t.alternate=null,Ag(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[To],delete e[Au],delete e[Py],delete e[Ly])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bg(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wa));else if(i!==4&&(t=t.child,t!==null))for(Vu(t,e,n),t=t.sibling;t!==null;)Vu(t,e,n),t=t.sibling}function Hu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hu(t,e,n),t=t.sibling;t!==null;)Hu(t,e,n),t=t.sibling}var bt=null,Ln=!1;function Ei(t,e,n){for(n=n.child;n!==null;)Cg(t,e,n),n=n.sibling}function Cg(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ot||Zr(n,e);case 6:var i=bt,r=Ln;bt=null,Ei(t,e,n),bt=i,Ln=r,bt!==null&&(Ln?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Ln?(t=bt,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),xo(t)):Xc(bt,n.stateNode));break;case 4:i=bt,r=Ln,bt=n.stateNode.containerInfo,Ln=!0,Ei(t,e,n),bt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bu(n,e,o),r=r.next}while(r!==i)}Ei(t,e,n);break;case 1:if(!Ot&&(Zr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ht(n,e,a)}Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,Ei(t,e,n),Ot=i):Ei(t,e,n);break;default:Ei(t,e,n)}}function Dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qy),e.forEach(function(i){var r=ix.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,Ln=!1;break e;case 3:bt=a.stateNode.containerInfo,Ln=!0;break e;case 4:bt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(bt===null)throw Error(Z(160));Cg(s,o,r),bt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ht(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rg(e,t),e=e.sibling}function Rg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Yn(t),i&4){try{ho(3,t,t.return),pl(3,t)}catch(y){ht(t,t.return,y)}try{ho(5,t,t.return)}catch(y){ht(t,t.return,y)}}break;case 1:Rn(e,t),Yn(t),i&512&&n!==null&&Zr(n,n.return);break;case 5:if(Rn(e,t),Yn(t),i&512&&n!==null&&Zr(n,n.return),t.flags&32){var r=t.stateNode;try{go(r,"")}catch(y){ht(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jp(r,s),fu(a,o);var c=fu(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?tm(r,d):h==="dangerouslySetInnerHTML"?Qp(r,d):h==="children"?go(r,d):$u(r,h,d,c)}switch(a){case"input":au(r,s);break;case"textarea":Kp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Jr(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Jr(r,!!s.multiple,s.defaultValue,!0):Jr(r,!!s.multiple,s.multiple?[]:"",!1))}r[To]=s}catch(y){ht(t,t.return,y)}}break;case 6:if(Rn(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(Z(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){ht(t,t.return,y)}}break;case 3:if(Rn(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(e.containerInfo)}catch(y){ht(t,t.return,y)}break;case 4:Rn(e,t),Yn(t);break;case 13:Rn(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ch=dt())),i&4&&Dp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||h,Rn(e,t),Ot=c):Rn(e,t),Yn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(he=t,h=t.child;h!==null;){for(d=he=h;he!==null;){switch(f=he,p=f.child,f.tag){case 0:case 11:case 14:case 15:ho(4,f,f.return);break;case 1:Zr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ht(i,n,y)}}break;case 5:Zr(f,f.return);break;case 22:if(f.memoizedState!==null){Fp(d);continue}}p!==null?(p.return=f,he=p):Fp(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=em("display",o))}catch(y){ht(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){ht(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Rn(e,t),Yn(t),i&4&&Dp(t);break;case 21:break;default:Rn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bg(n)){var i=n;break e}n=n.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(go(r,""),i.flags&=-33);var s=Up(t);Hu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Up(t);Vu(t,a,o);break;default:throw Error(Z(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $y(t,e,n){he=t,Pg(t,e,n)}function Pg(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||wa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=wa;var c=Ot;if(wa=o,(Ot=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?zp(r):l!==null?(l.return=o,he=l):zp(r);for(;s!==null;)he=s,Pg(s,e,n),s=s.sibling;he=r,wa=a,Ot=c}Op(t,e,n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Op(t,e,n)}}function Op(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||pl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&xo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Ot||e.flags&512&&ku(e)}catch(f){ht(e,e.return,f)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Fp(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function zp(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pl(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{ku(e)}catch(l){ht(e,s,l)}break;case 5:var o=e.return;try{ku(e)}catch(l){ht(e,o,l)}}}catch(l){ht(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var Jy=Math.ceil,tl=li.ReactCurrentDispatcher,Ah=li.ReactCurrentOwner,xn=li.ReactCurrentBatchConfig,Ge=0,Et=null,pt=null,Ct=0,an=0,$r=Vi(0),_t=0,Lo=null,gr=0,ml=0,bh=0,fo=null,Kt=null,Ch=0,ls=1/0,Qn=null,nl=!1,Gu=null,Di=null,Ta=!1,Ri=null,il=0,po=0,Wu=null,Na=-1,Ua=0;function Yt(){return Ge&6?dt():Na!==-1?Na:Na=dt()}function Oi(t){return t.mode&1?Ge&2&&Ct!==0?Ct&-Ct:Ny.transition!==null?(Ua===0&&(Ua=dm()),Ua):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:xm(t.type)),t):1}function Un(t,e,n,i){if(50<po)throw po=0,Wu=null,Error(Z(185));Io(t,n,i),(!(Ge&2)||t!==Et)&&(t===Et&&(!(Ge&2)&&(ml|=n),_t===4&&bi(t,Ct)),tn(t,i),n===1&&Ge===0&&!(e.mode&1)&&(ls=dt()+500,hl&&Hi()))}function tn(t,e){var n=t.callbackNode;Dv(t,e);var i=ka(t,t===Et?Ct:0);if(i===0)n!==null&&Yd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Yd(n),e===1)t.tag===0?Iy(Bp.bind(null,t)):Bm(Bp.bind(null,t)),Cy(function(){!(Ge&6)&&Hi()}),n=null;else{switch(pm(i)){case 1:n=eh;break;case 4:n=hm;break;case 16:n=Ba;break;case 536870912:n=fm;break;default:n=Ba}n=zg(n,Lg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lg(t,e){if(Na=-1,Ua=0,Ge&6)throw Error(Z(327));var n=t.callbackNode;if(ts()&&t.callbackNode!==n)return null;var i=ka(t,t===Et?Ct:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rl(t,i);else{e=i;var r=Ge;Ge|=2;var s=Ng();(Et!==t||Ct!==e)&&(Qn=null,ls=dt()+500,hr(t,e));do try{Qy();break}catch(a){Ig(t,a)}while(!0);dh(),tl.current=s,Ge=r,pt!==null?e=0:(Et=null,Ct=0,e=_t)}if(e!==0){if(e===2&&(r=_u(t),r!==0&&(i=r,e=Xu(t,r))),e===1)throw n=Lo,hr(t,0),bi(t,i),tn(t,dt()),n;if(e===6)bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ky(r)&&(e=rl(t,i),e===2&&(s=_u(t),s!==0&&(i=s,e=Xu(t,s))),e===1))throw n=Lo,hr(t,0),bi(t,i),tn(t,dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:ar(t,Kt,Qn);break;case 3:if(bi(t,i),(i&130023424)===i&&(e=Ch+500-dt(),10<e)){if(ka(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tu(ar.bind(null,t,Kt,Qn),e);break}ar(t,Kt,Qn);break;case 4:if(bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Nn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jy(i/1960))-i,10<i){t.timeoutHandle=Tu(ar.bind(null,t,Kt,Qn),i);break}ar(t,Kt,Qn);break;case 5:ar(t,Kt,Qn);break;default:throw Error(Z(329))}}}return tn(t,dt()),t.callbackNode===n?Lg.bind(null,t):null}function Xu(t,e){var n=fo;return t.current.memoizedState.isDehydrated&&(hr(t,e).flags|=256),t=rl(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Yu(e)),t}function Yu(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function Ky(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Dn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bi(t,e){for(e&=~bh,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),i=1<<n;t[n]=-1,e&=~i}}function Bp(t){if(Ge&6)throw Error(Z(327));ts();var e=ka(t,0);if(!(e&1))return tn(t,dt()),null;var n=rl(t,e);if(t.tag!==0&&n===2){var i=_u(t);i!==0&&(e=i,n=Xu(t,i))}if(n===1)throw n=Lo,hr(t,0),bi(t,e),tn(t,dt()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t,Kt,Qn),tn(t,dt()),null}function Rh(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(ls=dt()+500,hl&&Hi())}}function _r(t){Ri!==null&&Ri.tag===0&&!(Ge&6)&&ts();var e=Ge;Ge|=1;var n=xn.transition,i=Ye;try{if(xn.transition=null,Ye=1,t)return t()}finally{Ye=i,xn.transition=n,Ge=e,!(Ge&6)&&Hi()}}function Ph(){an=$r.current,tt($r)}function hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,by(n)),pt!==null)for(n=pt.return;n!==null;){var i=n;switch(uh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xa();break;case 3:os(),tt(Qt),tt(Ft),yh();break;case 5:vh(i);break;case 4:os();break;case 13:tt(at);break;case 19:tt(at);break;case 10:ph(i.type._context);break;case 22:case 23:Ph()}n=n.return}if(Et=t,pt=t=Fi(t.current,null),Ct=an=e,_t=0,Lo=null,bh=ml=gr=0,Kt=fo=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}cr=null}return t}function Ig(t,e){do{var n=pt;try{if(dh(),Pa.current=el,Qa){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qa=!1}if(mr=0,Mt=gt=lt=null,uo=!1,Co=0,Ah.current=null,n===null||n.return===null){_t=1,Lo=e,pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Ap(o);if(p!==null){p.flags&=-257,bp(p,o,a,s,e),p.mode&1&&Tp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Tp(s,c,e),Lh();break e}l=Error(Z(426))}}else if(it&&a.mode&1){var m=Ap(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),bp(m,o,a,s,e),hh(as(l,a));break e}}s=l=as(l,a),_t!==4&&(_t=2),fo===null?fo=[s]:fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=mg(s,l,e);vp(s,u);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Di===null||!Di.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=gg(s,a,e);vp(s,E);break e}}s=s.return}while(s!==null)}Dg(n)}catch(w){e=w,pt===n&&n!==null&&(pt=n=n.return);continue}break}while(!0)}function Ng(){var t=tl.current;return tl.current=el,t===null?el:t}function Lh(){(_t===0||_t===3||_t===2)&&(_t=4),Et===null||!(gr&268435455)&&!(ml&268435455)||bi(Et,Ct)}function rl(t,e){var n=Ge;Ge|=2;var i=Ng();(Et!==t||Ct!==e)&&(Qn=null,hr(t,e));do try{jy();break}catch(r){Ig(t,r)}while(!0);if(dh(),Ge=n,tl.current=i,pt!==null)throw Error(Z(261));return Et=null,Ct=0,_t}function jy(){for(;pt!==null;)Ug(pt)}function Qy(){for(;pt!==null&&!Av();)Ug(pt)}function Ug(t){var e=Fg(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?Dg(t):pt=e,Ah.current=null}function Dg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yy(n,e),n!==null){n.flags&=32767,pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,pt=null;return}}else if(n=Xy(n,e,an),n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);_t===0&&(_t=5)}function ar(t,e,n){var i=Ye,r=xn.transition;try{xn.transition=null,Ye=1,ex(t,e,n,i)}finally{xn.transition=r,Ye=i}return null}function ex(t,e,n,i){do ts();while(Ri!==null);if(Ge&6)throw Error(Z(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ov(t,s),t===Et&&(pt=Et=null,Ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ta||(Ta=!0,zg(Ba,function(){return ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xn.transition,xn.transition=null;var o=Ye;Ye=1;var a=Ge;Ge|=4,Ah.current=null,Zy(t,n),Rg(n,t),My(Eu),Va=!!Mu,Eu=Mu=null,t.current=n,$y(n,t,r),bv(),Ge=a,Ye=o,xn.transition=s}else t.current=n;if(Ta&&(Ta=!1,Ri=t,il=r),s=t.pendingLanes,s===0&&(Di=null),Pv(n.stateNode,i),tn(t,dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nl)throw nl=!1,t=Gu,Gu=null,t;return il&1&&t.tag!==0&&ts(),s=t.pendingLanes,s&1?t===Wu?po++:(po=0,Wu=t):po=0,Hi(),null}function ts(){if(Ri!==null){var t=pm(il),e=xn.transition,n=Ye;try{if(xn.transition=null,Ye=16>t?16:t,Ri===null)var i=!1;else{if(t=Ri,Ri=null,il=0,Ge&6)throw Error(Z(331));var r=Ge;for(Ge|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var h=he;switch(h.tag){case 0:case 11:case 15:ho(8,h,s)}var d=h.child;if(d!==null)d.return=h,he=d;else for(;he!==null;){h=he;var f=h.sibling,p=h.return;if(Ag(h),h===c){he=null;break}if(f!==null){f.return=p,he=f;break}he=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ho(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var _=t.current;for(he=_;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=_;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pl(9,a)}}catch(w){ht(a,a.return,w)}if(a===o){he=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,he=E;break e}he=a.return}}if(Ge=r,Hi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(ol,t)}catch{}i=!0}return i}finally{Ye=n,xn.transition=e}}return!1}function kp(t,e,n){e=as(n,e),e=mg(t,e,1),t=Ui(t,e,1),e=Yt(),t!==null&&(Io(t,1,e),tn(t,e))}function ht(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Di===null||!Di.has(i))){t=as(n,t),t=gg(e,t,1),e=Ui(e,t,1),t=Yt(),e!==null&&(Io(e,1,t),tn(e,t));break}}e=e.return}}function tx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Et===t&&(Ct&n)===n&&(_t===4||_t===3&&(Ct&130023424)===Ct&&500>dt()-Ch?hr(t,0):bh|=n),tn(t,e)}function Og(t,e){e===0&&(t.mode&1?(e=ha,ha<<=1,!(ha&130023424)&&(ha=4194304)):e=1);var n=Yt();t=oi(t,e),t!==null&&(Io(t,e,n),tn(t,n))}function nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Og(t,n)}function ix(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),Og(t,n)}var Fg;Fg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,Wy(t,e,n);jt=!!(t.flags&131072)}else jt=!1,it&&e.flags&1048576&&km(e,Za,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ia(t,e),t=e.pendingProps;var r=is(e,Ft.current);es(e,n),r=Sh(null,e,i,t,r,n);var s=Mh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,Ya(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gh(e),r.updater=fl,e.stateNode=r,r._reactInternals=e,Iu(e,i,t,n),e=Du(null,e,i,!0,s,n)):(e.tag=0,it&&s&&ch(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ia(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sx(i),t=Pn(i,t),r){case 0:e=Uu(null,e,i,t,n);break e;case 1:e=Pp(null,e,i,t,n);break e;case 11:e=Cp(null,e,i,t,n);break e;case 14:e=Rp(null,e,i,Pn(i.type,t),n);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Uu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Pp(t,e,i,r,n);case 3:e:{if(xg(e),t===null)throw Error(Z(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wm(t,e),Ka(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=as(Error(Z(423)),e),e=Lp(t,e,i,n,r);break e}else if(i!==r){r=as(Error(Z(424)),e),e=Lp(t,e,i,n,r);break e}else for(ln=Ni(e.stateNode.containerInfo.firstChild),cn=e,it=!0,In=null,n=Zm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),i===r){e=ai(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return $m(e),t===null&&Ru(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,wu(i,r)?o=null:s!==null&&wu(i,s)&&(e.flags|=32),yg(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&Ru(e),null;case 13:return Sg(t,e,n);case 4:return _h(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ss(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Cp(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Qe($a,i._currentValue),i._currentValue=o,s!==null)if(Dn(s.value,o)){if(s.children===r.children&&!Qt.current){e=ai(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,es(e,n),r=Sn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),Rp(t,e,i,r,n);case 15:return _g(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Ia(t,e),e.tag=1,en(i)?(t=!0,Ya(e)):t=!1,es(e,n),Ym(e,i,r),Iu(e,i,r,n),Du(null,e,i,!0,t,n);case 19:return Mg(t,e,n);case 22:return vg(t,e,n)}throw Error(Z(156,e.tag))};function zg(t,e){return um(t,e)}function rx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new rx(t,e,n,i)}function Ih(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sx(t){if(typeof t=="function")return Ih(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ku)return 11;if(t===ju)return 14}return 2}function Fi(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Da(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ih(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Br:return fr(n.children,r,s,e);case Ju:o=8,r|=8;break;case nu:return t=yn(12,n,e,r|2),t.elementType=nu,t.lanes=s,t;case iu:return t=yn(13,n,e,r),t.elementType=iu,t.lanes=s,t;case ru:return t=yn(19,n,e,r),t.elementType=ru,t.lanes=s,t;case qp:return gl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xp:o=10;break e;case Yp:o=9;break e;case Ku:o=11;break e;case ju:o=14;break e;case wi:o=16,i=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=yn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function fr(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function gl(t,e,n,i){return t=yn(22,t,i,e),t.elementType=qp,t.lanes=n,t.stateNode={isHidden:!1},t}function Qc(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function eu(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ox(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fc(0),this.expirationTimes=Fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nh(t,e,n,i,r,s,o,a,l){return t=new ox(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gh(s),t}function ax(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Bg(t){if(!t)return Bi;t=t._reactInternals;e:{if(yr(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(en(n))return zm(t,n,e)}return e}function kg(t,e,n,i,r,s,o,a,l){return t=Nh(n,i,!0,t,r,s,o,a,l),t.context=Bg(null),n=t.current,i=Yt(),r=Oi(n),s=ii(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,Io(t,r,i),tn(t,i),t}function _l(t,e,n,i){var r=e.current,s=Yt(),o=Oi(r);return n=Bg(n),e.context===null?e.context=n:e.pendingContext=n,e=ii(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(Un(t,r,o,s),Ra(t,r,o)),o}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uh(t,e){Vp(t,e),(t=t.alternate)&&Vp(t,e)}function lx(){return null}var Vg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dh(t){this._internalRoot=t}vl.prototype.render=Dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));_l(t,e,null,null)};vl.prototype.unmount=Dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){_l(null,t,null,null)}),e[si]=null}};function vl(t){this._internalRoot=t}vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=_m();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&ym(t)}};function Oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function cx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sl(o);s.call(c)}}var o=kg(e,i,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=o,t[si]=o.current,Eo(t.nodeType===8?t.parentNode:t),_r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=sl(l);a.call(c)}}var l=Nh(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=l,t[si]=l.current,Eo(t.nodeType===8?t.parentNode:t),_r(function(){_l(e,l,n,i)}),l}function xl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sl(o);a.call(l)}}_l(e,o,t,r)}else o=cx(n,e,t,r,i);return sl(o)}mm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=io(e.pendingLanes);n!==0&&(th(e,n|1),tn(e,dt()),!(Ge&6)&&(ls=dt()+500,Hi()))}break;case 13:_r(function(){var i=oi(t,1);if(i!==null){var r=Yt();Un(i,t,1,r)}}),Uh(t,1)}};nh=function(t){if(t.tag===13){var e=oi(t,134217728);if(e!==null){var n=Yt();Un(e,t,134217728,n)}Uh(t,134217728)}};gm=function(t){if(t.tag===13){var e=Oi(t),n=oi(t,e);if(n!==null){var i=Yt();Un(n,t,e,i)}Uh(t,e)}};_m=function(){return Ye};vm=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};pu=function(t,e,n){switch(e){case"input":if(au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ul(i);if(!r)throw Error(Z(90));$p(i),au(i,r)}}}break;case"textarea":Kp(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};rm=Rh;sm=_r;var ux={usingClientEntryPoint:!1,Events:[Uo,Gr,ul,nm,im,Rh]},Qs={findFiberByHostInstance:lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hx={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lm(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(eo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!eo.isDisabled&&eo.supportsFiber))try{ol=eo.inject(hx),$n=eo}catch{}var eo;fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oh(e))throw Error(Z(200));return ax(t,e,null,n)};fn.createRoot=function(t,e){if(!Oh(t))throw Error(Z(299));var n=!1,i="",r=Vg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nh(t,1,!1,null,null,n,!1,i,r),t[si]=e.current,Eo(t.nodeType===8?t.parentNode:t),new Dh(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=lm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return _r(t)};fn.hydrate=function(t,e,n){if(!yl(e))throw Error(Z(200));return xl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Oh(t))throw Error(Z(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Vg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kg(e,null,t,1,n??null,r,!1,s,o),t[si]=e.current,Eo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vl(e)};fn.render=function(t,e,n){if(!yl(e))throw Error(Z(200));return xl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!yl(t))throw Error(Z(40));return t._reactRootContainer?(_r(function(){xl(null,null,t,!1,function(){t._reactRootContainer=null,t[si]=null})}),!0):!1};fn.unstable_batchedUpdates=Rh;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!yl(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return xl(t,e,n,!1,i)};fn.version="18.2.0-next-9e3b772b8-20220608"});var Xg=rr((ET,Wg)=>{"use strict";function Gg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gg)}catch(t){console.error(t)}}Gg(),Wg.exports=Hg()});var qg=rr(Fh=>{"use strict";var Yg=Xg();Fh.createRoot=Yg.createRoot,Fh.hydrateRoot=Yg.hydrateRoot;var wT});var sd=vc(ta()),z_=vc(qg());var Vs=vc(ta());var Qf="159";var fx=0,Zg=1,dx=2;var g_=1,px=2,pi=3,Qi=0,sn=1,gi=2;var Ji=0,Ps=1,$g=2,Jg=3,Kg=4,mx=5,Tr=100,gx=101,_x=102,jg=103,Qg=104,vx=200,yx=201,xx=202,Sx=203,gf=204,_f=205,Mx=206,Ex=207,wx=208,Tx=209,Ax=210,bx=211,Cx=212,Rx=213,Px=214,Lx=0,Ix=1,Nx=2,Wl=3,Ux=4,Dx=5,Ox=6,Fx=7,__=0,zx=1,Bx=2,Ki=0,kx=1,Vx=2,Hx=3,Gx=4,Wx=5;var v_=300,Ns=301,Us=302,vf=303,yf=304,hc=306,xf=1e3,Bn=1001,Sf=1002,$t=1003,e0=1004;var zh=1005;var wn=1006,Xx=1007;var Wo=1008;var ji=1009,Yx=1010,qx=1011,ed=1012,y_=1013,Zi=1014,$i=1015,Xo=1016,x_=1017,S_=1018,br=1020,Zx=1021,kn=1023,$x=1024,Jx=1025,Cr=1026,Ds=1027,Kx=1028,M_=1029,jx=1030,E_=1031,w_=1033,Bh=33776,kh=33777,Vh=33778,Hh=33779,t0=35840,n0=35841,i0=35842,r0=35843,T_=36196,s0=37492,o0=37496,a0=37808,l0=37809,c0=37810,u0=37811,h0=37812,f0=37813,d0=37814,p0=37815,m0=37816,g0=37817,_0=37818,v0=37819,y0=37820,x0=37821,Gh=36492,S0=36494,M0=36495,Qx=36283,E0=36284,w0=36285,T0=36286;var Xl=2300,Yl=2301,Wh=2302,A0=2400,b0=2401,C0=2402;var A_=3e3,Rr=3001,eS=3200,tS=3201,nS=0,iS=1,Tn="",Pt="srgb",yi="srgb-linear",td="display-p3",fc="display-p3-linear",ql="linear",nt="srgb",Zl="rec709",$l="p3";var hs=7680;var R0=519,rS=512,sS=513,oS=514,b_=515,aS=516,lS=517,cS=518,uS=519,P0=35044;var L0="300 es",Mf=1035,_i=2e3,Jl=2001,er=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xh=Math.PI/180,Ef=180/Math.PI;function $o(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function hS(t,e){return(t%e+e)%e}function Yh(t,e,n){return(1-n)*t+n*e}function I0(t){return(t&t-1)===0&&t!==0}function wf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Oo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Je=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],v=i[8],y=r[0],m=r[3],u=r[6],_=r[1],g=r[4],E=r[7],w=r[2],b=r[5],C=r[8];return s[0]=o*y+a*_+l*w,s[3]=o*m+a*g+l*b,s[6]=o*u+a*E+l*C,s[1]=c*y+h*_+d*w,s[4]=c*m+h*g+d*b,s[7]=c*u+h*E+d*C,s[2]=f*y+p*_+v*w,s[5]=f*m+p*g+v*b,s[8]=f*u+p*E+v*C,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return e[0]=d*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qh.makeScale(e,n)),this}rotate(e){return this.premultiply(qh.makeRotation(-e)),this}translate(e,n){return this.premultiply(qh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},qh=new ze;function C_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fS(){let t=Kl("canvas");return t.style.display="block",t}var N0={};function Ho(t){t in N0||(N0[t]=!0,console.warn(t))}var U0=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),D0=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sl={[yi]:{transfer:ql,primaries:Zl,toReference:t=>t,fromReference:t=>t},[Pt]:{transfer:nt,primaries:Zl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[fc]:{transfer:ql,primaries:$l,toReference:t=>t.applyMatrix3(D0),fromReference:t=>t.applyMatrix3(U0)},[td]:{transfer:nt,primaries:$l,toReference:t=>t.convertSRGBToLinear().applyMatrix3(D0),fromReference:t=>t.applyMatrix3(U0).convertLinearToSRGB()}},dS=new Set([yi,fc]),$e={enabled:!0,_workingColorSpace:yi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!dS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=Sl[e].toReference,r=Sl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Sl[t].primaries},getTransfer:function(t){return t===Tn?ql:Sl[t].transfer}};function Ls(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var fs,jl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=Kl("canvas")),fs.width=e.width,fs.height=e.height;let i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Kl("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ls(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ls(n[i]/255)*255):n[i]=Ls(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pS=0,Ql=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=$o(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($h(r[o].image)):s.push($h(r[o]))}else s=$h(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function $h(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jl.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mS=0,Vn=class t extends er{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Bn,r=Bn,s=wn,o=Wo,a=kn,l=ji,c=t.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=$o(),this.name="",this.source=new Ql(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Rr?Pt:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?Rr:A_}set encoding(e){Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rr?Pt:Tn}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=v_;Vn.DEFAULT_ANISOTROPY=1;var Lt=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let g=(c+1)/2,E=(p+1)/2,w=(u+1)/2,b=(h+f)/4,C=(d+y)/4,I=(v+m)/4;return g>E&&g>w?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=b/i,s=C/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=b/r,s=I/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=I/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-y)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tf=class extends er{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);let r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ho("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Rr?Pt:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new Ql(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xi=class extends Tf{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},ec=class extends Vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Af=class extends Vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(d!==y||l!==f||c!==p||h!==v){let m=1-a,u=l*f+c*p+h*v+d*y,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){let w=Math.sqrt(g),b=Math.atan2(w,u*_);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w}let E=a*_;if(l=l*m+f*E,c=c*m+p*E,h=h*m+v*E,d=d*m+y*E,m===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+h*d+l*p-c*f,e[n+1]=l*v+h*f+c*d-a*p,e[n+2]=c*v+h*p+a*f-l*d,e[n+3]=h*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(O0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(O0.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jh=new F,O0=new tr,Pr=class{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ml.copy(i.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),El.subVectors(this.max,Fo),ds.subVectors(e.a,Fo),ps.subVectors(e.b,Fo),ms.subVectors(e.c,Fo),Gi.subVectors(ps,ds),Wi.subVectors(ms,ps),xr.subVectors(ds,ms);let n=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-xr.z,xr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,xr.z,0,-xr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-xr.y,xr.x,0];return!Kh(n,ds,ps,ms,El)||(n=[1,0,0,0,1,0,0,0,1],!Kh(n,ds,ps,ms,El))?!1:(wl.crossVectors(Gi,Wi),n=[wl.x,wl.y,wl.z],Kh(n,ds,ps,ms,El))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new F,new F,new F,new F,new F,new F,new F,new F],On=new F,Ml=new Pr,ds=new F,ps=new F,ms=new F,Gi=new F,Wi=new F,xr=new F,Fo=new F,El=new F,wl=new F,Sr=new F;function Kh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Sr.fromArray(t,s);let a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=n.dot(Sr),h=i.dot(Sr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var gS=new Pr,zo=new F,jh=new F,Yo=class{constructor(e=new F,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):gS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);let n=zo.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(jh)),this.expandByPoint(zo.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new F,Qh=new F,Tl=new F,Xi=new F,ef=new F,Al=new F,tf=new F,bf=class{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qh.copy(e).add(n).multiplyScalar(.5),Tl.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(Qh);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Tl),a=Xi.dot(this.direction),l=-Xi.dot(Tl),c=Xi.lengthSq(),h=Math.abs(1-o*o),d,f,p,v;if(h>0)if(d=o*l-a,f=o*a-l,v=s*h,d>=0)if(f>=-v)if(f<=v){let y=1/h;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qh).addScaledVector(Tl,f),p}intersectSphere(e,n){ui.subVectors(e.center,this.origin);let i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){ef.subVectors(n,e),Al.subVectors(i,e),tf.crossVectors(ef,Al);let o=this.direction.dot(tf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);let l=a*this.direction.dot(Al.crossVectors(Xi,Al));if(l<0)return null;let c=a*this.direction.dot(ef.cross(Xi));if(c<0||l+c>o)return null;let h=-a*Xi.dot(tf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class t{constructor(e,n,i,r,s,o,a,l,c,h,d,f,p,v,y,m){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,d,f,p,v,y,m)}set(e,n,i,r,s,o,a,l,c,h,d,f,p,v,y,m){let u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*h,p=o*d,v=a*h,y=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,v=c*h,y=c*d;n[0]=f+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=p*a-v,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,v=c*h,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*h,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*d,v=a*h,y=a*d;n[0]=l*h,n[4]=v*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*h,n[4]=y-f*d,n[8]=v*d+p,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*d+v,n[10]=f-y*d}else if(e.order==="XZY"){let f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+y,n[5]=o*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*h,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_S,e,vS)}lookAt(e,n,i){let r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Yi.crossVectors(i,dn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Yi.crossVectors(i,dn)),Yi.normalize(),bl.crossVectors(dn,Yi),r[0]=Yi.x,r[4]=bl.x,r[8]=dn.x,r[1]=Yi.y,r[5]=bl.y,r[9]=dn.y,r[2]=Yi.z,r[6]=bl.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],v=i[2],y=i[6],m=i[10],u=i[14],_=i[3],g=i[7],E=i[11],w=i[15],b=r[0],C=r[4],I=r[8],S=r[12],A=r[1],k=r[5],X=r[9],Q=r[13],P=r[2],B=r[6],Y=r[10],G=r[14],ie=r[3],W=r[7],$=r[11],ee=r[15];return s[0]=o*b+a*A+l*P+c*ie,s[4]=o*C+a*k+l*B+c*W,s[8]=o*I+a*X+l*Y+c*$,s[12]=o*S+a*Q+l*G+c*ee,s[1]=h*b+d*A+f*P+p*ie,s[5]=h*C+d*k+f*B+p*W,s[9]=h*I+d*X+f*Y+p*$,s[13]=h*S+d*Q+f*G+p*ee,s[2]=v*b+y*A+m*P+u*ie,s[6]=v*C+y*k+m*B+u*W,s[10]=v*I+y*X+m*Y+u*$,s[14]=v*S+y*Q+m*G+u*ee,s[3]=_*b+g*A+E*P+w*ie,s[7]=_*C+g*k+E*B+w*W,s[11]=_*I+g*X+E*Y+w*$,s[15]=_*S+g*Q+E*G+w*ee,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],v=e[3],y=e[7],m=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*d+n*a*f+r*o*d-i*o*f+i*l*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],v=e[12],y=e[13],m=e[14],u=e[15],_=d*m*c-y*f*c+y*l*p-a*m*p-d*l*u+a*f*u,g=v*f*c-h*m*c-v*l*p+o*m*p+h*l*u-o*f*u,E=h*y*c-v*d*c+v*a*p-o*y*p-h*a*u+o*d*u,w=v*d*l-h*y*l-v*a*f+o*y*f+h*a*m-o*d*m,b=n*_+i*g+r*E+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/b;return e[0]=_*C,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*u-i*f*u)*C,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*C,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*C,e[4]=g*C,e[5]=(h*m*s-v*f*s+v*r*p-n*m*p-h*r*u+n*f*u)*C,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*u-n*l*u)*C,e[7]=(o*f*s-h*l*s+h*r*c-n*f*c-o*r*p+n*l*p)*C,e[8]=E*C,e[9]=(v*d*s-h*y*s-v*i*p+n*y*p+h*i*u-n*d*u)*C,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*u+n*a*u)*C,e[11]=(h*a*s-o*d*s-h*i*c+n*d*c+o*i*p-n*a*p)*C,e[12]=w*C,e[13]=(h*y*r-v*d*r+v*i*f-n*y*f-h*i*m+n*d*m)*C,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*m-n*a*m)*C,e[15]=(o*d*r-h*a*r+h*i*l-n*d*l-o*i*f+n*a*f)*C,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,v=s*d,y=o*h,m=o*d,u=a*d,_=l*c,g=l*h,E=l*d,w=i.x,b=i.y,C=i.z;return r[0]=(1-(y+u))*w,r[1]=(p+E)*w,r[2]=(v-g)*w,r[3]=0,r[4]=(p-E)*b,r[5]=(1-(f+u))*b,r[6]=(m+_)*b,r[7]=0,r[8]=(v+g)*C,r[9]=(m-_)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=gs.set(r[0],r[1],r[2]).length(),o=gs.set(r[4],r[5],r[6]).length(),a=gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);let c=1/s,h=1/o,d=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i){let l=this.elements,c=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r),p,v;if(a===_i)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Jl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i){let l=this.elements,c=1/(n-e),h=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*h,v,y;if(a===_i)v=(o+s)*d,y=-2*d;else if(a===Jl)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},gs=new F,Fn=new kt,_S=new F(0,0,0),vS=new F(1,1,1),Yi=new F,bl=new F,dn=new F,F0=new kt,z0=new tr,tc=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return F0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(F0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return z0.setFromEuler(this),this.setFromQuaternion(z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tc.DEFAULT_ORDER="XYZ";var nc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yS=0,B0=new F,_s=new tr,hi=new kt,Cl=new F,Bo=new F,xS=new F,SS=new tr,k0=new F(1,0,0),V0=new F(0,1,0),H0=new F(0,0,1),MS={type:"added"},ES={type:"removed"},Hn=class t extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new F,n=new tc,i=new tr,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new ze}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(k0,e)}rotateY(e){return this.rotateOnAxis(V0,e)}rotateZ(e){return this.rotateOnAxis(H0,e)}translateOnAxis(e,n){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(k0,e)}translateY(e){return this.translateOnAxis(V0,e)}translateZ(e){return this.translateOnAxis(H0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Cl.copy(e):Cl.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Bo,Cl,this.up):hi.lookAt(Cl,Bo,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(hi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(MS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ES)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,xS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,SS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++){let s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++){let a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Hn.DEFAULT_UP=new F(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new F,fi=new F,nf=new F,di=new F,vs=new F,ys=new F,G0=new F,rf=new F,sf=new F,of=new F,Rl=!1,bs=class t{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),fi.subVectors(i,n),nf.subVectors(e,n);let o=zn.dot(zn),a=zn.dot(fi),l=zn.dot(nf),c=fi.dot(fi),h=fi.dot(nf),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);let f=1/d,p=(c*l-a*h)*f,v=(o*h-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di),di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,n,i,r,s,o,a,l){return Rl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,di),l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),fi.subVectors(e,n),zn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),zn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Rl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rl=!0),t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;vs.subVectors(r,i),ys.subVectors(s,i),rf.subVectors(e,i);let l=vs.dot(rf),c=ys.dot(rf);if(l<=0&&c<=0)return n.copy(i);sf.subVectors(e,r);let h=vs.dot(sf),d=ys.dot(sf);if(h>=0&&d<=h)return n.copy(r);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(vs,o);of.subVectors(e,s);let p=vs.dot(of),v=ys.dot(of);if(v>=0&&p<=v)return n.copy(s);let y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ys,a);let m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return G0.subVectors(s,r),a=(d-h)/(d-h+(p-v)),n.copy(r).addScaledVector(G0,a);let u=1/(m+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(vs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},R_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function af(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Xe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=hS(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=af(o,s,e+1/3),this.g=af(o,s,e),this.b=af(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pt){let i=R_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=Zh(e.r),this.g=Zh(e.g),this.b=Zh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return $e.fromWorkingColorSpace(Bt.copy(this),e),Math.round(rn(Bt.r*255,0,255))*65536+Math.round(rn(Bt.g*255,0,255))*256+Math.round(rn(Bt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Bt.copy(this),n);let i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Pt){$e.fromWorkingColorSpace(Bt.copy(this),e);let n=Bt.r,i=Bt.g,r=Bt.b;return e!==Pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(Pl);let i=Yh(qi.h,Pl.h,n),r=Yh(qi.s,Pl.s,n),s=Yh(qi.l,Pl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Xe;Xe.NAMES=R_;var wS=0,Os=class extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Ps,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=_f,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gf&&(i.blendSrc=this.blendSrc),this.blendDst!==_f&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fs=class extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=__,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mt=new F,Ll=new Je,bn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=P0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(e),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Oo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oo(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oo(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oo(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P0&&(e.usage=this.usage),e}};var ic=class extends bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var rc=class extends bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var vi=class extends bn{constructor(e,n,i){super(new Float32Array(e),n,i)}};var TS=0,En=new kt,lf=new Hn,xs=new F,pn=new Pr,ko=new Pr,wt=new F,Lr=class t extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?rc:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(pn.min,ko.min),pn.expandByPoint(wt),wt.addVectors(pn.max,ko.max),pn.expandByPoint(wt)):(pn.expandByPoint(ko.min),pn.expandByPoint(ko.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wt.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),wt.add(xs)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new F,h[A]=new F;let d=new F,f=new F,p=new F,v=new Je,y=new Je,m=new Je,u=new F,_=new F;function g(A,k,X){d.fromArray(r,A*3),f.fromArray(r,k*3),p.fromArray(r,X*3),v.fromArray(o,A*2),y.fromArray(o,k*2),m.fromArray(o,X*2),f.sub(d),p.sub(d),y.sub(v),m.sub(v);let Q=1/(y.x*m.y-m.x*y.y);isFinite(Q)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(Q),_.copy(p).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(Q),c[A].add(u),c[k].add(u),c[X].add(u),h[A].add(_),h[k].add(_),h[X].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let A=0,k=E.length;A<k;++A){let X=E[A],Q=X.start,P=X.count;for(let B=Q,Y=Q+P;B<Y;B+=3)g(i[B+0],i[B+1],i[B+2])}let w=new F,b=new F,C=new F,I=new F;function S(A){C.fromArray(s,A*3),I.copy(C);let k=c[A];w.copy(k),w.sub(C.multiplyScalar(C.dot(k))).normalize(),b.crossVectors(I,k);let Q=b.dot(h[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=Q}for(let A=0,k=E.length;A<k;++A){let X=E[A],Q=X.start,P=X.count;for(let B=Q,Y=Q+P;B<Y;B+=3)S(i[B+0]),S(i[B+1]),S(i[B+2])}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){let v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new bn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(n))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},W0=new kt,Mr=new bf,Il=new Yo,X0=new F,Ss=new F,Ms=new F,Es=new F,cf=new F,Nl=new F,Ul=new Je,Dl=new Je,Ol=new Je,Y0=new F,q0=new F,Z0=new F,Fl=new F,zl=new F,An=class extends Hn{constructor(e=new Lr,n=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(cf.fromBufferAttribute(d,e),o?Nl.addScaledVector(cf,h):Nl.addScaledVector(cf.sub(n),h))}n.add(Nl)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Il.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Il,X0)===null||Mr.origin.distanceToSquared(X0)>(e.far-e.near)**2))&&(W0.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(W0),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){let m=f[v],u=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,w=g;E<w;E+=3){let b=a.getX(E),C=a.getX(E+1),I=a.getX(E+2);r=Bl(this,u,e,i,c,h,d,b,C,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,u=y;m<u;m+=3){let _=a.getX(m),g=a.getX(m+1),E=a.getX(m+2);r=Bl(this,o,e,i,c,h,d,_,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){let m=f[v],u=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,w=g;E<w;E+=3){let b=E,C=E+1,I=E+2;r=Bl(this,u,e,i,c,h,d,b,C,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,u=y;m<u;m+=3){let _=m,g=m+1,E=m+2;r=Bl(this,o,e,i,c,h,d,_,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function AS(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qi,a),l===null)return null;zl.copy(a),zl.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(zl);return c<n.near||c>n.far?null:{distance:c,point:zl.clone(),object:t}}function Bl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ss),t.getVertexPosition(l,Ms),t.getVertexPosition(c,Es);let h=AS(t,e,n,i,Ss,Ms,Es,Fl);if(h){r&&(Ul.fromBufferAttribute(r,a),Dl.fromBufferAttribute(r,l),Ol.fromBufferAttribute(r,c),h.uv=bs.getInterpolation(Fl,Ss,Ms,Es,Ul,Dl,Ol,new Je)),s&&(Ul.fromBufferAttribute(s,a),Dl.fromBufferAttribute(s,l),Ol.fromBufferAttribute(s,c),h.uv1=bs.getInterpolation(Fl,Ss,Ms,Es,Ul,Dl,Ol,new Je),h.uv2=h.uv1),o&&(Y0.fromBufferAttribute(o,a),q0.fromBufferAttribute(o,l),Z0.fromBufferAttribute(o,c),h.normal=bs.getInterpolation(Fl,Ss,Ms,Es,Y0,q0,Z0,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};bs.getNormal(Ss,Ms,Es,d.normal),h.face=d}return h}var Ir=class t extends Lr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(h,3)),this.setAttribute("uv",new vi(d,2));function v(y,m,u,_,g,E,w,b,C,I,S){let A=E/C,k=w/I,X=E/2,Q=w/2,P=b/2,B=C+1,Y=I+1,G=0,ie=0,W=new F;for(let $=0;$<Y;$++){let ee=$*k-Q;for(let de=0;de<B;de++){let V=de*A-X;W[y]=V*_,W[m]=ee*g,W[u]=P,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[u]=b>0?1:-1,h.push(W.x,W.y,W.z),d.push(de/C),d.push(1-$/I),G+=1}}for(let $=0;$<I;$++)for(let ee=0;ee<C;ee++){let de=f+ee+B*$,V=f+ee+B*($+1),q=f+(ee+1)+B*($+1),ae=f+(ee+1)+B*$;l.push(de,V,ae),l.push(V,q,ae),ie+=6}a.addGroup(p,ie,S),p+=ie,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zs(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){let e={};for(let n=0;n<t.length;n++){let i=zs(t[n]);for(let r in i)e[r]=i[r]}return e}function bS(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function P_(t){return t.getRenderTarget()===null?t.outputColorSpace:$e.workingColorSpace}var CS={clone:zs,merge:Zt},RS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RS,this.fragmentShader=PS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=bS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},sc=class extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jt=class extends sc{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ef*2*Math.atan(Math.tan(Xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Xh*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},ws=-90,Ts=1,Cf=class extends Hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(ws,Ts,e,n);r.layers=this.layers,this.add(r);let s=new Jt(ws,Ts,e,n);s.layers=this.layers,this.add(s);let o=new Jt(ws,Ts,e,n);o.layers=this.layers,this.add(o);let a=new Jt(ws,Ts,e,n);a.layers=this.layers,this.add(a);let l=new Jt(ws,Ts,e,n);l.layers=this.layers,this.add(l);let c=new Jt(ws,Ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},oc=class extends Vn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Ns,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rf=class extends xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ho("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rr?Pt:Tn),this.texture=new oc(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ir(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Ji});s.uniforms.tEquirect.value=n;let o=new An(r,s),a=n.minFilter;return n.minFilter===Wo&&(n.minFilter=wn),new Cf(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},uf=new F,LS=new F,IS=new ze,mi=class{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=uf.subVectors(i,n).cross(LS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(uf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||IS.getNormalMatrix(e),r=this.coplanarPoint(uf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Er=new Yo,kl=new F,ac=class{constructor(e=new mi,n=new mi,i=new mi,r=new mi,s=new mi,o=new mi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],p=r[8],v=r[9],y=r[10],m=r[11],u=r[12],_=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,m-p,E-u).normalize(),i[1].setComponents(l+s,f+c,m+p,E+u).normalize(),i[2].setComponents(l+o,f+h,m+v,E+_).normalize(),i[3].setComponents(l-o,f-h,m-v,E-_).normalize(),i[4].setComponents(l-a,f-d,m-y,E-g).normalize(),n===_i)i[5].setComponents(l+a,f+d,m+y,E+g).normalize();else if(n===Jl)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(kl.x=r.normal.x>0?e.max.x:e.min.x,kl.y=r.normal.y>0?e.max.y:e.min.y,kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function L_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function NS(t,e){let n=e.isWebGL2,i=new WeakMap;function r(c,h){let d=c.array,f=c.usage,p=d.byteLength,v=t.createBuffer();t.bindBuffer(h,v),t.bufferData(h,d,f),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,d){let f=h.array,p=h._updateRange,v=h.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&v.length===0&&t.bufferSubData(d,0,f),v.length!==0){for(let y=0,m=v.length;y<m;y++){let u=v[y];n?t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Pf=class t extends Lr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=n/l,p=[],v=[],y=[],m=[];for(let u=0;u<h;u++){let _=u*f-o;for(let g=0;g<c;g++){let E=g*d-s;v.push(E,-_,0),y.push(0,0,1),m.push(g/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){let g=_+c*u,E=_+c*(u+1),w=_+1+c*(u+1),b=_+1+c*u;p.push(g,E,b),p.push(E,w,b)}this.setIndex(p),this.setAttribute("position",new vi(v,3)),this.setAttribute("normal",new vi(y,3)),this.setAttribute("uv",new vi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},US=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,WS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uM="gl_FragColor = linearToOutputTexel( gl_FragColor );",hM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,VM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$M=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,JM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,KM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,c1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,V1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,H1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:US,alphahash_pars_fragment:DS,alphamap_fragment:OS,alphamap_pars_fragment:FS,alphatest_fragment:zS,alphatest_pars_fragment:BS,aomap_fragment:kS,aomap_pars_fragment:VS,batching_pars_vertex:HS,batching_vertex:GS,begin_vertex:WS,beginnormal_vertex:XS,bsdfs:YS,iridescence_fragment:qS,bumpmap_pars_fragment:ZS,clipping_planes_fragment:$S,clipping_planes_pars_fragment:JS,clipping_planes_pars_vertex:KS,clipping_planes_vertex:jS,color_fragment:QS,color_pars_fragment:eM,color_pars_vertex:tM,color_vertex:nM,common:iM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:sM,displacementmap_pars_vertex:oM,displacementmap_vertex:aM,emissivemap_fragment:lM,emissivemap_pars_fragment:cM,colorspace_fragment:uM,colorspace_pars_fragment:hM,envmap_fragment:fM,envmap_common_pars_fragment:dM,envmap_pars_fragment:pM,envmap_pars_vertex:mM,envmap_physical_pars_fragment:bM,envmap_vertex:gM,fog_vertex:_M,fog_pars_vertex:vM,fog_fragment:yM,fog_pars_fragment:xM,gradientmap_pars_fragment:SM,lightmap_fragment:MM,lightmap_pars_fragment:EM,lights_lambert_fragment:wM,lights_lambert_pars_fragment:TM,lights_pars_begin:AM,lights_toon_fragment:CM,lights_toon_pars_fragment:RM,lights_phong_fragment:PM,lights_phong_pars_fragment:LM,lights_physical_fragment:IM,lights_physical_pars_fragment:NM,lights_fragment_begin:UM,lights_fragment_maps:DM,lights_fragment_end:OM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:zM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:kM,map_fragment:VM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:WM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:YM,morphcolor_vertex:qM,morphnormal_vertex:ZM,morphtarget_pars_vertex:$M,morphtarget_vertex:JM,normal_fragment_begin:KM,normal_fragment_maps:jM,normal_pars_fragment:QM,normal_pars_vertex:e1,normal_vertex:t1,normalmap_pars_fragment:n1,clearcoat_normal_fragment_begin:i1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:o1,opaque_fragment:a1,packing:l1,premultiplied_alpha_fragment:c1,project_vertex:u1,dithering_fragment:h1,dithering_pars_fragment:f1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:g1,shadowmap_vertex:_1,shadowmask_pars_fragment:v1,skinbase_vertex:y1,skinning_pars_vertex:x1,skinning_vertex:S1,skinnormal_vertex:M1,specularmap_fragment:E1,specularmap_pars_fragment:w1,tonemapping_fragment:T1,tonemapping_pars_fragment:A1,transmission_fragment:b1,transmission_pars_fragment:C1,uv_pars_fragment:R1,uv_pars_vertex:P1,uv_vertex:L1,worldpos_vertex:I1,background_vert:N1,background_frag:U1,backgroundCube_vert:D1,backgroundCube_frag:O1,cube_vert:F1,cube_frag:z1,depth_vert:B1,depth_frag:k1,distanceRGBA_vert:V1,distanceRGBA_frag:H1,equirect_vert:G1,equirect_frag:W1,linedashed_vert:X1,linedashed_frag:Y1,meshbasic_vert:q1,meshbasic_frag:Z1,meshlambert_vert:$1,meshlambert_frag:J1,meshmatcap_vert:K1,meshmatcap_frag:j1,meshnormal_vert:Q1,meshnormal_frag:eE,meshphong_vert:tE,meshphong_frag:nE,meshphysical_vert:iE,meshphysical_frag:rE,meshtoon_vert:sE,meshtoon_frag:oE,points_vert:aE,points_frag:lE,shadow_vert:cE,shadow_frag:uE,sprite_vert:hE,sprite_frag:fE},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Kn={basic:{uniforms:Zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Zt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Zt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Zt([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Zt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Zt([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Zt([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Zt([oe.common,oe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Zt([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Kn.physical={uniforms:Zt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var Vl={r:0,b:0,g:0};function dE(t,e,n,i,r,s,o){let a=new Xe(0),l=s===!0?0:1,c,h,d=null,f=0,p=null;function v(m,u){let _=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),_=!0);let E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===hc)?(h===void 0&&(h=new An(new Ir(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:zs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=$e.getTransfer(g.colorSpace)!==nt,(d!==g||f!==g.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,d=g,f=g.version,p=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new An(new Pf(2,2),new Si({name:"BackgroundMaterial",uniforms:zs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=$e.getTransfer(g.colorSpace)!==nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB(Vl,P_(t)),i.buffers.color.setClear(Vl.r,Vl.g,Vl.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:v}}function pE(t,e,n,i){let r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null),c=l,h=!1;function d(P,B,Y,G,ie){let W=!1;if(o){let $=y(G,Y,B);c!==$&&(c=$,p(c.object)),W=u(P,G,Y,ie),W&&_(P,G,Y,ie)}else{let $=B.wireframe===!0;(c.geometry!==G.id||c.program!==Y.id||c.wireframe!==$)&&(c.geometry=G.id,c.program=Y.id,c.wireframe=$,W=!0)}ie!==null&&n.update(ie,t.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,I(P,B,Y,G),ie!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(ie).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function v(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function y(P,B,Y){let G=Y.wireframe===!0,ie=a[P.id];ie===void 0&&(ie={},a[P.id]=ie);let W=ie[B.id];W===void 0&&(W={},ie[B.id]=W);let $=W[G];return $===void 0&&($=m(f()),W[G]=$),$}function m(P){let B=[],Y=[],G=[];for(let ie=0;ie<r;ie++)B[ie]=0,Y[ie]=0,G[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:G,object:P,attributes:{},index:null}}function u(P,B,Y,G){let ie=c.attributes,W=B.attributes,$=0,ee=Y.getAttributes();for(let de in ee)if(ee[de].location>=0){let q=ie[de],ae=W[de];if(ae===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),q===void 0||q.attribute!==ae||ae&&q.data!==ae.data)return!0;$++}return c.attributesNum!==$||c.index!==G}function _(P,B,Y,G){let ie={},W=B.attributes,$=0,ee=Y.getAttributes();for(let de in ee)if(ee[de].location>=0){let q=W[de];q===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));let ae={};ae.attribute=q,q&&q.data&&(ae.data=q.data),ie[de]=ae,$++}c.attributes=ie,c.attributesNum=$,c.index=G}function g(){let P=c.newAttributes;for(let B=0,Y=P.length;B<Y;B++)P[B]=0}function E(P){w(P,0)}function w(P,B){let Y=c.newAttributes,G=c.enabledAttributes,ie=c.attributeDivisors;Y[P]=1,G[P]===0&&(t.enableVertexAttribArray(P),G[P]=1),ie[P]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,B),ie[P]=B)}function b(){let P=c.newAttributes,B=c.enabledAttributes;for(let Y=0,G=B.length;Y<G;Y++)B[Y]!==P[Y]&&(t.disableVertexAttribArray(Y),B[Y]=0)}function C(P,B,Y,G,ie,W,$){$===!0?t.vertexAttribIPointer(P,B,Y,ie,W):t.vertexAttribPointer(P,B,Y,G,ie,W)}function I(P,B,Y,G){if(i.isWebGL2===!1&&(P.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let ie=G.attributes,W=Y.getAttributes(),$=B.defaultAttributeValues;for(let ee in W){let de=W[ee];if(de.location>=0){let V=ie[ee];if(V===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let q=V.normalized,ae=V.itemSize,ge=n.get(V);if(ge===void 0)continue;let _e=ge.buffer,Ie=ge.type,be=ge.bytesPerElement,Ae=i.isWebGL2===!0&&(Ie===t.INT||Ie===t.UNSIGNED_INT||V.gpuType===y_);if(V.isInterleavedBufferAttribute){let Ue=V.data,N=Ue.stride,Vt=V.offset;if(Ue.isInstancedInterleavedBuffer){for(let ve=0;ve<de.locationSize;ve++)w(de.location+ve,Ue.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let ve=0;ve<de.locationSize;ve++)E(de.location+ve);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let ve=0;ve<de.locationSize;ve++)C(de.location+ve,ae/de.locationSize,Ie,q,N*be,(Vt+ae/de.locationSize*ve)*be,Ae)}else{if(V.isInstancedBufferAttribute){for(let Ue=0;Ue<de.locationSize;Ue++)w(de.location+Ue,V.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ue=0;Ue<de.locationSize;Ue++)E(de.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Ue=0;Ue<de.locationSize;Ue++)C(de.location+Ue,ae/de.locationSize,Ie,q,ae*be,ae/de.locationSize*Ue*be,Ae)}}else if($!==void 0){let q=$[ee];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(de.location,q);break;case 3:t.vertexAttrib3fv(de.location,q);break;case 4:t.vertexAttrib4fv(de.location,q);break;default:t.vertexAttrib1fv(de.location,q)}}}}b()}function S(){X();for(let P in a){let B=a[P];for(let Y in B){let G=B[Y];for(let ie in G)v(G[ie].object),delete G[ie];delete B[Y]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;let B=a[P.id];for(let Y in B){let G=B[Y];for(let ie in G)v(G[ie].object),delete G[ie];delete B[Y]}delete a[P.id]}function k(P){for(let B in a){let Y=a[B];if(Y[P.id]===void 0)continue;let G=Y[P.id];for(let ie in G)v(G[ie].object),delete G[ie];delete Y[P.id]}}function X(){Q(),h=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:Q,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:g,enableAttribute:E,disableUnusedAttributes:b}}function mE(t,e,n,i){let r=i.isWebGL2,s;function o(h){s=h}function a(h,d){t.drawArrays(s,h,d),n.update(d,s,1)}function l(h,d,f){if(f===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,h,d,f),n.update(d,s,f)}function c(h,d,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<f;v++)this.render(h[v],d[v]);else{p.multiDrawArraysWEBGL(s,h,0,d,0,f);let v=0;for(let y=0;y<f;y++)v+=d[y];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function gE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext",a=n.precision!==void 0?n.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,E=o||e.has("OES_texture_float"),w=g&&E,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:b}}function _E(t){let e=this,n=null,i=0,r=!1,s=!1,o=new mi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{let _=s?0:i,g=_*4,E=u.clippingState||null;l.value=E,E=h(v,f,g,p);for(let w=0;w!==g;++w)E[w]=n[w];u.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,v){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,v!==!0||m===null){let u=p+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,E=p;g!==y;++g,E+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function vE(t){let e=new WeakMap;function n(o,a){return a===vf?o.mapping=Ns:a===yf&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===vf||a===yf)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Rf(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Lf=class extends sc{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Cs=4,$0=[.125,.215,.35,.446,.526,.582],Ar=20,hf=new Lf,J0=new Xe,ff=null,df=0,pf=0,wr=(1+Math.sqrt(5))/2,As=1/wr,K0=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,wr,As),new F(0,wr,-As),new F(As,0,wr),new F(-As,0,wr),new F(wr,As,0),new F(-wr,As,0)],lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,df,pf),e.scissorTest=!1,Hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ns||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel();let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Xo,format:kn,colorSpace:yi,depthBuffer:!1},r=j0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j0(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yE(s)),this._blurMaterial=xE(s,e,n)}return r}_compileMaterial(e){let n=new An(this._lodPlanes[0],e);this._renderer.compile(n,hf)}_sceneToCubeUV(e,n,i,r){let a=new Jt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(J0),h.toneMapping=Ki,h.autoClear=!1;let p=new Fs({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new An(new Ir,p),y=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(J0),y=!0);for(let u=0;u<6;u++){let _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let g=this._cubeSize;Hl(r,_*g,u>2?g:0,g,g),h.setRenderTarget(r),y&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===Ns||e.mapping===Us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=e_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,hf)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=K0[(r-1)%K0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new An(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),y=s/v,m=isFinite(s)?1+Math.floor(h*y):Ar;m>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);let u=[],_=0;for(let C=0;C<Ar;++C){let I=C/y,S=Math.exp(-I*I/2);u.push(S),C===0?_+=S:C<m&&(_+=2*S)}for(let C=0;C<u.length;C++)u[C]=u[C]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;let E=this._sizeLods[r],w=3*E*(r>g-Cs?r-g+Cs:0),b=4*(this._cubeSize-E);Hl(n,w,b,3*E,2*E),l.setRenderTarget(n),l.render(d,hf)}};function yE(t){let e=[],n=[],i=[],r=t,s=t-Cs+1+$0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Cs?l=$0[o-t+Cs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,y=3,m=2,u=1,_=new Float32Array(y*v*p),g=new Float32Array(m*v*p),E=new Float32Array(u*v*p);for(let b=0;b<p;b++){let C=b%3*2/3-1,I=b>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];_.set(S,y*v*b),g.set(f,m*v*b);let A=[b,b,b,b,b,b];E.set(A,u*v*b)}let w=new Lr;w.setAttribute("position",new bn(_,y)),w.setAttribute("uv",new bn(g,m)),w.setAttribute("faceIndex",new bn(E,u)),e.push(w),r>Cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function j0(t,e,n){let i=new xi(t,e,n);return i.texture.mapping=hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xE(t,e,n){let i=new Float32Array(Ar),r=new F(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Q0(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function e_(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function nd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===vf||l===yf,h=l===Ns||l===Us;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new lc(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){n===null&&(n=new lc(t));let f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ME(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EE(t,e,n,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);for(let v in f.morphAttributes){let y=f.morphAttributes[v];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let v in f)e.update(f[v],t.ARRAY_BUFFER);let p=d.morphAttributes;for(let v in p){let y=p[v];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,v=d.attributes.position,y=0;if(p!==null){let _=p.array;y=p.version;for(let g=0,E=_.length;g<E;g+=3){let w=_[g+0],b=_[g+1],C=_[g+2];f.push(w,b,b,C,C,w)}}else if(v!==void 0){let _=v.array;y=v.version;for(let g=0,E=_.length/3-1;g<E;g+=3){let w=g+0,b=g+1,C=g+2;f.push(w,b,b,C,C,w)}}else return;let m=new(C_(f)?rc:ic)(f,1);m.version=y;let u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function wE(t,e,n,i){let r=i.isWebGL2,s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function d(p,v,y){if(y===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,v,a,p*l,y),n.update(v,s,y)}function f(p,v,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<y;u++)this.render(p[u]/l,v[u]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,y);let u=0;for(let _=0;_<y;_++)u+=v[_];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function TE(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function AE(t,e){return t[0]-e[0]}function bE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function CE(t,e,n){let i={},r=new Float32Array(8),s=new WeakMap,o=new Lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=p!==void 0?p.length:0,y=s.get(h);if(y===void 0||y.count!==v){let P=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();let _=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],I=0;_===!0&&(I=1),g===!0&&(I=2),E===!0&&(I=3);let S=h.attributes.position.count*I,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let k=new Float32Array(S*A*4*v),X=new ec(k,S,A,v);X.type=$i,X.needsUpdate=!0;let Q=I*4;for(let B=0;B<v;B++){let Y=w[B],G=b[B],ie=C[B],W=S*A*4*B;for(let $=0;$<Y.count;$++){let ee=$*Q;_===!0&&(o.fromBufferAttribute(Y,$),k[W+ee+0]=o.x,k[W+ee+1]=o.y,k[W+ee+2]=o.z,k[W+ee+3]=0),g===!0&&(o.fromBufferAttribute(G,$),k[W+ee+4]=o.x,k[W+ee+5]=o.y,k[W+ee+6]=o.z,k[W+ee+7]=0),E===!0&&(o.fromBufferAttribute(ie,$),k[W+ee+8]=o.x,k[W+ee+9]=o.y,k[W+ee+10]=o.z,k[W+ee+11]=ie.itemSize===4?o.w:1)}}y={count:v,texture:X,size:new Je(S,A)},s.set(h,y),h.addEventListener("dispose",P)}let m=0;for(let _=0;_<f.length;_++)m+=f[_];let u=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",u),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}else{let p=f===void 0?0:f.length,v=i[h.id];if(v===void 0||v.length!==p){v=[];for(let g=0;g<p;g++)v[g]=[g,0];i[h.id]=v}for(let g=0;g<p;g++){let E=v[g];E[0]=g,E[1]=f[g]}v.sort(bE);for(let g=0;g<8;g++)g<p&&v[g][1]?(a[g][0]=v[g][0],a[g][1]=v[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(AE);let y=h.morphAttributes.position,m=h.morphAttributes.normal,u=0;for(let g=0;g<8;g++){let E=a[g],w=E[0],b=E[1];w!==Number.MAX_SAFE_INTEGER&&b?(y&&h.getAttribute("morphTarget"+g)!==y[w]&&h.setAttribute("morphTarget"+g,y[w]),m&&h.getAttribute("morphNormal"+g)!==m[w]&&h.setAttribute("morphNormal"+g,m[w]),r[g]=b,u+=b):(y&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),m&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),r[g]=0)}let _=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function RE(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var cc=class extends Vn{constructor(e,n,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:Cr,h!==Cr&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Cr&&(i=Zi),i===void 0&&h===Ds&&(i=br),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},I_=new Vn,N_=new cc(1,1);N_.compareFunction=b_;var U_=new ec,D_=new Af,O_=new oc,t_=[],n_=[],i_=new Float32Array(16),r_=new Float32Array(9),s_=new Float32Array(4);function ks(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=t_[r];if(s===void 0&&(s=new Float32Array(r),t_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dc(t,e){let n=n_[e];n===void 0&&(n=new Int32Array(e),n_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function LE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2fv(this.addr,e),yt(n,e)}}function IE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vt(n,e))return;t.uniform3fv(this.addr,e),yt(n,e)}}function NE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4fv(this.addr,e),yt(n,e)}}function UE(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),yt(n,e)}else{if(vt(n,i))return;s_.set(i),t.uniformMatrix2fv(this.addr,!1,s_),yt(n,i)}}function DE(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),yt(n,e)}else{if(vt(n,i))return;r_.set(i),t.uniformMatrix3fv(this.addr,!1,r_),yt(n,i)}}function OE(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),yt(n,e)}else{if(vt(n,i))return;i_.set(i),t.uniformMatrix4fv(this.addr,!1,i_),yt(n,i)}}function FE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2iv(this.addr,e),yt(n,e)}}function BE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3iv(this.addr,e),yt(n,e)}}function kE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4iv(this.addr,e),yt(n,e)}}function VE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2uiv(this.addr,e),yt(n,e)}}function GE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3uiv(this.addr,e),yt(n,e)}}function WE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4uiv(this.addr,e),yt(n,e)}}function XE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s=this.type===t.SAMPLER_2D_SHADOW?N_:I_;n.setTexture2D(e||s,r)}function YE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||D_,r)}function qE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||O_,r)}function ZE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||U_,r)}function $E(t){switch(t){case 5126:return PE;case 35664:return LE;case 35665:return IE;case 35666:return NE;case 35674:return UE;case 35675:return DE;case 35676:return OE;case 5124:case 35670:return FE;case 35667:case 35671:return zE;case 35668:case 35672:return BE;case 35669:case 35673:return kE;case 5125:return VE;case 36294:return HE;case 36295:return GE;case 36296:return WE;case 35678:case 36198:case 36298:case 36306:case 35682:return XE;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return qE;case 36289:case 36303:case 36311:case 36292:return ZE}}function JE(t,e){t.uniform1fv(this.addr,e)}function KE(t,e){let n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function jE(t,e){let n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function QE(t,e){let n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function ew(t,e){let n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tw(t,e){let n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nw(t,e){let n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iw(t,e){t.uniform1iv(this.addr,e)}function rw(t,e){t.uniform2iv(this.addr,e)}function sw(t,e){t.uniform3iv(this.addr,e)}function ow(t,e){t.uniform4iv(this.addr,e)}function aw(t,e){t.uniform1uiv(this.addr,e)}function lw(t,e){t.uniform2uiv(this.addr,e)}function cw(t,e){t.uniform3uiv(this.addr,e)}function uw(t,e){t.uniform4uiv(this.addr,e)}function hw(t,e,n){let i=this.cache,r=e.length,s=dc(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||I_,s[o])}function fw(t,e,n){let i=this.cache,r=e.length,s=dc(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||D_,s[o])}function dw(t,e,n){let i=this.cache,r=e.length,s=dc(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||O_,s[o])}function pw(t,e,n){let i=this.cache,r=e.length,s=dc(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||U_,s[o])}function mw(t){switch(t){case 5126:return JE;case 35664:return KE;case 35665:return jE;case 35666:return QE;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return rw;case 35668:case 35672:return sw;case 35669:case 35673:return ow;case 5125:return aw;case 36294:return lw;case 36295:return cw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return pw}}var If=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$E(n.type)}},Nf=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mw(n.type)}},Uf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},mf=/(\w+)(\])?(\[|\.)?/g;function o_(t,e){t.seq.push(e),t.map[e.id]=e}function gw(t,e,n){let i=t.name,r=i.length;for(mf.lastIndex=0;;){let s=mf.exec(i),o=mf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){o_(n,c===void 0?new If(a,t,e):new Nf(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Uf(a),o_(n,d)),n=d}}}var Is=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);gw(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function a_(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var _w=37297,vw=0;function yw(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function xw(t){let e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t),i;switch(e===n?i="":e===$l&&n===Zl?i="LinearDisplayP3ToLinearSRGB":e===Zl&&n===$l&&(i="LinearSRGBToLinearDisplayP3"),t){case yi:case fc:return[i,"LinearTransferOETF"];case Pt:case td:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function l_(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+yw(t.getShaderSource(e),o)}else return r}function Sw(t,e){let n=xw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Mw(t,e){let n;switch(e){case kx:n="Linear";break;case Vx:n="Reinhard";break;case Hx:n="OptimizedCineon";break;case Gx:n="ACESFilmic";break;case Wx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Ew(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vo).join(`
`)}function ww(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Tw(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vo(t){return t!==""}function c_(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(t){return t.replace(Aw,Cw)}var bw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cw(t,e){let n=Ne[e];if(n===void 0){let i=bw.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Df(n)}var Rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h_(t){return t.replace(Rw,Pw)}function Pw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function f_(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===g_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===px?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Iw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ns:case Us:e="ENVMAP_TYPE_CUBE";break;case hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function Uw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case __:e="ENVMAP_BLENDING_MULTIPLY";break;case zx:e="ENVMAP_BLENDING_MIX";break;case Bx:e="ENVMAP_BLENDING_ADD";break}return e}function Dw(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ow(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=Lw(n),c=Iw(n),h=Nw(n),d=Uw(n),f=Dw(n),p=n.isWebGL2?"":Ew(n),v=ww(s),y=r.createProgram(),m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Vo).join(`
`),m.length>0&&(m+=`
`),u=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Vo).join(`
`),u.length>0&&(u+=`
`)):(m=[f_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),u=[p,f_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Ki?Mw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Sw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),o=Df(o),o=c_(o,n),o=u_(o,n),a=Df(a),a=c_(a,n),a=u_(a,n),o=h_(o),a=h_(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===L0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===L0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let g=_+m+o,E=_+u+a,w=a_(r,r.VERTEX_SHADER,g),b=a_(r,r.FRAGMENT_SHADER,E);r.attachShader(y,w),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(k){if(t.debug.checkShaderErrors){let X=r.getProgramInfoLog(y).trim(),Q=r.getShaderInfoLog(w).trim(),P=r.getShaderInfoLog(b).trim(),B=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,b);else{let G=l_(r,w,"vertex"),ie=l_(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+G+`
`+ie)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Q===""||P==="")&&(Y=!1);Y&&(k.diagnostics={runnable:B,programLog:X,vertexShader:{log:Q,prefix:m},fragmentShader:{log:P,prefix:u}})}r.deleteShader(w),r.deleteShader(b),I=new Is(r,y),S=Tw(r,y)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(y,_w)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=b,this}var Fw=0,Of=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Ff(e),n.set(e,i)),i}},Ff=class{constructor(e){this.id=Fw++,this.code=e,this.usedTimes=0}};function zw(t,e,n,i,r,s,o){let a=new nc,l=new Of,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,A,k,X,Q){let P=X.fog,B=Q.geometry,Y=S.isMeshStandardMaterial?X.environment:null,G=(S.isMeshStandardMaterial?n:e).get(S.envMap||Y),ie=G&&G.mapping===hc?G.image.height:null,W=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=$!==void 0?$.length:0,de=0;B.morphAttributes.position!==void 0&&(de=1),B.morphAttributes.normal!==void 0&&(de=2),B.morphAttributes.color!==void 0&&(de=3);let V,q,ae,ge;if(W){let Ht=Kn[W];V=Ht.vertexShader,q=Ht.fragmentShader}else V=S.vertexShader,q=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);let _e=t.getRenderTarget(),Ie=Q.isInstancedMesh===!0,be=Q.isBatchedMesh===!0,Ae=!!S.map,Ue=!!S.matcap,N=!!G,Vt=!!S.aoMap,ve=!!S.lightMap,Be=!!S.bumpMap,Me=!!S.normalMap,st=!!S.displacementMap,Oe=!!S.emissiveMap,Pe=!!S.metalnessMap,qe=!!S.roughnessMap,Tt=S.anisotropy>0,At=S.clearcoat>0,T=S.iridescence>0,x=S.sheen>0,U=S.transmission>0,te=Tt&&!!S.anisotropyMap,J=At&&!!S.clearcoatMap,ne=At&&!!S.clearcoatNormalMap,pe=At&&!!S.clearcoatRoughnessMap,se=T&&!!S.iridescenceMap,le=T&&!!S.iridescenceThicknessMap,Ee=x&&!!S.sheenColorMap,We=x&&!!S.sheenRoughnessMap,j=!!S.specularMap,Ze=!!S.specularColorMap,Ce=!!S.specularIntensityMap,we=U&&!!S.transmissionMap,ye=U&&!!S.thicknessMap,fe=!!S.gradientMap,ke=!!S.alphaMap,R=S.alphaTest>0,ce=!!S.alphaHash,K=!!S.extensions,H=!!B.attributes.uv1,re=!!B.attributes.uv2,Se=!!B.attributes.uv3,He=Ki;return S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(He=t.toneMapping),{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:q,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:be,instancing:Ie,instancingColor:Ie&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:yi,map:Ae,matcap:Ue,envMap:N,envMapMode:N&&G.mapping,envMapCubeUVHeight:ie,aoMap:Vt,lightMap:ve,bumpMap:Be,normalMap:Me,displacementMap:f&&st,emissiveMap:Oe,normalMapObjectSpace:Me&&S.normalMapType===iS,normalMapTangentSpace:Me&&S.normalMapType===nS,metalnessMap:Pe,roughnessMap:qe,anisotropy:Tt,anisotropyMap:te,clearcoat:At,clearcoatMap:J,clearcoatNormalMap:ne,clearcoatRoughnessMap:pe,iridescence:T,iridescenceMap:se,iridescenceThicknessMap:le,sheen:x,sheenColorMap:Ee,sheenRoughnessMap:We,specularMap:j,specularColorMap:Ze,specularIntensityMap:Ce,transmission:U,transmissionMap:we,thicknessMap:ye,gradientMap:fe,opaque:S.transparent===!1&&S.blending===Ps,alphaMap:ke,alphaTest:R,alphaHash:ce,combine:S.combine,mapUv:Ae&&y(S.map.channel),aoMapUv:Vt&&y(S.aoMap.channel),lightMapUv:ve&&y(S.lightMap.channel),bumpMapUv:Be&&y(S.bumpMap.channel),normalMapUv:Me&&y(S.normalMap.channel),displacementMapUv:st&&y(S.displacementMap.channel),emissiveMapUv:Oe&&y(S.emissiveMap.channel),metalnessMapUv:Pe&&y(S.metalnessMap.channel),roughnessMapUv:qe&&y(S.roughnessMap.channel),anisotropyMapUv:te&&y(S.anisotropyMap.channel),clearcoatMapUv:J&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:We&&y(S.sheenRoughnessMap.channel),specularMapUv:j&&y(S.specularMap.channel),specularColorMapUv:Ze&&y(S.specularColorMap.channel),specularIntensityMapUv:Ce&&y(S.specularIntensityMap.channel),transmissionMapUv:we&&y(S.transmissionMap.channel),thicknessMapUv:ye&&y(S.thicknessMap.channel),alphaMapUv:ke&&y(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Me||Tt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:H,vertexUv2s:re,vertexUv3s:Se,pointsUvs:Q.isPoints===!0&&!!B.attributes.uv&&(Ae||ke),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:de,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:He,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gi,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:K&&S.extensions.derivatives===!0,extensionFragDepth:K&&S.extensions.fragDepth===!0,extensionDrawBuffers:K&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:K&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let k in S.defines)A.push(k),A.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(_(A,S),g(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function g(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function E(S){let A=v[S.type],k;if(A){let X=Kn[A];k=CS.clone(X.uniforms)}else k=S.uniforms;return k}function w(S,A){let k;for(let X=0,Q=c.length;X<Q;X++){let P=c[X];if(P.cacheKey===A){k=P,++k.usedTimes;break}}return k===void 0&&(k=new Ow(t,A,S,s),c.push(k)),k}function b(S){if(--S.usedTimes===0){let A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:w,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:I}}function Bw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function kw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function d_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function p_(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,v,y,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=y,u.group=m),e++,u}function a(d,f,p,v,y,m){let u=o(d,f,p,v,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,f,p,v,y,m){let u=o(d,f,p,v,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||kw),i.length>1&&i.sort(f||d_),r.length>1&&r.sort(f||d_)}function h(){for(let d=e,f=t.length;d<f;d++){let p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Vw(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new p_,t.set(i,[o])):r>=s.length?(o=new p_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Hw(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Xe};break;case"SpotLight":n={position:new F,direction:new F,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function Gw(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var Ww=0;function Xw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Yw(t,e){let n=new Hw,i=Gw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new F);let s=new F,o=new kt,a=new kt;function l(h,d){let f=0,p=0,v=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,m=0,u=0,_=0,g=0,E=0,w=0,b=0,C=0,I=0,S=0;h.sort(Xw);let A=d===!0?Math.PI:1;for(let X=0,Q=h.length;X<Q;X++){let P=h[X],B=P.color,Y=P.intensity,G=P.distance,ie=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=B.r*Y*A,p+=B.g*Y*A,v+=B.b*Y*A;else if(P.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(P.sh.coefficients[W],Y);S++}else if(P.isDirectionalLight){let W=n.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let $=P.shadow,ee=i.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,r.directionalShadow[y]=ee,r.directionalShadowMap[y]=ie,r.directionalShadowMatrix[y]=P.shadow.matrix,E++}r.directional[y]=W,y++}else if(P.isSpotLight){let W=n.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(B).multiplyScalar(Y*A),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,r.spot[u]=W;let $=P.shadow;if(P.map&&(r.spotLightMap[C]=P.map,C++,$.updateMatrices(P),P.castShadow&&I++),r.spotLightMatrix[u]=$.matrix,P.castShadow){let ee=i.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,r.spotShadow[u]=ee,r.spotShadowMap[u]=ie,b++}u++}else if(P.isRectAreaLight){let W=n.get(P);W.color.copy(B).multiplyScalar(Y),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),r.rectArea[_]=W,_++}else if(P.isPointLight){let W=n.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*A),W.distance=P.distance,W.decay=P.decay,P.castShadow){let $=P.shadow,ee=i.get(P);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,r.pointShadow[m]=ee,r.pointShadowMap[m]=ie,r.pointShadowMatrix[m]=P.shadow.matrix,w++}r.point[m]=W,m++}else if(P.isHemisphereLight){let W=n.get(P);W.skyColor.copy(P.color).multiplyScalar(Y*A),W.groundColor.copy(P.groundColor).multiplyScalar(Y*A),r.hemi[g]=W,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=v;let k=r.hash;(k.directionalLength!==y||k.pointLength!==m||k.spotLength!==u||k.rectAreaLength!==_||k.hemiLength!==g||k.numDirectionalShadows!==E||k.numPointShadows!==w||k.numSpotShadows!==b||k.numSpotMaps!==C||k.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=b+C-I,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=S,k.directionalLength=y,k.pointLength=m,k.spotLength=u,k.rectAreaLength=_,k.hemiLength=g,k.numDirectionalShadows=E,k.numPointShadows=w,k.numSpotShadows=b,k.numSpotMaps=C,k.numLightProbes=S,r.version=Ww++)}function c(h,d){let f=0,p=0,v=0,y=0,m=0,u=d.matrixWorldInverse;for(let _=0,g=h.length;_<g;_++){let E=h[_];if(E.isDirectionalLight){let w=r.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),f++}else if(E.isSpotLight){let w=r.spot[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),v++}else if(E.isRectAreaLight){let w=r.rectArea[y];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),a.identity(),o.copy(E.matrixWorld),o.premultiply(u),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let w=r.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),p++}else if(E.isHemisphereLight){let w=r.hemi[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function m_(t,e){let n=new Yw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qw(t,e){let n=new WeakMap;function i(s,o=0){let a=n.get(s),l;return a===void 0?(l=new m_(t,e),n.set(s,[l])):o>=a.length?(l=new m_(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}var zf=class extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bf=class extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jw(t,e,n){let i=new ac,r=new Je,s=new Je,o=new Lt,a=new zf({depthPacking:tS}),l=new Bf,c={},h=n.maxTextureSize,d={[Qi]:sn,[sn]:Qi,[gi]:gi},f=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Zw,fragmentShader:$w}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new Lr;v.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new An(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g_;let u=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let I=t.getRenderTarget(),S=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Ji),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=u!==pi&&this.type===pi,Q=u===pi&&this.type!==pi;for(let P=0,B=w.length;P<B;P++){let Y=w[P],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let ie=G.getFrameExtents();if(r.multiply(ie),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,G.mapSize.y=s.y)),G.map===null||X===!0||Q===!0){let $=this.type!==pi?{minFilter:$t,magFilter:$t}:{};G.map!==null&&G.map.dispose(),G.map=new xi(r.x,r.y,$),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();let W=G.getViewportCount();for(let $=0;$<W;$++){let ee=G.getViewport($);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),k.viewport(o),G.updateMatrices(Y,$),i=G.getFrustum(),E(b,C,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===pi&&_(G,C),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(I,S,A)};function _(w,b){let C=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xi(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(b,null,C,f,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(b,null,C,p,y,null)}function g(w,b,C,I){let S=null,A=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)S=A;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let k=S.uuid,X=b.uuid,Q=c[k];Q===void 0&&(Q={},c[k]=Q);let P=Q[X];P===void 0&&(P=S.clone(),Q[X]=P),S=P}if(S.visible=b.visible,S.wireframe=b.wireframe,I===pi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=t.properties.get(S);k.light=C}return S}function E(w,b,C,I,S){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===pi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let X=e.update(w),Q=w.material;if(Array.isArray(Q)){let P=X.groups;for(let B=0,Y=P.length;B<Y;B++){let G=P[B],ie=Q[G.materialIndex];if(ie&&ie.visible){let W=g(w,ie,I,S);w.onBeforeShadow(t,w,b,C,X,W,G),t.renderBufferDirect(C,null,X,W,w,G),w.onAfterShadow(t,w,b,C,X,W,G)}}}else if(Q.visible){let P=g(w,Q,I,S);w.onBeforeShadow(t,w,b,C,X,P,null),t.renderBufferDirect(C,null,X,P,w,null),w.onAfterShadow(t,w,b,C,X,P,null)}}let k=w.children;for(let X=0,Q=k.length;X<Q;X++)E(k[X],b,C,I,S)}}function Kw(t,e,n){let i=n.isWebGL2;function r(){let R=!1,ce=new Lt,K=null,H=new Lt(0,0,0,0);return{setMask:function(re){K!==re&&!R&&(t.colorMask(re,re,re,re),K=re)},setLocked:function(re){R=re},setClear:function(re,Se,He,xt,Ht){Ht===!0&&(re*=xt,Se*=xt,He*=xt),ce.set(re,Se,He,xt),H.equals(ce)===!1&&(t.clearColor(re,Se,He,xt),H.copy(ce))},reset:function(){R=!1,K=null,H.set(-1,0,0,0)}}}function s(){let R=!1,ce=null,K=null,H=null;return{setTest:function(re){re?be(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(re){ce!==re&&!R&&(t.depthMask(re),ce=re)},setFunc:function(re){if(K!==re){switch(re){case Lx:t.depthFunc(t.NEVER);break;case Ix:t.depthFunc(t.ALWAYS);break;case Nx:t.depthFunc(t.LESS);break;case Wl:t.depthFunc(t.LEQUAL);break;case Ux:t.depthFunc(t.EQUAL);break;case Dx:t.depthFunc(t.GEQUAL);break;case Ox:t.depthFunc(t.GREATER);break;case Fx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=re}},setLocked:function(re){R=re},setClear:function(re){H!==re&&(t.clearDepth(re),H=re)},reset:function(){R=!1,ce=null,K=null,H=null}}}function o(){let R=!1,ce=null,K=null,H=null,re=null,Se=null,He=null,xt=null,Ht=null;return{setTest:function(Ke){R||(Ke?be(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(Ke){ce!==Ke&&!R&&(t.stencilMask(Ke),ce=Ke)},setFunc:function(Ke,Gt,Wn){(K!==Ke||H!==Gt||re!==Wn)&&(t.stencilFunc(Ke,Gt,Wn),K=Ke,H=Gt,re=Wn)},setOp:function(Ke,Gt,Wn){(Se!==Ke||He!==Gt||xt!==Wn)&&(t.stencilOp(Ke,Gt,Wn),Se=Ke,He=Gt,xt=Wn)},setLocked:function(Ke){R=Ke},setClear:function(Ke){Ht!==Ke&&(t.clearStencil(Ke),Ht=Ke)},reset:function(){R=!1,ce=null,K=null,H=null,re=null,Se=null,He=null,xt=null,Ht=null}}}let a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap,f={},p={},v=new WeakMap,y=[],m=null,u=!1,_=null,g=null,E=null,w=null,b=null,C=null,I=null,S=new Xe(0,0,0),A=0,k=!1,X=null,Q=null,P=null,B=null,Y=null,G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,W=0,$=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),ie=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ie=W>=2);let ee=null,de={},V=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),ae=new Lt().fromArray(V),ge=new Lt().fromArray(q);function _e(R,ce,K,H){let re=new Uint8Array(4),Se=t.createTexture();t.bindTexture(R,Se),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<K;He++)i&&(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,H,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(ce+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return Se}let Ie={};Ie[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Ie[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ie[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(t.DEPTH_TEST),l.setFunc(Wl),Oe(!1),Pe(Zg),be(t.CULL_FACE),Me(Ji);function be(R){f[R]!==!0&&(t.enable(R),f[R]=!0)}function Ae(R){f[R]!==!1&&(t.disable(R),f[R]=!1)}function Ue(R,ce){return p[R]!==ce?(t.bindFramebuffer(R,ce),p[R]=ce,i&&(R===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ce),R===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function N(R,ce){let K=y,H=!1;if(R)if(K=v.get(ce),K===void 0&&(K=[],v.set(ce,K)),R.isWebGLMultipleRenderTargets){let re=R.texture;if(K.length!==re.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,He=re.length;Se<He;Se++)K[Se]=t.COLOR_ATTACHMENT0+Se;K.length=re.length,H=!0}}else K[0]!==t.COLOR_ATTACHMENT0&&(K[0]=t.COLOR_ATTACHMENT0,H=!0);else K[0]!==t.BACK&&(K[0]=t.BACK,H=!0);H&&(n.isWebGL2?t.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Vt(R){return m!==R?(t.useProgram(R),m=R,!0):!1}let ve={[Tr]:t.FUNC_ADD,[gx]:t.FUNC_SUBTRACT,[_x]:t.FUNC_REVERSE_SUBTRACT};if(i)ve[jg]=t.MIN,ve[Qg]=t.MAX;else{let R=e.get("EXT_blend_minmax");R!==null&&(ve[jg]=R.MIN_EXT,ve[Qg]=R.MAX_EXT)}let Be={[vx]:t.ZERO,[yx]:t.ONE,[xx]:t.SRC_COLOR,[gf]:t.SRC_ALPHA,[Ax]:t.SRC_ALPHA_SATURATE,[wx]:t.DST_COLOR,[Mx]:t.DST_ALPHA,[Sx]:t.ONE_MINUS_SRC_COLOR,[_f]:t.ONE_MINUS_SRC_ALPHA,[Tx]:t.ONE_MINUS_DST_COLOR,[Ex]:t.ONE_MINUS_DST_ALPHA,[bx]:t.CONSTANT_COLOR,[Cx]:t.ONE_MINUS_CONSTANT_COLOR,[Rx]:t.CONSTANT_ALPHA,[Px]:t.ONE_MINUS_CONSTANT_ALPHA};function Me(R,ce,K,H,re,Se,He,xt,Ht,Ke){if(R===Ji){u===!0&&(Ae(t.BLEND),u=!1);return}if(u===!1&&(be(t.BLEND),u=!0),R!==mx){if(R!==_||Ke!==k){if((g!==Tr||b!==Tr)&&(t.blendEquation(t.FUNC_ADD),g=Tr,b=Tr),Ke)switch(R){case Ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $g:t.blendFunc(t.ONE,t.ONE);break;case Jg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $g:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Jg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,w=null,C=null,I=null,S.set(0,0,0),A=0,_=R,k=Ke}return}re=re||ce,Se=Se||K,He=He||H,(ce!==g||re!==b)&&(t.blendEquationSeparate(ve[ce],ve[re]),g=ce,b=re),(K!==E||H!==w||Se!==C||He!==I)&&(t.blendFuncSeparate(Be[K],Be[H],Be[Se],Be[He]),E=K,w=H,C=Se,I=He),(xt.equals(S)===!1||Ht!==A)&&(t.blendColor(xt.r,xt.g,xt.b,Ht),S.copy(xt),A=Ht),_=R,k=!1}function st(R,ce){R.side===gi?Ae(t.CULL_FACE):be(t.CULL_FACE);let K=R.side===sn;ce&&(K=!K),Oe(K),R.blending===Ps&&R.transparent===!1?Me(Ji):Me(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);let H=R.stencilWrite;c.setTest(H),H&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Tt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?be(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(R){X!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),X=R)}function Pe(R){R!==fx?(be(t.CULL_FACE),R!==Q&&(R===Zg?t.cullFace(t.BACK):R===dx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),Q=R}function qe(R){R!==P&&(ie&&t.lineWidth(R),P=R)}function Tt(R,ce,K){R?(be(t.POLYGON_OFFSET_FILL),(B!==ce||Y!==K)&&(t.polygonOffset(ce,K),B=ce,Y=K)):Ae(t.POLYGON_OFFSET_FILL)}function At(R){R?be(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function T(R){R===void 0&&(R=t.TEXTURE0+G-1),ee!==R&&(t.activeTexture(R),ee=R)}function x(R,ce,K){K===void 0&&(ee===null?K=t.TEXTURE0+G-1:K=ee);let H=de[K];H===void 0&&(H={type:void 0,texture:void 0},de[K]=H),(H.type!==R||H.texture!==ce)&&(ee!==K&&(t.activeTexture(K),ee=K),t.bindTexture(R,ce||Ie[R]),H.type=R,H.texture=ce)}function U(){let R=de[ee];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function We(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ze(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(R){ae.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),ae.copy(R))}function we(R){ge.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),ge.copy(R))}function ye(R,ce){let K=d.get(ce);K===void 0&&(K=new WeakMap,d.set(ce,K));let H=K.get(R);H===void 0&&(H=t.getUniformBlockIndex(ce,R.name),K.set(R,H))}function fe(R,ce){let H=d.get(ce).get(R);h.get(ce)!==H&&(t.uniformBlockBinding(ce,H,R.__bindingPointIndex),h.set(ce,H))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},ee=null,de={},p={},v=new WeakMap,y=[],m=null,u=!1,_=null,g=null,E=null,w=null,b=null,C=null,I=null,S=new Xe(0,0,0),A=0,k=!1,X=null,Q=null,P=null,B=null,Y=null,ae.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:be,disable:Ae,bindFramebuffer:Ue,drawBuffers:N,useProgram:Vt,setBlending:Me,setMaterial:st,setFlipSided:Oe,setCullFace:Pe,setLineWidth:qe,setPolygonOffset:Tt,setScissorTest:At,activeTexture:T,bindTexture:x,unbindTexture:U,compressedTexImage2D:te,compressedTexImage3D:J,texImage2D:j,texImage3D:Ze,updateUBOMapping:ye,uniformBlockBinding:fe,texStorage2D:Ee,texStorage3D:We,texSubImage2D:ne,texSubImage3D:pe,compressedTexSubImage2D:se,compressedTexSubImage3D:le,scissor:Ce,viewport:we,reset:ke}}function jw(t,e,n,i,r,s,o){let a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap,y,m=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return u?new OffscreenCanvas(T,x):Kl("canvas")}function g(T,x,U,te){let J=1;if((T.width>te||T.height>te)&&(J=te/Math.max(T.width,T.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let ne=x?wf:Math.floor,pe=ne(J*T.width),se=ne(J*T.height);y===void 0&&(y=_(pe,se));let le=U?_(pe,se):y;return le.width=pe,le.height=se,le.getContext("2d").drawImage(T,0,0,pe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+pe+"x"+se+")."),le}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function E(T){return I0(T.width)&&I0(T.height)}function w(T){return a?!1:T.wrapS!==Bn||T.wrapT!==Bn||T.minFilter!==$t&&T.minFilter!==wn}function b(T,x){return T.generateMipmaps&&x&&T.minFilter!==$t&&T.minFilter!==wn}function C(T){t.generateMipmap(T)}function I(T,x,U,te,J=!1){if(a===!1)return x;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ne=x;if(x===t.RED&&(U===t.FLOAT&&(ne=t.R32F),U===t.HALF_FLOAT&&(ne=t.R16F),U===t.UNSIGNED_BYTE&&(ne=t.R8)),x===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(ne=t.R8UI),U===t.UNSIGNED_SHORT&&(ne=t.R16UI),U===t.UNSIGNED_INT&&(ne=t.R32UI),U===t.BYTE&&(ne=t.R8I),U===t.SHORT&&(ne=t.R16I),U===t.INT&&(ne=t.R32I)),x===t.RG&&(U===t.FLOAT&&(ne=t.RG32F),U===t.HALF_FLOAT&&(ne=t.RG16F),U===t.UNSIGNED_BYTE&&(ne=t.RG8)),x===t.RGBA){let pe=J?ql:$e.getTransfer(te);U===t.FLOAT&&(ne=t.RGBA32F),U===t.HALF_FLOAT&&(ne=t.RGBA16F),U===t.UNSIGNED_BYTE&&(ne=pe===nt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(T,x,U){return b(T,U)===!0||T.isFramebufferTexture&&T.minFilter!==$t&&T.minFilter!==wn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){return T===$t||T===e0||T===zh?t.NEAREST:t.LINEAR}function k(T){let x=T.target;x.removeEventListener("dispose",k),Q(x),x.isVideoTexture&&v.delete(x)}function X(T){let x=T.target;x.removeEventListener("dispose",X),B(x)}function Q(T){let x=i.get(T);if(x.__webglInit===void 0)return;let U=T.source,te=m.get(U);if(te){let J=te[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(T),Object.keys(te).length===0&&m.delete(U)}i.remove(T)}function P(T){let x=i.get(T);t.deleteTexture(x.__webglTexture);let U=T.source,te=m.get(U);delete te[x.__cacheKey],o.memory.textures--}function B(T){let x=T.texture,U=i.get(T),te=i.get(x);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let ne=0;ne<U.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(U.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)t.deleteFramebuffer(U.__webglFramebuffer[J]);else t.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&t.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&t.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,ne=x.length;J<ne;J++){let pe=i.get(x[J]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(x[J])}i.remove(x),i.remove(T)}let Y=0;function G(){Y=0}function ie(){let T=Y;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Y+=1,T}function W(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function $(T,x){let U=i.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){let te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(U,T,x);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+x)}function ee(T,x){let U=i.get(T);if(T.version>0&&U.__version!==T.version){be(U,T,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+x)}function de(T,x){let U=i.get(T);if(T.version>0&&U.__version!==T.version){be(U,T,x);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+x)}function V(T,x){let U=i.get(T);if(T.version>0&&U.__version!==T.version){Ae(U,T,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+x)}let q={[xf]:t.REPEAT,[Bn]:t.CLAMP_TO_EDGE,[Sf]:t.MIRRORED_REPEAT},ae={[$t]:t.NEAREST,[e0]:t.NEAREST_MIPMAP_NEAREST,[zh]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[Xx]:t.LINEAR_MIPMAP_NEAREST,[Wo]:t.LINEAR_MIPMAP_LINEAR},ge={[rS]:t.NEVER,[uS]:t.ALWAYS,[sS]:t.LESS,[b_]:t.LEQUAL,[oS]:t.EQUAL,[cS]:t.GEQUAL,[aS]:t.GREATER,[lS]:t.NOTEQUAL};function _e(T,x,U){if(U?(t.texParameteri(T,t.TEXTURE_WRAP_S,q[x.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,q[x.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,q[x.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ae[x.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ae[x.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(x.wrapS!==Bn||x.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,A(x.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==$t&&x.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let te=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===$t||x.minFilter!==zh&&x.minFilter!==Wo||x.type===$i&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Xo&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Ie(T,x){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",k));let te=x.source,J=m.get(te);J===void 0&&(J={},m.set(te,J));let ne=W(x);if(ne!==T.__cacheKey){J[ne]===void 0&&(J[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[ne].usedTimes++;let pe=J[T.__cacheKey];pe!==void 0&&(J[T.__cacheKey].usedTimes--,pe.usedTimes===0&&P(x)),T.__cacheKey=ne,T.__webglTexture=J[ne].texture}return U}function be(T,x,U){let te=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=t.TEXTURE_3D);let J=Ie(T,x),ne=x.source;n.bindTexture(te,T.__webglTexture,t.TEXTURE0+U);let pe=i.get(ne);if(ne.version!==pe.__version||J===!0){n.activeTexture(t.TEXTURE0+U);let se=$e.getPrimaries($e.workingColorSpace),le=x.colorSpace===Tn?null:$e.getPrimaries(x.colorSpace),Ee=x.colorSpace===Tn||se===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let We=w(x)&&E(x.image)===!1,j=g(x.image,We,!1,h);j=At(x,j);let Ze=E(j)||a,Ce=s.convert(x.format,x.colorSpace),we=s.convert(x.type),ye=I(x.internalFormat,Ce,we,x.colorSpace,x.isVideoTexture);_e(te,x,Ze);let fe,ke=x.mipmaps,R=a&&x.isVideoTexture!==!0&&ye!==T_,ce=pe.__version===void 0||J===!0,K=S(x,j,Ze);if(x.isDepthTexture)ye=t.DEPTH_COMPONENT,a?x.type===$i?ye=t.DEPTH_COMPONENT32F:x.type===Zi?ye=t.DEPTH_COMPONENT24:x.type===br?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:x.type===$i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Cr&&ye===t.DEPTH_COMPONENT&&x.type!==ed&&x.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Zi,we=s.convert(x.type)),x.format===Ds&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,x.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=br,we=s.convert(x.type))),ce&&(R?n.texStorage2D(t.TEXTURE_2D,1,ye,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,ye,j.width,j.height,0,Ce,we,null));else if(x.isDataTexture)if(ke.length>0&&Ze){R&&ce&&n.texStorage2D(t.TEXTURE_2D,K,ye,ke[0].width,ke[0].height);for(let H=0,re=ke.length;H<re;H++)fe=ke[H],R?n.texSubImage2D(t.TEXTURE_2D,H,0,0,fe.width,fe.height,Ce,we,fe.data):n.texImage2D(t.TEXTURE_2D,H,ye,fe.width,fe.height,0,Ce,we,fe.data);x.generateMipmaps=!1}else R?(ce&&n.texStorage2D(t.TEXTURE_2D,K,ye,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,j.width,j.height,Ce,we,j.data)):n.texImage2D(t.TEXTURE_2D,0,ye,j.width,j.height,0,Ce,we,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){R&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,K,ye,ke[0].width,ke[0].height,j.depth);for(let H=0,re=ke.length;H<re;H++)fe=ke[H],x.format!==kn?Ce!==null?R?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,j.depth,Ce,fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,ye,fe.width,fe.height,j.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,j.depth,Ce,we,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,ye,fe.width,fe.height,j.depth,0,Ce,we,fe.data)}else{R&&ce&&n.texStorage2D(t.TEXTURE_2D,K,ye,ke[0].width,ke[0].height);for(let H=0,re=ke.length;H<re;H++)fe=ke[H],x.format!==kn?Ce!==null?R?n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,fe.width,fe.height,Ce,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,H,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?n.texSubImage2D(t.TEXTURE_2D,H,0,0,fe.width,fe.height,Ce,we,fe.data):n.texImage2D(t.TEXTURE_2D,H,ye,fe.width,fe.height,0,Ce,we,fe.data)}else if(x.isDataArrayTexture)R?(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,K,ye,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Ce,we,j.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,j.width,j.height,j.depth,0,Ce,we,j.data);else if(x.isData3DTexture)R?(ce&&n.texStorage3D(t.TEXTURE_3D,K,ye,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Ce,we,j.data)):n.texImage3D(t.TEXTURE_3D,0,ye,j.width,j.height,j.depth,0,Ce,we,j.data);else if(x.isFramebufferTexture){if(ce)if(R)n.texStorage2D(t.TEXTURE_2D,K,ye,j.width,j.height);else{let H=j.width,re=j.height;for(let Se=0;Se<K;Se++)n.texImage2D(t.TEXTURE_2D,Se,ye,H,re,0,Ce,we,null),H>>=1,re>>=1}}else if(ke.length>0&&Ze){R&&ce&&n.texStorage2D(t.TEXTURE_2D,K,ye,ke[0].width,ke[0].height);for(let H=0,re=ke.length;H<re;H++)fe=ke[H],R?n.texSubImage2D(t.TEXTURE_2D,H,0,0,Ce,we,fe):n.texImage2D(t.TEXTURE_2D,H,ye,Ce,we,fe);x.generateMipmaps=!1}else R?(ce&&n.texStorage2D(t.TEXTURE_2D,K,ye,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,we,j)):n.texImage2D(t.TEXTURE_2D,0,ye,Ce,we,j);b(x,Ze)&&C(te),pe.__version=ne.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ae(T,x,U){if(x.image.length!==6)return;let te=Ie(T,x),J=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+U);let ne=i.get(J);if(J.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+U);let pe=$e.getPrimaries($e.workingColorSpace),se=x.colorSpace===Tn?null:$e.getPrimaries(x.colorSpace),le=x.colorSpace===Tn||pe===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,We=x.image[0]&&x.image[0].isDataTexture,j=[];for(let H=0;H<6;H++)!Ee&&!We?j[H]=g(x.image[H],!1,!0,c):j[H]=We?x.image[H].image:x.image[H],j[H]=At(x,j[H]);let Ze=j[0],Ce=E(Ze)||a,we=s.convert(x.format,x.colorSpace),ye=s.convert(x.type),fe=I(x.internalFormat,we,ye,x.colorSpace),ke=a&&x.isVideoTexture!==!0,R=ne.__version===void 0||te===!0,ce=S(x,Ze,Ce);_e(t.TEXTURE_CUBE_MAP,x,Ce);let K;if(Ee){ke&&R&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,fe,Ze.width,Ze.height);for(let H=0;H<6;H++){K=j[H].mipmaps;for(let re=0;re<K.length;re++){let Se=K[re];x.format!==kn?we!==null?ke?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,0,0,Se.width,Se.height,we,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,0,0,Se.width,Se.height,we,ye,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,fe,Se.width,Se.height,0,we,ye,Se.data)}}}else{K=x.mipmaps,ke&&R&&(K.length>0&&ce++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,fe,j[0].width,j[0].height));for(let H=0;H<6;H++)if(We){ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,j[H].width,j[H].height,we,ye,j[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,fe,j[H].width,j[H].height,0,we,ye,j[H].data);for(let re=0;re<K.length;re++){let He=K[re].image[H].image;ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,0,0,He.width,He.height,we,ye,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,fe,He.width,He.height,0,we,ye,He.data)}}else{ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,we,ye,j[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,fe,we,ye,j[H]);for(let re=0;re<K.length;re++){let Se=K[re];ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,0,0,we,ye,Se.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,fe,we,ye,Se.image[H])}}}b(x,Ce)&&C(t.TEXTURE_CUBE_MAP),ne.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ue(T,x,U,te,J,ne){let pe=s.convert(U.format,U.colorSpace),se=s.convert(U.type),le=I(U.internalFormat,pe,se,U.colorSpace);if(!i.get(x).__hasExternalTextures){let We=Math.max(1,x.width>>ne),j=Math.max(1,x.height>>ne);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ne,le,We,j,x.depth,0,pe,se,null):n.texImage2D(J,ne,le,We,j,0,pe,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),qe(x)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,i.get(U).__webglTexture,0,Pe(x)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,i.get(U).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(T,x,U){if(t.bindRenderbuffer(t.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let te=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(U||qe(x)){let J=x.depthTexture;J&&J.isDepthTexture&&(J.type===$i?te=t.DEPTH_COMPONENT32F:J.type===Zi&&(te=t.DEPTH_COMPONENT24));let ne=Pe(x);qe(x)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,te,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,te,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){let te=Pe(x);U&&qe(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,x.width,x.height):qe(x)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{let te=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<te.length;J++){let ne=te[J],pe=s.convert(ne.format,ne.colorSpace),se=s.convert(ne.type),le=I(ne.internalFormat,pe,se,ne.colorSpace),Ee=Pe(x);U&&qe(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,le,x.width,x.height):qe(x)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,le,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,le,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Vt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);let te=i.get(x.depthTexture).__webglTexture,J=Pe(x);if(x.depthTexture.format===Cr)qe(x)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(x.depthTexture.format===Ds)qe(x)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ve(T){let x=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Vt(x.__webglFramebuffer,T)}else if(U){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=t.createRenderbuffer(),N(x.__webglDepthbuffer[te],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),N(x.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(T,x,U){let te=i.get(T);x!==void 0&&Ue(te.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&ve(T)}function Me(T){let x=T.texture,U=i.get(T),te=i.get(x);T.addEventListener("dispose",X),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=x.version,o.memory.textures++);let J=T.isWebGLCubeRenderTarget===!0,ne=T.isWebGLMultipleRenderTargets===!0,pe=E(T)||a;if(J){U.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[se]=[];for(let le=0;le<x.mipmaps.length;le++)U.__webglFramebuffer[se][le]=t.createFramebuffer()}else U.__webglFramebuffer[se]=t.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)U.__webglFramebuffer[se]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){let se=T.texture;for(let le=0,Ee=se.length;le<Ee;le++){let We=i.get(se[le]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&qe(T)===!1){let se=ne?x:[x];U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<se.length;le++){let Ee=se[le];U.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[le]);let We=s.convert(Ee.format,Ee.colorSpace),j=s.convert(Ee.type),Ze=I(Ee.internalFormat,We,j,Ee.colorSpace,T.isXRRenderTarget===!0),Ce=Pe(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Ze,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,U.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),N(U.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),_e(t.TEXTURE_CUBE_MAP,x,pe);for(let se=0;se<6;se++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)Ue(U.__webglFramebuffer[se][le],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,le);else Ue(U.__webglFramebuffer[se],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);b(x,pe)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){let se=T.texture;for(let le=0,Ee=se.length;le<Ee;le++){let We=se[le],j=i.get(We);n.bindTexture(t.TEXTURE_2D,j.__webglTexture),_e(t.TEXTURE_2D,We,pe),Ue(U.__webglFramebuffer,T,We,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),b(We,pe)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?se=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,te.__webglTexture),_e(se,x,pe),a&&x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)Ue(U.__webglFramebuffer[le],T,x,t.COLOR_ATTACHMENT0,se,le);else Ue(U.__webglFramebuffer,T,x,t.COLOR_ATTACHMENT0,se,0);b(x,pe)&&C(se),n.unbindTexture()}T.depthBuffer&&ve(T)}function st(T){let x=E(T)||a,U=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,J=U.length;te<J;te++){let ne=U[te];if(b(ne,x)){let pe=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=i.get(ne).__webglTexture;n.bindTexture(pe,se),C(pe),n.unbindTexture()}}}function Oe(T){if(a&&T.samples>0&&qe(T)===!1){let x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],U=T.width,te=T.height,J=t.COLOR_BUFFER_BIT,ne=[],pe=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(T),le=T.isWebGLMultipleRenderTargets===!0;if(le)for(let Ee=0;Ee<x.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){ne.push(t.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&ne.push(pe);let We=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(We===!1&&(T.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]),We===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[pe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[pe])),le){let j=i.get(x[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,j,0)}t.blitFramebuffer(0,0,U,te,0,0,U,te,J,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Ee=0;Ee<x.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);let We=i.get(x[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Pe(T){return Math.min(d,T.samples)}function qe(T){let x=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(T){let x=o.render.frame;v.get(T)!==x&&(v.set(T,x),T.update())}function At(T,x){let U=T.colorSpace,te=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Mf||U!==yi&&U!==Tn&&($e.getTransfer(U)===nt?a===!1?e.has("EXT_sRGB")===!0&&te===kn?(T.format=Mf,T.minFilter=wn,T.generateMipmaps=!1):x=jl.sRGBToLinear(x):(te!==kn||J!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}this.allocateTextureUnit=ie,this.resetTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=de,this.setTextureCube=V,this.rebindTextures=Be,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=qe}function Qw(t,e,n){let i=n.isWebGL2;function r(s,o=Tn){let a,l=$e.getTransfer(o);if(s===ji)return t.UNSIGNED_BYTE;if(s===x_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===S_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Yx)return t.BYTE;if(s===qx)return t.SHORT;if(s===ed)return t.UNSIGNED_SHORT;if(s===y_)return t.INT;if(s===Zi)return t.UNSIGNED_INT;if(s===$i)return t.FLOAT;if(s===Xo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zx)return t.ALPHA;if(s===kn)return t.RGBA;if(s===$x)return t.LUMINANCE;if(s===Jx)return t.LUMINANCE_ALPHA;if(s===Cr)return t.DEPTH_COMPONENT;if(s===Ds)return t.DEPTH_STENCIL;if(s===Mf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Kx)return t.RED;if(s===M_)return t.RED_INTEGER;if(s===jx)return t.RG;if(s===E_)return t.RG_INTEGER;if(s===w_)return t.RGBA_INTEGER;if(s===Bh||s===kh||s===Vh||s===Hh)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Bh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Bh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===t0||s===n0||s===i0||s===r0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===t0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===n0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===i0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===r0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===T_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===s0||s===o0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===s0)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===o0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===a0||s===l0||s===c0||s===u0||s===h0||s===f0||s===d0||s===p0||s===m0||s===g0||s===_0||s===v0||s===y0||s===x0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===a0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===l0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===c0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===u0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===h0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===f0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===d0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===p0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===m0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===g0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===v0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===y0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===x0)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gh||s===S0||s===M0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Gh)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===S0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===M0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qx||s===E0||s===w0||s===T0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Gh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===E0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===w0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===T0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}var kf=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Rs=class extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},eT={type:"move"},Go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Rs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},Vf=class extends er{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null,y=n.getContextAttributes(),m=null,u=null,_=[],g=[],E=new Je,w=null,b=new Jt;b.layers.enable(1),b.viewport=new Lt;let C=new Jt;C.layers.enable(2),C.viewport=new Lt;let I=[b,C],S=new kf;S.layers.enable(1),S.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=_[V];return q===void 0&&(q=new Go,_[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=_[V];return q===void 0&&(q=new Go,_[V]=q),q.getGripSpace()},this.getHand=function(V){let q=_[V];return q===void 0&&(q=new Go,_[V]=q),q.getHandSpace()};function X(V){let q=g.indexOf(V.inputSource);if(q===-1)return;let ae=_[q];ae!==void 0&&(ae.update(V.inputSource,V.frame,c||o),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function Q(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",P);for(let V=0;V<_.length;V++){let q=g[V];q!==null&&(g[V]=null,_[V].disconnect(q))}A=null,k=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,u=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new xi(p.framebufferWidth,p.framebufferHeight,{format:kn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let q=null,ae=null,ge=null;y.depth&&(ge=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=y.stencil?Ds:Cr,ae=y.stencil?br:Zi);let _e={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new xi(f.textureWidth,f.textureHeight,{format:kn,type:ji,depthTexture:new cc(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Ie=e.properties.get(u);Ie.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(V){for(let q=0;q<V.removed.length;q++){let ae=V.removed[q],ge=g.indexOf(ae);ge>=0&&(g[ge]=null,_[ge].disconnect(ae))}for(let q=0;q<V.added.length;q++){let ae=V.added[q],ge=g.indexOf(ae);if(ge===-1){for(let Ie=0;Ie<_.length;Ie++)if(Ie>=g.length){g.push(ae),ge=Ie;break}else if(g[Ie]===null){g[Ie]=ae,ge=Ie;break}if(ge===-1)break}let _e=_[ge];_e&&_e.connect(ae)}}let B=new F,Y=new F;function G(V,q,ae){B.setFromMatrixPosition(q.matrixWorld),Y.setFromMatrixPosition(ae.matrixWorld);let ge=B.distanceTo(Y),_e=q.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,be=_e[14]/(_e[10]-1),Ae=_e[14]/(_e[10]+1),Ue=(_e[9]+1)/_e[5],N=(_e[9]-1)/_e[5],Vt=(_e[8]-1)/_e[0],ve=(Ie[8]+1)/Ie[0],Be=be*Vt,Me=be*ve,st=ge/(-Vt+ve),Oe=st*-Vt;q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Oe),V.translateZ(st),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let Pe=be+st,qe=Ae+st,Tt=Be-Oe,At=Me+(ge-Oe),T=Ue*Ae/qe*Pe,x=N*Ae/qe*Pe;V.projectionMatrix.makePerspective(Tt,At,T,x,Pe,qe),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function ie(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;S.near=C.near=b.near=V.near,S.far=C.far=b.far=V.far,(A!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,k=S.far);let q=V.parent,ae=S.cameras;ie(S,q);for(let ge=0;ge<ae.length;ge++)ie(ae[ge],q);ae.length===2?G(S,b,C):S.projectionMatrix.copy(b.projectionMatrix),W(V,S,q)};function W(V,q,ae){ae===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ef*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let $=null;function ee(V,q){if(h=q.getViewerPose(c||o),v=q,h!==null){let ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ge=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let _e=0;_e<ae.length;_e++){let Ie=ae[_e],be=null;if(p!==null)be=p.getViewport(Ie);else{let Ue=d.getViewSubImage(f,Ie);be=Ue.viewport,_e===0&&(e.setRenderTargetTextures(u,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(u))}let Ae=I[_e];Ae===void 0&&(Ae=new Jt,Ae.layers.enable(_e),Ae.viewport=new Lt,I[_e]=Ae),Ae.matrix.fromArray(Ie.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ie.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(be.x,be.y,be.width,be.height),_e===0&&(S.matrix.copy(Ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(Ae)}}for(let ae=0;ae<_.length;ae++){let ge=g[ae],_e=_[ae];ge!==null&&_e!==void 0&&_e.update(ge,q,c||o)}$&&$(V,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),v=null}let de=new L_;de.setAnimationLoop(ee),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}};function tT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,P_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,g,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,E)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=e.get(u).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;let g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){let _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nT(t,e,n,i){let r={},s={},o=[],a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){let E=g.program;i.uniformBlockBinding(_,E)}function c(_,g){let E=r[_.id];E===void 0&&(v(_),E=h(_),r[_.id]=E,_.addEventListener("dispose",m));let w=g.program;i.updateUBOMapping(_,w);let b=e.render.frame;s[_.id]!==b&&(f(_),s[_.id]=b)}function h(_){let g=d();_.__bindingPointIndex=g;let E=t.createBuffer(),w=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let g=r[_.id],E=_.uniforms,w=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let b=0,C=E.length;b<C;b++){let I=E[b];if(p(I,b,w)===!0){let S=I.__offset,A=Array.isArray(I.value)?I.value:[I.value],k=0;for(let X=0;X<A.length;X++){let Q=A[X],P=y(Q);typeof Q=="number"?(I.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,S+k,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=Q.elements[0],I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=Q.elements[0],I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=Q.elements[0]):(Q.toArray(I.__data,k),k+=P.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,I.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,E){let w=_.value;if(E[g]===void 0){if(typeof w=="number")E[g]=w;else{let b=Array.isArray(w)?w:[w],C=[];for(let I=0;I<b.length;I++)C.push(b[I].clone());E[g]=C}return!0}else if(typeof w=="number"){if(E[g]!==w)return E[g]=w,!0}else{let b=Array.isArray(E[g])?E[g]:[E[g]],C=Array.isArray(w)?w:[w];for(let I=0;I<b.length;I++){let S=b[I];if(S.equals(C[I])===!1)return S.copy(C[I]),!0}}return!1}function v(_){let g=_.uniforms,E=0,w=16,b=0;for(let C=0,I=g.length;C<I;C++){let S=g[C],A={boundary:0,storage:0},k=Array.isArray(S.value)?S.value:[S.value];for(let X=0,Q=k.length;X<Q;X++){let P=k[X],B=y(P);A.boundary+=B.boundary,A.storage+=B.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=E,C>0){b=E%w;let X=w-b;b!==0&&X-A.boundary<0&&(E+=w-b,S.__offset=E)}E+=A.storage}return b=E%w,b>0&&(E+=w-b),_.__size=E,_.__cache={},this}function y(_){let g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){let g=_.target;g.removeEventListener("dispose",m);let E=o.indexOf(g.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(let _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}var qo=class{constructor(e={}){let{canvas:n=fS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),v=new Int32Array(4),y=null,m=null,u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Ki,this.toneMappingExposure=1;let g=this,E=!1,w=0,b=0,C=null,I=-1,S=null,A=new Lt,k=new Lt,X=null,Q=new Xe(0),P=0,B=n.width,Y=n.height,G=1,ie=null,W=null,$=new Lt(0,0,B,Y),ee=new Lt(0,0,B,Y),de=!1,V=new ac,q=!1,ae=!1,ge=null,_e=new kt,Ie=new Je,be=new F,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return C===null?G:1}let N=i;function Vt(M,L){for(let O=0;O<M.length;O++){let z=M[O],D=n.getContext(z,L);if(D!==null)return D}return null}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qf}`),n.addEventListener("webglcontextlost",ke,!1),n.addEventListener("webglcontextrestored",R,!1),n.addEventListener("webglcontextcreationerror",ce,!1),N===null){let L=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&L.shift(),N=Vt(L,M),N===null)throw Vt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ve,Be,Me,st,Oe,Pe,qe,Tt,At,T,x,U,te,J,ne,pe,se,le,Ee,We,j,Ze,Ce,we;function ye(){ve=new ME(N),Be=new gE(N,ve,e),ve.init(Be),Ze=new Qw(N,ve,Be),Me=new Kw(N,ve,Be),st=new TE(N),Oe=new Bw,Pe=new jw(N,ve,Me,Oe,Be,Ze,st),qe=new vE(g),Tt=new SE(g),At=new NS(N,Be),Ce=new pE(N,ve,At,Be),T=new EE(N,At,st,Ce),x=new RE(N,T,At,st),Ee=new CE(N,Be,Pe),pe=new _E(Oe),U=new zw(g,qe,Tt,ve,Be,Ce,pe),te=new tT(g,Oe),J=new Vw,ne=new qw(ve,Be),le=new dE(g,qe,Tt,Me,x,f,l),se=new Jw(g,x,Be),we=new nT(N,st,Be,Me),We=new mE(N,ve,st,Be),j=new wE(N,ve,st,Be),st.programs=U.programs,g.capabilities=Be,g.extensions=ve,g.properties=Oe,g.renderLists=J,g.shadowMap=se,g.state=Me,g.info=st}ye();let fe=new Vf(g,N);this.xr=fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(B,Y,!1))},this.getSize=function(M){return M.set(B,Y)},this.setSize=function(M,L,O=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,Y=L,n.width=Math.floor(M*G),n.height=Math.floor(L*G),O===!0&&(n.style.width=M+"px",n.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(B*G,Y*G).floor()},this.setDrawingBufferSize=function(M,L,O){B=M,Y=L,G=O,n.width=Math.floor(M*O),n.height=Math.floor(L*O),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy($)},this.setViewport=function(M,L,O,z){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,L,O,z),Me.viewport(A.copy($).multiplyScalar(G).floor())},this.getScissor=function(M){return M.copy(ee)},this.setScissor=function(M,L,O,z){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,L,O,z),Me.scissor(k.copy(ee).multiplyScalar(G).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){Me.setScissorTest(de=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(M=!0,L=!0,O=!0){let z=0;if(M){let D=!1;if(C!==null){let ue=C.texture.format;D=ue===w_||ue===E_||ue===M_}if(D){let ue=C.texture.type,me=ue===ji||ue===Zi||ue===ed||ue===br||ue===x_||ue===S_,xe=le.getClearColor(),Te=le.getClearAlpha(),De=xe.r,Re=xe.g,Le=xe.b;me?(p[0]=De,p[1]=Re,p[2]=Le,p[3]=Te,N.clearBufferuiv(N.COLOR,0,p)):(v[0]=De,v[1]=Re,v[2]=Le,v[3]=Te,N.clearBufferiv(N.COLOR,0,v))}else z|=N.COLOR_BUFFER_BIT}L&&(z|=N.DEPTH_BUFFER_BIT),O&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ke,!1),n.removeEventListener("webglcontextrestored",R,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),J.dispose(),ne.dispose(),Oe.dispose(),qe.dispose(),Tt.dispose(),x.dispose(),Ce.dispose(),we.dispose(),U.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ht),fe.removeEventListener("sessionend",Ke),ge&&(ge.dispose(),ge=null),Gt.stop()};function ke(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let M=st.autoReset,L=se.enabled,O=se.autoUpdate,z=se.needsUpdate,D=se.type;ye(),st.autoReset=M,se.enabled=L,se.autoUpdate=O,se.needsUpdate=z,se.type=D}function ce(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function K(M){let L=M.target;L.removeEventListener("dispose",K),H(L)}function H(M){re(M),Oe.remove(M)}function re(M){let L=Oe.get(M).programs;L!==void 0&&(L.forEach(function(O){U.releaseProgram(O)}),M.isShaderMaterial&&U.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,O,z,D,ue){L===null&&(L=Ae);let me=D.isMesh&&D.matrixWorld.determinant()<0,xe=k_(M,L,O,z,D);Me.setMaterial(z,me);let Te=O.index,De=1;if(z.wireframe===!0){if(Te=T.getWireframeAttribute(O),Te===void 0)return;De=2}let Re=O.drawRange,Le=O.attributes.position,ft=Re.start*De,on=(Re.start+Re.count)*De;ue!==null&&(ft=Math.max(ft,ue.start*De),on=Math.min(on,(ue.start+ue.count)*De)),Te!==null?(ft=Math.max(ft,0),on=Math.min(on,Te.count)):Le!=null&&(ft=Math.max(ft,0),on=Math.min(on,Le.count));let St=on-ft;if(St<0||St===1/0)return;Ce.setup(D,z,xe,O,Te);let jn,ot=We;if(Te!==null&&(jn=At.get(Te),ot=j,ot.setIndex(jn)),D.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*Ue()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(D.isLine){let Fe=z.linewidth;Fe===void 0&&(Fe=1),Me.setLineWidth(Fe*Ue()),D.isLineSegments?ot.setMode(N.LINES):D.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else D.isPoints?ot.setMode(N.POINTS):D.isSprite&&ot.setMode(N.TRIANGLES);if(D.isBatchedMesh)ot.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else if(D.isInstancedMesh)ot.renderInstances(ft,St,D.count);else if(O.isInstancedBufferGeometry){let Fe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,pc=Math.min(O.instanceCount,Fe);ot.renderInstances(ft,St,pc)}else ot.render(ft,St)};function Se(M,L,O){M.transparent===!0&&M.side===gi&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,Ko(M,L,O),M.side=Qi,M.needsUpdate=!0,Ko(M,L,O),M.side=gi):Ko(M,L,O)}this.compile=function(M,L,O=null){O===null&&(O=M),m=ne.get(O),m.init(),_.push(m),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),M!==O&&M.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights(g._useLegacyLights);let z=new Set;return M.traverse(function(D){let ue=D.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){let xe=ue[me];Se(xe,O,D),z.add(xe)}else Se(ue,O,D),z.add(ue)}),_.pop(),m=null,z},this.compileAsync=function(M,L,O=null){let z=this.compile(M,L,O);return new Promise(D=>{function ue(){if(z.forEach(function(me){Oe.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){D(M);return}setTimeout(ue,10)}ve.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let He=null;function xt(M){He&&He(M)}function Ht(){Gt.stop()}function Ke(){Gt.start()}let Gt=new L_;Gt.setAnimationLoop(xt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(M){He=M,fe.setAnimationLoop(M),M===null?Gt.stop():Gt.start()},fe.addEventListener("sessionstart",Ht),fe.addEventListener("sessionend",Ke),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(L),L=fe.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,L,C),m=ne.get(M,_.length),m.init(),_.push(m),_e.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),V.setFromProjectionMatrix(_e),ae=this.localClippingEnabled,q=pe.init(this.clippingPlanes,ae),y=J.get(M,u.length),y.init(),u.push(y),Wn(M,L,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(ie,W),this.info.render.frame++,q===!0&&pe.beginShadows();let O=m.state.shadowsArray;if(se.render(O,M,L),q===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(y,M),m.setupLights(g._useLegacyLights),L.isArrayCamera){let z=L.cameras;for(let D=0,ue=z.length;D<ue;D++){let me=z[D];od(y,M,me,me.viewport)}}else od(y,M,L);C!==null&&(Pe.updateMultisampleRenderTarget(C),Pe.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(g,M,L),Ce.resetDefaultState(),I=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Wn(M,L,O,z){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||V.intersectsSprite(M)){z&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);let me=x.update(M),xe=M.material;xe.visible&&y.push(M,me,xe,O,be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||V.intersectsObject(M))){let me=x.update(M),xe=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),be.copy(me.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(_e)),Array.isArray(xe)){let Te=me.groups;for(let De=0,Re=Te.length;De<Re;De++){let Le=Te[De],ft=xe[Le.materialIndex];ft&&ft.visible&&y.push(M,me,ft,O,be.z,Le)}}else xe.visible&&y.push(M,me,xe,O,be.z,null)}}let ue=M.children;for(let me=0,xe=ue.length;me<xe;me++)Wn(ue[me],L,O,z)}function od(M,L,O,z){let D=M.opaque,ue=M.transmissive,me=M.transparent;m.setupLightsView(O),q===!0&&pe.setGlobalState(g.clippingPlanes,O),ue.length>0&&B_(D,ue,L,O),z&&Me.viewport(A.copy(z)),D.length>0&&Jo(D,L,O),ue.length>0&&Jo(ue,L,O),me.length>0&&Jo(me,L,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function B_(M,L,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let ue=Be.isWebGL2;ge===null&&(ge=new xi(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Xo:ji,minFilter:Wo,samples:ue?4:0})),g.getDrawingBufferSize(Ie),ue?ge.setSize(Ie.x,Ie.y):ge.setSize(wf(Ie.x),wf(Ie.y));let me=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(Q),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();let xe=g.toneMapping;g.toneMapping=Ki,Jo(M,O,z),Pe.updateMultisampleRenderTarget(ge),Pe.updateRenderTargetMipmap(ge);let Te=!1;for(let De=0,Re=L.length;De<Re;De++){let Le=L[De],ft=Le.object,on=Le.geometry,St=Le.material,jn=Le.group;if(St.side===gi&&ft.layers.test(z.layers)){let ot=St.side;St.side=sn,St.needsUpdate=!0,ad(ft,O,z,on,St,jn),St.side=ot,St.needsUpdate=!0,Te=!0}}Te===!0&&(Pe.updateMultisampleRenderTarget(ge),Pe.updateRenderTargetMipmap(ge)),g.setRenderTarget(me),g.setClearColor(Q,P),g.toneMapping=xe}function Jo(M,L,O){let z=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ue=M.length;D<ue;D++){let me=M[D],xe=me.object,Te=me.geometry,De=z===null?me.material:z,Re=me.group;xe.layers.test(O.layers)&&ad(xe,L,O,Te,De,Re)}}function ad(M,L,O,z,D,ue){M.onBeforeRender(g,L,O,z,D,ue),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(g,L,O,z,M,ue),D.transparent===!0&&D.side===gi&&D.forceSinglePass===!1?(D.side=sn,D.needsUpdate=!0,g.renderBufferDirect(O,L,z,D,M,ue),D.side=Qi,D.needsUpdate=!0,g.renderBufferDirect(O,L,z,D,M,ue),D.side=gi):g.renderBufferDirect(O,L,z,D,M,ue),M.onAfterRender(g,L,O,z,D,ue)}function Ko(M,L,O){L.isScene!==!0&&(L=Ae);let z=Oe.get(M),D=m.state.lights,ue=m.state.shadowsArray,me=D.state.version,xe=U.getParameters(M,D.state,ue,L,O),Te=U.getProgramCacheKey(xe),De=z.programs;z.environment=M.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(M.isMeshStandardMaterial?Tt:qe).get(M.envMap||z.environment),De===void 0&&(M.addEventListener("dispose",K),De=new Map,z.programs=De);let Re=De.get(Te);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===me)return cd(M,xe),Re}else xe.uniforms=U.getUniforms(M),M.onBuild(O,xe,g),M.onBeforeCompile(xe,g),Re=U.acquireProgram(xe,Te),De.set(Te,Re),z.uniforms=xe.uniforms;let Le=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=pe.uniform),cd(M,xe),z.needsLights=H_(M),z.lightsStateVersion=me,z.needsLights&&(Le.ambientLightColor.value=D.state.ambient,Le.lightProbe.value=D.state.probe,Le.directionalLights.value=D.state.directional,Le.directionalLightShadows.value=D.state.directionalShadow,Le.spotLights.value=D.state.spot,Le.spotLightShadows.value=D.state.spotShadow,Le.rectAreaLights.value=D.state.rectArea,Le.ltc_1.value=D.state.rectAreaLTC1,Le.ltc_2.value=D.state.rectAreaLTC2,Le.pointLights.value=D.state.point,Le.pointLightShadows.value=D.state.pointShadow,Le.hemisphereLights.value=D.state.hemi,Le.directionalShadowMap.value=D.state.directionalShadowMap,Le.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Le.spotShadowMap.value=D.state.spotShadowMap,Le.spotLightMatrix.value=D.state.spotLightMatrix,Le.spotLightMap.value=D.state.spotLightMap,Le.pointShadowMap.value=D.state.pointShadowMap,Le.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function ld(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Is.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function cd(M,L){let O=Oe.get(M);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function k_(M,L,O,z,D){L.isScene!==!0&&(L=Ae),Pe.resetTextureUnits();let ue=L.fog,me=z.isMeshStandardMaterial?L.environment:null,xe=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yi,Te=(z.isMeshStandardMaterial?Tt:qe).get(z.envMap||me),De=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Le=!!O.morphAttributes.position,ft=!!O.morphAttributes.normal,on=!!O.morphAttributes.color,St=Ki;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(St=g.toneMapping);let jn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ot=jn!==void 0?jn.length:0,Fe=Oe.get(z),pc=m.state.lights;if(q===!0&&(ae===!0||M!==S)){let mn=M===S&&z.id===I;pe.setState(z,M,mn)}let ut=!1;z.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==pc.state.version||Fe.outputColorSpace!==xe||D.isBatchedMesh&&Fe.batching===!1||!D.isBatchedMesh&&Fe.batching===!0||D.isInstancedMesh&&Fe.instancing===!1||!D.isInstancedMesh&&Fe.instancing===!0||D.isSkinnedMesh&&Fe.skinning===!1||!D.isSkinnedMesh&&Fe.skinning===!0||D.isInstancedMesh&&Fe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Fe.instancingColor===!1&&D.instanceColor!==null||Fe.envMap!==Te||z.fog===!0&&Fe.fog!==ue||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==pe.numPlanes||Fe.numIntersection!==pe.numIntersection)||Fe.vertexAlphas!==De||Fe.vertexTangents!==Re||Fe.morphTargets!==Le||Fe.morphNormals!==ft||Fe.morphColors!==on||Fe.toneMapping!==St||Be.isWebGL2===!0&&Fe.morphTargetsCount!==ot)&&(ut=!0):(ut=!0,Fe.__version=z.version);let nr=Fe.currentProgram;ut===!0&&(nr=Ko(z,L,D));let ud=!1,Hs=!1,mc=!1,It=nr.getUniforms(),ir=Fe.uniforms;if(Me.useProgram(nr.program)&&(ud=!0,Hs=!0,mc=!0),z.id!==I&&(I=z.id,Hs=!0),ud||S!==M){It.setValue(N,"projectionMatrix",M.projectionMatrix),It.setValue(N,"viewMatrix",M.matrixWorldInverse);let mn=It.map.cameraPosition;mn!==void 0&&mn.setValue(N,be.setFromMatrixPosition(M.matrixWorld)),Be.logarithmicDepthBuffer&&It.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&It.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Hs=!0,mc=!0)}if(D.isSkinnedMesh){It.setOptional(N,D,"bindMatrix"),It.setOptional(N,D,"bindMatrixInverse");let mn=D.skeleton;mn&&(Be.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),It.setValue(N,"boneTexture",mn.boneTexture,Pe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}D.isBatchedMesh&&(It.setOptional(N,D,"batchingTexture"),It.setValue(N,"batchingTexture",D._matricesTexture,Pe));let gc=O.morphAttributes;if((gc.position!==void 0||gc.normal!==void 0||gc.color!==void 0&&Be.isWebGL2===!0)&&Ee.update(D,O,nr),(Hs||Fe.receiveShadow!==D.receiveShadow)&&(Fe.receiveShadow=D.receiveShadow,It.setValue(N,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ir.envMap.value=Te,ir.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Hs&&(It.setValue(N,"toneMappingExposure",g.toneMappingExposure),Fe.needsLights&&V_(ir,mc),ue&&z.fog===!0&&te.refreshFogUniforms(ir,ue),te.refreshMaterialUniforms(ir,z,G,Y,ge),Is.upload(N,ld(Fe),ir,Pe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Is.upload(N,ld(Fe),ir,Pe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&It.setValue(N,"center",D.center),It.setValue(N,"modelViewMatrix",D.modelViewMatrix),It.setValue(N,"normalMatrix",D.normalMatrix),It.setValue(N,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let mn=z.uniformsGroups;for(let _c=0,G_=mn.length;_c<G_;_c++)if(Be.isWebGL2){let hd=mn[_c];we.update(hd,nr),we.bind(hd,nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nr}function V_(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function H_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,L,O){Oe.get(M.texture).__webglTexture=L,Oe.get(M.depthTexture).__webglTexture=O;let z=Oe.get(M);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,L){let O=Oe.get(M);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,O=0){C=M,w=L,b=O;let z=!0,D=null,ue=!1,me=!1;if(M){let Te=Oe.get(M);Te.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):Te.__webglFramebuffer===void 0?Pe.setupRenderTarget(M):Te.__hasExternalTextures&&Pe.rebindTextures(M,Oe.get(M.texture).__webglTexture,Oe.get(M.depthTexture).__webglTexture);let De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(me=!0);let Re=Oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?D=Re[L][O]:D=Re[L],ue=!0):Be.isWebGL2&&M.samples>0&&Pe.useMultisampledRTT(M)===!1?D=Oe.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?D=Re[O]:D=Re,A.copy(M.viewport),k.copy(M.scissor),X=M.scissorTest}else A.copy($).multiplyScalar(G).floor(),k.copy(ee).multiplyScalar(G).floor(),X=de;if(Me.bindFramebuffer(N.FRAMEBUFFER,D)&&Be.drawBuffers&&z&&Me.drawBuffers(M,D),Me.viewport(A),Me.scissor(k),Me.setScissorTest(X),ue){let Te=Oe.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,Te.__webglTexture,O)}else if(me){let Te=Oe.get(M.texture),De=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,O||0,De)}I=-1},this.readRenderTargetPixels=function(M,L,O,z,D,ue,me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){Me.bindFramebuffer(N.FRAMEBUFFER,xe);try{let Te=M.texture,De=Te.format,Re=Te.type;if(De!==kn&&Ze.convert(De)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Le=Re===Xo&&(ve.has("EXT_color_buffer_half_float")||Be.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Re!==ji&&Ze.convert(Re)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===$i&&(Be.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-z&&O>=0&&O<=M.height-D&&N.readPixels(L,O,z,D,Ze.convert(De),Ze.convert(Re),ue)}finally{let Te=C!==null?Oe.get(C).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(M,L,O=0){let z=Math.pow(2,-O),D=Math.floor(L.image.width*z),ue=Math.floor(L.image.height*z);Pe.setTexture2D(L,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,M.x,M.y,D,ue),Me.unbindTexture()},this.copyTextureToTexture=function(M,L,O,z=0){let D=L.image.width,ue=L.image.height,me=Ze.convert(O.format),xe=Ze.convert(O.type);Pe.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment),L.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,M.x,M.y,D,ue,me,xe,L.image.data):L.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,me,L.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,M.x,M.y,me,xe,L.image),z===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(M,L,O,z,D=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=M.max.x-M.min.x+1,me=M.max.y-M.min.y+1,xe=M.max.z-M.min.z+1,Te=Ze.convert(z.format),De=Ze.convert(z.type),Re;if(z.isData3DTexture)Pe.setTexture3D(z,0),Re=N.TEXTURE_3D;else if(z.isDataArrayTexture)Pe.setTexture2DArray(z,0),Re=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let Le=N.getParameter(N.UNPACK_ROW_LENGTH),ft=N.getParameter(N.UNPACK_IMAGE_HEIGHT),on=N.getParameter(N.UNPACK_SKIP_PIXELS),St=N.getParameter(N.UNPACK_SKIP_ROWS),jn=N.getParameter(N.UNPACK_SKIP_IMAGES),ot=O.isCompressedTexture?O.mipmaps[0]:O.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ot.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(Re,D,L.x,L.y,L.z,ue,me,xe,Te,De,ot.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Re,D,L.x,L.y,L.z,ue,me,xe,Te,ot.data)):N.texSubImage3D(Re,D,L.x,L.y,L.z,ue,me,xe,Te,De,ot),N.pixelStorei(N.UNPACK_ROW_LENGTH,Le),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),N.pixelStorei(N.UNPACK_SKIP_PIXELS,on),N.pixelStorei(N.UNPACK_SKIP_ROWS,St),N.pixelStorei(N.UNPACK_SKIP_IMAGES,jn),D===0&&z.generateMipmaps&&N.generateMipmap(Re),Me.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Pe.setTextureCube(M,0):M.isData3DTexture?Pe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Pe.setTexture2DArray(M,0):Pe.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,Me.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===td?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===fc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?Rr:A_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rr?Pt:yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Hf=class extends qo{};Hf.prototype.isWebGL1Renderer=!0;var uc=class extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};function Gl(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function iT(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Bs=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gf=class extends Bs{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:A0,endingEnd:A0}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case b0:s=e,a=2*n-i;break;case C0:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case b0:o=e,l=2*i-n;break;case C0:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(i-n)/(r-n),y=v*v,m=y*v,u=-f*m+2*f*y-f*v,_=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*v+1,g=(-1-p)*m+(1.5+p)*y+.5*v,E=p*m-p*y;for(let w=0;w!==a;++w)s[w]=u*o[h+w]+_*o[c+w]+g*o[l+w]+E*o[d+w];return s}},Wf=class extends Bs{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(r-n),d=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*h;return s}},Xf=class extends Bs{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gl(n,this.TimeBufferType),this.values=Gl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Gl(e.times,Array),values:Gl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Xl:n=this.InterpolantFactoryMethodDiscrete;break;case Yl:n=this.InterpolantFactoryMethodLinear;break;case Wh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xl;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&iT(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wh,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,p=d+i;for(let v=0;v!==i;++v){let y=n[d+v];if(y!==n[f+v]||y!==n[p+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Yl;var Nr=class extends Gn{};Nr.prototype.ValueTypeName="bool";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=Xl;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yf=class extends Gn{};Yf.prototype.ValueTypeName="color";var qf=class extends Gn{};qf.prototype.ValueTypeName="number";var Zf=class extends Bs{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let h=c+a;c!==h;c+=4)tr.slerpFlat(s,0,o,c-a,o,c,l);return s}},Zo=class extends Gn{InterpolantFactoryMethodLinear(e){return new Zf(this.times,this.values,this.getValueSize(),e)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.DefaultInterpolation=Yl;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Gn{};Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Xl;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var $f=class extends Gn{};$f.prototype.ValueTypeName="vector";var Jf=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}},rT=new Jf,Kf=class{constructor(e){this.manager=e!==void 0?e:rT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Kf.DEFAULT_MATERIAL_NAME="__DEFAULT";var id="\\[\\]\\.:\\/",sT=new RegExp("["+id+"]","g"),rd="[^"+id+"]",oT="[^"+id.replace("\\.","")+"]",aT=/((?:WC+[\/:])*)/.source.replace("WC",rd),lT=/(WCOD+)?/.source.replace("WCOD",oT),cT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rd),uT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rd),hT=new RegExp("^"+aT+lT+cT+uT+"$"),fT=["material","materials","bones","map"],jf=class{constructor(e,n,i){let r=i||rt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},rt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sT,"")}static parseTrackName(e){let n=hT.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);fT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=jf;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AT=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);var pT=()=>{let t=(0,Vs.useRef)(null);return(0,Vs.useEffect)(()=>{let e=new uc,n=new Jt(75,window.innerWidth/window.innerHeight,.1,1e3),i=new qo;i.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(i.domElement);let r=new Ir,s=new Fs({color:65280}),o=new An(r,s);e.add(o),n.position.z=5;let a=function(){requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,i.render(e,n)};return a(),()=>{t.current.removeChild(i.domElement)}},[]),Vs.default.createElement("div",{ref:t})},F_=pT;var mT=()=>sd.default.createElement(F_,null),gT=(0,z_.createRoot)(document.getElementById("root"));gT.render(sd.default.createElement(mT,null));
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
