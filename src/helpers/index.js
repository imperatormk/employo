const checkEmpty = function f(fields) {
  const items = Object.values(fields)
  function checkEmptyCl(prop) {
    if (prop instanceof Array) {
      return prop.length >= 1
    } else if (prop != null) {
      return prop.toString().trim().length > 0
    }

    return false
  }
  return items.every(checkEmptyCl)
}

const helpers = {}
helpers.checkEmpty = checkEmpty

export default helpers