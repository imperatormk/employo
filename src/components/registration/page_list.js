import helpers from '@/helpers'

const initialPagesList = {
  acctype: 'acctype'
}

const studentPagesList = {
  acctype: 'acctype',
  account: 'account',
  education: 'education',
  work: 'work',
  roles: 'roles',
  experience: 'experience',
  technicalRoles: 'technicalRoles',
  industries: 'industries',
  skills: 'skills',
  jobSearchProgress: 'jobSearchProgress',
  transcript: 'transcript'
}

const employeerPagesList = {
  acctype: 'acctype',
  account: 'account'
}

export default {
  initialPagesList,
  studentPagesList,
  employeerPagesList
}

const studentPagesFields = [{
  pageId: studentPagesList.account,
  fields: {
    firstName: '',
    lastName: '',
    city: ''
  }
},
{
  pageId: studentPagesList.education,
  fields: {
    selUniversity: null,
    selField: null,
    selYear: null,
    selGpa: null,
    degree: null,
  }
},
{
  pageId: studentPagesList.work,
  fields: {
    officialCoop: null,
    availability: [],
    termLength: [],
    locationPref: [],
  }
},
{
  pageId: studentPagesList.roles,
  fields: {
    selectedRole: null
  }
},
{
  pageId: studentPagesList.experience,
  fields: {
    selectedAreas: [],
    numYears: 1
  }
},
{
  pageId: studentPagesList.technicalRoles,
  fields: {
    rolePref: [],
  }
},
{
  pageId: studentPagesList.industries,
  fields: {
    selectedIndustries: []
  }
},
{
  pageId: studentPagesList.skills,
  fields: {
    selectedSkills: []
  }
},
{
  pageId: studentPagesList.jobSearchProgress,
  fields: {
    jobSearch: '',
    companySize: [],
  }
},
{
  pageId: studentPagesList.transcript,
  fields: {
    resume: [],
    linkedIn: '',
    gitHub: '',
    website: ''
  }
}]

export { studentPagesFields }

const employeerPagesFields = [{
  pageId: employeerPagesList.account,
  fields: {
    firstName: '',
    lastName: '',
    companyName: '',
    companyWebsite: '',
    email: '',
    city: '',
    phoneNumber: '',
  }
}]

export { employeerPagesFields }

const studentPagesData = []

export { studentPagesData }

const initialPagesData = []

export { initialPagesData }

const setSourceData = function f(key, data) {
  if (key === 'initial') {
    data.forEach(dataObj => initialPagesData.push(dataObj))
    const roleTypes = helpers.setImageData(initialPagesData.find(obj => obj.pageId === 'acctype').fields.roleTypes)
    initialPagesData.find(obj => obj.pageId === 'acctype').fields.roleTypes = roleTypes
  } else if (key === 'student') {
    data.forEach(dataObj => studentPagesData.push(dataObj))
    const roleTypes = helpers.setImageData(studentPagesData.find(obj => obj.pageId === 'roles').fields.roleTypes)
    studentPagesData.find(obj => obj.pageId === 'roles').fields.roleTypes = roleTypes
  }
}

export { setSourceData }

