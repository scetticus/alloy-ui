YUI.add("aui-form-field-deprecated",function(e,t){var n=e.Lang,r=e.getClassName,t="field",i=" ",s=e.cached(function(e,t){var n=["field"];t&&n.push(t),n=n.join("-");var i=[r(n,e)];return e=="password"&&i.push(r(n,"text")),i.join(" ")}),o=r(t),u=r(t,"checkbox"),a=r(t,"choice"),f=r(t,"content"),l=r(t,"input"),c=r(t,"hint"),h=r(t,"invalid"),p=r(t,"label"),d=r(t,"radio"),v=r(t,"labels"),m=r(t,"labels","inline"),g={left:[v,"left"].join("-"),right:[v,"right"].join("-"),top:[v,"top"].join("-")},y={radio:d,checkbox:u},b=/left|right/,w='<span class="'+o+'"></span>',E='<span class="'+f+'"></span>',S='<span class="'+c+'"></span>',x='<input autocomplete="off" class="{cssClass}" id="{id}" name="{name}" type="{type}" />',T='<label class="'+p+'"></label>',N={},C=e.Component.create({NAME:t,ATTRS:{readOnly:{value:!1},name:{value:"",getter:function(e){var t=this;return e||t.get("id")}},disabled:{value:!1,validator:n.isBoolean},id:{getter:function(t){var n=this,r=this.get("node");return r&&(t=r.get("id")),t||(t=e.guid()),t}},type:{value:"text",validator:n.isString,writeOnce:!0},labelAlign:{valueFn:function(){var e=this;return e._getChoiceCss()?"left":null}},labelNode:{valueFn:function(){var t=this;return e.Node.create(T)}},labelText:{valueFn:function(){var e=this;return e.get("labelNode").get("innerHTML")},setter:function(e){var t=this;return t.get("labelNode").set("innerHTML",e),e}},node:{value:null,setter:function(t){var n=this;return e.one(t)||n._createFieldNode()}},fieldHint:{value:""},fieldHintNode:{value:null,setter:function(t){var n=this;return e.one(t)||n._createFieldHint()}},prevVal:{value:""},valid:{value:!0,getter:function(e){var t=this,n=t.get("validator"),r=t.get("disabled")||n(t.get("value"));return r}},dirty:{value:!1,getter:function(e){var t=this;if(t.get("disabled"))e=!1;else{var n=String(t.get("value")),r=String(t.get("prevVal"));e=n!==r}return e}},size:{},validator:{valueFn:function(){var e=this;return e.fieldValidator},validator:n.isFunction},value:{getter:"_getNodeValue",setter:"_setNodeValue",validator:"fieldValidator"}},HTML_PARSER:{labelNode:"label",node:"input, textarea, select"},BIND_UI_ATTRS:["disabled","id","readOnly","name","size","tabIndex","type","value"],getTypeClassName:s,getField:function(t){var r=null;if(t instanceof e.Field)r=t;else if(t&&(n.isString(t)||t instanceof e.Node||t.nodeName)){var i=e.one(t).get("id");r=N[i];if(!r){var s=t.ancestor(".field"),o=t.ancestor(".field-content");r=new C({boundingBox:s,contentBox:o,node:t})}}else n.isObject(t)&&(r=new C(t));return r},prototype:{BOUNDING_TEMPLATE:w,CONTENT_TEMPLATE:E,FIELD_TEMPLATE:x,FIELD_TYPE:"text",initializer:function(){var e=this,t=e.get("node").guid();N[t]=e},renderUI:function(){var e=this;e._renderField(),e._renderLabel(),e._renderFieldHint()},bindUI:function(){var e=this;e.after("labelAlignChange",e._afterLabelAlignChange),e.after("fieldHintChange",e._afterFieldHintChange)},syncUI:function(){var e=this;e.set("prevVal",e.get("value"))},fieldValidator:function(e){var t=this;return!0},isValid:function(){var e=this;return e.get("valid")},isDirty:function(){var e=this;return e.get("dirty")},resetValue:function(){var e=this;e.set("value",e.get("prevVal")),e.clearInvalid()},markInvalid:function(e){var t=this;t.set("fieldHint",e),t.get("fieldHintNode").show(),t.get("boundingBox").addClass(h)},clearInvalid:function(){var e=this;e.reset("fieldHint"),e.get("fieldHint")||e.get("fieldHintNode").hide(),e.get("boundingBox").removeClass(h)},validate:function(){var e=this,t=e.get("valid");return t&&e.clearInvalid(),t},_afterFieldHintChange:function(e){var t=this;t._uiSetFieldHint(e.newVal,e.prevVal)},_afterLabelAlignChange:function(e){var t=this;t._uiSetLabelAlign(e.newVal,e.prevVal)},_createFieldHint:function(){var t=this,n=e.Node.create(S);return t.get("contentBox").append(n),n},_createFieldNode:function(){var t=this,r=t.FIELD_TEMPLATE;return t.FIELD_TEMPLATE=n.sub(r,{cssClass:l,id:t.get("id"),name:t.get("name"),type:t.get("type")}),e.Node.create(t.FIELD_TEMPLATE)},_getChoiceCss:function(){var e=this,t=e.get("type");return y[t]},_getNodeValue:function(){var e=this;return e.get("node").val()},_renderField:function(){var e=this,t=e.get("node");t.val(e.get("value"));var n=e.get("boundingBox"),r=e.get("contentBox"),o=e.get("type"),u=[s(o)],f=e._getChoiceCss();f&&(u.push(a),u.push(f)),n.addClass(u.join(i)),t.addClass(s(o,"input")),r.contains(t)||(t.inDoc()?(t.placeBefore(n),r.appendChild(t)):r.appendChild(t)),n.removeAttribute("tabIndex")},_renderFieldHint:function(){var e=this,t=e.get("fieldHint");t&&e._uiSetFieldHint(t)},_renderLabel:function(){var e=this,t=e.get("labelText");if(t!==!1){var n=e.get("node"),i=n.guid();t=e.get("labelText");var s=e.get("labelNode");s.addClass(r(e.name,"label")),s.setAttribute("for",i),s.set("innerHTML",t),e._uiSetLabelAlign(e.get("labelAlign"));var o=e.get("contentBox"),u=e.get("labelAlign"),a=e.get("type").toLowerCase(),f=b.test(u),l="prepend";f&&e._getChoiceCss()&&(l="append"),o[l](s)}},_setNodeValue:function(e){var t=this;return t._uiSetValue(e),e},_uiSetDisabled:function(e){var t=this,n=t.get("node");e?n.setAttribute("disabled",e):n.removeAttribute("disabled")},_uiSetFieldHint:function(e,t){var n=this;n.get("fieldHintNode").set("innerHTML",e)},_uiSetId:function(e,t){var n=this;n.get("node").set("id",e)},_uiSetLabelAlign:function(e,t){var n=this,r=n.get("boundingBox");r.replaceClass(g[t],g[e]);var i="removeClass";b.test(e)&&(i="addClass"),r[i](m)},_uiSetName:function(e,t){var n=this;n.get("node").setAttribute("name",e)},_uiSetReadOnly:function(e,t){var n=this;n.get("node").setAttribute("readOnly",e)},_uiSetSize:function(e,t){var n=this;n.get("node").setAttribute("size",e)},_uiSetTabIndex:function(e,t){var n=this;n.get("node").setAttribute("tabIndex",e)},_uiSetValue:function(e,t){var n=this;n.get("node").val(e)},_requireAddAttr:!1}});e.Field=C},"3.0.3-deprecated.90",{requires:["aui-base-deprecated","aui-component"]});
