<template><div><blockquote>
<p>本文收集一些在用的或者看起来好用的Docker应用</p>
</blockquote>
<h2 id="一、安装环境" tabindex="-1"><a class="header-anchor" href="#一、安装环境" aria-hidden="true">#</a> 一、安装环境</h2>
<ul>
<li>系统 <code v-pre>CentOS 7</code> 已安装 <code v-pre>bbrplus</code> <a href="https://blog.ylx.me/archives/783.html" target="_blank" rel="noopener noreferrer">内核安装脚本<ExternalLinkIcon/></a></li>
<li>安装 <code v-pre>docker</code> 和 <code v-pre>docker-compose</code> <a href="https://www.runoob.com/docker/centos-docker-install.html" target="_blank" rel="noopener noreferrer">安装教程<ExternalLinkIcon/></a></li>
</ul>
<h2 id="二、应用汇总" tabindex="-1"><a class="header-anchor" href="#二、应用汇总" aria-hidden="true">#</a> 二、应用汇总</h2>
<h3 id="_1-npm汉化版-nginx代理管理器" tabindex="-1"><a class="header-anchor" href="#_1-npm汉化版-nginx代理管理器" aria-hidden="true">#</a> 1. NPM汉化版（Nginx代理管理器）</h3>
<blockquote>
<p><a href="https://hub.docker.com/r/chishin/nginx-proxy-manager-zh" target="_blank" rel="noopener noreferrer">镜像地址<ExternalLinkIcon/></a></p>
</blockquote>
<p><code v-pre>docker-compose.yml</code></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3.7'</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> chishin/nginx<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>manager<span class="token punctuation">-</span>zh<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>manager<span class="token punctuation">-</span>zh
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'80:80'</span>
      <span class="token punctuation">-</span> <span class="token string">'81:81'</span>
      <span class="token punctuation">-</span> <span class="token string">'443:443'</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/data
      <span class="token punctuation">-</span> ./letsencrypt<span class="token punctuation">:</span>/etc/letsencrypt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-portainer-ce汉化版-docker管理面板" tabindex="-1"><a class="header-anchor" href="#_2-portainer-ce汉化版-docker管理面板" aria-hidden="true">#</a> 2. portainer-ce汉化版（Docker管理面板）</h3>
<blockquote>
<p><a href="https://hub.docker.com/r/6053537/portainer-ce" target="_blank" rel="noopener noreferrer">镜像地址<ExternalLinkIcon/></a></p>
</blockquote>
<p><code v-pre>docker-compose.yml</code></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3.7'</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> 6053537/portainer<span class="token punctuation">-</span>ce
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> portainer<span class="token punctuation">-</span>ce
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'9000:9000'</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-gogs-自建git服务" tabindex="-1"><a class="header-anchor" href="#_3-gogs-自建git服务" aria-hidden="true">#</a> 3. Gogs（自建git服务）</h3>
<blockquote>
<p><a href="https://hub.docker.com/r/gogs/gogs" target="_blank" rel="noopener noreferrer">镜像地址<ExternalLinkIcon/></a></p>
</blockquote>
<p><code v-pre>docker-compose.yml</code></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3.7'</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">gogs</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> gogs/gogs
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gogs
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'3000:3000'</span>
      <span class="token punctuation">-</span> <span class="token string">'2023:22'</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-x-ui-xray面板" tabindex="-1"><a class="header-anchor" href="#_4-x-ui-xray面板" aria-hidden="true">#</a> 4. x-ui（xray面板）</h3>
<blockquote>
<p><a href="https://hub.docker.com/r/stilleshan/x-ui" target="_blank" rel="noopener noreferrer">镜像地址<ExternalLinkIcon/></a></p>
</blockquote>
<p><code v-pre>docker-compose.yml</code></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3.7'</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">xui</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> stilleshan/x<span class="token punctuation">-</span>ui
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> x<span class="token punctuation">-</span>ui
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/x<span class="token punctuation">-</span>ui.db<span class="token punctuation">:</span>/etc/x<span class="token punctuation">-</span>ui/x<span class="token punctuation">-</span>ui.db
      <span class="token punctuation">-</span> ./ssl<span class="token punctuation">:</span>/ssl
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


