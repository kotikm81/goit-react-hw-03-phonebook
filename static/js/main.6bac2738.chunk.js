(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{24:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),c=n.n(o),i=n(43),s=(n(35),n(26)),l=n(19),u=n(20),d=n(28),b=n(27),m=n(44),h=n(3);var p=Object(h.a)("section",{target:"ersiafj0"})({name:"14donlh",styles:"max-width:1170px;margin-left:auto;margin-right:auto;border:1px #e4e6ee solid;border-radius:0px 0px 4px 4px;box-shadow:0px 4px 4px rgb(0 0 0 / 25%);padding:20px;margin-bottom:20px"}),f=n(1);var x=function(e){var t=e.children,n=e.title;return Object(f.jsxs)(p,{children:[Object(f.jsx)("h1",{children:n}),t]})},g=n(15),j=n(16),O=n(29),v=Object(h.a)("button",{target:"e1f0fdok0"})("display:flex;align-items:center;justify-content:center;margin-left:10px;padding:10px;text-align:center;letter-spacing:0.06em;background-color:",(function(e){return e.theme.colors.blue}),";color:",(function(e){return e.theme.colors.white}),";border:0;border-radius:50%;cursor:pointer;& svg{color:",(function(e){return e.theme.colors.white}),";margin-right:0;}&:hover{background-color:",(function(e){return e.theme.colors.accentBlue}),";}"),y=["children","type","onClick"];function C(e){var t=e.children,n=(e.type,e.onClick),r=Object(O.a)(e,y);return Object(f.jsx)(v,Object(j.a)(Object(j.a)({type:"button",onClick:n},r),{},{children:t}))}C.defaultProps={onClick:function(){return null},children:null};var k=C,w=Object(h.a)("span",{target:"ehi7tkv1"})("& svg{color:",(function(e){return e.theme.colors.blue}),";margin-right:10px;}"),S=(Object(h.a)("button",{target:"ehi7tkv0"})("display:flex;align-items:center;justify-content:center;margin-left:10px;padding:10px 28px;max-width:200px;font-weight:700;font-size:12px;text-align:center;letter-spacing:0.06em;text-decoration:none;background-color:",(function(e){return e.theme.colors.blue}),";color:",(function(e){return e.theme.colors.white}),";border:0;border-radius:4px;cursor:pointer;&:hover{background-color:",(function(e){return e.theme.colors.accentBlue}),";}"),15);var z=function(e){var t=e.name,n=e.number,r=e.onDeleteContact;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(w,{children:[Object(f.jsx)(g.a,{size:S}),t,": ",n]}),Object(f.jsx)(k,{type:"button",onClick:r,"aria-label":"add contact",children:Object(f.jsx)(g.b,{size:S})})]})};var F=Object(h.a)("ul",{target:"ebua8sb1"})({name:"n1lsvi",styles:"padding:0;list-style:none"}),A=Object(h.a)("li",{target:"ebua8sb0"})({name:"vsvit0",styles:"display:flex;align-items:center;justify-items:baseline;justify-content:space-between;width:400px;margin-bottom:10px;padding:10px"});var D=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(f.jsx)(F,{children:t.map((function(e){var t=e.id,r=e.name,a=e.number;return Object(f.jsx)(A,{children:Object(f.jsx)(z,{name:r,number:a,onDeleteContact:function(){return n(t)}})},t)}))})},B=n(25);var J=Object(h.a)("form",{target:"ezuoohd4"})({name:"1hcx8jb",styles:"padding:0"}),I=Object(h.a)("label",{target:"ezuoohd3"})({name:"d7h4p4",styles:"max-width:400px;display:flex;flex-direction:column;margin-left:10px"}),N=Object(h.a)("input",{target:"ezuoohd2"})("margin:10px 0;height:30px;padding-left:15px;background-color:transparent;border:1px solid ",(function(e){return e.theme.colors.blue}),";border-radius:4px;"),L=Object(h.a)("button",{target:"ezuoohd1"})("display:flex;align-items:center;justify-content:center;margin-left:10px;padding:10px 28px;max-width:200px;font-weight:700;font-size:12px;text-align:center;letter-spacing:0.06em;text-decoration:none;background-color:",(function(e){return e.theme.colors.blue}),";color:#fff;border:0;border-radius:4px;cursor:pointer;&:disabled,&:disabled:hover{background-color:#7fbff3;}&:hover{background-color:",(function(e){return e.theme.colors.accentBlue}),";}"),P=Object(h.a)("span",{target:"ezuoohd0"})({name:"1q35f0k",styles:"left:400px;bottom:0px;color:coral;margin-bottom:10px"}),M=function(e){var t={};return e.name?e.number?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/i.test(e.name)?/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(e.number)||(t.number="\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"):t.name="\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.":t.number="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":t.name="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",t};function T(e){var t=e.onSubmit;return Object(f.jsx)(B.a,{initialValues:{name:"",number:""},validate:M,onSubmit:function(e,n){var r=n.setSubmitting,a=n.resetForm;t(e),r(!1),a()},children:function(e){var t=e.values,n=e.touched,r=e.errors,a=e.handleChange,o=e.handleSubmit,c=e.isSubmitting;return Object(f.jsxs)(J,{onSubmit:o,children:[Object(f.jsxs)(I,{children:["Name",Object(f.jsx)(N,{type:"text",name:"name",onChange:a,value:t.name}),n.name&&r.name&&Object(f.jsx)(P,{children:r.name})]}),Object(f.jsxs)(I,{children:["Number",Object(f.jsx)(N,{type:"tel",name:"number",onChange:a,value:t.number}),n.number&&r.number&&Object(f.jsx)(P,{children:r.number})]}),Object(f.jsx)(L,{type:"submit",disabled:c||""===t.name||""===t.number,children:"Add contacts"})]})}})}var V=n(23);var Z=Object(h.a)("label",{target:"e16t0fpd1"})({name:"d7h4p4",styles:"max-width:400px;display:flex;flex-direction:column;margin-left:10px"}),E=Object(h.a)(V.DebounceInput,{target:"e16t0fpd0"})("margin:10px 0;height:30px;padding-left:15px;background-color:transparent;border:1px solid ",(function(e){return e.theme.colors.blue}),";border-radius:4px;");var q=function(e){e.value;var t=e.onChange;return Object(f.jsxs)(Z,{children:["Find contacts by name",Object(f.jsx)(E,{type:"text",debounceTimeout:300,onChange:t})]})},H=n(24),K=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={contacts:H,filter:"",name:"",number:""},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,r=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.addContact=function(t){var n=t.name,r=t.number;if(e.state.contacts.find((function(e){return e.name===n})))alert("".concat(n," is already in contacts."));else{var a={id:Object(m.a)(),name:n,number:r};e.setState((function(e){var t=e.contacts;return{contacts:[a].concat(Object(s.a)(t))}}))}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.contacts;n!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(f.jsxs)(x,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(T,{onSubmit:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(q,{filter:e,onChange:this.changeFilter}),Object(f.jsx)(D,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(r.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.b,{theme:{colors:{white:"#ffffff",blue:"#2196f3",accentBlue:"#1e81d3"}},children:Object(f.jsx)(K,{})})}),document.getElementById("root")),R()}},[[41,1,2]]]);
//# sourceMappingURL=main.6bac2738.chunk.js.map