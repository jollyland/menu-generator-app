(function(){"use strict";var t={1352:function(t,e,s){var i=s(8935),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("NavBar"),s("MenuGenerator",{ref:"menuGen"})],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar"},[t._v(" nav ")])},l=[],o={name:"NavBar"},c=o,u=s(1001),d=(0,u.Z)(c,r,l,!1,null,"6fa4c54b",null),v=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"generator flex-col"},[s("div",{staticClass:"canvas",style:t.canvasStyle,attrs:{id:"canvas"}},t._l(t.items,(function(e,i){return s("div",{key:i,staticClass:"good"},[s("div",{staticClass:"good__tags flex-col"},t._l(t.items[i].tags,(function(e,a){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.items[i].tags[a],expression:"items[index].tags[tagIndex]"}],key:a},[t._v(t._s(t.tags[a]))])})),0),s("img",{attrs:{src:e.imgUrl,alt:"img"}}),s("div",{staticClass:"good__text"},[s("div",{},[t._v(t._s(t.items[i].name))]),s("div",{},[t._v(t._s(t.items[i].subTitle))]),s("pre",{},[t._v(t._s(t.items[i].content))])])])})),0),s("div",{staticClass:"edit",attrs:{id:"edit-panel"}},[s("span",{staticClass:"material-icons toggle-icon"},[t._v("drag_handle")]),s("div",{staticClass:"tabs"},[s("div",{staticClass:"tab tab--general tab__active",on:{click:function(e){return t.showEdit("general")}}},[t._v("畫布設定")]),s("div",{staticClass:"tab tab--list",on:{click:function(e){return t.showEdit("list")}}},[t._v("商品詳細")]),s("div",{staticClass:"tab tab--output",on:{click:function(e){return t.showEdit("output")}}},[t._v("輸出")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"general"==t.editState,expression:"editState == 'general'"}],staticClass:"canvasSetting edit__content flex-col"},[s("div",{staticClass:"edit-title"},[t._v("寬度")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.canvas.width,expression:"canvas.width"}],attrs:{type:"number"},domProps:{value:t.canvas.width},on:{input:function(e){e.target.composing||t.$set(t.canvas,"width",e.target.value)}}}),s("div",{staticClass:"edit-title"},[t._v("底色")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.canvas.bgcolor,expression:"canvas.bgcolor"}],attrs:{type:"color"},domProps:{value:t.canvas.bgcolor},on:{input:function(e){e.target.composing||t.$set(t.canvas,"bgcolor",e.target.value)}}}),s("div",{staticClass:"edit-title"},[t._v("一排幾個")]),s("div",{staticClass:"Btns flex-inline"},[s("div",{staticClass:"Btns__btn",on:{click:function(e){return t.chooseColumn(2)}}},[t._v("2")]),s("div",{staticClass:"Btns__btn Btns__btn--active",on:{click:function(e){return t.chooseColumn(3)}}},[t._v("3")]),s("div",{staticClass:"Btns__btn",on:{click:function(e){return t.chooseColumn(4)}}},[t._v("4")]),s("div",{staticClass:"Btns__btn",on:{click:function(e){return t.chooseColumn(6)}}},[t._v("6")])]),s("div",{staticClass:"edit-title"},[t._v("圖文方向")]),s("div",{staticClass:"Btns flex-inline"},[s("div",{staticClass:"Btns__btn Btns__btn--active",on:{click:function(e){return t.chooseDirec("col")}}},[t._v("向下")]),s("div",{staticClass:"Btns__btn",on:{click:function(e){return t.chooseDirec("row")}}},[t._v("向右")])]),s("div",{staticClass:"tagSetting flex-row"},[s("div",{staticClass:"edit-title"},[t._v("標籤")]),s("div",{staticClass:"tagSetting__tags"},t._l(t.tags,(function(e,i){return s("div",{key:i,staticClass:"tagSetting__tag flex-inline"},[s("div",{staticClass:"tagSetting__tag--text"},[t._v(t._s(e))]),s("span",{staticClass:"material-icons",on:{click:function(e){return t.deleteTag(i)}}},[t._v("close")])])})),0),s("div",{staticClass:"tagSetting__add flex-inline"},[s("input",{attrs:{type:"text",id:"inputCostumeTag"}}),s("button",{on:{click:function(e){return t.addTag()}}},[t._v("新增標籤")])])]),s("div",{staticClass:"edit-title"},[t._v("調整文字")]),t._m(0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:"list"==t.editState,expression:"editState == 'list'"}],staticClass:"itemList edit__content"},[s("div",{staticClass:"edit-title"},[t._v("自Imgur載入商品圖")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.albumUrl,expression:"albumUrl"}],attrs:{type:"text"},domProps:{value:t.albumUrl},on:{input:function(e){e.target.composing||(t.albumUrl=e.target.value)}}}),s("button",{staticStyle:{"margin-bottom":"6px"},on:{click:function(e){return t.loadImgur()}}},[t._v("載入")]),s("div",{staticClass:"edit-title"},[t._v("商品列表")]),t._l(t.items,(function(e,i){return s("div",{key:i,staticClass:"item flex-col"},[s("div",{staticClass:"item__title flex-inline"},[s("div",{staticClass:"item__title--title flex-inline"},[t._v(" "+t._s(t.items[i].name)+" "),s("span",{staticClass:"material-icons delete",on:{click:function(e){return t.deleteItem(i)}}},[t._v("delete")])]),s("span",{staticClass:"material-icons expand"},[t._v("expand_more")])]),s("div",{staticClass:"item__folder flex-row"},[s("div",{staticClass:"item__moveBtn flex-col"},[s("span",{staticClass:"material-icons",staticStyle:{transform:"scaleY(-1)"},on:{click:function(e){return t.swapItem(i,i-1)}}},[t._v("arrow_downward")]),s("span",{staticClass:"material-icons",on:{click:function(e){return t.swapItem(i,i+1)}}},[t._v("arrow_downward")])]),s("div",{staticClass:"inputList flex-col"},[s("label",{attrs:{for:""}},[t._v("圖片網址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.items[i].imgUrl,expression:"items[index].imgUrl"}],attrs:{type:"text"},domProps:{value:t.items[i].imgUrl},on:{input:function(e){e.target.composing||t.$set(t.items[i],"imgUrl",e.target.value)}}}),s("label",{attrs:{for:""}},[t._v("商品名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.items[i].name,expression:"items[index].name"}],attrs:{type:"text"},domProps:{value:t.items[i].name},on:{input:function(e){e.target.composing||t.$set(t.items[i],"name",e.target.value)}}}),s("label",{attrs:{for:""}},[t._v("小標")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.items[i].subTitle,expression:"items[index].subTitle"}],attrs:{type:"text"},domProps:{value:t.items[i].subTitle},on:{input:function(e){e.target.composing||t.$set(t.items[i],"subTitle",e.target.value)}}}),s("label",{attrs:{for:""}},[t._v("內容1")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.items[i].content,expression:"items[index].content"}],domProps:{value:t.items[i].content},on:{input:function(e){e.target.composing||t.$set(t.items[i],"content",e.target.value)}}}),s("label",{attrs:{for:""}},[t._v("標籤")]),s("div",{staticClass:"taglist flex-row"},t._l(t.tags,(function(e,a){return s("div",{key:a,staticClass:"taglist--tag flex-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.items[i].tags[a],expression:"items[index].tags[tagIndex]"}],attrs:{type:"checkbox",id:"tags-"+i+"-"+a,value:"true"},domProps:{checked:Array.isArray(t.items[i].tags[a])?t._i(t.items[i].tags[a],"true")>-1:t.items[i].tags[a]},on:{change:[function(e){var s=t.items[i].tags[a],n=e.target,r=!!n.checked;if(Array.isArray(s)){var l="true",o=t._i(s,l);n.checked?o<0&&t.$set(t.items[i].tags,a,s.concat([l])):o>-1&&t.$set(t.items[i].tags,a,s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.items[i].tags,a,r)},function(e){return t.$forceUpdate()}]}}),s("label",{attrs:{for:"tags-"+i+"-"+a}},[t._v(t._s(e))])])})),0)])])])})),s("div",{staticClass:"item__add flex-inline",on:{click:function(e){return t.addItem()}}},[s("span",{staticClass:"material-icons"},[t._v("add_downward")]),s("div",{staticClass:"item__title--title"},[t._v("新增商品")])])],2),s("div",{directives:[{name:"show",rawName:"v-show",value:"output"==t.editState,expression:"editState == 'output'"}],staticClass:"outputSetting edit__content"},[s("button",{on:{click:function(e){return t.getImage()}}},[t._v(" dw")])])])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"styleSetting flex-col"},[s("div",{staticClass:"styleSetting__title"},[t._v("圖片")]),s("div",{staticClass:"styleSetting__title"},[t._v("標題")]),s("div",{staticClass:"styleSetting__set"},[s("label",{attrs:{for:""}},[t._v("文字大小")]),s("input",{attrs:{type:"number"}}),s("label",{attrs:{for:""}},[t._v("文字顏色")]),s("input",{attrs:{type:"color"}}),s("label",{attrs:{for:""}},[t._v("文字底色")]),s("input",{attrs:{type:"color"}}),s("label",{attrs:{for:""}},[t._v("文字內距")]),s("input",{attrs:{type:"text"}}),s("label",{attrs:{for:""}},[t._v("文字外距")]),s("input",{attrs:{type:"text"}}),s("label",{attrs:{for:""}},[t._v("底色圓角程度")]),s("input",{attrs:{type:"number"}}),s("label",{attrs:{for:""}},[t._v("邊線顏色")]),s("input",{attrs:{type:"color"}}),s("label",{attrs:{for:""}},[t._v("邊線粗細")]),s("input",{attrs:{type:"number"}}),s("label",{attrs:{for:""}},[t._v("邊線線條")]),s("div",{staticClass:"styleSetting__radios flex-inline"},[s("input",{attrs:{type:"radio"}}),s("input",{attrs:{type:"radio"}})]),s("textarea",{attrs:{name:""}})])])}],p=s(4029),_=s.n(p),f=(s(2066),s(8234),s(6986)),h=s.n(f),b={name:"MenuGenerator",data(){return{canvas:{width:1200,bgcolor:"#DFE8E0"},editState:"general",albumUrl:"",album:"",canvasStyle:{width:"1200px"},items:[],tags:["新刊","既刊","R18","NEW","無料","量少"]}},methods:{debug(){this.items=[{imgUrl:"https://i.imgur.com/NljafsO.jpeg",name:"新刊",subTitle:"A5變形/NTD120",content:"很多唧唧的本子"},{imgUrl:"https://i.imgur.com/NljafsO.jpeg",name:"既刊刊",subTitle:"A5變形/NTD150",content:"很多便便的本子"},{imgUrl:"https://i.imgur.com/NljafsO.jpeg",name:"既刊刊",subTitle:"A5變形/NTD150",content:"很多便便的本子"}];var t=this;this.items.forEach((e=>{e.tags=[];for(let s=0;s<t.tags.length;s++)e.tags.push(!1)}))},showEdit(t){this.editState=t},addTag(){_()("#inputCostumeTag").val()&&(this.tags.push(_()("#inputCostumeTag").val()),_()("#inputCostumeTag").val(""))},deleteTag(t){this.tags.splice(t,1),this.items.forEach((e=>{e.tags.splice(t,1)}))},addItem(){this.items.push({id:this.items.length,tags:[]});for(let t=0;t<this.tags.length;t++)this.items[this.items.length-1].tags.push(!1)},deleteItem(t){this.items.splice(t,1)},loadImgur(){var t=this;this.album=this.albumUrl.split("/").pop(),_().ajax({url:"https://api.imgur.com/3/album/"+this.album+"/images",type:"get",dataType:"json",headers:{Authorization:"Client-ID e27e4520784387d"}}).done((function(e){e.data.forEach((e=>{t.items.push({imgUrl:e.link})}))})),t.items.forEach((t=>{t.tags=Array(this.tags.length)}))},swapItem(t,e){e<0||e==this.items.length||1!=this.items.length&&this.items.splice(e,1,this.items.splice(t,1,this.items[e])[0])},chooseColumn(t){var e="span "+12/t;_()(".good").css("grid-column",e)},chooseDirec(t){switch(t){case"row":_()(".good").css("flex-direction","row"),_()(".good__text").css("text-align","left");break;case"col":_()(".good").css("flex-direction","column"),_()(".good__text").css("text-align","center");break}},getImage(){h()(document.getElementById("canvas")).then((function(t){document.body.appendChild(t);var e=t.toDataURL("image/png"),s=e.replace("image/png","image/octet-stream");window.location.href=s}))}},created(){this.debug()},watch:{"canvas.width"(){this.canvasStyle.width=this.canvas.width+"px"},"canvas.bgcolor"(){this.canvasStyle.backgroundColor=this.canvas.bgcolor},tags(){this.items.forEach((t=>{while(t.tags.length<this.tags.length)t.tags.push(!1)}))}},updated(){}};_()((function(){_()("#edit-panel").draggable()}));var x=b,C=(0,u.Z)(x,m,g,!1,null,"94d12004",null),w=C.exports,y={name:"App",components:{NavBar:v,MenuGenerator:w}},k=y,S=(0,u.Z)(k,a,n,!1,null,null,null),T=S.exports;i.Z.config.productionTip=!1,new i.Z({render:t=>t(T)}).$mount("#app")}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,n){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],n=t[u][2];for(var l=!0,o=0;o<i.length;o++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](i[o])}))?i.splice(o--,1):(l=!1,n<r&&(r=n));if(l){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,a,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,n,r=i[0],l=i[1],o=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(o)var u=o(s)}for(e&&e(i);c<r.length;c++)n=r[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},i=self["webpackChunkmenu_generator_app"]=self["webpackChunkmenu_generator_app"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(1352)}));i=s.O(i)})();
//# sourceMappingURL=app.e0c29439.js.map