export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-0f1a1195","v-16f13924"]}},"star":{"/":{"path":"/star/","keys":["v-0f1a1195","v-16f13924"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-0f1a1195","v-16f13924"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

