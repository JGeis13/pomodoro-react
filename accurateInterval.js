/*
  Accurate_Interval.js by Squeege and modified by Peter Weinberg
  https://codepen.io/no_stack_dub_sack/pen/VKJGKd?editors=1010 
*/
const Timer = new Object
Timer.accurateInterval = function(fn, time) {
  var cancel, nextAt, timeout, wrapper;
  nextAt = new Date().getTime() + time;
  timeout = null;
  wrapper = function() {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return fn();
  };
  cancel = function() {
    return clearTimeout(timeout);
  };
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return {
    cancel: cancel
  };
};

export default Timer