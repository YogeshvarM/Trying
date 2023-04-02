import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Yogeshvar M </strong>
        </h1>,
    titles: [
        "Data Science Enthusiast",
        "Data Analytics Enthusiast",
        "Emerging Tech Enthusiast"
    ],
    about: {
        start: "I am a data analytics and data science enthusiast with a strong educational background in Big Data Analytics.",
        exit: "With experience in Python, SQL, Power BI, Machine Learning, and Deep Learning, I have a track record of successful internships and professional projects. I am dedicated to applying my expertise to deliver data-driven insights and solutions."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Data Science Intern",
            company: "Alstom",
            description: "Contributed to a Data Science project by designing data-driven dashboards and UI with Plotly, Dash, and Python, collaborating in a cross-functional team." +
                "Showcased strong teamwork and communication while partnering with MLOps, Machine Learning, Radio Engineers, and Data Engineering teams.",
            date: "Sep'2022-present",
            icon: <DiCodeigniter/>,
            tags: ["Python","Plotly","Dash","PostgreSQL","Minio", "HTML"]
        },
        {
            id: "work-2",
            title: "Data Science and Business Analytics Intern",
            company: "The Sparks Foundation ",
            description: "Predicted student performance using Supervised ML, estimating percentage of marks based on study hours." +
                "Conducted retail sales analysis using Tableau for data visualization and insights.",
            date: "2022",
            icon: <FaMobileAlt/>,
            tags: ["Data Science", "Data Analytics", "Tableau", "Machine Learning"]
        },
        {
            id: "work-1",
            title: "MTech",
            company: "VIT University,Vellore.India",
            description: "Studied Masters in Big Data Analytics which helped to get the basic foundation for Analytics and Data Science field",
            date: "2021-2023",
            icon: <GiCommercialAirplane/>,
            tags: ["Data Engineering","SQL","Python","Data Visualization","Big Data","Statistics","EDA"]
        },
        {
            id: "work-0",
            title: "B.E",
            company: "SRM Easwari Engineering College,Chennai.India",
            description: "Studied Engineering in Specialisation of Electronics and Instrumentation",
            date: "2016-2020",
            icon: <BsClipboardData/>,
            tags: []
        }
    ]
}


export default homeConfig