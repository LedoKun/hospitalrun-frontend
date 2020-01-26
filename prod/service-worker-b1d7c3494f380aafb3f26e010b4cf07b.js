var swEnvironment={}
importScripts("sw-toolbox-666b877cefc2f3d54ce1bb0f29a139ba.js")
var CACHE_PREFIX="brocsw-v",CACHE_VERSION=CACHE_PREFIX+"1580060287461"
toolbox.options.cache.name=CACHE_VERSION
var urlsToPrefetch=["/","assets/auto-import-fastboot-d41d8cd98f00b204e9800998ecf8427e.js","assets/fonts/glyphicons-halflings-regular.eot","assets/fonts/glyphicons-halflings-regular.svg","assets/fonts/glyphicons-halflings-regular.ttf","assets/fonts/glyphicons-halflings-regular.woff","assets/fonts/lato-black-webfont.eot","assets/fonts/lato-black-webfont.svg","assets/fonts/lato-black-webfont.ttf","assets/fonts/lato-black-webfont.woff","assets/fonts/lato-bold-webfont.eot","assets/fonts/lato-bold-webfont.svg","assets/fonts/lato-bold-webfont.ttf","assets/fonts/lato-bold-webfont.woff","assets/fonts/lato-hairline-webfont.eot","assets/fonts/lato-hairline-webfont.svg","assets/fonts/lato-hairline-webfont.ttf","assets/fonts/lato-hairline-webfont.woff","assets/fonts/lato-light-webfont.eot","assets/fonts/lato-light-webfont.svg","assets/fonts/lato-light-webfont.ttf","assets/fonts/lato-light-webfont.woff","assets/fonts/lato-regular-webfont.eot","assets/fonts/lato-regular-webfont.svg","assets/fonts/lato-regular-webfont.ttf","assets/fonts/lato-regular-webfont.woff","assets/fonts/octicons.eot","assets/fonts/octicons.svg","assets/fonts/octicons.ttf","assets/fonts/octicons.woff","assets/hospitalrun-f158fb519c2109272d92c71bd36ddb38.css","assets/hospitalrun-f3c4fac8973a7277bcbc4dbd299b650f.js","assets/intl/intl.complete-36d07c9488251ea439bd9a66de698549.js","assets/intl/intl-bc6c67d9e3c21ed680bebb94faf161b8.js","assets/intl/Intl.js.map","assets/intl/intl.min-ac9f2e4256a2a0c958415ba9285ec2a7.js","assets/intl/Intl.min.js.map","assets/intl/locales/de-dc55b07d4cbf9b948d77746bcf976a6f.js","assets/intl/locales/en-4117b0703b724e538ca3fe317aafd96b.js","assets/intl/locales/es-co-c92738ab295514bcfb16aab6a366f3d2.js","assets/intl/locales/es-3453aba256d274692a0decf86dd0b767.js","assets/intl/locales/fr-d793b4e0dfcdbec59f731c5a32db288d.js","assets/intl/locales/he-c61053224e8377147582afbb260f4446.js","assets/intl/locales/hi-ea8c4b3025317d606c418b2485d83a63.js","assets/intl/locales/it-f40d444e4b8d17392f75f9a252e3d0bc.js","assets/intl/locales/pt-br-1cfd452bf0c41265c0b4286329f620b5.js","assets/intl/locales/ru-82be70814118b98735232e7a4999b681.js","assets/intl/locales/th-6389b4efd169001beb7e6d8e7f05b585.js","assets/intl/locales/tr-0666774708450e576e74d9d541bfafb4.js","assets/intl/locales/ur-49a1b78da4881960afc7138ece476abd.js","assets/vendor-e8c9eb03596567d7fcb0454201186738.css","assets/vendor-c0a2a816263e6aa37202f9527e553ba2.js","crossdomain.xml","dymo/BarcodeAsImage.label","ember-fetch/fastboot-fetch-ee5cef26e0470d371ec08fef9ba4a5b8.js","favicon.ico","favicon-7440091f4e8bd83e23e4d5824c2c3da4.png","fonts/fontawesome-webfont.eot","fonts/fontawesome-webfont.svg","fonts/fontawesome-webfont.ttf","fonts/fontawesome-webfont.woff","fonts/fontawesome-webfont.woff2","fonts/FontAwesome.otf","index.html","robots.txt"]
urlsToPrefetch.forEach(function(e){toolbox.router.any(e,toolbox.cacheFirst)}),toolbox.precache(urlsToPrefetch),function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require
if(!a&&u)return u(s,!0)
if(o)return o(s,!0)
var c=new Error("Cannot find module '"+s+"'")
throw c.code="MODULE_NOT_FOUND",c}var f=n[s]={exports:{}}
t[s][0].call(f.exports,function(e){var n=t[s][1][e]
return i(n||e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s])
return i}({1:[function(e,t,n){"use strict"
t.exports=function(e){return function(){var t=arguments.length
if(t){for(var n=[],r=-1;++r<t;)n[r]=arguments[r]
return e.call(this,n)}return e.call(this,[])}}},{}],2:[function(e,t,n){(function(n){var r=e("is-array-buffer-x"),i="function"==typeof n.alloc&&"function"==typeof n.allocUnsafe&&"function"==typeof n.from
t.exports=function(e,t,o){if("number"==typeof e)throw new TypeError('"value" argument must not be a number')
return r(e)?function(e,t,r){t>>>=0
var o=e.byteLength-t
if(o<0)throw new RangeError("'offset' is out of bounds")
if(void 0===r)r=o
else if((r>>>=0)>o)throw new RangeError("'length' is out of bounds")
return i?n.from(e.slice(t,t+r)):new n(new Uint8Array(e.slice(t,t+r)))}(e,t,o):"string"==typeof e?function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!n.isEncoding(t))throw new TypeError('"encoding" must be a valid string encoding')
return i?n.from(e,t):new n(e,t)}(e,t):i?n.from(e):new n(e)}}).call(this,e("buffer").Buffer)},{buffer:162,"is-array-buffer-x":22}],3:[function(e,t,n){(function(t){"use strict"
var r=e("buffer"),i=r.Buffer,o=r.SlowBuffer,s=r.kMaxLength||2147483647
n.alloc=function(e,t,n){if("function"==typeof i.alloc)return i.alloc(e,t,n)
if("number"==typeof n)throw new TypeError("encoding must not be number")
if("number"!=typeof e)throw new TypeError("size must be a number")
if(e>s)throw new RangeError("size is too large")
var r=n,o=t
void 0===o&&(r=void 0,o=0)
var a=new i(e)
if("string"==typeof o)for(var u=new i(o,r),c=u.length,f=-1;++f<e;)a[f]=u[f%c]
else a.fill(o)
return a},n.allocUnsafe=function(e){if("function"==typeof i.allocUnsafe)return i.allocUnsafe(e)
if("number"!=typeof e)throw new TypeError("size must be a number")
if(e>s)throw new RangeError("size is too large")
return new i(e)},n.from=function(e,n,r){if("function"==typeof i.from&&(!t.Uint8Array||Uint8Array.from!==i.from))return i.from(e,n,r)
if("number"==typeof e)throw new TypeError('"value" argument must not be a number')
if("string"==typeof e)return new i(e,n)
if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer){var o=n
if(1===arguments.length)return new i(e)
void 0===o&&(o=0)
var s=r
if(void 0===s&&(s=e.byteLength-o),o>=e.byteLength)throw new RangeError("'offset' is out of bounds")
if(s>e.byteLength-o)throw new RangeError("'length' is out of bounds")
return new i(e.slice(o,o+s))}if(i.isBuffer(e)){var a=new i(e.length)
return e.copy(a,0,0,e.length),a}if(e){if(Array.isArray(e)||"undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return new i(e)
if("Buffer"===e.type&&Array.isArray(e.data))return new i(e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")},n.allocUnsafeSlow=function(e){if("function"==typeof i.allocUnsafeSlow)return i.allocUnsafeSlow(e)
if("number"!=typeof e)throw new TypeError("size must be a number")
if(e>=s)throw new RangeError("size is too large")
return new o(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{buffer:162}],4:[function(e,t,n){(function(e){function t(e){return Object.prototype.toString.call(e)}n.isArray=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===t(e)},n.isBoolean=function(e){return"boolean"==typeof e},n.isNull=function(e){return null===e},n.isNullOrUndefined=function(e){return null==e},n.isNumber=function(e){return"number"==typeof e},n.isString=function(e){return"string"==typeof e},n.isSymbol=function(e){return"symbol"==typeof e},n.isUndefined=function(e){return void 0===e},n.isRegExp=function(e){return"[object RegExp]"===t(e)},n.isObject=function(e){return"object"==typeof e&&null!==e},n.isDate=function(e){return"[object Date]"===t(e)},n.isError=function(e){return"[object Error]"===t(e)||e instanceof Error},n.isFunction=function(e){return"function"==typeof e},n.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},n.isBuffer=e.isBuffer}).call(this,{isBuffer:e("../../../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js")})},{"../../../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js":167}],5:[function(e,t,n){(function(r){function i(){var e
try{e=n.storage.debug}catch(t){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}(n=t.exports=e("./debug")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},n.formatArgs=function(e){var t=this.useColors
if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),!t)return
var r="color: "+this.color
e.splice(1,0,r,"color: inherit")
var i=0,o=0
e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(i++,"%c"===e&&(o=i))}),e.splice(o,0,r)},n.save=function(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(t){}},n.load=i,n.useColors=function(){if("undefined"!=typeof window&&window&&void 0!==window.process&&"renderer"===window.process.type)return!0
return"undefined"!=typeof document&&document&&"WebkitAppearance"in document.documentElement.style||"undefined"!=typeof window&&window&&window.console&&(console.firebug||console.exception&&console.table)||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},n.enable(i())}).call(this,e("_process"))},{"./debug":6,_process:170}],6:[function(e,t,n){var r
function i(e){function t(){if(t.enabled){var e=t,i=+new Date,o=i-(r||i)
e.diff=o,e.prev=r,e.curr=i,r=i
for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a]
s[0]=n.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O")
var u=0
s[0]=s[0].replace(/%([a-zA-Z%])/g,function(t,r){if("%%"===t)return t
u++
var i=n.formatters[r]
if("function"==typeof i){var o=s[u]
t=i.call(e,o),s.splice(u,1),u--}return t}),n.formatArgs.call(e,s),(t.log||n.log||console.log.bind(console)).apply(e,s)}}return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=function(e){var t,r=0
for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0
return n.colors[Math.abs(r)%n.colors.length]}(e),"function"==typeof n.init&&n.init(t),t}(n=t.exports=i.debug=i.default=i).coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){n.enable("")},n.enable=function(e){n.save(e),n.names=[],n.skips=[]
for(var t=("string"==typeof e?e:"").split(/[\s,]+/),r=t.length,i=0;i<r;i++)t[i]&&("-"===(e=t[i].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){var t,r
for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1
for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0
return!1},n.humanize=e("ms"),n.names=[],n.skips=[],n.formatters={}},{ms:55}],7:[function(e,t,n){var r=e("util"),i=e("abstract-leveldown").AbstractIterator
function o(e){i.call(this,e),this._options=e,this._iterator=null,this._operations=[]}r.inherits(o,i),o.prototype.setDb=function(e){var t=this._iterator=e.iterator(this._options)
this._operations.forEach(function(e){t[e.method].apply(t,e.args)})},o.prototype._operation=function(e,t){if(this._iterator)return this._iterator[e].apply(this._iterator,t)
this._operations.push({method:e,args:t})},"next end".split(" ").forEach(function(e){o.prototype["_"+e]=function(){this._operation(e,arguments)}}),t.exports=o},{"abstract-leveldown":12,util:188}],8:[function(e,t,n){(function(n,r){var i=e("util"),o=e("abstract-leveldown").AbstractLevelDOWN,s=e("./deferred-iterator")
function a(e){o.call(this,"string"==typeof e?e:""),this._db=void 0,this._operations=[],this._iterators=[]}i.inherits(a,o),a.prototype.setDb=function(e){this._db=e,this._operations.forEach(function(t){e[t.method].apply(e,t.args)}),this._iterators.forEach(function(t){t.setDb(e)})},a.prototype._open=function(e,t){return r.nextTick(t)},a.prototype._operation=function(e,t){if(this._db)return this._db[e].apply(this._db,t)
this._operations.push({method:e,args:t})},"put get del batch approximateSize".split(" ").forEach(function(e){a.prototype["_"+e]=function(){this._operation(e,arguments)}}),a.prototype._isBuffer=function(e){return n.isBuffer(e)},a.prototype._iterator=function(e){if(this._db)return this._db.iterator.apply(this._db,arguments)
var t=new s(e)
return this._iterators.push(t),t},t.exports=a,t.exports.DeferredIterator=s}).call(this,{isBuffer:e("../../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js")},e("_process"))},{"../../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js":167,"./deferred-iterator":7,_process:170,"abstract-leveldown":12,util:188}],9:[function(e,t,n){(function(e){function n(e){this._db=e,this._operations=[],this._written=!1}n.prototype._checkWritten=function(){if(this._written)throw new Error("write() already called on this batch")},n.prototype.put=function(e,t){this._checkWritten()
var n=this._db._checkKey(e,"key",this._db._isBuffer)
if(n)throw n
return this._db._isBuffer(e)||(e=String(e)),this._db._isBuffer(t)||(t=String(t)),"function"==typeof this._put?this._put(e,t):this._operations.push({type:"put",key:e,value:t}),this},n.prototype.del=function(e){this._checkWritten()
var t=this._db._checkKey(e,"key",this._db._isBuffer)
if(t)throw t
return this._db._isBuffer(e)||(e=String(e)),"function"==typeof this._del?this._del(e):this._operations.push({type:"del",key:e}),this},n.prototype.clear=function(){return this._checkWritten(),this._operations=[],"function"==typeof this._clear&&this._clear(),this},n.prototype.write=function(t,n){if(this._checkWritten(),"function"==typeof t&&(n=t),"function"!=typeof n)throw new Error("write() requires a callback argument")
return"object"!=typeof t&&(t={}),this._written=!0,"function"==typeof this._write?this._write(n):"function"==typeof this._db._batch?this._db._batch(this._operations,t,n):void e.nextTick(n)},t.exports=n}).call(this,e("_process"))},{_process:170}],10:[function(e,t,n){(function(e){function n(e){this.db=e,this._ended=!1,this._nexting=!1}n.prototype.next=function(t){var n=this
if("function"!=typeof t)throw new Error("next() requires a callback argument")
return n._ended?t(new Error("cannot call next() after end()")):n._nexting?t(new Error("cannot call next() before previous next() has completed")):(n._nexting=!0,"function"==typeof n._next?n._next(function(){n._nexting=!1,t.apply(null,arguments)}):void e.nextTick(function(){n._nexting=!1,t()}))},n.prototype.end=function(t){if("function"!=typeof t)throw new Error("end() requires a callback argument")
return this._ended?t(new Error("end() already called on iterator")):(this._ended=!0,"function"==typeof this._end?this._end(t):void e.nextTick(t))},t.exports=n}).call(this,e("_process"))},{_process:170}],11:[function(e,t,n){(function(n,r){var i=e("xtend"),o=e("./abstract-iterator"),s=e("./abstract-chained-batch")
function a(e){if(!arguments.length||void 0===e)throw new Error("constructor requires at least a location argument")
if("string"!=typeof e)throw new Error("constructor requires a location string argument")
this.location=e,this.status="new"}a.prototype.open=function(e,t){var n=this,i=this.status
if("function"==typeof e&&(t=e),"function"!=typeof t)throw new Error("open() requires a callback argument")
"object"!=typeof e&&(e={}),e.createIfMissing=0!=e.createIfMissing,e.errorIfExists=!!e.errorIfExists,"function"==typeof this._open?(this.status="opening",this._open(e,function(e){if(e)return n.status=i,t(e)
n.status="open",t()})):(this.status="open",r.nextTick(t))},a.prototype.close=function(e){var t=this,n=this.status
if("function"!=typeof e)throw new Error("close() requires a callback argument")
"function"==typeof this._close?(this.status="closing",this._close(function(r){if(r)return t.status=n,e(r)
t.status="closed",e()})):(this.status="closed",r.nextTick(e))},a.prototype.get=function(e,t,n){var i
if("function"==typeof t&&(n=t),"function"!=typeof n)throw new Error("get() requires a callback argument")
return(i=this._checkKey(e,"key",this._isBuffer))?n(i):(this._isBuffer(e)||(e=String(e)),"object"!=typeof t&&(t={}),t.asBuffer=0!=t.asBuffer,"function"==typeof this._get?this._get(e,t,n):void r.nextTick(function(){n(new Error("NotFound"))}))},a.prototype.put=function(e,t,n,i){var o
if("function"==typeof n&&(i=n),"function"!=typeof i)throw new Error("put() requires a callback argument")
return(o=this._checkKey(e,"key",this._isBuffer))?i(o):(this._isBuffer(e)||(e=String(e)),null==t||this._isBuffer(t)||r.browser||(t=String(t)),"object"!=typeof n&&(n={}),"function"==typeof this._put?this._put(e,t,n,i):void r.nextTick(i))},a.prototype.del=function(e,t,n){var i
if("function"==typeof t&&(n=t),"function"!=typeof n)throw new Error("del() requires a callback argument")
return(i=this._checkKey(e,"key",this._isBuffer))?n(i):(this._isBuffer(e)||(e=String(e)),"object"!=typeof t&&(t={}),"function"==typeof this._del?this._del(e,t,n):void r.nextTick(n))},a.prototype.batch=function(e,t,n){if(!arguments.length)return this._chainedBatch()
if("function"==typeof t&&(n=t),"function"==typeof e&&(n=e),"function"!=typeof n)throw new Error("batch(array) requires a callback argument")
if(!Array.isArray(e))return n(new Error("batch(array) requires an array argument"))
t&&"object"==typeof t||(t={})
for(var i,o,s=0,a=e.length;s<a;s++)if("object"==typeof(i=e[s])){if(o=this._checkKey(i.type,"type",this._isBuffer))return n(o)
if(o=this._checkKey(i.key,"key",this._isBuffer))return n(o)}if("function"==typeof this._batch)return this._batch(e,t,n)
r.nextTick(n)},a.prototype.approximateSize=function(e,t,n){if(null==e||null==t||"function"==typeof e||"function"==typeof t)throw new Error("approximateSize() requires valid `start`, `end` and `callback` arguments")
if("function"!=typeof n)throw new Error("approximateSize() requires a callback argument")
if(this._isBuffer(e)||(e=String(e)),this._isBuffer(t)||(t=String(t)),"function"==typeof this._approximateSize)return this._approximateSize(e,t,n)
r.nextTick(function(){n(null,0)})},a.prototype._setupIteratorOptions=function(e){var t=this
return e=i(e),["start","end","gt","gte","lt","lte"].forEach(function(n){e[n]&&t._isBuffer(e[n])&&0===e[n].length&&delete e[n]}),e.reverse=!!e.reverse,e.keys=0!=e.keys,e.values=0!=e.values,e.limit="limit"in e?e.limit:-1,e.keyAsBuffer=0!=e.keyAsBuffer,e.valueAsBuffer=0!=e.valueAsBuffer,e},a.prototype.iterator=function(e){return"object"!=typeof e&&(e={}),e=this._setupIteratorOptions(e),"function"==typeof this._iterator?this._iterator(e):new o(this)},a.prototype._chainedBatch=function(){return new s(this)},a.prototype._isBuffer=function(e){return n.isBuffer(e)},a.prototype._checkKey=function(e,t){if(null==e)return new Error(t+" cannot be `null` or `undefined`")
if(this._isBuffer(e)){if(0===e.length)return new Error(t+" cannot be an empty Buffer")}else if(""===String(e))return new Error(t+" cannot be an empty String")},t.exports=a}).call(this,{isBuffer:e("../../../../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js")},e("_process"))},{"../../../../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js":167,"./abstract-chained-batch":9,"./abstract-iterator":10,_process:170,xtend:157}],12:[function(e,t,n){n.AbstractLevelDOWN=e("./abstract-leveldown"),n.AbstractIterator=e("./abstract-iterator"),n.AbstractChainedBatch=e("./abstract-chained-batch"),n.isLevelDOWN=e("./is-leveldown")},{"./abstract-chained-batch":9,"./abstract-iterator":10,"./abstract-leveldown":11,"./is-leveldown":13}],13:[function(e,t,n){var r=e("./abstract-leveldown")
t.exports=function(e){return!(!e||"object"!=typeof e)&&Object.keys(r.prototype).filter(function(e){return"_"!=e[0]&&"approximateSize"!=e}).every(function(t){return"function"==typeof e[t]})}},{"./abstract-leveldown":11}],14:[function(e,t,n){"use strict"
function r(e){if(this._capacity=o(e),this._length=0,this._front=0,i(e)){for(var t=e.length,n=0;n<t;++n)this[n]=e[n]
this._length=t}}r.prototype.toArray=function(){for(var e=this._length,t=new Array(e),n=this._front,r=this._capacity,i=0;i<e;++i)t[i]=this[n+i&r-1]
return t},r.prototype.push=function(e){var t=arguments.length,n=this._length
if(t>1){var r=this._capacity
if(n+t>r){for(var i=0;i<t;++i){this._checkCapacity(n+1),this[o=this._front+n&this._capacity-1]=arguments[i],n++,this._length=n}return n}for(var o=this._front,i=0;i<t;++i)this[o+n&r-1]=arguments[i],o++
return this._length=n+t,n+t}return 0===t?n:(this._checkCapacity(n+1),this[i=this._front+n&this._capacity-1]=e,this._length=n+1,n+1)},r.prototype.pop=function(){var e=this._length
if(0!==e){var t=this._front+e-1&this._capacity-1,n=this[t]
return this[t]=void 0,this._length=e-1,n}},r.prototype.shift=function(){var e=this._length
if(0!==e){var t=this._front,n=this[t]
return this[t]=void 0,this._front=t+1&this._capacity-1,this._length=e-1,n}},r.prototype.unshift=function(e){var t=this._length,n=arguments.length
if(n>1){if(t+n>(i=this._capacity)){for(var r=n-1;r>=0;r--){this._checkCapacity(t+1)
var i=this._capacity
this[s=(this._front-1&i-1^i)-i]=arguments[r],t++,this._length=t,this._front=s}return t}var o=this._front
for(r=n-1;r>=0;r--){var s
this[s=(o-1&i-1^i)-i]=arguments[r],o=s}return this._front=o,this._length=t+n,t+n}if(0===n)return t
this._checkCapacity(t+1)
i=this._capacity
return this[r=(this._front-1&i-1^i)-i]=e,this._length=t+1,this._front=r,t+1},r.prototype.peekBack=function(){var e=this._length
if(0!==e)return this[this._front+e-1&this._capacity-1]},r.prototype.peekFront=function(){if(0!==this._length)return this[this._front]},r.prototype.get=function(e){var t=e
if(t===(0|t)){var n=this._length
if(t<0&&(t+=n),!(t<0||t>=n))return this[this._front+t&this._capacity-1]}},r.prototype.isEmpty=function(){return 0===this._length},r.prototype.clear=function(){for(var e=this._length,t=this._front,n=this._capacity,r=0;r<e;++r)this[t+r&n-1]=void 0
this._length=0,this._front=0},r.prototype.toString=function(){return this.toArray().toString()},r.prototype.valueOf=r.prototype.toString,r.prototype.removeFront=r.prototype.shift,r.prototype.removeBack=r.prototype.pop,r.prototype.insertFront=r.prototype.unshift,r.prototype.insertBack=r.prototype.push,r.prototype.enqueue=r.prototype.push,r.prototype.dequeue=r.prototype.shift,r.prototype.toJSON=r.prototype.toArray,Object.defineProperty(r.prototype,"length",{get:function(){return this._length},set:function(){throw new RangeError("")}}),r.prototype._checkCapacity=function(e){this._capacity<e&&this._resizeTo(o(1.5*this._capacity+16))},r.prototype._resizeTo=function(e){var t=this._capacity
this._capacity=e
var n=this._front,r=this._length
n+r>t&&function(e,t,n,r,i){for(var o=0;o<i;++o)n[o+r]=e[o+t],e[o+t]=void 0}(this,0,this,t,n+r&t-1)}
var i=Array.isArray
function o(e){if("number"!=typeof e){if(!i(e))return 16
e=e.length}return t=Math.min(Math.max(16,e),1073741824),t>>>=0,t-=1,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,1+(t|=t>>16)
var t}t.exports=r},{}],15:[function(e,t,n){var r=e("prr")
function i(e,t,n){r(this,{type:e,name:e,cause:"string"!=typeof t?t:n,message:t&&"string"!=typeof t?t.message:t},"ewr")}function o(e,t){Error.call(this),Error.captureStackTrace&&Error.captureStackTrace(this,arguments.callee),i.call(this,"CustomError",e,t)}o.prototype=new Error,t.exports=function(e){var t=function(t,n){return function(e,t,n){var r=function(n,r){i.call(this,t,n,r),"FilesystemError"==t&&(this.code=this.cause.code,this.path=this.cause.path,this.errno=this.cause.errno,this.message=(e.errno[this.cause.errno]?e.errno[this.cause.errno].description:this.cause.message)+(this.cause.path?" ["+this.cause.path+"]":"")),Error.call(this),Error.captureStackTrace&&Error.captureStackTrace(this,arguments.callee)}
return r.prototype=n?new n:new o,r}(e,t,n)}
return{CustomError:o,FilesystemError:t("FilesystemError"),createError:t}}},{prr:135}],16:[function(e,t,n){var r=t.exports.all=[{errno:-2,code:"ENOENT",description:"no such file or directory"},{errno:-1,code:"UNKNOWN",description:"unknown error"},{errno:0,code:"OK",description:"success"},{errno:1,code:"EOF",description:"end of file"},{errno:2,code:"EADDRINFO",description:"getaddrinfo error"},{errno:3,code:"EACCES",description:"permission denied"},{errno:4,code:"EAGAIN",description:"resource temporarily unavailable"},{errno:5,code:"EADDRINUSE",description:"address already in use"},{errno:6,code:"EADDRNOTAVAIL",description:"address not available"},{errno:7,code:"EAFNOSUPPORT",description:"address family not supported"},{errno:8,code:"EALREADY",description:"connection already in progress"},{errno:9,code:"EBADF",description:"bad file descriptor"},{errno:10,code:"EBUSY",description:"resource busy or locked"},{errno:11,code:"ECONNABORTED",description:"software caused connection abort"},{errno:12,code:"ECONNREFUSED",description:"connection refused"},{errno:13,code:"ECONNRESET",description:"connection reset by peer"},{errno:14,code:"EDESTADDRREQ",description:"destination address required"},{errno:15,code:"EFAULT",description:"bad address in system call argument"},{errno:16,code:"EHOSTUNREACH",description:"host is unreachable"},{errno:17,code:"EINTR",description:"interrupted system call"},{errno:18,code:"EINVAL",description:"invalid argument"},{errno:19,code:"EISCONN",description:"socket is already connected"},{errno:20,code:"EMFILE",description:"too many open files"},{errno:21,code:"EMSGSIZE",description:"message too long"},{errno:22,code:"ENETDOWN",description:"network is down"},{errno:23,code:"ENETUNREACH",description:"network is unreachable"},{errno:24,code:"ENFILE",description:"file table overflow"},{errno:25,code:"ENOBUFS",description:"no buffer space available"},{errno:26,code:"ENOMEM",description:"not enough memory"},{errno:27,code:"ENOTDIR",description:"not a directory"},{errno:28,code:"EISDIR",description:"illegal operation on a directory"},{errno:29,code:"ENONET",description:"machine is not on the network"},{errno:31,code:"ENOTCONN",description:"socket is not connected"},{errno:32,code:"ENOTSOCK",description:"socket operation on non-socket"},{errno:33,code:"ENOTSUP",description:"operation not supported on socket"},{errno:34,code:"ENOENT",description:"no such file or directory"},{errno:35,code:"ENOSYS",description:"function not implemented"},{errno:36,code:"EPIPE",description:"broken pipe"},{errno:37,code:"EPROTO",description:"protocol error"},{errno:38,code:"EPROTONOSUPPORT",description:"protocol not supported"},{errno:39,code:"EPROTOTYPE",description:"protocol wrong type for socket"},{errno:40,code:"ETIMEDOUT",description:"connection timed out"},{errno:41,code:"ECHARSET",description:"invalid Unicode character"},{errno:42,code:"EAIFAMNOSUPPORT",description:"address family for hostname not supported"},{errno:44,code:"EAISERVICE",description:"servname not supported for ai_socktype"},{errno:45,code:"EAISOCKTYPE",description:"ai_socktype not supported"},{errno:46,code:"ESHUTDOWN",description:"cannot send after transport endpoint shutdown"},{errno:47,code:"EEXIST",description:"file already exists"},{errno:48,code:"ESRCH",description:"no such process"},{errno:49,code:"ENAMETOOLONG",description:"name too long"},{errno:50,code:"EPERM",description:"operation not permitted"},{errno:51,code:"ELOOP",description:"too many symbolic links encountered"},{errno:52,code:"EXDEV",description:"cross-device link not permitted"},{errno:53,code:"ENOTEMPTY",description:"directory not empty"},{errno:54,code:"ENOSPC",description:"no space left on device"},{errno:55,code:"EIO",description:"i/o error"},{errno:56,code:"EROFS",description:"read-only file system"},{errno:57,code:"ENODEV",description:"no such device"},{errno:58,code:"ESPIPE",description:"invalid seek"},{errno:59,code:"ECANCELED",description:"operation canceled"}]
t.exports.errno={},t.exports.code={},r.forEach(function(e){t.exports.errno[e.errno]=e,t.exports.code[e.code]=e}),t.exports.custom=e("./custom")(t.exports),t.exports.create=t.exports.custom.createError},{"./custom":15}],17:[function(e,t,n){"use strict"
t.exports=function(e){return new c(e||p,null)}
var r=0,i=1
function o(e,t,n,r,i,o){this._color=e,this.key=t,this.value=n,this.left=r,this.right=i,this._count=o}function s(e){return new o(e._color,e.key,e.value,e.left,e.right,e._count)}function a(e,t){return new o(e,t.key,t.value,t.left,t.right,t._count)}function u(e){e._count=1+(e.left?e.left._count:0)+(e.right?e.right._count:0)}function c(e,t){this._compare=e,this.root=t}var f=c.prototype
function l(e,t){this.tree=e,this._stack=t}Object.defineProperty(f,"keys",{get:function(){var e=[]
return this.forEach(function(t,n){e.push(t)}),e}}),Object.defineProperty(f,"values",{get:function(){var e=[]
return this.forEach(function(t,n){e.push(n)}),e}}),Object.defineProperty(f,"length",{get:function(){return this.root?this.root._count:0}}),f.insert=function(e,t){for(var n=this._compare,s=this.root,f=[],l=[];s;){var d=n(e,s.key)
f.push(s),l.push(d),s=d<=0?s.left:s.right}f.push(new o(r,e,t,null,null,1))
for(var h=f.length-2;h>=0;--h){s=f[h]
l[h]<=0?f[h]=new o(s._color,s.key,s.value,f[h+1],s.right,s._count+1):f[h]=new o(s._color,s.key,s.value,s.left,f[h+1],s._count+1)}for(h=f.length-1;h>1;--h){var p=f[h-1]
s=f[h]
if(p._color===i||s._color===i)break
var g=f[h-2]
if(g.left===p)if(p.left===s){if(!(v=g.right)||v._color!==r){if(g._color=r,g.left=p.right,p._color=i,p.right=g,f[h-2]=p,f[h-1]=s,u(g),u(p),h>=3)(y=f[h-3]).left===g?y.left=p:y.right=p
break}p._color=i,g.right=a(i,v),g._color=r,h-=1}else{if(!(v=g.right)||v._color!==r){if(p.right=s.left,g._color=r,g.left=s.right,s._color=i,s.left=p,s.right=g,f[h-2]=s,f[h-1]=p,u(g),u(p),u(s),h>=3)(y=f[h-3]).left===g?y.left=s:y.right=s
break}p._color=i,g.right=a(i,v),g._color=r,h-=1}else if(p.right===s){if(!(v=g.left)||v._color!==r){if(g._color=r,g.right=p.left,p._color=i,p.left=g,f[h-2]=p,f[h-1]=s,u(g),u(p),h>=3)(y=f[h-3]).right===g?y.right=p:y.left=p
break}p._color=i,g.left=a(i,v),g._color=r,h-=1}else{var v
if(!(v=g.left)||v._color!==r){var y
if(p.left=s.right,g._color=r,g.right=s.left,s._color=i,s.right=p,s.left=g,f[h-2]=s,f[h-1]=p,u(g),u(p),u(s),h>=3)(y=f[h-3]).right===g?y.right=s:y.left=s
break}p._color=i,g.left=a(i,v),g._color=r,h-=1}}return f[0]._color=i,new c(n,f[0])},f.forEach=function(e,t,n){if(this.root)switch(arguments.length){case 1:return function e(t,n){var r
if(n.left&&(r=e(t,n.left)))return r
return(r=t(n.key,n.value))||(n.right?e(t,n.right):void 0)}(e,this.root)
case 2:return function e(t,n,r,i){if(n(t,i.key)<=0){var o
if(i.left&&(o=e(t,n,r,i.left)))return o
if(o=r(i.key,i.value))return o}if(i.right)return e(t,n,r,i.right)}(t,this._compare,e,this.root)
case 3:if(this._compare(t,n)>=0)return
return function e(t,n,r,i,o){var s,a=r(t,o.key),u=r(n,o.key)
if(a<=0){if(o.left&&(s=e(t,n,r,i,o.left)))return s
if(u>0&&(s=i(o.key,o.value)))return s}if(u>0&&o.right)return e(t,n,r,i,o.right)}(t,n,this._compare,e,this.root)}},Object.defineProperty(f,"begin",{get:function(){for(var e=[],t=this.root;t;)e.push(t),t=t.left
return new l(this,e)}}),Object.defineProperty(f,"end",{get:function(){for(var e=[],t=this.root;t;)e.push(t),t=t.right
return new l(this,e)}}),f.at=function(e){if(e<0)return new l(this,[])
for(var t=this.root,n=[];;){if(n.push(t),t.left){if(e<t.left._count){t=t.left
continue}e-=t.left._count}if(!e)return new l(this,n)
if(e-=1,!t.right)break
if(e>=t.right._count)break
t=t.right}return new l(this,[])},f.ge=function(e){for(var t=this._compare,n=this.root,r=[],i=0;n;){var o=t(e,n.key)
r.push(n),o<=0&&(i=r.length),n=o<=0?n.left:n.right}return r.length=i,new l(this,r)},f.gt=function(e){for(var t=this._compare,n=this.root,r=[],i=0;n;){var o=t(e,n.key)
r.push(n),o<0&&(i=r.length),n=o<0?n.left:n.right}return r.length=i,new l(this,r)},f.lt=function(e){for(var t=this._compare,n=this.root,r=[],i=0;n;){var o=t(e,n.key)
r.push(n),o>0&&(i=r.length),n=o<=0?n.left:n.right}return r.length=i,new l(this,r)},f.le=function(e){for(var t=this._compare,n=this.root,r=[],i=0;n;){var o=t(e,n.key)
r.push(n),o>=0&&(i=r.length),n=o<0?n.left:n.right}return r.length=i,new l(this,r)},f.find=function(e){for(var t=this._compare,n=this.root,r=[];n;){var i=t(e,n.key)
if(r.push(n),0===i)return new l(this,r)
n=i<=0?n.left:n.right}return new l(this,[])},f.remove=function(e){var t=this.find(e)
return t?t.remove():this},f.get=function(e){for(var t=this._compare,n=this.root;n;){var r=t(e,n.key)
if(0===r)return n.value
n=r<=0?n.left:n.right}}
var d=l.prototype
function h(e,t){e.key=t.key,e.value=t.value,e.left=t.left,e.right=t.right,e._color=t._color,e._count=t._count}function p(e,t){return e<t?-1:e>t?1:0}Object.defineProperty(d,"valid",{get:function(){return this._stack.length>0}}),Object.defineProperty(d,"node",{get:function(){return this._stack.length>0?this._stack[this._stack.length-1]:null},enumerable:!0}),d.clone=function(){return new l(this.tree,this._stack.slice())},d.remove=function(){var e=this._stack
if(0===e.length)return this.tree
var t=new Array(e.length),n=e[e.length-1]
t[t.length-1]=new o(n._color,n.key,n.value,n.left,n.right,n._count)
for(var f=e.length-2;f>=0;--f){(n=e[f]).left===e[f+1]?t[f]=new o(n._color,n.key,n.value,t[f+1],n.right,n._count):t[f]=new o(n._color,n.key,n.value,n.left,t[f+1],n._count)}if((n=t[t.length-1]).left&&n.right){var l=t.length
for(n=n.left;n.right;)t.push(n),n=n.right
var d=t[l-1]
t.push(new o(n._color,d.key,d.value,n.left,n.right,n._count)),t[l-1].key=n.key,t[l-1].value=n.value
for(f=t.length-2;f>=l;--f)n=t[f],t[f]=new o(n._color,n.key,n.value,n.left,t[f+1],n._count)
t[l-1].left=t[l]}if((n=t[t.length-1])._color===r){var p=t[t.length-2]
p.left===n?p.left=null:p.right===n&&(p.right=null),t.pop()
for(f=0;f<t.length;++f)t[f]._count--
return new c(this.tree._compare,t[0])}if(n.left||n.right){n.left?h(n,n.left):n.right&&h(n,n.right),n._color=i
for(f=0;f<t.length-1;++f)t[f]._count--
return new c(this.tree._compare,t[0])}if(1===t.length)return new c(this.tree._compare,null)
for(f=0;f<t.length;++f)t[f]._count--
var g=t[t.length-2]
return function(e){for(var t,n,o,c,f=e.length-1;f>=0;--f){if(t=e[f],0===f)return void(t._color=i)
if((n=e[f-1]).left===t){if((o=n.right).right&&o.right._color===r)return c=(o=n.right=s(o)).right=s(o.right),n.right=o.left,o.left=n,o.right=c,o._color=n._color,t._color=i,n._color=i,c._color=i,u(n),u(o),f>1&&((l=e[f-2]).left===n?l.left=o:l.right=o),void(e[f-1]=o)
if(o.left&&o.left._color===r)return c=(o=n.right=s(o)).left=s(o.left),n.right=c.left,o.left=c.right,c.left=n,c.right=o,c._color=n._color,n._color=i,o._color=i,t._color=i,u(n),u(o),u(c),f>1&&((l=e[f-2]).left===n?l.left=c:l.right=c),void(e[f-1]=c)
if(o._color===i){if(n._color===r)return n._color=i,void(n.right=a(r,o))
n.right=a(r,o)
continue}o=s(o),n.right=o.left,o.left=n,o._color=n._color,n._color=r,u(n),u(o),f>1&&((l=e[f-2]).left===n?l.left=o:l.right=o),e[f-1]=o,e[f]=n,f+1<e.length?e[f+1]=t:e.push(t),f+=2}else{if((o=n.left).left&&o.left._color===r)return c=(o=n.left=s(o)).left=s(o.left),n.left=o.right,o.right=n,o.left=c,o._color=n._color,t._color=i,n._color=i,c._color=i,u(n),u(o),f>1&&((l=e[f-2]).right===n?l.right=o:l.left=o),void(e[f-1]=o)
if(o.right&&o.right._color===r)return c=(o=n.left=s(o)).right=s(o.right),n.left=c.right,o.right=c.left,c.right=n,c.left=o,c._color=n._color,n._color=i,o._color=i,t._color=i,u(n),u(o),u(c),f>1&&((l=e[f-2]).right===n?l.right=c:l.left=c),void(e[f-1]=c)
if(o._color===i){if(n._color===r)return n._color=i,void(n.left=a(r,o))
n.left=a(r,o)
continue}var l
o=s(o),n.left=o.right,o.right=n,o._color=n._color,n._color=r,u(n),u(o),f>1&&((l=e[f-2]).right===n?l.right=o:l.left=o),e[f-1]=o,e[f]=n,f+1<e.length?e[f+1]=t:e.push(t),f+=2}}}(t),g.left===n?g.left=null:g.right=null,new c(this.tree._compare,t[0])},Object.defineProperty(d,"key",{get:function(){if(this._stack.length>0)return this._stack[this._stack.length-1].key},enumerable:!0}),Object.defineProperty(d,"value",{get:function(){if(this._stack.length>0)return this._stack[this._stack.length-1].value},enumerable:!0}),Object.defineProperty(d,"index",{get:function(){var e=0,t=this._stack
if(0===t.length){var n=this.tree.root
return n?n._count:0}t[t.length-1].left&&(e=t[t.length-1].left._count)
for(var r=t.length-2;r>=0;--r)t[r+1]===t[r].right&&(++e,t[r].left&&(e+=t[r].left._count))
return e},enumerable:!0}),d.next=function(){var e=this._stack
if(0!==e.length){var t=e[e.length-1]
if(t.right)for(t=t.right;t;)e.push(t),t=t.left
else for(e.pop();e.length>0&&e[e.length-1].right===t;)t=e[e.length-1],e.pop()}},Object.defineProperty(d,"hasNext",{get:function(){var e=this._stack
if(0===e.length)return!1
if(e[e.length-1].right)return!0
for(var t=e.length-1;t>0;--t)if(e[t-1].left===e[t])return!0
return!1}}),d.update=function(e){var t=this._stack
if(0===t.length)throw new Error("Can't update empty node!")
var n=new Array(t.length),r=t[t.length-1]
n[n.length-1]=new o(r._color,r.key,e,r.left,r.right,r._count)
for(var i=t.length-2;i>=0;--i)(r=t[i]).left===t[i+1]?n[i]=new o(r._color,r.key,r.value,n[i+1],r.right,r._count):n[i]=new o(r._color,r.key,r.value,r.left,n[i+1],r._count)
return new c(this.tree._compare,n[0])},d.prev=function(){var e=this._stack
if(0!==e.length){var t=e[e.length-1]
if(t.left)for(t=t.left;t;)e.push(t),t=t.right
else for(e.pop();e.length>0&&e[e.length-1].left===t;)t=e[e.length-1],e.pop()}},Object.defineProperty(d,"hasPrev",{get:function(){var e=this._stack
if(0===e.length)return!1
if(e[e.length-1].left)return!0
for(var t=e.length-1;t>0;--t)if(e[t-1].right===e[t])return!0
return!1}})},{}],18:[function(e,t,n){(function(){"use strict"
t.exports="function"==typeof Symbol&&"symbol"==typeof Symbol()})()},{}],19:[function(e,t,n){(function(){"use strict"
t.exports=e("has-symbol-support-x")&&"symbol"==typeof Symbol.toStringTag})()},{"has-symbol-support-x":18}],20:[function(e,t,n){(function(e){"use strict"
var n,r,i=e.MutationObserver||e.WebKitMutationObserver
if(i){var o=0,s=new i(f),a=e.document.createTextNode("")
s.observe(a,{characterData:!0}),n=function(){a.data=o=++o%2}}else if(e.setImmediate||void 0===e.MessageChannel)n="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script")
t.onreadystatechange=function(){f(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(f,0)}
else{var u=new e.MessageChannel
u.port1.onmessage=f,n=function(){u.port2.postMessage(0)}}var c=[]
function f(){var e,t
r=!0
for(var n=c.length;n;){for(t=c,c=[],e=-1;++e<n;)t[e]()
n=c.length}r=!1}t.exports=function(e){1!==c.push(e)||r||n()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],21:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t
var n=function(){}
n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],22:[function(e,t,n){(function(){"use strict"
var n,r,i,o=e("is-object-like-x"),s="function"==typeof ArrayBuffer
if(s){if(e("has-to-string-tag-x"))try{i="number"==typeof(i=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get).call(new ArrayBuffer(4))&&i}catch(a){i=null}i||(n=e("to-string-tag-x"),r="[object ArrayBuffer]")}t.exports=function(e){if(!s||!o(e))return!1
if(!i)return n(e)===r
try{return"number"==typeof i.call(e)}catch(a){}return!1}})()},{"has-to-string-tag-x":19,"is-object-like-x":25,"to-string-tag-x":153}],23:[function(e,t,n){var r=Array.isArray,i=Object.prototype.toString
t.exports=r||function(e){return!!e&&"[object Array]"==i.call(e)}},{}],24:[function(e,t,n){(function(){"use strict"
var n=Function.prototype.toString,r=e("to-string-tag-x"),i=e("has-to-string-tag-x"),o=e("is-primitive")
t.exports=function(e){if(o(e))return!1
if(i)return function(e){try{return n.call(e),!0}catch(t){}return!1}(e)
var t=r(e)
return"[object Function]"===t||"[object GeneratorFunction]"===t||"[object AsyncFunction]"===t}})()},{"has-to-string-tag-x":19,"is-primitive":26,"to-string-tag-x":153}],25:[function(e,t,n){(function(){"use strict"
var n=e("is-function-x"),r=e("is-primitive")
t.exports=function(e){return!r(e)&&!n(e)}})()},{"is-function-x":24,"is-primitive":26}],26:[function(e,t,n){"use strict"
t.exports=function(e){return null==e||"function"!=typeof e&&"object"!=typeof e}},{}],27:[function(e,t,n){var r={}.toString
t.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},{}],28:[function(e,t,n){var r=e("./lib/encodings")
function i(e){this.opts=e||{},this.encodings=r}t.exports=i,i.prototype._encoding=function(e){return"string"==typeof e&&(e=r[e]),e||(e=r.id),e},i.prototype._keyEncoding=function(e,t){return this._encoding(t&&t.keyEncoding||e&&e.keyEncoding||this.opts.keyEncoding)},i.prototype._valueEncoding=function(e,t){return this._encoding(t&&(t.valueEncoding||t.encoding)||e&&(e.valueEncoding||e.encoding)||this.opts.valueEncoding||this.opts.encoding)},i.prototype.encodeKey=function(e,t,n){return this._keyEncoding(t,n).encode(e)},i.prototype.encodeValue=function(e,t,n){return this._valueEncoding(t,n).encode(e)},i.prototype.decodeKey=function(e,t){return this._keyEncoding(t).decode(e)},i.prototype.decodeValue=function(e,t){return this._valueEncoding(t).decode(e)},i.prototype.encodeBatch=function(e,t){var n=this
return e.map(function(e){var r={type:e.type,key:n.encodeKey(e.key,t,e)}
return n.keyAsBuffer(t,e)&&(r.keyEncoding="binary"),e.prefix&&(r.prefix=e.prefix),"value"in e&&(r.value=n.encodeValue(e.value,t,e),n.valueAsBuffer(t,e)&&(r.valueEncoding="binary")),r})}
var o=["lt","gt","lte","gte","start","end"]
i.prototype.encodeLtgt=function(e){var t=this,n={}
return Object.keys(e).forEach(function(r){n[r]=o.indexOf(r)>-1?t.encodeKey(e[r],e):e[r]}),n},i.prototype.createStreamDecoder=function(e){var t=this
return e.keys&&e.values?function(n,r){return{key:t.decodeKey(n,e),value:t.decodeValue(r,e)}}:e.keys?function(n){return t.decodeKey(n,e)}:e.values?function(n,r){return t.decodeValue(r,e)}:function(){}},i.prototype.keyAsBuffer=function(e){return this._keyEncoding(e).buffer},i.prototype.valueAsBuffer=function(e){return this._valueEncoding(e).buffer}},{"./lib/encodings":29}],29:[function(e,t,n){(function(e){n.utf8=n["utf-8"]={encode:function(e){return t(e)?e:String(e)},decode:function(e){return"string"==typeof e?e:String(e)},buffer:!1,type:"utf8"},n.json={encode:JSON.stringify,decode:JSON.parse,buffer:!1,type:"json"},n.binary={encode:function(n){return t(n)?n:new e(n)},decode:function(e){return e},buffer:!0,type:"binary"},n.none={encode:function(e){return e},decode:function(e){return e},buffer:!1,type:"id"},n.id=n.none
function t(t){return null==t||e.isBuffer(t)}["hex","ascii","base64","ucs2","ucs-2","utf16le","utf-16le"].forEach(function(r){n[r]={encode:function(n){return t(n)?n:new e(n,r)},decode:function(e){return e.toString(r)},buffer:!0,type:r}})}).call(this,e("buffer").Buffer)},{buffer:162}],30:[function(e,t,n){var r=e("errno").create,i=r("LevelUPError"),o=r("NotFoundError",i)
o.prototype.notFound=!0,o.prototype.status=404,t.exports={LevelUPError:i,InitializationError:r("InitializationError",i),OpenError:r("OpenError",i),ReadError:r("ReadError",i),WriteError:r("WriteError",i),NotFoundError:o,EncodingError:r("EncodingError",i)}},{errno:16}],31:[function(e,t,n){var r=e("inherits"),i=e("readable-stream").Readable,o=e("xtend"),s=e("level-errors").EncodingError
function a(e,t){if(!(this instanceof a))return new a(e,t)
i.call(this,o(t,{objectMode:!0})),this._iterator=e,this._destroyed=!1,this._decoder=null,t&&t.decoder&&(this._decoder=t.decoder),this.on("end",this._cleanup.bind(this))}t.exports=a,r(a,i),a.prototype._read=function(){var e=this
this._destroyed||this._iterator.next(function(t,n,r){if(!e._destroyed){if(t)return e.emit("error",t)
if(void 0===n&&void 0===r)e.push(null)
else{if(!e._decoder)return e.push({key:n,value:r})
try{r=e._decoder(n,r)}catch(t){return e.emit("error",new s(t)),void e.push(null)}e.push(r)}}})},a.prototype.destroy=a.prototype._cleanup=function(){var e=this
this._destroyed||(this._destroyed=!0,this._iterator.end(function(t){if(t)return e.emit("error",t)
e.emit("close")}))}},{inherits:21,"level-errors":30,"readable-stream":142,xtend:157}],32:[function(e,t,n){var r=e("./util"),i=e("level-errors").WriteError,o=r.getOptions,s=r.dispatchError
function a(e,t){this._levelup=e,this._codec=t,this.batch=e.db.batch(),this.ops=[],this.length=0}a.prototype.put=function(e,t,n){n=o(n)
var r=this._codec.encodeKey(e,n),s=this._codec.encodeValue(t,n)
try{this.batch.put(r,s)}catch(a){throw new i(a)}return this.ops.push({type:"put",key:r,value:s}),this.length++,this},a.prototype.del=function(e,t){t=o(t)
var n=this._codec.encodeKey(e,t)
try{this.batch.del(n)}catch(r){throw new i(r)}return this.ops.push({type:"del",key:n}),this.length++,this},a.prototype.clear=function(){try{this.batch.clear()}catch(e){throw new i(e)}return this.ops=[],this.length=0,this},a.prototype.write=function(e){var t=this._levelup,n=this.ops
try{this.batch.write(function(r){if(r)return s(t,new i(r),e)
t.emit("batch",n),e&&e()})}catch(r){throw new i(r)}},t.exports=a},{"./util":34,"level-errors":30}],33:[function(e,t,n){(function(n){var r=e("events").EventEmitter,i=e("util").inherits,o=e("util").deprecate,s=e("xtend"),a=e("prr"),u=e("deferred-leveldown"),c=e("level-iterator-stream"),f=e("level-errors"),l=f.WriteError,d=f.ReadError,h=f.NotFoundError,p=f.OpenError,g=f.EncodingError,v=f.InitializationError,y=e("./util"),m=e("./batch"),b=e("level-codec"),_=y.getOptions,w=y.defaultOptions,k=y.getLevelDOWN,E=y.dispatchError
y.isDefined
function S(e,t){return"function"==typeof e?e:t}function x(e,t,i){if(!(this instanceof x))return new x(e,t,i)
var o
if(r.call(this),this.setMaxListeners(1/0),"function"==typeof e?((t="object"==typeof t?t:{}).db=e,e=null):"object"==typeof e&&"function"==typeof e.db&&(t=e,e=null),"function"==typeof t&&(i=t,t={}),(!t||"function"!=typeof t.db)&&"string"!=typeof e){if(o=new v("Must provide a location for the database"),i)return n.nextTick(function(){i(o)})
throw o}t=_(t),this.options=s(w,t),this._codec=new b(this.options),this._status="new",a(this,"location",e,"e"),this.open(i)}function j(e,t,n){if(!e._isOpening()&&!e.isOpen())return E(e,new d("Database is not open"),n),!0}function O(e,t,n){E(e,new l(t),n)}function A(e,t,n){E(e,new d(t),n)}function C(e){return function(t,n){k()[e](t,n||function(){})}}i(x,r),x.prototype.open=function(e){var t,r,i=this
return this.isOpen()?(e&&n.nextTick(function(){e(null,i)}),this):this._isOpening()?e&&this.once("open",function(){e(null,i)}):(this.emit("opening"),this._status="opening",this.db=new u(this.location),t=this.options.db||k(),void(r=t(this.location)).open(this.options,function(t){if(t)return E(i,new p(t),e)
i.db.setDb(r),i.db=r,i._status="open",e&&e(null,i),i.emit("open"),i.emit("ready")}))},x.prototype.close=function(e){var t=this
if(this.isOpen())this._status="closing",this.db.close(function(){t._status="closed",t.emit("closed"),e&&e.apply(null,arguments)}),this.emit("closing"),this.db=new u(this.location)
else{if("closed"==this._status&&e)return n.nextTick(e)
"closing"==this._status&&e?this.once("closed",e):this._isOpening()&&this.once("open",function(){t.close(e)})}},x.prototype.isOpen=function(){return"open"==this._status},x.prototype._isOpening=function(){return"opening"==this._status},x.prototype.isClosed=function(){return/^clos/.test(this._status)},x.prototype.get=function(e,t,n){var r,i=this
if(!j(this,0,n=S(t,n))){if(null==e||"function"!=typeof n)return A(this,"get() requires key and callback arguments",n)
t=y.getOptions(t),r=this._codec.encodeKey(e,t),t.asBuffer=this._codec.valueAsBuffer(t),this.db.get(r,t,function(r,o){if(r)return r=/notfound/i.test(r)||r.notFound?new h("Key not found in database ["+e+"]",r):new d(r),E(i,r,n)
if(n){try{o=i._codec.decodeValue(o,t)}catch(s){return n(new g(s))}n(null,o)}})}},x.prototype.put=function(e,t,n,r){var i,o,s=this
if(r=S(n,r),null==e)return O(this,"put() requires a key argument",r)
j(this,0,r)||(n=_(n),i=this._codec.encodeKey(e,n),o=this._codec.encodeValue(t,n),this.db.put(i,o,n,function(n){if(n)return E(s,new l(n),r)
s.emit("put",e,t),r&&r()}))},x.prototype.del=function(e,t,n){var r,i=this
if(n=S(t,n),null==e)return O(this,"del() requires a key argument",n)
j(this,0,n)||(t=_(t),r=this._codec.encodeKey(e,t),this.db.del(r,t,function(t){if(t)return E(i,new l(t),n)
i.emit("del",e),n&&n()}))},x.prototype.batch=function(e,t,n){var r,i=this
return arguments.length?(n=S(t,n),Array.isArray(e)?void(j(this,0,n)||(t=_(t),r=(r=i._codec.encodeBatch(e,t)).map(function(e){return e.type||void 0===e.key||void 0===e.value||(e.type="put"),e}),this.db.batch(r,t,function(t){if(t)return E(i,new l(t),n)
i.emit("batch",e),n&&n()}))):O(this,"batch() requires an array argument",n)):new m(this,this._codec)},x.prototype.approximateSize=o(function(e,t,n,r){var i,o,s=this
if(r=S(n,r),n=_(n),null==e||null==t||"function"!=typeof r)return A(this,"approximateSize() requires start, end and callback arguments",r)
i=this._codec.encodeKey(e,n),o=this._codec.encodeKey(t,n),this.db.approximateSize(i,o,function(e,t){if(e)return E(s,new p(e),r)
r&&r(null,t)})},"db.approximateSize() is deprecated. Use db.db.approximateSize() instead"),x.prototype.readStream=x.prototype.createReadStream=function(e){return(e=s({keys:!0,values:!0},this.options,e)).keyEncoding=e.keyEncoding,e.valueEncoding=e.valueEncoding,(e=this._codec.encodeLtgt(e)).keyAsBuffer=this._codec.keyAsBuffer(e),e.valueAsBuffer=this._codec.valueAsBuffer(e),"number"!=typeof e.limit&&(e.limit=-1),new c(this.db.iterator(e),s(e,{decoder:this._codec.createStreamDecoder(e)}))},x.prototype.keyStream=x.prototype.createKeyStream=function(e){return this.createReadStream(s(e,{keys:!0,values:!1}))},x.prototype.valueStream=x.prototype.createValueStream=function(e){return this.createReadStream(s(e,{keys:!1,values:!0}))},x.prototype.toString=function(){return"LevelUP"},t.exports=x,t.exports.errors=e("level-errors"),t.exports.destroy=o(C("destroy"),"levelup.destroy() is deprecated. Use leveldown.destroy() instead"),t.exports.repair=o(C("repair"),"levelup.repair() is deprecated. Use leveldown.repair() instead")}).call(this,e("_process"))},{"./batch":32,"./util":34,_process:170,"deferred-leveldown":8,events:164,"level-codec":35,"level-errors":30,"level-iterator-stream":31,prr:37,util:188,xtend:157}],34:[function(e,t,n){e("xtend")
var r,i=e("level-errors").LevelUPError,o=e("util").format
function s(e){return new i(o("Failed to require LevelDOWN (%s). Try `npm install leveldown` if it's missing",e.message))}t.exports={defaultOptions:{createIfMissing:!0,errorIfExists:!1,keyEncoding:"utf8",valueEncoding:"utf8",compression:!0},getOptions:function(e){return"string"==typeof e&&(e={valueEncoding:e}),"object"!=typeof e&&(e={}),e},getLevelDOWN:function(){if(r)return r
var t,n=e("../package.json").devDependencies.leveldown
try{t=e("leveldown/package.json").version}catch(o){throw s(o)}if(!e("semver").satisfies(t,n))throw new i("Installed version of LevelDOWN ("+t+") does not match required version ("+n+")")
try{return r=e("leveldown")}catch(o){throw s(o)}},dispatchError:function(e,t,n){"function"==typeof n?n(t):e.emit("error",t)},isDefined:function(e){return void 0!==e}}},{"../package.json":38,"level-errors":30,leveldown:160,"leveldown/package.json":160,semver:160,util:188,xtend:157}],35:[function(e,t,n){arguments[4][28][0].apply(n,arguments)},{"./lib/encodings":36,dup:28}],36:[function(e,t,n){(function(e){n.utf8=n["utf-8"]={encode:function(e){return r(e)?e:String(e)},decode:t,buffer:!1,type:"utf8"},n.json={encode:JSON.stringify,decode:JSON.parse,buffer:!1,type:"json"},n.binary={encode:function(t){return r(t)?t:new e(t)},decode:t,buffer:!0,type:"binary"},n.id={encode:function(e){return e},decode:function(e){return e},buffer:!1,type:"id"}
function t(e){return e}function r(t){return null==t||e.isBuffer(t)}["hex","ascii","base64","ucs2","ucs-2","utf16le","utf-16le"].forEach(function(t){n[t]={encode:function(n){return r(n)?n:new e(n,t)},decode:function(e){return e.toString(t)},buffer:!0,type:t}})}).call(this,e("buffer").Buffer)},{buffer:162}],37:[function(e,t,n){var r,i
r=this,i=function(){var e="function"==typeof Object.defineProperty?function(e,t,n){return Object.defineProperty(e,t,n),e}:function(e,t,n){return e[t]=n.value,e}
return function(t,n,r,i){var o
if(i=function(e,t){var n="object"==typeof t,r=!n&&"string"==typeof t,i=function(e){return n?!!t[e]:!!r&&t.indexOf(e[0])>-1}
return{enumerable:i("enumerable"),configurable:i("configurable"),writable:i("writable"),value:e}}(r,i),"object"==typeof n){for(o in n)Object.hasOwnProperty.call(n,o)&&(i.value=n[o],e(t,o,i))
return t}return e(t,n,i)}},void 0!==t&&t.exports?t.exports=i():r.prr=i()},{}],38:[function(e,t,n){t.exports={_args:[[{raw:"levelup@1.3.5",scope:null,escapedName:"levelup",name:"levelup",rawSpec:"1.3.5",spec:"1.3.5",type:"version"},"/Users/jkleinsc/work/hospitalrun/frontend/node_modules/pouchdb"]],_from:"levelup@1.3.5",_id:"levelup@1.3.5",_inCache:!0,_location:"/levelup",_nodeVersion:"7.4.0",_npmOperationalInternal:{host:"packages-18-east.internal.npmjs.com",tmp:"tmp/levelup-1.3.5.tgz_1488477248468_0.036320413229987025"},_npmUser:{name:"ralphtheninja",email:"ralphtheninja@riseup.net"},_npmVersion:"4.0.5",_phantomChildren:{},_requested:{raw:"levelup@1.3.5",scope:null,escapedName:"levelup",name:"levelup",rawSpec:"1.3.5",spec:"1.3.5",type:"version"},_requiredBy:["/pouchdb","/pouchdb-adapter-leveldb-core"],_resolved:"https://registry.npmjs.org/levelup/-/levelup-1.3.5.tgz",_shasum:"fa80a972b74011f2537c8b65678bd8b5188e4e66",_shrinkwrap:null,_spec:"levelup@1.3.5",_where:"/Users/jkleinsc/work/hospitalrun/frontend/node_modules/pouchdb",browser:{leveldown:!1,"leveldown/package":!1,semver:!1},bugs:{url:"https://github.com/level/levelup/issues"},contributors:[{name:"Rod Vagg",email:"r@va.gg",url:"https://github.com/rvagg"},{name:"John Chesley",email:"john@chesl.es",url:"https://github.com/chesles/"},{name:"Jake Verbaten",email:"raynos2@gmail.com",url:"https://github.com/raynos"},{name:"Dominic Tarr",email:"dominic.tarr@gmail.com",url:"https://github.com/dominictarr"},{name:"Max Ogden",email:"max@maxogden.com",url:"https://github.com/maxogden"},{name:"Lars-Magnus Skog",email:"ralphtheninja@riseup.net",url:"https://github.com/ralphtheninja"},{name:"David Björklund",email:"david.bjorklund@gmail.com",url:"https://github.com/kesla"},{name:"Julian Gruber",email:"julian@juliangruber.com",url:"https://github.com/juliangruber"},{name:"Paolo Fragomeni",email:"paolo@async.ly",url:"https://github.com/0x00a"},{name:"Anton Whalley",email:"anton.whalley@nearform.com",url:"https://github.com/No9"},{name:"Matteo Collina",email:"matteo.collina@gmail.com",url:"https://github.com/mcollina"},{name:"Pedro Teixeira",email:"pedro.teixeira@gmail.com",url:"https://github.com/pgte"},{name:"James Halliday",email:"mail@substack.net",url:"https://github.com/substack"},{name:"Jarrett Cruger",email:"jcrugzz@gmail.com",url:"https://github.com/jcrugzz"}],dependencies:{"deferred-leveldown":"~1.2.1","level-codec":"~6.1.0","level-errors":"~1.0.3","level-iterator-stream":"~1.3.0",prr:"~1.0.1",semver:"~5.1.0",xtend:"~4.0.0"},description:"Fast & simple storage - a Node.js-style LevelDB wrapper",devDependencies:{async:"~1.5.0",bustermove:"~1.0.0",delayed:"~1.0.1",faucet:"~0.0.1",leveldown:"^1.1.0",memdown:"~1.1.0","msgpack-js":"~0.3.0",referee:"~1.2.0",rimraf:"~2.4.3","slow-stream":"0.0.4",tap:"~2.3.1",tape:"~4.2.1"},directories:{},dist:{shasum:"fa80a972b74011f2537c8b65678bd8b5188e4e66",tarball:"https://registry.npmjs.org/levelup/-/levelup-1.3.5.tgz"},gitHead:"ed5a54202085839784f1189f1266e9c379d64081",homepage:"https://github.com/level/levelup",keywords:["leveldb","stream","database","db","store","storage","json"],license:"MIT",main:"lib/levelup.js",maintainers:[{name:"rvagg",email:"rod@vagg.org"},{name:"ralphtheninja",email:"ralphtheninja@riseup.net"},{name:"juliangruber",email:"julian@juliangruber.com"}],name:"levelup",optionalDependencies:{},readme:"ERROR: No README data found!",repository:{type:"git",url:"git+https://github.com/level/levelup.git"},scripts:{test:"tape test/*-test.js | faucet"},version:"1.3.5"}},{}],39:[function(e,t,n){"use strict"
var r=e("immediate")
function i(){}var o={},s=["REJECTED"],a=["FULFILLED"],u=["PENDING"]
function c(e){if("function"!=typeof e)throw new TypeError("resolver must be a function")
this.state=u,this.queue=[],this.outcome=void 0,e!==i&&h(this,e)}function f(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function l(e,t,n){r(function(){var r
try{r=t(n)}catch(i){return o.reject(e,i)}r===e?o.reject(e,new TypeError("Cannot resolve promise with itself")):o.resolve(e,r)})}function d(e){var t=e&&e.then
if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function h(e,t){var n=!1
function r(t){n||(n=!0,o.reject(e,t))}function i(t){n||(n=!0,o.resolve(e,t))}var s=p(function(){t(i,r)})
"error"===s.status&&r(s.value)}function p(e,t){var n={}
try{n.value=e(t),n.status="success"}catch(r){n.status="error",n.value=r}return n}t.exports=c,c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this
var n=new this.constructor(i)
this.state!==u?l(n,this.state===a?e:t,this.outcome):this.queue.push(new f(n,e,t))
return n},f.prototype.callFulfilled=function(e){o.resolve(this.promise,e)},f.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},f.prototype.callRejected=function(e){o.reject(this.promise,e)},f.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},o.resolve=function(e,t){var n=p(d,t)
if("error"===n.status)return o.reject(e,n.value)
var r=n.value
if(r)h(e,r)
else{e.state=a,e.outcome=t
for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},o.reject=function(e,t){e.state=s,e.outcome=t
for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t)
return e},c.resolve=function(e){if(e instanceof this)return e
return o.resolve(new this(i),e)},c.reject=function(e){var t=new this(i)
return o.reject(t,e)},c.all=function(e){var t=this
if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"))
var n=e.length,r=!1
if(!n)return this.resolve([])
var s=new Array(n),a=0,u=-1,c=new this(i)
for(;++u<n;)f(e[u],u)
return c
function f(e,i){t.resolve(e).then(function(e){s[i]=e,++a!==n||r||(r=!0,o.resolve(c,s))},function(e){r||(r=!0,o.reject(c,e))})}},c.race=function(e){var t=this
if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"))
var n=e.length,r=!1
if(!n)return this.resolve([])
var s=-1,a=new this(i)
for(;++s<n;)u=e[s],t.resolve(u).then(function(e){r||(r=!0,o.resolve(a,e))},function(e){r||(r=!0,o.reject(a,e))})
var u
return a}},{immediate:20}],40:[function(e,t,n){t.exports=function(e){return null===e}},{}],41:[function(e,t,n){(function(e){function t(e,t){return Object.hasOwnProperty.call(e,t)}function r(e){return void 0!==e&&""!==e}function t(e,t){return Object.hasOwnProperty.call(e,t)}function i(e,t){return Object.hasOwnProperty.call(e,t)&&t}n.compare=function(t,n){if(e.isBuffer(t)){for(var r=Math.min(t.length,n.length),i=0;i<r;i++){var o=t[i]-n[i]
if(o)return o}return t.length-n.length}return t<n?-1:t>n?1:0}
var o=n.lowerBoundKey=function(e){return i(e,"gt")||i(e,"gte")||i(e,"min")||(e.reverse?i(e,"end"):i(e,"start"))||void 0},s=n.lowerBound=function(e){var t=o(e)
return t&&e[t]},a=n.lowerBoundInclusive=function(e){return!t(e,"gt")},u=n.upperBoundInclusive=function(e){return!t(e,"lt")},c=n.lowerBoundExclusive=function(e){return!a(e)},f=n.upperBoundExclusive=function(e){return!u(e)},l=n.upperBoundKey=function(e){return i(e,"lt")||i(e,"lte")||i(e,"max")||(e.reverse?i(e,"start"):i(e,"end"))||void 0},d=n.upperBound=function(e){var t=l(e)
return t&&e[t]}
function h(e){return e}n.toLtgt=function(e,r,i,o,s){r=r||{},i=i||h
var a=arguments.length>3,u=n.lowerBoundKey(e),c=n.upperBoundKey(e)
return u?"gt"===u?r.gt=i(e.gt,!1):r.gte=i(e[u],!1):a&&(r.gte=i(o,!1)),c?"lt"===c?r.lt=i(e.lt,!0):r.lte=i(e[c],!0):a&&(r.lte=i(s,!0)),null!=e.reverse&&(r.reverse=!!e.reverse),t(r,"max")&&delete r.max,t(r,"min")&&delete r.min,t(r,"start")&&delete r.start,t(r,"end")&&delete r.end,r},n.contains=function(e,t,i){i=i||n.compare
var o=s(e)
if(r(o)&&((a=i(t,o))<0||0===a&&c(e)))return!1
var a,u=d(e)
if(r(u)&&((a=i(t,u))>0||0===a&&f(e)))return!1
return!0},n.filter=function(e,t){return function(r){return n.contains(e,r,t)}}}).call(this,{isBuffer:e("../../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js")})},{"../../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js":167}],42:[function(e,t,n){t.exports=e("immediate")},{immediate:49}],43:[function(e,t,n){(function(n){var r=e("inherits"),i=e("abstract-leveldown").AbstractLevelDOWN,o=e("abstract-leveldown").AbstractIterator,s=e("ltgt"),a=e("functional-red-black-tree"),u={},c=e("./immediate")
function f(e){return s.compare(e,this._end)>0}function l(e){return s.compare(e,this._end)>=0}function d(e){return s.compare(e,this._end)<0}function h(e){return s.compare(e,this._end)<=0}function p(e,t){o.call(this,e),this._limit=t.limit,-1===this._limit&&(this._limit=1/0)
var n=e._store[e._location]
this.keyAsBuffer=!1!==t.keyAsBuffer,this.valueAsBuffer=!1!==t.valueAsBuffer,this._reverse=t.reverse,this._options=t,this._done=0,this._reverse?(this._incr="prev",this._start=s.upperBound(t),this._end=s.lowerBound(t),void 0===this._start?this._tree=n.end:s.upperBoundInclusive(t)?this._tree=n.le(this._start):this._tree=n.lt(this._start),this._end&&(s.lowerBoundInclusive(t)?this._test=l:this._test=f)):(this._incr="next",this._start=s.lowerBound(t),this._end=s.upperBound(t),void 0===this._start?this._tree=n.begin:s.lowerBoundInclusive(t)?this._tree=n.ge(this._start):this._tree=n.gt(this._start),this._end&&(s.upperBoundInclusive(t)?this._test=h:this._test=d))}function g(e){if(!(this instanceof g))return new g(e)
i.call(this,"string"==typeof e?e:""),this._location=this.location?"$"+this.location:"_tree",this._store=this.location?u:this,this._store[this._location]=this._store[this._location]||a(s.compare)}r(p,o),p.prototype._next=function(e){var t,r
return this._done++>=this._limit?c(e):this._tree.valid?(t=this._tree.key,r=this._tree.value,this._test(t)?(this.keyAsBuffer&&(t=new n(t)),this.valueAsBuffer&&(r=new n(r)),this._tree[this._incr](),void c(function(){e(null,t,r)})):c(e)):c(e)},p.prototype._test=function(){return!0},g.clearGlobalStore=function(e){e?Object.keys(u).forEach(function(e){delete u[e]}):u={}},r(g,i),g.prototype._open=function(e,t){var n=this
c(function(){t(null,n)})},g.prototype._put=function(e,t,n,r){null==t&&(t="")
var i=this._store[this._location].find(e)
i.valid?this._store[this._location]=i.update(t):this._store[this._location]=this._store[this._location].insert(e,t),c(r)},g.prototype._get=function(e,t,r){var i=this._store[this._location].get(e)
if(void 0===i)return c(function(){r(new Error("NotFound"))})
!1===t.asBuffer||this._isBuffer(i)||(i=new n(String(i))),c(function(){r(null,i)})},g.prototype._del=function(e,t,n){this._store[this._location]=this._store[this._location].remove(e),c(n)},g.prototype._batch=function(e,t,n){for(var r,i,o,s=-1,a=e.length,u=this._store[this._location];++s<a;)e[s]&&(r=this._isBuffer(e[s].key)?e[s].key:String(e[s].key),o=u.find(r),"put"===e[s].type?(i=this._isBuffer(e[s].value)?e[s].value:String(e[s].value),u=o.valid?o.update(i):u.insert(r,i)):u=o.remove())
this._store[this._location]=u,c(n)},g.prototype._iterator=function(e){return new p(this,e)},g.prototype._isBuffer=function(e){return n.isBuffer(e)},g.destroy=function(e,t){var n="$"+e
n in u&&delete u[n],c(t)},t.exports=g}).call(this,e("buffer").Buffer)},{"./immediate":42,"abstract-leveldown":47,buffer:162,"functional-red-black-tree":17,inherits:21,ltgt:41}],44:[function(e,t,n){arguments[4][9][0].apply(n,arguments)},{_process:170,dup:9}],45:[function(e,t,n){arguments[4][10][0].apply(n,arguments)},{_process:170,dup:10}],46:[function(e,t,n){arguments[4][11][0].apply(n,arguments)},{"../../../../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js":167,"./abstract-chained-batch":44,"./abstract-iterator":45,_process:170,dup:11,xtend:157}],47:[function(e,t,n){arguments[4][12][0].apply(n,arguments)},{"./abstract-chained-batch":44,"./abstract-iterator":45,"./abstract-leveldown":46,"./is-leveldown":48,dup:12}],48:[function(e,t,n){arguments[4][13][0].apply(n,arguments)},{"./abstract-leveldown":46,dup:13}],49:[function(e,t,n){"use strict"
var r,i,o,s=[e("./nextTick"),e("./mutation.js"),e("./messageChannel"),e("./stateChange"),e("./timeout")],a=-1,u=[],c=!1
function f(){r&&i&&(r=!1,i.length?u=i.concat(u):a=-1,u.length&&l())}function l(){if(!r){c=!1,r=!0
for(var e=u.length,t=setTimeout(f);e;){for(i=u,u=[];i&&++a<e;)i[a].run()
a=-1,e=u.length}i=null,a=-1,r=!1,clearTimeout(t)}}for(var d=-1,h=s.length;++d<h;)if(s[d]&&s[d].test&&s[d].test()){o=s[d].install(l)
break}function p(e,t){this.fun=e,this.array=t}p.prototype.run=function(){var e=this.fun,t=this.array
switch(t.length){case 0:return e()
case 1:return e(t[0])
case 2:return e(t[0],t[1])
case 3:return e(t[0],t[1],t[2])
default:return e.apply(null,t)}},t.exports=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
u.push(new p(e,t)),c||r||(c=!0,o())}},{"./messageChannel":50,"./mutation.js":51,"./nextTick":52,"./stateChange":53,"./timeout":54}],50:[function(e,t,n){(function(e){"use strict"
n.test=function(){return!e.setImmediate&&void 0!==e.MessageChannel},n.install=function(t){var n=new e.MessageChannel
return n.port1.onmessage=t,function(){n.port2.postMessage(0)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],51:[function(e,t,n){(function(e){"use strict"
var t=e.MutationObserver||e.WebKitMutationObserver
n.test=function(){return t},n.install=function(n){var r=0,i=new t(n),o=e.document.createTextNode("")
return i.observe(o,{characterData:!0}),function(){o.data=r=++r%2}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],52:[function(e,t,n){(function(e){"use strict"
n.test=function(){return void 0!==e&&!e.browser},n.install=function(t){return function(){e.nextTick(t)}}}).call(this,e("_process"))},{_process:170}],53:[function(e,t,n){(function(e){"use strict"
n.test=function(){return"document"in e&&"onreadystatechange"in e.document.createElement("script")},n.install=function(t){return function(){var n=e.document.createElement("script")
return n.onreadystatechange=function(){t(),n.onreadystatechange=null,n.parentNode.removeChild(n),n=null},e.document.documentElement.appendChild(n),t}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],54:[function(e,t,n){"use strict"
n.test=function(){return!0},n.install=function(e){return function(){setTimeout(e,0)}}},{}],55:[function(e,t,n){var r=1e3,i=60*r,o=60*i,s=24*o,a=365.25*s
function u(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}t.exports=function(e,t){t=t||{}
var n,c=typeof e
if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>1e4)return
var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e)
if(!t)return
var n=parseFloat(t[1])
switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*a
case"days":case"day":case"d":return n*s
case"hours":case"hour":case"hrs":case"hr":case"h":return n*o
case"minutes":case"minute":case"mins":case"min":case"m":return n*i
case"seconds":case"second":case"secs":case"sec":case"s":return n*r
case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n
default:return}}(e)
if("number"===c&&!1===isNaN(e))return t.long?u(n=e,s,"day")||u(n,o,"hour")||u(n,i,"minute")||u(n,r,"second")||n+" ms":function(e){if(e>=s)return Math.round(e/s)+"d"
if(e>=o)return Math.round(e/o)+"h"
if(e>=i)return Math.round(e/i)+"m"
if(e>=r)return Math.round(e/r)+"s"
return e+"ms"}(e)
throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],56:[function(e,t,n){"use strict"
var r,i=(r=e("pouchdb-promise"))&&"object"==typeof r&&"default"in r?r.default:r,o=e("pouchdb-collections"),s=e("pouchdb-utils"),a=e("pouchdb-binary-utils"),u=e("pouchdb-collate"),c=e("pouchdb-md5"),f=e("pouchdb-mapreduce-utils")
function l(){this.promise=new i(function(e){e()})}function d(e){if(!e)return"undefined"
switch(typeof e){case"function":case"string":return e.toString()
default:return JSON.stringify(e)}}function h(e,t,n,r,i,o){var a,u=function(e,t){return d(e)+d(t)+"undefined"}(n,r)
if(!i&&(a=e._cachedViews=e._cachedViews||{})[u])return a[u]
var f=e.info().then(function(f){var l=f.db_name+"-mrview-"+(i?"temp":c.stringMd5(u))
return s.upsert(e,"_local/"+o,function(e){e.views=e.views||{}
var n=t;-1===n.indexOf("/")&&(n=t+"/"+t)
var r=e.views[n]=e.views[n]||{}
if(!r[l])return r[l]=!0,e}).then(function(){return e.registerDependentDatabase(l).then(function(t){var i=t.db
i.auto_compaction=!0
var o={name:l,db:i,sourceDB:e,adapter:e.adapter,mapFun:n,reduceFun:r}
return o.db.get("_local/lastSeq").catch(function(e){if(404!==e.status)throw e}).then(function(e){return o.seq=e?e.seq:0,a&&o.db.once("destroyed",function(){delete a[u]}),o})})})})
return a&&(a[u]=f),f}l.prototype.add=function(e){return this.promise=this.promise.catch(function(){}).then(function(){return e()}),this.promise},l.prototype.finish=function(){return this.promise}
var p={},g=new l,v=50
function y(e){return-1===e.indexOf("/")?[e,e]:e.split("/")}function m(e,t){try{e.emit("error",t)}catch(n){s.guardedConsole("error","The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),s.guardedConsole("error",t)}}t.exports=function(e,t,n,r){function c(e,t,n){try{t(n)}catch(r){m(e,r)}}function d(e,t,n,r,i){try{return{output:t(n,r,i)}}catch(o){return m(e,o),{error:o}}}function b(e,t){var n=u.collate(e.key,t.key)
return 0!==n?n:u.collate(e.value,t.value)}function _(e,t,n){return n=n||0,"number"==typeof t?e.slice(n,t+n):n>0?e.slice(n):e}function w(e){var t=e.value
return t&&"object"==typeof t&&t._id||e.id}function k(e){return function(t){return e.include_docs&&e.attachments&&e.binary&&function(e){e.rows.forEach(function(e){var t=e.doc&&e.doc._attachments
t&&Object.keys(t).forEach(function(e){var n=t[e]
t[e].data=a.base64StringToBlobOrBuffer(n.data,n.content_type)})})}(t),t}}function E(e,t,n,r){var i=t[e]
void 0!==i&&(r&&(i=encodeURIComponent(JSON.stringify(i))),n.push(e+"="+i))}function S(e){if(void 0!==e){var t=Number(e)
return isNaN(t)||t!==parseInt(e,10)?e:t}}function x(e,t){var n=e.descending?"endkey":"startkey",r=e.descending?"startkey":"endkey"
if(void 0!==e[n]&&void 0!==e[r]&&u.collate(e[n],e[r])>0)throw new f.QueryParseError("No rows can match your key range, reverse your start_key and end_key or set {descending : true}")
if(t.reduce&&!1!==e.reduce){if(e.include_docs)throw new f.QueryParseError("{include_docs:true} is invalid for reduce")
if(e.keys&&e.keys.length>1&&!e.group&&!e.group_level)throw new f.QueryParseError("Multi-key fetches for reduce views must use {group: true}")}["group_level","limit","skip"].forEach(function(t){var n=function(e){if(e){if("number"!=typeof e)return new f.QueryParseError('Invalid value for integer: "'+e+'"')
if(e<0)return new f.QueryParseError('Invalid value for positive integer: "'+e+'"')}}(e[t])
if(n)throw n})}function j(e){return function(t){if(404===t.status)return e
throw t}}function O(e,t,n){var r="_local/doc_"+e,s={_id:r,keys:[]},a=n.get(e),u=a[0]
return(function(e){return 1===e.length&&/^1-/.test(e[0].rev)}(a[1])?i.resolve(s):t.db.get(r).catch(j(s))).then(function(e){return function(e){return e.keys.length?t.db.allDocs({keys:e.keys,include_docs:!0}):i.resolve({rows:[]})}(e).then(function(t){return function(e,t){for(var n=[],r=new o.Set,i=0,s=t.rows.length;i<s;i++){var a=t.rows[i].doc
if(a&&(n.push(a),r.add(a._id),a._deleted=!u.has(a._id),!a._deleted)){var c=u.get(a._id)
"value"in c&&(a.value=c.value)}}var l=f.mapToKeysArray(u)
return l.forEach(function(e){if(!r.has(e)){var t={_id:e},i=u.get(e)
"value"in i&&(t.value=i.value),n.push(t)}}),e.keys=f.uniq(l.concat(e.keys)),n.push(e),n}(e,t)})})}function A(e){var t="string"==typeof e?e:e.name,n=p[t]
return n||(n=p[t]=new l),n}function C(e){return f.sequentialize(A(e),function(){return function(e){var n,r,a=t(e.mapFun,function(e,t){var i={id:r._id,key:u.normalizeKey(e)}
null!=t&&(i.value=u.normalizeKey(t)),n.push(i)}),d=e.seq||0
function h(t,n){return function(){return function(e,t,n){return e.db.get("_local/lastSeq").catch(j({_id:"_local/lastSeq",seq:0})).then(function(r){var o=f.mapToKeysArray(t)
return i.all(o.map(function(n){return O(n,e,t)})).then(function(t){var i=s.flatten(t)
return r.seq=n,i.push(r),e.db.bulkDocs({docs:i})})})}(e,t,n)}}var p=new l
function g(){return e.sourceDB.changes({conflicts:!0,include_docs:!0,style:"all_docs",since:d,limit:v}).then(y)}function y(t){var i=t.results
if(i.length){var s=function(t){for(var i=new o.Map,s=0,u=t.length;s<u;s++){var f=t[s]
if("_"!==f.doc._id[0]){n=[],(r=f.doc)._deleted||c(e.sourceDB,a,r),n.sort(b)
var l=m(n)
i.set(f.doc._id,[l,f.changes])}d=f.seq}return i}(i)
if(p.add(h(s,d)),!(i.length<v))return g()}}function m(e){for(var t,n=new o.Map,r=0,i=e.length;r<i;r++){var s=e[r],a=[s.key,s.id]
r>0&&0===u.collate(s.key,t)&&a.push(r),n.set(u.toIndexableString(a),s),t=s.key}return n}return g().then(function(){return p.finish()}).then(function(){e.seq=d})}(e)})()}function D(e,t){return f.sequentialize(A(e),function(){return function(e,t){var r,a=e.reduceFun&&!1!==t.reduce,c=t.skip||0
function l(t){return t.include_docs=!0,e.db.allDocs(t).then(function(e){return r=e.total_rows,e.rows.map(function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"]
if(!(t<n||t>n))return e.doc.value}var r=u.parseIndexableString(e.doc._id)
return{key:r[0],id:r[1],value:"value"in e.doc?e.doc.value:null}})})}function h(i){var s
if(s=a?function(e,t,r){0===r.group_level&&delete r.group_level
var i=r.group||r.group_level,o=n(e.reduceFun),s=[],a=isNaN(r.group_level)?Number.POSITIVE_INFINITY:r.group_level
t.forEach(function(e){var t=s[s.length-1],n=i?e.key:null
if(i&&Array.isArray(n)&&(n=n.slice(0,a)),t&&0===u.collate(t.groupKey,n))return t.keys.push([e.key,e.id]),void t.values.push(e.value)
s.push({keys:[[e.key,e.id]],values:[e.value],groupKey:n})}),t=[]
for(var c=0,l=s.length;c<l;c++){var h=s[c],p=d(e.sourceDB,o,h.keys,h.values,!1)
if(p.error&&p.error instanceof f.BuiltInError)throw p.error
t.push({value:p.error?null:p.output,key:h.groupKey})}return{rows:_(t,r.limit,r.skip)}}(e,i,t):{total_rows:r,offset:c,rows:i},t.include_docs){var l=f.uniq(i.map(w))
return e.sourceDB.allDocs({keys:l,include_docs:!0,conflicts:t.conflicts,attachments:t.attachments,binary:t.binary}).then(function(e){var t=new o.Map
return e.rows.forEach(function(e){t.set(e.id,e.doc)}),i.forEach(function(e){var n=w(e),r=t.get(n)
r&&(e.doc=r)}),s})}return s}if(void 0===t.keys||t.keys.length||(t.limit=0,delete t.keys),void 0!==t.keys){var p=t.keys,g=p.map(function(e){var t={startkey:u.toIndexableString([e]),endkey:u.toIndexableString([e,{}])}
return l(t)})
return i.all(g).then(s.flatten).then(h)}var v,y,m={descending:t.descending}
if("start_key"in t&&(v=t.start_key),"startkey"in t&&(v=t.startkey),"end_key"in t&&(y=t.end_key),"endkey"in t&&(y=t.endkey),void 0!==v&&(m.startkey=t.descending?u.toIndexableString([v,{}]):u.toIndexableString([v])),void 0!==y){var b=!1!==t.inclusive_end
t.descending&&(b=!b),m.endkey=u.toIndexableString(b?[y,{}]:[y])}if(void 0!==t.key){var k=u.toIndexableString([t.key]),E=u.toIndexableString([t.key,{}])
m.descending?(m.endkey=k,m.startkey=E):(m.startkey=k,m.endkey=E)}return a||("number"==typeof t.limit&&(m.limit=t.limit),m.skip=c),l(m).then(h)}(e,t)})()}function B(t,n,o){if("function"==typeof t._query)return function(e,t,n){return new i(function(r,i){e._query(t,n,function(e,t){if(e)return i(e)
r(t)})})}(t,n,o)
if(s.isRemote(t))return function(e,t,n){var r,i=[],o="GET"
if(E("reduce",n,i),E("include_docs",n,i),E("attachments",n,i),E("limit",n,i),E("descending",n,i),E("group",n,i),E("group_level",n,i),E("skip",n,i),E("stale",n,i),E("conflicts",n,i),E("startkey",n,i,!0),E("start_key",n,i,!0),E("endkey",n,i,!0),E("end_key",n,i,!0),E("inclusive_end",n,i),E("key",n,i,!0),i=""===(i=i.join("&"))?"":"?"+i,void 0!==n.keys){var s="keys="+encodeURIComponent(JSON.stringify(n.keys))
s.length+i.length+1<=2e3?i+=("?"===i[0]?"&":"?")+s:(o="POST","string"==typeof t?r={keys:n.keys}:t.keys=n.keys)}if("string"==typeof t){var a=y(t)
return e.request({method:o,url:"_design/"+a[0]+"/_view/"+a[1]+i,body:r}).then(k(n))}return r=r||{},Object.keys(t).forEach(function(e){Array.isArray(t[e])?r[e]=t[e]:r[e]=t[e].toString()}),e.request({method:"POST",url:"_temp_view"+i,body:r}).then(k(n))}(t,n,o)
if("string"!=typeof n)return x(o,n),g.add(function(){return h(t,"temp_view/temp_view",n.map,n.reduce,!0,e).then(function(e){return f.fin(C(e).then(function(){return D(e,o)}),function(){return e.db.destroy()})})}),g.finish()
var a=n,u=y(a),c=u[0],l=u[1]
return t.get("_design/"+c).then(function(n){var i=n.views&&n.views[l]
if(!i)throw new f.NotFoundError("ddoc "+n._id+" has no view named "+l)
return r(n,l),x(o,i),h(t,a,i.map,i.reduce,!1,e).then(function(e){return"ok"===o.stale||"update_after"===o.stale?("update_after"===o.stale&&s.nextTick(function(){C(e)}),D(e,o)):C(e).then(function(){return D(e,o)})})})}return{query:function(e,t,n){var r=this
"function"==typeof t&&(n=t,t={}),t=t?function(e){return e.group_level=S(e.group_level),e.limit=S(e.limit),e.skip=S(e.skip),e}(t):{},"function"==typeof e&&(e={map:e})
var o=i.resolve().then(function(){return B(r,e,t)})
return f.promisedCallback(o,n),o},viewCleanup:f.callbackify(function(){var t=this
return"function"==typeof t._viewCleanup?function(e){return new i(function(t,n){e._viewCleanup(function(e,r){if(e)return n(e)
t(r)})})}(t):s.isRemote(t)?function(e){return e.request({method:"POST",url:"_view_cleanup"})}(t):function(t){return t.get("_local/"+e).then(function(e){var n=new o.Map
Object.keys(e.views).forEach(function(e){var t=y(e),r="_design/"+t[0],i=t[1],s=n.get(r)
s||(s=new o.Set,n.set(r,s)),s.add(i)})
var r={keys:f.mapToKeysArray(n),include_docs:!0}
return t.allDocs(r).then(function(r){var o={}
r.rows.forEach(function(t){var r=t.key.substring(8)
n.get(t.key).forEach(function(n){var i=r+"/"+n
e.views[i]||(i=n)
var s=Object.keys(e.views[i]),a=t.doc&&t.doc.views&&t.doc.views[n]
s.forEach(function(e){o[e]=o[e]||a})})})
var s=Object.keys(o).filter(function(e){return!o[e]}).map(function(e){return f.sequentialize(A(e),function(){return new t.constructor(e,t.__opts).destroy()})()})
return i.all(s).then(function(){return{ok:!0}})})},j({ok:!0}))}(t)})}}},{"pouchdb-binary-utils":80,"pouchdb-collate":57,"pouchdb-collections":87,"pouchdb-mapreduce-utils":119,"pouchdb-md5":121,"pouchdb-promise":58,"pouchdb-utils":132}],57:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r=-324,i=3,o=""
function s(e,t){if(e===t)return 0
e=a(e),t=a(t)
var n=d(e),r=d(t)
if(n-r!=0)return n-r
switch(typeof e){case"number":return e-t
case"boolean":return e<t?-1:1
case"string":return function(e,t){return e===t?0:e>t?1:-1}(e,t)}return Array.isArray(e)?function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=s(e[r],t[r])
if(0!==i)return i}return e.length===t.length?0:e.length>t.length?1:-1}(e,t):function(e,t){for(var n=Object.keys(e),r=Object.keys(t),i=Math.min(n.length,r.length),o=0;o<i;o++){var a=s(n[o],r[o])
if(0!==a)return a
if(0!==(a=s(e[n[o]],t[r[o]])))return a}return n.length===r.length?0:n.length>r.length?1:-1}(e,t)}function a(e){switch(typeof e){case"undefined":return null
case"number":return e===1/0||e===-1/0||isNaN(e)?null:e
case"object":var t=e
if(Array.isArray(e)){var n=e.length
e=new Array(n)
for(var r=0;r<n;r++)e[r]=a(t[r])}else{if(e instanceof Date)return e.toJSON()
if(null!==e)for(var i in e={},t)if(t.hasOwnProperty(i)){var o=t[i]
void 0!==o&&(e[i]=a(o))}}}return e}function u(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0
case"number":return function(e){if(0===e)return"1"
var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),s=e<0,a=s?"0":"2",u=(c=((s?-n:n)-r).toString(),f="0",l=i,function(e,t,n){for(var r="",i=n-e.length;r.length<i;)r+=t
return r}(c,f,l)+c)
var c,f,l
a+=o+u
var d=Math.abs(parseFloat(t[0]))
s&&(d=10-d)
var h=d.toFixed(20)
return h=h.replace(/\.?0+$/,""),a+=o+h}(e)
case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"")
case"object":var t=Array.isArray(e),n=t?e:Object.keys(e),s=-1,a=n.length,u=""
if(t)for(;++s<a;)u+=c(n[s])
else for(;++s<a;){var f=n[s]
u+=c(f)+c(e[f])}return u}return""}function c(e){return d(e=a(e))+o+u(e)+"\0"}function f(e,t){var n,o=t
if("1"===e[t])n=0,t++
else{var s="0"===e[t]
t++
var a="",u=e.substring(t,t+i),c=parseInt(u,10)+r
for(s&&(c=-c),t+=i;;){var f=e[t]
if("\0"===f)break
a+=f,t++}n=1===(a=a.split(".")).length?parseInt(a,10):parseFloat(a[0]+"."+a[1]),s&&(n-=10),0!==c&&(n=parseFloat(n+"e"+c))}return{num:n,length:t-o}}function l(e,t){var n=e.pop()
if(t.length){var r=t[t.length-1]
n===r.element&&(t.pop(),r=t[t.length-1])
var i=r.element,o=r.index
if(Array.isArray(i))i.push(n)
else if(o===e.length-2){i[e.pop()]=n}else e.push(n)}}function d(e){var t=["boolean","number","string","object"].indexOf(typeof e)
return~t?null===e?1:Array.isArray(e)?5:t<3?t+2:t+3:Array.isArray(e)?5:void 0}n.collate=s,n.normalizeKey=a,n.toIndexableString=c,n.parseIndexableString=function(e){for(var t=[],n=[],r=0;;){var i=e[r++]
if("\0"!==i)switch(i){case"1":t.push(null)
break
case"2":t.push("1"===e[r]),r++
break
case"3":var o=f(e,r)
t.push(o.num),r+=o.length
break
case"4":for(var s="";;){var a=e[r]
if("\0"===a)break
s+=a,r++}s=s.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(s)
break
case"5":var u={element:[],index:t.length}
t.push(u.element),n.push(u)
break
case"6":var c={element:{},index:t.length}
t.push(c.element),n.push(c)
break
default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+i)}else{if(1===t.length)return t.pop()
l(t,n)}}}},{}],58:[function(e,t,n){"use strict"
var r,i=(r=e("lie"))&&"object"==typeof r&&"default"in r?r.default:r,o="function"==typeof Promise?Promise:i
t.exports=o},{lie:39}],59:[function(e,t,n){"use strict"
function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=r(e("pouchdb-promise")),o=e("pouchdb-utils"),s=r(e("pouchdb-ajax")),a=r(e("argsarray")),u=e("pouchdb-binary-utils"),c=e("pouchdb-errors")
var f=25,l=50,d={}
function h(e){var t=e.doc&&e.doc._attachments
t&&Object.keys(t).forEach(function(e){var n=t[e]
n.data=u.base64StringToBlobOrBuffer(n.data,n.content_type)})}function p(e){return/^_design/.test(e)?"_design/"+encodeURIComponent(e.slice(8)):/^_local/.test(e)?"_local/"+encodeURIComponent(e.slice(7)):encodeURIComponent(e)}function g(e){return e._attachments&&Object.keys(e._attachments)?i.all(Object.keys(e._attachments).map(function(t){var n=e._attachments[t]
if(n.data&&"string"!=typeof n.data)return new i(function(e){u.blobOrBufferToBase64(n.data,e)}).then(function(e){n.data=e})})):i.resolve()}function v(e,t){if(function(e){if(!e.prefix)return!1
var t=o.parseUri(e.prefix).protocol
return"http"===t||"https"===t}(t)){var n=t.name.substr(t.prefix.length)
e=t.prefix+encodeURIComponent(n)}var r=o.parseUri(e);(r.user||r.password)&&(r.auth={username:r.user,password:r.password})
var i=r.path.replace(/(^\/|\/$)/g,"").split("/")
return r.db=i.pop(),-1===r.db.indexOf("%")&&(r.db=encodeURIComponent(r.db)),r.path=i.join("/"),r}function y(e,t){return m(e,e.db+"/"+t)}function m(e,t){var n=e.path?"/":""
return e.protocol+"://"+e.host+(e.port?":"+e.port:"")+"/"+e.path+n+t}function b(e){return"?"+Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}function _(e,t){var n,r=this,_=v(e.name,e),w=y(_,""),k=(e=o.clone(e)).ajax||{}
if(e.auth||_.auth){var E=e.auth||_.auth,S=E.username+":"+E.password,x=u.btoa(unescape(encodeURIComponent(S)))
k.headers=k.headers||{},k.headers.Authorization="Basic "+x}function j(e,t,n){var i=e.ajax||{},s=o.assign(o.clone(k),i,t),a=o.clone(k.headers||{})
return s.headers=o.assign(a,i.headers,t.headers||{}),r.constructor.listeners("debug").length&&r.constructor.emit("debug",["http",s.method,s.url]),r._ajax(s,n)}function O(e,t){return new i(function(n,r){j(e,t,function(e,t){if(e)return r(e)
n(t)})})}function A(e,t){return o.adapterFun(e,a(function(e){C().then(function(){return t.apply(this,e)}).catch(function(t){e.pop()(t)})}))}function C(){return e.skipSetup||e.skip_setup?i.resolve():n||((n=O({},{method:"GET",url:w}).catch(function(e){return e&&e.status&&404===e.status?(o.explainError(404,"PouchDB is just detecting if the remote exists."),O({},{method:"PUT",url:w})):i.reject(e)}).catch(function(e){return!(!e||!e.status||412!==e.status)||i.reject(e)})).catch(function(){n=null}),n)}function D(e){return e.split("/").map(encodeURIComponent).join("/")}r._ajax=s,o.nextTick(function(){t(null,r)}),r._remote=!0,r.type=function(){return"http"},r.id=A("id",function(e){j({},{method:"GET",url:m(_,"")},function(t,n){var r=n&&n.uuid?n.uuid+_.db:y(_,"")
e(null,r)})}),r.request=A("request",function(e,t){e.url=y(_,e.url),j({},e,t)}),r.compact=A("compact",function(e,t){"function"==typeof e&&(t=e,e={}),j(e=o.clone(e),{url:y(_,"_compact"),method:"POST"},function(){(function n(){r.info(function(r,i){i&&!i.compact_running?t(null,{ok:!0}):setTimeout(n,e.interval||200)})})()})}),r.bulkGet=o.adapterFun("bulkGet",function(e,t){var n=this
function r(t){var n={}
e.revs&&(n.revs=!0),e.attachments&&(n.attachments=!0),e.latest&&(n.latest=!0),j(e,{url:y(_,"_bulk_get"+b(n)),method:"POST",body:{docs:e.docs}},t)}function i(){var r=l,i=Math.ceil(e.docs.length/r),s=0,a=new Array(i)
function u(e){return function(n,r){a[e]=r.results,++s===i&&t(null,{results:o.flatten(a)})}}for(var c=0;c<i;c++){var f=o.pick(e,["revs","attachments","latest"])
f.ajax=k,f.docs=e.docs.slice(c*r,Math.min(e.docs.length,(c+1)*r)),o.bulkGetShim(n,f,u(c))}}var s=m(_,""),a=d[s]
"boolean"!=typeof a?r(function(e,n){e?(d[s]=!1,o.explainError(e.status,"PouchDB is just detecting if the remote supports the _bulk_get API."),i()):(d[s]=!0,t(null,n))}):a?r(t):i()}),r._info=function(e){C().then(function(){j({},{method:"GET",url:y(_,"")},function(t,n){if(t)return e(t)
n.host=y(_,""),e(null,n)})}).catch(e)},r.get=A("get",function(e,t,n){"function"==typeof t&&(n=t,t={})
var r={};(t=o.clone(t)).revs&&(r.revs=!0),t.revs_info&&(r.revs_info=!0),t.latest&&(r.latest=!0),t.open_revs&&("all"!==t.open_revs&&(t.open_revs=JSON.stringify(t.open_revs)),r.open_revs=t.open_revs),t.rev&&(r.rev=t.rev),t.conflicts&&(r.conflicts=t.conflicts),e=p(e)
var s={method:"GET",url:y(_,e+b(r))}
function a(e){var n=e._attachments,r=n&&Object.keys(n)
if(n&&r.length)return function(e,t){return new i(function(n,r){var i,o=0,s=0,a=0,u=e.length
function c(){++a===u?i?r(i):n():d()}function f(){o--,c()}function l(e){o--,i=i||e,c()}function d(){for(;o<t&&s<u;)o++,e[s++]().then(f,l)}d()})}(r.map(function(r){return function(){return function(r){var o=n[r],s=p(e._id)+"/"+D(r)+"?rev="+e._rev
return O(t,{method:"GET",url:y(_,s),binary:!0}).then(function(e){return t.binary?e:new i(function(t){u.blobOrBufferToBase64(e,t)})}).then(function(e){delete o.stub,delete o.length,o.data=e})}(r)}}),5)}O(t,s).then(function(e){return i.resolve().then(function(){if(t.attachments)return n=e,Array.isArray(n)?i.all(n.map(function(e){if(e.ok)return a(e.ok)})):a(n)
var n}).then(function(){n(null,e)})}).catch(n)}),r.remove=A("remove",function(e,t,n,r){var i
"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(i=e,"function"==typeof t?(r=t,n={}):(r=n,n=t))
var o=i._rev||n.rev
j(n,{method:"DELETE",url:y(_,p(i._id))+"?rev="+o},r)}),r.getAttachment=A("getAttachment",function(e,t,n,r){"function"==typeof n&&(r=n,n={})
var i=n.rev?"?rev="+n.rev:""
j(n,{method:"GET",url:y(_,p(e))+"/"+D(t)+i,binary:!0},r)}),r.removeAttachment=A("removeAttachment",function(e,t,n,r){j({},{method:"DELETE",url:y(_,p(e)+"/"+D(t))+"?rev="+n},r)}),r.putAttachment=A("putAttachment",function(e,t,n,r,i,o){"function"==typeof i&&(o=i,i=r,r=n,n=null)
var s=p(e)+"/"+D(t),a=y(_,s)
if(n&&(a+="?rev="+n),"string"==typeof r){var f
try{f=u.atob(r)}catch(l){return o(c.createError(c.BAD_ARG,"Attachment is not a valid base64 string"))}r=f?u.binaryStringToBlobOrBuffer(f,i):""}j({},{headers:{"Content-Type":i},method:"PUT",url:a,processData:!1,body:r,timeout:k.timeout||6e4},o)}),r._bulkDocs=function(e,t,n){e.new_edits=t.new_edits,C().then(function(){return i.all(e.docs.map(g))}).then(function(){j(t,{method:"POST",url:y(_,"_bulk_docs"),timeout:t.timeout,body:e},function(e,t){if(e)return n(e)
t.forEach(function(e){e.ok=!0}),n(null,t)})}).catch(n)},r._put=function(e,t,n){C().then(function(){return g(e)}).then(function(){j(t,{method:"PUT",url:y(_,p(e._id)),body:e},function(e,t){if(e)return n(e)
n(null,t)})}).catch(n)},r.allDocs=A("allDocs",function(e,t){"function"==typeof e&&(t=e,e={})
var n,r={},i="GET";(e=o.clone(e)).conflicts&&(r.conflicts=!0),e.descending&&(r.descending=!0),e.include_docs&&(r.include_docs=!0),e.attachments&&(r.attachments=!0),e.key&&(r.key=JSON.stringify(e.key)),e.start_key&&(e.startkey=e.start_key),e.startkey&&(r.startkey=JSON.stringify(e.startkey)),e.end_key&&(e.endkey=e.end_key),e.endkey&&(r.endkey=JSON.stringify(e.endkey)),void 0!==e.inclusive_end&&(r.inclusive_end=!!e.inclusive_end),void 0!==e.limit&&(r.limit=e.limit),void 0!==e.skip&&(r.skip=e.skip)
var s=b(r)
void 0!==e.keys&&(i="POST",n={keys:e.keys}),O(e,{method:i,url:y(_,"_all_docs"+s),body:n}).then(function(n){e.include_docs&&e.attachments&&e.binary&&n.rows.forEach(h),t(null,n)}).catch(t)}),r._changes=function(e){var t="batch_size"in e?e.batch_size:f;(e=o.clone(e)).timeout="timeout"in e?e.timeout:"timeout"in k?k.timeout:3e4
var n,r=e.timeout?{timeout:e.timeout-5e3}:{},i=void 0!==e.limit&&e.limit
n="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs
var s=i
if(e.style&&(r.style=e.style),(e.include_docs||e.filter&&"function"==typeof e.filter)&&(r.include_docs=!0),e.attachments&&(r.attachments=!0),e.continuous&&(r.feed="longpoll"),e.conflicts&&(r.conflicts=!0),e.descending&&(r.descending=!0),"heartbeat"in e?e.heartbeat&&(r.heartbeat=e.heartbeat):e.continuous&&(r.heartbeat=1e4),e.filter&&"string"==typeof e.filter&&(r.filter=e.filter),e.view&&"string"==typeof e.view&&(r.filter="_view",r.view=e.view),e.query_params&&"object"==typeof e.query_params)for(var a in e.query_params)e.query_params.hasOwnProperty(a)&&(r[a]=e.query_params[a])
var u,c,l,d="GET"
e.doc_ids?(r.filter="_doc_ids",d="POST",u={doc_ids:e.doc_ids}):e.selector&&(r.filter="_selector",d="POST",u={selector:e.selector})
var p=function(n,o){if(!e.aborted){r.since=n,"object"==typeof r.since&&(r.since=JSON.stringify(r.since)),e.descending?i&&(r.limit=s):r.limit=!i||s>t?t:s
var a={method:d,url:y(_,"_changes"+b(r)),timeout:e.timeout,body:u}
l=n,e.aborted||C().then(function(){c=j(e,a,o)}).catch(o)}},g={results:[]},v=function(r,a){if(!e.aborted){var u=0
if(a&&a.results){u=a.results.length,g.last_seq=a.last_seq
e.query_params,a.results=a.results.filter(function(t){s--
var r=o.filterChange(e)(t)
return r&&(e.include_docs&&e.attachments&&e.binary&&h(t),n&&g.results.push(t),e.onChange(t)),r})}else if(r)return e.aborted=!0,void e.complete(r)
a&&a.last_seq&&(l=a.last_seq)
var c=i&&s<=0||a&&u<t||e.descending;(!e.continuous||i&&s<=0)&&c?e.complete(null,g):o.nextTick(function(){p(l,v)})}}
return p(e.since||0,v),{cancel:function(){e.aborted=!0,c&&c.abort()}}},r.revsDiff=A("revsDiff",function(e,t,n){"function"==typeof t&&(n=t,t={}),j(t,{method:"POST",url:y(_,"_revs_diff"),body:e},n)}),r._close=function(e){e()},r._destroy=function(e,t){j(e,{url:y(_,""),method:"DELETE"},function(e,n){if(e&&e.status&&404!==e.status)return t(e)
t(null,n)})}}_.valid=function(){return!0}
t.exports=function(e){e.adapter("http",_,!1),e.adapter("https",_,!1)}},{argsarray:1,"pouchdb-ajax":78,"pouchdb-binary-utils":80,"pouchdb-errors":94,"pouchdb-promise":60,"pouchdb-utils":132}],60:[function(e,t,n){arguments[4][58][0].apply(n,arguments)},{dup:58,lie:39}],61:[function(e,t,n){"use strict"
var r,i=e("pouchdb-collections"),o=e("pouchdb-utils"),s=e("pouchdb-merge"),a=e("pouchdb-errors"),u=e("pouchdb-adapter-utils"),c=(r=e("pouchdb-promise"))&&"object"==typeof r&&"default"in r?r.default:r,f=e("pouchdb-json"),l=e("pouchdb-binary-utils"),d=5,h="document-store",p="by-sequence",g="attach-store",v="attach-seq-store",y="meta-store",m="local-store",b="detect-blob-support"
function _(e){return function(t){var n="unknown_error"
t.target&&t.target.error&&(n=t.target.error.name||t.target.error.message),e(a.createError(a.IDB_ERROR,n,t.type))}}function w(e,t,n){return{data:f.safeJsonStringify(e),winningRev:t,deletedOrLocal:n?"1":"0",seq:e.seq,id:e.id}}function k(e){if(!e)return null
var t=f.safeJsonParse(e.data)
return t.winningRev=e.winningRev,t.deleted="1"===e.deletedOrLocal,t.seq=e.seq,t}function E(e){if(!e)return e
var t=e._doc_id_rev.lastIndexOf(":")
return e._id=e._doc_id_rev.substring(0,t-1),e._rev=e._doc_id_rev.substring(t+1),delete e._doc_id_rev,e}function S(e,t,n,r){n?r(e?"string"!=typeof e?e:l.base64StringToBlobOrBuffer(e,t):l.blob([""],{type:t})):e?"string"!=typeof e?l.readAsBinaryString(e,function(e){r(l.btoa(e))}):r(e):r("")}function x(e,t,n,r){var i=Object.keys(e._attachments||{})
if(!i.length)return r&&r()
var o=0
function s(){++o===i.length&&r&&r()}i.forEach(function(r){t.attachments&&t.include_docs?function(e,t){var r=e._attachments[t],i=r.digest
n.objectStore(g).get(i).onsuccess=function(e){r.body=e.target.result.body,s()}}(e,r):(e._attachments[r].stub=!0,s())})}function j(e,t){return c.all(e.map(function(e){if(e.doc&&e.doc._attachments){var n=Object.keys(e.doc._attachments)
return c.all(n.map(function(n){var r=e.doc._attachments[n]
if("body"in r){var i=r.body,s=r.content_type
return new c(function(a){S(i,s,t,function(t){e.doc._attachments[n]=o.assign(o.pick(r,["digest","content_type"]),{data:t}),a()})})}}))}}))}function O(e,t,n){var r=[],i=n.objectStore(p),o=n.objectStore(g),s=n.objectStore(v),a=e.length
function u(){--a||function(){if(!r.length)return
r.forEach(function(e){var t=s.index("digestSeq").count(IDBKeyRange.bound(e+"::",e+"::￿",!1,!1))
t.onsuccess=function(t){var n=t.target.result
n||o.delete(e)}})}()}e.forEach(function(e){var n=i.index("_doc_id_rev"),o=t+"::"+e
n.getKey(o).onsuccess=function(e){var t=e.target.result
if("number"!=typeof t)return u()
i.delete(t),s.index("seq").openCursor(IDBKeyRange.only(t)).onsuccess=function(e){var t=e.target.result
if(t){var n=t.value.digestSeq.split("::")[0]
r.push(n),s.delete(t.primaryKey),t.continue()}else u()}}})}function A(e,t,n){try{return{txn:e.transaction(t,n)}}catch(r){return{error:r}}}var C=new o.changesHandler
function D(e,t,n,r,o,c){for(var f,l,d,b,E,S,x,j,D=t.docs,B=0,L=D.length;B<L;B++){var I=D[B]
I._id&&u.isLocalId(I._id)||(I=D[B]=u.parseDoc(I,n.new_edits)).error&&!x&&(x=I)}if(x)return c(x)
var R=!1,T=0,M=new Array(D.length),q=new i.Map,N=!1,P=r._meta.blobSupport?"blob":"base64"
function $(){R=!0,F()}function F(){j&&R&&(j.docCount+=T,S.put(j))}function U(){N||(C.notify(r._meta.name),c(null,M))}function z(e,t,n,r,i,o,s,a){e.metadata.winningRev=t,e.metadata.deleted=n
var u=e.data
if(u._id=e.metadata.id,u._rev=e.metadata.rev,r&&(u._deleted=!0),u._attachments&&Object.keys(u._attachments).length)return function(e,t,n,r,i,o){var s=e.data,a=0,u=Object.keys(s._attachments)
function c(){a===u.length&&W(e,t,n,r,i,o)}function f(){a++,c()}u.forEach(function(n){var r=e.data._attachments[n]
if(r.stub)a++,c()
else{var i=r.data
delete r.data,r.revpos=parseInt(t,10)
var o=r.digest;(function(e,t,n){b.count(e).onsuccess=function(r){var i=r.target.result
if(i)return n()
var o={digest:e,body:t},s=b.put(o)
s.onsuccess=n}})(o,i,f)}})}(e,t,n,i,s,a)
T+=o,F(),W(e,t,n,i,s,a)}function W(e,t,n,i,o,a){var u=e.data,c=e.metadata
function h(o){var a=e.stemmedRevs||[]
i&&r.auto_compaction&&(a=a.concat(s.compactTree(e.metadata))),a&&a.length&&O(a,e.metadata.id,f),c.seq=o.target.result
var u=w(c,t,n)
l.put(u).onsuccess=p}function p(){M[o]={ok:!0,id:c.id,rev:c.rev},q.set(e.metadata.id,e.metadata),function(e,t,n){var r=0,i=Object.keys(e.data._attachments||{})
if(!i.length)return n()
function o(){++r===i.length&&n()}function s(n){var r=e.data._attachments[n].digest,i=E.put({seq:t,digestSeq:r+"::"+t})
i.onsuccess=o,i.onerror=function(e){e.preventDefault(),e.stopPropagation(),o()}}for(var a=0;a<i.length;a++)s(i[a])}(e,c.seq,a)}u._doc_id_rev=c.id+"::"+c.rev,delete u._id,delete u._rev
var g=d.put(u)
g.onsuccess=h,g.onerror=function(e){e.preventDefault(),e.stopPropagation(),d.index("_doc_id_rev").getKey(u._doc_id_rev).onsuccess=function(e){d.put(u,e.target.result).onsuccess=h}}}u.preprocessAttachments(D,P,function(t){if(t)return c(t);(function(){var t=A(o,[h,p,g,m,v,y],"readwrite")
if(t.error)return c(t.error);(f=t.txn).onabort=_(c),f.ontimeout=_(c),f.oncomplete=U,l=f.objectStore(h),d=f.objectStore(p),b=f.objectStore(g),E=f.objectStore(v),(S=f.objectStore(y)).get(y).onsuccess=function(e){j=e.target.result,F()},function(e){var t=[]
if(D.forEach(function(e){e.data&&e.data._attachments&&Object.keys(e.data._attachments).forEach(function(n){var r=e.data._attachments[n]
r.stub&&t.push(r.digest)})}),!t.length)return e()
var n,r=0
t.forEach(function(i){(function(e,t){b.get(e).onsuccess=function(n){if(n.target.result)t()
else{var r=a.createError(a.MISSING_STUB,"unknown stub attachment with digest "+e)
r.status=412,t(r)}}})(i,function(i){i&&!n&&(n=i),++r===t.length&&e(n)})})}(function(t){if(t)return N=!0,c(t);(function(){if(!D.length)return
var t=0
function i(){++t===D.length&&u.processDocs(e.revs_limit,D,r,q,f,M,z,n,$)}function o(e){var t=k(e.target.result)
t&&q.set(t.id,t),i()}for(var s=0,a=D.length;s<a;s++){var c=D[s]
if(c._id&&u.isLocalId(c._id))i()
else{var d=l.get(c.metadata.id)
d.onsuccess=o}}})()})})()})}function B(e,t,n,r,i){var o,s,a
function u(e){s=e.target.result,o&&i(o,s,a)}function c(e){o=e.target.result,s&&i(o,s,a)}function f(e){var t=e.target.result
if(!t)return i()
i([t.key],[t.value],t)}"function"==typeof e.getAll&&"function"==typeof e.getAllKeys&&r>1&&!n?(a={continue:function(){if(!o.length)return i()
var n,a=o[o.length-1]
if(t&&t.upper)try{n=IDBKeyRange.bound(a,t.upper,!0,t.upperOpen)}catch(f){if("DataError"===f.name&&0===f.code)return i()}else n=IDBKeyRange.lowerBound(a,!0)
t=n,o=null,s=null,e.getAll(t,r).onsuccess=u,e.getAllKeys(t,r).onsuccess=c}},e.getAll(t,r).onsuccess=u,e.getAllKeys(t,r).onsuccess=c):n?e.openCursor(t,"prev").onsuccess=f:e.openCursor(t).onsuccess=f}function L(e,t,n){var r="startkey"in e&&e.startkey,i="endkey"in e&&e.endkey,o="key"in e&&e.key,u=e.skip||0,c="number"==typeof e.limit?e.limit:-1,f=function(e,t,n,r,i){try{if(e&&t)return i?IDBKeyRange.bound(t,e,!n,!1):IDBKeyRange.bound(e,t,!1,!n)
if(e)return i?IDBKeyRange.upperBound(e):IDBKeyRange.lowerBound(e)
if(t)return i?IDBKeyRange.lowerBound(t,!n):IDBKeyRange.upperBound(t,!n)
if(r)return IDBKeyRange.only(r)}catch(o){return{error:o}}return null}(r,i,!1!==e.inclusive_end,o,e.descending),l=f&&f.error
if(l&&("DataError"!==l.name||0!==l.code))return n(a.createError(a.IDB_ERROR,l.name,l.message))
var d=[h,p,y]
e.attachments&&d.push(g)
var v=A(t,d,"readonly")
if(v.error)return n(v.error)
var m=v.txn
m.oncomplete=function(){e.attachments?j(D,e.binary).then(T):T()},m.onabort=_(n)
var b,w=m.objectStore(h),S=m.objectStore(p),O=m.objectStore(y),C=S.index("_doc_id_rev"),D=[]
function L(t,n,r){var i=t.id+"::"+r
C.get(i).onsuccess=function(r){if(n.doc=E(r.target.result),e.conflicts){var i=s.collectConflicts(t)
i.length&&(n.doc._conflicts=i)}x(n.doc,e,m)}}function I(t,n){var r={id:n.id,key:n.id,value:{rev:t}},i=n.deleted
"ok"===e.deleted?(D.push(r),i?(r.value.deleted=!0,r.doc=null):e.include_docs&&L(n,r,t)):!i&&u--<=0&&(D.push(r),e.include_docs&&L(n,r,t))}function R(e){for(var t=0,n=e.length;t<n&&D.length!==c;t++){var r=k(e[t])
I(r.winningRev,r)}}function T(){n(null,{total_rows:b,offset:e.skip,rows:D})}return O.get(y).onsuccess=function(e){b=e.target.result.docCount},l||0===c?void 0:-1===c?function(e,t,n){if("function"!=typeof e.getAll){var r=[]
e.openCursor(t).onsuccess=function(e){var t=e.target.result
t?(r.push(t.value),t.continue()):n({target:{result:r}})}}else e.getAll(t).onsuccess=n}(w,f,function(t){var n=t.target.result
e.descending&&(n=n.reverse()),R(n)}):void B(w,f,e.descending,c+u,function(e,t,n){n&&(R(t),D.length<c&&n.continue())})}var I=!1,R=[]
function T(){!I&&R.length&&(I=!0,R.shift()())}function M(e,t,n,r){if((e=o.clone(e)).continuous){var s=n+":"+o.uuid()
return C.addListener(n,s,t,e),C.notify(n),{cancel:function(){C.removeListener(n,s)}}}var a=e.doc_ids&&new i.Set(e.doc_ids)
e.since=e.since||0
var u,c=e.since,f="limit"in e?e.limit:-1
0===f&&(f=1),u="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs
var l,d,v,y,m=[],b=0,w=o.filterChange(e),S=new i.Map
function O(e,t,n,r){if(n.seq!==t)return r()
if(n.winningRev===e._rev)return r(n,e)
var i=e._id+"::"+n.winningRev
y.get(i).onsuccess=function(e){r(n,E(e.target.result))}}function D(){e.complete(null,{results:m,last_seq:c})}var L=[h,p]
e.attachments&&L.push(g)
var I=A(r,L,"readonly")
if(I.error)return e.complete(I.error);(l=I.txn).onabort=_(e.complete),l.oncomplete=function(){!e.continuous&&e.attachments?j(m).then(D):D()},d=l.objectStore(p),v=l.objectStore(h),y=d.index("_doc_id_rev"),B(d,e.since&&!e.descending?IDBKeyRange.lowerBound(e.since,!0):null,e.descending,f,function(t,n,r){if(r&&t.length){var i=new Array(t.length),o=new Array(t.length),s=0
n.forEach(function(e,n){(function(e,t,n){if(a&&!a.has(e._id))return n()
var r=S.get(e._id)
if(r)return O(e,t,r,n)
v.get(e._id).onsuccess=function(i){r=k(i.target.result),S.set(e._id,r),O(e,t,r,n)}})(E(e),t[n],function(e,a){o[n]=e,i[n]=a,++s===t.length&&function(){for(var e=0,t=i.length;e<t&&b!==f;e++){var n=i[e]
n&&d(o[e],n)}b!==f&&r.continue()}()})})}function d(t,n){var r=e.processChange(n,t,e)
c=r.seq=t.seq
var i=w(r)
if("object"==typeof i)return e.complete(i)
i&&(b++,u&&m.push(r),e.attachments&&e.include_docs?x(n,e,l,function(){j([r],e.binary).then(function(){e.onChange(r)})}):e.onChange(r))}})}var q,N=new i.Map,P=new i.Map
function $(e,t){var n=this;(function(e,t,n){R.push(function(){e(function(e,r){(function(e,t,n,r){try{e(t,n)}catch(t){r.emit("error",t)}})(t,e,r,n),I=!1,o.nextTick(function(){T()})})}),T()})(function(t){(function(e,t,n){var r=t.name,i=null
function u(e,t){var n=e.objectStore(h)
n.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),n.openCursor().onsuccess=function(e){var r=e.target.result
if(r){var i=r.value,o=s.isDeleted(i)
i.deletedOrLocal=o?"1":"0",n.put(i),r.continue()}else t()}}function f(e,t){var n=e.objectStore(m),r=e.objectStore(h),i=e.objectStore(p),o=r.openCursor()
o.onsuccess=function(e){var o=e.target.result
if(o){var a=o.value,u=a.id,c=s.isLocalId(u),f=s.winningRev(a)
if(c){var l=u+"::"+f,d=u+"::",h=u+"::~",p=i.index("_doc_id_rev"),g=IDBKeyRange.bound(d,h,!1,!1),v=p.openCursor(g)
v.onsuccess=function(e){if(v=e.target.result){var t=v.value
t._doc_id_rev===l&&n.put(t),i.delete(v.primaryKey),v.continue()}else r.delete(o.primaryKey),o.continue()}}else o.continue()}else t&&t()}}function x(e,t){var n=e.objectStore(p),r=e.objectStore(g),i=e.objectStore(v),o=r.count()
o.onsuccess=function(e){var r=e.target.result
if(!r)return t()
n.openCursor().onsuccess=function(e){var n=e.target.result
if(!n)return t()
for(var r=n.value,o=n.primaryKey,s=Object.keys(r._attachments||{}),a={},u=0;u<s.length;u++){var c=r._attachments[s[u]]
a[c.digest]=!0}var f=Object.keys(a)
for(u=0;u<f.length;u++){var l=f[u]
i.put({seq:o,digestSeq:l+"::"+o})}n.continue()}}}function j(e){var t=e.objectStore(p),n=e.objectStore(h),r=n.openCursor()
r.onsuccess=function(e){var r=e.target.result
if(r){var i,o,a,u,c=function(e){if(!e.data)return e.deleted="1"===e.deletedOrLocal,e
return k(e)}(r.value)
if(c.winningRev=c.winningRev||s.winningRev(c),c.seq)return f()
i=c.id+"::",o=c.id+"::￿",a=t.index("_doc_id_rev").openCursor(IDBKeyRange.bound(i,o)),u=0,a.onsuccess=function(e){var t=e.target.result
if(!t)return c.seq=u,f()
var n=t.primaryKey
n>u&&(u=n),t.continue()}}function f(){var e=w(c,c.winningRev,c.deleted),t=n.put(e)
t.onsuccess=function(){r.continue()}}}}e._meta=null,e._remote=!1,e.type=function(){return"idb"},e._id=o.toPromise(function(t){t(null,e._meta.instanceId)}),e._bulkDocs=function(n,r,o){D(t,n,r,e,i,o)},e._get=function(e,t,n){var r,o,u,c=t.ctx
if(!c){var f=A(i,[h,p,g],"readonly")
if(f.error)return n(f.error)
c=f.txn}function l(){n(u,{doc:r,metadata:o,ctx:c})}c.objectStore(h).get(e).onsuccess=function(e){if(!(o=k(e.target.result)))return u=a.createError(a.MISSING_DOC,"missing"),l()
var n
if(t.rev)n=t.latest?s.latest(t.rev,o):t.rev
else{n=o.winningRev
var i=s.isDeleted(o)
if(i)return u=a.createError(a.MISSING_DOC,"deleted"),l()}var f=c.objectStore(p),d=o.id+"::"+n
f.index("_doc_id_rev").get(d).onsuccess=function(e){if((r=e.target.result)&&(r=E(r)),!r)return u=a.createError(a.MISSING_DOC,"missing"),l()
l()}}},e._getAttachment=function(e,t,n,r,o){var s
if(r.ctx)s=r.ctx
else{var a=A(i,[h,p,g],"readonly")
if(a.error)return o(a.error)
s=a.txn}var u=n.digest,c=n.content_type
s.objectStore(g).get(u).onsuccess=function(e){var t=e.target.result.body
S(t,c,r.binary,function(e){o(null,e)})}},e._info=function(t){var n,r,o=A(i,[y,p],"readonly")
if(o.error)return t(o.error)
var s=o.txn
s.objectStore(y).get(y).onsuccess=function(e){r=e.target.result.docCount},s.objectStore(p).openCursor(null,"prev").onsuccess=function(e){var t=e.target.result
n=t?t.key:0},s.oncomplete=function(){t(null,{doc_count:r,update_seq:n,idb_attachment_format:e._meta.blobSupport?"binary":"base64"})}},e._allDocs=function(e,t){L(e,i,t)},e._changes=function(t){M(t,e,r,i)},e._close=function(e){i.close(),N.delete(r),e()},e._getRevisionTree=function(e,t){var n=A(i,[h],"readonly")
if(n.error)return t(n.error)
var r=n.txn,o=r.objectStore(h).get(e)
o.onsuccess=function(e){var n=k(e.target.result)
n?t(null,n.rev_tree):t(a.createError(a.MISSING_DOC))}},e._doCompaction=function(e,t,n){var r=[h,p,g,v],o=A(i,r,"readwrite")
if(o.error)return n(o.error)
var a=o.txn,u=a.objectStore(h)
u.get(e).onsuccess=function(n){var r=k(n.target.result)
s.traverseRevTree(r.rev_tree,function(e,n,r,i,o){var s=n+"-"+r;-1!==t.indexOf(s)&&(o.status="missing")}),O(t,e,a)
var i=r.winningRev,o=r.deleted
a.objectStore(h).put(w(r,i,o))},a.onabort=_(n),a.oncomplete=function(){n()}},e._getLocal=function(e,t){var n=A(i,[m],"readonly")
if(n.error)return t(n.error)
var r=n.txn,o=r.objectStore(m).get(e)
o.onerror=_(t),o.onsuccess=function(e){var n=e.target.result
n?(delete n._doc_id_rev,t(null,n)):t(a.createError(a.MISSING_DOC))}},e._putLocal=function(e,t,n){"function"==typeof t&&(n=t,t={}),delete e._revisions
var r=e._rev,o=e._id
e._rev=r?"0-"+(parseInt(r.split("-")[1],10)+1):"0-1"
var s,u=t.ctx
if(!u){var c=A(i,[m],"readwrite")
if(c.error)return n(c.error);(u=c.txn).onerror=_(n),u.oncomplete=function(){s&&n(null,s)}}var f,l=u.objectStore(m)
r?(f=l.get(o)).onsuccess=function(i){var o=i.target.result
if(o&&o._rev===r){var u=l.put(e)
u.onsuccess=function(){s={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,s)}}else n(a.createError(a.REV_CONFLICT))}:((f=l.add(e)).onerror=function(e){n(a.createError(a.REV_CONFLICT)),e.preventDefault(),e.stopPropagation()},f.onsuccess=function(){s={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,s)})},e._removeLocal=function(e,t,n){"function"==typeof t&&(n=t,t={})
var r,o=t.ctx
if(!o){var s=A(i,[m],"readwrite")
if(s.error)return n(s.error);(o=s.txn).oncomplete=function(){r&&n(null,r)}}var u=e._id,c=o.objectStore(m),f=c.get(u)
f.onerror=_(n),f.onsuccess=function(i){var o=i.target.result
o&&o._rev===e._rev?(c.delete(u),r={ok:!0,id:u,rev:"0-0"},t.ctx&&n(null,r)):n(a.createError(a.MISSING_DOC))}},e._destroy=function(e,t){C.removeAllListeners(r)
var n=P.get(r)
n&&n.result&&(n.result.close(),N.delete(r))
var i=indexedDB.deleteDatabase(r)
i.onsuccess=function(){P.delete(r),o.hasLocalStorage()&&r in localStorage&&delete localStorage[r],t(null,{ok:!0})},i.onerror=_(t)}
var B,I=N.get(r)
if(I)return i=I.idb,e._meta=I.global,o.nextTick(function(){n(null,e)})
B=t.storage?function(e,t){try{return indexedDB.open(e,{version:d,storage:t})}catch(n){return indexedDB.open(e,d)}}(r,t.storage):indexedDB.open(r,d)
P.set(r,B),B.onupgradeneeded=function(e){var t=e.target.result
if(e.oldVersion<1)return function(e){var t=e.createObjectStore(h,{keyPath:"id"})
e.createObjectStore(p,{autoIncrement:!0}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.createObjectStore(g,{keyPath:"digest"}),e.createObjectStore(y,{keyPath:"id",autoIncrement:!1}),e.createObjectStore(b),t.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),e.createObjectStore(m,{keyPath:"_id"})
var n=e.createObjectStore(v,{autoIncrement:!0})
n.createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0})}(t)
var n=e.currentTarget.transaction
e.oldVersion<3&&function(e){e.createObjectStore(m,{keyPath:"_id"}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0})}(t),e.oldVersion<4&&function(e){var t=e.createObjectStore(v,{autoIncrement:!0})
t.createIndex("seq","seq"),t.createIndex("digestSeq","digestSeq",{unique:!0})}(t)
var r=[u,f,x,j],i=e.oldVersion;(function e(){var t=r[i-1]
i++
t&&t(n,e)})()},B.onsuccess=function(t){(i=t.target.result).onversionchange=function(){i.close(),N.delete(r)},i.onabort=function(e){o.guardedConsole("error","Database has a global failure",e.target.error),i.close(),N.delete(r)}
var s,a,u,f,d=i.transaction([y,b,h],"readwrite"),p=!1
function g(){void 0!==u&&p&&(e._meta={name:r,instanceId:f,blobSupport:u},N.set(r,{idb:i,global:e._meta}),n(null,e))}function v(){if(void 0!==a&&void 0!==s){var e=r+"_id"
e in s?f=s[e]:s[e]=f=o.uuid(),s.docCount=a,d.objectStore(y).put(s)}}d.objectStore(y).get(y).onsuccess=function(e){s=e.target.result||{id:y},v()},function(e,t){e.objectStore(h).index("deletedOrLocal").count(IDBKeyRange.only("0")).onsuccess=function(e){t(e.target.result)}}(d,function(e){a=e,v()}),q||(q=function(e){return new c(function(t){var n=l.blob([""])
e.objectStore(b).put(n,"key").onsuccess=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//)
t(n||!e||parseInt(e[1],10)>=43)},e.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)}}).catch(function(){return!1})}(d)),q.then(function(e){u=e,g()}),d.oncomplete=function(){p=!0,g()}},B.onerror=function(){var e="Failed to open indexedDB, are you in private browsing mode?"
o.guardedConsole("error",e),n(a.createError(a.IDB_ERROR,e))}})(n,e,t)},t,n.constructor)}$.valid=function(){return!("undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform))&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}
t.exports=function(e){e.adapter("idb",$,!0)}},{"pouchdb-adapter-utils":77,"pouchdb-binary-utils":80,"pouchdb-collections":87,"pouchdb-errors":94,"pouchdb-json":118,"pouchdb-merge":122,"pouchdb-promise":62,"pouchdb-utils":132}],62:[function(e,t,n){arguments[4][58][0].apply(n,arguments)},{dup:58,lie:39}],63:[function(e,t,n){"use strict"
function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=e("pouchdb-collections"),o=r(e("pouchdb-promise")),s=r(e("levelup")),a=r(e("sublevel-pouchdb")),u=e("through2"),c=r(e("argsarray")),f=r(e("double-ended-queue")),l=r(e("buffer-from")),d=e("pouchdb-utils"),h=e("pouchdb-adapter-utils"),p=e("pouchdb-merge"),g=e("pouchdb-json"),v=e("pouchdb-md5"),y=e("pouchdb-binary-utils"),m=e("pouchdb-errors")
function b(e,t){var n=new Uint8Array(e)
return y.blob([n],{type:t})}function _(e,t){var n=t.prefix()[0],r=e._cache,o=r.get(n)
return o||(o=new i.Map,r.set(n,o)),o}function w(){this._batch=[],this._cache=new i.Map}w.prototype.get=function(e,t,n){var r=_(this,e),i=r.get(t)
return i?d.nextTick(function(){n(null,i)}):null===i?d.nextTick(function(){n({name:"NotFoundError"})}):void e.get(t,function(e,i){if(e)return"NotFoundError"===e.name&&r.set(t,null),n(e)
r.set(t,i),n(null,i)})},w.prototype.batch=function(e){for(var t=0,n=e.length;t<n;t++){var r=e[t],i=_(this,r.prefix)
"put"===r.type?i.set(r.key,r.value):i.set(r.key,null)}this._batch=this._batch.concat(e)},w.prototype.execute=function(e,t){for(var n=new i.Set,r=[],o=this._batch.length-1;o>=0;o--){var s=this._batch[o],a=s.prefix.prefix()[0]+"ÿ"+s.key
n.has(a)||(n.add(a),r.push(s))}e.batch(r,t)}
var k="document-store",E="by-sequence",S="attach-store",x="attach-binary-store",j="local-store",O="meta-store",A=new i.Map,C="_local_last_update_seq",D="_local_doc_count",B="_local_uuid",L="md5-",I={encode:g.safeJsonStringify,decode:g.safeJsonParse,buffer:!1,type:"cheap-json"},R=new d.changesHandler
function T(e){return"winningRev"in e?e.winningRev:p.winningRev(e)}function M(e,t){return"deleted"in e?e.deleted:h.isDeleted(e,t)}function q(e,t,n){var r=[]
return e.forEach(function(e){e.doc&&e.doc._attachments&&Object.keys(e.doc._attachments).forEach(function(t){var n=e.doc._attachments[t]
"data"in n||r.push(n)})}),o.all(r.map(function(e){return function(e,t,n){var r=e.content_type
return new o(function(i,o){t.binaryStore.get(e.digest,function(t,s){var a
if(t){if("NotFoundError"!==t.name)return o(t)
a=n.binary?y.binaryStringToBlobOrBuffer("",r):""}else a=n.binary?b(s,r):s.toString("base64")
delete e.stub,delete e.length,e.data=a,i()})})}(e,t,n)}))}t.exports=function(e,t){e=d.clone(e)
var n,r,g=this,_={},N=e.revs_limit,P=e.name
void 0===e.createIfMissing&&(e.createIfMissing=!0)
var $,F=e.db,U=d.functionName(F)
function z(){_.docStore=r.sublevel(k,{valueEncoding:I}),_.bySeqStore=r.sublevel(E,{valueEncoding:"json"}),_.attachmentStore=r.sublevel(S,{valueEncoding:"json"}),_.binaryStore=r.sublevel(x,{valueEncoding:"binary"}),_.localStore=r.sublevel(j,{valueEncoding:"json"}),_.metaStore=r.sublevel(O,{valueEncoding:"json"}),"object"==typeof e.migrate?e.migrate.doMigrationTwo(r,_,W):W()}function W(){_.metaStore.get(C,function(e,i){void 0===r._updateSeq&&(r._updateSeq=i||0),_.metaStore.get(D,function(e,i){r._docCount=e?0:i,_.metaStore.get(B,function(e,r){n=e?d.uuid():r,_.metaStore.put(B,n,function(){d.nextTick(function(){t(null,g)})})})})})}function K(e,t){try{e.apply(null,t)}catch(n){t[t.length-1](n)}}function V(){var e=r._queue.peekFront()
"read"===e.type?function(e){for(var t=[e],n=1,i=r._queue.get(n);void 0!==i&&"read"===i.type;)t.push(i),n++,i=r._queue.get(n)
var o=0
t.forEach(function(e){var n=e.args,i=n[n.length-1]
n[n.length-1]=c(function(e){i.apply(null,e),++o===t.length&&d.nextTick(function(){t.forEach(function(){r._queue.shift()}),r._queue.length&&V()})}),K(e.fun,n)})}(e):function(e){var t=e.args,n=t[t.length-1]
t[t.length-1]=c(function(e){n.apply(null,e),d.nextTick(function(){r._queue.shift(),r._queue.length&&V()})}),K(e.fun,t)}(e)}function G(e){return c(function(t){r._queue.push({fun:e,args:t,type:"write"}),1===r._queue.length&&d.nextTick(V)})}function J(e){return c(function(t){r._queue.push({fun:e,args:t,type:"read"}),1===r._queue.length&&d.nextTick(V)})}function H(e){return("0000000000000000"+e).slice(-16)}function Q(e,t){F.destroy(e,t)}A.has(U)?$=A.get(U):($=new i.Map,A.set(U,$)),$.has(P)?(r=$.get(P),z()):$.set(P,a(s(P,e,function(n){if(n)return $.delete(P),t(n);(r=$.get(P))._docCount=-1,r._queue=new f,"object"==typeof e.migrate?e.migrate.doMigrationOne(P,r,z):z()}))),g._remote=!1,g.type=function(){return"leveldb"},g._id=function(e){e(null,n)},g._info=function(e){var t={doc_count:r._docCount,update_seq:r._updateSeq,backend_adapter:d.functionName(F)}
return d.nextTick(function(){e(null,t)})},g._get=J(function(e,t,n){t=d.clone(t),_.docStore.get(e,function(e,r){if(e||!r)return n(m.createError(m.MISSING_DOC,"missing"))
var i
if(t.rev)i=t.latest?p.latest(t.rev,r):t.rev
else if(i=T(r),M(r,i))return n(m.createError(m.MISSING_DOC,"deleted"))
var o=r.rev_map[i]
_.bySeqStore.get(H(o),function(e,t){if(!t)return n(m.createError(m.MISSING_DOC))
if("_id"in t&&t._id!==r.id)return n(new Error("wrong doc returned"))
if(t._id=r.id,"_rev"in t){if(t._rev!==i)return n(new Error("wrong doc returned"))}else t._rev=i
return n(null,{doc:t,metadata:r})})})}),g._getAttachment=function(e,t,n,r,i){var o=n.digest,s=n.content_type
_.binaryStore.get(o,function(e,t){if(e)return"NotFoundError"!==e.name?i(e):i(null,r.binary?function(e){return y.blob([""],{type:e})}(s):"")
r.binary?i(null,b(t,s)):i(null,t.toString("base64"))})},g._bulkDocs=G(function(e,t,n){var s=t.new_edits,a=new Array(e.docs.length),u=new i.Map,c=new i.Map,f=new w,b=0,k=r._updateSeq,E=e.docs,S=E.map(function(e){if(e._id&&h.isLocalId(e._id))return e
var t=h.parseDoc(e,s)
return t.metadata&&!t.metadata.rev_map&&(t.metadata.rev_map={}),t}),x=S.filter(function(e){return e.error})
if(x.length)return n(x[0])
function j(e,t){var n=o.resolve()
e.forEach(function(e,t){n=n.then(function(){return new o(function(n,r){g._doCompactionNoLock(t,e,{ctx:f},function(e){if(e)return r(e)
n()})})})}),n.then(function(){t()},t)}function O(){j(c,function(e){if(e&&T(e),g.auto_compaction)return t=T,n=new i.Map,u.forEach(function(e,t){n.set(t,p.compactTree(e))}),void j(n,t)
var t,n
T()})}function A(e,t,r,i,o,s,d,h){b+=s
var p=null,g=0
e.metadata.winningRev=t,e.metadata.deleted=r,e.data._id=e.metadata.id,e.data._rev=e.metadata.rev,i&&(e.data._deleted=!0),e.stemmedRevs.length&&c.set(e.metadata.id,e.stemmedRevs)
var w,E,S=e.data._attachments?Object.keys(e.data._attachments):[]
function x(e){g++,p||(e?h(p=e):g===S.length&&R())}function j(e,t,n,r){return function(i){(function(e,t,n,r,i){var o=e.data._attachments[n]
delete o.data,o.digest=t,o.length=r.length
var s=e.metadata.id,a=e.metadata.rev
o.revpos=parseInt(a,10),I(s,a,t,function(e,n){return e?i(e):0===r.length?i(e):n?(f.batch([{type:"put",prefix:_.binaryStore,key:t,value:l(r,"binary")}]),void i()):i(e)})})(e,L+i,t,n,r)}}function O(e,t,n){return function(r){v.binaryMd5(r,j(e,t,r,n))}}for(var A=0;A<S.length;A++){var C,D=S[A],B=e.data._attachments[D]
if(B.stub)I(e.data._id,e.data._rev,B.digest,x)
else if("string"==typeof B.data){try{C=y.atob(B.data)}catch(T){return void n(m.createError(m.BAD_ARG,"Attachment is not a valid base64 string"))}O(e,D,x)(C)}else w=B.data,E=O(e,D,x),y.readAsBinaryString(w,E)}function R(){var t=e.metadata.rev_map[e.metadata.rev]
if(t)return h()
t=++k,e.metadata.rev_map[e.metadata.rev]=e.metadata.seq=t
var n=[{key:H(t),value:e.data,prefix:_.bySeqStore,type:"put"},{key:e.metadata.id,value:e.metadata,prefix:_.docStore,type:"put"}]
f.batch(n),a[d]={ok:!0,id:e.metadata.id,rev:e.metadata.rev},u.set(e.metadata.id,e.metadata),h()}S.length||R()}var B={}
function I(e,t,n,r){function i(r){var i=[e,t].join("@"),s={}
return r?r.refs&&(s.refs=r.refs,s.refs[i]=!0):(s.refs={},s.refs[i]=!0),new o(function(e){f.batch([{type:"put",prefix:_.attachmentStore,key:n,value:s}]),e(!r)})}var s=B[n]||o.resolve()
B[n]=s.then(function(){return new o(function(e,t){f.get(_.attachmentStore,n,function(n,r){if(n&&"NotFoundError"!==n.name)return t(n)
e(r)})}).then(i).then(function(e){r(null,e)},r)})}function T(e){if(e)return d.nextTick(function(){n(e)})
f.batch([{prefix:_.metaStore,type:"put",key:C,value:k},{prefix:_.metaStore,type:"put",key:D,value:r._docCount+b}]),f.execute(r,function(e){if(e)return n(e)
r._docCount+=b,r._updateSeq=k,R.notify(P),d.nextTick(function(){n(null,a)})})}if(!S.length)return n(null,[]);(function(e){var t=[]
if(E.forEach(function(e){e&&e._attachments&&Object.keys(e._attachments).forEach(function(n){var r=e._attachments[n]
r.stub&&t.push(r.digest)})}),!t.length)return e()
var n,r=0
t.forEach(function(i){(function(e,t){f.get(_.attachmentStore,e,function(n){if(n){var r=m.createError(m.MISSING_STUB,"unknown stub attachment with digest "+e)
t(r)}else t()})})(i,function(i){i&&!n&&(n=i),++r===t.length&&e(n)})})})(function(e){if(e)return n(e);(function(e){var t,n=0
function r(){if(++n===E.length)return e(t)}E.forEach(function(e){if(e._id&&h.isLocalId(e._id))return r()
f.get(_.docStore,e._id,function(n,i){n?"NotFoundError"!==n.name&&(t=n):u.set(e._id,i),r()})})})(function(e){if(e)return n(e)
h.processDocs(N,S,g,u,f,a,A,t,O)})})}),g._allDocs=J(function(e,t){e=d.clone(e),function(e){r.isClosed()?e(new Error("database is closed")):e(null,r._docCount)}(function(n,r){if(n)return t(n)
var i,s={},a=e.skip||0
if(e.startkey&&(s.gte=e.startkey),e.endkey&&(s.lte=e.endkey),e.key&&(s.gte=s.lte=e.key),e.descending){s.reverse=!0
var c=s.lte
s.lte=s.gte,s.gte=c}if("number"==typeof e.limit&&(i=e.limit),0===i||"start"in s&&"end"in s&&s.start>s.end)return t(null,{total_rows:r,offset:e.skip,rows:[]})
var f=[],l=_.docStore.readStream(s),d=u.obj(function(t,n,r){var o=t.value,s=T(o),u=M(o,s)
if(u){if("ok"!==e.deleted)return void r()}else{if(a-- >0)return void r()
if("number"==typeof i&&i--<=0)return l.unpipe(),l.destroy(),void r()}function c(t){var n={id:o.id,key:o.id,value:{rev:s}}
if(e.include_docs){if(n.doc=t,n.doc._rev=n.value.rev,e.conflicts){var i=p.collectConflicts(o)
i.length&&(n.doc._conflicts=i)}for(var a in n.doc._attachments)n.doc._attachments.hasOwnProperty(a)&&(n.doc._attachments[a].stub=!0)}if(!1===e.inclusive_end&&o.id===e.endkey)return r()
if(u){if("ok"!==e.deleted)return r()
n.value.deleted=!0,n.doc=null}f.push(n),r()}if(e.include_docs){var d=o.rev_map[s]
_.bySeqStore.get(H(d),function(e,t){c(t)})}else c()},function(n){o.resolve().then(function(){if(e.include_docs&&e.attachments)return q(f,_,e)}).then(function(){t(null,{total_rows:r,offset:e.skip,rows:f})},t),n()}).on("unpipe",function(){d.end()})
l.on("error",t),l.pipe(d)})}),g._changes=function(e){if((e=d.clone(e)).continuous){var t=P+":"+d.uuid()
return R.addListener(P,t,g,e),R.notify(P),{cancel:function(){R.removeListener(P,t)}}}var n,o=e.descending,s=[],a=e.since||0,c=0,f={reverse:o}
"limit"in e&&e.limit>0&&(n=e.limit),f.reverse||(f.start=H(e.since||0))
var l,p=e.doc_ids&&new i.Set(e.doc_ids),v=d.filterChange(e),y=new i.Map
function m(){e.done=!0,l&&e.limit&&e.limit<s.length&&(s.length=e.limit),b.unpipe(w),b.destroy(),e.continuous||e.cancelled||(e.include_docs&&e.attachments?q(s,_,e).then(function(){e.complete(null,{results:s,last_seq:a})}):e.complete(null,{results:s,last_seq:a}))}l="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs
var b=_.bySeqStore.readStream(f),w=u.obj(function(t,i,u){if(n&&c>=n)return m(),u()
if(e.cancelled||e.done)return u()
var f,d,g=(f=t.key,parseInt(f,10)),b=t.value
if(g===e.since&&!o)return u()
if(p&&!p.has(b._id))return u()
function w(t){var n=T(t)
function r(n){var r=e.processChange(n,t,e)
r.seq=t.seq
var i=v(r)
if("object"==typeof i)return e.complete(i)
i&&(c++,e.attachments&&e.include_docs?q([r],_,e).then(function(){e.onChange(r)}):e.onChange(r),l&&s.push(r)),u()}if(t.seq!==g)return u()
if(a=g,n===b._rev)return r(b)
var i=t.rev_map[n]
_.bySeqStore.get(H(i),function(e,t){r(t)})}if(d=y.get(b._id))return w(d)
_.docStore.get(b._id,function(t,n){if(e.cancelled||e.done||r.isClosed()||h.isLocalId(n.id))return u()
y.set(b._id,n),w(n)})},function(t){if(e.cancelled)return t()
l&&e.limit&&e.limit<s.length&&(s.length=e.limit),t()}).on("unpipe",function(){w.end(),m()})
return b.pipe(w),{cancel:function(){e.cancelled=!0,m()}}},g._close=function(e){if(r.isClosed())return e(m.createError(m.NOT_OPEN))
r.close(function(t){t?e(t):($.delete(P),e())})},g._getRevisionTree=function(e,t){_.docStore.get(e,function(e,n){e?t(m.createError(m.MISSING_DOC)):t(null,n.rev_tree)})},g._doCompaction=G(function(e,t,n,r){g._doCompactionNoLock(e,t,n,r)}),g._doCompactionNoLock=function(e,t,n,o){if("function"==typeof n&&(o=n,n={}),!t.length)return o()
var s=n.ctx||new w
s.get(_.docStore,e,function(a,u){if(a)return o(a)
var c=t.map(function(e){var t=u.rev_map[e]
return delete u.rev_map[e],t})
p.traverseRevTree(u.rev_tree,function(e,n,r,i,o){var s=n+"-"+r;-1!==t.indexOf(s)&&(o.status="missing")})
var f=[]
f.push({key:u.id,value:u,type:"put",prefix:_.docStore})
var l,d={},h=0
function g(n){if(n&&(l=n),++h===t.length){if(l)return o(l);(function(){var n=Object.keys(d)
if(!n.length)return v()
var r,o=0
function a(e){e&&(r=e),++o===n.length&&v(r)}var u=new i.Map
t.forEach(function(t){u.set(e+"@"+t,!0)}),n.forEach(function(e){s.get(_.attachmentStore,e,function(t,n){if(t)return"NotFoundError"===t.name?a():a(t)
var r=Object.keys(n.refs||{}).filter(function(e){return!u.has(e)}),i={}
r.forEach(function(e){i[e]=!0}),r.length?f.push({key:e,type:"put",value:{refs:i},prefix:_.attachmentStore}):f=f.concat([{key:e,type:"del",prefix:_.attachmentStore},{key:e,type:"del",prefix:_.binaryStore}]),a()})})})()}}function v(e){return e?o(e):(s.batch(f),n.ctx?o():void s.execute(r,o))}c.forEach(function(e){f.push({key:H(e),type:"del",prefix:_.bySeqStore}),s.get(_.bySeqStore,H(e),function(e,t){if(e)return"NotFoundError"===e.name?g():g(e)
Object.keys(t._attachments||{}).forEach(function(e){var n=t._attachments[e].digest
d[n]=!0}),g()})})})},g._getLocal=function(e,t){_.localStore.get(e,function(e,n){e?t(m.createError(m.MISSING_DOC)):t(null,n)})},g._putLocal=function(e,t,n){"function"==typeof t&&(n=t,t={}),t.ctx?g._putLocalNoLock(e,t,n):g._putLocalWithLock(e,t,n)},g._putLocalWithLock=G(function(e,t,n){g._putLocalNoLock(e,t,n)}),g._putLocalNoLock=function(e,t,n){delete e._revisions
var i=e._rev,o=e._id,s=t.ctx||new w
s.get(_.localStore,o,function(a,u){if(a&&i)return n(m.createError(m.REV_CONFLICT))
if(u&&u._rev!==i)return n(m.createError(m.REV_CONFLICT))
e._rev=i?"0-"+(parseInt(i.split("-")[1],10)+1):"0-1"
var c=[{type:"put",prefix:_.localStore,key:o,value:e}]
s.batch(c)
var f={ok:!0,id:e._id,rev:e._rev}
if(t.ctx)return n(null,f)
s.execute(r,function(e){if(e)return n(e)
n(null,f)})})},g._removeLocal=function(e,t,n){"function"==typeof t&&(n=t,t={}),t.ctx?g._removeLocalNoLock(e,t,n):g._removeLocalWithLock(e,t,n)},g._removeLocalWithLock=G(function(e,t,n){g._removeLocalNoLock(e,t,n)}),g._removeLocalNoLock=function(e,t,n){var i=t.ctx||new w
i.get(_.localStore,e._id,function(o,s){if(o)return"NotFoundError"!==o.name?n(o):n(m.createError(m.MISSING_DOC))
if(s._rev!==e._rev)return n(m.createError(m.REV_CONFLICT))
i.batch([{prefix:_.localStore,type:"del",key:e._id}])
var a={ok:!0,id:e._id,rev:"0-0"}
if(t.ctx)return n(null,a)
i.execute(r,function(e){if(e)return n(e)
n(null,a)})})},g._destroy=function(e,t){var n,r=d.functionName(F)
if(!A.has(r))return Q(P,t);(n=A.get(r)).has(P)?(R.removeAllListeners(P),n.get(P).close(function(){n.delete(P),Q(P,t)})):Q(P,t)}}},{argsarray:1,"buffer-from":2,"double-ended-queue":14,levelup:33,"pouchdb-adapter-utils":77,"pouchdb-binary-utils":80,"pouchdb-collections":87,"pouchdb-errors":94,"pouchdb-json":118,"pouchdb-md5":121,"pouchdb-merge":122,"pouchdb-promise":64,"pouchdb-utils":132,"sublevel-pouchdb":145,through2:75}],64:[function(e,t,n){arguments[4][58][0].apply(n,arguments)},{dup:58,lie:39}],65:[function(e,t,n){"use strict"
var r=Object.keys||function(e){var t=[]
for(var n in e)t.push(n)
return t}
t.exports=l
var i=e("process-nextick-args"),o=e("core-util-is")
o.inherits=e("inherits")
var s=e("./_stream_readable"),a=e("./_stream_writable")
o.inherits(l,s)
for(var u=r(a.prototype),c=0;c<u.length;c++){var f=u[c]
l.prototype[f]||(l.prototype[f]=a.prototype[f])}function l(e){if(!(this instanceof l))return new l(e)
s.call(this,e),a.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",d)}function d(){this.allowHalfOpen||this._writableState.ended||i(h,this)}function h(e){e.end()}},{"./_stream_readable":67,"./_stream_writable":69,"core-util-is":4,inherits:21,"process-nextick-args":134}],66:[function(e,t,n){"use strict"
t.exports=o
var r=e("./_stream_transform"),i=e("core-util-is")
function o(e){if(!(this instanceof o))return new o(e)
r.call(this,e)}i.inherits=e("inherits"),i.inherits(o,r),o.prototype._transform=function(e,t,n){n(null,e)}},{"./_stream_transform":68,"core-util-is":4,inherits:21}],67:[function(e,t,n){(function(n){"use strict"
t.exports=y
var r,i=e("process-nextick-args"),o=e("isarray")
y.ReadableState=v
e("events").EventEmitter
var s=function(e,t){return e.listeners(t).length},a=e("./internal/streams/stream"),u=e("buffer").Buffer,c=e("buffer-shims"),f=e("core-util-is")
f.inherits=e("inherits")
var l=e("util"),d=void 0
d=l&&l.debuglog?l.debuglog("stream"):function(){}
var h,p=e("./internal/streams/BufferList")
f.inherits(y,a)
var g=["error","close","destroy","pause","resume"]
function v(t,n){r=r||e("./_stream_duplex"),t=t||{},this.objectMode=!!t.objectMode,n instanceof r&&(this.objectMode=this.objectMode||!!t.readableObjectMode)
var i=t.highWaterMark,o=this.objectMode?16:16384
this.highWaterMark=i||0===i?i:o,this.highWaterMark=~~this.highWaterMark,this.buffer=new p,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(h||(h=e("string_decoder/").StringDecoder),this.decoder=new h(t.encoding),this.encoding=t.encoding)}function y(t){if(r=r||e("./_stream_duplex"),!(this instanceof y))return new y(t)
this._readableState=new v(t,this),this.readable=!0,t&&"function"==typeof t.read&&(this._read=t.read),a.call(this)}function m(e,t,n,r,o){var s=function(e,t){var n=null
u.isBuffer(t)||"string"==typeof t||null==t||e.objectMode||(n=new TypeError("Invalid non-string/buffer chunk"))
return n}(t,n)
if(s)e.emit("error",s)
else if(null===n)t.reading=!1,function(e,t){if(t.ended)return
if(t.decoder){var n=t.decoder.end()
n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,w(e)}(e,t)
else if(t.objectMode||n&&n.length>0)if(t.ended&&!o){var a=new Error("stream.push() after EOF")
e.emit("error",a)}else if(t.endEmitted&&o){var c=new Error("stream.unshift() after end event")
e.emit("error",c)}else{var f
!t.decoder||o||r||(n=t.decoder.write(n),f=!t.objectMode&&0===n.length),o||(t.reading=!1),f||(t.flowing&&0===t.length&&!t.sync?(e.emit("data",n),e.read(0)):(t.length+=t.objectMode?1:n.length,o?t.buffer.unshift(n):t.buffer.push(n),t.needReadable&&w(e))),function(e,t){t.readingMore||(t.readingMore=!0,i(E,e,t))}(e,t)}else o||(t.reading=!1)
return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(t)}y.prototype.push=function(e,t){var n=this._readableState
return n.objectMode||"string"!=typeof e||(t=t||n.defaultEncoding)!==n.encoding&&(e=c.from(e,t),t=""),m(this,n,e,t,!1)},y.prototype.unshift=function(e){return m(this,this._readableState,e,"",!0)},y.prototype.isPaused=function(){return!1===this._readableState.flowing},y.prototype.setEncoding=function(t){return h||(h=e("string_decoder/").StringDecoder),this._readableState.decoder=new h(t),this._readableState.encoding=t,this}
var b=8388608
function _(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=b?e=b:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function w(e){var t=e._readableState
t.needReadable=!1,t.emittedReadable||(d("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?i(k,e):k(e))}function k(e){d("emit readable"),e.emit("readable"),j(e)}function E(e,t){for(var n=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(d("maybeReadMore read 0"),e.read(0),n!==t.length);)n=t.length
t.readingMore=!1}function S(e){d("readable nexttick read 0"),e.read(0)}function x(e,t){t.reading||(d("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),j(e),t.flowing&&!t.reading&&e.read(0)}function j(e){var t=e._readableState
for(d("flow",t.flowing);t.flowing&&null!==e.read(););}function O(e,t){return 0===t.length?null:(t.objectMode?n=t.buffer.shift():!e||e>=t.length?(n=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):n=function(e,t,n){var r
e<t.head.data.length?(r=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):r=e===t.head.data.length?t.shift():n?function(e,t){var n=t.head,r=1,i=n.data
e-=i.length
for(;n=n.next;){var o=n.data,s=e>o.length?o.length:e
if(s===o.length?i+=o:i+=o.slice(0,e),0===(e-=s)){s===o.length?(++r,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n,n.data=o.slice(s))
break}++r}return t.length-=r,i}(e,t):function(e,t){var n=c.allocUnsafe(e),r=t.head,i=1
r.data.copy(n),e-=r.data.length
for(;r=r.next;){var o=r.data,s=e>o.length?o.length:e
if(o.copy(n,n.length-e,0,s),0===(e-=s)){s===o.length?(++i,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=o.slice(s))
break}++i}return t.length-=i,n}(e,t)
return r}(e,t.buffer,t.decoder),n)
var n}function A(e){var t=e._readableState
if(t.length>0)throw new Error('"endReadable()" called on non-empty stream')
t.endEmitted||(t.ended=!0,i(C,t,e))}function C(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function D(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1}y.prototype.read=function(e){d("read",e),e=parseInt(e,10)
var t=this._readableState,n=e
if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return d("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?A(this):w(this),null
if(0===(e=_(e,t))&&t.ended)return 0===t.length&&A(this),null
var r,i=t.needReadable
return d("need readable",i),(0===t.length||t.length-e<t.highWaterMark)&&d("length less than watermark",i=!0),t.ended||t.reading?d("reading or ended",i=!1):i&&(d("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=_(n,t))),null===(r=e>0?O(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),n!==e&&t.ended&&A(this)),null!==r&&this.emit("data",r),r},y.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},y.prototype.pipe=function(e,t){var r=this,a=this._readableState
switch(a.pipesCount){case 0:a.pipes=e
break
case 1:a.pipes=[a.pipes,e]
break
default:a.pipes.push(e)}a.pipesCount+=1,d("pipe count=%d opts=%j",a.pipesCount,t)
var u=(!t||!1!==t.end)&&e!==n.stdout&&e!==n.stderr?f:p
function c(e){d("onunpipe"),e===r&&p()}function f(){d("onend"),e.end()}a.endEmitted?i(u):r.once("end",u),e.on("unpipe",c)
var l=function(e){return function(){var t=e._readableState
d("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&s(e,"data")&&(t.flowing=!0,j(e))}}(r)
e.on("drain",l)
var h=!1
function p(){d("cleanup"),e.removeListener("close",m),e.removeListener("finish",b),e.removeListener("drain",l),e.removeListener("error",y),e.removeListener("unpipe",c),r.removeListener("end",f),r.removeListener("end",p),r.removeListener("data",v),h=!0,!a.awaitDrain||e._writableState&&!e._writableState.needDrain||l()}var g=!1
function v(t){d("ondata"),g=!1,!1!==e.write(t)||g||((1===a.pipesCount&&a.pipes===e||a.pipesCount>1&&-1!==D(a.pipes,e))&&!h&&(d("false write response, pause",r._readableState.awaitDrain),r._readableState.awaitDrain++,g=!0),r.pause())}function y(t){d("onerror",t),_(),e.removeListener("error",y),0===s(e,"error")&&e.emit("error",t)}function m(){e.removeListener("finish",b),_()}function b(){d("onfinish"),e.removeListener("close",m),_()}function _(){d("unpipe"),r.unpipe(e)}return r.on("data",v),function(e,t,n){if("function"==typeof e.prependListener)return e.prependListener(t,n)
e._events&&e._events[t]?o(e._events[t])?e._events[t].unshift(n):e._events[t]=[n,e._events[t]]:e.on(t,n)}(e,"error",y),e.once("close",m),e.once("finish",b),e.emit("pipe",r),a.flowing||(d("pipe resume"),r.resume()),e},y.prototype.unpipe=function(e){var t=this._readableState
if(0===t.pipesCount)return this
if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this),this)
if(!e){var n=t.pipes,r=t.pipesCount
t.pipes=null,t.pipesCount=0,t.flowing=!1
for(var i=0;i<r;i++)n[i].emit("unpipe",this)
return this}var o=D(t.pipes,e)
return-1===o?this:(t.pipes.splice(o,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this),this)},y.prototype.on=function(e,t){var n=a.prototype.on.call(this,e,t)
if("data"===e)!1!==this._readableState.flowing&&this.resume()
else if("readable"===e){var r=this._readableState
r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.emittedReadable=!1,r.reading?r.length&&w(this):i(S,this))}return n},y.prototype.addListener=y.prototype.on,y.prototype.resume=function(){var e=this._readableState
return e.flowing||(d("resume"),e.flowing=!0,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,i(x,e,t))}(this,e)),this},y.prototype.pause=function(){return d("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(d("pause"),this._readableState.flowing=!1,this.emit("pause")),this},y.prototype.wrap=function(e){var t=this._readableState,n=!1,r=this
for(var i in e.on("end",function(){if(d("wrapped end"),t.decoder&&!t.ended){var e=t.decoder.end()
e&&e.length&&r.push(e)}r.push(null)}),e.on("data",function(i){(d("wrapped data"),t.decoder&&(i=t.decoder.write(i)),t.objectMode&&null==i)||(t.objectMode||i&&i.length)&&(r.push(i)||(n=!0,e.pause()))}),e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i))
for(var o=0;o<g.length;o++)e.on(g[o],r.emit.bind(r,g[o]))
return r._read=function(t){d("wrapped _read",t),n&&(n=!1,e.resume())},r},y._fromList=O}).call(this,e("_process"))},{"./_stream_duplex":65,"./internal/streams/BufferList":70,"./internal/streams/stream":71,_process:170,buffer:162,"buffer-shims":3,"core-util-is":4,events:164,inherits:21,isarray:27,"process-nextick-args":134,"string_decoder/":74,util:160}],68:[function(e,t,n){"use strict"
t.exports=s
var r=e("./_stream_duplex"),i=e("core-util-is")
function o(e){this.afterTransform=function(t,n){return function(e,t,n){var r=e._transformState
r.transforming=!1
var i=r.writecb
if(!i)return e.emit("error",new Error("no writecb in Transform class"))
r.writechunk=null,r.writecb=null,null!=n&&e.push(n)
i(t)
var o=e._readableState
o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&e._read(o.highWaterMark)}(e,t,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function s(e){if(!(this instanceof s))return new s(e)
r.call(this,e),this._transformState=new o(this)
var t=this
this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(e,n){a(t,e,n)}):a(t)})}function a(e,t,n){if(t)return e.emit("error",t)
null!=n&&e.push(n)
var r=e._writableState,i=e._transformState
if(r.length)throw new Error("Calling transform done when ws.length != 0")
if(i.transforming)throw new Error("Calling transform done when still transforming")
return e.push(null)}i.inherits=e("inherits"),i.inherits(s,r),s.prototype.push=function(e,t){return this._transformState.needTransform=!1,r.prototype.push.call(this,e,t)},s.prototype._transform=function(e,t,n){throw new Error("_transform() is not implemented")},s.prototype._write=function(e,t,n){var r=this._transformState
if(r.writecb=n,r.writechunk=e,r.writeencoding=t,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},s.prototype._read=function(e){var t=this._transformState
null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0}},{"./_stream_duplex":65,"core-util-is":4,inherits:21}],69:[function(e,t,n){(function(n){"use strict"
t.exports=g
var r,i=e("process-nextick-args"),o=!n.browser&&["v0.10","v0.9."].indexOf(n.version.slice(0,5))>-1?setImmediate:i
g.WritableState=p
var s=e("core-util-is")
s.inherits=e("inherits")
var a,u={deprecate:e("util-deprecate")},c=e("./internal/streams/stream"),f=e("buffer").Buffer,l=e("buffer-shims")
function d(){}function h(e,t,n){this.chunk=e,this.encoding=t,this.callback=n,this.next=null}function p(t,n){r=r||e("./_stream_duplex"),t=t||{},this.objectMode=!!t.objectMode,n instanceof r&&(this.objectMode=this.objectMode||!!t.writableObjectMode)
var s=t.highWaterMark,a=this.objectMode?16:16384
this.highWaterMark=s||0===s?s:a,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1
var u=!1===t.decodeStrings
this.decodeStrings=!u,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){(function(e,t){var n=e._writableState,r=n.sync,s=n.writecb
if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(n),t)(function(e,t,n,r,o){--t.pendingcb,n?i(o,r):o(r)
e._writableState.errorEmitted=!0,e.emit("error",r)})(e,n,r,t,s)
else{var a=b(n)
a||n.corked||n.bufferProcessing||!n.bufferedRequest||m(e,n),r?o(y,e,n,a,s):y(e,n,a,s)}})(n,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new k(this)}function g(t){if(r=r||e("./_stream_duplex"),!(a.call(g,this)||this instanceof r))return new g(t)
this._writableState=new p(t,this),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev)),c.call(this)}function v(e,t,n,r,i,o,s){t.writelen=r,t.writecb=s,t.writing=!0,t.sync=!0,n?e._writev(i,t.onwrite):e._write(i,o,t.onwrite),t.sync=!1}function y(e,t,n,r){n||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,r(),w(e,t)}function m(e,t){t.bufferProcessing=!0
var n=t.bufferedRequest
if(e._writev&&n&&n.next){var r=t.bufferedRequestCount,i=new Array(r),o=t.corkedRequestsFree
o.entry=n
for(var s=0;n;)i[s]=n,n=n.next,s+=1
v(e,t,!0,t.length,i,"",o.finish),t.pendingcb++,t.lastBufferedRequest=null,o.next?(t.corkedRequestsFree=o.next,o.next=null):t.corkedRequestsFree=new k(t)}else{for(;n;){var a=n.chunk,u=n.encoding,c=n.callback
if(v(e,t,!1,t.objectMode?1:a.length,a,u,c),n=n.next,t.writing)break}null===n&&(t.lastBufferedRequest=null)}t.bufferedRequestCount=0,t.bufferedRequest=n,t.bufferProcessing=!1}function b(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function _(e,t){t.prefinished||(t.prefinished=!0,e.emit("prefinish"))}function w(e,t){var n=b(t)
return n&&(0===t.pendingcb?(_(e,t),t.finished=!0,e.emit("finish")):_(e,t)),n}function k(e){var t=this
this.next=null,this.entry=null,this.finish=function(n){var r=t.entry
for(t.entry=null;r;){var i=r.callback
e.pendingcb--,i(n),r=r.next}e.corkedRequestsFree?e.corkedRequestsFree.next=t:e.corkedRequestsFree=t}}s.inherits(g,c),p.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next
return t},function(){try{Object.defineProperty(p.prototype,"buffer",{get:u.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(a=Function.prototype[Symbol.hasInstance],Object.defineProperty(g,Symbol.hasInstance,{value:function(e){return!!a.call(this,e)||e&&e._writableState instanceof p}})):a=function(e){return e instanceof this},g.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},g.prototype.write=function(e,t,n){var r=this._writableState,o=!1,s=f.isBuffer(e)
return"function"==typeof t&&(n=t,t=null),s?t="buffer":t||(t=r.defaultEncoding),"function"!=typeof n&&(n=d),r.ended?function(e,t){var n=new Error("write after end")
e.emit("error",n),i(t,n)}(this,n):(s||function(e,t,n,r){var o=!0,s=!1
return null===n?s=new TypeError("May not write null values to stream"):"string"==typeof n||void 0===n||t.objectMode||(s=new TypeError("Invalid non-string/buffer chunk")),s&&(e.emit("error",s),i(r,s),o=!1),o}(this,r,e,n))&&(r.pendingcb++,o=function(e,t,n,r,i,o){n||(r=function(e,t,n){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=l.from(t,n))
return t}(t,r,i),f.isBuffer(r)&&(i="buffer"))
var s=t.objectMode?1:r.length
t.length+=s
var a=t.length<t.highWaterMark
a||(t.needDrain=!0)
if(t.writing||t.corked){var u=t.lastBufferedRequest
t.lastBufferedRequest=new h(r,i,o),u?u.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else v(e,t,!1,s,r,i,o)
return a}(this,r,s,e,t,n)),o},g.prototype.cork=function(){this._writableState.corked++},g.prototype.uncork=function(){var e=this._writableState
e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||m(this,e))},g.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e)
return this._writableState.defaultEncoding=e,this},g.prototype._write=function(e,t,n){n(new Error("_write() is not implemented"))},g.prototype._writev=null,g.prototype.end=function(e,t,n){var r=this._writableState
"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),null!=e&&this.write(e,t),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||function(e,t,n){t.ending=!0,w(e,t),n&&(t.finished?i(n):e.once("finish",n))
t.ended=!0,e.writable=!1}(this,r,n)}}).call(this,e("_process"))},{"./_stream_duplex":65,"./internal/streams/stream":71,_process:170,buffer:162,"buffer-shims":3,"core-util-is":4,inherits:21,"process-nextick-args":134,"util-deprecate":154}],70:[function(e,t,n){"use strict"
e("buffer").Buffer
var r=e("buffer-shims")
function i(){this.head=null,this.tail=null,this.length=0}t.exports=i,i.prototype.push=function(e){var t={data:e,next:null}
this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},i.prototype.unshift=function(e){var t={data:e,next:this.head}
0===this.length&&(this.tail=t),this.head=t,++this.length},i.prototype.shift=function(){if(0!==this.length){var e=this.head.data
return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},i.prototype.clear=function(){this.head=this.tail=null,this.length=0},i.prototype.join=function(e){if(0===this.length)return""
for(var t=this.head,n=""+t.data;t=t.next;)n+=e+t.data
return n},i.prototype.concat=function(e){if(0===this.length)return r.alloc(0)
if(1===this.length)return this.head.data
for(var t=r.allocUnsafe(e>>>0),n=this.head,i=0;n;)n.data.copy(t,i),i+=n.data.length,n=n.next
return t}},{buffer:162,"buffer-shims":3}],71:[function(e,t,n){t.exports=e("events").EventEmitter},{events:164}],72:[function(e,t,n){(n=t.exports=e("./lib/_stream_readable.js")).Stream=n,n.Readable=n,n.Writable=e("./lib/_stream_writable.js"),n.Duplex=e("./lib/_stream_duplex.js"),n.Transform=e("./lib/_stream_transform.js"),n.PassThrough=e("./lib/_stream_passthrough.js")},{"./lib/_stream_duplex.js":65,"./lib/_stream_passthrough.js":66,"./lib/_stream_readable.js":67,"./lib/_stream_transform.js":68,"./lib/_stream_writable.js":69}],73:[function(e,t,n){t.exports=e("./readable").Transform},{"./readable":72}],74:[function(e,t,n){"use strict"
var r=e("buffer").Buffer,i=e("buffer-shims"),o=r.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}}
function s(e){var t
switch(this.encoding=function(e){var t=function(e){if(!e)return"utf8"
for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8"
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le"
case"latin1":case"binary":return"latin1"
case"base64":case"ascii":case"hex":return e
default:if(t)return
e=(""+e).toLowerCase(),t=!0}}(e)
if("string"!=typeof t&&(r.isEncoding===o||!o(e)))throw new Error("Unknown encoding: "+e)
return t||e}(e),this.encoding){case"utf16le":this.text=c,this.end=f,t=4
break
case"utf8":this.fillLast=u,t=4
break
case"base64":this.text=l,this.end=d,t=3
break
default:return this.write=h,void(this.end=p)}this.lastNeed=0,this.lastTotal=0,this.lastChar=i.allocUnsafe(t)}function a(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:-1}function u(e){var t=this.lastTotal-this.lastNeed,n=function(e,t,n){if(128!=(192&t[0]))return e.lastNeed=0,"�".repeat(n)
if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�".repeat(n+1)
if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�".repeat(n+2)}}(this,e,t)
return void 0!==n?n:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function c(e,t){if((e.length-t)%2==0){var n=e.toString("utf16le",t)
if(n){var r=n.charCodeAt(n.length-1)
if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function f(e){var t=e&&e.length?this.write(e):""
if(this.lastNeed){var n=this.lastTotal-this.lastNeed
return t+this.lastChar.toString("utf16le",0,n)}return t}function l(e,t){var n=(e.length-t)%3
return 0===n?e.toString("base64",t):(this.lastNeed=3-n,this.lastTotal=3,1===n?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-n))}function d(e){var t=e&&e.length?this.write(e):""
return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function h(e){return e.toString(this.encoding)}function p(e){return e&&e.length?this.write(e):""}n.StringDecoder=s,s.prototype.write=function(e){if(0===e.length)return""
var t,n
if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return""
n=this.lastNeed,this.lastNeed=0}else n=0
return n<e.length?t?t+this.text(e,n):this.text(e,n):t||""},s.prototype.end=function(e){var t=e&&e.length?this.write(e):""
return this.lastNeed?t+"�".repeat(this.lastTotal-this.lastNeed):t},s.prototype.text=function(e,t){var n=function(e,t,n){var r=t.length-1
if(r<n)return 0
var i=a(t[r])
if(i>=0)return i>0&&(e.lastNeed=i-1),i
if(--r<n)return 0
if((i=a(t[r]))>=0)return i>0&&(e.lastNeed=i-2),i
if(--r<n)return 0
if((i=a(t[r]))>=0)return i>0&&(2===i?i=0:e.lastNeed=i-3),i
return 0}(this,e,t)
if(!this.lastNeed)return e.toString("utf8",t)
this.lastTotal=n
var r=e.length-(n-this.lastNeed)
return e.copy(this.lastChar,0,r),e.toString("utf8",t,r)},s.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)
e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}},{buffer:162,"buffer-shims":3}],75:[function(e,t,n){(function(n){var r=e("readable-stream/transform"),i=e("util").inherits,o=e("xtend")
function s(e){r.call(this,e),this._destroyed=!1}function a(e,t,n){n(null,e)}function u(e){return function(t,n,r){return"function"==typeof t&&(r=n,n=t,t={}),"function"!=typeof n&&(n=a),"function"!=typeof r&&(r=null),e(t,n,r)}}i(s,r),s.prototype.destroy=function(e){if(!this._destroyed){this._destroyed=!0
var t=this
n.nextTick(function(){e&&t.emit("error",e),t.emit("close")})}},t.exports=u(function(e,t,n){var r=new s(e)
return r._transform=t,n&&(r._flush=n),r}),t.exports.ctor=u(function(e,t,n){function r(t){if(!(this instanceof r))return new r(t)
this.options=o(e,t),s.call(this,this.options)}return i(r,s),r.prototype._transform=t,n&&(r.prototype._flush=n),r}),t.exports.obj=u(function(e,t,n){var r=new s(o({objectMode:!0,highWaterMark:16},e))
return r._transform=t,n&&(r._flush=n),r})}).call(this,e("_process"))},{_process:170,"readable-stream/transform":73,util:188,xtend:157}],76:[function(e,t,n){"use strict"
function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=e("pouchdb-utils"),o=r(e("pouchdb-adapter-leveldb-core")),s=r(e("memdown"))
function a(e,t){var n=i.assign({db:s},e)
o.call(this,n,t)}a.valid=function(){return!0},a.use_prefix=!1
t.exports=function(e){e.adapter("memory",a,!0)}},{memdown:43,"pouchdb-adapter-leveldb-core":63,"pouchdb-utils":132}],77:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r=e("pouchdb-utils"),i=e("pouchdb-errors"),o=e("pouchdb-merge"),s=e("pouchdb-binary-utils"),a=e("pouchdb-md5"),u=e("pouchdb-collections")
function c(e){return e.reduce(function(e,t){return e[t]=!0,e},{})}var f=c(["_id","_rev","_attachments","_deleted","_revisions","_revs_info","_conflicts","_deleted_conflicts","_local_seq","_rev_tree","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats","_removed"]),l=c(["_attachments","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats"])
function d(e){if(!/^\d+\-./.test(e))return i.createError(i.INVALID_REV)
var t=e.indexOf("-"),n=e.substring(0,t),r=e.substring(t+1)
return{prefix:parseInt(n,10),id:r}}function h(e,t){var n,o,s,a={status:"available"}
if(e._deleted&&(a.deleted=!0),t)if(e._id||(e._id=r.uuid()),o=r.uuid(32,16).toLowerCase(),e._rev){if((s=d(e._rev)).error)return s
e._rev_tree=[{pos:s.prefix,ids:[s.id,{status:"missing"},[[o,a,[]]]]}],n=s.prefix+1}else e._rev_tree=[{pos:1,ids:[o,a,[]]}],n=1
else if(e._revisions&&(e._rev_tree=function(e,t){for(var n=e.start-e.ids.length+1,r=e.ids,i=[r[0],t,[]],o=1,s=r.length;o<s;o++)i=[r[o],{status:"missing"},[i]]
return[{pos:n,ids:i}]}(e._revisions,a),n=e._revisions.start,o=e._revisions.ids[0]),!e._rev_tree){if((s=d(e._rev)).error)return s
n=s.prefix,o=s.id,e._rev_tree=[{pos:n,ids:[o,a,[]]}]}r.invalidIdError(e._id),e._rev=n+"-"+o
var u={metadata:{},data:{}}
for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var h="_"===c[0]
if(h&&!f[c]){var p=i.createError(i.DOC_VALIDATION,c)
throw p.message=i.DOC_VALIDATION.message+": "+c,p}h&&!l[c]?u.metadata[c.slice(1)]=e[c]:u.data[c]=e[c]}return u}function p(e,t,n){var r=function(e){try{return s.atob(e)}catch(t){return{error:i.createError(i.BAD_ARG,"Attachment is not a valid base64 string")}}}(e.data)
if(r.error)return n(r.error)
e.length=r.length,e.data="blob"===t?s.binaryStringToBlobOrBuffer(r,e.content_type):"base64"===t?s.btoa(r):r,a.binaryMd5(r,function(t){e.digest="md5-"+t,n()})}function g(e,t,n){if(e.stub)return n()
"string"==typeof e.data?p(e,t,n):function(e,t,n){a.binaryMd5(e.data,function(r){e.digest="md5-"+r,e.length=e.data.size||e.data.length||0,"binary"===t?s.blobOrBufferToBinaryString(e.data,function(t){e.data=t,n()}):"base64"===t?s.blobOrBufferToBase64(e.data,function(t){e.data=t,n()}):n()})}(e,t,n)}function v(e,t,n,r,s,a,u,c){if(o.revExists(t.rev_tree,n.metadata.rev))return r[s]=n,a()
var f=t.winningRev||o.winningRev(t),l="deleted"in t?t.deleted:o.isDeleted(t,f),d="deleted"in n.metadata?n.metadata.deleted:o.isDeleted(n.metadata),p=/^1-/.test(n.metadata.rev)
if(l&&!d&&c&&p){var g=n.data
g._rev=f,g._id=n.metadata.id,n=h(g,c)}var v=o.merge(t.rev_tree,n.metadata.rev_tree[0],e)
if(c&&(l&&d&&"new_leaf"!==v.conflicts||!l&&"new_leaf"!==v.conflicts||l&&!d&&"new_branch"===v.conflicts)){var y=i.createError(i.REV_CONFLICT)
return r[s]=y,a()}var m=n.metadata.rev
n.metadata.rev_tree=v.tree,n.stemmedRevs=v.stemmedRevs||[],t.rev_map&&(n.metadata.rev_map=t.rev_map)
var b=o.winningRev(n.metadata),_=o.isDeleted(n.metadata,b),w=l===_?0:l<_?-1:1
u(n,b,_,m===b?_:o.isDeleted(n.metadata,m),!0,w,s,a)}n.invalidIdError=r.invalidIdError,n.isDeleted=o.isDeleted,n.isLocalId=o.isLocalId,n.normalizeDdocFunctionName=r.normalizeDdocFunctionName,n.parseDdocFunctionName=r.parseDdocFunctionName,n.parseDoc=h,n.preprocessAttachments=function(e,t,n){if(!e.length)return n()
var r,i=0
function o(){i++,e.length===i&&(r?n(r):n())}e.forEach(function(e){var n=e.data&&e.data._attachments?Object.keys(e.data._attachments):[],i=0
if(!n.length)return o()
function s(e){r=e,++i===n.length&&o()}for(var a in e.data._attachments)e.data._attachments.hasOwnProperty(a)&&g(e.data._attachments[a],t,s)})},n.processDocs=function(e,t,n,r,s,a,c,f,l){e=e||1e3
var d=f.new_edits,h=new u.Map,p=0,g=t.length
function y(){++p===g&&l&&l()}t.forEach(function(e,t){if(e._id&&o.isLocalId(e._id)){var r=e._deleted?"_removeLocal":"_putLocal"
n[r](e,{ctx:s},function(e,n){a[t]=e||n,y()})}else{var i=e.metadata.id
h.has(i)?(g--,h.get(i).push([e,t])):h.set(i,[[e,t]])}}),h.forEach(function(t,n){var s=0
function u(){++s<t.length?l():y()}function l(){var l=t[s],h=l[0],p=l[1]
if(r.has(n))v(e,r.get(n),h,a,p,u,c,d)
else{var g=o.merge([],h.metadata.rev_tree[0],e)
h.metadata.rev_tree=g.tree,h.stemmedRevs=g.stemmedRevs||[],function(e,t,n){var r=o.winningRev(e.metadata),s=o.isDeleted(e.metadata,r)
if("was_delete"in f&&s)return a[t]=i.createError(i.MISSING_DOC,"deleted"),n()
if(d&&function(e){return"missing"===e.metadata.rev_tree[0].ids[1].status}(e)){var u=i.createError(i.REV_CONFLICT)
return a[t]=u,n()}c(e,r,s,s,!1,s?0:1,t,n)}(h,p,u)}}l()})},n.updateDoc=v},{"pouchdb-binary-utils":80,"pouchdb-collections":87,"pouchdb-errors":94,"pouchdb-md5":121,"pouchdb-merge":122,"pouchdb-utils":132}],78:[function(e,t,n){"use strict"
var r,i=e("pouchdb-utils"),o=(r=e("pouchdb-promise"))&&"object"==typeof r&&"default"in r?r.default:r,s=e("pouchdb-binary-utils"),a=e("pouchdb-errors")
function u(e,t){var n,r,i,s=new Headers,a={method:e.method,credentials:"include",headers:s}
return e.json&&(s.set("Accept","application/json"),s.set("Content-Type",e.headers["Content-Type"]||"application/json")),e.body&&e.processData&&"string"!=typeof e.body?a.body=JSON.stringify(e.body):a.body="body"in e?e.body:null,Object.keys(e.headers).forEach(function(t){e.headers.hasOwnProperty(t)&&s.set(t,e.headers[t])}),n=function(){for(var e={},t=new o(function(t,n){e.resolve=t,e.reject=n}),n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r]
return e.promise=t,o.resolve().then(function(){return fetch.apply(null,n)}).then(function(t){e.resolve(t)}).catch(function(t){e.reject(t)}),e}(e.url,a),e.timeout>0&&(r=setTimeout(function(){n.reject(new Error("Load timeout for resource: "+e.url))},e.timeout)),n.promise.then(function(t){return i={statusCode:t.status},e.timeout>0&&clearTimeout(r),i.statusCode>=200&&i.statusCode<300?e.binary?t.blob():t.text():t.json()}).then(function(e){i.statusCode>=200&&i.statusCode<300?t(null,i,e):(e.status=i.statusCode,t(e))}).catch(function(e){e||(e=new Error("canceled")),t(e)}),{abort:n.reject}}var c=function(){try{return new XMLHttpRequest,!0}catch(e){return!1}}()
function f(e,t){return c||e.xhr?function(e,t){var n,r,i=!1,o=function(){i=!0,n.abort(),u()},a={abort:function(){n.abort(),u()}},u=function(){clearTimeout(r),a.abort=function(){},n&&(n.onprogress=void 0,n.upload&&(n.upload.onprogress=void 0),n.onreadystatechange=void 0,n=void 0)}
n=e.xhr?new e.xhr:new XMLHttpRequest
try{n.open(e.method,e.url)}catch(f){return t(new Error(f.name||"Url is invalid"))}for(var c in n.withCredentials=!("withCredentials"in e)||e.withCredentials,"GET"===e.method?delete e.headers["Content-Type"]:e.json&&(e.headers.Accept="application/json",e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json",e.body&&e.processData&&"string"!=typeof e.body&&(e.body=JSON.stringify(e.body))),e.binary&&(n.responseType="arraybuffer"),"body"in e||(e.body=null),e.headers)e.headers.hasOwnProperty(c)&&n.setRequestHeader(c,e.headers[c])
return e.timeout>0&&(r=setTimeout(o,e.timeout),n.onprogress=function(){clearTimeout(r),4!==n.readyState&&(r=setTimeout(o,e.timeout))},void 0!==n.upload&&(n.upload.onprogress=n.onprogress)),n.onreadystatechange=function(){if(4===n.readyState){var r={statusCode:n.status}
if(n.status>=200&&n.status<300){var o
o=e.binary?s.blob([n.response||""],{type:n.getResponseHeader("Content-Type")}):n.responseText,t(null,r,o)}else{var a={}
if(i)(a=new Error("ETIMEDOUT")).code="ETIMEDOUT"
else if("string"==typeof n.response)try{a=JSON.parse(n.response)}catch(c){}a.status=n.status,t(a)}u()}},e.body&&e.body instanceof Blob?s.readAsArrayBuffer(e.body,function(e){n.send(e)}):n.send(e.body),a}(e,t):u(e,t)}var l=function(){}
function d(e,t){e=i.clone(e)
return(e=i.assign({method:"GET",headers:{},json:!0,processData:!0,timeout:1e4,cache:!1},e)).json&&(e.binary||(e.headers.Accept="application/json"),e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json"),e.binary&&(e.encoding=null,e.json=!1),e.processData||(e.json=!1),f(e,function(n,r,i){if(n)return t(a.generateErrorFromResponse(n))
var o,s=r.headers&&r.headers["content-type"],u=i||""
if(!e.binary&&(e.json||!e.processData)&&"object"!=typeof u&&(/json/.test(s)||/^[\s]*\{/.test(u)&&/\}[\s]*$/.test(u)))try{u=JSON.parse(u.toString())}catch(c){}r.statusCode>=200&&r.statusCode<300?function(t,n,r){if(!e.binary&&e.json&&"string"==typeof t)try{t=JSON.parse(t)}catch(c){return r(c)}Array.isArray(t)&&(t=t.map(function(e){return e.error||e.missing?a.generateErrorFromResponse(e):e})),e.binary&&l(t,n),r(null,t,n)}(u,r,t):((o=a.generateErrorFromResponse(u)).status=r.statusCode,t(o))})}t.exports=function(e,t){var n=navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",r=-1!==n.indexOf("safari")&&-1===n.indexOf("chrome"),i=-1!==n.indexOf("msie"),o=-1!==n.indexOf("edge"),s=r||(i||o)&&"GET"===e.method,a=!("cache"in e)||e.cache
if(!/^blob:/.test(e.url)&&(s||!a)){var u=-1!==e.url.indexOf("?")
e.url+=(u?"&":"?")+"_nonce="+Date.now()}return d(e,t)}},{"pouchdb-binary-utils":80,"pouchdb-errors":94,"pouchdb-promise":79,"pouchdb-utils":132}],79:[function(e,t,n){arguments[4][58][0].apply(n,arguments)},{dup:58,lie:39}],80:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r=function(e){return atob(e)},i=function(e){return btoa(e)}
function o(e,t){e=e||[],t=t||{}
try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i
for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)n.append(e[r])
return n.getBlob(t.type)}}function s(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i)
return n}function a(e,t){return o([s(e)],{type:t})}function u(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,i=0;i<r;i++)t+=String.fromCharCode(n[i])
return t}function c(e,t){if("undefined"==typeof FileReader)return t(u((new FileReaderSync).readAsArrayBuffer(e)))
var n=new FileReader,r="function"==typeof n.readAsBinaryString
n.onloadend=function(e){var n=e.target.result||""
if(r)return t(n)
t(u(n))},r?n.readAsBinaryString(e):n.readAsArrayBuffer(e)}function f(e,t){c(e,function(e){t(e)})}n.atob=r,n.btoa=i,n.base64StringToBlobOrBuffer=function(e,t){return a(r(e),t)},n.binaryStringToArrayBuffer=s,n.binaryStringToBlobOrBuffer=a,n.blob=o,n.blobOrBufferToBase64=function(e,t){f(e,function(e){t(i(e))})},n.blobOrBufferToBinaryString=f,n.readAsArrayBuffer=function(e,t){if("undefined"==typeof FileReader)return t((new FileReaderSync).readAsArrayBuffer(e))
var n=new FileReader
n.onloadend=function(e){var n=e.target.result||new ArrayBuffer(0)
t(n)},n.readAsArrayBuffer(e)},n.readAsBinaryString=c,n.typedBuffer=function(){}},{}],81:[function(e,t,n){"use strict"
var r=e("pouchdb-errors"),i=e("pouchdb-utils"),o=e("pouchdb-selector-core")
function s(e,t){if(e.selector&&e.filter&&"_selector"!==e.filter){var n="string"==typeof e.filter?e.filter:"function"
return t(new Error('selector invalid for filter "'+n+'"'))}t()}function a(e){e.view&&!e.filter&&(e.filter="_view"),e.selector&&!e.filter&&(e.filter="_selector"),e.filter&&"string"==typeof e.filter&&("_view"===e.filter?e.view=i.normalizeDdocFunctionName(e.view):e.filter=i.normalizeDdocFunctionName(e.filter))}function u(e,t){return t.filter&&"string"==typeof t.filter&&!t.doc_ids&&!i.isRemote(e.db)}function c(e,t){var n=t.complete
if("_view"===t.filter){if(!t.view||"string"!=typeof t.view){var s=r.createError(r.BAD_REQUEST,"`view` filter parameter not found or invalid.")
return n(s)}var a=i.parseDdocFunctionName(t.view)
e.db.get("_design/"+a[0],function(o,s){if(e.isCancelled)return n(null,{status:"cancelled"})
if(o)return n(r.generateErrorFromResponse(o))
var u,c=s&&s.views&&s.views[a[1]]&&s.views[a[1]].map
if(!c)return n(r.createError(r.MISSING_DOC,s.views?"missing json key: "+a[1]:"missing json key: views"))
t.filter=(u=["return function(doc) {",'  "use strict";',"  var emitted = false;","  var emit = function (a, b) {","    emitted = true;","  };","  var view = "+c+";","  view(doc);","  if (emitted) {","    return true;","  }","};"].join("\n"),i.scopeEval(u,{})),e.doChanges(t)})}else if(t.selector)t.filter=function(e){return o.matchesSelector(e,t.selector)},e.doChanges(t)
else{var u=i.parseDdocFunctionName(t.filter)
e.db.get("_design/"+u[0],function(o,s){if(e.isCancelled)return n(null,{status:"cancelled"})
if(o)return n(r.generateErrorFromResponse(o))
var a,c=s&&s.filters&&s.filters[u[1]]
if(!c)return n(r.createError(r.MISSING_DOC,s&&s.filters?"missing json key: "+u[1]:"missing json key: filters"))
t.filter=(a=c,i.scopeEval('"use strict";\nreturn '+a+";",{})),e.doChanges(t)})}}t.exports=function(e){e._changesFilterPlugin={validate:s,normalize:a,shouldFilter:u,filter:c}}},{"pouchdb-errors":94,"pouchdb-selector-core":127,"pouchdb-utils":132}],82:[function(e,t,n){"use strict"
var r,i=(r=e("pouchdb-promise"))&&"object"==typeof r&&"default"in r?r.default:r,o=e("pouchdb-utils"),s=e("pouchdb-collate"),a=1,u="pouchdb",c=5,f=0
function l(e,t,n,r,i){return e.get(t).catch(function(n){if(404===n.status)return"http"!==e.adapter&&"https"!==e.adapter||o.explainError(404,"PouchDB is just checking if a remote checkpoint exists."),{session_id:r,_id:t,history:[],replicator:u,version:a}
throw n}).then(function(o){if(!i.cancelled&&o.last_seq!==n)return o.history=(o.history||[]).filter(function(e){return e.session_id!==r}),o.history.unshift({last_seq:n,session_id:r}),o.history=o.history.slice(0,c),o.version=a,o.replicator=u,o.session_id=r,o.last_seq=n,e.put(o).catch(function(o){if(409===o.status)return l(e,t,n,r,i)
throw o})})}function d(e,t,n,r){this.src=e,this.target=t,this.id=n,this.returnValue=r}d.prototype.writeCheckpoint=function(e,t){var n=this
return this.updateTarget(e,t).then(function(){return n.updateSource(e,t)})},d.prototype.updateTarget=function(e,t){return l(this.target,this.id,e,t,this.returnValue)},d.prototype.updateSource=function(e,t){var n=this
return this.readOnlySource?i.resolve(!0):l(this.src,this.id,e,t,this.returnValue).catch(function(e){if(g(e))return n.readOnlySource=!0,!0
throw e})}
var h={undefined:function(e,t){return 0===s.collate(e.last_seq,t.last_seq)?t.last_seq:0},1:function(e,t){return function(e,t){if(e.session_id===t.session_id)return{last_seq:e.last_seq,history:e.history}
return function e(t,n){var r=t[0]
var i=t.slice(1)
var o=n[0]
var s=n.slice(1)
if(!r||0===n.length)return{last_seq:f,history:[]}
var a=r.session_id
if(p(a,n))return{last_seq:r.last_seq,history:t}
var u=o.session_id
if(p(u,i))return{last_seq:o.last_seq,history:s}
return e(i,s)}(e.history,t.history)}(t,e).last_seq}}
function p(e,t){var n=t[0],r=t.slice(1)
return!(!e||0===t.length)&&(e===n.session_id||p(e,r))}function g(e){return"number"==typeof e.status&&4===Math.floor(e.status/100)}d.prototype.getCheckpoint=function(){var e=this
return e.target.get(e.id).then(function(t){return e.readOnlySource?i.resolve(t.last_seq):e.src.get(e.id).then(function(e){return t.version!==e.version?f:(n=t.version?t.version.toString():"undefined")in h?h[n](t,e):f
var n},function(n){if(404===n.status&&t.last_seq)return e.src.put({_id:e.id,last_seq:f}).then(function(){return f},function(n){return g(n)?(e.readOnlySource=!0,t.last_seq):f})
throw n})}).catch(function(e){if(404!==e.status)throw e
return f})},t.exports=d},{"pouchdb-collate":83,"pouchdb-promise":84,"pouchdb-utils":132}],83:[function(e,t,n){arguments[4][57][0].apply(n,arguments)},{dup:57}],84:[function(e,t,n){arguments[4][58][0].apply(n,arguments)},{dup:58,lie:39}],85:[function(e,t,n){"use strict"
var r=-324,i=3,o="",s=e("./utils")
function a(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0
case"number":return function(e){if(0===e)return"1"
var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),a=e<0,u=a?"0":"2",c=(a?-n:n)-r,f=s.padLeft(c.toString(),"0",i)
u+=o+f
var l=Math.abs(parseFloat(t[0]))
a&&(l=10-l)
var d=l.toFixed(20)
return d=d.replace(/\.?0+$/,""),u+=o+d}(e)
case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"")
case"object":var t=Array.isArray(e),a=t?e:Object.keys(e),u=-1,c=a.length,f=""
if(t)for(;++u<c;)f+=n.toIndexableString(a[u])
else for(;++u<c;){var l=a[u]
f+=n.toIndexableString(l)+n.toIndexableString(e[l])}return f}return""}function u(e,t){var n,o=t
if("1"===e[t])n=0,t++
else{var s="0"===e[t]
t++
var a="",u=e.substring(t,t+i),c=parseInt(u,10)+r
for(s&&(c=-c),t+=i;;){var f=e[t]
if("\0"===f)break
a+=f,t++}n=1===(a=a.split(".")).length?parseInt(a,10):parseFloat(a[0]+"."+a[1]),s&&(n-=10),0!==c&&(n=parseFloat(n+"e"+c))}return{num:n,length:t-o}}function c(e,t){var n=e.pop()
if(t.length){var r=t[t.length-1]
n===r.element&&(t.pop(),r=t[t.length-1])
var i=r.element,o=r.index
if(Array.isArray(i))i.push(n)
else if(o===e.length-2){i[e.pop()]=n}else e.push(n)}}function f(e){var t=["boolean","number","string","object"].indexOf(typeof e)
return~t?null===e?1:Array.isArray(e)?5:t<3?t+2:t+3:Array.isArray(e)?5:void 0}n.collate=function(e,t){if(e===t)return 0
e=n.normalizeKey(e),t=n.normalizeKey(t)
var r=f(e),i=f(t)
if(r-i!=0)return r-i
if(null===e)return 0
switch(typeof e){case"number":return e-t
case"boolean":return e===t?0:e<t?-1:1
case"string":return function(e,t){return e===t?0:e>t?1:-1}(e,t)}return Array.isArray(e)?function(e,t){for(var r=Math.min(e.length,t.length),i=0;i<r;i++){var o=n.collate(e[i],t[i])
if(0!==o)return o}return e.length===t.length?0:e.length>t.length?1:-1}(e,t):function(e,t){for(var r=Object.keys(e),i=Object.keys(t),o=Math.min(r.length,i.length),s=0;s<o;s++){var a=n.collate(r[s],i[s])
if(0!==a)return a
if(0!==(a=n.collate(e[r[s]],t[i[s]])))return a}return r.length===i.length?0:r.length>i.length?1:-1}(e,t)},n.normalizeKey=function(e){switch(typeof e){case"undefined":return null
case"number":return e===1/0||e===-1/0||isNaN(e)?null:e
case"object":var t=e
if(Array.isArray(e)){var r=e.length
e=new Array(r)
for(var i=0;i<r;i++)e[i]=n.normalizeKey(t[i])}else{if(e instanceof Date)return e.toJSON()
if(null!==e)for(var o in e={},t)if(t.hasOwnProperty(o)){var s=t[o]
void 0!==s&&(e[o]=n.normalizeKey(s))}}}return e},n.toIndexableString=function(e){return f(e=n.normalizeKey(e))+o+a(e)+"\0"},n.parseIndexableString=function(e){for(var t=[],n=[],r=0;;){var i=e[r++]
if("\0"!==i)switch(i){case"1":t.push(null)
break
case"2":t.push("1"===e[r]),r++
break
case"3":var o=u(e,r)
t.push(o.num),r+=o.length
break
case"4":for(var s="";;){var a=e[r]
if("\0"===a)break
s+=a,r++}s=s.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(s)
break
case"5":var f={element:[],index:t.length}
t.push(f.element),n.push(f)
break
case"6":var l={element:{},index:t.length}
t.push(l.element),n.push(l)
break
default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+i)}else{if(1===t.length)return t.pop()
c(t,n)}}}},{"./utils":86}],86:[function(e,t,n){"use strict"
function r(e,t,n){for(var r="",i=n-e.length;r.length<i;)r+=t
return r}n.padLeft=function(e,t,n){return r(e,t,n)+e},n.padRight=function(e,t,n){return e+r(e,t,n)},n.stringLexCompare=function(e,t){var n,r=e.length,i=t.length
for(n=0;n<r;n++){if(n===i)return 1
var o=e.charAt(n),s=t.charAt(n)
if(o!==s)return o<s?-1:1}return r<i?-1:0},n.intToDecimalForm=function(e){var t=e<0,n=""
do{n=(t?-Math.ceil(e%10):Math.floor(e%10))+n,e=t?Math.ceil(e/10):Math.floor(e/10)}while(e)
return t&&"0"!==n&&(n="-"+n),n}},{}],87:[function(e,t,n){"use strict"
function r(e){return"$"+e}function i(e){return e.substring(1)}function o(){this._store={}}function s(e){if(this._store=new o,e&&Array.isArray(e))for(var t=0,n=e.length;t<n;t++)this.add(e[t])}Object.defineProperty(n,"__esModule",{value:!0}),o.prototype.get=function(e){var t=r(e)
return this._store[t]},o.prototype.set=function(e,t){var n=r(e)
return this._store[n]=t,!0},o.prototype.has=function(e){return r(e)in this._store},o.prototype.delete=function(e){var t=r(e),n=t in this._store
return delete this._store[t],n},o.prototype.forEach=function(e){for(var t=Object.keys(this._store),n=0,r=t.length;n<r;n++){var o=t[n]
e(this._store[o],o=i(o))}},Object.defineProperty(o.prototype,"size",{get:function(){return Object.keys(this._store).length}}),s.prototype.add=function(e){return this._store.set(e,!0)},s.prototype.has=function(e){return this._store.has(e)},s.prototype.forEach=function(e){this._store.forEach(function(t,n){e(n)})},Object.defineProperty(s.prototype,"size",{get:function(){return this._store.size}}),!function(){if("undefined"==typeof Symbol||"undefined"==typeof Map||"undefined"==typeof Set)return!1
var e=Object.getOwnPropertyDescriptor(Map,Symbol.species)
return e&&"get"in e&&Map[Symbol.species]===Map}()?(n.Set=s,n.Map=o):(n.Set=Set,n.Map=Map)},{}],88:[function(e,t,n){"use strict"
function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=e("pouchdb-utils"),o=e("pouchdb-collections"),s=r(e("inherits")),a=r(e("pouchdb-promise")),u=e("events"),c=r(e("argsarray")),f=e("pouchdb-merge"),l=e("pouchdb-errors"),d=r(e("pouchdb-debug")),h=r(e("pouchdb-changes-filter"))
function p(e,t,n){u.EventEmitter.call(this)
var r=this
this.db=e
var o=(t=t?i.clone(t):{}).complete=i.once(function(t,n){t?i.listenerCount(r,"error")>0&&r.emit("error",t):r.emit("complete",n),r.removeAllListeners(),e.removeListener("destroyed",s)})
function s(){r.cancel()}n&&(r.on("complete",function(e){n(null,e)}),r.on("error",n)),e.once("destroyed",s),t.onChange=function(e){r.isCancelled||function(e,t){try{e.emit("change",t)}catch(n){i.guardedConsole("error",'Error in .on("change", function):',n)}}(r,e)}
var c=new a(function(e,n){t.complete=function(t,r){t?n(t):e(r)}})
r.once("cancel",function(){e.removeListener("destroyed",s),t.complete(null,{status:"cancelled"})}),this.then=c.then.bind(c),this.catch=c.catch.bind(c),this.then(function(e){o(null,e)},o),e.taskqueue.isReady?r.validateChanges(t):e.taskqueue.addTask(function(e){e?t.complete(e):r.isCancelled?r.emit("cancel"):r.validateChanges(t)})}function g(e,t,n){var r=[{rev:e._rev}]
"all_docs"===n.style&&(r=f.collectLeaves(t.rev_tree).map(function(e){return{rev:e.rev}}))
var i={id:t.id,changes:r,doc:e}
return f.isDeleted(t,e._rev)&&(i.deleted=!0),n.conflicts&&(i.doc._conflicts=f.collectConflicts(t),i.doc._conflicts.length||delete i.doc._conflicts),i}function v(e,t){return e<t?-1:e>t?1:0}function y(e){return function(t,n){t||n[0]&&n[0].error?e(t||n[0]):e(null,n.length?n[0]:n)}}function m(e,t){var n=v(e._id,t._id)
return 0!==n?n:v(e._revisions?e._revisions.start:0,t._revisions?t._revisions.start:0)}function b(){u.EventEmitter.call(this)}function _(){this.isReady=!1,this.failed=!1,this.queue=[]}function w(e,t){if(!(this instanceof w))return new w(e,t)
var n=this
if(t=t||{},e&&"object"==typeof e&&(e=(t=e).name,delete t.name),this.__opts=t=i.clone(t),n.auto_compaction=t.auto_compaction,n.prefix=w.prefix,"string"!=typeof e)throw new Error("Missing/invalid DB name")
var r=function(e,t){var n=e.match(/([a-z\-]*):\/\/(.*)/)
if(n)return{name:/https?/.test(n[1])?n[1]+"://"+n[2]:n[2],adapter:n[1]}
var r=w.adapters,o=w.preferredAdapters,s=w.prefix,a=t.adapter
if(!a)for(var u=0;u<o.length&&"idb"===(a=o[u])&&"websql"in r&&i.hasLocalStorage()&&localStorage["_pouch__websqldb_"+s+e];++u)i.guardedConsole("log",'PouchDB is downgrading "'+e+'" to WebSQL to avoid data loss, because it was already opened with WebSQL.')
var c=r[a]
return{name:c&&"use_prefix"in c&&!c.use_prefix?e:s+e,adapter:a}}((t.prefix||"")+e,t)
if(t.name=r.name,t.adapter=t.adapter||r.adapter,n.name=e,n._adapter=t.adapter,w.emit("debug",["adapter","Picked adapter: ",t.adapter]),!w.adapters[t.adapter]||!w.adapters[t.adapter].valid())throw new Error("Invalid Adapter: "+t.adapter)
b.call(n),n.taskqueue=new _,n.adapter=t.adapter,w.adapters[t.adapter].call(n,t,function(e){if(e)return n.taskqueue.fail(e);(function(e){var t=e.constructor._destructionListeners
function n(){e.removeListener("closed",r),e.constructor.emit("destroyed",e.name)}function r(){e.removeListener("destroyed",n),t.delete(e.name)}e.once("destroyed",n),e.once("closed",r),t.has(e.name)||t.set(e.name,[]),t.get(e.name).push(function(){e.removeListener("destroyed",n),e.removeListener("closed",r),e.emit("destroyed")})})(n),n.emit("created",n),w.emit("created",n.name),n.taskqueue.ready(n)})}s(p,u.EventEmitter),p.prototype.cancel=function(){this.isCancelled=!0,this.db.taskqueue.isReady&&this.emit("cancel")},p.prototype.validateChanges=function(e){var t=e.complete,n=this
w._changesFilterPlugin?w._changesFilterPlugin.validate(e,function(r){if(r)return t(r)
n.doChanges(e)}):n.doChanges(e)},p.prototype.doChanges=function(e){var t=this,n=e.complete
if("live"in(e=i.clone(e))&&!("continuous"in e)&&(e.continuous=e.live),e.processChange=g,"latest"===e.since&&(e.since="now"),e.since||(e.since=0),"now"!==e.since){if(w._changesFilterPlugin){if(w._changesFilterPlugin.normalize(e),w._changesFilterPlugin.shouldFilter(this,e))return w._changesFilterPlugin.filter(this,e)}else["doc_ids","filter","selector","view"].forEach(function(t){t in e&&i.guardedConsole("warn",'The "'+t+'" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.')})
"descending"in e||(e.descending=!1),e.limit=0===e.limit?1:e.limit,e.complete=n
var r=this.db._changes(e)
if(r&&"function"==typeof r.cancel){var o=t.cancel
t.cancel=c(function(e){r.cancel(),o.apply(this,e)})}}else this.db.info().then(function(r){t.isCancelled?n(null,{status:"cancelled"}):(e.since=r.update_seq,t.doChanges(e))},n)},s(b,u.EventEmitter),b.prototype.post=i.adapterFun("post",function(e,t,n){if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(l.createError(l.NOT_AN_OBJECT))
this.bulkDocs({docs:[e]},t,y(n))}),b.prototype.put=i.adapterFun("put",function(e,t,n){return"function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e)?n(l.createError(l.NOT_AN_OBJECT)):(i.invalidIdError(e._id),f.isLocalId(e._id)&&"function"==typeof this._putLocal?e._deleted?this._removeLocal(e,n):this._putLocal(e,n):void("function"==typeof this._put&&!1!==t.new_edits?this._put(e,t,n):this.bulkDocs({docs:[e]},t,y(n))))}),b.prototype.putAttachment=i.adapterFun("putAttachment",function(e,t,n,r,o){var s=this
function a(e){var n="_rev"in e?parseInt(e._rev,10):0
return e._attachments=e._attachments||{},e._attachments[t]={content_type:o,data:r,revpos:++n},s.put(e)}return"function"==typeof o&&(o=r,r=n,n=null),void 0===o&&(o=r,r=n,n=null),o||i.guardedConsole("warn","Attachment",t,"on document",e,"is missing content_type"),s.get(e).then(function(e){if(e._rev!==n)throw l.createError(l.REV_CONFLICT)
return a(e)},function(t){if(t.reason===l.MISSING_DOC.message)return a({_id:e})
throw t})}),b.prototype.removeAttachment=i.adapterFun("removeAttachment",function(e,t,n,r){var i=this
i.get(e,function(e,o){if(e)r(e)
else if(o._rev===n){if(!o._attachments)return r()
delete o._attachments[t],0===Object.keys(o._attachments).length&&delete o._attachments,i.put(o,r)}else r(l.createError(l.REV_CONFLICT))})}),b.prototype.remove=i.adapterFun("remove",function(e,t,n,r){var i
"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(i=e,"function"==typeof t?(r=t,n={}):(r=n,n=t)),(n=n||{}).was_delete=!0
var o={_id:i._id,_rev:i._rev||n.rev,_deleted:!0}
if(f.isLocalId(o._id)&&"function"==typeof this._removeLocal)return this._removeLocal(i,r)
this.bulkDocs({docs:[o]},n,y(r))}),b.prototype.revsDiff=i.adapterFun("revsDiff",function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=Object.keys(e)
if(!r.length)return n(null,{})
var i=0,s=new o.Map
function a(e,t){s.has(e)||s.set(e,{missing:[]}),s.get(e).missing.push(t)}r.map(function(t){this._getRevisionTree(t,function(o,u){if(o&&404===o.status&&"missing"===o.message)s.set(t,{missing:e[t]})
else{if(o)return n(o);(function(t,n){var r=e[t].slice(0)
f.traverseRevTree(n,function(e,n,i,o,s){var u=n+"-"+i,c=r.indexOf(u);-1!==c&&(r.splice(c,1),"available"!==s.status&&a(t,u))}),r.forEach(function(e){a(t,e)})})(t,u)}if(++i===r.length){var c={}
return s.forEach(function(e,t){c[t]=e}),n(null,c)}})},this)}),b.prototype.bulkGet=i.adapterFun("bulkGet",function(e,t){i.bulkGetShim(this,e,t)}),b.prototype.compactDocument=i.adapterFun("compactDocument",function(e,t,n){var r=this
this._getRevisionTree(e,function(i,o){if(i)return n(i)
var s=function(e){var t={},n=[]
return f.traverseRevTree(e,function(e,r,i,o){var s=r+"-"+i
return e&&(t[s]=0),void 0!==o&&n.push({from:o,to:s}),s}),n.reverse(),n.forEach(function(e){void 0===t[e.from]?t[e.from]=1+t[e.to]:t[e.from]=Math.min(t[e.from],1+t[e.to])}),t}(o),a=[],u=[]
Object.keys(s).forEach(function(e){s[e]>t&&a.push(e)}),f.traverseRevTree(o,function(e,t,n,r,i){var o=t+"-"+n
"available"===i.status&&-1!==a.indexOf(o)&&u.push(o)}),r._doCompaction(e,u,n)})}),b.prototype.compact=i.adapterFun("compact",function(e,t){"function"==typeof e&&(t=e,e={})
e=e||{},this._compactionQueue=this._compactionQueue||[],this._compactionQueue.push({opts:e,callback:t}),1===this._compactionQueue.length&&function e(t){var n=t._compactionQueue[0],r=n.opts,o=n.callback
t.get("_local/compaction").catch(function(){return!1}).then(function(n){n&&n.last_seq&&(r.last_seq=n.last_seq),t._compact(r,function(n,r){n?o(n):o(null,r),i.nextTick(function(){t._compactionQueue.shift(),t._compactionQueue.length&&e(t)})})})}(this)}),b.prototype._compact=function(e,t){var n=this,r={return_docs:!1,last_seq:e.last_seq||0},o=[]
n.changes(r).on("change",function(e){o.push(n.compactDocument(e.id,0))}).on("complete",function(e){var r=e.last_seq
a.all(o).then(function(){return i.upsert(n,"_local/compaction",function(e){return(!e.last_seq||e.last_seq<r)&&(e.last_seq=r,e)})}).then(function(){t(null,{ok:!0})}).catch(t)}).on("error",t)},b.prototype.get=i.adapterFun("get",function(e,t,n){if("function"==typeof t&&(n=t,t={}),"string"!=typeof e)return n(l.createError(l.INVALID_ID))
if(f.isLocalId(e)&&"function"==typeof this._getLocal)return this._getLocal(e,n)
var r=[],i=this
function o(){var o=[],s=r.length
if(!s)return n(null,o)
r.forEach(function(r){i.get(e,{rev:r,revs:t.revs,latest:t.latest,attachments:t.attachments},function(e,t){if(e)o.push({missing:r})
else{for(var i,a=0,u=o.length;a<u;a++)if(o[a].ok&&o[a].ok._rev===t._rev){i=!0
break}i||o.push({ok:t})}--s||n(null,o)})})}if(!t.open_revs)return this._get(e,t,function(e,r){if(e)return n(e)
var o=r.doc,s=r.metadata,a=r.ctx
if(t.conflicts){var u=f.collectConflicts(s)
u.length&&(o._conflicts=u)}if(f.isDeleted(s,o._rev)&&(o._deleted=!0),t.revs||t.revs_info){for(var c=o._rev.split("-"),l=parseInt(c[0],10),d=c[1],h=f.rootToLeaf(s.rev_tree),p=null,g=0;g<h.length;g++){var v=h[g],y=v.ids.map(function(e){return e.id}).indexOf(d);(y===l-1||!p&&-1!==y)&&(p=v)}var m=p.ids.map(function(e){return e.id}).indexOf(o._rev.split("-")[1])+1,b=p.ids.length-m
if(p.ids.splice(m,b),p.ids.reverse(),t.revs&&(o._revisions={start:p.pos+p.ids.length-1,ids:p.ids.map(function(e){return e.id})}),t.revs_info){var _=p.pos+p.ids.length
o._revs_info=p.ids.map(function(e){return{rev:--_+"-"+e.id,status:e.opts.status}})}}if(t.attachments&&o._attachments){var w=o._attachments,k=Object.keys(w).length
if(0===k)return n(null,o)
Object.keys(w).forEach(function(e){this._getAttachment(o._id,e,w[e],{rev:o._rev,binary:t.binary,ctx:a},function(t,r){var i=o._attachments[e]
i.data=r,delete i.stub,delete i.length,--k||n(null,o)})},i)}else{if(o._attachments)for(var E in o._attachments)o._attachments.hasOwnProperty(E)&&(o._attachments[E].stub=!0)
n(null,o)}})
if("all"===t.open_revs)this._getRevisionTree(e,function(e,t){if(e)return n(e)
r=f.collectLeaves(t).map(function(e){return e.rev}),o()})
else{if(!Array.isArray(t.open_revs))return n(l.createError(l.UNKNOWN_ERROR,"function_clause"))
r=t.open_revs
for(var s=0;s<r.length;s++){var a=r[s]
if("string"!=typeof a||!/^\d+-/.test(a))return n(l.createError(l.INVALID_REV))}o()}}),b.prototype.getAttachment=i.adapterFun("getAttachment",function(e,t,n,r){var i=this
n instanceof Function&&(r=n,n={}),this._get(e,n,function(o,s){return o?r(o):s.doc._attachments&&s.doc._attachments[t]?(n.ctx=s.ctx,n.binary=!0,void i._getAttachment(e,t,s.doc._attachments[t],n,r)):r(l.createError(l.MISSING_DOC))})}),b.prototype.allDocs=i.adapterFun("allDocs",function(e,t){if("function"==typeof e&&(t=e,e={}),e.skip=void 0!==e.skip?e.skip:0,e.start_key&&(e.startkey=e.start_key),e.end_key&&(e.endkey=e.end_key),"keys"in e){if(!Array.isArray(e.keys))return t(new TypeError("options.keys must be an array"))
var n=["startkey","endkey","key"].filter(function(t){return t in e})[0]
if(n)return void t(l.createError(l.QUERY_PARSE_ERROR,"Query parameter `"+n+"` is not compatible with multi-get"))
if(!i.isRemote(this))return function(e,t,n){var r="limit"in t?t.keys.slice(t.skip,t.limit+t.skip):t.skip>0?t.keys.slice(t.skip):t.keys
if(t.descending&&r.reverse(),!r.length)return e._allDocs({limit:0},n)
var o={offset:t.skip}
return a.all(r.map(function(n){var r=i.assign({key:n,deleted:"ok"},t)
return["limit","skip","keys"].forEach(function(e){delete r[e]}),new a(function(t,i){e._allDocs(r,function(e,r){if(e)return i(e)
o.total_rows=r.total_rows,t(r.rows[0]||{key:n,error:"not_found"})})})})).then(function(e){return o.rows=e,o})}(this,e,t)}return this._allDocs(e,t)}),b.prototype.changes=function(e,t){return"function"==typeof e&&(t=e,e={}),new p(this,e,t)},b.prototype.close=i.adapterFun("close",function(e){return this._closed=!0,this.emit("closed"),this._close(e)}),b.prototype.info=i.adapterFun("info",function(e){var t=this
this._info(function(n,r){if(n)return e(n)
r.db_name=r.db_name||t.name,r.auto_compaction=!(!t.auto_compaction||i.isRemote(t)),r.adapter=t.adapter,e(null,r)})}),b.prototype.id=i.adapterFun("id",function(e){return this._id(e)}),b.prototype.type=function(){return"function"==typeof this._type?this._type():this.adapter},b.prototype.bulkDocs=i.adapterFun("bulkDocs",function(e,t,n){if("function"==typeof t&&(n=t,t={}),t=t||{},Array.isArray(e)&&(e={docs:e}),!e||!e.docs||!Array.isArray(e.docs))return n(l.createError(l.MISSING_BULK_DOCS))
for(var r=0;r<e.docs.length;++r)if("object"!=typeof e.docs[r]||Array.isArray(e.docs[r]))return n(l.createError(l.NOT_AN_OBJECT))
var o
if(e.docs.forEach(function(e){e._attachments&&Object.keys(e._attachments).forEach(function(t){o=o||function(e){return"_"===e.charAt(0)&&e+" is not a valid attachment name, attachment names cannot start with '_'"}(t),e._attachments[t].content_type||i.guardedConsole("warn","Attachment",t,"on document",e._id,"is missing content_type")})}),o)return n(l.createError(l.BAD_REQUEST,o))
"new_edits"in t||(t.new_edits=!("new_edits"in e)||e.new_edits)
var s=this
t.new_edits||i.isRemote(s)||e.docs.sort(m),function(e){for(var t=0;t<e.length;t++){var n=e[t]
if(n._deleted)delete n._attachments
else if(n._attachments)for(var r=Object.keys(n._attachments),o=0;o<r.length;o++){var s=r[o]
n._attachments[s]=i.pick(n._attachments[s],["data","digest","content_type","length","revpos","stub"])}}}(e.docs)
var a=e.docs.map(function(e){return e._id})
return this._bulkDocs(e,t,function(e,r){if(e)return n(e)
if(t.new_edits||(r=r.filter(function(e){return e.error})),!i.isRemote(s))for(var o=0,u=r.length;o<u;o++)r[o].id=r[o].id||a[o]
n(null,r)})}),b.prototype.registerDependentDatabase=i.adapterFun("registerDependentDatabase",function(e,t){var n=new this.constructor(e,this.__opts)
i.upsert(this,"_local/_pouch_dependentDbs",function(t){return t.dependentDbs=t.dependentDbs||{},!t.dependentDbs[e]&&(t.dependentDbs[e]=!0,t)}).then(function(){t(null,{db:n})}).catch(t)}),b.prototype.destroy=i.adapterFun("destroy",function(e,t){"function"==typeof e&&(t=e,e={})
var n=this,r=!("use_prefix"in n)||n.use_prefix
function o(){n._destroy(e,function(e,r){if(e)return t(e)
n._destroyed=!0,n.emit("destroyed"),t(null,r||{ok:!0})})}if(i.isRemote(n))return o()
n.get("_local/_pouch_dependentDbs",function(e,i){if(e)return 404!==e.status?t(e):o()
var s=i.dependentDbs,u=n.constructor,c=Object.keys(s).map(function(e){var t=r?e.replace(new RegExp("^"+u.prefix),""):e
return new u(t,n.__opts).destroy()})
a.all(c).then(o,t)})}),_.prototype.execute=function(){var e
if(this.failed)for(;e=this.queue.shift();)e(this.failed)
else for(;e=this.queue.shift();)e()},_.prototype.fail=function(e){this.failed=e,this.execute()},_.prototype.ready=function(e){this.isReady=!0,this.db=e,this.execute()},_.prototype.addTask=function(e){this.queue.push(e),this.failed&&this.execute()}
s(w,b),w.adapters={},w.preferredAdapters=[],w.prefix="_pouch_"
var k=new u.EventEmitter;(function(e){Object.keys(u.EventEmitter.prototype).forEach(function(t){"function"==typeof u.EventEmitter.prototype[t]&&(e[t]=k[t].bind(k))})
var t=e._destructionListeners=new o.Map
e.on("destroyed",function(e){t.get(e).forEach(function(e){e()}),t.delete(e)})})(w),w.adapter=function(e,t,n){t.valid()&&(w.adapters[e]=t,n&&w.preferredAdapters.push(e))},w.plugin=function(e){if("function"==typeof e)e(w)
else{if("object"!=typeof e||0===Object.keys(e).length)throw new Error('Invalid plugin: got "'+e+'", expected an object or a function')
Object.keys(e).forEach(function(t){w.prototype[t]=e[t]})}return this.__defaults&&(w.__defaults=i.assign({},this.__defaults)),w},w.defaults=function(e){function t(e,n){if(!(this instanceof t))return new t(e,n)
n=n||{},e&&"object"==typeof e&&(e=(n=e).name,delete n.name),n=i.assign({},t.__defaults,n),w.call(this,e,n)}return s(t,w),t.preferredAdapters=w.preferredAdapters.slice(),Object.keys(w).forEach(function(e){e in t||(t[e]=w[e])}),t.__defaults=i.assign({},this.__defaults,e),t}
w.plugin(d),w.plugin(h),w.version="6.2.0",t.exports=w},{argsarray:1,events:164,inherits:21,"pouchdb-changes-filter":81,"pouchdb-collections":87,"pouchdb-debug":90,"pouchdb-errors":94,"pouchdb-merge":122,"pouchdb-promise":89,"pouchdb-utils":132}],89:[function(e,t,n){arguments[4][58][0].apply(n,arguments)},{dup:58,lie:39}],90:[function(e,t,n){"use strict"
var r,i=(r=e("debug"))&&"object"==typeof r&&"default"in r?r.default:r
t.exports=function(e){e.debug=i
var t={}
e.on("debug",function(e){var n=e[0],r=e.slice(1)
t[n]||(t[n]=i("pouchdb:"+n)),t[n].apply(null,r)})}},{debug:91}],91:[function(e,t,n){(function(r){function i(){try{return n.storage.debug}catch(e){}if(void 0!==r&&"env"in r)return r.env.DEBUG}(n=t.exports=e("./debug")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},n.formatArgs=function(e){var t=this.useColors
if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),!t)return
var r="color: "+this.color
e.splice(1,0,r,"color: inherit")
var i=0,o=0
e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(i++,"%c"===e&&(o=i))}),e.splice(o,0,r)},n.save=function(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(t){}},n.load=i,n.useColors=function(){if("undefined"!=typeof window&&window&&void 0!==window.process&&"renderer"===window.process.type)return!0
return"undefined"!=typeof document&&document&&"WebkitAppearance"in document.documentElement.style||"undefined"!=typeof window&&window&&window.console&&(console.firebug||console.exception&&console.table)||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},n.enable(i())}).call(this,e("_process"))},{"./debug":92,_process:170}],92:[function(e,t,n){var r
function i(e){function t(){if(t.enabled){var e=t,i=+new Date,o=i-(r||i)
e.diff=o,e.prev=r,e.curr=i,r=i
for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a]
s[0]=n.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O")
var u=0
s[0]=s[0].replace(/%([a-zA-Z%])/g,function(t,r){if("%%"===t)return t
u++
var i=n.formatters[r]
if("function"==typeof i){var o=s[u]
t=i.call(e,o),s.splice(u,1),u--}return t}),n.formatArgs.call(e,s),(t.log||n.log||console.log.bind(console)).apply(e,s)}}return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=function(e){var t,r=0
for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0
return n.colors[Math.abs(r)%n.colors.length]}(e),"function"==typeof n.init&&n.init(t),t}(n=t.exports=i.debug=i.default=i).coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){n.enable("")},n.enable=function(e){n.save(e),n.names=[],n.skips=[]
for(var t=(e||"").split(/[\s,]+/),r=t.length,i=0;i<r;i++)t[i]&&("-"===(e=t[i].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){var t,r
for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1
for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0
return!1},n.humanize=e("ms"),n.names=[],n.skips=[],n.formatters={}},{ms:93}],93:[function(e,t,n){var r=1e3,i=60*r,o=60*i,s=24*o,a=365.25*s
function u(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}t.exports=function(e,t){t=t||{}
var n,c=typeof e
if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>1e4)return
var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e)
if(!t)return
var n=parseFloat(t[1])
switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*a
case"days":case"day":case"d":return n*s
case"hours":case"hour":case"hrs":case"hr":case"h":return n*o
case"minutes":case"minute":case"mins":case"min":case"m":return n*i
case"seconds":case"second":case"secs":case"sec":case"s":return n*r
case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n
default:return}}(e)
if("number"===c&&!1===isNaN(e))return t.long?u(n=e,s,"day")||u(n,o,"hour")||u(n,i,"minute")||u(n,r,"second")||n+" ms":function(e){if(e>=s)return Math.round(e/s)+"d"
if(e>=o)return Math.round(e/o)+"h"
if(e>=i)return Math.round(e/i)+"m"
if(e>=r)return Math.round(e/r)+"s"
return e+"ms"}(e)
throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],94:[function(e,t,n){"use strict"
var r
function i(e,t,n){Error.call(this,n),this.status=e,this.name=t,this.message=n,this.error=!0}Object.defineProperty(n,"__esModule",{value:!0}),((r=e("inherits"))&&"object"==typeof r&&"default"in r?r.default:r)(i,Error),i.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})}
var o=new i(401,"unauthorized","Name or password is incorrect."),s=new i(400,"bad_request","Missing JSON list of 'docs'"),a=new i(404,"not_found","missing"),u=new i(409,"conflict","Document update conflict"),c=new i(400,"bad_request","_id field must contain a string"),f=new i(412,"missing_id","_id is required for puts"),l=new i(400,"bad_request","Only reserved document ids may start with underscore."),d=new i(412,"precondition_failed","Database not open"),h=new i(500,"unknown_error","Database encountered an unknown error"),p=new i(500,"badarg","Some query argument is invalid"),g=new i(400,"invalid_request","Request was invalid"),v=new i(400,"query_parse_error","Some query parameter is invalid"),y=new i(500,"doc_validation","Bad special document member"),m=new i(400,"bad_request","Something wrong with the request"),b=new i(400,"bad_request","Document must be a JSON object"),_=new i(404,"not_found","Database not found"),w=new i(500,"indexed_db_went_bad","unknown"),k=new i(500,"web_sql_went_bad","unknown"),E=new i(500,"levelDB_went_went_bad","unknown"),S=new i(403,"forbidden","Forbidden by design doc validate_doc_update function"),x=new i(400,"bad_request","Invalid rev format"),j=new i(412,"file_exists","The database could not be created, the file already exists."),O=new i(412,"missing_stub","A pre-existing attachment stub wasn't found"),A=new i(413,"invalid_url","Provided URL is invalid")
n.UNAUTHORIZED=o,n.MISSING_BULK_DOCS=s,n.MISSING_DOC=a,n.REV_CONFLICT=u,n.INVALID_ID=c,n.MISSING_ID=f,n.RESERVED_ID=l,n.NOT_OPEN=d,n.UNKNOWN_ERROR=h,n.BAD_ARG=p,n.INVALID_REQUEST=g,n.QUERY_PARSE_ERROR=v,n.DOC_VALIDATION=y,n.BAD_REQUEST=m,n.NOT_AN_OBJECT=b,n.DB_MISSING=_,n.WSQ_ERROR=k,n.LDB_ERROR=E,n.FORBIDDEN=S,n.INVALID_REV=x,n.FILE_EXISTS=j,n.MISSING_STUB=O,n.IDB_ERROR=w,n.INVALID_URL=A,n.createError=function(e,t){function n(t){for(var n in e)"function"!=typeof e[n]&&(this[n]=e[n])
void 0!==t&&(this.reason=t)}return n.prototype=i.prototype,new n(t)},n.generateErrorFromResponse=function(e){if("object"!=typeof e){var t=e;(e=h).data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}},{inherits:21}],95:[function(e,t,n){"use strict"
for(var r={},i=["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],o=0;o<i.length;o++){var s=i[o]
r["[object "+s+"]"]=s.toLowerCase()}var a=r.toString,u=r.hasOwnProperty
function c(e){return null===e?String(e):"object"==typeof e||"function"==typeof e?r[a.call(e)]||"object":typeof e}function f(e){if(!e||"object"!==c(e)||e.nodeType||function(e){return null!==e&&e===e.window}(e))return!1
try{if(e.constructor&&!u.call(e,"constructor")&&!u.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var t
for(t in e);return void 0===t||u.call(e,t)}function l(e){return"function"===c(e)}var d=Array.isArray||function(e){return"array"===c(e)}
function h(e,t,n){var r,i,o,s,a,u,c,h=t[0]||{},p=1,g=t.length,v=!1,y=/\d+/
for("boolean"==typeof h&&(v=h,h=t[1]||{},p=2),"object"==typeof h||l(h)||(h={}),g===p&&(h=this,--p);p<g;p++)if(null!=(r=t[p]))for(i in c=d(r),r)if(!(i in Object.prototype)){if(c&&!y.test(i))continue
if(o=h[i],h===(s=r[i]))continue
v&&s&&(f(s)||(a=d(s)))?(a?(a=!1,u=o&&d(o)?o:[]):u=o&&f(o)?o:{},e.push({args:[v,u,s],result:{container:h,key:i}})):void 0!==s&&(d(r)&&l(s)||(h[i]=s))}n.container[n.key]=h}t.exports=function(){for(var e=[],t=-1,n=arguments.length,r=new Array(n);++t<n;)r[t]=arguments[t]
var i,o={}
for(e.push({args:r,result:{container:o,key:"key"}});i=e.pop();)h(e,i.args,i.result)
return o.key}},{}],96:[function(e,t,n){"use strict"
var r=e("./upsert"),i=e("./utils"),o=i.Promise
function s(e){if(!e)return"undefined"
switch(typeof e){case"function":case"string":return e.toString()
default:return JSON.stringify(e)}}t.exports=function(e){var t=e.db,n=e.viewName,a=e.map,u=e.reduce,c=e.temporary,f=e.pluginName,l=s(a)+s(u)+"undefined"
if(!c&&t._cachedViews){var d=t._cachedViews[l]
if(d)return o.resolve(d)}return t.info().then(function(e){var o=e.db_name+"-mrview-"+(c?"temp":i.MD5(l))
return r(t,"_local/"+f,function(e){e.views=e.views||{}
var t=n;-1===t.indexOf("/")&&(t=n+"/"+n)
var r=e.views[t]=e.views[t]||{}
if(!r[o])return r[o]=!0,e}).then(function(){return t.registerDependentDatabase(o).then(function(e){var n=e.db
n.auto_compaction=!0
var r={name:o,db:n,sourceDB:t,adapter:t.adapter,mapFun:a,reduceFun:u}
return r.db.get("_local/lastSeq").catch(function(e){if(404!==e.status)throw e}).then(function(e){return r.seq=e?e.seq:0,c||(t._cachedViews=t._cachedViews||{},t._cachedViews[l]=r,r.db.on("destroyed",function(){delete t._cachedViews[l]})),r})})})})}},{"./upsert":99,"./utils":100}],97:[function(e,t,n){(function(n){"use strict"
var r=e("pouchdb-collate"),i=e("./taskqueue"),o=r.collate,s=r.toIndexableString,a=r.normalizeKey,u=e("./create-view")
"undefined"!=typeof console&&"function"==typeof console.log&&Function.prototype.bind.call(console.log,console)
var c=e("./utils"),f=c.Promise,l={},d=new i,h=50
function p(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0
try{Error.captureStackTrace(this,p)}catch(t){}}function g(e){this.status=404,this.name="not_found",this.message=e,this.error=!0
try{Error.captureStackTrace(this,g)}catch(t){}}function v(e){return-1===e.indexOf("/")?[e,e]:e.split("/")}function y(e,t){var n=o(e.key,t.key)
return 0!==n?n:o(e.value,t.value)}function m(e,t,n){return n=n||0,"number"==typeof t?e.slice(n,t+n):n>0?e.slice(n):e}function b(e){var t=e.value
return t&&"object"==typeof t&&t._id||e.id}function _(e,t,n){try{return{output:t.apply(null,n)}}catch(r){return function(e,t){try{e.emit("error",t)}catch(n){console.error("The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),console.error(t)}}(e,r),{error:r}}}function w(e,t){var n=e.descending?"endkey":"startkey",r=e.descending?"startkey":"endkey"
if(void 0!==e[n]&&void 0!==e[r]&&o(e[n],e[r])>0)throw new p("No rows can match your key range, reverse your start_key and end_key or set {descending : true}")
if(t.reduce&&!1!==e.reduce){if(e.include_docs)throw new p("{include_docs:true} is invalid for reduce")
if(e.keys&&e.keys.length>1&&!e.group&&!e.group_level)throw new p("Multi-key fetches for reduce views must use {group: true}")}if(e.group_level){if("number"!=typeof e.group_level)throw new p('Invalid value for integer: "'+e.group_level+'"')
if(e.group_level<0)throw new p('Invalid value for positive integer: "'+e.group_level+'"')}}function k(e){return function(t){if(404===t.status)return e
throw t}}c.inherits(p,Error),c.inherits(g,Error),t.exports=function(e){var t=e.name,p=e.mapper,E=e.reducer,S=e.ddocValidator
function x(e,t,n){var r="_local/doc_"+e,i={_id:r,keys:[]},o=n[e],s=o.indexableKeysToKeyValues
return(function(e){return 1===e.length&&/^1-/.test(e[0].rev)}(o.changes)?f.resolve(i):t.db.get(r).catch(k(i))).then(function(e){return function(e){return e.keys.length?t.db.allDocs({keys:e.keys,include_docs:!0}):f.resolve({rows:[]})}(e).then(function(t){return function(e,t){for(var n=[],r={},i=0,o=t.rows.length;i<o;i++){var a=t.rows[i].doc
if(a&&(n.push(a),r[a._id]=!0,a._deleted=!s[a._id],!a._deleted)){var u=s[a._id]
"value"in u&&(a.value=u.value)}}var f=Object.keys(s)
return f.forEach(function(e){if(!r[e]){var t={_id:e},i=s[e]
"value"in i&&(t.value=i.value),n.push(t)}}),e.keys=c.uniq(f.concat(e.keys)),n.push(e),n}(e,t)})})}function j(e){var t="string"==typeof e?e:e.name,n=l[t]
return n||(n=l[t]=new i),n}function O(e){return c.sequentialize(j(e),function(){return function(e){var t,n,r=p(e.mapFun,function(e,r){var i={id:n._id,key:a(e)}
null!=r&&(i.value=a(r)),t.push(i)}),u=e.seq||0
function l(t,n){return function(){return function(e,t,n){return e.db.get("_local/lastSeq").catch(k({_id:"_local/lastSeq",seq:0})).then(function(r){var i=Object.keys(t)
return f.all(i.map(function(n){return x(n,e,t)})).then(function(t){var i=c.flatten(t)
return r.seq=n,i.push(r),e.db.bulkDocs({docs:i})})})}(e,t,n)}}var d=new i
return new f(function(i,a){function c(){d.finish().then(function(){e.seq=u,i()})}(function i(){e.sourceDB.changes({conflicts:!0,include_docs:!0,style:"all_docs",since:u,limit:h}).on("complete",function(a){var f=a.results
if(!f.length)return c()
for(var p={},g=0,v=f.length;g<v;g++){var m=f[g]
if("_"!==m.doc._id[0]){t=[],(n=m.doc)._deleted||_(e.sourceDB,r,[n]),t.sort(y)
for(var b,w={},k=0,E=t.length;k<E;k++){var S=t[k],x=[S.key,S.id]
0===o(S.key,b)&&x.push(k)
var j=s(x)
w[j]=S,b=S.key}p[m.doc._id]={indexableKeysToKeyValues:w,changes:m.changes}}u=m.seq}return d.add(l(p,u)),f.length<h?c():i()}).on("error",function(e){a(e)})})()})}(e)})()}function A(e,t){return c.sequentialize(j(e),function(){return function(e,t){var n,i=e.reduceFun&&!1!==t.reduce,a=t.skip||0
function u(t){return t.include_docs=!0,e.db.allDocs(t).then(function(e){return n=e.total_rows,e.rows.map(function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"]
if(!(t<n||t>n))return e.doc.value}var i=r.parseIndexableString(e.doc._id)
return{key:i[0],id:i[1],value:"value"in e.doc?e.doc.value:null}})})}function l(r){var s
if(s=i?function(e,t,n){0===n.group_level&&delete n.group_level
var r=n.group||n.group_level,i=E(e.reduceFun),s=[],a=n.group_level
t.forEach(function(e){var t=s[s.length-1],n=r?e.key:null
if(r&&Array.isArray(n)&&"number"==typeof a&&(n=n.length>a?n.slice(0,a):n),t&&0===o(t.key[0][0],n))return t.key.push([n,e.id]),void t.value.push(e.value)
s.push({key:[[n,e.id]],value:[e.value]})})
for(var u=0,c=s.length;u<c;u++){var f=s[u],l=_(e.sourceDB,i,[f.key,f.value,!1])
if(l.error&&/BuiltInError/.test(l.error.constructor))throw l.error
f.value=l.error?null:l.output,f.key=f.key[0][0]}return{rows:m(s,n.limit,n.skip)}}(e,r,t):{total_rows:n,offset:a,rows:r},t.include_docs){var u=c.uniq(r.map(b))
return e.sourceDB.allDocs({keys:u,include_docs:!0,conflicts:t.conflicts,attachments:t.attachments,binary:t.binary}).then(function(e){var t={}
return e.rows.forEach(function(e){e.doc&&(t["$"+e.id]=e.doc)}),r.forEach(function(e){var n=b(e),r=t["$"+n]
r&&(e.doc=r)}),s})}return s}if(void 0===t.keys||t.keys.length||(t.limit=0,delete t.keys),void 0!==t.keys){var d=t.keys,h=d.map(function(e){var t={startkey:s([e]),endkey:s([e,{}])}
return u(t)})
return f.all(h).then(function(e){return e.reduce(function(e,t){return e.concat(t)})}).then(l)}var p={descending:t.descending}
if(void 0!==t.startkey&&(p.startkey=t.descending?s([t.startkey,{}]):s([t.startkey])),void 0!==t.endkey){var g=!1!==t.inclusive_end
t.descending&&(g=!g),p.endkey=s(g?[t.endkey,{}]:[t.endkey])}if(void 0!==t.key){var v=s([t.key]),y=s([t.key,{}])
p.descending?(p.endkey=v,p.startkey=y):(p.startkey=v,p.endkey=y)}return i||("number"==typeof t.limit&&(p.limit=t.limit),p.skip=a),u(p).then(l)}(e,t)})()}return{query:function(e,r,i){var o=this
"function"==typeof r&&(i=r,r={}),r=c.extend(!0,{},r),"function"==typeof e&&(e={map:e})
var s=f.resolve().then(function(){return function(e,r,i){if("string"!=typeof r){w(i,r)
var o={db:e,viewName:"temp_view/temp_view",map:r.map,reduce:r.reduce,temporary:!0,pluginName:t}
return d.add(function(){return u(o).then(function(e){return c.fin(O(e).then(function(){return A(e,i)}),function(){return e.db.destroy()})})}),d.finish()}var s=r,a=v(s),f=a[0],l=a[1]
return e.get("_design/"+f).then(function(r){var o=r.views&&r.views[l]
if(!o)throw new g("ddoc "+r._id+" has no view named "+l)
S(r,l),w(i,o)
var a={db:e,viewName:s,map:o.map,reduce:o.reduce,pluginName:t}
return u(a).then(function(e){return"ok"===i.stale||"update_after"===i.stale?("update_after"===i.stale&&n.nextTick(function(){O(e)}),A(e,i)):O(e).then(function(){return A(e,i)})})})}(o,e,r)})
return c.promisedCallback(s,i),s},viewCleanup:c.callbackify(function(){return function(e){return e.get("_local/"+t).then(function(t){var n={}
Object.keys(t.views).forEach(function(e){var t=v(e),r="_design/"+t[0],i=t[1]
n[r]=n[r]||{},n[r][i]=!0})
var r={keys:Object.keys(n),include_docs:!0}
return e.allDocs(r).then(function(r){var i={}
r.rows.forEach(function(e){var r=e.key.substring(8)
Object.keys(n[e.key]).forEach(function(n){var o=r+"/"+n
t.views[o]||(o=n)
var s=Object.keys(t.views[o]),a=e.doc&&e.doc.views&&e.doc.views[n]
s.forEach(function(e){i[e]=i[e]||a})})})
var o=Object.keys(i).filter(function(e){return!i[e]}).map(function(t){return c.sequentialize(j(t),function(){return new e.constructor(t,e.__opts).destroy()})()})
return f.all(o).then(function(){return{ok:!0}})})},k({ok:!0}))}(this)})}}}).call(this,e("_process"))},{"./create-view":96,"./taskqueue":98,"./utils":100,_process:170,"pouchdb-collate":85}],98:[function(e,t,n){"use strict"
var r=e("./utils").Promise
function i(){this.promise=new r(function(e){e()})}i.prototype.add=function(e){return this.promise=this.promise.catch(function(){}).then(function(){return e()}),this.promise},i.prototype.finish=function(){return this.promise},t.exports=i},{"./utils":100}],99:[function(e,t,n){"use strict"
var r=e("pouchdb-upsert").upsert
t.exports=function(e,t,n){return r.apply(e,[t,n])}},{"pouchdb-upsert":129}],100:[function(e,t,n){(function(t){"use strict"
n.Promise=e("pouchdb-promise"),n.inherits=e("inherits"),n.extend=e("pouchdb-extend")
var r=e("argsarray")
n.promisedCallback=function(e,n){return n&&e.then(function(e){t.nextTick(function(){n(null,e)})},function(e){t.nextTick(function(){n(e)})}),e},n.callbackify=function(e){return r(function(t){var r=t.pop(),i=e.apply(this,t)
return"function"==typeof r&&n.promisedCallback(i,r),i})},n.fin=function(e,t){return e.then(function(e){var n=t()
return"function"==typeof n.then?n.then(function(){return e}):e},function(e){var n=t()
if("function"==typeof n.then)return n.then(function(){throw e})
throw e})},n.sequentialize=function(e,t){return function(){var n=arguments,r=this
return e.add(function(){return t.apply(r,n)})}},n.flatten=function(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n])
return t},n.uniq=function(e){for(var t={},n=0,r=e.length;n<r;n++)t["$"+e[n]]=!0
var i=Object.keys(t),o=new Array(i.length)
for(n=0,r=i.length;n<r;n++)o[n]=i[n].substring(1)
return o}
var i=e("crypto"),o=e("spark-md5")
n.MD5=function(e){return t.browser?o.hash(e):i.createHash("md5").update(e).digest("hex")}}).call(this,e("_process"))},{_process:170,argsarray:1,crypto:160,inherits:21,"pouchdb-extend":95,"pouchdb-promise":123,"spark-md5":114}],101:[function(e,t,n){"use strict"
var r=e("../../massageCreateIndexRequest")
n.createIndex=function(e,t,n){t=r(t),e.request({method:"POST",url:"_index",body:t},n)},n.find=function(e,t,n){e.request({method:"POST",url:"_find",body:t},n)},n.getIndexes=function(e,t){e.request({method:"GET",url:"_index"},t)},n.deleteIndex=function(e,t,n){var r=t.ddoc,i=t.type||"json",o=t.name
if(!r)return n(new Error("you must provide an index's ddoc"))
if(!o)return n(new Error("you must provide an index's name"))
var s="_index/"+[r,i,o].map(encodeURIComponent).join("/")
e.request({method:"DELETE",url:s},n)}},{"../../massageCreateIndexRequest":112}],102:[function(e,t,n){"use strict"
var r=e("./utils"),i=e("../../abstract-mapreduce"),o=r.parseField
function s(e,t){var n=function(e){for(var t=0,n=e.length;t<n;t++)if(-1!==e[t].indexOf("."))return!1
return!0}(e),r=1===e.length
return n?r?function(e,t){return function(n){t(n[e])}}(e[0],t):function(e,t){return function(n){for(var r=[],i=0,o=e.length;i<o;i++)r.push(n[e[i]])
t(r)}}(e,t):r?function(e,t){var n=o(e)
return function(e){for(var r=e,i=0,o=n.length;i<o;i++)if(!(r=r[n[i]]))return
t(r)}}(e[0],t):function(e,t){return function(n){for(var r=[],i=0,s=e.length;i<s;i++){for(var a=o(e[i]),u=n,c=0,f=a.length;c<f&&(u=u[a[c]]);c++);r.push(u)}t(r)}}(e,t)}var a=i({name:"indexes",mapper:function(e,t){return s(Object.keys(e.fields),t)},reducer:function(){throw new Error("reduce not supported")},ddocValidator:function(e,t){var n=e.views[t]
if(!n.map||!n.map.fields)throw new Error("ddoc "+e._id+" with view "+t+" doesn't have map.fields defined. maybe it wasn't created by this plugin?")}})
t.exports=a},{"../../abstract-mapreduce":97,"./utils":110}],103:[function(e,t,n){"use strict"
var r=e("../../../utils"),i=r.log,o=e("pouchdb-upsert"),s=e("../abstract-mapper"),a=e("../utils"),u=a.validateIndex,c=a.massageIndexDef,f=e("../../../massageCreateIndexRequest")
t.exports=function(e,t){t=f(t)
var n=r.clone(t.index)
t.index=c(t.index),u(t.index)
var a=r.MD5(JSON.stringify(t)),l=t.name||"idx-"+a,d=t.ddoc||"idx-"+a,h="_design/"+d,p=!1,g=!1
return i("creating index",h),function(e,t,n){return o.upsert.call(e,t,n)}(e,h,function(e){return e._rev&&"query"!==e.language&&(p=!0),e.language="query",e.views=e.views||{},!(g=!!e.views[l])&&(e.views[l]={map:{fields:r.mergeObjects(t.index.fields)},reduce:"_count",options:{def:n}},e)}).then(function(){if(p)throw new Error('invalid language for ddoc with id "'+h+'" (should be "query")')}).then(function(){var t=d+"/"+l
return s.query.call(e,t,{limit:0,reduce:!1}).then(function(){return{id:h,name:l,result:g?"exists":"created"}})})}},{"../../../massageCreateIndexRequest":112,"../../../utils":113,"../abstract-mapper":102,"../utils":110,"pouchdb-upsert":129}],104:[function(e,t,n){"use strict"
var r=e("../abstract-mapper"),i=e("../../../abstract-mapreduce/upsert")
t.exports=function(e,t){if(!t.ddoc)throw new Error("you must supply an index.ddoc when deleting")
if(!t.name)throw new Error("you must supply an index.name when deleting")
var n=t.ddoc,o=t.name
return i(e,n,function(e){return 1===Object.keys(e.views).length&&e.views[o]?{_id:n,_deleted:!0}:(delete e.views[o],e)}).then(function(){return r.viewCleanup.apply(e)}).then(function(){return{ok:!0}})}},{"../../../abstract-mapreduce/upsert":99,"../abstract-mapper":102}],105:[function(e,t,n){"use strict"
var r=e("is-array"),i=e("pouchdb-collate").collate,o=e("../utils"),s=o.isCombinationalField,a=o.getKey,u=o.getValue,c=o.parseField,f=e("../../../utils"),l=f.getFieldFromDoc
function d(e,t,n){return n.every(function(n){if(function(e){return/^_design\//.test(e._id)}(e))return!1
var r=t[n],i=c(n),o=l(e,i)
return s(n)?function(e,t,n){if("$or"===e)return t.some(function(e){return d(n,e,Object.keys(e))})
if("$not"===e)return!d(n,t,Object.keys(t))
return!t.find(function(e){return d(n,e,Object.keys(e))})}(n,r,e):h(r,e,i,o)})}function h(e,t,n,r){return!e||Object.keys(e).every(function(i){var o=e[i]
return function(e,t,n,r,i){if(!y[e])throw new Error('unknown operator "'+e+'" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type or $all')
return y[e](t,n,r,i)}(i,t,o,n,r)})}function p(e){return null!=e}function g(e){return void 0!==e}function v(e,t){return t.some(function(t){return e instanceof Array?e.indexOf(t)>-1:e===t})}var y={$elemMatch:function(e,t,n,i){return!!r(i)&&(0!==i.length&&("object"==typeof i[0]?i.some(function(e){return d(e,t,Object.keys(t))}):i.some(function(r){return h(t,e,n,r)})))},$eq:function(e,t,n,r){return g(r)&&0===i(r,t)},$gte:function(e,t,n,r){return g(r)&&i(r,t)>=0},$gt:function(e,t,n,r){return g(r)&&i(r,t)>0},$lte:function(e,t,n,r){return g(r)&&i(r,t)<=0},$lt:function(e,t,n,r){return g(r)&&i(r,t)<0},$exists:function(e,t,n,r){return t?g(r):!g(r)},$mod:function(e,t,n,r){return p(r)&&function(e,t){var n=t[0],r=t[1]
if(0===n)throw new Error("Bad divisor, cannot divide by zero")
if(parseInt(n,10)!==n)throw new Error("Divisor is not an integer")
if(parseInt(r,10)!==r)throw new Error("Modulus is not an integer")
return parseInt(e,10)===e&&e%n===r}(r,t)},$ne:function(e,t,n,r){return t.every(function(e){return 0!==i(r,e)})},$in:function(e,t,n,r){return p(r)&&v(r,t)},$nin:function(e,t,n,r){return p(r)&&!v(r,t)},$size:function(e,t,n,r){return p(r)&&function(e,t){return e.length===t}(r,t)},$all:function(e,t,n,i){return r(i)&&function(e,t){return t.every(function(t){return e.indexOf(t)>-1})}(i,t)},$regex:function(e,t,n,r){return p(r)&&function(e,t){return new RegExp(t).test(e)}(r,t)},$type:function(e,t,n,r){return function(e,t){switch(t){case"null":return null===e
case"boolean":return"boolean"==typeof e
case"number":return"number"==typeof e
case"string":return"string"==typeof e
case"array":return e instanceof Array
case"object":return"[object Object]"==={}.toString.call(e)}throw new Error(t+" not supported as a type.Please use one of object, string, array, number, boolean or null.")}(r,t)}}
t.exports=function(e,t,n){if(e=e.filter(function(e){return d(e.doc,t.selector,n)}),t.sort){var r=function(e){function t(t){return e.map(function(e){var n=a(e),r=c(n)
return l(t,r)})}return function(e,n){var r=t(e.doc),o=t(n.doc),s=i(r,o)
return 0!==s?s:f.compare(e.doc._id,n.doc._id)}}(t.sort)
e=e.sort(r),"string"!=typeof t.sort[0]&&"desc"===u(t.sort[0])&&(e=e.reverse())}if("limit"in t||"skip"in t){var o=t.skip||0,s=("limit"in t?t.limit:e.length)+o
e=e.slice(o,s)}return e}},{"../../../utils":113,"../utils":110,"is-array":23,"pouchdb-collate":85}],106:[function(e,t,n){"use strict"
var r=e("../../../utils"),i=r.clone,o=e("../get-indexes"),s=e("pouchdb-collate").collate,a=e("../abstract-mapper"),u=e("./query-planner"),c=e("../utils"),f=e("./in-memory-filter"),l=c.massageSelector,d=c.massageSort,h=c.getValue,p=c.validateFindRequest,g=c.validateSort,v=c.reverseOptions,y=c.filterInclusiveStart,m=r.Promise
t.exports=function(e,t){return t.selector&&(t.selector=l(t.selector)),t.sort&&(t.sort=d(t.sort)),p(t),o(e).then(function(n){var o=u(t,n.indexes),c=o.index
g(t,c)
var l=r.extend(!0,{include_docs:!0,reduce:!1},o.queryOpts)
return"startkey"in l&&"endkey"in l&&s(l.startkey,l.endkey)>0?{docs:[]}:(t.sort&&"string"!=typeof t.sort[0]&&"desc"===h(t.sort[0])&&(l.descending=!0,l=v(l)),o.inMemoryFields.length||("limit"in t&&(l.limit=t.limit),"skip"in t&&(l.skip=t.skip)),m.resolve().then(function(){if("_all_docs"===c.name)return function(e,t){var n=i(t)
return n.descending?("endkey"in n&&"string"!=typeof n.endkey&&(n.endkey=""),"startkey"in n&&"string"!=typeof n.startkey&&(n.limit=0)):("startkey"in n&&"string"!=typeof n.startkey&&(n.startkey=""),"endkey"in n&&"string"!=typeof n.endkey&&(n.limit=0)),"key"in n&&"string"!=typeof n.key&&(n.limit=0),e.allDocs(n)}(e,l)
var t,n=(t=c).ddoc.substring(8)+"/"+t.name
return a.query.call(e,n,l)}).then(function(e){!1===l.inclusive_start&&(e.rows=y(e.rows,l.startkey,c)),o.inMemoryFields.length&&(e.rows=f(e.rows,t,o.inMemoryFields))
var n={docs:e.rows.map(function(e){var n=e.doc
return t.fields?r.pick(n,t.fields):n})}
return c.defaultUsed&&(n.warning="no matching index found, create an index to optimize query time"),n}))})}},{"../../../utils":113,"../abstract-mapper":102,"../get-indexes":108,"../utils":110,"./in-memory-filter":105,"./query-planner":107,"pouchdb-collate":85}],107:[function(e,t,n){"use strict"
var r=e("../../../utils"),i=r.log,o=e("../utils"),s=o.getKey,a=o.getUserFields,u=null,c={"￿":{}}
function f(e,t){for(var n=e.def.fields.map(s),r=0,i=n.length;r<i;r++){if(t===n[r])return!0}return!1}function l(e,t){var n=e[t]
return"$eq"!==s(n)}function d(e,t){var n=t.def.fields.map(s)
return e.slice().sort(function(e,t){var i=n.indexOf(e),o=n.indexOf(t)
return-1===i&&(i=Number.MAX_VALUE),-1===o&&(o=Number.MAX_VALUE),r.compare(i,o)})}function h(e,t,n,i){var o=r.flatten(e,function(e,t,n){for(var r=!1,i=0,o=(n=d(n,e)).length;i<o;i++){var s=n[i]
if(r||!f(e,s))return n.slice(i)
i<o-1&&l(t,s)&&(r=!0)}return[]}(t,n,i),function(e){var t=[]
return Object.keys(e).forEach(function(n){var r=e[n]
Object.keys(r).forEach(function(e){"$ne"===e&&t.push(n)})}),t}(n))
return d(r.uniq(o),t)}var p=["$eq","$gt","$gte","$lt","$lte"]
function g(e){return-1===p.indexOf(e)}function v(e,t,n,i){var o=e.def.fields.map(s)
return!!function(e,t,n){if(t){var i=r.oneArrayIsStrictSubArrayOfOther(t,e),o=r.oneArrayIsSubArrayOfOther(n,e)
return i&&o}return r.oneSetIsSubArrayOfOther(n,e)}(o,t,n)&&function(e,t){var n=t[e[0]]
return void 0===n||!!Object.keys(n).some(function(e){return!g(e)})&&!(1===Object.keys(n).length&&"$ne"===s(n))}(o,i)}function y(e,t,n,i){var o=function(e,t,n,r){return r.reduce(function(r,i){return v(i,n,t,e)&&r.push(i),r},[])}(e,t,n,i)
if(0===o.length){var a=i[0]
return a.defaultUsed=!0,a}if(1===o.length)return o[0]
var u=r.arrayToObject(t)
return r.max(o,function(e){for(var t=e.def.fields.map(s),n=0,r=0,i=t.length;r<i;r++){var o=t[r]
u[o]&&n++}return n})}function m(e,t){switch(e){case"$eq":return{startkey:t,endkey:t}
case"$lte":return{endkey:t}
case"$gte":return{startkey:t}
case"$lt":return{endkey:t,inclusive_end:!1}
case"$gt":return{startkey:t,inclusive_start:!1}}}function b(e,t){return t.defaultUsed?function(e){return{queryOpts:{startkey:null},inMemoryFields:[Object.keys(e)]}}(e):1===t.def.fields.length?function(e,t){var n,i=s(t.def.fields[0]),o=e[i]||{},a=[]
return Object.keys(o).forEach(function(e){if(g(e))a.push(i)
else{var t=function(e,t){switch(e){case"$eq":return{key:t}
case"$lte":return{endkey:t}
case"$gte":return{startkey:t}
case"$lt":return{endkey:t,inclusive_end:!1}
case"$gt":return{startkey:t,inclusive_start:!1}}}(e,o[e])
n=n?r.mergeObjects([n,t]):t}}),{queryOpts:n,inMemoryFields:a}}(e,t):function(e,t){var n,i,o=t.def.fields.map(s),a=[],f=[],l=[]
function d(e){!1!==n&&f.push(u),!1!==i&&l.push(c),a=o.slice(e)}for(var h=0,p=o.length;h<p;h++){var v=e[o[h]]
if(!v){d(h)
break}if(h>0){if(Object.keys(v).some(g)){d(h)
break}var y="$gt"in v||"$gte"in v||"$lt"in v||"$lte"in v,b=Object.keys(e[o[h-1]]),_=r.arrayEquals(b,["$eq"]),w=r.arrayEquals(b,Object.keys(v))
if(y&&!_&&!w){d(h)
break}}for(var k=Object.keys(v),E=null,S=0;S<k.length;S++){var x=k[S],j=m(x,v[x])
E=E?r.mergeObjects([E,j]):j}f.push("startkey"in E?E.startkey:u),l.push("endkey"in E?E.endkey:c),"inclusive_start"in E&&(n=E.inclusive_start),"inclusive_end"in E&&(i=E.inclusive_end)}var O={startkey:f,endkey:l}
return void 0!==n&&(O.inclusive_start=n),void 0!==i&&(O.inclusive_end=i),{queryOpts:O,inMemoryFields:a}}(e,t)}t.exports=function(e,t){i("planning query",e)
var n=e.selector,r=e.sort,o=a(n,r),s=o.fields,u=y(n,s,o.sortOrder,t),c=b(n,u),f={queryOpts:c.queryOpts,index:u,inMemoryFields:h(c.inMemoryFields,u,n,s)}
return i("query plan",f),f}},{"../../../utils":113,"../utils":110}],108:[function(e,t,n){"use strict"
var r=e("../../../utils"),i=e("../utils").massageIndexDef
t.exports=function(e){return e.allDocs({startkey:"_design/",endkey:"_design/￿",include_docs:!0}).then(function(e){var t={indexes:[{ddoc:null,name:"_all_docs",type:"special",def:{fields:[{_id:"asc"}]}}]}
return t.indexes=r.flatten(t.indexes,e.rows.filter(function(e){return"query"===e.doc.language}).map(function(e){return(void 0!==e.doc.views?Object.keys(e.doc.views):[]).map(function(t){var n=e.doc.views[t]
return{ddoc:e.id,name:t,type:"json",def:i(n.options.def)}})})),t.indexes.sort(function(e,t){return r.compare(e.name,t.name)}),t.total_rows=t.indexes.length,t})}},{"../../../utils":113,"../utils":110}],109:[function(e,t,n){"use strict"
var r=e("../../utils").callbackify
n.createIndex=r(e("./create-index")),n.find=r(e("./find")),n.getIndexes=r(e("./get-indexes")),n.deleteIndex=r(e("./delete-index"))},{"../../utils":113,"./create-index":103,"./delete-index":104,"./find":106,"./get-indexes":108}],110:[function(e,t,n){"use strict"
var r=e("../../utils"),i=e("pouchdb-collate")
function o(e){return Object.keys(e)[0]}function s(e){return e[o(e)]}var a=["$or","$nor","$not"]
function u(e){return a.indexOf(e)>-1}function c(e){var t={}
return e.forEach(function(e){Object.keys(e).forEach(function(n){var r=e[n]
if("object"!=typeof r&&(r={$eq:r}),u(n))r instanceof Array?t[n]=r.map(function(e){return c([e])}):t[n]=c([r])
else{var i=t[n]=t[n]||{}
Object.keys(r).forEach(function(e){var t=r[e]
return"$gt"===e||"$gte"===e?function(e,t,n){void 0===n.$eq&&(void 0!==n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):void 0!==n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t)}(e,t,i):"$lt"===e||"$lte"===e?function(e,t,n){void 0===n.$eq&&(void 0!==n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):void 0!==n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t)}(e,t,i):"$ne"===e?function(e,t){"$ne"in t?t.$ne.push(e):t.$ne=[e]}(t,i):"$eq"===e?function(e,t){delete t.$gt,delete t.$gte,delete t.$lt,delete t.$lte,delete t.$ne,t.$eq=e}(t,i):void(i[e]=t)})}})}),t}function f(e,t){for(var n=[],r=0;r<t.def.fields.length;r++){var i=o(t.def.fields[r])
n.push(e[i])}return n}t.exports={getKey:o,getValue:s,massageSort:function(e){if(!Array.isArray(e))throw new Error("invalid sort json - should be an array")
return e.map(function(e){if("string"==typeof e){var t={}
return t[e]="asc",t}return e})},massageSelector:function(e){var t=r.clone(e),n=!1
"$and"in t&&(t=c(t.$and),n=!0),"$not"in t&&(t.$not=c([t.$not]))
for(var i=Object.keys(t),o=0;o<i.length;o++){var s=i[o],a=t[s]
"object"!=typeof a||null===a?a={$eq:a}:"$ne"in a&&!n&&(a.$ne=[a.$ne]),t[s]=a}return t},validateIndex:function(e){var t=e.fields.filter(function(e){return"asc"===s(e)})
if(0!==t.length&&t.length!==e.fields.length)throw new Error("unsupported mixed sorting")},validateFindRequest:function(e){if("object"!=typeof e.selector)throw new Error("you must provide a selector when you find()")},validateSort:function(e,t){if(t.defaultUsed&&e.sort){var n=e.sort.filter(function(e){return"_id"!==Object.keys(e)[0]}).map(function(e){return Object.keys(e)[0]})
if(n.length>0)throw new Error('Cannot sort on field(s) "'+n.join(",")+'" when using the default index')}t.defaultUsed},reverseOptions:function(e){var t=r.clone(e)
return delete t.startkey,delete t.endkey,delete t.inclusive_start,delete t.inclusive_end,"endkey"in e&&(t.startkey=e.endkey),"startkey"in e&&(t.endkey=e.startkey),"inclusive_start"in e&&(t.inclusive_end=e.inclusive_start),"inclusive_end"in e&&(t.inclusive_start=e.inclusive_end),t},filterInclusiveStart:function(e,t,n){for(var r=n.def.fields,o=0,s=e.length;o<s;o++){var a=f(e[o].doc,n)
if(1===r.length)a=a[0]
else for(;a.length>t.length;)a.pop()
if(Math.abs(i.collate(a,t))>0)break}return o>0?e.slice(o):e},massageIndexDef:function(e){return e.fields=e.fields.map(function(e){if("string"==typeof e){var t={}
return t[e]="asc",t}return e}),e},parseField:r.parseField,getUserFields:function(e,t){var n,r=Object.keys(e),i=t?t.map(o):[]
return n=r.length>=i.length?r:i,0===i.length?{fields:n}:{fields:n=n.sort(function(e,t){var n=i.indexOf(e);-1===n&&(n=Number.MAX_VALUE)
var r=i.indexOf(t)
return-1===r&&(r=Number.MAX_VALUE),n<r?-1:n>r?1:0}),sortOrder:t.map(o)}},isCombinationalField:u}},{"../../utils":113,"pouchdb-collate":85}],111:[function(e,t,n){"use strict"
var r=e("./utils"),i=e("./adapters/http"),o=e("./adapters/local"),s={}
s.createIndex=r.toPromise(function(e,t){if("object"!=typeof e)return t(new Error("you must provide an index to create"));("http"===this.type()?i:o).createIndex(this,e,t)}),s.find=r.toPromise(function(e,t){if(void 0===t&&(t=e,e=void 0),"object"!=typeof e)return t(new Error("you must provide search parameters to find()"));("http"===this.type()?i:o).find(this,e,t)}),s.getIndexes=r.toPromise(function(e){("http"===this.type()?i:o).getIndexes(this,e)}),s.deleteIndex=r.toPromise(function(e,t){if("object"!=typeof e)return t(new Error("you must provide an index to delete"));("http"===this.type()?i:o).deleteIndex(this,e,t)}),t.exports=s,"undefined"!=typeof window&&window.PouchDB&&window.PouchDB.plugin(s)},{"./adapters/http":101,"./adapters/local":109,"./utils":113}],112:[function(e,t,n){"use strict"
var r=e("./utils").clone
t.exports=function(e){return(e=r(e)).index||(e.index={}),["type","name","ddoc"].forEach(function(t){e.index[t]&&(e[t]=e.index[t],delete e.index[t])}),e.fields&&(e.index.fields=e.fields,delete e.fields),e.type||(e.type="json"),e}},{"./utils":113}],113:[function(e,t,n){(function(t){"use strict"
var r=e("pouchdb-promise")
n.once=function(e){var t=!1
return n.getArguments(function(n){if(t)throw console.trace(),new Error("once called  more than once")
t=!0,e.apply(this,n)})},n.getArguments=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=-1;++r<t;)n[r]=arguments[r]
return e.call(this,n)}},n.toPromise=function(e){return n.getArguments(function(i){var o,s=this,a="function"==typeof i[i.length-1]&&i.pop()
a&&(o=function(e,n){t.nextTick(function(){a(e,n)})})
var u=new r(function(t,r){try{var o=n.once(function(e,n){e?r(e):t(n)})
i.push(o),e.apply(s,i)}catch(a){r(a)}})
return o&&u.then(function(e){o(null,e)},o),u.cancel=function(){return this},u})},n.inherits=e("inherits"),n.Promise=r,n.clone=function(e){return n.extend(!0,{},e)},n.extend=e("pouchdb-extend"),n.callbackify=function(e){return n.getArguments(function(t){var r=t.pop(),i=e.apply(this,t)
return n.promisedCallback(i,r),i})},n.promisedCallback=function(e,n){return e.then(function(e){t.nextTick(function(){n(null,e)})},function(e){t.nextTick(function(){n(e)})}),e}
var i=e("crypto"),o=e("spark-md5")
n.MD5=function(e){return t.browser?o.hash(e):i.createHash("md5").update(e).digest("hex")},n.flatten=n.getArguments(function(e){for(var t=[],r=0,i=e.length;r<i;r++){var o=e[r]
Array.isArray(o)?t=t.concat(n.flatten.apply(null,o)):t.push(o)}return t}),n.mergeObjects=function(e){for(var t={},r=0,i=e.length;r<i;r++)t=n.extend(!0,t,e[r])
return t},n.getFieldFromDoc=function(e,t){for(var n=e,r=0,i=t.length;r<i;r++){if(!(n=n[t[r]]))break}return n},n.setFieldInDoc=function(e,t,n){for(var r=0,i=t.length;r<i-1;r++){e=e[t[r]]={}}e[t[i-1]]=n},n.parseField=function(e){for(var t=[],n="",r=0,i=e.length;r<i;r++){var o=e[r]
"."===o?r>0&&"\\"===e[r-1]?n=n.substring(0,n.length-1)+".":(t.push(n),n=""):n+=o}return t.push(n),t},n.pick=function(e,t){for(var r={},i=0,o=t.length;i<o;i++){var s=n.parseField(t[i]),a=n.getFieldFromDoc(e,s)
void 0!==a&&n.setFieldInDoc(r,s,a)}return r},n.oneArrayIsSubArrayOfOther=function(e,t){for(var n=0,r=Math.min(e.length,t.length);n<r;n++)if(e[n]!==t[n])return!1
return!0},n.oneArrayIsStrictSubArrayOfOther=function(e,t){return!(e.length>t.length)&&n.oneArrayIsSubArrayOfOther(e,t)},n.oneSetIsSubArrayOfOther=function(e,t){e=e.slice()
for(var n=0,r=t.length;n<r;n++){var i=t[n]
if(!e.length)break
var o=e.indexOf(i)
if(-1===o)return!1
e.splice(o,1)}return!0},n.compare=function(e,t){return e<t?-1:e>t?1:0},n.arrayToObject=function(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n]]=!0
return t},n.max=function(e,t){for(var n=null,r=-1,i=0,o=e.length;i<o;i++){var s=e[i],a=t(s)
a>r&&(r=a,n=s)}return n},n.arrayEquals=function(e,t){if(e.length!==t.length)return!1
for(var n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1
return!0},n.uniq=function(e){for(var t={},n=0;n<e.length;n++)t["$"+e[n]]=!0
return Object.keys(t).map(function(e){return e.substring(1)})},n.log=e("debug")("pouchdb:find")}).call(this,e("_process"))},{_process:170,crypto:160,debug:5,inherits:21,"pouchdb-extend":95,"pouchdb-promise":123,"spark-md5":114}],114:[function(e,t,n){(function(e){if("object"==typeof n)t.exports=e()
else if("function"==typeof define&&define.amd)define(e)
else{var r
try{r=window}catch(i){r=self}r.SparkMD5=e()}})(function(e){"use strict"
var t=function(e,t){return e+t&4294967295},n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
function r(e,n,r,i,o,s){return n=t(t(n,e),t(i,s)),t(n<<o|n>>>32-o,r)}function i(e,t,n,i,o,s,a){return r(t&n|~t&i,e,t,o,s,a)}function o(e,t,n,i,o,s,a){return r(t&i|n&~i,e,t,o,s,a)}function s(e,t,n,i,o,s,a){return r(t^n^i,e,t,o,s,a)}function a(e,t,n,i,o,s,a){return r(n^(t|~i),e,t,o,s,a)}function u(e,n){var r=e[0],u=e[1],c=e[2],f=e[3]
r=i(r,u,c,f,n[0],7,-680876936),f=i(f,r,u,c,n[1],12,-389564586),c=i(c,f,r,u,n[2],17,606105819),u=i(u,c,f,r,n[3],22,-1044525330),r=i(r,u,c,f,n[4],7,-176418897),f=i(f,r,u,c,n[5],12,1200080426),c=i(c,f,r,u,n[6],17,-1473231341),u=i(u,c,f,r,n[7],22,-45705983),r=i(r,u,c,f,n[8],7,1770035416),f=i(f,r,u,c,n[9],12,-1958414417),c=i(c,f,r,u,n[10],17,-42063),u=i(u,c,f,r,n[11],22,-1990404162),r=i(r,u,c,f,n[12],7,1804603682),f=i(f,r,u,c,n[13],12,-40341101),c=i(c,f,r,u,n[14],17,-1502002290),r=o(r,u=i(u,c,f,r,n[15],22,1236535329),c,f,n[1],5,-165796510),f=o(f,r,u,c,n[6],9,-1069501632),c=o(c,f,r,u,n[11],14,643717713),u=o(u,c,f,r,n[0],20,-373897302),r=o(r,u,c,f,n[5],5,-701558691),f=o(f,r,u,c,n[10],9,38016083),c=o(c,f,r,u,n[15],14,-660478335),u=o(u,c,f,r,n[4],20,-405537848),r=o(r,u,c,f,n[9],5,568446438),f=o(f,r,u,c,n[14],9,-1019803690),c=o(c,f,r,u,n[3],14,-187363961),u=o(u,c,f,r,n[8],20,1163531501),r=o(r,u,c,f,n[13],5,-1444681467),f=o(f,r,u,c,n[2],9,-51403784),c=o(c,f,r,u,n[7],14,1735328473),r=s(r,u=o(u,c,f,r,n[12],20,-1926607734),c,f,n[5],4,-378558),f=s(f,r,u,c,n[8],11,-2022574463),c=s(c,f,r,u,n[11],16,1839030562),u=s(u,c,f,r,n[14],23,-35309556),r=s(r,u,c,f,n[1],4,-1530992060),f=s(f,r,u,c,n[4],11,1272893353),c=s(c,f,r,u,n[7],16,-155497632),u=s(u,c,f,r,n[10],23,-1094730640),r=s(r,u,c,f,n[13],4,681279174),f=s(f,r,u,c,n[0],11,-358537222),c=s(c,f,r,u,n[3],16,-722521979),u=s(u,c,f,r,n[6],23,76029189),r=s(r,u,c,f,n[9],4,-640364487),f=s(f,r,u,c,n[12],11,-421815835),c=s(c,f,r,u,n[15],16,530742520),r=a(r,u=s(u,c,f,r,n[2],23,-995338651),c,f,n[0],6,-198630844),f=a(f,r,u,c,n[7],10,1126891415),c=a(c,f,r,u,n[14],15,-1416354905),u=a(u,c,f,r,n[5],21,-57434055),r=a(r,u,c,f,n[12],6,1700485571),f=a(f,r,u,c,n[3],10,-1894986606),c=a(c,f,r,u,n[10],15,-1051523),u=a(u,c,f,r,n[1],21,-2054922799),r=a(r,u,c,f,n[8],6,1873313359),f=a(f,r,u,c,n[15],10,-30611744),c=a(c,f,r,u,n[6],15,-1560198380),u=a(u,c,f,r,n[13],21,1309151649)
r=a(r,u,c,f,n[4],6,-145523070),f=a(f,r,u,c,n[11],10,-1120210379),c=a(c,f,r,u,n[2],15,718787259),u=a(u,c,f,r,n[9],21,-343485551),e[0]=t(r,e[0]),e[1]=t(u,e[1]),e[2]=t(c,e[2]),e[3]=t(f,e[3])}function c(e){var t,n=[]
for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24)
return n}function f(e){var t,n=[]
for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24)
return n}function l(e){var t,n,r,i,o,s,a=e.length,f=[1732584193,-271733879,-1732584194,271733878]
for(t=64;t<=a;t+=64)u(f,c(e.substring(t-64,t)))
for(n=(e=e.substring(t-64)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=e.charCodeAt(t)<<(t%4<<3)
if(r[t>>2]|=128<<(t%4<<3),t>55)for(u(f,r),t=0;t<16;t+=1)r[t]=0
return i=(i=8*a).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),s=parseInt(i[1],16)||0,r[14]=o,r[15]=s,u(f,r),f}function d(e){var t,r=""
for(t=0;t<4;t+=1)r+=n[e>>8*t+4&15]+n[e>>8*t&15]
return r}function h(e){var t
for(t=0;t<e.length;t+=1)e[t]=d(e[t])
return e.join("")}function p(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function g(e){var t,n=[],r=e.length
for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16))
return String.fromCharCode.apply(String,n)}function v(){this.reset()}return"5d41402abc4b2a76b9719d911017c592"!==h(l("hello"))&&(t=function(e,t){var n=(65535&e)+(65535&t)
return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(n,r){var i,o,s,a,u=this.byteLength,c=t(n,u),f=u
return r!==e&&(f=t(r,u)),c>f?new ArrayBuffer(0):(i=f-c,o=new ArrayBuffer(i),s=new Uint8Array(o),a=new Uint8Array(this,c,i),s.set(a),o)}}(),v.prototype.append=function(e){return this.appendBinary(p(e)),this},v.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length
var t,n=this._buff.length
for(t=64;t<=n;t+=64)u(this._hash,c(this._buff.substring(t-64,t)))
return this._buff=this._buff.substring(t-64),this},v.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
for(t=0;t<i;t+=1)o[t>>2]|=r.charCodeAt(t)<<(t%4<<3)
return this._finish(o,i),n=h(this._hash),e&&(n=g(n)),this.reset(),n},v.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},v.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},v.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},v.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},v.prototype._finish=function(e,t){var n,r,i,o=t
if(e[o>>2]|=128<<(o%4<<3),o>55)for(u(this._hash,e),o=0;o<16;o+=1)e[o]=0
n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),r=parseInt(n[2],16),i=parseInt(n[1],16)||0,e[14]=r,e[15]=i,u(this._hash,e)},v.hash=function(e,t){return v.hashBinary(p(e),t)},v.hashBinary=function(e,t){var n=h(l(e))
return t?g(n):n},v.ArrayBuffer=function(){this.reset()},v.ArrayBuffer.prototype.append=function(e){var t,n,r,i,o,s=(n=this._buff.buffer,r=e,i=!0,(o=new Uint8Array(n.byteLength+r.byteLength)).set(new Uint8Array(n)),o.set(new Uint8Array(r),n.byteLength),i?o:o.buffer),a=s.length
for(this._length+=e.byteLength,t=64;t<=a;t+=64)u(this._hash,f(s.subarray(t-64,t)))
return this._buff=t-64<a?new Uint8Array(s.buffer.slice(t-64)):new Uint8Array(0),this},v.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
for(t=0;t<i;t+=1)o[t>>2]|=r[t]<<(t%4<<3)
return this._finish(o,i),n=h(this._hash),e&&(n=g(n)),this.reset(),n},v.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},v.ArrayBuffer.prototype.getState=function(){var e,t=v.prototype.getState.call(this)
return t.buff=(e=t.buff,String.fromCharCode.apply(null,new Uint8Array(e))),t},v.ArrayBuffer.prototype.setState=function(e){return e.buff=function(e,t){var n,r=e.length,i=new ArrayBuffer(r),o=new Uint8Array(i)
for(n=0;n<r;n+=1)o[n]=e.charCodeAt(n)
return t?o:i}(e.buff,!0),v.prototype.setState.call(this,e)},v.ArrayBuffer.prototype.destroy=v.prototype.destroy,v.ArrayBuffer.prototype._finish=v.prototype._finish,v.ArrayBuffer.hash=function(e,t){var n=h(function(e){var t,n,r,i,o,s,a=e.length,c=[1732584193,-271733879,-1732584194,271733878]
for(t=64;t<=a;t+=64)u(c,f(e.subarray(t-64,t)))
for(n=(e=t-64<a?e.subarray(t-64):new Uint8Array(0)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=e[t]<<(t%4<<3)
if(r[t>>2]|=128<<(t%4<<3),t>55)for(u(c,r),t=0;t<16;t+=1)r[t]=0
return i=(i=8*a).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),s=parseInt(i[1],16)||0,r[14]=o,r[15]=s,u(c,r),c}(new Uint8Array(e)))
return t?g(n):n},v})},{}],115:[function(e,t,n){"use strict"
var r,i=(r=e("pouchdb-promise"))&&"object"==typeof r&&"default"in r?r.default:r,o=e("pouchdb-md5"),s=e("pouchdb-collate")
t.exports=function(e,t,n){var r=n.doc_ids?n.doc_ids.sort(s.collate):"",a=n.filter?n.filter.toString():"",u="",c="",f=""
return n.selector&&(f=JSON.stringify(n.selector)),n.filter&&n.query_params&&(u=JSON.stringify(function(e){return Object.keys(e).sort(s.collate).reduce(function(t,n){return t[n]=e[n],t},{})}(n.query_params))),n.filter&&"_view"===n.filter&&(c=n.view.toString()),i.all([e.id(),t.id()]).then(function(e){var t=e[0]+e[1]+a+c+u+r+f
return new i(function(e){o.binaryMd5(t,e)})}).then(function(e){return"_local/"+(e=e.replace(/\//g,".").replace(/\+/g,"_"))})}},{"pouchdb-collate":116,"pouchdb-md5":121,"pouchdb-promise":117}],116:[function(e,t,n){arguments[4][57][0].apply(n,arguments)},{dup:57}],117:[function(e,t,n){arguments[4][58][0].apply(n,arguments)},{dup:58,lie:39}],118:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r,i=(r=e("vuvuzela"))&&"object"==typeof r&&"default"in r?r.default:r
n.safeJsonParse=function(e){try{return JSON.parse(e)}catch(t){return i.parse(e)}},n.safeJsonStringify=function(e){try{return JSON.stringify(e)}catch(t){return i.stringify(e)}}},{vuvuzela:156}],119:[function(e,t,n){"use strict"
function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(n,"__esModule",{value:!0})
var i=e("pouchdb-collections"),o=r(e("argsarray")),s=e("pouchdb-utils"),a=r(e("inherits"))
function u(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0
try{Error.captureStackTrace(this,u)}catch(t){}}function c(e){this.status=404,this.name="not_found",this.message=e,this.error=!0
try{Error.captureStackTrace(this,c)}catch(t){}}function f(e){this.status=500,this.name="invalid_value",this.message=e,this.error=!0
try{Error.captureStackTrace(this,f)}catch(t){}}function l(e,t){return t&&e.then(function(e){s.nextTick(function(){t(null,e)})},function(e){s.nextTick(function(){t(e)})}),e}a(u,Error),a(c,Error),a(f,Error),n.uniq=function(e){var t=new i.Set(e),n=new Array(t.size),r=-1
return t.forEach(function(e){n[++r]=e}),n},n.sequentialize=function(e,t){return function(){var n=arguments,r=this
return e.add(function(){return t.apply(r,n)})}},n.fin=function(e,t){return e.then(function(e){return t().then(function(){return e})},function(e){return t().then(function(){throw e})})},n.callbackify=function(e){return o(function(t){var n=t.pop(),r=e.apply(this,t)
return"function"==typeof n&&l(r,n),r})},n.promisedCallback=l,n.mapToKeysArray=function(e){var t=new Array(e.size),n=-1
return e.forEach(function(e,r){t[++n]=r}),t},n.QueryParseError=u,n.NotFoundError=c,n.BuiltInError=f},{argsarray:1,inherits:21,"pouchdb-collections":87,"pouchdb-utils":132}],120:[function(e,t,n){"use strict"
var r,i=e("pouchdb-utils"),o=e("pouchdb-mapreduce-utils"),s=(r=e("pouchdb-abstract-mapreduce"))&&"object"==typeof r&&"default"in r?r.default:r
function a(e){var t="builtin "+e+" function requires map values to be numbers or number arrays"
return new o.BuiltInError(t)}function u(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e[n]
if("number"!=typeof i){if(!Array.isArray(i))throw a("_sum")
t="number"==typeof t?[t]:t
for(var o=0,s=i.length;o<s;o++){var u=i[o]
if("number"!=typeof u)throw a("_sum")
void 0===t[o]?t.push(u):t[o]+=u}}else"number"==typeof t?t+=i:t[0]+=i}return t}var c=i.guardedConsole.bind(null,"log"),f=Array.isArray,l=JSON.parse
function d(e,t){return i.scopeEval("return ("+e.replace(/;\s*$/,"")+");",{emit:t,sum:u,log:c,isArray:f,toJSON:l})}var h={_sum:function(e,t){return u(t)},_count:function(e,t){return t.length},_stats:function(e,t){return{sum:u(t),min:Math.min.apply(null,t),max:Math.max.apply(null,t),count:t.length,sumsqr:function(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e[n]
t+=i*i}return t}(t)}}}
var p=s("mrviews",function(e,t){if("function"==typeof e&&2===e.length){var n=e
return function(e){return n(e,t)}}return d(e.toString(),t)},function(e){return h[e]?h[e]:d(e.toString())},function(e,t){var n=e.views&&e.views[t]
if("string"!=typeof n.map)throw new o.NotFoundError("ddoc "+e._id+" has no string view named "+t+", instead found object of type: "+typeof n.map)})
var g={query:function(e,t,n){return p.query.call(this,e,t,n)},viewCleanup:function(e){return p.viewCleanup.call(this,e)}}
t.exports=g},{"pouchdb-abstract-mapreduce":56,"pouchdb-mapreduce-utils":119,"pouchdb-utils":132}],121:[function(e,t,n){(function(t){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r,i=e("pouchdb-binary-utils"),o=(r=e("spark-md5"))&&"object"==typeof r&&"default"in r?r.default:r,s=t.setImmediate||t.setTimeout,a=32768
function u(e,t,n,r,o){(n>0||r<t.size)&&(t=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.slice(t,n)}(t,n,r)),i.readAsArrayBuffer(t,function(t){e.append(t),o()})}function c(e,t,n,r,i){(n>0||r<t.length)&&(t=t.substring(n,r)),e.appendBinary(t),i()}n.binaryMd5=function(e,t){var n="string"==typeof e,r=n?e.length:e.size,f=Math.min(a,r),l=Math.ceil(r/f),d=0,h=n?new o:new o.ArrayBuffer,p=n?c:u
function g(){s(y)}function v(){var e=function(e){return i.btoa(e)}(h.end(!0))
t(e),h.destroy()}function y(){var t=d*f,n=t+f
p(h,e,t,n,++d<l?g:v)}y()},n.stringMd5=function(e){return o.hash(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"pouchdb-binary-utils":80,"spark-md5":143}],122:[function(e,t,n){"use strict"
function r(e){for(var t,n,r,i,o=e.rev_tree.slice();i=o.pop();){var s=i.ids,a=s[2],u=i.pos
if(a.length)for(var c=0,f=a.length;c<f;c++)o.push({pos:u+1,ids:a[c]})
else{var l=!!s[1].deleted,d=s[0]
t&&!(r!==l?r:n!==u?n<u:t<d)||(t=d,n=u,r=l)}}return n+"-"+t}function i(e,t){for(var n,r=e.slice();n=r.pop();)for(var i=n.pos,o=n.ids,s=o[2],a=t(0===s.length,i,o[0],n.ctx,o[1]),u=0,c=s.length;u<c;u++)r.push({pos:i+1,ids:s[u],ctx:a})}function o(e,t){return e.pos-t.pos}function s(e){var t=[]
i(e,function(e,n,r,i,o){e&&t.push({rev:n+"-"+r,pos:n,opts:o})}),t.sort(o).reverse()
for(var n=0,r=t.length;n<r;n++)delete t[n].pos
return t}function a(e){for(var t,n=[],r=e.slice();t=r.pop();){var i=t.pos,o=t.ids,s=o[0],a=o[1],u=o[2],c=0===u.length,f=t.history?t.history.slice():[]
f.push({id:s,opts:a}),c&&n.push({pos:i+1-f.length,ids:f})
for(var l=0,d=u.length;l<d;l++)r.push({pos:i+1,ids:u[l],history:f})}return n.reverse()}function u(e,t){return e.pos-t.pos}function c(e,t,n){var r=function(e,t,n){for(var r,i=0,o=e.length;i<o;)n(e[r=i+o>>>1],t)<0?i=r+1:o=r
return i}(e,t,n)
e.splice(r,0,t)}function f(e,t){for(var n,r,i=t,o=e.length;i<o;i++){var s=e[i],a=[s.id,s.opts,[]]
r?(r[2].push(a),r=a):n=r=a}return n}function l(e,t){return e[0]<t[0]?-1:1}function d(e,t){for(var n=[{tree1:e,tree2:t}],r=!1;n.length>0;){var i=n.pop(),o=i.tree1,s=i.tree2;(o[1].status||s[1].status)&&(o[1].status="available"===o[1].status||"available"===s[1].status?"available":"missing")
for(var a=0;a<s[2].length;a++)if(o[2][0]){for(var u=!1,f=0;f<o[2].length;f++)o[2][f][0]===s[2][a][0]&&(n.push({tree1:o[2][f],tree2:s[2][a]}),u=!0)
u||(r="new_branch",c(o[2],s[2][a],l))}else r="new_leaf",o[2][0]=s[2][a]}return{conflicts:r,tree:e}}function h(e,t,n){var r,i=[],o=!1,s=!1
if(!e.length)return{tree:[t],conflicts:"new_leaf"}
for(var a=0,c=e.length;a<c;a++){var f=e[a]
if(f.pos===t.pos&&f.ids[0]===t.ids[0])r=d(f.ids,t.ids),i.push({pos:f.pos,ids:r.tree}),o=o||r.conflicts,s=!0
else if(!0!==n){var l=f.pos<t.pos?f:t,h=f.pos<t.pos?t:f,p=h.pos-l.pos,g=[],v=[]
for(v.push({ids:l.ids,diff:p,parent:null,parentIdx:null});v.length>0;){var y=v.pop()
if(0!==y.diff)for(var m=y.ids[2],b=0,_=m.length;b<_;b++)v.push({ids:m[b],diff:y.diff-1,parent:y.ids,parentIdx:b})
else y.ids[0]===h.ids[0]&&g.push(y)}var w=g[0]
w?(r=d(w.ids,h.ids),w.parent[2][w.parentIdx]=r.tree,i.push({pos:l.pos,ids:l.ids}),o=o||r.conflicts,s=!0):i.push(f)}else i.push(f)}return s||i.push(t),i.sort(u),{tree:i,conflicts:o||"internal_node"}}function p(e){return e.ids}Object.defineProperty(n,"__esModule",{value:!0}),n.collectConflicts=function(e){for(var t=r(e),n=s(e.rev_tree),i=[],o=0,a=n.length;o<a;o++){var u=n[o]
u.rev===t||u.opts.deleted||i.push(u.rev)}return i},n.collectLeaves=s,n.compactTree=function(e){var t=[]
return i(e.rev_tree,function(e,n,r,i,o){"available"!==o.status||e||(t.push(n+"-"+r),o.status="missing")}),t},n.isDeleted=function(e,t){t||(t=r(e))
for(var n,i=t.substring(t.indexOf("-")+1),o=e.rev_tree.map(p);n=o.pop();){if(n[0]===i)return!!n[1].deleted
o=o.concat(n[2])}},n.isLocalId=function(e){return/^_local/.test(e)},n.merge=function(e,t,n){var r=h(e,t),o=function(e,t){for(var n,r,o=a(e),s=0,u=o.length;s<u;s++){var c,l=o[s],d=l.ids
if(d.length>t){n||(n={})
var p=d.length-t
c={pos:l.pos+p,ids:f(d,p)}
for(var g=0;g<p;g++){var v=l.pos+g+"-"+d[g].id
n[v]=!0}}else c={pos:l.pos,ids:f(d,0)}
r=r?h(r,c,!0).tree:[c]}return n&&i(r,function(e,t,r){delete n[t+"-"+r]}),{tree:r,revs:n?Object.keys(n):[]}}(r.tree,n)
return{tree:o.tree,stemmedRevs:o.revs,conflicts:r.conflicts}},n.revExists=function(e,t){for(var n,r=e.slice(),i=t.split("-"),o=parseInt(i[0],10),s=i[1];n=r.pop();){if(n.pos===o&&n.ids[0]===s)return!0
for(var a=n.ids[2],u=0,c=a.length;u<c;u++)r.push({pos:n.pos+1,ids:a[u]})}return!1},n.rootToLeaf=a,n.traverseRevTree=i,n.winningRev=r,n.latest=function(e,t){for(var n,r=t.rev_tree.slice();n=r.pop();){var i=n.pos,o=n.ids,s=o[0],a=o[1],u=o[2],c=0===u.length,f=n.history?n.history.slice():[]
if(f.push({id:s,pos:i,opts:a}),c)for(var l=0,d=f.length;l<d;l++){var h=f[l]
if(h.pos+"-"+h.id===e)return i+"-"+s}for(var p=0,g=u.length;p<g;p++)r.push({pos:i+1,ids:u[p],history:f})}throw new Error("Unable to resolve latest revision for id "+t.id+", rev "+e)}},{}],123:[function(e,t,n){"use strict"
var r,i=(r=e("lie"))&&"object"==typeof r&&"default"in r?r.default:r,o="function"==typeof Promise?Promise:i
t.exports=o},{lie:124}],124:[function(e,t,n){"use strict"
var r=e("immediate")
function i(){}var o={},s=["REJECTED"],a=["FULFILLED"],u=["PENDING"]
function c(e){if("function"!=typeof e)throw new TypeError("resolver must be a function")
this.state=u,this.queue=[],this.outcome=void 0,e!==i&&h(this,e)}function f(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function l(e,t,n){r(function(){var r
try{r=t(n)}catch(i){return o.reject(e,i)}r===e?o.reject(e,new TypeError("Cannot resolve promise with itself")):o.resolve(e,r)})}function d(e){var t=e&&e.then
if(e&&"object"==typeof e&&"function"==typeof t)return function(){t.apply(e,arguments)}}function h(e,t){var n=!1
function r(t){n||(n=!0,o.reject(e,t))}function i(t){n||(n=!0,o.resolve(e,t))}var s=p(function(){t(i,r)})
"error"===s.status&&r(s.value)}function p(e,t){var n={}
try{n.value=e(t),n.status="success"}catch(r){n.status="error",n.value=r}return n}t.exports=c,c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this
var n=new this.constructor(i)
this.state!==u?l(n,this.state===a?e:t,this.outcome):this.queue.push(new f(n,e,t))
return n},f.prototype.callFulfilled=function(e){o.resolve(this.promise,e)},f.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},f.prototype.callRejected=function(e){o.reject(this.promise,e)},f.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},o.resolve=function(e,t){var n=p(d,t)
if("error"===n.status)return o.reject(e,n.value)
var r=n.value
if(r)h(e,r)
else{e.state=a,e.outcome=t
for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},o.reject=function(e,t){e.state=s,e.outcome=t
for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t)
return e},c.resolve=function(e){if(e instanceof this)return e
return o.resolve(new this(i),e)},c.reject=function(e){var t=new this(i)
return o.reject(t,e)},c.all=function(e){var t=this
if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"))
var n=e.length,r=!1
if(!n)return this.resolve([])
var s=new Array(n),a=0,u=-1,c=new this(i)
for(;++u<n;)f(e[u],u)
return c
function f(e,i){t.resolve(e).then(function(e){s[i]=e,++a!==n||r||(r=!0,o.resolve(c,s))},function(e){r||(r=!0,o.reject(c,e))})}},c.race=function(e){var t=this
if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"))
var n=e.length,r=!1
if(!n)return this.resolve([])
var s=-1,a=new this(i)
for(;++s<n;)u=e[s],t.resolve(u).then(function(e){r||(r=!0,o.resolve(a,e))},function(e){r||(r=!0,o.reject(a,e))})
var u
return a}},{immediate:20}],125:[function(e,t,n){"use strict"
function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=r(e("pouchdb-promise")),o=e("pouchdb-utils"),s=r(e("pouchdb-checkpointer")),a=r(e("pouchdb-generate-replication-id")),u=e("pouchdb-errors"),c=e("events"),f=r(e("inherits"))
function l(e){return/^1-/.test(e)}function d(e,t){var n=Object.keys(t._attachments)
return i.all(n.map(function(n){return e.getAttachment(t._id,n,{rev:t._rev})}))}function h(e,t,n,r){n=o.clone(n)
var s=[],a=!0
function u(t){return e.allDocs({keys:t,include_docs:!0,conflicts:!0}).then(function(e){if(r.cancelled)throw new Error("cancelled")
e.rows.forEach(function(e){var t
e.deleted||!e.doc||!l(e.value.rev)||(t=e.doc,t._attachments&&Object.keys(t._attachments).length>0)||function(e){return e._conflicts&&e._conflicts.length>0}(e.doc)||(e.doc._conflicts&&delete e.doc._conflicts,s.push(e.doc),delete n[e.id])})})}return i.resolve().then(function(){var e=Object.keys(n).filter(function(e){var t=n[e].missing
return 1===t.length&&l(t[0])})
if(e.length>0)return u(e)}).then(function(){var u=function(e){var t=[]
return Object.keys(e).forEach(function(n){e[n].missing.forEach(function(e){t.push({id:n,rev:e})})}),{docs:t,revs:!0,latest:!0}}(n)
if(u.docs.length)return e.bulkGet(u).then(function(n){if(r.cancelled)throw new Error("cancelled")
return i.all(n.results.map(function(n){return i.all(n.docs.map(function(n){var r=n.ok
return n.error&&(a=!1),r&&r._attachments?function(e,t,n){var r=o.isRemote(t)&&!o.isRemote(e),s=Object.keys(n._attachments)
return r?e.get(n._id).then(function(r){return i.all(s.map(function(i){return function(e,t,n){return!e._attachments||!e._attachments[n]||e._attachments[n].digest!==t._attachments[n].digest}(r,n,i)?t.getAttachment(n._id,i):e.getAttachment(r._id,i)}))}).catch(function(e){if(404!==e.status)throw e
return d(t,n)}):d(t,n)}(t,e,r).then(function(e){var t=Object.keys(r._attachments)
return e.forEach(function(e,n){var i=r._attachments[t[n]]
delete i.stub,delete i.length,i.data=e}),r}):r}))})).then(function(e){s=s.concat(o.flatten(e).filter(Boolean))})})}).then(function(){return{ok:a,docs:s}})}var p=0
function g(e,t,n,r,c){var f,l,d=[],v={seq:0,changes:[],docs:[]},y=!1,m=!1,b=!1,_=0,w=n.continuous||n.live||!1,k=n.batch_size||100,E=n.batches_limit||10,S=!1,x=n.doc_ids,j=n.selector,O=[],A=o.uuid()
c=c||{ok:!0,start_time:new Date,docs_read:0,docs_written:0,doc_write_failures:0,errors:[]}
var C={}
function D(){return l?i.resolve():a(e,t,n).then(function(n){l=new s(e,t,n,r)})}function B(){if(O=[],0!==f.docs.length){var e=f.docs,i={timeout:n.timeout}
return t.bulkDocs({docs:e,new_edits:!1},i).then(function(t){if(r.cancelled)throw q(),new Error("cancelled")
var n=Object.create(null)
t.forEach(function(e){e.error&&(n[e.id]=e)})
var i=Object.keys(n).length
c.doc_write_failures+=i,c.docs_written+=e.length-i,e.forEach(function(e){var t=n[e._id]
if(t){if(c.errors.push(t),"unauthorized"!==t.name&&"forbidden"!==t.name)throw t
r.emit("denied",o.clone(t))}else O.push(e)})},function(t){throw c.doc_write_failures+=e.length,t})}}function L(){if(f.error)throw new Error("There was a problem getting docs.")
c.last_seq=_=f.seq
var e=o.clone(c)
return O.length&&(e.docs=O,r.emit("change",e)),y=!0,l.writeCheckpoint(f.seq,A).then(function(){if(y=!1,r.cancelled)throw q(),new Error("cancelled")
f=void 0,F()}).catch(function(e){throw z(e),e})}function I(){return h(e,t,f.diffs,r).then(function(e){f.error=!e.ok,e.docs.forEach(function(e){delete f.diffs[e._id],c.docs_read++,f.docs.push(e)})})}function R(){var e
r.cancelled||f||(0!==d.length?(f=d.shift(),(e={},f.changes.forEach(function(t){"_user/"!==t.id&&(e[t.id]=t.changes.map(function(e){return e.rev}))}),t.revsDiff(e).then(function(e){if(r.cancelled)throw q(),new Error("cancelled")
f.diffs=e})).then(I).then(B).then(L).then(R).catch(function(e){M("batch processing terminated with error",e)})):T(!0))}function T(e){0!==v.changes.length?(e||m||v.changes.length>=k)&&(d.push(v),v={seq:0,changes:[],docs:[]},"pending"!==r.state&&"stopped"!==r.state||(r.state="active",r.emit("active")),R()):0!==d.length||f||((w&&C.live||m)&&(r.state="pending",r.emit("paused")),m&&q())}function M(e,t){b||(t.message||(t.message=e),c.ok=!1,c.status="aborting",d=[],v={seq:0,changes:[],docs:[]},q(t))}function q(i){b||r.cancelled&&(c.status="cancelled",y)||(c.status=c.status||"complete",c.end_time=new Date,c.last_seq=_,b=!0,i?((i=u.createError(i)).result=c,"unauthorized"===i.name||"forbidden"===i.name?(r.emit("error",i),r.removeAllListeners()):function(e,t,n,r){if(!1===e.retry)return t.emit("error",n),void t.removeAllListeners()
if("function"!=typeof e.back_off_function&&(e.back_off_function=o.defaultBackOff),t.emit("requestError",n),"active"===t.state||"pending"===t.state){t.emit("paused",n),t.state="stopped"
var i=function(){e.current_back_off=p}
t.once("paused",function(){t.removeListener("active",i)}),t.once("active",i)}e.current_back_off=e.current_back_off||p,e.current_back_off=e.back_off_function(e.current_back_off),setTimeout(r,e.current_back_off)}(n,r,i,function(){g(e,t,n,r)})):(r.emit("complete",c),r.removeAllListeners()))}function N(e){if(r.cancelled)return q()
o.filterChange(n)(e)&&(v.seq=e.seq,v.changes.push(e),T(0===d.length&&C.live))}function P(e){if(S=!1,r.cancelled)return q()
if(e.results.length>0)C.since=e.last_seq,F(),T(!0)
else{var t=function(){w?(C.live=!0,F()):m=!0,T(!0)}
f||0!==e.results.length?t():(y=!0,l.writeCheckpoint(e.last_seq,A).then(function(){y=!1,c.last_seq=_=e.last_seq,t()}).catch(z))}}function $(e){if(S=!1,r.cancelled)return q()
M("changes rejected",e)}function F(){if(!S&&!m&&d.length<E){S=!0,r._changes&&(r.removeListener("cancel",r._abortChanges),r._changes.cancel()),r.once("cancel",i)
var t=e.changes(C).on("change",N)
t.then(o,o),t.then(P).catch($),n.retry&&(r._changes=t,r._abortChanges=i)}function i(){t.cancel()}function o(){r.removeListener("cancel",i)}}function U(){D().then(function(){if(!r.cancelled)return l.getCheckpoint().then(function(e){C={since:_=e,limit:k,batch_size:k,style:"all_docs",doc_ids:x,selector:j,return_docs:!0},n.filter&&("string"!=typeof n.filter?C.include_docs=!0:C.filter=n.filter),"heartbeat"in n&&(C.heartbeat=n.heartbeat),"timeout"in n&&(C.timeout=n.timeout),n.query_params&&(C.query_params=n.query_params),n.view&&(C.view=n.view),F()})
q()}).catch(function(e){M("getCheckpoint rejected with ",e)})}function z(e){y=!1,M("writeCheckpoint completed with error",e)}r.ready(e,t),r.cancelled?q():(r._addedListeners||(r.once("cancel",q),"function"==typeof n.complete&&(r.once("error",n.complete),r.once("complete",function(e){n.complete(null,e)})),r._addedListeners=!0),void 0===n.since?U():D().then(function(){return y=!0,l.writeCheckpoint(n.since,A)}).then(function(){y=!1,r.cancelled?q():(_=n.since,U())}).catch(z))}function v(){c.EventEmitter.call(this),this.cancelled=!1,this.state="pending"
var e=this,t=new i(function(t,n){e.once("complete",t),e.once("error",n)})
e.then=function(e,n){return t.then(e,n)},e.catch=function(e){return t.catch(e)},e.catch(function(){})}function y(e,t){var n=t.PouchConstructor
return"string"==typeof e?new n(e,t):e}function m(e,t,n,r){if("function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),n.doc_ids&&!Array.isArray(n.doc_ids))throw u.createError(u.BAD_REQUEST,"`doc_ids` filter parameter is not a list.")
n.complete=r,(n=o.clone(n)).continuous=n.continuous||n.live,n.retry="retry"in n&&n.retry,n.PouchConstructor=n.PouchConstructor||this
var i=new v(n)
return g(y(e,n),y(t,n),n,i),i}function b(e,t,n,r){return"function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),(n=o.clone(n)).PouchConstructor=n.PouchConstructor||this,new _(e=y(e,n),t=y(t,n),n,r)}function _(e,t,n,r){var s=this
this.canceled=!1
var a=n.push?o.assign({},n,n.push):n,u=n.pull?o.assign({},n,n.pull):n
function c(e){s.emit("change",{direction:"pull",change:e})}function f(e){s.emit("change",{direction:"push",change:e})}function l(e){s.emit("denied",{direction:"push",doc:e})}function d(e){s.emit("denied",{direction:"pull",doc:e})}function h(){s.pushPaused=!0,s.pullPaused&&s.emit("paused")}function p(){s.pullPaused=!0,s.pushPaused&&s.emit("paused")}function g(){s.pushPaused=!1,s.pullPaused&&s.emit("active",{direction:"push"})}function v(){s.pullPaused=!1,s.pushPaused&&s.emit("active",{direction:"pull"})}this.push=m(e,t,a),this.pull=m(t,e,u),this.pushPaused=!0,this.pullPaused=!0
var y={}
function b(e){return function(t,n){("change"===t&&(n===c||n===f)||"denied"===t&&(n===d||n===l)||"paused"===t&&(n===p||n===h)||"active"===t&&(n===v||n===g))&&(t in y||(y[t]={}),y[t][e]=!0,2===Object.keys(y[t]).length&&s.removeAllListeners(t))}}function _(e,t,n){-1==e.listeners(t).indexOf(n)&&e.on(t,n)}n.live&&(this.push.on("complete",s.pull.cancel.bind(s.pull)),this.pull.on("complete",s.push.cancel.bind(s.push))),this.on("newListener",function(e){"change"===e?(_(s.pull,"change",c),_(s.push,"change",f)):"denied"===e?(_(s.pull,"denied",d),_(s.push,"denied",l)):"active"===e?(_(s.pull,"active",v),_(s.push,"active",g)):"paused"===e&&(_(s.pull,"paused",p),_(s.push,"paused",h))}),this.on("removeListener",function(e){"change"===e?(s.pull.removeListener("change",c),s.push.removeListener("change",f)):"denied"===e?(s.pull.removeListener("denied",d),s.push.removeListener("denied",l)):"active"===e?(s.pull.removeListener("active",v),s.push.removeListener("active",g)):"paused"===e&&(s.pull.removeListener("paused",p),s.push.removeListener("paused",h))}),this.pull.on("removeListener",b("pull")),this.push.on("removeListener",b("push"))
var w=i.all([this.push,this.pull]).then(function(e){var t={push:e[0],pull:e[1]}
return s.emit("complete",t),r&&r(null,t),s.removeAllListeners(),t},function(e){if(s.cancel(),r?r(e):s.emit("error",e),s.removeAllListeners(),r)throw e})
this.then=function(e,t){return w.then(e,t)},this.catch=function(e){return w.catch(e)}}f(v,c.EventEmitter),v.prototype.cancel=function(){this.cancelled=!0,this.state="cancelled",this.emit("cancel")},v.prototype.ready=function(e,t){var n=this
function r(){n.cancel()}n._readyCalled||(n._readyCalled=!0,e.once("destroyed",r),t.once("destroyed",r),n.once("complete",function(){e.removeListener("destroyed",r),t.removeListener("destroyed",r)}))},f(_,c.EventEmitter),_.prototype.cancel=function(){this.canceled||(this.canceled=!0,this.push.cancel(),this.pull.cancel())},t.exports=function(e){e.replicate=m,e.sync=b,Object.defineProperty(e.prototype,"replicate",{get:function(){var e=this
return{from:function(t,n,r){return e.constructor.replicate(t,e,n,r)},to:function(t,n,r){return e.constructor.replicate(e,t,n,r)}}}}),e.prototype.sync=function(e,t,n){return this.constructor.sync(this,e,t,n)}}},{events:164,inherits:21,"pouchdb-checkpointer":82,"pouchdb-errors":94,"pouchdb-generate-replication-id":115,"pouchdb-promise":126,"pouchdb-utils":132}],126:[function(e,t,n){arguments[4][58][0].apply(n,arguments)},{dup:58,lie:39}],127:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r=e("pouchdb-utils"),i=e("pouchdb-collate")
function o(e,t){for(var n=e,r=0,i=t.length;r<i;r++){if(!(n=n[t[r]]))break}return n}function s(e,t){return e<t?-1:e>t?1:0}function a(e){for(var t=[],n="",r=0,i=e.length;r<i;r++){var o=e[r]
"."===o?r>0&&"\\"===e[r-1]?n=n.substring(0,n.length-1)+".":(t.push(n),n=""):n+=o}return t.push(n),t}var u=["$or","$nor","$not"]
function c(e){return u.indexOf(e)>-1}function f(e){return Object.keys(e)[0]}function l(e){return e[f(e)]}function d(e){var t={}
return e.forEach(function(e){Object.keys(e).forEach(function(n){var r=e[n]
if("object"!=typeof r&&(r={$eq:r}),c(n))r instanceof Array?t[n]=r.map(function(e){return d([e])}):t[n]=d([r])
else{var i=t[n]=t[n]||{}
Object.keys(r).forEach(function(e){var t=r[e]
return"$gt"===e||"$gte"===e?function(e,t,n){if(void 0!==n.$eq)return
void 0!==n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):void 0!==n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t}(e,t,i):"$lt"===e||"$lte"===e?function(e,t,n){if(void 0!==n.$eq)return
void 0!==n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):void 0!==n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t}(e,t,i):"$ne"===e?function(e,t){"$ne"in t?t.$ne.push(e):t.$ne=[e]}(t,i):"$eq"===e?function(e,t){delete t.$gt,delete t.$gte,delete t.$lt,delete t.$lte,delete t.$ne,t.$eq=e}(t,i):void(i[e]=t)})}})}),t}function h(e){var t=r.clone(e),n=!1
"$and"in t&&(t=d(t.$and),n=!0),["$or","$nor"].forEach(function(e){e in t&&t[e].forEach(function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n],i=e[r]
"object"==typeof i&&null!==i||(e[r]={$eq:i})}})}),"$not"in t&&(t.$not=d([t.$not]))
for(var i=Object.keys(t),o=0;o<i.length;o++){var s=i[o],a=t[s]
"object"!=typeof a||null===a?a={$eq:a}:"$ne"in a&&!n&&(a.$ne=[a.$ne]),t[s]=a}return t}function p(e){function t(t){return e.map(function(e){var n=a(f(e))
return o(t,n)})}return function(e,n){var r=t(e.doc),o=t(n.doc),a=i.collate(r,o)
return 0!==a?a:s(e.doc._id,n.doc._id)}}function g(e,t,n){if(e=e.filter(function(e){return v(e.doc,t.selector,n)}),t.sort){var r=p(t.sort)
e=e.sort(r),"string"!=typeof t.sort[0]&&"desc"===l(t.sort[0])&&(e=e.reverse())}if("limit"in t||"skip"in t){var i=t.skip||0,o=("limit"in t?t.limit:e.length)+i
e=e.slice(i,o)}return e}function v(e,t,n){return n.every(function(n){if(function(e){return/^_design\//.test(e._id)}(e))return!1
var r=t[n],i=a(n),s=o(e,i)
return c(n)?function(e,t,n){if("$or"===e)return t.some(function(e){return v(n,e,Object.keys(e))})
if("$not"===e)return!v(n,t,Object.keys(t))
return!t.find(function(e){return v(n,e,Object.keys(e))})}(n,r,e):y(r,e,i,s)})}function y(e,t,n,r){return!e||Object.keys(e).every(function(i){var o=e[i]
return function(e,t,n,r,i){if(!w[e])throw new Error('unknown operator "'+e+'" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type or $all')
return w[e](t,n,r,i)}(i,t,o,n,r)})}function m(e){return null!=e}function b(e){return void 0!==e}function _(e,t){return t.some(function(t){return e instanceof Array?e.indexOf(t)>-1:e===t})}var w={$elemMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.some(function(e){return v(e,t,Object.keys(t))}):r.some(function(r){return y(t,e,n,r)})))},$eq:function(e,t,n,r){return b(r)&&0===i.collate(r,t)},$gte:function(e,t,n,r){return b(r)&&i.collate(r,t)>=0},$gt:function(e,t,n,r){return b(r)&&i.collate(r,t)>0},$lte:function(e,t,n,r){return b(r)&&i.collate(r,t)<=0},$lt:function(e,t,n,r){return b(r)&&i.collate(r,t)<0},$exists:function(e,t,n,r){return t?b(r):!b(r)},$mod:function(e,t,n,r){return m(r)&&function(e,t){var n=t[0],r=t[1]
if(0===n)throw new Error("Bad divisor, cannot divide by zero")
if(parseInt(n,10)!==n)throw new Error("Divisor is not an integer")
if(parseInt(r,10)!==r)throw new Error("Modulus is not an integer")
return parseInt(e,10)===e&&e%n===r}(r,t)},$ne:function(e,t,n,r){return t.every(function(e){return 0!==i.collate(r,e)})},$in:function(e,t,n,r){return m(r)&&_(r,t)},$nin:function(e,t,n,r){return m(r)&&!_(r,t)},$size:function(e,t,n,r){return m(r)&&function(e,t){return e.length===t}(r,t)},$all:function(e,t,n,r){return Array.isArray(r)&&function(e,t){return t.every(function(t){return e.indexOf(t)>-1})}(r,t)},$regex:function(e,t,n,r){return m(r)&&function(e,t){return new RegExp(t).test(e)}(r,t)},$type:function(e,t,n,r){return function(e,t){switch(t){case"null":return null===e
case"boolean":return"boolean"==typeof e
case"number":return"number"==typeof e
case"string":return"string"==typeof e
case"array":return e instanceof Array
case"object":return"[object Object]"==={}.toString.call(e)}throw new Error(t+" not supported as a type.Please use one of object, string, array, number, boolean or null.")}(r,t)}}
n.massageSelector=h,n.matchesSelector=function(e,t){if("object"!=typeof t)throw"Selector error: expected a JSON object"
var n=g([{doc:e}],{selector:t=h(t)},Object.keys(t))
return n&&1===n.length},n.filterInMemoryFields=g,n.createFieldSorter=p,n.rowFilter=v,n.isCombinationalField=c,n.getKey=f,n.getValue=l,n.getFieldFromDoc=o,n.setFieldInDoc=function(e,t,n){for(var r=0,i=t.length;r<i-1;r++)e=e[t[r]]={}
e[t[i-1]]=n},n.compare=s,n.parseField=a},{"pouchdb-collate":128,"pouchdb-utils":132}],128:[function(e,t,n){arguments[4][57][0].apply(n,arguments)},{dup:57}],129:[function(e,t,n){"use strict"
var r=e("pouchdb-promise")
function i(e,t,n){return"string"!=typeof t?r.reject(new Error("doc id is required")):e.get(t).catch(function(e){if(404!==e.status)throw e
return{}}).then(function(r){var o=r._rev,s=n(r)
return s?(s._id=t,s._rev=o,function(e,t,n){return e.put(t).then(function(e){return{updated:!0,rev:e.rev}},function(r){if(409!==r.status)throw r
return i(e,t._id,n)})}(e,s,n)):{updated:!1,rev:o}})}n.upsert=function(e,t,n){var r=i(this,e,t)
if("function"!=typeof n)return r
r.then(function(e){n(null,e)},n)},n.putIfNotExists=function(e,t,n){"string"!=typeof e&&(n=t,e=(t=e)._id)
var r=i(this,e,function(e){return!e._rev&&t})
if("function"!=typeof n)return r
r.then(function(e){n(null,e)},n)},"undefined"!=typeof window&&window.PouchDB&&window.PouchDB.plugin(n)},{"pouchdb-promise":131}],130:[function(e,t,n){arguments[4][124][0].apply(n,arguments)},{dup:124,immediate:20}],131:[function(e,t,n){arguments[4][123][0].apply(n,arguments)},{dup:123,lie:130}],132:[function(e,t,n){"use strict"
function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(n,"__esModule",{value:!0})
var i=r(e("pouchdb-promise")),o=r(e("argsarray")),s=e("pouchdb-collections"),a=e("events"),u=r(e("inherits")),c=r(e("immediate")),f=e("pouchdb-errors")
function l(e){if(e instanceof ArrayBuffer)return function(e){if("function"==typeof e.slice)return e.slice(0)
var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e)
return n.set(r),t}(e)
var t=e.size,n=e.type
return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}var d=Function.prototype.toString,h=d.call(Object)
function p(e){var t,n,r
if(!e||"object"!=typeof e)return e
if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=p(e[n])
return t}if(e instanceof Date)return e.toISOString()
if(function(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}(e))return l(e)
if(!function(e){var t=Object.getPrototypeOf(e)
if(null===t)return!0
var n=t.constructor
return"function"==typeof n&&n instanceof n&&d.call(n)==h}(e))return e
for(n in t={},e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=p(e[n])
void 0!==i&&(t[n]=i)}return t}function g(e){var t=!1
return o(function(n){if(t)throw new Error("once called more than once")
t=!0,e.apply(this,n)})}function v(e){return o(function(t){t=p(t)
var n=this,r="function"==typeof t[t.length-1]&&t.pop(),o=new i(function(r,i){var o
try{var s=g(function(e,t){e?i(e):r(t)})
t.push(s),(o=e.apply(n,t))&&"function"==typeof o.then&&r(o)}catch(a){i(a)}})
return r&&o.then(function(e){r(null,e)},r),o})}function y(e,t){for(var n={},r=0,i=t.length;r<i;r++){var o=t[r]
o in e&&(n[o]=e[o])}return n}var m,b=6
function _(e){return e}function w(e){return[{ok:e}]}function k(){return"undefined"!=typeof chrome&&void 0!==chrome.storage&&void 0!==chrome.storage.local}if(k())m=!1
else try{localStorage.setItem("_pouch_check_localstorage",1),m=!!localStorage.getItem("_pouch_check_localstorage")}catch(M){m=!1}function E(){return m}function S(){var e
a.EventEmitter.call(this),this._listeners={},e=this,k()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.emit(t.dbName.newValue)}):E()&&("undefined"!=typeof addEventListener?addEventListener("storage",function(t){e.emit(t.key)}):window.attachEvent("storage",function(t){e.emit(t.key)}))}function x(e){if("undefined"!==console&&e in console){var t=Array.prototype.slice.call(arguments,1)
console[e].apply(console,t)}}u(S,a.EventEmitter),S.prototype.addListener=function(e,t,n,r){if(!this._listeners[t]){var i=this,o=!1
this._listeners[t]=s,this.on(e,s)}function s(){if(i._listeners[t])if(o)o="waiting"
else{o=!0
var e=y(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary"])
n.changes(e).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===o&&c(s),o=!1}).on("error",function(){o=!1})}}},S.prototype.removeListener=function(e,t){t in this._listeners&&(a.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},S.prototype.notifyLocalWindows=function(e){k()?chrome.storage.local.set({dbName:e}):E()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},S.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)}
var j="function"==typeof Object.assign?Object.assign:function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n]
if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}
var O=function(){}.name?function(e){return e.name}:function(e){return e.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]}
function A(e){if(!e)return null
var t=e.split("/")
return 2===t.length?t:1===t.length?[e,e]:null}var C=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],D="queryKey",B=/(?:^|&)([^&=]*)=?([^&]*)/g,L=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
function I(e,t,n){return new i(function(r,i){e.get(t,function(o,s){if(o){if(404!==o.status)return i(o)
s={}}var a=s._rev,u=n(s)
if(!u)return r({updated:!1,rev:a})
u._id=t,u._rev=a,r(function(e,t,n){return e.put(t).then(function(e){return{updated:!0,rev:e.rev}},function(r){if(409!==r.status)throw r
return I(e,t._id,n)})}(e,u,n))})})}var R="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
function T(e){return 0|Math.random()*e}n.adapterFun=function(e,t){return v(o(function(n){if(this._closed)return i.reject(new Error("database is closed"))
if(this._destroyed)return i.reject(new Error("database is destroyed"))
var r=this
return function(e,t,n){if(e.constructor.listeners("debug").length){for(var r=["api",e.name,t],i=0;i<n.length-1;i++)r.push(n[i])
e.constructor.emit("debug",r)
var o=n[n.length-1]
n[n.length-1]=function(n,r){var i=["api",e.name,t]
i=i.concat(n?["error",n]:["success",r]),e.constructor.emit("debug",i),o(n,r)}}}(r,e,n),this.taskqueue.isReady?t.apply(this,n):new i(function(t,i){r.taskqueue.addTask(function(o){o?i(o):t(r[e].apply(r,n))})})}))},n.bulkGetShim=function(e,t,n){var r=t.docs,i=new s.Map
r.forEach(function(e){i.has(e.id)?i.get(e.id).push(e):i.set(e.id,[e])})
var o=i.size,a=0,u=new Array(o)
function c(){var e;++a===o&&(e=[],u.forEach(function(t){t.docs.forEach(function(n){e.push({id:t.id,docs:[n]})})}),n(null,{results:e}))}var f=[]
i.forEach(function(e,t){f.push(t)})
var l=0
function d(){if(!(l>=f.length)){var n=Math.min(l+b,f.length),r=f.slice(l,n);(function(n,r){n.forEach(function(n,o){var s=r+o,a=i.get(n),f=y(a[0],["atts_since","attachments"])
f.open_revs=a.map(function(e){return e.rev}),f.open_revs=f.open_revs.filter(_)
var l=_
0===f.open_revs.length&&(delete f.open_revs,l=w),["revs","attachments","binary","ajax","latest"].forEach(function(e){e in t&&(f[e]=t[e])}),e.get(n,f,function(e,t){var r,i,o
r=e?[{error:e}]:l(t),i=n,o=r,u[s]={id:i,docs:o},c(),d()})})})(r,l),l+=r.length}}d()},n.changesHandler=S,n.clone=p,n.defaultBackOff=function(e){var t=0
return e||(t=2e3),function(e,t){return e=parseInt(e,10)||0,(t=parseInt(t,10))!=t||t<=e?t=(e||1)<<1:t+=1,t>6e5&&(e=3e5,t=6e5),~~((t-e)*Math.random()+e)}(e,t)},n.explainError=function(e,t){x("info","The above "+e+" is totally normal. "+t)},n.assign=j,n.filterChange=function(e){var t={},n=e.filter&&"function"==typeof e.filter
return t.query=e.query_params,function(r){r.doc||(r.doc={})
var i=n&&function(e,t,n){try{return!e(t,n)}catch(i){var r="Filter function threw: "+i.toString()
return f.createError(f.BAD_REQUEST,r)}}(e.filter,r.doc,t)
if("object"==typeof i)return i
if(i)return!1
if(e.include_docs){if(!e.attachments)for(var o in r.doc._attachments)r.doc._attachments.hasOwnProperty(o)&&(r.doc._attachments[o].stub=!0)}else delete r.doc
return!0}},n.flatten=function(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n])
return t},n.functionName=O,n.guardedConsole=x,n.hasLocalStorage=E,n.invalidIdError=function(e){var t
if(e?"string"!=typeof e?t=f.createError(f.INVALID_ID):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=f.createError(f.RESERVED_ID)):t=f.createError(f.MISSING_ID),t)throw t},n.isChromeApp=k,n.isCordova=function(){return"undefined"!=typeof cordova||"undefined"!=typeof PhoneGap||"undefined"!=typeof phonegap},n.isRemote=function(e){return"boolean"==typeof e._remote?e._remote:"function"==typeof e.type&&(x("warn","db.type() is deprecated and will be removed in a future version of PouchDB"),"http"===e.type())},n.listenerCount=function(e,t){return"listenerCount"in e?e.listenerCount(t):a.EventEmitter.listenerCount(e,t)},n.nextTick=c,n.normalizeDdocFunctionName=function(e){var t=A(e)
return t?t.join("/"):null},n.once=g,n.parseDdocFunctionName=A,n.parseUri=function(e){for(var t=L.exec(e),n={},r=14;r--;){var i=C[r],o=t[r]||"",s=-1!==["user","password"].indexOf(i)
n[i]=s?decodeURIComponent(o):o}return n[D]={},n[C[12]].replace(B,function(e,t,r){t&&(n[D][t]=r)}),n},n.pick=y,n.scopeEval=function(e,t){var n=[],r=[]
for(var i in t)t.hasOwnProperty(i)&&(n.push(i),r.push(t[i]))
return n.push(e),Function.apply(null,n).apply(null,r)},n.toPromise=v,n.upsert=I,n.uuid=function(e,t){t=t||R.length
var n="",r=-1
if(e){for(;++r<e;)n+=R[T(t)]
return n}for(;++r<36;)switch(r){case 8:case 13:case 18:case 23:n+="-"
break
case 19:n+=R[3&T(16)|8]
break
default:n+=R[T(16)]}return n}},{argsarray:1,events:164,immediate:20,inherits:21,"pouchdb-collections":87,"pouchdb-errors":94,"pouchdb-promise":133}],133:[function(e,t,n){arguments[4][58][0].apply(n,arguments)},{dup:58,lie:39}],134:[function(e,t,n){(function(e){"use strict"
!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?t.exports=function(t,n,r,i){if("function"!=typeof t)throw new TypeError('"callback" argument must be a function')
var o,s,a=arguments.length
switch(a){case 0:case 1:return e.nextTick(t)
case 2:return e.nextTick(function(){t.call(null,n)})
case 3:return e.nextTick(function(){t.call(null,n,r)})
case 4:return e.nextTick(function(){t.call(null,n,r,i)})
default:for(o=new Array(a-1),s=0;s<o.length;)o[s++]=arguments[s]
return e.nextTick(function(){t.apply(null,o)})}}:t.exports=e.nextTick}).call(this,e("_process"))},{_process:170}],135:[function(e,t,n){arguments[4][37][0].apply(n,arguments)},{dup:37}],136:[function(e,t,n){(function(n){t.exports=a
var r=Object.keys||function(e){var t=[]
for(var n in e)t.push(n)
return t},i=e("core-util-is")
i.inherits=e("inherits")
var o=e("./_stream_readable"),s=e("./_stream_writable")
function a(e){if(!(this instanceof a))return new a(e)
o.call(this,e),s.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",u)}function u(){this.allowHalfOpen||this._writableState.ended||n.nextTick(this.end.bind(this))}i.inherits(a,o),function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}(r(s.prototype),function(e){a.prototype[e]||(a.prototype[e]=s.prototype[e])})}).call(this,e("_process"))},{"./_stream_readable":138,"./_stream_writable":140,_process:170,"core-util-is":4,inherits:21}],137:[function(e,t,n){t.exports=o
var r=e("./_stream_transform"),i=e("core-util-is")
function o(e){if(!(this instanceof o))return new o(e)
r.call(this,e)}i.inherits=e("inherits"),i.inherits(o,r),o.prototype._transform=function(e,t,n){n(null,e)}},{"./_stream_transform":139,"core-util-is":4,inherits:21}],138:[function(e,t,n){(function(n){t.exports=l
var r=e("isarray"),i=e("buffer").Buffer
l.ReadableState=f
var o=e("events").EventEmitter
o.listenerCount||(o.listenerCount=function(e,t){return e.listeners(t).length})
var s,a=e("stream"),u=e("core-util-is")
u.inherits=e("inherits")
var c=e("util")
function f(t,n){var r=e("./_stream_duplex"),i=(t=t||{}).highWaterMark,o=t.objectMode?16:16384
this.highWaterMark=i||0===i?i:o,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!t.objectMode,n instanceof r&&(this.objectMode=this.objectMode||!!t.readableObjectMode),this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(s||(s=e("string_decoder/").StringDecoder),this.decoder=new s(t.encoding),this.encoding=t.encoding)}function l(t){e("./_stream_duplex")
if(!(this instanceof l))return new l(t)
this._readableState=new f(t,this),this.readable=!0,a.call(this)}function d(e,t,r,i,o){var s=function(e,t){var n=null
u.isBuffer(t)||u.isString(t)||u.isNullOrUndefined(t)||e.objectMode||(n=new TypeError("Invalid non-string/buffer chunk"))
return n}(t,r)
if(s)e.emit("error",s)
else if(u.isNullOrUndefined(r))t.reading=!1,t.ended||function(e,t){if(t.decoder&&!t.ended){var n=t.decoder.end()
n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,g(e)}(e,t)
else if(t.objectMode||r&&r.length>0)if(t.ended&&!o){var a=new Error("stream.push() after EOF")
e.emit("error",a)}else if(t.endEmitted&&o){a=new Error("stream.unshift() after end event")
e.emit("error",a)}else!t.decoder||o||i||(r=t.decoder.write(r)),o||(t.reading=!1),t.flowing&&0===t.length&&!t.sync?(e.emit("data",r),e.read(0)):(t.length+=t.objectMode?1:r.length,o?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&g(e)),function(e,t){t.readingMore||(t.readingMore=!0,n.nextTick(function(){(function(e,t){var n=t.length
for(;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(c("maybeReadMore read 0"),e.read(0),n!==t.length);)n=t.length
t.readingMore=!1})(e,t)}))}(e,t)
else o||(t.reading=!1)
return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(t)}c=c&&c.debuglog?c.debuglog("stream"):function(){},u.inherits(l,a),l.prototype.push=function(e,t){var n=this._readableState
return u.isString(e)&&!n.objectMode&&(t=t||n.defaultEncoding)!==n.encoding&&(e=new i(e,t),t=""),d(this,n,e,t,!1)},l.prototype.unshift=function(e){return d(this,this._readableState,e,"",!0)},l.prototype.setEncoding=function(t){return s||(s=e("string_decoder/").StringDecoder),this._readableState.decoder=new s(t),this._readableState.encoding=t,this}
var h=8388608
function p(e,t){return 0===t.length&&t.ended?0:t.objectMode?0===e?0:1:isNaN(e)||u.isNull(e)?t.flowing&&t.buffer.length?t.buffer[0].length:t.length:e<=0?0:(e>t.highWaterMark&&(t.highWaterMark=function(e){if(e>=h)e=h
else{e--
for(var t=1;t<32;t<<=1)e|=e>>t
e++}return e}(e)),e>t.length?t.ended?t.length:(t.needReadable=!0,0):e)}function g(e){var t=e._readableState
t.needReadable=!1,t.emittedReadable||(c("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?n.nextTick(function(){v(e)}):v(e))}function v(e){c("emit readable"),e.emit("readable"),y(e)}function y(e){var t=e._readableState
if(c("flow",t.flowing),t.flowing)do{var n=e.read()}while(null!==n&&t.flowing)}function m(e,t){var n,r=t.buffer,o=t.length,s=!!t.decoder,a=!!t.objectMode
if(0===r.length)return null
if(0===o)n=null
else if(a)n=r.shift()
else if(!e||e>=o)n=s?r.join(""):i.concat(r,o),r.length=0
else{if(e<r[0].length)n=(l=r[0]).slice(0,e),r[0]=l.slice(e)
else if(e===r[0].length)n=r.shift()
else{n=s?"":new i(e)
for(var u=0,c=0,f=r.length;c<f&&u<e;c++){var l=r[0],d=Math.min(e-u,l.length)
s?n+=l.slice(0,d):l.copy(n,u,0,d),d<l.length?r[0]=l.slice(d):r.shift(),u+=d}}}return n}function b(e){var t=e._readableState
if(t.length>0)throw new Error("endReadable called on non-empty stream")
t.endEmitted||(t.ended=!0,n.nextTick(function(){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}))}l.prototype.read=function(e){c("read",e)
var t=this._readableState,n=e
if((!u.isNumber(e)||e>0)&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return c("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?b(this):g(this),null
if(0===(e=p(e,t))&&t.ended)return 0===t.length&&b(this),null
var r,i=t.needReadable
return c("need readable",i),(0===t.length||t.length-e<t.highWaterMark)&&c("length less than watermark",i=!0),(t.ended||t.reading)&&c("reading or ended",i=!1),i&&(c("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1),i&&!t.reading&&(e=p(n,t)),r=e>0?m(e,t):null,u.isNull(r)&&(t.needReadable=!0,e=0),t.length-=e,0!==t.length||t.ended||(t.needReadable=!0),n!==e&&t.ended&&0===t.length&&b(this),u.isNull(r)||this.emit("data",r),r},l.prototype._read=function(e){this.emit("error",new Error("not implemented"))},l.prototype.pipe=function(e,t){var i=this,s=this._readableState
switch(s.pipesCount){case 0:s.pipes=e
break
case 1:s.pipes=[s.pipes,e]
break
default:s.pipes.push(e)}s.pipesCount+=1,c("pipe count=%d opts=%j",s.pipesCount,t)
var a=(!t||!1!==t.end)&&e!==n.stdout&&e!==n.stderr?f:d
function u(e){c("onunpipe"),e===i&&d()}function f(){c("onend"),e.end()}s.endEmitted?n.nextTick(a):i.once("end",a),e.on("unpipe",u)
var l=function(e){return function(){var t=e._readableState
c("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&o.listenerCount(e,"data")&&(t.flowing=!0,y(e))}}(i)
function d(){c("cleanup"),e.removeListener("close",g),e.removeListener("finish",v),e.removeListener("drain",l),e.removeListener("error",p),e.removeListener("unpipe",u),i.removeListener("end",f),i.removeListener("end",d),i.removeListener("data",h),!s.awaitDrain||e._writableState&&!e._writableState.needDrain||l()}function h(t){c("ondata"),!1===e.write(t)&&(c("false write response, pause",i._readableState.awaitDrain),i._readableState.awaitDrain++,i.pause())}function p(t){c("onerror",t),m(),e.removeListener("error",p),0===o.listenerCount(e,"error")&&e.emit("error",t)}function g(){e.removeListener("finish",v),m()}function v(){c("onfinish"),e.removeListener("close",g),m()}function m(){c("unpipe"),i.unpipe(e)}return e.on("drain",l),i.on("data",h),e._events&&e._events.error?r(e._events.error)?e._events.error.unshift(p):e._events.error=[p,e._events.error]:e.on("error",p),e.once("close",g),e.once("finish",v),e.emit("pipe",i),s.flowing||(c("pipe resume"),i.resume()),e},l.prototype.unpipe=function(e){var t=this._readableState
if(0===t.pipesCount)return this
if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this),this)
if(!e){var n=t.pipes,r=t.pipesCount
t.pipes=null,t.pipesCount=0,t.flowing=!1
for(var i=0;i<r;i++)n[i].emit("unpipe",this)
return this}return-1===(i=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1}(t.pipes,e))?this:(t.pipes.splice(i,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this),this)},l.prototype.on=function(e,t){var r=a.prototype.on.call(this,e,t)
if("data"===e&&!1!==this._readableState.flowing&&this.resume(),"readable"===e&&this.readable){var i=this._readableState
if(!i.readableListening)if(i.readableListening=!0,i.emittedReadable=!1,i.needReadable=!0,i.reading)i.length&&g(this)
else{var o=this
n.nextTick(function(){c("readable nexttick read 0"),o.read(0)})}}return r},l.prototype.addListener=l.prototype.on,l.prototype.resume=function(){var e=this._readableState
return e.flowing||(c("resume"),e.flowing=!0,e.reading||(c("resume read 0"),this.read(0)),function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,n.nextTick(function(){(function(e,t){t.resumeScheduled=!1,e.emit("resume"),y(e),t.flowing&&!t.reading&&e.read(0)})(e,t)}))}(this,e)),this},l.prototype.pause=function(){return c("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(c("pause"),this._readableState.flowing=!1,this.emit("pause")),this},l.prototype.wrap=function(e){var t=this._readableState,n=!1,r=this
for(var i in e.on("end",function(){if(c("wrapped end"),t.decoder&&!t.ended){var e=t.decoder.end()
e&&e.length&&r.push(e)}r.push(null)}),e.on("data",function(i){(c("wrapped data"),t.decoder&&(i=t.decoder.write(i)),i&&(t.objectMode||i.length))&&(r.push(i)||(n=!0,e.pause()))}),e)u.isFunction(e[i])&&u.isUndefined(this[i])&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i))
return function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}(["error","close","destroy","pause","resume"],function(t){e.on(t,r.emit.bind(r,t))}),r._read=function(t){c("wrapped _read",t),n&&(n=!1,e.resume())},r},l._fromList=m}).call(this,e("_process"))},{"./_stream_duplex":136,_process:170,buffer:162,"core-util-is":4,events:164,inherits:21,isarray:141,stream:184,"string_decoder/":144,util:160}],139:[function(e,t,n){t.exports=s
var r=e("./_stream_duplex"),i=e("core-util-is")
function o(e,t){this.afterTransform=function(e,n){return function(e,t,n){var r=e._transformState
r.transforming=!1
var o=r.writecb
if(!o)return e.emit("error",new Error("no writecb in Transform class"))
r.writechunk=null,r.writecb=null,i.isNullOrUndefined(n)||e.push(n)
o&&o(t)
var s=e._readableState
s.reading=!1,(s.needReadable||s.length<s.highWaterMark)&&e._read(s.highWaterMark)}(t,e,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function s(e){if(!(this instanceof s))return new s(e)
r.call(this,e),this._transformState=new o(e,this)
var t=this
this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("prefinish",function(){i.isFunction(this._flush)?this._flush(function(e){a(t,e)}):a(t)})}function a(e,t){if(t)return e.emit("error",t)
var n=e._writableState,r=e._transformState
if(n.length)throw new Error("calling transform done when ws.length != 0")
if(r.transforming)throw new Error("calling transform done when still transforming")
return e.push(null)}i.inherits=e("inherits"),i.inherits(s,r),s.prototype.push=function(e,t){return this._transformState.needTransform=!1,r.prototype.push.call(this,e,t)},s.prototype._transform=function(e,t,n){throw new Error("not implemented")},s.prototype._write=function(e,t,n){var r=this._transformState
if(r.writecb=n,r.writechunk=e,r.writeencoding=t,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},s.prototype._read=function(e){var t=this._transformState
i.isNull(t.writechunk)||!t.writecb||t.transforming?t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform))}},{"./_stream_duplex":136,"core-util-is":4,inherits:21}],140:[function(e,t,n){(function(n){t.exports=u
var r=e("buffer").Buffer
u.WritableState=a
var i=e("core-util-is")
i.inherits=e("inherits")
var o=e("stream")
function s(e,t,n){this.chunk=e,this.encoding=t,this.callback=n}function a(t,r){var i=e("./_stream_duplex"),o=(t=t||{}).highWaterMark,s=t.objectMode?16:16384
this.highWaterMark=o||0===o?o:s,this.objectMode=!!t.objectMode,r instanceof i&&(this.objectMode=this.objectMode||!!t.writableObjectMode),this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1
var a=!1===t.decodeStrings
this.decodeStrings=!a,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){(function(e,t){var r=e._writableState,i=r.sync,o=r.writecb
if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(r),t)(function(e,t,r,i,o){r?n.nextTick(function(){t.pendingcb--,o(i)}):(t.pendingcb--,o(i))
e._writableState.errorEmitted=!0,e.emit("error",i)})(e,r,i,t,o)
else{var s=d(e,r)
s||r.corked||r.bufferProcessing||!r.buffer.length||l(e,r),i?n.nextTick(function(){f(e,r,s,o)}):f(e,r,s,o)}})(r,e)},this.writecb=null,this.writelen=0,this.buffer=[],this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1}function u(t){var n=e("./_stream_duplex")
if(!(this instanceof u||this instanceof n))return new u(t)
this._writableState=new a(t,this),this.writable=!0,o.call(this)}function c(e,t,n,r,i,o,s){t.writelen=r,t.writecb=s,t.writing=!0,t.sync=!0,n?e._writev(i,t.onwrite):e._write(i,o,t.onwrite),t.sync=!1}function f(e,t,n,r){n||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,r(),p(e,t)}function l(e,t){if(t.bufferProcessing=!0,e._writev&&t.buffer.length>1){for(var n=[],r=0;r<t.buffer.length;r++)n.push(t.buffer[r].callback)
t.pendingcb++,c(e,t,!0,t.length,t.buffer,"",function(e){for(var r=0;r<n.length;r++)t.pendingcb--,n[r](e)}),t.buffer=[]}else{for(r=0;r<t.buffer.length;r++){var i=t.buffer[r],o=i.chunk,s=i.encoding,a=i.callback,u=t.objectMode?1:o.length
if(c(e,t,!1,u,o,s,a),t.writing){r++
break}}r<t.buffer.length?t.buffer=t.buffer.slice(r):t.buffer.length=0}t.bufferProcessing=!1}function d(e,t){return t.ending&&0===t.length&&!t.finished&&!t.writing}function h(e,t){t.prefinished||(t.prefinished=!0,e.emit("prefinish"))}function p(e,t){var n=d(0,t)
return n&&(0===t.pendingcb?(h(e,t),t.finished=!0,e.emit("finish")):h(e,t)),n}i.inherits(u,o),u.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},u.prototype.write=function(e,t,o){var a=this._writableState,u=!1
return i.isFunction(t)&&(o=t,t=null),i.isBuffer(e)?t="buffer":t||(t=a.defaultEncoding),i.isFunction(o)||(o=function(){}),a.ended?function(e,t,r){var i=new Error("write after end")
e.emit("error",i),n.nextTick(function(){r(i)})}(this,0,o):function(e,t,r,o){var s=!0
if(!(i.isBuffer(r)||i.isString(r)||i.isNullOrUndefined(r)||t.objectMode)){var a=new TypeError("Invalid non-string/buffer chunk")
e.emit("error",a),n.nextTick(function(){o(a)}),s=!1}return s}(this,a,e,o)&&(a.pendingcb++,u=function(e,t,n,o,a){n=function(e,t,n){return!e.objectMode&&!1!==e.decodeStrings&&i.isString(t)&&(t=new r(t,n)),t}(t,n,o),i.isBuffer(n)&&(o="buffer")
var u=t.objectMode?1:n.length
t.length+=u
var f=t.length<t.highWaterMark
f||(t.needDrain=!0)
t.writing||t.corked?t.buffer.push(new s(n,o,a)):c(e,t,!1,u,n,o,a)
return f}(this,a,e,t,o)),u},u.prototype.cork=function(){this._writableState.corked++},u.prototype.uncork=function(){var e=this._writableState
e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.buffer.length||l(this,e))},u.prototype._write=function(e,t,n){n(new Error("not implemented"))},u.prototype._writev=null,u.prototype.end=function(e,t,r){var o=this._writableState
i.isFunction(e)?(r=e,e=null,t=null):i.isFunction(t)&&(r=t,t=null),i.isNullOrUndefined(e)||this.write(e,t),o.corked&&(o.corked=1,this.uncork()),o.ending||o.finished||function(e,t,r){t.ending=!0,p(e,t),r&&(t.finished?n.nextTick(r):e.once("finish",r))
t.ended=!0}(this,o,r)}}).call(this,e("_process"))},{"./_stream_duplex":136,_process:170,buffer:162,"core-util-is":4,inherits:21,stream:184}],141:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],142:[function(e,t,n){(function(r){(n=t.exports=e("./lib/_stream_readable.js")).Stream=e("stream"),n.Readable=n,n.Writable=e("./lib/_stream_writable.js"),n.Duplex=e("./lib/_stream_duplex.js"),n.Transform=e("./lib/_stream_transform.js"),n.PassThrough=e("./lib/_stream_passthrough.js"),r.browser||"disable"!==r.env.READABLE_STREAM||(t.exports=e("stream"))}).call(this,e("_process"))},{"./lib/_stream_duplex.js":136,"./lib/_stream_passthrough.js":137,"./lib/_stream_readable.js":138,"./lib/_stream_transform.js":139,"./lib/_stream_writable.js":140,_process:170,stream:184}],143:[function(e,t,n){(function(e){if("object"==typeof n)t.exports=e()
else if("function"==typeof define&&define.amd)define(e)
else{var r
try{r=window}catch(i){r=self}r.SparkMD5=e()}})(function(e){"use strict"
var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
function n(e,t){var n=e[0],r=e[1],i=e[2],o=e[3]
r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&i)+t[1]-389564586|0)<<12|o>>>20)+n|0)&n|~o&r)+t[2]+606105819|0)<<17|i>>>15)+o|0)&o|~i&n)+t[3]-1044525330|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&i)+t[5]+1200080426|0)<<12|o>>>20)+n|0)&n|~o&r)+t[6]-1473231341|0)<<17|i>>>15)+o|0)&o|~i&n)+t[7]-45705983|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&i)+t[9]-1958414417|0)<<12|o>>>20)+n|0)&n|~o&r)+t[10]-42063|0)<<17|i>>>15)+o|0)&o|~i&n)+t[11]-1990404162|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&i)+t[13]-40341101|0)<<12|o>>>20)+n|0)&n|~o&r)+t[14]-1502002290|0)<<17|i>>>15)+o|0)&o|~i&n)+t[15]+1236535329|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[1]-165796510|0)<<5|n>>>27)+r|0)&i|r&~i)+t[6]-1069501632|0)<<9|o>>>23)+n|0)&r|n&~r)+t[11]+643717713|0)<<14|i>>>18)+o|0)&n|o&~n)+t[0]-373897302|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[5]-701558691|0)<<5|n>>>27)+r|0)&i|r&~i)+t[10]+38016083|0)<<9|o>>>23)+n|0)&r|n&~r)+t[15]-660478335|0)<<14|i>>>18)+o|0)&n|o&~n)+t[4]-405537848|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[9]+568446438|0)<<5|n>>>27)+r|0)&i|r&~i)+t[14]-1019803690|0)<<9|o>>>23)+n|0)&r|n&~r)+t[3]-187363961|0)<<14|i>>>18)+o|0)&n|o&~n)+t[8]+1163531501|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[13]-1444681467|0)<<5|n>>>27)+r|0)&i|r&~i)+t[2]-51403784|0)<<9|o>>>23)+n|0)&r|n&~r)+t[7]+1735328473|0)<<14|i>>>18)+o|0)&n|o&~n)+t[12]-1926607734|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[5]-378558|0)<<4|n>>>28)+r|0)^r^i)+t[8]-2022574463|0)<<11|o>>>21)+n|0)^n^r)+t[11]+1839030562|0)<<16|i>>>16)+o|0)^o^n)+t[14]-35309556|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[1]-1530992060|0)<<4|n>>>28)+r|0)^r^i)+t[4]+1272893353|0)<<11|o>>>21)+n|0)^n^r)+t[7]-155497632|0)<<16|i>>>16)+o|0)^o^n)+t[10]-1094730640|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[13]+681279174|0)<<4|n>>>28)+r|0)^r^i)+t[0]-358537222|0)<<11|o>>>21)+n|0)^n^r)+t[3]-722521979|0)<<16|i>>>16)+o|0)^o^n)+t[6]+76029189|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[9]-640364487|0)<<4|n>>>28)+r|0)^r^i)+t[12]-421815835|0)<<11|o>>>21)+n|0)^n^r)+t[15]+530742520|0)<<16|i>>>16)+o|0)^o^n)+t[2]-995338651|0)<<23|r>>>9)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[0]-198630844|0)<<6|n>>>26)+r|0)|~i))+t[7]+1126891415|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[14]-1416354905|0)<<15|i>>>17)+o|0)|~n))+t[5]-57434055|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[12]+1700485571|0)<<6|n>>>26)+r|0)|~i))+t[3]-1894986606|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[10]-1051523|0)<<15|i>>>17)+o|0)|~n))+t[1]-2054922799|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[8]+1873313359|0)<<6|n>>>26)+r|0)|~i))+t[15]-30611744|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[6]-1560198380|0)<<15|i>>>17)+o|0)|~n))+t[13]+1309151649|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[4]-145523070|0)<<6|n>>>26)+r|0)|~i))+t[11]-1120210379|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[2]+718787259|0)<<15|i>>>17)+o|0)|~n))+t[9]-343485551|0)<<21|r>>>11)+i|0,e[0]=n+e[0]|0,e[1]=r+e[1]|0,e[2]=i+e[2]|0,e[3]=o+e[3]|0}function r(e){var t,n=[]
for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24)
return n}function i(e){var t,n=[]
for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24)
return n}function o(e){var t,i,o,s,a,u,c=e.length,f=[1732584193,-271733879,-1732584194,271733878]
for(t=64;t<=c;t+=64)n(f,r(e.substring(t-64,t)))
for(i=(e=e.substring(t-64)).length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<i;t+=1)o[t>>2]|=e.charCodeAt(t)<<(t%4<<3)
if(o[t>>2]|=128<<(t%4<<3),t>55)for(n(f,o),t=0;t<16;t+=1)o[t]=0
return s=(s=8*c).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(s[2],16),u=parseInt(s[1],16)||0,o[14]=a,o[15]=u,n(f,o),f}function s(e){var n,r=""
for(n=0;n<4;n+=1)r+=t[e>>8*n+4&15]+t[e>>8*n&15]
return r}function a(e){var t
for(t=0;t<e.length;t+=1)e[t]=s(e[t])
return e.join("")}function u(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function c(e){var t,n=[],r=e.length
for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16))
return String.fromCharCode.apply(String,n)}function f(){this.reset()}return"5d41402abc4b2a76b9719d911017c592"!==a(o("hello"))&&function(e,t){var n=(65535&e)+(65535&t)
return(e>>16)+(t>>16)+(n>>16)<<16|65535&n},"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(n,r){var i,o,s,a,u=this.byteLength,c=t(n,u),f=u
return r!==e&&(f=t(r,u)),c>f?new ArrayBuffer(0):(i=f-c,o=new ArrayBuffer(i),s=new Uint8Array(o),a=new Uint8Array(this,c,i),s.set(a),o)}}(),f.prototype.append=function(e){return this.appendBinary(u(e)),this},f.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length
var t,i=this._buff.length
for(t=64;t<=i;t+=64)n(this._hash,r(this._buff.substring(t-64,t)))
return this._buff=this._buff.substring(t-64),this},f.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
for(t=0;t<i;t+=1)o[t>>2]|=r.charCodeAt(t)<<(t%4<<3)
return this._finish(o,i),n=a(this._hash),e&&(n=c(n)),this.reset(),n},f.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},f.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},f.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},f.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},f.prototype._finish=function(e,t){var r,i,o,s=t
if(e[s>>2]|=128<<(s%4<<3),s>55)for(n(this._hash,e),s=0;s<16;s+=1)e[s]=0
r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),i=parseInt(r[2],16),o=parseInt(r[1],16)||0,e[14]=i,e[15]=o,n(this._hash,e)},f.hash=function(e,t){return f.hashBinary(u(e),t)},f.hashBinary=function(e,t){var n=a(o(e))
return t?c(n):n},f.ArrayBuffer=function(){this.reset()},f.ArrayBuffer.prototype.append=function(e){var t,r,o,s,a,u=(r=this._buff.buffer,o=e,s=!0,(a=new Uint8Array(r.byteLength+o.byteLength)).set(new Uint8Array(r)),a.set(new Uint8Array(o),r.byteLength),s?a:a.buffer),c=u.length
for(this._length+=e.byteLength,t=64;t<=c;t+=64)n(this._hash,i(u.subarray(t-64,t)))
return this._buff=t-64<c?new Uint8Array(u.buffer.slice(t-64)):new Uint8Array(0),this},f.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
for(t=0;t<i;t+=1)o[t>>2]|=r[t]<<(t%4<<3)
return this._finish(o,i),n=a(this._hash),e&&(n=c(n)),this.reset(),n},f.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},f.ArrayBuffer.prototype.getState=function(){var e,t=f.prototype.getState.call(this)
return t.buff=(e=t.buff,String.fromCharCode.apply(null,new Uint8Array(e))),t},f.ArrayBuffer.prototype.setState=function(e){return e.buff=function(e,t){var n,r=e.length,i=new ArrayBuffer(r),o=new Uint8Array(i)
for(n=0;n<r;n+=1)o[n]=e.charCodeAt(n)
return t?o:i}(e.buff,!0),f.prototype.setState.call(this,e)},f.ArrayBuffer.prototype.destroy=f.prototype.destroy,f.ArrayBuffer.prototype._finish=f.prototype._finish,f.ArrayBuffer.hash=function(e,t){var r=a(function(e){var t,r,o,s,a,u,c=e.length,f=[1732584193,-271733879,-1732584194,271733878]
for(t=64;t<=c;t+=64)n(f,i(e.subarray(t-64,t)))
for(r=(e=t-64<c?e.subarray(t-64):new Uint8Array(0)).length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<r;t+=1)o[t>>2]|=e[t]<<(t%4<<3)
if(o[t>>2]|=128<<(t%4<<3),t>55)for(n(f,o),t=0;t<16;t+=1)o[t]=0
return s=(s=8*c).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(s[2],16),u=parseInt(s[1],16)||0,o[14]=a,o[15]=u,n(f,o),f}(new Uint8Array(e)))
return t?c(r):r},f})},{}],144:[function(e,t,n){var r=e("buffer").Buffer,i=r.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}}
var o=n.StringDecoder=function(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),function(e){if(e&&!i(e))throw new Error("Unknown encoding: "+e)}(e),this.encoding){case"utf8":this.surrogateSize=3
break
case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=a
break
case"base64":this.surrogateSize=3,this.detectIncompleteChar=u
break
default:return void(this.write=s)}this.charBuffer=new r(6),this.charReceived=0,this.charLength=0}
function s(e){return e.toString(this.encoding)}function a(e){this.charReceived=e.length%2,this.charLength=this.charReceived?2:0}function u(e){this.charReceived=e.length%3,this.charLength=this.charReceived?3:0}o.prototype.write=function(e){for(var t="";this.charLength;){var n=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length
if(e.copy(this.charBuffer,this.charReceived,0,n),this.charReceived+=n,this.charReceived<this.charLength)return""
if(e=e.slice(n,e.length),!((i=(t=this.charBuffer.slice(0,this.charLength).toString(this.encoding)).charCodeAt(t.length-1))>=55296&&i<=56319)){if(this.charReceived=this.charLength=0,0===e.length)return t
break}this.charLength+=this.surrogateSize,t=""}this.detectIncompleteChar(e)
var r=e.length
this.charLength&&(e.copy(this.charBuffer,0,e.length-this.charReceived,r),r-=this.charReceived)
var i
r=(t+=e.toString(this.encoding,0,r)).length-1
if((i=t.charCodeAt(r))>=55296&&i<=56319){var o=this.surrogateSize
return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),e.copy(this.charBuffer,0,0,o),t.substring(0,r)}return t},o.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var n=e[e.length-t]
if(1==t&&n>>5==6){this.charLength=2
break}if(t<=2&&n>>4==14){this.charLength=3
break}if(t<=3&&n>>3==30){this.charLength=4
break}}this.charReceived=t},o.prototype.end=function(e){var t=""
if(e&&e.length&&(t=this.write(e)),this.charReceived){var n=this.charReceived,r=this.charBuffer,i=this.encoding
t+=r.slice(0,n).toString(i)}return t}},{buffer:162}],145:[function(e,t,n){"use strict"
function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=r(e("ltgt")),o=r(e("events")),s=r(e("inherits")),a=r(e("level-codec")),u=r(e("readable-stream"))
function c(e){return"function"==typeof e.prefix?e.prefix():e}function f(){Error.call(this)}s(f,Error),f.prototype.name="NotFoundError"
var l=o.EventEmitter,d=new f,h=function(e,t,n,r){var i=new l
function o(e){var t,n={}
if(r)for(t in r)void 0!==r[t]&&(n[t]=r[t])
if(e)for(t in e)void 0!==e[t]&&(n[t]=e[t])
return n}return i.sublevels={},i.options=r,i.version="6.5.4",i.methods={},t=t||[],i.put=function(n,r,s,a){"function"==typeof s&&(a=s,s={}),e.apply([{key:n,value:r,prefix:t.slice(),type:"put"}],o(s),function(e){if(e)return a(e)
i.emit("put",n,r),a(null)})},i.prefix=function(){return t.slice()},i.batch=function(n,r,s){"function"==typeof r&&(s=r,r={}),n=n.map(function(e){return{key:e.key,value:e.value,prefix:e.prefix||t,keyEncoding:e.keyEncoding,valueEncoding:e.valueEncoding,type:e.type}}),e.apply(n,o(r),function(e){if(e)return s(e)
i.emit("batch",n),s(null)})},i.get=function(n,r,i){"function"==typeof r&&(i=r,r={}),e.get(n,t,o(r),function(e,t){e?i(d):i(null,t)})},i.sublevel=function(r,s){return i.sublevels[r]=i.sublevels[r]||h(e,t.concat(r),n,o(s))},i.readStream=i.createReadStream=function(r){var i;(r=o(r)).prefix=t
var s=e.iterator(r)
return(i=n(r,e.createDecoder(r))).setIterator(s),i},i.close=function(t){e.close(t)},i.isOpen=e.isOpen,i.isClosed=e.isClosed,i},p=u.Readable
function g(e,t){if(!(this instanceof g))return new g(e,t)
p.call(this,{objectMode:!0,highWaterMark:e.highWaterMark}),this._waiting=!1,this._options=e,this._makeData=t}s(g,p),g.prototype.setIterator=function(e){return this._iterator=e,this._destroyed?e.end(function(){}):this._waiting?(this._waiting=!1,this._read()):this},g.prototype._read=function(){var e=this
if(!e._destroyed)return e._iterator?void e._iterator.next(function(t,n,r){if(t||void 0===n&&void 0===r)return t||e._destroyed||e.push(null),e._cleanup(t)
r=e._makeData(n,r),e._destroyed||e.push(r)}):this._waiting=!0},g.prototype._cleanup=function(e){if(!this._destroyed){this._destroyed=!0
var t=this
e&&t.emit("error",e),t._iterator?t._iterator.end(function(){t._iterator=null,t.emit("close")}):t.emit("close")}},g.prototype.destroy=function(){this._cleanup()}
var v={encode:function(e){return"ÿ"+e[0]+"ÿ"+e[1]},decode:function(e){var t=e.toString(),n=t.indexOf("ÿ",1)
return[t.substring(1,n),t.substring(n+1)]},lowerBound:"\0",upperBound:"ÿ"},y=new a
t.exports=function(e){return h(function(e,t,n){function r(e,r,i,o){return t.encode([e,n.encodeKey(r,i,o)])}function o(e,t){return t&&t.options&&(e.keyEncoding=e.keyEncoding||t.options.keyEncoding,e.valueEncoding=e.valueEncoding||t.options.valueEncoding),e}return e.open(function(){}),{apply:function(t,i,s){i=i||{}
for(var a=[],u=-1,f=t.length;++u<f;){var l=t[u]
o(l,l.prefix),l.prefix=c(l.prefix),a.push({key:r(l.prefix,l.key,i,l),value:"del"!==l.type&&n.encodeValue(l.value,i,l),type:l.type})}e.db.batch(a,i,s)},get:function(t,i,o,s){return o.asBuffer=n.valueAsBuffer(o),e.db.get(r(i,t,o),o,function(e,t){e?s(e):s(null,n.decodeValue(t,o))})},createDecoder:function(e){return function(r,i){return{key:n.decodeKey(t.decode(r)[1],e),value:n.decodeValue(i,e)}}},isClosed:function(){return e.isClosed()},close:function(t){return e.close(t)},iterator:function(o){var s,a=function(e){var t={}
for(var n in e)t[n]=e[n]
return t}(o||{}),u=o.prefix||[]
return i.toLtgt(o,a,function(e){return r(u,e,a,{})},t.lowerBound,t.upperBound),a.prefix=null,a.keyAsBuffer=a.valueAsBuffer=!1,"number"!=typeof a.limit&&(a.limit=-1),a.keyAsBuffer=t.buffer,a.valueAsBuffer=n.valueAsBuffer(a),s=e.db.iterator(a),{next:function(e){return s.next(e)},end:function(e){s.end(e)}}}}}(e,v,y),[],g,e.options)}},{events:164,inherits:21,"level-codec":28,ltgt:41,"readable-stream":152}],146:[function(e,t,n){arguments[4][141][0].apply(n,arguments)},{dup:141}],147:[function(e,t,n){arguments[4][136][0].apply(n,arguments)},{"./_stream_readable":149,"./_stream_writable":151,_process:170,"core-util-is":4,dup:136,inherits:21}],148:[function(e,t,n){arguments[4][137][0].apply(n,arguments)},{"./_stream_transform":150,"core-util-is":4,dup:137,inherits:21}],149:[function(e,t,n){(function(n){t.exports=f
var r=e("isarray"),i=e("buffer").Buffer
f.ReadableState=c
var o=e("events").EventEmitter
o.listenerCount||(o.listenerCount=function(e,t){return e.listeners(t).length})
var s,a=e("stream"),u=e("core-util-is")
function c(t,n){var r=(t=t||{}).highWaterMark
this.highWaterMark=r||0===r?r:16384,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=!1,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.calledRead=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!t.objectMode,this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(s||(s=e("string_decoder/").StringDecoder),this.decoder=new s(t.encoding),this.encoding=t.encoding)}function f(e){if(!(this instanceof f))return new f(e)
this._readableState=new c(e,this),this.readable=!0,a.call(this)}function l(e,t,r,o,s){var a=function(e,t){var n=null
i.isBuffer(t)||"string"==typeof t||null==t||e.objectMode||(n=new TypeError("Invalid non-string/buffer chunk"))
return n}(t,r)
if(a)e.emit("error",a)
else if(null==r)t.reading=!1,t.ended||function(e,t){if(t.decoder&&!t.ended){var n=t.decoder.end()
n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,t.length>0?p(e):_(e)}(e,t)
else if(t.objectMode||r&&r.length>0)if(t.ended&&!s){var u=new Error("stream.push() after EOF")
e.emit("error",u)}else if(t.endEmitted&&s){u=new Error("stream.unshift() after end event")
e.emit("error",u)}else!t.decoder||s||o||(r=t.decoder.write(r)),t.length+=t.objectMode?1:r.length,s?t.buffer.unshift(r):(t.reading=!1,t.buffer.push(r)),t.needReadable&&p(e),function(e,t){t.readingMore||(t.readingMore=!0,n.nextTick(function(){(function(e,t){var n=t.length
for(;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(e.read(0),n!==t.length);)n=t.length
t.readingMore=!1})(e,t)}))}(e,t)
else s||(t.reading=!1)
return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(t)}u.inherits=e("inherits"),u.inherits(f,a),f.prototype.push=function(e,t){var n=this._readableState
return"string"!=typeof e||n.objectMode||(t=t||n.defaultEncoding)!==n.encoding&&(e=new i(e,t),t=""),l(this,n,e,t,!1)},f.prototype.unshift=function(e){return l(this,this._readableState,e,"",!0)},f.prototype.setEncoding=function(t){s||(s=e("string_decoder/").StringDecoder),this._readableState.decoder=new s(t),this._readableState.encoding=t}
var d=8388608
function h(e,t){return 0===t.length&&t.ended?0:t.objectMode?0===e?0:1:null===e||isNaN(e)?t.flowing&&t.buffer.length?t.buffer[0].length:t.length:e<=0?0:(e>t.highWaterMark&&(t.highWaterMark=function(e){if(e>=d)e=d
else{e--
for(var t=1;t<32;t<<=1)e|=e>>t
e++}return e}(e)),e>t.length?t.ended?t.length:(t.needReadable=!0,0):e)}function p(e){var t=e._readableState
t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,t.sync?n.nextTick(function(){g(e)}):g(e))}function g(e){e.emit("readable")}function v(e){var t,n=e._readableState
function r(e,r,i){!1===e.write(t)&&n.awaitDrain++}for(n.awaitDrain=0;n.pipesCount&&null!==(t=e.read());)if(1===n.pipesCount?r(n.pipes):w(n.pipes,r),e.emit("data",t),n.awaitDrain>0)return
if(0===n.pipesCount)return n.flowing=!1,void(o.listenerCount(e,"data")>0&&m(e))
n.ranOut=!0}function y(){this._readableState.ranOut&&(this._readableState.ranOut=!1,v(this))}function m(e,t){if(e._readableState.flowing)throw new Error("Cannot switch to old mode now.")
var r=t||!1,i=!1
e.readable=!0,e.pipe=a.prototype.pipe,e.on=e.addListener=a.prototype.on,e.on("readable",function(){var t
for(i=!0;!r&&null!==(t=e.read());)e.emit("data",t)
null===t&&(i=!1,e._readableState.needReadable=!0)}),e.pause=function(){r=!0,this.emit("pause")},e.resume=function(){r=!1,i?n.nextTick(function(){e.emit("readable")}):this.read(0),this.emit("resume")},e.emit("readable")}function b(e,t){var n,r=t.buffer,o=t.length,s=!!t.decoder,a=!!t.objectMode
if(0===r.length)return null
if(0===o)n=null
else if(a)n=r.shift()
else if(!e||e>=o)n=s?r.join(""):i.concat(r,o),r.length=0
else{if(e<r[0].length)n=(l=r[0]).slice(0,e),r[0]=l.slice(e)
else if(e===r[0].length)n=r.shift()
else{n=s?"":new i(e)
for(var u=0,c=0,f=r.length;c<f&&u<e;c++){var l=r[0],d=Math.min(e-u,l.length)
s?n+=l.slice(0,d):l.copy(n,u,0,d),d<l.length?r[0]=l.slice(d):r.shift(),u+=d}}}return n}function _(e){var t=e._readableState
if(t.length>0)throw new Error("endReadable called on non-empty stream")
!t.endEmitted&&t.calledRead&&(t.ended=!0,n.nextTick(function(){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}))}function w(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}f.prototype.read=function(e){var t=this._readableState
t.calledRead=!0
var n,r=e
if(("number"!=typeof e||e>0)&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return p(this),null
if(0===(e=h(e,t))&&t.ended)return n=null,t.length>0&&t.decoder&&(n=b(e,t),t.length-=n.length),0===t.length&&_(this),n
var i=t.needReadable
return t.length-e<=t.highWaterMark&&(i=!0),(t.ended||t.reading)&&(i=!1),i&&(t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1),i&&!t.reading&&(e=h(r,t)),null===(n=e>0?b(e,t):null)&&(t.needReadable=!0,e=0),t.length-=e,0!==t.length||t.ended||(t.needReadable=!0),t.ended&&!t.endEmitted&&0===t.length&&_(this),n},f.prototype._read=function(e){this.emit("error",new Error("not implemented"))},f.prototype.pipe=function(e,t){var i=this,s=this._readableState
switch(s.pipesCount){case 0:s.pipes=e
break
case 1:s.pipes=[s.pipes,e]
break
default:s.pipes.push(e)}s.pipesCount+=1
var a=(!t||!1!==t.end)&&e!==n.stdout&&e!==n.stderr?c:l
function u(e){e===i&&l()}function c(){e.end()}s.endEmitted?n.nextTick(a):i.once("end",a),e.on("unpipe",u)
var f=function(e){return function(){var t=e._readableState
t.awaitDrain--,0===t.awaitDrain&&v(e)}}(i)
function l(){e.removeListener("close",h),e.removeListener("finish",p),e.removeListener("drain",f),e.removeListener("error",d),e.removeListener("unpipe",u),i.removeListener("end",c),i.removeListener("end",l),e._writableState&&!e._writableState.needDrain||f()}function d(t){g(),e.removeListener("error",d),0===o.listenerCount(e,"error")&&e.emit("error",t)}function h(){e.removeListener("finish",p),g()}function p(){e.removeListener("close",h),g()}function g(){i.unpipe(e)}return e.on("drain",f),e._events&&e._events.error?r(e._events.error)?e._events.error.unshift(d):e._events.error=[d,e._events.error]:e.on("error",d),e.once("close",h),e.once("finish",p),e.emit("pipe",i),s.flowing||(this.on("readable",y),s.flowing=!0,n.nextTick(function(){v(i)})),e},f.prototype.unpipe=function(e){var t=this._readableState
if(0===t.pipesCount)return this
if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,this.removeListener("readable",y),t.flowing=!1,e&&e.emit("unpipe",this),this)
if(!e){var n=t.pipes,r=t.pipesCount
t.pipes=null,t.pipesCount=0,this.removeListener("readable",y),t.flowing=!1
for(var i=0;i<r;i++)n[i].emit("unpipe",this)
return this}return-1===(i=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1}(t.pipes,e))?this:(t.pipes.splice(i,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this),this)},f.prototype.on=function(e,t){var n=a.prototype.on.call(this,e,t)
if("data"!==e||this._readableState.flowing||m(this),"readable"===e&&this.readable){var r=this._readableState
r.readableListening||(r.readableListening=!0,r.emittedReadable=!1,r.needReadable=!0,r.reading?r.length&&p(this):this.read(0))}return n},f.prototype.addListener=f.prototype.on,f.prototype.resume=function(){m(this),this.read(0),this.emit("resume")},f.prototype.pause=function(){m(this,!0),this.emit("pause")},f.prototype.wrap=function(e){var t=this._readableState,n=!1,r=this
for(var i in e.on("end",function(){if(t.decoder&&!t.ended){var e=t.decoder.end()
e&&e.length&&r.push(e)}r.push(null)}),e.on("data",function(i){(t.decoder&&(i=t.decoder.write(i)),t.objectMode&&null==i)||(t.objectMode||i&&i.length)&&(r.push(i)||(n=!0,e.pause()))}),e)"function"==typeof e[i]&&void 0===this[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i))
return w(["error","close","destroy","pause","resume"],function(t){e.on(t,r.emit.bind(r,t))}),r._read=function(t){n&&(n=!1,e.resume())},r},f._fromList=b}).call(this,e("_process"))},{_process:170,buffer:162,"core-util-is":4,events:164,inherits:21,isarray:146,stream:184,"string_decoder/":144}],150:[function(e,t,n){t.exports=s
var r=e("./_stream_duplex"),i=e("core-util-is")
function o(e,t){this.afterTransform=function(e,n){return function(e,t,n){var r=e._transformState
r.transforming=!1
var i=r.writecb
if(!i)return e.emit("error",new Error("no writecb in Transform class"))
r.writechunk=null,r.writecb=null,null!=n&&e.push(n)
i&&i(t)
var o=e._readableState
o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&e._read(o.highWaterMark)}(t,e,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function s(e){if(!(this instanceof s))return new s(e)
r.call(this,e)
this._transformState=new o(e,this)
var t=this
this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(e){a(t,e)}):a(t)})}function a(e,t){if(t)return e.emit("error",t)
var n=e._writableState,r=(e._readableState,e._transformState)
if(n.length)throw new Error("calling transform done when ws.length != 0")
if(r.transforming)throw new Error("calling transform done when still transforming")
return e.push(null)}i.inherits=e("inherits"),i.inherits(s,r),s.prototype.push=function(e,t){return this._transformState.needTransform=!1,r.prototype.push.call(this,e,t)},s.prototype._transform=function(e,t,n){throw new Error("not implemented")},s.prototype._write=function(e,t,n){var r=this._transformState
if(r.writecb=n,r.writechunk=e,r.writeencoding=t,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},s.prototype._read=function(e){var t=this._transformState
null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0}},{"./_stream_duplex":147,"core-util-is":4,inherits:21}],151:[function(e,t,n){(function(n){t.exports=u
var r=e("buffer").Buffer
u.WritableState=a
var i=e("core-util-is")
i.inherits=e("inherits")
var o=e("stream")
function s(e,t,n){this.chunk=e,this.encoding=t,this.callback=n}function a(e,t){var r=(e=e||{}).highWaterMark
this.highWaterMark=r||0===r?r:16384,this.objectMode=!!e.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1
var i=!1===e.decodeStrings
this.decodeStrings=!i,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){(function(e,t){var r=e._writableState,i=r.sync,o=r.writecb
if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(r),t)(function(e,t,r,i,o){r?n.nextTick(function(){o(i)}):o(i)
e._writableState.errorEmitted=!0,e.emit("error",i)})(e,0,i,t,o)
else{var s=l(e,r)
s||r.bufferProcessing||!r.buffer.length||function(e,t){t.bufferProcessing=!0
for(var n=0;n<t.buffer.length;n++){var r=t.buffer[n],i=r.chunk,o=r.encoding,s=r.callback,a=t.objectMode?1:i.length
if(c(e,t,a,i,o,s),t.writing){n++
break}}t.bufferProcessing=!1,n<t.buffer.length?t.buffer=t.buffer.slice(n):t.buffer.length=0}(e,r),i?n.nextTick(function(){f(e,r,s,o)}):f(e,r,s,o)}})(t,e)},this.writecb=null,this.writelen=0,this.buffer=[],this.errorEmitted=!1}function u(t){var n=e("./_stream_duplex")
if(!(this instanceof u||this instanceof n))return new u(t)
this._writableState=new a(t,this),this.writable=!0,o.call(this)}function c(e,t,n,r,i,o){t.writelen=n,t.writecb=o,t.writing=!0,t.sync=!0,e._write(r,i,t.onwrite),t.sync=!1}function f(e,t,n,r){n||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),r(),n&&d(e,t)}function l(e,t){return t.ending&&0===t.length&&!t.finished&&!t.writing}function d(e,t){var n=l(0,t)
return n&&(t.finished=!0,e.emit("finish")),n}i.inherits(u,o),u.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},u.prototype.write=function(e,t,i){var o=this._writableState,a=!1
return"function"==typeof t&&(i=t,t=null),r.isBuffer(e)?t="buffer":t||(t=o.defaultEncoding),"function"!=typeof i&&(i=function(){}),o.ended?function(e,t,r){var i=new Error("write after end")
e.emit("error",i),n.nextTick(function(){r(i)})}(this,0,i):function(e,t,i,o){var s=!0
if(!r.isBuffer(i)&&"string"!=typeof i&&null!=i&&!t.objectMode){var a=new TypeError("Invalid non-string/buffer chunk")
e.emit("error",a),n.nextTick(function(){o(a)}),s=!1}return s}(this,o,e,i)&&(a=function(e,t,n,i,o){n=function(e,t,n){return e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=new r(t,n)),t}(t,n,i),r.isBuffer(n)&&(i="buffer")
var a=t.objectMode?1:n.length
t.length+=a
var u=t.length<t.highWaterMark
u||(t.needDrain=!0)
t.writing?t.buffer.push(new s(n,i,o)):c(e,t,a,n,i,o)
return u}(this,o,e,t,i)),a},u.prototype._write=function(e,t,n){n(new Error("not implemented"))},u.prototype.end=function(e,t,r){var i=this._writableState
"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!=e&&this.write(e,t),i.ending||i.finished||function(e,t,r){t.ending=!0,d(e,t),r&&(t.finished?n.nextTick(r):e.once("finish",r))
t.ended=!0}(this,i,r)}}).call(this,e("_process"))},{"./_stream_duplex":147,_process:170,buffer:162,"core-util-is":4,inherits:21,stream:184}],152:[function(e,t,n){var r=e("stream");(n=t.exports=e("./lib/_stream_readable.js")).Stream=r,n.Readable=n,n.Writable=e("./lib/_stream_writable.js"),n.Duplex=e("./lib/_stream_duplex.js"),n.Transform=e("./lib/_stream_transform.js"),n.PassThrough=e("./lib/_stream_passthrough.js")},{"./lib/_stream_duplex.js":147,"./lib/_stream_passthrough.js":148,"./lib/_stream_readable.js":149,"./lib/_stream_transform.js":150,"./lib/_stream_writable.js":151,stream:184}],153:[function(e,t,n){(function(){"use strict"
var n=e("lodash.isnull"),r=e("validate.io-undefined"),i=Object.prototype.toString
t.exports=function(e){return n(e)?"[object Null]":r(e)?"[object Undefined]":i.call(e)}})()},{"lodash.isnull":40,"validate.io-undefined":155}],154:[function(e,t,n){(function(e){function n(t){try{if(!e.localStorage)return!1}catch(r){return!1}var n=e.localStorage[t]
return null!=n&&"true"===String(n).toLowerCase()}t.exports=function(e,t){if(n("noDeprecation"))return e
var r=!1
return function(){if(!r){if(n("throwDeprecation"))throw new Error(t)
n("traceDeprecation")?console.trace(t):console.warn(t),r=!0}return e.apply(this,arguments)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],155:[function(e,t,n){"use strict"
t.exports=function(e){return void 0===e}},{}],156:[function(e,t,n){"use strict"
function r(e,t,n){var r=n[n.length-1]
e===r.element&&(n.pop(),r=n[n.length-1])
var i=r.element,o=r.index
if(Array.isArray(i))i.push(e)
else if(o===t.length-2){i[t.pop()]=e}else t.push(e)}n.stringify=function(e){var t=[]
t.push({obj:e})
for(var n,r,i,o,s,a,u,c,f,l,d="";n=t.pop();)if(r=n.obj,d+=n.prefix||"",i=n.val||"")d+=i
else if("object"!=typeof r)d+=void 0===r?null:JSON.stringify(r)
else if(null===r)d+="null"
else if(Array.isArray(r)){for(t.push({val:"]"}),o=r.length-1;o>=0;o--)s=0===o?"":",",t.push({obj:r[o],prefix:s})
t.push({val:"["})}else{for(u in a=[],r)r.hasOwnProperty(u)&&a.push(u)
for(t.push({val:"}"}),o=a.length-1;o>=0;o--)f=r[c=a[o]],l=o>0?",":"",l+=JSON.stringify(c)+":",t.push({obj:f,prefix:l})
t.push({val:"{"})}return d},n.parse=function(e){for(var t,n,i,o,s,a,u,c,f,l=[],d=[],h=0;;)if("}"!==(t=e[h++])&&"]"!==t&&void 0!==t)switch(t){case" ":case"\t":case"\n":case":":case",":break
case"n":h+=3,r(null,l,d)
break
case"t":h+=3,r(!0,l,d)
break
case"f":h+=4,r(!1,l,d)
break
case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"-":for(n="",h--;;){if(i=e[h++],!/[\d\.\-e\+]/.test(i)){h--
break}n+=i}r(parseFloat(n),l,d)
break
case'"':for(o="",s=void 0,a=0;'"'!==(u=e[h++])||"\\"===s&&a%2==1;)o+=u,"\\"===(s=u)?a++:a=0
r(JSON.parse('"'+o+'"'),l,d)
break
case"[":c={element:[],index:l.length},l.push(c.element),d.push(c)
break
case"{":f={element:{},index:l.length},l.push(f.element),d.push(f)
break
default:throw new Error("unexpectedly reached end of input: "+t)}else{if(1===l.length)return l.pop()
r(l.pop(),l,d)}}},{}],157:[function(e,t,n){t.exports=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t]
for(var i in n)r.call(n,i)&&(e[i]=n[i])}return e}
var r=Object.prototype.hasOwnProperty},{}],158:[function(e,t,n){self.PouchDB=e("pouchdb-core").plugin(e("pouchdb-adapter-idb")).plugin(e("pouchdb-adapter-http")).plugin(e("pouchdb-mapreduce")).plugin(e("pouchdb-replication")).plugin(e("pouchdb-adapter-memory")).plugin(e("pouchdb-find"))},{"pouchdb-adapter-http":59,"pouchdb-adapter-idb":61,"pouchdb-adapter-memory":76,"pouchdb-core":88,"pouchdb-find":111,"pouchdb-mapreduce":120,"pouchdb-replication":125}],159:[function(e,t,n){"use strict"
n.byteLength=function(e){return 3*e.length/4-c(e)},n.toByteArray=function(e){var t,n,r,s,a,u,f=e.length
a=c(e),u=new o(3*f/4-a),r=a>0?f-4:f
var l=0
for(t=0,n=0;t<r;t+=4,n+=3)s=i[e.charCodeAt(t)]<<18|i[e.charCodeAt(t+1)]<<12|i[e.charCodeAt(t+2)]<<6|i[e.charCodeAt(t+3)],u[l++]=s>>16&255,u[l++]=s>>8&255,u[l++]=255&s
2===a?(s=i[e.charCodeAt(t)]<<2|i[e.charCodeAt(t+1)]>>4,u[l++]=255&s):1===a&&(s=i[e.charCodeAt(t)]<<10|i[e.charCodeAt(t+1)]<<4|i[e.charCodeAt(t+2)]>>2,u[l++]=s>>8&255,u[l++]=255&s)
return u},n.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o="",s=[],a=0,u=n-i;a<u;a+=16383)s.push(f(e,a,a+16383>u?u:a+16383))
1===i?(t=e[n-1],o+=r[t>>2],o+=r[t<<4&63],o+="=="):2===i&&(t=(e[n-2]<<8)+e[n-1],o+=r[t>>10],o+=r[t>>4&63],o+=r[t<<2&63],o+="=")
return s.push(o),s.join("")}
for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=s.length;a<u;++a)r[a]=s[a],i[s.charCodeAt(a)]=a
function c(e){var t=e.length
if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
return"="===e[t-2]?2:"="===e[t-1]?1:0}function f(e,t,n){for(var i,o,s=[],a=t;a<n;a+=3)i=(e[a]<<16)+(e[a+1]<<8)+e[a+2],s.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o])
return s.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},{}],160:[function(e,t,n){},{}],161:[function(e,t,n){arguments[4][3][0].apply(n,arguments)},{buffer:162,dup:3}],162:[function(e,t,n){"use strict"
var r=e("base64-js"),i=e("ieee754")
n.Buffer=a,n.SlowBuffer=function(e){+e!=e&&(e=0)
return a.alloc(+e)},n.INSPECT_MAX_BYTES=50
var o=2147483647
function s(e){if(e>o)throw new RangeError("Invalid typed array length")
var t=new Uint8Array(e)
return t.__proto__=a.prototype,t}function a(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string")
return f(e)}return u(e,t,n)}function u(e,t,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number')
return e instanceof ArrayBuffer?function(e,t,n){if(t<0||e.byteLength<t)throw new RangeError("'offset' is out of bounds")
if(e.byteLength<t+(n||0))throw new RangeError("'length' is out of bounds")
var r
r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n)
return r.__proto__=a.prototype,r}(e,t,n):"string"==typeof e?function(e,t){"string"==typeof t&&""!==t||(t="utf8")
if(!a.isEncoding(t))throw new TypeError('"encoding" must be a valid string encoding')
var n=0|h(e,t),r=s(n),i=r.write(e,t)
i!==n&&(r=r.slice(0,i))
return r}(e,t):function(e){if(a.isBuffer(e)){var t=0|d(e.length),n=s(t)
return 0===n.length?n:(e.copy(n,0,0,t),n)}if(e){if($(e)||"length"in e)return"number"!=typeof e.length||F(e.length)?s(0):l(e)
if("Buffer"===e.type&&Array.isArray(e.data))return l(e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e)}function c(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number')
if(e<0)throw new RangeError('"size" argument must not be negative')}function f(e){return c(e),s(e<0?0:0|d(e))}function l(e){for(var t=e.length<0?0:0|d(e.length),n=s(t),r=0;r<t;r+=1)n[r]=255&e[r]
return n}function d(e){if(e>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes")
return 0|e}function h(e,t){if(a.isBuffer(e))return e.length
if($(e)||e instanceof ArrayBuffer)return e.byteLength
"string"!=typeof e&&(e=""+e)
var n=e.length
if(0===n)return 0
for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n
case"utf8":case"utf-8":case void 0:return q(e).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n
case"hex":return n>>>1
case"base64":return N(e).length
default:if(r)return q(e).length
t=(""+t).toLowerCase(),r=!0}}function p(e,t,n){var r=e[t]
e[t]=e[n],e[n]=r}function g(e,t,n,r,i){if(0===e.length)return-1
if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),F(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1
n=e.length-1}else if(n<0){if(!i)return-1
n=0}if("string"==typeof t&&(t=a.from(t,r)),a.isBuffer(t))return 0===t.length?-1:v(e,t,n,r,i)
if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):v(e,[t],n,r,i)
throw new TypeError("val must be string, number or Buffer")}function v(e,t,n,r,i){var o,s=1,a=e.length,u=t.length
if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1
s=2,a/=2,u/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){var f=-1
for(o=n;o<a;o++)if(c(e,o)===c(t,-1===f?0:o-f)){if(-1===f&&(f=o),o-f+1===u)return f*s}else-1!==f&&(o-=o-f),f=-1}else for(n+u>a&&(n=a-u),o=n;o>=0;o--){for(var l=!0,d=0;d<u;d++)if(c(e,o+d)!==c(t,d)){l=!1
break}if(l)return o}return-1}function y(e,t,n,r){n=Number(n)||0
var i=e.length-n
r?(r=Number(r))>i&&(r=i):r=i
var o=t.length
if(o%2!=0)throw new TypeError("Invalid hex string")
r>o/2&&(r=o/2)
for(var s=0;s<r;++s){var a=parseInt(t.substr(2*s,2),16)
if(F(a))return s
e[n+s]=a}return s}function m(e,t,n,r){return P(q(t,e.length-n),e,n,r)}function b(e,t,n,r){return P(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n))
return t}(t),e,n,r)}function _(e,t,n,r){return b(e,t,n,r)}function w(e,t,n,r){return P(N(t),e,n,r)}function k(e,t,n,r){return P(function(e,t){for(var n,r,i,o=[],s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r)
return o}(t,e.length-n),e,n,r)}function E(e,t,n){return 0===t&&n===e.length?r.fromByteArray(e):r.fromByteArray(e.slice(t,n))}function S(e,t,n){n=Math.min(e.length,n)
for(var r=[],i=t;i<n;){var o,s,a,u,c=e[i],f=null,l=c>239?4:c>223?3:c>191?2:1
if(i+l<=n)switch(l){case 1:c<128&&(f=c)
break
case 2:128==(192&(o=e[i+1]))&&(u=(31&c)<<6|63&o)>127&&(f=u)
break
case 3:o=e[i+1],s=e[i+2],128==(192&o)&&128==(192&s)&&(u=(15&c)<<12|(63&o)<<6|63&s)>2047&&(u<55296||u>57343)&&(f=u)
break
case 4:o=e[i+1],s=e[i+2],a=e[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(u=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(f=u)}null===f?(f=65533,l=1):f>65535&&(f-=65536,r.push(f>>>10&1023|55296),f=56320|1023&f),r.push(f),i+=l}return function(e){var t=e.length
if(t<=x)return String.fromCharCode.apply(String,e)
var n="",r=0
for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=x))
return n}(r)}n.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1)
return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()}catch(t){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),"undefined"!=typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),a.poolSize=8192,a.from=function(e,t,n){return u(e,t,n)},a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,a.alloc=function(e,t,n){return function(e,t,n){return c(e),e<=0?s(e):void 0!==t?"string"==typeof n?s(e).fill(t,n):s(e).fill(t):s(e)}(e,t,n)},a.allocUnsafe=function(e){return f(e)},a.allocUnsafeSlow=function(e){return f(e)},a.isBuffer=function(e){return null!=e&&!0===e._isBuffer},a.compare=function(e,t){if(!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError("Arguments must be Buffers")
if(e===t)return 0
for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i]
break}return n<r?-1:r<n?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===e.length)return a.alloc(0)
var n
if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length
var r=a.allocUnsafe(t),i=0
for(n=0;n<e.length;++n){var o=e[n]
if(!a.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers')
o.copy(r,i),i+=o.length}return r},a.byteLength=h,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var e=this.length
if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var t=0;t<e;t+=2)p(this,t,t+1)
return this},a.prototype.swap32=function(){var e=this.length
if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var t=0;t<e;t+=4)p(this,t,t+3),p(this,t+1,t+2)
return this},a.prototype.swap64=function(){var e=this.length
if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var t=0;t<e;t+=8)p(this,t,t+7),p(this,t+1,t+6),p(this,t+2,t+5),p(this,t+3,t+4)
return this},a.prototype.toString=function(){var e=this.length
return 0===e?"":0===arguments.length?S(this,0,e):function(e,t,n){var r=!1
if((void 0===t||t<0)&&(t=0),t>this.length)return""
if((void 0===n||n>this.length)&&(n=this.length),n<=0)return""
if((n>>>=0)<=(t>>>=0))return""
for(e||(e="utf8");;)switch(e){case"hex":return A(this,t,n)
case"utf8":case"utf-8":return S(this,t,n)
case"ascii":return j(this,t,n)
case"latin1":case"binary":return O(this,t,n)
case"base64":return E(this,t,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,n)
default:if(r)throw new TypeError("Unknown encoding: "+e)
e=(e+"").toLowerCase(),r=!0}}.apply(this,arguments)},a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer")
return this===e||0===a.compare(this,e)},a.prototype.inspect=function(){var e="",t=n.INSPECT_MAX_BYTES
return this.length>0&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},a.prototype.compare=function(e,t,n,r,i){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer")
if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index")
if(r>=i&&t>=n)return 0
if(r>=i)return-1
if(t>=n)return 1
if(this===e)return 0
for(var o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0),u=Math.min(o,s),c=this.slice(r,i),f=e.slice(t,n),l=0;l<u;++l)if(c[l]!==f[l]){o=c[l],s=f[l]
break}return o<s?-1:s<o?1:0},a.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},a.prototype.indexOf=function(e,t,n){return g(this,e,t,n,!0)},a.prototype.lastIndexOf=function(e,t,n){return g(this,e,t,n,!1)},a.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0
else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0
else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t
if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds")
r||(r="utf8")
for(var o=!1;;)switch(r){case"hex":return y(this,e,t,n)
case"utf8":case"utf-8":return m(this,e,t,n)
case"ascii":return b(this,e,t,n)
case"latin1":case"binary":return _(this,e,t,n)
case"base64":return w(this,e,t,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,t,n)
default:if(o)throw new TypeError("Unknown encoding: "+r)
r=(""+r).toLowerCase(),o=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var x=4096
function j(e,t,n){var r=""
n=Math.min(e.length,n)
for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i])
return r}function O(e,t,n){var r=""
n=Math.min(e.length,n)
for(var i=t;i<n;++i)r+=String.fromCharCode(e[i])
return r}function A(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r)
for(var i="",o=t;o<n;++o)i+=M(e[o])
return i}function C(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1])
return i}function D(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint")
if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function B(e,t,n,r,i,o){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance')
if(t>i||t<o)throw new RangeError('"value" argument is out of bounds')
if(n+r>e.length)throw new RangeError("Index out of range")}function L(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range")
if(n<0)throw new RangeError("Index out of range")}function I(e,t,n,r,o){return t=+t,n>>>=0,o||L(e,0,n,4),i.write(e,t,n,r,23,4),n+4}function R(e,t,n,r,o){return t=+t,n>>>=0,o||L(e,0,n,8),i.write(e,t,n,r,52,8),n+8}a.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e)
var r=this.subarray(e,t)
return r.__proto__=a.prototype,r},a.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length)
for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i
return r},a.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length)
for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i
return r},a.prototype.readUInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),this[e]},a.prototype.readUInt16LE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUInt16BE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length)
for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i
return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},a.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length)
for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i
return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},a.prototype.readInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},a.prototype.readInt16LE=function(e,t){e>>>=0,t||D(e,2,this.length)
var n=this[e]|this[e+1]<<8
return 32768&n?4294901760|n:n},a.prototype.readInt16BE=function(e,t){e>>>=0,t||D(e,2,this.length)
var n=this[e+1]|this[e]<<8
return 32768&n?4294901760|n:n},a.prototype.readInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e>>>=0,t||D(e,4,this.length),i.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e>>>=0,t||D(e,4,this.length),i.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e>>>=0,t||D(e,8,this.length),i.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e>>>=0,t||D(e,8,this.length),i.read(this,e,!1,52,8)},a.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||B(this,e,t,n,Math.pow(2,8*n)-1,0)
var i=1,o=0
for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255
return t+n},a.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||B(this,e,t,n,Math.pow(2,8*n)-1,0)
var i=n-1,o=1
for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255
return t+n},a.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||B(this,e,t,1,255,0),this[t]=255&e,t+1},a.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||B(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||B(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||B(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},a.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||B(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1)
B(this,e,t,n,i-1,-i)}var o=0,s=1,a=0
for(this[t]=255&e;++o<n&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255
return t+n},a.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1)
B(this,e,t,n,i-1,-i)}var o=n-1,s=1,a=0
for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255
return t+n},a.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||B(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||B(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2}
a.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||B(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||B(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||B(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeFloatLE=function(e,t,n){return I(this,e,t,!0,n)},a.prototype.writeFloatBE=function(e,t,n){return I(this,e,t,!1,n)},a.prototype.writeDoubleLE=function(e,t,n){return R(this,e,t,!0,n)},a.prototype.writeDoubleBE=function(e,t,n){return R(this,e,t,!1,n)},a.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0
if(0===e.length||0===this.length)return 0
if(t<0)throw new RangeError("targetStart out of bounds")
if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds")
if(r<0)throw new RangeError("sourceEnd out of bounds")
r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n)
var i,o=r-n
if(this===e&&n<t&&t<r)for(i=o-1;i>=0;--i)e[i+t]=this[i+n]
else if(o<1e3)for(i=0;i<o;++i)e[i+t]=this[i+n]
else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t)
return o},a.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var i=e.charCodeAt(0)
i<256&&(e=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string")
if("string"==typeof r&&!a.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255)
if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index")
if(n<=t)return this
var o
if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e
else{var s=a.isBuffer(e)?e:new a(e,r),u=s.length
for(o=0;o<n-t;++o)this[o+t]=s[o%u]}return this}
var T=/[^+\/0-9A-Za-z-_]/g
function M(e){return e<16?"0"+e.toString(16):e.toString(16)}function q(e,t){var n
t=t||1/0
for(var r=e.length,i=null,o=[],s=0;s<r;++s){if((n=e.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189)
continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189)
continue}i=n
continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n
continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189)
if(i=null,n<128){if((t-=1)<0)break
o.push(n)}else if(n<2048){if((t-=2)<0)break
o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break
o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point")
if((t-=4)<0)break
o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function N(e){return r.toByteArray(function(e){if((e=e.trim().replace(T,"")).length<2)return""
for(;e.length%4!=0;)e+="="
return e}(e))}function P(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i]
return i}function $(e){return"function"==typeof ArrayBuffer.isView&&ArrayBuffer.isView(e)}function F(e){return e!=e}},{"base64-js":159,ieee754:165}],163:[function(e,t,n){(function(e){function t(e){return Object.prototype.toString.call(e)}n.isArray=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===t(e)},n.isBoolean=function(e){return"boolean"==typeof e},n.isNull=function(e){return null===e},n.isNullOrUndefined=function(e){return null==e},n.isNumber=function(e){return"number"==typeof e},n.isString=function(e){return"string"==typeof e},n.isSymbol=function(e){return"symbol"==typeof e},n.isUndefined=function(e){return void 0===e},n.isRegExp=function(e){return"[object RegExp]"===t(e)},n.isObject=function(e){return"object"==typeof e&&null!==e},n.isDate=function(e){return"[object Date]"===t(e)},n.isError=function(e){return"[object Error]"===t(e)||e instanceof Error},n.isFunction=function(e){return"function"==typeof e},n.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},n.isBuffer=e.isBuffer}).call(this,{isBuffer:e("../../is-buffer/index.js")})},{"../../is-buffer/index.js":167}],164:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number")
return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,a,u,c
if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t
var f=new Error('Uncaught, unspecified "error" event. ('+t+")")
throw f.context=t,f}if(s(n=this._events[e]))return!1
if(i(n))switch(arguments.length){case 1:n.call(this)
break
case 2:n.call(this,arguments[1])
break
case 3:n.call(this,arguments[1],arguments[2])
break
default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(o(n))for(a=Array.prototype.slice.call(arguments,1),r=(c=n.slice()).length,u=0;u<r;u++)c[u].apply(this,a)
return!0},r.prototype.addListener=function(e,t){var n
if(!i(t))throw TypeError("listener must be a function")
return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(n=s(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function")
var n=!1
function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var n,r,s,a
if(!i(t))throw TypeError("listener must be a function")
if(!this._events||!this._events[e])return this
if(s=(n=this._events[e]).length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t)
else if(o(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a
break}if(r<0)return this
1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n
if(!this._events)return this
if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this
if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t)
return this.removeAllListeners("removeListener"),this._events={},this}if(i(n=this._events[e]))this.removeListener(e,n)
else if(n)for(;n.length;)this.removeListener(e,n[n.length-1])
return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e]
if(i(t))return 1
if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],165:[function(e,t,n){n.read=function(e,t,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,f=-7,l=n?i-1:0,d=n?-1:1,h=e[t+l]
for(l+=d,o=h&(1<<-f)-1,h>>=-f,f+=a;f>0;o=256*o+e[t+l],l+=d,f-=8);for(s=o&(1<<-f)-1,o>>=-f,f+=r;f>0;s=256*s+e[t+l],l+=d,f-=8);if(0===o)o=1-c
else{if(o===u)return s?NaN:1/0*(h?-1:1)
s+=Math.pow(2,r),o-=c}return(h?-1:1)*s*Math.pow(2,o-r)},n.write=function(e,t,n,r,i,o){var s,a,u,c=8*o-i-1,f=(1<<c)-1,l=f>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:o-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0
for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=f):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),(t+=s+l>=1?d/u:d*Math.pow(2,1-l))*u>=2&&(s++,u/=2),s+l>=f?(a=0,s=f):s+l>=1?(a=(t*u-1)*Math.pow(2,i),s+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,i),s=0));i>=8;e[n+h]=255&a,h+=p,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+h]=255&s,h+=p,s/=256,c-=8);e[n+h-p]|=128*g}},{}],166:[function(e,t,n){arguments[4][21][0].apply(n,arguments)},{dup:21}],167:[function(e,t,n){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}t.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},{}],168:[function(e,t,n){arguments[4][27][0].apply(n,arguments)},{dup:27}],169:[function(e,t,n){arguments[4][134][0].apply(n,arguments)},{_process:170,dup:134}],170:[function(e,t,n){var r,i,o=t.exports={}
function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0)
if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0)
try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}(function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}})()
var c,f=[],l=!1,d=-1
function h(){l&&c&&(l=!1,c.length?f=c.concat(f):d=-1,f.length&&p())}function p(){if(!l){var e=u(h)
l=!0
for(var t=f.length;t;){for(c=f,f=[];++d<t;)c&&c[d].run()
d=-1,t=f.length}c=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e)
if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e)
try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
f.push(new g(e,t)),1!==f.length||l||u(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],171:[function(e,t,n){t.exports=e("./lib/_stream_duplex.js")},{"./lib/_stream_duplex.js":172}],172:[function(e,t,n){arguments[4][65][0].apply(n,arguments)},{"./_stream_readable":174,"./_stream_writable":176,"core-util-is":163,dup:65,inherits:166,"process-nextick-args":169}],173:[function(e,t,n){arguments[4][66][0].apply(n,arguments)},{"./_stream_transform":175,"core-util-is":163,dup:66,inherits:166}],174:[function(e,t,n){arguments[4][67][0].apply(n,arguments)},{"./_stream_duplex":172,"./internal/streams/BufferList":177,"./internal/streams/stream":178,_process:170,buffer:162,"buffer-shims":161,"core-util-is":163,dup:67,events:164,inherits:166,isarray:168,"process-nextick-args":169,"string_decoder/":179,util:160}],175:[function(e,t,n){arguments[4][68][0].apply(n,arguments)},{"./_stream_duplex":172,"core-util-is":163,dup:68,inherits:166}],176:[function(e,t,n){arguments[4][69][0].apply(n,arguments)},{"./_stream_duplex":172,"./internal/streams/stream":178,_process:170,buffer:162,"buffer-shims":161,"core-util-is":163,dup:69,inherits:166,"process-nextick-args":169,"util-deprecate":185}],177:[function(e,t,n){arguments[4][70][0].apply(n,arguments)},{buffer:162,"buffer-shims":161,dup:70}],178:[function(e,t,n){arguments[4][71][0].apply(n,arguments)},{dup:71,events:164}],179:[function(e,t,n){arguments[4][74][0].apply(n,arguments)},{buffer:162,"buffer-shims":161,dup:74}],180:[function(e,t,n){t.exports=e("./readable").PassThrough},{"./readable":181}],181:[function(e,t,n){arguments[4][72][0].apply(n,arguments)},{"./lib/_stream_duplex.js":172,"./lib/_stream_passthrough.js":173,"./lib/_stream_readable.js":174,"./lib/_stream_transform.js":175,"./lib/_stream_writable.js":176,dup:72}],182:[function(e,t,n){arguments[4][73][0].apply(n,arguments)},{"./readable":181,dup:73}],183:[function(e,t,n){t.exports=e("./lib/_stream_writable.js")},{"./lib/_stream_writable.js":176}],184:[function(e,t,n){t.exports=i
var r=e("events").EventEmitter
function i(){r.call(this)}e("inherits")(i,r),i.Readable=e("readable-stream/readable.js"),i.Writable=e("readable-stream/writable.js"),i.Duplex=e("readable-stream/duplex.js"),i.Transform=e("readable-stream/transform.js"),i.PassThrough=e("readable-stream/passthrough.js"),i.Stream=i,i.prototype.pipe=function(e,t){var n=this
function i(t){e.writable&&!1===e.write(t)&&n.pause&&n.pause()}function o(){n.readable&&n.resume&&n.resume()}n.on("data",i),e.on("drain",o),e._isStdio||t&&!1===t.end||(n.on("end",a),n.on("close",u))
var s=!1
function a(){s||(s=!0,e.end())}function u(){s||(s=!0,"function"==typeof e.destroy&&e.destroy())}function c(e){if(f(),0===r.listenerCount(this,"error"))throw e}function f(){n.removeListener("data",i),e.removeListener("drain",o),n.removeListener("end",a),n.removeListener("close",u),n.removeListener("error",c),e.removeListener("error",c),n.removeListener("end",f),n.removeListener("close",f),e.removeListener("close",f)}return n.on("error",c),e.on("error",c),n.on("end",f),n.on("close",f),e.on("close",f),e.emit("pipe",n),e}},{events:164,inherits:166,"readable-stream/duplex.js":171,"readable-stream/passthrough.js":180,"readable-stream/readable.js":181,"readable-stream/transform.js":182,"readable-stream/writable.js":183}],185:[function(e,t,n){arguments[4][154][0].apply(n,arguments)},{dup:154}],186:[function(e,t,n){arguments[4][21][0].apply(n,arguments)},{dup:21}],187:[function(e,t,n){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],188:[function(e,t,n){(function(t,r){var i=/%[sdj%]/g
n.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(a(arguments[n]))
return t.join(" ")}n=1
for(var r=arguments,o=r.length,s=String(e).replace(i,function(e){if("%%"===e)return"%"
if(n>=o)return e
switch(e){case"%s":return String(r[n++])
case"%d":return Number(r[n++])
case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}}),u=r[n];n<o;u=r[++n])g(u)||!_(u)?s+=" "+u:s+=" "+a(u)
return s},n.deprecate=function(e,i){if(m(r.process))return function(){return n.deprecate(e,i).apply(this,arguments)}
if(!0===t.noDeprecation)return e
var o=!1
return function(){if(!o){if(t.throwDeprecation)throw new Error(i)
t.traceDeprecation?console.trace(i):console.error(i),o=!0}return e.apply(this,arguments)}}
var o,s={}
function a(e,t){var r={seen:[],stylize:c}
return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),p(t)?r.showHidden=t:t&&n._extend(r,t),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),f(r,e,r.depth)}function u(e,t){var n=a.styles[t]
return n?"["+a.colors[n][0]+"m"+e+"["+a.colors[n][1]+"m":e}function c(e,t){return e}function f(e,t,r){if(e.customInspect&&t&&E(t.inspect)&&t.inspect!==n.inspect&&(!t.constructor||t.constructor.prototype!==t)){var i=t.inspect(r,e)
return y(i)||(i=f(e,i,r)),i}var o=function(e,t){if(m(t))return e.stylize("undefined","undefined")
if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return e.stylize(n,"string")}if(v(t))return e.stylize(""+t,"number")
if(p(t))return e.stylize(""+t,"boolean")
if(g(t))return e.stylize("null","null")}(e,t)
if(o)return o
var s=Object.keys(t),a=function(e){var t={}
return e.forEach(function(e,n){t[e]=!0}),t}(s)
if(e.showHidden&&(s=Object.getOwnPropertyNames(t)),k(t)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return l(t)
if(0===s.length){if(E(t)){var u=t.name?": "+t.name:""
return e.stylize("[Function"+u+"]","special")}if(b(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp")
if(w(t))return e.stylize(Date.prototype.toString.call(t),"date")
if(k(t))return l(t)}var c,_="",S=!1,x=["{","}"];(h(t)&&(S=!0,x=["[","]"]),E(t))&&(_=" [Function"+(t.name?": "+t.name:"")+"]")
return b(t)&&(_=" "+RegExp.prototype.toString.call(t)),w(t)&&(_=" "+Date.prototype.toUTCString.call(t)),k(t)&&(_=" "+l(t)),0!==s.length||S&&0!=t.length?r<0?b(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),c=S?function(e,t,n,r,i){for(var o=[],s=0,a=t.length;s<a;++s)O(t,String(s))?o.push(d(e,t,n,r,String(s),!0)):o.push("")
return i.forEach(function(i){i.match(/^\d+$/)||o.push(d(e,t,n,r,i,!0))}),o}(e,t,r,a,s):s.map(function(n){return d(e,t,r,a,n,S)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]
return n[0]+t+" "+e.join(", ")+" "+n[1]}(c,_,x)):x[0]+_+x[1]}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,n,r,i,o){var s,a,u
if((u=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?a=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(a=e.stylize("[Setter]","special")),O(r,i)||(s="["+i+"]"),a||(e.seen.indexOf(u.value)<0?(a=g(n)?f(e,u.value,null):f(e,u.value,n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")):a=e.stylize("[Circular]","special")),m(s)){if(o&&i.match(/^\d+$/))return a;(s=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function h(e){return Array.isArray(e)}function p(e){return"boolean"==typeof e}function g(e){return null===e}function v(e){return"number"==typeof e}function y(e){return"string"==typeof e}function m(e){return void 0===e}function b(e){return _(e)&&"[object RegExp]"===S(e)}function _(e){return"object"==typeof e&&null!==e}function w(e){return _(e)&&"[object Date]"===S(e)}function k(e){return _(e)&&("[object Error]"===S(e)||e instanceof Error)}function E(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function x(e){return e<10?"0"+e.toString(10):e.toString(10)}n.debuglog=function(e){if(m(o)&&(o=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!s[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var r=t.pid
s[e]=function(){var t=n.format.apply(n,arguments)
console.error("%s %d: %s",e,r,t)}}else s[e]=function(){}
return s[e]},n.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=h,n.isBoolean=p,n.isNull=g,n.isNullOrUndefined=function(e){return null==e},n.isNumber=v,n.isString=y,n.isSymbol=function(e){return"symbol"==typeof e},n.isUndefined=m,n.isRegExp=b,n.isObject=_,n.isDate=w,n.isError=k,n.isFunction=E,n.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},n.isBuffer=e("./support/isBuffer")
var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}n.log=function(){var e,t
console.log("%s - %s",(e=new Date,t=[x(e.getHours()),x(e.getMinutes()),x(e.getSeconds())].join(":"),[e.getDate(),j[e.getMonth()],t].join(" ")),n.format.apply(n,arguments))},n.inherits=e("inherits"),n._extend=function(e,t){if(!t||!_(t))return e
for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]]
return e}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":187,_process:170,inherits:186}]},{},[158]),this.goog=this.goog||{},this.goog.offlineGoogleAnalytics=function(){"use strict"
var e="offline-google-analytics",t={NAME:"offline-google-analytics",STORE:"urls",VERSION:1},n=1728e5,r={ANALYTICS_JS_PATH:"/analytics.js",COLLECT_PATH:"/collect",HOST:"www.google-analytics.com"}
var i,o=(function(e){(function(){function t(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function n(e,n,r){var i,o=new Promise(function(o,s){t(i=e[n].apply(e,r)).then(o,s)})
return o.request=i,o}function r(e,t,n){n.forEach(function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})})}function i(e,t,r,i){i.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return n(this[t],i,arguments)})})}function o(e,t,n,r){r.forEach(function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})})}function s(e,t,r,i){i.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return function(e,t,r){var i=n(e,t,r)
return i.then(function(e){return e?new u(e,i.request):void 0})}(this[t],i,arguments)})})}function a(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function c(e){this._store=e}function f(e){this._tx=e,this.complete=new Promise(function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}})}function l(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new f(n)}function d(e){this._db=e}r(a,"_index",["name","keyPath","multiEntry","unique"]),i(a,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),s(a,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(u,"_cursor",["direction","key","primaryKey","value"]),i(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var n=this,r=arguments
return Promise.resolve().then(function(){return n._cursor[e].apply(n._cursor,r),t(n._request).then(function(e){return e?new u(e,n._request):void 0})})})}),c.prototype.createIndex=function(){return new a(this._store.createIndex.apply(this._store,arguments))},c.prototype.index=function(){return new a(this._store.index.apply(this._store,arguments))},r(c,"_store",["name","keyPath","indexNames","autoIncrement"]),i(c,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),s(c,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(c,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new c(this._tx.objectStore.apply(this._tx,arguments))},r(f,"_tx",["objectStoreNames","mode"]),o(f,"_tx",IDBTransaction,["abort"]),l.prototype.createObjectStore=function(){return new c(this._db.createObjectStore.apply(this._db,arguments))},r(l,"_db",["name","version","objectStoreNames"]),o(l,"_db",IDBDatabase,["deleteObjectStore","close"]),d.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},r(d,"_db",["name","version","objectStoreNames"]),o(d,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(e){[c,a].forEach(function(t){t.prototype[e.replace("open","iterate")]=function(){var t=function(e){return Array.prototype.slice.call(e)}(arguments),n=t[t.length-1],r=this._store||this._index,i=r[e].apply(r,t.slice(0,-1))
i.onsuccess=function(){n(i.result)}}})}),[a,c].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[]
return new Promise(function(i){n.iterateCursor(e,function(e){return e?(r.push(e.value),void 0!==t&&r.length==t?void i(r):void e.continue()):void i(r)})})})})
var h={open:function(e,t,r){var i=n(indexedDB,"open",[e,t]),o=i.request
return o.onupgradeneeded=function(e){r&&r(new l(o.result,e.oldVersion,o.transaction))},i.then(function(e){return new d(e)})},delete:function(e){return n(indexedDB,"deleteDatabase",[e])}}
e.exports=h,e.exports.default=e.exports})()}(i={exports:{}},i.exports),i.exports)
class s{constructor(e,t,n){if(null==e||null==t||null==n)throw Error("name, version, storeName must be passed to the constructor.")
this._name=e,this._version=t,this._storeName=n}_getDb(){return this._dbPromise?this._dbPromise:(this._dbPromise=o.open(this._name,this._version,e=>{e.createObjectStore(this._storeName)}).then(e=>e),this._dbPromise)}close(){return this._dbPromise?this._dbPromise.then(e=>{e.close(),this._dbPromise=null}):void 0}put(e,t){return this._getDb().then(n=>{const r=n.transaction(this._storeName,"readwrite")
return r.objectStore(this._storeName).put(t,e),r.complete})}delete(e){return this._getDb().then(t=>{const n=t.transaction(this._storeName,"readwrite")
return n.objectStore(this._storeName).delete(e),n.complete})}get(e){return this._getDb().then(t=>t.transaction(this._storeName).objectStore(this._storeName).get(e))}getAllValues(){return this._getDb().then(e=>e.transaction(this._storeName).objectStore(this._storeName).getAll())}getAllKeys(){return this._getDb().then(e=>e.transaction(this._storeName).objectStore(this._storeName).getAllKeys())}}const a=new s(t.NAME,t.VERSION,t.STORE)
class u{constructor({title:e,isPrimary:t}={}){this._isPrimary=t||!1,this._groupTitle=e||"",this._logs=[],this._childGroups=[],this._isFirefox=!1,/Firefox\/\d*\.\d*/.exec(navigator.userAgent)&&(this._isFirefox=!0),this._isEdge=!1,/Edge\/\d*\.\d*/.exec(navigator.userAgent)&&(this._isEdge=!0)}addLog(e){this._logs.push(e)}addChildGroup(e){0===e._logs.length||this._childGroups.push(e)}print(){return this._isEdge?void this._printEdgeFriendly():(this._openGroup(),this._logs.forEach(e=>{this._printLogDetails(e)}),this._childGroups.forEach(e=>{e.print()}),void this._closeGroup())}_printEdgeFriendly(){this._logs.forEach(e=>{let t=e.message
"string"==typeof t&&(t=t.replace(/%c/g,""))
const n=[t]
e.error&&n.push(e.error),e.args&&n.push(e.args),(e.logFunc||console.log)(...n)}),this._childGroups.forEach(e=>{e.print()})}_printLogDetails(e){const t=e.logFunc?e.logFunc:console.log
let n=[e.message]
e.colors&&!this._isEdge&&(n=n.concat(e.colors)),e.args&&(n=n.concat(e.args)),t(...n)}_openGroup(){if(this._isPrimary){if(0===this._childGroups.length)return
const e=this._logs.shift()
if(this._isFirefox)return void this._printLogDetails(e)
e.logFunc=console.group,this._printLogDetails(e)}else console.groupCollapsed(this._groupTitle)}_closeGroup(){this._isPrimary&&0===this._childGroups.length||console.groupEnd()}}var c={isDevBuild:function(){return!1},isLocalhost:function(){return!("localhost"!==location.hostname&&"[::1]"!==location.hostname&&!location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},isServiceWorkerGlobalScope:function(){return"ServiceWorkerGlobalScope"in self&&self instanceof ServiceWorkerGlobalScope}}
self.goog=self.goog||{},self.goog.LOG_LEVEL=self.goog.LOG_LEVEL||{none:-1,verbose:0,debug:1,warn:2,error:3}
const f="#bdc3c7",l="#7f8c8d",d="#2ecc71",h="#f1c40f",p="#e74c3c",g="#3498db"
var v=new class{constructor(){this._defaultLogLevel=c.isDevBuild()?self.goog.LOG_LEVEL.debug:self.goog.LOG_LEVEL.warn}log(e){this._printMessage(self.goog.LOG_LEVEL.verbose,e)}debug(e){this._printMessage(self.goog.LOG_LEVEL.debug,e)}warn(e){this._printMessage(self.goog.LOG_LEVEL.warn,e)}error(e){this._printMessage(self.goog.LOG_LEVEL.error,e)}_printMessage(e,t){this._shouldLogMessage(e,t)&&this._getAllLogGroups(e,t).print()}_getAllLogGroups(e,t){const n=new u({isPrimary:!0,title:"sw-helpers log."}),r=this._getPrimaryMessageDetails(e,t)
if(n.addLog(r),t.error){const e={message:t.error,logFunc:console.error}
n.addLog(e)}const i=new u({title:"Extra Information."})
if(t.that&&t.that.constructor&&t.that.constructor.name){const e=t.that.constructor.name
i.addLog(this._getKeyValueDetails("class",e))}return t.data&&("object"!=typeof t.data||t.data instanceof Array?i.addLog(this._getKeyValueDetails("additionalData",t.data)):Object.keys(t.data).forEach(e=>{i.addLog(this._getKeyValueDetails(e,t.data[e]))})),n.addChildGroup(i),n}_getKeyValueDetails(e,t){return{message:`%c${e}: `,colors:[`color: ${g}`],args:t}}_getPrimaryMessageDetails(e,t){let n,r
e===self.goog.LOG_LEVEL.verbose?(n="Info",r=f):e===self.goog.LOG_LEVEL.debug?(n="Debug",r=d):e===self.goog.LOG_LEVEL.warn?(n="Warn",r=h):e===self.goog.LOG_LEVEL.error&&(n="Error",r=p)
let i=`%c🔧 %c[${n}]`
const o=[`color: ${f}`,`color: ${r}`]
let s
return"string"==typeof t?s=t:t.message&&(s=t.message),s&&(i+=`%c ${s=s.replace(/\s+/g," ")}`,o.push(`color: ${l}; font-weight: normal`)),{message:i,colors:o}}_shouldLogMessage(e,t){if(!t)return!1
let n=this._defaultLogLevel
return self&&self.goog&&"number"==typeof self.goog.logLevel&&(n=self.goog.logLevel),!(n===self.goog.LOG_LEVEL.none||e<n)}}
const y=new s(t.NAME,t.VERSION,t.STORE)
var m=e=>(e=e||{},y.getAllKeys().then(t=>Promise.all(t.map(t=>y.get(t).then(r=>{const i=Date.now()-r,o=new URL(t)
if(i>n)return
if(!("searchParams"in o))return
let s=e.parameterOverrides||{}
s.qt=i,Object.keys(s).sort().forEach(e=>{o.searchParams.set(e,s[e])})
let a=e.hitFilter
if("function"==typeof a)try{a(o.searchParams)}catch(u){return}return fetch(o.toString())}).then(()=>y.delete(t))))))
return{initialize:t=>{t=t||{}
let n=!1
self.addEventListener("fetch",i=>{const o=new URL(i.request.url),s=i.request
if(o.hostname===r.HOST)if(o.pathname===r.COLLECT_PATH){const e=s.clone()
i.respondWith(fetch(s).then(e=>(n&&m(t),n=!1,e),()=>(v.log("Enqueuing failed request..."),n=!0,((e,t)=>{const n=new URL(e.url)
return e.text().then(e=>(e&&(n.search=e),a.put(n.toString(),t||Date.now())))})(e).then(()=>Response.error()))))}else o.pathname===r.ANALYTICS_JS_PATH&&i.respondWith(caches.open(e).then(e=>fetch(s).then(t=>e.put(s,t.clone()).then(()=>t)).catch(t=>(v.error(t),e.match(s)))))}),m(t)}}}(),goog.offlineGoogleAnalytics.initialize()
let allChanges={},configs=!1,syncingRemote=!1,configDB=new PouchDB("config"),localMainDB=new PouchDB("localMainDB"),lastServerSeq
function PouchError(e){Error.call(e.reason),this.status=e.status,this.name=e.error,this.message=e.reason,this.error=!0}function createError(e){let t=e.status||500
return e.name&&e.message&&("Error"!==e.name&&"TypeError"!==e.name||(-1!==e.message.indexOf("Bad special document member")?e.name="doc_validation":e.name="bad_request"),e={error:e.name,name:e.name,reason:e.message,message:e.message,status:t}),e}function safeEval(str){let target={}
return eval(`target.target = (${str});`),target.target}function decodeArgs(e){let t=["filter","map","reduce"]
return e.forEach(function(e){"object"!=typeof e||null===e||Array.isArray(e)||t.forEach(function(t){t in e&&null!==e[t]?"func"===e[t].type&&e[t].func&&(e[t]=safeEval(e[t].func)):delete e[t]})}),e}function postMessage(e,t){t.ports[0].postMessage(e)}function sendError(e,t,n,r){logDebug(" -> sendError",e,t,n),postMessage({type:"error",id:e,messageId:t,content:createError(n)},r)}function sendSuccess(e,t,n,r){logDebug(" -> sendSuccess",e,t),postMessage({type:"success",id:e,messageId:t,content:n},r)}function sendUpdate(e,t,n,r){logDebug(" -> sendUpdate",e,t),postMessage({type:"update",id:e,messageId:t,content:n},r)}function getCurrentDB(e){switch(e){case"localMainDB":return Promise.resolve(localMainDB)
case"hospitalrun-test-database":return Promise.resolve(new PouchDB("hospitalrun-test-database",{adapter:"memory"}))
default:return getRemoteDB()}}function dbMethod(e,t,n,r,i){let o
return getCurrentDB(e).then(s=>s?(o=s.adapter,s[t](...r)):sendError(e,n,{error:"db not found"},i)).then(function(r){switch(sendSuccess(e,n,r,i),t){case"put":case"bulkDocs":case"post":case"remove":case"removeAttachment":case"putAttachment":remoteSync()}}).catch(function(s){if("http"===o)return dbMethod("localMainDB",t,n,r,i)
sendError(e,n,s,i)})}function changes(e,t,n,r){let[i]=n
i&&"object"==typeof i&&(i.returnDocs=!0,i.return_docs=!0),dbMethod(e,"changes",t,n,r)}function createDatabase(e,t,n,r){return sendSuccess(e,t,{ok:!0,exists:!0},r)}function getAttachment(e,t,n,r){return getCurrentDB(e).then(i=>{if(!i)return sendError(e,t,{error:"db not found"},r)
let[o,s,a]=n
return"object"!=typeof a&&(a={}),i.get(o,a).then(function(o){if(!o._attachments||!o._attachments[s])throw new PouchError({status:404,error:"not_found",reason:"missing"})
return i.getAttachment(...n).then(function(n){sendSuccess(e,t,n,r)})})}).catch(function(n){sendError(e,t,n,r)})}function destroy(e,t,n,r){if("hospitalrun-test-database"!==e)return sendError(e,t,{error:"permission denied"},r)
getCurrentDB(e).then(i=>{if(!i)return sendError(e,t,{error:"db not found"},r)
Promise.resolve().then(()=>i.destroy(...n)).then(n=>{sendSuccess(e,t,n,r)}).catch(n=>{sendError(e,t,n,r)})})}function liveChanges(e,t,n,r){getCurrentDB(e).then(i=>{if(!i)return sendError(e,t,{error:"db not found"},r)
let o=i.changes(n[0])
allChanges[t]=o,o.on("change",function(n){sendUpdate(e,t,n,r)}).on("complete",function(n){o.removeAllListeners(),delete allChanges[t],sendSuccess(e,t,n,r)}).on("error",function(n){o.removeAllListeners(),delete allChanges[t],sendError(e,t,n,r)})})}function cancelChanges(e){let t=allChanges[e]
t&&t.cancel()}function onReceiveMessage(e,t,n,r,i){switch(t){case"createDatabase":return createDatabase(e,n,r,i)
case"id":return void sendSuccess(e,n,e,i)
case"info":case"put":case"allDocs":case"bulkDocs":case"post":case"get":case"remove":case"revsDiff":case"compact":case"viewCleanup":case"removeAttachment":case"putAttachment":case"query":return dbMethod(e,t,n,r,i)
case"changes":return changes(e,n,r,i)
case"getAttachment":return getAttachment(e,n,r,i)
case"liveChanges":return liveChanges(e,n,r,i)
case"cancelChanges":return cancelChanges(n)
case"destroy":return destroy(e,n,r,i)
default:return sendError(e,n,{error:`unknown API method: ${t}`},i)}}function handleMessage(e,t,n){let{type:r,messageId:i}=e
onReceiveMessage(t,r,i,decodeArgs(e.args),n)}function getRemoteDB(){return setupConfigs().then(()=>{let e={ajax:{headers:{},timeout:3e4}}
configs.config_consumer_secret&&configs.config_token_secret&&configs.config_consumer_key&&configs.config_oauth_token&&(e.ajax.headers["x-oauth-consumer-secret"]=configs.config_consumer_secret,e.ajax.headers["x-oauth-consumer-key"]=configs.config_consumer_key,e.ajax.headers["x-oauth-token-secret"]=configs.config_token_secret,e.ajax.headers["x-oauth-token"]=configs.config_oauth_token)
let t=`${self.location.protocol}//${self.location.host}/db/main`
return new PouchDB(t,e)})}function remoteSync(e,t){return lastServerSeq=e,syncingRemote||!0===configs.config_disable_offline_sync?(syncingRemote&&logDebug(`Skipping sync to: ${e} because sync is in process`),Promise.resolve(!1)):(logDebug(`Synching local db to remoteSequence: ${e} at: ${new Date}`),syncingRemote=!0,getRemoteDB().then(e=>localMainDB.sync(e)).then(e=>(syncingRemote=!1,logDebug("local sync complete:",e,configs),fetch("/update-subscription/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subscriptionId:configs.config_push_subscription,remoteSeq:e.pull.last_seq})}),!(e.pull.last_seq<lastServerSeq)||remoteSync(lastServerSeq))).catch(e=>{if(syncingRemote=!1,logDebug(`local sync error, register remote sync: ${new Date}`,e),t)throw e
self.registration.sync.register("remoteSync")}))}function setupConfigs(){return new Promise(function(e,t){configs?e():configDB.allDocs({include_docs:!0}).then(t=>{configs={},t.rows.forEach(e=>{configs[e.id]=e.doc.value}),e()},t)})}function _postDeleteCacheHook(e){return"function"==typeof brocswPostDeleteCacheHook?brocswPostDeleteCacheHook(e):Promise.resolve()}function logDebug(){if(toolbox.options.debug)if(arguments.length>1){for(var e=[],t=1;t<arguments.length;t++)e.push(arguments[t])
console.log(arguments[0],e)}else console.log(arguments[0])}self.addEventListener("push",function(e){if(e.data){let t=e.data.json()
"couchDBChange"===t.type?(logDebug(`Got couchDBChange pushed, attempting to sync to: ${t.seq}`),e.waitUntil(remoteSync(t.seq).then(e=>{logDebug(`Response from sync ${JSON.stringify(e,null,2)}`)}))):logDebug("Unknown push event has data and here it is: ",t)}}),self.addEventListener("message",function(e){if(logDebug("got message",e),"remotesync"===e.data)return void remoteSync()
if(!(e.data&&e.data.id&&e.data.args&&e.data.type&&e.data.messageId))return
let t=e.data.id
"close"===e.data.type||handleMessage(e.data,t,e)}),self.addEventListener("sync",function(e){"remoteSync"===e.tag&&e.waitUntil(remoteSync(null,!0).catch(t=>{e.lastChance?logDebug("Sync failed for the last time, so give up for now.",t):logDebug("Sync failed, will try again later",t)}))}),self.addEventListener("install",function(e){self.skipWaiting&&self.skipWaiting()}),self.addEventListener("activate",function(e){logDebug("Deleting out of date caches, current cache version:",CACHE_VERSION),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return-1===e.indexOf("$$$inactive$$$")&&0===e.indexOf(CACHE_PREFIX)&&e!==CACHE_VERSION}).map(function(e){return logDebug("Deleting out of date cache:",e),caches.delete(e).then(function(){return _postDeleteCacheHook(e)})}))}).then(function(){self.clients.claim()}))})
