import React from "react";

import {
    AiFillCode,
    AiFillHome,
    AiOutlineGithub
} from "react-icons/ai";

import {BsMedium} from "react-icons/bs";
import {FcDocument} from "react-icons/fc";


const menuConfig = {

    sidebarData: [
        {
            id: "menu-0",
            title: "Home",
            path: "/portfolio",
            icon: <AiFillHome size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-1",
            title: "Projects",
            path: "/projects",
            icon: <AiOutlineGithub size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-2",
            title: "Blogs",
            path: "/blogs",
            icon: <BsMedium size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-3",
            title: "Skills",
            path: "/skills",
            icon: <AiFillCode size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-4",
            title: "Resume & Certification",
            path: "https://drive.google.com/drive/folders/1EsU5iTvcT73p1Lxh62rCmeOU2IOVNHuO?usp=sharing",
            icon: <FcDocument size={35}/>,
            className: "flex-end",
            isLink:true 

        }
    ]

}

export default menuConfig
