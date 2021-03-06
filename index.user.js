// ==UserScript==
// @name           FC Premium
// @description    Script para administrar addons para forocoches.com
// @author         @pytness
// @version        3.0.3
// @namespace      http://tampermonkey.net/

// @match          https://*.forocoches.com/*

// @require        https://code.jquery.com/jquery-3.3.1.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.33.1/sweetalert2.all.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.2/mousetrap.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/xterm.min.js

// @resource       styles.css https://raw.githubusercontent.com/fc-premium/fc-premium/master/resources/styles.css
// @resource       noty.css https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.css
// @resource       xterm.css https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/xterm.min.css
// @resource       material_icons.css https://fonts.googleapis.com/icon?family=Material+Icons

// @updateURL      https://raw.githubusercontent.com/fc-premium/fc-premium/master/index.user.js
// @downloadURL    https://raw.githubusercontent.com/fc-premium/fc-premium/master/index.user.js

// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_log
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_registerMenuCommand
// @grant GM_unregisterMenuCommand
// @grant GM_openInTab
// @grant GM_xmlhttpRequest
// @grant GM_download
// @grant GM_getTab
// @grant GM_saveTab
// @grant GM_getTabs
// @grant GM_notification
// @grant GM_setClipboard
// @grant GM_info

// @run-at       document-start
// @noframes
// ==/UserScript==
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _module_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _control_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);



function asciiBox(lines, minBoxWidth = 0) {
    let result = '';
    const boxWidth = Math.max(minBoxWidth, ...lines.map(x => x.length + 2));
    const header = '+'.padEnd(boxWidth, '=') + '+';
    lines.forEach((line) => {
        result += '|' + line.padEnd(boxWidth - 1, ' ') + '|\n';
    });
    return header + '\n' + result + header;
}
;
console.log(asciiBox([
    ` Title   : ${GM_info.script.name}`, '',
    ` Version : ${GM_info.script.version}`,
    ` Hash    : [${_definitions__WEBPACK_IMPORTED_MODULE_0__["VERSION_HASH"].slice(0, 8)}]`, '',
    ` By      : ${GM_info.script.author}`, '',
], 40));
(GM_info.script.resources).forEach((resource) => {
    if (resource.name.endsWith('.css'))
        GM_addStyle(resource.content);
});
_module_handler__WEBPACK_IMPORTED_MODULE_1__["ModuleHandler"].push(_control_panel__WEBPACK_IMPORTED_MODULE_2__["CONTROL_PANEL_MODULE"]);
_module_handler__WEBPACK_IMPORTED_MODULE_1__["ModuleHandler"].loadModules();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION_HASH", function() { return VERSION_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_ENTRY_NAME", function() { return GLOBAL_ENTRY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_CACHE_HEADERS", function() { return NO_CACHE_HEADERS; });
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sha_js__WEBPACK_IMPORTED_MODULE_0__);

window = unsafeWindow;
let VERSION_HASH = sha_js__WEBPACK_IMPORTED_MODULE_0___default()("sha256")
    .update(GM_info.scriptSource, 'utf8')
    .digest('hex');
const GLOBAL_ENTRY_NAME = "FC_MODULE_HANDLER";
if (GM_getValue(GLOBAL_ENTRY_NAME) === undefined)
    GM_setValue(GLOBAL_ENTRY_NAME, {});
const _console = Object.freeze(Object.assign({}, window.console));
const NO_CACHE_HEADERS = new Headers();
NO_CACHE_HEADERS.append('pragma', 'no-cache');
NO_CACHE_HEADERS.append('cache-control', 'no-cache');
Object.freeze(NO_CACHE_HEADERS);
Object.defineProperties(window, {
    console: {
        value: _console
    },
    jQuery: {
        value: jQuery
    },
    $: {
        value: jQuery
    }
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var exports = module.exports = function SHA (algorithm) {
  algorithm = algorithm.toLowerCase()

  var Algorithm = exports[algorithm]
  if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)')

  return new Algorithm()
}

exports.sha = __webpack_require__(3)
exports.sha1 = __webpack_require__(12)
exports.sha224 = __webpack_require__(13)
exports.sha256 = __webpack_require__(14)
exports.sha384 = __webpack_require__(15)
exports.sha512 = __webpack_require__(16)


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
 * in FIPS PUB 180-1
 * This source code is derived from sha1.js of the same repository.
 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
 * operation was added.
 */

var inherits = __webpack_require__(4)
var Hash = __webpack_require__(5)
var Buffer = __webpack_require__(6).Buffer

var K = [
  0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
]

var W = new Array(80)

function Sha () {
  this.init()
  this._w = W

  Hash.call(this, 64, 56)
}

inherits(Sha, Hash)

Sha.prototype.init = function () {
  this._a = 0x67452301
  this._b = 0xefcdab89
  this._c = 0x98badcfe
  this._d = 0x10325476
  this._e = 0xc3d2e1f0

  return this
}

function rotl5 (num) {
  return (num << 5) | (num >>> 27)
}

function rotl30 (num) {
  return (num << 30) | (num >>> 2)
}

function ft (s, b, c, d) {
  if (s === 0) return (b & c) | ((~b) & d)
  if (s === 2) return (b & c) | (b & d) | (c & d)
  return b ^ c ^ d
}

Sha.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4)
  for (; i < 80; ++i) W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]

  for (var j = 0; j < 80; ++j) {
    var s = ~~(j / 20)
    var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0

    e = d
    d = c
    c = rotl30(b)
    b = a
    a = t
  }

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
}

Sha.prototype._hash = function () {
  var H = Buffer.allocUnsafe(20)

  H.writeInt32BE(this._a | 0, 0)
  H.writeInt32BE(this._b | 0, 4)
  H.writeInt32BE(this._c | 0, 8)
  H.writeInt32BE(this._d | 0, 12)
  H.writeInt32BE(this._e | 0, 16)

  return H
}

module.exports = Sha


/***/ }),
/* 4 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(6).Buffer

// prototype class for hash functions
function Hash (blockSize, finalSize) {
  this._block = Buffer.alloc(blockSize)
  this._finalSize = finalSize
  this._blockSize = blockSize
  this._len = 0
}

Hash.prototype.update = function (data, enc) {
  if (typeof data === 'string') {
    enc = enc || 'utf8'
    data = Buffer.from(data, enc)
  }

  var block = this._block
  var blockSize = this._blockSize
  var length = data.length
  var accum = this._len

  for (var offset = 0; offset < length;) {
    var assigned = accum % blockSize
    var remainder = Math.min(length - offset, blockSize - assigned)

    for (var i = 0; i < remainder; i++) {
      block[assigned + i] = data[offset + i]
    }

    accum += remainder
    offset += remainder

    if ((accum % blockSize) === 0) {
      this._update(block)
    }
  }

  this._len += length
  return this
}

Hash.prototype.digest = function (enc) {
  var rem = this._len % this._blockSize

  this._block[rem] = 0x80

  // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
  // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize
  this._block.fill(0, rem + 1)

  if (rem >= this._finalSize) {
    this._update(this._block)
    this._block.fill(0)
  }

  var bits = this._len * 8

  // uint32
  if (bits <= 0xffffffff) {
    this._block.writeUInt32BE(bits, this._blockSize - 4)

  // uint64
  } else {
    var lowBits = (bits & 0xffffffff) >>> 0
    var highBits = (bits - lowBits) / 0x100000000

    this._block.writeUInt32BE(highBits, this._blockSize - 8)
    this._block.writeUInt32BE(lowBits, this._blockSize - 4)
  }

  this._update(this._block)
  var hash = this._hash()

  return enc ? hash.toString(enc) : hash
}

Hash.prototype._update = function () {
  throw new Error('_update must be implemented by subclass')
}

module.exports = Hash


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(7)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(9)
var ieee754 = __webpack_require__(10)
var isArray = __webpack_require__(11)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

var inherits = __webpack_require__(4)
var Hash = __webpack_require__(5)
var Buffer = __webpack_require__(6).Buffer

var K = [
  0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
]

var W = new Array(80)

function Sha1 () {
  this.init()
  this._w = W

  Hash.call(this, 64, 56)
}

inherits(Sha1, Hash)

Sha1.prototype.init = function () {
  this._a = 0x67452301
  this._b = 0xefcdab89
  this._c = 0x98badcfe
  this._d = 0x10325476
  this._e = 0xc3d2e1f0

  return this
}

function rotl1 (num) {
  return (num << 1) | (num >>> 31)
}

function rotl5 (num) {
  return (num << 5) | (num >>> 27)
}

function rotl30 (num) {
  return (num << 30) | (num >>> 2)
}

function ft (s, b, c, d) {
  if (s === 0) return (b & c) | ((~b) & d)
  if (s === 2) return (b & c) | (b & d) | (c & d)
  return b ^ c ^ d
}

Sha1.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4)
  for (; i < 80; ++i) W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16])

  for (var j = 0; j < 80; ++j) {
    var s = ~~(j / 20)
    var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0

    e = d
    d = c
    c = rotl30(b)
    b = a
    a = t
  }

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
}

Sha1.prototype._hash = function () {
  var H = Buffer.allocUnsafe(20)

  H.writeInt32BE(this._a | 0, 0)
  H.writeInt32BE(this._b | 0, 4)
  H.writeInt32BE(this._c | 0, 8)
  H.writeInt32BE(this._d | 0, 12)
  H.writeInt32BE(this._e | 0, 16)

  return H
}

module.exports = Sha1


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = __webpack_require__(4)
var Sha256 = __webpack_require__(14)
var Hash = __webpack_require__(5)
var Buffer = __webpack_require__(6).Buffer

var W = new Array(64)

function Sha224 () {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha224, Sha256)

Sha224.prototype.init = function () {
  this._a = 0xc1059ed8
  this._b = 0x367cd507
  this._c = 0x3070dd17
  this._d = 0xf70e5939
  this._e = 0xffc00b31
  this._f = 0x68581511
  this._g = 0x64f98fa7
  this._h = 0xbefa4fa4

  return this
}

Sha224.prototype._hash = function () {
  var H = Buffer.allocUnsafe(28)

  H.writeInt32BE(this._a, 0)
  H.writeInt32BE(this._b, 4)
  H.writeInt32BE(this._c, 8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)

  return H
}

module.exports = Sha224


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = __webpack_require__(4)
var Hash = __webpack_require__(5)
var Buffer = __webpack_require__(6).Buffer

var K = [
  0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
  0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
  0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
  0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
  0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
  0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
  0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
  0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
  0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
  0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
  0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
  0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
  0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
  0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
  0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
  0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
]

var W = new Array(64)

function Sha256 () {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha256, Hash)

Sha256.prototype.init = function () {
  this._a = 0x6a09e667
  this._b = 0xbb67ae85
  this._c = 0x3c6ef372
  this._d = 0xa54ff53a
  this._e = 0x510e527f
  this._f = 0x9b05688c
  this._g = 0x1f83d9ab
  this._h = 0x5be0cd19

  return this
}

function ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function maj (x, y, z) {
  return (x & y) | (z & (x | y))
}

function sigma0 (x) {
  return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10)
}

function sigma1 (x) {
  return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)
}

function gamma0 (x) {
  return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3)
}

function gamma1 (x) {
  return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ (x >>> 10)
}

Sha256.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0
  var f = this._f | 0
  var g = this._g | 0
  var h = this._h | 0

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4)
  for (; i < 64; ++i) W[i] = (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) | 0

  for (var j = 0; j < 64; ++j) {
    var T1 = (h + sigma1(e) + ch(e, f, g) + K[j] + W[j]) | 0
    var T2 = (sigma0(a) + maj(a, b, c)) | 0

    h = g
    g = f
    f = e
    e = (d + T1) | 0
    d = c
    c = b
    b = a
    a = (T1 + T2) | 0
  }

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
  this._f = (f + this._f) | 0
  this._g = (g + this._g) | 0
  this._h = (h + this._h) | 0
}

Sha256.prototype._hash = function () {
  var H = Buffer.allocUnsafe(32)

  H.writeInt32BE(this._a, 0)
  H.writeInt32BE(this._b, 4)
  H.writeInt32BE(this._c, 8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)
  H.writeInt32BE(this._h, 28)

  return H
}

module.exports = Sha256


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__(4)
var SHA512 = __webpack_require__(16)
var Hash = __webpack_require__(5)
var Buffer = __webpack_require__(6).Buffer

var W = new Array(160)

function Sha384 () {
  this.init()
  this._w = W

  Hash.call(this, 128, 112)
}

inherits(Sha384, SHA512)

Sha384.prototype.init = function () {
  this._ah = 0xcbbb9d5d
  this._bh = 0x629a292a
  this._ch = 0x9159015a
  this._dh = 0x152fecd8
  this._eh = 0x67332667
  this._fh = 0x8eb44a87
  this._gh = 0xdb0c2e0d
  this._hh = 0x47b5481d

  this._al = 0xc1059ed8
  this._bl = 0x367cd507
  this._cl = 0x3070dd17
  this._dl = 0xf70e5939
  this._el = 0xffc00b31
  this._fl = 0x68581511
  this._gl = 0x64f98fa7
  this._hl = 0xbefa4fa4

  return this
}

Sha384.prototype._hash = function () {
  var H = Buffer.allocUnsafe(48)

  function writeInt64BE (h, l, offset) {
    H.writeInt32BE(h, offset)
    H.writeInt32BE(l, offset + 4)
  }

  writeInt64BE(this._ah, this._al, 0)
  writeInt64BE(this._bh, this._bl, 8)
  writeInt64BE(this._ch, this._cl, 16)
  writeInt64BE(this._dh, this._dl, 24)
  writeInt64BE(this._eh, this._el, 32)
  writeInt64BE(this._fh, this._fl, 40)

  return H
}

module.exports = Sha384


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__(4)
var Hash = __webpack_require__(5)
var Buffer = __webpack_require__(6).Buffer

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
]

var W = new Array(160)

function Sha512 () {
  this.init()
  this._w = W

  Hash.call(this, 128, 112)
}

inherits(Sha512, Hash)

Sha512.prototype.init = function () {
  this._ah = 0x6a09e667
  this._bh = 0xbb67ae85
  this._ch = 0x3c6ef372
  this._dh = 0xa54ff53a
  this._eh = 0x510e527f
  this._fh = 0x9b05688c
  this._gh = 0x1f83d9ab
  this._hh = 0x5be0cd19

  this._al = 0xf3bcc908
  this._bl = 0x84caa73b
  this._cl = 0xfe94f82b
  this._dl = 0x5f1d36f1
  this._el = 0xade682d1
  this._fl = 0x2b3e6c1f
  this._gl = 0xfb41bd6b
  this._hl = 0x137e2179

  return this
}

function Ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function maj (x, y, z) {
  return (x & y) | (z & (x | y))
}

function sigma0 (x, xl) {
  return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25)
}

function sigma1 (x, xl) {
  return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23)
}

function Gamma0 (x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7)
}

function Gamma0l (x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25)
}

function Gamma1 (x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6)
}

function Gamma1l (x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26)
}

function getCarry (a, b) {
  return (a >>> 0) < (b >>> 0) ? 1 : 0
}

Sha512.prototype._update = function (M) {
  var W = this._w

  var ah = this._ah | 0
  var bh = this._bh | 0
  var ch = this._ch | 0
  var dh = this._dh | 0
  var eh = this._eh | 0
  var fh = this._fh | 0
  var gh = this._gh | 0
  var hh = this._hh | 0

  var al = this._al | 0
  var bl = this._bl | 0
  var cl = this._cl | 0
  var dl = this._dl | 0
  var el = this._el | 0
  var fl = this._fl | 0
  var gl = this._gl | 0
  var hl = this._hl | 0

  for (var i = 0; i < 32; i += 2) {
    W[i] = M.readInt32BE(i * 4)
    W[i + 1] = M.readInt32BE(i * 4 + 4)
  }
  for (; i < 160; i += 2) {
    var xh = W[i - 15 * 2]
    var xl = W[i - 15 * 2 + 1]
    var gamma0 = Gamma0(xh, xl)
    var gamma0l = Gamma0l(xl, xh)

    xh = W[i - 2 * 2]
    xl = W[i - 2 * 2 + 1]
    var gamma1 = Gamma1(xh, xl)
    var gamma1l = Gamma1l(xl, xh)

    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
    var Wi7h = W[i - 7 * 2]
    var Wi7l = W[i - 7 * 2 + 1]

    var Wi16h = W[i - 16 * 2]
    var Wi16l = W[i - 16 * 2 + 1]

    var Wil = (gamma0l + Wi7l) | 0
    var Wih = (gamma0 + Wi7h + getCarry(Wil, gamma0l)) | 0
    Wil = (Wil + gamma1l) | 0
    Wih = (Wih + gamma1 + getCarry(Wil, gamma1l)) | 0
    Wil = (Wil + Wi16l) | 0
    Wih = (Wih + Wi16h + getCarry(Wil, Wi16l)) | 0

    W[i] = Wih
    W[i + 1] = Wil
  }

  for (var j = 0; j < 160; j += 2) {
    Wih = W[j]
    Wil = W[j + 1]

    var majh = maj(ah, bh, ch)
    var majl = maj(al, bl, cl)

    var sigma0h = sigma0(ah, al)
    var sigma0l = sigma0(al, ah)
    var sigma1h = sigma1(eh, el)
    var sigma1l = sigma1(el, eh)

    // t1 = h + sigma1 + ch + K[j] + W[j]
    var Kih = K[j]
    var Kil = K[j + 1]

    var chh = Ch(eh, fh, gh)
    var chl = Ch(el, fl, gl)

    var t1l = (hl + sigma1l) | 0
    var t1h = (hh + sigma1h + getCarry(t1l, hl)) | 0
    t1l = (t1l + chl) | 0
    t1h = (t1h + chh + getCarry(t1l, chl)) | 0
    t1l = (t1l + Kil) | 0
    t1h = (t1h + Kih + getCarry(t1l, Kil)) | 0
    t1l = (t1l + Wil) | 0
    t1h = (t1h + Wih + getCarry(t1l, Wil)) | 0

    // t2 = sigma0 + maj
    var t2l = (sigma0l + majl) | 0
    var t2h = (sigma0h + majh + getCarry(t2l, sigma0l)) | 0

    hh = gh
    hl = gl
    gh = fh
    gl = fl
    fh = eh
    fl = el
    el = (dl + t1l) | 0
    eh = (dh + t1h + getCarry(el, dl)) | 0
    dh = ch
    dl = cl
    ch = bh
    cl = bl
    bh = ah
    bl = al
    al = (t1l + t2l) | 0
    ah = (t1h + t2h + getCarry(al, t1l)) | 0
  }

  this._al = (this._al + al) | 0
  this._bl = (this._bl + bl) | 0
  this._cl = (this._cl + cl) | 0
  this._dl = (this._dl + dl) | 0
  this._el = (this._el + el) | 0
  this._fl = (this._fl + fl) | 0
  this._gl = (this._gl + gl) | 0
  this._hl = (this._hl + hl) | 0

  this._ah = (this._ah + ah + getCarry(this._al, al)) | 0
  this._bh = (this._bh + bh + getCarry(this._bl, bl)) | 0
  this._ch = (this._ch + ch + getCarry(this._cl, cl)) | 0
  this._dh = (this._dh + dh + getCarry(this._dl, dl)) | 0
  this._eh = (this._eh + eh + getCarry(this._el, el)) | 0
  this._fh = (this._fh + fh + getCarry(this._fl, fl)) | 0
  this._gh = (this._gh + gh + getCarry(this._gl, gl)) | 0
  this._hh = (this._hh + hh + getCarry(this._hl, hl)) | 0
}

Sha512.prototype._hash = function () {
  var H = Buffer.allocUnsafe(64)

  function writeInt64BE (h, l, offset) {
    H.writeInt32BE(h, offset)
    H.writeInt32BE(l, offset + 4)
  }

  writeInt64BE(this._ah, this._al, 0)
  writeInt64BE(this._bh, this._bl, 8)
  writeInt64BE(this._ch, this._cl, 16)
  writeInt64BE(this._dh, this._dl, 24)
  writeInt64BE(this._eh, this._el, 32)
  writeInt64BE(this._fh, this._fl, 40)
  writeInt64BE(this._gh, this._gl, 48)
  writeInt64BE(this._hh, this._hl, 56)

  return H
}

module.exports = Sha512


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleHandler", function() { return _module_handler__WEBPACK_IMPORTED_MODULE_0__["ModuleHandler"]; });




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleHandler", function() { return ModuleHandler; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _fc_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _resource_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);





const MODULE = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"]({
    moduleName: 'MODULE_HANDLER',
    title: 'Module handler',
    author: 'pytness',
    version: '1.1',
    match: ['*']
});
MODULE.config.getMeta('ENABLED')
    .flags.unset('CONFIGURABLE');
MODULE.config.define('LAST_VERSION_HASH', {
    defaultValue: false,
}).define('RESOURCES', {
    title: 'User resources',
    defaultValue: [
        'rgh:fc-premium/fc-premium/master/modules/defaultSources.json'
    ],
    flags: ['CONFIGURABLE'],
    getter: function () {
        let value = this.value.join('\n');
        if (value.length > 0)
            value += '\n';
        return _module__WEBPACK_IMPORTED_MODULE_0__["Config"].HTML.TEXTAREA.GETTER(value, {
            cols: 80,
            rows: 20
        });
    },
    parser: function (el) {
        return _module__WEBPACK_IMPORTED_MODULE_0__["Config"].HTML.TEXTAREA.PARSER(el)
            .split('\n')
            .map((l) => l.trim())
            .filter((l) => l !== '');
    }
});
MODULE.config.getMeta('ENABLED')
    .flags.unset('CONFIGURABLE');
MODULE.onload = function () {
    this.config.set('DEBUG_MODULE_NAME', false);
    this.config.set('DEBUG_MODE', true);
    if (_definitions__WEBPACK_IMPORTED_MODULE_1__["VERSION_HASH"] != this.config.get('LAST_VERSION_HASH')) {
        this.config.set('LAST_VERSION_HASH', _definitions__WEBPACK_IMPORTED_MODULE_1__["VERSION_HASH"]);
    }
    ModuleHandler.loadUserResources().then(() => ModuleHandler.loadModules());
};
function contextEval(source) {
    return (function (Debug, LocalStorage, Config, FlagHandler, CSSHandler, Module, FC, ModuleHandler, GLOBAL_ENTRY_NAME, VERSION_HASH, NO_CACHE_HEADERS) {
        return eval(source);
    })(_module__WEBPACK_IMPORTED_MODULE_0__["Debug"], _module__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"], _module__WEBPACK_IMPORTED_MODULE_0__["Config"], _module__WEBPACK_IMPORTED_MODULE_0__["FlagHandler"], _module__WEBPACK_IMPORTED_MODULE_0__["CSSHandler"], _module__WEBPACK_IMPORTED_MODULE_0__["Module"], _fc_api__WEBPACK_IMPORTED_MODULE_2__["FC"], ModuleHandler, _definitions__WEBPACK_IMPORTED_MODULE_1__["GLOBAL_ENTRY_NAME"], _definitions__WEBPACK_IMPORTED_MODULE_1__["VERSION_HASH"], _definitions__WEBPACK_IMPORTED_MODULE_1__["NO_CACHE_HEADERS"]);
}
class ModuleHandler {
    static has(key) {
        return ModuleHandler.modules.has(key);
    }
    static get(key) {
        return ModuleHandler.modules.get(key);
    }
    static push(module) {
        if (!(module instanceof _module__WEBPACK_IMPORTED_MODULE_0__["Module"]))
            throw 'Module must be an instance of Module';
        if (ModuleHandler.modules.has(module.name))
            throw 'Module already declared';
        ModuleHandler.modules.set(module.name, module);
    }
    static delete(key) {
        return this.modules.delete(key);
    }
    static keys() {
        return Array.from(this.modules.keys());
    }
    static size() {
        return ModuleHandler.modules.size;
    }
    static registerModules() {
        let regModules = GM_getValue(_definitions__WEBPACK_IMPORTED_MODULE_1__["GLOBAL_ENTRY_NAME"]);
        ModuleHandler.modules.forEach((module) => {
            if (!Object.keys(regModules).includes(module.name)) {
                regModules[module.name] = {};
            }
        });
        GM_setValue(_definitions__WEBPACK_IMPORTED_MODULE_1__["GLOBAL_ENTRY_NAME"], regModules);
    }
    static sortModules() {
        ModuleHandler.modules.forEach((module) => {
            let moduleName = module.name;
            module.require.every((requiredModuleName) => {
                if (!ModuleHandler.modules.has(requiredModuleName))
                    throw `Module '${moduleName}' requires '${requiredModuleName}'`;
                const requiredModule = ModuleHandler.modules.get(requiredModuleName);
                if (requiredModule.require.includes(moduleName)) {
                    throw `Modules '${moduleName}' and '${requiredModuleName}' must not require each other`;
                }
            });
        });
        let moduleArray = Array.from(ModuleHandler.modules.entries());
        moduleArray.sort(([_a, MODULE_A], [_b, MODULE_B]) => {
            if (MODULE_A.require.includes(_b))
                return 1;
            if (MODULE_B.require.includes(_a))
                return -1;
            return 0;
        });
        ModuleHandler.modules.clear();
        moduleArray.forEach(([key, value]) => {
            ModuleHandler.modules.set(key, value);
        });
    }
    static async loadUserResources() {
        let resources = MODULE.config.get('RESOURCES');
        return _resource_handler__WEBPACK_IMPORTED_MODULE_3__["ResourceHandler"].unpackJSONlinks(resources)
            .then(_resource_handler__WEBPACK_IMPORTED_MODULE_3__["ResourceHandler"].sortResources)
            .then(_resource_handler__WEBPACK_IMPORTED_MODULE_3__["ResourceHandler"].getSourceCode)
            .then(scriptSources => {
            scriptSources.filter(a => a !== false).sort(([_a, ai], [_b, bi]) => ai - bi).forEach(([source, {}]) => {
                try {
                    const EVALED_MODULE = contextEval(source);
                    if (EVALED_MODULE instanceof _module__WEBPACK_IMPORTED_MODULE_0__["Module"])
                        ModuleHandler.push(EVALED_MODULE);
                }
                catch (err) {
                    MODULE.debug.error(err);
                }
            });
        });
    }
    static loadModules() {
        ModuleHandler.registerModules();
        ModuleHandler.sortModules();
        ModuleHandler.modules.forEach((module) => {
            if (module.loaded)
                return;
            if (module.load()) {
                MODULE.debug.log(`Loaded [${module.name}]:` +
                    `\n\tTitle:   ${module.info.title}` +
                    `\n\tDesc:    ${module.info.description}` +
                    `\n\tAuthor:  ${module.info.author}` +
                    `\n\tVersion: ${module.info.version}`);
            }
            else {
                MODULE.debug.log('Didnt load ', module.name);
            }
        });
    }
    static unloadModules() {
        ModuleHandler.modules.forEach(module => {
            if (!module.loaded)
                return;
            module.unload();
            MODULE.debug.log(`Unloaded [${module.name}]`);
        });
    }
    static reloadModules() {
        MODULE.debug.log('Reloading modules...');
        ModuleHandler.modules.forEach(module => {
            if (!module.loaded)
                return;
            module.onunload();
            module.onload();
            MODULE.debug.log(`Reloaded [${module.name}]`);
        });
    }
}
ModuleHandler.modules = new Map([[MODULE.name, MODULE]]);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSHandler", function() { return _css_handler__WEBPACK_IMPORTED_MODULE_0__["CSSHandler"]; });

/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return _debug__WEBPACK_IMPORTED_MODULE_1__["Debug"]; });

/* harmony import */ var _flaghandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlagHandler", function() { return _flaghandler__WEBPACK_IMPORTED_MODULE_2__["FlagHandler"]; });

/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return _module__WEBPACK_IMPORTED_MODULE_3__["Module"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return _storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["MetaConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hook", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["Hook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["Config"]; });









/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSHandler", function() { return CSSHandler; });
class CSSHandler {
    constructor(moduleName) {
        this.styleElement = null;
        this.todoPool = [];
        this.moduleHost = moduleName;
        this.styleElement = document.createElement('style');
        this.styleElement.setAttribute('isVirtual', 'true');
        this.styleElement.setAttribute('moduleHost', this.moduleHost.name);
        if (document.readyState !== 'complete') {
            window.addEventListener('load', () => this.appendStyleElementAndApplyRules());
        }
        else {
            this.appendStyleElementAndApplyRules();
        }
    }
    get styleSheet() {
        return this.styleElement.sheet;
    }
    ;
    appendStyleElementAndApplyRules() {
        document.head.appendChild(this.styleElement);
        this.todoPool.forEach((rule) => this.set(rule.selector, rule.cssText));
    }
    pretifySelector(selector) {
        const length = this.styleSheet.cssRules.length;
        this.styleSheet.addRule(selector, '');
        selector = this.styleSheet.cssRules[length].selectorText;
        this.styleSheet.removeRule(length);
        return selector;
    }
    objectToCSS(cssObject) {
        let css = Object.keys(cssObject)
            .map(key => `${key}: ${cssObject[key]};`).join('');
        return css;
    }
    ;
    CSSToObject(css) {
        const obj = {};
        css.split('{').slice(-1)[0].split('}')[0]
            .trim().split(';').forEach(rule => {
            let [key, value] = rule.split(':');
            if (key !== undefined && value !== undefined)
                obj[key.trim()] = value.trim();
        });
        return obj;
    }
    get(selector) {
        if (this.styleSheet !== null) {
            let i = null;
            selector = selector.trim();
            let result = Array.from(this.styleSheet.rules)
                .filter((rule, ri) => {
                i = i === null ? ri : i;
                return rule.selectorText === selector;
            });
            if (result.length > 0) {
                result = result[0];
                result.index = i;
            }
            else {
                result = {
                    index: -1
                };
            }
            return result;
        }
    }
    set(selector, cssRules) {
        if (typeof cssRules === 'string')
            cssRules = this.CSSToObject(cssRules);
        if (this.styleSheet !== null) {
            selector = this.pretifySelector(selector);
            const cssRule = this.get(selector);
            let currentCssObj = {};
            if (cssRule.index > -1) {
                currentCssObj = this.CSSToObject(cssRule.cssText);
                this.styleSheet.removeRule(cssRule.index);
            }
            Object.assign(currentCssObj, cssRules);
            this.styleSheet.addRule(selector, this.objectToCSS(currentCssObj));
        }
        else {
            this.todoPool.push({
                selector: selector,
                cssText: cssRules
            });
        }
        return this;
    }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
class Debug {
    constructor(module) {
        this.hostModule = module;
    }
    log(...args) {
        if (this.hostModule.config.get('DEBUG_MODE') !== true)
            return void 0;
        if (this.hostModule.config.get('DEBUG_MODULE_NAME') === true)
            args = [`[${this.hostModule.name}]`, ...args];
        console.log(...args);
    }
    info(...args) {
        if (this.hostModule.config.get('DEBUG_MODE') !== true)
            return void 0;
        if (this.hostModule.config.get('DEBUG_MODULE_NAME') === true)
            args = [`[${this.hostModule.name}]`, ...args];
        console.info(...args);
    }
    warn(...args) {
        if (this.hostModule.config.get('DEBUG_MODE') !== true)
            return void 0;
        if (this.hostModule.config.get('DEBUG_MODULE_NAME') === true)
            args = [`[${this.hostModule.name}]`, ...args];
        console.warn(...args);
    }
    error(...args) {
        if (this.hostModule.config.get('DEBUG_MODE') !== true)
            return void 0;
        if (this.hostModule.config.get('DEBUG_MODULE_NAME') === true)
            args = [`[${this.hostModule.name}]`, ...args];
        console.error(...args);
    }
    alert(arg) {
        if (this.hostModule.config.get('DEBUG_MODE') !== true)
            return void 0;
        if (this.hostModule.config.get('DEBUG_MODULE_NAME') === true)
            arg = `[${this.hostModule.name}] ${arg}`;
        alert(arg);
    }
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagHandler", function() { return FlagHandler; });
class FlagHandler {
    constructor(flag_arr) {
        this.__flags = new Set(flag_arr);
    }
    isset(...flags) {
        return flags.every(f => this.__flags.has(f));
    }
    unset(...flags) {
        flags.forEach(f => this.__flags.delete(f));
    }
    set(...flags) {
        flags.forEach(f => this.__flags.add(f));
    }
    flags() {
        return Array.from(this.__flags.keys());
    }
    clear() {
        this.__flags.clear();
    }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _css_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _flaghandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _module_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);







;
;
class Module {
    constructor(data) {
        this.debug = new _debug__WEBPACK_IMPORTED_MODULE_2__["Debug"](this);
        this.storage = new _storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"](this);
        this.config = new _config__WEBPACK_IMPORTED_MODULE_0__["Config"](this);
        this.styles = new _css_handler__WEBPACK_IMPORTED_MODULE_1__["CSSHandler"](this);
        this.name = data.moduleName;
        this.info = Object.freeze({
            title: data.title,
            description: data.description,
            author: data.author,
            version: data.version
        });
        this.require = data.require instanceof Array ?
            data.require : [];
        this.preload = data.preload instanceof Array ?
            data.preload : [];
        this.hasMobileSupport = typeof data.hasMobileSupport === 'boolean' ?
            data.hasMobileSupport : false;
        Object.freeze(this.require);
        Object.freeze(this.preload);
        if (!(data.match instanceof Array) || data.match.length === 0)
            throw 'URL matches must be a non-empty array';
        this.flags = new _flaghandler__WEBPACK_IMPORTED_MODULE_4__["FlagHandler"](data.flags instanceof Array ?
            data.flags : []);
        this.runat = data.runat;
        data.match.forEach((match, i) => {
            if (typeof match === 'string') {
                ('-._~:/?#[]@!$&\'()+,;=').split('').forEach(c => {
                    match = match.replace(c, '\\' + c);
                });
                data.match[i] = new RegExp('^' + match.replace('*', '.*') + '$');
            }
            else if (!(match instanceof RegExp)) {
                throw 'Url match must be either a string or a RegExp';
            }
        });
        this.match = data.match;
        Object.freeze(this.match);
        this.onload = data.onload instanceof Function ?
            data.onload : () => { };
        this.onunload = data.onunload instanceof Function ?
            data.onunload : () => { };
        this.loaded = false;
        if (!Object.keys(GM_getValue(_definitions__WEBPACK_IMPORTED_MODULE_6__["GLOBAL_ENTRY_NAME"])).includes(this.name)) {
            let gentry = GM_getValue(_definitions__WEBPACK_IMPORTED_MODULE_6__["GLOBAL_ENTRY_NAME"]);
            gentry[this.name] = {};
            GM_setValue(_definitions__WEBPACK_IMPORTED_MODULE_6__["GLOBAL_ENTRY_NAME"], gentry);
        }
    }
    load(loadConfig = true) {
        let self = this;
        if (loadConfig)
            this.config.loadSavedConfig();
        let canExecute = this.require.every(requiredModule => {
            let reqModule = _module_handler__WEBPACK_IMPORTED_MODULE_5__["ModuleHandler"].get(requiredModule);
            if (!reqModule.loaded) {
                self.debug.error(`Required module "${requiredModule}" not loaded or enabled`);
            }
            return reqModule.loaded;
        });
        if (!self.loaded && self.config.get('ENABLED') && canExecute) {
            canExecute = !self.match.every(match => !match.test(location.pathname + location.search));
            if (canExecute) {
                let preloadMap = this.preload.map(src => {
                    return new Promise(function (resolve) {
                        let script = $('<script>');
                        $('html > head').append(script);
                        script[0].onload = function () {
                            resolve();
                        };
                        script.attr('src', src);
                    });
                });
                Promise.all(preloadMap).then(function () {
                    if (document.readyState === "loading" && self.runat === 'load') {
                        window.addEventListener('DOMContentLoaded', function () {
                            self.onload();
                        });
                    }
                    else {
                        self.onload();
                    }
                });
                this.loaded = true;
            }
        }
        return canExecute;
    }
    unload() {
        if (this.loaded) {
            this.onunload();
            this.loaded = false;
        }
    }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaConfig", function() { return _meta_config__WEBPACK_IMPORTED_MODULE_0__["MetaConfig"]; });

/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hook", function() { return _hook__WEBPACK_IMPORTED_MODULE_1__["Hook"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["Config"]; });






/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaConfig", function() { return MetaConfig; });
/* harmony import */ var _flaghandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

class MetaConfig {
    constructor(moduleReference, key, metaConfig) {
        this.hostModule = moduleReference;
        this.referenceKey = key;
        this.__events__ = new Map();
        let _flags = metaConfig.flags instanceof Array ?
            metaConfig.flags : [];
        this.flags = new _flaghandler__WEBPACK_IMPORTED_MODULE_0__["FlagHandler"](_flags);
        if (this.flags.isset('CONFIGURABLE') || this.flags.isset('WIDGET')) {
            if (typeof metaConfig.getter !== 'function')
                throw [this.hostModule, 'A configurable config / widget needs a getter method'];
            if (typeof metaConfig.parser !== 'function' && !this.flags.isset('WIDGET'))
                throw 'A configurable config needs a parser method';
            this.section = typeof (metaConfig.section) == 'string' ?
                metaConfig.section : 'General';
            const getter = metaConfig.getter.bind(this);
            const parser = typeof metaConfig.parser === 'function' ?
                metaConfig.parser.bind(this) : () => { };
            this.getHTML = function (element) {
                return getter(element);
            };
            this.parseHTML = function (element) {
                this.value = parser(element);
                this.dispatchEvent('save');
                return this.value;
            };
            delete metaConfig.getter;
            delete metaConfig.parser;
        }
        this.title = typeof metaConfig.title === 'string' ?
            metaConfig.title : '';
        this.description = metaConfig.description;
        this.defaultValue = metaConfig.defaultValue;
        this.value = this.defaultValue;
        const self = this;
        if (metaConfig.events instanceof Object) {
            Object.entries(metaConfig.events).forEach(([type, callback]) => this.addEventListener(type, callback.bind(self)));
        }
    }
    addEventListener(type, callback) {
        if (typeof (type) !== 'string')
            throw 'type must be a string';
        if (typeof (callback) !== 'function')
            throw 'callback must be a function';
        if (!this.__events__.has(type))
            this.__events__.set(type, []);
        this.__events__.get(type).push(callback);
    }
    removeEventListener(type, callback = null) {
        if (!this.__events__.has(type))
            return;
        if (callback === null)
            this.__events__.set(type, []);
        let newEvents = this.__events__.get(type)
            .filter(cb => cb !== callback);
        this.__events__.set(type, newEvents);
    }
    dispatchEvent(type, ...args) {
        if (!this.__events__.has(type))
            return;
        this.__events__.get(type).forEach(callback => {
            try {
                callback(this, ...args);
            }
            catch (e) { }
        });
    }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hook", function() { return Hook; });
/* harmony import */ var _meta_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

class Hook extends _meta_config__WEBPACK_IMPORTED_MODULE_0__["MetaConfig"] {
    constructor(moduleReference, hookConfig, metaConfig) {
        super(moduleReference, hookConfig.referenceKey, metaConfig);
        this.hook = hookConfig;
    }
    get value() {
        return this.hook !== undefined ?
            this.hook.value : undefined;
    }
    set value(value) {
        if (this.hook !== undefined)
            this.hook.value = value;
    }
    get defaultValue() {
        return this.hook !== undefined ?
            this.hook.defaultValue : undefined;
    }
    set defaultValue(value) {
        if (this.hook !== undefined)
            this.hook.defaultValue = value;
    }
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var _meta_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _module_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);



class Config {
    constructor(module) {
        this.entries = new Map();
        this.hostModule = module;
        Config.DEFAULT_CONFIG.forEach(([key, value]) => this.define(key, value));
    }
    get(key) {
        return this.entries.has(key) ?
            this.entries.get(key).value : undefined;
    }
    getMeta(key) {
        return this.entries.get(key);
    }
    set(key, value, autosave = true) {
        if (this.entries.has(key)) {
            const config = this.entries.get(key);
            if (config instanceof _hook__WEBPACK_IMPORTED_MODULE_1__["Hook"]) {
                config.hook.hostModule.config.set(config.referenceKey, value);
            }
            else {
                config.value = value;
                this.entries.set(key, config);
            }
        }
        if (autosave === true)
            this.saveConfig();
        return this;
    }
    keys() {
        return Array.from(this.entries.keys());
    }
    has(key) {
        return this.entries.has(key);
    }
    reset(key, autosave = true) {
        let conf = this.entries.get(key);
        conf.value = conf.defaultValue;
        this.entries.set(key, conf);
        if (autosave === true)
            this.saveConfig();
        return this;
    }
    resetAll(autosave = true) {
        this.keys().forEach(key => {
            this.reset(key, false);
        });
        if (autosave === true)
            this.saveConfig();
        return this;
    }
    define(key, conf) {
        if (this.entries.has(key))
            throw 'Config key already exists';
        this.entries.set(key, new _meta_config__WEBPACK_IMPORTED_MODULE_0__["MetaConfig"](this.hostModule, key, conf));
        return this;
    }
    undefine(key) {
        this.entries.delete(key);
        let storagedConfig = this.hostModule.storage.get('config');
        delete storagedConfig[key];
        this.hostModule.storage.set('config', storagedConfig);
    }
    hook(hookModuleName, key, newKey, config) {
        const hookModule = _module_handler__WEBPACK_IMPORTED_MODULE_2__["ModuleHandler"].get(hookModuleName);
        if (!hookModule.config.has(key))
            throw 'Config hook key does not exists';
        if (this.entries.has(newKey))
            throw 'Config hook newKey already exists';
        let chook = new _hook__WEBPACK_IMPORTED_MODULE_1__["Hook"](this.hostModule, hookModule.config.getMeta(key), config);
        this.entries.set(newKey, chook);
        return this;
    }
    loadSavedConfig() {
        let config = this.hostModule.storage.get('config');
        if (config === undefined) {
            this.saveConfig();
        }
        else {
            this.importConfig(config);
        }
    }
    saveConfig() {
        const config = this.hostModule.storage.has('config') ?
            this.hostModule.storage.get('config') : {};
        const currentConfig = this.exportConfig();
        Object.assign(config, currentConfig);
        this.hostModule.storage.set('config', config);
    }
    importConfig(new_config) {
        Object.keys(new_config).forEach((key) => {
            if (this.entries.has(key)) {
                this.set(key, new_config[key], false);
            }
        });
    }
    exportConfig() {
        const config = {};
        this.keys().forEach(key => {
            let conf = this.entries.get(key);
            if (!(conf instanceof _hook__WEBPACK_IMPORTED_MODULE_1__["Hook"]) && !conf.flags.isset('WIDGET'))
                config[key] = conf.value;
        });
        return config;
    }
}
Object.defineProperty(Config, 'HTML', {
    get: () => ({
        INPUT: {
            GETTER: (value, attr = {}) => {
                let html = $('<input>');
                html[0].value = value;
                Object.entries(attr).forEach(([key, value]) => {
                    html[0].setAttribute(key, value);
                });
                return html;
            },
            PARSER: (el) => el.find('input').val()
        },
        TEXTAREA: {
            GETTER: (value, attr = {}) => {
                let html = $('<textarea>');
                html[0].value = value;
                Object.entries(attr).forEach(([key, value]) => {
                    html[0].setAttribute(key, value);
                });
                return html;
            },
            PARSER: (el) => el.find('textarea').val()
        },
        SELECT: {
            GETTER: (options = [], selectedIndex = 0, attr = {}) => {
                let html = $('<select>');
                selectedIndex = selectedIndex >= options.length ?
                    options.length - 1 : selectedIndex;
                options.forEach((option, i) => {
                    let opt = $('<option>');
                    opt[0].setAttribute('value', i.toString());
                    opt[0].innerText = option;
                    html.append(opt);
                });
                Object.entries(attr).forEach(([key, value]) => {
                    html[0].setAttribute(key, value);
                });
                html.find('option')[selectedIndex % options.length].setAttribute('selected', '');
                return html;
            },
            PARSER: (el) => el.find('select')[0].selectedIndex
        },
        SWITCH: {
            GETTER: (state = false) => {
                let id = performance.now();
                let html = $(`<input class="toogle" type="checkbox" id="${id}"><label class="toogle" for="${id}">Toggle</label>`);
                html[0].checked = state;
                return html;
            },
            PARSER: (el) => el.find('input')[0].checked
        },
        HOTKEY: {
            GETTER: (key, filterfunc = null) => {
                let input = Config.HTML.INPUT.GETTER(key, {
                    type: 'text',
                    class: 'fancy-input disabled mousetrap hotkey',
                    readonly: true,
                });
                let me = null;
                let readingKeystroke = false;
                function mousetrapKeyReader() {
                    let self = this;
                    if (me === null) {
                        if (typeof Mousetrap !== 'function') {
                            var Mousetrap = (a) => { this.a = a; };
                        }
                        me = new Mousetrap(this);
                    }
                    readingKeystroke = true;
                    self.classList.remove('disabled');
                    this.addEventListener('blur', function () {
                        readingKeystroke = false;
                        self.classList.add('disabled');
                    });
                    me.handleKey = function (key, mods, ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        if (readingKeystroke == true && ev.type == 'keydown' && ev.repeat === false) {
                            if (key.length == 1) {
                                let hotkey = Array.from(new Set([...mods.reverse(), key])).join('+').toLowerCase();
                                if (typeof filterfunc == 'function') {
                                    if (filterfunc(key, mods, ev) === false) {
                                        return false;
                                    }
                                }
                                readingKeystroke = false;
                                self.classList.add('disabled');
                                self.value = hotkey;
                            }
                            else if (key === 'esc') {
                                readingKeystroke = false;
                                self.classList.add('disabled');
                            }
                        }
                    };
                }
                try {
                    let event = $.data(document, "events")
                        .click.filter((ev) => ev.selector == '.fancy-input.mousetrap.hotkey')[0];
                    $(document).off(event.origType, event.selector, event.handler);
                }
                catch (e) { }
                $(document).on('click', '.fancy-input.mousetrap.hotkey', mousetrapKeyReader);
                return input;
            },
            PARSER: (el) => el.find('input')[0].value
        },
        COLOR: {
            GETTER: (value, attr = {}) => {
                let html = $('<input type="color">');
                html[0].value = value;
                Object.entries(attr).forEach(([key, value]) => {
                    html[0].setAttribute(key, value);
                });
                return html;
            },
            PARSER: (el) => Config.HTML.INPUT.PARSER(el)
        },
        BUTTON: {
            GETTER: (value, attr = {}) => {
                let html = $('<input type="button">');
                html[0].value = value;
                Object.entries(attr).forEach(([key, value]) => {
                    html[0].setAttribute(key, value);
                });
                return html;
            }
        }
    })
});
Object.defineProperty(Config, 'DEFAULT_CONFIG', {
    get: () => ([
        ['ENABLED', {
                title: 'Enabled',
                defaultValue: true,
                flags: ['CONFIGURABLE'],
                getter: function () {
                    return Config.HTML.SWITCH.GETTER(this.value);
                },
                parser: function (element) {
                    let lastValue = this.value;
                    let value = Config.HTML.SWITCH.PARSER(element);
                    if (lastValue !== value) {
                        this.value = value;
                        if (value) {
                            this.hostModule.load(false);
                        }
                        else {
                            this.hostModule.unload();
                        }
                    }
                    return value;
                }
            }],
        ['DEBUG_MODE', {
                title: 'Debug Mode',
                defaultValue: false,
                flags: ['CONFIGURABLE'],
                section: 'Debug',
                getter: function () {
                    return Config.HTML.SWITCH.GETTER(this.value);
                },
                parser: Config.HTML.SWITCH.PARSER,
                events: {
                    HTMLAppended: function (meta, el) {
                        const toogle = $(el).find('input')[0];
                        toogle.addEventListener('change', function () {
                            meta.value = this.checked;
                        });
                    }
                }
            }],
        ['DEBUG_MODULE_NAME', {
                title: 'Show module name',
                value: true,
                defaultValue: true,
            }]
    ])
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

class LocalStorage {
    constructor(moduleReference) {
        this.module = moduleReference;
    }
    has(key) {
        const globalObject = GM_getValue(_definitions__WEBPACK_IMPORTED_MODULE_0__["GLOBAL_ENTRY_NAME"]);
        return globalObject[this.module.name].hasOwnProperty(key);
    }
    get(key) {
        const globalObject = GM_getValue(_definitions__WEBPACK_IMPORTED_MODULE_0__["GLOBAL_ENTRY_NAME"]);
        return globalObject[this.module.name][key];
    }
    set(key, value) {
        const globalObject = GM_getValue(_definitions__WEBPACK_IMPORTED_MODULE_0__["GLOBAL_ENTRY_NAME"]);
        globalObject[this.module.name][key] = value;
        GM_setValue(_definitions__WEBPACK_IMPORTED_MODULE_0__["GLOBAL_ENTRY_NAME"], globalObject);
    }
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FC", function() { return FC; });
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _thread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);




class FC {
    static async getUserData(id) {
        return new _user__WEBPACK_IMPORTED_MODULE_3__["User"](id).get();
    }
    static async getThreadData(id) {
        return new _thread__WEBPACK_IMPORTED_MODULE_2__["Thread"](id).get();
    }
    static async getCurrentUserId(force_update = false) {
        const hasLoggedIn = new Set(document.cookie.split(';').map(x => x.split('=')[0]))
            .has('bbsessionhash');
        if (!hasLoggedIn)
            return -1;
        if (FC.__userid__ !== null && force_update !== true)
            return FC.__userid__;
        return fetch(_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].usercp.href)
            .then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml)
            .then(html => {
            const anchor = html.querySelector('a[href^="member.php?u"]');
            if (anchor !== null) {
                let uid = anchor.getAttribute('href');
                if (uid !== undefined)
                    uid = uid.split('=')[1];
                FC.__userid__ = parseInt(uid);
            }
            return FC.__userid__;
        });
    }
    static async getCurrentUser() {
        return new _user__WEBPACK_IMPORTED_MODULE_3__["CurrentUser"]().get();
    }
    static async getSecurityToken() {
        const TOKEN = window.SECURITYTOKEN;
        if (typeof TOKEN === 'string') {
            return TOKEN;
        }
        else {
            return fetch(_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].onlineUsers.href)
                .then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml)
                .then(html => {
                return html.querySelector('[name="securitytoken"]').value;
            });
        }
    }
    static async searchForPartialNickname(nicknameFragment) {
        const form = new FormData();
        form.set('do', 'usersearch');
        form.set('fragment', nicknameFragment);
        form.set('securitytoken', await FC.getSecurityToken());
        return fetch(_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].userSearch.href, {
            method: 'POST',
            body: form
        }).then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml)
            .then(xml => {
            const userTags = Array.from(xml.querySelectorAll('user'));
            return userTags.map((userTag) => {
                return _user__WEBPACK_IMPORTED_MODULE_3__["BasicUser"].fromHTML(userTag);
            });
        });
    }
}
FC.__userid__ = null;
FC.Urls = _urls__WEBPACK_IMPORTED_MODULE_0__["Urls"];
FC.Utils = _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"];


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Urls", function() { return Urls; });
class Urls {
}
Urls.absolutePath = new URL('https://www.forocoches.com/');
Urls.thread = new URL('https://www.forocoches.com/foro/showthread.php?t=');
Urls.whoPosted = new URL('https://www.forocoches.com/foro/misc.php?do=whoposted&t=');
Urls.post = new URL('https://www.forocoches.com/foro/showthread.php?p=');
Urls.deletePost = new URL('https://www.forocoches.com/foro/editpost.php');
Urls.user = new URL('https://www.forocoches.com/foro/member.php?u=');
Urls.quote = new URL('https://www.forocoches.com/foro/newreply.php?do=newreply&p=');
Urls.newPost = new URL('https://www.forocoches.com/foro/newreply.php?do=postreply&t=');
Urls.private = new URL('https://www.forocoches.com/foro/private.php');
Urls.ignoreList = new URL('https://www.forocoches.com/foro/profile.php?do=ignorelist');
Urls.contactList = new URL('https://www.forocoches.com/foro/profile.php?do=buddylist');
Urls.profile = new URL('https://www.forocoches.com/foro/profile.php');
Urls.usercp = new URL('https://www.forocoches.com/foro/usercp.php?');
Urls.userSearch = new URL('https://www.forocoches.com/foro/ajax.php?do=usersearch');
Urls.onlineUsers = new URL('https://www.forocoches.com/foro/online.php');
Urls.forumDisplay = new URL('https://www.forocoches.com/foro/forumdisplay.php?f=');
Urls.showThread = new URL('https://www.forocoches.com/foro/showthread.php?t=');


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_dec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _global_dec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_dec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"]; });





/***/ }),
/* 32 */
/***/ (function(module, exports) {

String.prototype.removeTildes = function () {
    return this.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "");
};
FormData.prototype.toDataString = function () {
    return Array.from(this).reduce((a, b) => (typeof a == 'string' ? `${a}&` : `${a[0]}=${escape(a[1])}&`) +
        `${b[0]}=${escape(b[1])}`);
};
Array.prototype.binarySearch = function (value, valueGetter = null, comp = null) {
    let lastPos = 0;
    let pos = Math.round(this.length / 2);
    let foundAt = -1;
    valueGetter = typeof valueGetter !== 'function' ?
        (v) => v : valueGetter;
    comp = typeof comp !== 'function' ?
        (a, b) => a - b : comp;
    while (foundAt == -1 && pos < this.length) {
        let v = valueGetter(this[pos]);
        let r = comp(v, value);
        if (r < 0) {
            pos += Math.round((lastPos + pos) / 2);
        }
        else if (r > 0) {
            pos -= Math.round((lastPos + pos) / 2);
        }
        else {
            foundAt = pos;
        }
        lastPos = pos;
    }
    return foundAt;
};


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
class Utils {
    static utf8ToIso(arrayBuffer) {
        let encoder = new TextDecoder("ISO-8859-1");
        arrayBuffer = new Uint8Array(arrayBuffer);
        return encoder.decode(arrayBuffer);
    }
    static parseHTML(text) {
        return (new DOMParser()).parseFromString(text, "text/html");
    }
    static responseToHtml(response) {
        return response.arrayBuffer()
            .then(Utils.utf8ToIso)
            .then(Utils.parseHTML);
    }
    static removeTildesFromString(value) {
        return value.removeTildes();
    }
    static formToDataString(form) {
        return form.toDataString();
    }
    static arrayBinarySearch(array, value, comp = null, valueGetter = null) {
        return array.binarySearch(value, comp, valueGetter);
    }
    static jsonSafeParse(json) {
        try {
            return JSON.parse(json);
        }
        catch (e) {
            return undefined;
        }
    }
    static get isMobileVersion() {
        return this._isMobileVersion;
    }
    static parseFCDate(dateString) {
        const msInADay = 1000 * 60 * 60 * 24;
        if (typeof dateString !== 'string') {
            let invalid = new Date();
            invalid.setTime(NaN);
            return invalid;
        }
        const dateChunks = dateString.split(',')
            .map(s => s.trim());
        const monthsTranslations = {
            'ene': 'jan',
            'abr': 'apr',
            'ago': 'aug',
            'dic': 'dec'
        };
        const date = new Date();
        if (['Hoy', 'Ayer'].includes(dateChunks[0])) {
            date.setTime(Math.floor(Date.now() / msInADay) * msInADay +
                (date.getTimezoneOffset() * 1000 * 60));
            if (dateChunks[0] === 'Ayer')
                date.setTime(date.getTime() - msInADay);
        }
        else {
            let [day, month, year] = dateChunks[0].split('-');
            if (monthsTranslations.hasOwnProperty(month))
                month = monthsTranslations[month];
            date.setTime(Date.parse([day, month, year].join('-')));
        }
        if (dateChunks.length > 1) {
            let hour = Date.parse(`1-1-1970 ${dateChunks[1]} GMT`);
            date.setTime(date.getTime() + hour - (new Date().getTimezoneOffset()));
        }
        return date;
    }
}
Utils._isMobileVersion = location.host.split('.')[0] === 'm';


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thread", function() { return Thread; });
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class Thread extends _dynamic__WEBPACK_IMPORTED_MODULE_2__["Dynamic"] {
    constructor(id, update = true) {
        super();
        this.authorId = null;
        this.zoneId = null;
        this.title = null;
        this.creationDate = null;
        this.postCount = null;
        this.exists = true;
        this.error = null;
        this.id = id;
        if (update)
            this.update();
    }
    get pageCount() {
        return Math.ceil(this.postCount / Thread.DEFAULT_POSTS_PER_PAGE);
    }
    updateFromHTML(html) {
        const errorPanel = html.querySelector('.panelsurround');
        const errorOccurred = errorPanel !== null &&
            errorPanel.querySelector('textarea') === null &&
            document.querySelector('.panelsurround').querySelector('fieldset') === null;
        if (errorOccurred === true) {
            this.error = errorPanel.innerText.trim();
            this.exists = false;
        }
        else {
            if (this.authorId === null) {
                this.authorId = parseInt(html.querySelector('.bigusername').getAttribute('href').split('=')[1]);
                this.zoneId = parseInt(html.querySelector('.navbar + .navbar + .navbar > [href*="forumdisplay.php?f="]')
                    .getAttribute('href').split('=')[1]);
                this.creationDate = _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].parseFCDate(html.querySelector('[id*="post"] td.thead').innerText);
            }
            this.title = html.querySelector('.cmega').innerText;
            let navNext = html.querySelector('.pagenav .mfont');
            if (navNext !== null) {
                this.postCount = parseInt(navNext.title.split(' ').slice(-1)[0].replace('.', ''));
            }
            else {
                this.postCount = html.querySelectorAll('[id*="postcount"]').length;
            }
        }
    }
    async update() {
        if (this.exists === false)
            return this;
        return fetch(`${_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].thread}${this.id}`)
            .then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml)
            .then(html => {
            this.updateFromHTML(html);
            return this;
        }).catch(() => {
            return this;
        });
    }
    async getWhoPosted() {
        return fetch(`${_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].whoPosted}${this.id}`)
            .then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml)
            .then(html => {
            const postCountByUser = new Map();
            const rows = Array.from(html.querySelectorAll('.tborder > tbody > tr')).slice(2, -1);
            rows.forEach(row => {
                const cols = row.querySelectorAll('td > a');
                const userId = parseInt(cols[0].href.split('=')[1]);
                const nickname = cols[0].innerText.trim();
                const postsCount = parseInt(cols[1].innerText);
                postCountByUser.set(new _user__WEBPACK_IMPORTED_MODULE_4__["BasicUser"](userId, nickname), postsCount);
            });
            return postCountByUser;
        });
    }
    async getPost(number) {
        return fetch(`${_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].thread}${this.id}`)
            .then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml)
            .then(html => {
            const postHTML = html.querySelector(`[name="${number}"]`)
                .parentNode.parentNode.parentNode.parentNode;
            return _post__WEBPACK_IMPORTED_MODULE_3__["Post"].fromHTML(postHTML);
        });
    }
    async getMultiplePosts(numbers) {
        numbers.sort((a, b) => a - b);
        const numbersByPage = (function () {
            const pages = new Map;
            numbers.forEach(n => {
                const page = Math.ceil(n / Thread.MAX_POSTS_PER_PAGE);
                if (!pages.has(page))
                    pages.set(page, []);
                pages.get(page).push(n);
            });
            return pages;
        })();
        const pageNumbers = Array.from(numbersByPage.keys());
        const pagesRequests = Array.from(numbersByPage.keys()).map(pageNumber => {
            return fetch(`${_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].thread}${this.id}&page=${pageNumber}&pp=${Thread.MAX_POSTS_PER_PAGE}`)
                .then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml);
        });
        const posts = new Map();
        (await Promise.all(pagesRequests)).map((html, i) => {
            const numbersInCurrentPage = numbersByPage.get(pageNumbers[i]);
            numbersInCurrentPage.forEach(number => {
                const postHTML = html.querySelector(`[name="${number}"]`)
                    .parentNode.parentNode.parentNode.parentNode;
                posts.set(number, _post__WEBPACK_IMPORTED_MODULE_3__["Post"].fromHTML(postHTML));
            });
        });
        return posts;
    }
    async getPostsInPage(pageNumber = 1, postsPerPage = Thread.DEFAULT_POSTS_PER_PAGE, update = true) {
        if (postsPerPage < 0)
            throw 'postsPerPage can not be negative';
        if (postsPerPage > Thread.MAX_POSTS_PER_PAGE)
            postsPerPage = Thread.MAX_POSTS_PER_PAGE;
        return fetch(`${_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].thread}${this.id}&page=${pageNumber}&pp=${postsPerPage}`)
            .then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml)
            .then(html => {
            if (update === true)
                this.updateFromHTML(html);
            const posts = Array.from(html.querySelectorAll('table[id^="post"]'));
            return posts.map((html) => {
                return _post__WEBPACK_IMPORTED_MODULE_3__["Post"].fromHTML(html);
            });
        });
    }
    async getPostInRange(start = null, end = null, update = true) {
        if (start === null || end === null)
            throw 'Must introduce start - end range';
        if (start >= end)
            throw 'Start position must be less than end postition';
        const startPage = Math.ceil(start / Thread.MAX_POSTS_PER_PAGE);
        const endPage = Math.ceil(start / Thread.MAX_POSTS_PER_PAGE);
        const range = endPage - startPage;
        const postsInPages = new Array(range).fill(undefined).map(({}, index) => {
            const pageNumber = index + startPage;
            return this.getPostsInPage(pageNumber, Thread.MAX_POSTS_PER_PAGE, update);
        });
        const posts = (await Promise.all(postsInPages)).flat();
        return posts.slice(0, range);
    }
}
Thread.DEFAULT_POSTS_PER_PAGE = 30;
Thread.MAX_POSTS_PER_PAGE = 60;
__decorate([
    _dynamic__WEBPACK_IMPORTED_MODULE_2__["DynamicLock"]
], Thread.prototype, "update", null);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dynamic", function() { return _dynamic__WEBPACK_IMPORTED_MODULE_0__["Dynamic"]; });

/* harmony import */ var _dynamic_lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicLock", function() { return _dynamic_lock__WEBPACK_IMPORTED_MODULE_1__["DynamicLock"]; });





/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dynamic", function() { return Dynamic; });
class Dynamic {
    constructor() {
        this.__currentPromise = null;
    }
    async waitUntilLoadingIsComplete() {
        return new Promise(resolve => {
            if (this.__currentPromise === null) {
                resolve();
            }
            else {
                this.__currentPromise
                    .then((x) => {
                    resolve();
                    return x;
                })
                    .catch((x) => {
                    resolve();
                    return x;
                });
            }
        });
    }
    async get() {
        await this.waitUntilLoadingIsComplete();
        return this;
    }
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicLock", function() { return DynamicLock; });
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);

function DynamicLock(target, {}, descriptor) {
    const originalMethod = descriptor.value;
    if (target instanceof _dynamic__WEBPACK_IMPORTED_MODULE_0__["Dynamic"] && originalMethod.constructor.name == 'AsyncFunction') {
        descriptor.value = async function (...args) {
            this.__currentPromise = originalMethod.apply(this, ...args);
            await this.__currentPromise;
            this.__currentPromise = null;
        };
    }
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class Post extends _dynamic__WEBPACK_IMPORTED_MODULE_1__["Dynamic"] {
    constructor(number, update = true) {
        super();
        this.id = null;
        this.threadId = null;
        this.ownerId = null;
        this.number = null;
        this.content = null;
        this.creationDate = null;
        this.editDate = null;
        this.number = number;
        if (update)
            this.update();
    }
    async update() {
        return this;
    }
    updateFromHTML(html) {
        if (html.tagName !== 'TABLE' || !html.id.startsWith('post'))
            throw 'No a valid post';
        this.id = parseInt(html.id.slice(4));
        this.threadId = parseInt((/t\=([\d]+)/).exec(html.querySelector('[href^="showthread.php?t="]').href)[1]);
        this.ownerId = parseInt(html.querySelector('.bigusername').href.split('=')[1]);
        this.number = parseInt(html.querySelector('[id^="postcount"]').name);
        this.content = html.querySelector('[name="HOTWordsTxt"] > div').outerHTML;
        this.creationDate = _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].parseFCDate(html.querySelector('td.thead').innerText);
        this.editDate = (function () {
            const editPhrase = html.querySelector('td[class^="alt1"][valign="bottom"] em');
            if (editPhrase === null)
                return null;
            let fcDateString = editPhrase.innerText.split('fecha: ')[1]
                .replace(' a las', ',').slice(0, -1);
            return _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].parseFCDate(fcDateString);
        })();
        return this;
    }
    static fromHTML(html) {
        return new Post(null, false).updateFromHTML(html);
    }
}
__decorate([
    _dynamic__WEBPACK_IMPORTED_MODULE_1__["DynamicLock"]
], Post.prototype, "update", null);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_abouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAbouts", function() { return _user_abouts__WEBPACK_IMPORTED_MODULE_0__["UserAbouts"]; });

/* harmony import */ var _user_stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserStats", function() { return _user_stats__WEBPACK_IMPORTED_MODULE_1__["UserStats"]; });

/* harmony import */ var _basic_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicUser", function() { return _basic_user__WEBPACK_IMPORTED_MODULE_2__["BasicUser"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["User"]; });

/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentUser", function() { return _current_user__WEBPACK_IMPORTED_MODULE_4__["CurrentUser"]; });








/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAbouts", function() { return UserAbouts; });
class UserAbouts {
    constructor() {
        this.car = null;
        this.place = null;
        this.interests = null;
        this.occupation = null;
        this.signature = null;
    }
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStats", function() { return UserStats; });
class UserStats {
    constructor() {
        this.messageCount = null;
        this.signupDate = null;
        this.lastActivity = null;
    }
    get messagesPerDay() {
        if (this.messageCount === null || this.signupDate === null)
            return null;
        const msSinceSignUp = Date.now() - this.signupDate.getTime();
        return this.messageCount / (msSinceSignUp / 1000 / 60 / 60 / 24);
    }
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicUser", function() { return BasicUser; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);

class BasicUser {
    constructor(id = null, nickname = null) {
        this.id = null;
        this.nickname = null;
        this.id = id;
        this.nickname = nickname.trim();
    }
    getUser(update = true) {
        return new _user__WEBPACK_IMPORTED_MODULE_0__["User"](this.id, update);
    }
    static fromHTML(html) {
        const id = (function () {
            if (html.hasAttribute('userid'))
                return parseInt(html.getAttribute('userid'));
            if (html.hasAttribute('href'))
                return parseInt(html.getAttribute('href').split('=')[1]);
            throw new Error('HTML tag is not valid');
        })();
        const nickname = html.innerText;
        return new BasicUser(id, nickname);
    }
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _user_stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _user_abouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class User extends _dynamic__WEBPACK_IMPORTED_MODULE_2__["Dynamic"] {
    constructor(id, update = true) {
        super();
        this.exists = true;
        this.nickname = null;
        this.avatar = null;
        this.isConnected = null;
        this.title = null;
        this.stats = new _user_stats__WEBPACK_IMPORTED_MODULE_3__["UserStats"]();
        this.about = new _user_abouts__WEBPACK_IMPORTED_MODULE_4__["UserAbouts"]();
        this.error = null;
        this.id = id;
        if (update)
            this.update();
    }
    async update() {
        if (this.exists === false)
            return this;
        return fetch(`${_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].user}${this.id}&simple=1`)
            .then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml)
            .then(html => {
            const errorMessage = html.querySelector('.panelsurround');
            if (errorMessage !== null) {
                this.error = errorMessage.innerText.trim();
                this.exists = false;
            }
            else {
                this.nickname = html.querySelector('#username_box > h1').innerText.trim();
                this.avatar = html.querySelector('img.avatar');
                this.isConnected = html.querySelector('#username_box img')
                    .getAttribute('src').search('online') >= 0;
                this.title = html.querySelector('#username_box > h2').innerText.trim();
                let tempData = Array.from(html.querySelectorAll('.statistics_group .shade'))
                    .map((span) => {
                    const li = span.parentNode;
                    let x = li.innerText.split(':');
                    return [
                        _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].removeTildesFromString(x[0]).trim(),
                        x.slice(1).join(':')
                    ];
                });
                tempData = Object.fromEntries(tempData);
                this.stats.messageCount = parseInt(tempData['Mensajes Total'].replace('.', ''));
                const lastActivity = _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].parseFCDate(tempData['Ultima Actividad']);
                this.stats.lastActivity = isNaN(lastActivity.getTime()) ?
                    null : lastActivity;
                const signupDate = _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].parseFCDate(tempData['Fecha de Registro']);
                this.stats.signupDate = isNaN(signupDate.getTime()) ?
                    null : signupDate;
                tempData = Array.from(html.querySelectorAll('.list_no_decoration .profilefield_list > *'))
                    .map((element, index) => {
                    let value;
                    if (index % 2 === 0) {
                        value = _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].removeTildesFromString(element.innerText);
                    }
                    else {
                        value = element.childNodes[0].nodeValue;
                    }
                    return value.trim();
                }).map((value, index, self) => {
                    return index % 2 === 0 ?
                        [value, self[index + 1]] : undefined;
                }).filter(x => x !== undefined);
                tempData = Object.fromEntries(tempData);
                this.about.car = tempData.hasOwnProperty('Coche') ?
                    tempData['Coche'] : null;
                this.about.place = tempData.hasOwnProperty('Lugar') ?
                    tempData['Lugar'] : null;
                this.about.interests = tempData.hasOwnProperty('Intereses') ?
                    tempData['Intereses'] : null;
                this.about.occupation = tempData.hasOwnProperty('Ocupacion') ?
                    tempData['Ocupacion'] : null;
                this.about.signature = html.querySelector('#signature')
                    .innerHTML.trim();
            }
            return this;
        }).catch(() => {
            return this;
        });
    }
}
__decorate([
    _dynamic__WEBPACK_IMPORTED_MODULE_2__["DynamicLock"]
], User.prototype, "update", null);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUser", function() { return CurrentUser; });
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _basic_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);





class CurrentUser extends _user__WEBPACK_IMPORTED_MODULE_3__["User"] {
    constructor() {
        super(null, false);
        const self = this;
        (async function () {
            self.id = await _index__WEBPACK_IMPORTED_MODULE_2__["FC"].getCurrentUserId();
            await self.update();
        })();
    }
    async getIgnoredUserList() {
        return fetch(_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].ignoreList.href)
            .then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml)
            .then((html) => {
            const ignoredUserTagList = html.querySelectorAll('.userlist [href*="member.php?u="]');
            return Array.from(ignoredUserTagList).map(tag => _basic_user__WEBPACK_IMPORTED_MODULE_4__["BasicUser"].fromHTML(tag));
        });
    }
    async getContactList() {
        return fetch(_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].contactList.href)
            .then(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].responseToHtml)
            .then((html) => {
            const contactUserList = html.querySelectorAll('.userlist [href*="member.php?u="]');
            return Array.from(contactUserList).map(tag => _basic_user__WEBPACK_IMPORTED_MODULE_4__["BasicUser"].fromHTML(tag));
        });
    }
    async unignoreUsers(userIds) {
        const userIdList = typeof userIds === 'number' ?
            [userIds] : userIds;
        const currentIgnoredUsers = await this.getIgnoredUserList();
        const updateForm = new FormData();
        updateForm.set('s', '');
        updateForm.set('do', 'updatelist');
        updateForm.set('userlist', 'ignore');
        updateForm.set('securitytoken', await _index__WEBPACK_IMPORTED_MODULE_2__["FC"].getSecurityToken());
        currentIgnoredUsers.forEach((user => {
            const id = user.id;
            if (!userIdList.includes(id))
                updateForm.set(`listbits[ignore][${id}]`, id.toString());
            updateForm.set(`listbits[ignore_original][${id}]`, id.toString());
        }));
        return fetch(`${_urls__WEBPACK_IMPORTED_MODULE_0__["Urls"].profile.href}?do=updatelist&userlist=ignore`, {
            method: 'POST',
            body: updateForm
        });
    }
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceHandler", function() { return ResourceHandler; });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

class ResourceHandler {
    static parseUrl(link) {
        if (link[0] === '#')
            return null;
        try {
            const priorizate = link[0] === '!';
            if (priorizate)
                link = link.slice(1);
            const url = new URL(link);
            const protocol = url.protocol;
            const pathname = url.pathname.replace('//', '/');
            url.protocol = 'https:';
            url.pathname = pathname;
            switch (protocol) {
                case 'rgh:':
                    url.hostname = 'raw.githubusercontent.com';
                    break;
            }
            return url;
        }
        catch (err) {
            return null;
        }
    }
    static async unpackJSONlinks(resources) {
        return Promise.all(resources.map((link, index) => new Promise(function (resolve) {
            let url = ResourceHandler.parseUrl(link);
            if (url === null)
                return resolve(null);
            if (!url.pathname.endsWith('.json'))
                return resolve([url.href, index]);
            fetch(url.toString(), _definitions__WEBPACK_IMPORTED_MODULE_0__["NO_CACHE_HEADERS"]).then((response) => response.json()).then((parsed) => resolve([parsed, index])).catch(() => resolve(null));
        })));
    }
    static async sortResources(resources) {
        resources = resources.filter(r => r !== null);
        const resourcesWithoutIndex = resources.sort(([{}, url_a_index], [{}, url_b_index]) => url_a_index - url_b_index).map(r => r[0]).flat();
        return Array.from(new Set(resourcesWithoutIndex)).map((res, i) => {
            return [res, i];
        });
    }
    static async getSourceCode(resources) {
        return Promise.all(resources.map(([link, resourceIndex]) => {
            return new Promise(function (resolve) {
                let url = ResourceHandler.parseUrl(link);
                if (url === null)
                    return resolve(false);
                if (!url.pathname.endsWith('.js'))
                    return resolve(false);
                return fetch(url.toString(), _definitions__WEBPACK_IMPORTED_MODULE_0__["NO_CACHE_HEADERS"]).then(response => response.text()).then(scriptSource => resolve([scriptSource, resourceIndex])).catch((err) => {
                    this.MODULE.debug.error(url.href, err);
                    resolve(false);
                });
            });
        }));
    }
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _control_panel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTROL_PANEL_MODULE", function() { return _control_panel_module__WEBPACK_IMPORTED_MODULE_0__["CONTROL_PANEL_MODULE"]; });




/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_PANEL_MODULE", function() { return CONTROL_PANEL_MODULE; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _fc_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);






const CONTROL_PANEL_MODULE = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"]({
    moduleName: 'CONTROL_PANEL',
    title: 'Panel de control',
    description: 'Panel de control para administrar módulos',
    author: 'pytness',
    version: '0.1',
    runat: 'load',
    match: ['*']
});
const panel = new _panel__WEBPACK_IMPORTED_MODULE_3__["Panel"](CONTROL_PANEL_MODULE);
CONTROL_PANEL_MODULE.config.getMeta('ENABLED')
    .flags.unset('CONFIGURABLE');
CONTROL_PANEL_MODULE.config.define('TOGGLE_COLOR', {
    title: 'Toogle color',
    defaultValue: '#b4d455',
    flags: ['CONFIGURABLE'],
    getter: function () {
        return _module__WEBPACK_IMPORTED_MODULE_0__["Config"].HTML.COLOR.GETTER(this.value);
    },
    parser: function (el) {
        let value = _module__WEBPACK_IMPORTED_MODULE_0__["Config"].HTML.COLOR.PARSER(el);
        CONTROL_PANEL_MODULE.styles.set('input.toogle:checked+label', {
            'background-color': value
        });
        return value;
    },
    events: {
        HTMLAppended: function ({}, html) {
            $(html).find('input')[0].addEventListener('input', function ({}) {
                CONTROL_PANEL_MODULE.styles.set('input.toogle:checked+label', {
                    'background-color': this.value
                });
            });
        },
        reset: function () {
            CONTROL_PANEL_MODULE.styles.set('input.toogle:checked+label', {
                'background-color': this.defaultValue
            });
        },
        cancel: function () {
            CONTROL_PANEL_MODULE.styles.set('input.toogle:checked+label', {
                'background-color': this.value
            });
        }
    }
}).define('DEV_MODE', {
    section: 'Dev',
    title: 'Dev mode',
    defaultValue: false,
    flags: ['CONFIGURABLE'],
    getter: function () {
        return _module__WEBPACK_IMPORTED_MODULE_0__["Config"].HTML.SWITCH.GETTER(this.value);
    },
    parser: function (el) {
        return _module__WEBPACK_IMPORTED_MODULE_0__["Config"].HTML.SWITCH.PARSER(el);
    },
    events: {
        HTMLAppended: function (selfConfig, html) {
            $(html).find('input')[0].addEventListener('input', function ({}) {
                selfConfig.value = this.checked;
                panel.showModuleConfigDialog(selfConfig.hostModule.name);
            });
        }
    }
}).hook('MODULE_HANDLER', 'RESOURCES', 'RESOURCES', {
    title: 'User resources',
    flags: ['CONFIGURABLE'],
    getter: function () {
        let value = this.value.join('\n');
        value += value === '' ? '' : '\n';
        return _module__WEBPACK_IMPORTED_MODULE_0__["Config"].HTML.TEXTAREA.GETTER(value, {
            cols: 80,
            rows: 20
        });
    },
    parser: function (el) {
        return _module__WEBPACK_IMPORTED_MODULE_0__["Config"].HTML.TEXTAREA.PARSER(el)
            .split('\n')
            .map((l) => l.trim())
            .filter((l) => l !== '');
    }
});
CONTROL_PANEL_MODULE.onload = function () {
    if (_fc_api__WEBPACK_IMPORTED_MODULE_2__["FC"].Utils.isMobileVersion) {
        const gearTag = $(_constants__WEBPACK_IMPORTED_MODULE_4__["SETTINGS_BUTTON_TAG"]);
        $('.mobilebuttonslide').before(gearTag);
        gearTag.on('click', function (e) {
            if (!Swal.isVisible()) {
                e.preventDefault();
                panel.showModuleListDialog();
            }
        });
    }
    else {
        Mousetrap.bind('esc', function (e) {
            if (!Swal.isVisible()) {
                e.preventDefault();
                panel.showModuleListDialog();
            }
        });
    }
    CONTROL_PANEL_MODULE.styles.set('input.toogle:checked+label', {
        'background-color': CONTROL_PANEL_MODULE.config.get('TOGGLE_COLOR')
    });
    const HASH_BLOCK = _definitions__WEBPACK_IMPORTED_MODULE_1__["VERSION_HASH"].slice(0, 8);
    if (!_fc_api__WEBPACK_IMPORTED_MODULE_2__["FC"].Utils.isMobileVersion) {
        $('[id="AutoNumber1"] tbody tr td')[1]
            .innerText = `Version hash: [${HASH_BLOCK}]`;
    }
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _module_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _dev_terminal_terminal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);



class Panel {
    constructor(module) {
        this.MODULE = module;
    }
    saveConfigDialog(modal) {
        let moduleName = $(modal).find('#swal2-title')
            .attr('moduleName');
        let module = _module_handler__WEBPACK_IMPORTED_MODULE_1__["ModuleHandler"].get(moduleName);
        $(modal).find('tr.section, tr.section+tr').each(({}, tr) => {
            let tds = $(tr).find('td').toArray();
            if (tds.length > 2)
                tds.shift();
            let key = tds[0].getAttribute('key');
            const meta = module.config.getMeta(key);
            if (meta.flags.isset('WIDGET'))
                return;
            module.config.set(key, meta.parseHTML($(tds[1])));
        });
    }
    async showModuleConfigDialog(moduleName) {
        const self = this;
        let module = _module_handler__WEBPACK_IMPORTED_MODULE_1__["ModuleHandler"].get(moduleName);
        let html = $('<div>');
        let table = $('<table class="module_menu config_tab"><tr class="title"><td>Section</td><td>Key</td><td>Value</td></tr></table>');
        let keys = module.config.keys();
        keys.splice(keys.indexOf('ENABLED'), 1);
        let sectionsMap = new Map();
        keys.forEach((key) => {
            const section = module.config.getMeta(key).section;
            if (!sectionsMap.has(section))
                sectionsMap.set(section, []);
            sectionsMap.get(section)
                .push(key);
        });
        let sectionsArray = (function () {
            const DEBUG_SECTION_NAME = 'Debug';
            const DEBUG_SECTION = sectionsMap.get(DEBUG_SECTION_NAME);
            sectionsMap.delete(DEBUG_SECTION_NAME);
            let _ = Array.from(sectionsMap.entries());
            if (self.MODULE.config.get('DEV_MODE'))
                _.push([DEBUG_SECTION_NAME, DEBUG_SECTION]);
            return _;
        })();
        sectionsArray.forEach(([section, keys]) => {
            keys.forEach((key, i) => {
                let metaConfig = module.config.getMeta(key);
                if (metaConfig !== undefined && (metaConfig.flags.isset('CONFIGURABLE') || metaConfig.flags.isset('WIDGET'))) {
                    let tr = $(`<tr><td key="${key}"><span ctitle></span><span reset_tag></span></td><td cvalue></td></tr>`);
                    tr.find(`[ctitle]`).html(metaConfig.title);
                    if (metaConfig.description !== undefined)
                        tr.find(`[key="${key}"]`).attr('title', metaConfig.description);
                    if (!metaConfig.flags.isset('WIDGET'))
                        tr.find(`[reset_tag]`).html(_constants__WEBPACK_IMPORTED_MODULE_0__["RESET_BUTTON_TAG"]);
                    let htmlElement = metaConfig.getHTML();
                    $(tr.find('td[cvalue]')[0]).append(htmlElement);
                    table.append(tr);
                    if (i === 0) {
                        tr.addClass('section');
                        $(tr.find('td')[0])
                            .before(`<td rowspan="${keys.length}">${section}</td>`);
                    }
                }
            });
        });
        html.append(table);
        let modal = null;
        return Swal.fire({
            title: module.info.title,
            html: html,
            heightAuto: false,
            showConfirmButton: true,
            showCancelButton: true,
            reverseButtons: true,
            cancelButtonColor: '#E03A3A',
            animation: false,
            customClass: 'with-max-height swal-wide',
            onOpen: function (_modal) {
                modal = _modal;
                modal.focus();
                $(modal).find('.swal2-title')
                    .attr('moduleName', moduleName);
                $(modal).find('.swal2-title')
                    .append($(`${_constants__WEBPACK_IMPORTED_MODULE_0__["backButton"]}`));
                $(modal).find('.swal2-title').css({
                    'left': '32px'
                });
                $(modal).on('click', '.swal2-close.backbutton', function () {
                    self.saveConfigDialog(modal);
                    Swal.close();
                    self.showModuleListDialog();
                });
                module.config.keys().forEach((key) => {
                    let config = module.config.getMeta(key);
                    let valueHTML = $(modal).find(`tr:has(td[key="${key}"]) td[cvalue]`)[0];
                    if (valueHTML === undefined)
                        return;
                    config.dispatchEvent('HTMLAppended', valueHTML);
                    if (!config.flags.isset('WIDGET')) {
                        let resetButton = $(modal).find(`td[key="${key}"] span.reset-button`)[0];
                        resetButton.addEventListener('click', function () {
                            module.config.reset(key, false);
                            config.dispatchEvent('reset');
                            let html = $(valueHTML);
                            html.children().remove();
                            html.append(module.config.getMeta(key).getHTML());
                            config.dispatchEvent('HTMLAppended', valueHTML);
                        });
                    }
                });
            },
            preConfirm: () => {
                self.saveConfigDialog(modal);
            },
        }).then(result => {
            if (result.dismiss !== undefined) {
                module.config.loadSavedConfig();
                module.config.keys().forEach((key) => module.config.getMeta(key).dispatchEvent('cancel'));
            }
        });
        ;
    }
    async showModuleListDialog() {
        const self = this;
        let tempTable = $(_constants__WEBPACK_IMPORTED_MODULE_0__["moduleListTable"]);
        const sortedModuleList = _module_handler__WEBPACK_IMPORTED_MODULE_1__["ModuleHandler"].keys()
            .sort((moduleKeyA, moduleKeyB) => {
            const moduleTitleA = _module_handler__WEBPACK_IMPORTED_MODULE_1__["ModuleHandler"].get(moduleKeyA).info.title;
            const moduleTitleB = _module_handler__WEBPACK_IMPORTED_MODULE_1__["ModuleHandler"].get(moduleKeyB).info.title;
            return moduleTitleA.localeCompare(moduleTitleB);
        });
        sortedModuleList.splice(sortedModuleList.indexOf('CONTROL_PANEL'), 1);
        sortedModuleList.splice(sortedModuleList.indexOf('MODULE_HANDLER'), 1);
        sortedModuleList.forEach((moduleName) => {
            let module = _module_handler__WEBPACK_IMPORTED_MODULE_1__["ModuleHandler"].get(moduleName);
            const html = $(`<tr id='${module.name}'>
					<td><span>${module.info.title}</span></td>
					<td>${module.info.version}</td>
					<td></td>
				</tr>`);
            $(html.find('td')[2]).append(module.config.getMeta('ENABLED')
                .getHTML());
            html.find('td')[0].setAttribute('title', module.info.description);
            tempTable.append(html);
        });
        return Swal.fire({
            title: 'Config panel',
            html: tempTable,
            heightAuto: false,
            showConfirmButton: false,
            showCloseButton: true,
            animation: false,
            customClass: 'with-max-height',
            onOpen: (modal) => {
                modal.focus();
                const settingsButton = $(_constants__WEBPACK_IMPORTED_MODULE_0__["SETTINGS_BUTTON_TAG"]);
                $(modal).find('.swal2-close')
                    .before(settingsButton);
                settingsButton.on('click', () => this.showModuleConfigDialog('CONTROL_PANEL'));
                $(modal).find('tr').each(({}, tr) => {
                    let span = $(tr).find('span')[0];
                    if (span !== undefined) {
                        span.addEventListener('click', function () {
                            self.showModuleConfigDialog(tr.id);
                        });
                    }
                });
                _module_handler__WEBPACK_IMPORTED_MODULE_1__["ModuleHandler"].keys().forEach((moduleName) => {
                    const td = $($(modal).find(`tr[id="${moduleName}"] td`)[2]);
                    if (td === undefined)
                        return;
                    const module = _module_handler__WEBPACK_IMPORTED_MODULE_1__["ModuleHandler"].get(moduleName);
                    const config = module.config.getMeta('ENABLED');
                    td.find('input').on('change', function () {
                        let enabled = config.parseHTML(td);
                        module.config.set('ENABLED', enabled);
                    });
                });
            }
        });
    }
    async showTerminal() {
        return Swal.fire({
            title: 'Config panel',
            html: '<div id="terminal"></div>',
            heightAuto: false,
            showConfirmButton: false,
            showCloseButton: true,
            animation: false,
            customClass: 'with-max-height swal-wide',
            onOpen: ({}) => {
                const terminal = new _dev_terminal_terminal__WEBPACK_IMPORTED_MODULE_2__["DevTerminal"]('#terminal');
                terminal.init();
            }
        });
    }
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_BUTTON_TAG", function() { return SETTINGS_BUTTON_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMINAL_BUTTON_TAG", function() { return TERMINAL_BUTTON_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_BUTTON_TAG", function() { return RESET_BUTTON_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleListTable", function() { return moduleListTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backButton", function() { return backButton; });
const SETTINGS_BUTTON_TAG = `<i class="material-icons config-button">settings</i>`;
const TERMINAL_BUTTON_TAG = `<i class="material-icons config-button" style="margin-right: 40px;">code</i>`;
const RESET_BUTTON_TAG = `<span class="reset-button" title="Reset value"></span>`;
const moduleListTable = '<table class="module_menu"><tr class="title"><td>Name</td><td>Version</td><td>Enabled</td></tr></table>';
const backButton = '<span class="swal2-close backbutton"></span>';


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevTerminal", function() { return DevTerminal; });
/* harmony import */ var ansi_escapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var ansi_escapes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_escapes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);


var ParseType;
(function (ParseType) {
    ParseType[ParseType["COMMAND"] = 0] = "COMMAND";
    ParseType[ParseType["JAVASCRIPT"] = 1] = "JAVASCRIPT";
})(ParseType || (ParseType = {}));
;
function charIsPrintable(keycode) {
    const valid = (keycode > 47 && keycode < 58) ||
        keycode == 32 || keycode == 13 ||
        (keycode > 64 && keycode < 91) ||
        (keycode > 95 && keycode < 112) ||
        (keycode > 185 && keycode < 193) ||
        (keycode > 218 && keycode < 223);
    return valid;
}
const PROMPT_LENGTH = 2;
const commandList = new _command__WEBPACK_IMPORTED_MODULE_1__["CommandList"]();
commandList.declareMultiple([
    new _command__WEBPACK_IMPORTED_MODULE_1__["Command"]('help', 'Shows this help', function (...args) {
        if (args.length === 0) {
            commandList.getCommandList().forEach(binary => this.terminal.writeln(`${binary}: ${commandList.get(binary).description}`));
        }
        else {
            if (commandList.has(args[0])) {
                this.terminal.writeln(`${args[0]} ${commandList.get(args[0]).description}`);
            }
            else {
                this.terminal.writeln(`${args[0]} not found`);
            }
        }
    }),
    new _command__WEBPACK_IMPORTED_MODULE_1__["Command"]('clear', 'Clears screen', function () {
        this.terminal.write(ansi_escapes__WEBPACK_IMPORTED_MODULE_0__["clearScreen"]);
    }),
    new _command__WEBPACK_IMPORTED_MODULE_1__["Command"]('echo', 'Writes its arguments to screen', function (...args) {
        this.terminal.writeln(args.join(' '));
    })
]);
class DevTerminal {
    constructor(selector) {
        this.parseType = ParseType.COMMAND;
        this.commandHistory = [];
        this.historyIndex = 0;
        this.selector = selector;
        this.terminal = new Terminal({
            cursorBlink: true,
            cursorStyle: 'bar',
            convertEol: true
        });
    }
    init(autofocus = true) {
        if (typeof this.selector === 'string')
            this.terminal.open(document.querySelector(this.selector));
        else
            this.terminal.open(this.selector);
        this.terminal.writeln('Not implemented yet');
        this.terminal.on('key', (key, ev) => this.pressedKeysHandler(key, ev));
        this.terminal.on('paste', function (data) {
            this.terminal.write(data);
        });
        this.prompt();
        if (autofocus)
            this.terminal.focus();
    }
    prompt() {
        if (this.parseType === ParseType.COMMAND)
            this.terminal.write('# ');
        else if (this.parseType === ParseType.JAVASCRIPT)
            this.terminal.write('> ');
    }
    pressedKeysHandler(key, ev) {
        const printable = charIsPrintable(ev.keyCode);
        if (ev.keyCode === 13) {
            this.terminal.writeln('');
            const line = this.terminal.buffer
                .getLine(this.terminal.buffer.cursorY)
                .translateToString()
                .slice(PROMPT_LENGTH).trim();
            this.historyIndex = 0;
            this.commandHistory.push(line);
            this.parseCommand(line);
            this.prompt();
        }
        else if (ev.keyCode === 8) {
            if (this.terminal.buffer.cursorX > PROMPT_LENGTH)
                this.terminal.write('\b \b');
        }
        else if (printable) {
            this.terminal.write(key);
        }
        else {
            switch (ev.code) {
                case 'Escape': {
                    this.terminal.blur();
                    break;
                }
                case 'Home': {
                    this.terminal.write(ansi_escapes__WEBPACK_IMPORTED_MODULE_0__["cursorTo"](2));
                    break;
                }
                case 'End': {
                    let lineLength = this.terminal.buffer
                        .getLine(this.terminal.buffer.cursorY)
                        .translateToString().trim().length;
                    if (lineLength < PROMPT_LENGTH)
                        lineLength = PROMPT_LENGTH;
                    this.terminal.write(ansi_escapes__WEBPACK_IMPORTED_MODULE_0__["cursorTo"](lineLength));
                    break;
                }
                case 'ArrowLeft': {
                    if (this.terminal.buffer.cursorX > PROMPT_LENGTH)
                        this.terminal.write(ansi_escapes__WEBPACK_IMPORTED_MODULE_0__["cursorBackward"]());
                    break;
                }
                case 'ArrowRight': {
                    const lineLength = this.terminal.buffer
                        .getLine(this.terminal.buffer.cursorY)
                        .translateToString().trim().length;
                    if (this.terminal.buffer.cursorX < lineLength)
                        this.terminal.write(ansi_escapes__WEBPACK_IMPORTED_MODULE_0__["cursorForward"]());
                    break;
                }
            }
        }
    }
    parseCommand(fullCommand) {
        const commandParts = fullCommand.trim()
            .split(' ').filter(c => c.length);
        ;
        if (commandParts.length === 0)
            return;
        const binary = commandParts[0].toLowerCase();
        if (commandList.has(binary)) {
            commandList.get(binary).callback.bind(this)(...commandParts.slice(1));
        }
        else {
            this.terminal.writeln(`Command "${fullCommand}" not found`);
        }
    }
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
const ansiEscapes = module.exports;
// TODO: remove this in the next major version
module.exports.default = ansiEscapes;

const ESC = '\u001B[';
const OSC = '\u001B]';
const BEL = '\u0007';
const SEP = ';';
const isTerminalApp = process.env.TERM_PROGRAM === 'Apple_Terminal';

ansiEscapes.cursorTo = (x, y) => {
	if (typeof x !== 'number') {
		throw new TypeError('The `x` argument is required');
	}

	if (typeof y !== 'number') {
		return ESC + (x + 1) + 'G';
	}

	return ESC + (y + 1) + ';' + (x + 1) + 'H';
};

ansiEscapes.cursorMove = (x, y) => {
	if (typeof x !== 'number') {
		throw new TypeError('The `x` argument is required');
	}

	let ret = '';

	if (x < 0) {
		ret += ESC + (-x) + 'D';
	} else if (x > 0) {
		ret += ESC + x + 'C';
	}

	if (y < 0) {
		ret += ESC + (-y) + 'A';
	} else if (y > 0) {
		ret += ESC + y + 'B';
	}

	return ret;
};

ansiEscapes.cursorUp = (count = 1) => ESC + count + 'A';
ansiEscapes.cursorDown = (count = 1) => ESC + count + 'B';
ansiEscapes.cursorForward = (count = 1) => ESC + count + 'C';
ansiEscapes.cursorBackward = (count = 1) => ESC + count + 'D';

ansiEscapes.cursorLeft = ESC + 'G';
ansiEscapes.cursorSavePosition = isTerminalApp ? '\u001B7' : ESC + 's';
ansiEscapes.cursorRestorePosition = isTerminalApp ? '\u001B8' : ESC + 'u';
ansiEscapes.cursorGetPosition = ESC + '6n';
ansiEscapes.cursorNextLine = ESC + 'E';
ansiEscapes.cursorPrevLine = ESC + 'F';
ansiEscapes.cursorHide = ESC + '?25l';
ansiEscapes.cursorShow = ESC + '?25h';

ansiEscapes.eraseLines = count => {
	let clear = '';

	for (let i = 0; i < count; i++) {
		clear += ansiEscapes.eraseLine + (i < count - 1 ? ansiEscapes.cursorUp() : '');
	}

	if (count) {
		clear += ansiEscapes.cursorLeft;
	}

	return clear;
};

ansiEscapes.eraseEndLine = ESC + 'K';
ansiEscapes.eraseStartLine = ESC + '1K';
ansiEscapes.eraseLine = ESC + '2K';
ansiEscapes.eraseDown = ESC + 'J';
ansiEscapes.eraseUp = ESC + '1J';
ansiEscapes.eraseScreen = ESC + '2J';
ansiEscapes.scrollUp = ESC + 'S';
ansiEscapes.scrollDown = ESC + 'T';

ansiEscapes.clearScreen = '\u001Bc';

ansiEscapes.clearTerminal = process.platform === 'win32' ?
	`${ansiEscapes.eraseScreen}${ESC}0f` :
	// 1. Erases the screen (Only done in case `2` is not supported)
	// 2. Erases the whole screen including scrollback buffer
	// 3. Moves cursor to the top-left position
	// More info: https://www.real-world-systems.com/docs/ANSIcode.html
	`${ansiEscapes.eraseScreen}${ESC}3J${ESC}H`;

ansiEscapes.beep = BEL;

ansiEscapes.link = (text, url) => {
	return [
		OSC,
		'8',
		SEP,
		SEP,
		url,
		BEL,
		text,
		OSC,
		'8',
		SEP,
		SEP,
		BEL
	].join('');
};

ansiEscapes.image = (buffer, options = {}) => {
	let ret = `${OSC}1337;File=inline=1`;

	if (options.width) {
		ret += `;width=${options.width}`;
	}

	if (options.height) {
		ret += `;height=${options.height}`;
	}

	if (options.preserveAspectRatio === false) {
		ret += ';preserveAspectRatio=0';
	}

	return ret + ':' + buffer.toString('base64') + BEL;
};

ansiEscapes.iTerm = {
	setCwd: (cwd = process.cwd()) => `${OSC}50;CurrentDir=${cwd}${BEL}`
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(52)))

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandList", function() { return CommandList; });
class Command {
    constructor(binary, description, callback) {
        this.binary = binary;
        this.callback = callback;
        this.description = description;
    }
}
class CommandList {
    constructor() {
        this.commandList = new Map();
    }
    declare(command) {
        this.commandList.set(command.binary, command);
        return this;
    }
    declareMultiple(commands) {
        commands.forEach(command => this.declare(command));
        return this;
    }
    getCommandList() {
        return Array.from(this.commandList.keys());
    }
    has(binary) {
        return this.commandList.has(binary);
    }
    get(binary) {
        return this.commandList.get(binary);
    }
}


/***/ })
/******/ ]);