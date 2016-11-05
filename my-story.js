module.exports = {
  education: [
      {
        educator: "Carnegie Mellon University",
        url: "//www.cmu.edu",
        level: "B.S Chemistry",
        address: "Pittsburgh, PA",
        endDate: new Date(2009, 5),
        honors: [
          "Graduating GPA 3.48/4.00",
          "Dean's list Spring 2008-2009"
      ]
    },
    {
      educator: "Boston University Academy",
      address: "Boston, MA",
      url: "//www.buacademy.org",
      level: "High school diploma",
      endDate: new Date(2005, 5),
      honors: [
        "Graduated cum laude"
      ]
    }
  ],
  workHistory: [
    {
      role: "Software Developer",
      startDate: new Date(2015, 3),
      endDate: null,
      employer: "Society of Grownups",
      url: "//www.societyofgrownups.com",
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
      endDate: new Date(2015, 3),
      employer: "Cambridge Systematics, Inc.",
      url: "//www.camsys.com",
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
      startDate: new Date(2012, 3),
      endDate: new Date(2014, 0),
      employer: "Cambridge Systematics, Inc.",
      url: "//www.cambridgesystematics.com",
      address: "Cambridge, MA",
      responsibilities: [
        "Support and Lead QA engineer for multiple projects of varied nature",
        "Held ultimate responsibility for ensuring that projects met client specifications and desires",
        "Required to create and maintain QA plans",
        "Required to create and maintain automated test suites using SilkTest/Silk4J"
      ]
    },
    {
      role: "Technical Services",
      startDate: new Date(2011, 3),
      endDate: new Date(2012, 0),
      employer: "Epic Systems",
      url: "//www.epic.com",
      address: "Madison, WI",
      responsibilities: [
        "Communicated issues and resolutions to internal and external members of varying technical understanding",
        "Determined root cause of issues and set sustainable solutions and workflows to allow customer to succeed",
        "Developed small programs to ease and simplify workflows",
        "Provided weekly program updates to external CIO during crisis escalation",
        "Routinely solved technical problems for large healthcare organization"
      ]
    },
  ],
  skills: {
    fluence: [
      "Ruby", "Rails", "SQL", "git", "Heroku",
    ],
    professional: [
      "Ember 2+", "Elixir", "Phoenix", "HTML", "(S)CSS", "JS/ES6", "Scrum"
    ],
    working: [
      "React", "Linux"
    ]
  },
  activities: [
    {
      name: "haystack",
      description: "search gem",
      url: "https://rubygems.org/gems/haystack",
      role: "Author, Maintainer",
      startDate: "2014"
    },
    {
      name: "SBU Brown Bag Series",
      role: "Organizer",
      startDate: "2014",
      endDate: "2015"
    },
    {
      name: "Boston Ruby Group",
      startDate: "2014"
    }
  ],
  formatDate: function(date) {
    var monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct",
      "Nov", "Dec"
    ];

    if (null === date) {
      return "Current";
    }

    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + " " + year;
  },
  formatList: function(list) {
    return list.join(", ");
  }
}
