function sendMessage(e,o,t){var l=JSON.stringify(o);mb.sendMessage(e,l,t)}function receiveMessage(e,o,t){decodedData=decodeURIComponent(t),console.log("DecodedData::::"+decodedData);var l=JSON.parse(decodedData),n=l.component,a=l.nameSpace,r=l.value,s=l.options,i=l.method,c=l.eventType;console.log("component is::::"+n),console.log("namespace is::::"+a),console.log("value is:::: "+r),console.log("options is:::: "+s),console.log("method is:::: "+i),console.log("eventType is:::: "+c);var d="";d=null==a||0==a.length?n:n+"."+a;var g=getCurrentObject(n,a);if(null!=i&&"clear"===i){var f=s||null;console.log("Received Delete method call for NodeLevel = "+d+", leaf = "+g.isLeaf());var v=null;f?(v=handleDeleteWithOptions(d,s,g.isLeaf(),g.isArray,g.isMap),console.log("Deleted Item ::: ",v)):(v=handleDeleteWithNoOptions(d,g.isLeaf(),g.isArray,g.isMap),console.log("Deleted Item ::: ",v)),null==r&&(r=v)}else if(g.isArray&&null!=r)console.log("Received component is of Array Type"),setItemsOfArrayType(d,r,s);else{console.log("Received component is of non Array Type");for(attrKey in r){attrVal=r[attrKey],console.log("ATTRIBUTE KEY::  "+attrKey),console.log("ATTRIBUTE VALUE::  "+attrVal);var p="";p=null==a||""==a?attrKey:a+"."+attrKey;var y=getCurrentObject(n,p);if(null!=y)if(y.isArray){var u=d+"."+attrKey;setItemsOfArrayType(u,attrVal,s)}else setItemsOfLeafOrNonLeafType(g,attrKey,attrVal);else console.log("Unable to get the current object for "+n+"."+p)}}executeSubscriptionCallbackForParentChild(d,r)}function getCurrentObject(e,o){var t=drive[e];if(null==o||0==o.length)return t;if(-1==o.indexOf("."))return t[o];for(var l=o.split("."),n=0;n<l.length;n++){var a=l[n];t=t[a]}return t}var connectionType="mbbridge";mb.setReceiveCallback("receiveMessage");