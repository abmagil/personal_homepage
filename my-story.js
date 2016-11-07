module.exports = {
  education: [
      {
        educator: "Carnegie Mellon University",
        url: "//www.cmu.edu",
        level: "B.S Chemistry",
        address: "Pittsburgh, PA",
        endDate: new Date(2009, 5),
        honors: [
          "Graduating GPA 3.48/4.00"
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
        "Owned large legacy Ruby service, including features, documentation, and testing",
        "Upgraded this service to Ruby 2",
        "Established the Society of Grownups ruby styleguide",
        "Prototyped and developed client-side financial advisory solutions",
        "Defined and codified a framework for developers to discuss career growth with their manager",
        "Core contributer in the succesful recruitment of three developers",
        "Organized multiple brownbags on technical topics"
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
        "Owned full lifecycle for features, including production deployments",
        "Wrote custom import software to consume client data assets",
        "Subject matter expert in Rails, aiding fellow developers in troubleshooting and bug hunting",
        "Upgraded asset management platform from Rails 3 to Rails 4",
        "Contributed to architectural design and planning",
        "Initiated and led Software Brown Bag series"
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
        "Lead QA engineer for multiple projects of varied nature",
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
        "Communicated issues and resolutions to internal and external stakeholders",
        "Determined root causes of issues and set sustainable solutions and workflows",
        "Developed programs to ease and simplify workflows",
        "Reported weekly updates to external CIO during crisis escalation",
        "Routinely solved technical problems for large healthcare organization"
      ]
    },
  ],
  skills: [
      "Ruby/Rails", "Sinatra", "Ember 2", "HTML", "(S)CSS", "JS/ES2015",
      "Elixir/Phoenix"
  ],
  activities: [
    {
      name: "haystack",
      description: "search gem",
      url: "https://rubygems.org/gems/haystack",
      role: "Author, Maintainer",
      startDate: "2014"
    },
    {
      name: "Cambridge Systematics Software Brown Bag Series",
      role: "Organizer",
      startDate: "2014",
      endDate: "2015"
    },
    {
      name: "Boston Ruby Group",
      startDate: "2014"
    },
    {
      name: "BUDA, USAU ultimate frisbee",
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
