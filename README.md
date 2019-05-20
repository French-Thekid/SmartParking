# SmartParking
This is a cross platform mobile application created using Ionic 4 framework with angular 7 and firebase Cloud db for storage and real time processing. This is an assistive smart parking management system that will enable users to view all available parking spaces in real time, providing reservation features for registered members, users can also file complain which will be received by the application admin logged on. upon arrival to UTECH the same app provides levels of access therefore admin will have access to an admin portal from which they can allocate, deallocate, view reports made by user, view all vehicles parked and their respective information as well as manage system.
University of Technology, Jamaica

 
Table of Contents
Acknowledgement………………………………………………………………………...……7
Abstract…………………………………………………………………………………………8
Chapter I       The Problem
Introduction……………………………………………………………………………...9
Statement of Problem…………………………………………………………………....10
Purpose of this Project…...……………………………………………………………....11
Hypothesis…………………….………………………………………………………....11
Limitations……………………………………………………………………………….12
Delimitations……………………………………………………..……………………....12
Significance of the Study………………………………………………………………...13
Definition of Terms…………………………………………………………………........13
Chapter II	Literature Review
	Introduction ………………………………………………………………….................16
	Parking Lot Management…………………………………………………………….....16
Smart Parking Systems………………………………………………………….….......18
Categories of Smart Parking Systems………………………………………………….18
Parking Guidance and Information System (PGIS)…………………………….18
Transit Based Information System (TBIS)……………………………………..19
Smart Payment System (SPS)…………………………………………………..19
E-parking…………………………………....………………………………….19
Automated Parking System ……………………………………………………20
	Smart Parking Design Models………………………………………………………….20
Smart Parking Implementation……………………………………………………..…..21
Technologies used for Designing Smart Parking Solutions………………………….…23
Crowdsourcing……………………………………………………………………...…..24
Challenges in Implementing Smart Parking Systems…………………………………..25
Smart Parking System Architecture…………………………………………………….26
Benefits of Smart Parking systems……………………………………………………..28
Smart Parking – Key Stakeholders……………………………………………………..29
Drivers……………………………………………………………………………………30
Parking enforcement officers and agencies…………………………………………30
Businesses/Institutions…………………………………………………………………30
Methods to Discourage Parking and Reservation Policy Violations……………………30
Safety Concerns with the Use of Smart Parking Mobile Applications…………………31
Solutions to Safety concerns with the use of smart parking mobile applications………32
Alternatives to Smart Parking Systems and their Shortcomings……………………….33
Transportation Planning on University Campuses……………………………………...36
Conclusion……………………………………………………………………………...37

Chapter III   Methodology 
Introduction………………………....……………………..…………………………....39
	Research Design………………………………………………………………………...39
	Population ………………………………………………………...…………………….40
Procedures ………………………………………………………...……………………40
Functional Requirements ………………………………………………………...……..43
Non-Functional Requirements ………………………………………………………….44
Project Design ………………………………………………………...………………...45
GUI Images of the Proposed Assistive Parking Application……………………47
	Service Organization Architecture……………………………………………………...51
	Timeline…………………………………………………………………………………53
Resources Used………………………………………………………………………….53
Application Development……………………………………………………………….55
	Set up Environment…………………………………………………………......55
	Application Development……………………………………………………….56
Application Testing……………………………………………………………...56
	Test Assumptions……..…………………………………………….…...57
	Test Principles…………………..……………………………………….57
	Test Method…………….………………………………………….…….57
Application Deployment………………………………………………………….……..58
Resources Required……………………………………………………………………..59
Expected Outcome and Benefits………………………………………………………..59

Chapter IV  Findings
	Introduction ……………………………………………………………………………..61
	Data Analysis……………………………………………………………………………62
		Car Count at Peak Hours………………………………………………………...62
	Time Taken to Find Parking Spaces with Current Parking System……………………..62
	Time Taken to Find Parking Spaces with Proposed Assistive Parking System………....65
	Discussion……………………………………………………………………………….66
Chapter V SUMMARY, CONCLUSIONS & RECOMMENDATIONS
	Summary of the Research………………………………………………………………..68
	Findings Conclusions…………………………………………………………………….71
Project Conclusions……………………………………………………………………...71
Recommendations………………………………………………………………………..72
Appendix………………………………………………………………………………………...74
References…………………………………………………………………………………….....99














List of Figures
Figure 1: Reservation Parking Space Screen…………………………………………………..47
Figure 2: View Parking Spaces as a Student or Staff Member………………………………48
Figure 3: Process of Reserving a Parking Space on Campus………………………………..49
Figure 4: Process of Allocating a Parking Spot……………………………………………….50
Figure 5: S.O.A Diagram…………………………………………………..……………………..53
Figure 6: Column Chart showing the number of cars that entered and exited the UTech campus for weekday Monday at three (3) 30minute periods for the course of two (2) months…….62
Figure 7: Column Chart showing the number of cars that entered and exited the UTech campus for weekday Thursdays at three (3) 30minute periods for the course of two (2) months…..62
Figure 8: Bar graph showing the time taken by the research team to find an available parking space, during peak hours with UTECH’s current parking system. ……………………………65
Figure 9: Bar Graph showing the time taken by the research team to find an available parking space, during peak hours with the proposed assistive parking system. ………………………66
Figure 10: Smart Parking Allocation Center……………………………………………………..74
Figure 11: Timeline of This Research Project…………………………………………………….75
Figure 12: Sketch diagram of the deallocation process. ………………………………………...76
Figure 13: Screenshots of the “home screen” and the “Make a reservation” screen of the mobile application…………………………………………………..…………………………………………...77
Figure 14: Screenshots of the “Report an Issue” screen of the mobile application…………..78
Figure 15: Screenshots of the real time “Parking Lot View” screen of the mobile application..79
Figure 16: Screenshots of the “User Login” screen of the mobile application…………………..80
Figure 17: Screenshots of the “Registration” screen of the mobile application…………………81
Figure 18: Screenshots of the “Administrator’s Portal” screen of the mobile application…….82
Figure 19: Screenshots of the “Allocate Vehicle” screen of the mobile application…………….83
Figure 20: Screenshots of the “Deallocation” screen of the mobile application………………..84
Figure 21: Screenshots of the “View Vehicles Parked” screen of the mobile application…….85
Figure 22: Screenshots of the “Check Reports” screen of the mobile application……………..86
Figure 23: Screenshots of the “Manage System” screen of the mobile application……………87
Figure 24: Sequence Diagram for login process…………………………………………………...88
Figure 25: Sequence Diagram for Register Now Process………………………………………….89
Figure 26: Sequence Diagram for Allocate Vehicle………………………………………………..90
Figure 27: Sequence Diagram for Deallocate Vehicle……………………………………………..91
Figure 28: Sequence Diagram for View Vehicles Parked…………………………………………92
Figure 29: Sequence Diagram for Checking and Deleting Reports………………………………93
Figure 30: Sequence Diagram for Manage System………………………………………………….94
Figure 31: Sequence Diagram for Reservations……………………………………………………..95
Figure 32: Sequence Diagram to Report an Issue…………………………………………………..96
Figure 33: Use Case Diagram for Assistive Parking Mobile Application………………………97
Figure 34: UML Diagram for Assistive Parking Mobile Application……………………………98






Acknowledgement
The successful completion of this major project would not have been possible without the help of several individuals. The research team would like to express their sincerest gratitude to everyone who helped us along the way. We would like to express a huge thank you to our supervisor Ms.
Christine Anuli who guided us throughout every single step of this research project and who provided us with support, feedback and encouragement whenever we needed it. To every other stakeholder, staff member and participant an immense thank you, because without you guys we would not have been able to complete this seemingly insurmountable task.  
Abstract
Searching for a parking space in a congested city or campus parking lot has become a major issue over the years. In this research, we proposed to test the hypothesis that modern technologies such as Mobile Communication, Cloud Computing, Crowd-Sourcing, and a barcode can be used to design cost-effective smart parking solutions to fit within the paradigm of a smart city in Jamaica. We employed these methods to develop a mobile application to help users find a parking space in the quickest/ shortest possible time. Additionally, the application allows users to make real-time reservations of available parking spaces.  The check-in and check-out of vehicles will be done in a fast and efficient manner, thus preventing any particular traffic build up at the gate. Finally, we employed the method of rapid application development for developing our prototype and to test our application so as to gather requirements as we go along and test our prototype to see if the requirements are being met. 












Chapter 1
The Problem/ Need for the Project
Introduction
	With the rapid development of urban regions, it is estimated that 30% of traffic congestion in an urban area is caused by vehicles searching for available parking spaces, where it takes drivers an average of 7.8 minutes to find a parking space (Arnott et al, 2005).  Following the rapid increase of car ownership, cities are suffering from a lack of car parking areas; with an imbalance between parking supply and demand which can be considered the initial reason for metropolitan parking problems (Shoup, 2005). Searching for a parking space is a routine and sometimes frustrating activity for many people around the world. These problems are not isolated to cities, as any location that has a high number of vehicular traffic with a limited number of parking spaces can experience these issues. As the global population continues to urbanize, without a well-planned, convenience-driven solution, these problems will worsen. There has been significant investigations, reports, and studies conducted across the world on the possible solutions to this problem, one of which is the implementation of an assistive parking management system. 
According to Shoup (2005), assistive parking has been successfully implemented in Australia, New Zealand, Singapore, Taiwan, Hong Kong, and Thailand, while more smart city features have been successfully implemented in Singapore, Dubai, Amsterdam, Barcelona, Madrid, Stockholm, China, and New York. Smart parking applications should significantly reduce the number of time motorists spend when searching for available parking; by providing a more technologically advanced environment that will make life easier (Geng, 2012). The researchers posit that motorist requires real-time accurate information to allow them to make informed decisions as it relates to the availability of a parking spot and its location. This can alleviate the anxiety and frustrations that from driving around aimlessly trying to locate an available parking spot. Rocque (2017) made mention in their article of Dr. Graham Cookson, Inrix chief economist, that the issue is not a parking problem but an information problem.
Colleges and universities campuses operate much like miniature cities. They have their own rules, their own buildings, their own mobility services and, most times, dedicated security officials and devices. Long known as centers for advancement and testbeds for innovation, many higher education campuses are mirroring cities by installing smart technologies and focusing on sustainability. This project intends to focus on a number of concerns as observed on the University of Technology, Jamaica as it relates to its parking management system. The main areas of concern for this project are: (1) the parking lots are spread across the campus with no clear signage for identification or direction to where they are located, (2) there is no way for the management to determine when a parking lot is full or where available parking spaces are located, as a result, motorist has the responsibility to drive around until they are able to locate an available parking space or park illegally and get clamped and fined. 
This project posits that the main problem with parking on the campus is a matter of information availability. Additionally, this problem can be solved using modern technologies that are easily accessible and affordable.

Statement of Problem
	Currently, when motorists visit the University of Technology, Jamaica, they tend to spend a significant amount of time driving around aimlessly searching for an available parking space. In addition, security personnel are unaware of the state of the parking lots as it relates to the occupancy levels, which hinders them from properly advising motorists about available parking spaces and prevents them from managing the parking lots more efficiently. This project proposes that the main problem with the current system is the lack of real-time information on the parking lots occupancy state that cause frustration and anxiety for motorists and hampers the University’s chances of properly managing the vehicular traffic on campus. The lack of available real-time information causes motorist and security personnel to make a lot of uninformed guesses about parking on the UTech campus, which may lead to frustrations, time wastage, traffic congestions and air pollution.
Purpose of this Project
To research the software centric technologies that can be used to design an information-driven cost-effective assistive parking lot management system for the UTech. The project intends to demonstrate how these software centric technologies can be converged to design a parking lot management system that provides accurate, real-time information to the stakeholders as it relates to the current state of the parking lots on the UTech campus. This project intends to develop a mobile application that when used can direct users to available parking spaces, and thus reduces the amount of time motorist spend driving around aimlessly to find an available parking space.
Hypothesis
Modern technologies such as Mobile Communication, Cloud Computing, Crowd-Sourcing and Quick Response Code (QRC) can be used to design an information-driven and cost-effective assistive parking solution to fit within the paradigm of a smart campus in Jamaica.
Limitations
●	Lack of research on the technologies the project intends to use in the application design; as it relates to the nature of use.
●	Lack of research on smart technologies, the impact of traffic build up and the time spent driving around aimlessly searching for available parking as it’s related to Jamaica.
●	Unavailability of critical data from the current parking lot system design on UTech campus such as, clearly outlined parking spaces, clearly labeled parking spaces, clearly labeled parking lots; these are critical data items for the successful working of the application.

Delimitations
●	The project will focus solely on using mobile communication, cloud computing, and a QRC in the design of a working prototype.
●	The project will use only one parking lot in the initial implementation and testing phase of the prototype.
●	This project does not address the logistics of adapting and using the application.
●	The project focus on four (4) core functions: (1) security personnel should be able to see the current state of the parking lot as it relates to the availability of parking spaces; (2) security should be able to use the license plate number to assign a motorist to an available parking spot; (3) motorist registered in the application should be able to reserve an available parking space ahead of time for a specified period; (4) security personnel should be able to deallocate a parking space when a motorist is about to exit the campus.

Significance of the Study
The following benefits are anticipated from the implementation of the system: stakeholders will be able to accurately determine occupancy in real-time, residents and visitors will have access to data on the available parking spaces, simplification of the parking experience by providing accurate and actionable data for parking stakeholders, such as staff, students, and visitors. The results and artifacts from this study can be expanded and used to solve similar issues in larger metropolitan areas. Additionally, the society may experience the following benefits: persons can save money on gas and save time as the blind search for a parking space will be reduced; reduction in an individual’s level of anxiety and frustrations from aimlessly driving around trying to find an available parking space; reduced emissions of fumes and other pollutants from vehicles will lead to a reduction in the levels of air pollution.

Definition of Terms
●	Agile Software: A collection of software development methodologies that promote adaptive planning, evolutionary development and delivery, continuous improvement, and a time-boxed period of time to complete a body of work.
●	Allocation: This is the process of assigning a parking space to a motorist.
●	Assistive Parking System: This refers to a method used to assist motorist in finding a parking space in a parking lot in a shorter time frame, using various technologies. 
●	Crowdsourcing: The practice of engaging a ‘crowd’ or group for a common goal — often innovation, problem solving, or efficiency and is powered by new technologies, social media and web 2.0.
●	Deallocation: The process of removing an allocated vehicle from a parking space and the system. 
●	E-Parking: a method for patrons to enquire about the availability and/or reserve a parking space at their desired parking facility to ensure having a vacant parking space when arriving at a parking lot; can be accessed via numerous methods such as text message or the internet.
●	Firebase: Firebase which is a real-time web-based database in the cloud used to develop the backend of mobile applications.
●	GIT: a distributed version-control system used in tracking changes in source code during development.
●	Ionic Framework: refers to a free and open source mobile SDK for developing native and progressive web apps with ease.
●	Mobile Application: Also referred to as an app, is a type of application software designed to run on a mobile device, such as a smartphone or tablet computer.
●	Model-View Controller (MVC): an architectural pattern that separates an application into three main components; the model, view and controller.
●	Model-View-Viewmodel (MVVM): a software architectural pattern which facilitates a separation of development of the graphical user interface from development of back-end logic.
●	Parking Guidance Information System (PGIS): system which provides information to drivers to aid in the decision making process in reaching their destination and locating a vacant parking space within the car park facility
●	Reservation: This refers to the action of the user reserving a parking space. 
●	REST API: A term used to refer to an application program interface based on representational state transfer technology that uses hypertext transfer protocol requests to GET, PUT, POST and DELETE data.  
●	Smart Campus vision: This refers to the long-term goal of completely transforming the university into a smart campus, which entails technological advancement which includes but not limited to: electronic payment, online access to printers in labs from any connected devices using the smart campus app and online lunch ordering and payment transaction.
●	 Smart Parking System: A vehicle parking system that helps drivers find a vacant spot, using sensors in each parking space that detect the presence or absence of a vehicle, signs direct incoming drivers to available locations.
●	Single-Page Application (SPA): A web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.







Chapter 2
Literature Review
Introduction
For this literature review, the researchers sought out credible, current and relevant sources of information covering the areas of smart city design paradigms, technologies used in designing smart parking solutions, the challenges and benefits of smart parking, the social and economic impact of a traffic management system that doesn’t provide accurate and real-time information to stakeholders. The major sources for this research were Google Scholar and EBSCO online database which discusses the need for smart parking systems in universities and general areas; most of which also outlines along with the benefits and drawbacks to an organization that implements a smart parking system. The data gathered from this literature review is presented topically as follows: parking lot management, smart parking and its design paradigms, technologies used to design smart parking applications, benefits and challenges of designing smart parking systems, economic and social costs and benefits of a creating a smart city.  

Parking Lot Management
	The diseconomies and inefficiencies of urban congestion have increasingly become a serious problem and have proven difficult to curb as it has greatly affected quality of life. Not only are cities becoming more congested as the population grows, but the number of cars and availability to individuals has also increased. This causes a myriad of other problems, including air and noise pollution as a result of poor parking management systems in these urban regions (Giuffrè et al., 2012).  These problems of air and noise pollution occur when motorists are left to cruise around searching for parking spots causing a waste of time and fuel for motorists.  It has been reported that over a year period in a small business district in Los Angeles, California, cruising cars created the equivalent of 38 trips around the world, burning 47,000 gallons of gasoline and producing 730 tonnes of carbon dioxide (Shoup, 2005). Additionally, it is estimated that on a daily basis 30% of vehicles on the road in the downtown area of major cities are cruising for a parking spot (Arnott et al, 2005). Consequently, this project postulates that the blind search for an available parking spot causes patron to waste both fuel and time and also may have a hand in the rise of the level of air pollution. 
According to the (World Health Organization, 2018) between 2010 and 2013 there was a 16% increase in the number of registered vehicles in the world. Referring to the aforementioned statistic by the World Health Organization the current transportation infrastructure and car park facilities are insufficient to manage this large influx of vehicles on the road.  The extra traffic causes a series of problems such as traffic congestions and accidents, air pollution and waste of fuel. There are two (2) proposed solutions to this problem, building more parking spaces or designing an information driven parking management system. Researchers have determined that implementing more parking facilities is not always the answer; however, parking management strategies to better utilize existing infrastructure is the better way. Shoup (2005) pointed out that the dark pavement of parking lots promotes water quality degradation through run-off into sewage systems, raise overall atmospheric temperatures, and consume the land. Additionally, the solutions of adding more parking facilities pose another problem where they distort urban design (Shoup, 2005).  Increasing the supply of off-street parking areas near or beside every building push buildings apart from each other and increases the distances between buildings making driving more necessary and walking more difficult. 
Due to their environmental impact, parking lots are generally considered the least glamorous and most environmentally harmful type of land use. Therefore, instead of building more parking spaces, authors such as (Wang, 2011) and (Geng, 2012), expressed the need for smart parking systems in institutions prone to traffic congestion due to inadequate parking spaces. Some local governments try to mitigate these issues associated with parking in a metropolitan area by means of smart parking. In a nutshell, they try to employ information and communication technologies to collect and distribute the real-time data about parking availability so that drivers can spot the right parking place quickly.
Smart Parking Systems
	According to Wessel (2016) of Park Smart, smart parking is “a parking strategy that combines technology and human innovation in an effort to use as few resources as possible such as fuel, time and space to achieve faster, easier and denser parking of vehicles for the majority of time they remain idle.”  Smart Parking Systems are categorized into five (5): Parking Guidance and Information System (PGIS), Transit Based Information System (TBIS), Smart Payment System (SPS), E-parking and Automated Parking (Shaheen et al, 2005). 
Categories of Smart Parking Systems
Parking Guidance and Information System (PGIS)
PGIS encompasses two major areas: city wide functionality or single parking lot functionality. Both areas provide information to drivers to aid in the decision-making process in reaching their destination and locating a vacant parking space within the car park facility. The city-wide functionality, locates available car park spaces in parking lots within the city while the single parking lot functionality, will locate empty spaces in a specific parking lot. 
Transit Based Information System (TBIS)
The functionality of TBIS is similar to PGIS but provides real-time information on the status of each car park, public transportation schedules and traffic conditions to the public. This additional information provided allows for commuters to plan their method of transportation beforehand to prevent inconveniencing themselves. A benefit of TBIS is to increase the use public transportation to make it a primary means of transportation which will increase transit revenue (Chinrungrueng et al, 2007). 
Smart Payment System (SPS)
The SPS is implemented via parking meters in the effort to overcome the limitations of the conventional payment methods and introduce new technologies. This is because the conventional method delays and inconveniences patrons as they have to deal with cash. It also reduces maintenance and staffing requirement for payment handling purposes as well as traffic control (Chinrungrueng et al, 2007). 
E-parking
E-parking provides an alternative for patrons to enquire about the availability and/or reserve a parking space at their desired parking facility to ensure having a vacant parking space when arriving at a parking lot, and can be accessed via numerous methods such as text message or the internet. Some additional benefits of E-parking are that it can be extended easily to incorporate the payment mechanism of SPS whereby payments by the patrons are made hassle free using the aforementioned technologies (Shaheen et al, 2005). 
Automated Parking System
Lastly, APS involves the use of computer-controlled mechanisms, where patrons will drive up to the bay, lock the cars and let the machines automatically place the vehicle in the allocated space. This type of car park offers maximum utilization of space as it is machine controlled unlike conventional car parks, where space is needed for cars to move within the car park. Among its benefits are that the implementation works great in locations with little room for expansion due to its structure. Besides that, the APS also offers efficiency in car storage as it allows car stacking with no need for the patron to enter the car park providing extra safety measures for the patrons and their vehicles (Shaheen et al., 2005).
From the research it is determined that there are many different ways of implementing a parking management system based around the use of modern technology. 

Smart Parking Design Models
	Two trains of thought come to mind regarding modeling a parking management solution, namely the static predictive model and the dynamic predictive models (Giuffrè, Siniscalchi & Tesoriere, 2012). The dynamic model as stated by Giuffrè et al. (2012) uses historical data is used to predict the occupancy of the parking area in real time.  As the trend changes, then the model would change. A static predictive model involves drivers being assigned to road networks where parking lots are correlated with their respective capacities.  With this model, it is possible to determine the number of cars in the lot at different periods of the day based on the filling methodology used (Giuffrè et al., 2012).
  	In a similar manner the article written by Bagula, Castelli, and Zennaro (2015), makes mention of a parking gate monitoring model.  This model uses the information of the entries to and the exits from the parking lots to provide information such as the availability of a free spot.  With the knowledge of the capacity of the parking lot, the entries and exits can provide the number of available spaces remaining.  
On the contrary, the model of monitoring the parking lot itself gives more precise information.  Each spot is equipped with a sensor which will provide the information to assist with the compilation of an availability map. When this is combined with the radio frequency identification technology (RFID), there can be efficient parking management.  The parking lot model, however, is quite expensive, and it is classified into multi-parking management that facilitates different parking lots in various outdoor and indoor areas (Bagula et al., 2015).  On the contrary, the proposed technique of crowdsourcing is a model capable of aggregating talent, leveraging ingenuity while reducing the costs and time formerly needed to solve problems. Finally, crowdsourcing is enabled only through the technology of the web, which is a creative mode of user interactivity (Brabham, 2008).

Smart Parking Implementation
A team of researchers proposed a new concept for a “smart parking” system. This system explicitly allocates and reserves optimal parking spaces to drivers, as opposed to simply guiding them to a space that may not be available by the time it is reached (Geng & Cassandras, 2013). The allocation is based on each user’s objective function that combines proximity to destination and parking cost while also ensuring that the overall parking capacity is efficiently utilized (Geng & Cassandras, 2013).
Their proposed “smart parking” system takes the basic structure of PGI systems as one component. In addition, it includes what is referred to as a Driver Request Processing Center (DRPC) which contains the driver’s basic information, such as license number, current location, car size, et cetera. Also described in their research was Smart Parking Allocation Center (SPAC), it made assignment decisions and allocates and reserves parking spaces for drivers. Another component of their design was The Parking Resource Management Center (PRMC) which collects and updates all real-time parking information and disseminates it via  variable-message signs (VMS) or the Internet (basic functions of PGI systems) (Geng & Cassandras, 2013). An overview of their entire system breaking down each component’s role to get a better understanding of the system as a whole is as follows. The DRPC provides the first set of interaction between the driver and the smart parking system. In describing its function it’s used to gather driver parking requests and real-time information (i.e., car location), keeps track of the driver allocation status, and sends back the assignment results to drivers, therefore all requests for a parking spaced made by drivers are sent to the DRPC (Geng & Cassandras, 2013). Information from DRPC is collected by the SPAC over a certain time window and makes an overall allocation at decision points in time, after which an assigned parking space is sent back to each driver via the DRPC. The system is designed so that the driver is satisfied with the assignment given, he/she has the choice to reserve that spot if they are pleased. It provides even further benefits because once a reservation is made, the driver still has opportunities to obtain a better parking spot with a guarantee that it can never be worse than the current parking spot before the current assigned spot is reached. The PRMC component comes into effect to update the corresponding parking spot from vacant to reserved and provides the guarantee that other drivers have no permission to take that spot (Geng & Cassandras, 2013). Since the system aims for the satisfaction of its users, if a driver is not satisfied with the assignment or if he/she fails to accept it for any other reason, he/she has to wait until the next decision point. During intervals between allocation decisions made by the center, drivers with no parking assignment have the opportunity to make modifications to their cost or walking-distance requirements, possibly to increase the chance to be allocated if the parking system is highly utilized.
Of all the parking solutions mentioned within this literature review, the “smart parking” solution is one of the most efficient one from the lot however, it can still be improved upon to provide an even better experience to drivers as it relates to wait time on the decision of a parking space. This system acquires real-time information on the driver and vehicle location which is optimal in trying to locate the best parking space for the driver, but in reserving a parking space, it does so within a time interval which is another waiting process. This is therefore seen as a limitation because an ideal “smart” system should provide real-time update on all facets of the smart parking application to be fully efficient and effective. A possible solution could be to on a FCFS basis where parking space once the driver have confirmed and is satisfied with the spot in real-time instead of waiting for a decision time period to elapse before the spot is reserved. 

Technologies used for Designing Smart Parking Solutions
In some systems active radio frequency identification (RFID) technology has been used to replace the paper-based ticketing system.  RFID is an acronym for “radio-frequency identification” and refers to a technology whereby digital data encoded in RFID tags or mart labels are captured by a read via radio waves. Bagula, et tal  (2005) stated that RFID is used in proactive and reactive guidance systems. For the Proactive Guidance system, the RFID tag is issued and it is used to guide the client toward a pre-allocated parking spot. With RFID readers placed at strategic locations, the driver will be guided to the spot based on the tag’s ID. With regards to, Reactive Guidance, where there is no spot pre-allocated, the RFID readers will retrieve the nearest available (optimal) parking spot from the parking manager and guide the driver there.  This optimal spot is calculated based on the current location of the car and a map of free spots in the car’s immediate vicinity.  Smart Parking Regulation will monitor the placement of the car since each spot will communicate the RFID tag to the parking manager who will confirm that the identified vehicle is in the correct location. The reader will transmit the tag’s ID to the parking manager who will then return a response signifying the registration on the tag to that spot.
While RFID technology can be used, the use of RFID readers are not the only way of guiding users to pre-allocated spots. RFID readers come at a significant cost (Bagula et al., 2015), as such using other means would prove fruitful for implementation of similar applications on a lower budget.  RFID readers carry out tasks that may be done by humans such as logging of detections, as such a viable way of substituting RFID readers would be crowdsourcing.  Crowdsourcing is known as the act of enlisting human services for the input of information into a task typically via the internet (Brabham, 2008). 
Other technologies that can be used in smart parking design are, sensors embedded in the ground, or cameras mounted on light poles or building structures, determine whether the parking spaces are occupied or available. This data is routed wirelessly to a gateway, and relayed to a central cloud-based smart parking platform. It is aggregated with data from other sensors to create a real time parking map. 
Crowdsourcing
A drive behind mobile crowdsourcing applications is the huge demand for transportation related services, that make everyday life convenient. For example, thanks to data crowdsourced through thousands of mobile devices, drivers are able to pick a better route to avoid a road segment congested five minutes earlier (Yan et al, 2011), or find a parking spot (Kincaid, 2000). Similarly, taxi drivers improve their driving strategy by knowing their colleagues’ trajectory (Li et al , 2011); commuters can get the real-time transit information (Lamba, 2010) and feel less anxiety when waiting for the bus. One commonality shared by these scenarios of mobile crowdsourcing is that most consumers of the services also have the ability to contribute data. 
Usually, when apps use crowdsourcing technology parking availability data is gathered from the users, however, gathering data from authoritative data sources, such as car park operators, is a viable option. Car park operators are required to register with the app and use it monitor the availability of the parking lot and also assign parking spaces to users. Therefore, the car park operator, ensures that an accurate car park availability status is available to all the stakeholders (Kopecký et al, 2012). 

Challenges in Implementing Smart Parking Systems
While feasible, the implementation of smart parking is often accompanied by a many challenge. The major challenge is system integration as a result of a wide variety of hardware and software platforms involved, which possess a great threat or concern to the system scalability (Basu, 2014). The smart parking technology platform supports many different technologies some of which are hardware sensors, dynamic messaging systems and traffic control devices, wireless and wireline telecommunications systems, computer clients and servers and hardware drivers and application interfaces, and enabling and linking all of these technologies into one platform is the greatest challenge in reducing the cost and complexity of smart parking (Basu, 2014). 
 There also exists a problem in the selection of the sensor and the appropriate sensing technology.  There are many things to consider in the selection such as size, reliability, cost, robustness, adaptation to the environmental conditions and ease of installation (Bagula et al, 2015). Bagula et al (2015) also proposed that imperfections with the sensors may be an issue, as with ultrasonic sensors, tend to be sensitive to the elements, especially heavy winds and temperature changes.  He further maintained that these imperfections also exist with wireless communications such as interference, reflection, and diffraction of signals.  Moreover, there is a need for efficient wireless coverage.  This is a must for a successful smart parking system since communication has to be done in real-time between the slave, master and anchor sensors. 
According to Xiao, Chen (n.d.) since people are not naturally motivated to contribute their data in these applications, issues like privacy preserving, incentive design or evaluating trustworthiness of data become their major concerns. However, few studies aim to reveal what make existing mobile crowdsourcing applications more successful than others. Implementing a hardware centric parking lot management system can be costly to implement and maintain. Research has shown that there are software alternatives to a hardware centric approach, using crowdsourcing, and mobile technology.

Smart Parking System Architecture
The article written by Bagula, Castelli, and Zennaro (2015), addresses a Smart Parking System which is built upon a real parking prototype which was tested in an outdoor parking lot in Algeria.  This system was built using a sensor-based method and was based on four layers: sensing, networking, middleware, and application layer.  This multi-layer framework ensures that different services can be provided to different users of the parking system as modularity and scalability is built in.  
1.	The sensing layer deals with the placement of sensors throughout the parking lot to detect the presence of vehicle and radio frequency identification devices at the gates and barriers.
2.	The networking layer deals with the different modes of communication.  It supports the communication of the sensors to the sensor gateway and communication from the gateway to the parking users.
3.	The Middleware Layer performs a situation recognition and a user-friendly interface is presented to the users.  Supporting this layer are various databases and servers that manages all the software related to communicating with the application layer and the sensing layers.
4.	At the Application Layer, the different services are defined and provided to different users.  Using TCP/IP protocol, the client services are connected to the parking database which will be updated in real time with the status of the spots.  Clients are able to connect to the database using either mobile devices (phones and tablets) or desktop applications (laptops and computers).
The implementation of smart parking systems also differs in terms of the modules they are built upon.  Giuffrè et al. (2012) proposed building their Intelligent Parking Model on five modules namely, the user interface, the function module, the manager interface, the parking space controller and the communication module.
1.	The User Interface Module manages the communication with the customer during all phases and requires input from the user.
2.	The Communication Module is responsible for receiving and transmitting messages between the sender and the receiver.  It is responsible for performing error control.  The messages must be correct and response time must be quick.
3.	The Function Module consists of servers and a relational database that holds all the events that go through the system every day.  It is responsible for communicating with hard devices and transmits data through the communication module.
4.	The Parking Space Controller Module consists of sensors and unit controllers and is responsible for the communication with hardware devices and sensors.
5.	The software managing the Intelligent Parking Assistant would manage a relational database holding all the information on the customers, reservations and parking spots.  This would be done with different modules dealing with access control for the parking spots, the user interaction, administration, reporting and monitoring of the parking spots. 
Similar application architectures may be implemented without the use of expensive sensors but instead utilizing the world’s most useful resource, humans as said by Brabham (2008). 

Benefits of Smart Parking systems
	According to Idris et al (2009), smart parking has several advantages when compared to the current system. Idris et al (2009) maintained that smart parking poses benefits to the operators of the car park as it will help them to determine future parking patterns. The determination of patterns can be integral to the success of the system. Additionally, Idris et al (2009) stated that the level of air pollution can be reduced in the area. This is so as the distance the vehicle travels is reduced and therefore less fuel will be burnt in the process. The authors further stated that the smart parking system will ensure an optimal use of available space. They also alluded to the advantage that travel time and search time are significantly reduced due to the information provided. To combat traffic congestion in searching for car park spaces, Jagadish Thaker (2015) of Softweb Solutions, states that smart parking will reduce traffic congestion, improve parking management and drivers’ experience. In severely dense urban areas, where parking is a major problem, smart parking can be used as a way of generating revenue, by implementing smart parking meters where businesses can make profits from drivers who pay for certain amounts of time in order to make use of available parking spaces within the business’ parking lots (Thaker, 2015). Basu (2014) of Happiest Minds Technologies, adds that smart parking will accurately predict and sense spot/vehicle occupancy in real-time and enable intelligent decisions using data, including real–time status applications and historical analytics reports.  Furthermore, the number of vehicles parked illegally on the roadside that lead to traffic congestion, will be reduced as it is absorbed into the car parks (Kurgo et al, 1995). Finally, smart parking can also pinpoint parking violators that pose potential safety risks and traffic disruption by parking in illegal zones such as drop off and pick up areas and bus stops (Chan, 2017). 

Smart Parking – Key Stakeholders
In order to understand the potential innovation opportunities with smart parking – we must understand who is impacted by parking problems and to the extent of the impact.

Drivers
To drivers, parking is often seen as a necessary evil, and often leads to frustration and anxiety. At worst drivers spends a lot of time driving around searching for an available parking space.  This eventually also cost them in terms of gas, and their contribution to the congestion they themselves are experiencing. 
Parking enforcement officers and agencies 
Parking enforcement officers and agencies are often perceived as being the “bad guys” for doing their jobs.  Officers must balance between enforcing rules and regulations as it relates to parking violations and not appear overzealous. Officers are expected to be able to provide accurate and timely information as it relates to the parking lots and areas they are responsible for monitoring.
Businesses/Institutions
If parking is limited or extremely difficult, the business may not be able to attract as many customers and employees it needs to thrive and grow. Parking frustrations drive some customers and potential employees to go elsewhere. This results in businesses underperforming, shutting down, or relocating. For students on university campuses, finding suitable parking on campus can have an impact on the performance where students, may be delayed due to traffic congestion and driving around trying to locate an available parking spot.

Methods to Discourage Parking and Reservation Policy Violations
	Most smart parking systems will provide users with a smart parking application from which they can view and make reservations for a specific parking spot. One of the most important features of smart parking is the ability to make a reservation for a parking spot (Wang, 2011), which therefore means that strategies must be put in place to ensure that when a user reserves a parking spot, it will remain vacant until the designated user arrives.  An article titled ‘A new “Smart Parking” System Infrastructure and Implementation’ written by Geng and Cassandra (2012) highlighted a few methods that discourage parking policy violations and was said to be effective. Some of which are the use of heavy hardware connected through wireless technology interfacing a vehicle with hardware that makes a spot accessible only to the driver who has reserved it, such as folding barriers and metal obstacles that emerge from and retract to the ground under a parking spot. 
Though these methods are very effective, they are very expensive, which creates an opening for cheaper yet effective alternatives such as the use of a light system placed at each parking spot (Bagula, 2015), where different colors indicate different parking spot statuses. The light system is the most cost and time effective solution to the problem documented in literature as its components are cheap and installation is quick. In order for the system to operate, the installation of lights over each parking spot along with sensors is required. The lights will have 3 colors, green; which identifies empty parking spaces, red; which represents a parking space that is reserved which changes to yellow once the driver is within the vicinity to take his/her reserved spot. If a driver should park in a reserved parking space, the red light will start to blink and alert the system so the security can then address the issue. Such a system was implemented at Boston University in 2012 and was proven to be very effective (Bagula, 2015).
	
Safety Concerns with the Use of Smart Parking Mobile Applications
	Today, most, if not all smart parking systems provide a way for drivers to communicate with the system and vice versa. This is done through the use of Vehicle-to-Infrastructure communication (V2I) which focuses on how the driver communicates with the system, for example. a driver making reservations or sending parking requests to the system, and Infrastructure-to-Vehicle communication (I2V) which focuses on how the system responds to the user, example. system confirming reservation request. These communication methods are usually embedded in a smartphone application (Geng, 2012) which allows data to be transmitted over a cellular network, which is used to make the system more user-oriented as it provides the user with additional functionalities such as viewing parking spaces and making reservations. This was designed to be beneficial to the user as it gives them that hands-on experience. 
From the mobile application, the user will be able to view all parking spaces and make a reservation for the one they would like before arriving at their destination. The problem with these mobile applications is that when they were being designed, certain scenarios were not considered; specifically, driving and using the application simultaneously.  Most of these applications require users to enter a vast amount of information regarding driver’s information (license plate, driver name et cetera.) and parking space preferences in order to make a reservation, which the application will then use to find the most optimal parking space for the driver. This is a problem as it will cause drivers to switch their focus of the road to focus on entering data needed for reservation which can lead to catastrophe (Geng, 2012).

Solutions to Safety concerns with the use of smart parking mobile applications
            The problems concerned with the use of the mobile application while driving is of major safety concern. There have been two proposed solutions which successfully mitigated the problem; namely: push to communicate method and the access point notification method (Geng, 2012). The push to communicate method works by simply making data input to the system by the user easier. This is done by designing the mobile application that will have a list of fixed response options which entails all possible responses the developer thinks a user would choose and make these options selectable by simply placing them inside a button. With these precautions in place, the user would no longer have to be focusing so long on the smartphone as this would distract them from driving leading to an accident, as all the possible responses are now selectable with the click of a button, which will significantly decrease the amount of time the driver takes to use the application hence mitigating distraction of the driver when using the application while driving (Cassandras, 2012). 
The installation of various access points within close proximity to the parking lot is another alternative method used to mitigate the above-mentioned problem. This method installs various access points close to the parking spaces which will alert the user once detected and prompt them for reservation request, which the user can either accept and make a reservation or disregard the request. This method was successful as it will only prompt the user once they are in close proximity to the parking lot, eliminating the possibility of accidents (Geng, 2012).

Alternatives to Smart Parking Systems and their Shortcomings
Innovative solutions can help reconcile parking conflicts. Parking management includes various policies and programs that will result in more efficient use of parking resources (Litman, 2006). For example, a parking facility serves multiple destinations, the most convenient spaces are managed to favour priority uses such as deliveries and quick errands, and motorists can easily obtain information on parking location and price with relative ease. Parking structures that are governed by policies better utilize resources, squeeze more value from each parking space and reduce the amount of parking needed to serve an area. Litman’s research shows that this type of approach is more efficient than conventional parking planning.
Conventional parking planning tends to focus primarily on quantity of resources. It assumes that, when it comes to parking, more and more is always better, and there can never be too much (Litman, 2006). This type of planning relies on large minimum parking requirements and public subsidies to provide abundant parking supply. In assessing current parking planning, their practices are inefficient and often ineffective at solving parking problems. Minimum parking requirements tend to be excessive as they are generally based on demand surveys performed in automobile-dependent areas, and so require more parking than needed in locations with good travel options, accessible land use, or transportation and parking management programs. Yet this overabundance of supply does not eliminate parking problems because spaces are often unavailable for priority uses or are difficult to access (ITDP, 2015). It is revealed that the real problem is not inadequate supply; it is inefficient management (Litman, 2016). Parking management focuses equally on quality, such as the ease of obtaining parking information, the convenience and safety of walking from a parking space to destinations, and the attractiveness and security of parking facilities. Considering the benefits of parking management, traffic authorities in many cities have developed so-called Parking Guidance and Information (PGI) systems for better parking management.
PGI seemed to be the ideal solution to the car parking woes faced by many drivers when compared to conventional parking procedures. PGI systems present drivers with dynamic information on parking within controlled areas and direct them to vacant parking spots (Geng et al, 2013). This guidance system allows parking information to be displayed on variable-message signs (VMS) at major roads, streets, and intersections, or it may be disseminated through the Internet (Griffith, 2000). PGI systems are based on the development of autonomous vehicle detection and parking space monitoring, typically through the use of sensors placed in the vicinity of parking spaces for vehicle detection and surveillance (Cheung et al, 2007). However, it has been found that in using PGI systems, system-wide reductions in travel time and vehicle benefits may be relatively small as to what was initially expected, although it has still been proven better than conventional means. Building upon the objectives of PGI systems, e-parking is an innovative platform that allows drivers to obtain parking information before or during a trip and to reserve a parking spot which made the process a lot more convenient (Rodier et al, 2010).  Drivers could access the central system via phone or the Internet and Bluetooth technology recognizes each car at entry points and triggers automatic reservation checking and parking payment (Hodel et al, 2003).
This solution makes it a lot easier to locate vacant parking spaces but it also creates intense competition for these spaces.  More drivers go toward the same available parking spots, and it is possible that none is free by the time some drivers arrive, thus forcing replanning and competition for other spots and this can be proven hazardous. This also poses a problem from the traffic authority point of view, parking space utilization becomes imbalanced: Parking spaces for which information is provided are highly utilized and cause higher traffic congestion nearby, whereas other parking spaces may be routinely left vacant. In general, guidance systems do not solve the basic parking problem. Even worse, they may cause new traffic congestion in areas where parking spaces are monitored (Geng, 2012).
Xiao Chen, et tal (n.d.) the ultimate goal of smart parking is to help drivers find the parking vacancy as soon and as close to their destination as possible in order to save the time and fuel spent cruising, to reduce unnecessary walking, and to improve the traffic situation and the environment. To this end, the crowd-based smart parking system collects relevant data from drivers, who participate in the crowdsourcing, and then use these data to navigate them to an available parking slot.  Currently, the majority of crowdsourcing-based applications focus on harnessing collective intelligence via web applications. However, as the wireless communication infrastructure and mobile applications keep thriving these years, the influence of crowdsourcing can have direct impact on applications affect our physical world as well. When equipped with a smartphone and constantly connected to the wireless network, everyone is able to collect real-time data about the physical world either through her observation and manual input or by the sensors in the device. 

Transportation Planning on University Campuses
In planning for transportation on campus, many issues are faced which vary in nature. One of the primary challenges lies in providing adequate parking space to all motorists that may visit the campus at any given time (Bustillos et al, 2011).  There is a need to create a pedestrian-friendly environment which minimizes vehicle-pedestrian conflicts, thus improving safety and walkability (Sisson, 2008).  In the creation of a pedestrian friendly environment, one must regard the time taken to walk on campus as the campus grows larger.  The common rule of thumb as mentioned by Bustillos et al (2011), is to limit average walking time to ten minutes which requires striking a balance between vehicle accessibility and these walking times. 
Another aspect of transportation planning is the traffic assignment approach.  Two types of traffic assignment approaches are highlighted by Bustillos et al. (2011), namely, the static traffic assignment approach and the simulation-based dynamic traffic assignment approach.  The static approach fails to adequately capture traffic circulation and congestion surrounding capacity-limited campus facilities. On the other hand, the dynamic approach allows for the prediction of traffic outcomes in various scenarios.  Thus, the simulation-based dynamic traffic assignment approach has not been applied to the campus planning context and documented in the literature.  Bustillos et al. (2011) therefore made careful considerations of unique modeling requirements pertaining to a campus setting as a requisite to this research.  Estimations of traversal times in peak periods on campus as well as the development and calibration of a parking facility choice model were taken into consideration for the implementation of the dynamic traffic assignment platform.

Conclusion
Based on the articles that were reviewed, it can be concluded that smart parking systems can significantly increase the efficiency as well as mitigate or eliminate in some cases, some of the issues associated with the current parking lot allocation system. The level of air pollution can be reduced in the area. This is so as the distance the vehicle travels is reduced and therefore less fuel will be burnt in the process. Additionally, the smart parking system will ensure an optimal use of available space., and travel time and search time are significantly reduced due to the information provided. Although the implementation of smart parking systems is prone to challenges such as expense and system integration, the history of smart parking has proved that it will be well worth it as the benefits and advantages of having such a system outweighs all its shortcomings. Most of the smart parking systems mentioned in this literature review were implemented using either Sensors or RFID, these devices were used to detect changes in the system. Although it has proven effective there are other methods of implementation which focus on alternatives, such as crowdsourcing. Most smart parking systems were designed in a way such that they can be implemented almost anywhere where there is a parking lot with the similar problems as aforementioned. There are a number of categories of smart parking which offers its own set of benefits; all systems have shortcomings, and some of these can be solved by using features from other types of apps to offset current challenges. 
In planning for transportation on campus, many issues are faced which vary in nature. One of the primary challenges lies in providing adequate parking space to all motorists that may visit the campus at any given time. The best approach to design and implement a cost-effective smart parking solution may be incorporating features from different approaches, for example the PGIS and the E-parking solutions. PGIS locates available car park spaces in parking lots within the city while the single parking lot functionality, will locate empty spaces in a specific parking lot. E-parking is an innovative platform that allows drivers to obtain parking information before or during a trip and to reserve a parking spot which made the process a lot more convenient.  As successful application must provide real-time information on the driver and vehicle location which is optimal in trying to locate the best parking space for the driver, but in reserving a parking space, it does so within a time interval which is another waiting process. 
Chapter 3
Methodology
 Introduction
	This research is centered around the development of a mobile application that will enable motorists with an internet connection and a smartphone to view the availability of parking spots around the University campus and make reservations for these available spots prior to entering the campus.  In addition to this the mobile application will provide security personnel with the necessary information to determine the state of parking lots and designated spots at any given time across the university. The target population consists of security personnel at the university and all motorists that visit the UTech campus, regardless of if they have access to an internet enabled device or not, as they will also be affected by the implementation of this mobile application even without being active users of the application. This chapter will cover the areas of systems analysis and design for the application.	
	 	 				
Research Design
	The main issues faced on the university campus as it relates to the current parking system include the time wasted by motorists driving around in search of parking spots and the lack of information available to security personnel to actively monitor the state of parking lots across the campus without exhausting their human resources.  This leads one to ponder what may be done and as such this research was conducted.  The research design takes the shape of an exploratory research with the aim of using observation to explore the various aspects of the research area.  This method has been chosen due to the need of the researchers to understand the current state of the university’s parking system to know what exactly is possible in application development to address the most pressing issues faced by the university to solve the problems stated.

Population
	The subjects targeted by this research include all the motorists that come to the UTECH campus.  Motorists may be students, staff members or visitors to the university. The researchers observed the traffic pattern at specific time intervals over course of a week. No interaction was required with the motorists. 

Procedures
The data collection method that was used for this research study is observation and review of literature. These methods were utilized by the research team in order to gather data related the issues associated with parking on the UTech campus, current state of smart parking, suggested solutions for a smart parking app, justification for suggested design paradigm. With the nature of this data collection methods, it is simple to integrate them within our study to acquire the necessary information that is needed to guide this project towards designing an information driven cost-effective smart parking application. 
For observation methods, the naturalistic and participant observations will be used for the data collection. Naturalistic observation would involve the research team studying the behavior of participants in natural surroundings. This method was employed to observe the number of cars that entered the UTech campus at peak hours so the system can be tuned to handle these occurrences. The research team also took part as participant observers as they attempted to observe what it is like to search for an available parking spot on the UTech campus during specific hours. It was also the aim to determine the time taken to find a parking spot during these times in an effort of measuring just how much the implementation of the proposed mobile application will help in reducing this time taken by motorists searching for available parking. Additionally, participant observers are categorized in two (2) groups: (1) Administrators/Security Personnel, and (2) Motorists. 
From the administrator’s perspective, the researchers timed the amount of time it took for he/she to log the license plate number into the smart parking app and assign a parking spot (as the vehicle enters the main gate); and the amount time taken to get a status of the current state of the parking lot. Additionally, the administrator was time on the amount of time it took to scan the barcode or enter the license plate when the motorist is exiting UTech campus via the main gate. From the motorist perspective, the researchers timed the amount of time it took a motorist to locate their assigned parking spot; the amount of time to took to move from the main gate to the secondary gate where ticket will be printed and handed over to the driver.  The motorist was not observed when leaving the campus, as their actions has no impact on the state of the smart parking app at this stage. At this stage the administrator is responsible for deallocating an assigned parking spot using either the license plate number or scanning the barcode. 
For literature review method, the researchers used this method to gather relevant data on what is currently known about smart parking, what directions should the project take based on the data reviewed. This method is significant because the researchers were able to gather relevant data from studies on smart parking applications that were implemented across the world. This data gathered here were used as a guide to the design the smart parking application prototype; it guided the decision to use specific technologies, and approaches such as mobile communications and crowdsourcing to design an information driven cost-effective solution. A solution that focused on providing real-time accurate information through software solutions and with less focus on hardware solutions such as RFID and IoTs. Literature review served as a source for determining a benchmark for success in designing a smart park system; which served as guided to the researchers when determining the functional requirements of a smart park system. 
The researchers posit that it was necessary to know the traffic flow and number of vehicular traffic that passes through the university at specific intervals.  By placing themselves at the main entrance and exit to the UTech the researchers employed the use of a counting apparatus to assist them in counting the number of vehicles entering and leaving the campus during specific hours on weekdays. No sample size was used for this research as the researchers intended to gather data on the frequency of motorists entering and leaving the UTech campus. As such, the researchers observed and tracked the movement of vehicular traffic during the following time intervals: 7:30 am to 8:00 am, 12:30 pm to 1:00 pm and 8:15 pm to 8:45 pm. These time period selected based on the UTech opening from 8:00 am to 9:00 Monday to Friday. This data was used to determine the average of the number of vehicles to expect during these specific time periods on the UTech campus.  Additionally, this will help the developers to determine load management for the application during peak times. This data can also be used to guide the Institution in designing the business logic for the implementation of the smart parking app into the UTech eco-system. 
Due the data gathered from the literature review being of a qualitative nature the data was analyzed using deductive reasoning and association by the researchers. This allowed the researchers to draw comparisons between different philosophies about smart parking by looking at research on the current successes and failure of smart parking applications along with the future areas for concern. 
On the other hand, the data gathered through observations were logged in a Microsoft excel spreadsheet and analyzed using functions and charts. 

Functional Requirements 	
This project has addressed the following core functionalities of smart parking app prototype. 
●	The application must allow users to register to use the application and subsequently differentiate between staff, and students. 
●	The application should provide all security personnel, staff members and students registered the app the ability to reserve a parking space. 
●	The application should, restrict students from reserving a parking space in designated staff parking areas.
●	The application should clearly, indicate in the application the different types of parking spaces, that is, staff from general. 
●	The application should also allow students to reserve a parking space for a timed period. If the students fail to reach the UTech within that time, the reservation is cancelled.
●	The application should allow the security personnel only to assign a parking space. This is done when the motorists license plate number is entered into the app and the security personnel assigns the license plate number to the parking spot.
●	The application should allow students and staff members the ability to see the available parking spots around campus before making their selection once logged in.  
●	The application should provide real-time data on the state of the parking lots across campus seeing available spots, reserved spots and occupied spots.  
●	The application should store registration detail on a database.
●	The application should provide data to security personnel on which vehicle is assigned to a specific parking space.  
●	The application should allow motorists to log a complaint regarding parking violations such as another vehicle occupy their assigned parking space.
●	The application should allow either the security personnel or the motorist to use the system to switch the assignment of parking spots as necessary to resolve these issues where the assigned spot is already occupied.  

Non-Functional Requirements
 Due to the time limitation the researchers decided to scope this project to only addressed the following non-functional requirements in the meantime: 
●	Scalability - The smart parking application should be able to work with a smart parking system that is focused on hardware implementation such as RFID and IoTs. The application should be able to accommodate real-time information and payment flexibility. The application should be able to connect any number of independent modules into one coherent system and enables compliance and driving enforcement in a cost-effective manner. Therefor entire cities should be able to seamlessly connect regardless of their needs today or tomorrow.
●	Security and Privacy - The security of transaction and human interaction should be considered; therefore, the application should transmit all data across encrypted network using SSL certificates on the mobile and web application.  Data should be protected at the network level and application level at all times. 
●	Response time - The application should be able to respond to a user’s request in around 1 - 2 seconds.
●	Reliability - The application should be available during the hours Monday to Friday 7:30am to 10:00pm. This is to facilitate the early birds and the night owls using the campus. 
●	Fault tolerance - The application should allow the user to use alternate features of the system if the main features such as scanning of barcode, printing of ticket are not working.
●	Capacity, current and forecast - The application should be able to manage on average about 25 users per minute, eventually move into the region of 100s of users per minute.
●	Efficiency - The application UI/UX should be designed to ensure that the user can carry out their task with the least amount of interaction with the system. The user interface should only contain features that have immediate purpose. It is recommended that the application provide single clicks for main activities, such as log a report, reserve a spot, assign parking spot, deallocate parking spot. 

Project Design
The project was designed using the Extreme Programming Methodology (XP) for a number of reasons. The main goal of XP is to lower the cost of change in the requirements. Since the potential customer were not consulted in the design of the application the researchers needed a flexible methodology to facilitate changes during the development.
●	Fine scale feedback: test driven development and pair programming
●	Continuous process rather than batch: continuous integrations, and design improvements
●	Shared understanding: simple design and coding standards
●	Programmer welfare: sustainable pace in line with being a full-time student with multiple modules.
In order to implement the functional requirements of the smart parking application within the time limitation of 26 weeks, the developers chose to use frameworks and APIs to reduce the amount of coding required with a focus on using existing tools and services to solve the problem. The following tools were selected because they provided the shortest learning curve for the developers because the tools use programming languages and paradigms that were included as part of the developer’s curriculum during their tenure at the UTech. 
This included installing Ionic framework, and all its dependencies which utilize PHP, CSS, JavaScript, and HTML for real-time processing support, and the integration of Firebase cloud database which entailed downloading the AngularFire2 library for the manipulation of the database. The mobile application has the user interface, user functions, web services, and firestore queries to send and retrieve data from the cloud. Information such as the User information and parking lot details will be stored on the cloud.  The assistive parking management system developed in this project models that of modern parking guidance and information systems (PGIS).  PGIS have a primary objective of reducing the amount of time drivers spend searching for parking spaces which addresses the first problem stated in our research faced by motorists on the university campus.  In completing this project the Ionic Framework was used alongside Angular JS, Apache Cordova which were all installed on the computers used in development. Constant reference to the official Ionic documentation was used to properly set up the code environment when installing the various components and their dependencies.  Collaboration of code was facilitated through the use of GitHub.  
Furthermore, ease of use will be an absolute necessity as not all users may be technically competent and able to navigate a technical interface.  Thus, the interface will need to be as easy to comprehend as possible with clickable elements and clear, concise instructions. In addition to this, cooperation from the motorists taking advantage of the 
assistive parking application will be needed to provide the most desired results.  

Graphical User Interface Images of the Proposed Assistive Parking Application
 
Figure 1: Reservation Parking Space Screen
In figure 1 above, the screenshot shows the interface seen by staff members and students alike when they attempt to make a reservation for a particular parking space.  In the top left corner, the time elapsed is seen, this countdown begins when a reservation is made and serves to inform the user about how much time has passed since the creation of their reservation and as such how much time they have to arrive on campus may be derived.  The three click process entails the user first using the first button to select their desired spot, next they select how long the reservation should last and the final button confirms their reservation details. 
   
Figure 2: View Parking Spaces as a Student or Staff Member
In figure 2 above is the screen displayed when users select the view tab on lower section of the screen.  Here, users may see the status of the given parking lot. The first page displays the parking spaces reserved for staff members.  The parking spaces 2, 4, 6, 8 and 10 on the first page are reserved for the school buses.  Sliding across will show spaces 21-60, which are available to students and visitors.  The key presented below shows the colors used and their meanings, the various colors indicate whether a space is available, reserved or occupied.

 
Figure 3: Process of Reserving a Parking Space on Campus
The reservation process is shown above, the motorist will book a reservation using the 3 click process, where they select a spot, a time and then finally confirm the reservation and proceed to the campus within the time selected for their reservation. 
 Figure 4: Process of Allocating a Parking Spot
Below are the steps listed for a user to login to the application, make a reservation and then eventually park their car in their desired space.  
-	Step 1: Install the mobile application on user’s device.
-	Step 2: For new users to the application, an account must be registered, where user information is captured such as their ID numbers, contact number, name, and email address.
-	Step 3: Upon a successful login, users are redirected to the home screen where they will then select the reservation tab. 
-	Step 4: User presses the first on screen button to select their desired space through the use of a graphical interface depicting the current status of the parking lot. The selection is validated to see whether or not the user has permission to select this spot or if the spot is in use (whether occupied or reserved).
-	Step 5: User presses the second on screen button to select their estimated time of arrival which may be either 5, 10, or 15 minutes.
-	Step 6: User presses the final on-screen button to complete their reservation and proceed to the campus within the time selected in Step 5, failure to comply results in losing the reservation.
-	Step 7: Upon entering the campus the security personnel at the first post enters the users license plate number to allocate their spot.  The database is checked to see if there are any reservations made for the driver and the spot is assigned accordingly.
-	Step 8: Driver proceeds to the next post where they collect their parking ticket.
-	Step 9: Driver proceeds to parking lot and parks in the assigned space.	 
	
Service Organization Architecture	
	The project will utilize the System Organization Architecture (SOA) design to implement the proposed solution. The data needed will be passed through a central service control point. The central service point will consume data services for other data sets as well as process violations and vehicle tracking.
	The primary actors that constitute the assistive parking management system include:
-	Mobile Application: The mobile application is the interface for the end users to interact with the system.  The application was developed in the Apache Cordova and Ionic framework using Angular JS.  The purpose of using this framework was to create an application that can run on both android and the iOS platform with the same source code.  The application is connected to a Firebase Cloud Firestore database.  The purpose of the application is to provide information regarding the availability of parking spaces to both security personnel and end users while allowing the end users to reserve spaces accordingly.    
-	Firebase Cloud Firestore: This is the cloud database that houses all data necessary for the operation of this application. It stores all records related to parking areas and end users that have access to the system.  The data stored in the cloud also includes details of occupied spaces, reserved spaces and reports made by motorists.
-	Security Personnel: The proposed system relies on the security guards to actively utilize the mobile application to handle the allocation and deallocation of parking spots as motorists enter and exit the university campus.  Their duties also involve using the application to acquire the necessary information on the state of the parking lots to keep the data contained in the cloud database consistent with the real world. 

 Figure 5: Showing S.O.A Diagram							

Timeline
Make reference to the time chart in Appendix.	 	 		
	
Tools and Resources used
The resources that are required to ensure the success of the development of the assisted parking application are as follows:
1.	HTML - hypertext markup language is a standard language for creating web pages on the world wide web (www). 
2.	CSS - cascading style sheets provide the layout of a html document to be displayed on the screen or in other media. 
3.	JavaScript (JS) - a web programming language that enhances the user-friendly experience of web pages. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (for example functional programming) styles.
4.	Ionic Framework - Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies (HTML, CSS, and JavaScript). Ionic Framework is focused on the frontend user experience, or UI interaction of an app (controls, interactions, gestures, animations). It’s easy to learn, and integrates nicely with other libraries or frameworks, such as Angular, or can be used standalone without a frontend framework using a simple script include.
5.	Slack - cloud-based messaging application for team collaboration. Slack keeps your team and information in one easily searchable place, making collaboration online as easy as collaborating in person. 
6.	Firebase Realtime Database - the service provides application developers an API that synchronizes application data across iOS, Android, and Web devices, and stores it on Firebase cloud database. The product is built on Google infrastructure and scales automatically, for even the largest apps; it assists software developers in building real-time, collaborative applications. The database is also accessible through a REST API and bindings for several JavaScript Frameworks such as AngularJS, React, Ember.js and Backbone.js.
7.	Angular JS - is an open-source scripting language suited for web development and mobile development. AngularJS is a JavaScript-based open-source front-end web framework designed to address many of the challenges encountered in developing single-page applications (SPA). It aims to simplify both the development and the testing of such applications by providing a framework for client-side model-view-controller (MVC) and model-view-viewmodel (MVVM) architectures, along with components commonly used in rich internet applications. The framework is mainly maintained by a community of individuals and corporations.
8.	GitHub - is a web-based hosting service for version control using GIT. It offers all of the distributed version control and source code management functionality of Git as well access control and several collaboration features such as bug tracking, feature requests, and task management.

Application Development
Set up Environment
	The source code editor used for the development of this application was Microsoft’s Visual Studio Code which facilitated the need of the programmers to collaborate code through its embedded Git control and GitHub.  Installing the ionic 4 framework required the programmers to follow the instructions laid out in Ionic’s official documentation, where commands were written to the computers’ command prompts to install the frameworks and their dependencies.  Upon creating a new project, the integration of Firebase Cloud Firestore was crucial and required firebase libraries to be installed which was done through the terminal provided in Visual Studio Code.  After installing these libraries, a project was created on the Firebase console to house the database for the application.  The firebase console provided instructions on how to properly link the database to the mobile application project.  In running the application initially, Ionic DevApp was used to view the application on various mobile devices to ensure the desired look and feel were being achieved.    
Application Development 
	Firstly, the programming team tackled the overall look and feel of the application.  Sketches were made to brainstorm the overall theme for the application and to get a general idea of how the application would look.  The development of the graphical user interface was tackled first.  All necessary pages were created which held their individual HTML, SCSS and TS (typescript) files.  The elements of the user interface were created and controlled through the HTML scripts and the functionality of these pages such as routing to the other pages to make the application cohesive were done in the typescript files.  Thereafter the work on the back-end commenced.  
	Initially a design for the database was drafted to outline the required collections needed to house the data to be used by the application.  After this was complete the models for these collections were coded with the methods necessary to manipulate each individual collection.  The rest of the work to be done on the back-end included querying the database to satisfy the functional requirements of the application.  
Application Testing
	The success of the application will be highly dependent on its testing and as such the research team has developed a testing plan to ensure the application performs as expected.  The main objectives of these tests include:
-	Verifying that the assistive parking application works according to the functional requirements.
-	Identifying all high, medium and low severity defects, to eventually fix and retest them.
The final product of this test will produce a functional prototype.
Test Assumptions
-	Exploratory tests will be carried out once the build is ready for testing.
-	Performance testing is not considered for this estimation as scalability and stability of the cloud for the purpose of this functional prototype have been guaranteed from the Firebase developers in their documentation.  
-	The test team consists of the researchers of this group.  
-	The test team will act as staff, students and administrators in real world testing the application.
Test Principles
-	Testing will be focused on meeting the quality and functionality requirements.
-	Testing processes will remain flexible with the ability to change as needed.
-	Testing activities will build upon previous stages to avoid redundancy or duplication of effort. 
-	Testing environment and data will emulate a production environment as much as possible. 
Test Method
The tests to be done will take the form of the test team simulating real world events that will occur in the everyday usage of the application.  The scenarios to be tested will include making reservations, making reports as students and staff members, utilizing the application as an administrator (inclusive of allocating and deallocating parking spaces, viewing the parking lot’s status, and handling reports).  

Defects found during testing may be classed in five categories as follows:
Severity	Impact
1 (Critical)	●	This bug is critical enough to crash the system, cause file corruption, or cause potential data loss
●	It causes an abnormal return to the operating system (crash or a system failure message appears).
●	It causes the application to hang and requires restarting  the system.
2 (High)	●	It causes a lack of vital program functionality with workaround.
3 (Medium)	●	This bug will degrade the quality of the system.  However, there is an intelligent workaround for achieving the desired functionality.
●	This bug prevents other areas of the product from being tested. However other areas can be independently tested.
4 (Low)	●	There is an insufficient or unclear error message, which has minimum impact on product use.
5(Cosmetic)
 	●	There is an insufficient or unclear error message that has no impact on product use.

Application Deployment
A result of designing the application with Ionic 4 framework, the application can be exported as a web application and also for iOS and Android devices. The application will be web hosted and available for download from the respective stores; Google Play Store and App Store. Users can easily download the mobile application onto their respective devices via their respective stores. The application data is stored on a central cloud database (Firebase Cloud), therefore once user’s device has an active internet connection the application will work without faults, providing real time update and flawless functionalities.  For each device to have the application deployed on the Google Play and App Stores, the application will have to be registered with the smartphone company to become available for download. To do this will attract a developer’s fee for first-time account sign up in order to upload the application for user download.

Resources required
Most smartphones come equipped with a standard of about 8 gigabytes of memory. This project application will require about 2 megabytes of peak memory and will consume about 6 megabytes of space to install. In order to provide real-time information, the application currently uses a cloud-based solution to run the backend, therefore, the potential user is required to have internet access on their smartphone to use the application. The user is expected to be computer literate with experience using smartphone applications; just so that they have a sense of how apps work and the general look and feel of these types of applications.

Expected Outcome and Benefits
	Based on the design and structure of the newly developed system that is going implemented on mobile devices, it is expected to have an immense impact on the current system. The implementation will provide all registered users (motorist) of the application visiting the institution with the opportunity to view all the available parking spaces and make a reservation for a parking space from their mobile device. 
	The implementation will benefit both users of the device and the university itself. Users will be provided with the opportunity to view and make reservations of parking spots while off campus from their mobile device. The motorist will spend less time driving around searching for an available parking spot. With reference to the benefits gained by the institution, the school will now have a more technologically efficient parking allocation system, which will also be beneficial to the security guards monitoring parking lots. Security personnel will have real-time status of the parking spaces; this information can be used to make informed decisions regarding the current parking arrangements.

 
Chapter 4
Findings
Introduction
The main focus of this research and application is to efficiently and effectively implement the Assistive Parking system for use by staff, students and guests of the University of Technology campus. 
In order to achieve this through the use of our data collection methods, observation, a count of the number of cars that entered and exited the school campus during traffic peak hours, had to be recorded for thirty (30) minute periods. This was conducted by waiting at the school’s main entrance and exit and counting the number of cars (via a counting application) that entered and exited the school’s campus at peak hour times of the day. Additionally, the researchers conducted another daily test which spanned from march 4th to march 15th to calculate how long it would take motorist to locate vacant parking spaces once cleared by the main gate using the current system. The data from this was recorded and depicted using a bar chart in figure 7 below. The researchers also recorded the time it took motorists using the parking mobile application of the proposed system to locate and park in empty parking space once cleared by the main entrance, this was done daily from April 8th to May 3rd. The results from this test was recorded and depicted through the use of a barcode, which can be seen in figure 8 below. 
The results of the observation are depicted through the use of charts and analyzed below.




Data Analysis
Car Count at Peak Hours
 
Figure 6: Column Chart showing the number of cars that entered and exited the UTech campus for weekday Monday at three (3) 30minute periods for the course of two (2) months.

 
Figure 7: Column Chart showing the number of cars that entered and exited the UTech campus for weekday Thursdays at three (3) 30minute periods for the course of two (2) months
After numerous daily counts of the number of vehicles that entered and exited the campus, it was established that Mondays and Thursdays were the most popular days for students, staff and guests to attend classes, or conduct other business on the campus at peak hour times such as the morning rush hour (7:30 AM to 8 AM), lunchtime (12:30 PM to 1 PM), and after hours (8:15 to 8:45 PM), which resulted in an increase in the amount of cars that entered and exited the campus. 
As it can be seen from figure 6 above, during the morning period, 7:30 to 8:00 for Monday, the number of cars entering has a range between 55 to 85 cars, and those exiting range from 25 to 50 cars. Then for the Monday afternoon period, 12:00 to 12:30, the car count for those entering ranges between 75 to 110 cars and for those exiting, also between 70 to 110 cars. However, for the Monday night period, 8:15 to 8:45, fewer cars enter the school campus with a range between 55 to 80 cars, but for those exiting, this has a higher number than any previous entrance or exit count with a range between 95 to 150 cars. As for Thursday, the morning period, 7:30 - 8:00, the range of cars for entry to the campus range between 60 to 100 cars, and for the exit, a range of 25 - 40 cars. For the afternoon period, 12:30 to 1, the range of cars for entry fall between 75 to 120 cars while the exit count falls between 75 to 100 cars. Finally, the evening period, 8:15 to 8:45, the entry count falls between 50 to 90 cars while the exit count falls between 85 to 140 cars.
These peak hours lead to a backup of traffic outside the campus unto the main road for those entering as well as inside the campus for those that are exiting. This backup is a probable cause of lengthy time used by drivers to find a suitable parking space.
Two (2) members of the research group who have access to vehicles, experimented and recorded the length of time that it takes to locate a parking space during the peak hours using the current system at UTech. The members of the research team arrived on campus looking for an available parking space at 8:00 am, 1:00 pm and 7:00 pm for a period of 10 days.
The members of the research team involved in the experiment took their readings during the weeks of March 4-9 as well as the following week March 11-15.  The readings from both members were tabulated and averaged for the 10 day period of experimentation. For this experiment, the drivers both took the same route each time and parked in the first available spot each time.  After collecting the parking ticket at the security post the stopwatch was started and the driver proceeded to the main parking lot situated between the library and the engineering building to check for available spaces if no spaces were found the parking lot on the other side of the engineering faculty building was checked.  If no available spaces were found the drivers would proceed to the shared facilities parking lot by driving past Burger King.  These parking lots are the largest parking lots and as such were the first choices.  On some occasions all of these parking lots were filled to capacity, in such instances, drivers would proceed to the faculty of science and sport (FOSS)  parking lot behind the multi-purpose field. In this experiment, the FOSS parking lot was the last resort as the members conducting the experiment would often find an available parking space here when the three major parking spaces were occupied.  Failure to find an available parking space would result in the driver making another round-trip.
 
Time Taken to Find Parking Spaces with Current Parking System
 
Figure 8: Bar graph showing the time taken by the research team to find an available parking space, during peak hours with UTECH’s current parking system.
 
Time Taken to Find Parking Spaces with Proposed Assistive Parking System
 
Figure 9: Bar Graph showing the time taken by the research team to find an available parking space, during peak hours with the proposed assistive parking system.

Discussion
Upon analysis of the results obtained from the times taken to find parking spaces with the university’s current system, it became evident that the most difficult time to find available parking spaces was in the midday period.  This may have been so because it would be at this time that most patrons have a business to take care of on campus whether they are students attending classes, lecturers being at work or otherwise.  The morning session was seen as the easiest time to find parking, it was noticed that the parking lots were generally less occupied as most motorists would not have arrived on campus yet.  The results obtained from the times taken to find an available parking space with the use of the assistive parking system showed 48.67% improvement in the average time.  This is indicative of the proposed system almost cutting the average time spent by motorists searching for parking in half.  This was so because instead of drivers aimlessly searching for spaces they would proceed to the space they had reserved or had been assigned and would choose the optimal route to do so based on the distance from the entrance of the school.  The trends noticed from the first batch of readings remained the same as the afternoon period remained as the period that required the most time in finding available parking and the morning period requiring the least amount of time.  
In the article “A Reservation-based Smart Parking System”; the findings of the research conducted illustrated that after the implementation of a reservation based parking system, the results obtained pertaining to the time it takes motorist to locate parking space after testing would be almost 50% less when compared to the time taken while using the current system (Wang, 2011). The findings of that research is similar to ours such that during testing, findings showed a 48.67% improvement in the time taken for motorists to locate parking when using our system compared to when using the current system at UTECH. This implies that the implementation of our proposed system will not only significantly improve the efficiency of the current system but also eliminate all issues associated with it. The findings of this research further show the need for our project as it will function as intended under the pressure of peak hours traffic. 



Chapter 5
Summary, Conclusions and Recommendations
Summary of the Research
This research, along with a developed application, were conducted in order to mitigate or eliminate the parking issues associated with most organizations, starting with the University of Technology, Jamaica (UTech). These issues include time wastage; as motorists often times drive around campus in search of an empty parking spot, fuel wastage; as a result of motorists driving around in search of parking space, the vehicles can be loud which causes noise pollution and they waste fuel which is not only costly, but harmful to the environment through toxic gas emissions. The current parking system at UTech provides no information to the institution’s security unit regarding the state of the parking lots and ultimately does not allow them to determine how many vehicles are currently on campus, as well as knowing the individuals to which the vehicles belong. This poses a challenge to the security guards when patrolling the parking lots seeing that they are unable to penalize motorists or notify them of any parking issues or other matters due to this lack of critical information regarding the vehicle owner. This poses a security risk for motorists and their cars. 
	The problem statement for this research study is to develop an assistive parking management system for use by motorists and security personnel on the University of Technology, Jamaica campus to mitigate the amount of time wasted by motorists when searching for a parking space. Additionally, the security personnel will be provided with more assistance to aid motorists who make requests about available parking spaces and their locations on the campus. 
The following questions aided us in developing our hypothesis which act as a guide for gathering and assembling data for our research:
1.	How can technologies such as mobile communication, cloud computing, and a barcode be incorporated to design a cost-effective assistive parking lot management systems?
2.	What are the benefits to a company or institution, motorists and the environment of using a technology-centric assistive parking lot management systems?
These questions were used to develop the hypothesis that: Modern technologies such as Mobile Communication, Cloud Computing, Crowd-Sourcing and Barcodes can be used to design cost-effective smart parking solutions to fit within the paradigm of a smart city in Jamaica. Our aim was to test the truthfulness of this hypothesis by developing and implementing our own mobile application using a combination of the aforementioned techniques. 
The overall objective of this project is to enhance the current parking system through a cost-effective method of designing a parking management system that will mitigate the issues of the existing parking system. This required the development of a mobile application which will be used by motorists and security guard personnel, the system administrators, on the UTech campus. With this implementation, the institution will now have a technologically efficient parking management system which will aid in moving the school forward to becoming a smart campus. The Assistive Parking Management System (APMS) proposed by the research team allows motorists, whether members of staff or students to make reservations for parking spaces, view the status of the parking lots at any given time, and make reports about problems faced as it relates to parking on the campus.  On the side of the administrators, namely the security guards, they are tasked with the duty of utilizing the mobile application to allocate parking spaces to motorists upon arrival to the campus, deallocate parking spaces upon departure of the motorists, monitoring the overall status of the parking lots, resolving conflicts seen from reports made as well as manipulating the database forcefully if needs be to ensure the information contained in the database is always correct.
The procedures followed through in the completion of the project development begins with the user requirements of the system, initial system design, implementation phase, testing and maintenance of the system.  
In order to structure the system, the researchers gathered information on the necessary user requirements. Firstly, to understand the how the current parking management system operates. The researchers used the observation technique which was sufficient enough to find out how the current system works as well as identify the flaws associated. The issues identified from the observation presented opportunities which aided with identifying the features that our system must have in order to eradicate these issues. The system design was then developed; this entailed creating a system where there is a central cloud real time database from which all internet connected devices with the APMS mobile application can interact with the system, with different users having different access privileges ensuring the application is properly utilized. This brings us to the implementation phase, this was achieved through the use of Firebase Cloud Firestore (Real time online database) back-end, and front-end aspects (HTML, SCSS, TypeScript, JAVA Script, CSS and Angular 7 JS). In regards to the testing and maintenance phase, the developers ran multiple test exposing the system to different technological pressure to see how it would hold up and recorded the data which was all positive, which means the system should perform flawlessly. The UI was clean and yet simply user friendly which will make the system use easy and very interactive.

Findings Conclusions
	In Chapter 4, which entails the Findings analyzed and discussed from the methodological instrument of observation, are as follows.
1.	It takes an average of 8.67 minutes for motorists accessing the UTech campus to find a parking space in the current parking system. 
2.	The peak hours for traffic coming into the University of Technology, Jamaica were found to be 7:30 a.m. to 8 a.m, 12:30 p.m - 1 p.m and 8:15 p.m - 8:45 p.m. 
3.	Technological parking management systems can solve many issues associated with manual parking system (Geng, 2012).
4.	There are multiple Ways to design and implement an assistive parking management system, however popular methods such as the use of sensors or RFID are costly and therefore crowdsourcing has proven to be a cheaper and yet effective alternative (Geng, 2012)

Project Conclusions
1.	It takes an average of 4.45 minutes for motorists to get to their assigned parking space with the proposed system. 
2.	The new system employed has been proved to be a more efficient one than the current parking system that is in place as motorists were able to find their assigned parking space in a quicker and easier manner. 
3.	Modern technologies such as Mobile Communication, Cloud Computing, Crowd-Sourcing and a barcode were used to design cost-effective smart parking solution at the University of Technology, Jamaica campus to fit within the paradigm of a smart city in Jamaica. This was done in the form of a mobile application. 

The researchers were able to successfully prove the truthfulness of the hypothesis that modern technologies such as Mobile Communication, Cloud Computing, Crowd-Sourcing and a barcode were used to design cost-effective smart parking solution at the University of Technology, Jamaica campus to fit within the paradigm of a smart campus in Jamaica. The research team did this by developing a mobile application for an assistive parking management system. This application was designed with the aim of solving the parking issues faced by motorists using the university’s parking lot by reducing the time they take to find an available parking spot, which also address other environmental issues mentioned as well as provide additional security and log of vehicles on campus. This will provide motorists with a hassle-free means of locating an available parking space and will help them save time and reduce wastage of fuel, hence reducing environmental pollution. This system can be used as a driver towards making the University of Technology, Jamaica a smart campus. 

Recommendations
1.	Due to the scope and testing environment of the project with the restriction of testing narrowed to one parking lot, for future development, parking lot labels/signs for all parking lots will assist greatly with the use of the proposed system, making it easier to find the parking lots with the reserved spot or other available parking spaces.
2.	In order to better manage and ensure that each car is restricted to one (1) space, it would be favorable if the parking spaces were numbered and had properly drawn lines.  
3.	This system is not specified to just the University of Technology campus but for any institution. However, for system testing purposes, this system was narrowed down to the School of Computing and Information Technology parking lot on the UTech campus. 
Appendix
From Chapter 2 (Literature Review)

 
Figure 10 Smart Parking Allocation Center








From Chapter 3 (Methodology)
Time Chart
Phase (Activities)	Due Date	Start Date	Duration in Days	End Date
Project Proposal	Due week of October  15, 2018	01/10/2018	14	15/10/2018
Project and Requirements Planning	-	10/16/2018	21	06/11/2018
Requirements Analysis	-	26/09/2018	21	01/12/2018
Conceptual Design	-	02/12/2018	21	23/12/2018
Physical Design	-	02/01/2019	60	03/03/2019
Prototype and Evaluation Plan	-	04/03/2019	14	18/03/2019
Evaluation Results and Project Reports	-	19/03/2019	14	02/04/2019
Figure 11 showing timeline of this research project


Diagrams:
 
Figure 12 showing a sketch diagram of the deallocation process.







Graphical User Interface (GUI) Images of the Proposed Application
GUI Screenshot for Home Page and Reservation Page:  
Figure 13 showing the screenshots of the “home screen” and the “Make a reservation” screen of the mobile application 



Make a report:
  
Figure 14 showing the screenshots of the “Report an Issue” screen of the mobile application  
Parking Lot View:
   
Figure 15 showing the screenshots of the real time “Parking Lot View” screen of the mobile application 




User Login:
 
Figure 16 showing the screenshots of the “User Login” screen of the mobile application 


User Registration
  
Figure 17 showing the screenshots of the “Registration” screen of the mobile application 




Administrators Portal:
 
Figure 18 showing the screenshots of the “Administrator’s Portal” screen of the mobile application 


Allocate Vehicle:
	 
Figure 19 showing the screenshots of the “Allocate Vehicle” screen of the mobile application 



Deallocate Vehicle:
  
Figure 20 showing the screenshots of the “Deallocation” screen of the mobile application  
Administrator View Vehicle Parked:
   
Figure 21 showing the screenshots of the “View Vehicles Parked” screen of the mobile application  
Administrator Check Reports:
 
Figure 22 showing the screenshots of the “Check Reports” screen of the mobile application 
 
Administrator Manage System:
  
Figure 23 showing the screenshots of the “Manage System” screen of the mobile application 




Sequence Diagrams
 
Figure 24 showing the Sequence Diagram for login process






 
Figure 25 showing the Sequence Diagram for Register Now Process















 
Figure 26 showing the Sequence Diagram for Allocate Vehicle












 
Figure 27 showing the Sequence Diagram for Deallocate Vehicle












 


Figure 28 showing the Sequence Diagram for View Vehicles Parked























 



Figure 29 showing the Sequence Diagram for Checking and Deleting Reports 














 

Figure 30 showing the Sequence Diagram for Manage System 












 
Figure 31 showing the Sequence Diagram for Reservations 















 
Figure 32 showing the Sequence Diagram to Report an Issue













 

Figure 33 showing the Use Case Diagram for Assistive Parking Mobile Application




 
Figure 34 showing the UML Diagram for Assistive Parking Mobile Application











References
10 Benefits of a Smart Parking Solution. (2016). Retrieved from http://www.plasmacomp.com/blogs/benefits-of-smart-parking-solution
Agile Software Development Definition and Examples | Aha!. (2019). Retrieved from https://www.aha.io/roadmapping/guide/agile-development
Arnott, R., Rave, T., & Schöb, R. (2005). Alleviating urban traffic congestion. MIT Press Books, 
1.
Bagula, A., Castelli, L. and Zennaro, M. (2015). On the Design of Smart Parking Networks in 
the Smart Cities: An Optimal Sensor Placement Model. Sensors, 15(7), pp.15443-15467.
Basu, A. (2014). Smart Parking. Happiest Minds Technologies Ltd, 3,11.
Boudali, I. and Ouada, M. (2017). Smart Parking Reservation System Based on Distributed 
Multicriteria Approach. Applied Artificial Intelligence, 31(5-6), pp.518-537.
Brabham, D. C. (2008). Crowdsourcing as a model for problem solving: An introduction and 
cases. Convergence, 14(1), 75-90.
Bridgwater, H., Brown, D., Nekaj, E., Hershkovitz, S., Reffell, C., & Brown, D. (2019). What is Crowdsourcing? | Crowdsourcing Week. Retrieved from https://crowdsourcingweek.com/what-is-crowdsourcing/
Chan, B. (2017). Smart Parking Solutions – It’s Not About The Parking. Retrieved from 
https://www.iotforall.com/innovation-in-smart-parking-solutions/
Cheng, F. (2017). Build mobile apps with Ionic 2 and Firebase (pp. 1-20). Auckland: Apress 
Media LLC.
Cheung, K., & Varaiya, P., (2007).Traffic surveillance by wireless sensor network: Final 
report, Univ. California, Berkeley, CA, USA, Tech. Rep. UCB-ITS-PRR-2007-4, 2007.
Chinrungrueng, J., Sunantachaikul, U., & Triamlumlerd, S. (2007). Smart parking: An
application of optical wireless sensor network. Proceedings Of The International Symposium On Applications And The Internet Workshops, 66-69.
Geng, Y., & Cassandras, C. (2013). New “Smart Parking” System Based on Resource 
Allocation and Reservations. IEEE Transactions On Intelligent Transportation Systems, 14(3), 1129-1139. doi: 10.1109/tits.2013.2252428
Geng, Y., & Cassandras, C. (2011). Dynamic resource allocation in urban settings: A “smart 
parking” approach. IEEE Multi-Conference On Systems And Control, 1-6.
Geng. Y and Cassandras C. G. (2012). A new “Smart Parking” System Infrastructure and Implementation. Procedia - Social and Behavioral Sciences, 54(may 1877), 1278–1287.             
Giuffrè, T., Siniscalchi, S. and Tesoriere, G. (2012). A Novel Architecture of Parking 
Management for Smart Cities. Procedia - Social and Behavioral Sciences, 53, p.16-28.
Griffith, E., “Pointing the way,” ITS Int., Kent, U.K., 2000. ITDP (2015), Parking Guidebook
	for Beijing, Institute for Transportation and Development Policy (www.itdp.org); at
	www.itdp.org/parking-guidebook-for-beijing
Hilmani, A., Maizate, A., & Hassouni, L. (2018). Designing and Managing a Smart Parking
	System Using Wireless Sensor Network...: EBSCOhost. Retrieved from
    http://web.b.ebscohost.com/ehost/pdfviewer/pdfviewer?vid=1&sid=9161b95c-a611-4d
    e6-9e11-855bff84363f%40pdc-v-sessmgr01
Hodel, T., & Cong, S. (2003). Parking space optimization services, a uniformed web                                    
application architecture. Proc. ITS World Congr, 16-20.
Idris, M., Leng, Y., Tamil, E., Noor, N., & Razak, Z. (2009). Cаг park system: a review of        
smart parking system and its technology. Information Technology Journal, 8(2), pp.101-
113.
Innovations in Smart Parking Taking Cities into the Future | Coolfire Solutions Blog. (2019). 
Retrieved from https://www.coolfiresolutions.com/blog/innovations-smart-parking/
International VNIS ‘A Ride into the Future’, 30 July 2 August, Seattle, WA, USA., pp:67-74.
Kincaid, J. (2010). Google's Open Spot Makes Parking A Breeze, Assuming Everyone Turns 
Into A Good Samaritan – TechCrunch. Retrieved from 	https://techcrunch.com/2010/07/09/google-Parking-Open-Spot/
Kopeck´y, J., & Domingue, J. (2012). ParkJam: Crowdsourcing Parking AvailabilityInformation 
with Linked Data (Demo) [Ebook]. Knowledge Media Institute, The Open University, UK. Retrieved from https://www.academia.edu/2785679/ParkJam_Crowdsourcing_Parking_Availability_Information_with_Linked_Data_Demo_
Kurago, H., K. Takada and H. Akiyama, 1995. Concept of a parking guidance system
and its effects in the Shinjuku area-configuration, performance and future
	improvement of system. Proceedings of Vehicle Navigation and Information Systems
	Conference, 1995. In conjunction with the Pacific Rim Trans Tech Conference, 6th
Lamba, N. (2010). Social Media Tackles Traffic. Retrieved from 
https://www.wired.com/2010/12/ibm-Thoughts-on-a-Smarter-Planet-8/	 		
Li, B., Sun, L., Chen, C., Li, S., Zhang, D., Qi, G., & Yang, Q. (2011). Hunting or waiting? 
Discovering passenger-finding strategies from a large-scale real-world taxi dataset. In 2011 IEEE International Conference on Pervasive Computing and Communications Workshops (PERCOM Workshops). Seattle, WA, USA: IEEE. Retrieved from https://ieeexplore.ieee.org/document/5766967
Litman, T. (2006). Parking Management: Innovative Solutions To Vehicle Parking Problems.
	Retrieved from https://www.planetizen.com/node/19149
Litman, T. (2016). Parking Management Strategies, Evaluation and Planning [Ebook] (p. 18).
	Victoria Transport Policy Institute. Retrieved from http://www.vtpi.org/park_man.pdf
McKay, V. (2019). What is Rapid Application Development? (RAD) | Analysis and Design | 
FAQ. Retrieved from http://www.selectbs.com/analysis-and-design/what-is-rapid-application-development
Medlej, M., Stuban, S., & Dever, J. (2017). Assessing the likelihood of achieving prototyping
benefits in systems acquisition. Defense Acquisition Research Journal, 24(4), 626-655.
doi: 10.22594/dau.17-774.24.04  
Realcomm. (2014). Retrieved from https://www.realcomm.com/advisory/620/1/smart-parking-
what-is-it-how-can-your-facility-benefit
Rocque, M. (2017). Think smart to tackle future traffic, by Dr. Graham Cookson, chief 
economist at INRIX. Retrieved from 	https://www.smartcitiesworld.net/opinions/opinions/think-smart-to-tackle-future-traffic-        
      by-dr-graham-cookson-chief-economist-at-inrix
Rodier, C.J., & Shaheen, S.A. (2010), “Transit-based smart parking: An evaluation of the San 
Francisco bay area field test,” Transp. Res. C, Emerging Technol., vol. 18, no. 2, pp. 225–233.
Ross, V. (2011). Looking for Parking? Check Your Phone. Retrieved from 	https://www.popularmechanics.com/technology/gadgets/a6528/smart-parking-systems-
steer-drivers-to-open-spaces/#
Shaheen, S., Rodier, C. and Eaken, A. (2005). Smart parking management field test: A
bay area rapid transit (bart) district parking demonstration.. [online] Available at:
	 http://pubs.its.ucdavis.edu/download_pdf.php?id=44. [Accessed 4 Jan. 2019].
Shoup, D. (2005). The High Cost of Free Parking. Journal of Planning Education and Research, 
17(1), pp.3-20.
Sisson, S. (2008). Campus Walkability, Pedometer-Determined Steps, and Moderate-to-
Vigorous Physical Activity: A Comparison of 2 University Campuses. Journal of American College Health, 56(5), pp.585-592.
Smart parking Definition from PC Magazine Encyclopedia. (2019). Retrieved from 	https://www.pcmag.com/encyclopedia/term/65086/smart-parking
Thaker, J. (2015). Next Your parking can talk – smart parking is the solution. Retrieved from 	https://www.softwebsolutions.com/resources/smart-parking-iot-solution.html
Wang, H., & He, W. (2011). A Reservation-based Smart Parking System - IEEE Conference
		Publication. Retrieved from  https://ieeexplore.ieee.org/abstract/document/5928901
Wessel, P. (2016). What is Smart Parking? Retrieved from https://parksmart.gbci.org/what-
smart-parking
What is a Mobile Application? - Definition from Techopedia. (2019). Retrieved from 
https://www.techopedia.com/definition/2953/mobile-application-mobile-app
What is Ionic. (2019). Retrieved from https://ionicframework.com/what-is-ionic
What is Prototyping? - Definition from Techopedia. (2019). Retrieved from
https://www.techopedia.com/definition/13136/prototyping
What is RAD Model? Advantages & Disadvantages. (2019). Retrieved from 				https://www.guru99.com/what-is-rad-rapid-software-development-model-advantages-
disadvantages.html
What is the Internet of Things (IoT)? - Definition from Techopedia. Retrieved from 	https://www.techopedia.com/definition/28247/internet-of-things-iot
World Health Organization. (2018). Retrieved from
https://www.who.int/gho/road_safety/registered_vehicles/number/en/
Yan, T., Hoh, B., Ganesan, D., Tracton, K., Iwuchukwu, T., & Lee, J. (2011). CrowdPark: A 
Crowdsourcing-based Parking Reservation System for Mobile Phones. University Of Massachusetts At Amherst Tech. Report.



	







