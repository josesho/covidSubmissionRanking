(this.webpackJsonpsequence_submissions=this.webpackJsonpsequence_submissions||[]).push([[0],{109:function(e){e.exports=JSON.parse("{}")},111:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(0),c=t.n(r),i=t(15),l=t.n(i),o=(t(66),t(5)),s=t(40),u=t.n(s),b=t(23),d=t(22),f=t(21),j=t(6),p=t(2),O=t(33),m=t(58),h=t(57),v=t(25),g=t(41),_=t(24),x=t(116),C=t(18),k=t.n(C);function y(){var e=Object(O.a)([""]);return y=function(){return e},e}function S(){var e=Object(O.a)(['\n                                  text-align: left;\n                                  &:before {\n                                    transition: all 0.5s ease 0s;\n                                    content: "";\n                                    display: inline-block;\n                                    height: 14px;\n                                    width: calc(\n                                      ',"px *\n                                        (\n                                          "," /\n                                            ","\n                                        )\n                                    );\n                                    margin-right: 10px;\n                                    background: ",";\n                                  }\n                                  &:hover:before {\n                                    opacity: 1;\n                                    transform: ",";\n                                  }\n                                "]);return S=function(){return e},e}function N(){var e=Object(O.a)(["\n          font-size: 1.1rem;\n          border: 0;\n          margin-left: 20px;\n          width: 100%;\n          transition: all 0.5s ease 0s;\n          &:focus {\n            outline: none;\n            border-bottom: 1px solid;\n          }\n        "]);return N=function(){return e},e}function T(e){var n=e.preGlobalFilteredRows,t=e.globalFilter,a=e.setGlobalFilter,r=e.className,i=n.length,l=c.a.useState(t),s=Object(o.a)(l,2),u=s[0],b=s[1],d=Object(_.useAsyncDebounce)((function(e){a(e||void 0)}),200);return Object(p.b)("span",{className:r,style:{display:"flex",alignItems:"center",fontWeight:"bold"},children:["Search:"," ",Object(p.a)("input",{value:u||"",onChange:function(e){b(e.target.value),d(e.target.value)},placeholder:"".concat(i," Countries..."),css:Object(f.b)(N())})]})}var w=function(e){var n=e.isLoading,t=e.columns,a=e.data,r=e.barCol,c=e.barConfig,i=e.downloadFileName,l=e.disclaimer,o=void 0===l?"":l,s=t.map((function(e){var n={};return n.label=e.Header,n.key=e.accessor,n})),u=Object(_.useTable)({columns:t,data:a,autoResetPage:!1,initialState:{pageIndex:0,pageSize:10}},_.useGlobalFilter,_.usePagination),O=u.getTableProps,C=u.getTableBodyProps,N=u.headerGroups,w=u.prepareRow,q=u.page,F=u.canPreviousPage,P=u.canNextPage,R=u.pageOptions,B=u.pageCount,D=u.gotoPage,G=u.nextPage,I=u.previousPage,z=u.state.pageIndex,E=u.state,H=u.preGlobalFilteredRows,W=u.setGlobalFilter;return Object(p.b)("div",{children:[Object(p.a)(T,{preGlobalFilteredRows:H,globalFilter:E.globalFilter,setGlobalFilter:W}),Object(p.b)("div",{className:k.a.tableWrap,children:[n?Object(p.a)("div",{className:k.a.spinnerContainer,children:Object(p.a)(h.a,{animation:"border"})}):Object(p.b)(m.a,Object(j.a)(Object(j.a)({className:"".concat(k.a.table," mt-3"),hover:!0,size:"sm"},O()),{},{children:[Object(p.a)("thead",{children:N.map((function(e){return Object(p.a)("tr",Object(j.a)(Object(j.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.a)("th",Object(j.a)(Object(j.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(p.a)("tbody",Object(j.a)(Object(j.a)({},C()),{},{children:q.map((function(e,n){return w(e),Object(f.a)("tr",Object(j.a)(Object(j.a)({},e.getRowProps()),{},{key:n}),e.cells.map((function(e){var n,a,i,l,o,s,u=t.find((function(n){return n.Header===e.column.Header})).accessor;return Object(p.a)("td",Object(j.a)(Object(j.a)({},e.getCellProps()),{},{css:r.includes(u)?Object(f.b)(S(),e.column.width,e.value,(null!==(n=c[u])&&void 0!==n?n:{}).max,Object(x.a)().domain([(null!==(a=c[u])&&void 0!==a?a:{}).min,(null!==(i=c[u])&&void 0!==i?i:{}).max]).range([(null!==(l=c[u])&&void 0!==l?l:{}).minColor,(null!==(o=c[u])&&void 0!==o?o:{}).maxColor])(e.value),e.value/(null!==(s=c[u])&&void 0!==s?s:{}).max<=.3?"scale(1.5)":"scale(1.1)"):Object(f.b)(y()),children:e.render("Cell")}))})))}))}))]})),""===o?null:Object(p.a)("div",{className:"".concat(k.a.disclaimer," mb-3"),children:o}),1===R.length?Object(p.a)(b.a,{className:k.a.paginationControl,children:Object(p.a)(d.a,{xs:12,md:6,className:"mb-3",children:Object(p.a)(g.CSVLink,{data:a,headers:s,filename:i,className:"btn-sm btn-light",style:{textDecoration:"none"},target:"_blank",children:"Download Table"})})}):Object(p.b)(b.a,{className:k.a.paginationControl,children:[Object(p.b)(d.a,{sm:12,md:6,children:[Object(p.a)(v.a,{variant:"light",size:"sm",onClick:function(){return D(0)},disabled:!F,children:"<<"}),Object(p.a)(v.a,{variant:"light",size:"sm",onClick:function(){return I()},disabled:!F,children:"<"}),Object(p.a)(v.a,{variant:"light",size:"sm",onClick:function(){return G()},disabled:!P,children:">"}),Object(p.a)(v.a,{variant:"light",size:"sm",onClick:function(){return D(B-1)},disabled:!P,children:">>"}),Object(p.b)("p",{children:[" ","Page ",Object(p.b)("strong",{children:[z+1," "]})," of"," ",Object(p.a)("strong",{children:R.length})]})]}),Object(p.a)(d.a,{xs:12,md:6,className:"mb-3",children:Object(p.a)(g.CSVLink,{data:a,headers:s,filename:i,className:"btn-sm btn-light",style:{textDecoration:"none"},target:"_blank",children:"Download Table"})})]})]})]})},q=t(59),F=t(34),P=t.n(F);var R=function(e){var n=e.rankOptions,t=e.rankBy,r=e.setRankBy,c=e.label;return Object(a.jsxs)("div",{className:"mt-4 mb-4 ".concat(P.a.selectContainer),children:[Object(a.jsx)("div",{className:P.a.label,children:c}),Object(a.jsx)(q.a,{className:P.a.rankBy,isDisabled:!1,isLoading:!1,isClearable:!1,isSearchable:!0,name:c,value:(null!==n&&void 0!==n?n:[]).filter((function(e){return e.value===t})),options:n,onChange:function(e){return r(e.value)}})]})},B=t(11),D=t.n(B),G=t(32),I="https://mendel3.bii.a-star.edu.sg/METHODS/corona/gamma/GISAID/submissionRanking/data/",z=t(48);function E(){return H.apply(this,arguments)}function H(){return(H=Object(G.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z.get(I.concat("sequenceData.json")).then((function(e){return e.data})).catch((function(e){return console.log("err :>> ",e),{}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(109);var W=t(48);function L(){return(L=Object(G.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.get(I.concat("config.json")).then((function(e){return e.data})).catch((function(e){return console.log("err :>> ",e),{}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=t(12);function J(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=e.toString(),t=n.split("."),a=t[0],r=t.length>1?"."+t[1]:"",c=/(\d+)(\d{3})/;c.test(a);)a=a.replace(c,"$1,$2");return a.concat(r)}var V=t(115);var Y=t(117);var M=t(42),Q=t.n(M),$=function(e){var n=e.config,t=c.a.useState(!0),i=Object(o.a)(t,2),l=i[0],s=i[1],u=c.a.useState(!0),b=Object(o.a)(u,2),d=b[0],f=b[1],p=c.a.useRef([]),O=c.a.useState([]),m=Object(o.a)(O,2),h=m[0],v=m[1],g=c.a.useState([]),_=Object(o.a)(g,2),x=_[0],C=_[1],k=c.a.useState({}),y=Object(o.a)(k,2),S=y[0],N=y[1],T=c.a.useState(""),q=Object(o.a)(T,2),F=q[0],P=q[1],B=c.a.useState(""),D=Object(o.a)(B,2),G=D[0],I=D[1],z=c.a.useState("seq_per_1000"),H=Object(o.a)(z,2),W=H[0],L=H[1],M=c.a.useState({}),$=Object(o.a)(M,2),X=$[0],Z=$[1],K=c.a.useState([]),U=Object(o.a)(K,2),ee=U[0],ne=U[1],te=c.a.useRef(["reported_cases","samples_sequenced"]),ae=c.a.useCallback((function(e){var n;return Z(function(e){var n,t=e.data,a=e.barsConfig,r=e.barColumns,c=void 0===r?[]:r,i={},l=Object(A.a)(c);try{var s=function(){var e=n.value;i[e]=a[e];var r=Object(V.a)(t.map((function(n){return n[e]}))),c=Object(o.a)(r,2),l=c[0],s=c[1];i[e].min=l,i[e].max=s};for(l.s();!(n=l.n()).done;)s()}catch(u){l.e(u)}finally{l.f()}return i}({barsConfig:S,barColumns:x,data:e})),s(!1),function(e,n){var t,a=Object(A.a)(e);try{var r=function(){var e=t.value;"string"===typeof n?e[n]=J(e[n]):n.forEach((function(n){e[n]=J(e[n])}))};for(a.s();!(t=a.n()).done;)r()}catch(c){a.e(c)}finally{a.f()}return e}(function(e){return e.map((function(e,n){return Object(j.a)(Object(j.a)({},e),{},{rank:n+1})}))}(function(e,n,t){return Object(Y.a)(n,(function(n,a){return"ASC"===t?n[e]-a[e]:a[e]-n[e]}))}(W,e,(null!==(n=(null!==S&&void 0!==S?S:{})[W])&&void 0!==n?n:{}).order)),te.current)}),[S,W,x]);c.a.useEffect((function(){v(function(e){return e.sequenceTableRanking}(n)),P(function(e){var n;return null!==(n=e.sequenceTableTitle)&&void 0!==n?n:""}(n)),C(function(e){return e.sequenceTableBarCol}(n)),N(function(e){return e.barConfig}(n)),p.current=function(e){var n,t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return null!==(n=(null!==(t=e.sequenceTableHeaders)&&void 0!==t?t:{})[a])&&void 0!==n?n:[]}(n),I(function(e){var n;return null!==(n=e.sequenceTableDisclaimer)&&void 0!==n?n:""}(n))}),[n]),c.a.useEffect((function(){s(!0),d?E().then((function(e){f(!1),ne(ae(e))})):ne((function(e){return ae(e)}))}),[d,ae]);return function(e,n){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=e}),[e]),Object(r.useEffect)((function(){if(null!==n){var e=setInterval((function(){t.current()}),n);return function(){return clearInterval(e)}}}),[n])}((function(){E().then((function(e){return ne(ae(e))}))}),3e5),Object(a.jsxs)("div",{className:"".concat(Q.a.fullWidth),children:[Object(a.jsx)("h2",{className:Q.a.title,children:null!==F&&void 0!==F?F:"Country Submission Count"}),Object(a.jsx)(R,{rankBy:W,setRankBy:L,rankOptions:h,label:"Rank By"}),Object(a.jsx)(w,{columns:p.current,data:ee,barCol:x,barConfig:X,downloadFileName:"sequenceOFSubmission.csv",isLoading:l,disclaimer:G})]})};var X=function(){var e=c.a.useState({}),n=Object(o.a)(e,2),t=n[0],r=n[1];return c.a.useEffect((function(){(function(){return L.apply(this,arguments)})().then((function(e){return r(e)}))}),[]),Object(a.jsx)("div",{className:u.a.app,children:Object(a.jsx)(b.a,{children:Object(a.jsx)(d.a,{className:"mt-3",children:Object(a.jsx)("div",{className:u.a.seqTable,children:Object(a.jsx)($,{config:t})})})})})},Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,118)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};t(110);l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(X,{})}),document.getElementById("root")),Z()},18:function(e,n,t){e.exports={tableWrap:"table_tableWrap__2lYj0",table:"table_table__orQ_Q",spinnerContainer:"table_spinnerContainer__3VxqN",disclaimer:"table_disclaimer__2YZDm",paginationControl:"table_paginationControl__2aY2e"}},34:function(e,n,t){e.exports={selectContainer:"selection_selectContainer__jkeOd",label:"selection_label__3iu0y",rankBy:"selection_rankBy__3WNfz"}},40:function(e,n,t){e.exports={app:"App_app__1xh09",seqTable:"App_seqTable__a9Xm0"}},42:function(e,n,t){e.exports={title:"sequenceTable_title__x4oOe",fullWidth:"sequenceTable_fullWidth__2Jg08"}},66:function(e,n,t){}},[[111,1,2]]]);
//# sourceMappingURL=main.ef264c47.chunk.js.map