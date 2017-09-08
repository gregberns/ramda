module.exports = function _mapWhile(fn, predicate, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while (idx < len) {
      var r = fn(functor[idx])
      if (!predicate(r, idx, functor, result)) break;
      result[idx] = r;
      idx += 1;
    }
    result.length = idx;
    return result;
};



// Implementation (untested)
// ```
// //https://github.com/ramda/ramda/blob/master/src/internal/_map.js
// function mapWhile(fn, predicate, functor) {
//     var idx = 0;
//     var len = functor.length;
//     var result = Array(len);
//     while (idx < len) {
//         result[idx] = fn(functor[idx]);
//         if (!predicate(result[idx])) break;
//         idx += 1;
//     }
//     return result;
// }
// ```
// Usage
// ```
// mapWhile(i => i*2, i => i> 10, [2,4,6,8])
// ```


// const mapWhile = p => f => xs => {
//   const len = xs.length;
//   const result = Array(len);
//   for(var i = 0; i < len; i+=1) {
//     if (!p(xs[i])) break;
//     result[i] = f(xs[i]);
//   }
//   result.length = i;
//   return result;
// };
// ```
