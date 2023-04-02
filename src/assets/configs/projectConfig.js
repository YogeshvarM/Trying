import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import scikitPipes from "../images/scikit_pipes.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Telecom Churn Prediction ",
        links: [
            {
                name: "repo",
                url: "https://github.com/YogeshvarM/Telecom-Churn-Prediction",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/YogeshvarM/Telecom-Churn-Prediction/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/YogeshvarM/Telecom-Churn-Prediction/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://medium.com/@yogeshvar_m/telecom-churn-prediction-with-deep-learning-a-full-stack-data-science-project-in-action-10462ece26b4",
                icon: <ImBook/>,
            }
        ],
        image:"https://www.displayr.com/wp-content/uploads/2017/07/customer-churn-edit.jpeg",
        Point1:"Developed an Artificial Neural Network (ANN) using Keras for telecom customer churn prediction, deploying via Flask RESTful API on AWS Beanstalk.",
        Point2:"Utilized AWS RDS for preprocessing raw input data, connecting churn prediction API and database to Power BI for analytics.",
        Point3:"Developed and implemented a Power BI dashboard to visualize insights for customer success teams, integrating AWS RDS data and monitoring model performance.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "Zomato Dataset",
        links: [
            {
                name: "repo",
                url: "https://github.com/YogeshvarM/Zomato-Data-Analysis",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/YogeshvarM/Zomato-Data-Analysis/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/YogeshvarM/Zomato-Data-Analysis/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://medium.com/@yogeshvar_m/unlocking-insights-in-zomato-data-an-analysis-using-regression-classification-and-clustering-d68063d93fa",
                icon: <ImBook/>,
            }
        ],
        image: "https://miro.medium.com/max/1200/1*FiwobLBqdIzTMeACOWJjLw.jpeg",
        Point1: "Applied regression for rating predictions, assessing models with MAE, MSE, and R-squared.",
        Point2:"Used classification algorithms for two-rating classes, comparing performance using accuracy and F1-score.",
        Point3:"Implemented clustering techniques and created an interactive dashboard for Zomato insights.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Sale Analysis",
        links: [
            {
                name: "repo",
                url: "https://github.com/YogeshvarM/Sales-Analysis",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/YogeshvarM/Sales-Analysis/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/YogeshvarM/Sales-Analysis/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "docs",
                url: "https://medium.com/@yogeshvar_m/sale-analysis-e5a6090b568",
                icon: <ImBook/>,
            }
        ],
        image:"https://www.finereport.com/en/wp-content/uploads/2020/06/2020062201I.png",
        Point1:"Developed an interactive Power BI dashboard using MySQL to analyze sales, customer, and product data, with filters for salesperson and a budget comparison feature.",
        Point2:"Designed visually engaging charts and graphs to present key insights in sales analysis, customer details, and product details, improving data visibility and user engagement.",
        Point3:"•Streamlined analysis process and enabled better decision making by creating a precise system for analyzing internet sales data.\n",
        target: "_blank"
    },
    
]

export default projectConfig