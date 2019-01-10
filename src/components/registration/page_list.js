const initialPageList = {
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
  almostDone: 'almostDone',
  transcript: 'transcript',
}

const employeerPagesList = {
  acctype: 'acctype',
  account: 'account'
}

export default {
  initialPageList,
  studentPagesList,
  employeerPagesList
}

const studentPages = [{
  pageId: studentPagesList.account,
  fields: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
  pageId: studentPagesList.almostDone,
  fields: {
    jobSearch: '',
    companySize: [],
  }
}]

export { studentPages }

const employeerPages = [{
  pageId: employeerPagesList.account,
  fields: {
    firstName: '',
    lastName: '',
    companyName: '',
    companyWebsite: '',
    email: '',
    password: '',
    city: '',
    phoneNumber: '',
  }
}]

export { employeerPages }