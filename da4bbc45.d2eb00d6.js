(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(234)),i=n(236),o={id:"card",title:"Card"},l={unversionedId:"card",id:"card",isDocsHomePage:!1,title:"Card",description:"Cards are a great way to display information, usually containing content and",source:"@site/docs/card.md",permalink:"/react-native-elements/docs/next/card",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/card.md",version:"next",sidebar:"docs",previous:{title:"ButtonGroup",permalink:"/react-native-elements/docs/next/button_group"},next:{title:"CheckBox",permalink:"/react-native-elements/docs/next/checkbox"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Child Components",id:"child-components",children:[{value:"Card.Divider",id:"carddivider",children:[]},{value:"Card.Title",id:"cardtitle",children:[]},{value:"Card.Image",id:"cardimage",children:[]},{value:"Card.FeaturedTitle",id:"cardfeaturedtitle",children:[]},{value:"Card.FeaturedSubtitle",id:"cardfeaturedsubtitle",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>wrapperStyle</code>",id:"wrapperstyle",children:[]}]}],d={rightToc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Cards are a great way to display information, usually containing content and\nactions about a single subject. Cards can contain images, buttons, text and\nmore."),Object(c.b)("img",{alt:"Card Component",src:Object(i.a)("img/card.png")}),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const users = [\n {\n    name: 'brynn',\n    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'\n },\n ... // more users here\n]\n\nimport { View, Text, Image } from 'react-native'\nimport { Card, ListItem, Button, Icon } from 'react-native-elements'\n\n// implemented without image with header\n<Card>\n  <Card.Title>CARD WITH DIVIDER</Card.Title>\n  <Card.Divider/>\n  {\n    users.map((u, i) => {\n      return (\n        <View key={i} style={styles.user}>\n          <Image\n            style={styles.image}\n            resizeMode=\"cover\"\n            source={{ uri: u.avatar }}\n          />\n          <Text style={styles.name}>{u.name}</Text>\n        </View>\n      );\n    })\n  }\n</Card>\n\n// implemented without image without header, using ListItem component\n <Card containerStyle={{padding: 0}} >\n  {\n    users.map((u, i) => {\n      return (\n        <ListItem\n          key={i}\n          roundAvatar\n          title={u.name}\n          leftAvatar={{ source: { uri: u.avatar } }}\n        />\n      );\n    })\n  }\n</Card>\n\n\n// implemented with Text and Button as children\n<Card>\n  <Card.Title>HELLO WORLD</Card.Title>\n  <Card.Divider/>\n  <Card.Image source={require('../images/pic2.jpg')}>\n    <Text style={{marginBottom: 10}}>\n      The idea with React Native Elements is more about component structure than actual design.\n    </Text>\n    <Button\n      icon={<Icon name='code' color='#ffffff' />}\n      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}\n      title='VIEW NOW' />\n  </Card.Image>\n</Card>\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#containerstyle"}),Object(c.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#wrapperstyle"}),Object(c.b)("inlineCode",{parentName:"a"},"wrapperStyle")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"child-components"},"Child Components"),Object(c.b)("h3",{id:"carddivider"},"Card.Divider"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Receives all ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-elements/docs/next/divider#props"}),"Divider")," props.")),Object(c.b)("h3",{id:"cardtitle"},"Card.Title"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Receives all ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-elements/docs/next/text#props"}),"Text")," props.")),Object(c.b)("h3",{id:"cardimage"},"Card.Image"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Receives all ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-elements/docs/next/image#props"}),"Image")," props.")),Object(c.b)("h3",{id:"cardfeaturedtitle"},"Card.FeaturedTitle"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Receives all ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-elements/docs/next/text#props"}),"Text")," props.")),Object(c.b)("h3",{id:"cardfeaturedsubtitle"},"Card.FeaturedSubtitle"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Receives all ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-elements/docs/next/text#props"}),"Text")," props.")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("h3",{id:"containerstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(c.b)("p",null,"outer container style (optional)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"wrapperstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"wrapperStyle")),Object(c.b)("p",null,"inner container style (optional)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none")))))}u.isMDXComponent=!0},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,m=u["".concat(i,".").concat(s)]||u[s]||p[s]||c;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},235:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},236:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(235),a=n(237);function c(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,b=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;var d=!n.startsWith(t)?t+n.replace(/^\//,""):n;return b?e+d:d}(c,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},237:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);