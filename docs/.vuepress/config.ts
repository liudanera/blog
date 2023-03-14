import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {searchProPlugin} from "vuepress-plugin-search-pro";

export default defineUserConfig({
    lang: "zh-CN",
    title: "刘蛋儿",
    theme,
    shouldPrefetch: false,
    plugins: [
        // 客户端搜索插件，开销较大
        searchProPlugin({
            // 索引全部内容
            indexContent: true,
            // 为分类和标签添加索引
            customFields: [
                {
                    getter: (page) => page.frontmatter.category as any,
                    formatter: "分类：$content",
                },
                {
                    getter: (page) => page.frontmatter.tag as any,
                    formatter: "标签：$content",
                }
            ],
        }),
    ],
});
