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
        "Inherited and owned large ruby financial planning service",
        "Upgraded this service, including features, documentation, testing, and a conversion to ruby 2",
        "Effected a technical pivot from server-side to client-side advisory capacities",
        "Work as part of a team on a financial literacy application",
        "Defined and codified a framework for developers to discuss career growth with their manager",
        "Rewrote code test for ruby candidates, a tic-tac-toe challenge",
        "Refined and published job requirements and descriptions",
        "Delivered brownbags on technical topics to developer and non-technical audiences"
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
        "Worked as part of a team under the direction of a tech lead",
        "Deployed application to QA and Production environments",
        "Worked with clients to ensure data quality and import",
        "Acted as Rails resource for coworkers, aided in troubleshooting, bug hunting",
        "Led upgrade to Rails 4",
        "Participated in architectural design and planning with an eye for modularity and extensibility"
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
        "Responsible for ensuring that projects met client specifications and desires",
        "Created and executed QA plans",
        "Implemented and maintained automated test suites using SilkTest/Silk4J"
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
        "Communicated issues and resolutions to internal and external team members of varying technical understanding",
        "Determined root causes of issues and set sustainable solutions and workflows to allow customer to succeed",
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
    },
    {
      name: "BUDA Ultimate Frisbee",
      startDate: "2005",
      role: "Captain, Player"
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
