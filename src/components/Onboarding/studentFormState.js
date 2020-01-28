const studentFormState = {
    userLocation: {
      value: '',
      hasError: false,
    },
    experience: {
      value: '',
      hasError: false,
      options: [
        {
          level: 1,
          text: 'None',
        },
        {
          level: 2,
          text: "I've taken some online courses",
        },  
        {
          level: 3,
          text:
            "I've finished a few online courses and built some personal projects",
        },
        {
          level: 4,
          text: "I've completed a coding bootcamp or similar program",
        },
        {
          level: 5,
          text: "I've completed a CS degree",
        },
        {
          level: 5,
          text: "I'm a professional software developer",
        },
      ],
    },
    confidence: {
      hasError: false,
      value: '',
      options: [
        {
          level: 1,
          text: 'None',
        },
        {
          level: 2,
          text:
            "I'm not very confident in my ability to interview successfully",
        },
        {
          level: 3,
          text:
            "I'm not as confident at interviewing as I'd like to be",
        },
        {
          level: 4,
          text: "I'm not confident, but not unconfident either",
        },
        {
          level: 5,
          text: "I'm confident in my interview ability",
        },
      ],
    },
    github: {
      hasError: false,
      value: '',
    },
    linkedin: {
      hasError: false,
      value: '',
    }
  };

export default studentFormState;