import{_ as s,c as n,o as a,a as e}from"./app.502d4221.js";const d=JSON.parse('{"title":"11 \u6708 18 \u65E5","description":"","frontmatter":{},"headers":[{"level":2,"title":"11 \u6708 18 \u65E5","slug":"_11-\u6708-18-\u65E5"},{"level":2,"title":"11 \u6708 14 \u65E5","slug":"_11-\u6708-14-\u65E5"},{"level":2,"title":"11 \u6708 4 \u65E5","slug":"_11-\u6708-4-\u65E5"},{"level":2,"title":"11 \u6708 1 \u65E5","slug":"_11-\u6708-1-\u65E5"}],"relativePath":"daily/2021-11.md","lastUpdated":1661058620000}'),l={name:"daily/2021-11.md"},p=e(`<h2 id="_11-\u6708-18-\u65E5" tabindex="-1">11 \u6708 18 \u65E5 <a class="header-anchor" href="#_11-\u6708-18-\u65E5" aria-hidden="true">#</a></h2><ul><li>301 \u534E\u4E3A javascript <ul><li><a href="https://developer.huawei.com/consumer/cn/blog/topic/03726175019000186" target="_blank" rel="noopener noreferrer">https://developer.huawei.com/consumer/cn/blog/topic/03726175019000186</a></li></ul></li></ul><h2 id="_11-\u6708-14-\u65E5" tabindex="-1">11 \u6708 14 \u65E5 <a class="header-anchor" href="#_11-\u6708-14-\u65E5" aria-hidden="true">#</a></h2><ul><li>300 AST \u62BD\u8C61\u8BED\u6CD5\u6811</li><li><a href="https://segmentfault.com/a/1190000016231512" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000016231512</a></li><li><a href="https://juejin.cn/post/6844904038501187597" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844904038501187597</a></li><li><a href="https://astexplorer.net/" target="_blank" rel="noopener noreferrer">https://astexplorer.net/</a></li></ul><h2 id="_11-\u6708-4-\u65E5" tabindex="-1">11 \u6708 4 \u65E5 <a class="header-anchor" href="#_11-\u6708-4-\u65E5" aria-hidden="true">#</a></h2><ul><li><p>299 vue2 web worker \u8C03\u7528</p><ul><li><a href="https://github.com/israelss/vue-worker" target="_blank" rel="noopener noreferrer">https://github.com/israelss/vue-worker</a></li><li><a href="https://www.cnblogs.com/axl234/p/9254755.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/axl234/p/9254755.html</a></li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  import VueWorker from &#39;vue-worker&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Vue.use(VueWorker)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.worker = this.$worker.create([</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        message: &#39;hello&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        func: function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;hel0000lo&#39;, e)</span></span>
<span class="line"><span style="color:#A6ACCD;">          for (let i = 0; i &lt; 100000; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          return &#39;hi\xA0yiye&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        message: &#39;world&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        func: function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">          for (let i = 0; i &lt; 100000; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          return &#39;sss world&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">mounted() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.worker.postMessage(&#39;world&#39;, [&#39;i am yiye&#39;]).then(function(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;post:&#39;, e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // for (let i = 0; i &lt; 100000; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   console.log(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="_11-\u6708-1-\u65E5" tabindex="-1">11 \u6708 1 \u65E5 <a class="header-anchor" href="#_11-\u6708-1-\u65E5" aria-hidden="true">#</a></h2><ul><li>298 <a href="https://github.com/oclif/oclif" target="_blank" rel="noopener noreferrer">https://github.com/oclif/oclif</a></li></ul>`,8),o=[p];function r(t,c,i,A,C,h){return a(),n("div",null,o)}var _=s(l,[["render",r]]);export{d as __pageData,_ as default};
