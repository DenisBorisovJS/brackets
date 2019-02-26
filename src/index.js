module.exports = function check(str, bracketsConfig) {
  return removeString(str, bracketsConfig);
}

function removeString(removbleStr,template) {
  var result = false;

  if (removbleStr.length > 0) {
    const checker = arrayContainString(removbleStr,template);
    if (checker.contains) {
      result = removeString(checker.removbleStr,template);
    }
  } else {
    result = true;
  }

  return result;
}

function arrayContainString(str, array) {
  var contains = false;
  var removbleStr = str;

  array.forEach(function(arr) {
    const template = arr.join('');
    if (str.includes(template)) {
      removbleStr = removbleStr.replace(template, "");
      contains = true;
    }
  })

  return {contains,removbleStr};
}
