(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){e.exports=a(307)},153:function(e,t,a){},307:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(135),c=a.n(l),o=a(311),u=a(11),i=(a(153),a(20)),m=a(21),s=a(24),d=a(22),p=a(26),h=a(25),E=a(312),f=a(314),v=a(137),b=a.n(v).a.initializeApp({apiKey:"AIzaSyC424KdZuA9ZOOMqG1YD39q-8izXcbh5uE",authDomain:"examenfinal-c19e8.firebaseapp.com",databaseURL:"https://examenfinal-c19e8.firebaseio.com",projectId:"examenfinal-c19e8",storageBucket:"examenfinal-c19e8.appspot.com",messagingSenderId:"149344965015"}),g=a(313),y=a(142);function O(e){return r.a.createElement("button",{onClick:function(){return e.addToCart(e.product)}},"Add to cart (",e.cartItem&&e.cartItem.quantity||0,")")}function C(e){return r.a.createElement("button",{onClick:function(){return e.removeFromCart(e.cartItem)}},"Remove")}function j(e){return r.a.createElement("div",{className:"product-list-item"},r.a.createElement("h3",null,e.product.name),r.a.createElement("img",{height:100,title:e.product.name,src:e.product.image}),r.a.createElement("div",null,e.product.description),r.a.createElement("div",null,"$",e.product.price),r.a.createElement("div",null,r.a.createElement(O,{cartItem:e.cartItem,product:e.product,addToCart:e.addToCart}),e.cartItem?r.a.createElement(C,{cartItem:e.cartItem,product:e.product,removeFromCart:e.removeFromCart}):null))}var k=a(41),w=a(138),L=a.n(w);a(208).polyfill();var I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.loadProducts;b.firestore().collection("Productos").get().then(function(t){var a=new Array;t.forEach(function(e){a.push(e.data()),console.log(e.id," => ",e.data())}),console.log("y->",a),e(a)})}},{key:"render",value:function(){var e=this.props,t=e.addToCart,a=e.removeFromCart,n=e.products,l=e.cart;return r.a.createElement("div",{className:"product-listing"},n.map(function(e){return r.a.createElement(j,{product:e,addToCart:t,removeFromCart:a,cartItem:l.filter(function(t){return t.id===e.id})[0]})}))}}]),t}(r.a.Component);var S=Object(u.b)(function(e){return{cart:e.cart,products:e.products}},function(e){return{loadProducts:function(t){e({type:"LOAD",payload:t}),console.log("aaa",t)},addToCart:function(t){e({type:"ADD",payload:t})},removeFromCart:function(t){e({type:"REMOVE",payload:t})}}})(I);function x(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Homepage"),r.a.createElement(S,null))}var A=function(e){return e.sort(function(e,t){return e.id<t.id})};var D=Object(u.b)(function(e){return{cart:e.cart}},function(e){return{addToCart:function(t){e({type:"ADD",payload:t})},removeFromCart:function(t){e({type:"REMOVE",payload:t})},removeAllFromCart:function(t){e({type:"REMOVE_ALL",payload:t})}}})(function(e){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null),r.a.createElement("th",null))),r.a.createElement("tbody",null,A(e.cart).map(function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.quantity),r.a.createElement("td",null,t.price*t.quantity),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(a){return e.addToCart(t)}},"+"),r.a.createElement("button",{onClick:function(a){return e.removeFromCart(t)}},"-")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(a){return e.removeAllFromCart(t)}},"Remove from cart")))})))});function R(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"My Cart"),r.a.createElement(D,null))}var q=a(309);function N(e){var t=e.handleSubmit;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Submit order"))))}var _=N=Object(q.a)({form:"checkout"})(N);var T=Object(u.b)(function(e){return{cart:e.cart}})(function(e){return e.cart,r.a.createElement("div",null,r.a.createElement("div",{style:{border:"1px solid black"}},r.a.createElement(D,null)),r.a.createElement(_,{onSubmit:function(e){console.log("aaaa")}}))});function F(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Checkout"),r.a.createElement(T,null))}var M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={order:null},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(e,t,a){var n="get"===e.toLowerCase()?{}:{body:JSON.stringify(a)};return L()(t,Object(k.a)({method:e,headers:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},credentials:"same-origin"},n)).then(function(e){return e.json()})})("get","https://student-example-api.herokuapp.com/v1/orders/".concat(this.props.id)).then(function(t){e.setState({order:t})})}},{key:"renderOrder",value:function(){var e=this.state.order,t=e.name,a=e.email,n=e.order_items;return r.a.createElement("div",null,r.a.createElement("h3",null,"Order info"),r.a.createElement("div",null,"Name: ",t),r.a.createElement("div",null,"Email: ",a),r.a.createElement("h4",null,"Items"),r.a.createElement("ul",null,n&&n.map(function(e){e.product;var t=e.qty,a=e.product,n=a.name,l=a.image,c=a.price;return r.a.createElement("li",null,r.a.createElement("img",{src:l,width:32}),n,"(",t," @ $",c," = $",parseFloat(t)*parseFloat(c),")")})))}},{key:"render",value:function(){var e=this.state.order;return r.a.createElement("div",null,e?this.renderOrder():"Loading....")}}]),t}(r.a.Component);function P(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"My order"),r.a.createElement(M,{id:e.match.params.id}))}var V=function(){return r.a.createElement(g.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:x}),r.a.createElement(y.a,{exact:!0,path:"/cart",component:R}),r.a.createElement(y.a,{exact:!0,path:"/checkout",component:F}),r.a.createElement(y.a,{path:"/orders/:id",component:P}))},X=a(66),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).login=a.login.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.signup=a.signup.bind(Object(p.a)(a)),a.state={email:"",password:"",isLoginOpen:!0,isRegisterOpen:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"showLoginBox",value:function(){this.setState({isLoginOpen:!0,isRegisterOpen:!1})}},{key:"showRegisterBox",value:function(){this.setState({isRegisterOpen:!0,isLoginOpen:!1})}},{key:"handleChange",value:function(e){this.setState(Object(X.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){e.preventDefault(),b.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(e){}).catch(function(e){console.log(e)})}},{key:"signup",value:function(e){e.preventDefault(),b.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(e){}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",null,"                        Login                      "),r.a.createElement("form",null,r.a.createElement("div",{class:"input-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Email address  "),r.a.createElement("input",{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",className:"login-input",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),r.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{class:"input-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"Password  "),r.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",name:"password",className:"login-input",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",onClick:this.login,className:"login-btn"},"Login"),r.a.createElement("button",{onClick:this.signup,style:{marginLeft:"25px"},className:"login-btn"},"Signup")))}}]),t}(n.Component),B=function(e){var t=e.cart;return r.a.createElement("nav",null,r.a.createElement("ul",{className:"top-menu"},r.a.createElement("li",null,r.a.createElement(E.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/cart"},"Cart (",t.reduce(function(e,t){return e+t.quantity},0),")")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/checkout"},"Check out"))))},U=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={user:null},e.authListener=e.authListener.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"logout",value:function(){b.auth().signOut()}},{key:"authListener",value:function(){var e=this;b.auth().onAuthStateChanged(function(t){console.log(t),t?(e.setState({user:t}),localStorage.setItem("user",t.uid)):(e.setState({user:null}),localStorage.removeItem("user"))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"page-container"},this.state.user?r.a.createElement("div",null,r.a.createElement(B,this.props),r.a.createElement("button",{onClick:this.logout}," Logout "),r.a.createElement(V,null),r.a.createElement("button",{onClick:this.logout}," Logout ")):r.a.createElement(H,null))}}]),t}(n.Component);var W=Object(f.a)(Object(u.b)(function(e){return{cart:e.cart}})(U)),z=a(7),J=a(310),$=a(42),K=function(e,t){return e.filter(function(e){return e.id!==t.id})},Z=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD":return function(e,t){var a=function(e,t){return e.filter(function(e){return e.id===t.id})[0]}(e,t);return[].concat(Object($.a)(K(e,t)),void 0===a?[Object(k.a)({},t,{quantity:1})]:[Object(k.a)({},a,{quantity:a.quantity+1})])}(a,n.payload);case"REMOVE":return e=a,1===(t=n.payload).quantity?Object($.a)(K(e,t)):[].concat(Object($.a)(K(e,t)),[Object(k.a)({},t,{quantity:t.quantity-1})]);case"REMOVE_ALL":return function(e,t){return Object($.a)(K(e,t))}(a,n.payload);default:return a}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD":return t.payload;default:return e}},Q=Object(z.b)({cart:Z,products:G,form:J.a}),Y=Object(z.c)(Q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),ee=r.a.createElement(u.a,{store:Y},r.a.createElement(o.a,null,r.a.createElement(W,null)));c.a.render(ee,document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.aaa68c91.chunk.js.map