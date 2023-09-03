import{o as n,c as s,a}from"./app.d80aa120.js";const t='{"title":"JsonEditor JSON编辑器组件（2.2.0+）","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"JsonEditor 属性","slug":"jsoneditor-属性"},{"level":2,"title":"Editor 事件","slug":"editor-事件"}],"relativePath":"components/json-editor.md","lastUpdated":1693705962098}',p={},o=a('<h1 id="jsoneditor-json编辑器组件（2-2-0-）"><a class="header-anchor" href="#jsoneditor-json编辑器组件（2-2-0-）" aria-hidden="true">#</a> JsonEditor JSON编辑器组件（2.2.0+）</h1><p>基于 <a href="https://leezng.github.io/vue-json-pretty/" target="_blank" rel="noopener noreferrer">vue-json-pretty</a> 封装。</p><p>可自行阅读 <a href="https://github.com/leezng/vue-json-pretty" target="_blank" rel="noopener noreferrer">vue-json-pretty文档</a></p><p>JsonEditor 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/JsonEditor" target="_blank" rel="noopener noreferrer">src/components/JsonEditor</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/ContentWrap&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> JsonEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/JsonEditor&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useI18n&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> defaultData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token string">&#39;标题&#39;</span><span class="token punctuation">,</span>\n  content<span class="token operator">:</span> <span class="token string">&#39;内容&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">watch</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> defaultData<span class="token punctuation">.</span>value<span class="token punctuation">,</span>\n  <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    deep<span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  defaultData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;异步标题&#39;</span><span class="token punctuation">,</span>\n    content<span class="token operator">:</span> <span class="token string">&#39;异步内容&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentWrap</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>t(<span class="token punctuation">&#39;</span>richText.jsonEditor<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>t(<span class="token punctuation">&#39;</span>richText.jsonEditorDes<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JsonEditor</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentWrap</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="jsoneditor-属性"><a class="header-anchor" href="#jsoneditor-属性" aria-hidden="true">#</a> JsonEditor 属性</h2><p>可查看 <a href="https://github.com/leezng/vue-json-pretty" target="_blank" rel="noopener noreferrer">vue-json-pretty文档</a></p><h2 id="editor-事件"><a class="header-anchor" href="#editor-事件" aria-hidden="true">#</a> Editor 事件</h2><p>可查看 <a href="https://github.com/leezng/vue-json-pretty" target="_blank" rel="noopener noreferrer">vue-json-pretty文档</a></p>',10);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
