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

const setImageData = function f(dataObj) {
  const data = [{
    id: 'technical',
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

  const returnArray = []
  dataObj.forEach((obj) => {
    const objType = obj.id
    const imageData = data.find(sourceObj => sourceObj.id === objType)

    const objClone = JSON.parse(JSON.stringify(obj))
    Object.keys(imageData).forEach((key) => {
      if (key !== 'id') objClone[key] = imageData[key]
    })
    returnArray.push(objClone)
  })

  return returnArray
}

const loadSourceData = function f() {
  const SOURCE_DATA_URL = 'https://thatsmontreal.ca/smartplug/data.php'
  return fetch(SOURCE_DATA_URL)
    .then(res => res.json())
}

const helpers = {}
helpers.checkEmpty = checkEmpty
helpers.setImageData = setImageData
helpers.loadSourceData = loadSourceData

export default helpers