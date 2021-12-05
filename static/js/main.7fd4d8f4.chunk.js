(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__cjpKz",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1gqdx"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__FYWg_",Modal:"Modal_Modal__zGTtQ"}},25:function(e,t,a){e.exports={App:"App_App__3ppfO"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3OC3i"}},28:function(e,t,a){e.exports={Button:"Button_Button__3pNAP"}},34:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(34),a(15)),s=a(4),l=a(5),u=a(7),m=a(6),h=a(24),g=a.n(h),d=a(25),p=a.n(d),b=function(e){return e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}))},j=a(26),f=a.n(j),y=a(2),O=a.n(y),v=function(e,t){return f.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23540071-e77d0cd4225c02caa21321106","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};v.propTypes={onSearch:O.a.string.isRequired,page:O.a.number.isRequired};var S=v,I=a(29),x=a(9),_=a.n(x),w=a(1),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.imageChange=function(t){e.setState({searchQuery:t.target.value.toLowerCase()})},e.imageSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):I.a.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("header",{className:_.a.Searchbar,children:Object(w.jsxs)("form",{className:_.a.SearchForm,onSubmit:this.imageSubmit,children:[Object(w.jsx)("button",{type:"submit",className:_.a.SearchFormBtn,children:Object(w.jsx)("span",{className:_.a.SearchFormBtnLabel,children:"Search"})}),Object(w.jsx)("input",{className:_.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.imageChange})]})})})}}]),a}(n.Component),C=k,F=a(27),L=a.n(F),M=a(13),B=a.n(M),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.webformatURL,a=e.id,n=e.openImage,r=e.largeImageURL;return Object(w.jsx)("li",{className:B.a.ImageGalleryItem,onClick:function(){n(r)},children:Object(w.jsx)("img",{src:t,alt:"",className:B.a.ImageGalleryItemImage})},a)}}]),a}(r.a.Component),N=G,R=function(e){var t=e.onSearch,a=e.openImage;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("ul",{className:L.a.ImageGallery,children:t.map((function(e){var t=e.webformatURL,n=e.id,r=e.largeImageURL;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(N,{webformatURL:t,id:n,largeImageURL:r,openImage:a})})}))})})},U=a(28),A=a.n(U),Q=function(e){var t=e.onClick;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("button",{type:"button",className:A.a.Button,onClick:t,children:"Load more"})})},q=a(14),D=a.n(q),z=document.querySelector("#rootModal"),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("component did mount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("component will unmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(w.jsx)("div",{className:D.a.Overlay,onClick:this.handleBackdropClick,children:Object(w.jsx)("div",{className:D.a.Modal,children:this.props.children})}),z)}}]),a}(r.a.PureComponent),K=E,P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",page:1,error:"",status:"idle",viewModal:!1,modalImage:""},e.getImages=function(t,a){e.setState({status:"pending"}),S(t,a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(b(t))),status:"resolved"}})),console.log(e.state.images)})).catch((function(t){var a=t.message;return e.setState({error:a,status:"rejected"})})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.loadMore=function(t){t.preventDefault();var a=e.state.page;a+=1,e.setState({page:a})},e.formSubmit=function(t){e.setState({searchQuery:t,page:1})},e.toggleModal=function(){e.setState((function(e){return{viewModal:!e.viewModal}}))},e.openImage=function(t){e.setState({modalImage:t}),e.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=this.state.searchQuery,r=this.state.page,o=t.page;a!==n&&(this.setState({images:[]}),this.getImages(n,r)),o!==r&&o<r&&this.getImages(n,r)}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.images,n=e.error,r=e.page,o=e.modalImage,c=e.viewModal;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:p.a.App,children:[Object(w.jsx)(C,{onSubmit:this.formSubmit}),"idle"===t&&Object(w.jsx)("div",{style:{fontWeight:"500",fontSize:"30px",textAlign:"center"},children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),"pending"===t&&Object(w.jsx)(g.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),"rejected"===t&&Object(w.jsx)("div",{style:{fontWeight:"700",fontSize:"50px",textAlign:"center"},children:n}),"resolved"===t&&Object(w.jsx)(R,{onSearch:a,openImage:this.openImage}),"resolved"===t&&a.length>0&&Object(w.jsx)(Q,{onClick:this.loadMore,page:r}),c&&Object(w.jsx)(K,{onClose:this.toggleModal,children:Object(w.jsx)("img",{src:o,alt:""})})]})})}}]),a}(n.Component),W=P;c.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(W,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__WNXtq",SearchForm:"Searchbar_SearchForm__3-7f3",SearchFormBtn:"Searchbar_SearchFormBtn__qwK8A",SearchFormBtnLabel:"Searchbar_SearchFormBtnLabel__-SdeH",SearchFormInput:"Searchbar_SearchFormInput__4G00w"}}},[[74,1,2]]]);
//# sourceMappingURL=main.7fd4d8f4.chunk.js.map