"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81184],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11424:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={},l=void 0,s={unversionedId:"puppeteer.page.waitforselector",id:"version-10.0.0/puppeteer.page.waitforselector",isDocsHomePage:!1,title:"puppeteer.page.waitforselector",description:"Home &gt; puppeteer &gt; Page &gt; waitForSelector",source:"@site/versioned_docs/version-10.0.0/puppeteer.page.waitforselector.md",sourceDirName:".",slug:"/puppeteer.page.waitforselector",permalink:"/puppeteer/docs/10.0.0/puppeteer.page.waitforselector",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.0.0/puppeteer.page.waitforselector.md",version:"10.0.0",frontMatter:{},sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.page.waitforresponse",permalink:"/puppeteer/docs/10.0.0/puppeteer.page.waitforresponse"},next:{title:"puppeteer.page.waitfortimeout",permalink:"/puppeteer/docs/10.0.0/puppeteer.page.waitfortimeout"}},u=[{value:"Page.waitForSelector() method",id:"pagewaitforselector-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page"},"Page")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page.waitforselector"},"waitForSelector")),(0,o.kt)("h2",{id:"pagewaitforselector-method"},"Page.waitForSelector() method"),(0,o.kt)("p",null,"Wait for the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," to appear in page. If at the moment of calling the method the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," already exists, the method will return immediately. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," doesn't appear after the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,o.kt)("p",null,"This method works across navigations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n(async () => {\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\nlet currentURL;\npage\n.waitForSelector('img')\n.then(() => console.log('First URL with image: ' + currentURL));\nfor (currentURL of [\n'https://example.com',\n'https://google.com',\n'https://bbc.com',\n]) {\nawait page.goto(currentURL);\n}\nawait browser.close();\n})();\n\n")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"waitForSelector(selector: string, options?: {\n        visible?: boolean;\n        hidden?: boolean;\n        timeout?: number;\n    }): Promise<ElementHandle | null>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"selector"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"A ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," of an element to wait for")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},"{ visible?: boolean; hidden?: boolean; timeout?: number; }"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional waiting parameters")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.elementhandle"},"ElementHandle")," ","|"," null",">"),(0,o.kt)("p",null,"Promise which resolves when element specified by selector string is added to DOM. Resolves to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if waiting for hidden: ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and selector is not found in DOM."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The optional Parameter in Arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," are :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Visible"),": A boolean wait for element to be present in DOM and to be visible, i.e. to not have ",(0,o.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"hidden"),": ait for element to not be found in the DOM or to be hidden, i.e. have ",(0,o.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"timeout"),": maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method."))))}m.isMDXComponent=!0}}]);