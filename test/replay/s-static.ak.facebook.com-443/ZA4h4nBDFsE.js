GET /connect/xd_arbiter/ZA4h4nBDFsE.js?version=41
accept: text/html,*/*
content-type: application/x-www-form-urlencoded;charset=UTF-8
host: s-static.ak.facebook.com

HTTP/1.1 200 OK
content-type: text/html; charset=utf-8
x-content-type-options: nosniff
x-xss-protection: 0
x-fb-debug: RaQOWzTnqd/Dc+mpUtT5Wjhrhs0dWYmzG17u+IpwTBnidKyMH2ivDplUyvXN7u86si1CZazOlwzPFY3s+IpaYA==
cache-control: public, max-age=31419491
expires: Thu, 15 Dec 2016 02:02:22 GMT
date: Thu, 17 Dec 2015 10:24:11 GMT
transfer-encoding: chunked
connection: close, Transfer-Encoding

<!DOCTYPE html><html><head><title>Facebook Cross-Domain Messaging helper</title></head><body><script>document.domain = 'facebook.com';__transform_includes = {};/** Path: html/js/downstream/polyfill/Array.es6.js */
/**
 * @generated SignedSource<<06a29dc8f57caa90ae7ea371dbdb5585>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2013-2014 Facebook, Inc.
 * @provides Array.es6
 * @polyfill
 */






if(!Array.from){
Array.from = function(arrayLike){
if(arrayLike == null){
throw new TypeError('Object is null or undefined');}



var mapFn=arguments[1];
var thisArg=arguments[2];

var C=this;
var items=Object(arrayLike);
var symbolIterator=typeof Symbol === 'function'?typeof Symbol === 'function'?
Symbol.iterator:'@@iterator':
'@@iterator';
var mapping=typeof mapFn === 'function';
var usingIterator=typeof items[symbolIterator] === 'function';
var key=0;
var ret;
var value;

if(usingIterator){
ret = typeof C === 'function'?
new C():
[];
var it=items[symbolIterator]();
var next;

while(!(next = it.next()).done) {
value = next.value;

if(mapping){
value = mapFn.call(thisArg,value,key);}


ret[key] = value;
key += 1;}


ret.length = key;
return ret;}


var len=items.length;
if(isNaN(len) || len < 0){
len = 0;}


ret = typeof C === 'function'?
new C(len):
new Array(len);

while(key < len) {
value = items[key];

if(mapping){
value = mapFn.call(thisArg,value,key);}


ret[key] = value;

key += 1;}


ret.length = key;
return ret;};}
/** Path: html/js/downstream/polyfill/Array.js */
/**
 * @generated SignedSource<<3d74861ee5f44a1b474af16e167c1ce5>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides Array
 * @polyfill old ie8
 */






if(!Array.isArray){
Array.isArray = function(object){
return Object.prototype.toString.call(object) == '[object Array]';};}
/** Path: html/js/downstream/polyfill/__DEV__.js */
/**
 * @generated SignedSource<<c0e2ef40ba979065e0c0e6ac71466766>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides __DEV__
 * @polyfill
 */


self['__DEV__'] = self['__DEV__'] || 0;

if(__DEV__){
if(self.__BOOTSTRAPPED__){
throw new Error(
'The JavaScript bootstrapping environment can be included only once. ' + 
'Fix the page including it multiple times.');}


self.__BOOTSTRAPPED__ = true;}
/** Path: html/js/downstream/polyfill/Array.prototype.es6.js */
/**
 * @generated SignedSource<<c845a46fa24efe4665c6d8b6289804e3>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides Array.prototype.es6
 * @polyfill
 * @requires __DEV__
 */





(function(undefined){
if(__DEV__){


try{
Object.defineProperty && Object.defineProperty(
Array.prototype,
'__ARRAY_ENUMERATION_GUARD__',
{
configurable:true,
enumerable:true,
get:function(){
console.error(
'Your code is broken! Do not iterate over arrays with ' + 
'for...in. See https://fburl.com/31944000 for more information.');}});}




catch(e) {}}





function findIndex(predicate,context){


















if(this == null){
throw new TypeError(
'Array.prototype.findIndex called on null or undefined');}


if(typeof predicate !== 'function'){
throw new TypeError('predicate must be a function');}

var list=Object(this);
var length=list.length >>> 0;
for(var i=0;i < length;i++) {
if(predicate.call(context,list[i],i,list)){
return i;}}


return -1;}


if(!Array.prototype.findIndex){
Array.prototype.findIndex = findIndex;}



if(!Array.prototype.find){
Array.prototype.find = function(predicate,context){


















if(this == null){
throw new TypeError('Array.prototype.find called on null or undefined');}

var index=findIndex.call(this,predicate,context);
return index === -1?undefined:this[index];};}




if(!Array.prototype.fill){
Array.prototype.fill = function(value){
if(this == null){
throw new TypeError('Array.prototype.fill called on null or undefined');}

var O=Object(this);
var len=O.length >>> 0;
var start=arguments[1];
var relativeStart=start >> 0;
var k=relativeStart < 0?
Math.max(len + relativeStart,0):
Math.min(relativeStart,len);
var end=arguments[2];
var relativeEnd=end === undefined?
len:
end >> 0;
var final=relativeEnd < 0?
Math.max(len + relativeEnd,0):
Math.min(relativeEnd,len);
while(k < final) {
O[k] = value;
k++;}

return O;};}})();
/** Path: html/js/downstream/polyfill/Array.prototype.js */
/**
 * @generated SignedSource<<f2ffdd85014fb0513a417f9ebaf60c16>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides Array.prototype
 * @polyfill old ie8
 */



(function(){
var _toString=Object.prototype.toString;


var boxedString=Object("a");
var splitString=boxedString[0] != "a";




function toInteger(n){
n = +n;
if(n !== n){
n = 0;}else 
if(n !== 0 && n !== 1 / 0 && n !== -(1 / 0)){
n = (n > 0 || -1) * Math.floor(Math.abs(n));}

return n;}





if(!Array.prototype.map){
Array.prototype.map = function(func,context){
if(typeof func != 'function'){
throw new TypeError();}


var ii;
var len=this.length;
var r=new Array(len);
for(ii = 0;ii < len;++ii) {
if(ii in this){
r[ii] = func.call(context,this[ii],ii,this);}}



return r;};}






if(!Array.prototype.forEach){
Array.prototype.forEach = function(func,context){
this.map(func,context);};}






if(!Array.prototype.filter){
Array.prototype.filter = function(func,context){
if(typeof func != 'function'){
throw new TypeError();}


var ii,val,len=this.length,r=[];
for(ii = 0;ii < len;++ii) {
if(ii in this){

val = this[ii];
if(func.call(context,val,ii,this)){
r.push(val);}}}




return r;};}






if(!Array.prototype.every){
Array.prototype.every = function(func,context){
if(typeof func != 'function'){
throw new TypeError();}

var t=new Object(this);
var len=t.length;
for(var ii=0;ii < len;ii++) {
if(ii in t){
if(!func.call(context,t[ii],ii,t)){
return false;}}}



return true;};}






if(!Array.prototype.some){
Array.prototype.some = function(func,context){
if(typeof func != 'function'){
throw new TypeError();}

var t=new Object(this);
var len=t.length;
for(var ii=0;ii < len;ii++) {
if(ii in t){
if(func.call(context,t[ii],ii,t)){
return true;}}}



return false;};}






if(!Array.prototype.indexOf){
Array.prototype.indexOf = function(val,index){
var len=this.length;
index |= 0;

if(index < 0){
index += len;}


for(;index < len;index++) {
if(index in this && this[index] === val){
return index;}}


return -1;};}





if(!Array.prototype.lastIndexOf || [0,1].lastIndexOf(0,-3) != -1){
Array.prototype.lastIndexOf = function(sought){
var self=splitString && _toString.call(this) == "[object String]"?
this.split(""):Object(this);
var length=self.length >>> 0;

if(!length){
return -1;}

var i=length - 1;
if(arguments.length > 1){
i = Math.min(i,toInteger(arguments[1]));}


i = i >= 0?i:length - Math.abs(i);
for(;i >= 0;i--) {
if(i in self && sought === self[i]){
return i;}}


return -1;};}






if(!Array.prototype.reduce){
Array.prototype.reduce = function(func){
if(typeof func !== 'function'){
throw new TypeError(func + ' is not a function');}

var len=this.length >>> 0;
var accumulator,k;
var kPresent=arguments.length === 2;

if(kPresent){
accumulator = arguments[1];}


for(k = 0;k < len;++k) {
if(this.hasOwnProperty(k)){
if(kPresent === false){
accumulator = this[k];
kPresent = true;}else 
{
accumulator = func(accumulator,this[k],k,this);}}}




if(kPresent === false){
throw new TypeError('Reduce of empty array with no initial value');}


return accumulator;};}






if(!Array.prototype.reduceRight){
Array.prototype.reduceRight = function(func){
if(typeof func !== 'function'){
throw new TypeError(func + ' is not a function');}

var len=this.length >>> 0;
var accumulator,k;
var kPresent=arguments.length === 2;

if(kPresent){
accumulator = arguments[1];}


for(k = len - 1;k > -1;--k) {
if(this.hasOwnProperty(k)){
if(kPresent === false){
accumulator = this[k];
kPresent = true;}else 
{
accumulator = func(accumulator,this[k],k,this);}}}




if(kPresent === false){
throw new TypeError('Reduce of empty array with no initial value');}


return accumulator;};}})();
/** Path: html/js/downstream/polyfill/Date.js */
/**
 * @generated SignedSource<<a7c0e73e265844da613e81e7accd804f>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides Date
 * @polyfill old ie8
 */






if(!Date.now){
Date.now = function(){
return new Date().getTime();};}
/** Path: html/js/downstream/polyfill/Date.prototype.toISOString.js */
/**
 * @generated SignedSource<<438383cdc99285265ba1977f6e944a3f>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides Date.prototype.toISOString
 * @polyfill old ie8
 */



(function(){



if(!Date.prototype.toISOString){
var pad=function(number){
if(number < 10){
return '0' + number;}

return number;};

Date.prototype.toISOString = function(){
if(!isFinite(this)){
throw new Error('Invalid time value');}

var year=this.getUTCFullYear();
year = (year < 0?'-':year > 9999?'+':'') + 
('00000' + Math.abs(year)).slice(0 <= year && year <= 9999?-4:-6);
return year + 
'-' + pad(this.getUTCMonth() + 1) + 
'-' + pad(this.getUTCDate()) + 
'T' + pad(this.getUTCHours()) + 
':' + pad(this.getUTCMinutes()) + 
':' + pad(this.getUTCSeconds()) + 
'.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2,5) + 
'Z';};}})();
/** Path: html/js/downstream/polyfill/Function.prototype.js */
/**
 * @generated SignedSource<<91140973eed3cc0e0cad2aeb8eb68cff>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides Function.prototype
 * @polyfill old ie8
 */









if(!Function.prototype.bind){
Function.prototype.bind = function(context){
if(typeof this != 'function'){
throw new TypeError('Bind must be called on a function');}


var target=this;
var slice=Array.prototype.slice;
var appliedArguments=slice.call(arguments,1);

function bound(){
var invokedAsConstructor=target.prototype && this instanceof target;
return target.apply(




!invokedAsConstructor && context || this,
appliedArguments.concat(slice.call(arguments)));}






bound.prototype = target.prototype;

bound.displayName = 'bound:' + (target.displayName || target.name || '(?)');
bound.toString = function toString(){
return 'bound: ' + target;};


return bound;};}
/** Path: html/js/downstream/polyfill/Function.prototype-shield.js */
/**
 * @generated SignedSource<<42da3b4bbbcca3ae4ca9683ccec5fbd6>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides Function.prototype-shield
 * @requires __DEV__ Function.prototype
 * @polyfill
 * @nostacktrace
 */







if(__DEV__){
(function(bind){
Function.prototype.bind = function(){
var bound=bind.apply(this,arguments);
bound.toString = bind.call(this.toString,this);
return bound;};})(

Function.prototype.bind);


if(Object.preventExtensions){
Object.preventExtensions(Function.prototype);}}
/** Path: html/js/downstream/polyfill/GenericFunctionVisitor.js */
/**
 * @generated SignedSource<<c08ae7cb38fd761137a759ab955d052d>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides GenericFunctionVisitor
 * @polyfill
 *
 * This file contains the functions used for the generic JS function
 * transform. Please add your functionality to these functions if you
 * want to wrap or annotate functions.
 *
 * Please see the DEX https://fburl.com/80903169 for more information.
 */


(function(){
var funcCalls={};

var createMeta=function(type,signature){
if(!type && !signature){
return null;}


var meta={};
if(typeof type !== 'undefined'){
meta.type = type;}


if(typeof signature !== 'undefined'){
meta.signature = signature;}


return meta;};


var getMeta=function(name,params){
return createMeta(
name && /^[A-Z]/.test(name)?name:undefined,
params && (params.params && params.params.length || params.returns)?
'function(' + (
params.params?params.params.map(function(param){
return (/\?/.test(param)?
'?' + param.replace('?',''):
param);}).
join(','):'') + 
')' + (
params.returns?':' + params.returns:''):
undefined);};



var noopAnnotator=function(fn,funcMeta,params){
return fn;};


var genericAnnotator=function(fn,funcMeta,params){
if('sourcemeta' in __transform_includes){
fn.__SMmeta = funcMeta;}


if('typechecks' in __transform_includes){
var meta=getMeta(funcMeta?funcMeta.name:undefined,params);
if(meta){
__w(fn,meta);}}


return fn;};


var noopBodyWrapper=function(scope,args,fn){
return fn.apply(scope,args);};


var typecheckBodyWrapper=function(scope,args,fn,params){
if(params && params.params){
__t.apply(scope,params.params);}


var result=fn.apply(scope,args);

if(params && params.returns){
__t([result,params.returns]);}


return result;};


var codeUsageBodyWrapper=function(scope,args,fn,params,funcMeta){
if(funcMeta){
if(!funcMeta.callId){


funcMeta.callId = funcMeta.module + ':' + (
funcMeta.line || 0) + ':' + (
funcMeta.column || 0);}

var key=funcMeta.callId;
funcCalls[key] = (funcCalls[key] || 0) + 1;}

return fn.apply(scope,args);};



if(typeof __transform_includes === 'undefined'){
__annotator = noopAnnotator;
__bodyWrapper = noopBodyWrapper;}else 
{
__annotator = genericAnnotator;

if('codeusage' in __transform_includes){
__annotator = noopAnnotator;
__bodyWrapper = codeUsageBodyWrapper;
__bodyWrapper.getCodeUsage = function(){return funcCalls;};
__bodyWrapper.clearCodeUsage = function(){funcCalls = {};};}else 
if('typechecks' in __transform_includes){
__bodyWrapper = typecheckBodyWrapper;}else 
{
__bodyWrapper = noopBodyWrapper;}}})();
/** Path: html/js/downstream/polyfill/JSON.js */
/**
 * @generated SignedSource<<766b5bb599d65417ed935f4a432ada70>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides JSON
 * @polyfill old ie8
 */


































































































































































var JSON;
if(!JSON){
JSON = {};}


(function(){
'use strict';

function f(n){

return n < 10?'0' + n:n;}


if(typeof Date.prototype.toJSON !== 'function'){

Date.prototype.toJSON = function(key){

return isFinite(this.valueOf())?
this.getUTCFullYear() + '-' + 
f(this.getUTCMonth() + 1) + '-' + 
f(this.getUTCDate()) + 'T' + 
f(this.getUTCHours()) + ':' + 
f(this.getUTCMinutes()) + ':' + 
f(this.getUTCSeconds()) + 'Z':
null;};


String.prototype.toJSON = 
Number.prototype.toJSON = 
Boolean.prototype.toJSON = function(key){
return this.valueOf();};}



var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
gap,
indent,
meta={
'\b':'\\b',
'\t':'\\t',
'\n':'\\n',
'\f':'\\f',
'\r':'\\r',
'"':'\\"',
'\\':'\\\\'},

rep;


function quote(string){






escapable.lastIndex = 0;
return escapable.test(string)?'"' + string.replace(escapable,function(a){
var c=meta[a];
return typeof c === 'string'?
c:
'\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);}) + 
'"':'"' + string + '"';}



function str(key,holder){



var i,
k,
v,
length,
mind=gap,
partial,
value=holder[key];



if(value && typeof value === 'object' && 
typeof value.toJSON === 'function'){
value = value.toJSON(key);}





if(typeof rep === 'function'){
value = rep.call(holder,key,value);}




switch(typeof value){
case 'string':
return quote(value);

case 'number':



return isFinite(value)?String(value):'null';

case 'boolean':
case 'null':





return String(value);




case 'object':




if(!value){
return 'null';}




gap += indent;
partial = [];



if(Object.prototype.toString.apply(value) === '[object Array]'){




length = value.length;
for(i = 0;i < length;i += 1) {
partial[i] = str(i,value) || 'null';}





v = partial.length === 0?
'[]':
gap?
'[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']':
'[' + partial.join(',') + ']';
gap = mind;
return v;}




if(rep && typeof rep === 'object'){
length = rep.length;
for(i = 0;i < length;i += 1) {
if(typeof rep[i] === 'string'){
k = rep[i];
v = str(k,value);
if(v){
partial.push(quote(k) + (gap?': ':':') + v);}}}}else 



{



for(k in value) {
if(Object.prototype.hasOwnProperty.call(value,k)){
v = str(k,value);
if(v){
partial.push(quote(k) + (gap?': ':':') + v);}}}}








v = partial.length === 0?
'{}':
gap?
'{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}':
'{' + partial.join(',') + '}';
gap = mind;
return v;}}





if(typeof JSON.stringify !== 'function'){
JSON.stringify = function(value,replacer,space){







var i;
gap = '';
indent = '';




if(typeof space === 'number'){
for(i = 0;i < space;i += 1) {
indent += ' ';}}else 




if(typeof space === 'string'){
indent = space;}





rep = replacer;
if(replacer && typeof replacer !== 'function' && (
typeof replacer !== 'object' || 
typeof replacer.length !== 'number')){
throw new Error('JSON.stringify');}





return str('',{'':value});};}






if(typeof JSON.parse !== 'function'){
JSON.parse = function(text,reviver){




var j;

function walk(holder,key){




var k,v,value=holder[key];
if(value && typeof value === 'object'){
for(k in value) {
if(Object.prototype.hasOwnProperty.call(value,k)){
v = walk(value,k);
if(v !== undefined){
value[k] = v;}else 
{
delete value[k];}}}}




return reviver.call(holder,key,value);}







text = String(text);
cx.lastIndex = 0;
if(cx.test(text)){
text = text.replace(cx,function(a){
return '\\u' + 
('0000' + a.charCodeAt(0).toString(16)).slice(-4);});}
















if(/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').
replace(/(?:^|:|,)(?:\s*\[)+/g,''))){






j = eval('(' + text + ')');




return typeof reviver === 'function'?
walk({'':j},''):
j;}




throw new SyntaxError('JSON.parse');};}})();
/** Path: html/js/downstream/polyfill/JSON-shield.js */
/**
 * @generated SignedSource<<37a026ba5b6604b83834fa39e335d349>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides JSON-shield
 * @requires JSON
 * @polyfill
 */













if(JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]'){
JSON.stringify = (function(stringify){

var u2028=/\u2028/g,
u2029=/\u2029/g;

return function JSONShildedStringify(any,replacer,space){
var json=stringify.call(this,any,replacer,space);
if(json){
if(-1 < json.indexOf('\u2028')){
json = json.replace(u2028,'\\u2028');}

if(-1 < json.indexOf('\u2029')){
json = json.replace(u2029,'\\u2029');}}


return json;};})(

JSON.stringify);}
/** Path: html/js/downstream/polyfill/JSON.parse.js */
/**
 * @generated SignedSource<<ee0431230aed92812d0682a8037bf853>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides JSON.parse
 * @polyfill webkit old
 *
 * Some older versions of webkit error when JSON.parse is passed a null value
 * rather than just returning null. https://codereview.chromium.org/2981004
 */

if(typeof JSON === 'object' && typeof JSON.parse === 'function'){
try{
JSON.parse(null);}
catch(e) {
JSON.originalParse = JSON.parse;
JSON.parse = function(jsonStr){
return jsonStr === null?null:JSON.originalParse(jsonStr);};}}
/** Path: html/js/downstream/polyfill/Math.es6.js */
/**
 * @generated SignedSource<<8d8b4a612acf0443787a9bbf789c40c2>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides Math.es6
 * @polyfill webkit old
 */

if(typeof Math.log2 !== 'function'){
Math.log2 = function(value){
return Math.log(value) / Math.LN2;};}



if(typeof Math.log10 !== 'function'){
Math.log10 = function(value){
return Math.log(value) / Math.LN10;};}
/** Path: html/js/downstream/polyfill/Number.es6.js */
/**
 * @generated SignedSource<<3c4a036a44398535bbeb73d657137f0e>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides Number.es6
 * @polyfill webkit old
 */

if(typeof Number.isFinite !== 'function'){
Number.isFinite = function(value){
return typeof value === 'number' && isFinite(value);};}



if(typeof Number.isNaN !== 'function'){
Number.isNaN = function(value){
return typeof value === 'number' && isNaN(value);};}



if(typeof Number.EPSILON !== 'number'){



Number.EPSILON = Math.pow(2,-52);}


if(typeof Number.MAX_SAFE_INTEGER !== 'number'){

Number.MAX_SAFE_INTEGER = Math.pow(2,53) - 1;}


if(typeof Number.MIN_SAFE_INTEGER !== 'number'){

Number.MIN_SAFE_INTEGER = -1 * Number.MAX_SAFE_INTEGER;}



if(typeof Number.isInteger !== 'function'){
Number.isInteger = function(value){
return Number.isFinite(value) && 
Math.floor(value) === value;};}



if(typeof Number.isSafeInteger !== 'function'){
Number.isSafeInteger = function(value){
return Number.isFinite(value) && 
value >= Number.MIN_SAFE_INTEGER && 
value <= Number.MAX_SAFE_INTEGER && 
Math.floor(value) === value;};}
/** Path: html/js/downstream/polyfill/Object.enumFix.js */
/**
 * @generated SignedSource<<78495975d94823dd12b7fd6bde966420>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides Object.enumFix
 * @polyfill old ie8
 */




(function(){

var hasDontEnumBug=!({toString:true}).propertyIsEnumerable('toString');
if(!hasDontEnumBug){

return;}


var dontEnumProperties=[
'toString',
'toLocaleString',
'valueOf',
'hasOwnProperty',
'isPrototypeOf',
'constructor'];





Object.keys = function(object){
var type=typeof object;
if(type != 'object' && type != 'function' || object === null){
throw new TypeError('Object.keys called on non-object');}


var hasOwnProperty=Object.prototype.hasOwnProperty;

var keys=[];
for(var key in object) {
if(hasOwnProperty.call(object,key)){
keys.push(key);}}



for(var i=0;i < dontEnumProperties.length;i++) {
var property=dontEnumProperties[i];
if(hasOwnProperty.call(object,property)){
keys.push(property);}}



return keys;};


Object.assign = function(target,sources){
if(target == null){
throw new TypeError('Object.assign target cannot be null or undefined');}

var to=Object(target);

var hasOwnProperty=Object.prototype.hasOwnProperty;

for(var nextIndex=1;nextIndex < arguments.length;nextIndex++) {
var nextSource=arguments[nextIndex];
if(nextSource == null){
continue;}


var from=Object(nextSource);

for(var key in from) {
if(hasOwnProperty.call(from,key)){
to[key] = from[key];}}



for(var i=0;i < dontEnumProperties.length;i++) {
var property=dontEnumProperties[i];
if(hasOwnProperty.call(from,property)){
to[property] = from[property];}}}




return to;};})();
/** Path: html/js/downstream/polyfill/Object.js */
/**
 * @generated SignedSource<<20b128eb5a802cf1e2386b5435df75f5>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides Object
 * @requires __DEV__
 * @polyfill old ie8
 */






if(!Object.create){
Object.create = function(proto){
if(__DEV__){
if(arguments.length > 1){
throw new Error(
'Object.create implementation supports only the first parameter');}}


var type=typeof proto;
if(type != 'object' && type != 'function'){
throw new TypeError('Object prototype may only be a Object or null');}

var F=function(){
if(proto === null){





this.__proto__ = proto;
delete this.__proto__;}};



F.prototype = proto;
return new F();};}








if(!Object.keys){



Object.keys = function object_keys_polyfill(object){
var type=typeof object;
if(type != 'object' && type != 'function' || object === null){
throw new TypeError('Object.keys called on non-object');}


var hasOwnProperty=Object.prototype.hasOwnProperty;

var keys=[];
for(var key in object) {
if(hasOwnProperty.call(object,key)){
keys.push(key);}}


return keys;};}








if(!Object.freeze){
Object.freeze = function(object){
return object;};}







if(!Object.seal){
Object.seal = function(object){
return object;};}
/** Path: html/js/downstream/polyfill/Object.es6.js */
/**
 * @generated SignedSource<<fd6a161ebc7c2dd5347ff590a7621560>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides Object.es6
 * @requires Object
 * @polyfill
 */



(function(){

if(Object.assign){
return;}


var hasOwnProperty=Object.prototype.hasOwnProperty;






var _assign;
if(Object.keys && Object.keys.name !== 'object_keys_polyfill'){
_assign = function(to,from){
var keys=Object.keys(from);
for(var i=0;i < keys.length;i++) {
to[keys[i]] = from[keys[i]];}};}else 


{
_assign = function(to,from){
for(var key in from) {
if(hasOwnProperty.call(from,key)){
to[key] = from[key];}}};}





Object.assign = function(target,sources){
if(target == null){
throw new TypeError('Object.assign target cannot be null or undefined');}


var to=Object(target);

for(var nextIndex=1;nextIndex < arguments.length;nextIndex++) {
var nextSource=arguments[nextIndex];
if(nextSource != null){
_assign(to,Object(nextSource));}}



return to;};})();
/** Path: html/js/downstream/polyfill/Object.is.js */
/**
 * @generated SignedSource<<69cd8ad401e7fa3094ffba09ee102375>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides Object.is
 * @polyfill old ie8 webkit
 */

(function(){



if(!Object.is){
Object.is = function(x,y){

if(x === y){

return x !== 0 || 1 / x === 1 / y;}else 
{

return x !== x && y !== y;}};}})();
/** Path: html/js/downstream/polyfill/Object.prototype.js */
/**
 * @generated SignedSource<<1099d3ce5ef78dbef6d02744ea081338>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides Object.prototype
 * @polyfill old
 */

if(({}).hasOwnProperty('__proto__')){






Object.prototype.hasOwnProperty = 
(function(old){
return function hasOwnProperty(k){
return k != '__proto__' && old.call(this,k);};})(

Object.prototype.hasOwnProperty);}
/** Path: html/js/downstream/polyfill/SourceMetaAnnotator.js */
/**
 * @generated SignedSource<<df4044cdfdf817c3c00a10c74c706394>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides SourceMetaAnnotator
 * @nostacktrace
 * @nosourcemeta
 * @polyfill
 */

(function(global){
global.__m = function(fn,meta){
fn.__SMmeta = meta;
return fn;};})(

this);
/** Path: html/js/downstream/polyfill/String.es6.js */
/**
 * @generated SignedSource<<96d040faf5a613a620d88dbb733616ed>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides String.es6
 * @polyfill
 */



if(typeof String.fromCodePoint !== 'function'){
String.fromCodePoint = function(){
'use strict';

var utf16Chars=[];for(var _len=arguments.length,codePoints=Array(_len),_key=0;_key < _len;_key++) {codePoints[_key] = arguments[_key];}

for(var i=0;i < codePoints.length;i++) {
var codePoint=Number(codePoints[i]);


if(
!isFinite(codePoint) || 
Math.floor(codePoint) != codePoint || 
codePoint < 0 || 0x10FFFF < codePoint)
{
throw RangeError('Invalid code point ' + codePoint);}


if(codePoint < 0x10000){
utf16Chars.push(String.fromCharCode(codePoint));}else 
{
codePoint -= 0x10000;
utf16Chars.push(
String.fromCharCode((codePoint >> 10) + 0xD800),
String.fromCharCode(codePoint % 0x400 + 0xDC00));}}




return utf16Chars.join('');};}
/** Path: html/js/downstream/polyfill/String.prototype.es6.js */
/**
 * @generated SignedSource<<f32ad8541ee5a10072e48f1342ba8a5e>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides String.prototype.es6
 * @polyfill
 */







if(!String.prototype.startsWith){
String.prototype.startsWith = function(search){
"use strict";
if(this == null){
throw TypeError();}

var string=String(this);
var pos=arguments.length > 1?
Number(arguments[1]) || 0:0;
var start=Math.min(Math.max(pos,0),string.length);
return string.indexOf(String(search),pos) == start;};}



if(!String.prototype.endsWith){
String.prototype.endsWith = function(search){
"use strict";
if(this == null){
throw TypeError();}

var string=String(this);
var stringLength=string.length;
var searchString=String(search);
var pos=arguments.length > 1?
Number(arguments[1]) || 0:stringLength;
var end=Math.min(Math.max(pos,0),stringLength);
var start=end - searchString.length;
if(start < 0){
return false;}

return string.lastIndexOf(searchString,start) == start;};}



if(!String.prototype.contains){
String.prototype.contains = function(search){
"use strict";
if(this == null){
throw TypeError();}

var string=String(this);
var pos=arguments.length > 1?
Number(arguments[1]) || 0:0;
return string.indexOf(String(search),pos) != -1;};}



if(!String.prototype.repeat){
String.prototype.repeat = function(count){
"use strict";
if(this == null){
throw TypeError();}

var string=String(this);
count = Number(count) || 0;
if(count < 0 || count === Infinity){
throw RangeError();}

if(count === 1){
return string;}

var result='';
while(count) {
if(count & 1){
result += string;}

if(count >>= 1){
string += string;}}


return result;};}



if(!String.prototype.codePointAt){
String.prototype.codePointAt = function(pos){
'use strict';


if(this == null){
throw TypeError('Invalid context: ' + this);}


var str=String(this);
var size=str.length;

pos = Number(pos) || 0;
if(pos < 0 || size <= pos){
return undefined;}


var chr1=str.charCodeAt(pos);
if(0xD800 <= chr1 && chr1 <= 0xDBFF && size > pos + 1){
var chr2=str.charCodeAt(pos + 1);
if(0xDC00 <= chr2 && chr2 <= 0xDFFF){
return (chr1 - 0xD800) * 0x400 + chr2 - 0xDC00 + 0x10000;}}


return chr1;};}
/** Path: html/js/downstream/polyfill/String.prototype.es7.js */
/**
 * @generated SignedSource<<3e0d739b06a6ca09a9e89081c936f452>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides String.prototype.es7
 * @polyfill
 */

if(!String.prototype.trimLeft){
String.prototype.trimLeft = function(){
return this.replace(/^\s+/,'');};}



if(!String.prototype.trimRight){
String.prototype.trimRight = function(){
return this.replace(/\s+$/,'');};}
/** Path: html/js/downstream/polyfill/String.prototype.js */
/**
 * @generated SignedSource<<262c035c4b7de39409303e8080da1426>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides String.prototype
 * @polyfill old ie8
 */






if(!String.prototype.trim){
String.prototype.trim = function(){
if(this == null){
throw new TypeError('String.prototype.trim called on null or undefined');}

return String.prototype.replace.call(this,/^\s+|\s+$/g,'');};}
/** Path: html/js/downstream/polyfill/String.prototype.split.js */
/**
 * @generated SignedSource<<705bc65984c522890557702a2e40e5c2>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides String.prototype.split
 * @polyfill old ie8
 * @nolint
 */

(function(){
































var undef;
var nativeSplit=String.prototype.split;

var compliantExecNpcg=/()??/.exec("")[1] === undef;

String.prototype.split = function(separator,limit){
var str=this;


if(Object.prototype.toString.call(separator) !== "[object RegExp]"){
return nativeSplit.call(str,separator,limit);}

var output=[],
flags=(separator.ignoreCase?"i":"") + (
separator.multiline?"m":"") + (
separator.extended?"x":"") + (
separator.sticky?"y":""),
lastLastIndex=0,

separator=new RegExp(separator.source,flags + "g"),
separator2,match,lastIndex,lastLength;
str += "";
if(!compliantExecNpcg){

separator2 = new RegExp("^" + separator.source + "$(?!\\s)",flags);}








limit = limit === undef?
-1 >>> 0:
limit >>> 0;
while(match = separator.exec(str)) {

lastIndex = match.index + match[0].length;
if(lastIndex > lastLastIndex){
output.push(str.slice(lastLastIndex,match.index));


if(!compliantExecNpcg && match.length > 1){
match[0].replace(separator2,function(){
for(var i=1;i < arguments.length - 2;i++) {
if(arguments[i] === undef){
match[i] = undef;}}});}




if(match.length > 1 && match.index < str.length){
Array.prototype.push.apply(output,match.slice(1));}

lastLength = match[0].length;
lastLastIndex = lastIndex;
if(output.length >= limit){
break;}}


if(separator.lastIndex === match.index){
separator.lastIndex++;}}


if(lastLastIndex === str.length){
if(lastLength || !separator.test("")){
output.push("");}}else 

{
output.push(str.slice(lastLastIndex));}

return output.length > limit?output.slice(0,limit):output;};})();
/** Path: html/js/downstream/polyfill/TypeChecker.js */
/**
 * @generated SignedSource<<664308d5ae46929cca6b3ea8971dcd9f>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * This is a very basic typechecker that does primitives as well as boxed
 * versions of the primitives.
 *
 * @provides TypeChecker
 * @nostacktrace
 * @polyfill
 */


(function(){
var handler;
var currentType=[];
var toStringFunc=Object.prototype.toString;
var paused=false;
var disabled=false;


var nextType;
var nextValue;




var typeInterfaceMap={
'HTMLElement':{'DOMEventTarget':true,'DOMNode':true},
'DOMElement':{'DOMEventTarget':true,'DOMNode':true},
'DOMDocument':{'DOMEventTarget':true,'DOMNode':true},
'DocumentFragment':{
'DOMElement':true,
'DOMEventTarget':true,
'DOMNode':true},

'DOMWindow':{'DOMEventTarget':true},
'DOMTextNode':{'DOMNode':true},
'Comment':{'DOMNode':true},
'file':{'blob':true},
'worker':{'DOMEventTarget':true},

'Set':{'set':true},
'Map':{'map':true},
'FbtResult':{'Fbt':true},
'string':{'Fbt':true},
'array':{'Fbt':true}};







function stringType(value){
return toStringFunc.call(value).slice(8,-1);}


function getTagName(string){
switch(string){
case 'A':
return 'Anchor';
case 'IMG':
return 'Image';
case 'TEXTAREA':
return 'TextArea';}

return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();}





function isDOMNode(type,value,nodeType){
if(type === 'function'){


if(typeof value.call !== 'undefined'){
return false;}}else 

if(type !== 'object'){
return false;}


return typeof value.nodeName === 'string' && value.nodeType === nodeType;}





function getObjectType(type,value,node,checkNextNode){
nextValue = null;


var toStringType=stringType(value);
if(value === null){
type = 'null';}else 
if(toStringType === 'Function'){
if(node === '$Class'){

type = '$Class';
if(checkNextNode && value.__TCmeta && value.__TCmeta.type){
nextType = value.__TCmeta.type;}}else 

{
if(value.__TCmeta){

type = node === 'function'?'function':value.__TCmeta.signature;}else 
{

type = node.indexOf('function') === 0?node:'function';}}}else 


if(type === 'object' || type === 'function'){
var constructor=value.constructor;
if(constructor && constructor.__TCmeta){


if(node === 'object'){
type = 'object';}else 
{
type = constructor.__TCmeta.type;
while(constructor && constructor.__TCmeta) {
if(constructor.__TCmeta.type == node){
type = node;
break;}

constructor = constructor.__TCmeta.superClass;}}}else 


if(typeof value.nodeType === 'number' && 
typeof value.nodeName === 'string'){


switch(value.nodeType){
case 1:
if(node === 'HTMLElement'){

type = 'HTMLElement';}else 
{
type = 'HTML' + getTagName(value.nodeName) + 'Element';
typeInterfaceMap[type] = typeInterfaceMap['HTMLElement'];}

break;
case 3:type = 'DOMTextNode';break;
case 8:type = 'Comment';break;
case 9:type = 'DOMDocument';break;
case 11:type = 'DocumentFragment';break;}}else 

if(value == value.window && value == value.self){
type = 'DOMWindow';}else 
if(toStringType == 'XMLHttpRequest' || 
'setRequestHeader' in value){

type = 'XMLHttpRequest';}else 
{

switch(toStringType){
case 'Error':

type = node === 'Error'?
'Error':
value.name;
break;
case 'Array':
if(checkNextNode && value.length){
nextValue = value[0];}

type = toStringType.toLowerCase();
break;
case 'Object':
if(node === 'Set' && value['@@__IMMUTABLE_SET__@@'] || 
node === 'Map' && value['@@__IMMUTABLE_MAP__@@']){
type = node;}else 
{
if(checkNextNode){
for(var key in value) {
if(value.hasOwnProperty(key)){
nextValue = value[key];
break;}}}



type = toStringType.toLowerCase();}

break;
case 'RegExp':
case 'Date':
case 'Blob':
case 'File':
case 'FileList':
case 'Worker':
case 'Map':
case 'Set':

case 'Uint8Array':
case 'Int8Array':
case 'Uint16Array':
case 'Int16Array':
case 'Uint32Array':
case 'Int32Array':
case 'Float32Array':
case 'Float64Array':
type = toStringType.toLowerCase();
break;}}}



return type;}











function equals(value,node){



var nullable=node.charAt(0) === '?';


if(value == null){
currentType.push(typeof value === 'undefined'?'undefined':'null');
return nullable;}else 
if(nullable){
node = node.substring(1);}


var type=typeof value;

if(node === 'Fbt' && type === 'string'){
return true;}


switch(type){
case 'boolean':
case 'number':
case 'string':


currentType.push(type);
return node === type;}





var simpleMatch=false;
switch(node){
case 'function':

simpleMatch = type === 'function' && typeof value.call === 'function';
break;
case 'object':

simpleMatch = type === 'object' && stringType(value) === 'Object';
break;
case 'array':
simpleMatch = type === 'object' && stringType(value) === 'Array';
break;
case 'promise':
simpleMatch = type === 'object' && typeof value.then === 'function';
break;
case 'HTMLElement':
simpleMatch = isDOMNode(type,value,1);
break;
case 'DOMTextNode':
simpleMatch = isDOMNode(type,value,3);
break;
case 'Iterator':
simpleMatch = type === 'object' && typeof value.next === 'function';
break;
case 'IteratorResult':
simpleMatch = type === 'object' && typeof value.done === 'boolean';
break;
case 'OrderedMap':

case 'ImmOrderedMap':
simpleMatch = type === 'object' && 
value['@@__IMMUTABLE_ORDERED__@@'] && 
value['@@__IMMUTABLE_MAP__@@'];
break;
case 'OrderedSet':

case 'ImmOrderedSet':
simpleMatch = type === 'object' && 
value['@@__IMMUTABLE_ORDERED__@@'] && 
value['@@__IMMUTABLE_SET__@@'];
break;
case 'ImmMap':
simpleMatch = type === 'object' && value['@@__IMMUTABLE_MAP__@@'];
break;
case 'ImmSet':
simpleMatch = type === 'object' && value['@@__IMMUTABLE_SET__@@'];
break;
case 'List':
simpleMatch = type === 'object' && value['@@__IMMUTABLE_LIST__@@'];
break;}


if(simpleMatch){
currentType.push(node);
return true;}



var indexOfFirstAngle=node.indexOf('<');
var nextNode;

if(indexOfFirstAngle !== -1 && node.indexOf('function') !== 0){
nextNode = node.substring(indexOfFirstAngle + 1,node.lastIndexOf('>'));
node = node.substring(0,indexOfFirstAngle);}



type = getObjectType(type,value,node,!!nextNode);



var interfaces;
if(type !== node && (interfaces = typeInterfaceMap[type])){
if(interfaces[node]){
type = node;}}




currentType.push(type);

if(node !== type){
return false;}



if(nextNode){

if(nextType && nextNode !== nextType){
return false;}


if(nextValue && !equals(nextValue,nextNode)){
return false;}}


return true;}







function matches(value,node){
if(node.indexOf('|') === -1){
currentType.length = 0;
return equals(value,node);}else 
{
var nodes=node.split('|');
for(var i=0;i < nodes.length;i++) {
currentType.length = 0;
if(equals(value,nodes[i])){
return true;}}}



return false;}










function check(){
if(!paused && !disabled){
var args=arguments;
var ii=args.length;
while(ii--) {
var value=args[ii][0];
var expected=args[ii][1];
var name=args[ii][2] || 'return value';

if(!matches(value,expected)){
var actual=currentType.shift();
while(currentType.length) {
actual += '<' + currentType.shift() + '>';}


var isReturn=!!args[ii][2];
var stackBoundary;
try{
stackBoundary = isReturn?arguments.callee.caller:check;}
catch(e) {}




var message=
'Type Mismatch for ' + name + ': expected `' + expected + '`, ' + 
'actual `' + actual + '` (' + toStringFunc.call(value) + ').';




if(actual === 'object' && 
expected.match(/^[A-Z]/) && 
!value.__TCmeta){
message += 
' Check the constructor\'s module is marked as typechecked -' + 
' see http://fburl.com/typechecks for more information.';}


var error=new TypeError(message);

if(Error.captureStackTrace){
Error.captureStackTrace(error,stackBoundary || check);}else 
{


error.framesToPop = isReturn?2:1;}


if(typeof handler == 'function'){
handler(error);

paused = true;

setTimeout(function(){return paused = false;},0);}else 
if(handler === 'throw'){
throw error;}}}}






return arguments[0][0];}






check.setHandler = function(fn){
handler = fn;};


check.disable = function(){
disabled = true;};





function annotate(fn,meta){
meta.superClass = fn.__superConstructor__;
fn.__TCmeta = meta;
return fn;}



__t = check;
__w = annotate;})();
/** Path: html/js/downstream/polyfill/babelHelpers.js */
/**
 * @generated SignedSource<<cf8117c4c04d0953521536a0b5937d41>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @provides babelHelpers
 * @requires Function.prototype
 * @requires Object.es6
 * @polyfill
 */




(function(global){

var babelHelpers=global.babelHelpers = {};
var hasOwn=Object.prototype.hasOwnProperty;




babelHelpers.inherits = function(subClass,superClass){
Object.assign(subClass,superClass);
subClass.prototype = Object.create(superClass && superClass.prototype);
subClass.prototype.constructor = subClass;
subClass.__superConstructor__ = superClass;
return superClass;};





babelHelpers._extends = Object.assign;




babelHelpers.objectWithoutProperties = function(obj,keys){
var target={};
for(var i in obj) {
if(!hasOwn.call(obj,i) || keys.indexOf(i) >= 0){
continue;}

target[i] = obj[i];}

return target;};





babelHelpers.taggedTemplateLiteralLoose = function(strings,raw){
strings.raw = raw;
return strings;};





babelHelpers.bind = Function.prototype.bind;})(

typeof global === 'undefined'?self:global);
/** Path: html/js/downstream/polyfill/console.js */
/**
 * @generated SignedSource<<139758abe1c6a373d34a25bdf3899598>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * @provides console
 * @polyfill old ie8
 */





if(typeof console == 'undefined'){
(function(){
function empty(){}
console = {
log:empty,
info:empty,
warn:empty,
debug:empty,
dir:empty,
error:empty};})();}
/** Path: html/js/downstream/require/require-lite.js */
/**
 * @generated SignedSource<<ea19c112b290e539c1a3a062502c6e7d>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * This is a lightweigh implementation of require and __d which is used by the
 * JavaScript SDK.
 * This implementation requires that all modules are defined in order by how
 * they depend on each other, so that it is guaranteed that no module will
 * require a module that has not got all of its dependencies satisfied.
 * This means that it is generally only usable in cases where all resources are
 * resolved and packaged together.
 *
 * @providesInline commonjs-require-lite
 * @typechecks
 */

var require,__d;
(function(global){
var map={},resolved={};
var defaultDeps=
['global','require','requireDynamic','requireLazy','module','exports'];

require = function(id,soft){
if(resolved.hasOwnProperty(id)){
return resolved[id];}

if(!map.hasOwnProperty(id)){
if(soft){
return null;}

throw new Error('Module ' + id + ' has not been defined');}

var module=map[id],
deps=module.deps,
length=module.factory.length,
dep,
args=[];

for(var i=0;i < length;i++) {
switch(deps[i]){
case 'module':dep = module;break;
case 'exports':dep = module.exports;break;
case 'global':dep = global;break;
case 'require':dep = require;break;
case 'requireDynamic':dep = require;break;
case 'requireLazy':dep = null;break;
default:dep = require.call(null,deps[i]);}

args.push(dep);}

module.factory.apply(global,args);
resolved[id] = module.exports;
return module.exports;};




require.__markCompiled = function(){};

__d = function(id,deps,factory,
_special){
if(typeof factory == 'function'){
map[id] = {
factory:factory,
deps:defaultDeps.concat(deps),
exports:{}};



if(_special === 3){
require.call(null,id);}}else 

{
resolved[id] = factory;}};})(


this);
/** Path: html/js/downstream/core/QueryString.js */
/**
 * @generated SignedSource<<3c580169526e75a639cbb34eac6ab1c7>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * Provides QueryString encoding/decoding.
 *
 * @providesModule QueryString
 * @typechecks
 *
 */__d('QueryString',[],__annotator(function $module_QueryString(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();






function encode(bag){return __bodyWrapper(this,arguments,function(){
var pairs=[];
Object.keys(bag).sort().forEach(__annotator(function(key){
var value=bag[key];

if(typeof value === 'undefined'){
return;}


if(value === null){
pairs.push(key);
return;}


pairs.push(encodeURIComponent(key) + 
'=' + 
encodeURIComponent(value));},{'module':'QueryString','line':31,'column':34}));

return pairs.join('&');},{params:[[bag,'object','bag']],returns:'string'});}__annotator(encode,{'module':'QueryString','line':29,'column':0,'name':'encode'},{params:['object'],returns:'string'});





function decode(str,strict){return __bodyWrapper(this,arguments,function(){
var data={};
if(str === ''){
return data;}


var pairs=str.split('&');
for(var i=0;i < pairs.length;i++) {
var pair=pairs[i].split('=',2);
var key=decodeURIComponent(pair[0]);
if(strict && data.hasOwnProperty(key)){
throw new URIError('Duplicate key: ' + key);}

data[key] = pair.length === 2?
decodeURIComponent(pair[1]):
null;}

return data;},{params:[[str,'string','str'],[strict,'?boolean','strict']],returns:'object'});}__annotator(decode,{'module':'QueryString','line':53,'column':0,'name':'decode'},{params:['string','?boolean'],returns:'object'});







function appendToUrl(url,params){return __bodyWrapper(this,arguments,function(){
return url + (
url.indexOf('?') !== -1?'&':'?') + (
typeof params === 'string'?
params:
QueryString.encode(params));},{params:[[url,'string','url']],returns:'string'});}__annotator(appendToUrl,{'module':'QueryString','line':78,'column':0,'name':'appendToUrl'},{params:['string'],returns:'string'});


var QueryString={
encode:encode,
decode:decode,
appendToUrl:appendToUrl};


module.exports = QueryString;},{'module':'QueryString','line':0,'column':0,'name':'$module_QueryString'}),null);
/** Path: html/js/modules/resolveWindow.js */
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This function takes a path describing the relation between two windows,
 * and tries to return a reference to the target window.
 *
 * @providesModule resolveWindow
 */__d('resolveWindow',[],__annotator(function $module_resolveWindow(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();









function resolveWindow(path){
var node=window;
var parts=path.split('.');

try{
for(var i=0;i < parts.length;i++) {
var part=parts[i];

var matches=/^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(part);

if(matches){
node = node.frames[matches[1]];}else 
if(part === 'opener' || part === 'parent' || part === 'top'){
node = node[part];}else 
{
return null;}}}


catch(securityOrReferenceException) {
return null;}


return node;}__annotator(resolveWindow,{'module':'resolveWindow','line':18,'column':0,'name':'resolveWindow'});


module.exports = resolveWindow;},{'module':'resolveWindow','line':0,'column':0,'name':'$module_resolveWindow'}),null);
/** Path: html/js/downstream/core/sprintf.js */
/**
 * @generated SignedSource<<18a0f7edbae549327a1a25562bbc6af6>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule sprintf
 * @typechecks
 */__d("sprintf",[],__annotator(function $module_sprintf(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();










function sprintf(format){for(var _len=arguments.length,args=Array(_len > 1?_len - 1:0),_key=1;_key < _len;_key++) {args[_key - 1] = arguments[_key];}return __bodyWrapper(this,arguments,function(){
var index=0;
return format.replace(/%s/g,__annotator(function(match){return args[index++];},{"module":"sprintf","line":32,"column":31}));},{params:[[format,"string","format"]],returns:"string"});}__annotator(sprintf,{"module":"sprintf","line":30,"column":0,"name":"sprintf"},{params:["string"],returns:"string"});


module.exports = sprintf;},{"module":"sprintf","line":0,"column":0,"name":"$module_sprintf"}),null);
/** Path: html/js/downstream/log/Log.js */
/**
 * @generated SignedSource<<d4a452ce2c550e5b482851504031ea4d>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * Module that provides a low level Log infrastructure.
 * We do not expose a generic log method as we want the
 * developers to be explicit about the meaning of the
 * messages logged.
 * Log.info and Log.error etc will show clear intent to
 * anybody reading the log or the code.
 *
 * @providesModule Log
 * @typechecks
 *
 */__d('Log',['sprintf'],__annotator(function $module_Log(global,require,requireDynamic,requireLazy,module,exports,sprintf){if(require.__markCompiled)require.__markCompiled();



var Level={
DEBUG:3,
INFO:2,
WARNING:1,
ERROR:0};


function log(name,level){return __bodyWrapper(this,arguments,function(){
var args=Array.prototype.slice.call(arguments,2);
var msg=sprintf.apply(null,args);
var console=window.console;
if(console && Log.level >= level){
console[name in console?name:'log'](msg);}},{params:[[name,'string','name'],[level,'number','level']]});}__annotator(log,{'module':'Log','line':38,'column':0,'name':'log'},{params:['string','number']});



var Log={



level:__DEV__?3:-1,






Level:Level,








debug:log.bind(null,'debug',Level.DEBUG),
info:log.bind(null,'info',Level.INFO),
warn:log.bind(null,'warn',Level.WARNING),
error:log.bind(null,'error',Level.ERROR)};

module.exports = Log;},{'module':'Log','line':0,'column':0,'name':'$module_Log'}),null);
/** Path: html/js/downstream/error/wrapFunction.js */
/**
 * @generated SignedSource<<8f7c8d142fb7f53d5f7a5b63e2904a79>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule wrapFunction
 * @typechecks
 *
 * This module has a very generic purpose, to either act as an identity
 * function, or to return a function that when invoked will invoke the
 * original function wrapped inside a handler.
 *
 * Typical use of this is when you want to inject a layer of error handling,
 * logging, or similar around the invokation of a function, but don't want
 * the calling module to be coupled to the implementation.
 */__d('wrapFunction',[],__annotator(function $module_wrapFunction(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();

var wrappers={};
function wrapFunction(fn,type,source){return __bodyWrapper(this,arguments,function()
{
type = type || 'default';

return __annotator(function(){
var callee=type in wrappers?
wrappers[type](fn,source):
fn;

return callee.apply(this,arguments);},{'module':'wrapFunction','line':34,'column':9});},{params:[[fn,'function','fn'],[type,'?string','type'],[source,'?string','source']],returns:'function'});}__annotator(wrapFunction,{'module':'wrapFunction','line':30,'column':0,'name':'wrapFunction'},{params:['function','?string','?string'],returns:'function'});



wrapFunction.setWrapper = __annotator(function(fn,type){return __bodyWrapper(this,arguments,function(){
type = type || 'default';
wrappers[type] = fn;},{params:[[fn,'function','fn'],[type,'?string','type']]});},{'module':'wrapFunction','line':43,'column':26},{params:['function','?string']});


module.exports = wrapFunction;},{'module':'wrapFunction','line':0,'column':0,'name':'$module_wrapFunction'}),null);
/** Path: html/js/modules/DOMEventListener.js */
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This module provides a small and clean abstraction of the two main
 * methods available for attaching events.
 * This module does not provide a unified abstraction of the 'event'
 * itself, for that see the DOMEvent module.
 *
 * Do not extend this with further dependencies as it is designed to be a
 * low-level component usable for composition.
 *
 * @providesModule DOMEventListener
 * @typechecks
 */__d('DOMEventListener',['wrapFunction'],__annotator(function $module_DOMEventListener(global,require,requireDynamic,requireLazy,module,exports,wrapFunction){if(require.__markCompiled)require.__markCompiled();



var add,remove;

if(window.addEventListener){


add = __annotator(function(target,name,listener){return __bodyWrapper(this,arguments,function(){
listener.wrapper = 
wrapFunction(listener,'entry','DOMEventListener.add ' + name);
target.addEventListener(name,listener.wrapper,false);},{params:[[name,'string','name'],[listener,'function','listener']]});},{'module':'DOMEventListener','line':23,'column':8},{params:['string','function']});

remove = __annotator(function(target,name,listener){return __bodyWrapper(this,arguments,function(){
target.removeEventListener(name,listener.wrapper,false);},{params:[[name,'string','name'],[listener,'function','listener']]});},{'module':'DOMEventListener','line':28,'column':11},{params:['string','function']});}else 


if(window.attachEvent){


add = __annotator(function(target,name,listener){return __bodyWrapper(this,arguments,function(){
listener.wrapper = 
wrapFunction(listener,'entry','DOMEventListener.add ' + name);
target.attachEvent('on' + name,listener.wrapper);},{params:[[name,'string','name'],[listener,'function','listener']]});},{'module':'DOMEventListener','line':35,'column':8},{params:['string','function']});

remove = __annotator(function(target,name,listener){return __bodyWrapper(this,arguments,function(){
target.detachEvent('on' + name,listener.wrapper);},{params:[[name,'string','name'],[listener,'function','listener']]});},{'module':'DOMEventListener','line':40,'column':11},{params:['string','function']});}else 


{
remove = add = __annotator(function(){},{'module':'DOMEventListener','line':45,'column':17});}


var DOMEventListener={











add:__annotator(function(target,name,listener){return __bodyWrapper(this,arguments,function(){


add(target,name,listener);
return {



remove:__annotator(function(){
remove(target,name,listener);
target = null;},{'module':'DOMEventListener','line':68,'column':14})};},{params:[[name,'string','name'],[listener,'function','listener']]});},{'module':'DOMEventListener','line':60,'column':7},{params:['string','function']}),











remove:remove};


module.exports = DOMEventListener;},{'module':'DOMEventListener','line':0,'column':0,'name':'$module_DOMEventListener'}),null);
/** Path: html/js/sdk/DOMWrapper.js */
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This module provides access to the DOM through an abstracted interface.
 *
 * An example of why we would do this is so that we can easily swap out the
 * node being used as the root element without updating multiple code paths,
 * something that facilitates easy testing of relying modules.
 *
 * @providesModule DOMWrapper
 * @typechecks
 */__d("DOMWrapper",[],__annotator(function $module_DOMWrapper(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();

var rootElement,
windowRef;



var DOMWrapper={
setRoot:__annotator(function(root){return __bodyWrapper(this,arguments,function(){
rootElement = root;},{params:[[root,"?HTMLElement","root"]]});},{"module":"DOMWrapper","line":20,"column":11},{params:["?HTMLElement"]}),

getRoot:__annotator(function(){return __bodyWrapper(this,arguments,function(){
return rootElement || document.body;},{returns:"HTMLElement"});},{"module":"DOMWrapper","line":23,"column":11},{returns:"HTMLElement"}),

setWindow:__annotator(function(win){
windowRef = win;},{"module":"DOMWrapper","line":26,"column":13}),

getWindow:__annotator(function(){
return windowRef || self;},{"module":"DOMWrapper","line":29,"column":13})};



module.exports = DOMWrapper;},{"module":"DOMWrapper","line":0,"column":0,"name":"$module_DOMWrapper"}),null);
/** Path: html/js/downstream/core/emptyFunction.js */
/**
 * @generated SignedSource<<917fb0b0785cff415a4d268b652c4f38>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule emptyFunction
 */__d("emptyFunction",[],__annotator(function $module_emptyFunction(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();

function makeEmptyFunction(arg){
return __annotator(function(){
return arg;},{"module":"emptyFunction","line":21,"column":9});}__annotator(makeEmptyFunction,{"module":"emptyFunction","line":20,"column":0,"name":"makeEmptyFunction"});








function emptyFunction(){}__annotator(emptyFunction,{"module":"emptyFunction","line":31,"column":0,"name":"emptyFunction"});

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = __annotator(function(){return this;},{"module":"emptyFunction","line":37,"column":32});
emptyFunction.thatReturnsArgument = __annotator(function(arg){return arg;},{"module":"emptyFunction","line":38,"column":36});

module.exports = emptyFunction;},{"module":"emptyFunction","line":0,"column":0,"name":"$module_emptyFunction"}),null);
/** Path: html/js/modules/UserAgent_DEPRECATED.js */
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */__d('UserAgent_DEPRECATED',[],__annotator(function $module_UserAgent_DEPRECATED(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();









































var _populated=false;


var _ie,_firefox,_opera,_webkit,_chrome;


var _ie_real_version;


var _osx,_windows,_linux,_android;


var _win64;


var _iphone,_ipad,_native;

var _mobile;

function _populate(){
if(_populated){
return;}


_populated = true;






var uas=navigator.userAgent;
var agent=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
var os=/(Mac OS X)|(Windows)|(Linux)/.exec(uas);

_iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
_ipad = /\b(iP[ao]d)/.exec(uas);
_android = /Android/i.exec(uas);
_native = /FBAN\/\w+;/i.exec(uas);
_mobile = /Mobile/i.exec(uas);






_win64 = !!/Win64/.exec(uas);

if(agent){
_ie = agent[1]?parseFloat(agent[1]):
agent[5]?parseFloat(agent[5]):NaN;

if(_ie && document && document.documentMode){
_ie = document.documentMode;}


var trident=/(?:Trident\/(\d+.\d+))/.exec(uas);
_ie_real_version = trident?parseFloat(trident[1]) + 4:_ie;

_firefox = agent[2]?parseFloat(agent[2]):NaN;
_opera = agent[3]?parseFloat(agent[3]):NaN;
_webkit = agent[4]?parseFloat(agent[4]):NaN;
if(_webkit){



agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
_chrome = agent && agent[1]?parseFloat(agent[1]):NaN;}else 
{
_chrome = NaN;}}else 

{
_ie = _firefox = _opera = _chrome = _webkit = NaN;}


if(os){
if(os[1]){





var ver=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

_osx = ver?parseFloat(ver[1].replace('_','.')):true;}else 
{
_osx = false;}

_windows = !!os[2];
_linux = !!os[3];}else 
{
_osx = _windows = _linux = false;}}__annotator(_populate,{'module':'UserAgent_DEPRECATED','line':66,'column':0,'name':'_populate'});



var UserAgent_DEPRECATED={







ie:__annotator(function(){
return _populate() || _ie;},{'module':'UserAgent_DEPRECATED','line':150,'column':6}),








ieCompatibilityMode:__annotator(function(){
return _populate() || _ie_real_version > _ie;},{'module':'UserAgent_DEPRECATED','line':160,'column':23}),








ie64:__annotator(function(){
return UserAgent_DEPRECATED.ie() && _win64;},{'module':'UserAgent_DEPRECATED','line':170,'column':8}),








firefox:__annotator(function(){
return _populate() || _firefox;},{'module':'UserAgent_DEPRECATED','line':180,'column':11}),









opera:__annotator(function(){
return _populate() || _opera;},{'module':'UserAgent_DEPRECATED','line':191,'column':9}),









webkit:__annotator(function(){
return _populate() || _webkit;},{'module':'UserAgent_DEPRECATED','line':202,'column':10}),






safari:__annotator(function(){
return UserAgent_DEPRECATED.webkit();},{'module':'UserAgent_DEPRECATED','line':210,'column':10}),








chrome:__annotator(function(){
return _populate() || _chrome;},{'module':'UserAgent_DEPRECATED','line':220,'column':11}),








windows:__annotator(function(){
return _populate() || _windows;},{'module':'UserAgent_DEPRECATED','line':230,'column':11}),









osx:__annotator(function(){
return _populate() || _osx;},{'module':'UserAgent_DEPRECATED','line':241,'column':7}),







linux:__annotator(function(){
return _populate() || _linux;},{'module':'UserAgent_DEPRECATED','line':250,'column':9}),








iphone:__annotator(function(){
return _populate() || _iphone;},{'module':'UserAgent_DEPRECATED','line':260,'column':10}),


mobile:__annotator(function(){
return _populate() || (_iphone || _ipad || _android || _mobile);},{'module':'UserAgent_DEPRECATED','line':264,'column':10}),


nativeApp:__annotator(function(){

return _populate() || _native;},{'module':'UserAgent_DEPRECATED','line':268,'column':13}),


android:__annotator(function(){
return _populate() || _android;},{'module':'UserAgent_DEPRECATED','line':273,'column':11}),


ipad:__annotator(function(){
return _populate() || _ipad;},{'module':'UserAgent_DEPRECATED','line':277,'column':8})};



module.exports = UserAgent_DEPRECATED;},{'module':'UserAgent_DEPRECATED','line':0,'column':0,'name':'$module_UserAgent_DEPRECATED'}),null);
/** Path: html/js/downstream/core/guid.js */
/**
 * @generated SignedSource<<5b6ab14b57650c9f29cf761e99f755ed>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * Module that provides a function for creating a unique identifier.
 * The returned value does not conform to the GUID standard, but should
 * be globally unique in the context of the browser.
 *
 * @providesModule guid
 *
 */__d('guid',[],__annotator(function $module_guid(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();



function guid(){
return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.','');}__annotator(guid,{'module':'guid','line':27,'column':0,'name':'guid'});


module.exports = guid;},{'module':'guid','line':0,'column':0,'name':'$module_guid'}),null);
/** Path: html/js/downstream/core/htmlSpecialChars.js */
/**
 * @generated SignedSource<<7109f20f1a8f42c9bbe0d99f3d5963be>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule htmlSpecialChars
 */__d('htmlSpecialChars',[],__annotator(function $module_htmlSpecialChars(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();





var r_amp=/&/g;
var r_lt=/</g;
var r_gt=/>/g;
var r_quot=/"/g;
var r_squo=/'/g;







function htmlSpecialChars(text){
if(typeof text == 'undefined' || text === null || !text.toString){
return '';}


if(text === false){
return '0';}else 
if(text === true){
return '1';}


return text.
toString().
replace(r_amp,'&amp;').
replace(r_quot,'&quot;').
replace(r_squo,'&#039;').
replace(r_lt,'&lt;').
replace(r_gt,'&gt;');}__annotator(htmlSpecialChars,{'module':'htmlSpecialChars','line':36,'column':0,'name':'htmlSpecialChars'});


module.exports = htmlSpecialChars;},{'module':'htmlSpecialChars','line':0,'column':0,'name':'$module_htmlSpecialChars'}),null);
/** Path: html/js/modules/Flash.js */
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * Provides the infrastructure for embedding and handling flash objects.
 * This is considerably more lightweight than swfobject, and could be
 * considered for global replacement.
 *
 * This module automatically tracks embedded objects, and applies the needed
 * logic in order to clean up when needed.
 *
 * @providesModule Flash
 *
 */__d('Flash',['DOMEventListener','DOMWrapper','QueryString','UserAgent_DEPRECATED','guid','htmlSpecialChars'],__annotator(function $module_Flash(global,require,requireDynamic,requireLazy,module,exports,DOMEventListener,DOMWrapper,QueryString,UserAgent_DEPRECATED,guid,htmlSpecialChars){if(require.__markCompiled)require.__markCompiled();











var registry={};
var unloadHandlerAttached;
var document=DOMWrapper.getWindow().document;

function remove(id){
var swf=document.getElementById(id);
if(swf){
swf.parentNode.removeChild(swf);}

delete registry[id];}__annotator(remove,{'module':'Flash','line':29,'column':0,'name':'remove'});


function unloadRegisteredSWFs(){
for(var id in registry) {
if(registry.hasOwnProperty(id)){
remove(id);}}}__annotator(unloadRegisteredSWFs,{'module':'Flash','line':37,'column':0,'name':'unloadRegisteredSWFs'});







function normalize(s){
return s.replace(
/\d+/g,__annotator(
function(m){return '000'.substring(m.length) + m;},{'module':'Flash','line':51,'column':4}));}__annotator(normalize,{'module':'Flash','line':48,'column':0,'name':'normalize'});



function register(id){
if(!unloadHandlerAttached){


if(UserAgent_DEPRECATED.ie() >= 9){
DOMEventListener.add(window,'unload',unloadRegisteredSWFs);}

unloadHandlerAttached = true;}

registry[id] = id;}__annotator(register,{'module':'Flash','line':55,'column':0,'name':'register'});



var Flash={












embed:__annotator(function(src,container,params,flashvars){

var id=guid();



src = htmlSpecialChars(src).replace(/&amp;/g,'&');


params = babelHelpers._extends({
allowscriptaccess:'always',
flashvars:flashvars,
movie:src},
params);



if(typeof params.flashvars == 'object'){
params.flashvars = QueryString.encode(params.flashvars);}



var pElements=[];
for(var key in params) {
if(params.hasOwnProperty(key) && params[key]){
pElements.push('<param name="' + htmlSpecialChars(key) + '" value="' + 
htmlSpecialChars(params[key]) + '">');}}



var span=container.appendChild(document.createElement('span'));
var html=
'<object ' + (UserAgent_DEPRECATED.ie()?
'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':
'type="application/x-shockwave-flash"') + 
'data="' + src + '" ' + (
params.height?'height="' + params.height + '" ':'') + (
params.width?'width="' + params.width + '" ':'') + 
'id="' + id + '">' + pElements.join('') + '</object>';
span.innerHTML = html;
var swf=span.firstChild;

register(id);
return swf;},{'module':'Flash','line':81,'column':9}),







remove:remove,






getVersion:__annotator(function(){
var name='Shockwave Flash';
var mimeType='application/x-shockwave-flash';
var activexType='ShockwaveFlash.ShockwaveFlash';
var flashVersion;

if(navigator.plugins && typeof navigator.plugins[name] == 'object'){

var description=navigator.plugins[name].description;
if(description && navigator.mimeTypes && 
navigator.mimeTypes[mimeType] && 
navigator.mimeTypes[mimeType].enabledPlugin){
flashVersion = description.match(/\d+/g);}}


if(!flashVersion){
try{
flashVersion = new ActiveXObject(activexType).
GetVariable('$version').
match(/(\d+),(\d+),(\d+),(\d+)/);
flashVersion = Array.prototype.slice.call(flashVersion,1);}

catch(notSupportedException) {}}


return flashVersion;},{'module':'Flash','line':139,'column':14}),






getVersionString:__annotator(function(){
var version=Flash.getVersion();
return version?version.join('.'):'';},{'module':'Flash','line':171,'column':20}),









checkMinVersion:__annotator(function(minVersion){
var version=Flash.getVersion();
if(!version){
return false;}

return normalize(version.join('.')) >= normalize(minVersion);},{'module':'Flash','line':183,'column':19}),







isAvailable:__annotator(function(){
return !!Flash.getVersion();},{'module':'Flash','line':196,'column':16})};




module.exports = Flash;},{'module':'Flash','line':0,'column':0,'name':'$module_Flash'}),null);
/** Path: html/js/downstream/core/dotAccess.js */
/**
 * @generated SignedSource<<3d062ba12386eeec2961823fc96c963c>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * A function for accessing a property given a head object
 * and a path in dot-notation.
 *
 * Instead of having individual get and set methods, this generic method
 * can be used to either resolve the complete path to a value for `get`,
 * or to resolve the path to the base object for `set`
 *
 *   // As a getter
 *   var val = dotAccess(window, 'AA.bb.cc');
 *
 *   // As a setter
 *   dotAccess(window, 'AA.bb').cc = 'val';
 *
 * @providesModule dotAccess
 */__d('dotAccess',[],__annotator(function $module_dotAccess(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();

function dotAccess(head,path,create){
var stack=path.split('.');
do {
var key=stack.shift();
head = head[key] || create && (head[key] = {});}while(
stack.length && head);
return head;}__annotator(dotAccess,{'module':'dotAccess','line':33,'column':0,'name':'dotAccess'});


module.exports = dotAccess;},{'module':'dotAccess','line':0,'column':0,'name':'$module_dotAccess'}),null);
/** Path: html/js/sdk/GlobalCallback.js */
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This modules gives us access to define and manage globally accessible
 * callbacks.
 * By default, these will be stored directly on the global object, but
 * this can be overridden by calling `GlobalCallback.setPrefix` with the
 * a string representing the 'path'.
 *
 * A typical use case for this is JSONP where you need to define a globally
 * available callback, that is then passed to the JSONP endpoint to be used
 * as the callback function
 *
 *   var callback = GlobalCallback.create(function(d) {.... });
 *   url = 'http://.....?callback=' + callback;
 *
 * After use the callback can be deleted by executing
 *
 *   GlobalCallback.remove(callback);
 *
 * @providesModule GlobalCallback
 * @typechecks
 */__d('GlobalCallback',['DOMWrapper','dotAccess','guid','wrapFunction'],__annotator(function $module_GlobalCallback(global,require,requireDynamic,requireLazy,module,exports,DOMWrapper,dotAccess,guid,wrapFunction){if(require.__markCompiled)require.__markCompiled();








var rootObject;
var callbackPrefix;

var GlobalCallback={

setPrefix:__annotator(function(prefix){return __bodyWrapper(this,arguments,function(){
rootObject = dotAccess(DOMWrapper.getWindow(),prefix,true);
callbackPrefix = prefix;},{params:[[prefix,'string','prefix']]});},{'module':'GlobalCallback','line':37,'column':13},{params:['string']}),


create:__annotator(function(fn,description){return __bodyWrapper(this,arguments,function(){
if(!rootObject){


this.setPrefix('__globalCallbacks');}

var id=guid();
rootObject[id] = wrapFunction(fn,'entry',description || 'GlobalCallback');

return callbackPrefix + '.' + id;},{params:[[fn,'function','fn'],[description,'?string','description']],returns:'string'});},{'module':'GlobalCallback','line':42,'column':10},{params:['function','?string'],returns:'string'}),


remove:__annotator(function(name){return __bodyWrapper(this,arguments,function(){
var id=name.substring(callbackPrefix.length + 1);
delete rootObject[id];},{params:[[name,'string','name']]});},{'module':'GlobalCallback','line':54,'column':10},{params:['string']})};




module.exports = GlobalCallback;},{'module':'GlobalCallback','line':0,'column':0,'name':'$module_GlobalCallback'}),null);
/** Path: html/js/modules/XDM.js */
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * Provides a generic module for doing unified Cross Domain Messaging
 * across different technical implementations, primarily postMessage and
 * Flash.
 *
 * The main interface is its create method, which if successful will return
 * the name of the transport provided - this can then be passed on to the
 * remote end which can then specify this when calling create in order to
 * 'connect'.
 *
 * The security provided by this module should be equal to that provided by
 * postMessage.
 * All the transports provide full confidentiality, only sending data to the
 * recipient as denoted by the origin, and both the postmessage and flash
 * transport has a verified origin attached to the messages.
 * Unfortunately, this is not easily done for the fragment transport.
 *
 * For both postmessage and flash, this security is handled by the
 * implementation, either through the postMessage specification, or through
 * domain validation done as part of the flash setup.
 *
 * To separate multiple connections on the same domain, a channel name is
 * used.
 *
 * In order to get two parties successfully communicating, the following flow
 * is used:
 *
 * Party A: calls create using a generated channel name and stores the returned
 *   value. Party A then forwards it's origin (protocol//domain) and channel
 *   name to the other end. In the JS SDK this is typically done by constructing
 *   an 'origin' value consisting of 'protocol//domain/channel', but this can
 *   also be done by embedding this information into the name of the new window.
 *   As part of create you can pass in an onMessage, for listening, and a
 *   whenReady for accepting the instance once it's set up.
 *   Once you have the instance you can call 'send' on it to pass messages.
 *
 * Pary B: calls create using the protocol and channel passed to it, when ready
 *   these should now be able to communicate.
 *
 *
 * Note: An instance is not bound to a recipient, meaning, with any instance
 * you can send to any listener if you know the channel name.
 *
 * @providesModule XDM
 */__d('XDM',['DOMEventListener','DOMWrapper','emptyFunction','Flash','GlobalCallback','guid','Log','UserAgent_DEPRECATED','wrapFunction'],__annotator(function $module_XDM(global,require,requireDynamic,requireLazy,module,exports,DOMEventListener,DOMWrapper,emptyFunction,Flash,GlobalCallback,guid,Log,UserAgent_DEPRECATED,wrapFunction){if(require.__markCompiled)require.__markCompiled();











var transports={};
var configuration={
transports:[]};

var window=DOMWrapper.getWindow();

function findTransport(blacklist){
var blacklistMap={},
i=blacklist.length,
list=configuration.transports;

while(i--) {blacklistMap[blacklist[i]] = 1;}

i = list.length;
while(i--) {
var name=list[i],
transport=transports[name];
if(!blacklistMap[name] && transport.isAvailable()){
return name;}}}__annotator(findTransport,{'module':'XDM','line':65,'column':0,'name':'findTransport'});




var XDM={





register:__annotator(function(name,provider){
Log.debug('Registering %s as XDM provider',name);
configuration.transports.push(name);
transports[name] = provider;},{'module':'XDM','line':88,'column':12}),


























create:__annotator(function(config){
if(!config.whenReady && !config.onMessage){
Log.error('An instance without whenReady or onMessage makes no sense');
throw new Error('An instance without whenReady or ' + 
'onMessage makes no sense');}

if(!config.channel){
Log.warn('Missing channel name, selecting at random');
config.channel = guid();}


if(!config.whenReady){
config.whenReady = emptyFunction;}

if(!config.onMessage){
config.onMessage = emptyFunction;}


var name=config.transport || findTransport(config.blacklist || []),
transport=transports[name];
if(transport && transport.isAvailable()){
Log.debug('%s is available',name);
transport.init(config);
return name;}},{'module':'XDM','line':118,'column':10})};









XDM.register('flash',__annotator(function(){
var inited=false;
var swf;
var doLog=false;
var timeout=15000;
var timer;

if(__DEV__){
doLog = true;}


return {
isAvailable:__annotator(function(){


return Flash.checkMinVersion('8.0.24');},{'module':'XDM','line':163,'column':17}),

init:__annotator(function(config){
Log.debug('init flash: ' + config.channel);
var xdm={
send:__annotator(function(message,origin,windowRef,channel){
Log.debug('sending to: %s (%s)',origin,channel);
swf.postMessage(message,origin,channel);},{'module':'XDM','line':171,'column':14})};


if(inited){
config.whenReady(xdm);
return;}

var div=config.root.appendChild(window.document.createElement('div'));

var callback=GlobalCallback.create(__annotator(function(){
GlobalCallback.remove(callback);
clearTimeout(timer);
Log.info('xdm.swf called the callback');
var messageCallback=GlobalCallback.create(__annotator(function(msg,origin){
msg = decodeURIComponent(msg);
origin = decodeURIComponent(origin);
Log.debug('received message %s from %s',msg,origin);
config.onMessage(msg,origin);},{'module':'XDM','line':186,'column':52}),
'xdm.swf:onMessage');
swf.init(config.channel,messageCallback);
config.whenReady(xdm);},{'module':'XDM','line':182,'column':43}),
'xdm.swf:load');

swf = Flash.embed(config.flashUrl,div,null,{
protocol:location.protocol.replace(':',''),
host:location.host,
callback:callback,
log:doLog});


timer = setTimeout(__annotator(function(){
Log.warn('The Flash component did not load within %s ms - ' + 
'verify that the container is not set to hidden or invisible ' + 
'using CSS as this will cause some browsers to not load ' + 
'the components',timeout);},{'module':'XDM','line':203,'column':25}),
timeout);
inited = true;},{'module':'XDM','line':168,'column':10})};},{'module':'XDM','line':151,'column':23})());





var facebookRe=/\.facebook\.com(\/|$)/;










XDM.register('postmessage',__annotator(function(){
var inited=false;

return {
isAvailable:__annotator(function(){
return !!window.postMessage;},{'module':'XDM','line':230,'column':18}),

init:__annotator(function(config){
Log.debug('init postMessage: ' + config.channel);
var prefix='_FB_' + config.channel;
var xdm={
send:__annotator(function(message,origin,windowRef,channel){
if(window === windowRef){
Log.error('Invalid windowref, equal to window (self)');
throw new Error();}

Log.debug('sending to: %s (%s)',origin,channel);
var send=__annotator(function(){

windowRef.postMessage('_FB_' + channel + message,origin);},{'module':'XDM','line':243,'column':21});









if(UserAgent_DEPRECATED.ie() == 8 || UserAgent_DEPRECATED.ieCompatibilityMode()){
setTimeout(send,0);}else 
{
send();}},{'module':'XDM','line':237,'column':14})};



if(inited){
config.whenReady(xdm);
return;}


DOMEventListener.add(window,'message',wrapFunction(__annotator(function(event){
var message=event.data;


var origin=event.origin || 'native';
if(!/^(https?:\/\/|native$)/.test(origin)){
Log.debug('Received message from invalid origin type: %s',origin);
return;}


if(origin !== 'native' && 
!(facebookRe.test(location.hostname) || 
facebookRe.test(event.origin))){

return;}


if(typeof message != 'string'){
Log.warn('Received message of type %s from %s, expected a string',
typeof message,origin);
return;}


Log.debug('received message %s from %s',message,origin);

if(message.substring(0,prefix.length) == prefix){
message = message.substring(prefix.length);}

config.onMessage(message,origin);},{'module':'XDM','line':267,'column':59}),
'entry','onMessage'));
config.whenReady(xdm);
inited = true;},{'module':'XDM','line':233,'column':10})};},{'module':'XDM','line':226,'column':29})());




module.exports = XDM;},{'module':'XDM','line':0,'column':0,'name':'$module_XDM'}),null);
/** Path: html/js/connect/initXdArbiter.js */
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * For "proxying" in-browser messages for Connect.
 *
 * This file is used for three things
 * - as one end of a persistent XD connection accessible by dialogs, plugins,
 *   or Facebook, which you can reach in a deterministic way if you know the
 *   relation between the window you want to talk to, and the window your in
 *   (parent, parent.frames['foo'],..) and that page has the JS SDK loaded.
 *
 *   When loaded by a page inside an iframe on facebook.com (canvas, tab)
 *   the proxy will register itself with the main page and pass back to the
 *   application that it has done so, and in which mode it is.
 *   This process can also be used to piggyback other data back to the
 *   application, such as the signed_request.
 *
 * - as the target of a redirect where this file will use the relation
 *   specified in the payload to pass the data on to the proxy mentioned above
 *
 * - as the channel file used when falling back to doing fragment based
 *   communication.
 *
 * This file should be subject to aggressive caching as cache invalidation is
 * done using a version number embedded into the URI.
 *
 * ## WARNING ##
 * This file is designed as to run on *.facebook.com/connect/xd_arbiter.php,
 * and it will lower its domain to 'facebook.com'.
 *
 * This means that all parameters accepted from the URL needs to be treated
 * in such a way as to not introduce any risk of XSS. Even if the parameters
 * are passed on to modules that are currently escaping  before inserting into
 * the DOM, that might not be the case in the future, and so we need to set up
 * the guards where we accept the data in the first place.
 *
 *
 * ## IMPORTANT ##
 * If you're making a change that adds or removes dynamic modules from
 * this file, you need to turn use_bundle in the SDK config off while the
 * push is going on. That way you ensure that all resources served during
 * that time are consistent.
 * Once the push is done, you can turn use_bundle on again, since the
 * versions of the map will be consistent again.
 *
 * @providesModule initXdArbiter
 */__d('initXdArbiter',['QueryString','resolveWindow','Log','XDM','XDMConfig'],__annotator(function $module_initXdArbiter(global,require,requireDynamic,requireLazy,module,exports){if(require.__markCompiled)require.__markCompiled();


__annotator(function(){
var QueryString=require('QueryString');
var resolveWindow=require('resolveWindow');
var Log=require('Log');
var XDM=require('XDM');
var XDMConfig=require('XDMConfig');






function sanitize(input){
return input?input.replace(/["'<>\(\)\\@]/g,''):input;}__annotator(sanitize,{'module':'initXdArbiter','line':62,'column':2,'name':'sanitize'});







function parentParentIsDefintelyNotFacebook(){
if(!window.chrome || !location.ancestorOrigins){
return false;}

return !/\.facebook\.com$/.test(location.ancestorOrigins[1]);}__annotator(parentParentIsDefintelyNotFacebook,{'module':'initXdArbiter','line':71,'column':2,'name':'parentParentIsDefintelyNotFacebook'});






function registerAsProxy(xdProxyName,origin){
if(parentParentIsDefintelyNotFacebook()){
return '';}



if(window != parent && window.parent != window.parent.parent){
try{
return parent.parent.XdArbiter.register(window,xdProxyName,origin);}
catch(securityException) {
Log.error('Could not register with XdArbiter in parent.parent');}}


return '';}__annotator(registerAsProxy,{'module':'initXdArbiter','line':82,'column':2,'name':'registerAsProxy'});


function informArbiter(relation,message,origin){
if(!relation && parentParentIsDefintelyNotFacebook()){
Log.error('Can not use parent.parent to reach facebook.com');
return;}


var targetWindow=relation?
resolveWindow(relation):
parent.parent;

try{
targetWindow.XdArbiter.handleMessage(message,origin,window);}
catch(securityException) {

Log.error('Could not reach facebook.com using %s',relation);}}__annotator(informArbiter,{'module':'initXdArbiter','line':98,'column':2,'name':'informArbiter'});








function retry(fn,delay){
var counter=50;
var innerFunction=__annotator(function(){
if(! --counter){

clearInterval(interval);}

try{
fn();

clearInterval(interval);}
catch(exception) {}},{'module':'initXdArbiter','line':123,'column':24});



var interval=setInterval(innerFunction,50);

innerFunction();}__annotator(retry,{'module':'initXdArbiter','line':121,'column':2,'name':'retry'});


function proxyMessage(){
var origin=/^https?:\/\/[^\/]*/.exec(unsafeParams.origin)[0];
retry(__annotator(function(){
var proxy=resolveWindow(unsafeParams.relation).
frames['fb_xdm_frame_' + protocol];





if(typeof proxy.location.search === 'undefined'){
throw new Error('Proxy not ready');}



if(location.search === proxy.location.search){
proxy.proxyMessage(fragment,origin);}else 
{
Log.error('Version mismatch: %s, %s',
location.search,proxy.location.search);}},{'module':'initXdArbiter','line':143,'column':10}),

50);}__annotator(proxyMessage,{'module':'initXdArbiter','line':141,'column':2,'name':'proxyMessage'});


function proxyUsingNative(){
var origin=/^(.*)\/(.*)$/.exec(unsafeParams.origin)[1];



if(window.__fbNative && window.__fbNative.postMessage){
window.__fbNative.postMessage(fragment,origin);}else 
{
var nativeReadyCallback=__annotator(function(evt){
window.removeEventListener('fbNativeReady',nativeReadyCallback);
window.__fbNative.postMessage(fragment,origin);},{'module':'initXdArbiter','line':173,'column':32});

window.addEventListener('fbNativeReady',nativeReadyCallback);}}__annotator(proxyUsingNative,{'module':'initXdArbiter','line':165,'column':2,'name':'proxyUsingNative'});




var fragment=/#(.*)|$/.exec(location.href)[1];

if(window == top){
location.hash = '';}


if(!fragment){
Log.error('xd_arbiter.php loaded without a valid hash, referrer: %s',
document.referrer);
return;}


var unsafeParams=QueryString.decode(fragment,true);
var protocol=location.protocol.replace(':','');


if(unsafeParams.relation){






if(window == top && /FBAN\/\w+;/i.test(navigator.userAgent)){
Log.info('Native proxy');
proxyUsingNative();}else 
{
Log.info('Legacy proxy to %s',unsafeParams.relation);
proxyMessage();}

return;}






if(protocol != /https?/.exec(window.name)[0]){
Log.info('Redirection to %s detected, aborting',protocol);
return;}



var transport=sanitize(unsafeParams.transport);
var channel=sanitize(unsafeParams.channel);
var remoteOrigin=sanitize(unsafeParams.origin);
var xdProxyName=sanitize(unsafeParams.xd_name);

if(!/^https?/.test(remoteOrigin)){


Log.error('Invalid origin presented, aborting.');
return;}


XDM.create({
root:document.body,
transport:transport,

channel:channel + '_' + protocol,
flashUrl:XDMConfig.Flash.path,

onMessage:__annotator(function(message,origin){
if(remoteOrigin !== origin){
Log.info('Received message from unknown origin %s, expected %s.',
origin,remoteOrigin);
return;}

if(!/^FB_RPC:/.test(message)){
message = QueryString.decode(message);}

informArbiter(message.relation,message,remoteOrigin);},{'module':'initXdArbiter','line':244,'column':15}),

whenReady:__annotator(function(xdm){
window.proxyMessage = __annotator(function(message,origin){
if(origin === remoteOrigin){
xdm.send(message,remoteOrigin,parent,channel);}else 
{
Log.error('Failed proxying to %s, expected %s',origin,remoteOrigin);}},{'module':'initXdArbiter','line':256,'column':28});






var data=null;
var readyMessage={
xd_action:'proxy_ready',
data:data};


var register=registerAsProxy(xdProxyName,remoteOrigin);
if(register){
readyMessage.registered = register;}


xdm.send(
QueryString.encode(readyMessage),
remoteOrigin,
parent,
channel);},{'module':'initXdArbiter','line':255,'column':15})});},{'module':'initXdArbiter','line':50,'column':1})();},{'module':'initXdArbiter','line':0,'column':0,'name':'$module_initXdArbiter'}),null);__d("XDMConfig",[],{"Flash":{"path":"https:\/\/connect.facebook.net\/rsrc.php\/v1\/yW\/r\/yOZN1vHw3Z_.swf"}}); require('initXdArbiter'); </script><b id="warning" style="display: none; color:red"> SECURITY WARNING: Please treat the URL above as you would your password and do not share it with anyone. See the <a href="http://l.ak.facebook.com/l.php?u=http%3A%2F%2Fon.fb.me%2F1mXNHhm&amp;h=pAQEGltHR&amp;s=1" target="_blank" rel="nofollow" onmouseover="LinkshimAsyncLink.swap(this, &quot;http:\/\/on.fb.me\/1mXNHhm&quot;);" onclick="LinkshimAsyncLink.referrer_log(this, &quot;http:\/\/on.fb.me\/1mXNHhm&quot;, &quot;\/si\/ajax\/l\/render_linkshim_log\/?u=http\u00253A\u00252F\u00252Fon.fb.me\u00252F1mXNHhm&amp;h=pAQEGltHR&amp;render_verification=0&amp;enc&amp;d&quot;);">Facebook Help Center</a> for more information. </b><script>if (window == top) {  setTimeout(function() {    document.getElementById("warning").style.display = 'block';  }, 2000);}</script></body></html>