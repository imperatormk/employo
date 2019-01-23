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
  // here starts the diff
  technical: {
    experience: 'experience',
    roles: 'roles',
    industries: 'industries',
    skills: 'skills',
    jobSearchProgress: 'jobSearchProgress',
    transcript: 'transcript'
  },
  nontechnical: {
    experience: 'experience',
    roles: 'roles',
    industries: 'industries',
    skills: 'skills',
    jobSearchProgress: 'jobSearchProgress',
    transcript: 'transcript'
  }
}

const employerPagesList = {
  acctype: 'acctype',
  account: 'account'
}

export default {
  initialPagesList,
  studentPagesList,
  employerPagesList
}

const studentPagesFields = [{
  pageId: studentPagesList.account,
  fields: {
    firstName: {
      value: '',
      required: true
    },
    lastName: {
      value: '',
      required: true
    },
    city: {
      value: '',
      required: true
    }
  }
},
{
  pageId: studentPagesList.education,
  fields: {
    selUniversity: {
      value: null,
      required: true
    },
    selField: {
      value: null,
      required: true
    },
    selYear: {
      value: null,
      required: true
    },
    selGpa: {
      value: null,
      required: true
    },
    degree: {
      value: null,
      required: true
    },
  }
},
{
  pageId: studentPagesList.work,
  fields: {
    officialCoop: {
      value: [],
      required: true
    },
    availability: {
      value: [],
      required: true
    },
    termLength: {
      value: [],
      required: true
    },
    locationPref: {
      value: [],
      required: true
    },
  }
},
{
  pageId: studentPagesList.roles,
  fields: {
    selectedRole: {
      value: null,
      required: true
    }
  }
},
// split starts here
{
  subtype: 'technical',
  pages: [{
    pageId: studentPagesList.technical.experience,
    fields: {
      selectedAreas: {
        value: [],
        required: true
      },
      numYears: {
        value: 1,
        required: true
      }
    }
  },
  {
    pageId: studentPagesList.technical.roles,
    fields: {
      rolePref: {
        value: [],
        required: true
      },
    }
  },
  {
    pageId: studentPagesList.technical.industries,
    fields: {
      selectedIndustries: {
        value: [],
        required: true
      }
    }
  },
  {
    pageId: studentPagesList.technical.skills,
    fields: {
      selectedSkills: {
        value: [],
        required: true
      }
    }
  },
  {
    pageId: studentPagesList.technical.jobSearchProgress,
    fields: {
      jobSearch: {
        value: 0,
        required: true
      },
      companySize: {
        value: [],
        required: true
      },
    }
  },
  {
    pageId: studentPagesList.technical.transcript,
    fields: {
      resume: {
        value: [],
        required: true
      },
      linkedIn: {
        value: '',
        required: true
      },
      gitHub: {
        value: '',
        required: true
      },
      website: {
        value: '',
        required: true
      }
    }
  }]
},
{
  subtype: 'nontechnical',
  pages: [{
    pageId: studentPagesList.nontechnical.experience,
    fields: {
      selectedAreas: {
        value: [],
        required: true
      },
      numYears: {
        value: 1,
        required: true
      }
    }
  },
  {
    pageId: studentPagesList.nontechnical.roles,
    fields: {
      rolePref: {
        value: [],
        required: true
      },
    }
  },
  {
    pageId: studentPagesList.nontechnical.industries,
    fields: {
      selectedIndustries: {
        value: [],
        required: true
      }
    }
  },
  {
    pageId: studentPagesList.nontechnical.skills,
    fields: {
      selectedSkills: {
        value: [],
        required: true
      }
    }
  },
  {
    pageId: studentPagesList.nontechnical.jobSearchProgress,
    fields: {
      jobSearch: {
        value: 0,
        required: true
      },
      companySize: {
        value: [],
        required: true
      },
    }
  },
  {
    pageId: studentPagesList.nontechnical.transcript,
    fields: {
      resume: {
        value: [],
        required: true
      },
      linkedIn: {
        value: '',
        required: true
      },
      gitHub: {
        value: '',
        required: true
      },
      website: {
        value: '',
        required: true
      }
    }
  }]
}]

const employerPagesFields = [{
  pageId: employerPagesList.account,
  fields: {
    firstName: {
      value: '',
      required: true
    },
    lastName: {
      value: '',
      required: true
    },
    companyName: {
      value: '',
      required: true
    },
    companyWebsite: {
      value: '',
      required: true
    },
    email: {
      value: '',
      required: true
    },
    city: {
      value: '',
      required: true
    },
    phoneNumber: {
      value: '',
      required: true
    },
  }
}]

const studentPagesData = []
const initialPagesData = []

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

export { studentPagesFields }
export { employerPagesFields }
export { studentPagesData }
export { initialPagesData }
export { setSourceData }

