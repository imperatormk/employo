import technical from '@/assets/role_types/technical.png'
import nontechnical from '@/assets/role_types/nontechnical.png'

import student from '@/assets/acc_types/student.png'
import employeer from '@/assets/acc_types/employer.png'

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

const getImageData = function f(dataObj) {
  const data = [{
    id: 'techinical',
    alternate: false,
    fullImage: true,
    image: technical
  }, {
    id: 'nontechnical',
    alternate: true,
    fullImage: true,
    image: nontechnical
  }, {
    id: 'student',
    alternate: false,
    fullImage: false,
    image: student
  }, {
    id: 'employeer',
    alternate: true,
    fullImage: false,
    image: employeer
  }]

  const objType = dataObj.id
  return data.find(obj => obj.id === objType)
}

const helpers = {}
helpers.checkEmpty = checkEmpty
helpers.getImageData = getImageData

export default helpers