(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,n){e.exports=n(51)},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(15),s=n.n(r),c=(n(24),n(3)),i=n(4),u=n(7),l=n(5),m=n(6),p=n(16),f=n.n(p),d=(n(26),n(2)),h=(n(28),n(17)),g=n.n(h).a.create({baseURL:"http://winnova-lb-593685308.eu-west-1.elb.amazonaws.com/hallinta/api/v1/companies",transformRequest:[function(e,t){return e}],transformResponse:[function(e){return e}],withCredentials:!1,timeout:1e3,responseType:"json",xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",onUploadProgress:function(e){},onDownloadProgress:function(e){},maxContentLength:2e3});g.interceptors.request.use(function(e){return console.log("Do something before request is sent"),e},function(e){return Promise.reject(e)}),g.interceptors.response.use(function(e){return console.log("Do something with response data"),e},function(e){return Promise.reject(e)});var w=g,b={getAll:function(e){return w.get(w.baseURL,{params:{page:e}}).then(function(e){return e}).catch(function(e){return e.response?e:e.request?e.request:e.message})},getOne:function(e){return w.get("endpoint",{}).then(function(e){return e}).catch(function(e){return e.response?e:e.request?e.request:e.message})}},j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).showAllSites=function(){b.getAll(1).then(function(e){e.data?(console.log(e.data),n.setState({sites:e.data})):console.log(e)})},n.state={sites:[]},n.showAllSites=n.showAllSites.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.showAllSites()}},{key:"render",value:function(){return a.a.createElement("div",{className:"SiteComponent"},"SiteComponenttttttttttt")}}]),t}(a.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"AppComponent"},a.a.createElement(j,null),a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.js")," and save to reload.")))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(49);s.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.3369ed11.chunk.js.map