import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,
    SiPandas,
    SiTensorflow,
    SiPlotly,
    SiDash,
    SiNumpy,
    SiTableau,
    SiAmazonaws,
    SiElasticstack,
    SiScikitlearn,
    SiMicrosoftexcel,

} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "Postgres"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiPlotly size={50}/>,
            text: "Plotly"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiPandas size={50}/>,
            text: "Pandas"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiNumpy size={50}/>,
            text: "Numpy"
        },
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikitlearn"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiTensorflow size={50}/>,
            text: "Tensorflow"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiMicrosoftexcel size={50}/>,
            text: "Excel"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiAmazonaws size={50}/>,
            text: "AWS"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiDash size={50}/>,
            text: "Dash"
        }
        ,
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        }
    ]
}

export default skillsConfig
