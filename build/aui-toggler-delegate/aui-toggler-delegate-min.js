YUI.add("aui-toggler-delegate",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isObject,s=n.isString,o=e.Array,u=e.config.doc,a=e.Toggler,f="cubic-bezier(0, 0.1, 0, 1.0)",l=e.getClassName,c=l("toggler","content","wrapper"),h=l("toggler","header","collapsed"),p=l("toggler","header","expanded"),d=e.Component.create({NAME:"toggler-delegate",ATTRS:{animated:{validator:r,value:!1,writeOnce:!0},closeAllOnExpand:{validator:r,value:!1},container:{setter:e.one,value:u},content:{validator:s},expanded:{validator:r,value:!0},header:{validator:s},toggleEvent:{validator:s,value:"tap",writeOnce:!0},transition:{validator:i,value:{duration:.4,easing:f}}},EXTENDS:e.Base,prototype:{items:null,initializer:function(){var e=this;e.items=[],e.bindUI(),e.renderUI()},renderUI:function(){var e=this;e.get("closeAllOnExpand")&&e.createAll()},bindUI:function(){var t=this,n=t.get("container"),r=t.get("header");t._eventHandles=[n.delegate([t.get("toggleEvent"),"keydown"],e.bind("headerEventHandler",t),r),t.on("toggler:animatingChange",e.bind("_onAnimatingChange",t))]},destructor:function(){var t=this;o.each(t.items,function(e){e.destroy()}),t.items=null,(new e.EventHandle(t._eventHandles)).detach()},collapseAll:function(t){var n=this;n.createAll(),e.Array.invoke(n.items,"collapse",t)},createAll:function(){var e=this;e.get("container").all(e.get("header")).each(function(t){t.getData("toggler")||e._create(t)})},expandAll:function(t){var n=this;n.createAll(),e.Array.invoke(n.items,"expand",t)},findContentNode:function(e){var t=this,n=t.get("content"),r=e.next(n)||e.one(n);if(!r){var i=e.next("."+c);i&&(r=i.get("firstChild"))}return r},headerEventHandler:function(e){var t=this;if(t.animating)return!1;var n=e.currentTarget,r=n.getData("toggler")||t._create(n);if(a.headerEventHandler(e,r)&&t.get("closeAllOnExpand")){var i=r.get("content").ancestor(t.get("content"));o.each(t.items,function(e){if(e!==r&&e.get("expanded"))if(i){var t=e.get("content");t!==i&&i.contains(t)&&e.collapse()}else e.collapse()})}},_create:function(e){var t=this,n=t.get("expanded");e.hasClass(p)?n=!0:e.hasClass(h)&&(n=!1);var r=new a({animated:t.get("animated"),bindDOMEvents:!1,bubbleTargets:[t],content:t.findContentNode(e),expanded:n,header:e,toggleEvent:t.get("toggleEvent"),transition:t.get("transition")});return t.items.push(r),r},_onAnimatingChange:function(e){var t=this;t.animating=e.newVal}}});e.TogglerDelegate=d},"3.0.3-deprecated.71",{requires:["array-invoke","node-event-delegate","aui-toggler-base"]});
