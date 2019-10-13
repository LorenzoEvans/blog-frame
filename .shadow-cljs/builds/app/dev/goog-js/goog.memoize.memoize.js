["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/memoize/memoize.js"],"~:js","goog.provide(\"goog.memoize\");\n/**\n * @param {Function} f\n * @param {function(number,Object):string=} opt_serializer\n * @return {!Function}\n */\ngoog.memoize = function(f, opt_serializer) {\n  var serializer = opt_serializer || goog.memoize.simpleSerializer;\n  return (/**\n   * @this {Object}\n   * @return {?}\n   */\n  function() {\n    if (goog.memoize.ENABLE_MEMOIZE) {\n      var thisOrGlobal = this || goog.global;\n      var cache = thisOrGlobal[goog.memoize.CACHE_PROPERTY_] || (thisOrGlobal[goog.memoize.CACHE_PROPERTY_] = {});\n      var key = serializer(goog.getUid(f), arguments);\n      return cache.hasOwnProperty(key) ? cache[key] : cache[key] = f.apply(this, arguments);\n    } else {\n      return f.apply(this, arguments);\n    }\n  });\n};\n/** @define {boolean} */ goog.define(\"goog.memoize.ENABLE_MEMOIZE\", true);\n/**\n * @param {Object} cacheOwner\n */\ngoog.memoize.clearCache = function(cacheOwner) {\n  cacheOwner[goog.memoize.CACHE_PROPERTY_] = {};\n};\n/** @private @type {string} */ goog.memoize.CACHE_PROPERTY_ = \"closure_memoize_cache_\";\n/**\n * @param {number} functionUid\n * @param {?{length:number}} args\n * @return {string}\n */\ngoog.memoize.simpleSerializer = function(functionUid, args) {\n  var context = [functionUid];\n  for (var i = args.length - 1; i >= 0; --i) {\n    context.push(typeof args[i], args[i]);\n  }\n  return context.join(\"\\x0B\");\n};\n","~:source","// Copyright 2008 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Tool for caching the result of expensive deterministic\n * functions.\n *\n * @see http://en.wikipedia.org/wiki/Memoization\n *\n */\n\ngoog.provide('goog.memoize');\n\n\n/**\n * Decorator around functions that caches the inner function's return values.\n *\n * To cache parameterless functions, see goog.functions.cacheReturnValue.\n *\n * @param {Function} f The function to wrap. Its return value may only depend\n *     on its arguments and 'this' context. There may be further restrictions\n *     on the arguments depending on the capabilities of the serializer used.\n * @param {function(number, Object): string=} opt_serializer A function to\n *     serialize f's arguments. It must have the same signature as\n *     goog.memoize.simpleSerializer. It defaults to that function.\n * @return {!Function} The wrapped function.\n */\ngoog.memoize = function(f, opt_serializer) {\n  var serializer = opt_serializer || goog.memoize.simpleSerializer;\n\n  return (/**\n           * @this {Object} The object whose function is being wrapped.\n           * @return {?} the return value of the original function.\n           */\n          function() {\n            if (goog.memoize.ENABLE_MEMOIZE) {\n              // In the strict mode, when this function is called as a global\n              // function, the value of 'this' is undefined instead of a global\n              // object. See:\n              // https://developer.mozilla.org/en/JavaScript/Strict_mode\n              // Otherwise, if memoize wraps a method of an object, `this` will\n              // be the context object, causing memoize to cache its values on\n              // the object instance, instead of on the global object.\n              // This (ha!) is a very surprising API, but retained for backwards\n              // compatibility.\n              var thisOrGlobal = this || goog.global;\n              // Maps the serialized list of args to the corresponding return\n              // value.\n              var cache = thisOrGlobal[goog.memoize.CACHE_PROPERTY_] ||\n                  (thisOrGlobal[goog.memoize.CACHE_PROPERTY_] = {});\n              var key = serializer(goog.getUid(f), arguments);\n              return cache.hasOwnProperty(key) ?\n                  cache[key] :\n                  (cache[key] = f.apply(this, arguments));\n            } else {\n              return f.apply(this, arguments);\n            }\n          });\n};\n\n\n/**\n * @define {boolean} Flag to disable memoization in unit tests.\n */\ngoog.define('goog.memoize.ENABLE_MEMOIZE', true);\n\n\n/**\n * Clears the memoization cache on the given object.\n * @param {Object} cacheOwner The owner of the cache. This is the `this`\n *     context of the memoized function.\n */\ngoog.memoize.clearCache = function(cacheOwner) {\n  cacheOwner[goog.memoize.CACHE_PROPERTY_] = {};\n};\n\n\n/**\n * Name of the property used by goog.memoize as cache.\n * @type {string}\n * @private\n */\ngoog.memoize.CACHE_PROPERTY_ = 'closure_memoize_cache_';\n\n\n/**\n * Simple and fast argument serializer function for goog.memoize.\n * Supports string, number, boolean, null and undefined arguments. Doesn't\n * support \\x0B characters in the strings.\n * @param {number} functionUid Unique identifier of the function whose result\n *     is cached.\n * @param {?{length:number}} args The arguments that the function to memoize is\n *     called with. Note: it is an array-like object, because it supports\n *     indexing and has the length property.\n * @return {string} The list of arguments with type information concatenated\n *     with the functionUid argument, serialized as \\x0B-separated string.\n */\ngoog.memoize.simpleSerializer = function(functionUid, args) {\n  var context = [functionUid];\n  for (var i = args.length - 1; i >= 0; --i) {\n    context.push(typeof args[i], args[i]);\n  }\n  return context.join('\\x0B');\n};\n","~:compiled-at",1570936005207,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.memoize.memoize.js\",\n\"lineCount\":44,\n\"mappings\":\"AAsBAA,IAAAC,QAAA,CAAa,cAAb,CAAA;AAgBA;;;;;AAAAD,IAAAE,QAAA,GAAeC,QAAQ,CAACC,CAAD,EAAIC,cAAJ,CAAoB;AACzC,MAAIC,aAAaD,cAAbC,IAA+BN,IAAAE,QAAAK,iBAAnC;AAEA;;;;AAIQ,UAAQ,EAAG;AACT,QAAIP,IAAAE,QAAAM,eAAJ,CAAiC;AAU/B,UAAIC,eAAe,IAAfA,IAAuBT,IAAAU,OAA3B;AAGA,UAAIC,QAAQF,YAAA,CAAaT,IAAAE,QAAAU,gBAAb,CAARD,KACCF,YAAA,CAAaT,IAAAE,QAAAU,gBAAb,CADDD,GAC8C,EAD9CA,CAAJ;AAEA,UAAIE,MAAMP,UAAA,CAAWN,IAAAc,OAAA,CAAYV,CAAZ,CAAX,EAA2BW,SAA3B,CAAV;AACA,aAAOJ,KAAAK,eAAA,CAAqBH,GAArB,CAAA,GACHF,KAAA,CAAME,GAAN,CADG,GAEFF,KAAA,CAAME,GAAN,CAFE,GAEWT,CAAAa,MAAA,CAAQ,IAAR,EAAcF,SAAd,CAFlB;AAhB+B,KAAjC;AAoBE,aAAOX,CAAAa,MAAA,CAAQ,IAAR,EAAcF,SAAd,CAAP;AApBF;AADS,GAJnB;AAHyC,CAA3C;AAqCA,yBAAAf,IAAAkB,OAAA,CAAY,6BAAZ,EAA2C,IAA3C,CAAA;AAQA;;;AAAAlB,IAAAE,QAAAiB,WAAA,GAA0BC,QAAQ,CAACC,UAAD,CAAa;AAC7CA,YAAA,CAAWrB,IAAAE,QAAAU,gBAAX,CAAA,GAA2C,EAA3C;AAD6C,CAA/C;AAUA,+BAAAZ,IAAAE,QAAAU,gBAAA,GAA+B,wBAA/B;AAeA;;;;;AAAAZ,IAAAE,QAAAK,iBAAA,GAAgCe,QAAQ,CAACC,WAAD,EAAcC,IAAd,CAAoB;AAC1D,MAAIC,UAAU,CAACF,WAAD,CAAd;AACA,OAAK,IAAIG,IAAIF,IAAAG,OAAJD,GAAkB,CAA3B,EAA8BA,CAA9B,IAAmC,CAAnC,EAAsC,EAAEA,CAAxC;AACED,WAAAG,KAAA,CAAa,MAAOJ,KAAA,CAAKE,CAAL,CAApB,EAA6BF,IAAA,CAAKE,CAAL,CAA7B,CAAA;AADF;AAGA,SAAOD,OAAAI,KAAA,CAAa,MAAb,CAAP;AAL0D,CAA5D;;\",\n\"sources\":[\"goog/memoize/memoize.js\"],\n\"sourcesContent\":[\"// Copyright 2008 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Tool for caching the result of expensive deterministic\\n * functions.\\n *\\n * @see http://en.wikipedia.org/wiki/Memoization\\n *\\n */\\n\\ngoog.provide('goog.memoize');\\n\\n\\n/**\\n * Decorator around functions that caches the inner function's return values.\\n *\\n * To cache parameterless functions, see goog.functions.cacheReturnValue.\\n *\\n * @param {Function} f The function to wrap. Its return value may only depend\\n *     on its arguments and 'this' context. There may be further restrictions\\n *     on the arguments depending on the capabilities of the serializer used.\\n * @param {function(number, Object): string=} opt_serializer A function to\\n *     serialize f's arguments. It must have the same signature as\\n *     goog.memoize.simpleSerializer. It defaults to that function.\\n * @return {!Function} The wrapped function.\\n */\\ngoog.memoize = function(f, opt_serializer) {\\n  var serializer = opt_serializer || goog.memoize.simpleSerializer;\\n\\n  return (/**\\n           * @this {Object} The object whose function is being wrapped.\\n           * @return {?} the return value of the original function.\\n           */\\n          function() {\\n            if (goog.memoize.ENABLE_MEMOIZE) {\\n              // In the strict mode, when this function is called as a global\\n              // function, the value of 'this' is undefined instead of a global\\n              // object. See:\\n              // https://developer.mozilla.org/en/JavaScript/Strict_mode\\n              // Otherwise, if memoize wraps a method of an object, `this` will\\n              // be the context object, causing memoize to cache its values on\\n              // the object instance, instead of on the global object.\\n              // This (ha!) is a very surprising API, but retained for backwards\\n              // compatibility.\\n              var thisOrGlobal = this || goog.global;\\n              // Maps the serialized list of args to the corresponding return\\n              // value.\\n              var cache = thisOrGlobal[goog.memoize.CACHE_PROPERTY_] ||\\n                  (thisOrGlobal[goog.memoize.CACHE_PROPERTY_] = {});\\n              var key = serializer(goog.getUid(f), arguments);\\n              return cache.hasOwnProperty(key) ?\\n                  cache[key] :\\n                  (cache[key] = f.apply(this, arguments));\\n            } else {\\n              return f.apply(this, arguments);\\n            }\\n          });\\n};\\n\\n\\n/**\\n * @define {boolean} Flag to disable memoization in unit tests.\\n */\\ngoog.define('goog.memoize.ENABLE_MEMOIZE', true);\\n\\n\\n/**\\n * Clears the memoization cache on the given object.\\n * @param {Object} cacheOwner The owner of the cache. This is the `this`\\n *     context of the memoized function.\\n */\\ngoog.memoize.clearCache = function(cacheOwner) {\\n  cacheOwner[goog.memoize.CACHE_PROPERTY_] = {};\\n};\\n\\n\\n/**\\n * Name of the property used by goog.memoize as cache.\\n * @type {string}\\n * @private\\n */\\ngoog.memoize.CACHE_PROPERTY_ = 'closure_memoize_cache_';\\n\\n\\n/**\\n * Simple and fast argument serializer function for goog.memoize.\\n * Supports string, number, boolean, null and undefined arguments. Doesn't\\n * support \\\\x0B characters in the strings.\\n * @param {number} functionUid Unique identifier of the function whose result\\n *     is cached.\\n * @param {?{length:number}} args The arguments that the function to memoize is\\n *     called with. Note: it is an array-like object, because it supports\\n *     indexing and has the length property.\\n * @return {string} The list of arguments with type information concatenated\\n *     with the functionUid argument, serialized as \\\\x0B-separated string.\\n */\\ngoog.memoize.simpleSerializer = function(functionUid, args) {\\n  var context = [functionUid];\\n  for (var i = args.length - 1; i >= 0; --i) {\\n    context.push(typeof args[i], args[i]);\\n  }\\n  return context.join('\\\\x0B');\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"memoize\",\"goog.memoize\",\"f\",\"opt_serializer\",\"serializer\",\"simpleSerializer\",\"ENABLE_MEMOIZE\",\"thisOrGlobal\",\"global\",\"cache\",\"CACHE_PROPERTY_\",\"key\",\"getUid\",\"arguments\",\"hasOwnProperty\",\"apply\",\"define\",\"clearCache\",\"goog.memoize.clearCache\",\"cacheOwner\",\"goog.memoize.simpleSerializer\",\"functionUid\",\"args\",\"context\",\"i\",\"length\",\"push\",\"join\"]\n}\n"]