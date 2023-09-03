import{o as t,c as n,a}from"./app.d80aa120.js";const s='{"title":"CountTo 数字动画组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"CountTo 属性","slug":"countto-属性"}],"relativePath":"components/count-to.md","lastUpdated":1693705962098}',e={},o=a('<h1 id="countto-数字动画组件"><a class="header-anchor" href="#countto-数字动画组件" aria-hidden="true">#</a> CountTo 数字动画组件</h1><p>基于 <code>vue-count-to</code> 改造</p><p>CountTo 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/CountTo" target="_blank" rel="noopener noreferrer">src/components/CountTo</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>更复杂点的例子，请<a href="https://element-plus-admin.cn/#/components/count-to" target="_blank" rel="noopener noreferrer">在线预览</a></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CountTo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/CountTo&#39;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountTo</span> <span class="token attr-name">:start-val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:end-val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>35225<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="countto-属性"><a class="header-anchor" href="#countto-属性" aria-hidden="true">#</a> CountTo 属性</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>startVal</td><td>初始值</td><td><code>number</code></td><td>-</td><td>0</td></tr><tr><td>endVal</td><td>最后展示的值</td><td><code>number</code></td><td>-</td><td>2021</td></tr><tr><td>duration</td><td>动画时间</td><td><code>number</code></td><td>-</td><td>3000</td></tr><tr><td>autoplay</td><td>是否自动播放</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>decimals</td><td>小位数</td><td><code>number</code></td><td>-</td><td>0</td></tr><tr><td>decimal</td><td>小位数分割符号</td><td><code>string</code></td><td>-</td><td>.</td></tr><tr><td>separator</td><td>分割符号</td><td><code>string</code></td><td>-</td><td>,</td></tr><tr><td>prefix</td><td>前缀</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>suffix</td><td>后缀</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>useEasing</td><td>过渡动画</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>easingFn</td><td>自定义动画效果</td><td><code>(t: number, b: number, c: number, d: number) =&gt; number</code></td><td>-</td><td>-</td></tr></tbody></table>',8);e.render=function(a,s,e,d,p,c){return t(),n("div",null,[o])};export default e;export{s as __pageData};
