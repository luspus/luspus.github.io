(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(289)},289:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),o=a(20),c=a(292),s=a(291),l=a(42),u=a(114),m=a(38),f=a(32),p={topArtists:[],artistInfo:[],resultOfSearching:[],favorites:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOP_ARTISTS":return Object(f.a)({},e,{topArtists:Object(m.a)(t.data)});case"GET_INFO":return Object(f.a)({},e,{artistInfo:[t.data.artist]});case"GET_SIMILAR":var a=t.data.artist,n=t.data["@attr"].artist;return Object(f.a)({},e,{favorites:Object(m.a)(e.favorites.map(function(e,t){return e.name===n&&(e.similarArtists=a),e}))});case"SEARCH_ARTIST":return Object(f.a)({},e,{resultOfSearching:t.res.results&&t.res.results.artistmatches.artist||[]});case"ADD_TO_FAVORITES":var r=t.artist;return Object(f.a)({},e,{favorites:[].concat(Object(m.a)(e.favorites),Object(m.a)(e.topArtists.filter(function(e){return r===e.name})))});case"DELETE_FROM_FAVORITES":var i=t.name;return Object(f.a)({},e,{favorites:Object(m.a)(e.favorites.filter(function(e){return i!==e.name}))});default:return e}},d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;var g=a(290),v=a(10),b=a(43),E=a.n(b),O=a(21),j=a.n(O),y=a(125),S=a.n(y),x=a(23),T=a(24),w=a(26),k=a(25),A=a(27),C=a(22),F="4404d2f5ff44af76585b0d45e25f087d",N="https://ws.audioscrobbler.com",I=function(){return function(e){e(function(e){fetch("".concat(N,"/2.0/?method=geo.gettopartists&country=").concat("ukraine","&limit=").concat("100","&api_key=").concat(F,"&format=json")).then(function(e){return e.json()}).then(function(t){var a=t.topartists.artist;e({type:"GET_TOP_ARTISTS",data:a})}).catch(function(e){console.log(e)})})}},_=function(e){return function(t){t(function(){var t=e;return function(e){fetch("".concat(N,"/2.0/?method=artist.getinfo&artist=").concat(t,"&api_key=").concat(F,"&format=json")).then(function(e){return e.json()}).then(function(t){e({type:"GET_INFO",data:t})}).catch(function(e){console.log(e)})}}())}},R=function(e){return function(t){t(function(){var t=e;return function(e){fetch("".concat(N,"/2.0/?method=artist.getsimilar&artist=").concat(t,"&limit=").concat(5,"&api_key=").concat(F,"&format=json")).then(function(e){return e.json()}).then(function(t){var a=t.similarartists;e({type:"GET_SIMILAR",data:a})}).catch(function(e){console.log(e)})}}())}},D=function(e){return function(t){t(function(){var t=e;return function(a){fetch("".concat(N,"/2.0/?method=artist.search&artist=").concat(t,"&api_key=").concat(F,"&format=json")).then(function(e){return e.json()}).then(function(t){a({type:"SEARCH_ARTIST",res:t,val:e})}).catch(function(e){console.log(e)})}}())}},L=function(e){return{type:"ADD_TO_FAVORITES",artist:e}},M=function(){return function(e){e({type:"SEARCH_ARTIST",res:{results:{artistmatches:{artist:[]}}},val:""})}},P=function(e){return{type:"DELETE_FROM_FAVORITES",name:e}},V=a(55),q=a.n(V),G=a(56),W=a.n(G),B=a(57),H=a.n(B),U=a(115),J=a.n(U),X=a(28),z=a.n(X),Y=a(18),K=a.n(Y),Q=(a(45),Object(v.createMuiTheme)({typography:{useNextVariants:!0}})),Z=function(e){function t(){return Object(x.a)(this,t),Object(w.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){this.props.getTopArtists()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.topArtists,n=e.getSimilar,i=e.addToFavorites,o=e.deleteFromFavorites,c=e.favorites;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.MuiThemeProvider,{theme:Q},r.a.createElement(K.a,{className:t.h,component:"h2",variant:"h2"},"Popular rigth now on Last.fm in Ukraine")),r.a.createElement("div",{className:t.root},a.map(function(e,a){var s=e.image[4],l=Object.values(s)[0],u=c.find(function(t){return t.name===e.name});return r.a.createElement(q.a,{key:a,xs:4,className:t.card},r.a.createElement(W.a,{className:t.header,action:r.a.createElement(J.a,{className:t.actions,disableActionSpacing:!0},r.a.createElement(g.a,{className:t.links,to:"/artist/".concat(e.name.toLowerCase())},e.name),u?r.a.createElement(z.a,{className:t.icons,"aria-label":"Delete from favorites",onClick:function(){return o(e.name)}},r.a.createElement(j.a,{color:"error"})):r.a.createElement(z.a,{className:t.icons,"aria-label":"Add from favorites",onClick:function(){i(e.name),n(e.name)}},r.a.createElement(j.a,{color:"disabled"})))}),r.a.createElement(g.a,{to:"/artist/".concat(e.name.toLowerCase())},r.a.createElement(H.a,{className:t.media,image:l,title:e.name})))})))}}]),t}(n.Component),$=Object(o.b)(function(e){return{topArtists:e.topArtists,favorites:e.favorites}},function(e){return{getTopArtists:function(){return e(I())},addToFavorites:function(t){return e(L(t))},deleteFromFavorites:function(t){return e(P(t))},getSimilar:function(t){return e(R(t))}}})(Object(v.withStyles)(function(e){var t;return{root:{display:"flex",flexWrap:"wrap",justifyContent:"start",marginTop:20},card:(t={margin:"10px 5px"},Object(C.a)(t,e.breakpoints.down("sm"),{width:"calc(50% - 10px)"}),Object(C.a)(t,e.breakpoints.up("md"),{width:"calc(33.3% - 10px)"}),Object(C.a)(t,e.breakpoints.up("lg"),{width:"calc(25% - 20px)",margin:"10px 10px"}),t),media:{height:0,paddingTop:"56.25%"},actions:{display:"flex"},links:{color:"grey",textDecoration:"none",marginRight:5},header:{padding:5},h:{color:"grey"}}})(Z)),ee=a(77),te=a.n(ee),ae=a(78),ne=a.n(ae),re=a(117),ie=a.n(re),oe=a(116),ce=a.n(oe),se=a(58),le=a.n(se),ue=function(e){function t(){return Object(x.a)(this,t),Object(w.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.similar,n=e.getSimilar,i=e.addToFavorites,o=(e.deleteFromFavorites,e.favorites);return r.a.createElement(te.a,{className:t.root},a.map(function(e,a){var c=e.image[4],s=Object.values(c)[0];o.find(function(t){return t.name===e.name});return r.a.createElement(ne.a,{className:t.listItem,key:a,alignItems:"flex-start"},r.a.createElement(ce.a,null,r.a.createElement(le.a,{alt:e.name,src:s})),r.a.createElement(ie.a,{secondary:r.a.createElement(g.a,{className:t.inline,to:"/artist/".concat(e.name.toLowerCase())},r.a.createElement(K.a,{component:"span",className:t.inline,color:"textPrimary"},e.name))}),r.a.createElement(z.a,{className:t.icons,"aria-label":"Add from favorites",onClick:function(){i(e.name),n(e.name)}},r.a.createElement(j.a,{color:"disabled"})))}))}}]),t}(n.Component),me=Object(o.b)(function(e){return{favorites:e.favorites}},function(e){return{addToFavorites:function(t){return e(L(t))},deleteFromFavorites:function(t){return e(P(t))},getSimilar:function(t){return e(R(t))}}})(Object(v.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},inline:{display:"inline",textDecoration:"none"},listItem:{display:"flex",alignItems:"center",borderBottom:"1px solid #ececec"}}})(ue)),fe=a(76),pe=a.n(fe),he=Object(v.createMuiTheme)({typography:{useNextVariants:!0}}),de=function(e){function t(){return Object(x.a)(this,t),Object(w.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.favorites,n=e.deleteFromFavorites;return r.a.createElement(r.a.Fragment,null,a.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.MuiThemeProvider,{theme:he},r.a.createElement(K.a,{className:t.h,component:"h2",variant:"h2"},"List of your favorites")),r.a.createElement("div",{className:t.root},a.map(function(e,a){var i=e.image[4],o=Object.values(i)[0];return r.a.createElement(q.a,{key:a,className:t.card},r.a.createElement(W.a,{avatar:r.a.createElement(le.a,{"aria-label":"Recipe",className:t.avatar},e.name[0]),action:r.a.createElement(z.a,{"aria-label":"Delete from favorites",onClick:function(){return n(e.name)}},r.a.createElement(j.a,{color:"error"})),title:e.name,subheader:"Listeners: ".concat(e.listeners)}),r.a.createElement(g.a,{to:"/artist/".concat(e.name.toLowerCase())},r.a.createElement(H.a,{className:t.media,image:o,title:e.name})),r.a.createElement(K.a,{className:t.h,variant:"subtitle1"},"Similar artists"),r.a.createElement(me,{similar:e.similarArtists}))}))):r.a.createElement(v.MuiThemeProvider,{theme:he},r.a.createElement(K.a,{className:t.h,component:"h2",variant:"h2"},"No favorites yet")))}}]),t}(n.Component),ge=Object(o.b)(function(e){return{favorites:e.favorites}},function(e){return{addToFavorites:function(t){return e(L(t))},deleteFromFavorites:function(t){return e(P(t))}}})(Object(v.withStyles)(function(e){var t;return{root:{display:"flex",flexWrap:"wrap",justifyContent:"start",marginTop:15},card:(t={margin:"10px 5px"},Object(C.a)(t,e.breakpoints.down("sm"),{width:"calc(50% - 10px)"}),Object(C.a)(t,e.breakpoints.up("md"),{width:"calc(33.3% - 10px)"}),Object(C.a)(t,e.breakpoints.up("lg"),{width:"calc(25% - 20px)",margin:"10px 10px"}),t),media:{height:0,paddingTop:"56.25%"},actions:{display:"flex"},avatar:{backgroundColor:pe.a[500]},h:{color:"grey",margin:10,textAlign:"center"}}})(de)),ve=Object(v.createMuiTheme)({typography:{useNextVariants:!0}}),be=function(e){function t(){return Object(x.a)(this,t),Object(w.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){this.props.getInfo(this.props.match.params.artist)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.artist!==e.match.params.artist&&this.props.getInfo(this.props.match.params.artist)}},{key:"render",value:function(){var e,t,a=this.props,n=a.artistInfo,i=a.classes,o=a.favorites,c=a.deleteFromFavorites,s=a.addToFavorites;return void 0!==n[0]&&(e=o.find(function(e){return e.name==n[0].name}),t=n[0].bio.content.substr(0,n[0].bio.content.indexOf("<a"))),r.a.createElement(r.a.Fragment,null,void 0!==n[0]&&r.a.createElement("div",{className:i.root},r.a.createElement(v.MuiThemeProvider,{theme:ve},r.a.createElement("div",{className:i.header},r.a.createElement(K.a,{className:i.h,component:"h3",variant:"h2"},n[0].name),e?r.a.createElement(z.a,{className:i.icons,"aria-label":"Delete from favorites",onClick:function(){return c(n[0].name)}},r.a.createElement(j.a,{color:"error"})):r.a.createElement(z.a,{className:i.icons,"aria-label":"Add from favorites",onClick:function(){return s(n[0].name)}},r.a.createElement(j.a,{color:"disabled"})))),r.a.createElement(K.a,{className:i.h,variant:"subtitle1",gutterBottom:!0},"Listeners: ".concat(n[0].stats.listeners)),r.a.createElement(K.a,{variant:"body1",gutterBottom:!0},t)))}}]),t}(n.Component),Ee=Object(o.b)(function(e){return{artistInfo:e.artistInfo,favorites:e.favorites}},function(e){return{getInfo:function(t){return e(_(t))},addToFavorites:function(t){return e(L(t))},deleteFromFavorites:function(t){return e(P(t))}}})(Object(v.withStyles)(function(e){return{root:{flexGrow:1,overflow:"hidden"},paper:{maxWidth:400,margin:"".concat(e.spacing.unit,"px auto"),padding:2*e.spacing.unit},h:{color:"grey",marginBottom:15},header:{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}})(be)),Oe=a(126),je=a(293),ye=a(118),Se=a.n(ye),xe=a(119),Te=a.n(xe),we=a(120),ke=a.n(we),Ae=a(121),Ce=a.n(Ae),Fe=a(53),Ne=a.n(Fe),Ie=a(122),_e=a.n(Ie);function Re(e){var t=e.classes,a=e.inputRef,n=void 0===a?function(){}:a,i=e.ref,o=Object(Oe.a)(e,["classes","inputRef","ref"]);return r.a.createElement(Ce.a,Object.assign({fullWidth:!0,InputProps:{inputRef:function(e){i(e),n(e)},classes:{input:t.input}}},o))}var De=function(e,t){var a=t.query,n=t.isHighlighted;e.label=e.name;var i=Te()(e.label,a),o=ke()(e.label,i);return r.a.createElement(_e.a,{selected:n,component:"div"},o.map(function(e,t){return e.highlight?r.a.createElement("span",{key:String(t),style:{fontWeight:500}},e.text):r.a.createElement("strong",{key:String(t),style:{fontWeight:300}},e.text)}))};function Le(e){return e.label}var Me=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(w.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={single:"",popper:""},a.handleSuggestionsFetchRequested=function(e){e.value},a.handleSuggestionsClearRequested=function(){},a.handleChange=function(e){return function(t,n){var r=n.newValue;"change"===t.type&&a.props.onChange(r),a.setState(Object(C.a)({},e,r))}},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.suggestions,n=e.history,i=e.clearArtist,o={renderInputComponent:Re,suggestions:a,onSuggestionsFetchRequested:this.handleSuggestionsFetchRequested,onSuggestionsClearRequested:this.handleSuggestionsClearRequested,getSuggestionValue:Le,renderSuggestion:De,onSuggestionSelected:function(e,t){var a=t.suggestionValue;n.push("/artist/"+a),i()}};return r.a.createElement("div",{className:t.root},r.a.createElement(Se.a,Object.assign({},o,{inputProps:{classes:t,placeholder:"Search an artist",value:this.state.single,onChange:this.handleChange("single")},theme:{container:t.container,suggestionsContainerOpen:t.suggestionsContainerOpen,suggestionsList:t.suggestionsList,suggestion:t.suggestion},renderSuggestionsContainer:function(e){return r.a.createElement(Ne.a,Object.assign({},e.containerProps,{square:!0}),e.children)}})))}}]),t}(r.a.Component),Pe=Object(v.withStyles)(function(e){return{root:{height:40,width:"80%",flexGrow:1,position:"absolute"},container:{position:"relative"},suggestionsContainerOpen:{position:"absolute",height:240,overflowY:"scroll",zIndex:1,marginTop:e.spacing.unit,left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"},divider:{height:2*e.spacing.unit}}})(Object(je.a)(Me)),Ve=function(e){function t(){return Object(x.a)(this,t),Object(w.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.resultOfSearching,a=e.searchArtist,n=e.clearArtist;return r.a.createElement(Pe,{onChange:function(e){return a(e)},suggestions:t,clearArtist:n})}}]),t}(n.Component),qe=Object(o.b)(function(e){return{resultOfSearching:e.resultOfSearching}},function(e){return{searchArtist:function(t){return e(D(t))},clearArtist:function(){return e(M())}}})(Ve),Ge=Object(v.withStyles)(function(e){return{root:{overflow:"hidden",marginBottom:30},paper:{textAlign:"center",color:e.palette.text.secondary}}})(function(e){var t=e.classes;return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{container:!0,spacing:24},r.a.createElement(E.a,{item:!0,xs:1},r.a.createElement(g.a,{to:"/"},r.a.createElement(S.a,{color:"primary"}))),r.a.createElement(E.a,{item:!0,xs:1},r.a.createElement(g.a,{to:"/favorites/all"},r.a.createElement(j.a,{color:"error"}))),r.a.createElement(E.a,{item:!0,xs:9},r.a.createElement(qe,null)))),r.a.createElement(s.a,{exact:!0,path:"/",component:$}),r.a.createElement(s.a,{exact:!0,path:"/favorites/all",component:ge}),r.a.createElement(s.a,{exact:!0,path:"/artist/:artist",component:Ee})))}),We=document.querySelector("#root");Object(i.render)(r.a.createElement(o.a,{store:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],Object(l.c)(h,d(Object(l.a)(u.a)))}()},r.a.createElement(c.a,null,r.a.createElement(s.a,{path:"/",component:Ge}))),We)}},[[127,2,1]]]);
//# sourceMappingURL=main.ade63dbd.chunk.js.map