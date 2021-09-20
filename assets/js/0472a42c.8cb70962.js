"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75881],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48674:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={},u=void 0,l={unversionedId:"puppeteer.page.waitforfunction",id:"version-9.1.1/puppeteer.page.waitforfunction",isDocsHomePage:!1,title:"puppeteer.page.waitforfunction",description:"Home &gt; puppeteer &gt; Page &gt; waitForFunction",source:"@site/versioned_docs/version-9.1.1/puppeteer.page.waitforfunction.md",sourceDirName:".",slug:"/puppeteer.page.waitforfunction",permalink:"/puppeteer/docs/9.1.1/puppeteer.page.waitforfunction",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.page.waitforfunction.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.page.waitforfilechooser",permalink:"/puppeteer/docs/9.1.1/puppeteer.page.waitforfilechooser"},next:{title:"puppeteer.page.waitfornavigation",permalink:"/puppeteer/docs/9.1.1/puppeteer.page.waitfornavigation"}},c=[{value:"Page.waitForFunction() method",id:"pagewaitforfunction-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.page"},"Page")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.page.waitforfunction"},"waitForFunction")),(0,o.kt)("h2",{id:"pagewaitforfunction-method"},"Page.waitForFunction() method"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForFunction")," can be used to observe viewport size change:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const puppeteer = require('puppeteer');\n(async () => {\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\nconst watchDog = page.waitForFunction('window.innerWidth < 100');\nawait page.setViewport({ width: 50, height: 50 });\nawait watchDog;\nawait browser.close();\n})();\n\n")),(0,o.kt)("p",null,"To pass arguments from node.js to the predicate of ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForFunction")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const selector = '.foo';\nawait page.waitForFunction(\n(selector) => !!document.querySelector(selector),\n{},\nselector\n);\n\n")),(0,o.kt)("p",null,"The predicate of ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForFunction")," can be asynchronous too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const username = 'github-username';\nawait page.waitForFunction(\nasync (username) => {\nconst githubResponse = await fetch(\n `https://api.github.com/users/${username}`\n);\nconst githubUser = await githubResponse.json();\n// show the avatar\nconst img = document.createElement('img');\nimg.src = githubUser.avatar_url;\n// wait 3 seconds\nawait new Promise((resolve, reject) => setTimeout(resolve, 3000));\nimg.remove();\n},\n{},\nusername\n);\n\n")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"waitForFunction(pageFunction: Function | string, options?: {\n        timeout?: number;\n        polling?: string | number;\n    }, ...args: SerializableOrJSHandle[]): Promise<JSHandle>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,o.kt)("td",{parentName:"tr",align:null},"Function ","|"," string"),(0,o.kt)("td",{parentName:"tr",align:null},"Function to be evaluated in browser context")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},"{ timeout?: number; polling?: string ","|"," number; }"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional waiting parameters")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"args"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),(0,o.kt)("td",{parentName:"tr",align:null},"Arguments to pass to ",(0,o.kt)("code",null,"pageFunction"))))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.jshandle"},"JSHandle"),">"),(0,o.kt)("p",null,"Promise which resolves when the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a truthy value. It resolves to a JSHandle of the truthy value."),(0,o.kt)("p",null,"The optional waiting parameter can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Polling"),": An interval at which the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction")," is executed, defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"raf"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"polling")," is a number, then it is treated as an interval in milliseconds at which the function would be executed. If polling is a string, then it can be one of the following values:",(0,o.kt)("br",null)," - ",(0,o.kt)("inlineCode",{parentName:"p"},"raf"),": to constantly execute ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," callback. This is the tightest polling mode which is suitable to observe styling changes.",(0,o.kt)("br",null)," - ",(0,o.kt)("inlineCode",{parentName:"p"},"mutation"),": to execute pageFunction on every DOM mutation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"timeout"),": maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.page.setdefaulttimeout"},"page.setDefaultTimeout(timeout)")," method."))))}m.isMDXComponent=!0}}]);