export const categoryMap = {"category":{"/":{"path":"/category/","map":{"工具":{"path":"/category/%E5%B7%A5%E5%85%B7/","keys":["v-16f13924"]},"日记":{"path":"/category/%E6%97%A5%E8%AE%B0/","keys":["v-0f1a1195"]}}}},"tag":{"/":{"path":"/tag/","map":{"随机图片api":{"path":"/tag/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api/","keys":["v-16f13924"]},"日记":{"path":"/tag/%E6%97%A5%E8%AE%B0/","keys":["v-0f1a1195"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


