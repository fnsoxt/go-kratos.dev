(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[841],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=u(t),f=o,m=g["".concat(s,".").concat(f)]||g[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3011:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i={id:"config",title:"\u5e94\u7528\u914d\u7f6e Config",description:"Kratos \u914d\u7f6e\u6e90\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u5e76\u4e14 config \u4f1a\u8fdb\u884c\u5408\u5e76\u6210 map[string]interface{}\uff0c\u7136\u540e\u901a\u8fc7 Scan \u6216\u8005 Value \u83b7\u53d6\u503c\u5185\u5bb9",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c=void 0,s={unversionedId:"component/config",id:"component/config",isDocsHomePage:!1,title:"\u5e94\u7528\u914d\u7f6e Config",description:"Kratos \u914d\u7f6e\u6e90\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u5e76\u4e14 config \u4f1a\u8fdb\u884c\u5408\u5e76\u6210 map[string]interface{}\uff0c\u7136\u540e\u901a\u8fc7 Scan \u6216\u8005 Value \u83b7\u53d6\u503c\u5185\u5bb9",source:"@site/docs/component/config.md",sourceDirName:"component",slug:"/component/config",permalink:"/docs/component/config",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/config.md",version:"current",frontMatter:{id:"config",title:"\u5e94\u7528\u914d\u7f6e Config",description:"Kratos \u914d\u7f6e\u6e90\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u5e76\u4e14 config \u4f1a\u8fdb\u884c\u5408\u5e76\u6210 map[string]interface{}\uff0c\u7136\u540e\u901a\u8fc7 Scan \u6216\u8005 Value \u83b7\u53d6\u503c\u5185\u5bb9",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u9519\u8bef\u5904\u7406 Errors",permalink:"/docs/component/errors"},next:{title:"\u65e5\u5fd7 Logger",permalink:"/docs/component/log"}},u=[{value:"\u901a\u8fc7 proto \u5b9a\u4e49\u914d\u7f6e",id:"\u901a\u8fc7-proto-\u5b9a\u4e49\u914d\u7f6e",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]}],l={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Kratos \u9879\u76ee\u4e2d\uff0c\u914d\u7f6e\u6e90\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u5e76\u4e14 config \u4f1a\u8fdb\u884c\u5408\u5e76\u6210 key/value \u3002\n\u7136\u540e\u7528\u6237\u901a\u8fc7 Scan \u6216\u8005 Value \u83b7\u53d6\u5bf9\u5e94\u952e\u503c\u5185\u5bb9\uff0c\u4e3b\u8981\u529f\u80fd\u7279\u6027:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b9e\u73b0\u4e86\u672c\u5730\u6587\u4ef6\u6570\u636e\u6e90\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6570\u636e\u6e90\u5b9e\u73b0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u70ed\u52a0\u8f7d\uff0c\u4ee5\u53ca\u901a\u8fc7 Atomic \u65b9\u5f0f\u53d8\u66f4\u5df2\u6709 Value\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u6570\u636e\u6e90\u89e3\u7801\u5b9e\u73b0\u3002")),(0,a.kt)("h3",{id:"\u901a\u8fc7-proto-\u5b9a\u4e49\u914d\u7f6e"},"\u901a\u8fc7 proto \u5b9a\u4e49\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728 Kratos \u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u9ed8\u8ba4\u63a8\u8350\u901a\u8fc7 proto \u8fdb\u884c\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u70b9\u597d\u5904\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5b9a\u4e49\u7edf\u4e00\u7684\u6a21\u677f\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5bf9\u5e94\u7684\u914d\u7f6e\u6821\u9a8c"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u597d\u5730\u7ba1\u7406\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u8de8\u8bed\u8a00\u652f\u6301")),(0,a.kt)("h4",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  http:\n    addr: 0.0.0.0:8000\n    timeout: 1s\n  grpc:\n    addr: 0.0.0.0:9000\n    timeout: 1s\ndata:\n  database:\n    driver: mysql\n    source: root:root@tcp(127.0.0.1:3306)/test\n  redis:\n    addr: 127.0.0.1:6379\n    read_timeout: 0.2s\n    write_timeout: 0.2s\n\n")),(0,a.kt)("h4",{id:"proto-\u58f0\u660e"},"proto \u58f0\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\npackage kratos.api;\n\noption go_package = "github.com/go-kratos/kratos-layout/internal/conf;conf";\n\nimport "google/protobuf/duration.proto";\n\nmessage Bootstrap {\n  Server server = 1;\n  Data data = 2;\n}\n\nmessage Server {\n  message HTTP {\n    string network = 1;\n    string addr = 2;\n    google.protobuf.Duration timeout = 3;\n  }\n  message GRPC {\n    string network = 1;\n    string addr = 2;\n    google.protobuf.Duration timeout = 3;\n  }\n  HTTP http = 1;\n  GRPC grpc = 2;\n}\n\nmessage Data {\n  message Database {\n    string driver = 1;\n    string source = 2;\n  }\n  message Redis {\n    string network = 1;\n    string addr = 2;\n    google.protobuf.Duration read_timeout = 3;\n    google.protobuf.Duration write_timeout = 4;\n  }\n  Database database = 1;\n  Redis redis = 2;\n}\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"\u914d\u7f6e\u6e90\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u5e76\u4e14 config \u4f1a\u8fdb\u884c\u5408\u5e76\u6210 map","[string]","interface{}\uff0c\u7136\u540e\u901a\u8fc7 Scan \u6216\u8005 Value \u83b7\u53d6\u503c\u5185\u5bb9\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'c := config.New(\n    config.WithSource(\n        file.NewSource(path),\n    ),\n    config.WithDecoder(func(kv *config.KeyValue, v map[string]interface{}) error {\n        // kv.Key\n        // kv.Value\n        // kv.Format\n        // \u81ea\u5b9a\u4e49\u5b9e\u73b0\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u89e3\u6790\uff0c\u5982\u679c\u662f\u914d\u7f6e\u4e2d\u5fc3\u6570\u636e\u6e90\u4e5f\u53ef\u4ee5\u6307\u5b9a\u5bf9\u5e94\u7684 format \u8fdb\u884c\u8bc6\u522b\u914d\u7f6e\u7c7b\u578b\n        return yaml.Unmarshal(kv.Value, v)\n    }),\n)\n// \u52a0\u8f7d\u914d\u7f6e\u6e90\uff1a\nif err := c.Load(); err != nil {\n    log.Fatal(err)\n}\n// \u83b7\u53d6\u5bf9\u5e94\u7684\u503c\u5185\u5bb9\uff1a\nname, err := c.Value("service").String()\n\n/*\n  \u901a\u8fc7 proto \u6587\u4ef6\u751f\u6210\u7684\u7ed3\u6784\u4f53\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u58f0\u660e\u7ed3\u6784\u4f53\u8fdb\u884c\u89e3\u6790\u5982\uff1a\n  var v struct {\n      Service string `json:"service"`\n      Version string `json:"version"`\n  }\n*/\nvar bc conf.Bootstrap\nif err := c.Scan(&bc); err != nil {\n    log.Fatal(err)\n}\n// \u76d1\u542c\u67d0\u4e2a\u952e\u503c\u5185\u5bb9\u53d8\u66f4\nc.Watch("service.name", func(key string, value config.Value) {\n    // \u503c\u5185\u5bb9\u53d8\u66f4\n})\n')))}p.isMDXComponent=!0}}]);