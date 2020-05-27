(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),l=a(3),s=a(1),i=function(){return c.a.createElement("div",{className:"logo"},c.a.createElement(l.b,{to:"/",className:"logo__link"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo__img"})))},u=function(){var e=Object(n.useCallback)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container footer__container"},c.a.createElement(i,null),c.a.createElement("div",{className:"footer__links"},c.a.createElement(l.b,{to:"/",className:"footer__link"},"Github"),c.a.createElement(l.b,{to:"/",className:"footer__link"},"Contacts"),c.a.createElement(l.b,{to:"/",className:"footer__link"},"Rights")),c.a.createElement("div",{className:"footer__top-button-container"},c.a.createElement("p",{className:"footer__paragraph"},"Back to top"),c.a.createElement("button",{type:"button","aria-label":"BackToTop",className:"footer__top-button",onClick:e}))))},m=function(e){var t=e.title,a=e.link,n=e.exact;return c.a.createElement("li",{className:"nav__item"},c.a.createElement(l.c,{to:a,exact:n,className:"nav__link",activeClassName:"nav__link--active"},t))},d=[{title:"Home",link:"/",exact:!0},{title:"Phones",link:"/phones",exact:!1},{title:"Tablets",link:"/tablets",exact:!1},{title:"Accessories",link:"/accessories",exact:!1}],p=function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},d.map((function(e){var t=e.title,a=e.link,n=e.exact;return c.a.createElement(m,{key:t,title:t,link:a,exact:n})}))))},_=function(){return c.a.createElement("div",{className:"favorites"},c.a.createElement(l.b,{to:"/",className:"favorites__button"}))},E=function(){return c.a.createElement("div",{className:"cart"},c.a.createElement(l.b,{to:"/",className:"cart__button"}))},f=function(e){var t=e.inputValue,a=e.searchProducts,n=e.searchReset;return c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",value:t,className:"search__input",placeholder:"Search in products...",onChange:a}),t?c.a.createElement("span",{className:"search__icon search__icon--clear",onClick:n}):c.a.createElement("span",{className:"search__icon"}))},h=a(23),b=a(7),g=a(12),v=a.n(g),N=a(17),k="https://mate-academy.github.io/react_phone-catalog/api/products",y=function(){var e=Object(N.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,".json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var j=function(e,t){var a;return function(){for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];clearTimeout(a),a=setTimeout((function(){e.apply(void 0,c)}),t)}},O=function(){var e=Object(s.f)(),t=Object(s.g)(),a=new URLSearchParams(t.search),c=a.get("query")||"",r=a.get("sortBy"),o=Object(n.useState)(c),l=Object(b.a)(o,2),i=l[0],u=l[1],m=Object(n.useState)([]),d=Object(b.a)(m,2),p=d[0],_=d[1];Object(n.useEffect)((function(){return y().then(_),function(){return u("")}}),[t.pathname]);var E=Object(n.useCallback)(j((function(t){a.set("query",t.toLowerCase()),a.get("query")||a.delete("query"),e.push({search:a.toString()})}),500),[]),f=Object(n.useCallback)((function(e){var t=e.target.value;u(t),E(t)}),[E]),g=Object(n.useMemo)((function(){return p.filter((function(e){return e.name.toLowerCase().includes(c)}))}),[p,c]);return{inputValue:i,searchProducts:f,searchedProducts:g=Object(n.useMemo)((function(){return Object(h.a)(g).sort((function(e,t){switch(r){case"Newest":return e.age-t.age;case"Hot":return t.discount-e.discount;case"Cheapest":return e.price-t.price;default:return 0}}))}),[g,r]),location:t,history:e,search:a,searchReset:function(){u(""),a.get("query")||a.delete("query"),e.push({search:""})}}},w=function(){var e=O(),t=e.inputValue,a=e.searchProducts,n=e.searchReset,r=e.location;return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__flex-wrap"},c.a.createElement("div",{className:"header__logo"},c.a.createElement(i,null)),c.a.createElement("div",{className:"header__nav"},c.a.createElement(p,null))),c.a.createElement("div",{className:"header__flex-wrap"},"/"!==r.pathname&&c.a.createElement(f,{inputValue:t,searchProducts:a,searchReset:n}),c.a.createElement(_,null),c.a.createElement(E,null)))},S=function(e){var t=e.name,a=e.imageUrl,n=e.price,r=e.screen,o=e.capacity,l=e.ram,s=e.discount,i=e.id,u=r.replace(" inches",'"'),m=n*(s/100)+n,d="".concat(parseInt(o||"32000",10)," MB"),p="".concat(parseInt(l||"1000",10)," MB");return c.a.createElement("article",{className:"product"},c.a.createElement("img",{className:"product__image",src:a,alt:t}),c.a.createElement("p",{className:"product__title"},t),c.a.createElement("div",{className:"product__price-container"},c.a.createElement("span",{className:"product__price"},"$",n),s>0&&c.a.createElement("span",{className:"product__discount"},"$",m)),c.a.createElement("div",{className:"product__split-line"}),c.a.createElement("div",{className:"product__details"},c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"Screen"),c.a.createElement("span",{className:"product__details-info"},u)),c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"Capacity"),c.a.createElement("span",{className:"product__details-info"},d)),c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"RAM"),c.a.createElement("span",{className:"product__details-info"},p))),c.a.createElement("div",{className:"product__buttons__container"},c.a.createElement("button",{className:"product__button",type:"button"},"Add to cart"),c.a.createElement("label",{className:"product__button-favorite",htmlFor:"button-favorite-".concat(i)},c.a.createElement("input",{className:"product__button-favorite-input",type:"checkbox",id:"button-favorite-".concat(i)}),c.a.createElement("span",{className:"product__button-favorite-checkmark"}))))},P=function(e){var t=e.products,a=e.position,n=e.animationDuration;return c.a.createElement("div",{className:"slider"},c.a.createElement("div",{className:"slider__list",style:{transform:"translateX(".concat(a,"px)"),transition:"transform ".concat(n,"ms")}},t.map((function(e){return c.a.createElement(S,Object.assign({key:e.id},e))}))))},C=a(22),x=a(4),M=a.n(x),q="left",B="right",T="Items on page",L="Sort by",R=[{option:"Newest"},{option:"Hot"},{option:"Cheapest"}],A=[{option:"All"},{option:"4"},{option:"8"},{option:"16"}],I=function(e){var t=e.handleSlide,a=e.direction,n=e.position,r=e.maxPosition,o=a===q,l=a===B,s=0===n,i=n===r;return c.a.createElement("button",{type:"button","aria-label":"Slide ".concat(a),className:M()(Object(C.a)({slider__button:!0},"slider__button-".concat(a),!0)),onClick:function(){return t(a)},disabled:o&&s||l&&i})},D=function(e){var t=e.title;return c.a.createElement("h2",{className:"section__heading heading"},t)},H=function(e){var t=e.title,a=function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(0),l=Object(b.a)(o,2),s=l[0],i=l[1];Object(n.useEffect)((function(){y().then((function(e){return r(e)}))}),[]);var u=Object(n.useMemo)((function(){return c.filter((function(e){return 0!==e.discount}))}),[c]),m=Object(n.useMemo)((function(){return c.filter((function(e){return e.age<10&&!e.discount}))}),[c]),d=Object(n.useMemo)((function(){switch(e){case"Hot prices":return u;case"Brand new models":return m;default:return[]}}),[e,u,m]),p=1152-288*d.length,_=Object(n.useCallback)((function(e){i("left"===e?s+576>0?0:s+576:s-576<p?p:s-576)}),[s,p,576]);return{currentProducts:d,position:s,step:2,frameSize:4,itemWidth:288,animationDuration:700,handleSlide:_,maxPosition:p}}(t),r=a.currentProducts,o=a.position,l=a.step,s=a.frameSize,i=a.itemWidth,u=a.animationDuration,m=a.handleSlide,d=a.maxPosition;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"section__heading-container"},c.a.createElement(D,{title:t}),c.a.createElement("div",{className:"slider__controls"},c.a.createElement(I,{handleSlide:m,direction:"left",position:o,maxPosition:d}),c.a.createElement(I,{handleSlide:m,direction:"right",position:o,maxPosition:d}))),c.a.createElement(P,{products:r,position:o,step:l,frameSize:s,itemWidth:i,animationDuration:u}))},F=function(e){var t=e.slides,a=e.toMove,n=e.duration;return c.a.createElement("ul",{className:"carousel__list",style:{transform:"translateX(".concat(-a,"px)"),transitionDuration:"".concat(n,"s")}},t.map((function(e){var t=e.id,a=e.name,n=e.src;return c.a.createElement("li",{key:t,className:"carousel__item"},c.a.createElement("img",{className:"carousel__image",src:n,alt:a}))})))},G=function(e){var t=e.slides,a=e.active,n=e.goToSlide;return c.a.createElement("div",{className:"carousel__rectangles"},t.map((function(e,t){return c.a.createElement("button",{key:e.id,type:"button","aria-label":"Got to ".concat(t+1," slide"),onClick:function(){return n(t)},className:M()({carousel__rectangle:!0,"carousel__rectangle--active":a===t})})})))},V=function(e){var t=e.changeSlide,a=e.direction;return c.a.createElement("button",{type:"button",className:"carousel__btn carousel__btn--".concat(a),"aria-label":"Slide ".concat(a),onClick:function(){return t(a)}})},z=[{id:1,name:"phones",src:"./img/showcase-carousel/first.jpg"},{id:2,name:"tablets",src:"./img/showcase-carousel/second.jpg"},{id:3,name:"accessories",src:"./img/showcase-carousel/third.jpg"}],W=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),l=Object(b.a)(o,2),s=l[0],i=l[1],u=z.length-1,m=Object(n.useCallback)((function(e){e===q&&(a<=0?(r(a+1040*u),i(u)):(r(a-1040),i(s-1))),e===B&&(a>=1040*u?(r(0),i(0)):(r(a+1040),i(s+1)))}),[a,1040,s,u]),d=Object(n.useCallback)((function(e){r(e<s?a-1040*(s-e):a+1040*(e-s)),i(e)}),[s,a]);return Object(n.useEffect)((function(){var e=setInterval((function(){return m(B)}),4e3);return function(){return clearInterval(e)}})),c.a.createElement("div",{className:"carousel section__carousel"},c.a.createElement("div",{className:"carousel__container"},c.a.createElement(V,{changeSlide:m,direction:"left"}),c.a.createElement(V,{changeSlide:m,direction:"right"}),c.a.createElement(F,{slides:z,toMove:a,duration:.7}),c.a.createElement(G,{slides:z,active:s,goToSlide:d})))},J=function(){var e=O(),t=e.searchedProducts,a=e.history,c=e.search,r=e.location,o=Object(n.useMemo)((function(){return t.filter((function(e){return"phone"===e.type}))}),[t]),l=Object(n.useMemo)((function(){return t.filter((function(e){return"tablet"===e.type}))}),[t]),s=0,i=t,u=Number(c.get("page"))||1,m=Number(c.get("perPage"))||t.length,d=u*m,p=d-m;"/phones"===r.pathname&&(s=o.length,i=o.slice(p,d)),"/tablets"===r.pathname&&(s=l.length,i=l.slice(p,d));return{currentProducts:i,numberOfProducts:s,changePage:function(e){c.set("page",e.toString()),a.push({search:c.toString()})},queryCondition:function(){return c.get("query")?"result":"model"},perPage:m,page:u,search:c,phones:o,tablets:l,location:r}},U=function(e){var t=e.title,a=J(),n=a.phones,r=a.tablets,o=a.queryCondition,l=0,s=t.toLowerCase();return s.includes("phones")&&(l=n.length),s.includes("tablets")&&(l=r.length),c.a.createElement("p",{className:"products-amount categories__amount"},l," ",o(),1!==l&&"s")},X=function(e){var t=e.title,a=e.link;return c.a.createElement("div",{className:"categories__category"},c.a.createElement(l.b,{to:"/".concat(a),className:"categories__link"},c.a.createElement("div",{className:"categories__photo"},c.a.createElement("img",{className:"categories__image",src:"./img/categories/category-".concat(a,".jpg"),alt:a})),c.a.createElement("h3",{className:"categories__title"},t),c.a.createElement(U,{title:t})))},$=[{title:"Mobile phones",link:"phones"},{title:"Tablets",link:"tablets"},{title:"Accessories",link:"accessories"}],K=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,{title:"Shop by category"}),c.a.createElement("div",{className:"categories"},$.map((function(e){var t=e.title,a=e.link;return c.a.createElement(X,{key:t,title:t,link:a})}))))},Q=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"visually-hidden"},"React Products Catalog"),c.a.createElement("section",{className:"section"},c.a.createElement(W,null)),c.a.createElement("section",{className:"section"},c.a.createElement(H,{title:"Hot prices"})),c.a.createElement("section",{className:"section"},c.a.createElement(K,null)),c.a.createElement("section",{className:"section"},c.a.createElement(H,{title:"Brand new models"})))},Y=function(){var e=J(),t=e.currentProducts,a=e.numberOfProducts;return c.a.createElement(c.a.Fragment,null,a?c.a.createElement("div",{className:"products section__products"},t.map((function(e){return c.a.createElement(S,Object.assign({key:e.id},e))}))):c.a.createElement("p",{className:"section__no-products-info"},"No products with such title...try again."))},Z=function(e){var t=e.isListOpen;return c.a.createElement("span",{className:M()({dropdown__arrow:!0," dropdown__arrow--up":t})})},ee=function(e){var t=e.list,a=e.heading,r=Object(n.useState)(!1),o=Object(b.a)(r,2),l=o[0],s=o[1],i=Object(n.useState)(t[0].option),u=Object(b.a)(i,2),m=u[0],d=u[1],p=Object(n.useCallback)((function(){return s(!1)}),[s]),_=O(),E=_.search,f=_.history;Object(n.useEffect)((function(){l?window.addEventListener("click",p):window.removeEventListener("click",p)}),[l,p]);var h=Object(n.useCallback)((function(e){d(e),a===L&&E.set("sortBy",e),a===T&&E.set("perPage",e),E.delete("page"),f.push({search:E.toString()})}),[f,E,a]);return c.a.createElement("div",{className:"dropdown"},c.a.createElement("p",{className:"dropdown__heading"},a),c.a.createElement("div",{className:"dropdown__wrapper"},c.a.createElement("button",{type:"button",className:"dropdown__header",onClick:function(){return s(!l)}},m,c.a.createElement(Z,{isListOpen:l})),c.a.createElement("ul",{className:M()({dropdown__list:!0,"dropdown__list--is-open":l})},t.map((function(e){var t=e.option;return c.a.createElement("li",{key:t},c.a.createElement("a",{className:M()({"dropdown__list-item":!0,"dropdown__list-item--active":m===t}),onClick:function(){return h(t)}},t))})))))},te=function(e){for(var t=e.total,a=e.perPage,n=e.page,r=e.changePage,o=[],l=1;l<=Math.ceil(t/a);l+=1)o.push(l);return c.a.createElement("div",{className:"pagination section__pagination"},c.a.createElement("button",{type:"button","aria-label":"Go left",className:"pagination__button pagination__button--left",onClick:function(){return r(n-1)},disabled:1===n}),c.a.createElement("ul",{className:"pagination__list"},o.map((function(e){return c.a.createElement("li",{className:"pagination__item",key:e},c.a.createElement("button",{type:"button",onClick:function(){return r(e)},className:M()({pagination__button:!0,"pagination__button--active":n===e})},e))}))),c.a.createElement("button",{type:"button","aria-label":"Go right",className:"pagination__button pagination__button--right",onClick:function(){return r(n+1)},disabled:n===o.length}))},ae=function(){var e=J(),t=e.numberOfProducts,a=e.changePage,n=e.perPage,r=e.page,o=e.search,l=e.location;return c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:M()({section:!0,pt24:"/"!==l.pathname})},!o.get("query")&&c.a.createElement(D,{title:"Mobile phones"}),0!==t&&c.a.createElement(U,{title:"phones"}),!o.get("query")&&c.a.createElement("div",{className:"section__dropdowns"},c.a.createElement(ee,{heading:L,list:R}),c.a.createElement(ee,{heading:T,list:A})),c.a.createElement(Y,null),t>n&&c.a.createElement(te,{total:t,perPage:n,page:r,changePage:a})))},ne=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(w,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(Q,null)),c.a.createElement(s.a,{path:"/phones"},c.a.createElement(ae,null))),c.a.createElement(u,null))};a(35);o.a.render(c.a.createElement(l.a,null,c.a.createElement(ne,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.cccf4d09.chunk.js.map