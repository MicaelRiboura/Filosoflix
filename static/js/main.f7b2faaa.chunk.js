(this.webpackJsonpmicaelflix=this.webpackJsonpmicaelflix||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/logo.f098c6b1.png"},19:function(e,a,t){e.exports=t(45)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(11),l=t.n(s),c=(t(24),t(25),t(12)),i=t.n(c);function o(){return r.a.createElement("nav",{className:"Header"},r.a.createElement("div",{className:"menu"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{className:"Logo",src:i.a,alt:"Micaelflix"})),r.a.createElement("span",{className:"item"},"In\xedcio"),r.a.createElement("span",{className:"item"},"Cl\xe1ssicos"),r.a.createElement("span",{className:"item"},"Brasileiros")))}t(26);function m(){return r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,"Friedrich Nietzsche por Scarlett Marton"),r.a.createElement("h3",null,"Quem Somos N\xf3s?"),r.a.createElement("p",null,"Esta semana, o Quem Somos N\xf3s? tem a honra de receber Scarlett Marton, professora de hist\xf3ria da filosofia e considerada uma das maiores conhecedoras brasileiras do fil\xf3sofo alem\xe3o Friedrich Nietzsche. Ela d\xe1 continuidade \xe0 nova s\xe9rie de conversas com especialistas na obra de alguns dos maiores pensadores da hist\xf3ria da humanidade.")))}var u=t(17),d=t(13),p=t(14),h=t(18),E=t(16),f=(t(27),t(15)),v=t.n(f),b={list:[]},N=function(e){Object(h.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state=Object(u.a)({},b),e}return Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;v.a.get("https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyDNK82U5FJouNwP0IyGTKDafwq5rtMx5pc","&type=video&part=snippet&maxResults=6&q=").concat(this.props.title)).then((function(a){e.setState({list:a.data.items}),console.log(a.data.items)}))}},{key:"renderItems",value:function(){return this.state.list.map((function(e){return r.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(e.id.videoId),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e.snippet.thumbnails.medium.url,alt:"Thumbnail"}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"section"},r.a.createElement("h2",{className:"section-name"},this.props.title),r.a.createElement("div",{className:"carrousel"},this.renderItems()))}}]),t}(n.Component);var g=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(m,null),r.a.createElement(N,{title:"Michel Foucault",maxResults:"10"}),r.a.createElement(N,{title:"Baruch Espinosa",maxResults:"10"}),r.a.createElement(N,{title:"Plat\xe3o",maxResults:"10"}),r.a.createElement(N,{title:"Schopenhauer",maxResults:"10"}),r.a.createElement(N,{title:"Cl\xf3vis de Barros",maxResults:"10"}),r.a.createElement(N,{title:"M\xe1rio S\xe9rgio Cortella",maxResults:"10"}),r.a.createElement(N,{title:"Leandro Karnal",maxResults:"10"}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f7b2faaa.chunk.js.map