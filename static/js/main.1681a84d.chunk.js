(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__cjpKz",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1gqdx"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__FYWg_",Modal:"Modal_Modal__zGTtQ"}},25:function(e,t,a){e.exports={App:"App_App__3ppfO"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3OC3i"}},28:function(e,t,a){e.exports={Button:"Button_Button__3pNAP"}},34:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),s=(a(34),a(15)),i=a(4),l=a(5),u=a(7),m=a(6),h=a(24),d=a.n(h),g=a(25),p=a.n(g),b=a(26),j=a.n(b),f=a(2),y=a.n(f),v=function(e,t){return j.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23540071-e77d0cd4225c02caa21321106","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};v.propTypes={onSearch:y.a.string.isRequired,page:y.a.number.isRequired};var O=v,S=a(29),x=a(9),_=a.n(x),I=a(1),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.imageChange=function(t){e.setState({searchQuery:t.target.value.toLowerCase()})},e.imageSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):S.a.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("header",{className:_.a.Searchbar,children:Object(I.jsxs)("form",{className:_.a.SearchForm,onSubmit:this.imageSubmit,children:[Object(I.jsx)("button",{type:"submit",className:_.a.SearchFormBtn,children:Object(I.jsx)("span",{className:_.a.SearchFormBtnLabel,children:"Search"})}),Object(I.jsx)("input",{className:_.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.imageChange})]})})})}}]),a}(n.Component),k=w,C=a(27),F=a.n(C),M=a(13),B=a.n(M),G=a(14),N=a.n(G),L=document.querySelector("#rootModal"),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget!==t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("component did mount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("component will unmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(I.jsx)("div",{className:N.a.Overlay,onClick:this.handleBackdropClick,children:Object(I.jsx)("div",{className:N.a.Modal,children:Object(I.jsx)("img",{src:this.props.src,alt:""})})}),L)}}]),a}(r.a.PureComponent),Q=A,R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={viewModal:!1},e.toggleModal=function(){e.setState((function(e){return{viewModal:!e.viewModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.webformatURL,a=e.id,n=e.largeImageURL,r=this.state.viewModal;return Object(I.jsxs)("li",{className:B.a.ImageGalleryItem,onClick:this.toggleModal,children:[Object(I.jsx)("img",{src:t,alt:"",className:B.a.ImageGalleryItemImage}),r&&Object(I.jsx)(Q,{onClose:this.toggleModal,src:n})]},a)}}]),a}(r.a.Component),U=R,q=function(e){var t=e.onSearch;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("ul",{className:F.a.ImageGallery,children:t.map((function(e){var t=e.webformatURL,a=e.id,n=e.largeImageURL;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(U,{webformatURL:t,id:a,largeImageURL:n})})}))})})},D=a(28),z=a.n(D),E=function(e){var t=e.onClick;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("button",{type:"button",className:z.a.Button,onClick:t,children:"Load more"})})},K=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",page:1,error:"",status:"idle"},e.getImages=function(t,a){e.setState({status:"pending"}),O(t,a).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1,status:"resolved"}})),console.log(t)})).catch((function(t){var a=t.message;return e.setState({error:a,status:"rejected"})})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.loadMore=function(t){t.preventDefault();var a=e.state,n=a.searchQuery,r=a.page;e.getImages(n,r)},e.formSubmit=function(t){e.setState({searchQuery:t,page:1})},e.modal=function(){e.setState((function(e){return{viewModal:!e.viewModal}}))},e.openImage=function(t){e.setState({modalImage:t}),e.modal()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=this.state.searchQuery,r=this.state.page;a!==n&&(this.setState({images:[]}),this.getImages(n,r))}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.images,n=e.error,r=e.page;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:p.a.App,children:[Object(I.jsx)(k,{onSubmit:this.formSubmit}),"idle"===t&&Object(I.jsx)("div",{style:{fontWeight:"500",fontSize:"30px",textAlign:"center"},children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),"pending"===t&&Object(I.jsx)(d.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),"rejected"===t&&Object(I.jsx)("div",{style:{fontWeight:"700",fontSize:"50px",textAlign:"center"},children:n}),"resolved"===t&&Object(I.jsx)(q,{onSearch:a}),"resolved"===t&&a.length>0&&Object(I.jsx)(E,{onClick:this.loadMore,page:r})]})})}}]),a}(n.Component),P=K;c.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(P,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__WNXtq",SearchForm:"Searchbar_SearchForm__3-7f3",SearchFormBtn:"Searchbar_SearchFormBtn__qwK8A",SearchFormBtnLabel:"Searchbar_SearchFormBtnLabel__-SdeH",SearchFormInput:"Searchbar_SearchFormInput__4G00w"}}},[[74,1,2]]]);
//# sourceMappingURL=main.1681a84d.chunk.js.map