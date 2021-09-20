"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95666],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(r),d=p,m=h["".concat(c,".").concat(d)]||h[d]||l[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},73118:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),i=["components"],o={},c=void 0,s={unversionedId:"puppeteer.httprequest.redirectchain",id:"version-10.1.0/puppeteer.httprequest.redirectchain",isDocsHomePage:!1,title:"puppeteer.httprequest.redirectchain",description:"Home &gt; puppeteer &gt; HTTPRequest &gt; redirectChain",source:"@site/versioned_docs/version-10.1.0/puppeteer.httprequest.redirectchain.md",sourceDirName:".",slug:"/puppeteer.httprequest.redirectchain",permalink:"/puppeteer/docs/puppeteer.httprequest.redirectchain",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.httprequest.redirectchain.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.httprequest.postdata",permalink:"/puppeteer/docs/puppeteer.httprequest.postdata"},next:{title:"puppeteer.httprequest.resourcetype",permalink:"/puppeteer/docs/puppeteer.httprequest.resourcetype"}},u=[{value:"HTTPRequest.redirectChain() method",id:"httprequestredirectchain-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],l={toc:u};function h(e){var t=e.components,r=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.httprequest"},"HTTPRequest")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.httprequest.redirectchain"},"redirectChain")),(0,a.kt)("h2",{id:"httprequestredirectchain-method"},"HTTPRequest.redirectChain() method"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectChain")," is a chain of requests initiated to fetch a resource."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"redirectChain(): HTTPRequest[];\n")),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.httprequest"},"HTTPRequest"),"[","]"),(0,a.kt)("p",null,"the chain of requests - if a server responds with at least a single redirect, this chain will contain all requests that were redirected."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redirectChain")," is shared between all the requests of the same chain."),(0,a.kt)("p",null,"For example, if the website ",(0,a.kt)("inlineCode",{parentName:"p"},"http://example.com")," has a single redirect to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com"),", then the chain will contain one request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('http://example.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 1\nconsole.log(chain[0].url()); // 'http://example.com'\n\n")),(0,a.kt)("p",null,"If the website ",(0,a.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects, then the chain will be empty:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('https://google.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 0\n\n")))}h.isMDXComponent=!0}}]);