YUI.add("aui-datatable-text-area-cell-editor",function(e,t){var n=e.getClassName("form","control"),r=e.getClassName("celleditor","element"),i=e.Component.create({NAME:"textAreaCellEditor",EXTENDS:e.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<textarea class="'+[r,n].join(" ")+'"></textarea>'}});e.TextAreaCellEditor=i},"3.0.3-deprecated.100",{requires:["aui-datatable-base-options-cell-editor"]});
