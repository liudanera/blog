import {navbar, sidebar} from "vuepress-theme-hope";

export const bar = [
    "/",
    "/notes/日记/日记",
    {
        text: "学习笔记",
        icon: "note",
        prefix: "/notes/",
        children: [
            {
                text: "教程",
                icon: "read",
                prefix: "教程/",
                children: [

                ]
            },
            {
                text: "工具",
                icon: "tool",
                prefix: "工具/",
                children: [
                    "随机图片api接口",
                ]
            }
        ],
    },
    {
        text: "主题文档",
        icon: "link",
        link: "https://vuepress-theme-hope.github.io/v2/zh/",
    },
]

export const myNavbar = navbar(bar);

export const mySidebar = sidebar(bar);
