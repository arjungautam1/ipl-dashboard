(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(17),r=c.n(n),i=(c(24),c(25),c(8)),j=c.n(i),l=c(10),d=c(11),h=c(4),m=(c(27),c(0)),o=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,s="/teams/".concat(a),n=t===c.matchWinner;return Object(m.jsxs)("div",{className:n?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(m.jsx)("span",{className:"vs",children:"vs"}),Object(m.jsxs)("h1",{children:[" ",Object(m.jsx)(h.b,{to:s,children:a})]}),Object(m.jsxs)("p",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]})},b=(c(37),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,s="/teams/".concat(a),n=t===c.matchWinner;return Object(m.jsxs)("div",{className:n?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"vs",children:"vs  "}),Object(m.jsx)("h1",{children:Object(m.jsx)(h.b,{to:s,children:a})}),Object(m.jsx)("h2",{className:"match-date",children:c.date}),Object(m.jsxs)("h3",{className:"match-city",children:["At ",c.city]}),Object(m.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(m.jsxs)("div",{className:"innings-details",children:[Object(m.jsx)("h3",{children:"First Innings"}),Object(m.jsx)("p",{children:c.team1}),Object(m.jsx)("h3",{children:"Second Innings"}),Object(m.jsx)("p",{children:c.team2}),Object(m.jsx)("h3",{children:"Player of Match "}),Object(m.jsx)("p",{children:c.playerOfMatch}),Object(m.jsx)("h3",{children:"Umpires"}),Object(m.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})}),u=c(2),x=(c(38),c(19)),O=function(){var e=Object(a.useState)({matchList:[]}),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(u.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),c&&c.teamName?Object(m.jsxs)("div",{className:"TeamPage",children:[Object(m.jsx)("div",{className:"team-name-section",children:Object(m.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(m.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(m.jsx)(x.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:"#869080"},{title:"Wins",value:c.totalWins,color:"#4A4A4A"}]})]}),Object(m.jsxs)("div",{className:"color-symbol",children:[Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("div",{className:"won-div"}),Object(m.jsx)("div",{style:{padding:"10px"},children:"Won"})]}),Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("div",{className:"loss-div"}),Object(m.jsx)("div",{style:{padding:"10px"},children:"Lost"})]})]}),Object(m.jsxs)("div",{className:"match-detail-section",children:[Object(m.jsx)("h1",{children:"Latest Matches"}),Object(m.jsx)(b,{teamName:c.teamName,match:c.matchList[0]})]}),c.matchList.slice(1).map((function(e){return Object(m.jsx)(o,{teamName:c.teamName,match:e},e.id)})),Object(m.jsx)("div",{className:"more-link",children:Object(m.jsx)(h.b,{to:"/teams/".concat(n,"/matches/").concat("2020"),children:"More >>"})})]}):Object(m.jsx)("h1",{children:"Team not found"})},f=(c(39),c(40),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(m.jsx)("ol",{className:"yearSelector",children:c.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),v=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(u.f)(),r=n.teamName,i=n.year;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(m.jsxs)("div",{className:"MatchPage",children:[Object(m.jsxs)("div",{className:"year-selector",children:[Object(m.jsx)("h3",{className:"heading_match",children:"Select Year"}),Object(m.jsx)(f,{teamName:r})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{className:"page-heading",children:[r," Matches in ",i]}),c.map((function(e){return Object(m.jsx)(b,{teamName:r,match:e},e.id)}))]}),Object(m.jsxs)("div",{className:"color",children:[Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("div",{className:"won-div"}),Object(m.jsx)("div",{style:{padding:"10px"},children:"Won"})]}),Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("div",{className:"loss-div"}),Object(m.jsx)("div",{style:{padding:"10px"},children:"Lost"})]})]})]})},p=(c(41),function(e){var t=e.teamName;return Object(m.jsx)("div",{className:"TeamTile",children:Object(m.jsx)("h1",{children:Object(m.jsx)(h.b,{to:"/teams/".concat(t),children:t})})})}),N=(c(42),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)("div",{className:"HomePage",children:[Object(m.jsx)("div",{className:"header-section",children:Object(m.jsx)("h1",{className:"app-name",children:"Arjun Gautam IPL Dashboard"})}),Object(m.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(m.jsx)(p,{teamName:e.teamName},e.id)}))})]})}),y=(c(43),function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("div",{className:"text",children:Object(m.jsxs)("h4",{children:["\xa9",Object(m.jsx)("span",{children:"Arjun "})," ",(new Date).getFullYear(),", all rights reserved. Built by",Object(m.jsx)("a",{href:"https://arjungautam.netlify.com",target:"_blank",rel:"nofollow noopener noreferrer",children:" Arjun Gautam"})]})})})});var g=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(h.a,{children:Object(m.jsxs)(u.c,{children:[Object(m.jsxs)(u.a,{path:"/teams/:teamName/matches/:year",children:[Object(m.jsx)(v,{}),Object(m.jsx)(y,{})]}),Object(m.jsxs)(u.a,{path:"/teams/:teamName",children:[Object(m.jsx)(O,{}),Object(m.jsx)(y,{})]}),Object(m.jsxs)(u.a,{path:"/",children:[Object(m.jsx)(N,{}),Object(m.jsx)(y,{})]})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),w()}},[[44,1,2]]]);
//# sourceMappingURL=main.913d6e3e.chunk.js.map