<template><div><blockquote>
<p>本文转自：<a href="https://blog.csdn.net/bird_tp/article/details/105587582" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/bird_tp/article/details/105587582<ExternalLinkIcon/></a><br>
看本博客有不清晰的地方，可以查看mybatis plus的官方文档：<a href="https://baomidou.com/" target="_blank" rel="noopener noreferrer">https://baomidou.com/<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="一、querywrapper是什么" tabindex="-1"><a class="header-anchor" href="#一、querywrapper是什么" aria-hidden="true">#</a> 一、queryWrapper是什么</h2>
<p>queryWrapper是mybatis plus中实现查询的对象封装操作类，他的层级关系如下</p>
<figure><img src="/img/mybatis-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在上面的图片中<br>
<strong>Wrapper</strong> ：条件构造抽象类，最顶端父类，抽象类中提供4个方法西面贴源码展示<br>
<strong>AbstractWrapper</strong> ： 用于查询条件封装，生成<code v-pre>sql</code>的<code v-pre>where</code>条件<br>
<strong>AbstractLambdaWrapper</strong> ： <code v-pre>Lambda</code>语法使用<code v-pre>Wrapper</code>统一处理解析lambda获取 column。<br>
<strong>LambdaQueryWrapper</strong> ：看名称也能明白就是用于<code v-pre>Lambda</code>语法使用的查询Wrapper<br>
<strong>LambdaUpdateWrapper</strong> ：<code v-pre>Lambda</code>更新封装<code v-pre>Wrapper</code><br>
<strong>QueryWrapper</strong> ：<code v-pre>Entity</code>对象封装操作类，不是用<code v-pre>Lambda</code>语法<br>
<strong>UpdateWrapper</strong> ：<code v-pre>Update</code>条件封装，用于<code v-pre>Entity</code>对象更新操作<br></p>
<h2 id="二、使用demo" tabindex="-1"><a class="header-anchor" href="#二、使用demo" aria-hidden="true">#</a> 二、使用demo</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PbListBlack</span><span class="token punctuation">></span></span> sectionQueryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sectionQueryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"OPTYPE"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sectionQueryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"BLTYPE"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PbListBlack</span><span class="token punctuation">></span></span> pbListBlacks <span class="token operator">=</span> iPbListBlackMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>sectionQueryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码的意思就是，首先新建一个QueryWrapper对象，类型为PbListBlack对象，也就是你需要查询的实体数据</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>sectionQueryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"OPTYPE"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sectionQueryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"BLTYPE"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这两句的意思是PbListBlack对象对应的数据库表中的OPTYPE，BLTYPE字段值要为1，然后调用iPbListBlackMapper.selectList方法，入参就为前面新建好的查询对象封装类</p>
<p><strong>下面贴上查询实体的代码</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">"PB_LIST_BLACK"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"PB_LIST_BLACK对象"</span><span class="token punctuation">,</span> description <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PbListBlack</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PbListBlack</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"ID"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"USERID"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userId<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"SPGATE"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> spgate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"SPNUMBER"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> spnumber<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"PHONE"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> phone<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"OPTYPE"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> optype<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"OPTTIME"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Timestamp</span> optTime<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"CORPCODE"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> corpCode<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"SVRTYPE"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> svrType<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"MSG"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">" "</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"黑名单类型。1：短信；2：彩信"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">"BLTYPE"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> blType<span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下面是iPbListBlackMapper的代码</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IPbListBlackMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PbListBlack</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仅仅只需要基层<code v-pre>BaseMapper</code>接口即可，这样mybatis plus底层封装的方法即可实现帮你查询你设置查询条件查询到的数据<br>
当你的<code v-pre>Mapper</code>继承<code v-pre>BaseMapper</code>接口后，无需编写<code v-pre>mapper.xml</code>文件，即可获得CRUD功能</p>
<h2 id="三、querywrapper的方法" tabindex="-1"><a class="header-anchor" href="#三、querywrapper的方法" aria-hidden="true">#</a> 三、QueryWrapper的方法</h2>
<figure><img src="/img/mybatis-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> 四、总结</h2>
<p>上面的博客内容虽然简单，也只展示了一个查询的功能。在你实际使用的时候，可以按照
条件构造器上面包含的的方法，设置你查询数据的条件，调用BaseMapper里相应的方法即可</p>
</div></template>


