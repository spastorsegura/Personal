(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d36":function(t,e,r){"use strict";r.r(e);var a=r("7a23"),n=Object(a["g"])("h1",null,"Registro de Usuarios",-1),s=["disabled"];function o(t,e,r,o,i,c){return Object(a["r"])(),Object(a["f"])("div",null,[n,Object(a["g"])("form",{onSubmit:e[3]||(e[3]=Object(a["G"])((function(){return c.procesarFormulario&&c.procesarFormulario.apply(c,arguments)}),["prevent"]))},[Object(a["F"])(Object(a["g"])("input",{type:"email",placeholder:"email",class:"form-control my-2","onUpdate:modelValue":e[0]||(e[0]=function(t){return i.email=t})},null,512),[[a["C"],i.email,void 0,{trim:!0}]]),Object(a["F"])(Object(a["g"])("input",{type:"password",placeholder:"password",class:"form-control my-2","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.pass1=t})},null,512),[[a["C"],i.pass1,void 0,{trim:!0}]]),Object(a["F"])(Object(a["g"])("input",{type:"password",placeholder:"password",class:"form-control my-2","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.pass2=t})},null,512),[[a["C"],i.pass2,void 0,{trim:!0}]]),Object(a["g"])("button",{type:"submit",class:"btn btn-primary",disabled:c.bloquear},"Registrar",8,s)],32)])}var i=r("5530"),c=(r("caad"),r("2532"),r("5502")),u={data:function(){return{email:"",pass1:"",pass2:""}},computed:{bloquear:function(){return!this.email.includes("@")||!(this.pass1.length>5&&this.pass1===this.pass2)}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["registrarUsuario"])),{},{procesarFormulario:function(){this.registrarUsuario({email:this.email,password:this.pass1}),this.email="",this.pass1="",this.pass2=""}})},l=r("d959"),d=r.n(l);const p=d()(u,[["render",o]]);e["default"]=p},"1a24":function(t,e,r){"use strict";r.r(e);var a=r("7a23");function n(t,e,r,n,s,o){var i=Object(a["w"])("Input");return Object(a["r"])(),Object(a["f"])(a["a"],null,[Object(a["h"])(" Editar "+Object(a["y"])(t.$route.params.id)+" - "+Object(a["y"])(t.tarea)+" ",1),Object(a["g"])("form",{onSubmit:e[0]||(e[0]=Object(a["G"])((function(e){return t.updateTarea(t.tarea)}),["prevent"]))},[Object(a["i"])(i,{tarea:t.tarea},null,8,["tarea"])],32)],64)}var s=r("5530"),o=r("5502"),i=r("1270"),c={components:{Input:i["a"]},computed:Object(s["a"])({},Object(o["d"])(["tarea"])),methods:Object(s["a"])({},Object(o["b"])(["setTarea","updateTarea"])),created:function(){this.setTarea(this.$route.params.id)}},u=r("d959"),l=r.n(u);const d=l()(c,[["render",n]]);e["default"]=d},2532:function(t,e,r){"use strict";var a=r("23e7"),n=r("5a34"),s=r("1d80"),o=r("577e"),i=r("ab13");a({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~o(s(this)).indexOf(o(n(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var a=r("861d"),n=r("c6b6"),s=r("b622"),o=s("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==n(t))}},"4afd":function(t,e,r){"use strict";r.r(e);var a=r("7a23"),n=Object(a["g"])("h1",null,"Ingreso de Usuarios",-1),s=["disabled"];function o(t,e,r,o,i,c){return Object(a["r"])(),Object(a["f"])("div",null,[n,Object(a["g"])("form",{onSubmit:e[2]||(e[2]=Object(a["G"])((function(){return c.procesarFormulario&&c.procesarFormulario.apply(c,arguments)}),["prevent"]))},[Object(a["F"])(Object(a["g"])("input",{type:"email",placeholder:"email",class:"form-control my-2","onUpdate:modelValue":e[0]||(e[0]=function(t){return i.email=t})},null,512),[[a["C"],i.email,void 0,{trim:!0}]]),Object(a["F"])(Object(a["g"])("input",{type:"password",placeholder:"password",class:"form-control my-2","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.pass1=t})},null,512),[[a["C"],i.pass1,void 0,{trim:!0}]]),Object(a["g"])("button",{type:"submit",class:"btn btn-primary",disabled:c.bloquear},"Ingresar",8,s)],32)])}var i=r("5530"),c=(r("caad"),r("2532"),r("5502")),u={data:function(){return{email:"",pass1:""}},computed:{bloquear:function(){return!this.email.includes("@")||!(this.pass1.length>5)}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["ingresoUsuario"])),{},{procesarFormulario:function(){this.ingresoUsuario({email:this.email,password:this.pass1}),this.email="",this.pass1=""}})},l=r("d959"),d=r.n(l);const p=d()(u,[["render",o]]);e["default"]=p},"5a34":function(t,e,r){var a=r("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},ab13:function(t,e,r){var a=r("b622"),n=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(a){}}return!1}},caad:function(t,e,r){"use strict";var a=r("23e7"),n=r("4d64").includes,s=r("44d2");a({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);
//# sourceMappingURL=about.b73c1a9c.js.map