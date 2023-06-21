function allTheArgs(func, ...args) {
  return func.bind(func, ...args)
}

const bow = (...names) => {
  let nameArr = Array.from(names);
  return "You bowed to " + names.join(" and ");
};

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
