function boundFuncTimer(obj, func, delay) {
  setTimeout(() => {
    return func.call(obj)
  }, delay)

  // return setTimeout(func.bind(obj), delay) - more concise way
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
