YUI.add("aui-diagram-node-state",function(e,t){var n=e.Component.create({NAME:"diagram-node",ATTRS:{height:{value:40},type:{value:"state"},width:{value:40}},EXTENDS:e.DiagramNode,prototype:{hotPoints:e.DiagramNode.CIRCLE_POINTS,renderShapeBoundary:function(){var e=this,t=e.boundary=e.get("graphic").addShape(e.get("shapeBoundary"));return t.translate(5,5),t},_valueShapeBoundary:function(){return{radius:15,type:"circle",stroke:{weight:7,color:"transparent",opacity:0}}}}});e.DiagramNodeState=n},"3.0.3-deprecated.90",{requires:["aui-diagram-node"]});
