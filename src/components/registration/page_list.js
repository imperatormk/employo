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
  transcript: 'transcript',
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
    transcript: [],
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

const studentPagesData = [{
  pageId: studentPagesList.education,
  fields: {
    universities: [{
      id: 0,
      title: 'University of Toronto'
    }, {
      id: 1,
      title: 'Western University'
    }],
    studyFields: [{
      id: 0,
      title: 'Computer Science'
    }, {
      id: 1,
      title: 'Software Engineering'
    }],
    years: [2020, 2021],
    gpas: [3.9, 4],
    degrees: [{
      id: 0,
      title: 'BA'
    }, {
      id: 1,
      title: 'BBA'
    }, {
      id: 2,
      title: 'BBA'
    }, {
      id: 3,
      title: 'BBA'
    }, {
      id: 4,
      title: 'BBA'
    }, {
      id: 5,
      title: 'BBA'
    }, {
      id: 6,
      title: 'BBA'
    }]
  }
}, {
  pageId: studentPagesList.account, // none
  fields: {
  }
}, {
  pageId: studentPagesList.work,
  fields: {
    workLocations: [{
      id: 0,
      title: 'Toronto'
    }, {
      id: 1,
      title: 'Waterloo'
    }, {
      id: 2,
      title: 'Ottawa'
    }, {
      id: 3,
      title: 'Ottawa'
    }, {
      id: 4,
      title: 'Ottawa'
    }, {
      id: 5,
      title: 'Ottawa'
    }, {
      id: 6,
      title: 'Ottawa'
    }],
    availabilities: [{
      id: 0,
      title: 'Summer'
    }, {
      id: 1,
      title: 'Winter'
    }, {
      id: 2,
      title: 'Fall'
    }],
    termLengths: [{
      id: 0,
      title: '4'
    }, {
      id: 1,
      title: '8'
    }, {
      id: 2,
      title: '12'
    }, {
      id: 3,
      title: '16'
    }]
  }
}, {
  pageId: studentPagesList.roles, // here
  fields: {
    roleTypes: [{
      id: 'technical',
      title: 'Technical',
      desc: 'Software Engineers...'
    }, {
      id: 'nontechnical',
      title: 'Non-Technical',
      desc: 'Business Development...'
    }]
  }
}, {
  pageId: studentPagesList.experience,
  fields: {
    areas: [{
      id: 0,
      title: 'Frontend'
    }, {
      id: 1,
      title: 'Backend'
    }, {
      id: 2,
      title: 'Databases'
    }, {
      id: 3,
      title: 'Mobile'
    }, {
      id: 4,
      title: 'Design'
    }, {
      id: 5,
      title: 'QA'
    }, {
      id: 6,
      title: 'IT'
    }, {
      id: 7,
      title: 'Full stack'
    }]
  }
}, {
  pageId: studentPagesList.technicalRoles,
  fields: {
    roles: [{
      id: 0,
      title: 'Back-End'
    }, {
      id: 1,
      title: 'Full Stuck'
    }, {
      id: 2,
      title: 'App dev'
    }, {
      id: 3,
      title: 'UX/UI'
    }, {
      id: 4,
      title: 'Full Stuck'
    }, {
      id: 5,
      title: 'UX/UI'
    }, {
      id: 6,
      title: 'Back-End'
    }]
  }
}, {
  pageId: studentPagesList.industries,
  fields: {
    industries: [{
      id: 0,
      title: 'Frontend'
    }, {
      id: 1,
      title: 'Backend'
    }, {
      id: 2,
      title: 'Databases'
    }, {
      id: 3,
      title: 'Mobile'
    }, {
      id: 4,
      title: 'Design'
    }, {
      id: 5,
      title: 'QA'
    }, {
      id: 6,
      title: 'IT'
    }, {
      id: 7,
      title: 'Full stack'
    }]
  }
}, {
  pageId: studentPagesList.skills,
  fields: {
    skills: [{
      id: 0,
      title: 'Frontend'
    }, {
      id: 1,
      title: 'Backend'
    }, {
      id: 2,
      title: 'Databases'
    }, {
      id: 3,
      title: 'Mobile'
    }, {
      id: 4,
      title: 'Design'
    }, {
      id: 5,
      title: 'QA'
    }, {
      id: 6,
      title: 'IT'
    }, {
      id: 7,
      title: 'Full stack'
    }]
  }
}, {
  pageId: studentPagesList.jobSearchProgress,
  fields: {
    sizes: [{
      id: 0,
      title: '1-10'
    }, {
      id: 1,
      title: '11-50'
    }, {
      id: 2,
      title: '51-200'
    }, {
      id: 3,
      title: '201-500'
    }, {
      id: 4,
      title: '501-1000'
    }, {
      id: 5,
      title: '1000+'
    }]
  }
}, {
  pageId: studentPagesList.transcript, // none
  fields: {
  }
}]

export { studentPagesData }

const initialPagesData = [{
  pageId: initialPagesList.acctype,
  fields: {
    roleTypes: [{
      id: 'student',
      title: 'Student',
      desc: ''
    }, {
      id: 'employeer',
      title: 'Employeer',
      desc: ''
    }]
  }
}]

export { initialPagesData }