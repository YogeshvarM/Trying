(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(19),s=t.n(l),c=t(36),r=t(3),o=t(68),m=t(7),d=t(50),u=t(61),p=t(13),g=t(38),h=(t(55),t(32)),E=t(60),f={sidebarData:[{id:"menu-0",title:"Home",path:"/portfolio",icon:i.a.createElement(p.d,{size:35}),className:"nav-text"},{id:"menu-1",title:"Projects",path:"/projects",icon:i.a.createElement(p.e,{size:35}),className:"nav-text"},{id:"menu-2",title:"Blogs",path:"/blogs",icon:i.a.createElement(h.b,{size:35}),className:"nav-text"},{id:"menu-3",title:"Skills",path:"/skills",icon:i.a.createElement(p.a,{size:35}),className:"nav-text"},{id:"menu-4",title:"Resume & Certification",path:"https://drive.google.com/drive/folders/1EsU5iTvcT73p1Lxh62rCmeOU2IOVNHuO?usp=sharing",icon:i.a.createElement(E.a,{size:35}),className:"flex-end",isLink:!0}]},k=function(e){return i.a.createElement(g.a,null,f.sidebarData.map(function(a){return i.a.createElement(g.a.Item,{key:a.id},a.isLink?i.a.createElement(g.a.Link,{className:a.className,href:a.path,target:"_blank"},a.icon,i.a.createElement("span",null,a.title)):i.a.createElement(g.a.Link,{as:c.b,to:a.path,onClick:e.onSelection},a.icon,i.a.createElement("span",null,a.title)))}))},b=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1];return i.a.createElement(d.a,{className:"navbar",expand:"sm",expanded:t},i.a.createElement(u.a,{fluid:!0},i.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return l(!t&&"expanded")}},i.a.createElement(p.f,{className:"toggle-icon"})),i.a.createElement(d.a.Collapse,null,i.a.createElement(k,{onSelection:function(){l(!1)}}))))},y=t(102),v=t(103),N=t(62),w=t.n(N),_=function(e){return i.a.createElement(w.a,{options:{strings:e.titles,autoStart:!0,loop:!0,deleteSpeed:80}})},S=function(e){var a=e.about.start,t=e.about.exit;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"about-card",style:{backgroundColor:"#263238"}},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"150%",backgroundColor:"#F6F6F6",color:"#8e8d8a",padding:"2rem"}},a,i.a.createElement("br",null),t)))},P=t(53),x=(t(85),t(63)),A=(t(86),function(e){return i.a.createElement("div",{className:"tags"},e.tags.map(function(a,t){return i.a.createElement(x.a,{pill:!0,className:"tag mr-2 mb-2",key:e.id+t,bg:"secondary"},a)}))}),D=(t(87),function(e){return i.a.createElement(P.VerticalTimeline,null,e.items.map(function(e){return i.a.createElement(P.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.date,icon:e.icon,key:e.id},i.a.createElement("h2",{className:"vertical-timeline-element-title"},i.a.createElement("strong",null,e.title)),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company),i.a.createElement("p",{className:"vertical-timeline-element-description"},e.description),i.a.createElement(A,{id:e.id,tags:e.tags}))}))}),z=t(64),I=t(65),T=t(37),M={greeting:i.a.createElement("h1",{className:"heading"},"Hi! I'm ",i.a.createElement("strong",{className:"main-name"}," Yogeshvar M ")),titles:["Data Science Enthusiast","Data Analytics Enthusiast","Emerging Tech Enthusiast"],about:{start:"I am a data analytics and data science enthusiast with a strong educational background in Big Data Analytics.",exit:"With experience in Python, SQL, Power BI, Machine Learning, and Deep Learning, I have a track record of successful internships and professional projects. I am dedicated to applying my expertise to deliver data-driven insights and solutions."},workTimeline:[{id:"work-3",title:"Data Science Intern",company:"Alstom",description:"Contributed to a Data Science project by designing data-driven dashboards and UI with Plotly, Dash, and Python, collaborating in a cross-functional team.Showcased strong teamwork and communication while partnering with MLOps, Machine Learning, Radio Engineers, and Data Engineering teams.",date:"Sep'2022-present",icon:i.a.createElement(z.a,null),tags:["Python","Plotly","Dash","PostgreSQL","Minio","HTML"]},{id:"work-2",title:"Data Science and Business Analytics Intern",company:"The Sparks Foundation ",description:"Predicted student performance using Supervised ML, estimating percentage of marks based on study hours.Conducted retail sales analysis using Tableau for data visualization and insights.",date:"2022",icon:i.a.createElement(T.b,null),tags:["Data Science","Data Analytics","Tableau","Machine Learning"]},{id:"work-1",title:"MTech",company:"VIT University,Vellore.India",description:"Studied Masters in Big Data Analytics which helped to get the basic foundation for Analytics and Data Science field",date:"2021-2023",icon:i.a.createElement(I.a,null),tags:["Data Engineering","SQL","Python","Data Visualization","Big Data","Statistics","EDA"]},{id:"work-0",title:"B.E",company:"SRM Easwari Engineering College,Chennai.India",description:"Studied Engineering in Specialisation of Electronics and Instrumentation",date:"2016-2020",icon:i.a.createElement(h.a,null),tags:[]}]},j=(t(88),function(){return i.a.createElement("section",null,i.a.createElement(u.a,{fluid:!0,className:"home-content",id:"home"},i.a.createElement(y.a,null,i.a.createElement(v.a,{className:"home-header"},i.a.createElement("div",null,M.greeting),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(_,{titles:M.titles})),i.a.createElement("div",null,i.a.createElement(S,{about:M.about}))))),i.a.createElement(u.a,{fluid:!0,className:"resume-content",id:"resume"},i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(D,{items:M.workTimeline}))))}),C=(t(39),function(e){return i.a.createElement("ul",{className:"card__footer"},e.item.links.map(function(a){return i.a.createElement("li",{key:e.item.id+a.name,title:a.name},i.a.createElement("a",{className:"card__btn",href:a.url,target:e.item.target,rel:"noopener noreferrer"},a.icon))}))}),L=function(e){return i.a.createElement("div",{className:"card",key:e.item.id},i.a.createElement("a",{style:{display:"flex"},href:e.item.links[0].url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{style:{backgroundImage:"url('"+e.item.image+"')"},className:"card__img",alt:e.item.title})),i.a.createElement("div",{className:"card__body"},i.a.createElement("h2",{className:"card__title"},i.a.createElement("strong",null,e.item.title)),e.isProject?i.a.createElement("div",null,i.a.createElement("li",{className:"card__description"},e.item.Point1),i.a.createElement("li",{className:"card__description"},e.item.Point2),i.a.createElement("li",{className:"card__description"},e.item.Point3)):i.a.createElement("p",{className:"card__description"},e.item.description),i.a.createElement("hr",{className:"card__line"}),i.a.createElement(C,{item:e.item})))},B=t(48),R=t(49),O=(t(56),t(89),t(90),t(91),t(92),[{id:"project-5",title:"Telecom Churn Prediction ",links:[{name:"repo",url:"https://github.com/YogeshvarM/Telecom-Churn-Prediction",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/YogeshvarM/Telecom-Churn-Prediction/fork",icon:i.a.createElement(B.a,null)},{name:"subscription",url:"https://github.com/YogeshvarM/Telecom-Churn-Prediction/subscription",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://medium.com/@yogeshvar_m/telecom-churn-prediction-with-deep-learning-a-full-stack-data-science-project-in-action-10462ece26b4",icon:i.a.createElement(R.a,null)}],image:"https://www.displayr.com/wp-content/uploads/2017/07/customer-churn-edit.jpeg",Point1:"Developed an Artificial Neural Network (ANN) using Keras for telecom customer churn prediction, deploying via Flask RESTful API on AWS Beanstalk.",Point2:"Utilized AWS RDS for preprocessing raw input data, connecting churn prediction API and database to Power BI for analytics.",Point3:"Developed and implemented a Power BI dashboard to visualize insights for customer success teams, integrating AWS RDS data and monitoring model performance.",target:"_blank"},{id:"project-4",title:"Zomato Dataset",links:[{name:"repo",url:"https://github.com/YogeshvarM/Zomato-Data-Analysis",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/YogeshvarM/Zomato-Data-Analysis/fork",icon:i.a.createElement(B.a,null)},{name:"subscription",url:"https://github.com/YogeshvarM/Zomato-Data-Analysis/subscription",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://medium.com/@yogeshvar_m/unlocking-insights-in-zomato-data-an-analysis-using-regression-classification-and-clustering-d68063d93fa",icon:i.a.createElement(R.a,null)}],image:"https://miro.medium.com/max/1200/1*FiwobLBqdIzTMeACOWJjLw.jpeg",Point1:"Applied regression for rating predictions, assessing models with MAE, MSE, and R-squared.",Point2:"Used classification algorithms for two-rating classes, comparing performance using accuracy and F1-score.",Point3:"Implemented clustering techniques and created an interactive dashboard for Zomato insights.",target:"_blank"},{id:"project-3",title:"Sale Analysis",links:[{name:"repo",url:"https://github.com/YogeshvarM/Sales-Analysis",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/YogeshvarM/Sales-Analysis/fork",icon:i.a.createElement(B.a,null)},{name:"subscription",url:"https://github.com/YogeshvarM/Sales-Analysis/subscription",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://medium.com/@yogeshvar_m/sale-analysis-e5a6090b568",icon:i.a.createElement(R.a,null)}],image:"https://www.finereport.com/en/wp-content/uploads/2020/06/2020062201I.png",Point1:"Developed an interactive Power BI dashboard using MySQL to analyze sales, customer, and product data, with filters for salesperson and a budget comparison feature.",Point2:"Designed visually engaging charts and graphs to present key insights in sales analysis, customer details, and product details, improving data visibility and user engagement.",Point3:"\u2022Streamlined analysis process and enabled better decision making by creating a precise system for analyzing internet sales data.\n",target:"_blank"}]),Y=function(){return i.a.createElement("div",{className:"wrapper"},O.map(function(e){return i.a.createElement(L,{item:e,isProject:!0})}))},U=t(54),Q=(t(57),function(e){return i.a.createElement("ul",{className:"skill-icons"},e.config.map(function(e,a){return i.a.createElement("li",{className:e.className,key:e.id},e.icon,i.a.createElement("p",{className:e.className+"-text"},e.text))}))}),F=t(12),Z=t(66),W={mainSkills:[{id:"skills-0",className:"skill-icon",icon:i.a.createElement(F.k,{size:50}),text:"Python"},{id:"skills-1",className:"skill-icon",icon:i.a.createElement(F.i,{size:50}),text:"Postgres"},{id:"skills-2",className:"skill-icon",icon:i.a.createElement(F.j,{size:50}),text:"Power BI"},{id:"skills-3",className:"skill-icon",icon:i.a.createElement(F.h,{size:50}),text:"Plotly"},{id:"skills-4",className:"skill-icon",icon:i.a.createElement(F.g,{size:50}),text:"Pandas"},{id:"skills-5",className:"skill-icon",icon:i.a.createElement(F.f,{size:50}),text:"Numpy"}],complementarySkills:[{id:"skills-5",className:"skill-icon",icon:i.a.createElement(Z.a,{size:50}),text:"MySQL"},{id:"skills-6",className:"skill-icon",icon:i.a.createElement(F.l,{size:50}),text:"Scikitlearn"},{id:"skills-7",className:"skill-icon",icon:i.a.createElement(F.n,{size:50}),text:"Tensorflow"},{id:"skills-8",className:"skill-icon",icon:i.a.createElement(F.e,{size:50}),text:"Excel"},{id:"skills-9",className:"skill-icon",icon:i.a.createElement(F.a,{size:50}),text:"AWS"},{id:"skills-12",className:"skill-icon",icon:i.a.createElement(F.c,{size:50}),text:"HTML 5"},{id:"skills-14",className:"skill-icon",icon:i.a.createElement(F.b,{size:50}),text:"Dash"},{id:"skills-15",className:"skill-icon",icon:i.a.createElement(F.m,{size:50}),text:"Tableau"}]},V=function(){return i.a.createElement("section",{id:"skills"},i.a.createElement("div",null,i.a.createElement("div",{className:"skills-div"},i.a.createElement("h1",{className:"main-skills-h1"},i.a.createElement("span",{className:"main-skills"},i.a.createElement("strong",null,"Main Skills & Tools"))),i.a.createElement(U.a,{effect:"bounce"},i.a.createElement("div",{className:"main-skills"},i.a.createElement(Q,{config:W.mainSkills}))),i.a.createElement("h1",{className:"complementary-skills-h1"},i.a.createElement("span",{className:"complementary-skills",style:{color:"white"}},i.a.createElement("strong",null,"Complementary Skills & Tools"))),i.a.createElement(U.a,{effect:"bounce"},i.a.createElement("div",{className:"complementary-skills"},i.a.createElement(Q,{config:W.complementarySkills}))))))},q=(t(96),[{id:"blog-8",title:"Telecom Churn Prediction with Deep Learning: A Full-Stack Data Science Project in Action",links:[{name:"article",url:"https://medium.com/@yogeshvar_m/telecom-churn-prediction-with-deep-learning-a-full-stack-data-science-project-in-action-10462ece26b4",icon:i.a.createElement(F.d,null)}],image:"https://miro.medium.com/v2/resize:fit:720/1*m6KeRnxROTabkaEAyxUJ2g.gif",description:"Leveraging Deep Learning, TensorFlow, Keras, Flask, AWS, and PowerBI to build an end-to-end churn prediction solution for the telecom industry",target:"_blank"},{id:"blog-7",title:"\u201cUnlocking Insights in Zomato Data: An Analysis using Regression, Classification, and Clustering!\u201d",links:[{name:"article",url:"https://medium.com/@yogeshvar_m/unlocking-insights-in-zomato-data-an-analysis-using-regression-classification-and-clustering-d68063d93fa",icon:i.a.createElement(F.d,null)}],image:"https://miro.medium.com/v2/resize:fit:828/format:webp/1*kvufQJioyffIYdwzbxKcEQ.png",description:"Showcasing how we used regression, classification, and clustering techniques to analyze Zomato data and unlock insights that can help improve the platform.",target:"_blank"},{id:"blog-6",title:"Data Analysis Made Easy with AdventureWorks Database and Power BI",links:[{name:"article",url:"https://medium.com/@yogeshvar_m/sale-analysis-e5a6090b568",icon:i.a.createElement(F.d,null)}],image:"https://miro.medium.com/v2/resize:fit:828/format:webp/1*nx0D-j2D0t0lyDi1yyqv1w.png",description:"Showcasing how we used the \u201cAdventure Works\u201d database and Power BI to analyze sales, customer, and product data and how these tools can help you achieve similar results in your own data analysis projects.",target:"_blank"},{id:"blog-5",title:"SQL-Basics",links:[{name:"article",url:"https://medium.com/@yogeshvar_m/sql-class-1-1ed12cfd109a",icon:i.a.createElement(F.d,null)}],image:"https://miro.medium.com/v2/resize:fit:828/format:webp/1*NXCwyuGZO66YCZCg_JUlYA.png",description:"It covers about basics of SQL and the reasons for using SQL. ",target:"_blank"},{id:"blog-4",title:"Python-Quick Basic!",links:[{name:"article",url:"https://medium.com/@yogeshvar_m/python-quick-basic-c22be6b77568",icon:i.a.createElement(F.d,null)},{name:"repo",url:"https://github.com/YogeshvarM/Medium/blob/main/Python_QuickRevise.ipynb",icon:i.a.createElement(p.c,null)}],image:"https://miro.medium.com/v2/resize:fit:828/format:webp/1*lmJTuCNphbrNher4uuZb5A.jpeg",description:"Its about revisiting the basics of the python programming language. ",target:"_blank"}]),J=function(){return i.a.createElement("div",{className:"wrapper"},q.map(function(e){return i.a.createElement(L,{item:e})}))};var H=function(){var e=Object(r.k)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e]),null},K={icons:[{id:"footer-0",url:"https://github.com/YogeshvarM",className:"social-icon",target:"_blank",icon:i.a.createElement(p.c,{size:50})},{id:"footer-1",url:"https://www.linkedin.com/in/yogeshvar-mugilvannan-70653a200/",className:"social-icon",target:"_blank",icon:i.a.createElement(T.a,{size:50})},{id:"footer-2",url:"https://medium.com/@yogeshvar_m",className:"social-icon",target:"_blank",icon:i.a.createElement(h.b,{size:50})}]},G=(t(59),function(){return i.a.createElement("div",{className:"social-icons"},K.icons.map(function(e){return i.a.createElement("a",{href:e.url,className:e.className,key:e.id,style:{color:"#f5f5f5"},target:e.target,rel:"noopener noreferrer"},e.icon)}))}),X=function(){return i.a.createElement(u.a,{fluid:!0,className:"footer"},i.a.createElement(y.a,null,i.a.createElement(v.a,{className:"footer-body"},i.a.createElement(G,null))))};t(97),t(98);"undefined"!==typeof Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio"}).REACT_APP_TRACKING_ID&&o.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio"}).REACT_APP_TRACKING_ID);var $=function(){return i.a.createElement(c.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(b,null),i.a.createElement(H,null),i.a.createElement(r.c,null,i.a.createElement(r.a,{path:"/portfolio",exact:!0,element:i.a.createElement(j,null)}),i.a.createElement(r.a,{path:"/projects",exact:!0,element:i.a.createElement(Y,null)}),i.a.createElement(r.a,{path:"/blogs",exact:!0,element:i.a.createElement(J,null)}),i.a.createElement(r.a,{path:"/skills",exact:!0,element:i.a.createElement(V,null)})),i.a.createElement(X,null)))};t(99);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement($,null)),document.getElementById("root"))},39:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){e.exports=t.p+"static/media/sklearn_genetic_opt.23273bc8.png"},57:function(e,a,t){},59:function(e,a,t){},71:function(e,a,t){e.exports=t(100)},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){e.exports=t.p+"static/media/graph_embeddings.fed0850a.png"},90:function(e,a,t){e.exports=t.p+"static/media/kafkaml.9c0f9867.png"},91:function(e,a,t){e.exports=t.p+"static/media/scikit_pipes.8ba027d9.png"},92:function(e,a,t){e.exports=t.p+"static/media/portfolio.4b632d51.png"},96:function(e,a,t){e.exports=t.p+"static/media/fastapi_sklearn.f7d742fc.png"},97:function(e,a,t){},99:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.66aaa658.chunk.js.map