const employees = [
  {
    id: 1,
    firstName: "Jean",
    lastName: "Dupont",
    age: 32,
    department: "Developpement",
    position: "Developpeur Fullstack",
    salary: 55000,
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    joinDate: "2019-05-15",
    email: "jean.dupont@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 2,
    firstName: "Marie",
    lastName: "Martin",
    age: 28,
    department: "Design",
    position: "UI/UX Designer",
    salary: 48000,
    skills: ["Figma", "Adobe XD", "Photoshop", "User Research"],
    joinDate: "2020-02-10",
    email: "marie.martin@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "Spanish"],
  },
  {
    id: 3,
    firstName: "Pierre",
    lastName: "Bernard",
    age: 45,
    department: "Management",
    position: "Chef de projet",
    salary: 65000,
    skills: ["Agile", "Scrum", "JIRA", "Project Planning"],
    joinDate: "2017-11-22",
    email: "pierre.bernard@company.com",
    projects: ["Project Alpha", "Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English", "German"],
  },
  {
    id: 4,
    firstName: "Thomas",
    lastName: "Petit",
    age: 29,
    department: "Developpement",
    position: "Developpeur Frontend",
    salary: 52000,
    skills: ["React", "TypeScript", "CSS", "Jest"],
    joinDate: "2020-08-14",
    email: "thomas.petit@company.com",
    projects: ["Project Gamma", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 5,
    firstName: "Camille",
    lastName: "Leroux",
    age: 35,
    department: "Marketing",
    position: "Chef de produit",
    salary: 58000,
    skills: ["Market Research", "Product Strategy", "Roadmapping"],
    joinDate: "2018-06-03",
    email: "camille.leroux@company.com",
    projects: ["Project Alpha", "Project Delta"],
    isActive: false,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 6,
    firstName: "Antoine",
    lastName: "Moreau",
    age: 27,
    department: "Developpement",
    position: "Developpeur Backend",
    salary: 53000,
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    joinDate: "2021-03-18",
    email: "antoine.moreau@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 7,
    firstName: "elodie",
    lastName: "Simon",
    age: 31,
    department: "Design",
    position: "Graphiste",
    salary: 45000,
    skills: ["Illustrator", "InDesign", "Branding"],
    joinDate: "2019-09-22",
    email: "elodie.simon@company.com",
    projects: ["Project Gamma"],
    isActive: true,
    languages: ["French"],
  },
  {
    id: 8,
    firstName: "Nicolas",
    lastName: "Laurent",
    age: 40,
    department: "Management",
    position: "Directeur Technique",
    salary: 75000,
    skills: ["Architecture", "Team Leadership", "Cloud Computing"],
    joinDate: "2016-04-05",
    email: "nicolas.laurent@company.com",
    projects: [
      "Project Alpha",
      "Project Beta",
      "Project Gamma",
      "Project Delta",
    ],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 9,
    firstName: "Laura",
    lastName: "Michel",
    age: 26,
    department: "Marketing",
    position: "Chargee de communication",
    salary: 42000,
    skills: ["Social Media", "Content Writing", "Community Management"],
    joinDate: "2021-07-30",
    email: "laura.michel@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "German"],
  },
  {
    id: 10,
    firstName: "Alexandre",
    lastName: "Dubois",
    age: 33,
    department: "Developpement",
    position: "DevOps Engineer",
    salary: 60000,
    skills: ["AWS", "Terraform", "CI/CD", "Kubernetes"],
    joinDate: "2018-11-12",
    email: "alexandre.dubois@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 11,
    firstName: "Sarah",
    lastName: "Lefevre",
    age: 29,
    department: "Design",
    position: "UX Researcher",
    salary: 49000,
    skills: ["User Testing", "Data Analysis", "Prototyping"],
    joinDate: "2020-05-19",
    email: "sarah.lefevre@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 12,
    firstName: "Maxime",
    lastName: "Roux",
    age: 38,
    department: "Management",
    position: "Responsable RH",
    salary: 58000,
    skills: ["Recrutement", "Gestion de carrière", "Formation"],
    joinDate: "2017-02-28",
    email: "maxime.roux@company.com",
    projects: [],
    isActive: false,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 13,
    firstName: "Julie",
    lastName: "Fournier",
    age: 24,
    department: "Developpement",
    position: "Developpeuse Junior",
    salary: 38000,
    skills: ["JavaScript", "HTML/CSS", "Git"],
    joinDate: "2022-01-10",
    email: "julie.fournier@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 14,
    firstName: "David",
    lastName: "Girard",
    age: 42,
    department: "Developpement",
    position: "Architecte Logiciel",
    salary: 72000,
    skills: ["Microservices", "Design Patterns", "Java"],
    joinDate: "2015-08-15",
    email: "david.girard@company.com",
    projects: ["Project Alpha", "Project Delta"],
    isActive: true,
    languages: ["French", "English", "Portuguese"],
  },
  {
    id: 15,
    firstName: "Chloe",
    lastName: "Blanc",
    age: 30,
    department: "Marketing",
    position: "Responsable SEO",
    salary: 51000,
    skills: ["SEO", "Google Ads", "Analytics"],
    joinDate: "2019-04-03",
    email: "chloe.blanc@company.com",
    projects: ["Project Beta", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 16,
    firstName: "Kevin",
    lastName: "Lemoine",
    age: 25,
    department: "Design",
    position: "Motion Designer",
    salary: 43000,
    skills: ["After Effects", "Cinema 4D", "Animation"],
    joinDate: "2021-09-27",
    email: "kevin.lemoine@company.com",
    projects: ["Project Gamma"],
    isActive: true,
    languages: ["French"],
  },
  {
    id: 17,
    firstName: "Amandine",
    lastName: "Perrot",
    age: 36,
    department: "Management",
    position: "Directrice Marketing",
    salary: 68000,
    skills: ["Brand Strategy", "Digital Marketing", "Team Management"],
    joinDate: "2016-07-11",
    email: "amandine.perrot@company.com",
    projects: ["Project Alpha", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Italian"],
  },
  {
    id: 18,
    firstName: "Romain",
    lastName: "Chevalier",
    age: 27,
    department: "Developpement",
    position: "Developpeur Mobile",
    salary: 50000,
    skills: ["React Native", "Swift", "Firebase"],
    joinDate: "2020-10-05",
    email: "romain.chevalier@company.com",
    projects: ["Project Beta"],
    isActive: false,
    languages: ["French", "English"],
  },
  {
    id: 19,
    firstName: "Celine",
    lastName: "Barbier",
    age: 33,
    department: "Design",
    position: "Directrice Artistique",
    salary: 62000,
    skills: ["Art Direction", "Creative Strategy", "Brand Identity"],
    joinDate: "2018-03-14",
    email: "celine.barbier@company.com",
    projects: ["Project Alpha", "Project Gamma", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 20,
    firstName: "Julien",
    lastName: "Arnaud",
    age: 29,
    department: "Developpement",
    position: "Ingenieur QA",
    salary: 48000,
    skills: ["Testing", "Automation", "Selenium"],
    joinDate: "2020-06-22",
    email: "julien.arnaud@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 21,
    firstName: "Manon",
    lastName: "Royer",
    age: 31,
    department: "Marketing",
    position: "Chargee de projet evenementiel",
    salary: 45000,
    skills: ["Event Planning", "Logistics", "Partnerships"],
    joinDate: "2019-08-19",
    email: "manon.royer@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 22,
    firstName: "Fabien",
    lastName: "Colin",
    age: 34,
    department: "Developpement",
    position: "Data Engineer",
    salary: 59000,
    skills: ["Python", "SQL", "ETL", "Big Data"],
    joinDate: "2017-12-01",
    email: "fabien.colin@company.com",
    projects: ["Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 23,
    firstName: "Elise",
    lastName: "Mercier",
    age: 26,
    department: "Design",
    position: "UI Designer",
    salary: 44000,
    skills: ["Sketch", "Prototyping", "Design Systems"],
    joinDate: "2021-04-15",
    email: "elise.mercier@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 24,
    firstName: "Hugo",
    lastName: "Bourgeois",
    age: 41,
    department: "Management",
    position: "Directeur Financier",
    salary: 80000,
    skills: ["Financial Planning", "Budgeting", "Forecasting"],
    joinDate: "2015-05-09",
    email: "hugo.bourgeois@company.com",
    projects: [],
    isActive: true,
    languages: ["French", "English", "German"],
  },
  {
    id: 25,
    firstName: "Clara",
    lastName: "Henry",
    age: 28,
    department: "Developpement",
    position: "Developpeuse Fullstack",
    salary: 54000,
    skills: ["Vue.js", "Laravel", "MySQL"],
    joinDate: "2020-01-27",
    email: "clara.henry@company.com",
    projects: ["Project Alpha", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 26,
    firstName: "Mathieu",
    lastName: "Da silva",
    age: 30,
    department: "Marketing",
    position: "Growth Hacker",
    salary: 52000,
    skills: ["A/B Testing", "Conversion Optimization", "Digital Analytics"],
    joinDate: "2019-11-08",
    email: "mathieu.dasilva@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Portuguese"],
  },
  {
    id: 27,
    firstName: "Oceane",
    lastName: "Leroy",
    age: 27,
    department: "Design",
    position: "UX Designer",
    salary: 47000,
    skills: ["User Flows", "Wireframing", "Usability Testing"],
    joinDate: "2021-02-14",
    email: "oceane.leroy@company.com",
    projects: ["Project Alpha"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 28,
    firstName: "Quentin",
    lastName: "Sanchez",
    age: 35,
    department: "Developpement",
    position: "Tech Lead",
    salary: 67000,
    skills: ["Code Review", "Mentoring", "System Design"],
    joinDate: "2017-06-30",
    email: "quentin.sanchez@company.com",
    projects: ["Project Alpha", "Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 29,
    firstName: "Lea",
    lastName: "Nguyen",
    age: 24,
    department: "Marketing",
    position: "Assistante Marketing",
    salary: 35000,
    skills: ["Office Suite", "Market Research", "Reporting"],
    joinDate: "2022-03-01",
    email: "lea.nguyen@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Vietnamese"],
  },
  {
    id: 30,
    firstName: "Baptiste",
    lastName: "Meyer",
    age: 37,
    department: "Management",
    position: "Directeur des Operations",
    salary: 78000,
    skills: ["Process Optimization", "Supply Chain", "Vendor Management"],
    joinDate: "2016-09-18",
    email: "baptiste.meyer@company.com",
    projects: ["Project Alpha", "Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English", "German"],
  },
  {
    id: 31,
    firstName: "Zoe",
    lastName: "Dumont",
    age: 29,
    department: "Developpement",
    position: "Developpeuse Backend",
    salary: 56000,
    skills: ["Ruby on Rails", "PostgreSQL", "Redis"],
    joinDate: "2019-07-22",
    email: "zoe.dumont@company.com",
    projects: ["Project Gamma"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 32,
    firstName: "Theo",
    lastName: "Noël",
    age: 26,
    department: "Design",
    position: "Product Designer",
    salary: 49000,
    skills: ["Product Thinking", "User Journey Mapping", "UI Design"],
    joinDate: "2020-12-03",
    email: "theo.noel@company.com",
    projects: ["Project Beta", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 33,
    firstName: "Anaïs",
    lastName: "Bertrand",
    age: 32,
    department: "Marketing",
    position: "Responsable Relations Publiques",
    salary: 53000,
    skills: ["Media Relations", "Crisis Communication", "Press Releases"],
    joinDate: "2018-10-17",
    email: "anais.bertrand@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 34,
    firstName: "Paul",
    lastName: "Leclercq",
    age: 40,
    department: "Developpement",
    position: "CTO",
    salary: 95000,
    skills: ["Technical Strategy", "Innovation", "Team Building"],
    joinDate: "2014-02-05",
    email: "paul.leclercq@company.com",
    projects: [
      "Project Alpha",
      "Project Beta",
      "Project Gamma",
      "Project Delta",
      "Project Epsilon",
    ],
    isActive: true,
    languages: ["French", "English", "Dutch"],
  },
  {
    id: 35,
    firstName: "Inès",
    lastName: "Rivière",
    age: 28,
    department: "Design",
    position: "Illustratrice",
    salary: 42000,
    skills: ["Procreate", "Digital Painting", "Character Design"],
    joinDate: "2021-05-29",
    email: "ines.riviere@company.com",
    projects: ["Project Gamma"],
    isActive: false,
    languages: ["French", "English"],
  },
  {
    id: 36,
    firstName: "Alexis",
    lastName: "Philippe",
    age: 33,
    department: "Developpement",
    position: "Ingenieur Blockchain",
    salary: 71000,
    skills: ["Solidity", "Smart Contracts", "Ethereum"],
    joinDate: "2017-04-12",
    email: "alexis.philippe@company.com",
    projects: ["Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 37,
    firstName: "Louise",
    lastName: "Fontaine",
    age: 30,
    department: "Marketing",
    position: "Responsable Contenu",
    salary: 50000,
    skills: ["Content Strategy", "Copywriting", "Editing"],
    joinDate: "2019-02-25",
    email: "louise.fontaine@company.com",
    projects: ["Project Beta", "Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Chinese"],
  },
  {
    id: 38,
    firstName: "Benjamin",
    lastName: "Caron",
    age: 27,
    department: "Design",
    position: "UX Researcher",
    salary: 48000,
    skills: ["Qualitative Research", "Survey Design", "Persona Development"],
    joinDate: "2020-09-14",
    email: "benjamin.caron@company.com",
    projects: ["Project Alpha"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 39,
    firstName: "Emma",
    lastName: "Perrin",
    age: 31,
    department: "Developpement",
    position: "Developpeuse Frontend",
    salary: 57000,
    skills: ["Angular", "TypeScript", "RxJS"],
    joinDate: "2018-07-08",
    email: "emma.perrin@company.com",
    projects: ["Project Beta", "Project Gamma"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 40,
    firstName: "Nathan",
    lastName: "Giraud",
    age: 36,
    department: "Management",
    position: "Directeur Commercial",
    salary: 82000,
    skills: ["Sales Strategy", "Account Management", "Negotiation"],
    joinDate: "2016-01-20",
    email: "nathan.giraud@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 41,
    firstName: "Lena",
    lastName: "Boyer",
    age: 25,
    department: "Marketing",
    position: "Chargee de referencement",
    salary: 41000,
    skills: ["SEO", "Keyword Research", "Link Building"],
    joinDate: "2021-08-11",
    email: "lena.boyer@company.com",
    projects: ["Project Beta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 42,
    firstName: "Arthur",
    lastName: "Andre",
    age: 34,
    department: "Developpement",
    position: "Ingenieur Machine Learning",
    salary: 69000,
    skills: ["Python", "TensorFlow", "Data Science"],
    joinDate: "2017-10-23",
    email: "arthur.andre@company.com",
    projects: ["Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 43,
    firstName: "Julia",
    lastName: "Clement",
    age: 29,
    department: "Design",
    position: "Directrice UX",
    salary: 63000,
    skills: ["UX Strategy", "User Centered Design", "Accessibility"],
    joinDate: "2019-06-17",
    email: "julia.clement@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Italian"],
  },
  {
    id: 44,
    firstName: "Tom",
    lastName: "Fernandes",
    age: 26,
    department: "Developpement",
    position: "Developpeur Fullstack",
    salary: 51000,
    skills: ["PHP", "Symfony", "Vue.js"],
    joinDate: "2020-11-09",
    email: "tom.fernandes@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English", "Portuguese"],
  },
  {
    id: 45,
    firstName: "Lina",
    lastName: "Lopez",
    age: 32,
    department: "Marketing",
    position: "Responsable Partenariats",
    salary: 55000,
    skills: ["Partnership Development", "Sponsorship", "Networking"],
    joinDate: "2018-05-30",
    email: "lina.lopez@company.com",
    projects: ["Project Alpha", "Project Beta"],
    isActive: true,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 46,
    firstName: "Enzo",
    lastName: "Robin",
    age: 28,
    department: "Design",
    position: "Graphiste Print",
    salary: 43000,
    skills: ["InDesign", "Typography", "Print Production"],
    joinDate: "2020-04-12",
    email: "enzo.robin@company.com",
    projects: ["Project Gamma"],
    isActive: false,
    languages: ["French"],
  },
  {
    id: 47,
    firstName: "Maëlys",
    lastName: "Gauthier",
    age: 30,
    department: "Developpement",
    position: "Ingenieure QA Automatisation",
    salary: 58000,
    skills: ["Cypress", "Test Automation", "CI/CD"],
    joinDate: "2019-01-15",
    email: "maelys.gauthier@company.com",
    projects: ["Project Beta", "Project Delta"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 48,
    firstName: "Hugo",
    lastName: "Martinez",
    age: 38,
    department: "Management",
    position: "Directeur de Projet",
    salary: 74000,
    skills: ["Risk Management", "Stakeholder Management", "Agile Coaching"],
    joinDate: "2016-08-22",
    email: "hugo.martinez@company.com",
    projects: ["Project Alpha", "Project Gamma"],
    isActive: true,
    languages: ["French", "English", "Spanish"],
  },
  {
    id: 49,
    firstName: "Leonie",
    lastName: "Dufour",
    age: 27,
    department: "Marketing",
    position: "Community Manager",
    salary: 40000,
    skills: ["Social Media", "Influencer Marketing", "Brand Voice"],
    joinDate: "2021-02-28",
    email: "leonie.dufour@company.com",
    projects: ["Project Epsilon"],
    isActive: true,
    languages: ["French", "English"],
  },
  {
    id: 50,
    firstName: "Sophie",
    lastName: "Leroy",
    age: 31,
    department: "Marketing",
    position: "Responsable marketing digital",
    salary: 52000,
    skills: ["SEO", "Google Analytics", "Content Marketing", "Social Media"],
    joinDate: "2021-01-05",
    email: "sophie.leroy@company.com",
    projects: ["Project Epsilon"],
    isActive: false,
    languages: ["French", "English", "Italian"],
  },
];

// 1 Renvoie le prenom du premier employe du tableau
const getFirstEmployeeFirstName = (array) => {
  return array[0].firstName;
};
// console.log(getFirstEmployeeFirstName(employees));

// 2 Renvoie le nom de famille du dernier employe du tableau.
const getLastEmployeeLastName = (array) => {
  return array[array.length - 1].lastName;
};
// console.log(getLastEmployeeLastName(employees));

// 3 Renvoie le departement de l’employe avec l’ID 5.
const getEmployeeDepartmentById = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return array[i].department;
    }
  }
};
// console.log(getEmployeeDepartmentById(employees,5));

// 4 Renvoie le nombre total d’employes dans le tableau.
const countEmployees = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count++;
  }
  return count;
};
// console.log(countEmployees(employees));

// 5 Renvoie si un employe est inactif, sinon .truefalse
function hasInactiveEmployees(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id && array[i].isActive !== false) {
      return false;
    }
  }
  return true;
}
// console.log(hasInactiveEmployees(employees, 5));

// 6 Renvoie l’âge moyen de tous les employes.
const calculateAverageAge = (array) => {
  let moyenneAge = 0;
  for (let i = 0; i < array.length; i++) {
    moyenneAge += array[i].age / array.length;
  }
  return moyenneAge.toFixed(2);
};
// console.log(calculateAverageAge(employees));

// 7 Renvoie l’objet employe avec le salaire le plus eleve.
const getHighestPaidEmployee = (array) => {
  let maxSalaire = 0;
  const salary = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i].salary > maxSalaire) {
      maxSalaire = array[i].salary;
      return array[i];
    }
  }
};
// console.log(getHighestPaidEmployee(employees));

// 8 Renvoie le nombre de collaborateurs dans le departement « Developpement ».
const countEmployeesInDepartment = (array, department) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].department === department) {
      count++;
    }
  }
  return count;
};
// console.log(countEmployeesInDepartment(employees,"Developpement"));

// 9 Renvoie un tableau de noms de service uniques.
function includese(array, department) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == department) {
      return true;
    }
  }
  return false;
}

function getUniqueDepartmentse(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (!includese(output, array[i].department)) {
      output.push(array[i].department);
    }
  }
  return output;
}
// 10 console.log(getUniqueDepartmentse(employees));
function getUniqueDepartments(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (!output.includes(array[i].department)) {
      output.push(array[i].department);
    }
  }
  return output;
}
// console.log(getUniqueDepartments(employees));

// 11 Renvoie si aucun employe n’a de projets assignes, sinon .truefalse
function hasEmployeesWithoutProjects(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].projects != []) {
      return true;
    }
  }
}
// console.log(hasEmployeesWithoutProjects(employees));

// 12 Renvoie le nombre d’employes qui parlent anglais.
function checkLangues(array, langue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == langue) {
      return true;
    }
  }
}
const countEnglishSpeakingEmployees = (array) => {
  let countAnglais = 0;
  for (let i = 0; i < array.length; i++) {
    if (checkLangues(array[i].languages, "English")) {
      countAnglais++;
    }
  }
  return countAnglais;
};
// console.log(countEnglishSpeakingEmployees(employees));

// 13 Renvoie un ensemble d’employes travaillant sur le « Projet Gamma ».
function checkprojet(array, data) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == data) {
      return true;
    }
  }
}
const getEmployeesByProject = (array, input) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (checkprojet(array[i].projects, input)) {
      output.push(array[i]);
    }
  }
  return output;
};
// console.log(getEmployeesByProject(employees, "Project Gamma"));

// 14 Renvoie un tableau d’employes dont le nom de famille commence par « L ».
function checkFistCase(string, lettre) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == lettre) {
      return true;
    }
  }
}
const getEmployeesByLastNameInitial = (array, lettre) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (checkFistCase(array[i].lastName, lettre)) {
      output.push(array[i]);
    }
  }
  return output;
};
// console.log(getEmployeesByLastNameInitial(employees, "L"));

// 15 Renvoie un objet avec des salaires moyens pour chaque service.
function calculateAverageSalaryByDepartment(array) {
  let table = [];
  let result = {};

  for (let i = 0; i < array.length; i++) {
    let departementes = array[i].department;
    let salary = array[i].salary;
    table.push({ department: departementes, salary: salary });
  }

  for (let i = 0; i < table.length; i++) {
    let dep = table[i].department;
    let sal = table[i].salary;

    if (!result[dep]) {
      result[dep] = { somme: sal, count: 1 };
    } else {
      result[dep].somme += sal;
      result[dep].count++;
    }
  }

  for (let dep in result) {
    result[dep] = result[dep].somme / result[dep].count;
  }

  return result;
}
// console.log(calculateAverageSalaryByDepartment(employees));

// 16 Renvoie un tableau d’employes qui ont rejoint l’entreprise après 2020.
const getEmployeesJoinedAfterYear = (array, date) => {
  let sortie = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].joinDate > date) {
      sortie.push(array[i]);
    } else {
      console.log("aucaun employes");
      break;
    }
  }
  return sortie;
};
// console.log(getEmployeesJoinedAfterYear(employees,"2020"));

// 17 Renvoie un tableau d’employes qui parlent plus de 2 langues.
const getMultilingualEmployees = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].languages.length >= 2) {
      result.push(array[i]);
    }
  }
  return result;
};
// console.log(getMultilingualEmployees(employees));

// 18 Renvoie la competence la plus courante parmi tous les employes.
function getMostCommonSkill(array) {
  let max = 0;
  let mostCommonSkill = null;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let skills = array[i].skills;
    for (let j = 0; j < skills.length; j++) {
      let skill = skills[j];
      if (!result[skill]) {
        result[skill] = { skill, count: 1 };
      } else {
        result[skill].count++;
      }
    }
  }

  for (const key in result) {
    if (result[key].count > max) {
      max = result[key].count;
      mostCommonSkill = key;
    }
  }

  return mostCommonSkill;
}
// console.log(getMostCommonSkill(employees));

// 19 Renvoie un tableau d’employes gagnant plus de 60000.
const getHighEarningEmployees = (array, salary) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].salary >= salary) {
      output.push(array[i]);
    }
  }
  return output;
};
// console.log(getHighEarningEmployees(employees,60000));

// 20 Renvoie l’employe qui travaille dans l’entreprise depuis le plus longtemps.
const getLongestServingEmployee = (array) => {
  let ancienne = array[0];
  for (let i = 0; i < array.length; i++) {
    if (new Date(array[i].joinDate) < new Date(ancienne.joinDate)) {
      ancienne = array[i];
    }
  }
  return ancienne;
};
// console.log(getLongestServingEmployee(employees));

// 21 Renvoie un objet avec le nombre d’employes dans chaque service.
const countEmployeesByDepartment = (array) => {
  let output = {};
  for (let i = 0; i < array.length; i++) {
    let departemente = array[i].department;
    if (!output[departemente]) {
      output[departemente] = 1;
    } else {
      output[departemente]++;
    }
  }
  return output;
};
// console.log(countEmployeesByDepartment(employees));

// 22 Renvoie le nom du service comptant le plus grand nombre d’employes.
function getLargestDepartment(array) {
  let departemente = null;
  let checking = {};
  for (let i = 0; i < array.length; i++) {
    let departementt = array[i].department;
    checking[departementt] = (checking[departementt] || 0) + 1;
  }
  let max = 0;
  for (const dep in checking) {
    if (checking[dep] > max) {
      max = checking[dep];
      departemente = dep;
    }
  }
  return departemente;
}
// console.log(getLargestDepartment(employees));

// 23 Renvoie un objet avec les depenses salariales totales pour chaque service.
const calculateTotalSalaryByDepartment = (array) => {
  let output = {};
  for (let i = 0; i < array.length; i++) {
    let departemente = array[i].department;
    let salaryy = array[i].salary;
    if (!output[departemente]) {
      output[departemente] = salaryy;
    } else {
      output[departemente] += salaryy;
    }
  }
  return output;
};
// console.log(calculateTotalSalaryByDepartment(employees));

// 24 Renvoie un tableau de tous les postes uniques dans le departement « Marketing ».
const getPositionsInDepartment = (array, departement) => {
  let tabMarketing = [];
  for (let i = 0; i < array.length; i++) {
    let position = array[i].position;
    if (
      !tabMarketing.includes(position) &&
      departement === array[i].department
    ) {
      tabMarketing.push(position);
    }
  }
  return tabMarketing;
};
// console.log(getPositionsInDepartment(employees, "Marketing"));

// 25 Renvoie un objet avec le nombre moyen de projets par employe pour chaque service.
const calculateAverageProjectsByDepartment = (array) => {
  let depart = {};
  let projectses = {};
  for (let i = 0; i < array.length; i++) {
    let departemente = array[i].department;
    let countProject = array[i].projects.length;
    if (!depart[departemente]) {
      depart[departemente] = 1;
    } else {
      depart[departemente]++;
    }

    if (!projectses[departemente]) {
      projectses[departemente] = countProject;
    } else {
      projectses[departemente] += countProject;
    }
  }

  let result = {};
  for (const dept in depart) {
    result[dept] = (projectses[dept] / depart[dept]).toFixed(2);
  }
  console.log(result);
};
// calculateAverageProjectsByDepartment(employees);

// 26 Renvoie un tableau de tous les noms de projet uniques.
const getUniqueProjectNames = (array) => {
  let projects = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i].projects;
    for (let j = 0; j < element.length; j++) {
      const elementj = element[j];
      if (!projects.includes(elementj)) {
        projects.push(elementj);
      }
    }
  }

  return projects;
};
// console.log(getUniqueProjectNames(employees));

// 27 Renvoie un objet avec le nombre d’employés travaillant sur chaque projet.
const countEmployeesByProject = (array) => {
  let output = {};
  for (let i = 0; i < array.length; i++) {
    const array1 = array[i].projects;
    for (let j = 0; j < array1.length; j++) {
      const elementj = array1[j];
      if (!output[elementj]) {
        output[elementj] = 1;
      } else {
        output[elementj]++;
      }
    }
  }
  return output;
};
// console.log(countEmployeesByProject(employees));

// 28 Renvoie un tableau de noms de projet avec un seul employé affecté.
const getSoloProjects = (array) => {
  let output = {};
  for (let i = 0; i < array.length; i++) {
    const array1 = array[i].projects;
    for (let j = 0; j < array1.length; j++) {
      const elementj = array1[j];
      if (!output[elementj]) {
        output[elementj] = 1;
      } else {
        output[elementj]++;
      }
    }
  }
  for (const projecte in output) {
    if (output[projecte] == 1) {
      return projecte;
    } else {
      return [];
    }
  }
};
// console.log(getSoloProjects(employees));

// 29 Renvoie un tableau d’employés affectés à plusieurs projets.
const getEmployeesWithMultipleProjects = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const employe = array[i];
    const condition = array[i].projects.length;
    if (condition > 1) {
      result.push(employe);
    }
  }
  return result;
};
// console.log(getEmployeesWithMultipleProjects(employees));

// 30 Renvoie le nom du projet avec le plus grand nombre d’employés affectés.
const getMostPopularProject = (array) => {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    const array1 = array[i].projects;
    for (let j = 0; j < array1.length; j++) {
      const element = array1[j];
      if (!obj[element]) {
        obj[element] = 1;
      } else {
        obj[element]++;
      }
    }
  }
  let max = 0;
  for (const key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      return key;
    }
  }
};
// console.log(getMostPopularProject(employees));

// 31 Renvoie un tableau de noms complets pour tous les employés.
const getFullNames = (array) => {
  let sortin = [];
  let fullname = " ";
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i].firstName;
    const element2 = array[i].lastName;
    fullname = element1 + " " + element2;
    sortin.push(fullname);
  }
  return sortin;
};
// console.log(getFullNames(employees));

// 32 Normaliser tous les noms : mettre en majuscule la première lettre, le reste en minuscules
const normalizeNames = (array) => {
  let names = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i].firstName;
    const convertine =
      element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    names.push(convertine);
  }
  return names;
};
// console.log(normalizeNames(employees));

// 33 Renvoie un tableau d’initiales pour tous les employés.
// const getEmployeeInitials = (array) => {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     const firstName = array[i].firstName;
//     const lastName = array[i].lastName;
//     const str = firstName.charAt(0).toUpperCase()+lastName.charAt(0).toUpperCase();
//     output.push(str)
//   }
//   return output;
// }
// console.log(getEmployeeInitials(employees));

// native::
const getEmployeeInitials = (array) => {
  let output = [];
  let element1 = " ";
  let element2 = " ";
  for (let i = 0; i < array.length; i++) {
    const firstName = array[i].firstName;
    const lastName = array[i].lastName;
    for (let j = 0; j < firstName.length; j++) {
      element1 = firstName[0].toUpperCase();

      for (let h = 0; h < lastName.length; h++) {
        element2 = lastName[0].toUpperCase();
      }
    }
    output.push(element1 + element2);
  }
  return output;
};
// console.log(getEmployeeInitials(employees));

// 34 Renvoie le tableau employees avec la propriété 'yearsOfService' ajoutée.
const addYearsOfService = (array) => {
  let output = [];
  let yearsOfService = 1;
  for (let i = 0; i < array.length; i++) {
    array[i].yearsOfService = 1;
    output.push(array[i]);
  }
  return output;
};
// console.log(addYearsOfService(employees));

const moyenneActive = (array) => {
  let somme = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].isActive == true) {
      count++;
      somme += array[i].salary;
    }
  }
  return (moyenne = somme / count);
};
// console.log(moyenneActive(employees));

//age and "a"
const ageAndaa = (array) => {
  let max = array[0];
  let table = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].firstName[0] == "A") {
      table.push(array[i]);
    }
  }
  // console.log(table);
  
  for (let i = 0; i < table.length; i++) {
    if (table[i].age > max.age) {
      max = table[i];
    }
  }
  return max
};
// console.log(ageAndaa(employees));

// function lenght::
// 1::
function countLength(arr) {
  let i = 0;

  while (arr[i] != undefined) {
    i++;
  }

  return i;
}
// 2::
const getLentgth = (data) => {
  let count = 0;
  for (; data[count] != undefined; count++) {}
  return count;
};
// console.log(length([1,4,0,8,9]));

function getMaxAge(employees) {
  let age = employees[0].age;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > age && employees[i].firstName[0] === "A") {
      // console.log(age);
      age=employees[i].age
    }
  }
  console.log(age);
  
}
// getMaxAge(employees)


let tabel1 = [
  { name:"anass" , age: 20},
  { name:"aymene" , age: 11},
  { name:"ghfh" , age: 22},
  { name:"sdgdf" , age: 33},
]
let tabel2 = [
  { name:"df" , age: 10},
  { name:"sffvsg" , age: 81},
  { name:"ghfh" , age: 22},
  { name:"sdgdf" , age: 33},
]

const doublons = (array1, array2) => {
  let newtable = []
  const merged = [...array1, ...array2]

  for (let i = 0; i < merged.length; i++) {
    let exists = false
    for (let j = 0; j < newtable.length; j++) {
      if (
        merged[i].name === newtable[j].name &&
        merged[i].age === newtable[j].age
      ) {
        exists = true
        break
      }
    }
    if (!exists) {
      newtable.push(merged[i])
    }
  }

  return newtable
}
// console.log(doublons(tabel1,tabel2));


function isExists(array,element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name == element.name && array[i].age == element.age) {
      return true
    }    
  }
  return false
}
function doublons1(array1,array2) {
  let newtable = [];
  for (let i = 0; i < array1.length; i++) {
    if (!isExists(newtable,array1[i])) {
      newtable.push(array1[i])
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (!isExists(newtable,array2[i])) {
      newtable.push(array2[i])
    }
  }
  return newtable;
}
// console.log(doublons1(tabel1,tabel2));

// 
function transferArray(arr) {
  let newArr = [];
  let finalElement = arr[arr.length - 1];
  let table = [];
  for(let i = 0; i < arr.length; i++) {
    table.push(arr[i]);
    if(table.length == finalElement) {
      newArr.push(table);
      table=[]
    }
  }
  return newArr;
}
// console.log(transferArray([1, 2, 3, 5, 6, 7, 2]));

let str = "helloworldabddd mouad hawareyou";
const long = (str) => {
  let words = str.split(' ')
  let max = 0 ;
  let output = ""
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length
      output = words[i]
    }
  }
  return output
}
console.log(long(str));