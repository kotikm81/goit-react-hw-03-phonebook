(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{26:function(n,e,t){n.exports={DebounceInput:"Filter_DebounceInput__mtk1R"}},27:function(n){n.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},37:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var a,r=t(0),c=t.n(r),o=t(17),i=t.n(o),s=(t(37),t(29)),l=t(18),d=t(19),u=t(31),b=t(30),m=t(45),p=t(3),x=t(4),f=x.a.section(a||(a=Object(p.a)(["\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px #e4e6ee solid;\n  border-radius: 0px 0px 4px 4px;\n  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);\n  padding: 20px;\n  margin-bottom: 20px;\n"]))),j=t(1);var g,h=function(n){var e=n.children,t=n.title;return Object(j.jsxs)(f,{children:[Object(j.jsx)("h1",{children:t}),e]})},O=t(13),v=t(15),C=t(32),y=x.a.button(g||(g=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  padding: 10px;\n\n  text-align: center;\n  letter-spacing: 0.06em;\n  background-color: #2196f3;\n  color: #fff;\n  border: 0;\n  border-radius: 50%;\n  cursor: pointer;\n\n  & svg {\n    color: #ffffff;\n    margin-right: 0;\n  }\n\n  &:hover {\n    background-color: #1e81d3;\n  }\n"]))),k=["children","type","onClick"];function S(n){var e=n.children,t=(n.type,n.onClick),a=Object(C.a)(n,k);return Object(j.jsx)(y,Object(v.a)(Object(v.a)({type:"button",onClick:t},a),{},{children:e}))}S.defaultProps={onClick:function(){return null},children:null};var w,D,F=S,z=x.a.span(w||(w=Object(p.a)(["\n  & svg {\n    color: #2196f3;\n    margin-right: 10px;\n  }\n"]))),A=(x.a.button(D||(D=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  padding: 10px 28px;\n  max-width: 200px;\n\n  font-weight: 700;\n  font-size: 12px;\n  text-align: center;\n  letter-spacing: 0.06em;\n  text-decoration: none;\n  background-color: #2196f3;\n  color: #fff;\n  border: 0;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #1e81d3;\n  }\n"]))),15);var I,J,N=function(n){var e=n.name,t=n.number,a=n.onDeleteContact;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(z,{children:[Object(j.jsx)(O.a,{size:A}),e,": ",t]}),Object(j.jsx)(F,{type:"button",onClick:a,"aria-label":"add contact",children:Object(j.jsx)(O.b,{size:A})})]})},L=x.a.ul(I||(I=Object(p.a)(["\n  padding: 0;\n  list-style: none;\n"]))),P=x.a.li(J||(J=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-items: baseline;\n  justify-content: space-between;\n  width: 400px;\n  margin-bottom: 10px;\n  padding: 10px;\n"])));var B,M,T,V,Z,_=function(n){var e=n.contacts,t=n.onDeleteContact;return Object(j.jsx)(L,{children:e.map((function(n){var e=n.id,a=n.name,r=n.number;return Object(j.jsx)(P,{children:Object(j.jsx)(N,{name:a,number:r,onDeleteContact:function(){return t(e)}})},e)}))})},E=t(28),R=x.a.form(B||(B=Object(p.a)(["\n  padding: 0;\n"]))),H=x.a.label(M||(M=Object(p.a)(["\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n"]))),K=x.a.input(T||(T=Object(p.a)(["\n  margin: 10px 0;\n  height: 30px;\n  padding-left: 15px;\n  background-color: transparent;\n  border: 1px solid #2196f3;\n  border-radius: 4px;\n"]))),U=x.a.button(V||(V=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  padding: 10px 28px;\n  max-width: 200px;\n\n  font-weight: 700;\n  font-size: 12px;\n  text-align: center;\n  letter-spacing: 0.06em;\n  text-decoration: none;\n  background-color: #2196f3;\n  color: #fff;\n  border: 0;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:disabled,\n  &:disabled:hover {\n    background-color: #7fbff3;\n  }\n\n  &:hover {\n    background-color: #1e81d3;\n  }\n"]))),$=x.a.span(Z||(Z=Object(p.a)(["\n  left: 400px;\n  bottom: 0px;\n  color: coral;\n  margin-bottom: 10px;\n"]))),q=function(n){var e={};return n.name?n.number?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/i.test(n.name)?/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(n.number)||(e.number="\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"):e.name="\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.":e.number="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":e.name="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",e};function G(n){var e=n.onSubmit;return Object(j.jsx)(E.a,{initialValues:{name:"",number:""},validate:q,onSubmit:function(n,t){var a=t.setSubmitting,r=t.resetForm;e(n),a(!1),r()},children:function(n){var e=n.values,t=n.touched,a=n.errors,r=n.handleChange,c=n.handleSubmit,o=n.isSubmitting;return Object(j.jsxs)(R,{onSubmit:c,children:[Object(j.jsxs)(H,{children:["Name",Object(j.jsx)(K,{type:"text",name:"name",onChange:r,value:e.name}),t.name&&a.name&&Object(j.jsx)($,{children:a.name})]}),Object(j.jsxs)(H,{children:["Number",Object(j.jsx)(K,{type:"tel",name:"number",onChange:r,value:e.number}),t.number&&a.number&&Object(j.jsx)($,{children:a.number})]}),Object(j.jsx)(U,{type:"submit",disabled:o||""===e.name||""===e.number,children:"Add contacts"})]})}})}var Q,W,X=t(25),Y=x.a.label(Q||(Q=Object(p.a)(["\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n"]))),nn=(x.a.input(W||(W=Object(p.a)(["\n  margin: 10px 0;\n  height: 30px;\n  padding-left: 15px;\n  background-color: transparent;\n  border: 1px solid #2196f3;\n  border-radius: 4px;\n"]))),t(26)),en=t.n(nn);var tn=function(n){n.value;var e=n.onChange;return Object(j.jsxs)(Y,{children:["Find contacts by name",Object(j.jsx)(X.DebounceInput,{type:"text",debounceTimeout:300,onChange:e,className:en.a.DebounceInput})]})},an=t(27),rn=function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))).state={contacts:an,filter:"",name:"",number:""},n.changeFilter=function(e){n.setState({filter:e.target.value})},n.getVisibleContacts=function(){var e=n.state,t=e.contacts,a=e.filter.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(a)}))},n.deleteContact=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n.addContact=function(e){var t=e.name,a=e.number;if(n.state.contacts.find((function(n){return n.name===t})))alert("".concat(t," is already in contacts."));else{var r={id:Object(m.a)(),name:t,number:a};n.setState((function(n){var e=n.contacts;return{contacts:[r].concat(Object(s.a)(e))}}))}},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts"),e=JSON.parse(n);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(n,e){var t=this.state.contacts;t!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(t))}},{key:"render",value:function(){var n=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(h,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(G,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(tn,{filter:n,onChange:this.changeFilter}),Object(j.jsx)(_,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),t}(r.Component),cn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),a(n),r(n),c(n),o(n)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(rn,{})}),document.getElementById("root")),cn()}},[[43,1,2]]]);
//# sourceMappingURL=main.726d6e95.chunk.js.map