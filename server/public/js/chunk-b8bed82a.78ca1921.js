(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8bed82a"],{b547:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-container",[o("EquipoList")],1)},i=[],r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-container",[o("b-row",[o("b-col",[o("h1",[t._v("Listado de Equipos")]),o("hr"),o("router-link",{attrs:{to:"/registrar"}},[o("b-button",{staticClass:"float-right"},[t._v("Registrar Equipo")])],1)],1)],1),o("b-row",[o("b-col",[o("table",{staticClass:"table table-responsive my-3"},[o("thead",[o("tr",[o("th",[t._v("ID")]),o("th",[t._v("Marca")]),o("th",[t._v("Tipo")]),o("th",[t._v("Estado")]),o("th")])]),o("tbody",t._l(t.list,(function(n,e){return o("tr",{key:e},[o("td",[t._v(t._s(n.id))]),o("td",[t._v(t._s(n.marca))]),o("td",[t._v(t._s(n.tipo))]),o("td",[t._v(t._s(n.estado))]),o("td",[o("b-button",{staticClass:"m-1",attrs:{size:"sm",pill:"",variant:"outline-secondary"},on:{click:function(o){return t.editar(n)}}},[o("BIconPencilSquare")],1),o("b-button",{staticClass:"m-1",attrs:{size:"sm",pill:"",variant:"outline-danger"},on:{click:function(o){return t.borrar(n)}}},[o("BIconTrash")],1)],1)])})),0)])])],1)],1)},a=[],c=o("f9f2"),s={name:"EquipoList",data:function(){return{list:[]}},created:function(){var t=this;c["a"].collection("equipos").onSnapshot((function(n){var o=[];n.forEach((function(t){var n=t.id,e=t.data();e.docId=n,o.push(e)})),t.list=o}))},methods:{borrar:function(t){var n=this;n.$swal({title:"¿Seguro que desea eliminar este equipo?",text:"Esta acción es irreversible",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sí, eliminar!"}).then((function(o){o.isConfirmed&&c["a"].collection("equipos").doc(t.docId).delete().then((function(){n.$swal("¡Eliminado!","Se ha eliminado correctamente","success")})).catch((function(t){console.log(t),n.$swal("¡Error!","Ha ocurrido un error","error")}))}))},editar:function(t){this.$router.push("/equipo/".concat(t.docId))}}},u=s,l=(o("ca63"),o("2877")),d=Object(l["a"])(u,r,a,!1,null,"836a4c96",null),f=d.exports,h={components:{EquipoList:f},data:function(){return{}}},b=h,p=Object(l["a"])(b,e,i,!1,null,null,null);n["default"]=p.exports},ca63:function(t,n,o){"use strict";o("f218")},f218:function(t,n,o){}}]);
//# sourceMappingURL=chunk-b8bed82a.78ca1921.js.map