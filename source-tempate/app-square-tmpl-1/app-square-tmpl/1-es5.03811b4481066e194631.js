(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+EyX":function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return l}));var n=i("CcnG"),r=(i("HF1C"),i("Ip0R")),s=n.rb({encapsulation:0,styles:['[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0!important;overflow-x:hidden;overflow-y:hidden}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:col-resize;height:100%}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:row-resize;width:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url("")}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area, .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%]{transition:flex-basis .3s}'],data:{}});function a(e){return n.Kb(0,[(e()(),n.tb(0,0,[[1,0],["gutterEls",1]],null,1,"div",[["class","as-split-gutter"]],[[4,"flex-basis","px"],[4,"order",null]],[[null,"mousedown"],[null,"touchstart"],[null,"mouseup"],[null,"touchend"]],(function(e,t,i){var n=!0,r=e.component;return"mousedown"===t&&(n=!1!==r.startDragging(i,2*e.parent.context.index+1,e.parent.context.index+1)&&n),"touchstart"===t&&(n=!1!==r.startDragging(i,2*e.parent.context.index+1,e.parent.context.index+1)&&n),"mouseup"===t&&(n=!1!==r.clickGutter(i,e.parent.context.index+1)&&n),"touchend"===t&&(n=!1!==r.clickGutter(i,e.parent.context.index+1)&&n),n}),null,null)),(e()(),n.tb(1,0,null,null,0,"div",[["class","as-split-gutter-icon"]],null,null,null,null,null))],null,(function(e,t){e(t,0,0,t.component.gutterSize,2*t.parent.context.index+1)}))}function o(e){return n.Kb(0,[(e()(),n.ib(16777216,null,null,1,null,a)),n.sb(1,16384,null,0,r.j,[n.Q,n.N],{ngIf:[0,"ngIf"]},null),(e()(),n.ib(0,null,null,0))],(function(e,t){e(t,1,0,!1===t.context.last)}),null)}function l(e){return n.Kb(2,[n.Hb(671088640,1,{gutterEls:1}),n.Db(null,0),(e()(),n.ib(16777216,null,null,1,null,o)),n.sb(3,278528,null,0,r.i,[n.Q,n.N,n.t],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){e(t,3,0,t.component.displayedAreas)}),null)}},HF1C:function(e,t,i){"use strict";i.d(t,"a",(function(){return z})),i.d(t,"b",(function(){return b})),i.d(t,"c",(function(){return A}));var n=i("CcnG"),r=i("mrSG"),s=i("K9Ia"),a=i("6blF"),o=i("Gi3i");function l(e){return void 0!==e.changedTouches&&e.changedTouches.length>0?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:void 0!==e.clientX&&void 0!==e.clientY?{x:e.clientX,y:e.clientY}:null}function u(e,t){var i=e.nativeElement.getBoundingClientRect();return"horizontal"===t?i.width:i.height}function h(e){return"boolean"==typeof e?e:"false"!==e}function c(e,t){return null==e?t:(e=Number(e),!isNaN(e)&&e>=0?e:t)}function p(e,t){if("percent"===e){var i=t.reduce((function(e,t){return null!==t?e+t:e}),0);return t.every((function(e){return null!==e}))&&i>99.9&&i<100.1}if("pixel"===e)return 1===t.filter((function(e){return null===e})).length}function d(e){return null===e.size?null:!0===e.component.lockSize?e.size:null===e.component.minSize?null:e.component.minSize>e.size?e.size:e.component.minSize}function f(e){return null===e.size?null:!0===e.component.lockSize?e.size:null===e.component.maxSize?null:e.component.maxSize<e.size?e.size:e.component.maxSize}function g(e,t,i,n){return t.reduce((function(t,i){var r=function(e,t,i,n){return 0===i?{areaSnapshot:t,pixelAbsorb:0,percentAfterAbsorption:t.sizePercentAtStart,pixelRemain:0}:0===t.sizePixelAtStart&&i<0?{areaSnapshot:t,pixelAbsorb:0,percentAfterAbsorption:0,pixelRemain:i}:"percent"===e?function(e,t,i){var n=(e.sizePixelAtStart+t)/i*100;if(t>0){if(null!==e.area.maxSize&&n>e.area.maxSize){var r=e.area.maxSize/100*i;return{areaSnapshot:e,pixelAbsorb:r,percentAfterAbsorption:e.area.maxSize,pixelRemain:e.sizePixelAtStart+t-r}}return{areaSnapshot:e,pixelAbsorb:t,percentAfterAbsorption:n>100?100:n,pixelRemain:0}}if(t<0){if(null!==e.area.minSize&&n<e.area.minSize){var s=e.area.minSize/100*i;return{areaSnapshot:e,pixelAbsorb:s,percentAfterAbsorption:e.area.minSize,pixelRemain:e.sizePixelAtStart+t-s}}return n<0?{areaSnapshot:e,pixelAbsorb:-e.sizePixelAtStart,percentAfterAbsorption:0,pixelRemain:t+e.sizePixelAtStart}:{areaSnapshot:e,pixelAbsorb:t,percentAfterAbsorption:n,pixelRemain:0}}}(t,i,n):"pixel"===e?function(e,t,i){var n=e.sizePixelAtStart+t;return t>0?null!==e.area.maxSize&&n>e.area.maxSize?{areaSnapshot:e,pixelAbsorb:e.area.maxSize-e.sizePixelAtStart,percentAfterAbsorption:-1,pixelRemain:n-e.area.maxSize}:{areaSnapshot:e,pixelAbsorb:t,percentAfterAbsorption:-1,pixelRemain:0}:t<0?null!==e.area.minSize&&n<e.area.minSize?{areaSnapshot:e,pixelAbsorb:e.area.minSize+t-n,percentAfterAbsorption:-1,pixelRemain:n-e.area.minSize}:n<0?{areaSnapshot:e,pixelAbsorb:-e.sizePixelAtStart,percentAfterAbsorption:-1,pixelRemain:t+e.sizePixelAtStart}:{areaSnapshot:e,pixelAbsorb:t,percentAfterAbsorption:-1,pixelRemain:0}:void 0}(t,i):void 0}(e,i,t.remain,n);return t.list.push(r),t.remain=r.pixelRemain,t}),{remain:i,list:[]})}function m(e,t){"percent"===e?t.areaSnapshot.area.size=t.percentAfterAbsorption:"pixel"===e&&null!==t.areaSnapshot.area.size&&(t.areaSnapshot.area.size=t.areaSnapshot.sizePixelAtStart+t.pixelAbsorb)}var A=function(){function e(e,t,i,r){this.ngZone=e,this.elRef=t,this.cdRef=i,this.renderer=r,this._direction="horizontal",this._unit="percent",this._gutterSize=11,this._gutterStep=1,this._restrictMove=!1,this._useTransition=!1,this._disabled=!1,this._dir="ltr",this._gutterDblClickDuration=0,this.dragStart=new n.m(!1),this.dragEnd=new n.m(!1),this.gutterClick=new n.m(!1),this.gutterDblClick=new n.m(!1),this.dragProgressSubject=new s.a,this.dragProgress$=this.dragProgressSubject.asObservable(),this.isDragging=!1,this.dragListeners=[],this.snapshot=null,this.startPoint=null,this.endPoint=null,this.displayedAreas=[],this.hidedAreas=[],this._clickTimeout=null,this.direction=this._direction}return Object.defineProperty(e.prototype,"direction",{get:function(){return this._direction},set:function(e){this._direction="vertical"===e?"vertical":"horizontal",this.renderer.addClass(this.elRef.nativeElement,"as-"+this._direction),this.renderer.removeClass(this.elRef.nativeElement,"as-"+("vertical"===this._direction?"horizontal":"vertical")),this.build(!1,!1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"unit",{get:function(){return this._unit},set:function(e){this._unit="pixel"===e?"pixel":"percent",this.renderer.addClass(this.elRef.nativeElement,"as-"+this._unit),this.renderer.removeClass(this.elRef.nativeElement,"as-"+("pixel"===this._unit?"percent":"pixel")),this.build(!1,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"gutterSize",{get:function(){return this._gutterSize},set:function(e){this._gutterSize=c(e,11),this.build(!1,!1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"gutterStep",{get:function(){return this._gutterStep},set:function(e){this._gutterStep=c(e,1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"restrictMove",{get:function(){return this._restrictMove},set:function(e){this._restrictMove=h(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useTransition",{get:function(){return this._useTransition},set:function(e){this._useTransition=h(e),this._useTransition?this.renderer.addClass(this.elRef.nativeElement,"as-transition"):this.renderer.removeClass(this.elRef.nativeElement,"as-transition")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this._disabled},set:function(e){this._disabled=h(e),this._disabled?this.renderer.addClass(this.elRef.nativeElement,"as-disabled"):this.renderer.removeClass(this.elRef.nativeElement,"as-disabled")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dir",{get:function(){return this._dir},set:function(e){this._dir="rtl"===e?"rtl":"ltr",this.renderer.setAttribute(this.elRef.nativeElement,"dir",this._dir)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"gutterDblClickDuration",{get:function(){return this._gutterDblClickDuration},set:function(e){this._gutterDblClickDuration=c(e,0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"transitionEnd",{get:function(){var e=this;return new a.a((function(t){return e.transitionEndSubscriber=t})).pipe(Object(o.a)(20))},enumerable:!0,configurable:!0}),e.prototype.ngAfterViewInit=function(){var e=this;this.ngZone.runOutsideAngular((function(){setTimeout((function(){return e.renderer.addClass(e.elRef.nativeElement,"as-init")}))}))},e.prototype.getNbGutters=function(){return 0===this.displayedAreas.length?0:this.displayedAreas.length-1},e.prototype.addArea=function(e){var t={component:e,order:0,size:0,minSize:null,maxSize:null};!0===e.visible?(this.displayedAreas.push(t),this.build(!0,!0)):this.hidedAreas.push(t)},e.prototype.removeArea=function(e){if(this.displayedAreas.some((function(t){return t.component===e}))){var t=this.displayedAreas.find((function(t){return t.component===e}));this.displayedAreas.splice(this.displayedAreas.indexOf(t),1),this.build(!0,!0)}else this.hidedAreas.some((function(t){return t.component===e}))&&(t=this.hidedAreas.find((function(t){return t.component===e})),this.hidedAreas.splice(this.hidedAreas.indexOf(t),1))},e.prototype.updateArea=function(e,t,i){!0===e.visible&&this.build(t,i)},e.prototype.showArea=function(e){var t,i=this.hidedAreas.find((function(t){return t.component===e}));if(void 0!==i){var n=this.hidedAreas.splice(this.hidedAreas.indexOf(i),1);(t=this.displayedAreas).push.apply(t,Object(r.__spread)(n)),this.build(!0,!0)}},e.prototype.hideArea=function(e){var t,i=this.displayedAreas.find((function(t){return t.component===e}));if(void 0!==i){var n=this.displayedAreas.splice(this.displayedAreas.indexOf(i),1);n.forEach((function(e){e.order=0,e.size=0})),(t=this.hidedAreas).push.apply(t,Object(r.__spread)(n)),this.build(!0,!0)}},e.prototype.getVisibleAreaSizes=function(){return this.displayedAreas.map((function(e){return null===e.size?"*":e.size}))},e.prototype.setVisibleAreaSizes=function(e){if(e.length!==this.displayedAreas.length)return!1;var t=e.map((function(e){return c(e,null)}));return!1!==p(this.unit,t)&&(this.displayedAreas.forEach((function(e,i){return e.component._size=t[i]})),this.build(!1,!0),!0)},e.prototype.build=function(e,t){if(this.stopDragging(),!0===e&&(this.displayedAreas.every((function(e){return null!==e.component.order}))&&this.displayedAreas.sort((function(e,t){return e.component.order-t.component.order})),this.displayedAreas.forEach((function(e,t){e.order=2*t,e.component.setStyleOrder(e.order)}))),!0===t){var i=p(this.unit,this.displayedAreas.map((function(e){return e.component.size})));switch(this.unit){case"percent":var n=100/this.displayedAreas.length;this.displayedAreas.forEach((function(e){e.size=i?e.component.size:n,e.minSize=d(e),e.maxSize=f(e)}));break;case"pixel":if(i)this.displayedAreas.forEach((function(e){e.size=e.component.size,e.minSize=d(e),e.maxSize=f(e)}));else{var r=this.displayedAreas.filter((function(e){return null===e.component.size}));if(0===r.length&&this.displayedAreas.length>0)this.displayedAreas.forEach((function(e,t){e.size=0===t?null:e.component.size,e.minSize=0===t?null:d(e),e.maxSize=0===t?null:f(e)}));else if(r.length>1){var s=!1;this.displayedAreas.forEach((function(e){null===e.component.size?!1===s?(e.size=null,e.minSize=null,e.maxSize=null,s=!0):(e.size=100,e.minSize=null,e.maxSize=null):(e.size=e.component.size,e.minSize=d(e),e.maxSize=f(e))}))}}}}this.refreshStyleSizes(),this.cdRef.markForCheck()},e.prototype.refreshStyleSizes=function(){var e=this;if("percent"===this.unit)if(1===this.displayedAreas.length)this.displayedAreas[0].component.setStyleFlex(0,0,"100%",!1,!1);else{var t=this.getNbGutters()*this.gutterSize;this.displayedAreas.forEach((function(e){e.component.setStyleFlex(0,0,"calc( "+e.size+"% - "+e.size/100*t+"px )",null!==e.minSize&&e.minSize===e.size,null!==e.maxSize&&e.maxSize===e.size)}))}else"pixel"===this.unit&&this.displayedAreas.forEach((function(t){null===t.size?t.component.setStyleFlex(1,1,1===e.displayedAreas.length?"100%":"auto",!1,!1):1===e.displayedAreas.length?t.component.setStyleFlex(0,0,"100%",!1,!1):t.component.setStyleFlex(0,0,t.size+"px",null!==t.minSize&&t.minSize===t.size,null!==t.maxSize&&t.maxSize===t.size)}))},e.prototype.clickGutter=function(e,t){var i=this,n=l(e);this.startPoint&&this.startPoint.x===n.x&&this.startPoint.y===n.y&&(null!==this._clickTimeout?(window.clearTimeout(this._clickTimeout),this._clickTimeout=null,this.notify("dblclick",t),this.stopDragging()):this._clickTimeout=window.setTimeout((function(){i._clickTimeout=null,i.notify("click",t),i.stopDragging()}),this.gutterDblClickDuration))},e.prototype.startDragging=function(e,t,i){var n=this;e.preventDefault(),e.stopPropagation(),this.startPoint=l(e),null!==this.startPoint&&!0!==this.disabled&&(this.snapshot={gutterNum:i,lastSteppedOffset:0,allAreasSizePixel:u(this.elRef,this.direction)-this.getNbGutters()*this.gutterSize,allInvolvedAreasSizePercent:100,areasBeforeGutter:[],areasAfterGutter:[]},this.displayedAreas.forEach((function(e){var i={area:e,sizePixelAtStart:u(e.component.elRef,n.direction),sizePercentAtStart:"percent"===n.unit?e.size:-1};e.order<t?!0===n.restrictMove?n.snapshot.areasBeforeGutter=[i]:n.snapshot.areasBeforeGutter.unshift(i):e.order>t&&(!0===n.restrictMove?0===n.snapshot.areasAfterGutter.length&&(n.snapshot.areasAfterGutter=[i]):n.snapshot.areasAfterGutter.push(i))})),this.snapshot.allInvolvedAreasSizePercent=Object(r.__spread)(this.snapshot.areasBeforeGutter,this.snapshot.areasAfterGutter).reduce((function(e,t){return e+t.sizePercentAtStart}),0),0!==this.snapshot.areasBeforeGutter.length&&0!==this.snapshot.areasAfterGutter.length&&(this.dragListeners.push(this.renderer.listen("document","mouseup",this.stopDragging.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchend",this.stopDragging.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchcancel",this.stopDragging.bind(this))),this.ngZone.runOutsideAngular((function(){n.dragListeners.push(n.renderer.listen("document","mousemove",n.dragEvent.bind(n))),n.dragListeners.push(n.renderer.listen("document","touchmove",n.dragEvent.bind(n)))})),this.displayedAreas.forEach((function(e){return e.component.lockEvents()})),this.isDragging=!0,this.renderer.addClass(this.elRef.nativeElement,"as-dragging"),this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum-1].nativeElement,"as-dragged"),this.notify("start",this.snapshot.gutterNum)))},e.prototype.dragEvent=function(e){var t=this;if(e.preventDefault(),e.stopPropagation(),null!==this._clickTimeout&&(window.clearTimeout(this._clickTimeout),this._clickTimeout=null),!1!==this.isDragging&&(this.endPoint=l(e),null!==this.endPoint)){var i="horizontal"===this.direction?this.startPoint.x-this.endPoint.x:this.startPoint.y-this.endPoint.y;"rtl"===this.dir&&(i=-i);var n=Math.round(i/this.gutterStep)*this.gutterStep;if(n!==this.snapshot.lastSteppedOffset){this.snapshot.lastSteppedOffset=n;var s=g(this.unit,this.snapshot.areasBeforeGutter,-n,this.snapshot.allAreasSizePixel),a=g(this.unit,this.snapshot.areasAfterGutter,n,this.snapshot.allAreasSizePixel);if(0!==s.remain&&0!==a.remain?Math.abs(s.remain)===Math.abs(a.remain)||(Math.abs(s.remain)>Math.abs(a.remain)?a=g(this.unit,this.snapshot.areasAfterGutter,n+s.remain,this.snapshot.allAreasSizePixel):s=g(this.unit,this.snapshot.areasBeforeGutter,-(n-a.remain),this.snapshot.allAreasSizePixel)):0!==s.remain?a=g(this.unit,this.snapshot.areasAfterGutter,n+s.remain,this.snapshot.allAreasSizePixel):0!==a.remain&&(s=g(this.unit,this.snapshot.areasBeforeGutter,-(n-a.remain),this.snapshot.allAreasSizePixel)),"percent"===this.unit){var o=Object(r.__spread)(s.list,a.list),u=o.find((function(e){return 0!==e.percentAfterAbsorption&&e.percentAfterAbsorption!==e.areaSnapshot.area.minSize&&e.percentAfterAbsorption!==e.areaSnapshot.area.maxSize}));u&&(u.percentAfterAbsorption=this.snapshot.allInvolvedAreasSizePercent-o.filter((function(e){return e!==u})).reduce((function(e,t){return e+t.percentAfterAbsorption}),0))}s.list.forEach((function(e){return m(t.unit,e)})),a.list.forEach((function(e){return m(t.unit,e)})),this.refreshStyleSizes(),this.notify("progress",this.snapshot.gutterNum)}}},e.prototype.stopDragging=function(e){var t=this;if(e&&(e.preventDefault(),e.stopPropagation()),!1!==this.isDragging){for(this.displayedAreas.forEach((function(e){return e.component.unlockEvents()}));this.dragListeners.length>0;){var i=this.dragListeners.pop();i&&i()}this.isDragging=!1,!this.endPoint||this.startPoint.x===this.endPoint.x&&this.startPoint.y===this.endPoint.y||this.notify("end",this.snapshot.gutterNum),this.renderer.removeClass(this.elRef.nativeElement,"as-dragging"),this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum-1].nativeElement,"as-dragged"),this.snapshot=null,this.ngZone.runOutsideAngular((function(){setTimeout((function(){t.startPoint=null,t.endPoint=null}))}))}},e.prototype.notify=function(e,t){var i=this,n=this.getVisibleAreaSizes();"start"===e?this.dragStart.emit({gutterNum:t,sizes:n}):"end"===e?this.dragEnd.emit({gutterNum:t,sizes:n}):"click"===e?this.gutterClick.emit({gutterNum:t,sizes:n}):"dblclick"===e?this.gutterDblClick.emit({gutterNum:t,sizes:n}):"transitionEnd"===e?this.transitionEndSubscriber&&this.ngZone.run((function(){return i.transitionEndSubscriber.next(n)})):"progress"===e&&this.dragProgressSubject.next({gutterNum:t,sizes:n})},e.prototype.ngOnDestroy=function(){this.stopDragging()},e}(),b=function(){function e(e,t,i,n){this.ngZone=e,this.elRef=t,this.renderer=i,this.split=n,this._order=null,this._size=null,this._minSize=null,this._maxSize=null,this._lockSize=!1,this._visible=!0,this.lockListeners=[],this.renderer.addClass(this.elRef.nativeElement,"as-split-area")}return Object.defineProperty(e.prototype,"order",{get:function(){return this._order},set:function(e){this._order=c(e,null),this.split.updateArea(this,!0,!1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._size},set:function(e){this._size=c(e,null),this.split.updateArea(this,!1,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minSize",{get:function(){return this._minSize},set:function(e){this._minSize=c(e,null),this.split.updateArea(this,!1,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxSize",{get:function(){return this._maxSize},set:function(e){this._maxSize=c(e,null),this.split.updateArea(this,!1,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lockSize",{get:function(){return this._lockSize},set:function(e){this._lockSize=h(e),this.split.updateArea(this,!1,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return this._visible},set:function(e){this._visible=h(e),this._visible?(this.split.showArea(this),this.renderer.removeClass(this.elRef.nativeElement,"as-hidden")):(this.split.hideArea(this),this.renderer.addClass(this.elRef.nativeElement,"as-hidden"))},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){var e=this;this.split.addArea(this),this.ngZone.runOutsideAngular((function(){e.transitionListener=e.renderer.listen(e.elRef.nativeElement,"transitionend",(function(t){"flex-basis"===t.propertyName&&e.split.notify("transitionEnd",-1)}))}))},e.prototype.setStyleOrder=function(e){this.renderer.setStyle(this.elRef.nativeElement,"order",e)},e.prototype.setStyleFlex=function(e,t,i,n,r){this.renderer.setStyle(this.elRef.nativeElement,"flex-grow",e),this.renderer.setStyle(this.elRef.nativeElement,"flex-shrink",t),this.renderer.setStyle(this.elRef.nativeElement,"flex-basis",i),!0===n?this.renderer.addClass(this.elRef.nativeElement,"as-min"):this.renderer.removeClass(this.elRef.nativeElement,"as-min"),!0===r?this.renderer.addClass(this.elRef.nativeElement,"as-max"):this.renderer.removeClass(this.elRef.nativeElement,"as-max")},e.prototype.lockEvents=function(){var e=this;this.ngZone.runOutsideAngular((function(){e.lockListeners.push(e.renderer.listen(e.elRef.nativeElement,"selectstart",(function(e){return!1}))),e.lockListeners.push(e.renderer.listen(e.elRef.nativeElement,"dragstart",(function(e){return!1})))}))},e.prototype.unlockEvents=function(){for(;this.lockListeners.length>0;){var e=this.lockListeners.pop();e&&e()}},e.prototype.ngOnDestroy=function(){this.unlockEvents(),this.transitionListener&&this.transitionListener(),this.split.removeArea(this)},e}(),z=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:[]}},e.forChild=function(){return{ngModule:e,providers:[]}},e}()}}]);