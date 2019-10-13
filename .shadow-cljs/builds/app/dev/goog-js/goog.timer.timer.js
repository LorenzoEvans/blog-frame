["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/timer/timer.js"],"~:js","goog.provide(\"goog.Timer\");\ngoog.require(\"goog.Promise\");\ngoog.require(\"goog.events.EventTarget\");\n/**\n * @constructor\n * @extends {goog.events.EventTarget}\n * @param {number=} opt_interval\n * @param {Object=} opt_timerObject\n */\ngoog.Timer = function(opt_interval, opt_timerObject) {\n  goog.events.EventTarget.call(this);\n  /** @private @type {number} */ this.interval_ = opt_interval || 1;\n  /** @private @type {{setTimeout:!Function,clearTimeout:!Function}} */ this.timerObject_ = /** @type {{setTimeout,clearTimeout}} */ (opt_timerObject || goog.Timer.defaultTimerObject);\n  /** @private @const @type {Function} */ this.boundTick_ = goog.bind(this.tick_, this);\n  /** @private @type {number} */ this.last_ = goog.now();\n};\ngoog.inherits(goog.Timer, goog.events.EventTarget);\n/** @private @const @type {number} */ goog.Timer.MAX_TIMEOUT_ = 2147483647;\n/** @private @const @type {number} */ goog.Timer.INVALID_TIMEOUT_ID_ = -1;\n/** @type {boolean} */ goog.Timer.prototype.enabled = false;\n/** @type {{setTimeout,clearTimeout}} */ goog.Timer.defaultTimerObject = goog.global;\n/** @type {number} */ goog.Timer.intervalScale = 0.8;\n/** @private @type {?number} */ goog.Timer.prototype.timer_ = null;\n/**\n * @return {number}\n */\ngoog.Timer.prototype.getInterval = function() {\n  return this.interval_;\n};\n/**\n * @param {number} interval\n */\ngoog.Timer.prototype.setInterval = function(interval) {\n  this.interval_ = interval;\n  if (this.timer_ && this.enabled) {\n    this.stop();\n    this.start();\n  } else {\n    if (this.timer_) {\n      this.stop();\n    }\n  }\n};\n/** @private */ goog.Timer.prototype.tick_ = function() {\n  if (this.enabled) {\n    var elapsed = goog.now() - this.last_;\n    if (elapsed > 0 && elapsed < this.interval_ * goog.Timer.intervalScale) {\n      this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - elapsed);\n      return;\n    }\n    if (this.timer_) {\n      this.timerObject_.clearTimeout(this.timer_);\n      this.timer_ = null;\n    }\n    this.dispatchTick();\n    if (this.enabled) {\n      this.stop();\n      this.start();\n    }\n  }\n};\ngoog.Timer.prototype.dispatchTick = function() {\n  this.dispatchEvent(goog.Timer.TICK);\n};\ngoog.Timer.prototype.start = function() {\n  this.enabled = true;\n  if (!this.timer_) {\n    this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);\n    this.last_ = goog.now();\n  }\n};\ngoog.Timer.prototype.stop = function() {\n  this.enabled = false;\n  if (this.timer_) {\n    this.timerObject_.clearTimeout(this.timer_);\n    this.timer_ = null;\n  }\n};\n/** @override */ goog.Timer.prototype.disposeInternal = function() {\n  goog.Timer.superClass_.disposeInternal.call(this);\n  this.stop();\n  delete this.timerObject_;\n};\n/** @const */ goog.Timer.TICK = \"tick\";\n/**\n * @param {(function(this:SCOPE)|{handleEvent:function()}|null)} listener\n * @param {number=} opt_delay\n * @param {SCOPE=} opt_handler\n * @return {number}\n * @template SCOPE\n */\ngoog.Timer.callOnce = function(listener, opt_delay, opt_handler) {\n  if (goog.isFunction(listener)) {\n    if (opt_handler) {\n      listener = goog.bind(listener, opt_handler);\n    }\n  } else {\n    if (listener && typeof listener.handleEvent == \"function\") {\n      listener = goog.bind(listener.handleEvent, listener);\n    } else {\n      throw new Error(\"Invalid listener argument\");\n    }\n  }\n  if (Number(opt_delay) > goog.Timer.MAX_TIMEOUT_) {\n    return goog.Timer.INVALID_TIMEOUT_ID_;\n  } else {\n    return goog.Timer.defaultTimerObject.setTimeout(listener, opt_delay || 0);\n  }\n};\n/**\n * @param {?number} timerId\n */\ngoog.Timer.clear = function(timerId) {\n  goog.Timer.defaultTimerObject.clearTimeout(timerId);\n};\n/**\n * @param {number} delay\n * @param {(RESULT|goog.Thenable<RESULT>|Thenable)=} opt_result\n * @return {!goog.Promise<RESULT>}\n * @template RESULT\n */\ngoog.Timer.promise = function(delay, opt_result) {\n  var timerKey = null;\n  return (new goog.Promise(function(resolve, reject) {\n    timerKey = goog.Timer.callOnce(function() {\n      resolve(opt_result);\n    }, delay);\n    if (timerKey == goog.Timer.INVALID_TIMEOUT_ID_) {\n      reject(new Error(\"Failed to schedule timer.\"));\n    }\n  })).thenCatch(function(error) {\n    goog.Timer.clear(timerKey);\n    throw error;\n  });\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview A timer class to which other classes and objects can listen on.\n * This is only an abstraction above `setInterval`.\n *\n * @see ../demos/timers.html\n */\n\ngoog.provide('goog.Timer');\n\ngoog.require('goog.Promise');\ngoog.require('goog.events.EventTarget');\n\n\n\n/**\n * Class for handling timing events.\n *\n * @param {number=} opt_interval Number of ms between ticks (default: 1ms).\n * @param {Object=} opt_timerObject  An object that has `setTimeout`,\n *     `setInterval`, `clearTimeout` and `clearInterval`\n *     (e.g., `window`).\n * @constructor\n * @extends {goog.events.EventTarget}\n */\ngoog.Timer = function(opt_interval, opt_timerObject) {\n  goog.events.EventTarget.call(this);\n\n  /**\n   * Number of ms between ticks\n   * @private {number}\n   */\n  this.interval_ = opt_interval || 1;\n\n  /**\n   * An object that implements `setTimeout`, `setInterval`,\n   * `clearTimeout` and `clearInterval`. We default to the window\n   * object. Changing this on {@link goog.Timer.prototype} changes the object\n   * for all timer instances which can be useful if your environment has some\n   * other implementation of timers than the `window` object.\n   * @private {{setTimeout:!Function, clearTimeout:!Function}}\n   */\n  this.timerObject_ = /** @type {{setTimeout, clearTimeout}} */ (\n      opt_timerObject || goog.Timer.defaultTimerObject);\n\n  /**\n   * Cached `tick_` bound to the object for later use in the timer.\n   * @private {Function}\n   * @const\n   */\n  this.boundTick_ = goog.bind(this.tick_, this);\n\n  /**\n   * Firefox browser often fires the timer event sooner (sometimes MUCH sooner)\n   * than the requested timeout. So we compare the time to when the event was\n   * last fired, and reschedule if appropriate. See also\n   * {@link goog.Timer.intervalScale}.\n   * @private {number}\n   */\n  this.last_ = goog.now();\n};\ngoog.inherits(goog.Timer, goog.events.EventTarget);\n\n\n/**\n * Maximum timeout value.\n *\n * Timeout values too big to fit into a signed 32-bit integer may cause overflow\n * in FF, Safari, and Chrome, resulting in the timeout being scheduled\n * immediately. It makes more sense simply not to schedule these timeouts, since\n * 24.8 days is beyond a reasonable expectation for the browser to stay open.\n *\n * @private {number}\n * @const\n */\ngoog.Timer.MAX_TIMEOUT_ = 2147483647;\n\n\n/**\n * A timer ID that cannot be returned by any known implementation of\n * `window.setTimeout`. Passing this value to `window.clearTimeout`\n * should therefore be a no-op.\n *\n * @private {number}\n * @const\n */\ngoog.Timer.INVALID_TIMEOUT_ID_ = -1;\n\n\n/**\n * Whether this timer is enabled\n * @type {boolean}\n */\ngoog.Timer.prototype.enabled = false;\n\n\n/**\n * An object that implements `setTimeout`, `setInterval`,\n * `clearTimeout` and `clearInterval`. We default to the global\n * object. Changing `goog.Timer.defaultTimerObject` changes the object for\n * all timer instances which can be useful if your environment has some other\n * implementation of timers you'd like to use.\n * @type {{setTimeout, clearTimeout}}\n */\ngoog.Timer.defaultTimerObject = goog.global;\n\n\n/**\n * Variable that controls the timer error correction. If the timer is called\n * before the requested interval times `intervalScale`, which often\n * happens on Mozilla, the timer is rescheduled.\n * @see {@link #last_}\n * @type {number}\n */\ngoog.Timer.intervalScale = 0.8;\n\n\n/**\n * Variable for storing the result of `setInterval`.\n * @private {?number}\n */\ngoog.Timer.prototype.timer_ = null;\n\n\n/**\n * Gets the interval of the timer.\n * @return {number} interval Number of ms between ticks.\n */\ngoog.Timer.prototype.getInterval = function() {\n  return this.interval_;\n};\n\n\n/**\n * Sets the interval of the timer.\n * @param {number} interval Number of ms between ticks.\n */\ngoog.Timer.prototype.setInterval = function(interval) {\n  this.interval_ = interval;\n  if (this.timer_ && this.enabled) {\n    // Stop and then start the timer to reset the interval.\n    this.stop();\n    this.start();\n  } else if (this.timer_) {\n    this.stop();\n  }\n};\n\n\n/**\n * Callback for the `setTimeout` used by the timer.\n * @private\n */\ngoog.Timer.prototype.tick_ = function() {\n  if (this.enabled) {\n    var elapsed = goog.now() - this.last_;\n    if (elapsed > 0 && elapsed < this.interval_ * goog.Timer.intervalScale) {\n      this.timer_ = this.timerObject_.setTimeout(\n          this.boundTick_, this.interval_ - elapsed);\n      return;\n    }\n\n    // Prevents setInterval from registering a duplicate timeout when called\n    // in the timer event handler.\n    if (this.timer_) {\n      this.timerObject_.clearTimeout(this.timer_);\n      this.timer_ = null;\n    }\n\n    this.dispatchTick();\n    // The timer could be stopped in the timer event handler.\n    if (this.enabled) {\n      // Stop and start to ensure there is always only one timeout even if\n      // start is called in the timer event handler.\n      this.stop();\n      this.start();\n    }\n  }\n};\n\n\n/**\n * Dispatches the TICK event. This is its own method so subclasses can override.\n */\ngoog.Timer.prototype.dispatchTick = function() {\n  this.dispatchEvent(goog.Timer.TICK);\n};\n\n\n/**\n * Starts the timer.\n */\ngoog.Timer.prototype.start = function() {\n  this.enabled = true;\n\n  // If there is no interval already registered, start it now\n  if (!this.timer_) {\n    // IMPORTANT!\n    // window.setInterval in FireFox has a bug - it fires based on\n    // absolute time, rather than on relative time. What this means\n    // is that if a computer is sleeping/hibernating for 24 hours\n    // and the timer interval was configured to fire every 1000ms,\n    // then after the PC wakes up the timer will fire, in rapid\n    // succession, 3600*24 times.\n    // This bug is described here and is already fixed, but it will\n    // take time to propagate, so for now I am switching this over\n    // to setTimeout logic.\n    //     https://bugzilla.mozilla.org/show_bug.cgi?id=376643\n    //\n    this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);\n    this.last_ = goog.now();\n  }\n};\n\n\n/**\n * Stops the timer.\n */\ngoog.Timer.prototype.stop = function() {\n  this.enabled = false;\n  if (this.timer_) {\n    this.timerObject_.clearTimeout(this.timer_);\n    this.timer_ = null;\n  }\n};\n\n\n/** @override */\ngoog.Timer.prototype.disposeInternal = function() {\n  goog.Timer.superClass_.disposeInternal.call(this);\n  this.stop();\n  delete this.timerObject_;\n};\n\n\n/**\n * Constant for the timer's event type.\n * @const\n */\ngoog.Timer.TICK = 'tick';\n\n\n/**\n * Calls the given function once, after the optional pause.\n * <p>\n * The function is always called asynchronously, even if the delay is 0. This\n * is a common trick to schedule a function to run after a batch of browser\n * event processing.\n *\n * @param {function(this:SCOPE)|{handleEvent:function()}|null} listener Function\n *     or object that has a handleEvent method.\n * @param {number=} opt_delay Milliseconds to wait; default is 0.\n * @param {SCOPE=} opt_handler Object in whose scope to call the listener.\n * @return {number} A handle to the timer ID.\n * @template SCOPE\n */\ngoog.Timer.callOnce = function(listener, opt_delay, opt_handler) {\n  if (goog.isFunction(listener)) {\n    if (opt_handler) {\n      listener = goog.bind(listener, opt_handler);\n    }\n  } else if (listener && typeof listener.handleEvent == 'function') {\n    // using typeof to prevent strict js warning\n    listener = goog.bind(listener.handleEvent, listener);\n  } else {\n    throw new Error('Invalid listener argument');\n  }\n\n  if (Number(opt_delay) > goog.Timer.MAX_TIMEOUT_) {\n    // Timeouts greater than MAX_INT return immediately due to integer\n    // overflow in many browsers.  Since MAX_INT is 24.8 days, just don't\n    // schedule anything at all.\n    return goog.Timer.INVALID_TIMEOUT_ID_;\n  } else {\n    return goog.Timer.defaultTimerObject.setTimeout(listener, opt_delay || 0);\n  }\n};\n\n\n/**\n * Clears a timeout initiated by {@link #callOnce}.\n * @param {?number} timerId A timer ID.\n */\ngoog.Timer.clear = function(timerId) {\n  goog.Timer.defaultTimerObject.clearTimeout(timerId);\n};\n\n\n/**\n * @param {number} delay Milliseconds to wait.\n * @param {(RESULT|goog.Thenable<RESULT>|Thenable)=} opt_result The value\n *     with which the promise will be resolved.\n * @return {!goog.Promise<RESULT>} A promise that will be resolved after\n *     the specified delay, unless it is canceled first.\n * @template RESULT\n */\ngoog.Timer.promise = function(delay, opt_result) {\n  var timerKey = null;\n  return new goog\n      .Promise(function(resolve, reject) {\n        timerKey =\n            goog.Timer.callOnce(function() { resolve(opt_result); }, delay);\n        if (timerKey == goog.Timer.INVALID_TIMEOUT_ID_) {\n          reject(new Error('Failed to schedule timer.'));\n        }\n      })\n      .thenCatch(function(error) {\n        // Clear the timer. The most likely reason is \"cancel\" signal.\n        goog.Timer.clear(timerKey);\n        throw error;\n      });\n};\n","~:compiled-at",1570933726324,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.timer.timer.js\",\n\"lineCount\":136,\n\"mappings\":\"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\",\n\"sources\":[\"goog/timer/timer.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview A timer class to which other classes and objects can listen on.\\n * This is only an abstraction above `setInterval`.\\n *\\n * @see ../demos/timers.html\\n */\\n\\ngoog.provide('goog.Timer');\\n\\ngoog.require('goog.Promise');\\ngoog.require('goog.events.EventTarget');\\n\\n\\n\\n/**\\n * Class for handling timing events.\\n *\\n * @param {number=} opt_interval Number of ms between ticks (default: 1ms).\\n * @param {Object=} opt_timerObject  An object that has `setTimeout`,\\n *     `setInterval`, `clearTimeout` and `clearInterval`\\n *     (e.g., `window`).\\n * @constructor\\n * @extends {goog.events.EventTarget}\\n */\\ngoog.Timer = function(opt_interval, opt_timerObject) {\\n  goog.events.EventTarget.call(this);\\n\\n  /**\\n   * Number of ms between ticks\\n   * @private {number}\\n   */\\n  this.interval_ = opt_interval || 1;\\n\\n  /**\\n   * An object that implements `setTimeout`, `setInterval`,\\n   * `clearTimeout` and `clearInterval`. We default to the window\\n   * object. Changing this on {@link goog.Timer.prototype} changes the object\\n   * for all timer instances which can be useful if your environment has some\\n   * other implementation of timers than the `window` object.\\n   * @private {{setTimeout:!Function, clearTimeout:!Function}}\\n   */\\n  this.timerObject_ = /** @type {{setTimeout, clearTimeout}} */ (\\n      opt_timerObject || goog.Timer.defaultTimerObject);\\n\\n  /**\\n   * Cached `tick_` bound to the object for later use in the timer.\\n   * @private {Function}\\n   * @const\\n   */\\n  this.boundTick_ = goog.bind(this.tick_, this);\\n\\n  /**\\n   * Firefox browser often fires the timer event sooner (sometimes MUCH sooner)\\n   * than the requested timeout. So we compare the time to when the event was\\n   * last fired, and reschedule if appropriate. See also\\n   * {@link goog.Timer.intervalScale}.\\n   * @private {number}\\n   */\\n  this.last_ = goog.now();\\n};\\ngoog.inherits(goog.Timer, goog.events.EventTarget);\\n\\n\\n/**\\n * Maximum timeout value.\\n *\\n * Timeout values too big to fit into a signed 32-bit integer may cause overflow\\n * in FF, Safari, and Chrome, resulting in the timeout being scheduled\\n * immediately. It makes more sense simply not to schedule these timeouts, since\\n * 24.8 days is beyond a reasonable expectation for the browser to stay open.\\n *\\n * @private {number}\\n * @const\\n */\\ngoog.Timer.MAX_TIMEOUT_ = 2147483647;\\n\\n\\n/**\\n * A timer ID that cannot be returned by any known implementation of\\n * `window.setTimeout`. Passing this value to `window.clearTimeout`\\n * should therefore be a no-op.\\n *\\n * @private {number}\\n * @const\\n */\\ngoog.Timer.INVALID_TIMEOUT_ID_ = -1;\\n\\n\\n/**\\n * Whether this timer is enabled\\n * @type {boolean}\\n */\\ngoog.Timer.prototype.enabled = false;\\n\\n\\n/**\\n * An object that implements `setTimeout`, `setInterval`,\\n * `clearTimeout` and `clearInterval`. We default to the global\\n * object. Changing `goog.Timer.defaultTimerObject` changes the object for\\n * all timer instances which can be useful if your environment has some other\\n * implementation of timers you'd like to use.\\n * @type {{setTimeout, clearTimeout}}\\n */\\ngoog.Timer.defaultTimerObject = goog.global;\\n\\n\\n/**\\n * Variable that controls the timer error correction. If the timer is called\\n * before the requested interval times `intervalScale`, which often\\n * happens on Mozilla, the timer is rescheduled.\\n * @see {@link #last_}\\n * @type {number}\\n */\\ngoog.Timer.intervalScale = 0.8;\\n\\n\\n/**\\n * Variable for storing the result of `setInterval`.\\n * @private {?number}\\n */\\ngoog.Timer.prototype.timer_ = null;\\n\\n\\n/**\\n * Gets the interval of the timer.\\n * @return {number} interval Number of ms between ticks.\\n */\\ngoog.Timer.prototype.getInterval = function() {\\n  return this.interval_;\\n};\\n\\n\\n/**\\n * Sets the interval of the timer.\\n * @param {number} interval Number of ms between ticks.\\n */\\ngoog.Timer.prototype.setInterval = function(interval) {\\n  this.interval_ = interval;\\n  if (this.timer_ && this.enabled) {\\n    // Stop and then start the timer to reset the interval.\\n    this.stop();\\n    this.start();\\n  } else if (this.timer_) {\\n    this.stop();\\n  }\\n};\\n\\n\\n/**\\n * Callback for the `setTimeout` used by the timer.\\n * @private\\n */\\ngoog.Timer.prototype.tick_ = function() {\\n  if (this.enabled) {\\n    var elapsed = goog.now() - this.last_;\\n    if (elapsed > 0 && elapsed < this.interval_ * goog.Timer.intervalScale) {\\n      this.timer_ = this.timerObject_.setTimeout(\\n          this.boundTick_, this.interval_ - elapsed);\\n      return;\\n    }\\n\\n    // Prevents setInterval from registering a duplicate timeout when called\\n    // in the timer event handler.\\n    if (this.timer_) {\\n      this.timerObject_.clearTimeout(this.timer_);\\n      this.timer_ = null;\\n    }\\n\\n    this.dispatchTick();\\n    // The timer could be stopped in the timer event handler.\\n    if (this.enabled) {\\n      // Stop and start to ensure there is always only one timeout even if\\n      // start is called in the timer event handler.\\n      this.stop();\\n      this.start();\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Dispatches the TICK event. This is its own method so subclasses can override.\\n */\\ngoog.Timer.prototype.dispatchTick = function() {\\n  this.dispatchEvent(goog.Timer.TICK);\\n};\\n\\n\\n/**\\n * Starts the timer.\\n */\\ngoog.Timer.prototype.start = function() {\\n  this.enabled = true;\\n\\n  // If there is no interval already registered, start it now\\n  if (!this.timer_) {\\n    // IMPORTANT!\\n    // window.setInterval in FireFox has a bug - it fires based on\\n    // absolute time, rather than on relative time. What this means\\n    // is that if a computer is sleeping/hibernating for 24 hours\\n    // and the timer interval was configured to fire every 1000ms,\\n    // then after the PC wakes up the timer will fire, in rapid\\n    // succession, 3600*24 times.\\n    // This bug is described here and is already fixed, but it will\\n    // take time to propagate, so for now I am switching this over\\n    // to setTimeout logic.\\n    //     https://bugzilla.mozilla.org/show_bug.cgi?id=376643\\n    //\\n    this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);\\n    this.last_ = goog.now();\\n  }\\n};\\n\\n\\n/**\\n * Stops the timer.\\n */\\ngoog.Timer.prototype.stop = function() {\\n  this.enabled = false;\\n  if (this.timer_) {\\n    this.timerObject_.clearTimeout(this.timer_);\\n    this.timer_ = null;\\n  }\\n};\\n\\n\\n/** @override */\\ngoog.Timer.prototype.disposeInternal = function() {\\n  goog.Timer.superClass_.disposeInternal.call(this);\\n  this.stop();\\n  delete this.timerObject_;\\n};\\n\\n\\n/**\\n * Constant for the timer's event type.\\n * @const\\n */\\ngoog.Timer.TICK = 'tick';\\n\\n\\n/**\\n * Calls the given function once, after the optional pause.\\n * <p>\\n * The function is always called asynchronously, even if the delay is 0. This\\n * is a common trick to schedule a function to run after a batch of browser\\n * event processing.\\n *\\n * @param {function(this:SCOPE)|{handleEvent:function()}|null} listener Function\\n *     or object that has a handleEvent method.\\n * @param {number=} opt_delay Milliseconds to wait; default is 0.\\n * @param {SCOPE=} opt_handler Object in whose scope to call the listener.\\n * @return {number} A handle to the timer ID.\\n * @template SCOPE\\n */\\ngoog.Timer.callOnce = function(listener, opt_delay, opt_handler) {\\n  if (goog.isFunction(listener)) {\\n    if (opt_handler) {\\n      listener = goog.bind(listener, opt_handler);\\n    }\\n  } else if (listener && typeof listener.handleEvent == 'function') {\\n    // using typeof to prevent strict js warning\\n    listener = goog.bind(listener.handleEvent, listener);\\n  } else {\\n    throw new Error('Invalid listener argument');\\n  }\\n\\n  if (Number(opt_delay) > goog.Timer.MAX_TIMEOUT_) {\\n    // Timeouts greater than MAX_INT return immediately due to integer\\n    // overflow in many browsers.  Since MAX_INT is 24.8 days, just don't\\n    // schedule anything at all.\\n    return goog.Timer.INVALID_TIMEOUT_ID_;\\n  } else {\\n    return goog.Timer.defaultTimerObject.setTimeout(listener, opt_delay || 0);\\n  }\\n};\\n\\n\\n/**\\n * Clears a timeout initiated by {@link #callOnce}.\\n * @param {?number} timerId A timer ID.\\n */\\ngoog.Timer.clear = function(timerId) {\\n  goog.Timer.defaultTimerObject.clearTimeout(timerId);\\n};\\n\\n\\n/**\\n * @param {number} delay Milliseconds to wait.\\n * @param {(RESULT|goog.Thenable<RESULT>|Thenable)=} opt_result The value\\n *     with which the promise will be resolved.\\n * @return {!goog.Promise<RESULT>} A promise that will be resolved after\\n *     the specified delay, unless it is canceled first.\\n * @template RESULT\\n */\\ngoog.Timer.promise = function(delay, opt_result) {\\n  var timerKey = null;\\n  return new goog\\n      .Promise(function(resolve, reject) {\\n        timerKey =\\n            goog.Timer.callOnce(function() { resolve(opt_result); }, delay);\\n        if (timerKey == goog.Timer.INVALID_TIMEOUT_ID_) {\\n          reject(new Error('Failed to schedule timer.'));\\n        }\\n      })\\n      .thenCatch(function(error) {\\n        // Clear the timer. The most likely reason is \\\"cancel\\\" signal.\\n        goog.Timer.clear(timerKey);\\n        throw error;\\n      });\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"Timer\",\"goog.Timer\",\"opt_interval\",\"opt_timerObject\",\"events\",\"EventTarget\",\"call\",\"interval_\",\"timerObject_\",\"defaultTimerObject\",\"boundTick_\",\"bind\",\"tick_\",\"last_\",\"now\",\"inherits\",\"MAX_TIMEOUT_\",\"INVALID_TIMEOUT_ID_\",\"prototype\",\"enabled\",\"global\",\"intervalScale\",\"timer_\",\"getInterval\",\"goog.Timer.prototype.getInterval\",\"setInterval\",\"goog.Timer.prototype.setInterval\",\"interval\",\"stop\",\"start\",\"goog.Timer.prototype.tick_\",\"elapsed\",\"setTimeout\",\"clearTimeout\",\"dispatchTick\",\"goog.Timer.prototype.dispatchTick\",\"dispatchEvent\",\"TICK\",\"goog.Timer.prototype.start\",\"goog.Timer.prototype.stop\",\"disposeInternal\",\"goog.Timer.prototype.disposeInternal\",\"superClass_\",\"callOnce\",\"goog.Timer.callOnce\",\"listener\",\"opt_delay\",\"opt_handler\",\"isFunction\",\"handleEvent\",\"Error\",\"Number\",\"clear\",\"goog.Timer.clear\",\"timerId\",\"promise\",\"goog.Timer.promise\",\"delay\",\"opt_result\",\"timerKey\",\"thenCatch\",\"Promise\",\"resolve\",\"reject\",\"error\"]\n}\n"]