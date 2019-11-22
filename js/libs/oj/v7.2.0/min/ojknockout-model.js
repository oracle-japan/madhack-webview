/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(["ojs/ojcore","knockout","ojs/ojmodel"],function(t,o,n){"use strict";t.KnockoutUtils=function(){};t.KnockoutUtils;return t.KnockoutUtils.internalObjectProperty="oj._internalObj",t.KnockoutUtils.underUpdateProp="oj._underUpdate",t.KnockoutUtils.collUpdatingProp="oj.collectionUpdating",t.KnockoutUtils.subscriptionProp="oj.collectionSubscription",t.KnockoutUtils.updatingCollectionFunc="oj.collectionUpdatingFunc",t.KnockoutUtils.map=function(e,r,l){var i;function c(o){return function(n){i[t.KnockoutUtils.underUpdateProp]||e.set(o,n)}}if(e instanceof n.Collection){var u,a,s=new Array(e._getLength());if(i=l?o.observableArray(s):s,t.KnockoutUtils._storeOriginalObject(i,e),l)for(a=0;a<e._modelIndices.length;a++)u=e._modelIndices[a],i()[u]=t.KnockoutUtils.map(e._atInternal(u,null,!0,!1),r);else for(a=0;a<e._modelIndices.length;a++)u=e._modelIndices[a],i[u]=t.KnockoutUtils.map(e._atInternal(u,null,!0,!1),r);var p=function(o){try{if(!i[t.KnockoutUtils.underUpdateProp]){i[t.KnockoutUtils.collUpdatingProp]=!0;for(var n=0;n<o.length;n++){var r=o[n].index,l=t.KnockoutUtils._getModel(o[n].value),c=o[n].status;"added"===c?r>=e.length-1?e.add(l):e.add(l,{at:r}):"deleted"===c&&e._removeInternal(l,r)}e.comparator&&(i[t.KnockoutUtils.underUpdateProp]=!0,i.sort(function(o,n){return t.KnockoutUtils._callSort(o,n,e.comparator,e,this)}),i[t.KnockoutUtils.underUpdateProp]=!1)}}catch(t){throw t}finally{i[t.KnockoutUtils.collUpdatingProp]=!1}};l&&i.subscribe&&(i[t.KnockoutUtils.updatingCollectionFunc]=p,i[t.KnockoutUtils.subscriptionProp]=i.subscribe(p,null,"arrayChange"));e.OnInternal(n.Events.EventType.ADD,function(o,e,l){try{if(i[t.KnockoutUtils.collUpdatingProp])return;if(e instanceof n.Collection){i[t.KnockoutUtils.underUpdateProp]=!0;var c=e._localIndexOf(o);if(void 0!==c&&c>-1){var u=t.KnockoutUtils.map(o,r);if(l.fillIn){for(var a=Array.isArray(i)?i.length:i().length;a<c;a++)i.splice(a,0,t.KnockoutUtils.map(e._atInternal(a,null,!0,!1),r));i.splice(c,1,u)}else i.splice(c,0,u)}}}catch(t){throw t}finally{i[t.KnockoutUtils.underUpdateProp]=!1}},void 0,void 0,!0),e.OnInternal(n.Events.EventType.REMOVE,function(o,n,e){try{if(i[t.KnockoutUtils.collUpdatingProp])return;i[t.KnockoutUtils.underUpdateProp]=!0;var r=e.index;i.splice(r,1)}catch(t){throw t}finally{i[t.KnockoutUtils.underUpdateProp]=!1}},void 0,void 0,!0),e.OnInternal(n.Events.EventType.RESET,function(e){try{if(i[t.KnockoutUtils.collUpdatingProp])return;e instanceof n.Collection&&(i[t.KnockoutUtils.underUpdateProp]=!0,o.isObservable(i)?(i[t.KnockoutUtils.subscriptionProp]&&i[t.KnockoutUtils.subscriptionProp].dispose(),i.removeAll(),i[t.KnockoutUtils.updatingCollectionFunc]&&i.subscribe(i[t.KnockoutUtils.updatingCollectionFunc],null,"arrayChange")):i=[])}catch(t){throw t}finally{i[t.KnockoutUtils.underUpdateProp]=!1}},void 0,void 0,!0),e.OnInternal(n.Events.EventType.SORT,function(o){try{if(i[t.KnockoutUtils.collUpdatingProp])return;o instanceof n.Collection&&(i[t.KnockoutUtils.underUpdateProp]=!0,i.sort(function(n,r){return t.KnockoutUtils._callSort(n,r,e.comparator,o,this)}))}catch(t){throw t}finally{i[t.KnockoutUtils.underUpdateProp]=!1}},void 0,void 0,!0)}else{if(void 0===e)return;i={};for(var d=e.attributes,U=Object.keys(d),k=0;k<U.length;k++){var K=U[k],f=o.observable(e.get(K));i[K]=f;var v=c(K);v._prop=K,f.subscribe&&f.subscribe(v)}e.OnInternal(n.Events.EventType.CHANGE,function(n){try{i[t.KnockoutUtils.underUpdateProp]=!0;for(var e=n.changedAttributes(),r=Object.keys(e),l=0;l<r.length;l++){var c=r[l];i[c]?i[c](n.get(c)):i[c]=o.observable(n.get(c))}}catch(t){throw t}finally{i[t.KnockoutUtils.underUpdateProp]=!1}},void 0,void 0,!0),t.KnockoutUtils._storeOriginalObject(i,e),r&&r(i)}return i},t.KnockoutUtils._getModel=function(o){return o instanceof n.Model?o:Object.prototype.hasOwnProperty.call(o,t.KnockoutUtils.internalObjectProperty)?o[t.KnockoutUtils.internalObjectProperty]:o},t.KnockoutUtils._callSort=function(o,e,r,l,i){return n.Collection.SortFunc(t.KnockoutUtils._getModel(o),t.KnockoutUtils._getModel(e),r,l,i)},t.KnockoutUtils._storeOriginalObject=function(o,n){Object.defineProperty(o,t.KnockoutUtils.internalObjectProperty,{value:n,enumerable:!1})},t.KnockoutUtils});