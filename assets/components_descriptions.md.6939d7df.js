import{o as n,c as t,a as s}from"./app.d80aa120.js";const a='{"title":"Descriptions 描述组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"Descriptions 属性","slug":"descriptions-属性"},{"level":3,"title":"Schema","slug":"schema"}],"relativePath":"components/descriptions.md","lastUpdated":1693705962098}',e={},p=s('<h1 id="descriptions-描述组件"><a class="header-anchor" href="#descriptions-描述组件" aria-hidden="true">#</a> Descriptions 描述组件</h1><p>对 <code>element-plus</code> 的 <code>Descriptions</code> 组件进行封装。</p><p>Descriptions 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Descriptions" target="_blank" rel="noopener noreferrer">src/components/Descriptions</a> 内</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>推荐使用 <code>tsx</code> 来使用 <code>Descriptions</code> 组件</p></div><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>更复杂点的例子，请<a href="https://element-plus-admin.cn/#/components/descriptions" target="_blank" rel="noopener noreferrer">在线预览</a></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Descriptions<span class="token punctuation">,</span> DescriptionsSchema <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Descriptions&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  username<span class="token operator">:</span> <span class="token string">&#39;chenkl&#39;</span><span class="token punctuation">,</span>\n  nickName<span class="token operator">:</span> <span class="token string">&#39;梦似花落。&#39;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>\n  phone<span class="token operator">:</span> <span class="token string">&#39;13655971xxxx&#39;</span><span class="token punctuation">,</span>\n  email<span class="token operator">:</span> <span class="token string">&#39;502431556@qq.com&#39;</span><span class="token punctuation">,</span>\n  addr<span class="token operator">:</span> <span class="token string">&#39;这是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的地址&#39;</span><span class="token punctuation">,</span>\n  sex<span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>\n  certy<span class="token operator">:</span> <span class="token string">&#39;3505831994xxxxxxxx&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> schema <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>DescriptionsSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;username&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;nickName&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;nickName&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;phone&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;phone&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;email&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;email&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;addr&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;addr&#39;</span><span class="token punctuation">,</span>\n    span<span class="token operator">:</span> <span class="token number">24</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Descriptions</span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>descriptions<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>schema<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="descriptions-属性"><a class="header-anchor" href="#descriptions-属性" aria-hidden="true">#</a> Descriptions 属性</h2><p>除以下参数外，还支持 <code>element-plus</code> 的 <code>Descriptions</code> 所有属性，<a href="https://element-plus.org/zh-CN/component/descriptions.html#descriptions-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">详见</a></p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>message</td><td>提示</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>collapse</td><td>是否显示展开按钮</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>schema</td><td>布局结构数据，<a href="#Schema">详见</a></td><td><code>DescriptionsSchema[]</code></td><td>-</td><td>[]</td></tr><tr><td>data</td><td>展示的数据</td><td><code>Recordable</code></td><td>-</td><td>{}</td></tr></tbody></table><h3 id="schema"><a class="header-anchor" href="#schema" aria-hidden="true">#</a> Schema<span id="Schema"></span></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>span</td><td>栅格占比</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td>field</td><td>字段名，唯一值，需要与 data 中的属性名对应</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>label</td><td>列表标题</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>width</td><td>列表宽度</td><td><code>string</code>/<code>number</code></td><td>-</td><td>-</td></tr><tr><td>minWidth</td><td>列表最小宽度</td><td><code>string</code>/<code>number</code></td><td>-</td><td>-</td></tr><tr><td>align</td><td>内容对齐方式</td><td><code>string</code></td><td>left/center/right</td><td>left</td></tr><tr><td>labelAlign</td><td>标题对齐方式</td><td><code>string</code></td><td>left/center/right</td><td>left</td></tr><tr><td>className</td><td>自定义内容标签类名</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>labelClassName</td><td>自定义标题标签类名</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>slots</td><td>插槽对象</td><td><code>object</code></td><td>-</td><td>-</td></tr></tbody></table>',12);e.render=function(s,a,e,o,c,d){return n(),t("div",null,[p])};export default e;export{a as __pageData};
