(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,n,t){e.exports=t(63)},63:function(e,n,t){"use strict";t.r(n);var a,r,o,c,l,i,s,u,m,d,f,p=t(1),b=t.n(p),g=t(25),h=t.n(g),O=t(8),j=t(0),E=t(6),v=t(26),x=t.n(v),y=t(4),w=t(5),k=w.a.h1(a||(a=Object(y.a)(["\n  text-align: center;\n  display: flex;\n  font-size: 2rem;\n  font-family: sans-serif;\n  color: #000;\n"]))),S=w.a.div(r||(r=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]))),N=w.a.div(o||(o=Object(y.a)(["\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),I=w.a.input(c||(c=Object(y.a)(["\n  border: 1px solid #ddd;\n  height: 1.5rem;\n  padding: 0 .5rem;\n  border-radius: .25rem 0 0 .25rem;\n  &:focus,\n  &:active {\n    outline: none;\n    box-shadow: none;\n  }\n"]))),J=w.a.button(l||(l=Object(y.a)(["\n  height: 1.5rem;\n  border: 1px solid #000;\n  background: #000;\n  color: #fff;\n  border-radius: 0 .25rem .25rem 0;\n  &:focus,\n  &:active {\n    outline: none;\n    box-shadow: none;\n  }\n"]))),z=w.a.span(i||(i=Object(y.a)(["\n  height: 1.5rem;\n  display: block;\n  font-size: 0.65rem;\n  color: red;\n  font-weight: 600;\n  margin-top: 1rem;\n"])));function R(){var e=Object(j.f)(),n=Object(p.useState)(""),t=Object(E.a)(n,2),a=t[0],r=t[1],o=Object(p.useState)(!1),c=Object(E.a)(o,2),l=c[0],i=c[1];return b.a.createElement(S,null,b.a.createElement(k,null,"Pesquisa de reposit\xf3rios no Github"),b.a.createElement(N,null,b.a.createElement(I,{className:"usuarioInput",placeholder:"Usu\xe1rio",value:a,onChange:function(e){return r(e.target.value)}}),b.a.createElement(J,{type:"button",onClick:function(){x.a.get("https://api.github.com/users/".concat(a,"/repos")).then(function(n){console.log(n.data);var t=n.data,a=[];t.map(function(e){return a.push(e.name)}),localStorage.setItem("repositoriesName",JSON.stringify(a)),e("/repositories")}).catch(function(e){i(!0)})}},"Pesquisar")),l?b.a.createElement(z,null,"Ocorreu um erro. Tente novamente."):"")}var q=w.a.div(s||(s=Object(y.a)(["\n  width: 100%;\n  max-width: 991px;\n  margin: 0 auto;\n"]))),C=w.a.h1(u||(u=Object(y.a)(["\n  text-align: center;\n  font-size: 2rem;\n  font-family: sans-serif;\n  color: #333;\n"]))),P=w.a.ul(m||(m=Object(y.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  font-family: sans-serif;\n"]))),B=w.a.li(d||(d=Object(y.a)(["\n  margin: .5rem 0;\n  background: #000;\n  color: #fff;\n  padding: .5rem;\n"]))),G=Object(w.a)(O.b)(f||(f=Object(y.a)(["\n  display: block;\n  width: 4rem;\n  text-align: center;\n  margin: 2rem auto;\n  background-color: #000;\n  padding: .5rem 0;\n  color: #fff;\n  text-decoration: none;\n"])));function T(){var e=Object(j.f)(),n=Object(p.useState)([]),t=Object(E.a)(n,2),a=t[0],r=t[1];return Object(p.useEffect)(function(){var n=localStorage.getItem("repositoriesName");console.log(n),n?(n=JSON.parse(n),r(n),localStorage.clear()):e("/"),console.log(n)},[e]),b.a.createElement(q,null,b.a.createElement(C,null," Reposit\xf3rios "),b.a.createElement(P,null,a.map(function(e){return b.a.createElement(B,null,"Reposit\xf3rio: ",e)})),b.a.createElement(G,{to:"/"}," Voltar "))}function U(){return b.a.createElement(O.a,{basename:"/repository-list"},b.a.createElement(j.c,null,b.a.createElement(j.a,{path:"/",element:b.a.createElement(R,null)}),b.a.createElement(j.a,{path:"/repositories",element:b.a.createElement(T,null)})))}var V=function(){return b.a.createElement(U,null)};h.a.createRoot(document.getElementById("root")).render(b.a.createElement(V,null))}},[[30,2,1]]]);
//# sourceMappingURL=main.3d8c9d34.chunk.js.map