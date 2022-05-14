(()=>{var t={8257:(t,e,n)=>{var r=n(7583),o=n(9212),i=n(5637),u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},9882:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=n(7583),i=n(9212),u=o.String,a=o.TypeError;t.exports=function(t){if("object"==r(t)||i(t))return t;throw a("Can't set "+u(t)+" as a prototype")}},2569:(t,e,n)=>{var r=n(7583),o=n(794),i=r.String,u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},1601:t=>{t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},3977:(t,e,n)=>{"use strict";var r,o,i,u=n(1601),a=n(8494),c=n(7583),l=n(9212),s=n(794),p=n(2870),f=n(3058),y=n(5637),h=n(57),d=n(3746),v=n(4615).f,_=n(2447),b=n(729),m=n(7496),g=n(3649),S=n(8284),E=c.Int8Array,w=E&&E.prototype,k=c.Uint8ClampedArray,O=k&&k.prototype,C=E&&b(E),j=w&&b(w),x=Object.prototype,P=c.TypeError,T=g("toStringTag"),L=S("TYPED_ARRAY_TAG"),A=S("TYPED_ARRAY_CONSTRUCTOR"),I=u&&!!m&&"Opera"!==f(c.opera),R=!1,B={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},q=function(t){if(!s(t))return!1;var e=f(t);return p(B,e)||p(D,e)};for(r in B)(i=(o=c[r])&&o.prototype)?h(i,A,o):I=!1;for(r in D)(i=(o=c[r])&&o.prototype)&&h(i,A,o);if((!I||!l(C)||C===Function.prototype)&&(C=function(){throw P("Incorrect invocation")},I))for(r in B)c[r]&&m(c[r],C);if((!I||!j||j===x)&&(j=C.prototype,I))for(r in B)c[r]&&m(c[r].prototype,j);if(I&&b(O)!==j&&m(O,j),a&&!p(j,T))for(r in R=!0,v(j,T,{get:function(){return s(this)?this[L]:void 0}}),B)c[r]&&h(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:I,TYPED_ARRAY_CONSTRUCTOR:A,TYPED_ARRAY_TAG:R&&L,aTypedArray:function(t){if(q(t))return t;throw P("Target is not a typed array")},aTypedArrayConstructor:function(t){if(l(t)&&(!m||_(C,t)))return t;throw P(y(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,e,n,r){if(a){if(n)for(var o in B){var i=c[o];if(i&&p(i.prototype,t))try{delete i.prototype[t]}catch(n){try{i.prototype[t]=e}catch(t){}}}j[t]&&!n||d(j,t,n?e:I&&w[t]||e,r)}},exportTypedArrayStaticMethod:function(t,e,n){var r,o;if(a){if(m){if(n)for(r in B)if((o=c[r])&&p(o,t))try{delete o[t]}catch(t){}if(C[t]&&!n)return;try{return d(C,t,n?e:I&&C[t]||e)}catch(t){}}for(r in B)!(o=c[r])||o[t]&&!n||d(o,t,e)}},isView:function(t){if(!s(t))return!1;var e=f(t);return"DataView"===e||p(B,e)||p(D,e)},isTypedArray:q,TypedArray:C,TypedArrayPrototype:j}},9624:(t,e,n)=>{var r=n(7386),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},3058:(t,e,n)=>{var r=n(7583),o=n(8191),i=n(9212),u=n(9624),a=n(3649)("toStringTag"),c=r.Object,l="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=c(t),a))?n:l?u(e):"Object"==(r=u(e))&&i(e.callee)?"Arguments":r}},926:(t,e,n)=>{var r=n(6544);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},57:(t,e,n)=>{var r=n(8494),o=n(4615),i=n(4677);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},4677:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},3746:(t,e,n)=>{var r=n(7583),o=n(9212),i=n(57),u=n(9594),a=n(460);t.exports=function(t,e,n,c){var l=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet,f=c&&void 0!==c.name?c.name:e;return o(n)&&u(n,f,c),t===r?(s?t[e]=n:a(e,n),t):(l?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:i(t,e,n),t)}},8494:(t,e,n)=>{var r=n(6544);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6668:(t,e,n)=>{var r=n(7583),o=n(794),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},6918:(t,e,n)=>{var r=n(5897);t.exports=r("navigator","userAgent")||""},4061:(t,e,n)=>{var r,o,i=n(7583),u=n(6918),a=i.process,c=i.Deno,l=a&&a.versions||c&&c.version,s=l&&l.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},6544:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},8987:(t,e,n)=>{var r=n(6544);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},8262:(t,e,n)=>{var r=n(8987),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},4340:(t,e,n)=>{var r=n(8494),o=n(2870),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},7386:(t,e,n)=>{var r=n(8987),o=Function.prototype,i=o.bind,u=o.call,a=r&&i.bind(u,u);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5897:(t,e,n)=>{var r=n(7583),o=n(9212),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},911:(t,e,n)=>{var r=n(8257);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7583:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=function(t){return t&&t.Math==Math&&t};t.exports=o("object"==("undefined"==typeof globalThis?"undefined":r(globalThis))&&globalThis)||o("object"==("undefined"==typeof window?"undefined":r(window))&&window)||o("object"==("undefined"==typeof self?"undefined":r(self))&&self)||o("object"==(void 0===n.g?"undefined":r(n.g))&&n.g)||function(){return this}()||Function("return this")()},2870:(t,e,n)=>{var r=n(7386),o=n(1324),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},4639:t=>{t.exports={}},275:(t,e,n)=>{var r=n(8494),o=n(6544),i=n(6668);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},9734:(t,e,n)=>{var r=n(7386),o=n(9212),i=n(1314),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},2743:(t,e,n)=>{var r,o,i,u=n(9491),a=n(7583),c=n(7386),l=n(794),s=n(57),p=n(2870),f=n(1314),y=n(9137),h=n(4639),d="Object already initialized",v=a.TypeError,_=a.WeakMap;if(u||f.state){var b=f.state||(f.state=new _),m=c(b.get),g=c(b.has),S=c(b.set);r=function(t,e){if(g(b,t))throw new v(d);return e.facade=t,S(b,t,e),e},o=function(t){return m(b,t)||{}},i=function(t){return g(b,t)}}else{var E=y("state");h[E]=!0,r=function(t,e){if(p(t,E))throw new v(d);return e.facade=t,s(t,E,e),e},o=function(t){return p(t,E)?t[E]:{}},i=function(t){return p(t,E)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!l(e)||(n=o(e)).type!==t)throw v("Incompatible receiver, "+t+" required");return n}}}},9212:t=>{t.exports=function(t){return"function"==typeof t}},794:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=n(9212);t.exports=function(t){return"object"==r(t)?null!==t:o(t)}},6268:t=>{t.exports=!1},5871:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=n(7583),i=n(5897),u=n(9212),a=n(2447),c=n(7786),l=o.Object;t.exports=c?function(t){return"symbol"==r(t)}:function(t){var e=i("Symbol");return u(e)&&a(e.prototype,l(t))}},9594:(t,e,n)=>{var r=n(6544),o=n(9212),i=n(2870),u=n(4615).f,a=n(4340).CONFIGURABLE,c=n(9734),l=n(2743),s=l.enforce,p=l.get,f=!r((function(){return 8!==u((function(){}),"length",{value:8}).length})),y=String(String).split("String"),h=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||a&&t.name!==e)&&u(t,"name",{value:e,configurable:!0}),f&&n&&i(n,"arity")&&t.length!==n.arity&&u(t,"length",{value:n.arity});var r=s(t);return i(r,"source")||(r.source=y.join("string"==typeof e?e:"")),t};Function.prototype.toString=h((function(){return o(this)&&p(this).source||c(this)}),"toString")},8640:(t,e,n)=>{var r=n(4061),o=n(6544);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},9491:(t,e,n)=>{var r=n(7583),o=n(9212),i=n(9734),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},4615:(t,e,n)=>{var r=n(7583),o=n(8494),i=n(275),u=n(7670),a=n(2569),c=n(8734),l=r.TypeError,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor;e.f=o?u?function(t,e,n){if(a(t),e=c(e),a(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=p(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return s(t,e,n)}:s:function(t,e,n){if(a(t),e=c(e),a(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},729:(t,e,n)=>{var r=n(7583),o=n(2870),i=n(9212),u=n(1324),a=n(9137),c=n(926),l=a("IE_PROTO"),s=r.Object,p=s.prototype;t.exports=c?s.getPrototypeOf:function(t){var e=u(t);if(o(e,l))return e[l];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof s?p:null}},2447:(t,e,n)=>{var r=n(7386);t.exports=r({}.isPrototypeOf)},7496:(t,e,n)=>{var r=n(7386),o=n(2569),i=n(9882);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return o(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},6252:(t,e,n)=>{var r=n(7583),o=n(8262),i=n(9212),u=n(794),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!u(r=o(n,t)))return r;if(i(n=t.valueOf)&&!u(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!u(r=o(n,t)))return r;throw a("Can't convert object to primitive value")}},3955:(t,e,n)=>{var r=n(7583).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},460:(t,e,n)=>{var r=n(7583),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9137:(t,e,n)=>{var r=n(7836),o=n(8284),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},1314:(t,e,n)=>{var r=n(7583),o=n(460),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},7836:(t,e,n)=>{var r=n(6268),o=n(1314);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.4",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"})},1324:(t,e,n)=>{var r=n(7583),o=n(3955),i=r.Object;t.exports=function(t){return i(o(t))}},2670:(t,e,n)=>{var r=n(7583),o=n(8262),i=n(794),u=n(5871),a=n(911),c=n(6252),l=n(3649),s=r.TypeError,p=l("toPrimitive");t.exports=function(t,e){if(!i(t)||u(t))return t;var n,r=a(t,p);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||u(n))return n;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},8734:(t,e,n)=>{var r=n(2670),o=n(5871);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},8191:(t,e,n)=>{var r={};r[n(3649)("toStringTag")]="z",t.exports="[object z]"===String(r)},5637:(t,e,n)=>{var r=n(7583).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},8284:(t,e,n)=>{var r=n(7386),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},7786:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=n(8640);t.exports=o&&!Symbol.sham&&"symbol"==r(Symbol.iterator)},7670:(t,e,n)=>{var r=n(8494),o=n(6544);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},3649:(t,e,n)=>{var r=n(7583),o=n(7836),i=n(2870),u=n(8284),a=n(8640),c=n(7786),l=o("wks"),s=r.Symbol,p=s&&s.for,f=c?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(l,t)||!a&&"string"!=typeof l[t]){var e="Symbol."+t;a&&i(s,t)?l[t]=s[t]:l[t]=c&&p?p(e):f(e)}return l[t]}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";var t=document.querySelector(".profile__edit-button"),e=document.querySelector(".profile__add-button"),r=document.querySelector(".profile-avatar__edit-avatar"),o=".popup-edit-profile",i=document.querySelector(".popup__text-input_type_name"),u=document.querySelector(".popup__text-input_type_about"),a=".popup-add-card",c=".popup-edit-avatar",l={likeSelector:".photo-gallery__like-button",deleteSelector:".photo-gallery__delete-button",cardImageSelector:".photo-gallery__image",titleSelector:".photo-gallery__title",likeCounterSelector:".photo-gallery__like-counter"},s={inputSelector:".popup__text-input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"button-inactive",inputErrorClass:"popup__input-text_type_error",errorClass:"popup__input-error_visible"};function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(3977);var f=function(){function t(e,n,r,o,i){var u=e.data,a=e.handleCardClick,c=e.handleDeleteClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateContent=document.querySelector(r).content,this._name=u.name,this._link=u.link,this._likes=u.likes,this._ownerUser=u.owner.name,this._handleCardClick=a,this._handleDeleteClick=c,this._likeSelector=n.likeSelector,this._deleteSelector=n.deleteSelector,this._cardImageSelector=n.cardImageSelector,this._titleSelector=n.titleSelector,this._likeCounterSelector=n.likeCounterSelector,this.handleDelete=this.handleDelete.bind(this),this._userID=o,this._ownerID=u.owner._id,this._cardID=u._id,this._api=i}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return this._templateContent.querySelector(".photo-gallery__item").cloneNode(!0)}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._deleteButtonElement=this._element.querySelector(this._deleteSelector),this._likeButtonElement=this._element.querySelector(this._likeSelector),this._likeCounterElement=this._element.querySelector(this._likeCounterSelector),this._cardImageElement=this._element.querySelector(this._cardImageSelector),this._titleElement=this._element.querySelector(this._titleSelector),this._titleElement.textContent=this._name,this._cardImageElement.src=this._link,this._cardImageElement.alt="Фотография «".concat(this._name,"» загруженная пользователем ").concat(this._ownerUser),this._likeCounterElement.textContent=this._likes.length,this._userID!==this._ownerID&&this._deleteButtonElement.classList.add("photo-gallery__delete-button_disabled"),this._likes.some((function(e){return e._id===t._userID}))&&this._addClassButtonLike(),this._setEventListeners(),this._element}},{key:"_isNotLiked",value:function(){return!this._likeButtonElement.classList.contains("photo-gallery__like-button_active")}},{key:"handleDelete",value:function(){this._element.remove(),this._element=null}},{key:"_handleLike",value:function(){var t=this;this._isNotLiked()?this._api.likeCard(this._cardID).then((function(e){t._likeCounterElement.textContent=e.likes.length,t._likeButtonElement.classList.add("photo-gallery__like-button_active")})).catch((function(t){return console.log(t)})):this._api.dislikeCard(this._cardID).then((function(e){t._likeCounterElement.textContent=e.likes.length,t._likeButtonElement.classList.remove("photo-gallery__like-button_active")})).catch((function(t){return console.log(t)}))}},{key:"_addClassButtonLike",value:function(){this._likeButtonElement.classList.add("photo-gallery__like-button_active")}},{key:"_setEventListeners",value:function(){var t=this;this._deleteButtonElement.addEventListener("click",(function(){return t._handleDeleteClick()})),this._likeButtonElement.addEventListener("click",(function(){return t._handleLike()})),this._cardImageElement.addEventListener("click",(function(){return t._handleCardClick({name:t._name,link:t._link})}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._input=n.inputSelector,this._inputError=n.inputErrorClass,this._error=n.errorClass,this._button=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._formElement=document.querySelector(e),this._inputList=Array.from(this._formElement.querySelectorAll(this._input)),this._buttonElement=this._formElement.querySelector(this._button)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputError),e.classList.add(this._error),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputError),e.classList.remove(this._error),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListenersInputs",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()})),t._toggleButtonState()}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._setEventListenersInputs()}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._containerElement=document.querySelector(n)}var e,n;return e=t,(n=[{key:"render",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._containerElement.prepend(t)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClose",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){t.close()})),this._popupElement.addEventListener("click",(function(e){t._handleOverlayClose(e)}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=E(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function E(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}function k(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popupElement.querySelector(".image-zoom__image"),e._popupCaption=e._popupElement.querySelector(".image-zoom__caption"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;S(O(u.prototype),"open",this).call(this),this._popupImage.src=n,this._popupImage.alt="Фотография загруженная пользователем «".concat(e,"»"),this._popupCaption.textContent=e}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=T(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function T(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}function L(t,e){return L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},L(t,e)}function A(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._popupForm=n._popupElement.querySelector(".popup__container"),n._inputList=n._popupForm.querySelectorAll(".popup__text-input"),n._popupButtonElement=n._popupForm.querySelector(".popup__save-button"),n._popupButtonTextContent=n._popupButtonElement.textContent,n._handleSubmitForm=e,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;P(I(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t._getInputValues())}))}},{key:"close",value:function(){P(I(u.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(t){this._popupButtonElement.textContent=t?"Сохранение...":this._popupButtonTextContent}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=U(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function U(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}function F(t,e){return F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},F(t,e)}function V(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return V(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupForm=e._popupElement.querySelector(".popup__container"),e._popupButtonElement=e._popupForm.querySelector(".popup__save-button"),e._popupButtonTextContent=e._popupButtonElement.textContent,e}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;q(N(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._callBack()}))}},{key:"setSubmitProcessing",value:function(t){this._callBack=t}},{key:"renderLoading",value:function(t){this._popupButtonElement.textContent=t?"Сохранение...":this._popupButtonTextContent}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var M=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(e.name),this._userAbout=document.querySelector(e.about),this._userAvatar=document.querySelector(e.avatar)}var e,n;return e=t,(n=[{key:"getUserValues",value:function(){return this._userData={name:this._userName.textContent,about:this._userAbout.textContent},this._userData}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userAbout.textContent=t.about,this.setUserAvatar(t)}},{key:"setUserAvatar",value:function(t){this._userAvatar.src=t.avatar}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var G=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,n;return e=t,n=[{key:"_errorHandle",value:function(t){return t.ok?t.json():Promise.reject("Ошибка № ".concat(t.status," (").concat(t.ok,")"))}},{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._errorHandle)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._errorHandle)}},{key:"getCardsData",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._errorHandle)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._errorHandle)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._errorHandle)}},{key:"likeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._errorHandle)}},{key:"dislikeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._errorHandle)}},{key:"editAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._errorHandle)}},{key:"getAllData",value:function(){return Promise.all([this.getUserData(),this.getCardsData()])}}],n&&Y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W,$=new G({url:"https://nomoreparties.co/v1/cohort-40",headers:{authorization:"dadcd802-4ad4-4dc6-a2f2-1b872af8377c","Content-Type":"application/json"}}),X=new M({name:".profile__title",about:".profile__subtitle",avatar:".profile-avatar__image"}),K=function(t){var e=new f({data:t,handleCardClick:function(){Z.open(t)},handleDeleteClick:function(){nt.open(),nt.setSubmitProcessing((function(){nt.renderLoading(!0),$.deleteCard(t._id).then((function(){e.handleDelete(),nt.close()})).catch((function(t){return console.log(t)})).finally((function(){return nt.renderLoading(!1)}))}))}},l,".photo-gallery__item-template",W,$);return e.generateCard()},Q=new v({renderer:function(t){var e=K(t);Q.addItem(e)}},".photo-gallery__list");$.getAllData().then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X.setUserInfo(o),W=o._id,Q.render(i)})).catch((function(t){return console.log(t)}));var Z=new C(".image-zoom");Z.setEventListeners();var tt=new R(a,(function(t){tt.renderLoading(!0),$.addCard(t).then((function(t){var e=K(t);Q.addItem(e),tt.close()})).catch((function(t){return console.log(t)})).then((function(){return tt.renderLoading(!1)}))})),et=new R(o,(function(t){et.renderLoading(!0),$.setUserInfo(t).then((function(t){X.setUserInfo(t),et.close()})).catch((function(t){return console.log(t)})).finally((function(){et.renderLoading(!1)}))})),nt=new H(".popup-delete-card"),rt=new R(c,(function(t){rt.renderLoading(!0),$.editAvatar(t).then((function(t){X.setUserAvatar(t),rt.close()})).catch((function(t){return console.log(t)})).finally((function(){return rt.renderLoading(!1)}))}));nt.setEventListeners(),tt.setEventListeners(),et.setEventListeners(),rt.setEventListeners();var ot=new h(o,s),it=new h(a,s),ut=new h(c,s);ot.enableValidation(),it.enableValidation(),ut.enableValidation(),e.addEventListener("click",(function(){it.resetValidation(),tt.open()})),t.addEventListener("click",(function(){var t=X.getUserValues();i.value=t.name,u.value=t.about,ot.resetValidation(),et.open()})),r.addEventListener("click",(function(){ut.resetValidation(),rt.open()}))})()})();