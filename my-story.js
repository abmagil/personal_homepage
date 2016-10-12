{
  personal: {
    name: "Aaron Magil",
    address: {
      street: "10 Upland Rd.",
      town: "Arlington",
      state: "MA",
      zip: "02474"
    },
    email: "abmagil@gmail.com",
    phone: "781-572-4387"
  },
  education: {
    data: [
      {
        location: "Carnegie Mellon University",
        url: "www.cmu.edu",
        level: "B.S Chemistry",
        address: "Pittsburgh, PA",
        startDate: new Date(2005, 8),
        endDate: new Date(2009, 5),
        honors: [
          "Graduating GPA 3.48/4.00",
          "Dean's list Spring 2008-2009"
        ]
      },
      {
        location: "Boston University Academy",
        url: "www.buacademy.org",
        level: "High School diploma",
        honors: [
          "Graduated cum laude"
        ]
      }
    ]
  },
  workHistory: {
    {
      role: "Software Developer",
      startDate: new Date(2015, 5),
      endDate: null,
      employer: "Society of Grownups",
      url: "www.societyofgrownups.com",
      address: "Brookline, MA",
      responsibilities: [
        "Support development of financial literacy application",
        "Responsible for implementing screens per design",
        "Implemented and improved technical framework for content display",
        "Owned large legacy financial planning application, with conversion to stateless service",
        "Developed career growth framework for developers with Dir. Engineering"
      ]
    },
    {
      role: "Software Developer",
      startDate: new Date(2014, 0),
      endDate: new Date(2015, 4),
      employer: "Cambridge Systematics, Inc.",
      url: "www.cambridgesystematics.com",
      address: "Cambridge, MA",
      responsibilities: [
        "Work as part of a team under the direction of a tech lead",
        "Responsible for on-time delivery of functionalities",
        "Responsible for deployment to QA and Production environments",
        "Act as client-facing Data Quality engineer",
        "Act as local Rails expert, aid in troubleshooting, bug hunting.  Lead upgrade to Rails 4",
        "Participate in architectural design and planning with an eye for modularity and extensibility",
        "Work independently, seeking help as necessary"
      ]
    },
    {
      role: "Software QA",
      startDate: new Date(2012, 5),
      endDate: new Date(2014, 0),
      employer: "Cambridge Systematics, Inc.",
      url: "www.cambridgesystematics.com",
      address: "Cambridge, MA",
      responsibilities: [
        "Support and Lead QA engineer for multiple projects of varied nature",
        "Held ultimate responsibility for ensuring that projects met client specifications and desires",
        "Required to create and maintain QA plans",
        "Required to create and maintain automated test suites using SilkTest/Silk4J"
      ]
    }
  },
  skills: {
    technical: [
      "ruby", "elixir", "HTML", "CSS", "JS", "SQL"
    ],
    tools: [
      "Rails", "Ember", "Heroku", "SCSS", "rspec"
    ]
  },
  activities: [
    {
      name: "haystack search gem",
      role: "Author, Maintainer",
      startDate: new Date(2014, 0)
    },
    {
      name: "SBU Brown Bag Series",
      role: "Organizer",
      startDate: new Date(2014, 0),
      endDate: new Date(2015, 5)
    },
    {
      name: "Boston Ruby Group"
      startDate: new Date(2014, 0)
    }
  ]
}
