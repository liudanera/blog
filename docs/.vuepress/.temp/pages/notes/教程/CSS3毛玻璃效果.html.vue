<template><div><h2 id="backdrop-filter与filter的区别" tabindex="-1"><a class="header-anchor" href="#backdrop-filter与filter的区别" aria-hidden="true">#</a> backdrop-filter与filter的区别</h2>
<blockquote>
<p>filter：模糊内容<br>
backdrop-filter:透过该层的底部元素模糊化<br>
这两个属性的语法是一样的</p>
</blockquote>
<p><strong>下面是使用案例</strong><br></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">backdrop-filter</span><span class="token punctuation">:</span><span class="token function">saturate</span><span class="token punctuation">(</span>150%<span class="token punctuation">)</span> <span class="token function">contrast</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span> <span class="token function">blur</span><span class="token punctuation">(</span>8px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">background-color</span><span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>saturate(150%)意为使…饱和，类似ps饱和度效果，小于100%变暗，大于100%变亮<br>
contrast(50%)意为对比，类似ps对比度，100%为原图，0%为全灰色图像</p>
</div></template>


