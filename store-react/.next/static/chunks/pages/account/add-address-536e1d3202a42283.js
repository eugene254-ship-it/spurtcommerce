(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5897],{3727:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/add-address",function(){return r(45894)}])},24578:function(e,s,r){"use strict";var n=r(85893),a=(r(67294),r(41664)),t=r.n(a);s.Z=function(e){var s=e.breacrumb,r=e.layout;return(0,n.jsx)("div",{className:"ps-breadcrumb",children:(0,n.jsx)("div",{className:"fullwidth"===r?"ps-container":"container",children:(0,n.jsx)("ul",{className:"breadcrumb",children:s&&s.map((function(e){return e.url?(0,n.jsx)("li",{children:(0,n.jsx)(t(),{href:e.url,children:(0,n.jsx)("a",{children:e.text})})},e.text):(0,n.jsx)("li",{children:e.text},e.text)}))})})})}},89725:function(e,s,r){"use strict";var n=r(26042),a=r(69396),t=r(85893),c=r(67294),i=(r(19666),r(95888)),l=r(1476),d=r(67351),o=r(11163),u=r.n(o),h=r(62759),m=r(13448);s.Z=function(e){var s=e.id,r=e.type,o=e.details,x=(0,c.useState)([]),p=x[0],j=x[1],f=(0,c.useState)(""),v=f[0],N=f[1],g=(0,c.useState)(""),b=g[0],y=g[1],_=(0,c.useState)(""),C=_[0],S=_[1],k=(0,c.useState)(""),w=k[0],Z=k[1],q=(0,c.useState)(""),A=q[0],E=q[1],P=(0,c.useState)(""),F=P[0],H=P[1],I=(0,c.useState)(""),O=I[0],T=I[1],W=(0,c.useState)(""),X=W[0],B=W[1],L=(0,c.useState)(""),M=L[0],R=L[1],V=(0,c.useState)(""),z=V[0],D=V[1],G=(0,c.useState)(""),J=G[0],K=G[1],Q=(0,c.useState)(""),U=Q[0],Y=Q[1],$=[];if(p!==[])for(var ee=p.length,se=0;se<ee;se++)$.push({value:p[se].countryId,label:p[se].name});(0,c.useEffect)((function(){"edit"===r&&(y(o.address1),S(o.address2),Z(o.city),E(o.state),H(o.postcode),N(o.countryId),Y(o.addressType))}),[]),(0,c.useEffect)((function(){re()}),[]);var re=function(){(0,i.j)(j)},ne={control:function(e,s){return(0,a.Z)((0,n.Z)({},e),{backgroundColor:s.isFocused?"#fff":"transparent",color:"#495057",borderRadius:"0",height:"50px",boxShadow:(s.isFocused,0),borderColor:s.isFocused?"#fcb800":"#ced4da","&:hover":{borderColor:"none"}})}},ae=function(){"edit"===r?""!==b&&""!==w&&""!==v&&""!==A&&""!==F?(0,h.g)(s,b,C,w,v,A,F,u(),U):(""===b&&T("*Address is required"),""===w&&B("*City is required"),""===A&&R("*State is required"),""===F&&D("*Postcode is required"),""===v&&K("Country is required")):""!==b&&""!==w&&""!==v&&""!==A&&""!==F&&""!==U?(0,d.S)(b,C,w,v,A,F,u(),U):(""===b&&T("*Address is required"),""===w&&B("*City is required"),""===A&&R("*State is required"),""===F&&D("*Postcode is required"),""===v&&K("Country is required"),""===U&&function(e){m.Z[e]({message:"Address type is required",description:"Enter the address type for shipping purpose",duration:3})}("warning"))};return(0,t.jsxs)("form",{className:"ps-form--edit-address",children:[(0,t.jsx)("div",{className:"ps-form__header",children:(0,t.jsx)("h3",{children:"Billing address"})}),(0,t.jsxs)("div",{className:"ps-form__content",children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{children:["Address line 1 ",(0,t.jsx)("sup",{children:"*"})]}),(0,t.jsx)("input",{type:"text",placeholder:"",className:"form-control",value:b,onChange:function(e){return y(e.target.value)}}),""!==O?(0,t.jsx)("span",{className:"error-span",children:O}):""]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{children:"Address line 2"}),(0,t.jsx)("input",{type:"text",placeholder:"optional",className:"form-control",value:C,onChange:function(e){return S(e.target.value)}})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{children:["City",(0,t.jsx)("sup",{children:"*"})]}),(0,t.jsx)("input",{type:"text",placeholder:"",className:"form-control",value:w,onChange:function(e){return Z(e.target.value)}}),""!==X?(0,t.jsx)("span",{className:"error-span",children:X}):""]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{children:["Country ",(0,t.jsx)("sup",{children:"*"})]}),(0,t.jsx)(l.ZP,{onChange:function(e){return N(e.value)},isSearchable:!0,defaultValue:v,options:$,styles:ne}),""!==J?(0,t.jsx)("span",{className:"error-span",children:J}):""]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{children:["State ",(0,t.jsx)("sup",{children:"*"})]}),(0,t.jsx)("input",{type:"text",placeholder:"",className:"form-control",value:A,onChange:function(e){return E(e.target.value)}}),""!==M?(0,t.jsx)("span",{className:"error-span",children:M}):""]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{children:["Postcode ",(0,t.jsx)("sup",{children:"*"})]}),(0,t.jsx)("input",{type:"number",placeholder:"",className:"form-control",value:F,onChange:function(e){return H(e.target.value)}}),""!==z?(0,t.jsx)("span",{className:"error-span",children:z}):"",(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("input",{type:"radio",id:"home",name:"drone",value:"Home",onClick:function(e){return Y(0)},className:"addr-input",checked:0===U?"checked":""}),(0,t.jsx)("label",{for:"home",className:"address-custom-label",children:"Home"}),(0,t.jsx)("input",{type:"radio",id:"home",name:"drone",onClick:function(e){return Y(1)},value:"Work",className:"addr-input",checked:1===U?"checked":""}),(0,t.jsx)("label",{for:"home",className:"address-custom-label",children:"Work"})]})]}),(0,t.jsx)("div",{className:"form-group submit",children:(0,t.jsx)("button",{className:"ps-btn",type:"button",onClick:function(e){return ae()},children:"Save Address"})})]})]})}},45894:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return x}});var n=r(85893),a=r(67294),t=(r(19666),r(24578)),c=r(51438),i=r(52951),l=r(88029),d=r(5950),o=r(41664),u=r.n(o),h=r(89725),m=function(e){(0,l.Z)(r,e);var s=(0,d.Z)(r);function r(e){var n;return(0,c.Z)(this,r),(n=s.call(this,e)).state={},n}return(0,i.Z)(r,[{key:"render",value:function(){return(0,n.jsx)("section",{className:"ps-my-account ps-page--account",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsx)("div",{className:"ps-section__left",children:(0,n.jsxs)("aside",{className:"ps-widget--account-dashboard",children:[(0,n.jsxs)("div",{className:"ps-widget__header",children:[(0,n.jsx)("img",{src:"/static/img/users/3.jpg"}),(0,n.jsxs)("figure",{children:[(0,n.jsx)("figcaption",{children:"Hello"}),(0,n.jsx)("p",{children:"username@gmail.com"})]})]}),(0,n.jsx)("div",{className:"ps-widget__content",children:(0,n.jsxs)("ul",{children:[[{text:"Account Information",url:"/account/user-information",icon:"icon-user"},{text:"My Orders",url:"/account/orders",icon:"icon-bag2"},{text:"Address",url:"/account/addresses",icon:"icon-map-marker",active:!0},{text:"Wishlist",url:"/account/wishlist",icon:"icon-heart"}].map((function(e){return(0,n.jsx)("li",{className:e.active?"active":"",children:(0,n.jsx)(u(),{href:e.url,children:(0,n.jsxs)("a",{children:[(0,n.jsx)("i",{className:e.icon}),e.text]})})},e.text)})),(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/account/my-account",children:(0,n.jsxs)("a",{children:[(0,n.jsx)("i",{className:"icon-power-switch"}),"Logout"]})})})]})})]})})}),(0,n.jsx)("div",{className:"col-lg-8",children:(0,n.jsx)("div",{className:"ps-page__content",children:(0,n.jsx)(h.Z,{id:"",type:"add",details:""})})})]})})})}}]),r}(a.Component),x=function(){return(0,n.jsx)("div",{className:"site-content",children:(0,n.jsxs)("div",{className:"ps-page--my-account",children:[(0,n.jsx)(t.Z,{breacrumb:[{text:"Account",url:"/"},{text:"Add address"}]}),(0,n.jsx)(m,{})]})})}}},function(e){e.O(0,[1476,9774,2888,179],(function(){return s=3727,e(e.s=s);var s}));var s=e.O();_N_E=s}]);