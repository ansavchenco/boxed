"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[527],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=s(r),m=a,d=k["".concat(u,".").concat(m)]||k[m]||c[m]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7598:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={title:"Result<Ok, Error>",sidebar_label:"Result"},u=void 0,s={unversionedId:"result",id:"result",title:"Result<Ok, Error>",description:"The Result can replace exception flows.",source:"@site/docs/result.md",sourceDirName:".",slug:"/result",permalink:"/boxed/result",editUrl:"https://github.com/swan-io/boxed/edit/main/docs/docs/result.md",tags:[],version:"current",frontMatter:{title:"Result<Ok, Error>",sidebar_label:"Result"},sidebar:"docs",previous:{title:"Option",permalink:"/boxed/option"},next:{title:"AsyncData",permalink:"/boxed/async-data"}},p={},c=[{value:"Create a Result value",id:"create-a-result-value",level:2},{value:".map(f)",id:"mapf",level:2},{value:".flatMap(f)",id:"flatmapf",level:2},{value:".getWithDefault(defaultValue)",id:"getwithdefaultdefaultvalue",level:2},{value:".isOk()",id:"isok",level:2},{value:".isError()",id:"iserror",level:2},{value:".toOption()",id:"tooption",level:2},{value:".match()",id:"match",level:2},{value:"TS Pattern interop",id:"ts-pattern-interop",level:2}],k={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Result")," can replace exception flows."),(0,l.kt)("p",null,"Exceptions can be tricky to handle: there's nothing in the type system that tracks if an error has been handled, which is error prone, and adds to your mental overhead. ",(0,l.kt)("inlineCode",{parentName:"p"},"Result")," helps as it ",(0,l.kt)("strong",{parentName:"p"},"makes the value hold the success state"),", making it dead-simple to track with a type-system."),(0,l.kt)("p",null,"Just like the ",(0,l.kt)("inlineCode",{parentName:"p"},"Option")," type, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Result")," type is a box that can have two states:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ok(value)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Error(error)"))),(0,l.kt)("h2",{id:"create-a-result-value"},"Create a Result value"),(0,l.kt)("p",null,"To create a result, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Error")," constructors:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Result } from "@swan-io/boxed";\n\nconst ok = Result.Ok(1);\nconst notOk = Result.Error("something happened");\n')),(0,l.kt)("p",null,"You get interop with exceptions and promises:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'// Let\'s say you have some function that throws an error\nconst init = (id: string) => {\n  if (id.length !== 24) {\n    throw new Error();\n  }\n  return new Client({ id });\n};\n\nconst result = Result.fromExecution(() => init(id));\n// Here, result will either be:\n// - Ok(client)\n// - Error(error)\n\n// It works with promises too:\n\nconst value = await Result.fromPromise(() => fetch("/api"));\n// `value` will either be:\n// - Ok(res)\n// - Error(error)\n')),(0,l.kt)("p",null,"The result type provides a few manipulation functions:"),(0,l.kt)("h2",{id:"mapf"},".map(f)"),(0,l.kt)("p",null,"If the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(f(value))"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Ok(2).map((x) => x * 2); // Result.Ok(4)\n")),(0,l.kt)("h2",{id:"flatmapf"},".flatMap(f)"),(0,l.kt)("p",null,"If the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"f(value)"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Error(error)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'Result.Ok(2).flatMap((x) => {\n  if (x > 1) {\n    return Result.Error("some error");\n  } else {\n    return Result.Ok(2);\n  }\n});\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: the returned result must have the same ",(0,l.kt)("inlineCode",{parentName:"p"},"error")," type")),(0,l.kt)("h2",{id:"getwithdefaultdefaultvalue"},".getWithDefault(defaultValue)"),(0,l.kt)("p",null,"If the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultValue"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Ok(2).getWithDefault(1); // 2\nResult.Error(2).getWithDefault(1); // 1\n")),(0,l.kt)("h2",{id:"isok"},".isOk()"),(0,l.kt)("p",null,"Type guard. Checks if the option is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Ok(2).isOk(); // true\nResult.Error(2).isOk(); // false\n")),(0,l.kt)("h2",{id:"iserror"},".isError()"),(0,l.kt)("p",null,"Type guard. Checks if the option is ",(0,l.kt)("inlineCode",{parentName:"p"},"None")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Ok(2).isError(); // false\nResult.Error().isError(); // true\n")),(0,l.kt)("h2",{id:"tooption"},".toOption()"),(0,l.kt)("p",null,"If the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise returns ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Result.Ok(2).toOption(); // Some(2)\nResult.Error(2).toOption(); // None\n")),(0,l.kt)("h2",{id:"match"},".match()"),(0,l.kt)("p",null,"Match the result state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const valueToDisplay = result.match({\n  Ok: (value) => value,\n  Error: (error) => {\n    console.error(error);\n    return "fallback";\n  },\n});\n')),(0,l.kt)("h2",{id:"ts-pattern-interop"},"TS Pattern interop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { match, select } from "ts-pattern";\nimport { Result } from "@swan-io/boxed";\n\nmatch(myResult)\n  .with(Result.pattern.Ok(select()), (value) => console.log(value))\n  .with(Result.pattern.Error(select()), (error) => {\n    console.error(error);\n    return "fallback";\n  })\n  .exhaustive();\n')))}m.isMDXComponent=!0}}]);