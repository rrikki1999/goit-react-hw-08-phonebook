"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[325],{325:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(43),r=n(3),s=n(580);const c={formContainer:"ContactForm_formContainer__lUM5u",addContactButton:"ContactForm_addContactButton__KgQRr"};var l=n(775),o=n(579);const u=()=>{const[e,t]=(0,a.useState)(""),[n,u]=(0,a.useState)(""),i=(0,r.d4)(l.Ge),d=(0,r.wA)();return(0,o.jsxs)("form",{className:c.contactForm,onSubmit:a=>{a.preventDefault();const r={name:e,number:n},c=Array.isArray(i)&&i.some((e=>{let{name:t,number:n}=e;return t.toLowerCase()===r.name.toLowerCase()||n===r.number}));if(c)return void alert("".concat(r.name," is already in contacts"));const l={...r};d((0,s.uV)(l)),t(""),u("")},children:[(0,o.jsx)("h1",{children:"Phonebook"}),(0,o.jsxs)("label",{className:c.label,children:["Name",(0,o.jsx)("input",{className:c.input,type:"text",name:"name",value:e,onChange:e=>{t(e.target.value)},required:!0})]}),(0,o.jsxs)("label",{className:c.label,children:["Number",(0,o.jsx)("input",{className:c.input,type:"tel",name:"number",value:n,onChange:e=>{u(e.target.value)},required:!0})]}),(0,o.jsx)("button",{className:c.addButton,type:"submit",children:"add contact"}),(0,o.jsx)("h2",{children:"Contacts"})]})},i=()=>{const e=(0,r.wA)(),t=(0,r.d4)((e=>(0,l.AZ)(e)));return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:t.map((t=>(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:[t.name,": ",(0,o.jsx)("span",{children:t.number})]}),(0,o.jsx)("button",{type:"button",name:"delete",onClick:()=>e((0,s.Bs)(t.id)),children:"delete"})]},t.id)))})})};var d=n(877);const m=()=>{const e=(0,r.wA)(),t=(0,r.d4)((e=>e.filter.filter));return(0,o.jsxs)("label",{children:["Find contacts by name",(0,o.jsx)("input",{value:t,type:"text",placeholder:"find contact",onChange:t=>{e((0,d.R)(t.target.value))}})]})},h=()=>{const e=(0,r.wA)();(0,a.useEffect)((()=>{e((0,s.qg)())}),[e]);const t=(0,r.d4)((e=>e.contacts.isLoading));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{}),t?(0,o.jsx)("p",{children:"Loading..."}):(0,o.jsx)(m,{}),(0,o.jsx)(i,{})]})}}}]);
//# sourceMappingURL=325.fb7e43a2.chunk.js.map