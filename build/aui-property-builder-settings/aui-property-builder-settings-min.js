YUI.add("aui-property-builder-settings",function(e,t){var n,n=function(){},r=e.getClassName("property","builder","tabs"),i=e.getClassName("property","builder","toolbar","container"),s=e.getClassName("tabbable"),o=e.getClassName("tabbable","content"),u=e.getClassName("table","striped");n.ATTRS={propertyList:{setter:"_setPropertyList",validator:e.Lang.isObject,value:null},tabView:{setter:"_setTabView",validator:e.Lang.isObject,value:null,writeOnce:!0},toolbar:{setter:"_setToolbar",validator:e.Lang.isObject,value:null},toolbarContainer:{valueFn:function(){return e.Node.create(this.TOOLBAR_CONTAINER_TEMPLATE)}}},n.HTML_PARSER={toolbarContainer:"."+i},e.mix(n.prototype,{TOOLBAR_CONTAINER_TEMPLATE:'<div class="'+i+'"></div>',propertyList:null,settingsNode:null,tabView:null,toolbar:null,initializer:function(){this.publish({cancel:{defaultFn:this._defCancelFn}}),this.on("render",function(){this._renderTabs()})},_afterModelChange:function(){var e=this;e._handleSaveEvent()},_afterSelectionChange:function(e){var t=this,n=e.newVal,r;n&&(r=n.get("panelNode"),t.get("rendered")&&r===t.settingsNode&&t._renderSettings())},_defCancelFn:function(){var e=this;e.tabView.selectChild(0)},_handleCancelEvent:function(){var e=this;e.fire("cancel")},_handleSaveEvent:function(){var e=this;e.fire("save")},_renderPropertyList:function(){var t=this;if(!t.propertyList){var n=t.propertyList=new e.PropertyList(t.get("propertyList"));n.render(t.settingsNode),n.get("boundingBox").unselectable().addClass(u)}},_renderSettings:function(){var e=this;e._renderPropertyList(),e._renderToolbar()},_renderTabs:function(){var t=this;if(!t.tabView){var n=new e.TabView(t.get("tabView"));t.tabView=n,t.fieldsNode=n.item(0).get("panelNode"),t.settingsNode=n.item(1).get("panelNode")}},_renderToolbar:function(){var t=this;t.toolbar||(t.toolbar=(new e.Toolbar(t.get("toolbar"))).render(t.settingsNode))},_setPropertyList:function(t){var n=this;return e.merge({bubbleTargets:n,scroll:{height:400,width:"auto"},width:"99%"},t)},_setTabView:function(t){var n=this,i=n.get("boundingBox"),u=i.one("."+o),a;a={after:{selectionChange:e.bind(n._afterSelectionChange,n)},boundingBox:i.one("."+s),bubbleTargets:n,cssClass:r,render:n.get("contentBox"),srcNode:u};if(!u){var f=n.getStrings();a.children=[{label:f.addNode},{label:f.settings,disabled:!0}]}return e.merge(a,t)},_setToolbar:function(t){var n=this,r=n.getStrings();return e.merge({bubbleTargets:n,children:[{on:{click:e.bind(n._handleCancelEvent,n)},label:r.close}]},t)}}),e.PropertyBuilderSettings=n},"3.1.0-deprecated.11",{requires:["aui-tabview","aui-datatable-property-list"]});
