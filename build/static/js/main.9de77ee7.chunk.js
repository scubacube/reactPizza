(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{161:function(t,e,c){},478:function(t,e,c){"use strict";c.r(e);var i=c(0),n=c.n(i),a=c(16),s=c.n(a),r=(c(161),c(5)),o=c(152),l=c.n(o),d=c(1),j=function(t){var e=t.onClick,c=t.className,i=t.outline,n=t.children;return Object(d.jsx)("button",{href:"/cart.html",onClick:e,className:l()("button",c,{"button--outline":i}),children:n})},b=c(36);function u(t){var e=t.activeCategory,c=t.onClickCategory,n=t.items,a=Object(i.useState)(!1),s=Object(b.a)(a,2),r=s[0],o=s[1],l=Object(i.useRef)(),j=function(t){(t.path||t.composedPath&&t.composedPath()).includes(l.current)||o(!1)};Object(i.useEffect)((function(){document.body.addEventListener("click",j)}),[]);var u=n.map((function(t,e){return Object(d.jsx)("li",{onClick:function(){return function(t){c(t),o(!1)}(e)},children:t},t)})),h=n.map((function(t,i){return Object(d.jsx)("li",{className:e===i?"active":"",onClick:function(){c(i)},children:t},t)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{ref:l,className:"sortMobile",children:[Object(d.jsxs)("div",{className:"sortMobile__label",children:[Object(d.jsx)("svg",{className:r?"opened":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(d.jsx)("span",{onClick:function(){o(!r)},children:null===e?"all":n[e].valueOf()})]}),r&&Object(d.jsx)("div",{className:"sortMobile__popup",children:Object(d.jsx)("ul",{children:u})})]}),Object(d.jsx)("div",{className:"categories",children:Object(d.jsx)("ul",{children:h})})]})}u.defaultProps={activeCategory:0,items:[]};var h=u;function p(t){var e=t.items,c=t.onClickSortType,n=t.activeSortType,a=Object(i.useState)(!1),s=Object(b.a)(a,2),r=s[0],o=s[1],l=e.find((function(t){return t.type===n})).name,j=Object(i.useRef)(),u=function(t){(t.path||t.composedPath&&t.composedPath()).includes(j.current)||o(!1)};Object(i.useEffect)((function(){document.body.addEventListener("click",u)}),[]);var h=e.map((function(t){return Object(d.jsx)("li",{onClick:function(){return c(t),void o(!1)},children:t.name},t.type)}));return Object(d.jsxs)("div",{ref:j,className:"sort",children:[Object(d.jsxs)("div",{className:"sort__label",children:[Object(d.jsx)("svg",{className:r?"opened":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(d.jsx)("b",{children:"Sort by:"}),Object(d.jsx)("span",{onClick:function(){o(!r)},children:l})]}),r&&Object(d.jsx)("div",{className:"sort__popup",children:Object(d.jsx)("ul",{children:h})})]})}p.defaultProps={items:[]};var O=p,m=c(27),x=c.p+"static/media/pizza-logo.56ac8703.svg",C=c(17);var v=function(){var t=Object(C.c)((function(t){var e=t.cart;return{totalPrice:e.totalPrice,totalCount:e.totalCount}})),e=t.totalPrice,c=t.totalCount;return Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"header__logo",children:[Object(d.jsx)(m.b,{to:"/",children:Object(d.jsx)("img",{width:"38",src:x,alt:"Pizza logo"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"React Pizza"}),Object(d.jsx)("p",{children:"the most delicious pizza in the universe"})]})]}),Object(d.jsx)("div",{className:"header__cart",children:Object(d.jsx)(m.b,{to:"/cart",children:Object(d.jsxs)(j,{className:"button--cart",children:[Object(d.jsxs)("span",{children:[e," K\u010d"]}),Object(d.jsx)("div",{className:"button__delimiter"}),Object(d.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(d.jsx)("span",{children:c})]})})})]})})};function f(t){var e=t.id,c=t.imageUrl,n=t.name,a=t.types,s=t.price,r=t.onClickAddPizza,o=t.count,l=t.sizes,u=Object(i.useState)(l[0]),h=Object(b.a)(u,2),p=h[0],O=h[1],m=Object(i.useState)(a[0]),x=Object(b.a)(m,2),C=x[0],v=x[1];return Object(d.jsxs)("div",{className:"pizza-block",children:[Object(d.jsx)("img",{className:"pizza-block__image",src:c,alt:"Pizza"}),Object(d.jsx)("h4",{className:"pizza-block__title",children:n}),Object(d.jsxs)("div",{className:"pizza-block__selector",children:[Object(d.jsx)("ul",{children:["Thin","Traditional"].map((function(t,e){return Object(d.jsx)("li",{onClick:function(){return function(t){v(t)}(e)},className:C===e?"active":a.includes(e)?"":"disabled",children:t},e)}))}),Object(d.jsx)("ul",{children:l.map((function(t){return Object(d.jsxs)("li",{onClick:function(){O(t)},className:p===t?"active":"",children:[t," \u0441\u043c."]},t)}))})]}),Object(d.jsxs)("div",{className:"pizza-block__bottom",children:[Object(d.jsxs)("div",{className:"pizza-block__price",children:[s," K\u010d"]}),Object(d.jsxs)(j,{onClick:function(){r({id:e,imageUrl:c,name:n,activeType:C,price:s,onClickAddPizza:r,activeSize:p})},className:"button button--outline button--add",outline:!0,children:[Object(d.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(d.jsx)("span",{children:"Add"}),Object(d.jsx)("i",{children:o})]})]})]})}f.defaultProps={types:[],sizes:[],price:0,count:0};var g=f,y=c(154),_=function(){return Object(d.jsxs)(y.a,{speed:2,width:280,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(d.jsx)("circle",{cx:"140",cy:"124",r:"120"}),Object(d.jsx)("rect",{x:"0",y:"288",rx:"4",ry:"4",width:"280",height:"28"}),Object(d.jsx)("rect",{x:"0",y:"328",rx:"4",ry:"4",width:"280",height:"66"}),Object(d.jsx)("rect",{x:"2",y:"404",rx:"6",ry:"6",width:"102",height:"50"}),Object(d.jsx)("rect",{x:"133",y:"401",rx:"17",ry:"17",width:"143",height:"54"})]})};function w(t){var e=t.id,c=t.name,i=(t.type,t.size,t.totalPrice),n=t.totalCount,a=t.onDeletePizza,s=t.minusItem,r=t.plusItem;return Object(d.jsxs)("div",{className:"cart__item",children:[Object(d.jsx)("div",{className:"cart__item-img",children:Object(d.jsx)("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})}),Object(d.jsx)("div",{className:"cart__item-info",children:Object(d.jsx)("h3",{children:c})}),Object(d.jsxs)("div",{className:"cart__item-count",children:[Object(d.jsx)("div",{onClick:function(){s(e)},className:"button button--outline button--circle cart__item-count-minus",children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(d.jsx)("b",{children:n}),Object(d.jsx)("div",{onClick:function(){r(e)},className:"button button--outline button--circle cart__item-count-plus",children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(d.jsx)("div",{className:"cart__item-price",children:Object(d.jsx)("b",{children:i})}),Object(d.jsx)("div",{className:"cart__item-remove",onClick:function(){a(e)},children:Object(d.jsx)("div",{className:"button button--outline button--circle",children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})}w.defaultProps={types:0,size:0,price:0,count:0};var k=w,L=c.p+"static/media/empty-cart.db905d1f.png";var z=function(){var t=Object(C.b)(),e=Object(C.c)((function(t){return t.cart})),c=e.items,i=e.totalPrice,n=e.totalCount,a=Object.keys(c).map((function(t){return c[t].items[0]})),s=function(e){window.confirm("Are you sure?")&&t(function(t){return{type:"DELETE_PIZZA_CART",payload:t}}(e))},r=function(e){t(function(t){return{type:"MINUS_ITEM",payload:t}}(e))},o=function(e){t(function(t){return{type:"PLUS_ITEM",payload:t}}(e))};return Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("div",{className:"container container--cart",children:n?Object(d.jsxs)("div",{className:"cart",children:[Object(d.jsxs)("div",{className:"cart__top",children:[Object(d.jsxs)("h2",{className:"content__title",children:[Object(d.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Shopping Cart"]}),Object(d.jsxs)("div",{className:"cart__clear",onClick:function(){window.confirm("Are you sure?")&&t({type:"CLEAR_CART"})},children:[Object(d.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(d.jsx)("span",{children:"Clear"})]})]}),Object(d.jsx)("div",{className:"content__items",children:a.map((function(t){return Object(d.jsx)(k,{name:t.name,type:t.activeType,totalCount:c[t.id].items.length,totalPrice:c[t.id].totalPrice,onDeletePizza:s,id:t.id,minusItem:r,plusItem:o,size:t.activeSize},t.id)}))}),Object(d.jsxs)("div",{className:"cart__bottom",children:[Object(d.jsxs)("div",{className:"cart__bottom-details",children:[Object(d.jsxs)("span",{children:[" Total: ",Object(d.jsxs)("b",{children:[n," pc."]})," "]}),Object(d.jsxs)("span",{children:[" Order sum: ",Object(d.jsxs)("b",{children:[i," K\u010d"]})," "]})]}),Object(d.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(d.jsxs)(m.b,{to:"/",className:"button button--outline button--add go-back-btn",children:[Object(d.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(d.jsx)("span",{children:"Back"})]}),Object(d.jsx)("div",{className:"button pay-btn",children:Object(d.jsx)("span",{children:"Pay now"})})]})]})]}):Object(d.jsxs)("div",{className:"cart cart--empty",children:[Object(d.jsxs)("h2",{children:["Cart's empty.",Object(d.jsx)("i",{children:"\ud83d\ude15"})]}),Object(d.jsxs)("p",{children:["Most likely, you haven't ordered a pizza yet.",Object(d.jsx)("br",{}),"To order a pizza, go to the main page."]}),Object(d.jsx)("img",{src:L,alt:"Empty cart"}),Object(d.jsx)(m.b,{to:"/",className:"button button--black",children:Object(d.jsx)("span",{children:"Back"})})]})})})},N=c(4),E=c(91),P=c.n(E),B=function(t){return{type:"SET_LOADED",payload:t}},T=["All","Meat","Vegetarian","Grilled","Spicy","Closed pizza"],A=[{name:"popularity",type:"rating",order:"desc"},{name:"price",type:"price",order:"desc"},{name:"alphabetically",type:"name",order:"asc"}];var M=function(){var t=Object(C.b)(),e=Object(C.c)((function(t){var e=t.pizzas;t.filters;return{items:e.items,isLoading:e.isLoading}})),c=e.items,i=e.isLoading,a=Object(C.c)((function(t){return t.cart.items})),s=Object(C.c)((function(t){return t.filters})),r=s.category,o=s.sortBy,l=n.a.useCallback((function(e){t(function(t){return{type:"SET_CATEGORY",payload:t}}(e))}),[]),j=n.a.useCallback((function(e){t(function(t){return{type:"SET_SORT_BY",payload:t}}(e))}),[]),b=n.a.useCallback((function(e){t(function(t){return{type:"ADD_PIZZA_CART",payload:t}}(e))}),[]);return n.a.useEffect((function(){t(function(t,e){return function(c){c(B(!1)),P.a.get("/pizzas?".concat(0!==t?"category=".concat(t):"","&_sort=").concat(e.type,"&_order=desc")).then((function(t){c(B(!0)),c({type:"SET_PIZZAS",payload:t.data})})).catch((function(t){return console.log(t)}))}}(r,o))}),[r,o]),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"content__top",children:[Object(d.jsx)(h,{activeCategory:r,onClickCategory:l,items:T}),Object(d.jsx)(O,{activeSortType:o.type,items:A,onClickSortType:j})]}),Object(d.jsx)("div",{className:"content__items",children:i?c.map((function(t){return Object(d.jsx)(g,Object(N.a)({onClickAddPizza:b,count:a[t.id]&&a[t.id].items.length},t),t.id)})):Array(10).fill(0).map((function(t,e){return Object(d.jsx)(_,{},e)}))})]})})};var S=function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(v,{}),Object(d.jsx)(r.a,{exact:!0,path:"/",component:M}),Object(d.jsx)(r.a,{path:"/cart",component:z})]})},Z=c(31),V={sortBy:{type:"rating",order:"desc"},category:0},I=(c(479),{items:[],isLoading:!1}),D=c(42),H=c(95),R={items:{},totalPrice:0,totalCount:0},W=function(t){return t.reduce((function(t,e){return e.price+t}),0)},U=Object(Z.c)({filters:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;return"SET_SORT_BY"===e.type?Object(N.a)(Object(N.a)({},t),{},{sortBy:e.payload}):"SET_CATEGORY"===e.type?Object(N.a)(Object(N.a)({},t),{},{category:e.payload}):t},pizzas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_PIZZAS":return Object(N.a)(Object(N.a)({},t),{},{items:e.payload});case"SET_LOADED":return Object(N.a)(Object(N.a)({},t),{},{isLoading:e.payload});default:return t}return t},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_PIZZA_CART":var c=t.items[e.payload.id]?[].concat(Object(H.a)(t.items[e.payload.id].items),[e.payload]):[e.payload],i=Object(N.a)(Object(N.a)({},t.items),{},Object(D.a)({},e.payload.id,{items:c,totalPrice:W(c)})),n=Object.values(i).map((function(t){return t.items})),a=[].concat.apply([],n),s=W(a);return Object(N.a)(Object(N.a)({},t),{},{items:i,totalCount:a.length,totalPrice:s});case"DELETE_PIZZA_CART":var r=Object(N.a)({},t.items),o=r[e.payload].totalPrice,l=r[e.payload].items.length;return delete r[e.payload],Object(N.a)(Object(N.a)({},t),{},{items:r,totalPrice:t.totalPrice-o,totalCount:t.totalCount-l});case"MINUS_ITEM":var d=t.items[e.payload].items,j=d.length>1?t.items[e.payload].items.slice(1):d,b=Object(N.a)(Object(N.a)({},t.items),{},Object(D.a)({},e.payload,{items:j,totalPrice:W(j)})),u=Object.values(b).map((function(t){return t.items})),h=[].concat.apply([],u),p=W(h);return Object(N.a)(Object(N.a)({},t),{},{items:b,totalCount:h.length,totalPrice:p});case"PLUS_ITEM":var O=[].concat(Object(H.a)(t.items[e.payload].items),[t.items[e.payload].items[0]]),m=Object(N.a)(Object(N.a)({},t.items),{},Object(D.a)({},e.payload,{items:O,totalPrice:W(O)})),x=Object.values(m).map((function(t){return t.items})),C=[].concat.apply([],x),v=W(C);return Object(N.a)(Object(N.a)({},t),{},{items:m,totalCount:C.length,totalPrice:v});case"CLEAR_CART":return Object(N.a)(Object(N.a)({},t),{},{items:{},totalCount:0,totalPrice:0});default:return t}return t}}),Y=c(157),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,K=Object(Z.e)(U,G(Object(Z.a)(Y.a)));window.store=K;var J=K;s.a.render(Object(d.jsx)(m.a,{children:Object(d.jsx)(C.a,{store:J,children:Object(d.jsx)(S,{})})}),document.getElementById("root"))}},[[478,1,2]]]);
//# sourceMappingURL=main.9de77ee7.chunk.js.map