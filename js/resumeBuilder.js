/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Roberto Perez-Soriano",
    "role": "Software Developer ",
    "contacts": {
        "mobile": "619-000-0000",
        "email": "roberto.xxxxxxxxxxxx@gmail.com",
        "github": "github.com/robertoperezsoriano",
        "twitter": "@robertoperezxx",
        "location": "San Diego, CA"
    },
    "biopic": "images/fry.jpg ",
    "welcomeMessage": "Hi! Welcome to my site! ",
    "skills": ["Java ", "C ", "C++ ", "Javascript ", "HTML ", "CSS"]
};

//schools, cities, majors, minors, graduation years, online courses
var education = {
    "schools": [{
            "name": "San Diego State University",
            "location": "San Diego, CA",
            "degree": "Bachelor of Science",
            "date": 2017,
            "url": "sdsu.edu",
            "majors": ["Computer Science"]
        },
        {
            "name": "Chula Vista High School",
            "location": "Chula Vista, CA",
            "degree": "High School Diploma",
            "date": 2013,
            "url": "cvh.sweetwaterschools.org/",
            "majors": ["n/a"]
        }
    ],
    "onlineCourses": [{
            "title": "Developing Android Apps",
            "school": "Udacity",
            "dates": 2016,
            "url": "udacity.com"
        },
        {
            "title": "HTML & CSS Basics",
            "school": "Udacity",
            "dates": 2016,
            "url": "udacity.com"
        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": 2016,
            "url": "udacity.com"
        }
    ]
};

//employer, title, location, dates, description
var work = {
    "jobs": [{
        "employer": "San Diego Democratic Party Committee",
        "title": "Volunteer Assistant",
        "location": "Chula Vista, CA",
        "dates": "October 2012 - November 2012",
        "description": "Worked in team environment. Data collection and management for use in statistical analysis. Daily duties included distributing flyers, phone calls to promote voting, sending informational e-mails ."

    },
        {
        "employer": "San Diego Democratic Party Committee",
        "title": "Volunteer Assistant",
        "location": "Chula Vista, CA",
        "dates": "October 2012 - November 2012",
        "description": ["Worked in team environment. ",
            "Data collection and management for use in statistical analysis. ",
            "Daily duties included distributing flyers, phone calls to promote voting, sending informational e-mails ."
            ]
    }
    ]

};

//title, dates and description strings, and an images array with URL strings for project images.
var projects = {
    "projects": [{
        "title": "Personal Website",
        "dates": "November 2016",
        "description": "A small personal website built from scratch",
        "images": ["images/city-q-c-301-204-4.jpg", "images/city-q-c-301-204-5.jpg" ]
    },
    {
        "title": "Personal Website",
        "dates": "November 2016",
        "description": "A small personal website built from scratch",
        "images": ["images/city-q-c-301-204-5.jpg", "images/city-q-c-301-204-4.jpg" ]
    }
    ]

};

// Displaying name and contact info
header.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role) ;
    $("#header").append(formattedRole);

    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedImage);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#header").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedLocation);

    //Displaying skills
    if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
};
header.display();

//Displaying array of jobs
work.display =  function() {
    for(var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedJobLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
    }
};
work.display();


//Displaying array of projects
projects.display = function() {
    for(var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[i].images.length > 0) {
            for(var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();


//Displaying array of schools & online courses
education.display = function () {
    for(var i =0; i <education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        //name, degree, dates, location, major
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for(var j = 0; j < education.onlineCourses.length; j++) {
        //title, school, dates, url
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        $(".education-entry:last").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};
education.display();

//Adding a map
$("#mapDiv").append(googleMap);

// $("#main").append(internationalizeButton);

// function inName() {
//     newName = bio.name;
//     var nameArray = newName.trim().split(" ");

//     nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
//     nameArray[1] = nameArray[1].toUpperCase();

//     newName = nameArray.join(" ");

//     return newName;
// }