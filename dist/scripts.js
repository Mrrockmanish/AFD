/*! For license information please see scripts.js.LICENSE.txt */
(()=>{var e,t={968:(e,t,n)=>{"use strict";var i,o=n(755),a=n.n(o);n(729),a()(".li-dropdown").on("click",(function(){a()(this).find(".li-dropdown__ul").fadeToggle(),a()(document).mouseup((function(e){var t=a()(".li-dropdown");t.is(e.target)||0!==t.has(e.target).length||t.find(".li-dropdown__ul").fadeOut()}))})),a()(".filers-switch").on("click",(function(){a()(".filters-block").fadeToggle()})),a()(".filters-button").on("click",(function(){a()(".filters-block").fadeOut()})),i=a()(".afd-gallery "),i.each((function(){a()(this).magnificPopup({delegate:".afd-gallery__item a",type:"image",gallery:{enabled:!0}})})),a()(".open-block").on("click",".open-block__caption",(function(){var e=a()(this).closest(".open-block");e.toggleClass("open"),e.hasClass("open")?e.find(".open-block__content").fadeIn():e.find(".open-block__content").fadeOut()}))},729:(e,t,n)=>{var i,o,a;o=[n(755)],i=function(e){var t,n,i,o,a,r,s="Close",l="BeforeClose",c="MarkupParse",d="Open",p="Change",u="mfp",f=".mfp",m="mfp-ready",g="mfp-removing",v="mfp-prevent-close",h=function(){},C=!!window.jQuery,y=e(window),b=function(e,n){t.ev.on(u+e+f,n)},w=function(t,n,i,o){var a=document.createElement("div");return a.className="mfp-"+t,i&&(a.innerHTML=i),o?n&&n.appendChild(a):(a=e(a),n&&a.appendTo(n)),a},I=function(n,i){t.ev.triggerHandler(u+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},x=function(n){return n===r&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),r=n),t.currTemplate.closeBtn},k=function(){e.magnificPopup.instance||((t=new h).init(),e.magnificPopup.instance=t)};h.prototype={constructor:h,init:function(){var n=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o;if(!1===n.isObj){t.items=n.items.toArray(),t.index=0;var r,s=n.items;for(o=0;o<s.length;o++)if((r=s[o]).parsed&&(r=r.el[0]),r===n.el[0]){t.index=o;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(!t.isOpen){t.types=[],a="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=w("bg").on("click.mfp",(function(){t.close()})),t.wrap=w("wrap").attr("tabindex",-1).on("click.mfp",(function(e){t._checkIfClose(e.target)&&t.close()})),t.container=w("container",t.wrap)),t.contentContainer=w("content"),t.st.preloader&&(t.preloader=w("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(o=0;o<l.length;o++){var p=l[o];p=p.charAt(0).toUpperCase()+p.slice(1),t["init"+p].call(t)}I("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(b(c,(function(e,t,n,i){n.close_replaceWith=x(i.type)})),a+=" mfp-close-btn-in"):t.wrap.append(x())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:y.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup.mfp",(function(e){27===e.keyCode&&t.close()})),y.on("resize.mfp",(function(){t.updateSize()})),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=y.height(),f={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(f.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):f.overflow="hidden");var v=t.st.mainClass;return t.isIE7&&(v+=" mfp-ie7"),v&&t._addClassToMFP(v),t.updateItemHTML(),I("BuildControls"),e("html").css(f),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout((function(){t.content?(t._addClassToMFP(m),t._setFocus()):t.bgOverlay.addClass(m),i.on("focusin.mfp",t._onFocusIn)}),16),t.isOpen=!0,t.updateSize(u),I(d),n}t.updateItemHTML()},close:function(){t.isOpen&&(I(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(g),setTimeout((function(){t._close()}),t.st.removalDelay)):t._close())},_close:function(){I(s);var n="mfp-removing mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup.mfp focusin.mfp"),t.ev.off(f),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,I("AfterClose")},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||y.height();t.fixedContentPos||t.wrap.css("height",t.wH),I("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(I("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var a=!!t.st[i]&&t.st[i].markup;I("FirstMarkupParse",a),t.currTemplate[i]=!a||e(a)}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder");var r=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(r,i),n.preloaded=!0,I(p,n),o=n.type,t.container.prepend(t.contentContainer),I("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[n]?t.content.find(".mfp-close").length||t.content.append(x()):t.content=e:t.content="",I("BeforeAppend"),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var a=t.types,r=0;r<a.length;r++)if(o.el.hasClass("mfp-"+a[r])){i=a[r];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,I("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){if((void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick)||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(y.width()<a)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};I("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",(function(e){e.stopImmediatePropagation()})),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(v)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||y.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){if(n.target!==t.wrap[0]&&!e.contains(t.wrap[0],n.target))return t._setFocus(),!1},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),I(c,[t,n,i]),e.each(n,(function(n,i){if(void 0===i||!1===i)return!0;if((o=n.split("_")).length>1){var a=t.find(".mfp-"+o[0]);if(a.length>0){var r=o[1];"replaceWith"===r?a[0]!==i[0]&&a.replaceWith(i):"img"===r?a.is("img")?a.attr("src",i):a.replaceWith(e("<img>").attr("src",i).attr("class",a.attr("class"))):a.attr(o[1],i)}}else t.find(".mfp-"+n).html(i)}))},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:h.prototype,modules:[],open:function(t,n){return k(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(n){k();var i=e(this);if("string"==typeof n)if("open"===n){var o,a=C?i.data("magnificPopup"):i[0].magnificPopup,r=parseInt(arguments[1],10)||0;a.items?o=a.items[r]:(o=i,a.delegate&&(o=o.find(a.delegate)),o=o.eq(r)),t._openClick({mfpEl:o},i,a)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),C?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var _,T,O,P="inline",S=function(){O&&(T.after(O.addClass(_)).detach(),O=null)};e.magnificPopup.registerModule(P,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(P),b("Close.inline",(function(){S()}))},getInline:function(n,i){if(S(),n.src){var o=t.st.inline,a=e(n.src);if(a.length){var r=a[0].parentNode;r&&r.tagName&&(T||(_=o.hiddenClass,T=w(_),_="mfp-"+_),O=a.after(T).detach().removeClass(_)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),a=e("<div>");return n.inlineElement=a,a}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var E,z="ajax",M=function(){E&&e(document.body).removeClass(E)},B=function(){M(),t.req&&t.req.abort()};e.magnificPopup.registerModule(z,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(z),E=t.st.ajax.cursor,b("Close.ajax",B),b("BeforeChange.ajax",B)},getAjax:function(n){E&&e(document.body).addClass(E),t.updateStatus("loading");var i=e.extend({url:n.src,success:function(i,o,a){var r={data:i,xhr:a};I("ParseAjax",r),t.appendContent(e(r.data),z),n.finished=!0,M(),t._setFocus(),setTimeout((function(){t.wrap.addClass(m)}),16),t.updateStatus("ready"),I("AjaxContentAdded")},error:function(){M(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(i),""}}});var L,H=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image";t.types.push("image"),b("Open.image",(function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)})),b("Close.image",(function(){n.cursor&&e(document.body).removeClass(n.cursor),y.off("resize.mfp")})),b("Resize"+i,t.resizeImage),t.isLowIE&&b("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,L&&clearInterval(L),e.isCheckingImgSize=!1,I("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(a){L&&clearInterval(L),L=setInterval((function(){i.naturalWidth>0?t._onImageHasSize(e):(n>200&&clearInterval(L),3==++n?o(10):40===n?o(50):100===n&&o(500))}),a)};o(1)},getImage:function(n,i){var o=0,a=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,I("ImageLoadComplete")):++o<200?setTimeout(a,100):r())},r=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",a).on("error.mfploader",r),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),(c=n.img[0]).naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:H(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(L&&clearInterval(L),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var A;e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,a,r=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return o["-webkit-"+a]=o["-moz-"+a]=o["-o-"+a]=o[a]=i,t.css(o),t},l=function(){t.content.css("visibility","visible")};b("BuildControls"+i,(function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void l();(a=s(e)).css(t._getOffset()),t.wrap.append(a),o=setTimeout((function(){a.css(t._getOffset(!0)),o=setTimeout((function(){l(),setTimeout((function(){a.remove(),e=a=null,I("ZoomAnimationEnded")}),16)}),r)}),16)}})),b("BeforeClose.zoom",(function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=r,!e){if(!(e=t._getItemToZoom()))return;a=s(e)}a.css(t._getOffset(!0)),t.wrap.append(a),t.content.css("visibility","hidden"),setTimeout((function(){a.css(t._getOffset())}),16)}})),b("Close.zoom",(function(){t._allowZoom()&&(l(),a&&a.remove(),e=null)}))}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(n){var i,o=(i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),a=parseInt(i.css("padding-top"),10),r=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-a;var s={width:i.width(),height:(C?i.innerHeight():i[0].offsetHeight)-r-a};return void 0===A&&(A=void 0!==document.createElement("p").style.MozTransform),A?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var F="iframe",j=function(e){if(t.currTemplate.iframe){var n=t.currTemplate.iframe.find("iframe");n.length&&(e||(n[0].src="//about:blank"),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(F),b("BeforeChange",(function(e,t,n){t!==n&&(t===F?j():n===F&&j(!0))})),b("Close.iframe",(function(){j()}))},getIframe:function(n,i){var o=n.src,a=t.st.iframe;e.each(a.patterns,(function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1}));var r={};return a.srcAction&&(r[a.srcAction]=o),t._parseMarkup(i,r,n),t.updateStatus("ready"),i}}});var N=function(e){var n=t.items.length;return e>n-1?e-n:e<0?n+e:e},W=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery";if(t.direction=!0,!n||!n.enabled)return!1;a+=" mfp-gallery",b(d+o,(function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",(function(){if(t.items.length>1)return t.next(),!1})),i.on("keydown"+o,(function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()}))})),b("UpdateStatus"+o,(function(e,n){n.text&&(n.text=W(n.text,t.currItem.index,t.items.length))})),b(c+o,(function(e,i,o,a){var r=t.items.length;o.counter=r>1?W(n.tCounter,a.index,r):""})),b("BuildControls"+o,(function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(v),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(v);o.click((function(){t.prev()})),a.click((function(){t.next()})),t.container.append(o.add(a))}})),b(p+o,(function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout((function(){t.preloadNearbyImages(),t._preloadTimeout=null}),16)})),b(s+o,(function(){i.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=N(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=N(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=N(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),I("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",(function(){i.hasSize=!0})).on("error.mfploader",(function(){i.hasSize=!0,i.loadError=!0,I("LazyLoadError",i)})).attr("src",i.src)),i.preloaded=!0}}}});var R="retina";e.magnificPopup.registerModule(R,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,(function(e){return"@2x"+e}))},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;(n=isNaN(n)?n():n)>1&&(b("ImageHasSize.retina",(function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})})),b("ElementParse.retina",(function(t,i){i.src=e.replaceSrc(i,n)})))}}}}),k()},void 0===(a=i.apply(t,o))||(e.exports=a)}},n={};function i(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,n,o,a)=>{if(!n){var r=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],s=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={787:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[r,s,l]=n,c=0;if(r.some((t=>0!==e[t]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var d=l(i)}for(t&&t(n);c<r.length;c++)a=r[c],i.o(e,a)&&e[a]&&e[a][0](),e[r[c]]=0;return i.O(d)},n=self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=i.O(void 0,[755],(()=>i(968)));o=i.O(o)})();
//# sourceMappingURL=scripts.js.map