define("discourse/plugins/spoiler-alert/initializers/spoiler-alert",["exports","discourse/lib/plugin-api","discourse/lib/to-markdown","discourse/plugins/spoiler-alert/lib/apply-spoiler"],(function(e,i,t,r){"use strict"
function l(e){e.querySelectorAll(".spoiler").forEach((e=>{e.classList.remove("spoiler"),e.classList.add("spoiled"),(0,r.default)(e)}))}function s(e){e.decorateCookedElement(l,{id:"spoiler-alert"}),e.addComposerToolbarPopupMenuOption({icon:"wand-magic",label:"spoiler.title",action:e=>{e.applySurround("[spoiler]","[/spoiler]","spoiler_text",{multiline:!1,useBlockMode:!0})}}),(0,t.addTagDecorateCallback)((function(){const{attributes:e}=this.element;/\bspoiled\b/.test(e.class)&&(this.prefix="[spoiler]",this.suffix="[/spoiler]")})),(0,t.addBlockDecorateCallback)((function(e){const{name:i,attributes:t}=this.element
if("div"===i&&/\bspoiled\b/.test(t.class))return this.prefix="[spoiler]\n",this.suffix="\n[/spoiler]",e.trim()}))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initializeSpoiler=s
e.default={name:"spoiler-alert",initialize(e){e.lookup("service:site-settings").spoiler_enabled&&(0,i.withPluginApi)("1.15.0",s)}}})),define("discourse/plugins/spoiler-alert/lib/apply-spoiler",["exports","discourse-i18n"],(function(e,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){l(e),e.addEventListener("click",(i=>{s(i,e)})),e.addEventListener("keydown",(i=>{"Enter"===i.key&&s(i,e)}))}
const t=["a","area","audio","button","details","embed","iframe","img.animated","input","map","object","option","portal","select","textarea","track","video",".lightbox"].join(", ")
function r(e,i){Object.entries(i).forEach((i=>{let[t,r]=i
null===r?e.removeAttribute(t):e.setAttribute(t,r)}))}function l(e){r(e,{role:"button",tabindex:"0","data-spoiler-state":"blurred","aria-expanded":!1,"aria-label":i.default.t("spoiler.label.show"),"aria-live":"polite"}),e.classList.add("spoiler-blurred"),Array.from(e.children).forEach((e=>{e.setAttribute("aria-hidden",!0)}))}function s(e,i){"blurred"===i.getAttribute("data-spoiler-state")?(function(e){r(e,{"data-spoiler-state":"revealed","aria-expanded":!0,"aria-label":null,role:null}),e.classList.remove("spoiler-blurred"),Array.from(e.children).forEach((e=>{e.removeAttribute("aria-hidden")}))}(i),e.preventDefault()):function(e){return e.defaultPrevented||e.target.closest(t)}(e)||window.getSelection()+""!=""||l(i)}})),define("discourse/plugins/spoiler-alert/lib/discourse-markdown/spoiler-alert",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.allowList(["span.spoiler","div.spoiler"]),e.markdownIt?function(e){e.registerOptions(((e,i)=>{e.features["spoiler-alert"]=!!i.spoiler_enabled})),e.registerPlugin((e=>{e.inline.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"span.spoiler"}),e.block.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"div.spoiler"})}))}(e):e.addPreProcessor(r)}
const i=/\n|<img|!\[[^\]]*\][(\[]/
function t(e,t){const r=i.test(t)?"div":"span"
return`<${r} class='spoiler'>${t}</${r}>`}function r(e){let i
e||=""
do{i=e,e=e.replace(/\[spoiler\]((?:(?!\[spoiler\]|\[\/spoiler\])[\S\s])*)\[\/spoiler\]/gi,t)}while(e!==i)
return e}}))

//# sourceMappingURL=spoiler-alert-53d8f95367971258db5241dcbee7f3033d4907e6210b0b8afc3c336c6c313924.map
//!

;
