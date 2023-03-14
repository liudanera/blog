export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-fe8c96de","v-16f13924"]}},"star":{"/":{"path":"/star/","keys":["v-fe8c96de"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-16f13924","v-fe8c96de"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

