(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),o=a.n(i),c=a(1),r=a(2),d=a(4),s=a(3),h=a(5),p=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{width:"100%",height:"80px",background:"gray",textAlign:"center"}},l.a.createElement("div",null,l.a.createElement("h1",null,"ToDoList")),l.a.createElement("div",{style:{marginTop:"10px",color:"white"}},l.a.createElement("p",null,"\u6700\u7b80\u5355\u7684\u5f85\u529e\u4e8b\u9879\u5217\u8868"))))}}]),t}(n.Component),u=document.getElementsByClassName("show1"),m=document.getElementsByClassName("show2"),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(s.a)(t).call(this))).handleInput=function(t){var a=t.target.value.trim(),n=localStorage.todo;if(13===t.keyCode&&""!=a){var l=JSON.parse(n);l.push({title:a,done:!1}),e.setState({a:e.state.a+1});var i=document.createElement("div");i.setAttribute("class","inp"),i.innerHTML+="<input type='checkbox' class='ckbox'/><button class='but'>\u4e00</button><div style=display:'block'>"+t.target.value+"</div>",i.childNodes[0].onclick=e.chinp,i.childNodes[1].onclick=e.rmdiv,localStorage.setItem("todo",JSON.stringify(l)),t.target.parentNode.parentNode.childNodes[2].appendChild(i),t.target.value=""}},e.rmdiv=function(t){var a=localStorage.todo,n=JSON.parse(a),l=t.target.parentNode,i=l.parentNode;i.removeChild(l);for(var o=0;o<n.length;o++)n[o].title==l.childNodes[2].innerHTML&&n.splice(o,1);localStorage.setItem("todo",JSON.stringify(n)),!1===l.childNodes[0].checked?e.setState({a:i.childNodes.length}):e.setState({b:i.childNodes.length})},e.chinp=function(t){if(!0===t.target.checked){var a=t.target.parentNode;a.className="inped",a.parentNode.parentNode.childNodes[4].appendChild(a);for(var n=localStorage.todo,l=JSON.parse(n),i=0;i<l.length;i++)l[i].title==t.target.parentNode.childNodes[2].innerHTML&&(l[i].done=!0);localStorage.setItem("todo",JSON.stringify(l)),e.setState({a:e.state.a-1,b:e.state.b+1})}else{var o=t.target.parentNode;o.className="inp",o.parentNode.parentNode.childNodes[2].appendChild(o);for(var c=localStorage.todo,r=JSON.parse(c),d=0;d<r.length;d++)r[d].title==t.target.parentNode.childNodes[2].innerHTML&&(r[d].done=!1);localStorage.setItem("todo",JSON.stringify(r)),e.setState({a:e.state.a+1,b:e.state.b-1})}},e.state={a:0,b:0,todo:[]},e}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.todo)for(var e=0,t=0,a=localStorage.todo,n=JSON.parse(a),l=0;l<n.length;l++)if(0==n[l].done){e+=1,this.setState({a:e});var i=document.createElement("div");i.setAttribute("class","inp"),i.innerHTML+="<input type='checkbox' class='ckbox'/><button class='but'>\u4e00</button><div style=display:'block'>"+n[l].title+"</div>",i.childNodes[0].onclick=this.chinp,i.childNodes[1].onclick=this.rmdiv,u[0].appendChild(i)}else{t+=1,this.setState({b:t});var o=document.createElement("div");o.setAttribute("class","inped"),o.innerHTML+="<input type='checkbox' class='ckbox'/><button class='but'>\u4e00</button><div style=display:'block'>"+n[l].title+"</div>",o.childNodes[0].onclick=this.chinp,o.childNodes[0].checked=!0,o.childNodes[1].onclick=this.rmdiv,m[0].appendChild(o)}}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{width:"100%",height:"30px",textAlign:"center",margin:"10px auto"}},l.a.createElement("input",{onKeyDown:this.handleInput,style:{width:"200px",height:"20px"},type:"text",placeholder:"\u8bf7\u5728\u6b64\u8f93\u5165\u60a8\u7684\u5f85\u529e\u4e8b\u9879"})),l.a.createElement("div",{style:{width:"100%",height:"50px"}},l.a.createElement("div",{style:{width:"500px",height:"50px",margin:"10px auto"}},l.a.createElement("div",{style:{float:"left",display:"block",fontWeight:"bold",fontSize:"20px"}},"\u6b63\u5728\u8fdb\u884c"),l.a.createElement("div",{style:{margin:"0 auto",textAlign:"center",overflow:"hidden",float:"right",display:"block",width:"24px",height:"24px",borderRadius:"12px",background:"black",color:"white"}},l.a.createElement("span",{style:{fontSize:"14px"}},this.state.a)))),l.a.createElement("div",{className:"show1"}),l.a.createElement("div",{style:{width:"100%",height:"50px"}},l.a.createElement("div",{style:{width:"500px",height:"50px",margin:"10px auto"}},l.a.createElement("div",{style:{float:"left",display:"block",fontWeight:"bold",fontSize:"20px"}},"\u5df2\u7ecf\u5b8c\u6210"),l.a.createElement("div",{style:{margin:"0 auto",textAlign:"center",overflow:"hidden",float:"right",display:"block",width:"24px",height:"24px",borderRadius:"12px",background:"black",color:"white"}},l.a.createElement("span",{style:{fontSize:"14px"}},this.state.b)))),l.a.createElement("div",{className:"show2"}))}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(g,null))}}]),t}(n.Component);a(13);o.a.render(l.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1be4859a.chunk.js.map