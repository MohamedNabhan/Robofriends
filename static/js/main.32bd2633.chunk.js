(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(13),s=n.n(c),a=n(4),o=n.n(a),i=n(14),l=n(15),h=n(16),d=n(19),j=n(18),u=(n(25),n(0)),b=function(e){e.id;var t=e.name,n=e.email;return Object(u.jsxs)("div",{className:"card-item",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(t),alt:"robot-".concat(t)}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},f=(n(27),function(e){var t=e.robots;return Object(u.jsx)("div",{className:"cards",children:t.map((function(e){return Object(u.jsx)(b,{id:e.id,name:e.name,email:e.email},e.id)}))})}),p=function(e){var t=e.searchChange;return Object(u.jsx)("div",{className:"d-flex justify-content-center p-2",children:Object(u.jsx)("div",{className:"col-6 ",children:Object(u.jsx)("input",{type:"search",placeholder:"Search...",className:"form-control ",onChange:function(e){return t(e)}})})})},m=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"1px solid #09c",height:"750px"},children:e.children})},x=n(17),O=n.n(x),v=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={robots:[],searchfield:""},e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,console.log(t.data),this.setState({robots:t.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=this.state.robots.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(u.jsxs)("div",{className:"p-3",children:[Object(u.jsxs)("div",{className:"stickyBar",children:[Object(u.jsx)("h1",{className:"text-center p-2",children:"Robo Friends"}),Object(u.jsx)(p,{searchChange:this.onSearchChange})]}),Object(u.jsx)(m,{children:Object(u.jsx)(f,{robots:r})})]}):Object(u.jsx)("h1",{children:"Loading Data..."})}}]),n}(r.Component);n(46);s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.32bd2633.chunk.js.map