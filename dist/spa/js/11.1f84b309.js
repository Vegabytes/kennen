(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"9fa8":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-sm"},[a("q-card",[a("q-table",{class:e.$q.dark.isActive?"text-white":"text-grey-8",attrs:{title:"Pedidos",data:e.data,"hide-header":"grid"===e.mode,columns:e.columns,"row-key":"invoice_id",grid:"grid"==e.mode,filter:e.filter,pagination:e.pagination,"visible-columns":e.visibleColumns},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(t){return[a("q-space"),e.$q.screen.gt.xs?a("div",{staticClass:"col"},[a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"invoice_id",label:"ID"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"reference",label:"Referencia"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"tracking",label:"Tracking"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"email",label:"Email"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"date",label:"Fecha"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"name",label:"Nombre"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"checkress",label:"Dirección"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"zip_code",label:"Código postal"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"city",label:"Ciudad"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"state",label:"Provincia"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"country",label:"País"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"phone",label:"Teléfono"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"product",label:"Producto"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"product_image",label:"Foto"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"product_link",label:"Enlace"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"payment",label:"Pago"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"cost",label:"Precio coste"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"pvp",label:"PVP"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"remove",val:"status",label:"Estado"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}})],1):a("q-select",{staticStyle:{"min-width":"150px"},attrs:{multiple:"",borderless:"",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:e.columns,"option-value":"name"},model:{value:e.visibleColumns,callback:function(t){e.visibleColumns=t},expression:"visibleColumns"}}),a("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Buscar"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),"list"===e.mode?a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}},[a("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s(t.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen")+"\n          ")])],1):e._e(),t.inFullscreen?e._e():a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"grid"===e.mode?"list":"grid_view"},on:{click:function(t){e.mode="grid"===e.mode?"list":"grid",e.separator="grid"===e.mode?"none":"horizontal"}}},[a("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s("grid"===e.mode?"List":"Grid")+"\n          ")])],1),a("q-btn",{staticClass:"float-right",attrs:{flat:"",dense:"",icon:"download",color:e.$q.dark.isActive?"white":"grey-8"},on:{click:e.exportTable}},[a("q-tooltip",[e._v("Exportar a CSV")])],1)]}},{key:"body",fn:function(t){return[a("q-tr",{class:t.row.incidences&&"bg-grey-5",attrs:{props:t}},[a("q-td",{key:"invoice_id",staticStyle:{"text-align":"center"},attrs:{props:t}},[a("q-btn",{attrs:{size:"sm",color:"black",outline:"",flat:"",icon:t.expand?"remove":"add"},on:{click:function(e){t.expand=!t.expand}}}),e._v("\n            "+e._s(t.row.invoice_id)+"\n          ")],1),a("q-td",{key:"reference",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v("\n            "+e._s(t.row.reference)+"\n          ")]),a("q-td",{key:"tracking",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v("\n            "+e._s(t.row.tracking)+"\n          ")]),a("q-td",{key:"email",staticStyle:{"text-align":"center"},attrs:{props:t}},[a("div",{staticClass:"text-pre-wrap"},[e._v(e._s(t.row.email))])]),a("q-td",{key:"date",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v("\n            "+e._s(t.row.date)+"\n          ")]),a("q-td",{key:"name",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v("\n            "+e._s(t.row.name)+"\n          ")]),a("q-td",{key:"address",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.address))]),a("q-td",{key:"zip_code",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.zip_code))]),a("q-td",{key:"city",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.city))]),a("q-td",{key:"state",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.state))]),a("q-td",{key:"country",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.country))]),a("q-td",{key:"phone",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.phone))]),a("q-td",{key:"product",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.product))]),a("q-td",{key:"product_image",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.product_image))]),a("q-td",{key:"product_link",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.product_link))]),a("q-td",{key:"payment",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.payment))]),a("q-td",{key:"cost",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v("\n            "+e._s(t.row.cost)+"€\n            "),a("q-popup-edit",{attrs:{title:"Precio de coste",buttons:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("q-input",{attrs:{type:"text",dense:"",autofocus:"",hint:"Haz click para cerrar"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"scope.value"}})]}}],null,!0),model:{value:t.row.cost,callback:function(a){e.$set(t.row,"cost",a)},expression:"props.row.cost"}})],1),a("q-td",{key:"pvp",staticStyle:{"text-align":"center"},attrs:{props:t}},[e._v(e._s(t.row.pvp))]),a("q-td",{key:"status",staticStyle:{"text-align":"center"},attrs:{props:t}},[a("q-chip",{staticClass:"text-weight-bolder",class:t.row.color,staticStyle:{padding:"1rem 0.7rem","border-radius":"2rem","font-size":"0.8rem"},attrs:{"text-color":"white",dense:"",square:""}},[e._v(e._s(t.row.status)+"\n            ")])],1),a("q-td",{key:"incidences",staticStyle:{"text-align":"center"},attrs:{props:t}},[t.row.incidences?e._e():a("q-btn",{attrs:{flat:"",dense:"",icon:"notification_important"}},[a("q-tooltip",[e._v("Añadir incidencia")])],1),e._v("\n            "+e._s(t.row.incidences)+"\n            "),a("q-popup-edit",{attrs:{title:"Incidencias",buttons:"",persistent:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("q-input",{attrs:{type:"text",dense:"",autofocus:"",hint:"Haz click para cerrar"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"scope.value"}})]}}],null,!0),model:{value:t.row.incidences,callback:function(a){e.$set(t.row,"incidences",a)},expression:"props.row.incidences"}})],1)],1),a("q-tr",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"props.expand"}],attrs:{props:t}},[a("q-td",{attrs:{colspan:"10%"}},[a("div",{staticClass:"text-left"},[e._v(e._s(t.row.incidences?t.row.incidences:"Añadir incidencia")+".")]),a("q-popup-edit",{attrs:{title:"Incidencias",buttons:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("q-input",{attrs:{type:"text",dense:"",autofocus:"",hint:"Haz click para cerrar"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"scope.value"}})]}}],null,!0),model:{value:t.row.incidences,callback:function(a){e.$set(t.row,"incidences",a)},expression:"props.row.incidences"}})],1)],1)]}}])})],1)],1)},n=[],o=(a("28a5"),a("6d67"),a("7f7f"),a("a357"));a("3e8f"),a("b719");function c(e,t){var a=void 0!==t?t(e):e;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),'"'.concat(a,'"')}var l={data:function(){return{filter:"",mode:"list",invoice:{},invoice_dialog:!1,visibleColumns:["invoice_id","reference","tracking","email","date","name","address","zip_code","city","state","country","phone","product","product_image","product_link","payment","cost","pvp","status"],columns:[{name:"invoice_id",align:"center",label:"Id",field:"invoice_id",sortable:!0},{name:"reference",align:"center",label:"Referencia",field:"reference",sortable:!0},{name:"tracking",align:"center",label:"Tracking",field:"tracking",sortable:!0},{name:"email",align:"center",label:"Email",field:"email",sortable:!0},{name:"date",align:"center",label:"Fecha",field:"date",sortable:!0},{name:"name",align:"center",label:"Nombre",field:"name",sortable:!0},{name:"address",align:"center",label:"Dirección",field:"address",sortable:!0},{name:"zip_code",align:"center",label:"Código postal",field:"zip_code",sortable:!0},{name:"city",align:"center",label:"Ciudad",field:"city",sortable:!0},{name:"state",align:"center",label:"Provincia",field:"state",sortable:!0},{name:"country",align:"center",label:"País",field:"country",sortable:!0},{name:"phone",align:"center",label:"Teléfono",field:"phone",sortable:!0},{name:"product",align:"center",label:"Producto",field:"product",sortable:!0},{name:"product_image",align:"center",label:"Foto",field:"product_image",sortable:!0},{name:"product_link",align:"center",label:"Enlace",field:"product_link",sortable:!0},{name:"payment",align:"center",label:"Pago",field:"payment",sortable:!0},{name:"cost",align:"center",label:"Precio coste",field:"cost",sortable:!0},{name:"pvp",align:"center",label:"PVP",field:"pvp",sortable:!0},{name:"status",align:"center",label:"Estado",field:"status",sortable:!0}],data:[{invoice_id:"C001",reference:"XXXXXXXX",tracking:"XXXXXXX",email:"xxxx@gmail.com",date:"09-02-2019",name:"Batman",address:"Gotham",zip_code:"xxx",city:"Gotham City",state:"Gotham state",country:"EEUU",phone:"+xx xxx-xxx-xx",product:"Nike Air Force One Blancas",product_image:"xxx",product_link:"xxx",payment:"Tarjeta Redsys",cost:"50.00",pvp:"67.05€",status:"Pago aceptado",color:"accepted",incidences:"Integer vitae vehicula magna, fermentum dignissim mi euismod"},{invoice_id:"C002",reference:"XXXXXXXX",tracking:"XXXXXXX",email:"xxxx@gmail.com",date:"03-25-2019",name:"Batman",address:"Gotham",zip_code:"xxx",city:"Gotham City",state:"Gotham state",country:"EEUU",phone:"+xx xxx-xxx-xx",product:"Dr. Martens Altas Plataforma Negras",product_image:"xxx",product_link:"xxx",payment:"Tarjeta Redsys",cost:"50.00",pvp:"180,0€",status:"Preparación en curso",color:"progress",incidences:""},{invoice_id:"C003",reference:"XXXXXXXX",tracking:"XXXXXXX",email:"xxxx@gmail.com",date:"03-25-2019",name:"Batman",address:"Gotham",zip_code:"xxx",city:"Gotham City",state:"Gotham state",country:"EEUU",phone:"+xx xxx-xxx-xx",product:"Dr. Martens Altas Plataforma Negras",product_image:"xxx",product_link:"xxx",payment:"Tarjeta Redsys",cost:"50.00",pvp:"59,05€",status:"Enviado",color:"sent",incidences:""},{invoice_id:"C004",reference:"XXXXXXXX",tracking:"XXXXXXX",email:"xxxx@gmail.com",date:"03-25-2019",name:"Batman",address:"Gotham",zip_code:"xxx",city:"Gotham City",state:"Gotham state",country:"EEUU",phone:"+xx xxx-xxx-xx",product:"Dr. Martens Altas Plataforma Negras",product_image:"xxx",product_link:"xxx",payment:"Tarjeta Redsys",cost:"50.00",pvp:"87,05€",status:"En tránsito",color:"transit",incidences:"bla bla"},{invoice_id:"C005",reference:"XXXXXXXX",tracking:"XXXXXXX",email:"xxxx@gmail.com",date:"03-25-2019",name:"Batman",address:"Gotham",zip_code:"xxx",city:"Gotham City",state:"Gotham state",country:"EEUU",phone:"+xx xxx-xxx-xx",product:"Dr. Martens Altas Plataforma Negras",product_image:"xxx",product_link:"xxx",payment:"Tarjeta Redsys",cost:"50.00",pvp:"87,05€",status:"En reparto",color:"indelivery",incidences:"bla bla"},{invoice_id:"C006",reference:"XXXXXXXX",tracking:"XXXXXXX",email:"xxxx@gmail.com",date:"03-25-2019",name:"Batman",address:"Gotham",zip_code:"xxx",city:"Gotham City",state:"Gotham state",country:"EEUU",phone:"+xx xxx-xxx-xx",product:"Dr. Martens Altas Plataforma Negras",product_image:"xxx",product_link:"xxx",payment:"Tarjeta Redsys",cost:"50.00",pvp:"87,05€",status:"Entregado",color:"delivered",incidences:"bla bla"},{invoice_id:"C007",reference:"XXXXXXXX",tracking:"XXXXXXX",email:"xxxx@gmail.com",date:"03-25-2019",name:"Batman",address:"Gotham",zip_code:"xxx",city:"Gotham City",state:"Gotham state",country:"EEUU",phone:"+xx xxx-xxx-xx",product:"Dr. Martens Altas Plataforma Negras",product_image:"xxx",product_link:"xxx",payment:"Tarjeta Redsys",cost:"50.00",pvp:"87,05€",status:"Recogida",color:"pickup",incidences:"bla bla"},{invoice_id:"C008",reference:"XXXXXXXX",tracking:"XXXXXXX",email:"xxxx@gmail.com",date:"03-25-2019",name:"Batman",address:"Gotham",zip_code:"xxx",city:"Gotham City",state:"Gotham state",country:"EEUU",phone:"+xx xxx-xxx-xx",product:"Dr. Martens Altas Plataforma Negras",product_image:"xxx",product_link:"xxx",payment:"Tarjeta Redsys",cost:"50.00",pvp:"87,05€",status:"Cancelado",color:"cancelled",incidences:"bla bla"},{invoice_id:"C009",reference:"XXXXXXXX",tracking:"XXXXXXX",email:"xxxx@gmail.com",date:"03-25-2019",name:"Batman",address:"Gotham",zip_code:"xxx",city:"Gotham City",state:"Gotham state",country:"EEUU",phone:"+xx xxx-xxx-xx",product:"Dr. Martens Altas Plataforma Negras",product_image:"xxx",product_link:"xxx",payment:"Tarjeta Redsys",cost:"50.00",pvp:"87,05€",status:"Reembolsado",color:"refunded",incidences:"bla bla"}],pagination:{rowsPerPage:10}}},methods:{exportTable:function(){var e=this,t=[this.columns.map((function(e){return c(e.label)}))].concat(this.data.map((function(t){return e.columns.map((function(e){return c("function"===typeof e.field?e.field(t):t[void 0===e.field?e.name:e.field],e.format)})).join(",")}))).join("\r\n"),a=Object(o["a"])("invoices.csv",t,"text/csv");!0!==a&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}},computed:{hasIncidence:function(){return{active:this.isActive&&!this.error,"text-danger":this.error&&"fatal"===this.error.type}}}},s=l,r=(a("ceff"),a("2877")),d=a("9989"),u=a("f09f"),p=a("eaac"),m=a("2c91"),x=a("9564"),v=a("ddd8"),b=a("27f9"),g=a("0016"),k=a("9c40"),f=a("05c0"),X=a("bd08"),h=a("db86"),y=a("42a1"),_=a("b047"),C=a("7f67"),q=a("eebe"),w=a.n(q),E=Object(r["a"])(s,i,n,!1,null,"c7d158c2",null);t["default"]=E.exports;w()(E,"components",{QPage:d["a"],QCard:u["a"],QTable:p["a"],QSpace:m["a"],QToggle:x["a"],QSelect:v["a"],QInput:b["a"],QIcon:g["a"],QBtn:k["a"],QTooltip:f["a"],QTr:X["a"],QTd:h["a"],QPopupEdit:y["a"],QChip:_["a"]}),w()(E,"directives",{ClosePopup:C["a"]})},ceff:function(e,t,a){"use strict";var i=a("dc4d"),n=a.n(i);n.a},dc4d:function(e,t,a){}}]);