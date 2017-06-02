YUI.add("aui-datatable-base-options-cell-editor",function(e,t){var n,r=e.Lang,i=e.Escape,s=e.getClassName("celleditor","edit"),o=e.getClassName("celleditor","edit","add","option"),u=e.getClassName("celleditor","edit","dd","handle"),a=e.getClassName("celleditor","edit","delete","option"),f=e.getClassName("celleditor","edit","hide","option"),l=e.getClassName("celleditor","edit","input","name"),c=e.getClassName("celleditor","edit","input","value"),h=e.getClassName("celleditor","edit","label"),p=e.getClassName("celleditor","edit","link"),d=e.getClassName("celleditor","edit","option","row"),v=e.getClassName("glyphicon"),m=e.getClassName("glyphicon","resize","vertical");n=e.Component.create({NAME:"optionsCellEditor",ATTRS:{inputFormatter:{value:null},hideEditContainerOnSave:{value:!0,validator:e.Lang.isBoolean},options:{setter:"_setOptions",value:{},validator:r.isObject},optionsValidatorCustomRules:{validator:e.Lang.isObject,valueFn:function(){var e=this;return{uniqueValue:{condition:function(e,t){var n=this,r=t.ancestor("."+s),i=r.all("."+c),o=function(e,t,r){var s=!1;return t.each(function(t){e!==t&&(e.val()===t.val()&&(n.highlight(e),n.addFieldError(e,"uniqueValue"),s=!0),r&&o(t,i,!1))}),s||(n.resetField(e),n.highlight(e,!0)),!s};return o(t,i,!0)},errorMessage:e.getStrings().valueNotUnique}}}},optionsValidatorInputRules:{validator:e.Lang.isObject,value:{custom:!0,uniqueValue:!0}},outputFormatter:{value:null},selectedAttrName:{value:"selected",validator:r.isString},strings:{value:{add:"Add",addOption:"Add option",cancel:"Cancel",edit:"Edit options",editOptions:"Edit option(s)",name:"Name",optionName:"Option Name",optionValue:"Option Value",remove:"Remove",save:"Save",stopEditing:"Stop editing",value:"Value",valueNotUnique:"Value not unique."}}},EXTENDS:e.BaseCellEditor,UI_ATTRS:["options"],prototype:{EDIT_TEMPLATE:'<div class="'+s+'"></div>',EDIT_OPTION_ROW_TEMPLATE:'<div class="form-inline '+d+'">'+'<div class="form-group">'+'<span class="'+[u,v,m].join(" ")+'"></span>'+"</div>"+'<div class="form-group">'+'<label class="sr-only" for="{optionValueName}_name">{labelOptionName}</label>'+'<input class="'+l+' form-control input-sm" size="7" id="{optionValueName}_name"'+'placeholder="{titleName}" title="{titleName}" type="text" value="{valueName}" /> '+"</div>"+'<div class="form-group">'+'<label class="sr-only" for="{optionValueName}">{labelOptionValue}</label>'+'<input class="'+c+' form-control input-sm" id="{optionValueName}"'+' name="{optionValueName}" placeholder="{titleValue}" size="7" title="{titleValue}" type="text" value="{valueValue}" /> '+"</div>"+'<div class="form-group">'+'<button aria-label="{remove}" class="close '+[p,a].join(" ")+'" type="button"><span aria-hidden="true">&times;</span></button>'+"</div>"+"</div>"+"</div>",EDIT_ADD_LINK_TEMPLATE:'<div class="form-group"><a class="'+[p,o].join(" ")+'" href="javascript:void(0);">{addOption}</a></div> ',EDIT_LABEL_TEMPLATE:'<div class="'+h+'">{editOptions}</div>',editContainer:null,editSortable:null,options:null,initializer:function(){var t=this;t.on("edit",t._onEditEvent),t.on("save",t._onSave),t.after("initToolbar",t._afterInitToolbar),e.FormValidator.addCustomRules(t.get("optionsValidatorCustomRules"))},addNewOption:function(t,n){var r=this,i=r.editContainer.one("."+o),s=e.Node.create(r._createEditOption(t||"",n||""));i.placeBefore(s),s.one("input").focus()},removeOption:function(e){e.remove()},saveOptions:function(){var e=this,t=e.editContainer;if(t&&!t.hasAttribute("hidden")){var n=t.all("."+l),r=t.all("."+c),i={};n.each(function(e,t){var n=e.val(),s=r.item(t).val();i[s]=n}),e.set("options",i),e.get("hideEditContainerOnSave")&&e.toggleEdit()}},toggleEdit:function(){var e=this;e.editContainer.toggle()},_createOptions:function(t){var n=this,s=n.elements,o=[],u=[],a=n.OPTION_TEMPLATE,f=n.OPTION_WRAPPER;e.each(t,function(t,n){var s={id:e.guid(),label:i.html(t),name:i.html(n),value:i.html(n)};a&&o.push(r.sub(a,s)),f&&u.push(r.sub(f,s))});var l=e.NodeList.create(o.join("")),c=e.NodeList.create(u.join(""));c.size()?(c.each(function(e,t){e.prepend(l.item(t))}),s.setContent(c)):s.setContent(l),n.options=l},_createEditBuffer:function(){var t=this,n=t.getStrings(),i=[];return i.push(r.sub(t.EDIT_LABEL_TEMPLATE,{editOptions:n.editOptions})),e.each(t.get("options"),function(e,n){i.push(t._createEditOption(e,n))}),i.push(r.sub(t.EDIT_ADD_LINK_TEMPLATE,{addOption:n.addOption})),i.join("")},_createEditOption:function(t,n){var s=this,o=e.guid()+"_value",u=s.getStrings();return s.validator.get("rules")[o]=s.get("optionsValidatorInputRules"),r.sub(s.EDIT_OPTION_ROW_TEMPLATE,{labelOptionName:i.html(u.optionName),labelOptionValue:i.html(u.optionValue),optionValueName:i.html(o),remove:u.remove,titleName:i.html(u.name),titleValue:i.html(u.value),valueName:i.html(t),valueValue:i.html(n)})},_defInitEditFn:function(){var t=this,n=e.Node.create(t.EDIT_TEMPLATE);n.delegate("click",e.bind(t._onEditLinkClickEvent,t),"."+p),n.delegate("keydown",e.bind(t._onEditKeyEvent,t),"input"),t.editContainer=n,t.setStdModContent(e.WidgetStdMod.BODY,n.hide(),e.WidgetStdMod.AFTER),t.editSortable=(new e.Sortable({container:n,handles:["."+u],nodes:"."+d,opacity:".3"})).delegate.dd.plug(e.Plugin.DDConstrained,{constrain:n,stickY:!0}),t._syncEditOptionsUI()},_getSelectedOptions:function(){var t=this,n=[];return t.options.each(function(e){e.get(t.get("selectedAttrName"))&&n.push(e)}),e.all(n)},_onEditEvent:function(){var e=this;e._handleInitEditEvent(),e.toggleEdit(),e._syncEditOptionsUI()},_onEditLinkClickEvent:function(e){var t=this,n=e.currentTarget;n.test("."+o)?t.addNewOption():n.test("."+f)?t.toggleEdit():n.test("."+a)&&t.removeOption(n.ancestor("."+d)),e.halt()},_onEditKeyEvent:function(e){var t=this,n=e.currentTarget;if(e.isKey("return")){var r=n.next("input");r?r.selectText():t.addNewOption(),e.halt()}},_onSave:function(){var e=this;e.saveOptions()},_setOptions:function(t){var n={};return r.isArray(t)?e.Array.each(t,function(e){n[e]=e}):r.isObject(t)&&(n=t),n},_syncEditOptionsUI
:function(){var e=this;e.editContainer.setContent(e._createEditBuffer())},_uiSetOptions:function(e){var t=this;t._createOptions(e),t._uiSetValue(t.get("value")),t._syncElementsName()},_uiSetValue:function(t){var n=this,s=n.options;return s&&s.size()&&(s.set(n.get("selectedAttrName"),!1),r.isValue(t)&&(r.isArray(t)||(t=String(t).split(",")),e.Array.each(t,function(e){s.filter('[value="'+i.html(r.trim(e))+'"]').set(n.get("selectedAttrName"),!0)}))),t}}}),e.BaseOptionsCellEditor=n},"3.1.0-deprecated.11",{requires:["aui-datatable-base-cell-editor","escape"],skinnable:!0});
