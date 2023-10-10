(function(){"use strict";var e={1465:function(e,o,r){var i=r(9963),n=r(6252);function a(e,o,r,i,a,t){const l=(0,n.up)("VideoAlbum");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(l)])}var t=r(3577);const l={class:"video-container"},s=["onClick"],c={class:"video-thumbnail-container"},d=["src"],u=["onClick"],v={class:"video-duration"},p={key:0,class:"delete-modal"},m={class:"delete-modal-content"},f=(0,n._)("p",{class:"text"},"¿Seguro que quieres eliminar este video?",-1),h={class:"delete-modal-buttons"};function b(e,o,r,i,a,b){const g=(0,n.up)("NavSearch"),w=(0,n.up)("VideoModal");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(g,{onNuevoVideo:i.agregarVideo,videos:i.videos},null,8,["onNuevoVideo","videos"]),(0,n._)("div",null,[(0,n._)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.videos,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,class:"video-item",onClick:o=>i.mostrarModal(e)},[(0,n._)("div",c,[(0,n._)("img",{src:e.thumbnailUrl,alt:"Miniatura del video",class:"video-thumbnail"},null,8,d),(0,n._)("button",{class:"delete-button",onClick:o=>i.abrirConfirmacionEliminar(e.id)},"X",8,u)]),(0,n._)("div",v,(0,t.zw)(e.duration),1)],8,s)))),128))])]),(0,n.Wm)(w,{video:i.videoSeleccionado,onCerrarModal:i.cerrarModal},null,8,["video","onCerrarModal"]),i.showDeleteModal?((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",m,[f,(0,n._)("div",h,[(0,n._)("span",{class:"x-button",onClick:o[0]||(o[0]=(...e)=>i.cerrarModal&&i.cerrarModal(...e))},"X"),(0,n._)("button",{class:"cancelar",onClick:o[1]||(o[1]=(...e)=>i.cancelarEliminacion&&i.cancelarEliminacion(...e))},"Cancelar"),(0,n._)("button",{class:"eliminar",onClick:o[2]||(o[2]=(...e)=>i.confirmarEliminacion&&i.confirmarEliminacion(...e))},"Eliminar")])])])):(0,n.kq)("",!0)])}r(7658);const g={class:"content-bar"},w=(0,n._)("div",{class:"title"},"Añadir nuevo video",-1),y={class:"nav-bar"};function k(e,o,r,a,t,l){return(0,n.wg)(),(0,n.iD)("div",g,[w,(0,n._)("div",y,[(0,n.wy)((0,n._)("input",{class:"nav-input","onUpdate:modelValue":o[0]||(o[0]=e=>a.videoLink=e),placeholder:"Pega el enlace del video"},null,512),[[i.nr,a.videoLink]]),(0,n._)("button",{class:"nav-button",onClick:o[1]||(o[1]=(...e)=>a.agregarVideo&&a.agregarVideo(...e))},"Añadir")])])}var _=r(2262),E={setup(e,{emit:o}){const{videoLink:r}=(0,_.BK)((0,_.qj)({videoLink:""})),i=(0,_.qj)([]),n="AIzaSyDjs3q1MEVmnUTQbT3gflpyBsZTxpUDKuQ",a=()=>{const e=d(r.value);c(e)?alert("El video ya está en la lista."):l(e).then((e=>{e.title&&e.description&&e.duration?(o("nuevo-video",e),r.value="",t(e)):alert('El objeto "video" no contiene todas las propiedades necesarias.')})).catch((e=>{alert("Error al obtener detalles del video:",e)}))},t=async e=>{try{e.thumbnailUrl=e.thumbnail;const o=await fetch("http://3.134.100.52:3000/api/videos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});o.ok?console.log("Video guardado en el servidor."):console.error("Error al guardar el video en el servidor:",o.statusText)}catch(o){console.error("Error al enviar el video al servidor:",o)}},l=async e=>{const o=n,r=`https://www.googleapis.com/youtube/v3/videos?id=${e}&key=${o}&part=snippet,contentDetails`;try{const o=await fetch(r),i=await o.json(),n=i.items[0].snippet,a=i.items[0].contentDetails,t=s(a.duration);return{id:e,title:n.title,description:n.description,thumbnail:n.thumbnails.default.url,duration:t}}catch(i){throw new Error("Error al obtener detalles del video desde la API de YouTube")}},s=e=>{const o=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);let r=0,i=0,n=0;o[1]&&(r=parseInt(o[1].replace("H",""))),o[2]&&(i=parseInt(o[2].replace("M",""))),o[3]&&(n=parseInt(o[3].replace("S",""))),n>0?n-=1:i>0?(i-=1,n=59):r>0&&(r-=1,i=59,n=59);const a=r>0?`${r}:`:"",t=i>0?`${String(i).padStart(2,"0")}:`:"00:",l=n>0?`${String(n).padStart(2,"0")}`:"00",s=`${a}${t}${l}`;return s},c=e=>i.some((o=>o.id===e)),d=e=>{let o="";const r=e.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);r&&(o=r[1]);const i=e.match(/youtube\.com\/.*[?&]v=([a-zA-Z0-9_-]+)/);return i&&(o=i[1]),o};return{videoLink:r,agregarVideo:a}}},M=r(3744);const C=(0,M.Z)(E,[["render",k]]);var V=C;const j={key:0,class:"modal"},D={class:"modal-content"},O={class:"video-column"},S=["src"],T={class:"info-column"},x={class:"title"},$={class:"description-container"},A={class:"description"};function q(e,o,r,i,a,l){return(0,n.wg)(),(0,n.iD)("div",null,[r.video?((0,n.wg)(),(0,n.iD)("div",j,[(0,n._)("div",D,[(0,n._)("div",O,[(0,n._)("iframe",{src:"https://www.youtube.com/embed/"+r.video.id,frameborder:"0",allowfullscreen:"",class:"video-frame"},null,8,S)]),(0,n._)("div",T,[(0,n._)("p",x,(0,t.zw)(r.video.title),1),(0,n._)("div",$,[(0,n._)("p",A,(0,t.zw)(r.video.description),1)]),(0,n._)("button",{onClick:o[0]||(o[0]=(...e)=>l.cerrarModal&&l.cerrarModal(...e)),class:"modal-close-button"},"X")])])])):(0,n.kq)("",!0)])}var z={props:{video:Object},methods:{cerrarModal(){this.$emit("cerrar-modal")}}};const I=(0,M.Z)(z,[["render",q],["__scopeId","data-v-626835f8"]]);var Z=I,H={components:{NavSearch:V,VideoModal:Z},setup(){const e=(0,_.qj)([]),o=(0,_.iH)(!1),r=(0,_.iH)(null),i=(0,_.iH)(!1);let a=null;const t=o=>e.some((e=>e.id===o)),l=async()=>{try{const o=await fetch("http://3.134.100.52:3000/api/videos");if(o.ok){const r=await o.json();e.splice(0),e.push(...r)}else console.error("Error al obtener los videos desde el servidor:",o.statusText)}catch(o){console.error("Error al realizar la solicitud al servidor:",o)}};(0,n.bv)((()=>{l()}));const s=o=>{t(o.id)?alert("El video ya está en la lista."):e.push(o)},c=e=>{i.value||(o.value=!0,r.value=e)},d=()=>{o.value=!1,r.value=null,i.value=!1},u=e=>{a=e,i.value=!0},v=()=>{i.value=!1},p=()=>{a&&(m(a),a=null,i.value=!1)},m=async o=>{try{await f(o);const r=e.findIndex((e=>e.id===o));-1!==r&&e.splice(r,1)}catch(r){console.error("Error al eliminar el video en el servidor:",r)}},f=async e=>{try{const o=await fetch(`http://3.134.100.52:3000/api/videos/${e}`,{method:"DELETE"});o.ok?console.log("Video eliminado en el servidor."):console.error("Error al eliminar el video en el servidor:",o.statusText)}catch(o){console.error("Error al enviar la solicitud de eliminación al servidor:",o)}};return{videos:e,modalVisible:o,videoSeleccionado:r,showDeleteModal:i,mostrarModal:c,cerrarModal:d,abrirConfirmacionEliminar:u,cancelarEliminacion:v,confirmarEliminacion:p,eliminarVideo:m,agregarVideo:s}}};const L=(0,M.Z)(H,[["render",b]]);var P=L,N={name:"App",components:{VideoAlbum:P}};const U=(0,M.Z)(N,[["render",a]]);var K=U;(0,i.ri)(K).mount("#app")}},o={};function r(i){var n=o[i];if(void 0!==n)return n.exports;var a=o[i]={exports:{}};return e[i].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(o,i,n,a){if(!i){var t=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],a=e[d][2];for(var l=!0,s=0;s<i.length;s++)(!1&a||t>=a)&&Object.keys(r.O).every((function(e){return r.O[e](i[s])}))?i.splice(s--,1):(l=!1,a<t&&(t=a));if(l){e.splice(d--,1);var c=n();void 0!==c&&(o=c)}}return o}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,n,a]}}(),function(){r.d=function(e,o){for(var i in o)r.o(o,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};r.O.j=function(o){return 0===e[o]};var o=function(o,i){var n,a,t=i[0],l=i[1],s=i[2],c=0;if(t.some((function(o){return 0!==e[o]}))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var d=s(r)}for(o&&o(i);c<t.length;c++)a=t[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},i=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(1465)}));i=r.O(i)})();
//# sourceMappingURL=app.87efce6f.js.map