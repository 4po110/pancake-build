(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1402:function(e,t,n){"use strict";n.r(t);var c,r,o,a=n(4),i=n.n(a),s=n(14),l=n(1),j=n(3),b=n(42),u=n(79),d=n(86),x=n(60),p=n(48),O=n(831),h=n(381),f=n(15),m=n(245),v=n(907),g=n(372),w=n(799),y=n(845),k=n(872),S=n(9),C=n(5),B=n(772),I=n(38),L=n(369),A=n(801),V=n(0),D=Object(C.e)(j.n)(c||(c=Object(S.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),P=function(e){var t=e.proposal,n=Object(f.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(V.jsxs)(j.v,{mb:"16px",children:[Object(V.jsx)(j.y,{children:Object(V.jsx)(j.Z,{as:"h3",scale:"md",children:n("Details")})}),Object(V.jsxs)(j.w,{children:[Object(V.jsxs)(j.X,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(j.mc,{color:"textSubtle",children:n("Identifier")}),Object(V.jsx)(j.jb,{href:"".concat(A.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(V.jsxs)(j.X,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(j.mc,{color:"textSubtle",children:n("Creator")}),Object(V.jsx)(j.jb,{href:Object(I.e)(t.author,"address"),ml:"8px",children:Object(L.a)(t.author)})]}),Object(V.jsxs)(j.X,{alignItems:"center",mb:"16px",children:[Object(V.jsx)(j.mc,{color:"textSubtle",children:n("Snapshot")}),Object(V.jsx)(j.jb,{href:Object(I.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(V.jsxs)(D,{p:"16px",children:[Object(V.jsx)(y.a,{proposalState:t.state,mb:"8px"}),Object(V.jsxs)(j.X,{alignItems:"center",children:[Object(V.jsx)(j.mc,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(V.jsx)(j.mc,{ml:"8px",children:Object(B.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(V.jsxs)(j.X,{alignItems:"center",children:[Object(V.jsx)(j.mc,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(V.jsx)(j.mc,{ml:"8px",children:Object(B.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},E=n(808),N=n.n(E),F=Object(C.e)(j.mc)(r||(r=Object(S.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),X=function(e){var t=e.choices,n=e.votes,c=Object(f.b)().t,r=Object(w.a)(n),o=Object(O.e)(),a=Object(b.c)().account,i=Object(w.f)(n);return Object(V.jsxs)(j.v,{children:[Object(V.jsx)(j.y,{children:Object(V.jsx)(j.Z,{as:"h3",scale:"md",children:c("Current Results")})}),Object(V.jsxs)(j.w,{children:[o===p.h.IDLE&&t.map((function(e,t){var n=r[e]||[],o=Object(w.f)(n),s=i.eq(0)?0:o.div(i).times(100).toNumber(),l=n.some((function(e){return a&&e.voter.toLowerCase()===a.toLowerCase()}));return Object(V.jsxs)(j.n,{mt:t>0?"24px":"0px",children:[Object(V.jsxs)(j.X,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(F,{mb:"4px",title:e,children:e}),l&&Object(V.jsxs)(j.jc,{variant:"success",outline:!0,ml:"8px",children:[Object(V.jsx)(j.F,{mr:"4px"})," ",c("Voted")]})]}),Object(V.jsx)(j.n,{mb:"4px",children:Object(V.jsx)(j.Qb,{primaryStep:s,scale:"sm"})}),Object(V.jsxs)(j.X,{alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(j.mc,{color:"textSubtle",children:c("%total% Votes",{total:o.toFormat(3)})}),Object(V.jsxs)(j.mc,{children:[s.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),o===p.h.LOADING&&N()(t.length).map((function(e,t){return Object(V.jsx)(j.n,{mt:t>0?"24px":"0px",children:Object(V.jsx)(j.Vb,{height:"36px",mb:"4px"})},e)}))]})]})},z=n(6),T=n(10),H=n(51),M=n(96),K=n(109),Z=n(19),J=n(194),Y=n(24),G=n(94);!function(e){e.MAIN="main",e.DETAILS="details"}(o||(o={}));var Q,q,R,W,_,U,$,ee,te=n(852),ne=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,o=e.onConfirm,a=e.onViewDetails,i=e.onDismiss,s=Object(f.b)().t;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(te.a,{children:[Object(V.jsx)(j.mc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:s("Voting For")}),Object(V.jsx)(F,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(V.jsx)(j.mc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:s("Your Voting Power")}),r?Object(V.jsx)(j.Vb,{height:"64px",mb:"24px"}):Object(V.jsxs)(te.b,{onClick:a,style:{cursor:"pointer"},children:[Object(V.jsx)(j.mc,{bold:!0,fontSize:"20px",children:n.toFormat(3)}),Object(V.jsx)(j.cb,{scale:"sm",variant:"text",children:Object(V.jsx)(j.J,{width:"24px"})})]}),Object(V.jsx)(j.mc,{as:"p",color:"textSubtle",fontSize:"14px",children:s("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(V.jsx)(j.r,{isLoading:c,endIcon:c?Object(V.jsx)(j.i,{spin:!0,color:"currentColor"}):null,disabled:r||n.eq(0),width:"100%",mb:"8px",onClick:o,children:s("Confirm Vote")}),Object(V.jsx)(j.r,{variant:"secondary",width:"100%",onClick:i,children:s("Cancel")})]})},ce=n(873),re=n(874),oe=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,a=e.block,u=e.onDismiss,d=Object(l.useState)(o.MAIN),x=Object(T.a)(d,2),O=x[0],h=x[1],m=Object(l.useState)(!0),v=Object(T.a)(m,2),g=v[0],y=v[1],k=Object(l.useState)(!1),S=Object(T.a)(k,2),C=S[0],B=S[1],I=Object(b.c)().account,L=Object(f.b)().t,A=Object(M.a)().toastError,D=Object(Y.a)().library,P=Object(G.a)().theme,E=Object(re.a)(a,g),N=E.isLoading,F=E.total,X=E.cakeBalance,H=E.cakeVaultBalance,K=E.cakePoolBalance,Q=E.poolsBalance,q=E.cakeBnbLpBalance,R=E.verificationHash,W=O===o.MAIN,_=W?null:function(){return h(o.MAIN)},U=(t={},Object(Z.a)(t,o.MAIN,L("Confirm Vote")),Object(Z.a)(t,o.DETAILS,L("Voting Power")),t),$=function(){y(!1),u()},ee=function(){var e=Object(s.a)(i.a.mark((function e(){var t,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),t=JSON.stringify(Object(z.a)(Object(z.a)({},Object(w.e)()),{},{type:p.g.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:F.toString(),verificationHash:R}}})),e.next=5,Object(J.c)(D,I,t);case 5:return o=e.sent,a={address:I,msg:t,sig:o},e.next=9,Object(w.i)(a);case 9:return B(!1),e.next=12,n();case 12:$(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),B(!1),A(L("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(V.jsx)(j.wb,{title:U[O],onBack:_,onDismiss:u,hideCloseButton:!W,headerBackground:P.colors.gradients.cardHeader,children:Object(V.jsxs)(j.n,{mb:"24px",width:"320px",children:[O===o.MAIN&&Object(V.jsx)(ne,{vote:r,isLoading:N,isPending:C,total:F,onConfirm:ee,onViewDetails:function(){return h(o.DETAILS)},onDismiss:$}),O===o.DETAILS&&Object(V.jsx)(ce.a,{total:F,cakeBalance:X,cakeVaultBalance:H,cakePoolBalance:K,poolsBalance:Q,cakeBnbLpBalance:q})]})})},ae=["proposal"],ie=C.e.label(Q||(Q=Object(S.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),se=C.e.div(q||(q=Object(S.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),le=function(e){var t=e.proposal,n=Object(H.a)(e,ae),c=Object(l.useState)(null),r=Object(T.a)(c,2),o=r[0],a=r[1],u=Object(f.b)().t,d=Object(M.a)().toastSuccess,p=Object(x.b)(),O=Object(b.c)().account,m=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(u("Vote cast!")),p(Object(h.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(j.Lc)(Object(V.jsx)(oe,{onSuccess:m,proposalId:t.id,vote:o,block:Number(t.snapshot)})),g=Object(T.a)(v,1)[0];return Object(V.jsxs)(j.v,Object(z.a)(Object(z.a)({},n),{},{children:[Object(V.jsx)(j.y,{children:Object(V.jsx)(j.Z,{as:"h3",scale:"md",children:u("Cast your vote")})}),Object(V.jsxs)(j.w,{children:[t.choices.map((function(e,t){var n=t+1===(null===o||void 0===o?void 0:o.value);return Object(V.jsxs)(ie,{isChecked:n,isDisabled:!O,children:[Object(V.jsx)("div",{style:{flexShrink:0},children:Object(V.jsx)(j.Sb,{scale:"sm",value:e,checked:n,onChange:function(){a({label:e,value:t+1})},disabled:!O})}),Object(V.jsx)(se,{children:Object(V.jsx)(j.mc,{as:"span",title:e,children:e})})]},e)})),O?Object(V.jsx)(j.r,{onClick:g,disabled:null===o,children:u("Cast Vote")}):Object(V.jsx)(K.a,{})]})]}))},je=n(256),be=n.n(je),ue=Object(C.e)(j.X)(R||(R=Object(S.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),de=Object(C.e)(j.Vb)(W||(W=Object(S.a)(["\n  flex: 1;\n"]))),xe=function(){return Object(V.jsx)(j.n,{children:N()(10).map((function(e){return Object(V.jsxs)(ue,{children:[Object(V.jsx)(j.Vb,{height:"21px",mr:"32px",width:"100px"}),Object(V.jsx)(de,{height:"21px",mr:"32px",width:"100%"}),Object(V.jsx)(de,{height:"21px",width:"100%"})]},e)}))})},pe=Object(C.e)(j.n).attrs({alignItems:"center"})(_||(_=Object(S.a)(["\n  grid-area: address;\n"]))),Oe=Object(C.e)(j.n)(U||(U=Object(S.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),he=Object(C.e)(j.n)($||($=Object(S.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),fe=Object(C.e)(j.Y)(ee||(ee=Object(S.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas:\n    'address address address'\n    'choice choice vote';\n  grid-template-columns: 1fr 1fr 120px;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    grid-template-areas: 'address choice vote';\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),me=function(e){var t,n=e.vote,c=e.isVoter,r=Object(f.b)().t,o=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),a=o?parseFloat(n.metadata.votingPower).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:3}):"--";return Object(V.jsxs)(fe,{children:[Object(V.jsx)(pe,{children:Object(V.jsxs)(j.X,{alignItems:"center",children:[Object(V.jsx)(j.jb,{href:Object(I.e)(n.voter,"address"),children:Object(L.a)(n.voter)}),c&&Object(V.jsxs)(j.jc,{variant:"success",outline:!0,ml:"8px",children:[Object(V.jsx)(j.F,{mr:"4px"})," ",r("Voted")]})]})}),Object(V.jsx)(Oe,{children:Object(V.jsx)(F,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(V.jsx)(he,{children:Object(V.jsxs)(j.X,{alignItems:"center",justifyContent:"end",children:[Object(V.jsx)(j.mc,{title:n.metadata.votingPower,children:a}),o&&Object(V.jsx)(j.jb,{href:"".concat(A.b,"/").concat(n.id)})]})})]})},ve=function(e){var t;return parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower)},ge=function(e){var t=e.votes,n=Object(l.useState)(!1),c=Object(T.a)(n,2),r=c[0],o=c[1],a=Object(f.b)().t,i=Object(b.c)().account,s=be()(t,[ve,"created"],["desc","desc"]),u=r?s:s.slice(0,20),d=Object(O.e)()===p.h.IDLE;return Object(V.jsxs)(j.v,{children:[Object(V.jsx)(j.y,{children:Object(V.jsxs)(j.X,{alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(j.Z,{as:"h3",scale:"md",children:a("Votes (%count%)",{count:t.length.toLocaleString()})}),!d&&Object(V.jsx)(j.i,{spin:!0,width:"22px"})]})}),!d&&Object(V.jsx)(xe,{}),d&&u.length>0&&Object(V.jsxs)(V.Fragment,{children:[u.map((function(e){var t=i&&e.voter.toLowerCase()===i.toLowerCase();return Object(V.jsx)(me,{vote:e,isVoter:t},e.id)})),Object(V.jsx)(j.X,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(V.jsx)(j.r,{width:"100%",onClick:function(){o(!r)},variant:"text",endIcon:r?Object(V.jsx)(j.K,{color:"primary",width:"21px"}):Object(V.jsx)(j.H,{color:"primary",width:"21px"}),disabled:!d,children:a(r?"Hide":"See All")})})]}),d&&0===u.length&&Object(V.jsx)(j.X,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(V.jsx)(j.Z,{as:"h5",children:a("No votes found")})})]})};t.default=function(){var e=Object(u.i)().id,t=Object(O.a)(e),n=Object(f.b)().t,c=Object(b.c)().account,r=Object(x.b)(),o=Object(O.d)(e),a=Object(O.e)(),S=Object(O.b)(),C=c&&o.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),B=null!==t&&void 0!==t?t:{},I=B.id,L=void 0===I?null:I,A=B.snapshot,D=void 0===A?null:A,E=a===p.h.LOADING||S===p.h.LOADING;return Object(l.useEffect)((function(){r(Object(h.b)(e))}),[e,r]),Object(l.useEffect)((function(){L&&D&&function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(Object(h.d)({proposalId:L,block:Number(D)}));case 2:r(Object(h.e)({proposalId:L,snapshot:D}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[L,D,r]),t?Object(V.jsxs)(m.a,{py:"40px",children:[Object(V.jsx)(j.n,{mb:"40px",children:Object(V.jsx)(j.r,{as:d.a,to:"/voting",variant:"text",startIcon:Object(V.jsx)(j.c,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(V.jsxs)(k.a,{children:[Object(V.jsxs)(j.n,{children:[Object(V.jsxs)(j.n,{mb:"32px",children:[Object(V.jsxs)(j.X,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(y.a,{proposalState:t.state}),Object(V.jsx)(y.b,{isCoreProposal:Object(w.h)(t),ml:"8px"})]}),Object(V.jsx)(j.Z,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(V.jsx)(j.n,{children:Object(V.jsx)(v.a,{children:t.body})})]}),!E&&!C&&t.state===p.e.ACTIVE&&Object(V.jsx)(le,{proposal:t,mb:"16px"}),Object(V.jsx)(ge,{votes:o})]}),Object(V.jsxs)(j.n,{children:[Object(V.jsx)(P,{proposal:t}),Object(V.jsx)(X,{choices:t.choices,votes:o})]})]})]}):Object(V.jsx)(g.a,{})}},799:function(e,t,n){"use strict";n.d(t,"h",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"i",(function(){return w})),n.d(t,"g",(function(){return y})),n.d(t,"a",(function(){return k})),n.d(t,"f",(function(){return S}));var c=n(19),r=n(36),o=n(6),a=n(4),i=n.n(a),s=n(14),l=n(16),j=n.n(l),b=n(21),u=n(98),d=n(31),x=n(48),p=n(97),O=n(801),h=function(e){return e.author.toLowerCase()===O.a.toLowerCase()},f=function(e,t){switch(t){case x.f.COMMUNITY:return e.filter((function(e){return!h(e)}));case x.f.CORE:return e.filter((function(e){return h(e)}));case x.f.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},v=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:Object(b.g)(),decimals:18}}]}},g=function(){return{version:O.e,timestamp:(Date.now()/1e3).toFixed(),space:O.c}},w=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.f,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(i.a.mark((function e(t,n,c){var r,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,p.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(u.g,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),k=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},S=function(e){return e.reduce((function(e,t){var n,c=new j.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(c)}),d.c)}},801:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s}));var c=10,r="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",i="cake.eth",s=10},831:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s}));var c=n(32),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},i=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},s=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}},845:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return b}));var c=n(6),r=n(51),o=(n(1),n(192)),a=n(48),i=n(0),s=["proposalState"],l=["isCoreProposal"],j=function(e){var t=e.proposalState,n=Object(r.a)(e,s);return t===a.e.ACTIVE?Object(i.jsx)(o.h,Object(c.a)({},n)):t===a.e.PENDING?Object(i.jsx)(o.g,Object(c.a)({},n)):Object(i.jsx)(o.a,Object(c.a)({},n))},b=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,l);return t?Object(i.jsx)(o.d,Object(c.a)({},n)):Object(i.jsx)(o.b,Object(c.a)({},n))}},852:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j}));var c,r=n(6),o=n(9),a=(n(1),n(3)),i=n(5),s=n(0),l=i.e.div(c||(c=Object(o.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),j=function(e){return Object(s.jsx)(a.n,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},872:function(e,t,n){"use strict";var c,r=n(9),o=n(5).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=o},873:function(e,t,n){"use strict";n(1);var c=n(3),r=n(15),o=n(852),a=n(0);t.a=function(e){var t=e.total,n=e.cakeBalance,i=e.cakeVaultBalance,s=e.cakePoolBalance,l=e.poolsBalance,j=e.cakeBnbLpBalance,b=Object(r.b)().t;return Object(a.jsxs)(o.a,{mb:"0",children:[Object(a.jsx)(c.mc,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:b("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(a.jsx)(c.mc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:b("Overview")}),Object(a.jsxs)(o.b,{children:[Object(a.jsx)(c.mc,{color:"secondary",children:b("Your Voting Power")}),Object(a.jsx)(c.mc,{bold:!0,fontSize:"20px",children:t.toFormat(3)})]}),Object(a.jsx)(c.mc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:b("Your Cake Held Now")}),Object(a.jsxs)(c.X,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.mc,{color:"textSubtle",fontSize:"16px",children:b("Wallet")}),Object(a.jsx)(c.mc,{textAlign:"right",children:n.toFormat(3)})]}),Object(a.jsxs)(c.X,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.mc,{color:"textSubtle",fontSize:"16px",children:b("Manual CAKE Pool")}),Object(a.jsx)(c.mc,{textAlign:"right",children:s.toFormat(3)})]}),Object(a.jsxs)(c.X,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.mc,{color:"textSubtle",fontSize:"16px",children:b("Auto CAKE Pool")}),Object(a.jsx)(c.mc,{textAlign:"right",children:i.toFormat(3)})]}),Object(a.jsxs)(c.X,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.mc,{color:"textSubtle",fontSize:"16px",children:b("Other Syrup Pools")}),Object(a.jsx)(c.mc,{textAlign:"right",children:l.toFormat(3)})]}),Object(a.jsxs)(c.X,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.mc,{color:"textSubtle",fontSize:"16px",children:b("CAKE BNB LP")}),Object(a.jsx)(c.mc,{textAlign:"right",children:j.toFormat(3)})]})]})}},874:function(e,t,n){"use strict";var c=n(4),r=n.n(c),o=n(6),a=n(14),i=n(10),s=n(1),l=n(42),j=n(31),b=n(188),u=n(21),d=n(97),x=n(16),p=n.n(x),O=n(799),h={verificationHash:null,cakeBalance:j.c,cakeVaultBalance:j.c,cakePoolBalance:j.c,poolsBalance:j.c,cakeBnbLpBalance:j.c,total:j.c};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,j=Object(s.useState)(h),x=Object(i.a)(j,2),f=x[0],m=x[1],v=Object(s.useState)(!!c),g=Object(i.a)(v,2),w=g[0],y=g[1];return Object(s.useEffect)((function(){c&&t&&function(){var n=Object(a.a)(r.a.mark((function n(){var a,i,s,l,j,x,h,f,v,g,w;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return a=n.t0,n.next=10,Object(b.b)(a);case 10:return i=n.sent,s=i.map((function(e){var t=e.contractAddress;return Object(u.a)(t)})),n.next=14,Object(O.g)(c,s,a);case 14:l=n.sent,j=l.cakeBalance,x=l.cakeBnbLpBalance,h=l.cakePoolBalance,f=l.total,v=l.poolsBalance,g=l.cakeVaultBalance,w=l.verificationHash,t&&m((function(e){return Object(o.a)(Object(o.a)({},e),{},{verificationHash:w,cakeBalance:new p.a(j),cakeBnbLpBalance:new p.a(x),cakePoolBalance:new p.a(h),poolsBalance:new p.a(v),cakeVaultBalance:new p.a(g),total:new p.a(f)})}));case 23:return n.prev=23,y(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,m,t,y]),Object(o.a)(Object(o.a)({},f),{},{isLoading:w})}},907:function(e,t,n){"use strict";var c,r,o,a=n(6),i=(n(1),n(914)),s=n.n(i),l=n(950),j=n.n(l),b=n(9),u=n(3),d=n(5),x=n(0),p=d.e.table(c||(c=Object(b.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=d.e.div(r||(r=Object(b.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=function(e){return Object(x.jsx)(u.Z,Object(a.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:h,h2:h,h3:h,h4:h,h5:h,h6:h,p:function(e){return Object(x.jsx)(u.mc,Object(a.a)({as:"p",my:"16px"},e))},table:p,ol:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ol"},e))},ul:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ul"},e))},pre:d.e.pre(o||(o=Object(b.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(x.jsx)(s.a,Object(a.a)({remarkPlugins:[j.a],components:f},e))}}}]);
//# sourceMappingURL=9.dc270041.chunk.js.map