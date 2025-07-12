import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Online Artists Hiring Management System',
      desc: '',
      githurl: 'https://github.com/KaveendraY/online_artists_hiring_management_system',
      imgUrl: 'assets/images/z1.png',
      tech: 'HTML | JavaScript'
    },

    {
      id: 2,
      title: 'VS-Code-Extension-for-Code-Autocompletion',
      desc: '',
      githurl: 'https://github.com/KaveendraY/VS-Code-Extension-for-Code-Autocompletion',
      imgUrl: 'assets/images/z26.png'
    },


    {
      id: 3,
      title: 'Enquiry-App-Management-System',
      desc: '',     
      githurl: 'https://github.com/KaveendraY/Enquiry-App-Management-System',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 18 | ASP.NET Core | MSSQL | Bolt AI'
    },

    {
      id: 4,
      title: 'Dating_App',
      desc: '',
      githurl: 'https://github.com/KaveendraY/Dating_App',
      imgUrl: 'assets/images/z23.png',
      tech: 'Angular | ASP.NET Core | MSSQL'
    },


    {
      id: 5,
      title: 'Meta-AI-Agent for Business',
      desc: '',
      githurl: 'https://github.com/KaveendraY/Meta-AI-Agent',
      imgUrl: 'assets/images/z4.png',
      tech: 'NEST JS | Whatsapp Cloud API'
    },



    {
      id: 6,
      title: 'Chatbot Front-end',
      desc: '',
      githurl: 'https://github.com/KaveendraY/chatbot-frontend',
      imgUrl: 'assets/images/z24.png',
      tech: 'Angular | Xano (no code backend)'
    },



    {
      id: 7,
      title: 'Employee-Management (CRUD)',
      desc: 'Website that allowing one to create, update, delete list of employees. An employee record consists of Id, name, email and job position.',
      githurl: 'https://github.com/KaveendraY/Employee-Management-CRUD',
      imgUrl: 'assets/images/z21.png',
      tech: 'ASP.NET Core'
    },



    {
      id: 8,
      title: 'News And Articles Publishing System',
      desc: '',
      githurl: 'https://github.com/mehulk05/COVOID-19',
      imgUrl: 'assets/images/z2.png',
      tech: 'HTML | CSS | Javascript | PHP'
    },



    {
      id: 11,
      title: 'Personal Portfolio V2 Using Angular',
      desc: 'Personal portfolio',
      githurl: 'https://github.com/KaveendraY/portfolio_v2',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },

  ]
  about2 = `Software Engineer with 2+ years of experience. .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies. .
  Have good understanding of identifying and resolving issues.`

  about = "Describing myslef as an engineer but not only a developer. Lover of innovation and everything related to generate new knowledge. Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    
    {
      id: 3,
      company: 'JRC Software Pvt Ltd.  ',
      timeline: 'June 2024 to Present',
      role: 'Associate Software Engineer',
      work: `Technologies : Angular , DotNet, Xano, Weweb .

      Project 1 : Worked on a real-time chatbot for request maintenance of property for tenants. Integrated with Xano(no-code backend). .
      Project 2 : Worked on a R&D project to enhance real-time chatbot using Vertex AI.

      
    ` },

    {
      id: 1,
      company: 'MG Consultants Pvt Ltd.',
      timeline: 'June 2023 - Jan 2024',
      role: 'Intern - Software Developer',
      work: `Technologies : Angular , SpringBoot, MongoDB, Google Appscript .

      Project 1 : Worked on project management CRUD application which used to record and see project status. .

      Project 2 : Worked on shared service automation using google form to enhance productivity of internal services of the company.


  `
    },


  ]

  extraCurricularInfo: any = [
    {
      id:1,
      title: 'Tech Blogs',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    // {
    //   id:1,
    //   title: 'Github',
    //   description: '',
    //   img: 'assets/images/Mehulkothari_github.png',
    //   url: 'https://github.com/mehulk05/'
    // },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCurricular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCurricularInfo;
  }
}
