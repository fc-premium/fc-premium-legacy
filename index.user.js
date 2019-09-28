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
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_3__);



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

const octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_3___default.a({
    auth: '41738453f108f86f1b4f9dae3d774e74e790ea08'
});
function listFCModules() {
    octokit.repos.listReleases({
        owner: 'pytness',
        repo: '__fc-modules'
    }).then(console.log)
        .catch(console.error);
}
listFCModules();


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
        'rgh:Pytness/fc-modules/master/modules/defaultSources.json'
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


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

const Octokit = __webpack_require__(55);

const CORE_PLUGINS = [
  __webpack_require__(75),
  __webpack_require__(76), // deprecated: remove in v17
  __webpack_require__(82),
  __webpack_require__(88),
  __webpack_require__(92),
  __webpack_require__(93),
  __webpack_require__(95),
  __webpack_require__(97),

  __webpack_require__(101) // deprecated: remove in v17
];

module.exports = Octokit.plugin(CORE_PLUGINS);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

const factory = __webpack_require__(56);

module.exports = factory();


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = factory;

const Octokit = __webpack_require__(57);
const registerPlugin = __webpack_require__(74);

function factory(plugins) {
  const Api = Octokit.bind(null, plugins || []);
  Api.plugin = registerPlugin.bind(null, plugins || []);
  return Api;
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = Octokit;

const { request } = __webpack_require__(58);
const Hook = __webpack_require__(68);

const parseClientOptions = __webpack_require__(72);

function Octokit(plugins, options) {
  options = options || {};
  const hook = new Hook.Collection();
  const log = Object.assign(
    {
      debug: () => {},
      info: () => {},
      warn: console.warn,
      error: console.error
    },
    options && options.log
  );
  const api = {
    hook,
    log,
    request: request.defaults(parseClientOptions(options, log, hook))
  };

  plugins.forEach(pluginFunction => pluginFunction(api, options));

  return api;
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var _octokit_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);






const VERSION = "0.0.0-development";

function getBufferResponse(response) {
    return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
    if (Object(is_plain_object__WEBPACK_IMPORTED_MODULE_2__["default"])(requestOptions.body) ||
        Array.isArray(requestOptions.body)) {
        requestOptions.body = JSON.stringify(requestOptions.body);
    }
    let headers = {};
    let status;
    let url;
    const fetch = (requestOptions.request && requestOptions.request.fetch) || node_fetch__WEBPACK_IMPORTED_MODULE_3___default.a;
    return fetch(requestOptions.url, Object.assign({
        method: requestOptions.method,
        body: requestOptions.body,
        headers: requestOptions.headers,
        redirect: requestOptions.redirect
    }, requestOptions.request))
        .then(response => {
        url = response.url;
        status = response.status;
        for (const keyAndValue of response.headers) {
            headers[keyAndValue[0]] = keyAndValue[1];
        }
        if (status === 204 || status === 205) {
            return;
        }
        // GitHub API returns 200 for HEAD requsets
        if (requestOptions.method === "HEAD") {
            if (status < 400) {
                return;
            }
            throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__["RequestError"](response.statusText, status, {
                headers,
                request: requestOptions
            });
        }
        if (status === 304) {
            throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__["RequestError"]("Not modified", status, {
                headers,
                request: requestOptions
            });
        }
        if (status >= 400) {
            return response
                .text()
                .then(message => {
                const error = new _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__["RequestError"](message, status, {
                    headers,
                    request: requestOptions
                });
                try {
                    Object.assign(error, JSON.parse(error.message));
                }
                catch (e) {
                    // ignore, see octokit/rest.js#684
                }
                throw error;
            });
        }
        const contentType = response.headers.get("content-type");
        if (/application\/json/.test(contentType)) {
            return response.json();
        }
        if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
            return response.text();
        }
        return getBufferResponse(response);
    })
        .then(data => {
        return {
            status,
            url,
            headers,
            data
        };
    })
        .catch(error => {
        if (error instanceof _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__["RequestError"]) {
            throw error;
        }
        throw new _octokit_request_error__WEBPACK_IMPORTED_MODULE_4__["RequestError"](error.message, 500, {
            headers,
            request: requestOptions
        });
    });
}

function withDefaults(oldEndpoint, newDefaults) {
    const endpoint = oldEndpoint.defaults(newDefaults);
    const newApi = function (route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters);
        if (!endpointOptions.request || !endpointOptions.request.hook) {
            return fetchWrapper(endpoint.parse(endpointOptions));
        }
        const request = (route, parameters) => {
            return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
        };
        Object.assign(request, {
            endpoint,
            defaults: withDefaults.bind(null, endpoint)
        });
        return endpointOptions.request.hook(request, endpointOptions);
    };
    return Object.assign(newApi, {
        endpoint,
        defaults: withDefaults.bind(null, endpoint)
    });
}

const request = withDefaults(_octokit_endpoint__WEBPACK_IMPORTED_MODULE_0__["endpoint"], {
    headers: {
        "user-agent": `octokit-request.js/${VERSION} ${Object(universal_user_agent__WEBPACK_IMPORTED_MODULE_1__["getUserAgent"])()}`
    }
});


//# sourceMappingURL=index.js.map


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var universal_user_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);



function lowercaseKeys(object) {
    if (!object) {
        return {};
    }
    return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key];
        return newObj;
    }, {});
}

function mergeDeep(defaults, options) {
    const result = Object.assign({}, defaults);
    Object.keys(options).forEach(key => {
        if (Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["default"])(options[key])) {
            if (!(key in defaults))
                Object.assign(result, { [key]: options[key] });
            else
                result[key] = mergeDeep(defaults[key], options[key]);
        }
        else {
            Object.assign(result, { [key]: options[key] });
        }
    });
    return result;
}

function merge(defaults, route, options) {
    if (typeof route === "string") {
        let [method, url] = route.split(" ");
        options = Object.assign(url ? { method, url } : { url: method }, options);
    }
    else {
        options = route || {};
    }
    // lowercase header names before merging with defaults to avoid duplicates
    options.headers = lowercaseKeys(options.headers);
    const mergedOptions = mergeDeep(defaults || {}, options);
    // mediaType.previews arrays are merged, instead of overwritten
    if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
            .filter(preview => !mergedOptions.mediaType.previews.includes(preview))
            .concat(mergedOptions.mediaType.previews);
    }
    mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map((preview) => preview.replace(/-preview/, ""));
    return mergedOptions;
}

function addQueryParameters(url, parameters) {
    const separator = /\?/.test(url) ? "&" : "?";
    const names = Object.keys(parameters);
    if (names.length === 0) {
        return url;
    }
    return (url +
        separator +
        names
            .map(name => {
            if (name === "q") {
                return ("q=" +
                    parameters
                        .q.split("+")
                        .map(encodeURIComponent)
                        .join("+"));
            }
            return `${name}=${encodeURIComponent(parameters[name])}`;
        })
            .join("&"));
}

const urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(variableName) {
    return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
function extractUrlVariableNames(url) {
    const matches = url.match(urlVariableRegex);
    if (!matches) {
        return [];
    }
    return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

function omit(object, keysToOmit) {
    return Object.keys(object)
        .filter(option => !keysToOmit.includes(option))
        .reduce((obj, key) => {
        obj[key] = object[key];
        return obj;
    }, {});
}

// Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/* istanbul ignore file */
function encodeReserved(str) {
    return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part)
                .replace(/%5B/g, "[")
                .replace(/%5D/g, "]");
        }
        return part;
    })
        .join("");
}
function encodeUnreserved(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return ("%" +
            c
                .charCodeAt(0)
                .toString(16)
                .toUpperCase());
    });
}
function encodeValue(operator, value, key) {
    value =
        operator === "+" || operator === "#"
            ? encodeReserved(value)
            : encodeUnreserved(value);
    if (key) {
        return encodeUnreserved(key) + "=" + value;
    }
    else {
        return value;
    }
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isKeyOperator(operator) {
    return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
    var value = context[key], result = [];
    if (isDefined(value) && value !== "") {
        if (typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean") {
            value = value.toString();
            if (modifier && modifier !== "*") {
                value = value.substring(0, parseInt(modifier, 10));
            }
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
        }
        else {
            if (modifier === "*") {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
                    });
                }
                else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            }
            else {
                const tmp = [];
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                }
                else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeUnreserved(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }
                if (isKeyOperator(operator)) {
                    result.push(encodeUnreserved(key) + "=" + tmp.join(","));
                }
                else if (tmp.length !== 0) {
                    result.push(tmp.join(","));
                }
            }
        }
    }
    else {
        if (operator === ";") {
            if (isDefined(value)) {
                result.push(encodeUnreserved(key));
            }
        }
        else if (value === "" && (operator === "&" || operator === "?")) {
            result.push(encodeUnreserved(key) + "=");
        }
        else if (value === "") {
            result.push("");
        }
    }
    return result;
}
function parseUrl(template) {
    return {
        expand: expand.bind(null, template)
    };
}
function expand(template, context) {
    var operators = ["+", "#", ".", "/", ";", "?", "&"];
    return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
        if (expression) {
            let operator = "";
            const values = [];
            if (operators.indexOf(expression.charAt(0)) !== -1) {
                operator = expression.charAt(0);
                expression = expression.substr(1);
            }
            expression.split(/,/g).forEach(function (variable) {
                var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
            });
            if (operator && operator !== "+") {
                var separator = ",";
                if (operator === "?") {
                    separator = "&";
                }
                else if (operator !== "#") {
                    separator = operator;
                }
                return (values.length !== 0 ? operator : "") + values.join(separator);
            }
            else {
                return values.join(",");
            }
        }
        else {
            return encodeReserved(literal);
        }
    });
}

function parse(options) {
    // https://fetch.spec.whatwg.org/#methods
    let method = options.method.toUpperCase();
    // replace :varname with {varname} to make it RFC 6570 compatible
    let url = options.url.replace(/:([a-z]\w+)/g, "{+$1}");
    let headers = Object.assign({}, options.headers);
    let body;
    let parameters = omit(options, [
        "method",
        "baseUrl",
        "url",
        "headers",
        "request",
        "mediaType"
    ]);
    // extract variable names from URL to calculate remaining variables later
    const urlVariableNames = extractUrlVariableNames(url);
    url = parseUrl(url).expand(parameters);
    if (!/^http/.test(url)) {
        url = options.baseUrl + url;
    }
    const omittedParameters = Object.keys(options)
        .filter(option => urlVariableNames.includes(option))
        .concat("baseUrl");
    const remainingParameters = omit(parameters, omittedParameters);
    const isBinaryRequset = /application\/octet-stream/i.test(headers.accept);
    if (!isBinaryRequset) {
        if (options.mediaType.format) {
            // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
            headers.accept = headers.accept
                .split(/,/)
                .map(preview => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`))
                .join(",");
        }
        if (options.mediaType.previews.length) {
            const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
            headers.accept = previewsFromAcceptHeader
                .concat(options.mediaType.previews)
                .map(preview => {
                const format = options.mediaType.format
                    ? `.${options.mediaType.format}`
                    : "+json";
                return `application/vnd.github.${preview}-preview${format}`;
            })
                .join(",");
        }
    }
    // for GET/HEAD requests, set URL query parameters from remaining parameters
    // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters
    if (["GET", "HEAD"].includes(method)) {
        url = addQueryParameters(url, remainingParameters);
    }
    else {
        if ("data" in remainingParameters) {
            body = remainingParameters.data;
        }
        else {
            if (Object.keys(remainingParameters).length) {
                body = remainingParameters;
            }
            else {
                headers["content-length"] = 0;
            }
        }
    }
    // default content-type for JSON if body is set
    if (!headers["content-type"] && typeof body !== "undefined") {
        headers["content-type"] = "application/json; charset=utf-8";
    }
    // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
    // fetch does not allow to set `content-length` header, but we can set body to an empty string
    if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
        body = "";
    }
    // Only return body/request keys if present
    return Object.assign({ method, url, headers }, typeof body !== "undefined" ? { body } : null, options.request ? { request: options.request } : null);
}

function endpointWithDefaults(defaults, route, options) {
    return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
    const DEFAULTS = merge(oldDefaults, newDefaults);
    const endpoint = endpointWithDefaults.bind(null, DEFAULTS);
    return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse
    });
}

const VERSION = "0.0.0-development";

const userAgent = `octokit-endpoint.js/${VERSION} ${Object(universal_user_agent__WEBPACK_IMPORTED_MODULE_1__["getUserAgent"])()}`;
const DEFAULTS = {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": userAgent
    },
    mediaType: {
        format: "",
        previews: []
    }
};

const endpoint = withDefaults(null, DEFAULTS);


//# sourceMappingURL=index.js.map


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/* harmony import */ var isobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



function isObjectObject(o) {
  return Object(isobject__WEBPACK_IMPORTED_MODULE_0__["default"])(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgent", function() { return getUserAgent; });
function getUserAgent() {
    return navigator.userAgent;
}


//# sourceMappingURL=index.js.map


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestError", function() { return RequestError; });
/* harmony import */ var deprecation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(once__WEBPACK_IMPORTED_MODULE_1__);



const logOnce = once__WEBPACK_IMPORTED_MODULE_1___default()(deprecation => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */

class RequestError extends Error {
  constructor(message, statusCode, options) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = "HttpError";
    this.status = statusCode;
    Object.defineProperty(this, "code", {
      get() {
        logOnce(new deprecation__WEBPACK_IMPORTED_MODULE_0__["Deprecation"]("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }

    });
    this.headers = options.headers; // redact request credentials without mutating original request options

    const requestCopy = Object.assign({}, options.request);

    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }

    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
  }

}




/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deprecation", function() { return Deprecation; });
class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}




/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(67)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var register = __webpack_require__(69)
var addHook = __webpack_require__(70)
var removeHook = __webpack_require__(71)

// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind
var bindable = bind.bind(bind)

function bindApi (hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state])
  hook.api = { remove: removeHookRef }
  hook.remove = removeHookRef

  ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind]
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
  })
}

function HookSingular () {
  var singularHookName = 'h'
  var singularHookState = {
    registry: {}
  }
  var singularHook = register.bind(null, singularHookState, singularHookName)
  bindApi(singularHook, singularHookState, singularHookName)
  return singularHook
}

function HookCollection () {
  var state = {
    registry: {}
  }

  var hook = register.bind(null, state)
  bindApi(hook, state)

  return hook
}

var collectionHookDeprecationMessageDisplayed = false
function Hook () {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4')
    collectionHookDeprecationMessageDisplayed = true
  }
  return HookCollection()
}

Hook.Singular = HookSingular.bind()
Hook.Collection = HookCollection.bind()

module.exports = Hook
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook
module.exports.Singular = Hook.Singular
module.exports.Collection = Hook.Collection


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = register

function register (state, name, method, options) {
  if (typeof method !== 'function') {
    throw new Error('method for before hook must be a function')
  }

  if (!options) {
    options = {}
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options)
    }, method)()
  }

  return Promise.resolve()
    .then(function () {
      if (!state.registry[name]) {
        return method(options)
      }

      return (state.registry[name]).reduce(function (method, registered) {
        return registered.hook.bind(null, method, options)
      }, method)()
    })
}


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = addHook

function addHook (state, kind, name, hook) {
  var orig = hook
  if (!state.registry[name]) {
    state.registry[name] = []
  }

  if (kind === 'before') {
    hook = function (method, options) {
      return Promise.resolve()
        .then(orig.bind(null, options))
        .then(method.bind(null, options))
    }
  }

  if (kind === 'after') {
    hook = function (method, options) {
      var result
      return Promise.resolve()
        .then(method.bind(null, options))
        .then(function (result_) {
          result = result_
          return orig(result, options)
        })
        .then(function () {
          return result
        })
    }
  }

  if (kind === 'error') {
    hook = function (method, options) {
      return Promise.resolve()
        .then(method.bind(null, options))
        .catch(function (error) {
          return orig(error, options)
        })
    }
  }

  state.registry[name].push({
    hook: hook,
    orig: orig
  })
}


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = removeHook

function removeHook (state, name, method) {
  if (!state.registry[name]) {
    return
  }

  var index = state.registry[name]
    .map(function (registered) { return registered.orig })
    .indexOf(method)

  if (index === -1) {
    return
  }

  state.registry[name].splice(index, 1)
}


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = parseOptions;

const { Deprecation } = __webpack_require__(65);
const { getUserAgent } = __webpack_require__(62);
const once = __webpack_require__(66);

const pkg = __webpack_require__(73);

const deprecateOptionsTimeout = once((log, deprecation) =>
  log.warn(deprecation)
);
const deprecateOptionsAgent = once((log, deprecation) => log.warn(deprecation));
const deprecateOptionsHeaders = once((log, deprecation) =>
  log.warn(deprecation)
);

function parseOptions(options, log, hook) {
  if (options.headers) {
    options.headers = Object.keys(options.headers).reduce((newObj, key) => {
      newObj[key.toLowerCase()] = options.headers[key];
      return newObj;
    }, {});
  }

  const clientDefaults = {
    headers: options.headers || {},
    request: options.request || {},
    mediaType: {
      previews: [],
      format: ""
    }
  };

  if (options.baseUrl) {
    clientDefaults.baseUrl = options.baseUrl;
  }

  if (options.userAgent) {
    clientDefaults.headers["user-agent"] = options.userAgent;
  }

  if (options.previews) {
    clientDefaults.mediaType.previews = options.previews;
  }

  if (options.timeout) {
    deprecateOptionsTimeout(
      log,
      new Deprecation(
        "[@octokit/rest] new Octokit({timeout}) is deprecated. Use {request: {timeout}} instead. See https://github.com/octokit/request.js#request"
      )
    );
    clientDefaults.request.timeout = options.timeout;
  }

  if (options.agent) {
    deprecateOptionsAgent(
      log,
      new Deprecation(
        "[@octokit/rest] new Octokit({agent}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/request.js#request"
      )
    );
    clientDefaults.request.agent = options.agent;
  }

  if (options.headers) {
    deprecateOptionsHeaders(
      log,
      new Deprecation(
        "[@octokit/rest] new Octokit({headers}) is deprecated. Use {userAgent, previews} instead. See https://github.com/octokit/request.js#request"
      )
    );
  }

  const userAgentOption = clientDefaults.headers["user-agent"];
  const defaultUserAgent = `octokit.js/${pkg.version} ${getUserAgent()}`;

  clientDefaults.headers["user-agent"] = [userAgentOption, defaultUserAgent]
    .filter(Boolean)
    .join(" ");

  clientDefaults.request.hook = hook.bind(null, "request");

  return clientDefaults;
}


/***/ }),
/* 73 */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@octokit/rest\",\"_id\":\"@octokit/rest@16.30.0\",\"_inBundle\":false,\"_integrity\":\"sha512-TN5MbqVuqxT/s87D6tGe3zsMvyHUQSkGFMBHuwBToPQGV3eG2a67rJW2rag2vJr7JusWyERDhQ4g/4HvFo9B1g==\",\"_location\":\"/@octokit/rest\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"@octokit/rest\",\"name\":\"@octokit/rest\",\"escapedName\":\"@octokit%2frest\",\"scope\":\"@octokit\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/@octokit/rest/-/rest-16.30.0.tgz\",\"_shasum\":\"c14f177b7378f330ec6ec6ae49b68af359d09053\",\"_spec\":\"@octokit/rest\",\"_where\":\"/mnt/data/code/github/fc-modules\",\"author\":{\"name\":\"Gregor Martynus\",\"url\":\"https://github.com/gr2m\"},\"bugs\":{\"url\":\"https://github.com/octokit/rest.js/issues\"},\"bundleDependencies\":false,\"bundlesize\":[{\"path\":\"./dist/octokit-rest.min.js.gz\",\"maxSize\":\"33 kB\"}],\"contributors\":[{\"name\":\"Mike de Boer\",\"email\":\"info@mikedeboer.nl\"},{\"name\":\"Fabian Jakobs\",\"email\":\"fabian@c9.io\"},{\"name\":\"Joe Gallo\",\"email\":\"joe@brassafrax.com\"},{\"name\":\"Gregor Martynus\",\"url\":\"https://github.com/gr2m\"}],\"dependencies\":{\"@octokit/request\":\"^5.0.0\",\"@octokit/request-error\":\"^1.0.2\",\"atob-lite\":\"^2.0.0\",\"before-after-hook\":\"^2.0.0\",\"btoa-lite\":\"^1.0.0\",\"deprecation\":\"^2.0.0\",\"lodash.get\":\"^4.4.2\",\"lodash.set\":\"^4.3.2\",\"lodash.uniq\":\"^4.5.0\",\"octokit-pagination-methods\":\"^1.1.0\",\"once\":\"^1.4.0\",\"universal-user-agent\":\"^4.0.0\"},\"deprecated\":false,\"description\":\"GitHub REST API client for Node.js\",\"devDependencies\":{\"@gimenete/type-writer\":\"^0.1.3\",\"@octokit/fixtures-server\":\"^5.0.6\",\"@octokit/graphql\":\"^4.2.0\",\"@types/node\":\"^12.0.0\",\"bundlesize\":\"^0.18.0\",\"chai\":\"^4.1.2\",\"compression-webpack-plugin\":\"^3.0.0\",\"cypress\":\"^3.0.0\",\"glob\":\"^7.1.2\",\"http-proxy-agent\":\"^2.1.0\",\"lodash.camelcase\":\"^4.3.0\",\"lodash.merge\":\"^4.6.1\",\"lodash.upperfirst\":\"^4.3.1\",\"mkdirp\":\"^0.5.1\",\"mocha\":\"^6.0.0\",\"mustache\":\"^3.0.0\",\"nock\":\"^11.3.3\",\"npm-run-all\":\"^4.1.2\",\"nyc\":\"^14.0.0\",\"prettier\":\"^1.14.2\",\"proxy\":\"^0.2.4\",\"semantic-release\":\"^15.0.0\",\"sinon\":\"^7.2.4\",\"sinon-chai\":\"^3.0.0\",\"sort-keys\":\"^4.0.0\",\"string-to-arraybuffer\":\"^1.0.0\",\"string-to-jsdoc-comment\":\"^1.0.0\",\"typescript\":\"^3.3.1\",\"webpack\":\"^4.0.0\",\"webpack-bundle-analyzer\":\"^3.0.0\",\"webpack-cli\":\"^3.0.0\"},\"files\":[\"index.js\",\"index.d.ts\",\"lib\",\"plugins\"],\"homepage\":\"https://github.com/octokit/rest.js#readme\",\"keywords\":[\"octokit\",\"github\",\"rest\",\"api-client\"],\"license\":\"MIT\",\"name\":\"@octokit/rest\",\"nyc\":{\"ignore\":[\"test\"]},\"publishConfig\":{\"access\":\"public\"},\"release\":{\"publish\":[\"@semantic-release/npm\",{\"path\":\"@semantic-release/github\",\"assets\":[\"dist/*\",\"!dist/*.map.gz\"]}]},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/octokit/rest.js.git\"},\"scripts\":{\"build\":\"npm-run-all build:*\",\"build:browser\":\"npm-run-all build:browser:*\",\"build:browser:development\":\"webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json\",\"build:browser:production\":\"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map\",\"build:ts\":\"node scripts/generate-types\",\"coverage\":\"nyc report --reporter=html && open coverage/index.html\",\"generate-bundle-report\":\"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html\",\"generate-routes\":\"node scripts/generate-routes\",\"lint\":\"prettier --check '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json\",\"lint:fix\":\"prettier --write '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json\",\"postvalidate:ts\":\"tsc --noEmit --target es6 test/typescript-validate.ts\",\"prebuild:browser\":\"mkdirp dist/\",\"pretest\":\"npm run -s lint\",\"prevalidate:ts\":\"npm run -s build:ts\",\"start-fixtures-server\":\"octokit-fixtures-server\",\"test\":\"nyc mocha test/mocha-node-setup.js \\\"test/*/**/*-test.js\\\"\",\"test:browser\":\"cypress run --browser chrome\",\"validate:ts\":\"tsc --target es6 --noImplicitAny index.d.ts\"},\"types\":\"index.d.ts\",\"version\":\"16.30.0\"}");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = registerPlugin;

const factory = __webpack_require__(56);

function registerPlugin(plugins, pluginFunction) {
  return factory(
    plugins.includes(pluginFunction) ? plugins : plugins.concat(pluginFunction)
  );
}


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = octokitDebug;

function octokitDebug(octokit) {
  octokit.hook.wrap("request", (request, options) => {
    octokit.log.debug("request", options);
    const start = Date.now();
    const requestOptions = octokit.request.endpoint.parse(options);
    const path = requestOptions.url.replace(options.baseUrl, "");

    return request(options)
      .then(response => {
        octokit.log.info(
          `${requestOptions.method} ${path} - ${
            response.status
          } in ${Date.now() - start}ms`
        );
        return response;
      })

      .catch(error => {
        octokit.log.info(
          `${requestOptions.method} ${path} - ${error.status} in ${Date.now() -
            start}ms`
        );
        throw error;
      });
  });
}


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = authenticationPlugin;

const { Deprecation } = __webpack_require__(65);
const once = __webpack_require__(66);

const deprecateAuthenticate = once((log, deprecation) => log.warn(deprecation));

const authenticate = __webpack_require__(77);
const beforeRequest = __webpack_require__(78);
const requestError = __webpack_require__(81);

function authenticationPlugin(octokit, options) {
  if (options.auth) {
    octokit.authenticate = () => {
      deprecateAuthenticate(
        octokit.log,
        new Deprecation(
          '[@octokit/rest] octokit.authenticate() is deprecated and has no effect when "auth" option is set on Octokit constructor'
        )
      );
    };
    return;
  }
  const state = {
    octokit,
    auth: false
  };
  octokit.authenticate = authenticate.bind(null, state);
  octokit.hook.before("request", beforeRequest.bind(null, state));
  octokit.hook.error("request", requestError.bind(null, state));
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = authenticate;

const { Deprecation } = __webpack_require__(65);
const once = __webpack_require__(66);

const deprecateAuthenticate = once((log, deprecation) => log.warn(deprecation));

function authenticate(state, options) {
  deprecateAuthenticate(
    state.octokit.log,
    new Deprecation(
      '[@octokit/rest] octokit.authenticate() is deprecated. Use "auth" constructor option instead.'
    )
  );

  if (!options) {
    state.auth = false;
    return;
  }

  switch (options.type) {
    case "basic":
      if (!options.username || !options.password) {
        throw new Error(
          "Basic authentication requires both a username and password to be set"
        );
      }
      break;

    case "oauth":
      if (!options.token && !(options.key && options.secret)) {
        throw new Error(
          "OAuth2 authentication requires a token or key & secret to be set"
        );
      }
      break;

    case "token":
    case "app":
      if (!options.token) {
        throw new Error("Token authentication requires a token to be set");
      }
      break;

    default:
      throw new Error(
        "Invalid authentication type, must be 'basic', 'oauth', 'token' or 'app'"
      );
  }

  state.auth = options;
}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = authenticationBeforeRequest;

const btoa = __webpack_require__(79);
const uniq = __webpack_require__(80);

function authenticationBeforeRequest(state, options) {
  if (!state.auth.type) {
    return;
  }

  if (state.auth.type === "basic") {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`);
    options.headers.authorization = `Basic ${hash}`;
    return;
  }

  if (state.auth.type === "token") {
    options.headers.authorization = `token ${state.auth.token}`;
    return;
  }

  if (state.auth.type === "app") {
    options.headers.authorization = `Bearer ${state.auth.token}`;
    const acceptHeaders = options.headers.accept
      .split(",")
      .concat("application/vnd.github.machine-man-preview+json");
    options.headers.accept = uniq(acceptHeaders)
      .filter(Boolean)
      .join(",");
    return;
  }

  options.url += options.url.indexOf("?") === -1 ? "?" : "&";

  if (state.auth.token) {
    options.url += `access_token=${encodeURIComponent(state.auth.token)}`;
    return;
  }

  const key = encodeURIComponent(state.auth.key);
  const secret = encodeURIComponent(state.auth.secret);
  options.url += `client_id=${key}&client_secret=${secret}`;
}


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function _btoa(str) {
  return btoa(str)
}


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    Set = getNative(root, 'Set'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each
 * element is kept.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length)
    ? baseUniq(array)
    : [];
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = uniq;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = authenticationRequestError;

const { RequestError } = __webpack_require__(64);

function authenticationRequestError(state, error, options) {
  /* istanbul ignore next */
  if (!error.headers) throw error;

  const otpRequired = /required/.test(error.headers["x-github-otp"] || "");
  // handle "2FA required" error only
  if (error.status !== 401 || !otpRequired) {
    throw error;
  }

  if (
    error.status === 401 &&
    otpRequired &&
    error.request &&
    error.request.headers["x-github-otp"]
  ) {
    throw new RequestError(
      "Invalid one-time password for two-factor authentication",
      401,
      {
        headers: error.headers,
        request: options
      }
    );
  }

  if (typeof state.auth.on2fa !== "function") {
    throw new RequestError(
      "2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication",
      401,
      {
        headers: error.headers,
        request: options
      }
    );
  }

  return Promise.resolve()
    .then(() => {
      return state.auth.on2fa();
    })
    .then(oneTimePassword => {
      const newOptions = Object.assign(options, {
        headers: Object.assign(
          { "x-github-otp": oneTimePassword },
          options.headers
        )
      });
      return state.octokit.request(newOptions);
    });
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = authenticationPlugin;

const beforeRequest = __webpack_require__(83);
const requestError = __webpack_require__(86);
const validate = __webpack_require__(87);

function authenticationPlugin(octokit, options) {
  if (!options.auth) {
    return;
  }

  validate(options.auth);

  const state = {
    octokit,
    auth: options.auth
  };

  octokit.hook.before("request", beforeRequest.bind(null, state));
  octokit.hook.error("request", requestError.bind(null, state));
}


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = authenticationBeforeRequest;

const btoa = __webpack_require__(79);

const withAuthorizationPrefix = __webpack_require__(84);

function authenticationBeforeRequest(state, options) {
  if (typeof state.auth === "string") {
    options.headers.authorization = withAuthorizationPrefix(state.auth);

    // https://developer.github.com/v3/previews/#integrations
    if (
      /^bearer /i.test(state.auth) &&
      !/machine-man/.test(options.headers.accept)
    ) {
      const acceptHeaders = options.headers.accept
        .split(",")
        .concat("application/vnd.github.machine-man-preview+json");
      options.headers.accept = acceptHeaders.filter(Boolean).join(",");
    }

    return;
  }

  if (state.auth.username) {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`);
    options.headers.authorization = `Basic ${hash}`;
    if (state.otp) {
      options.headers["x-github-otp"] = state.otp;
    }
    return;
  }

  if (state.auth.clientId) {
    // There is a special case for OAuth applications, when `clientId` and `clientSecret` is passed as
    // Basic Authorization instead of query parameters. The only routes where that applies share the same
    // URL though: `/applications/:client_id/tokens/:access_token`.
    //
    //  1. [Check an authorization](https://developer.github.com/v3/oauth_authorizations/#check-an-authorization)
    //  2. [Reset an authorization](https://developer.github.com/v3/oauth_authorizations/#reset-an-authorization)
    //  3. [Revoke an authorization for an application](https://developer.github.com/v3/oauth_authorizations/#revoke-an-authorization-for-an-application)
    //
    // We identify by checking the URL. It must merge both "/applications/:client_id/tokens/:access_token"
    // as well as "/applications/123/tokens/token456"
    if (/\/applications\/:?[\w_]+\/tokens\/:?[\w_]+($|\?)/.test(options.url)) {
      const hash = btoa(`${state.auth.clientId}:${state.auth.clientSecret}`);
      options.headers.authorization = `Basic ${hash}`;
      return;
    }

    options.url += options.url.indexOf("?") === -1 ? "?" : "&";
    options.url += `client_id=${state.auth.clientId}&client_secret=${state.auth.clientSecret}`;
    return;
  }

  return Promise.resolve()

    .then(() => {
      return state.auth();
    })

    .then(authorization => {
      options.headers.authorization = withAuthorizationPrefix(authorization);
    });
}


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = withAuthorizationPrefix;

const atob = __webpack_require__(85);

const REGEX_IS_BASIC_AUTH = /^[\w-]+:/;

function withAuthorizationPrefix(authorization) {
  if (/^(basic|bearer|token) /i.test(authorization)) {
    return authorization;
  }

  try {
    if (REGEX_IS_BASIC_AUTH.test(atob(authorization))) {
      return `basic ${authorization}`;
    }
  } catch (error) {}

  if (authorization.split(/\./).length === 3) {
    return `bearer ${authorization}`;
  }

  return `token ${authorization}`;
}


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function _atob(str) {
  return atob(str)
}


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = authenticationRequestError;

const { RequestError } = __webpack_require__(64);

function authenticationRequestError(state, error, options) {
  if (!error.headers) throw error;

  const otpRequired = /required/.test(error.headers["x-github-otp"] || "");
  // handle "2FA required" error only
  if (error.status !== 401 || !otpRequired) {
    throw error;
  }

  if (
    error.status === 401 &&
    otpRequired &&
    error.request &&
    error.request.headers["x-github-otp"]
  ) {
    if (state.otp) {
      delete state.otp; // no longer valid, request again
    } else {
      throw new RequestError(
        "Invalid one-time password for two-factor authentication",
        401,
        {
          headers: error.headers,
          request: options
        }
      );
    }
  }

  if (typeof state.auth.on2fa !== "function") {
    throw new RequestError(
      "2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication",
      401,
      {
        headers: error.headers,
        request: options
      }
    );
  }

  return Promise.resolve()
    .then(() => {
      return state.auth.on2fa();
    })
    .then(oneTimePassword => {
      const newOptions = Object.assign(options, {
        headers: Object.assign(options.headers, {
          "x-github-otp": oneTimePassword
        })
      });
      return state.octokit.request(newOptions).then(response => {
        // If OTP still valid, then persist it for following requests
        state.otp = oneTimePassword;
        return response;
      });
    });
}


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = validateAuth;

function validateAuth(auth) {
  if (typeof auth === "string") {
    return;
  }

  if (typeof auth === "function") {
    return;
  }

  if (auth.username && auth.password) {
    return;
  }

  if (auth.clientId && auth.clientSecret) {
    return;
  }

  throw new Error(`Invalid "auth" option: ${JSON.stringify(auth)}`);
}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = paginatePlugin;

const iterator = __webpack_require__(89);
const paginate = __webpack_require__(91);

function paginatePlugin(octokit) {
  octokit.paginate = paginate.bind(null, octokit);
  octokit.paginate.iterator = iterator.bind(null, octokit);
}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = iterator;

const normalizePaginatedListResponse = __webpack_require__(90);

function iterator(octokit, options) {
  const headers = options.headers;
  let url = octokit.request.endpoint(options).url;

  return {
    [Symbol.asyncIterator]: () => ({
      next() {
        if (!url) {
          return Promise.resolve({ done: true });
        }

        return octokit
          .request({ url, headers })

          .then(response => {
            normalizePaginatedListResponse(octokit, url, response);

            // `response.headers.link` format:
            // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
            // sets `url` to undefined if "next" URL is not present or `link` header is not set
            url = ((response.headers.link || "").match(
              /<([^>]+)>;\s*rel="next"/
            ) || [])[1];

            return { value: response };
          });
      }
    })
  };
}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Some “list” response that can be paginated have a different response structure
 *
 * They have a `total_count` key in the response (search also has `incomplete_results`,
 * /installation/repositories also has `repository_selection`), as well as a key with
 * the list of the items which name varies from endpoint to endpoint:
 *
 * - https://developer.github.com/v3/search/#example (key `items`)
 * - https://developer.github.com/v3/checks/runs/#response-3 (key: `check_runs`)
 * - https://developer.github.com/v3/checks/suites/#response-1 (key: `check_suites`)
 * - https://developer.github.com/v3/apps/installations/#list-repositories (key: `repositories`)
 * - https://developer.github.com/v3/apps/installations/#list-installations-for-a-user (key `installations`)
 *
 * Octokit normalizes these responses so that paginated results are always returned following
 * the same structure. One challenge is that if the list response has only one page, no Link
 * header is provided, so this header alone is not sufficient to check wether a response is
 * paginated or not. For the exceptions with the namespace, a fallback check for the route
 * paths has to be added in order to normalize the response. We cannot check for the total_count
 * property because it also exists in the response of Get the combined status for a specific ref.
 */

module.exports = normalizePaginatedListResponse;

const { Deprecation } = __webpack_require__(65);
const once = __webpack_require__(66);

const deprecateIncompleteResults = once((log, deprecation) =>
  log.warn(deprecation)
);
const deprecateTotalCount = once((log, deprecation) => log.warn(deprecation));
const deprecateNamespace = once((log, deprecation) => log.warn(deprecation));

const REGEX_IS_SEARCH_PATH = /^\/search\//;
const REGEX_IS_CHECKS_PATH = /^\/repos\/[^/]+\/[^/]+\/commits\/[^/]+\/(check-runs|check-suites)/;
const REGEX_IS_INSTALLATION_REPOSITORIES_PATH = /^\/installation\/repositories/;
const REGEX_IS_USER_INSTALLATIONS_PATH = /^\/user\/installations/;

function normalizePaginatedListResponse(octokit, url, response) {
  const path = url.replace(octokit.request.endpoint.DEFAULTS.baseUrl, "");
  if (
    !REGEX_IS_SEARCH_PATH.test(path) &&
    !REGEX_IS_CHECKS_PATH.test(path) &&
    !REGEX_IS_INSTALLATION_REPOSITORIES_PATH.test(path) &&
    !REGEX_IS_USER_INSTALLATIONS_PATH.test(path)
  ) {
    return;
  }

  // keep the additional properties intact to avoid a breaking change,
  // but log a deprecation warning when accessed
  const incompleteResults = response.data.incomplete_results;
  const repositorySelection = response.data.repository_selection;
  const totalCount = response.data.total_count;
  delete response.data.incomplete_results;
  delete response.data.repository_selection;
  delete response.data.total_count;

  const namespaceKey = Object.keys(response.data)[0];

  response.data = response.data[namespaceKey];

  Object.defineProperty(response.data, namespaceKey, {
    get() {
      deprecateNamespace(
        octokit.log,
        new Deprecation(
          `[@octokit/rest] "result.data.${namespaceKey}" is deprecated. Use "result.data" instead`
        )
      );
      return response.data;
    }
  });

  if (typeof incompleteResults !== "undefined") {
    Object.defineProperty(response.data, "incomplete_results", {
      get() {
        deprecateIncompleteResults(
          octokit.log,
          new Deprecation(
            '[@octokit/rest] "result.data.incomplete_results" is deprecated.'
          )
        );
        return incompleteResults;
      }
    });
  }

  if (typeof repositorySelection !== "undefined") {
    Object.defineProperty(response.data, "repository_selection", {
      get() {
        deprecateTotalCount(
          octokit.log,
          new Deprecation(
            '[@octokit/rest] "result.data.repository_selection" is deprecated.'
          )
        );
        return repositorySelection;
      }
    });
  }

  Object.defineProperty(response.data, "total_count", {
    get() {
      deprecateTotalCount(
        octokit.log,
        new Deprecation(
          '[@octokit/rest] "result.data.total_count" is deprecated.'
        )
      );
      return totalCount;
    }
  });
}


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = paginate;

const iterator = __webpack_require__(89);

function paginate(octokit, route, options, mapFn) {
  if (typeof options === "function") {
    mapFn = options;
    options = undefined;
  }
  options = octokit.request.endpoint.merge(route, options);
  return gather(
    octokit,
    [],
    iterator(octokit, options)[Symbol.asyncIterator](),
    mapFn
  );
}

function gather(octokit, results, iterator, mapFn) {
  return iterator.next().then(result => {
    if (result.done) {
      return results;
    }

    let earlyExit = false;
    function done() {
      earlyExit = true;
    }

    results = results.concat(
      mapFn ? mapFn(result.value, done) : result.value.data
    );

    if (earlyExit) {
      return results;
    }

    return gather(octokit, results, iterator, mapFn);
  });
}


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = octokitRestNormalizeGitReferenceResponses;

const { RequestError } = __webpack_require__(64);

function octokitRestNormalizeGitReferenceResponses(octokit) {
  octokit.hook.wrap("request", (request, options) => {
    const isGetOrListRefRequest = /\/repos\/:?\w+\/:?\w+\/git\/refs\/:?\w+/.test(
      options.url
    );

    if (!isGetOrListRefRequest) {
      return request(options);
    }

    const isGetRefRequest = "ref" in options;

    return request(options)
      .then(response => {
        // request single reference
        if (isGetRefRequest) {
          if (Array.isArray(response.data)) {
            throw new RequestError(
              `More than one reference found for "${options.ref}"`,
              404,
              {
                request: options
              }
            );
          }

          // ✅ received single reference
          return response;
        }

        // request list of references
        if (!Array.isArray(response.data)) {
          response.data = [response.data];
        }

        return response;
      })

      .catch(error => {
        if (isGetRefRequest) {
          throw error;
        }

        if (error.status === 404) {
          return {
            status: 200,
            headers: error.headers,
            data: []
          };
        }

        throw error;
      });
  });
}


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = octokitRegisterEndpoints;

const registerEndpoints = __webpack_require__(94);

function octokitRegisterEndpoints(octokit) {
  octokit.registerEndpoints = registerEndpoints.bind(null, octokit);
}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = registerEndpoints;

const { Deprecation } = __webpack_require__(65);

function registerEndpoints(octokit, routes) {
  Object.keys(routes).forEach(namespaceName => {
    if (!octokit[namespaceName]) {
      octokit[namespaceName] = {};
    }

    Object.keys(routes[namespaceName]).forEach(apiName => {
      const apiOptions = routes[namespaceName][apiName];

      const endpointDefaults = ["method", "url", "headers"].reduce(
        (map, key) => {
          if (typeof apiOptions[key] !== "undefined") {
            map[key] = apiOptions[key];
          }

          return map;
        },
        {}
      );

      endpointDefaults.request = {
        validate: apiOptions.params
      };

      let request = octokit.request.defaults(endpointDefaults);

      // patch request & endpoint methods to support deprecated parameters.
      // Not the most elegant solution, but we don’t want to move deprecation
      // logic into octokit/endpoint.js as it’s out of scope
      const hasDeprecatedParam = Object.keys(apiOptions.params || {}).find(
        key => apiOptions.params[key].deprecated
      );
      if (hasDeprecatedParam) {
        const patch = patchForDeprecation.bind(null, octokit, apiOptions);
        request = patch(
          octokit.request.defaults(endpointDefaults),
          `.${namespaceName}.${apiName}()`
        );
        request.endpoint = patch(
          request.endpoint,
          `.${namespaceName}.${apiName}.endpoint()`
        );
        request.endpoint.merge = patch(
          request.endpoint.merge,
          `.${namespaceName}.${apiName}.endpoint.merge()`
        );
      }

      if (apiOptions.deprecated) {
        octokit[namespaceName][apiName] = function deprecatedEndpointMethod() {
          octokit.log.warn(
            new Deprecation(`[@octokit/rest] ${apiOptions.deprecated}`)
          );
          octokit[namespaceName][apiName] = request;
          return request.apply(null, arguments);
        };

        return;
      }

      octokit[namespaceName][apiName] = request;
    });
  });
}

function patchForDeprecation(octokit, apiOptions, method, methodName) {
  const patchedMethod = options => {
    options = Object.assign({}, options);

    Object.keys(options).forEach(key => {
      if (apiOptions.params[key] && apiOptions.params[key].deprecated) {
        const aliasKey = apiOptions.params[key].alias;

        octokit.log.warn(
          new Deprecation(
            `[@octokit/rest] "${key}" parameter is deprecated for "${methodName}". Use "${aliasKey}" instead`
          )
        );

        if (!(aliasKey in options)) {
          options[aliasKey] = options[key];
        }
        delete options[key];
      }
    });

    return method(options);
  };
  Object.keys(method).forEach(key => {
    patchedMethod[key] = method[key];
  });

  return patchedMethod;
}


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = octokitRestApiEndpoints;

const ROUTES = __webpack_require__(96);

function octokitRestApiEndpoints(octokit) {
  // Aliasing scopes for backward compatibility
  // See https://github.com/octokit/rest.js/pull/1134
  ROUTES.gitdata = ROUTES.git;
  ROUTES.authorization = ROUTES.oauthAuthorizations;
  ROUTES.pullRequests = ROUTES.pulls;

  octokit.registerEndpoints(ROUTES);
}


/***/ }),
/* 96 */
/***/ (function(module) {

module.exports = JSON.parse("{\"activity\":{\"checkStarringRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/starred/:owner/:repo\"},\"deleteRepoSubscription\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/subscription\"},\"deleteThreadSubscription\":{\"method\":\"DELETE\",\"params\":{\"thread_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/notifications/threads/:thread_id/subscription\"},\"getRepoSubscription\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/subscription\"},\"getThread\":{\"method\":\"GET\",\"params\":{\"thread_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/notifications/threads/:thread_id\"},\"getThreadSubscription\":{\"method\":\"GET\",\"params\":{\"thread_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/notifications/threads/:thread_id/subscription\"},\"listEventsForOrg\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/events/orgs/:org\"},\"listEventsForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/events\"},\"listFeeds\":{\"method\":\"GET\",\"params\":{},\"url\":\"/feeds\"},\"listNotifications\":{\"method\":\"GET\",\"params\":{\"all\":{\"type\":\"boolean\"},\"before\":{\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"participating\":{\"type\":\"boolean\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/notifications\"},\"listNotificationsForRepo\":{\"method\":\"GET\",\"params\":{\"all\":{\"type\":\"boolean\"},\"before\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"participating\":{\"type\":\"boolean\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/notifications\"},\"listPublicEvents\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/events\"},\"listPublicEventsForOrg\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/events\"},\"listPublicEventsForRepoNetwork\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/networks/:owner/:repo/events\"},\"listPublicEventsForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/events/public\"},\"listReceivedEventsForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/received_events\"},\"listReceivedPublicEventsForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/received_events/public\"},\"listRepoEvents\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/events\"},\"listReposStarredByAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/user/starred\"},\"listReposStarredByUser\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/starred\"},\"listReposWatchedByUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/subscriptions\"},\"listStargazersForRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stargazers\"},\"listWatchedReposForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/subscriptions\"},\"listWatchersForRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/subscribers\"},\"markAsRead\":{\"method\":\"PUT\",\"params\":{\"last_read_at\":{\"type\":\"string\"}},\"url\":\"/notifications\"},\"markNotificationsAsReadForRepo\":{\"method\":\"PUT\",\"params\":{\"last_read_at\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/notifications\"},\"markThreadAsRead\":{\"method\":\"PATCH\",\"params\":{\"thread_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/notifications/threads/:thread_id\"},\"setRepoSubscription\":{\"method\":\"PUT\",\"params\":{\"ignored\":{\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"subscribed\":{\"type\":\"boolean\"}},\"url\":\"/repos/:owner/:repo/subscription\"},\"setThreadSubscription\":{\"method\":\"PUT\",\"params\":{\"ignored\":{\"type\":\"boolean\"},\"thread_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/notifications/threads/:thread_id/subscription\"},\"starRepo\":{\"method\":\"PUT\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/starred/:owner/:repo\"},\"unstarRepo\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/starred/:owner/:repo\"}},\"apps\":{\"addRepoToInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"PUT\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"},\"repository_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/installations/:installation_id/repositories/:repository_id\"},\"checkAccountIsAssociatedWithAny\":{\"method\":\"GET\",\"params\":{\"account_id\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/marketplace_listing/accounts/:account_id\"},\"checkAccountIsAssociatedWithAnyStubbed\":{\"method\":\"GET\",\"params\":{\"account_id\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/marketplace_listing/stubbed/accounts/:account_id\"},\"createContentAttachment\":{\"headers\":{\"accept\":\"application/vnd.github.corsair-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"content_reference_id\":{\"required\":true,\"type\":\"integer\"},\"title\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/content_references/:content_reference_id/attachments\"},\"createFromManifest\":{\"headers\":{\"accept\":\"application/vnd.github.fury-preview+json\"},\"method\":\"POST\",\"params\":{\"code\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/app-manifests/:code/conversions\"},\"createInstallationToken\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"POST\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"},\"permissions\":{\"type\":\"object\"},\"repository_ids\":{\"type\":\"integer[]\"}},\"url\":\"/app/installations/:installation_id/access_tokens\"},\"deleteInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.gambit-preview+json,application/vnd.github.machine-man-preview+json\"},\"method\":\"DELETE\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/app/installations/:installation_id\"},\"findOrgInstallation\":{\"deprecated\":\"octokit.apps.findOrgInstallation() has been renamed to octokit.apps.getOrgInstallation() (2019-04-10)\",\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/installation\"},\"findRepoInstallation\":{\"deprecated\":\"octokit.apps.findRepoInstallation() has been renamed to octokit.apps.getRepoInstallation() (2019-04-10)\",\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/installation\"},\"findUserInstallation\":{\"deprecated\":\"octokit.apps.findUserInstallation() has been renamed to octokit.apps.getUserInstallation() (2019-04-10)\",\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/installation\"},\"getAuthenticated\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{},\"url\":\"/app\"},\"getBySlug\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"app_slug\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/apps/:app_slug\"},\"getInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/app/installations/:installation_id\"},\"getOrgInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/installation\"},\"getRepoInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/installation\"},\"getUserInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/installation\"},\"listAccountsUserOrOrgOnPlan\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"plan_id\":{\"required\":true,\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/marketplace_listing/plans/:plan_id/accounts\"},\"listAccountsUserOrOrgOnPlanStubbed\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"plan_id\":{\"required\":true,\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/marketplace_listing/stubbed/plans/:plan_id/accounts\"},\"listInstallationReposForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/installations/:installation_id/repositories\"},\"listInstallations\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/app/installations\"},\"listInstallationsForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/installations\"},\"listMarketplacePurchasesForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/marketplace_purchases\"},\"listMarketplacePurchasesForAuthenticatedUserStubbed\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/marketplace_purchases/stubbed\"},\"listPlans\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/marketplace_listing/plans\"},\"listPlansStubbed\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/marketplace_listing/stubbed/plans\"},\"listRepos\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/installation/repositories\"},\"removeRepoFromInstallation\":{\"headers\":{\"accept\":\"application/vnd.github.machine-man-preview+json\"},\"method\":\"DELETE\",\"params\":{\"installation_id\":{\"required\":true,\"type\":\"integer\"},\"repository_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/installations/:installation_id/repositories/:repository_id\"}},\"checks\":{\"create\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"POST\",\"params\":{\"actions\":{\"type\":\"object[]\"},\"actions[].description\":{\"required\":true,\"type\":\"string\"},\"actions[].identifier\":{\"required\":true,\"type\":\"string\"},\"actions[].label\":{\"required\":true,\"type\":\"string\"},\"completed_at\":{\"type\":\"string\"},\"conclusion\":{\"enum\":[\"success\",\"failure\",\"neutral\",\"cancelled\",\"timed_out\",\"action_required\"],\"type\":\"string\"},\"details_url\":{\"type\":\"string\"},\"external_id\":{\"type\":\"string\"},\"head_sha\":{\"required\":true,\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"output\":{\"type\":\"object\"},\"output.annotations\":{\"type\":\"object[]\"},\"output.annotations[].annotation_level\":{\"enum\":[\"notice\",\"warning\",\"failure\"],\"required\":true,\"type\":\"string\"},\"output.annotations[].end_column\":{\"type\":\"integer\"},\"output.annotations[].end_line\":{\"required\":true,\"type\":\"integer\"},\"output.annotations[].message\":{\"required\":true,\"type\":\"string\"},\"output.annotations[].path\":{\"required\":true,\"type\":\"string\"},\"output.annotations[].raw_details\":{\"type\":\"string\"},\"output.annotations[].start_column\":{\"type\":\"integer\"},\"output.annotations[].start_line\":{\"required\":true,\"type\":\"integer\"},\"output.annotations[].title\":{\"type\":\"string\"},\"output.images\":{\"type\":\"object[]\"},\"output.images[].alt\":{\"required\":true,\"type\":\"string\"},\"output.images[].caption\":{\"type\":\"string\"},\"output.images[].image_url\":{\"required\":true,\"type\":\"string\"},\"output.summary\":{\"required\":true,\"type\":\"string\"},\"output.text\":{\"type\":\"string\"},\"output.title\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"started_at\":{\"type\":\"string\"},\"status\":{\"enum\":[\"queued\",\"in_progress\",\"completed\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-runs\"},\"createSuite\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"POST\",\"params\":{\"head_sha\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suites\"},\"get\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"GET\",\"params\":{\"check_run_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-runs/:check_run_id\"},\"getSuite\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"GET\",\"params\":{\"check_suite_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suites/:check_suite_id\"},\"listAnnotations\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"GET\",\"params\":{\"check_run_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-runs/:check_run_id/annotations\"},\"listForRef\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"GET\",\"params\":{\"check_name\":{\"type\":\"string\"},\"filter\":{\"enum\":[\"latest\",\"all\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"status\":{\"enum\":[\"queued\",\"in_progress\",\"completed\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref/check-runs\"},\"listForSuite\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"GET\",\"params\":{\"check_name\":{\"type\":\"string\"},\"check_suite_id\":{\"required\":true,\"type\":\"integer\"},\"filter\":{\"enum\":[\"latest\",\"all\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"status\":{\"enum\":[\"queued\",\"in_progress\",\"completed\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suites/:check_suite_id/check-runs\"},\"listSuitesForRef\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"GET\",\"params\":{\"app_id\":{\"type\":\"integer\"},\"check_name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref/check-suites\"},\"rerequestSuite\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"POST\",\"params\":{\"check_suite_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suites/:check_suite_id/rerequest\"},\"setSuitesPreferences\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"PATCH\",\"params\":{\"auto_trigger_checks\":{\"type\":\"object[]\"},\"auto_trigger_checks[].app_id\":{\"required\":true,\"type\":\"integer\"},\"auto_trigger_checks[].setting\":{\"required\":true,\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-suites/preferences\"},\"update\":{\"headers\":{\"accept\":\"application/vnd.github.antiope-preview+json\"},\"method\":\"PATCH\",\"params\":{\"actions\":{\"type\":\"object[]\"},\"actions[].description\":{\"required\":true,\"type\":\"string\"},\"actions[].identifier\":{\"required\":true,\"type\":\"string\"},\"actions[].label\":{\"required\":true,\"type\":\"string\"},\"check_run_id\":{\"required\":true,\"type\":\"integer\"},\"completed_at\":{\"type\":\"string\"},\"conclusion\":{\"enum\":[\"success\",\"failure\",\"neutral\",\"cancelled\",\"timed_out\",\"action_required\"],\"type\":\"string\"},\"details_url\":{\"type\":\"string\"},\"external_id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"output\":{\"type\":\"object\"},\"output.annotations\":{\"type\":\"object[]\"},\"output.annotations[].annotation_level\":{\"enum\":[\"notice\",\"warning\",\"failure\"],\"required\":true,\"type\":\"string\"},\"output.annotations[].end_column\":{\"type\":\"integer\"},\"output.annotations[].end_line\":{\"required\":true,\"type\":\"integer\"},\"output.annotations[].message\":{\"required\":true,\"type\":\"string\"},\"output.annotations[].path\":{\"required\":true,\"type\":\"string\"},\"output.annotations[].raw_details\":{\"type\":\"string\"},\"output.annotations[].start_column\":{\"type\":\"integer\"},\"output.annotations[].start_line\":{\"required\":true,\"type\":\"integer\"},\"output.annotations[].title\":{\"type\":\"string\"},\"output.images\":{\"type\":\"object[]\"},\"output.images[].alt\":{\"required\":true,\"type\":\"string\"},\"output.images[].caption\":{\"type\":\"string\"},\"output.images[].image_url\":{\"required\":true,\"type\":\"string\"},\"output.summary\":{\"required\":true,\"type\":\"string\"},\"output.text\":{\"type\":\"string\"},\"output.title\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"started_at\":{\"type\":\"string\"},\"status\":{\"enum\":[\"queued\",\"in_progress\",\"completed\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/check-runs/:check_run_id\"}},\"codesOfConduct\":{\"getConductCode\":{\"headers\":{\"accept\":\"application/vnd.github.scarlet-witch-preview+json\"},\"method\":\"GET\",\"params\":{\"key\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/codes_of_conduct/:key\"},\"getForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.scarlet-witch-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/community/code_of_conduct\"},\"listConductCodes\":{\"headers\":{\"accept\":\"application/vnd.github.scarlet-witch-preview+json\"},\"method\":\"GET\",\"params\":{},\"url\":\"/codes_of_conduct\"}},\"emojis\":{\"get\":{\"method\":\"GET\",\"params\":{},\"url\":\"/emojis\"}},\"gists\":{\"checkIsStarred\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/star\"},\"create\":{\"method\":\"POST\",\"params\":{\"description\":{\"type\":\"string\"},\"files\":{\"required\":true,\"type\":\"object\"},\"files.content\":{\"type\":\"string\"},\"public\":{\"type\":\"boolean\"}},\"url\":\"/gists\"},\"createComment\":{\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/comments\"},\"delete\":{\"method\":\"DELETE\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id\"},\"deleteComment\":{\"method\":\"DELETE\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/comments/:comment_id\"},\"fork\":{\"method\":\"POST\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/forks\"},\"get\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id\"},\"getComment\":{\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/comments/:comment_id\"},\"getRevision\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/:sha\"},\"list\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/gists\"},\"listComments\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/gists/:gist_id/comments\"},\"listCommits\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/gists/:gist_id/commits\"},\"listForks\":{\"method\":\"GET\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/gists/:gist_id/forks\"},\"listPublic\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/gists/public\"},\"listPublicForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/gists\"},\"listStarred\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/gists/starred\"},\"star\":{\"method\":\"PUT\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/star\"},\"unstar\":{\"method\":\"DELETE\",\"params\":{\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/star\"},\"update\":{\"method\":\"PATCH\",\"params\":{\"description\":{\"type\":\"string\"},\"files\":{\"type\":\"object\"},\"files.content\":{\"type\":\"string\"},\"files.filename\":{\"type\":\"string\"},\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id\"},\"updateComment\":{\"method\":\"PATCH\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"gist_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gists/:gist_id/comments/:comment_id\"}},\"git\":{\"createBlob\":{\"method\":\"POST\",\"params\":{\"content\":{\"required\":true,\"type\":\"string\"},\"encoding\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/blobs\"},\"createCommit\":{\"method\":\"POST\",\"params\":{\"author\":{\"type\":\"object\"},\"author.date\":{\"type\":\"string\"},\"author.email\":{\"type\":\"string\"},\"author.name\":{\"type\":\"string\"},\"committer\":{\"type\":\"object\"},\"committer.date\":{\"type\":\"string\"},\"committer.email\":{\"type\":\"string\"},\"committer.name\":{\"type\":\"string\"},\"message\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"parents\":{\"required\":true,\"type\":\"string[]\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"signature\":{\"type\":\"string\"},\"tree\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/commits\"},\"createRef\":{\"method\":\"POST\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs\"},\"createTag\":{\"method\":\"POST\",\"params\":{\"message\":{\"required\":true,\"type\":\"string\"},\"object\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tag\":{\"required\":true,\"type\":\"string\"},\"tagger\":{\"type\":\"object\"},\"tagger.date\":{\"type\":\"string\"},\"tagger.email\":{\"type\":\"string\"},\"tagger.name\":{\"type\":\"string\"},\"type\":{\"enum\":[\"commit\",\"tree\",\"blob\"],\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/tags\"},\"createTree\":{\"method\":\"POST\",\"params\":{\"base_tree\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tree\":{\"required\":true,\"type\":\"object[]\"},\"tree[].content\":{\"type\":\"string\"},\"tree[].mode\":{\"enum\":[\"100644\",\"100755\",\"040000\",\"160000\",\"120000\"],\"type\":\"string\"},\"tree[].path\":{\"type\":\"string\"},\"tree[].sha\":{\"type\":\"string\"},\"tree[].type\":{\"enum\":[\"blob\",\"tree\",\"commit\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/trees\"},\"deleteRef\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs/:ref\"},\"getBlob\":{\"method\":\"GET\",\"params\":{\"file_sha\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/blobs/:file_sha\"},\"getCommit\":{\"method\":\"GET\",\"params\":{\"commit_sha\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/commits/:commit_sha\"},\"getRef\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs/:ref\"},\"getTag\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tag_sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/tags/:tag_sha\"},\"getTree\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"recursive\":{\"enum\":[\"1\"],\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tree_sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/trees/:tree_sha\"},\"listRefs\":{\"method\":\"GET\",\"params\":{\"namespace\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs/:namespace\"},\"updateRef\":{\"method\":\"PATCH\",\"params\":{\"force\":{\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/git/refs/:ref\"}},\"gitignore\":{\"getTemplate\":{\"method\":\"GET\",\"params\":{\"name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/gitignore/templates/:name\"},\"listTemplates\":{\"method\":\"GET\",\"params\":{},\"url\":\"/gitignore/templates\"}},\"interactions\":{\"addOrUpdateRestrictionsForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.sombra-preview+json\"},\"method\":\"PUT\",\"params\":{\"limit\":{\"enum\":[\"existing_users\",\"contributors_only\",\"collaborators_only\"],\"required\":true,\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/interaction-limits\"},\"addOrUpdateRestrictionsForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.sombra-preview+json\"},\"method\":\"PUT\",\"params\":{\"limit\":{\"enum\":[\"existing_users\",\"contributors_only\",\"collaborators_only\"],\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/interaction-limits\"},\"getRestrictionsForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.sombra-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/interaction-limits\"},\"getRestrictionsForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.sombra-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/interaction-limits\"},\"removeRestrictionsForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.sombra-preview+json\"},\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/interaction-limits\"},\"removeRestrictionsForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.sombra-preview+json\"},\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/interaction-limits\"}},\"issues\":{\"addAssignees\":{\"method\":\"POST\",\"params\":{\"assignees\":{\"type\":\"string[]\"},\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/assignees\"},\"addLabels\":{\"method\":\"POST\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"labels\":{\"required\":true,\"type\":\"string[]\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/labels\"},\"checkAssignee\":{\"method\":\"GET\",\"params\":{\"assignee\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/assignees/:assignee\"},\"create\":{\"method\":\"POST\",\"params\":{\"assignee\":{\"type\":\"string\"},\"assignees\":{\"type\":\"string[]\"},\"body\":{\"type\":\"string\"},\"labels\":{\"type\":\"string[]\"},\"milestone\":{\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"title\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues\"},\"createComment\":{\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/comments\"},\"createLabel\":{\"method\":\"POST\",\"params\":{\"color\":{\"required\":true,\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/labels\"},\"createMilestone\":{\"method\":\"POST\",\"params\":{\"description\":{\"type\":\"string\"},\"due_on\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\"],\"type\":\"string\"},\"title\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones\"},\"deleteComment\":{\"method\":\"DELETE\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments/:comment_id\"},\"deleteLabel\":{\"method\":\"DELETE\",\"params\":{\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/labels/:name\"},\"deleteMilestone\":{\"method\":\"DELETE\",\"params\":{\"milestone_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"milestone_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones/:milestone_number\"},\"get\":{\"method\":\"GET\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number\"},\"getComment\":{\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments/:comment_id\"},\"getEvent\":{\"method\":\"GET\",\"params\":{\"event_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/events/:event_id\"},\"getLabel\":{\"method\":\"GET\",\"params\":{\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/labels/:name\"},\"getMilestone\":{\"method\":\"GET\",\"params\":{\"milestone_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"milestone_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones/:milestone_number\"},\"list\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"filter\":{\"enum\":[\"assigned\",\"created\",\"mentioned\",\"subscribed\",\"all\"],\"type\":\"string\"},\"labels\":{\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"comments\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/issues\"},\"listAssignees\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/assignees\"},\"listComments\":{\"method\":\"GET\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/comments\"},\"listCommentsForRepo\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments\"},\"listEvents\":{\"method\":\"GET\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/events\"},\"listEventsForRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/events\"},\"listEventsForTimeline\":{\"headers\":{\"accept\":\"application/vnd.github.mockingbird-preview+json\"},\"method\":\"GET\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/timeline\"},\"listForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"filter\":{\"enum\":[\"assigned\",\"created\",\"mentioned\",\"subscribed\",\"all\"],\"type\":\"string\"},\"labels\":{\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"comments\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/user/issues\"},\"listForOrg\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"filter\":{\"enum\":[\"assigned\",\"created\",\"mentioned\",\"subscribed\",\"all\"],\"type\":\"string\"},\"labels\":{\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"comments\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/orgs/:org/issues\"},\"listForRepo\":{\"method\":\"GET\",\"params\":{\"assignee\":{\"type\":\"string\"},\"creator\":{\"type\":\"string\"},\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"labels\":{\"type\":\"string\"},\"mentioned\":{\"type\":\"string\"},\"milestone\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"comments\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues\"},\"listLabelsForMilestone\":{\"method\":\"GET\",\"params\":{\"milestone_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"milestone_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones/:milestone_number/labels\"},\"listLabelsForRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/labels\"},\"listLabelsOnIssue\":{\"method\":\"GET\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/labels\"},\"listMilestonesForRepo\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"due_on\",\"completeness\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones\"},\"lock\":{\"method\":\"PUT\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"lock_reason\":{\"enum\":[\"off-topic\",\"too heated\",\"resolved\",\"spam\"],\"type\":\"string\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/lock\"},\"removeAssignees\":{\"method\":\"DELETE\",\"params\":{\"assignees\":{\"type\":\"string[]\"},\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/assignees\"},\"removeLabel\":{\"method\":\"DELETE\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"name\":{\"required\":true,\"type\":\"string\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/labels/:name\"},\"removeLabels\":{\"method\":\"DELETE\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/labels\"},\"replaceLabels\":{\"method\":\"PUT\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"labels\":{\"type\":\"string[]\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/labels\"},\"unlock\":{\"method\":\"DELETE\",\"params\":{\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/lock\"},\"update\":{\"method\":\"PATCH\",\"params\":{\"assignee\":{\"type\":\"string\"},\"assignees\":{\"type\":\"string[]\"},\"body\":{\"type\":\"string\"},\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"labels\":{\"type\":\"string[]\"},\"milestone\":{\"allowNull\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\"],\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number\"},\"updateComment\":{\"method\":\"PATCH\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments/:comment_id\"},\"updateLabel\":{\"method\":\"PATCH\",\"params\":{\"color\":{\"type\":\"string\"},\"current_name\":{\"required\":true,\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/labels/:current_name\"},\"updateMilestone\":{\"method\":\"PATCH\",\"params\":{\"description\":{\"type\":\"string\"},\"due_on\":{\"type\":\"string\"},\"milestone_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"milestone_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\"],\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/milestones/:milestone_number\"}},\"licenses\":{\"get\":{\"method\":\"GET\",\"params\":{\"license\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/licenses/:license\"},\"getForRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/license\"},\"list\":{\"deprecated\":\"octokit.licenses.list() has been renamed to octokit.licenses.listCommonlyUsed() (2019-03-05)\",\"method\":\"GET\",\"params\":{},\"url\":\"/licenses\"},\"listCommonlyUsed\":{\"method\":\"GET\",\"params\":{},\"url\":\"/licenses\"}},\"markdown\":{\"render\":{\"method\":\"POST\",\"params\":{\"context\":{\"type\":\"string\"},\"mode\":{\"enum\":[\"markdown\",\"gfm\"],\"type\":\"string\"},\"text\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/markdown\"},\"renderRaw\":{\"headers\":{\"content-type\":\"text/plain; charset=utf-8\"},\"method\":\"POST\",\"params\":{\"data\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string\"}},\"url\":\"/markdown/raw\"}},\"meta\":{\"get\":{\"method\":\"GET\",\"params\":{},\"url\":\"/meta\"}},\"migrations\":{\"cancelImport\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import\"},\"deleteArchiveForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"DELETE\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/migrations/:migration_id/archive\"},\"deleteArchiveForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"DELETE\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/migrations/:migration_id/archive\"},\"getArchiveForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/migrations/:migration_id/archive\"},\"getArchiveForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/migrations/:migration_id/archive\"},\"getCommitAuthors\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import/authors\"},\"getImportProgress\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import\"},\"getLargeFiles\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import/large_files\"},\"getStatusForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/migrations/:migration_id\"},\"getStatusForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/migrations/:migration_id\"},\"listForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/migrations\"},\"listForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/migrations\"},\"mapCommitAuthor\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"PATCH\",\"params\":{\"author_id\":{\"required\":true,\"type\":\"integer\"},\"email\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import/authors/:author_id\"},\"setLfsPreference\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"PATCH\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"use_lfs\":{\"enum\":[\"opt_in\",\"opt_out\"],\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import/lfs\"},\"startForAuthenticatedUser\":{\"method\":\"POST\",\"params\":{\"exclude_attachments\":{\"type\":\"boolean\"},\"lock_repositories\":{\"type\":\"boolean\"},\"repositories\":{\"required\":true,\"type\":\"string[]\"}},\"url\":\"/user/migrations\"},\"startForOrg\":{\"method\":\"POST\",\"params\":{\"exclude_attachments\":{\"type\":\"boolean\"},\"lock_repositories\":{\"type\":\"boolean\"},\"org\":{\"required\":true,\"type\":\"string\"},\"repositories\":{\"required\":true,\"type\":\"string[]\"}},\"url\":\"/orgs/:org/migrations\"},\"startImport\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"PUT\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tfvc_project\":{\"type\":\"string\"},\"vcs\":{\"enum\":[\"subversion\",\"git\",\"mercurial\",\"tfvc\"],\"type\":\"string\"},\"vcs_password\":{\"type\":\"string\"},\"vcs_url\":{\"required\":true,\"type\":\"string\"},\"vcs_username\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import\"},\"unlockRepoForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"DELETE\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"},\"repo_name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/migrations/:migration_id/repos/:repo_name/lock\"},\"unlockRepoForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.wyandotte-preview+json\"},\"method\":\"DELETE\",\"params\":{\"migration_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"},\"repo_name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/migrations/:migration_id/repos/:repo_name/lock\"},\"updateImport\":{\"headers\":{\"accept\":\"application/vnd.github.barred-rock-preview+json\"},\"method\":\"PATCH\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"vcs_password\":{\"type\":\"string\"},\"vcs_username\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/import\"}},\"oauthAuthorizations\":{\"checkAuthorization\":{\"method\":\"GET\",\"params\":{\"access_token\":{\"required\":true,\"type\":\"string\"},\"client_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/applications/:client_id/tokens/:access_token\"},\"createAuthorization\":{\"method\":\"POST\",\"params\":{\"client_id\":{\"type\":\"string\"},\"client_secret\":{\"type\":\"string\"},\"fingerprint\":{\"type\":\"string\"},\"note\":{\"required\":true,\"type\":\"string\"},\"note_url\":{\"type\":\"string\"},\"scopes\":{\"type\":\"string[]\"}},\"url\":\"/authorizations\"},\"deleteAuthorization\":{\"method\":\"DELETE\",\"params\":{\"authorization_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/authorizations/:authorization_id\"},\"deleteGrant\":{\"method\":\"DELETE\",\"params\":{\"grant_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/applications/grants/:grant_id\"},\"getAuthorization\":{\"method\":\"GET\",\"params\":{\"authorization_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/authorizations/:authorization_id\"},\"getGrant\":{\"method\":\"GET\",\"params\":{\"grant_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/applications/grants/:grant_id\"},\"getOrCreateAuthorizationForApp\":{\"method\":\"PUT\",\"params\":{\"client_id\":{\"required\":true,\"type\":\"string\"},\"client_secret\":{\"required\":true,\"type\":\"string\"},\"fingerprint\":{\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"note_url\":{\"type\":\"string\"},\"scopes\":{\"type\":\"string[]\"}},\"url\":\"/authorizations/clients/:client_id\"},\"getOrCreateAuthorizationForAppAndFingerprint\":{\"method\":\"PUT\",\"params\":{\"client_id\":{\"required\":true,\"type\":\"string\"},\"client_secret\":{\"required\":true,\"type\":\"string\"},\"fingerprint\":{\"required\":true,\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"note_url\":{\"type\":\"string\"},\"scopes\":{\"type\":\"string[]\"}},\"url\":\"/authorizations/clients/:client_id/:fingerprint\"},\"getOrCreateAuthorizationForAppFingerprint\":{\"deprecated\":\"octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint() has been renamed to octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() (2018-12-27)\",\"method\":\"PUT\",\"params\":{\"client_id\":{\"required\":true,\"type\":\"string\"},\"client_secret\":{\"required\":true,\"type\":\"string\"},\"fingerprint\":{\"required\":true,\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"note_url\":{\"type\":\"string\"},\"scopes\":{\"type\":\"string[]\"}},\"url\":\"/authorizations/clients/:client_id/:fingerprint\"},\"listAuthorizations\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/authorizations\"},\"listGrants\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/applications/grants\"},\"resetAuthorization\":{\"method\":\"POST\",\"params\":{\"access_token\":{\"required\":true,\"type\":\"string\"},\"client_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/applications/:client_id/tokens/:access_token\"},\"revokeAuthorizationForApplication\":{\"method\":\"DELETE\",\"params\":{\"access_token\":{\"required\":true,\"type\":\"string\"},\"client_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/applications/:client_id/tokens/:access_token\"},\"revokeGrantForApplication\":{\"method\":\"DELETE\",\"params\":{\"access_token\":{\"required\":true,\"type\":\"string\"},\"client_id\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/applications/:client_id/grants/:access_token\"},\"updateAuthorization\":{\"method\":\"PATCH\",\"params\":{\"add_scopes\":{\"type\":\"string[]\"},\"authorization_id\":{\"required\":true,\"type\":\"integer\"},\"fingerprint\":{\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"note_url\":{\"type\":\"string\"},\"remove_scopes\":{\"type\":\"string[]\"},\"scopes\":{\"type\":\"string[]\"}},\"url\":\"/authorizations/:authorization_id\"}},\"orgs\":{\"addOrUpdateMembership\":{\"method\":\"PUT\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"role\":{\"enum\":[\"admin\",\"member\"],\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/memberships/:username\"},\"blockUser\":{\"method\":\"PUT\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/blocks/:username\"},\"checkBlockedUser\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/blocks/:username\"},\"checkMembership\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/members/:username\"},\"checkPublicMembership\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/public_members/:username\"},\"concealMembership\":{\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/public_members/:username\"},\"convertMemberToOutsideCollaborator\":{\"method\":\"PUT\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/outside_collaborators/:username\"},\"createHook\":{\"method\":\"POST\",\"params\":{\"active\":{\"type\":\"boolean\"},\"config\":{\"required\":true,\"type\":\"object\"},\"config.content_type\":{\"type\":\"string\"},\"config.insecure_ssl\":{\"type\":\"string\"},\"config.secret\":{\"type\":\"string\"},\"config.url\":{\"required\":true,\"type\":\"string\"},\"events\":{\"type\":\"string[]\"},\"name\":{\"required\":true,\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/hooks\"},\"createInvitation\":{\"method\":\"POST\",\"params\":{\"email\":{\"type\":\"string\"},\"invitee_id\":{\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"},\"role\":{\"enum\":[\"admin\",\"direct_member\",\"billing_manager\"],\"type\":\"string\"},\"team_ids\":{\"type\":\"integer[]\"}},\"url\":\"/orgs/:org/invitations\"},\"deleteHook\":{\"method\":\"DELETE\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/hooks/:hook_id\"},\"get\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org\"},\"getHook\":{\"method\":\"GET\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/hooks/:hook_id\"},\"getMembership\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/memberships/:username\"},\"getMembershipForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/memberships/orgs/:org\"},\"list\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/organizations\"},\"listBlockedUsers\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/blocks\"},\"listForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/orgs\"},\"listForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/orgs\"},\"listHooks\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/hooks\"},\"listInvitationTeams\":{\"method\":\"GET\",\"params\":{\"invitation_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/invitations/:invitation_id/teams\"},\"listMembers\":{\"method\":\"GET\",\"params\":{\"filter\":{\"enum\":[\"2fa_disabled\",\"all\"],\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"role\":{\"enum\":[\"all\",\"admin\",\"member\"],\"type\":\"string\"}},\"url\":\"/orgs/:org/members\"},\"listMemberships\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"state\":{\"enum\":[\"active\",\"pending\"],\"type\":\"string\"}},\"url\":\"/user/memberships/orgs\"},\"listOutsideCollaborators\":{\"method\":\"GET\",\"params\":{\"filter\":{\"enum\":[\"2fa_disabled\",\"all\"],\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/outside_collaborators\"},\"listPendingInvitations\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/invitations\"},\"listPublicMembers\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/public_members\"},\"pingHook\":{\"method\":\"POST\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/hooks/:hook_id/pings\"},\"publicizeMembership\":{\"method\":\"PUT\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/public_members/:username\"},\"removeMember\":{\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/members/:username\"},\"removeMembership\":{\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/memberships/:username\"},\"removeOutsideCollaborator\":{\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/outside_collaborators/:username\"},\"unblockUser\":{\"method\":\"DELETE\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/blocks/:username\"},\"update\":{\"method\":\"PATCH\",\"params\":{\"billing_email\":{\"type\":\"string\"},\"company\":{\"type\":\"string\"},\"default_repository_permission\":{\"enum\":[\"read\",\"write\",\"admin\",\"none\"],\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"has_organization_projects\":{\"type\":\"boolean\"},\"has_repository_projects\":{\"type\":\"boolean\"},\"location\":{\"type\":\"string\"},\"members_allowed_repository_creation_type\":{\"enum\":[\"all\",\"private\",\"none\"],\"type\":\"string\"},\"members_can_create_repositories\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org\"},\"updateHook\":{\"method\":\"PATCH\",\"params\":{\"active\":{\"type\":\"boolean\"},\"config\":{\"type\":\"object\"},\"config.content_type\":{\"type\":\"string\"},\"config.insecure_ssl\":{\"type\":\"string\"},\"config.secret\":{\"type\":\"string\"},\"config.url\":{\"required\":true,\"type\":\"string\"},\"events\":{\"type\":\"string[]\"},\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/hooks/:hook_id\"},\"updateMembership\":{\"method\":\"PATCH\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"active\"],\"required\":true,\"type\":\"string\"}},\"url\":\"/user/memberships/orgs/:org\"}},\"projects\":{\"addCollaborator\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"PUT\",\"params\":{\"permission\":{\"enum\":[\"read\",\"write\",\"admin\"],\"type\":\"string\"},\"project_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/projects/:project_id/collaborators/:username\"},\"createCard\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"column_id\":{\"required\":true,\"type\":\"integer\"},\"content_id\":{\"type\":\"integer\"},\"content_type\":{\"type\":\"string\"},\"note\":{\"type\":\"string\"}},\"url\":\"/projects/columns/:column_id/cards\"},\"createColumn\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"name\":{\"required\":true,\"type\":\"string\"},\"project_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/:project_id/columns\"},\"createForAuthenticatedUser\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/projects\"},\"createForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/projects\"},\"createForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/projects\"},\"delete\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"DELETE\",\"params\":{\"project_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/:project_id\"},\"deleteCard\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"DELETE\",\"params\":{\"card_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/columns/cards/:card_id\"},\"deleteColumn\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"DELETE\",\"params\":{\"column_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/columns/:column_id\"},\"get\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"project_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/:project_id\"},\"getCard\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"card_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/columns/cards/:card_id\"},\"getColumn\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"column_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/columns/:column_id\"},\"listCards\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"archived_state\":{\"enum\":[\"all\",\"archived\",\"not_archived\"],\"type\":\"string\"},\"column_id\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/projects/columns/:column_id/cards\"},\"listCollaborators\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"affiliation\":{\"enum\":[\"outside\",\"direct\",\"all\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"project_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/:project_id/collaborators\"},\"listColumns\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"project_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/projects/:project_id/columns\"},\"listForOrg\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/orgs/:org/projects\"},\"listForRepo\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/projects\"},\"listForUser\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/projects\"},\"moveCard\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"card_id\":{\"required\":true,\"type\":\"integer\"},\"column_id\":{\"type\":\"integer\"},\"position\":{\"required\":true,\"type\":\"string\",\"validation\":\"^(top|bottom|after:\\\\d+)$\"}},\"url\":\"/projects/columns/cards/:card_id/moves\"},\"moveColumn\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"POST\",\"params\":{\"column_id\":{\"required\":true,\"type\":\"integer\"},\"position\":{\"required\":true,\"type\":\"string\",\"validation\":\"^(first|last|after:\\\\d+)$\"}},\"url\":\"/projects/columns/:column_id/moves\"},\"removeCollaborator\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"DELETE\",\"params\":{\"project_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/projects/:project_id/collaborators/:username\"},\"reviewUserPermissionLevel\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"project_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/projects/:project_id/collaborators/:username/permission\"},\"update\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"PATCH\",\"params\":{\"body\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"organization_permission\":{\"type\":\"string\"},\"private\":{\"type\":\"boolean\"},\"project_id\":{\"required\":true,\"type\":\"integer\"},\"state\":{\"enum\":[\"open\",\"closed\"],\"type\":\"string\"}},\"url\":\"/projects/:project_id\"},\"updateCard\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"PATCH\",\"params\":{\"archived\":{\"type\":\"boolean\"},\"card_id\":{\"required\":true,\"type\":\"integer\"},\"note\":{\"type\":\"string\"}},\"url\":\"/projects/columns/cards/:card_id\"},\"updateColumn\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"PATCH\",\"params\":{\"column_id\":{\"required\":true,\"type\":\"integer\"},\"name\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/projects/columns/:column_id\"}},\"pulls\":{\"checkIfMerged\":{\"method\":\"GET\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/merge\"},\"create\":{\"method\":\"POST\",\"params\":{\"base\":{\"required\":true,\"type\":\"string\"},\"body\":{\"type\":\"string\"},\"draft\":{\"type\":\"boolean\"},\"head\":{\"required\":true,\"type\":\"string\"},\"maintainer_can_modify\":{\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"title\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls\"},\"createComment\":{\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"commit_id\":{\"required\":true,\"type\":\"string\"},\"in_reply_to\":{\"deprecated\":true,\"description\":\"The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.\",\"type\":\"integer\"},\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"position\":{\"required\":true,\"type\":\"integer\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/comments\"},\"createCommentReply\":{\"deprecated\":\"octokit.pulls.createCommentReply() has been renamed to octokit.pulls.createComment() (2019-09-09)\",\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"commit_id\":{\"required\":true,\"type\":\"string\"},\"in_reply_to\":{\"deprecated\":true,\"description\":\"The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.\",\"type\":\"integer\"},\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"position\":{\"required\":true,\"type\":\"integer\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/comments\"},\"createFromIssue\":{\"deprecated\":\"octokit.pulls.createFromIssue() has been deprecated. Use octokit.pulls.create() instead.\",\"method\":\"POST\",\"params\":{\"base\":{\"required\":true,\"type\":\"string\"},\"draft\":{\"type\":\"boolean\"},\"head\":{\"required\":true,\"type\":\"string\"},\"issue\":{\"required\":true,\"type\":\"integer\"},\"maintainer_can_modify\":{\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls\"},\"createReview\":{\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"comments\":{\"type\":\"object[]\"},\"comments[].body\":{\"required\":true,\"type\":\"string\"},\"comments[].path\":{\"required\":true,\"type\":\"string\"},\"comments[].position\":{\"required\":true,\"type\":\"integer\"},\"commit_id\":{\"type\":\"string\"},\"event\":{\"enum\":[\"APPROVE\",\"REQUEST_CHANGES\",\"COMMENT\"],\"type\":\"string\"},\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/reviews\"},\"createReviewCommentReply\":{\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies\"},\"createReviewRequest\":{\"method\":\"POST\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"reviewers\":{\"type\":\"string[]\"},\"team_reviewers\":{\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/requested_reviewers\"},\"deleteComment\":{\"method\":\"DELETE\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments/:comment_id\"},\"deletePendingReview\":{\"method\":\"DELETE\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id\"},\"deleteReviewRequest\":{\"method\":\"DELETE\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"reviewers\":{\"type\":\"string[]\"},\"team_reviewers\":{\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/requested_reviewers\"},\"dismissReview\":{\"method\":\"PUT\",\"params\":{\"message\":{\"required\":true,\"type\":\"string\"},\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals\"},\"get\":{\"method\":\"GET\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number\"},\"getComment\":{\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments/:comment_id\"},\"getCommentsForReview\":{\"method\":\"GET\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments\"},\"getReview\":{\"method\":\"GET\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id\"},\"list\":{\"method\":\"GET\",\"params\":{\"base\":{\"type\":\"string\"},\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"head\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"popularity\",\"long-running\"],\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\",\"all\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls\"},\"listComments\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/comments\"},\"listCommentsForRepo\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"since\":{\"type\":\"string\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments\"},\"listCommits\":{\"method\":\"GET\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/commits\"},\"listFiles\":{\"method\":\"GET\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/files\"},\"listReviewRequests\":{\"method\":\"GET\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/requested_reviewers\"},\"listReviews\":{\"method\":\"GET\",\"params\":{\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/reviews\"},\"merge\":{\"method\":\"PUT\",\"params\":{\"commit_message\":{\"type\":\"string\"},\"commit_title\":{\"type\":\"string\"},\"merge_method\":{\"enum\":[\"merge\",\"squash\",\"rebase\"],\"type\":\"string\"},\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/merge\"},\"submitReview\":{\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"event\":{\"enum\":[\"APPROVE\",\"REQUEST_CHANGES\",\"COMMENT\"],\"required\":true,\"type\":\"string\"},\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events\"},\"update\":{\"method\":\"PATCH\",\"params\":{\"base\":{\"type\":\"string\"},\"body\":{\"type\":\"string\"},\"maintainer_can_modify\":{\"type\":\"boolean\"},\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"open\",\"closed\"],\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number\"},\"updateBranch\":{\"headers\":{\"accept\":\"application/vnd.github.lydian-preview+json\"},\"method\":\"PUT\",\"params\":{\"expected_head_sha\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/update-branch\"},\"updateComment\":{\"method\":\"PATCH\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments/:comment_id\"},\"updateReview\":{\"method\":\"PUT\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"number\":{\"alias\":\"pull_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"pull_number\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"review_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id\"}},\"rateLimit\":{\"get\":{\"method\":\"GET\",\"params\":{},\"url\":\"/rate_limit\"}},\"reactions\":{\"createForCommitComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments/:comment_id/reactions\"},\"createForIssue\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"required\":true,\"type\":\"string\"},\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/reactions\"},\"createForIssueComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments/:comment_id/reactions\"},\"createForPullRequestReviewComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments/:comment_id/reactions\"},\"createForTeamDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"required\":true,\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/reactions\"},\"createForTeamDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"POST\",\"params\":{\"comment_number\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"required\":true,\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions\"},\"delete\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"DELETE\",\"params\":{\"reaction_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/reactions/:reaction_id\"},\"listForCommitComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments/:comment_id/reactions\"},\"listForIssue\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"type\":\"string\"},\"issue_number\":{\"required\":true,\"type\":\"integer\"},\"number\":{\"alias\":\"issue_number\",\"deprecated\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/:issue_number/reactions\"},\"listForIssueComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/issues/comments/:comment_id/reactions\"},\"listForPullRequestReviewComment\":{\"headers\":{\"accept\":\"application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pulls/comments/:comment_id/reactions\"},\"listForTeamDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/reactions\"},\"listForTeamDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json,application/vnd.github.squirrel-girl-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_number\":{\"required\":true,\"type\":\"integer\"},\"content\":{\"enum\":[\"+1\",\"-1\",\"laugh\",\"confused\",\"heart\",\"hooray\",\"rocket\",\"eyes\"],\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions\"}},\"repos\":{\"acceptInvitation\":{\"method\":\"PATCH\",\"params\":{\"invitation_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/repository_invitations/:invitation_id\"},\"addCollaborator\":{\"method\":\"PUT\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"permission\":{\"enum\":[\"pull\",\"push\",\"admin\"],\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/collaborators/:username\"},\"addDeployKey\":{\"method\":\"POST\",\"params\":{\"key\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"read_only\":{\"type\":\"boolean\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/keys\"},\"addProtectedBranchAdminEnforcement\":{\"method\":\"POST\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/enforce_admins\"},\"addProtectedBranchAppRestrictions\":{\"method\":\"POST\",\"params\":{\"apps\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"},\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/apps\"},\"addProtectedBranchRequiredSignatures\":{\"headers\":{\"accept\":\"application/vnd.github.zzzax-preview+json\"},\"method\":\"POST\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_signatures\"},\"addProtectedBranchRequiredStatusChecksContexts\":{\"method\":\"POST\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"contexts\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\"},\"addProtectedBranchTeamRestrictions\":{\"method\":\"POST\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"teams\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams\"},\"addProtectedBranchUserRestrictions\":{\"method\":\"POST\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"users\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/users\"},\"checkCollaborator\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/collaborators/:username\"},\"checkVulnerabilityAlerts\":{\"headers\":{\"accept\":\"application/vnd.github.dorian-preview+json\"},\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/vulnerability-alerts\"},\"compareCommits\":{\"method\":\"GET\",\"params\":{\"base\":{\"required\":true,\"type\":\"string\"},\"head\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/compare/:base...:head\"},\"createCommitComment\":{\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"commit_sha\":{\"required\":true,\"type\":\"string\"},\"line\":{\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"position\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"alias\":\"commit_sha\",\"deprecated\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:commit_sha/comments\"},\"createDeployment\":{\"method\":\"POST\",\"params\":{\"auto_merge\":{\"type\":\"boolean\"},\"description\":{\"type\":\"string\"},\"environment\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"payload\":{\"type\":\"string\"},\"production_environment\":{\"type\":\"boolean\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"required_contexts\":{\"type\":\"string[]\"},\"task\":{\"type\":\"string\"},\"transient_environment\":{\"type\":\"boolean\"}},\"url\":\"/repos/:owner/:repo/deployments\"},\"createDeploymentStatus\":{\"method\":\"POST\",\"params\":{\"auto_inactive\":{\"type\":\"boolean\"},\"deployment_id\":{\"required\":true,\"type\":\"integer\"},\"description\":{\"type\":\"string\"},\"environment\":{\"enum\":[\"production\",\"staging\",\"qa\"],\"type\":\"string\"},\"environment_url\":{\"type\":\"string\"},\"log_url\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"error\",\"failure\",\"inactive\",\"in_progress\",\"queued\",\"pending\",\"success\"],\"required\":true,\"type\":\"string\"},\"target_url\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/deployments/:deployment_id/statuses\"},\"createDispatchEvent\":{\"headers\":{\"accept\":\"application/vnd.github.everest-preview+json\"},\"method\":\"POST\",\"params\":{\"event_type\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/dispatches\"},\"createFile\":{\"deprecated\":\"octokit.repos.createFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)\",\"method\":\"PUT\",\"params\":{\"author\":{\"type\":\"object\"},\"author.email\":{\"required\":true,\"type\":\"string\"},\"author.name\":{\"required\":true,\"type\":\"string\"},\"branch\":{\"type\":\"string\"},\"committer\":{\"type\":\"object\"},\"committer.email\":{\"required\":true,\"type\":\"string\"},\"committer.name\":{\"required\":true,\"type\":\"string\"},\"content\":{\"required\":true,\"type\":\"string\"},\"message\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contents/:path\"},\"createForAuthenticatedUser\":{\"method\":\"POST\",\"params\":{\"allow_merge_commit\":{\"type\":\"boolean\"},\"allow_rebase_merge\":{\"type\":\"boolean\"},\"allow_squash_merge\":{\"type\":\"boolean\"},\"auto_init\":{\"type\":\"boolean\"},\"description\":{\"type\":\"string\"},\"gitignore_template\":{\"type\":\"string\"},\"has_issues\":{\"type\":\"boolean\"},\"has_projects\":{\"type\":\"boolean\"},\"has_wiki\":{\"type\":\"boolean\"},\"homepage\":{\"type\":\"string\"},\"is_template\":{\"type\":\"boolean\"},\"license_template\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"private\":{\"type\":\"boolean\"},\"team_id\":{\"type\":\"integer\"}},\"url\":\"/user/repos\"},\"createFork\":{\"method\":\"POST\",\"params\":{\"organization\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/forks\"},\"createHook\":{\"method\":\"POST\",\"params\":{\"active\":{\"type\":\"boolean\"},\"config\":{\"required\":true,\"type\":\"object\"},\"config.content_type\":{\"type\":\"string\"},\"config.insecure_ssl\":{\"type\":\"string\"},\"config.secret\":{\"type\":\"string\"},\"config.url\":{\"required\":true,\"type\":\"string\"},\"events\":{\"type\":\"string[]\"},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks\"},\"createInOrg\":{\"method\":\"POST\",\"params\":{\"allow_merge_commit\":{\"type\":\"boolean\"},\"allow_rebase_merge\":{\"type\":\"boolean\"},\"allow_squash_merge\":{\"type\":\"boolean\"},\"auto_init\":{\"type\":\"boolean\"},\"description\":{\"type\":\"string\"},\"gitignore_template\":{\"type\":\"string\"},\"has_issues\":{\"type\":\"boolean\"},\"has_projects\":{\"type\":\"boolean\"},\"has_wiki\":{\"type\":\"boolean\"},\"homepage\":{\"type\":\"string\"},\"is_template\":{\"type\":\"boolean\"},\"license_template\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"private\":{\"type\":\"boolean\"},\"team_id\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/repos\"},\"createOrUpdateFile\":{\"method\":\"PUT\",\"params\":{\"author\":{\"type\":\"object\"},\"author.email\":{\"required\":true,\"type\":\"string\"},\"author.name\":{\"required\":true,\"type\":\"string\"},\"branch\":{\"type\":\"string\"},\"committer\":{\"type\":\"object\"},\"committer.email\":{\"required\":true,\"type\":\"string\"},\"committer.name\":{\"required\":true,\"type\":\"string\"},\"content\":{\"required\":true,\"type\":\"string\"},\"message\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contents/:path\"},\"createRelease\":{\"method\":\"POST\",\"params\":{\"body\":{\"type\":\"string\"},\"draft\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"prerelease\":{\"type\":\"boolean\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tag_name\":{\"required\":true,\"type\":\"string\"},\"target_commitish\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases\"},\"createStatus\":{\"method\":\"POST\",\"params\":{\"context\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"},\"state\":{\"enum\":[\"error\",\"failure\",\"pending\",\"success\"],\"required\":true,\"type\":\"string\"},\"target_url\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/statuses/:sha\"},\"createUsingTemplate\":{\"headers\":{\"accept\":\"application/vnd.github.baptiste-preview+json\"},\"method\":\"POST\",\"params\":{\"description\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"type\":\"string\"},\"private\":{\"type\":\"boolean\"},\"template_owner\":{\"required\":true,\"type\":\"string\"},\"template_repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:template_owner/:template_repo/generate\"},\"declineInvitation\":{\"method\":\"DELETE\",\"params\":{\"invitation_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/repository_invitations/:invitation_id\"},\"delete\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo\"},\"deleteCommitComment\":{\"method\":\"DELETE\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments/:comment_id\"},\"deleteDownload\":{\"method\":\"DELETE\",\"params\":{\"download_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/downloads/:download_id\"},\"deleteFile\":{\"method\":\"DELETE\",\"params\":{\"author\":{\"type\":\"object\"},\"author.email\":{\"type\":\"string\"},\"author.name\":{\"type\":\"string\"},\"branch\":{\"type\":\"string\"},\"committer\":{\"type\":\"object\"},\"committer.email\":{\"type\":\"string\"},\"committer.name\":{\"type\":\"string\"},\"message\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contents/:path\"},\"deleteHook\":{\"method\":\"DELETE\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks/:hook_id\"},\"deleteInvitation\":{\"method\":\"DELETE\",\"params\":{\"invitation_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/invitations/:invitation_id\"},\"deleteRelease\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"release_id\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/:release_id\"},\"deleteReleaseAsset\":{\"method\":\"DELETE\",\"params\":{\"asset_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/assets/:asset_id\"},\"disableAutomatedSecurityFixes\":{\"headers\":{\"accept\":\"application/vnd.github.london-preview+json\"},\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/automated-security-fixes\"},\"disablePagesSite\":{\"headers\":{\"accept\":\"application/vnd.github.switcheroo-preview+json\"},\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages\"},\"disableVulnerabilityAlerts\":{\"headers\":{\"accept\":\"application/vnd.github.dorian-preview+json\"},\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/vulnerability-alerts\"},\"enableAutomatedSecurityFixes\":{\"headers\":{\"accept\":\"application/vnd.github.london-preview+json\"},\"method\":\"PUT\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/automated-security-fixes\"},\"enablePagesSite\":{\"headers\":{\"accept\":\"application/vnd.github.switcheroo-preview+json\"},\"method\":\"POST\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"source\":{\"type\":\"object\"},\"source.branch\":{\"enum\":[\"master\",\"gh-pages\"],\"type\":\"string\"},\"source.path\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages\"},\"enableVulnerabilityAlerts\":{\"headers\":{\"accept\":\"application/vnd.github.dorian-preview+json\"},\"method\":\"PUT\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/vulnerability-alerts\"},\"get\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo\"},\"getAppsWithAccessToProtectedBranch\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/apps\"},\"getArchiveLink\":{\"method\":\"GET\",\"params\":{\"archive_format\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/:archive_format/:ref\"},\"getBranch\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch\"},\"getBranchProtection\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection\"},\"getClones\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"per\":{\"enum\":[\"day\",\"week\"],\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/traffic/clones\"},\"getCodeFrequencyStats\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stats/code_frequency\"},\"getCollaboratorPermissionLevel\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/collaborators/:username/permission\"},\"getCombinedStatusForRef\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref/status\"},\"getCommit\":{\"method\":\"GET\",\"params\":{\"commit_sha\":{\"alias\":\"ref\",\"deprecated\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"alias\":\"ref\",\"deprecated\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref\"},\"getCommitActivityStats\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stats/commit_activity\"},\"getCommitComment\":{\"method\":\"GET\",\"params\":{\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments/:comment_id\"},\"getCommitRefSha\":{\"deprecated\":\"\\\"Get the SHA-1 of a commit reference\\\" will be removed. Use \\\"Get a single commit\\\" instead with media type format set to \\\"sha\\\" instead.\",\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref\"},\"getContents\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contents/:path\"},\"getContributorsStats\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stats/contributors\"},\"getDeployKey\":{\"method\":\"GET\",\"params\":{\"key_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/keys/:key_id\"},\"getDeployment\":{\"method\":\"GET\",\"params\":{\"deployment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/deployments/:deployment_id\"},\"getDeploymentStatus\":{\"method\":\"GET\",\"params\":{\"deployment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"status_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id\"},\"getDownload\":{\"method\":\"GET\",\"params\":{\"download_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/downloads/:download_id\"},\"getHook\":{\"method\":\"GET\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks/:hook_id\"},\"getLatestPagesBuild\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages/builds/latest\"},\"getLatestRelease\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/latest\"},\"getPages\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages\"},\"getPagesBuild\":{\"method\":\"GET\",\"params\":{\"build_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages/builds/:build_id\"},\"getParticipationStats\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stats/participation\"},\"getProtectedBranchAdminEnforcement\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/enforce_admins\"},\"getProtectedBranchPullRequestReviewEnforcement\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews\"},\"getProtectedBranchRequiredSignatures\":{\"headers\":{\"accept\":\"application/vnd.github.zzzax-preview+json\"},\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_signatures\"},\"getProtectedBranchRequiredStatusChecks\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks\"},\"getProtectedBranchRestrictions\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions\"},\"getPunchCardStats\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/stats/punch_card\"},\"getReadme\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"ref\":{\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/readme\"},\"getRelease\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"release_id\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/:release_id\"},\"getReleaseAsset\":{\"method\":\"GET\",\"params\":{\"asset_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/assets/:asset_id\"},\"getReleaseByTag\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tag\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/tags/:tag\"},\"getTeamsWithAccessToProtectedBranch\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams\"},\"getTopPaths\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/traffic/popular/paths\"},\"getTopReferrers\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/traffic/popular/referrers\"},\"getUsersWithAccessToProtectedBranch\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/users\"},\"getViews\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"per\":{\"enum\":[\"day\",\"week\"],\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/traffic/views\"},\"list\":{\"method\":\"GET\",\"params\":{\"affiliation\":{\"type\":\"string\"},\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"pushed\",\"full_name\"],\"type\":\"string\"},\"type\":{\"enum\":[\"all\",\"owner\",\"public\",\"private\",\"member\"],\"type\":\"string\"},\"visibility\":{\"enum\":[\"all\",\"public\",\"private\"],\"type\":\"string\"}},\"url\":\"/user/repos\"},\"listAppsWithAccessToProtectedBranch\":{\"deprecated\":\"octokit.repos.listAppsWithAccessToProtectedBranch() has been renamed to octokit.repos.getAppsWithAccessToProtectedBranch() (2019-09-13)\",\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/apps\"},\"listAssetsForRelease\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"release_id\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/:release_id/assets\"},\"listBranches\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"protected\":{\"type\":\"boolean\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches\"},\"listBranchesForHeadCommit\":{\"headers\":{\"accept\":\"application/vnd.github.groot-preview+json\"},\"method\":\"GET\",\"params\":{\"commit_sha\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:commit_sha/branches-where-head\"},\"listCollaborators\":{\"method\":\"GET\",\"params\":{\"affiliation\":{\"enum\":[\"outside\",\"direct\",\"all\"],\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/collaborators\"},\"listCommentsForCommit\":{\"method\":\"GET\",\"params\":{\"commit_sha\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"ref\":{\"alias\":\"commit_sha\",\"deprecated\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:commit_sha/comments\"},\"listCommitComments\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments\"},\"listCommits\":{\"method\":\"GET\",\"params\":{\"author\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"path\":{\"type\":\"string\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"type\":\"string\"},\"since\":{\"type\":\"string\"},\"until\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits\"},\"listContributors\":{\"method\":\"GET\",\"params\":{\"anon\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contributors\"},\"listDeployKeys\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/keys\"},\"listDeploymentStatuses\":{\"method\":\"GET\",\"params\":{\"deployment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/deployments/:deployment_id/statuses\"},\"listDeployments\":{\"method\":\"GET\",\"params\":{\"environment\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"ref\":{\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"type\":\"string\"},\"task\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/deployments\"},\"listDownloads\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/downloads\"},\"listForOrg\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"pushed\",\"full_name\"],\"type\":\"string\"},\"type\":{\"enum\":[\"all\",\"public\",\"private\",\"forks\",\"sources\",\"member\"],\"type\":\"string\"}},\"url\":\"/orgs/:org/repos\"},\"listForUser\":{\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\",\"pushed\",\"full_name\"],\"type\":\"string\"},\"type\":{\"enum\":[\"all\",\"owner\",\"member\"],\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/repos\"},\"listForks\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"newest\",\"oldest\",\"stargazers\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/forks\"},\"listHooks\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks\"},\"listInvitations\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/invitations\"},\"listInvitationsForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/repository_invitations\"},\"listLanguages\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/languages\"},\"listPagesBuilds\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages/builds\"},\"listProtectedBranchRequiredStatusChecksContexts\":{\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\"},\"listProtectedBranchTeamRestrictions\":{\"deprecated\":\"octokit.repos.listProtectedBranchTeamRestrictions() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-09)\",\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams\"},\"listProtectedBranchUserRestrictions\":{\"deprecated\":\"octokit.repos.listProtectedBranchUserRestrictions() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-09)\",\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/users\"},\"listPublic\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/repositories\"},\"listPullRequestsAssociatedWithCommit\":{\"headers\":{\"accept\":\"application/vnd.github.groot-preview+json\"},\"method\":\"GET\",\"params\":{\"commit_sha\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:commit_sha/pulls\"},\"listReleases\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases\"},\"listStatusesForRef\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"ref\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/commits/:ref/statuses\"},\"listTags\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/tags\"},\"listTeams\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/teams\"},\"listTeamsWithAccessToProtectedBranch\":{\"deprecated\":\"octokit.repos.listTeamsWithAccessToProtectedBranch() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-13)\",\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams\"},\"listTopics\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/topics\"},\"listUsersWithAccessToProtectedBranch\":{\"deprecated\":\"octokit.repos.listUsersWithAccessToProtectedBranch() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-13)\",\"method\":\"GET\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/users\"},\"merge\":{\"method\":\"POST\",\"params\":{\"base\":{\"required\":true,\"type\":\"string\"},\"commit_message\":{\"type\":\"string\"},\"head\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/merges\"},\"pingHook\":{\"method\":\"POST\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks/:hook_id/pings\"},\"removeBranchProtection\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection\"},\"removeCollaborator\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/collaborators/:username\"},\"removeDeployKey\":{\"method\":\"DELETE\",\"params\":{\"key_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/keys/:key_id\"},\"removeProtectedBranchAdminEnforcement\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/enforce_admins\"},\"removeProtectedBranchAppRestrictions\":{\"method\":\"DELETE\",\"params\":{\"apps\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"},\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/apps\"},\"removeProtectedBranchPullRequestReviewEnforcement\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews\"},\"removeProtectedBranchRequiredSignatures\":{\"headers\":{\"accept\":\"application/vnd.github.zzzax-preview+json\"},\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_signatures\"},\"removeProtectedBranchRequiredStatusChecks\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks\"},\"removeProtectedBranchRequiredStatusChecksContexts\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"contexts\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\"},\"removeProtectedBranchRestrictions\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions\"},\"removeProtectedBranchTeamRestrictions\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"teams\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams\"},\"removeProtectedBranchUserRestrictions\":{\"method\":\"DELETE\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"users\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/users\"},\"replaceProtectedBranchAppRestrictions\":{\"method\":\"PUT\",\"params\":{\"apps\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"},\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/apps\"},\"replaceProtectedBranchRequiredStatusChecksContexts\":{\"method\":\"PUT\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"contexts\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts\"},\"replaceProtectedBranchTeamRestrictions\":{\"method\":\"PUT\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"teams\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams\"},\"replaceProtectedBranchUserRestrictions\":{\"method\":\"PUT\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"users\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/restrictions/users\"},\"replaceTopics\":{\"method\":\"PUT\",\"params\":{\"names\":{\"required\":true,\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/topics\"},\"requestPageBuild\":{\"headers\":{\"accept\":\"application/vnd.github.mister-fantastic-preview+json\"},\"method\":\"POST\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages/builds\"},\"retrieveCommunityProfileMetrics\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/community/profile\"},\"testPushHook\":{\"method\":\"POST\",\"params\":{\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks/:hook_id/tests\"},\"transfer\":{\"headers\":{\"accept\":\"application/vnd.github.nightshade-preview+json\"},\"method\":\"POST\",\"params\":{\"new_owner\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"team_ids\":{\"type\":\"integer[]\"}},\"url\":\"/repos/:owner/:repo/transfer\"},\"update\":{\"method\":\"PATCH\",\"params\":{\"allow_merge_commit\":{\"type\":\"boolean\"},\"allow_rebase_merge\":{\"type\":\"boolean\"},\"allow_squash_merge\":{\"type\":\"boolean\"},\"archived\":{\"type\":\"boolean\"},\"default_branch\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"has_issues\":{\"type\":\"boolean\"},\"has_projects\":{\"type\":\"boolean\"},\"has_wiki\":{\"type\":\"boolean\"},\"homepage\":{\"type\":\"string\"},\"is_template\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"private\":{\"type\":\"boolean\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo\"},\"updateBranchProtection\":{\"method\":\"PUT\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"enforce_admins\":{\"allowNull\":true,\"required\":true,\"type\":\"boolean\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"required_pull_request_reviews\":{\"allowNull\":true,\"required\":true,\"type\":\"object\"},\"required_pull_request_reviews.dismiss_stale_reviews\":{\"type\":\"boolean\"},\"required_pull_request_reviews.dismissal_restrictions\":{\"type\":\"object\"},\"required_pull_request_reviews.dismissal_restrictions.teams\":{\"type\":\"string[]\"},\"required_pull_request_reviews.dismissal_restrictions.users\":{\"type\":\"string[]\"},\"required_pull_request_reviews.require_code_owner_reviews\":{\"type\":\"boolean\"},\"required_pull_request_reviews.required_approving_review_count\":{\"type\":\"integer\"},\"required_status_checks\":{\"allowNull\":true,\"required\":true,\"type\":\"object\"},\"required_status_checks.contexts\":{\"required\":true,\"type\":\"string[]\"},\"required_status_checks.strict\":{\"required\":true,\"type\":\"boolean\"},\"restrictions\":{\"allowNull\":true,\"required\":true,\"type\":\"object\"},\"restrictions.apps\":{\"type\":\"string[]\"},\"restrictions.teams\":{\"required\":true,\"type\":\"string[]\"},\"restrictions.users\":{\"required\":true,\"type\":\"string[]\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection\"},\"updateCommitComment\":{\"method\":\"PATCH\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/comments/:comment_id\"},\"updateFile\":{\"deprecated\":\"octokit.repos.updateFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)\",\"method\":\"PUT\",\"params\":{\"author\":{\"type\":\"object\"},\"author.email\":{\"required\":true,\"type\":\"string\"},\"author.name\":{\"required\":true,\"type\":\"string\"},\"branch\":{\"type\":\"string\"},\"committer\":{\"type\":\"object\"},\"committer.email\":{\"required\":true,\"type\":\"string\"},\"committer.name\":{\"required\":true,\"type\":\"string\"},\"content\":{\"required\":true,\"type\":\"string\"},\"message\":{\"required\":true,\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"path\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"sha\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/contents/:path\"},\"updateHook\":{\"method\":\"PATCH\",\"params\":{\"active\":{\"type\":\"boolean\"},\"add_events\":{\"type\":\"string[]\"},\"config\":{\"type\":\"object\"},\"config.content_type\":{\"type\":\"string\"},\"config.insecure_ssl\":{\"type\":\"string\"},\"config.secret\":{\"type\":\"string\"},\"config.url\":{\"required\":true,\"type\":\"string\"},\"events\":{\"type\":\"string[]\"},\"hook_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"remove_events\":{\"type\":\"string[]\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/hooks/:hook_id\"},\"updateInformationAboutPagesSite\":{\"method\":\"PUT\",\"params\":{\"cname\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"source\":{\"enum\":[\"\\\"gh-pages\\\"\",\"\\\"master\\\"\",\"\\\"master /docs\\\"\"],\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/pages\"},\"updateInvitation\":{\"method\":\"PATCH\",\"params\":{\"invitation_id\":{\"required\":true,\"type\":\"integer\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"permissions\":{\"enum\":[\"read\",\"write\",\"admin\"],\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/invitations/:invitation_id\"},\"updateProtectedBranchPullRequestReviewEnforcement\":{\"method\":\"PATCH\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"dismiss_stale_reviews\":{\"type\":\"boolean\"},\"dismissal_restrictions\":{\"type\":\"object\"},\"dismissal_restrictions.teams\":{\"type\":\"string[]\"},\"dismissal_restrictions.users\":{\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"require_code_owner_reviews\":{\"type\":\"boolean\"},\"required_approving_review_count\":{\"type\":\"integer\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews\"},\"updateProtectedBranchRequiredStatusChecks\":{\"method\":\"PATCH\",\"params\":{\"branch\":{\"required\":true,\"type\":\"string\"},\"contexts\":{\"type\":\"string[]\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"strict\":{\"type\":\"boolean\"}},\"url\":\"/repos/:owner/:repo/branches/:branch/protection/required_status_checks\"},\"updateRelease\":{\"method\":\"PATCH\",\"params\":{\"body\":{\"type\":\"string\"},\"draft\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"prerelease\":{\"type\":\"boolean\"},\"release_id\":{\"required\":true,\"type\":\"integer\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"tag_name\":{\"type\":\"string\"},\"target_commitish\":{\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/:release_id\"},\"updateReleaseAsset\":{\"method\":\"PATCH\",\"params\":{\"asset_id\":{\"required\":true,\"type\":\"integer\"},\"label\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/repos/:owner/:repo/releases/assets/:asset_id\"},\"uploadReleaseAsset\":{\"method\":\"POST\",\"params\":{\"file\":{\"mapTo\":\"data\",\"required\":true,\"type\":\"string | object\"},\"headers\":{\"required\":true,\"type\":\"object\"},\"headers.content-length\":{\"required\":true,\"type\":\"integer\"},\"headers.content-type\":{\"required\":true,\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"url\":{\"required\":true,\"type\":\"string\"}},\"url\":\":url\"}},\"search\":{\"code\":{\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"indexed\"],\"type\":\"string\"}},\"url\":\"/search/code\"},\"commits\":{\"headers\":{\"accept\":\"application/vnd.github.cloak-preview+json\"},\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"author-date\",\"committer-date\"],\"type\":\"string\"}},\"url\":\"/search/commits\"},\"issues\":{\"deprecated\":\"octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)\",\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"comments\",\"reactions\",\"reactions-+1\",\"reactions--1\",\"reactions-smile\",\"reactions-thinking_face\",\"reactions-heart\",\"reactions-tada\",\"interactions\",\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/search/issues\"},\"issuesAndPullRequests\":{\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"comments\",\"reactions\",\"reactions-+1\",\"reactions--1\",\"reactions-smile\",\"reactions-thinking_face\",\"reactions-heart\",\"reactions-tada\",\"interactions\",\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/search/issues\"},\"labels\":{\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"},\"q\":{\"required\":true,\"type\":\"string\"},\"repository_id\":{\"required\":true,\"type\":\"integer\"},\"sort\":{\"enum\":[\"created\",\"updated\"],\"type\":\"string\"}},\"url\":\"/search/labels\"},\"repos\":{\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"stars\",\"forks\",\"help-wanted-issues\",\"updated\"],\"type\":\"string\"}},\"url\":\"/search/repositories\"},\"topics\":{\"method\":\"GET\",\"params\":{\"q\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/search/topics\"},\"users\":{\"method\":\"GET\",\"params\":{\"order\":{\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"q\":{\"required\":true,\"type\":\"string\"},\"sort\":{\"enum\":[\"followers\",\"repositories\",\"joined\"],\"type\":\"string\"}},\"url\":\"/search/users\"}},\"teams\":{\"addMember\":{\"deprecated\":\"octokit.teams.addMember() is deprecated, see https://developer.github.com/v3/teams/members/#add-team-member\",\"method\":\"PUT\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/members/:username\"},\"addOrUpdateMembership\":{\"method\":\"PUT\",\"params\":{\"role\":{\"enum\":[\"member\",\"maintainer\"],\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/memberships/:username\"},\"addOrUpdateProject\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"PUT\",\"params\":{\"permission\":{\"enum\":[\"read\",\"write\",\"admin\"],\"type\":\"string\"},\"project_id\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/projects/:project_id\"},\"addOrUpdateRepo\":{\"method\":\"PUT\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"permission\":{\"enum\":[\"pull\",\"push\",\"admin\"],\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/repos/:owner/:repo\"},\"checkManagesRepo\":{\"method\":\"GET\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/repos/:owner/:repo\"},\"create\":{\"method\":\"POST\",\"params\":{\"description\":{\"type\":\"string\"},\"maintainers\":{\"type\":\"string[]\"},\"name\":{\"required\":true,\"type\":\"string\"},\"org\":{\"required\":true,\"type\":\"string\"},\"parent_team_id\":{\"type\":\"integer\"},\"permission\":{\"enum\":[\"pull\",\"push\",\"admin\"],\"type\":\"string\"},\"privacy\":{\"enum\":[\"secret\",\"closed\"],\"type\":\"string\"},\"repo_names\":{\"type\":\"string[]\"}},\"url\":\"/orgs/:org/teams\"},\"createDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"private\":{\"type\":\"boolean\"},\"team_id\":{\"required\":true,\"type\":\"integer\"},\"title\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/discussions\"},\"createDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"POST\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments\"},\"delete\":{\"method\":\"DELETE\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id\"},\"deleteDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"DELETE\",\"params\":{\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number\"},\"deleteDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"DELETE\",\"params\":{\"comment_number\":{\"required\":true,\"type\":\"integer\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments/:comment_number\"},\"get\":{\"method\":\"GET\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id\"},\"getByName\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"team_slug\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/orgs/:org/teams/:team_slug\"},\"getDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"GET\",\"params\":{\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number\"},\"getDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"GET\",\"params\":{\"comment_number\":{\"required\":true,\"type\":\"integer\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments/:comment_number\"},\"getMember\":{\"deprecated\":\"octokit.teams.getMember() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-member\",\"method\":\"GET\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/members/:username\"},\"getMembership\":{\"method\":\"GET\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/memberships/:username\"},\"list\":{\"method\":\"GET\",\"params\":{\"org\":{\"required\":true,\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/orgs/:org/teams\"},\"listChild\":{\"headers\":{\"accept\":\"application/vnd.github.hellcat-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/teams\"},\"listDiscussionComments\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments\"},\"listDiscussions\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"GET\",\"params\":{\"direction\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"},\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions\"},\"listForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/teams\"},\"listMembers\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"role\":{\"enum\":[\"member\",\"maintainer\",\"all\"],\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/members\"},\"listPendingInvitations\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/invitations\"},\"listProjects\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/projects\"},\"listRepos\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/repos\"},\"removeMember\":{\"deprecated\":\"octokit.teams.removeMember() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-member\",\"method\":\"DELETE\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/members/:username\"},\"removeMembership\":{\"method\":\"DELETE\",\"params\":{\"team_id\":{\"required\":true,\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/teams/:team_id/memberships/:username\"},\"removeProject\":{\"method\":\"DELETE\",\"params\":{\"project_id\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/projects/:project_id\"},\"removeRepo\":{\"method\":\"DELETE\",\"params\":{\"owner\":{\"required\":true,\"type\":\"string\"},\"repo\":{\"required\":true,\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/repos/:owner/:repo\"},\"reviewProject\":{\"headers\":{\"accept\":\"application/vnd.github.inertia-preview+json\"},\"method\":\"GET\",\"params\":{\"project_id\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/projects/:project_id\"},\"update\":{\"method\":\"PATCH\",\"params\":{\"description\":{\"type\":\"string\"},\"name\":{\"required\":true,\"type\":\"string\"},\"parent_team_id\":{\"type\":\"integer\"},\"permission\":{\"enum\":[\"pull\",\"push\",\"admin\"],\"type\":\"string\"},\"privacy\":{\"enum\":[\"secret\",\"closed\"],\"type\":\"string\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id\"},\"updateDiscussion\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"PATCH\",\"params\":{\"body\":{\"type\":\"string\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"},\"title\":{\"type\":\"string\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number\"},\"updateDiscussionComment\":{\"headers\":{\"accept\":\"application/vnd.github.echo-preview+json\"},\"method\":\"PATCH\",\"params\":{\"body\":{\"required\":true,\"type\":\"string\"},\"comment_number\":{\"required\":true,\"type\":\"integer\"},\"discussion_number\":{\"required\":true,\"type\":\"integer\"},\"team_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/teams/:team_id/discussions/:discussion_number/comments/:comment_number\"}},\"users\":{\"addEmails\":{\"method\":\"POST\",\"params\":{\"emails\":{\"required\":true,\"type\":\"string[]\"}},\"url\":\"/user/emails\"},\"block\":{\"method\":\"PUT\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/blocks/:username\"},\"checkBlocked\":{\"method\":\"GET\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/blocks/:username\"},\"checkFollowing\":{\"method\":\"GET\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/following/:username\"},\"checkFollowingForUser\":{\"method\":\"GET\",\"params\":{\"target_user\":{\"required\":true,\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/following/:target_user\"},\"createGpgKey\":{\"method\":\"POST\",\"params\":{\"armored_public_key\":{\"type\":\"string\"}},\"url\":\"/user/gpg_keys\"},\"createPublicKey\":{\"method\":\"POST\",\"params\":{\"key\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"url\":\"/user/keys\"},\"deleteEmails\":{\"method\":\"DELETE\",\"params\":{\"emails\":{\"required\":true,\"type\":\"string[]\"}},\"url\":\"/user/emails\"},\"deleteGpgKey\":{\"method\":\"DELETE\",\"params\":{\"gpg_key_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/gpg_keys/:gpg_key_id\"},\"deletePublicKey\":{\"method\":\"DELETE\",\"params\":{\"key_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/keys/:key_id\"},\"follow\":{\"method\":\"PUT\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/following/:username\"},\"getAuthenticated\":{\"method\":\"GET\",\"params\":{},\"url\":\"/user\"},\"getByUsername\":{\"method\":\"GET\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username\"},\"getContextForUser\":{\"headers\":{\"accept\":\"application/vnd.github.hagar-preview+json\"},\"method\":\"GET\",\"params\":{\"subject_id\":{\"type\":\"string\"},\"subject_type\":{\"enum\":[\"organization\",\"repository\",\"issue\",\"pull_request\"],\"type\":\"string\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/hovercard\"},\"getGpgKey\":{\"method\":\"GET\",\"params\":{\"gpg_key_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/gpg_keys/:gpg_key_id\"},\"getPublicKey\":{\"method\":\"GET\",\"params\":{\"key_id\":{\"required\":true,\"type\":\"integer\"}},\"url\":\"/user/keys/:key_id\"},\"list\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"since\":{\"type\":\"string\"}},\"url\":\"/users\"},\"listBlocked\":{\"method\":\"GET\",\"params\":{},\"url\":\"/user/blocks\"},\"listEmails\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/emails\"},\"listFollowersForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/followers\"},\"listFollowersForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/followers\"},\"listFollowingForAuthenticatedUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/following\"},\"listFollowingForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/following\"},\"listGpgKeys\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/gpg_keys\"},\"listGpgKeysForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/gpg_keys\"},\"listPublicEmails\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/public_emails\"},\"listPublicKeys\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"}},\"url\":\"/user/keys\"},\"listPublicKeysForUser\":{\"method\":\"GET\",\"params\":{\"page\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/users/:username/keys\"},\"togglePrimaryEmailVisibility\":{\"method\":\"PATCH\",\"params\":{\"email\":{\"required\":true,\"type\":\"string\"},\"visibility\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/email/visibility\"},\"unblock\":{\"method\":\"DELETE\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/blocks/:username\"},\"unfollow\":{\"method\":\"DELETE\",\"params\":{\"username\":{\"required\":true,\"type\":\"string\"}},\"url\":\"/user/following/:username\"},\"updateAuthenticated\":{\"method\":\"PATCH\",\"params\":{\"bio\":{\"type\":\"string\"},\"blog\":{\"type\":\"string\"},\"company\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"hireable\":{\"type\":\"boolean\"},\"location\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"url\":\"/user\"}}}");

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = octokitValidate;

const validate = __webpack_require__(98);

function octokitValidate(octokit) {
  octokit.hook.before("request", validate.bind(null, octokit));
}


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = validate;

const { RequestError } = __webpack_require__(64);
const get = __webpack_require__(99);
const set = __webpack_require__(100);

function validate(octokit, options) {
  if (!options.request.validate) {
    return;
  }
  const { validate: params } = options.request;

  Object.keys(params).forEach(parameterName => {
    const parameter = get(params, parameterName);

    const expectedType = parameter.type;
    let parentParameterName;
    let parentValue;
    let parentParamIsPresent = true;
    let parentParameterIsArray = false;

    if (/\./.test(parameterName)) {
      parentParameterName = parameterName.replace(/\.[^.]+$/, "");
      parentParameterIsArray = parentParameterName.slice(-2) === "[]";
      if (parentParameterIsArray) {
        parentParameterName = parentParameterName.slice(0, -2);
      }
      parentValue = get(options, parentParameterName);
      parentParamIsPresent =
        parentParameterName === "headers" ||
        (typeof parentValue === "object" && parentValue !== null);
    }

    const values = parentParameterIsArray
      ? (get(options, parentParameterName) || []).map(
          value => value[parameterName.split(/\./).pop()]
        )
      : [get(options, parameterName)];

    values.forEach((value, i) => {
      const valueIsPresent = typeof value !== "undefined";
      const valueIsNull = value === null;
      const currentParameterName = parentParameterIsArray
        ? parameterName.replace(/\[\]/, `[${i}]`)
        : parameterName;

      if (!parameter.required && !valueIsPresent) {
        return;
      }

      // if the parent parameter is of type object but allows null
      // then the child parameters can be ignored
      if (!parentParamIsPresent) {
        return;
      }

      if (parameter.allowNull && valueIsNull) {
        return;
      }

      if (!parameter.allowNull && valueIsNull) {
        throw new RequestError(
          `'${currentParameterName}' cannot be null`,
          400,
          {
            request: options
          }
        );
      }

      if (parameter.required && !valueIsPresent) {
        throw new RequestError(
          `Empty value for parameter '${currentParameterName}': ${JSON.stringify(
            value
          )}`,
          400,
          {
            request: options
          }
        );
      }

      // parse to integer before checking for enum
      // so that string "1" will match enum with number 1
      if (expectedType === "integer") {
        const unparsedValue = value;
        value = parseInt(value, 10);
        if (isNaN(value)) {
          throw new RequestError(
            `Invalid value for parameter '${currentParameterName}': ${JSON.stringify(
              unparsedValue
            )} is NaN`,
            400,
            {
              request: options
            }
          );
        }
      }

      if (parameter.enum && parameter.enum.indexOf(String(value)) === -1) {
        throw new RequestError(
          `Invalid value for parameter '${currentParameterName}': ${JSON.stringify(
            value
          )}`,
          400,
          {
            request: options
          }
        );
      }

      if (parameter.validation) {
        const regex = new RegExp(parameter.validation);
        if (!regex.test(value)) {
          throw new RequestError(
            `Invalid value for parameter '${currentParameterName}': ${JSON.stringify(
              value
            )}`,
            400,
            {
              request: options
            }
          );
        }
      }

      if (expectedType === "object" && typeof value === "string") {
        try {
          value = JSON.parse(value);
        } catch (exception) {
          throw new RequestError(
            `JSON parse error of value for parameter '${currentParameterName}': ${JSON.stringify(
              value
            )}`,
            400,
            {
              request: options
            }
          );
        }
      }

      set(options, parameter.mapTo || currentParameterName, value);
    });
  });

  return options;
}


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = paginationMethodsPlugin

function paginationMethodsPlugin (octokit) {
  octokit.getFirstPage = __webpack_require__(102).bind(null, octokit)
  octokit.getLastPage = __webpack_require__(107).bind(null, octokit)
  octokit.getNextPage = __webpack_require__(108).bind(null, octokit)
  octokit.getPreviousPage = __webpack_require__(109).bind(null, octokit)
  octokit.hasFirstPage = __webpack_require__(110)
  octokit.hasLastPage = __webpack_require__(111)
  octokit.hasNextPage = __webpack_require__(112)
  octokit.hasPreviousPage = __webpack_require__(113)
}


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getFirstPage

const getPage = __webpack_require__(103)

function getFirstPage (octokit, link, headers) {
  return getPage(octokit, link, 'first', headers)
}


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getPage

const deprecate = __webpack_require__(104)
const getPageLinks = __webpack_require__(105)
const HttpError = __webpack_require__(106)

function getPage (octokit, link, which, headers) {
  deprecate(`octokit.get${which.charAt(0).toUpperCase() + which.slice(1)}Page() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`)
  const url = getPageLinks(link)[which]

  if (!url) {
    const urlError = new HttpError(`No ${which} page found`, 404)
    return Promise.reject(urlError)
  }

  const requestOptions = {
    url,
    headers: applyAcceptHeader(link, headers)
  }

  const promise = octokit.request(requestOptions)

  return promise
}

function applyAcceptHeader (res, headers) {
  const previous = res.headers && res.headers['x-github-media-type']

  if (!previous || (headers && headers.accept)) {
    return headers
  }
  headers = headers || {}
  headers.accept = 'application/vnd.' + previous
    .replace('; param=', '.')
    .replace('; format=', '+')

  return headers
}


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = deprecate

const loggedMessages = {}

function deprecate (message) {
  if (loggedMessages[message]) {
    return
  }

  console.warn(`DEPRECATED (@octokit/rest): ${message}`)
  loggedMessages[message] = 1
}


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = getPageLinks

function getPageLinks (link) {
  link = link.link || link.headers.link || ''

  const links = {}

  // link format:
  // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
  link.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (m, uri, type) => {
    links[type] = uri
  })

  return links
}


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = class HttpError extends Error {
  constructor (message, code, headers) {
    super(message)

    // Maintains proper stack trace (only available on V8)
    /* istanbul ignore next */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }

    this.name = 'HttpError'
    this.code = code
    this.headers = headers
  }
}


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getLastPage

const getPage = __webpack_require__(103)

function getLastPage (octokit, link, headers) {
  return getPage(octokit, link, 'last', headers)
}


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getNextPage

const getPage = __webpack_require__(103)

function getNextPage (octokit, link, headers) {
  return getPage(octokit, link, 'next', headers)
}


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getPreviousPage

const getPage = __webpack_require__(103)

function getPreviousPage (octokit, link, headers) {
  return getPage(octokit, link, 'prev', headers)
}


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasFirstPage

const deprecate = __webpack_require__(104)
const getPageLinks = __webpack_require__(105)

function hasFirstPage (link) {
  deprecate(`octokit.hasFirstPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`)
  return getPageLinks(link).first
}


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasLastPage

const deprecate = __webpack_require__(104)
const getPageLinks = __webpack_require__(105)

function hasLastPage (link) {
  deprecate(`octokit.hasLastPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`)
  return getPageLinks(link).last
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasNextPage

const deprecate = __webpack_require__(104)
const getPageLinks = __webpack_require__(105)

function hasNextPage (link) {
  deprecate(`octokit.hasNextPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`)
  return getPageLinks(link).next
}


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasPreviousPage

const deprecate = __webpack_require__(104)
const getPageLinks = __webpack_require__(105)

function hasPreviousPage (link) {
  deprecate(`octokit.hasPreviousPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`)
  return getPageLinks(link).prev
}


/***/ })
/******/ ]);