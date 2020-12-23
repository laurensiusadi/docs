(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(e,t,o){e.exports=o.p+"assets/img/wrapper-overview.a8dd47e4.svg"},367:function(e,t,o){e.exports=o.p+"assets/img/feathersjs-offline-crud-principle.a2753c0d.svg"},412:function(e,t,o){"use strict";o.r(t);var n=o(43),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"how-is-own-data-own-net-implemented"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-is-own-data-own-net-implemented"}},[e._v("#")]),e._v(" How is own-data/own-net implemented?")]),e._v(" "),n("p",[e._v("The following is a high-level illustration of the "),n("code",[e._v("realtimeWrapper,")]),e._v(" "),n("code",[e._v("owndataWrapper,")]),e._v(" and "),n("code",[e._v("ownnetWrapper")]),e._v(":")]),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{width:"400",src:o(366),alt:"FeathersJS Offline-first wrapper overview"}})]),e._v(" "),n("p",[e._v("As can be gleaned from this, the "),n("code",[e._v("realtimeWrapper")]),e._v(" wraps functionality around all of the CRUD methods of the service. This is mainly to set "),n("code",[e._v("onServerAt")]),e._v(" to determine the exact time this version of the item in question hit the server and when needed, "),n("code",[e._v("deletedAt,")]),e._v(" to indicate the exact time when the item in question was deleted from the server. Both of these are crucial for the synchronization with the clients.")]),e._v(" "),n("p",[e._v("The client-side is either wrapped with "),n("code",[e._v("owndataWrapper")]),e._v(" or "),n("code",[e._v("ownnetWrapper")]),e._v(" which is are little more complex than the "),n("code",[e._v("realtimeWrapper")]),e._v(" as you can get an impression of below.")]),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{width:"400",src:o(367),alt:"FeathersJS Offline-first CRUD principle"}})]),e._v(" "),n("p",[e._v("On the client we wrap the CRUD methods to set the "),n("code",[e._v("onServerAt")]),e._v(" to BOT (Beginning Of Time) to indicate that this version of the item has not been on the server yet (which is done in the housekeeping part). We also need to have a way of returning the result of any CRUD method immediately - even if we are not connected to the server - and we need to queue all operations on the client just in case we are not connected. This is done in the "),n("em",[e._v("Optimistic op")]),e._v(" part. The queue is essential for updating the server correctly whenever we connect to it. So, to enable this behaviour we make use of two local DB's (implemented as "),n("a",{attrs:{href:"https://github.com/feathersjs-ecosystem/feathers-localstorage",target:"_blank",rel:"noopener noreferrer"}},[e._v("feathers-localstorage"),n("OutboundLink")],1),e._v(") per service handled with "),n("code",[e._v("own-data")]),e._v(" / "),n("code",[e._v("own-net")]),e._v(" principle.")]),e._v(" "),n("p",[e._v("Once the local database has been updated we immediately spin-off an asynchronous update of the remote DB (see the "),n("em",[e._v("Update remote DB")]),e._v(" part). If the client is connected to the server at the time of the operation, we will remove the queued operation and update the local item to reflect the actual status on the server. If we are not connected to the server, the local operation will still succeed, but the remote call will eventually timeout (default after 5 seconds). This will not result in any further action now, but later, when we discover we are connected to the server again the queued operations will be replayed to the server - if successful the queued item is removed and the local item is refreshed with the data returned from the server.")]),e._v(" "),n("p",[e._v("Should the server return with an error, we remove the queued item and revert the change on the local item!")]),e._v(" "),n("p",[e._v("Whenever an CRUD operation successfully has been executed on the server through the wrapper we will try to replay any queued items in order to have the server reflect the most up-to-date state at any time. This queue handling may only occur if no there are no active operations with the server.")]),e._v(" "),n("p",[e._v("The client wrappers will by default try to synchronize with the server every 24 hours. This can be changed by setting the option "),n("code",[e._v("timedSync")]),e._v(" to any suitable value (in milliseconds). Also, at any time your application can call the "),n("code",[e._v("client.service('path').sync()")]),e._v(" to force a synchronization.")]),e._v(" "),n("p",[e._v("Synchronization is always initiated by the client and the client determines the synchronization-point-in-time to use from its local DB. At start, the synchronization-point-in-time will be set to BOT. The server will then return the necessary items which are created, patched, or deleted in the local DB. Afterwards, any queued operations will be replayed. Synchronization can only occur when there are no active operations with the server (and no other synchronization running).")]),e._v(" "),n("p",[e._v("At the end of each successful synchronization the oldest "),n("code",[e._v("updatedAt")]),e._v(" timestamp on items having "),n("code",[e._v("onServerAt")]),e._v(" equal to BOT or the newest value of "),n("code",[e._v("onServerAt")]),e._v(" - the oldest of the two is recorded and stored in "),n("code",[e._v("localStorage.")])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Tip:")]),e._v(" At any time your application can call the client.service('path').sync(true) to force a synchronization from BOT.")])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Tip:")]),e._v(" You should use the "),n("code",[e._v("own-data")]),e._v(" / "),n("code",[e._v("own-net")]),e._v(" wrappers with some care, as they consume parts of the localStorage which in browsers is not an unlimited resource pool...")])]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("ProTip:")]),e._v(" It is worth noting that the client wrappers actually works on servers too which for instance can be used to keep several Feathers servers in sync...")])]),e._v(" "),n("h2",{attrs:{id:"what-s-next"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),n("p",[e._v("In the final chapter, we'll look at "),n("RouterLink",{attrs:{to:"/guides/basics/testing.html"}},[e._v("how to write automated tests for our API")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);