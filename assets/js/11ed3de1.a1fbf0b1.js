"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46530],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||p;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7110:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),l=["components"],o={},u=void 0,i={unversionedId:"puppeteer.page.emulateidlestate",id:"puppeteer.page.emulateidlestate",isDocsHomePage:!1,title:"puppeteer.page.emulateidlestate",description:"Home &gt; puppeteer &gt; Page &gt; emulateIdleState",source:"@site/docs/puppeteer.page.emulateidlestate.md",sourceDirName:".",slug:"/puppeteer.page.emulateidlestate",permalink:"/puppeteer/docs/next/puppeteer.page.emulateidlestate",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.page.emulateidlestate.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.page.emulatecputhrottling",permalink:"/puppeteer/docs/next/puppeteer.page.emulatecputhrottling"},next:{title:"puppeteer.page.emulatemediafeatures",permalink:"/puppeteer/docs/next/puppeteer.page.emulatemediafeatures"}},c=[{value:"Page.emulateIdleState() method",id:"pageemulateidlestate-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.emulateidlestate"},"emulateIdleState")),(0,p.kt)("h2",{id:"pageemulateidlestate-method"},"Page.emulateIdleState() method"),(0,p.kt)("p",null,"Emulates the idle state. If no arguments set, clears idle state emulation."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"emulateIdleState(overrides?: {\n        isUserActive: boolean;\n        isScreenUnlocked: boolean;\n    }): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"overrides"),(0,p.kt)("td",{parentName:"tr",align:null},"{ isUserActive: boolean; isScreenUnlocked: boolean; }"),(0,p.kt)("td",{parentName:"tr",align:null},"Mock idle state. If not set, clears idle overrides")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// set idle emulation\nawait page.emulateIdleState({isUserActive: true, isScreenUnlocked: false});\n\n// do some checks here\n...\n\n// clear idle emulation\nawait page.emulateIdleState();\n\n")))}m.isMDXComponent=!0}}]);