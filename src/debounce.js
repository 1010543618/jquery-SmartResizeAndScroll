// 参考了（reference）：
// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
export default function (func, threshold) {
  var timeout;
  return function debounced () {
    var obj = this, args = arguments;
    function delayed () {
      // 让调用smartresize的对象执行
      func.apply(obj, args);
      /*
      timeout = null;：这个语句只是单纯将timeout指向null，
      而timeout指向的定时器还存在，
      要想清除定时器（让setTimeout调用的函数不执行）要用clearTimeout(timeout)。
      eg：
      var timeout = setTimeout(function(){
        alert('timeout = null');// 执行
      },1000);
      timeout = null;
      var timeout = setTimeout(function(){
        alert('clearTimeout(timeout)');// 不执行
      },1000);
      clearTimeout(timeout);
      var timeout = setTimeout(function(){
        clearTimeout(timeout);
        alert('clearTimeout(timeout)');// 执行（已经开始执行匿名函数了）
      },1000);
      */ 
      timeout = null; 
    }
    // 如果有timeout正在倒计时，则清除当前timeout
    timeout && clearTimeout(timeout);
    timeout = setTimeout(delayed, threshold || 100); 
  };
};