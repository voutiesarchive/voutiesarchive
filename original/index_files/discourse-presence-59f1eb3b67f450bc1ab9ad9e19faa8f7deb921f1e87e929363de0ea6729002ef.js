define("discourse/plugins/discourse-presence/discourse/components/composer-presence-display",["exports","@ember/component","@ember/object/computed","@ember/service","@ember-decorators/component","@ember-decorators/object","discourse-common/utils/decorators","@ember/template-factory"],(function(e,s,t,n,i,r,o,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const p=(0,l.createTemplateFactory)({id:"fKramLOc",block:'[[[41,[30,0,["shouldDisplay"]],[[[1,"  "],[10,0],[14,0,"presence-users"],[12],[1,"\\n    "],[10,0],[14,0,"presence-avatars"],[12],[1,"\\n"],[42,[28,[37,2],[[28,[37,2],[[30,0,["presenceUsers"]]],null]],null],null,[[[1,"        "],[1,[28,[35,3],[[30,1]],[["imageSize"],["small"]]]],[1,"\\n"]],[1]],null],[1,"    "],[13],[1,"\\n    "],[10,1],[14,0,"presence-text"],[12],[1,"\\n      "],[10,1],[14,0,"description"],[12],[41,[30,0,["isReply"]],[[[1,[28,[35,4],["presence.replying"],[["count"],[[30,0,["presenceUsers","length"]]]]]]],[]],[[[1,[28,[35,4],["presence.editing"],[["count"],[[30,0,["presenceUsers","length"]]]]]]],[]]],[13],[1,"\\n      "],[10,1],[14,0,"wave"],[12],[1,"\\n        "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n        "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n        "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],["user"],false,["if","each","-track-array","avatar","i18n"]]',moduleName:"discourse/plugins/discourse-presence/discourse/components/composer-presence-display.hbs",isStrictMode:!1}),a=dt7948.c(class extends s.default{static#e=(()=>dt7948.g(this.prototype,"presence",[n.service]))()
#s=(()=>{dt7948.i(this,"presence")})()
static#t=(()=>dt7948.g(this.prototype,"composerPresenceManager",[n.service]))()
#n=(()=>{dt7948.i(this,"composerPresenceManager")})()
static#i=(()=>dt7948.g(this.prototype,"isReply",[(0,t.equal)("state","reply")]))()
#r=(()=>{dt7948.i(this,"isReply")})()
static#o=(()=>dt7948.g(this.prototype,"isEdit",[(0,t.equal)("state","edit")]))()
#l=(()=>{dt7948.i(this,"isEdit")})()
static#p=(()=>dt7948.g(this.prototype,"isWhisper",[(0,t.equal)("state","whisper")]))()
#a=(()=>{dt7948.i(this,"isWhisper")})()
static#c=(()=>dt7948.g(this.prototype,"replyingUsers",[(0,t.union)("replyChannel.users","whisperChannel.users")]))()
#d=(()=>{dt7948.i(this,"replyingUsers")})()
static#h=(()=>dt7948.g(this.prototype,"editingUsers",[(0,t.readOnly)("editChannel.users")]))()
#u=(()=>{dt7948.i(this,"editingUsers")})()
static#m=(()=>dt7948.g(this.prototype,"shouldDisplay",[(0,t.gt)("presenceUsers.length",0)]))()
#y=(()=>{dt7948.i(this,"shouldDisplay")})()
state(e,s,t,n){if(n)return s?"edit":t?"whisper":e?"reply":void 0}static#_=(()=>dt7948.n(this.prototype,"state",[(0,o.default)("model.replyingToTopic","model.editingPost","model.whisper","model.composerOpened")]))()
replyChannelName(e,s,t){if(e&&(s||t))return`/discourse-presence/reply/${e}`}static#f=(()=>dt7948.n(this.prototype,"replyChannelName",[(0,o.default)("model.topic.id","isReply","isWhisper")]))()
whisperChannelName(e,s,t){if(e&&this.currentUser.whisperer&&(s||t))return`/discourse-presence/whisper/${e}`}static#C=(()=>dt7948.n(this.prototype,"whisperChannelName",[(0,o.default)("model.topic.id","isReply","isWhisper")]))()
editChannelName(e,s){if(e)return`/discourse-presence/edit/${s}`}static#b=(()=>dt7948.n(this.prototype,"editChannelName",[(0,o.default)("isEdit","model.post.id")]))()
_setupChannel(e,s){this[e]?.name!==s&&(this[e]?.unsubscribe(),s?(this.set(e,this.presence.getChannel(s)),this[e].subscribe()):this[e]&&this.set(e,null))}_setupChannels(){this._setupChannel("replyChannel",this.replyChannelName),this._setupChannel("whisperChannel",this.whisperChannelName),this._setupChannel("editChannel",this.editChannelName)}static#g=(()=>dt7948.n(this.prototype,"_setupChannels",[(0,r.observes)("replyChannelName","whisperChannelName","editChannelName")]))()
_cleanupChannels(){this._setupChannel("replyChannel",null),this._setupChannel("whisperChannel",null),this._setupChannel("editChannel",null)}presenceUsers(e,s,t){const n=e?s:t
return n?.filter((e=>e.id!==this.currentUser.id))?.slice(0,this.siteSettings.presence_max_users_shown)}static#v=(()=>dt7948.n(this.prototype,"presenceUsers",[(0,o.default)("isReply","replyingUsers.[]","editingUsers.[]")]))()
subscribe(){this._setupChannels()}static#w=(()=>dt7948.n(this.prototype,"subscribe",[(0,r.on)("didInsertElement")]))()
_contentChanged(){if(""===this.model.reply)return
const e="edit"===this.state?this.model?.post:this.model?.topic
this.composerPresenceManager.notifyState(this.state,e?.id)}static#U=(()=>dt7948.n(this.prototype,"_contentChanged",[(0,r.observes)("model.reply","state","model.post.id","model.topic.id")]))()
closeComposer(){this._cleanupChannels(),this.composerPresenceManager.leave()}static#N=(()=>dt7948.n(this.prototype,"closeComposer",[(0,r.on)("willDestroyElement")]))()},[(0,i.tagName)("")])
e.default=(0,s.setComponentTemplate)(p,a)})),define("discourse/plugins/discourse-presence/discourse/components/topic-presence-display",["exports","@ember/component","@ember/object/computed","@ember/service","@ember-decorators/object","discourse-common/utils/decorators","@ember/template-factory"],(function(e,s,t,n,i,r,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,o.createTemplateFactory)({id:"4V683/rb",block:'[[[41,[30,0,["shouldDisplay"]],[[[1,"  "],[10,0],[14,0,"presence-users"],[12],[1,"\\n    "],[10,0],[14,0,"presence-avatars"],[12],[1,"\\n"],[42,[28,[37,2],[[28,[37,2],[[30,0,["users"]]],null]],null],null,[[[1,"        "],[8,[39,3],null,[["@user"],[[30,1]]],[["default"],[[[[1,"\\n          "],[1,[28,[35,4],[[30,1]],[["imageSize"],["small"]]]],[1,"\\n        "]],[]]]]],[1,"\\n"]],[1]],null],[1,"    "],[13],[1,"\\n    "],[10,1],[14,0,"presence-text"],[12],[1,"\\n      "],[10,1],[14,0,"description"],[12],[1,"\\n        "],[1,[28,[35,5],["presence.replying_to_topic"],[["count"],[[30,0,["users","length"]]]]]],[1,"\\n      "],[13],[1,"\\n      "],[10,1],[14,0,"wave"],[12],[1,"\\n        "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n        "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n        "],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],["user"],false,["if","each","-track-array","user-link","avatar","i18n"]]',moduleName:"discourse/plugins/discourse-presence/discourse/components/topic-presence-display.hbs",isStrictMode:!1})
class p extends s.default{static#e=(()=>dt7948.g(this.prototype,"presence",[n.service]))()
#s=(()=>{dt7948.i(this,"presence")})()
topic=null
replyChannel=null
whisperChannel=null
static#t=(()=>dt7948.g(this.prototype,"users",[(0,t.union)("replyUsers","whisperUsers")]))()
#M=(()=>{dt7948.i(this,"users")})()
static#i=(()=>dt7948.g(this.prototype,"shouldDisplay",[(0,t.gt)("users.length",0)]))()
#y=(()=>{dt7948.i(this,"shouldDisplay")})()
replyUsers(e){return e?.filter((e=>e.id!==this.currentUser.id))}static#o=(()=>dt7948.n(this.prototype,"replyUsers",[(0,r.default)("replyChannel.users.[]")]))()
whisperUsers(e){return e?.filter((e=>e.id!==this.currentUser.id))}static#p=(()=>dt7948.n(this.prototype,"whisperUsers",[(0,r.default)("whisperChannel.users.[]")]))()
replyChannelName(e){return`/discourse-presence/reply/${e}`}static#c=(()=>dt7948.n(this.prototype,"replyChannelName",[(0,r.default)("topic.id")]))()
whisperChannelName(e){return`/discourse-presence/whisper/${e}`}static#h=(()=>dt7948.n(this.prototype,"whisperChannelName",[(0,r.default)("topic.id")]))()
didReceiveAttrs(){super.didReceiveAttrs(...arguments),this.replyChannel?.name!==this.replyChannelName&&(this.replyChannel?.unsubscribe(),this.set("replyChannel",this.presence.getChannel(this.replyChannelName)),this.replyChannel.subscribe()),this.currentUser.staff&&this.whisperChannel?.name!==this.whisperChannelName&&(this.whisperChannel?.unsubscribe(),this.set("whisperChannel",this.presence.getChannel(this.whisperChannelName)),this.whisperChannel.subscribe())}_destroyed(){this.replyChannel?.unsubscribe(),this.whisperChannel?.unsubscribe()}static#m=(()=>dt7948.n(this.prototype,"_destroyed",[(0,i.on)("willDestroyElement")]))()}e.default=p,(0,s.setComponentTemplate)(l,p)})),define("discourse/plugins/discourse-presence/discourse/services/composer-presence-manager",["exports","@ember/runloop","@ember/service","discourse-common/config/environment"],(function(e,s,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends t.default{static#e=(()=>dt7948.g(this.prototype,"presence",[t.service]))()
#s=(()=>{dt7948.i(this,"presence")})()
notifyState(e,t){if(this.siteSettings.allow_users_to_hide_profile&&this.currentUser.user_option.hide_profile_and_presence)return
if(void 0===e)return this.leave()
if(!["reply","whisper","edit"].includes(e))throw`Unknown intent ${e}`
const i=`${e}/${t}`
this._state!==i&&(this._enter(e,t),this._state=i),(0,n.isTesting)()||(this._autoLeaveTimer=(0,s.debounce)(this,this.leave,1e4))}leave(){this._presentChannel?.leave(),this._presentChannel=null,this._state=null,this._autoLeaveTimer&&((0,s.cancel)(this._autoLeaveTimer),this._autoLeaveTimer=null)}_enter(e,s){this.leave()
let t=`/discourse-presence/${e}/${s}`
this._presentChannel=this.presence.getChannel(t),this._presentChannel.enter()}willDestroy(){this.leave()}}e.default=i})),define("discourse/plugins/discourse-presence/discourse/templates/connectors/before-composer-controls/presence",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"G/OxL/Vj",block:'[[[8,[39,0],null,[["@model"],[[30,0,["model"]]]],null]],[],false,["composer-presence-display"]]',moduleName:"discourse/plugins/discourse-presence/discourse/templates/connectors/before-composer-controls/presence.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"CmudhbhK",block:'[[[8,[39,0],null,[["@topic"],[[30,0,["model"]]]],null]],[],false,["topic-presence-display"]]',moduleName:"discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-presence-0f86068e6265b32f65981b87a1f034d623abf1644b265227c96a4c76f5369830.map
//!

;
