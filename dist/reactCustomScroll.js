/* eslint-disable */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(function(){try{return require("prop-types")}catch(e){}}(),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactCustomScroll=t(function(){try{return require("prop-types")}catch(e){}}(),require("react"),require("react-dom")):e.ReactCustomScroll=t(e["prop-types"],e.react,e["react-dom"])}("undefined"!=typeof self?self:this,(function(e,t,o){return(()=>{"use strict";var r={229:t=>{if(void 0===e){var o=new Error("Cannot find module 'prop-types'");throw o.code="MODULE_NOT_FOUND",o}t.exports=e},297:e=>{e.exports=t},268:e=>{e.exports=o}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,l),o.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{l.r(i),l.d(i,{default:()=>S});var e=l(297),t=l.n(e),o=l(268),r=l.n(o);const n={"custom-scroll":"rcs-custom-scroll",customScroll:"rcs-custom-scroll","outer-container":"rcs-outer-container",outerContainer:"rcs-outer-container",positioning:"rcs-positioning","custom-scrollbar":"rcs-custom-scrollbar",customScrollbar:"rcs-custom-scrollbar","inner-container":"rcs-inner-container",innerContainer:"rcs-inner-container","content-scrolled":"rcs-content-scrolled",contentScrolled:"rcs-content-scrolled","scroll-handle-dragged":"rcs-scroll-handle-dragged",scrollHandleDragged:"rcs-scroll-handle-dragged","custom-scrollbar-rtl":"rcs-custom-scrollbar-rtl",customScrollbarRtl:"rcs-custom-scrollbar-rtl","custom-scroll-handle":"rcs-custom-scroll-handle",customScrollHandle:"rcs-custom-scroll-handle","inner-handle":"rcs-inner-handle",innerHandle:"rcs-inner-handle"};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var d=function(e,t,o){return(t=t||0===t?t:e)>(o=o||0===o?o:e)?(console.error("min limit is greater than max limit"),e):e<t?t:e>o?o:e};function g(e,t){return e.clientX>t.left&&e.clientX<t.right&&e.clientY>t.top&&e.clientY<t.top+t.height}var m=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(S,o);var l,i,c,m,v=(c=S,m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(c);if(m){var o=f(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return u(this,e)});function S(t){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,S),h(p(o=v.call(this,t)),"innerContainerRef",(0,e.createRef)()),h(p(o),"customScrollbarRef",(0,e.createRef)()),h(p(o),"scrollHandleRef",(0,e.createRef)()),h(p(o),"contentWrapperRef",(0,e.createRef)()),h(p(o),"adjustFreezePosition",(function(e){if(o.contentWrapperRef.current){var t=o.getScrolledElement(),r=o.contentWrapperRef.current;o.props.freezePosition&&(r.scrollTop=o.state.scrollPos),e.freezePosition&&(t.scrollTop=o.state.scrollPos)}})),h(p(o),"toggleScrollIfNeeded",(function(){var e=o.contentHeight-o.visibleHeight>1;o.hasScroll!==e&&(o.hasScroll=e,o.forceUpdate())})),h(p(o),"updateScrollPosition",(function(e){var t=o.getScrolledElement(),r=d(e,0,o.contentHeight-o.visibleHeight);t.scrollTop=r,o.setState({scrollPos:r})})),h(p(o),"onClick",(function(e){if(o.hasScroll&&o.isMouseEventOnCustomScrollbar(e)&&!o.isMouseEventOnScrollHandle(e)){var t=o.calculateNewScrollHandleTop(e),r=o.getScrollValueFromHandlePosition(t);o.updateScrollPosition(r)}})),h(p(o),"isMouseEventOnCustomScrollbar",(function(e){if(!o.customScrollbarRef.current)return!1;var t=r().findDOMNode(p(o)).getBoundingClientRect(),n=o.customScrollbarRef.current.getBoundingClientRect(),l=o.props.rtl?{left:t.left,right:n.right}:{left:n.left,width:t.right};return g(e,Object.assign({},{left:t.left,right:t.right,top:t.top,height:t.height},l))})),h(p(o),"isMouseEventOnScrollHandle",(function(e){return!!o.scrollHandleRef.current&&function(e,t){return g(e,t.getBoundingClientRect())}(e,r().findDOMNode(o.scrollHandleRef.current))})),h(p(o),"calculateNewScrollHandleTop",(function(e){var t=r().findDOMNode(p(o)).getBoundingClientRect().top+window.pageYOffset,n=e.pageY-t,l=o.getScrollHandleStyle().top;return n>l+o.scrollHandleHeight?l+Math.min(o.scrollHandleHeight,o.visibleHeight-o.scrollHandleHeight):l-Math.max(o.scrollHandleHeight,0)})),h(p(o),"getScrollValueFromHandlePosition",(function(e){return e/o.scrollRatio})),h(p(o),"getScrollHandleStyle",(function(){var e=o.state.scrollPos*o.scrollRatio;return o.scrollHandleHeight=o.visibleHeight*o.scrollRatio,{height:o.scrollHandleHeight,top:e}})),h(p(o),"adjustCustomScrollPosToContentPos",(function(e){o.setState({scrollPos:e})})),h(p(o),"onScroll",(function(e){o.props.freezePosition||(o.hideScrollThumb(),o.adjustCustomScrollPosToContentPos(e.currentTarget.scrollTop),o.props.onScroll&&o.props.onScroll(e))})),h(p(o),"getScrolledElement",(function(){return o.innerContainerRef.current})),h(p(o),"onMouseDown",(function(e){o.hasScroll&&o.isMouseEventOnScrollHandle(e)&&(o.startDragHandlePos=o.getScrollHandleStyle().top,o.startDragMousePos=e.pageY,o.setState({onDrag:!0}),document.addEventListener("mousemove",o.onHandleDrag,{passive:!1}),document.addEventListener("mouseup",o.onHandleDragEnd,{passive:!1}))})),h(p(o),"onTouchStart",(function(){o.setState({onDrag:!0})})),h(p(o),"onHandleDrag",(function(e){e.preventDefault();var t=e.pageY-o.startDragMousePos,r=d(o.startDragHandlePos+t,0,o.visibleHeight-o.scrollHandleHeight),n=o.getScrollValueFromHandlePosition(r);o.updateScrollPosition(n)})),h(p(o),"onHandleDragEnd",(function(e){o.setState({onDrag:!1}),e.preventDefault(),document.removeEventListener("mousemove",o.onHandleDrag),document.removeEventListener("mouseup",o.onHandleDragEnd)})),h(p(o),"blockOuterScroll",(function(e){if(!o.props.allowOuterScroll){var t=e.currentTarget,r=e.currentTarget.scrollHeight-e.currentTarget.offsetHeight,n=e.deltaY%3?e.deltaY:10*e.deltaY;t.scrollTop+n<=0?(t.scrollTop=0,e.preventDefault()):t.scrollTop+n>=r&&(t.scrollTop=r,e.preventDefault()),e.stopPropagation()}})),h(p(o),"getInnerContainerClasses",(function(){return o.state.scrollPos&&o.props.addScrolledClass?"".concat(n.innerContainer," ").concat(n.contentScrolled):n.innerContainer})),h(p(o),"getScrollStyles",(function(){var e=o.scrollbarYWidth||20,t=o.props.rtl?"marginLeft":"marginRight",r={height:o.props.heightRelativeToParent||o.props.flex?"100%":""};r[t]=-1*e;var n={height:o.props.heightRelativeToParent||o.props.flex?"100%":"",overflowY:o.props.freezePosition?"hidden":"visible"};return n[t]=o.scrollbarYWidth?0:e,{innerContainer:r,contentWrapper:n}})),h(p(o),"getOuterContainerStyle",(function(){return{height:o.props.heightRelativeToParent||o.props.flex?"100%":""}})),h(p(o),"getRootStyles",(function(){var e={};return o.props.heightRelativeToParent?e.height=o.props.heightRelativeToParent:o.props.flex&&(e.flex=o.props.flex),e})),h(p(o),"enforceMinHandleHeight",(function(e){var t=o.props.minScrollHandleHeight;if(e.height>=t)return e;var r=(t-e.height)*(o.state.scrollPos/(o.contentHeight-o.visibleHeight));return{height:t,top:e.top-r}})),o.scrollbarYWidth=0,o.state={scrollPos:0,onDrag:!1},o.hideScrollThumb=function(e,t){var r;function n(){clearTimeout(r)}function l(){n(),r=setTimeout((function(){o.setState({onDrag:!1})}),500)}return l.cancel=n,l}(),o}return l=S,(i=[{key:"componentDidMount",value:function(){void 0!==this.props.scrollTo?this.updateScrollPosition(this.props.scrollTo):this.forceUpdate(),this.innerContainerRef.current&&this.innerContainerRef.current.addEventListener("wheel",this.blockOuterScroll,{passive:!1})}},{key:"componentDidUpdate",value:function(e,t){var o=this.contentHeight,r=this.visibleHeight,n=this.getScrolledElement(),l=t.scrollPos>=o-r;this.contentHeight=n.scrollHeight,this.scrollbarYWidth=n.offsetWidth-n.clientWidth,this.visibleHeight=n.clientHeight,this.scrollRatio=this.contentHeight?this.visibleHeight/this.contentHeight:1,this.toggleScrollIfNeeded();var i=this.state===t;(this.props.freezePosition||e.freezePosition)&&this.adjustFreezePosition(e),void 0!==this.props.scrollTo&&this.props.scrollTo!==e.scrollTo?this.updateScrollPosition(this.props.scrollTo):this.props.keepAtBottom&&i&&l&&this.updateScrollPosition(this.contentHeight-this.visibleHeight)}},{key:"componentWillUnmount",value:function(){this.hideScrollThumb.cancel(),document.removeEventListener("mousemove",this.onHandleDrag),document.removeEventListener("mouseup",this.onHandleDragEnd),this.innerContainerRef.current&&this.innerContainerRef.current.removeEventListener("wheel",this.blockOuterScroll)}},{key:"render",value:function(){var e=this.getScrollStyles(),o=this.getRootStyles(),r=this.enforceMinHandleHeight(this.getScrollHandleStyle()),l=[this.props.className||"",n.customScroll,this.state.onDrag?n.scrollHandleDragged:""].join(" ");return t().createElement("div",{className:l,style:o},t().createElement("div",{className:n.outerContainer,style:this.getOuterContainerStyle(),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onClick:this.onClick},this.hasScroll?t().createElement("div",{className:n.positioning},t().createElement("div",{ref:this.customScrollbarRef,className:"".concat(n.customScrollbar," ").concat(this.props.rtl?n.customScrollbarRtl:""),key:"scrollbar"},t().createElement("div",{ref:this.scrollHandleRef,className:n.customScrollHandle,style:r},t().createElement("div",{className:this.props.handleClass})))):null,t().createElement("div",{ref:this.innerContainerRef,className:this.getInnerContainerClasses(),style:e.innerContainer,onScroll:this.onScroll},t().createElement("div",{className:n.contentWrapper,ref:this.contentWrapperRef,style:e.contentWrapper},this.props.children))))}}])&&s(l.prototype,i),S}(e.Component);try{var v=l(229);m.propTypes={children:v.any,allowOuterScroll:v.bool,heightRelativeToParent:v.string,onScroll:v.func,addScrolledClass:v.bool,freezePosition:v.bool,handleClass:v.string,minScrollHandleHeight:v.number,flex:v.string,rtl:v.bool,scrollTo:v.number,keepAtBottom:v.bool,className:v.string}}catch(e){}m.defaultProps={handleClass:n.innerHandle,minScrollHandleHeight:38};const S=m})(),i})()}));