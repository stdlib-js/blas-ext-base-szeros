"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=i(function(g,u){
var y=require('@stdlib/blas-ext-base-sfill/dist').ndarray;function p(e,r,s,f){return y(e,0,r,s,f),r}u.exports=p
});var o=i(function(h,n){
var l=require('@stdlib/strided-base-stride2offset/dist'),z=a();function j(e,r,s){return z(e,r,s,l(e,s))}n.exports=j
});var c=i(function(k,q){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=o(),x=a();m(v,"ndarray",x);q.exports=v
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=c(),t,d=_(R(__dirname,"./native.js"));E(d)?t=O:t=d;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
