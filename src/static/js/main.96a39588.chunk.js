(this.webpackJsonpproyecto_final=this.webpackJsonpproyecto_final||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/logo2.3a25116b.png"},39:function(e,a,t){e.exports=t.p+"static/media/Primera.2dbb45c7.png"},40:function(e,a,t){e.exports=t.p+"static/media/Segunda.b9169813.png"},41:function(e,a,t){e.exports=t.p+"static/media/Tercera.acebdd7d.png"},42:function(e,a,t){e.exports=t.p+"static/media/user_image.cc219bc5.png"},43:function(e,a,t){e.exports=t(74)},48:function(e,a,t){},65:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),s=(t(48),t(19)),o=t(3),i=t(4),m=t(8),u=t(7),d=t(9),p=t(14),E=t.n(p),v=(t(65),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).inputHanddler=function(e){e.preventDefault(),t.setState(Object(s.a)({},e.target.name,e.target.value))},t.handdleSubmit=function(e){e.preventDefault();var a={nombrearticulo:t.state.nombrearticulo,descripcion:t.state.descripcion,cantidad:t.state.cantidad,costo:t.state.costo,eliminado:!1};E()({method:"POST",url:"http://localhost:8000/api/articulo/",data:a,responseType:"json"}).then((function(e){console.log(e)}))},t.state={nombrearticulo:"",descripcion:"",cantidad:0,costo:0},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"add-article-form",onSubmit:this.handdleSubmit,method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"articulo-name"},"Nombre del art\xedculo"),r.a.createElement("input",{type:"text",className:"form-control",id:"articulo-name",name:"nombrearticulo",value:this.state.nombrearticulo,onChange:function(a){return e.inputHanddler(a)},placeholder:"Nombre del art\xedculo"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"articulo-price"},"Precio del art\xedculo"),r.a.createElement("input",{type:"text",className:"form-control",id:"articulo-price",name:"costo",value:this.state.costo,onChange:function(a){return e.inputHanddler(a)},placeholder:"Precio del art\xedculo"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"articulo-quantity"},"Cantidad de art\xedculos"),r.a.createElement("input",{type:"text",className:"form-control",id:"articulo-quantity",name:"cantidad",value:this.state.cantidad,onChange:function(a){return e.inputHanddler(a)},placeholder:"Cantidad de art\xedculos"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"articuloDescripcion"},"Descripci\xf3n del art\xedculo"),r.a.createElement("textarea",{className:"form-control no-resize",id:"articuloDescripcion",name:"descripcion",value:this.state.descripcion,onChange:function(a){return e.inputHanddler(a)},rows:"3"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlFile1"},"Example file input"),r.a.createElement("input",{type:"file",multiple:!0,className:"form-control-file",id:"exampleFormControlFile1"})),r.a.createElement("button",{type:"submit",className:"btn btn-light"},"Submit")))}}]),a}(r.a.Component)),h=t(15),b=t(16),f=t(10);var g=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{className:"nav-link",to:"/articulos/inventario"},r.a.createElement(h.a,{icon:b.a})," Inventario")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{className:"nav-link",to:"/articulos/agregar"},r.a.createElement(h.a,{icon:b.c})," Agregar art\xedculo"))))};var N=function(){return r.a.createElement("div",{className:"col-3"},r.a.createElement("nav",{className:"nav flex-column"},r.a.createElement("a",{className:"nav-link active",href:"#","data-toggle":"collapse","data-target":"#adquiridosSubM"},"Art\xedculos adquiridos"),r.a.createElement("ul",{className:"collapse list-unstyled",id:"adquiridosSubM"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Historial de adquiridos"))),r.a.createElement("a",{className:"nav-link active",href:"#","data-toggle":"collapse","data-target":"#ofrecidosSubM"},"Art\xedculos que ofresco"),r.a.createElement("ul",{className:"collapse list-unstyled",id:"ofrecidosSubM"},r.a.createElement("li",null,r.a.createElement(f.b,{to:"/articulos"},"Administrar art\xedculos")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Ver at\xedculos arrendados")))))};var w=function(){return r.a.createElement("div",{className:"row"},r.a.createElement(N,null),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"Administraci\xf3n de art\xedculos")),r.a.createElement("div",{className:"row"},r.a.createElement("h5",null,"Articulos / Agregar")),r.a.createElement(g,null),r.a.createElement(v,null)))},y=function(e){return void 0===e||null===e},C=function(e){return y(e)||""===e||!y(e.length)&&e.length<=0},O=function(e,a){e.then((function(e){y(a)||a(e)}))},j=function(){function e(){Object(o.a)(this,e),this.urlHome="http://localhost:8000/api/articulo/"}return Object(i.a)(e,[{key:"getArticulos",value:function(e){O(E.a.get(this.urlHome),e)}}],[{key:"getInstance",value:function(){return y(e.instance)&&(e.instance=new e),e.instance}}]),e}();j.instance=null;var x=j,k=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={headers:C(e.headers)?[]:e.headers,content:C(e.content)?[]:e.content},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,this.state.headers.map((function(e){return r.a.createElement("th",null,e)})))),r.a.createElement("tbody",null,this.state.content.map((function(e){return r.a.createElement("tr",null,Object.values(e).map((function(e){return r.a.createElement("td",null,e)})))}))))}}]),a}(r.a.Component),S=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={articulos:[],headers:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.getInstance().getArticulos((function(a){var t=a.data;e.setState({articulos:t,headers:["#","Art\xedculo","Descripci\xf3n","Cantidad","Precio"]})}))}},{key:"render",value:function(){return C(this.state.articulos)?r.a.createElement("div",null,"Loading..."):r.a.createElement(k,{headers:this.state.headers,content:this.state.articulos})}}]),a}(r.a.Component);var H=function(){return r.a.createElement("div",{className:"row"},r.a.createElement(N,null),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"Administraci\xf3n de art\xedculos")),r.a.createElement("div",{className:"row"},r.a.createElement("h5",null,"Articulos / Inventario")),r.a.createElement(g,null),r.a.createElement(S,null)))},I=t(39),F=t.n(I),D=t(40),A=t.n(D),P=t(41),T=t.n(P),q=function(e){function a(e){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).call(this,e))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{src:F.a,className:"img-fluid"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{src:A.a,className:"img-fluid"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{src:T.a,className:"img-fluid"})),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))),r.a.createElement("div",{className:"row"},":v"))}}]),a}(r.a.Component),M=function(){function e(){Object(o.a)(this,e),this.url="http://localhost:8000/api/usuario/"}return Object(i.a)(e,[{key:"createUser",value:function(e,a){O(E()({method:"POST",url:this.url,data:e,responseType:"json",headers:{"X-CSRFToken":"8K6vPgM5dPdl77ARyN1rUpxTt7gzay7NLOnnRa2O1vF4YK02Y9O0l0kjBFhchBSo"}}),a)}},{key:"validateUser",value:function(e,a){O(E.a.post(this.url,{user:e}),a)}}],[{key:"getInstance",value:function(){return y(e.instance)&&(e.instance=new e),e.instance}}]),e}();M.instance=null;var L=M,U=function(e){return/^[\w\.]+@\w+\.\w+$/.test(e)},B=function(e){return/^[\w\.#$&%?!\xbf\xa1-]{6,}$/.test(e)},$=function(e,a){return!C(e)&&!C(a)&&e===a},_=function(e,a){return y(a)?!C(e):!C(e)&&a(e)},R=(t(72),t(12)),z=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).inputHanddler=function(e){e.preventDefault();var a=Object(s.a)({},e.target.name,e.target.value);switch(e.target.name){case"alias":a.aliasError=!1;break;case"email":a.mailError=!1;break;case"passwd":a.passwdError=!1;break;case"passwdC":a.passwdCError=!1}t.setState(a)},t.validateForm=function(){return{aliasError:!_(t.state.alias),mailError:!_(t.state.email,U),passwdError:!_(t.state.passwd,B)}},t.handleSubmit=function(e){e.preventDefault();var a=t.validateForm();if(a.passwdCError=!$(t.state.passwd,t.state.passwdC),a.aliasError||a.mailError||a.passwdError||a.passwdCError)t.setState(a);else{var n={alias:t.state.alias,email:t.state.email,passwd:t.state.passwd,eliminado:!1,tipousuario:"http://localhost:8000/api/tipo_usuario/2/"};L.getInstance().createUser(n,(function(){t.setState({redirect:!0})}))}},t.state={alias:"",email:"",passwd:"",passwdC:"",reqiredError:"El campo es requerido",emailError:"Debes ingresar un email v\xe1lido",passwdValidatioError:"Las contrase\xf1as no coinciden",aliasError:!1,mailError:!1,passwdError:!1,passwdCError:!1,redirect:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(R.a,{to:"/"}):r.a.createElement("div",{className:"card regitro-form"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit,method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nombreInput"},"Nombre de usuario"),r.a.createElement("input",{id:"nombreInput",name:"alias",className:"form-control","aria-describedby":"nameHelp",value:this.state.alias,onChange:function(a){return e.inputHanddler(a)},type:"text",placeholder:"Tu nombre de usuario"}),this.state.aliasError?r.a.createElement("small",{id:"nameHelp",className:"form-text text-muted"},this.state.reqiredError):null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"emailInput"},"Correo electr\xf3nico"),r.a.createElement("input",{id:"emailInput",name:"email",className:"form-control","aria-describedby":"emailHelp",value:this.state.email,onChange:function(a){return e.inputHanddler(a)},type:"email",placeholder:"Correo electr\xf3nico"}),this.state.mailError?r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Debes ingresar un email v\xe1lido"):null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"passwdInput"},"Contrase\xf1a"),r.a.createElement("input",{id:"passwdInput",name:"passwd","aria-describedby":"passwdHelp",value:this.state.passwd,onChange:function(a){return e.inputHanddler(a)},className:"form-control",type:"password",placeholder:"Contrase\xf1a"}),this.state.passwdError?r.a.createElement("small",{id:"passwdHelp",className:"form-text text-muted"},"La contrase\xf1a no es v\xe1lida"):null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"passwdCInput"},"Confirma tu contrase\xf1a"),r.a.createElement("input",{value:this.state.passwdC,onChange:function(a){return e.inputHanddler(a)},id:"passwdCInput","aria-describedby":"passwdCHelp",name:"passwdC",className:"form-control",type:"password",placeholder:"Confirma tu contrase\xf1a"}),this.state.passwdCError?r.a.createElement("small",{id:"passwdCHelp",className:"form-text text-muted"},"Las contrase\xf1as no coinciden"):null),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}}]),a}(r.a.Component),J=(t(73),t(42)),K=t.n(J),V=t(20),W=t.n(V),Y=function(){function e(){Object(o.a)(this,e),this.url="http://localhost:8000/api/categoria/"}return Object(i.a)(e,[{key:"getCategorias",value:function(e){O(E.a.get(this.url),e)}}],[{key:"getInstance",value:function(){return y(e.instance)&&(e.instance=new e),e.instance}}]),e}();Y.instance=null;var G=Y,X=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={categorias:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;G.getInstance().getCategorias((function(a){var t=a.data;e.setState({categorias:t})}))}},{key:"render",value:function(){return C(this.state.categorias)?r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},"Loading..."):r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},this.state.categorias.map((function(e){return r.a.createElement("a",{className:"dropdown-item",href:"#"},e.descripcion)})))}}]),a}(r.a.Component);var Q=function(){return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light justify-content-between"},r.a.createElement(f.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{src:W.a,width:"80",height:"60",alt:""})),r.a.createElement("div",{className:"user-account-component row"},r.a.createElement("img",{src:K.a,className:"img-thumbnail user-img"}),r.a.createElement("div",{className:"user-info"},r.a.createElement("div",{className:"row"},r.a.createElement("span",null,"Usuario")),r.a.createElement("div",{className:"row"},r.a.createElement(f.b,{to:"/articulos"},"Cuenta"))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col bg-light"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light justify-content-between"},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement(h.a,{icon:b.b})," Ubicaci\xf3n"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Categor\xedas"),r.a.createElement(X,null)))))),r.a.createElement("div",{className:"col bg-light"},r.a.createElement("ul",{className:"nav float-right navbar-light"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{className:"nav-link",to:"/registrar"},"Crear cuenta")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{className:"nav-link",to:"/ingresar"},"Inicia sesi\xf3n")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},r.a.createElement(h.a,{icon:b.e})," Carrito")))))))};var Z=function(){return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light justify-content-between"},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement("img",{src:W.a,width:"80",height:"60",alt:""})),r.a.createElement("div",null,r.a.createElement(h.a,{icon:b.d})))))))};var ee=function(){return r.a.createElement(f.a,null,r.a.createElement(R.d,null,r.a.createElement(R.b,{path:"/registrar",component:Z}),r.a.createElement(R.b,{path:"/ingresar",component:Z}),r.a.createElement(R.b,{path:"/",component:Q})),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(R.d,null,r.a.createElement(R.b,{path:"/",exact:!0,component:q}),r.a.createElement(R.b,{path:"/articulos",exact:!0,component:H}),r.a.createElement(R.b,{path:"/articulos/inventario",component:H}),r.a.createElement(R.b,{path:"/articulos/agregar",component:w}),r.a.createElement(R.b,{path:"/registrar",component:z}))))};var ae=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2019 Copyright:",r.a.createElement("a",{href:"#"}," Gap team")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),c.a.render(r.a.createElement(ae,null),document.getElementById("footer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.96a39588.chunk.js.map