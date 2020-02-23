import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
declare var setActiveStyleSheet:any
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  hideHeader = false;
  constructor(private http: HttpClient,mediaObserver: MediaObserver) { 

    mediaObserver.media$.subscribe((change: MediaChange) => {
      this.hideHeader = mediaObserver.isActive('lt-md')
      if(this.hideHeader){
        $(".about_person_area").css({"padding-top":"50px","padding-bottom":"50px"})
      }else{
        $(".about_person_area").css({"padding-top":"100px","padding-bottom":"100px"})
      }
    });
    // colorlist = default , pink,orange,past,violet,blue

    this.http.get('assets/settings/settings.json').subscribe(val=>{
      setTimeout(() => {
        let color = val['color'] || 'default';
        setActiveStyleSheet(color)
      }, 400);
    })
  }
  color;
  skills = [

    {
      'skill':'Javascript',
      'score':'95'
    },
    
    {
      'skill':'Html & Css',
      'score':'90'
    },
        
    {
      'skill':'Angular',
      'score':'90'
    },
            
    {
      'skill':'Material',
      'score':'90'
    },
    {
      'skill':'Python',
      'score':'90'
    },
    {
      'skill':'Matplotlib',
      'score':'80'
    },
    {
      'skill':'Sci-Learn',
      'score':'80'
    },
    {
      'skill':'Statistics',
      'score':'75'
    }
  ]

  experience = [
    
    {
      "year" : "Jul-2019 to present",
      "title":'Kaggle',
      'shortDesc':'Kernel Expert'
    } ,
    
    {
      "year" : "Jun-2019 to present",
      "title":'LMS UI',
      'shortDesc':'Web Application',
      'description':`We have been transfering the actual Mainframe
      application into powerful web UI. Worked on integrating
      Payment Devices, Frontdesk User can Generate multiple report
      seemlessly. And also User can automate every aspect of hotel operations, from creating a reservation to property management`
    } ,

    
    
    {
      "year" : "Feb-2019 to May-2019",
      "title":'LMS Report',
      'shortDesc':'Web Application',
      'description':`User can generate 62 real time reports including guest arrival,departure,group bill,desposit list by cashier,
      revenue summary,unearned revenue, inventory etc. All these reports comes with dynamic columns and filter. So it was developed in a way to accomadate in a single template`
    },
    {
      "year" : "Nov-2018 to Jan-2019",
      "title":'Rguest Express Kiosk',
      'shortDesc':'Desktop Application',
      'description':`
      Developed a self-service kiosk check-in, room key encoding, check-out and sending folio's via mail,
      So no more long lines at the Frontdesk. Integrated a
      Passport and Driving License scanner for verification. After verification User
      can select room, do their Payment, collect Keycard for
      check-in. Integrated 4 devices and 110 kiosks are in live using
      by 8 clients`
    },
  
    {
      "year" : "Oct-2018 to  Nov-2018",
      "title":'IG Mobile',
      'shortDesc':'Mobile Application',
      'description':`IG Mobile Order is a dependable, feature-rich, mobile POS alternative for service providers in the Food and Beverage/Hospitality industries.User can use this
      application to order the food with either by cash or using
      casino points. They can see the cooking time and will be
      notified once it is ready. They can either choose to have the
      food in hotel or take away. User can choose their seat. On
      Admin side the server will be notified about the order ,
      Payment and Seat arrangement. And also managers can streamline their operations from the centralized location while front-line staff can efficiently take the service to the guests.
  `
    },

        
    {
      "year" : "Jun-2018 to Sep-2018",
      "title":'Check-In & Check-Out',
      'shortDesc':'Web Application',
      'description':`User can use this application to Check-in & Check-out the room , make their payment from anywhere without visiting the Frontdesk`
    },
    {
      "year" : "Apr-2018",
      "title":'Double Slider',
      'shortDesc':'Angular plugin',
      'description':`Developed a doublie slider plugin in Angular and made the implementation easy. And also dded a lot of
      features for customization.  You can use it in Native angular app and also comes with mobile support. 
      You can also use it in ionic and react natvie.       `
    },
  
    {
      "year" : "Mar-2018 to May-2018",
      "title":'Booking Engine',
      'shortDesc':'Web Application',
      'description':`User can easily book a single room, or multiple rooms at once with an appealing presentation of all the choices and amenities this app offer.
      And it's a Mobile-friendly booking makes for a responsive reservation experience whether on a smart phone, tablet or laptop `
    },
    {
      "year":'Mar-2018',
      "title":'Agilysys',
      'shortDesc':'Software Engineer',
      'description':`Agilysys is a company which provides a hospitality software for hotels, restaurants and resorts to manage property, inventory and process payments.`
    },
    
 
    
    {
      "year" : "May-2017 to Feb - 2018",
      "title":'Product Communication Analysis Tool',
      'shortDesc':'E-commerce Website',
      'description':`This is an analysis tool which helps in tracking the input about the customer
need, strategies, market input, competitor information, the
project and included products is gathered and explored
which then leads to defining communication needs and how
to convey them to the customer`
    },
    {
      "year" : "Jan-2016 to May - 2017",
      "title":'ShopNet',
      'shortDesc':'E-commerce Website',
      'description':`The main feature of
      this website are Tracking Shopping Activity, Tracking
      Customer Wishlist and Recently viewed Items for both
      LoggedIn and Guest user, QuickLinks, Dynamically updating
      offers in the Home Page`
    },
    {
      "year":'Oct-2015',
      "title":'Tata Consultancy Service',
      'shortDesc':'Software Trainee',
      'description':`TATA Consultancy Services Limited is an Indian multinational service based company. I was joined in Ikea project which is a Retail company.`
    }
  ]
  certification = [
    {
      'year' : '',
      'title':'Introduction to Data Science in Python',
      'link' : 'https://www.coursera.org/account/accomplishments/certificate/WHR73GR3RWVD'
    },
    {
      'year' : '',
      'title':'Applied Machine Learning in Python',
      'link':'https://www.coursera.org/account/accomplishments/certificate/MX8ZSWVADFZY'
    },
    {
      'year' : '',
      'title':'Neural Networks and Deep Learning',
      'link':'https://www.coursera.org/account/accomplishments/certificate/Z6YJGH6RD6BA'
    },
    {
      'year' : '',
      'title':'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization',
      'link':'https://www.coursera.org/account/accomplishments/certificate/LR4DVDCSAR23'
    },
    {
      'year' : '',
      'title':'Structuring Machine Learning Projects',
      'link':'https://www.coursera.org/account/accomplishments/certificate/B7KCHNHUHYUW'
    }
  ]
  projects = [
    {
      "title":"House Price Prediction",
      "link":"house-price-prediction.html",
      "img":"1",
      "category":"ml",
      'desc' : 'Predictions'
    },
  
    {
      "title":"CoronaVirus",
      "link":"coronavirus-analysis.html",
      "category":"ml",
      'desc' : 'Analysis',
      'img':'9'
    },
    {
      "title":"Deep Visualization",
      "link":"deep-visualization.html",
      "category":"ml",
      'desc' : 'Visualization',
      'img':'6'
    },
  
    {
      "title":"Power of Recommendation",
      "link":"house-price-prediction.html",
      "category":"ml",
      'desc' : 'Predictions',
      'img':'8'
    },
    {
      "title":"Titanic Disaster Analysis",
      "link":"titanic-analysis.html",
      "category":"ml",
      'desc' : 'Analysis & Predictions',
      'img':'4'
    },
    {
      "title":"Black Friday Sale Prediction",
      "link":"black-friday-sale-predictions.html",
      "category":"ml",
      'desc' : 'Competition',
      'img':'2'
    },
 
 
    {
      "title":"Exploratory Data Analysis",
      "link":"extensive-exploratory-data-analysis.html",
      "category":"ml",
      'desc' : 'Analysis',
      'img':'5'
    },
    {
      "title":"L&T Forecasting Application Count",
      "link":"av-competition.html",
      "category":"ml",
      'desc' : 'Competition',
      'img':'3'
    },
    {
      "title":"Movie Recommendation",
      "link":"movie-recommendation.html",
      "category":"ml",
      'desc' : 'Predictions',
      'img':'7'

    },
    {
      "title":"LMS UI",
      "category":"company",
      'img' : '4',
      'desc':'Web Application'
    },
    {
      "title":"Booking Engine",
      "category":"company",
      'img' : '2',
      'desc':'Web Application'
    },    {
      "title":"Rguest Kiosk",
      "category":"company",
      'img':'1',
      'desc':'Desktop Application'
    },
    {
      "title":"IG Mobile",
      "category":"company",
      'img' : '3',
      'desc': 'Mobile Application'
    },
      {
      "title":"Double Slider",
      "category":"personal",
      'img' : '1',
      'link':'https://www.npmjs.com/package/angular-double-slider',
      'desc':'Angular Plugin'
    },
    {
      "title":"ML Algorithm from Scratch",
      "category":"personal",
      'img' : '2',
      'link':'https://github.com/johnjagu25/ML-Algo-from-scratch',
      'desc':'ML Algorithm'
    },
    {
      "title":"Solving programs daily",
      "category":"personal",
      "link":'https://github.com/johnjagu25/Python-Daily-coding-challenge',
      'img' : '3',
      'desc':'Competitive Coding'
    }
  ]
}
