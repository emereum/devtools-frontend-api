var Fr=function(r,t){return Fr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])},Fr(r,t)};function _(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Fr(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Nr(r,t,e,o){function n(i){return i instanceof e?i:new e(function(f){f(i)})}return new(e||(e=Promise))(function(i,f){function u(p){try{a(o.next(p))}catch(h){f(h)}}function c(p){try{a(o.throw(p))}catch(h){f(h)}}function a(p){p.done?i(p.value):n(p.value).then(u,c)}a((o=o.apply(r,t||[])).next())})}function ir(r,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,n,i,f;return f={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function u(a){return function(p){return c([a,p])}}function c(a){if(o)throw new TypeError("Generator is already executing.");for(;f&&(f=0,a[0]&&(e=0)),e;)try{if(o=1,n&&(i=a[0]&2?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return e.label++,{value:a[1],done:!1};case 5:e.label++,n=a[1],a=[0];continue;case 7:a=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){e.label=a[1];break}if(a[0]===6&&e.label<i[1]){e.label=i[1],i=a;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(a);break}i[2]&&e.ops.pop(),e.trys.pop();continue}a=t.call(r,e)}catch(p){a=[6,p],n=0}finally{o=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function T(r){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&r[t],o=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&o>=r.length&&(r=void 0),{value:r&&r[o++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(r,t){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var o=e.call(r),n,i=[],f;try{for(;(t===void 0||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(u){f={error:u}}finally{try{n&&!n.done&&(e=o.return)&&e.call(o)}finally{if(f)throw f.error}}return i}function O(r,t,e){if(e||arguments.length===2)for(var o=0,n=t.length,i;o<n;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return r.concat(i||Array.prototype.slice.call(t))}function V(r){return this instanceof V?(this.v=r,this):new V(r)}function qr(r,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=e.apply(r,t||[]),n,i=[];return n={},f("next"),f("throw"),f("return"),n[Symbol.asyncIterator]=function(){return this},n;function f(l){o[l]&&(n[l]=function(y){return new Promise(function(g,b){i.push([l,y,g,b])>1||u(l,y)})})}function u(l,y){try{c(o[l](y))}catch(g){h(i[0][3],g)}}function c(l){l.value instanceof V?Promise.resolve(l.value.v).then(a,p):h(i[0][2],l)}function a(l){u("next",l)}function p(l){u("throw",l)}function h(l,y){l(y),i.shift(),i.length&&u(i[0][0],i[0][1])}}function zr(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=r[Symbol.asyncIterator],e;return t?t.call(r):(r=typeof T=="function"?T(r):r[Symbol.iterator](),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(i){e[i]=r[i]&&function(f){return new Promise(function(u,c){f=r[i](f),n(u,c,f.done,f.value)})}}function n(i,f,u,c){Promise.resolve(c).then(function(a){i({value:a,done:u})},f)}}function s(r){return typeof r=="function"}function q(r){var t=function(o){Error.call(o),o.stack=new Error().stack},e=r(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var fr=q(function(r){return function(e){r(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(o,n){return n+1+") "+o.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function C(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var L=function(){function r(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var t,e,o,n,i;if(!this.closed){this.closed=!0;var f=this._parentage;if(f)if(this._parentage=null,Array.isArray(f))try{for(var u=T(f),c=u.next();!c.done;c=u.next()){var a=c.value;a.remove(this)}}catch(b){t={error:b}}finally{try{c&&!c.done&&(e=u.return)&&e.call(u)}finally{if(t)throw t.error}}else f.remove(this);var p=this.initialTeardown;if(s(p))try{p()}catch(b){i=b instanceof fr?b.errors:[b]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var l=T(h),y=l.next();!y.done;y=l.next()){var g=y.value;try{Gr(g)}catch(b){i=i??[],b instanceof fr?i=O(O([],w(i)),w(b.errors)):i.push(b)}}}catch(b){o={error:b}}finally{try{y&&!y.done&&(n=l.return)&&n.call(l)}finally{if(o)throw o.error}}}if(i)throw new fr(i)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)Gr(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},r.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},r.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},r.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&C(e,t)},r.prototype.remove=function(t){var e=this._finalizers;e&&C(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=function(){var t=new r;return t.closed=!0,t}(),r}();var kr=L.EMPTY;function ar(r){return r instanceof L||r&&"closed"in r&&s(r.remove)&&s(r.add)&&s(r.unsubscribe)}function Gr(r){s(r)?r():r.unsubscribe()}var j={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var z={setTimeout:function(r,t){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];var n=z.delegate;return n!=null&&n.setTimeout?n.setTimeout.apply(n,O([r,t],w(e))):setTimeout.apply(void 0,O([r,t],w(e)))},clearTimeout:function(r){var t=z.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function ur(r){z.setTimeout(function(){var t=j.onUnhandledError;if(t)t(r);else throw r})}function F(){}var Hr=function(){return Mr("C",void 0,void 0)}();function Jr(r){return Mr("E",void 0,r)}function Kr(r){return Mr("N",r,void 0)}function Mr(r,t,e){return{kind:r,value:t,error:e}}var D=null;function G(r){if(j.useDeprecatedSynchronousErrorHandling){var t=!D;if(t&&(D={errorThrown:!1,error:null}),r(),t){var e=D,o=e.errorThrown,n=e.error;if(D=null,o)throw n}}else r()}function Br(r){j.useDeprecatedSynchronousErrorHandling&&D&&(D.errorThrown=!0,D.error=r)}var $=function(r){_(t,r);function t(e){var o=r.call(this)||this;return o.isStopped=!1,e?(o.destination=e,ar(e)&&e.add(o)):o.destination=qe,o}return t.create=function(e,o,n){return new H(e,o,n)},t.prototype.next=function(e){this.isStopped?Cr(Kr(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?Cr(Jr(e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?Cr(Hr,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(L);var De=Function.prototype.bind;function Rr(r,t){return De.call(r,t)}var Ye=function(){function r(t){this.partialObserver=t}return r.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(o){cr(o)}},r.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(o){cr(o)}else cr(t)},r.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){cr(e)}},r}(),H=function(r){_(t,r);function t(e,o,n){var i=r.call(this)||this,f;if(s(e)||!e)f={next:e??void 0,error:o??void 0,complete:n??void 0};else{var u;i&&j.useDeprecatedNextContext?(u=Object.create(e),u.unsubscribe=function(){return i.unsubscribe()},f={next:e.next&&Rr(e.next,u),error:e.error&&Rr(e.error,u),complete:e.complete&&Rr(e.complete,u)}):f=e}return i.destination=new Ye(f),i}return t}($);function cr(r){j.useDeprecatedSynchronousErrorHandling?Br(r):ur(r)}function Ne(r){throw r}function Cr(r,t){var e=j.onStoppedNotification;e&&z.setTimeout(function(){return e(r,t)})}var qe={closed:!0,next:F,error:Ne,complete:F};var J=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function S(r){return r}function Qr(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return Lr(r)}function Lr(r){return r.length===0?S:r.length===1?r[0]:function(e){return r.reduce(function(o,n){return n(o)},e)}}var v=function(){function r(t){t&&(this._subscribe=t)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(t,e,o){var n=this,i=Ge(t)?t:new H(t,e,o);return G(function(){var f=n,u=f.operator,c=f.source;i.add(u?u.call(i,c):c?n._subscribe(i):n._trySubscribe(i))}),i},r.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},r.prototype.forEach=function(t,e){var o=this;return e=Xr(e),new e(function(n,i){var f=new H({next:function(u){try{t(u)}catch(c){i(c),f.unsubscribe()}},error:i,complete:n});o.subscribe(f)})},r.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},r.prototype[J]=function(){return this},r.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Lr(t)(this)},r.prototype.toPromise=function(t){var e=this;return t=Xr(t),new t(function(o,n){var i;e.subscribe(function(f){return i=f},function(f){return n(f)},function(){return o(i)})})},r.create=function(t){return new r(t)},r}();function Xr(r){var t;return(t=r??j.Promise)!==null&&t!==void 0?t:Promise}function ze(r){return r&&s(r.next)&&s(r.error)&&s(r.complete)}function Ge(r){return r&&r instanceof $||ze(r)&&ar(r)}function He(r){return s(r==null?void 0:r.lift)}function d(r){return function(t){if(He(t))return t.lift(function(e){try{return r(e,this)}catch(o){this.error(o)}});throw new TypeError("Unable to lift unknown Observable type")}}function m(r,t,e,o,n){return new Je(r,t,e,o,n)}var Je=function(r){_(t,r);function t(e,o,n,i,f,u){var c=r.call(this,e)||this;return c.onFinalize=f,c.shouldUnsubscribe=u,c._next=o?function(a){try{o(a)}catch(p){e.error(p)}}:r.prototype._next,c._error=i?function(a){try{i(a)}catch(p){e.error(p)}finally{this.unsubscribe()}}:r.prototype._error,c._complete=n?function(){try{n()}catch(a){e.error(a)}finally{this.unsubscribe()}}:r.prototype._complete,c}return t.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var o=this.closed;r.prototype.unsubscribe.call(this),!o&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},t}($);var Zr=q(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var Ur=function(r){_(t,r);function t(){var e=r.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var o=new $r(this,this);return o.operator=e,o},t.prototype._throwIfClosed=function(){if(this.closed)throw new Zr},t.prototype.next=function(e){var o=this;G(function(){var n,i;if(o._throwIfClosed(),!o.isStopped){o.currentObservers||(o.currentObservers=Array.from(o.observers));try{for(var f=T(o.currentObservers),u=f.next();!u.done;u=f.next()){var c=u.value;c.next(e)}}catch(a){n={error:a}}finally{try{u&&!u.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}}})},t.prototype.error=function(e){var o=this;G(function(){if(o._throwIfClosed(),!o.isStopped){o.hasError=o.isStopped=!0,o.thrownError=e;for(var n=o.observers;n.length;)n.shift().error(e)}})},t.prototype.complete=function(){var e=this;G(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var o=e.observers;o.length;)o.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var o=this,n=this,i=n.hasError,f=n.isStopped,u=n.observers;return i||f?kr:(this.currentObservers=null,u.push(e),new L(function(){o.currentObservers=null,C(u,e)}))},t.prototype._checkFinalizedStatuses=function(e){var o=this,n=o.hasError,i=o.thrownError,f=o.isStopped;n?e.error(i):f&&e.complete()},t.prototype.asObservable=function(){var e=new v;return e.source=this,e},t.create=function(e,o){return new $r(e,o)},t}(v);var $r=function(r){_(t,r);function t(e,o){var n=r.call(this)||this;return n.destination=e,n.source=o,n}return t.prototype.next=function(e){var o,n;(n=(o=this.destination)===null||o===void 0?void 0:o.next)===null||n===void 0||n.call(o,e)},t.prototype.error=function(e){var o,n;(n=(o=this.destination)===null||o===void 0?void 0:o.error)===null||n===void 0||n.call(o,e)},t.prototype.complete=function(){var e,o;(o=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||o===void 0||o.call(e)},t.prototype._subscribe=function(e){var o,n;return(n=(o=this.source)===null||o===void 0?void 0:o.subscribe(e))!==null&&n!==void 0?n:kr},t}(Ur);var rr={now:function(){return(rr.delegate||Date).now()},delegate:void 0};var re=function(r){_(t,r);function t(e,o,n){e===void 0&&(e=1/0),o===void 0&&(o=1/0),n===void 0&&(n=rr);var i=r.call(this)||this;return i._bufferSize=e,i._windowTime=o,i._timestampProvider=n,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=o===1/0,i._bufferSize=Math.max(1,e),i._windowTime=Math.max(1,o),i}return t.prototype.next=function(e){var o=this,n=o.isStopped,i=o._buffer,f=o._infiniteTimeWindow,u=o._timestampProvider,c=o._windowTime;n||(i.push(e),!f&&i.push(u.now()+c)),this._trimBuffer(),r.prototype.next.call(this,e)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var o=this._innerSubscribe(e),n=this,i=n._infiniteTimeWindow,f=n._buffer,u=f.slice(),c=0;c<u.length&&!e.closed;c+=i?1:2)e.next(u[c]);return this._checkFinalizedStatuses(e),o},t.prototype._trimBuffer=function(){var e=this,o=e._bufferSize,n=e._timestampProvider,i=e._buffer,f=e._infiniteTimeWindow,u=(f?1:2)*o;if(o<1/0&&u<i.length&&i.splice(0,i.length-u),!f){for(var c=n.now(),a=0,p=1;p<i.length&&i[p]<=c;p+=2)a=p;a&&i.splice(0,a+1)}},t}(Ur);var ee=function(r){_(t,r);function t(e,o){return r.call(this)||this}return t.prototype.schedule=function(e,o){return o===void 0&&(o=0),this},t}(L);var er={setInterval:function(r,t){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];var n=er.delegate;return n!=null&&n.setInterval?n.setInterval.apply(n,O([r,t],w(e))):setInterval.apply(void 0,O([r,t],w(e)))},clearInterval:function(r){var t=er.delegate;return((t==null?void 0:t.clearInterval)||clearInterval)(r)},delegate:void 0};var te=function(r){_(t,r);function t(e,o){var n=r.call(this,e,o)||this;return n.scheduler=e,n.work=o,n.pending=!1,n}return t.prototype.schedule=function(e,o){var n;if(o===void 0&&(o=0),this.closed)return this;this.state=e;var i=this.id,f=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(f,i,o)),this.pending=!0,this.delay=o,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(f,this.id,o),this},t.prototype.requestAsyncId=function(e,o,n){return n===void 0&&(n=0),er.setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,o,n){if(n===void 0&&(n=0),n!=null&&this.delay===n&&this.pending===!1)return o;o!=null&&er.clearInterval(o)},t.prototype.execute=function(e,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,o);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,o){var n=!1,i;try{this.work(e)}catch(f){n=!0,i=f||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),i},t.prototype.unsubscribe=function(){if(!this.closed){var e=this,o=e.id,n=e.scheduler,i=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,C(i,this),o!=null&&(this.id=this.recycleAsyncId(n,o,null)),this.delay=null,r.prototype.unsubscribe.call(this)}},t}(ee);var Wr=function(){function r(t,e){e===void 0&&(e=r.now),this.schedulerActionCtor=t,this.now=e}return r.prototype.schedule=function(t,e,o){return e===void 0&&(e=0),new this.schedulerActionCtor(this,t).schedule(o,e)},r.now=rr.now,r}();var oe=function(r){_(t,r);function t(e,o){o===void 0&&(o=Wr.now);var n=r.call(this,e,o)||this;return n.actions=[],n._active=!1,n}return t.prototype.flush=function(e){var o=this.actions;if(this._active){o.push(e);return}var n;this._active=!0;do if(n=e.execute(e.state,e.delay))break;while(e=o.shift());if(this._active=!1,n){for(;e=o.shift();)e.unsubscribe();throw n}},t}(Wr);var tr=new oe(te),ne=tr;var U=new v(function(r){return r.complete()});function pr(r){return r&&s(r.schedule)}function Vr(r){return r[r.length-1]}function K(r){return s(Vr(r))?r.pop():void 0}function k(r){return pr(Vr(r))?r.pop():void 0}function ie(r,t){return typeof Vr(r)=="number"?r.pop():t}var B=function(r){return r&&typeof r.length=="number"&&typeof r!="function"};function sr(r){return s(r==null?void 0:r.then)}function lr(r){return s(r[J])}function mr(r){return Symbol.asyncIterator&&s(r==null?void 0:r[Symbol.asyncIterator])}function dr(r){return new TypeError("You provided "+(r!==null&&typeof r=="object"?"an invalid object":"'"+r+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Ke(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var hr=Ke();function vr(r){return s(r==null?void 0:r[hr])}function yr(r){return qr(this,arguments,function(){var e,o,n,i;return ir(this,function(f){switch(f.label){case 0:e=r.getReader(),f.label=1;case 1:f.trys.push([1,,9,10]),f.label=2;case 2:return[4,V(e.read())];case 3:return o=f.sent(),n=o.value,i=o.done,i?[4,V(void 0)]:[3,5];case 4:return[2,f.sent()];case 5:return[4,V(n)];case 6:return[4,f.sent()];case 7:return f.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function xr(r){return s(r==null?void 0:r.getReader)}function x(r){if(r instanceof v)return r;if(r!=null){if(lr(r))return Be(r);if(B(r))return Qe(r);if(sr(r))return Xe(r);if(mr(r))return fe(r);if(vr(r))return Ze(r);if(xr(r))return $e(r)}throw dr(r)}function Be(r){return new v(function(t){var e=r[J]();if(s(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Qe(r){return new v(function(t){for(var e=0;e<r.length&&!t.closed;e++)t.next(r[e]);t.complete()})}function Xe(r){return new v(function(t){r.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,ur)})}function Ze(r){return new v(function(t){var e,o;try{for(var n=T(r),i=n.next();!i.done;i=n.next()){var f=i.value;if(t.next(f),t.closed)return}}catch(u){e={error:u}}finally{try{i&&!i.done&&(o=n.return)&&o.call(n)}finally{if(e)throw e.error}}t.complete()})}function fe(r){return new v(function(t){rt(r,t).catch(function(e){return t.error(e)})})}function $e(r){return fe(yr(r))}function rt(r,t){var e,o,n,i;return Nr(this,void 0,void 0,function(){var f,u;return ir(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),e=zr(r),c.label=1;case 1:return[4,e.next()];case 2:if(o=c.sent(),!!o.done)return[3,4];if(f=o.value,t.next(f),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=c.sent(),n={error:u},[3,11];case 6:return c.trys.push([6,,9,10]),o&&!o.done&&(i=e.return)?[4,i.call(e)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(n)throw n.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function E(r,t,e,o,n){o===void 0&&(o=0),n===void 0&&(n=!1);var i=t.schedule(function(){e(),n?r.add(this.schedule(null,o)):this.unsubscribe()},o);if(r.add(i),!n)return i}function br(r,t){return t===void 0&&(t=0),d(function(e,o){e.subscribe(m(o,function(n){return E(o,r,function(){return o.next(n)},t)},function(){return E(o,r,function(){return o.complete()},t)},function(n){return E(o,r,function(){return o.error(n)},t)}))})}function gr(r,t){return t===void 0&&(t=0),d(function(e,o){o.add(r.schedule(function(){return e.subscribe(o)},t))})}function ae(r,t){return x(r).pipe(gr(t),br(t))}function ue(r,t){return x(r).pipe(gr(t),br(t))}function ce(r,t){return new v(function(e){var o=0;return t.schedule(function(){o===r.length?e.complete():(e.next(r[o++]),e.closed||this.schedule())})})}function pe(r,t){return new v(function(e){var o;return E(e,t,function(){o=r[hr](),E(e,t,function(){var n,i,f;try{n=o.next(),i=n.value,f=n.done}catch(u){e.error(u);return}f?e.complete():e.next(i)},0,!0)}),function(){return s(o==null?void 0:o.return)&&o.return()}})}function wr(r,t){if(!r)throw new Error("Iterable cannot be null");return new v(function(e){E(e,t,function(){var o=r[Symbol.asyncIterator]();E(e,t,function(){o.next().then(function(n){n.done?e.complete():e.next(n.value)})},0,!0)})})}function se(r,t){return wr(yr(r),t)}function le(r,t){if(r!=null){if(lr(r))return ae(r,t);if(B(r))return ce(r,t);if(sr(r))return ue(r,t);if(mr(r))return wr(r,t);if(vr(r))return pe(r,t);if(xr(r))return se(r,t)}throw dr(r)}function P(r,t){return t?le(r,t):x(r)}function me(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=k(r);return P(r,e)}var W=q(function(r){return function(){r(this),this.name="EmptyError",this.message="no elements in sequence"}});function de(r,t){var e=typeof t=="object";return new Promise(function(o,n){var i=!1,f;r.subscribe({next:function(u){f=u,i=!0},error:n,complete:function(){i?o(f):e?o(t.defaultValue):n(new W)}})})}function he(r,t){var e=typeof t=="object";return new Promise(function(o,n){var i=new H({next:function(f){o(f),i.unsubscribe()},error:n,complete:function(){e?o(t.defaultValue):n(new W)}});r.subscribe(i)})}function ve(r){return r instanceof Date&&!isNaN(r)}function M(r,t){return d(function(e,o){var n=0;e.subscribe(m(o,function(i){o.next(r.call(t,i,n++))}))})}var et=Array.isArray;function tt(r,t){return et(t)?r.apply(void 0,O([],w(t))):r(t)}function Q(r){return M(function(t){return tt(r,t)})}var ot=Array.isArray,nt=Object.getPrototypeOf,it=Object.prototype,ft=Object.keys;function Sr(r){if(r.length===1){var t=r[0];if(ot(t))return{args:t,keys:null};if(at(t)){var e=ft(t);return{args:e.map(function(o){return t[o]}),keys:e}}}return{args:r,keys:null}}function at(r){return r&&typeof r=="object"&&nt(r)===it}function _r(r,t){return r.reduce(function(e,o,n){return e[o]=t[n],e},{})}function xe(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=k(r),o=K(r),n=Sr(r),i=n.args,f=n.keys;if(i.length===0)return P([],e);var u=new v(ut(i,e,f?function(c){return _r(f,c)}:S));return o?u.pipe(Q(o)):u}function ut(r,t,e){return e===void 0&&(e=S),function(o){ye(t,function(){for(var n=r.length,i=new Array(n),f=n,u=n,c=function(p){ye(t,function(){var h=P(r[p],t),l=!1;h.subscribe(m(o,function(y){i[p]=y,l||(l=!0,u--),u||o.next(e(i.slice()))},function(){--f||o.complete()}))},o)},a=0;a<n;a++)c(a)},o)}}function ye(r,t,e){r?E(e,r,t):t()}function Or(r,t,e,o,n,i,f,u){var c=[],a=0,p=0,h=!1,l=function(){h&&!c.length&&!a&&t.complete()},y=function(b){return a<o?g(b):c.push(b)},g=function(b){i&&t.next(b),a++;var I=!1;x(e(b,p++)).subscribe(m(t,function(R){n==null||n(R),i?y(R):t.next(R)},function(){I=!0},void 0,function(){if(I)try{a--;for(var R=function(){var nr=c.shift();f?E(t,f,function(){return g(nr)}):g(nr)};c.length&&a<o;)R();l()}catch(nr){t.error(nr)}}))};return r.subscribe(m(t,y,function(){h=!0,l()})),function(){u==null||u()}}function A(r,t,e){return e===void 0&&(e=1/0),s(t)?A(function(o,n){return M(function(i,f){return t(o,i,n,f)})(x(r(o,n)))},e):(typeof t=="number"&&(e=t),d(function(o,n){return Or(o,n,r,e)}))}function Er(r){return r===void 0&&(r=1/0),A(S,r)}function be(){return Er(1)}function Y(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return be()(P(r,k(r)))}function ge(r){return new v(function(t){x(r()).subscribe(t)})}function we(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=K(r),o=Sr(r),n=o.args,i=o.keys,f=new v(function(u){var c=n.length;if(!c){u.complete();return}for(var a=new Array(c),p=c,h=c,l=function(g){var b=!1;x(n[g]).subscribe(m(u,function(I){b||(b=!0,h--),a[g]=I},function(){return p--},void 0,function(){(!p||!b)&&(h||u.next(i?_r(i,a):a),u.complete())}))},y=0;y<c;y++)l(y)});return e?f.pipe(Q(e)):f}var ct=["addListener","removeListener"],pt=["addEventListener","removeEventListener"],st=["on","off"];function Ar(r,t,e,o){if(s(e)&&(o=e,e=void 0),o)return Ar(r,t,e).pipe(Q(o));var n=w(dt(r)?pt.map(function(u){return function(c){return r[u](t,c,e)}}):lt(r)?ct.map(Se(r,t)):mt(r)?st.map(Se(r,t)):[],2),i=n[0],f=n[1];if(!i&&B(r))return A(function(u){return Ar(u,t,e)})(x(r));if(!i)throw new TypeError("Invalid event target");return new v(function(u){var c=function(){for(var a=[],p=0;p<arguments.length;p++)a[p]=arguments[p];return u.next(1<a.length?a:a[0])};return i(c),function(){return f(c)}})}function Se(r,t){return function(e){return function(o){return r[e](t,o)}}}function lt(r){return s(r.addListener)&&s(r.removeListener)}function mt(r){return s(r.on)&&s(r.off)}function dt(r){return s(r.addEventListener)&&s(r.removeEventListener)}function X(r,t,e){r===void 0&&(r=0),e===void 0&&(e=ne);var o=-1;return t!=null&&(pr(t)?e=t:o=t),new v(function(n){var i=ve(r)?+r-e.now():r;i<0&&(i=0);var f=0;return e.schedule(function(){n.closed||(n.next(f++),0<=o?this.schedule(void 0,o):n.complete())},i)})}function _e(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=k(r),o=ie(r,1/0),n=r;return n.length?n.length===1?x(n[0]):Er(o)(P(n,e)):U}var Oe=new v(F);var ht=Array.isArray;function Ir(r){return r.length===1&&ht(r[0])?r[0]:r}function Z(r,t){return d(function(e,o){var n=0;e.subscribe(m(o,function(i){return r.call(t,i,n++)&&o.next(i)}))})}function Ee(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return r=Ir(r),r.length===1?x(r[0]):new v(Dr(r))}function Dr(r){return function(t){for(var e=[],o=function(i){e.push(x(r[i]).subscribe(m(t,function(f){if(e){for(var u=0;u<e.length;u++)u!==i&&e[u].unsubscribe();e=null}t.next(f)})))},n=0;e&&!t.closed&&n<r.length;n++)o(n)}}function Ae(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=K(r),o=Ir(r);return o.length?new v(function(n){var i=o.map(function(){return[]}),f=o.map(function(){return!1});n.add(function(){i=f=null});for(var u=function(a){x(o[a]).subscribe(m(n,function(p){if(i[a].push(p),i.every(function(l){return l.length})){var h=i.map(function(l){return l.shift()});n.next(e?e.apply(void 0,O([],w(h))):h),i.some(function(l,y){return!l.length&&f[y]})&&n.complete()}},function(){f[a]=!0,!i[a].length&&n.complete()}))},c=0;!n.closed&&c<o.length;c++)u(c);return function(){i=f=null}}):U}function Ie(r,t){return t===void 0&&(t=null),t=t??r,d(function(e,o){var n=[],i=0;e.subscribe(m(o,function(f){var u,c,a,p,h=null;i++%t===0&&n.push([]);try{for(var l=T(n),y=l.next();!y.done;y=l.next()){var g=y.value;g.push(f),r<=g.length&&(h=h??[],h.push(g))}}catch(R){u={error:R}}finally{try{y&&!y.done&&(c=l.return)&&c.call(l)}finally{if(u)throw u.error}}if(h)try{for(var b=T(h),I=b.next();!I.done;I=b.next()){var g=I.value;C(n,g),o.next(g)}}catch(R){a={error:R}}finally{try{I&&!I.done&&(p=b.return)&&p.call(b)}finally{if(a)throw a.error}}},function(){var f,u;try{for(var c=T(n),a=c.next();!a.done;a=c.next()){var p=a.value;o.next(p)}}catch(h){f={error:h}}finally{try{a&&!a.done&&(u=c.return)&&u.call(c)}finally{if(f)throw f.error}}o.complete()},void 0,function(){n=null}))})}function Yr(r){return d(function(t,e){var o=null,n=!1,i;o=t.subscribe(m(e,void 0,void 0,function(f){i=x(r(f,Yr(r)(t))),o?(o.unsubscribe(),o=null,i.subscribe(e)):n=!0})),n&&(o.unsubscribe(),o=null,i.subscribe(e))})}function Te(r,t){return s(t)?A(r,t,1):A(r,1)}function Pe(r,t){return t===void 0&&(t=tr),d(function(e,o){var n=null,i=null,f=null,u=function(){if(n){n.unsubscribe(),n=null;var a=i;i=null,o.next(a)}};function c(){var a=f+r,p=t.now();if(p<a){n=this.schedule(void 0,a-p),o.add(n);return}u()}e.subscribe(m(o,function(a){i=a,f=t.now(),n||(n=t.schedule(c,r),o.add(n))},function(){u(),o.complete()},void 0,function(){i=n=null}))})}function Tr(r){return d(function(t,e){var o=!1;t.subscribe(m(e,function(n){o=!0,e.next(n)},function(){o||e.next(r),e.complete()}))})}function N(r){return r<=0?function(){return U}:d(function(t,e){var o=0;t.subscribe(m(e,function(n){++o<=r&&(e.next(n),r<=o&&e.complete())}))})}function Pr(){return d(function(r,t){r.subscribe(m(t,F))})}function je(r){return M(function(){return r})}function or(r,t){return t?function(e){return Y(t.pipe(N(1),Pr()),e.pipe(or(r)))}:A(function(e,o){return x(r(e,o)).pipe(N(1),je(e))})}function Fe(r,t){t===void 0&&(t=tr);var e=X(r,t);return or(function(){return e})}function jr(r){return r===void 0&&(r=vt),d(function(t,e){var o=!1;t.subscribe(m(e,function(n){o=!0,e.next(n)},function(){return o?e.complete():e.error(r())}))})}function vt(){return new W}function ke(r,t){var e=arguments.length>=2;return function(o){return o.pipe(r?Z(function(n,i){return r(n,i,o)}):S,N(1),e?Tr(t):jr(function(){return new W}))}}function Me(r,t,e){return e===void 0&&(e=1/0),d(function(o,n){var i=t;return Or(o,n,function(f,u){return r(i,f,u)},e,function(f){i=f},!1,void 0,function(){return i=null})})}function Re(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return r.length?d(function(e,o){Dr(O([e],w(r)))(o)}):S}function Ce(r){r===void 0&&(r=1/0);var t;r&&typeof r=="object"?t=r:t={count:r};var e=t.count,o=e===void 0?1/0:e,n=t.delay,i=t.resetOnSuccess,f=i===void 0?!1:i;return o<=0?S:d(function(u,c){var a=0,p,h=function(){var l=!1;p=u.subscribe(m(c,function(y){f&&(a=0),c.next(y)},void 0,function(y){if(a++<o){var g=function(){p?(p.unsubscribe(),p=null,h()):l=!0};if(n!=null){var b=typeof n=="number"?X(n):x(n(y,a)),I=m(c,function(){I.unsubscribe(),g()},function(){c.complete()});b.subscribe(I)}else g()}else c.error(y)})),l&&(p.unsubscribe(),p=null,h())};h()})}function Le(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=k(r);return d(function(o,n){(e?Y(r,o,e):Y(r,o)).subscribe(n)})}function Ue(r,t){return d(function(e,o){var n=null,i=0,f=!1,u=function(){return f&&!n&&o.complete()};e.subscribe(m(o,function(c){n==null||n.unsubscribe();var a=0,p=i++;x(r(c,p)).subscribe(n=m(o,function(h){return o.next(t?t(c,h,p,a++):h)},function(){n=null,u()}))},function(){f=!0,u()}))})}function We(r){return d(function(t,e){x(r).subscribe(m(e,function(){return e.complete()},F)),!e.closed&&t.subscribe(e)})}function Ve(r,t,e){var o=s(r)||t||e?{next:r,error:t,complete:e}:r;return o?d(function(n,i){var f;(f=o.subscribe)===null||f===void 0||f.call(o);var u=!0;n.subscribe(m(i,function(c){var a;(a=o.next)===null||a===void 0||a.call(o,c),i.next(c)},function(){var c;u=!1,(c=o.complete)===null||c===void 0||c.call(o),i.complete()},function(c){var a;u=!1,(a=o.error)===null||a===void 0||a.call(o,c),i.error(c)},function(){var c,a;u&&((c=o.unsubscribe)===null||c===void 0||c.call(o)),(a=o.finalize)===null||a===void 0||a.call(o)}))}):S}function Tc(r){return A(t=>P(Promise.resolve(r(t))).pipe(Z(e=>e),M(()=>t)))}export{U as EMPTY,Oe as NEVER,v as Observable,re as ReplaySubject,Ie as bufferCount,Yr as catchError,xe as combineLatest,Y as concat,Te as concatMap,Pe as debounceTime,Tr as defaultIfEmpty,ge as defer,Fe as delay,or as delayWhen,Z as filter,Tc as filterAsync,ke as first,he as firstValueFrom,we as forkJoin,P as from,Ar as fromEvent,S as identity,Pr as ignoreElements,de as lastValueFrom,M as map,_e as merge,A as mergeMap,Me as mergeScan,F as noop,me as of,Qr as pipe,Ee as race,Re as raceWith,Ce as retry,Le as startWith,Ue as switchMap,N as take,We as takeUntil,Ve as tap,jr as throwIfEmpty,X as timer,Ae as zip};
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */