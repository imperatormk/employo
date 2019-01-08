const initialPageList = {
  acctype: 'acctype'
}

const studentPagesList = {
  acctype: 'acctype',
  account: 'account',
  education: 'education',
  work: 'work',
  experience: 'experience',
  roles: 'roles',
  industries: 'industries',
  skills: 'skills',
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
  pageId: studentPagesList.experience,
  fields: {
    selectedAreas: [],
    numYears: 1
  }
},
{
  pageId: studentPagesList.roles,
  fields: {
    selectedRoles: []
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
}]

export { studentPages }