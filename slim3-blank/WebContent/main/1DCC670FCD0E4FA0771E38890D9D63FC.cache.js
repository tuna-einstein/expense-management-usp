var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.main;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = '1DCC670FCD0E4FA0771E38890D9D63FC';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = 3.141592653589793, $intern_2 = {3:1}, $intern_3 = {3:1, 14:1}, $intern_4 = {3:1, 16:1, 14:1}, $intern_5 = 1000, $intern_6 = {17:1, 22:1, 3:1, 4:1, 5:1}, $intern_7 = {22:1, 56:1, 3:1, 4:1, 5:1}, $intern_8 = {22:1, 57:1, 3:1, 4:1, 5:1}, $intern_9 = {22:1, 58:1, 3:1, 4:1, 5:1}, $intern_10 = {34:1, 3:1, 4:1, 5:1}, $intern_11 = {22:1, 91:1, 3:1, 4:1, 5:1}, $intern_12 = {89:1, 3:1, 16:1, 14:1}, $intern_13 = {64:1, 3:1, 16:1, 14:1}, $intern_14 = 86400000, $intern_15 = 65535, $intern_16 = {3:1, 19:1}, $intern_17 = 1900, $intern_18 = {3:1, 4:1, 20:1}, $intern_19 = -2147483648, $intern_20 = 4194303, $intern_21 = 1048575, $intern_22 = 524288, $intern_23 = 4194304, $intern_24 = 17592186044416, $intern_25 = -17592186044416, $intern_26 = {130:1, 3:1}, $intern_27 = {15:1, 615:1}, $intern_28 = {160:1, 15:1}, $intern_29 = 32768, $intern_30 = 65536, $intern_31 = 131072, $intern_32 = 1048576, $intern_33 = 16777216, $intern_34 = 33554432, $intern_35 = 67108864, $intern_36 = {28:1, 3:1, 4:1, 5:1}, $intern_37 = {11:1, 9:1, 10:1, 8:1, 12:1, 7:1, 6:1}, $intern_38 = {11:1, 9:1, 10:1, 8:1, 23:1, 12:1, 7:1, 6:1}, $intern_39 = {25:1, 24:1}, $intern_40 = {3:1, 25:1, 24:1}, $intern_41 = {11:1, 9:1, 10:1, 8:1, 49:1, 12:1, 7:1, 6:1}, $intern_42 = {11:1, 9:1, 10:1, 8:1, 12:1, 44:1, 7:1, 6:1}, $intern_43 = {11:1, 9:1, 10:1, 8:1, 23:1, 12:1, 51:1, 7:1, 6:1}, $intern_44 = {11:1, 9:1, 10:1, 69:1, 8:1, 23:1, 12:1, 7:1, 6:1}, $intern_45 = {129:1, 15:1}, $intern_46 = {11:1, 9:1, 10:1, 8:1, 23:1, 12:1, 100:1, 7:1, 6:1}, $intern_47 = {218:1, 15:1}, $intern_48 = {61:1, 3:1, 4:1, 5:1}, $intern_49 = {11:1, 9:1, 10:1, 8:1, 12:1, 7:1, 6:1, 75:1}, $intern_50 = {29:1, 15:1}, $intern_51 = {3:1, 16:1, 31:1, 14:1}, $intern_52 = {25:1, 67:1}, $intern_53 = {3:1, 55:1}, $intern_54 = {3:1, 25:1, 67:1}, $intern_55 = {3:1, 4:1, 5:1, 66:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_10(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_0(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_2(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode_1(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode_1(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode_1(this);
}
;
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(166, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_21(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 166);
function AppIdNamespace(appId, namespace){
  this.appId = appId;
  this.namespace = namespace;
}

defineClass(147, 1, {147:1}, AppIdNamespace);
var Lcom_google_appengine_api_datastore_AppIdNamespace_2_classLit = createForClass('com.google.appengine.api.datastore', 'AppIdNamespace', 147);
function deserialize(streamReader, instance){
}

function instantiate(streamReader){
  var appId, namespace;
  appId = $getString(streamReader, streamReader.results[--streamReader.index_0]);
  namespace = $getString(streamReader, streamReader.results[--streamReader.index_0]);
  return new AppIdNamespace(appId, namespace);
}

function serialize(streamWriter, instance){
  $writeString(streamWriter, instance.appId);
  $writeString(streamWriter, instance.namespace);
}

function $appendToString(this$static, buffer){
  if (this$static.parentKey) {
    $appendToString(this$static.parentKey, buffer);
    buffer.string += '/';
  }
  $append_0(buffer, this$static.kind);
  buffer.string += '(';
  this$static.name_0 != null?$append_0($append_0((buffer.string += '"' , buffer), this$static.name_0), '"'):$append_0(buffer, '' + toString_9(this$static.id_0));
  buffer.string += ')';
}

function $equals(this$static, obj){
  var other;
  if (this$static === obj)
    return true;
  if (obj == null)
    return false;
  if (Lcom_google_appengine_api_datastore_Key_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj))
    return false;
  other = castTo(obj, 104);
  if (neq(this$static.id_0, other.id_0))
    return false;
  if (this$static.kind == null) {
    if (other.kind != null)
      return false;
  }
   else if (!$equals_0(this$static.kind, other.kind))
    return false;
  if (this$static.name_0 == null) {
    if (other.name_0 != null)
      return false;
  }
   else if (!$equals_0(this$static.name_0, other.name_0))
    return false;
  if (!this$static.parentKey) {
    if (other.parentKey)
      return false;
  }
   else if (!$equals(this$static.parentKey, other.parentKey))
    return false;
  return true;
}

function $hashCode(this$static){
  var result;
  result = 31 + toInt_0(xor_0(this$static.id_0, shru_0(this$static.id_0, 32)));
  result = 31 * result + (this$static.kind == null?0:getHashCode_2(this$static.kind));
  result = 31 * result + (this$static.name_0 == null?0:getHashCode_2(this$static.name_0));
  result = 31 * result + (!this$static.parentKey?0:$hashCode(this$static.parentKey));
  return result;
}

function Key(kind, parentKey, id_0, name_0, appIdNamespace){
  if (kind == null || kind.length == 0)
    throw toJs(new IllegalArgumentException_0('No kind specified.'));
  if (name_0 != null) {
    if (name_0.length == 0)
      throw toJs(new IllegalArgumentException_0('Name may not be empty.'));
    if (compare_1(id_0, 0) != 0)
      throw toJs(new IllegalArgumentException_0('Id and name may not both be specified at once.'));
  }
  this.name_0 = name_0;
  this.id_0 = id_0;
  this.parentKey = parentKey;
  this.kind = (checkCriticalNotNull(kind) , kind);
  this.appIdNamespace = appIdNamespace;
}

defineClass(104, 1, {104:1, 3:1}, Key);
_.equals_0 = function equals_0(obj){
  return $equals(this, obj);
}
;
_.hashCode_0 = function hashCode_1(){
  return $hashCode(this);
}
;
_.toString_0 = function toString_1(){
  var buffer;
  buffer = new StringBuffer;
  $appendToString(this, buffer);
  return buffer.string;
}
;
_.id_0 = 0;
var Lcom_google_appengine_api_datastore_Key_2_classLit = createForClass('com.google.appengine.api.datastore', 'Key', 104);
function deserialize_0(streamReader, instance){
}

function instantiate_0(streamReader){
  var appIdNamespace, id_0, kind, name_0, parentKey;
  kind = $getString(streamReader, streamReader.results[--streamReader.index_0]);
  parentKey = castTo($readObject(streamReader), 104);
  id_0 = $readLong(streamReader);
  name_0 = $getString(streamReader, streamReader.results[--streamReader.index_0]);
  appIdNamespace = castTo($readObject(streamReader), 147);
  return new Key(kind, parentKey, id_0, name_0, appIdNamespace);
}

function serialize_0(streamWriter, instance){
  $writeString(streamWriter, instance.kind);
  $writeObject(streamWriter, instance.parentKey);
  $append(streamWriter, longToBase64(instance.id_0));
  $writeString(streamWriter, instance.name_0);
  $writeObject(streamWriter, instance.appIdNamespace);
}

function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel_0();
    this$static.requestHandle = null;
  }
  this$static.onCancel();
}

function $run(this$static, duration, startTime, element){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  this$static.element = element;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $run_0(this$static, duration, element){
  $run(this$static, duration, now_1(), element);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate((1 + $wnd.Math.cos($intern_1 + progress * $intern_1)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.onStart();
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.onComplete();
    return false;
  }
  return true;
}

function Animation(){
  Animation_0.call(this, (!instance_0 && (instance_0 = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance_0));
}

function Animation_0(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(116, 1, {});
_.onCancel = function onCancel(){
  this.wasStarted && this.onComplete();
}
;
_.onComplete = function onComplete(){
  this.onUpdate((1 + $wnd.Math.cos(6.283185307179586)) / 2);
}
;
_.onStart = function onStart(){
  this.onUpdate((1 + $wnd.Math.cos($intern_1)) / 2);
}
;
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 116);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(248, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 248);
defineClass(658, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 658);
defineClass(152, 1, {152:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 152);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(549, 658, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 549);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(550, 152, {152:1}, AnimationSchedulerImplStandard$1);
_.cancel_0 = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 550);
function $cancelAnimationFrame(this$static, requestId){
  $remove_3(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {678:1, 3:1}, 153, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray_0(this$static.animationRequests, curAnimations), 678);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_3(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, $wnd.Math.max(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(551, 658, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_2(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 551);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_1(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(143, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 143);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(552, 143, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 552);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(153, 152, {152:1, 153:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel_0 = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 153);
function $set(this$static, element){
  $setAttribute(element, 'role', this$static.roleName);
}

function RoleImpl(roleName){
  this.roleName = roleName;
}

defineClass(13, 1, {});
var Lcom_google_gwt_aria_client_RoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RoleImpl', 13);
function AlertRoleImpl(){
  RoleImpl.call(this, 'alert');
}

defineClass(484, 13, {}, AlertRoleImpl);
var Lcom_google_gwt_aria_client_AlertRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertRoleImpl', 484);
function AlertdialogRoleImpl(){
  RoleImpl.call(this, 'alertdialog');
}

defineClass(483, 13, {}, AlertdialogRoleImpl);
var Lcom_google_gwt_aria_client_AlertdialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertdialogRoleImpl', 483);
function ApplicationRoleImpl(){
  RoleImpl.call(this, 'application');
}

defineClass(485, 13, {}, ApplicationRoleImpl);
var Lcom_google_gwt_aria_client_ApplicationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ApplicationRoleImpl', 485);
function $getAriaValue(this$static, value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_3($append_3(buf, this$static.getSingleValue(item_0)), ' ');
  }
  return $trim(buf.string);
}

function $set_0(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(this$static, values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(198, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 198);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(39, 198, {}, AriaValueAttribute);
_.getSingleValue = function getSingleValue(value_0){
  return castTo(value_0, 219).getAriaValue();
}
;
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 39);
function ArticleRoleImpl(){
  RoleImpl.call(this, 'article');
}

defineClass(486, 13, {}, ArticleRoleImpl);
var Lcom_google_gwt_aria_client_ArticleRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ArticleRoleImpl', 486);
function BannerRoleImpl(){
  RoleImpl.call(this, 'banner');
}

defineClass(487, 13, {}, BannerRoleImpl);
var Lcom_google_gwt_aria_client_BannerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'BannerRoleImpl', 487);
function $setAriaPressedState(element, value_0){
  $set_0(($clinit_State() , PRESSED), element, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_PressedValue_2_classLit, 1), $intern_2, 86, 0, [value_0]));
}

function ButtonRoleImpl(){
  RoleImpl.call(this, 'button');
}

defineClass(488, 13, {}, ButtonRoleImpl);
var Lcom_google_gwt_aria_client_ButtonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ButtonRoleImpl', 488);
function CheckboxRoleImpl(){
  RoleImpl.call(this, 'checkbox');
}

defineClass(489, 13, {}, CheckboxRoleImpl);
var Lcom_google_gwt_aria_client_CheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'CheckboxRoleImpl', 489);
function ColumnheaderRoleImpl(){
  RoleImpl.call(this, 'columnheader');
}

defineClass(490, 13, {}, ColumnheaderRoleImpl);
var Lcom_google_gwt_aria_client_ColumnheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ColumnheaderRoleImpl', 490);
function ComboboxRoleImpl(){
  RoleImpl.call(this, 'combobox');
}

defineClass(491, 13, {}, ComboboxRoleImpl);
var Lcom_google_gwt_aria_client_ComboboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComboboxRoleImpl', 491);
function ComplementaryRoleImpl(){
  RoleImpl.call(this, 'complementary');
}

defineClass(492, 13, {}, ComplementaryRoleImpl);
var Lcom_google_gwt_aria_client_ComplementaryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComplementaryRoleImpl', 492);
function ContentinfoRoleImpl(){
  RoleImpl.call(this, 'contentinfo');
}

defineClass(493, 13, {}, ContentinfoRoleImpl);
var Lcom_google_gwt_aria_client_ContentinfoRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ContentinfoRoleImpl', 493);
function DefinitionRoleImpl(){
  RoleImpl.call(this, 'definition');
}

defineClass(494, 13, {}, DefinitionRoleImpl);
var Lcom_google_gwt_aria_client_DefinitionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DefinitionRoleImpl', 494);
function DialogRoleImpl(){
  RoleImpl.call(this, 'dialog');
}

defineClass(495, 13, {}, DialogRoleImpl);
var Lcom_google_gwt_aria_client_DialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DialogRoleImpl', 495);
function DirectoryRoleImpl(){
  RoleImpl.call(this, 'directory');
}

defineClass(496, 13, {}, DirectoryRoleImpl);
var Lcom_google_gwt_aria_client_DirectoryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DirectoryRoleImpl', 496);
function DocumentRoleImpl(){
  RoleImpl.call(this, 'document');
}

defineClass(497, 13, {}, DocumentRoleImpl);
var Lcom_google_gwt_aria_client_DocumentRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DocumentRoleImpl', 497);
function FormRoleImpl(){
  RoleImpl.call(this, 'form');
}

defineClass(498, 13, {}, FormRoleImpl);
var Lcom_google_gwt_aria_client_FormRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'FormRoleImpl', 498);
function GridRoleImpl(){
  RoleImpl.call(this, 'grid');
}

defineClass(500, 13, {}, GridRoleImpl);
var Lcom_google_gwt_aria_client_GridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridRoleImpl', 500);
function $setAriaSelectedState(element, value_0){
  $set_0(($clinit_State() , SELECTED), element, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_SelectedValue_2_classLit, 1), $intern_2, 95, 0, [value_0]));
}

function GridcellRoleImpl(){
  RoleImpl.call(this, 'gridcell');
}

defineClass(499, 13, {}, GridcellRoleImpl);
var Lcom_google_gwt_aria_client_GridcellRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridcellRoleImpl', 499);
function GroupRoleImpl(){
  RoleImpl.call(this, 'group');
}

defineClass(501, 13, {}, GroupRoleImpl);
var Lcom_google_gwt_aria_client_GroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GroupRoleImpl', 501);
function HeadingRoleImpl(){
  RoleImpl.call(this, 'heading');
}

defineClass(502, 13, {}, HeadingRoleImpl);
var Lcom_google_gwt_aria_client_HeadingRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'HeadingRoleImpl', 502);
function $init(this$static, elementId){
  this$static.id_0 = elementId;
}

function Id(element){
  $init(this, element.id);
}

defineClass(151, 1, {219:1, 151:1}, Id);
_.getAriaValue = function getAriaValue(){
  return this.id_0;
}
;
var Lcom_google_gwt_aria_client_Id_2_classLit = createForClass('com.google.gwt.aria.client', 'Id', 151);
function ImgRoleImpl(){
  RoleImpl.call(this, 'img');
}

defineClass(503, 13, {}, ImgRoleImpl);
var Lcom_google_gwt_aria_client_ImgRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ImgRoleImpl', 503);
function LinkRoleImpl(){
  RoleImpl.call(this, 'link');
}

defineClass(504, 13, {}, LinkRoleImpl);
var Lcom_google_gwt_aria_client_LinkRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LinkRoleImpl', 504);
function ListRoleImpl(){
  RoleImpl.call(this, 'list');
}

defineClass(507, 13, {}, ListRoleImpl);
var Lcom_google_gwt_aria_client_ListRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListRoleImpl', 507);
function ListboxRoleImpl(){
  RoleImpl.call(this, 'listbox');
}

defineClass(505, 13, {}, ListboxRoleImpl);
var Lcom_google_gwt_aria_client_ListboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListboxRoleImpl', 505);
function ListitemRoleImpl(){
  RoleImpl.call(this, 'listitem');
}

defineClass(506, 13, {}, ListitemRoleImpl);
var Lcom_google_gwt_aria_client_ListitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListitemRoleImpl', 506);
function LogRoleImpl(){
  RoleImpl.call(this, 'log');
}

defineClass(508, 13, {}, LogRoleImpl);
var Lcom_google_gwt_aria_client_LogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LogRoleImpl', 508);
function MainRoleImpl(){
  RoleImpl.call(this, 'main');
}

defineClass(509, 13, {}, MainRoleImpl);
var Lcom_google_gwt_aria_client_MainRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MainRoleImpl', 509);
function MarqueeRoleImpl(){
  RoleImpl.call(this, 'marquee');
}

defineClass(510, 13, {}, MarqueeRoleImpl);
var Lcom_google_gwt_aria_client_MarqueeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MarqueeRoleImpl', 510);
function MathRoleImpl(){
  RoleImpl.call(this, 'math');
}

defineClass(511, 13, {}, MathRoleImpl);
var Lcom_google_gwt_aria_client_MathRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MathRoleImpl', 511);
function MenuRoleImpl(){
  RoleImpl.call(this, 'menu');
}

defineClass(516, 13, {}, MenuRoleImpl);
var Lcom_google_gwt_aria_client_MenuRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuRoleImpl', 516);
function $setAriaActivedescendantProperty(element, value_0){
  $set_0(($clinit_Property() , ACTIVEDESCENDANT), element, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_Id_2_classLit, 1), $intern_2, 151, 0, [value_0]));
}

function MenubarRoleImpl(){
  RoleImpl.call(this, 'menubar');
}

defineClass(512, 13, {}, MenubarRoleImpl);
var Lcom_google_gwt_aria_client_MenubarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenubarRoleImpl', 512);
function MenuitemRoleImpl(){
  RoleImpl.call(this, 'menuitem');
}

defineClass(515, 13, {}, MenuitemRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemRoleImpl', 515);
function MenuitemcheckboxRoleImpl(){
  RoleImpl.call(this, 'menuitemcheckbox');
}

defineClass(513, 13, {}, MenuitemcheckboxRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemcheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemcheckboxRoleImpl', 513);
function MenuitemradioRoleImpl(){
  RoleImpl.call(this, 'menuitemradio');
}

defineClass(514, 13, {}, MenuitemradioRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemradioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemradioRoleImpl', 514);
function NavigationRoleImpl(){
  RoleImpl.call(this, 'navigation');
}

defineClass(517, 13, {}, NavigationRoleImpl);
var Lcom_google_gwt_aria_client_NavigationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NavigationRoleImpl', 517);
function NoteRoleImpl(){
  RoleImpl.call(this, 'note');
}

defineClass(518, 13, {}, NoteRoleImpl);
var Lcom_google_gwt_aria_client_NoteRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NoteRoleImpl', 518);
function OptionRoleImpl(){
  RoleImpl.call(this, 'option');
}

defineClass(519, 13, {}, OptionRoleImpl);
var Lcom_google_gwt_aria_client_OptionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'OptionRoleImpl', 519);
function PresentationRoleImpl(){
  RoleImpl.call(this, 'presentation');
}

defineClass(520, 13, {}, PresentationRoleImpl);
var Lcom_google_gwt_aria_client_PresentationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'PresentationRoleImpl', 520);
function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(5, 1, {3:1, 4:1, 5:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, castTo(other, 5));
}
;
_.equals_0 = function equals_1(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_2(){
  return getHashCode_1(this);
}
;
_.toString_0 = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 5);
function $clinit_PressedValue(){
  $clinit_PressedValue = emptyMethod;
  TRUE = new PressedValue('TRUE', 0);
  FALSE = new PressedValue('FALSE', 1);
  MIXED = new PressedValue('MIXED', 2);
  UNDEFINED = new PressedValue('UNDEFINED', 3);
}

function PressedValue(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_PressedValue();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_PressedValue_2_classLit, 1), $intern_2, 86, 0, [TRUE, FALSE, MIXED, UNDEFINED]);
}

defineClass(86, 5, {219:1, 86:1, 3:1, 4:1, 5:1}, PressedValue);
_.getAriaValue = function getAriaValue_0(){
  switch (this.ordinal) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'mixed';
    case 3:
      return 'undefined';
  }
  return null;
}
;
var FALSE, MIXED, TRUE, UNDEFINED;
var Lcom_google_gwt_aria_client_PressedValue_2_classLit = createForEnum('com.google.gwt.aria.client', 'PressedValue', 86, Ljava_lang_Enum_2_classLit, values_0);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(43, 198, {}, PrimitiveValueAttribute);
_.getSingleValue = function getSingleValue_0(value_0){
  return value_0 == null?'null':toString_10(value_0);
}
;
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 43);
function ProgressbarRoleImpl(){
  RoleImpl.call(this, 'progressbar');
}

defineClass(521, 13, {}, ProgressbarRoleImpl);
var Lcom_google_gwt_aria_client_ProgressbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ProgressbarRoleImpl', 521);
function $clinit_Property(){
  $clinit_Property = emptyMethod;
  ACTIVEDESCENDANT = new AriaValueAttribute('aria-activedescendant');
  new PrimitiveValueAttribute('aria-atomic');
  new AriaValueAttribute('aria-autocomplete');
  new AriaValueAttribute('aria-controls');
  new AriaValueAttribute('aria-describedby');
  new AriaValueAttribute('aria-dropeffect');
  new AriaValueAttribute('aria-flowto');
  new PrimitiveValueAttribute('aria-haspopup');
  new PrimitiveValueAttribute('aria-label');
  new AriaValueAttribute('aria-labelledby');
  new PrimitiveValueAttribute('aria-level');
  new AriaValueAttribute('aria-live');
  new PrimitiveValueAttribute('aria-multiline');
  new PrimitiveValueAttribute('aria-multiselectable');
  new AriaValueAttribute('aria-orientation');
  new AriaValueAttribute('aria-owns');
  new PrimitiveValueAttribute('aria-posinset');
  new PrimitiveValueAttribute('aria-readonly');
  new AriaValueAttribute('aria-relevant');
  new PrimitiveValueAttribute('aria-required');
  new PrimitiveValueAttribute('aria-setsize');
  new AriaValueAttribute('aria-sort');
  new PrimitiveValueAttribute('aria-valuemax');
  new PrimitiveValueAttribute('aria-valuemin');
  new PrimitiveValueAttribute('aria-valuenow');
  new PrimitiveValueAttribute('aria-valuetext');
}

var ACTIVEDESCENDANT;
function RadioRoleImpl(){
  RoleImpl.call(this, 'radio');
}

defineClass(523, 13, {}, RadioRoleImpl);
var Lcom_google_gwt_aria_client_RadioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadioRoleImpl', 523);
function RadiogroupRoleImpl(){
  RoleImpl.call(this, 'radiogroup');
}

defineClass(522, 13, {}, RadiogroupRoleImpl);
var Lcom_google_gwt_aria_client_RadiogroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadiogroupRoleImpl', 522);
function RegionRoleImpl(){
  RoleImpl.call(this, 'region');
}

defineClass(524, 13, {}, RegionRoleImpl);
var Lcom_google_gwt_aria_client_RegionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RegionRoleImpl', 524);
function $clinit_Roles(){
  $clinit_Roles = emptyMethod;
  ALERTDIALOG = new AlertdialogRoleImpl;
  ALERT = new AlertRoleImpl;
  APPLICATION = new ApplicationRoleImpl;
  ARTICLE = new ArticleRoleImpl;
  BANNER = new BannerRoleImpl;
  BUTTON = new ButtonRoleImpl;
  CHECKBOX = new CheckboxRoleImpl;
  COLUMNHEADER = new ColumnheaderRoleImpl;
  COMBOBOX = new ComboboxRoleImpl;
  COMPLEMENTARY = new ComplementaryRoleImpl;
  CONTENTINFO = new ContentinfoRoleImpl;
  DEFINITION = new DefinitionRoleImpl;
  DIALOG = new DialogRoleImpl;
  DIRECTORY = new DirectoryRoleImpl;
  DOCUMENT = new DocumentRoleImpl;
  FORM = new FormRoleImpl;
  GRIDCELL = new GridcellRoleImpl;
  GRID = new GridRoleImpl;
  GROUP = new GroupRoleImpl;
  HEADING = new HeadingRoleImpl;
  IMG = new ImgRoleImpl;
  LINK = new LinkRoleImpl;
  LISTBOX = new ListboxRoleImpl;
  LISTITEM = new ListitemRoleImpl;
  LIST = new ListRoleImpl;
  LOG = new LogRoleImpl;
  MAIN = new MainRoleImpl;
  MARQUEE = new MarqueeRoleImpl;
  MATH = new MathRoleImpl;
  MENUBAR = new MenubarRoleImpl;
  MENUITEMCHECKBOX = new MenuitemcheckboxRoleImpl;
  MENUITEMRADIO = new MenuitemradioRoleImpl;
  MENUITEM = new MenuitemRoleImpl;
  MENU = new MenuRoleImpl;
  NAVIGATION = new NavigationRoleImpl;
  NOTE = new NoteRoleImpl;
  OPTION = new OptionRoleImpl;
  PRESENTATION = new PresentationRoleImpl;
  PROGRESSBAR = new ProgressbarRoleImpl;
  RADIOGROUP = new RadiogroupRoleImpl;
  RADIO = new RadioRoleImpl;
  REGION = new RegionRoleImpl;
  ROWGROUP = new RowgroupRoleImpl;
  ROWHEADER = new RowheaderRoleImpl;
  ROW = new RowRoleImpl;
  SCROLLBAR = new ScrollbarRoleImpl;
  SEARCH = new SearchRoleImpl;
  SEPARATOR = new SeparatorRoleImpl;
  SLIDER = new SliderRoleImpl;
  SPINBUTTON = new SpinbuttonRoleImpl;
  STATUS = new StatusRoleImpl;
  TABLIST = new TablistRoleImpl;
  TABPANEL = new TabpanelRoleImpl;
  TAB = new TabRoleImpl;
  TEXTBOX = new TextboxRoleImpl;
  TIMER = new TimerRoleImpl;
  TOOLBAR = new ToolbarRoleImpl;
  TOOLTIP = new TooltipRoleImpl;
  TREEGRID = new TreegridRoleImpl;
  TREEITEM = new TreeitemRoleImpl;
  TREE = new TreeRoleImpl;
  ROLES_MAP = new HashMap;
  $putStringValue(ROLES_MAP, 'region', REGION);
  $putStringValue(ROLES_MAP, 'alert', ALERT);
  $putStringValue(ROLES_MAP, 'dialog', DIALOG);
  $putStringValue(ROLES_MAP, 'alertdialog', ALERTDIALOG);
  $putStringValue(ROLES_MAP, 'application', APPLICATION);
  $putStringValue(ROLES_MAP, 'document', DOCUMENT);
  $putStringValue(ROLES_MAP, 'article', ARTICLE);
  $putStringValue(ROLES_MAP, 'banner', BANNER);
  $putStringValue(ROLES_MAP, 'button', BUTTON);
  $putStringValue(ROLES_MAP, 'checkbox', CHECKBOX);
  $putStringValue(ROLES_MAP, 'gridcell', GRIDCELL);
  $putStringValue(ROLES_MAP, 'columnheader', COLUMNHEADER);
  $putStringValue(ROLES_MAP, 'group', GROUP);
  $putStringValue(ROLES_MAP, 'combobox', COMBOBOX);
  $putStringValue(ROLES_MAP, 'complementary', COMPLEMENTARY);
  $putStringValue(ROLES_MAP, 'contentinfo', CONTENTINFO);
  $putStringValue(ROLES_MAP, 'definition', DEFINITION);
  $putStringValue(ROLES_MAP, 'list', LIST);
  $putStringValue(ROLES_MAP, 'directory', DIRECTORY);
  $putStringValue(ROLES_MAP, 'form', FORM);
  $putStringValue(ROLES_MAP, 'grid', GRID);
  $putStringValue(ROLES_MAP, 'heading', HEADING);
  $putStringValue(ROLES_MAP, 'img', IMG);
  $putStringValue(ROLES_MAP, 'link', LINK);
  $putStringValue(ROLES_MAP, 'listbox', LISTBOX);
  $putStringValue(ROLES_MAP, 'listitem', LISTITEM);
  $putStringValue(ROLES_MAP, 'log', LOG);
  $putStringValue(ROLES_MAP, 'main', MAIN);
  $putStringValue(ROLES_MAP, 'marquee', MARQUEE);
  $putStringValue(ROLES_MAP, 'math', MATH);
  $putStringValue(ROLES_MAP, 'menu', MENU);
  $putStringValue(ROLES_MAP, 'menubar', MENUBAR);
  $putStringValue(ROLES_MAP, 'menuitem', MENUITEM);
  $putStringValue(ROLES_MAP, 'menuitemcheckbox', MENUITEMCHECKBOX);
  $putStringValue(ROLES_MAP, 'option', OPTION);
  $putStringValue(ROLES_MAP, 'radio', RADIO);
  $putStringValue(ROLES_MAP, 'menuitemradio', MENUITEMRADIO);
  $putStringValue(ROLES_MAP, 'navigation', NAVIGATION);
  $putStringValue(ROLES_MAP, 'note', NOTE);
  $putStringValue(ROLES_MAP, 'presentation', PRESENTATION);
  $putStringValue(ROLES_MAP, 'progressbar', PROGRESSBAR);
  $putStringValue(ROLES_MAP, 'radiogroup', RADIOGROUP);
  $putStringValue(ROLES_MAP, 'row', ROW);
  $putStringValue(ROLES_MAP, 'rowgroup', ROWGROUP);
  $putStringValue(ROLES_MAP, 'rowheader', ROWHEADER);
  $putStringValue(ROLES_MAP, 'search', SEARCH);
  $putStringValue(ROLES_MAP, 'separator', SEPARATOR);
  $putStringValue(ROLES_MAP, 'scrollbar', SCROLLBAR);
  $putStringValue(ROLES_MAP, 'slider', SLIDER);
  $putStringValue(ROLES_MAP, 'spinbutton', SPINBUTTON);
  $putStringValue(ROLES_MAP, 'status', STATUS);
  $putStringValue(ROLES_MAP, 'tab', TAB);
  $putStringValue(ROLES_MAP, 'tablist', TABLIST);
  $putStringValue(ROLES_MAP, 'tabpanel', TABPANEL);
  $putStringValue(ROLES_MAP, 'textbox', TEXTBOX);
  $putStringValue(ROLES_MAP, 'timer', TIMER);
  $putStringValue(ROLES_MAP, 'toolbar', TOOLBAR);
  $putStringValue(ROLES_MAP, 'tooltip', TOOLTIP);
  $putStringValue(ROLES_MAP, 'tree', TREE);
  $putStringValue(ROLES_MAP, 'treegrid', TREEGRID);
  $putStringValue(ROLES_MAP, 'treeitem', TREEITEM);
}

var ALERT, ALERTDIALOG, APPLICATION, ARTICLE, BANNER, BUTTON, CHECKBOX, COLUMNHEADER, COMBOBOX, COMPLEMENTARY, CONTENTINFO, DEFINITION, DIALOG, DIRECTORY, DOCUMENT, FORM, GRID, GRIDCELL, GROUP, HEADING, IMG, LINK, LIST, LISTBOX, LISTITEM, LOG, MAIN, MARQUEE, MATH, MENU, MENUBAR, MENUITEM, MENUITEMCHECKBOX, MENUITEMRADIO, NAVIGATION, NOTE, OPTION, PRESENTATION, PROGRESSBAR, RADIO, RADIOGROUP, REGION, ROLES_MAP, ROW, ROWGROUP, ROWHEADER, SCROLLBAR, SEARCH, SEPARATOR, SLIDER, SPINBUTTON, STATUS, TAB, TABLIST, TABPANEL, TEXTBOX, TIMER, TOOLBAR, TOOLTIP, TREE, TREEGRID, TREEITEM;
function RowRoleImpl(){
  RoleImpl.call(this, 'row');
}

defineClass(527, 13, {}, RowRoleImpl);
var Lcom_google_gwt_aria_client_RowRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowRoleImpl', 527);
function RowgroupRoleImpl(){
  RoleImpl.call(this, 'rowgroup');
}

defineClass(525, 13, {}, RowgroupRoleImpl);
var Lcom_google_gwt_aria_client_RowgroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowgroupRoleImpl', 525);
function RowheaderRoleImpl(){
  RoleImpl.call(this, 'rowheader');
}

defineClass(526, 13, {}, RowheaderRoleImpl);
var Lcom_google_gwt_aria_client_RowheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowheaderRoleImpl', 526);
function ScrollbarRoleImpl(){
  RoleImpl.call(this, 'scrollbar');
}

defineClass(528, 13, {}, ScrollbarRoleImpl);
var Lcom_google_gwt_aria_client_ScrollbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ScrollbarRoleImpl', 528);
function SearchRoleImpl(){
  RoleImpl.call(this, 'search');
}

defineClass(529, 13, {}, SearchRoleImpl);
var Lcom_google_gwt_aria_client_SearchRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SearchRoleImpl', 529);
function $clinit_SelectedValue(){
  $clinit_SelectedValue = emptyMethod;
  TRUE_0 = new SelectedValue('TRUE', 0);
  FALSE_0 = new SelectedValue('FALSE', 1);
  UNDEFINED_0 = new SelectedValue('UNDEFINED', 2);
}

function SelectedValue(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_SelectedValue();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_SelectedValue_2_classLit, 1), $intern_2, 95, 0, [TRUE_0, FALSE_0, UNDEFINED_0]);
}

defineClass(95, 5, {219:1, 95:1, 3:1, 4:1, 5:1}, SelectedValue);
_.getAriaValue = function getAriaValue_1(){
  switch (this.ordinal) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'undefined';
  }
  return null;
}
;
var FALSE_0, TRUE_0, UNDEFINED_0;
var Lcom_google_gwt_aria_client_SelectedValue_2_classLit = createForEnum('com.google.gwt.aria.client', 'SelectedValue', 95, Ljava_lang_Enum_2_classLit, values_1);
function SeparatorRoleImpl(){
  RoleImpl.call(this, 'separator');
}

defineClass(530, 13, {}, SeparatorRoleImpl);
var Lcom_google_gwt_aria_client_SeparatorRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SeparatorRoleImpl', 530);
function SliderRoleImpl(){
  RoleImpl.call(this, 'slider');
}

defineClass(531, 13, {}, SliderRoleImpl);
var Lcom_google_gwt_aria_client_SliderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SliderRoleImpl', 531);
function SpinbuttonRoleImpl(){
  RoleImpl.call(this, 'spinbutton');
}

defineClass(532, 13, {}, SpinbuttonRoleImpl);
var Lcom_google_gwt_aria_client_SpinbuttonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SpinbuttonRoleImpl', 532);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  HIDDEN = new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  PRESSED = new AriaValueAttribute('aria-pressed');
  SELECTED = new AriaValueAttribute('aria-selected');
}

var HIDDEN, PRESSED, SELECTED;
function StatusRoleImpl(){
  RoleImpl.call(this, 'status');
}

defineClass(533, 13, {}, StatusRoleImpl);
var Lcom_google_gwt_aria_client_StatusRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'StatusRoleImpl', 533);
function TabRoleImpl(){
  RoleImpl.call(this, 'tab');
}

defineClass(536, 13, {}, TabRoleImpl);
var Lcom_google_gwt_aria_client_TabRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabRoleImpl', 536);
function TablistRoleImpl(){
  RoleImpl.call(this, 'tablist');
}

defineClass(534, 13, {}, TablistRoleImpl);
var Lcom_google_gwt_aria_client_TablistRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TablistRoleImpl', 534);
function TabpanelRoleImpl(){
  RoleImpl.call(this, 'tabpanel');
}

defineClass(535, 13, {}, TabpanelRoleImpl);
var Lcom_google_gwt_aria_client_TabpanelRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabpanelRoleImpl', 535);
function TextboxRoleImpl(){
  RoleImpl.call(this, 'textbox');
}

defineClass(537, 13, {}, TextboxRoleImpl);
var Lcom_google_gwt_aria_client_TextboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TextboxRoleImpl', 537);
function TimerRoleImpl(){
  RoleImpl.call(this, 'timer');
}

defineClass(538, 13, {}, TimerRoleImpl);
var Lcom_google_gwt_aria_client_TimerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TimerRoleImpl', 538);
function ToolbarRoleImpl(){
  RoleImpl.call(this, 'toolbar');
}

defineClass(539, 13, {}, ToolbarRoleImpl);
var Lcom_google_gwt_aria_client_ToolbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ToolbarRoleImpl', 539);
function TooltipRoleImpl(){
  RoleImpl.call(this, 'tooltip');
}

defineClass(540, 13, {}, TooltipRoleImpl);
var Lcom_google_gwt_aria_client_TooltipRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TooltipRoleImpl', 540);
function TreeRoleImpl(){
  RoleImpl.call(this, 'tree');
}

defineClass(543, 13, {}, TreeRoleImpl);
var Lcom_google_gwt_aria_client_TreeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeRoleImpl', 543);
function TreegridRoleImpl(){
  RoleImpl.call(this, 'treegrid');
}

defineClass(541, 13, {}, TreegridRoleImpl);
var Lcom_google_gwt_aria_client_TreegridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreegridRoleImpl', 541);
function TreeitemRoleImpl(){
  RoleImpl.call(this, 'treeitem');
}

defineClass(542, 13, {}, TreeitemRoleImpl);
var Lcom_google_gwt_aria_client_TreeitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeitemRoleImpl', 542);
function $elapsedMillis(this$static){
  return now_1() - this$static.start_0;
}

function Duration(){
  this.start_0 = now_1();
}

defineClass(144, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 144);
function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception);
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_2, 14, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  this$static.writetableStackTrace && this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState_0(!this$static.cause);
  checkCriticalArgument(true, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(14, 1, $intern_3);
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_3(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 14);
function Exception(){
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function Exception_0(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(16, 14, $intern_4);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 16);
function RuntimeException(){
  Exception.call(this);
}

function RuntimeException_0(message){
  Exception_0.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(26, 16, $intern_4, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 26);
defineClass(132, 26, $intern_4);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 132);
defineClass(234, 132, $intern_4);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 234);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description_0 = this$static.description_0 + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description_0;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_10(e);
  this.description_0 = '';
  this.e = e;
  this.description_0 = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(73, 234, {73:1, 3:1, 16:1, 14:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 73);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function safeEval(json){
  try {
    return JSON.parse(json);
  }
   catch (e) {
    return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
  }
}

function throwIllegalArgumentException(message, data_0){
  throw toJs(new IllegalArgumentException_0(message + '\n' + data_0));
}

defineClass(619, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 619);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getModuleBaseURL(){
  $clinit_Impl();
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function reportToBrowser(e){
  $clinit_Impl();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 14)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 73)?castTo(e, 73).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(320, 619, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 320);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(321, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 321);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(322, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 322);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(630, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 630);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(235, 630, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 235);
defineClass(631, 630, {});
_.collect = function collect_0(error){
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 631);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(236, 631, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 236);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $replaceChild(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = this$static.className || '';
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?(this$static.className = oldClassName + ' ' + className || '' , undefined):(this$static.className = className || '' , undefined);
    return true;
  }
  return false;
}

function $getAbsoluteLeft(this$static){
  return $getAbsoluteLeftImpl($getViewportElement(this$static.ownerDocument), this$static);
}

function $getAbsoluteTop(this$static){
  return $getAbsoluteTopImpl($getViewportElement(this$static.ownerDocument), this$static);
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = this$static.className || '';
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName || '';
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || (checkCriticalStringElementIndex(idx - 1, nameList.length) , nameList.charCodeAt(idx - 1) == 32)) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && (checkCriticalStringElementIndex(last, nameList.length) , nameList.charCodeAt(last) == 32)) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $setName(this$static, name_0){
  this$static.name = name_0;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $createMouseEvent(doc, type_0, canBubble, cancelable, detail, screenX_0, screenY_0, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
  button == 1?(button = 0):button == 4?(button = 1):(button = 2);
  var evt = doc.createEvent('MouseEvents');
  evt.initMouseEvent(type_0, canBubble, cancelable, null, detail, screenX_0, screenY_0, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget);
  return evt;
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $getDocumentScrollingElement(doc){
  if (doc.scrollingElement) {
    return doc.scrollingElement;
  }
  return $equals_0(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body;
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $eventGetRelatedTarget(evt){
  var relatedTarget = evt.relatedTarget;
  if (!relatedTarget) {
    return null;
  }
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}

function $getAbsoluteLeftImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().left + viewport.scrollLeft | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenX - doc.getBoxObjectFor(doc.documentElement).screenX;
  }
}

function $getAbsoluteTopImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().top + viewport.scrollTop | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenY - doc.getBoxObjectFor(doc.documentElement).screenY;
  }
}

function $getBodyOffsetLeft(doc){
  var style = $wnd.getComputedStyle(doc.documentElement, null);
  if (style == null) {
    return 0;
  }
  return parseInt(style.marginLeft, 10) + parseInt(style.borderLeftWidth, 10);
}

function $getBodyOffsetTop(doc){
  var style = $wnd.getComputedStyle(doc.documentElement, null);
  if (style == null) {
    return 0;
  }
  return parseInt(style.marginTop, 10) + parseInt(style.borderTopWidth, 10);
}

function $getScrollLeft(elem){
  var geckoVersion;
  geckoVersion = getGeckoVersion();
  if (!(geckoVersion != -1 && geckoVersion >= 1009000) && $isRTL(elem)) {
    return ((elem.scrollLeft || 0) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return (elem.scrollLeft || 0) | 0;
}

function $isOrHasChild(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function $isRTL(elem){
  var style = elem.ownerDocument.defaultView.getComputedStyle(elem, null);
  return style.direction == 'rtl';
}

function $setScrollLeft(elem, left){
  var geckoVersion;
  geckoVersion = getGeckoVersion();
  !(geckoVersion != -1 && geckoVersion >= 1009000) && $isRTL(elem) && (left += ((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  elem.scrollLeft = left;
}

function $toString_0(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}

function getGeckoVersion(){
  var result = /rv:([0-9]+)\.([0-9]+)(\.([0-9]+))?.*?/.exec(navigator.userAgent.toLowerCase());
  if (result && result.length >= 3) {
    var version = parseInt(result[1]) * 1000000 + parseInt(result[2]) * $intern_5 + parseInt(result.length >= 5 && !isNaN(result[4])?result[4]:0);
    return version;
  }
  return -1;
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getClientHeight(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getScrollHeight(this$static){
  return (($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function $getScrollLeft_0(this$static){
  var scrollingElement;
  return $getScrollLeft((scrollingElement = $getDocumentScrollingElement(this$static) , scrollingElement?scrollingElement:this$static.documentElement));
}

function $getScrollTop(this$static){
  var scrollingElement;
  return ((scrollingElement = $getDocumentScrollingElement(this$static) , scrollingElement?scrollingElement:this$static.documentElement).scrollTop || 0) | 0;
}

function $getScrollWidth(this$static){
  return (($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function $getViewportElement(this$static){
  return $equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body;
}

function $setTarget(this$static, target){
  this$static.target = target;
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $setChecked(this$static, checked){
  this$static.checked = checked;
}

function $setDefaultChecked(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function $setSize(this$static, size_0){
  this$static.size = size_0;
}

function $setHtmlFor(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function $setSelectedIndex(this$static, index_0){
  this$static.selectedIndex = index_0;
}

function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
  FLEX = new Style$Display$18;
  INLINE_FLEX = new Style$Display$19;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Display();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_2, 17, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL, FLEX, INLINE_FLEX]);
}

defineClass(17, 5, $intern_6);
var BLOCK, FLEX, INITIAL, INLINE, INLINE_BLOCK, INLINE_FLEX, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 17, Ljava_lang_Enum_2_classLit, values_2);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(258, 17, $intern_6, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 258, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(267, 17, $intern_6, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 267, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(268, 17, $intern_6, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 268, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(269, 17, $intern_6, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 269, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(270, 17, $intern_6, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 270, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(271, 17, $intern_6, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 271, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(272, 17, $intern_6, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 272, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(273, 17, $intern_6, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 273, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(274, 17, $intern_6, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 274, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$18(){
  Style$Display.call(this, 'FLEX', 17);
}

defineClass(275, 17, $intern_6, Style$Display$18);
var Lcom_google_gwt_dom_client_Style$Display$18_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/18', 275, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$19(){
  Style$Display.call(this, 'INLINE_FLEX', 18);
}

defineClass(276, 17, $intern_6, Style$Display$19);
var Lcom_google_gwt_dom_client_Style$Display$19_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/19', 276, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(259, 17, $intern_6, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 259, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(260, 17, $intern_6, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 260, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(261, 17, $intern_6, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 261, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(262, 17, $intern_6, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 262, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(263, 17, $intern_6, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 263, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(264, 17, $intern_6, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 264, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(265, 17, $intern_6, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 265, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(266, 17, $intern_6, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 266, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN_0 = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_2, 56, 0, [VISIBLE, HIDDEN_0, SCROLL, AUTO]);
}

defineClass(56, 5, $intern_7);
var AUTO, HIDDEN_0, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 56, Ljava_lang_Enum_2_classLit, values_3);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(277, 56, $intern_7, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 277, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(278, 56, $intern_7, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 278, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(279, 56, $intern_7, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 279, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(280, 56, $intern_7, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 280, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_2, 57, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(57, 5, $intern_8);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 57, Ljava_lang_Enum_2_classLit, values_4);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(281, 57, $intern_8, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 281, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(282, 57, $intern_8, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 282, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(283, 57, $intern_8, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 283, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(284, 57, $intern_8, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 284, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$TextAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_2, 58, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(58, 5, $intern_9);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 58, Ljava_lang_Enum_2_classLit, values_5);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(285, 58, $intern_9, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 285, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(286, 58, $intern_9, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 286, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(287, 58, $intern_9, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 287, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(288, 58, $intern_9, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 288, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_2, 34, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(34, 5, $intern_10);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 34, Ljava_lang_Enum_2_classLit, values_6);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(249, 34, $intern_10, Style$Unit$1);
_.getType = function getType(){
  return 'px';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 249, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(250, 34, $intern_10, Style$Unit$2);
_.getType = function getType_0(){
  return '%';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 250, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(251, 34, $intern_10, Style$Unit$3);
_.getType = function getType_1(){
  return 'em';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 251, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(252, 34, $intern_10, Style$Unit$4);
_.getType = function getType_2(){
  return 'ex';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 252, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(253, 34, $intern_10, Style$Unit$5);
_.getType = function getType_3(){
  return 'pt';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 253, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(254, 34, $intern_10, Style$Unit$6);
_.getType = function getType_4(){
  return 'pc';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 254, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(255, 34, $intern_10, Style$Unit$7);
_.getType = function getType_5(){
  return 'in';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 255, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(256, 34, $intern_10, Style$Unit$8);
_.getType = function getType_6(){
  return 'cm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 256, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(257, 34, $intern_10, Style$Unit$9);
_.getType = function getType_7(){
  return 'mm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 257, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_1 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$Visibility();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_2, 91, 0, [VISIBLE_0, HIDDEN_1]);
}

defineClass(91, 5, $intern_11);
var HIDDEN_1, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 91, Ljava_lang_Enum_2_classLit, values_7);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(289, 91, $intern_11, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 289, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(290, 91, $intern_11, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 290, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function $clinit_StyleInjector(){
  $clinit_StyleInjector = emptyMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1;
}

function flush(){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtStart && (toReturn = maybeReturn);
    toInjectAtStart.length = 0;
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInject && (toReturn = maybeReturn);
    toInject.length = 0;
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtEnd && (toReturn = maybeReturn);
    toInjectAtEnd.length = 0;
  }
  needsInjection = false;
  return toReturn;
}

function inject(css){
  $clinit_StyleInjector();
  $push(toInject, css);
  schedule();
}

function schedule(){
  $clinit_StyleInjector();
  if (!needsInjection) {
    needsInjection = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function StyleInjector$1(){
}

defineClass(577, 1, {}, StyleInjector$1);
_.execute_1 = function execute_3(){
  ($clinit_StyleInjector() , needsInjection) && flush();
}
;
var Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/1', 577);
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = emptyMethod;
  IMPL = new StyleInjector$StyleInjectorImpl;
}

function $createElement(contents){
  var style;
  style = $doc.createElement('style');
  style['language'] = 'text/css';
  style.textContent = contents || '';
  return style;
}

function $getHead(this$static){
  var elt;
  if (!this$static.head) {
    elt = $doc.getElementsByTagName('head')[0];
    this$static.head = elt;
  }
  return this$static.head;
}

function $injectStyleSheet(this$static, contents){
  var style;
  style = $createElement(contents);
  $appendChild($getHead(this$static), style);
  return style;
}

function $injectStyleSheetAtStart(this$static, contents){
  var style;
  style = $createElement(contents);
  $insertBefore($getHead(this$static), style, this$static.head.firstChild);
  return style;
}

function StyleInjector$StyleInjectorImpl(){
}

defineClass(576, 1, {}, StyleInjector$StyleInjectorImpl);
var IMPL;
var Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/StyleInjectorImpl', 576);
function $setCols(this$static, cols_0){
  this$static.cols = cols_0;
}

function $setRows(this$static, rows_0){
  this$static.rows = rows_0;
}

defineClass(634, 1, {});
_.toString_0 = function toString_4(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 634);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(635, 634, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 635);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = castTo($unsafeGet(registered, nativeEvent.type), 24);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = castTo(type$iterator.next_1(), 42);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(646, 635, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 646);
function $clinit_BlurEvent(){
  $clinit_BlurEvent = emptyMethod;
  TYPE = new DomEvent$Type('blur', new BlurEvent);
}

function BlurEvent(){
}

defineClass(454, 646, {}, BlurEvent);
_.dispatch = function dispatch(handler){
  castTo(handler, 618).onBlur(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'BlurEvent', 454);
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('change', new ChangeEvent);
}

function ChangeEvent(){
}

defineClass(471, 646, {}, ChangeEvent);
_.dispatch = function dispatch_0(handler){
  castTo(handler, 218).onChange(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ChangeEvent', 471);
defineClass(649, 646, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 649);
function $getX(this$static){
  var e, relativeElem;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ((e.clientX || 0) | 0) - $getAbsoluteLeftImpl($getViewportElement(relativeElem.ownerDocument), relativeElem) + $getScrollLeft(relativeElem) + $getScrollLeft_0(relativeElem.ownerDocument);
  }
  return (this$static.nativeEvent.clientX || 0) | 0;
}

function $getY(this$static){
  var e, relativeElem;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ((e.clientY || 0) | 0) - $getAbsoluteTopImpl($getViewportElement(relativeElem.ownerDocument), relativeElem) + ((relativeElem.scrollTop || 0) | 0) + $getScrollTop(relativeElem.ownerDocument);
  }
  return (this$static.nativeEvent.clientY || 0) | 0;
}

defineClass(650, 649, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 650);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(411, 650, {}, ClickEvent);
_.dispatch = function dispatch_1(handler){
  castTo(handler, 29).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 411);
defineClass(240, 1, {});
_.hashCode_0 = function hashCode_3(){
  return this.index_0;
}
;
_.toString_0 = function toString_5(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 240);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(41, 240, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 41);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = castTo($unsafeGet(registered, eventName), 24);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_0(this);
  this.name_0 = eventName;
}

defineClass(42, 41, {42:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 42);
function $clinit_FocusEvent(){
  $clinit_FocusEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type('focus', new FocusEvent_0);
}

function $dispatch(handler){
  handler.this$01.allowDPShow && !handler.this$01.popup.showing && $showDatePicker(handler.this$01);
}

function FocusEvent_0(){
}

defineClass(453, 646, {}, FocusEvent_0);
_.dispatch = function dispatch_2(handler){
  $dispatch(castTo(handler, 667));
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'FocusEvent', 453);
defineClass(647, 646, {});
var Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyEvent', 647);
defineClass(648, 647, {});
var Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyCodeEvent', 648);
function maybeSwapArrowKeysForRtl(code_0, isRtl){
  isRtl && (code_0 == 39?(code_0 = 37):code_0 == 37 && (code_0 = 39));
  return code_0;
}

function $clinit_KeyDownEvent(){
  $clinit_KeyDownEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type('keydown', new KeyDownEvent);
}

function KeyDownEvent(){
}

defineClass(455, 648, {}, KeyDownEvent);
_.dispatch = function dispatch_3(handler){
  castTo(handler, 217).onKeyDown(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_dom_client_KeyDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyDownEvent', 455);
function $clinit_KeyUpEvent(){
  $clinit_KeyUpEvent = emptyMethod;
  TYPE_4 = new DomEvent$Type('keyup', new KeyUpEvent);
}

function KeyUpEvent(){
}

defineClass(410, 648, {}, KeyUpEvent);
_.dispatch = function dispatch_4(handler){
  castTo(handler, 616).onKeyUp(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyUpEvent', 410);
function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = emptyMethod;
  TYPE_5 = new DomEvent$Type('mousedown', new MouseDownEvent);
}

function $dispatch_0(this$static, handler){
  $beginDragging(handler.this$01, this$static);
}

function MouseDownEvent(){
}

defineClass(608, 650, {}, MouseDownEvent);
_.dispatch = function dispatch_5(handler){
  $dispatch_0(this, castTo(handler, 669));
}
;
_.getAssociatedType_0 = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
var Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseDownEvent', 608);
function $clinit_MouseMoveEvent(){
  $clinit_MouseMoveEvent = emptyMethod;
  TYPE_6 = new DomEvent$Type('mousemove', new MouseMoveEvent);
}

function $dispatch_1(this$static, handler){
  $continueDragging(handler.this$01, this$static);
}

function MouseMoveEvent(){
}

defineClass(610, 650, {}, MouseMoveEvent);
_.dispatch = function dispatch_6(handler){
  $dispatch_1(this, castTo(handler, 673));
}
;
_.getAssociatedType_0 = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseMoveEvent', 610);
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = emptyMethod;
  TYPE_7 = new DomEvent$Type('mouseout', new MouseOutEvent);
}

function MouseOutEvent(){
}

defineClass(612, 650, {}, MouseOutEvent);
_.dispatch = function dispatch_7(handler){
  castTo(handler, 671);
}
;
_.getAssociatedType_0 = function getAssociatedType_8(){
  return TYPE_7;
}
;
var TYPE_7;
var Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOutEvent', 612);
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = emptyMethod;
  TYPE_8 = new DomEvent$Type('mouseover', new MouseOverEvent);
}

function MouseOverEvent(){
}

defineClass(611, 650, {}, MouseOverEvent);
_.dispatch = function dispatch_8(handler){
  castTo(handler, 672);
}
;
_.getAssociatedType_0 = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOverEvent', 611);
function $clinit_MouseUpEvent(){
  $clinit_MouseUpEvent = emptyMethod;
  TYPE_9 = new DomEvent$Type('mouseup', new MouseUpEvent);
}

function $dispatch_2(this$static, handler){
  $endDragging(handler.this$01, this$static);
}

function MouseUpEvent(){
}

defineClass(609, 650, {}, MouseUpEvent);
_.dispatch = function dispatch_9(handler){
  $dispatch_2(this, castTo(handler, 670));
}
;
_.getAssociatedType_0 = function getAssociatedType_10(){
  return TYPE_9;
}
;
var TYPE_9;
var Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseUpEvent', 609);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(456, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 456);
defineClass(655, 649, {});
var impl;
var Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent', 655);
function $clinit_TouchCancelEvent(){
  $clinit_TouchCancelEvent = emptyMethod;
  TYPE_10 = new DomEvent$Type('touchcancel', new TouchCancelEvent);
}

function TouchCancelEvent(){
}

defineClass(463, 655, {}, TouchCancelEvent);
_.dispatch = function dispatch_10(handler){
  $onTouchEnd(castTo(handler, 677).this$01);
}
;
_.getAssociatedType_0 = function getAssociatedType_11(){
  return TYPE_10;
}
;
var TYPE_10;
var Lcom_google_gwt_event_dom_client_TouchCancelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchCancelEvent', 463);
function $clinit_TouchEndEvent(){
  $clinit_TouchEndEvent = emptyMethod;
  TYPE_11 = new DomEvent$Type('touchend', new TouchEndEvent);
}

function TouchEndEvent(){
}

defineClass(462, 655, {}, TouchEndEvent);
_.dispatch = function dispatch_11(handler){
  $onTouchEnd(castTo(handler, 676).this$01);
}
;
_.getAssociatedType_0 = function getAssociatedType_12(){
  return TYPE_11;
}
;
var TYPE_11;
var Lcom_google_gwt_event_dom_client_TouchEndEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEndEvent', 462);
function TouchEvent$TouchSupportDetector(){
  this.isSupported = 'ontouchstart' in $wnd;
}

defineClass(460, 1, {}, TouchEvent$TouchSupportDetector);
_.isSupported = false;
var Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent/TouchSupportDetector', 460);
function $clinit_TouchMoveEvent(){
  $clinit_TouchMoveEvent = emptyMethod;
  TYPE_12 = new DomEvent$Type('touchmove', new TouchMoveEvent);
}

function $dispatch_3(this$static, handler){
  $onTouchMove(handler.this$01, this$static);
}

function TouchMoveEvent(){
}

defineClass(461, 655, {}, TouchMoveEvent);
_.dispatch = function dispatch_12(handler){
  $dispatch_3(this, castTo(handler, 675));
}
;
_.getAssociatedType_0 = function getAssociatedType_13(){
  return TYPE_12;
}
;
var TYPE_12;
var Lcom_google_gwt_event_dom_client_TouchMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchMoveEvent', 461);
function $clinit_TouchStartEvent(){
  $clinit_TouchStartEvent = emptyMethod;
  TYPE_13 = new DomEvent$Type('touchstart', new TouchStartEvent);
}

function $dispatch_4(this$static, handler){
  $onTouchStart(handler.this$01, this$static);
}

function TouchStartEvent(){
}

defineClass(459, 655, {}, TouchStartEvent);
_.dispatch = function dispatch_13(handler){
  $dispatch_4(this, castTo(handler, 674));
}
;
_.getAssociatedType_0 = function getAssociatedType_14(){
  return TYPE_13;
}
;
var TYPE_13;
var Lcom_google_gwt_event_dom_client_TouchStartEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchStartEvent', 459);
function $dispatch_5(this$static, handler){
  this$static.attached?$setupBustClickHandler(handler.this$01):$removeBustClickHandler(handler.this$01);
}

function AttachEvent(attached){
  this.attached = attached;
}

function fire_0(source, attached){
  var event_0;
  if (TYPE_14) {
    event_0 = new AttachEvent(attached);
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(408, 635, {}, AttachEvent);
_.dispatch = function dispatch_14(handler){
  $dispatch_5(this, castTo(handler, 668));
}
;
_.getAssociatedType = function getAssociatedType_15(){
  return TYPE_14;
}
;
_.attached = false;
var TYPE_14;
var Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'AttachEvent', 408);
function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_15) {
    event_0 = new CloseEvent_0;
    source.fireEvent(event_0);
  }
}

defineClass(407, 635, {}, CloseEvent_0);
_.dispatch = function dispatch_15(handler){
  castTo(handler, 216).onClose(this);
}
;
_.getAssociatedType = function getAssociatedType_16(){
  return TYPE_15;
}
;
var TYPE_15;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 407);
defineClass(645, 635, {});
_.dispatch = function dispatch_16(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_17(){
  return TYPE_16;
}
;
var TYPE_16;
var Lcom_google_gwt_event_logical_shared_HighlightEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'HighlightEvent', 645);
function OpenEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_17) {
    event_0 = new OpenEvent;
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(583, 635, {}, OpenEvent);
_.dispatch = function dispatch_17(handler){
  castTo(handler, 617).onOpen(this);
}
;
_.getAssociatedType = function getAssociatedType_18(){
  return TYPE_17;
}
;
var TYPE_17;
var Lcom_google_gwt_event_logical_shared_OpenEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'OpenEvent', 583);
function ResizeEvent(width_0){
  this.width_0 = width_0;
}

function fire_3(source, width_0){
  var event_0;
  if (TYPE_18) {
    event_0 = new ResizeEvent(width_0);
    $fireEvent(source, event_0);
  }
}

defineClass(544, 635, {}, ResizeEvent);
_.dispatch = function dispatch_18(handler){
  castTo(handler, 160).onResize(this);
}
;
_.getAssociatedType = function getAssociatedType_19(){
  return TYPE_18;
}
;
_.width_0 = 0;
var TYPE_18;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 544);
function ValueChangeEvent(value_0){
  this.value_0 = value_0;
}

function fire_4(source, value_0){
  var event_0;
  if (TYPE_19) {
    event_0 = new ValueChangeEvent(value_0);
    source.fireEvent(event_0);
  }
}

defineClass(204, 635, {}, ValueChangeEvent);
_.dispatch = function dispatch_19(handler){
  castTo(handler, 129).onValueChange(this);
}
;
_.getAssociatedType = function getAssociatedType_20(){
  return TYPE_19;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
var TYPE_19;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 204);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 89)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(92, 1, {9:1}, HandlerManager, HandlerManager_0);
_.fireEvent = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 92);
defineClass(637, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 637);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_2(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  if (!handler) {
    throw toJs(new NullPointerException_0('Cannot add a null handler'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType(), null) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_1();
      try {
        event_0.dispatch(castTo(handler, 15));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 14)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put_0(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_0(handler);
  removed && l.isEmpty() && (sourceMap = castTo($get_4(this$static.map_0, type_0), 55) , castTo(sourceMap.remove_3(source), 24) , sourceMap.isEmpty() && $remove_11(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_4(this$static.map_0, type_0), 55);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_0(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_1(source), 24);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_4(this$static.map_0, type_0), 55);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get_1(source), 24);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = castTo($next_6(c$iterator), 614);
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map_0, eventKey);
}

defineClass(301, 637, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 301);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(302, 301, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 302);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(440, 1, {666:1}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 440);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:castTo(causes.iterator().next_1(), 14));
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_1(), 14);
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = castTo(t$iterator.next_1(), 14);
    first?(first = false):(b.string += '; ' , b);
    $append_3(b, t.getMessage());
  }
  return b.string;
}

defineClass(89, 26, $intern_12, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 89);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(172, 89, $intern_12, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 172);
function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  $onError(this$static.callback, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw toJs(new NullPointerException);
  }
  if (!callback) {
    throw toJs(new NullPointerException);
  }
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(362, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 362);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(364, 143, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 364);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 73)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw toJs(requestPermissionException);
    }
     else 
      throw toJs($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 73)) {
      e = $e1;
      throw toJs(new RequestException(e.getMessage()));
    }
     else 
      throw toJs($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap);
  $putStringValue(this$static.headers, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && $size(this$static.headers) > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers)).this$01); header$iterator.hasNext;) {
      header = $next_4(header$iterator);
      try {
        $setRequestHeader(xmlHttpRequest, castToString(header.getKey()), castToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 73)) {
          e = $e0;
          throw toJs(new RequestException(e.getMessage()));
        }
         else 
          throw toJs($e0);
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(197, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 197);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(420, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 420);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(105, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_6(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 105);
function RequestException(message){
  Exception_0.call(this, message);
}

defineClass(64, 16, $intern_13, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 64);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(458, 64, $intern_13, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 458);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(560, 64, $intern_13, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 560);
defineClass(641, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 641);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(363, 641, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 363);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw toJs(new IllegalArgumentException_0(name_0 + ' cannot be empty'));
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0(name_0 + ' cannot be null'));
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = emptyMethod;
  new HashMap;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.string.length > 0) {
    $add_2(this$static.patternParts, new DateTimeFormat$PatternPart(buf.string, count));
    oldLength = buf.string.length;
    0 < oldLength?(buf.string = buf.string.substr(0, 0)):0 > oldLength && (buf.string += valueOf_5(initUnidimensionalArray(C_classLit, $intern_2, 110, -oldLength, 15, 1)));
  }
}

function $format(this$static, date, timeZone){
  var ch_0, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  !timeZone && (timeZone = createTimeZone(date.jsdate.getTimezoneOffset()));
  diff = (date.jsdate.getTimezoneOffset() - timeZone.standardOffset) * 60000;
  keepDate = new Date_2(add_2(date.getTime_0(), diff));
  keepTime = keepDate;
  if (keepDate.jsdate.getTimezoneOffset() != date.jsdate.getTimezoneOffset()) {
    diff > 0?(diff -= $intern_14):(diff += $intern_14);
    keepTime = new Date_2(add_2(date.getTime_0(), diff));
  }
  toAppendTo = new StringBuilder_0;
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch_0 = $charAt(this$static.pattern, i);
    if (ch_0 >= 97 && ch_0 <= 122 || ch_0 >= 65 && ch_0 <= 90) {
      for (j = i + 1; j < n && $charAt(this$static.pattern, j) == ch_0; ++j)
      ;
      $subFormat(toAppendTo, ch_0, j - i, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch_0 == 39) {
      ++i;
      if (i < n && $charAt(this$static.pattern, i) == 39) {
        toAppendTo.string += "'";
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && $charAt(this$static.pattern, j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw toJs(new IllegalArgumentException_0("Missing trailing '"));
        }
        j + 1 < n && $charAt(this$static.pattern, j + 1) == 39?++j:(trailQuote = true);
        $append_3(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      toAppendTo.string += String.fromCharCode(ch_0);
      ++i;
    }
  }
  return toAppendTo.string;
}

function $formatFractionalSeconds(buf, count, date){
  var time, value_0;
  time = fromDouble_0(date.jsdate.getTime());
  if (compare_1(time, 0) < 0) {
    value_0 = $intern_5 - toInt_0(mod(neg_0(time), $intern_5));
    value_0 == $intern_5 && (value_0 = 0);
  }
   else {
    value_0 = toInt_0(mod(time, $intern_5));
  }
  if (count == 1) {
    value_0 = $wnd.Math.min((value_0 + 50) / 100 | 0, 9);
    $append_1(buf, 48 + value_0 & $intern_15);
  }
   else if (count == 2) {
    value_0 = $wnd.Math.min((value_0 + 5) / 10 | 0, 99);
    $zeroPaddingNumber(buf, value_0, 2);
  }
   else {
    $zeroPaddingNumber(buf, value_0, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMonth(buf, count, date){
  var value_0;
  value_0 = date.jsdate.getMonth();
  switch (count) {
    case 5:
      $append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_0]);
      break;
    case 4:
      $append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_0]);
      break;
    case 3:
      $append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_0]);
      break;
    default:$zeroPaddingNumber(buf, value_0 + 1, count);
  }
}

function $formatYear(buf, count, date){
  var value_0;
  value_0 = date.jsdate.getFullYear() - $intern_17 + $intern_17;
  value_0 < 0 && (value_0 = -value_0);
  switch (count) {
    case 1:
      buf.string += value_0;
      break;
    case 2:
      $zeroPaddingNumber(buf, value_0 % 100, 2);
      break;
    default:$zeroPaddingNumber(buf, value_0, count);
  }
}

function $getNextCharCountInPattern(pattern, start_0){
  var ch_0, next;
  ch_0 = (checkCriticalStringElementIndex(start_0, pattern.length) , pattern.charCodeAt(start_0));
  next = start_0 + 1;
  while (next < pattern.length && (checkCriticalStringElementIndex(next, pattern.length) , pattern.charCodeAt(next) == ch_0)) {
    ++next;
  }
  return next - start_0;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.array.length;
  for (i = 0; i < len; i++) {
    if ($isNumeric(castTo($get_1(this$static.patternParts, i), 94))) {
      if (!abut && i + 1 < len && $isNumeric(castTo($get_1(this$static.patternParts, i + 1), 94))) {
        abut = true;
        castTo($get_1(this$static.patternParts, i), 94).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = $indexOf_2('MLydhHmsSDkK', fromCodePoint($charAt(part.text_0, 0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $matchString(text_0, start_0, data_0, pos){
  var bestMatch, bestMatchLength, count, i, length_0, textInLowerCase;
  count = data_0.length;
  bestMatchLength = 0;
  bestMatch = -1;
  textInLowerCase = $toLowerCase(text_0.substr(start_0), ($clinit_Locale() , ROOT));
  for (i = 0; i < count; ++i) {
    length_0 = data_0[i].length;
    if (length_0 > bestMatchLength && $startsWith(textInLowerCase, $toLowerCase(data_0[i], ROOT))) {
      bestMatch = i;
      bestMatchLength = length_0;
    }
  }
  bestMatch >= 0 && (pos[0] = start_0 + bestMatchLength);
  return bestMatch;
}

function $parse(this$static, text_0, date){
  var abutPass, abutPat, abutStart, cal, count, i, parsePos, part, s;
  cal = new DateRecord;
  parsePos = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_2, 110, 15, [0]);
  abutPat = -1;
  abutStart = 0;
  abutPass = 0;
  for (i = 0; i < this$static.patternParts.array.length; ++i) {
    part = castTo($get_1(this$static.patternParts, i), 94);
    if (part.count > 0) {
      if (abutPat < 0 && part.abutStart) {
        abutPat = i;
        abutStart = parsePos[0];
        abutPass = 0;
      }
      if (abutPat >= 0) {
        count = part.count;
        if (i == abutPat) {
          count -= abutPass++;
          if (count == 0) {
            return 0;
          }
        }
        if (!$subParse(text_0, parsePos, part, count, cal)) {
          i = abutPat - 1;
          parsePos[0] = abutStart;
          continue;
        }
      }
       else {
        abutPat = -1;
        if (!$subParse(text_0, parsePos, part, 0, cal)) {
          return 0;
        }
      }
    }
     else {
      abutPat = -1;
      if ($charAt(part.text_0, 0) == 32) {
        s = parsePos[0];
        $skipSpace(text_0, parsePos);
        if (parsePos[0] > s) {
          continue;
        }
      }
       else if ($startsWith_0(text_0, part.text_0, parsePos[0])) {
        parsePos[0] += part.text_0.length;
        continue;
      }
      return 0;
    }
  }
  if (!$calcDate(cal, date)) {
    return 0;
  }
  return parsePos[0];
}

function $parse_0(this$static, text_0){
  var charsConsumed, curDate, date;
  curDate = new Date_0;
  date = new Date_1(curDate.jsdate.getFullYear() - $intern_17, curDate.jsdate.getMonth(), curDate.jsdate.getDate());
  charsConsumed = $parse(this$static, text_0, date);
  if (charsConsumed == 0 || charsConsumed < text_0.length) {
    throw toJs(new IllegalArgumentException_0(text_0));
  }
  return date;
}

function $parseInt(text_0, pos){
  var ch_0, ind, ret;
  ret = 0;
  ind = pos[0];
  if (ind >= text_0.length) {
    return -1;
  }
  ch_0 = (checkCriticalStringElementIndex(ind, text_0.length) , text_0.charCodeAt(ind));
  while (ch_0 >= 48 && ch_0 <= 57) {
    ret = ret * 10 + (ch_0 - 48);
    ++ind;
    if (ind >= text_0.length) {
      break;
    }
    ch_0 = (checkCriticalStringElementIndex(ind, text_0.length) , text_0.charCodeAt(ind));
  }
  ind > pos[0]?(pos[0] = ind):(ret = -1);
  return ret;
}

function $parsePattern(this$static, pattern){
  var buf, ch_0, count, i, inQuote;
  buf = new StringBuilder_0;
  inQuote = false;
  for (i = 0; i < pattern.length; i++) {
    ch_0 = (checkCriticalStringElementIndex(i, pattern.length) , pattern.charCodeAt(i));
    if (ch_0 == 32) {
      $addPart(this$static, buf, 0);
      buf.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < pattern.length && (checkCriticalStringElementIndex(i + 1, pattern.length) , pattern.charCodeAt(i + 1) == 32)) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch_0 == 39) {
        if (i + 1 < pattern.length && (checkCriticalStringElementIndex(i + 1, pattern.length) , pattern.charCodeAt(i + 1) == 39)) {
          buf.string += "'";
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.string += String.fromCharCode(ch_0);
      }
      continue;
    }
    if ($indexOf_2('GyMLdkHmsSEcDahKzZv', fromCodePoint(ch_0)) > 0) {
      $addPart(this$static, buf, 0);
      buf.string += String.fromCharCode(ch_0);
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch_0 == 39) {
      if (i + 1 < pattern.length && (checkCriticalStringElementIndex(i + 1, pattern.length) , pattern.charCodeAt(i + 1) == 39)) {
        buf.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.string += String.fromCharCode(ch_0);
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $parseTimeZoneOffset(text_0, pos, cal){
  var offset, sign, st, value_0;
  if (pos[0] >= text_0.length) {
    cal.tzOffset = 0;
    return true;
  }
  switch ($charAt(text_0, pos[0])) {
    case 43:
      sign = 1;
      break;
    case 45:
      sign = -1;
      break;
    default:cal.tzOffset = 0;
      return true;
  }
  ++pos[0];
  st = pos[0];
  value_0 = $parseInt(text_0, pos);
  if (value_0 == 0 && pos[0] == st) {
    return false;
  }
  if (pos[0] < text_0.length && $charAt(text_0, pos[0]) == 58) {
    offset = value_0 * 60;
    ++pos[0];
    st = pos[0];
    value_0 = $parseInt(text_0, pos);
    if (value_0 == 0 && pos[0] == st) {
      return false;
    }
    offset += value_0;
  }
   else {
    offset = value_0;
    value_0 < 24 && pos[0] - st <= 2?(offset *= 60):(offset = value_0 % 100 + (value_0 / 100 | 0) * 60);
  }
  offset *= sign;
  cal.tzOffset = -offset;
  return true;
}

function $skipSpace(text_0, pos){
  while (pos[0] < text_0.length && $indexOf_2(' \t\r\n', fromCodePoint($charAt(text_0, pos[0]))) >= 0) {
    ++pos[0];
  }
}

function $subFormat(buf, ch_0, count, adjustedDate, adjustedTime, timezone){
  var value_0, value0, value1, value10, value2, value3, value4, value5, value6, value7, value8, value9;
  switch (ch_0) {
    case 71:
      value0 = adjustedDate.jsdate.getFullYear() - $intern_17 >= -1900?1:0;
      count >= 4?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Before Christ', 'Anno Domini'])[value0]):$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['BC', 'AD'])[value0]);
      break;
    case 121:
      $formatYear(buf, count, adjustedDate);
      break;
    case 77:
      $formatMonth(buf, count, adjustedDate);
      break;
    case 107:
      value1 = adjustedTime.jsdate.getHours();
      value1 == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value1, count);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, adjustedTime);
      break;
    case 69:
      value2 = adjustedDate.jsdate.getDay();
      count == 5?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value2]):count == 4?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value2]):$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value2]);
      break;
    case 97:
      adjustedTime.jsdate.getHours() >= 12 && adjustedTime.jsdate.getHours() < 24?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['AM', 'PM'])[1]):$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['AM', 'PM'])[0]);
      break;
    case 104:
      value3 = adjustedTime.jsdate.getHours() % 12;
      value3 == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value3, count);
      break;
    case 75:
      value4 = adjustedTime.jsdate.getHours() % 12;
      $zeroPaddingNumber(buf, value4, count);
      break;
    case 72:
      value5 = adjustedTime.jsdate.getHours();
      $zeroPaddingNumber(buf, value5, count);
      break;
    case 99:
      value6 = adjustedDate.jsdate.getDay();
      count == 5?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value6]):count == 4?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value6]):count == 3?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value6]):$zeroPaddingNumber(buf, value6, 1);
      break;
    case 76:
      value7 = adjustedDate.jsdate.getMonth();
      count == 5?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value7]):count == 4?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value7]):count == 3?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value7]):$zeroPaddingNumber(buf, value7 + 1, count);
      break;
    case 81:
      value8 = adjustedDate.jsdate.getMonth() / 3 | 0;
      count < 4?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Q1', 'Q2', 'Q3', 'Q4'])[value8]):$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[value8]);
      break;
    case 100:
      value9 = adjustedDate.jsdate.getDate();
      $zeroPaddingNumber(buf, value9, count);
      break;
    case 109:
      value10 = adjustedTime.jsdate.getMinutes();
      $zeroPaddingNumber(buf, value10, count);
      break;
    case 115:
      value_0 = adjustedTime.jsdate.getSeconds();
      $zeroPaddingNumber(buf, value_0, count);
      break;
    case 122:
      count < 4?$append_3(buf, timezone.tzNames[0]):$append_3(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_3(buf, timezone.timezoneID);
      break;
    case 90:
      count < 3?$append_3(buf, $getRFCTimeZoneString(timezone)):count == 3?$append_3(buf, $getISOTimeZoneString(timezone)):$append_3(buf, composeGMTString(timezone.standardOffset));
      break;
    default:return false;
  }
  return true;
}

function $subParse(text_0, pos, part, digitCount, cal){
  var ch_0, start_0, value_0;
  $skipSpace(text_0, pos);
  start_0 = pos[0];
  ch_0 = $charAt(part.text_0, 0);
  value_0 = -1;
  if ($isNumeric(part)) {
    if (digitCount > 0) {
      if (start_0 + digitCount > text_0.length) {
        return false;
      }
      value_0 = $parseInt(text_0.substr(0, start_0 + digitCount), pos);
    }
     else {
      value_0 = $parseInt(text_0, pos);
    }
  }
  switch (ch_0) {
    case 71:
      value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Before Christ', 'Anno Domini']), pos);
      cal.era = value_0;
      return true;
    case 77:
      return $subParseMonth(text_0, pos, cal, value_0, start_0);
    case 76:
      return $subParseStandaloneMonth(text_0, pos, cal, value_0, start_0);
    case 69:
      return $subParseDayOfWeek(text_0, pos, start_0, cal);
    case 99:
      return $subParseStandaloneDay(text_0, pos, start_0, cal);
    case 97:
      value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['AM', 'PM']), pos);
      cal.ampm = value_0;
      return true;
    case 121:
      return $subParseYear(text_0, pos, start_0, value_0, part, cal);
    case 100:
      if (value_0 <= 0) {
        return false;
      }

      cal.dayOfMonth = value_0;
      return true;
    case 83:
      if (value_0 < 0) {
        return false;
      }

      return $subParseFractionalSeconds(value_0, start_0, pos[0], cal);
    case 104:
      value_0 == 12 && (value_0 = 0);
    case 75:
    case 72:
      if (value_0 < 0) {
        return false;
      }

      cal.hours = value_0;
      cal.midnightIs24 = false;
      return true;
    case 107:
      if (value_0 < 0) {
        return false;
      }

      cal.hours = value_0;
      cal.midnightIs24 = true;
      return true;
    case 109:
      if (value_0 < 0) {
        return false;
      }

      cal.minutes = value_0;
      return true;
    case 115:
      if (value_0 < 0) {
        return false;
      }

      cal.seconds = value_0;
      return true;
    case 90:
      if (start_0 < text_0.length && (checkCriticalStringElementIndex(start_0, text_0.length) , text_0.charCodeAt(start_0) == 90)) {
        ++pos[0];
        cal.tzOffset = 0;
        return true;
      }

    case 122:
    case 118:
      return $subParseTimeZoneInGMT(text_0, start_0, pos, cal);
    default:return false;
  }
}

function $subParseDayOfWeek(text_0, pos, start_0, cal){
  var value_0;
  value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value_0 < 0) {
    return false;
  }
  cal.dayOfWeek = value_0;
  return true;
}

function $subParseFractionalSeconds(value_0, start_0, end, cal){
  var a, i;
  i = end - start_0;
  if (i < 3) {
    while (i < 3) {
      value_0 *= 10;
      ++i;
    }
  }
   else {
    a = 1;
    while (i > 3) {
      a *= 10;
      --i;
    }
    value_0 = (value_0 + (a >> 1)) / a | 0;
  }
  cal.milliseconds = value_0;
  return true;
}

function $subParseMonth(text_0, pos, cal, value_0, start_0){
  if (value_0 < 0) {
    value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value_0 < 0) {
      return false;
    }
    cal.month = value_0;
    return true;
  }
   else if (value_0 > 0) {
    cal.month = value_0 - 1;
    return true;
  }
  return false;
}

function $subParseStandaloneDay(text_0, pos, start_0, cal){
  var value_0;
  value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value_0 < 0) {
    return false;
  }
  cal.dayOfWeek = value_0;
  return true;
}

function $subParseStandaloneMonth(text_0, pos, cal, value_0, start_0){
  if (value_0 < 0) {
    value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value_0 < 0 && (value_0 = $matchString(text_0, start_0, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value_0 < 0) {
      return false;
    }
    cal.month = value_0;
    return true;
  }
   else if (value_0 > 0) {
    cal.month = value_0 - 1;
    return true;
  }
  return false;
}

function $subParseTimeZoneInGMT(text_0, start_0, pos, cal){
  if (start_0 >= 0 && $equals_0(text_0.substr(start_0, 'GMT'.length), 'GMT')) {
    pos[0] = start_0 + 3;
    return $parseTimeZoneOffset(text_0, pos, cal);
  }
  if (start_0 >= 0 && $equals_0(text_0.substr(start_0, 'UTC'.length), 'UTC')) {
    pos[0] = start_0 + 3;
    return $parseTimeZoneOffset(text_0, pos, cal);
  }
  return $parseTimeZoneOffset(text_0, pos, cal);
}

function $subParseYear(text_0, pos, start_0, value_0, part, cal){
  var ambiguousTwoDigitYear, ch_0, date, defaultCenturyStartYear;
  ch_0 = 32;
  if (value_0 < 0) {
    if (pos[0] >= text_0.length) {
      return false;
    }
    ch_0 = $charAt(text_0, pos[0]);
    if (ch_0 != 43 && ch_0 != 45) {
      return false;
    }
    ++pos[0];
    value_0 = $parseInt(text_0, pos);
    if (value_0 < 0) {
      return false;
    }
    ch_0 == 45 && (value_0 = -value_0);
  }
  if (ch_0 == 32 && pos[0] - start_0 == 2 && part.count == 2) {
    date = new Date_0;
    defaultCenturyStartYear = date.jsdate.getFullYear() - $intern_17 + $intern_17 - 80;
    ambiguousTwoDigitYear = defaultCenturyStartYear % 100;
    cal.ambiguousYear = value_0 == ambiguousTwoDigitYear;
    value_0 += (defaultCenturyStartYear / 100 | 0) * 100 + (value_0 < ambiguousTwoDigitYear?100:0);
  }
  cal.year = value_0;
  return true;
}

function $zeroPaddingNumber(buf, value_0, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; i++) {
    value_0 < b && (buf.string += '0' , buf);
    b *= 10;
  }
  buf.string += value_0;
}

defineClass(452, 1, {});
var Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat', 452);
function $clinit_DateTimeFormat_0(){
  $clinit_DateTimeFormat_0 = emptyMethod;
  $clinit_DateTimeFormat();
  cache = new HashMap;
}

function DateTimeFormat(pattern){
  $clinit_DateTimeFormat();
  this.patternParts = new ArrayList;
  this.pattern = pattern;
  $parsePattern(this, pattern);
}

function getFormat(predef){
  $clinit_DateTimeFormat_0();
  var dtfi, pattern, pattern0;
  if (usesFixedEnglishStrings(predef)) {
    switch (predef.ordinal) {
      case 1:
        pattern0 = 'EEE, d MMM yyyy HH:mm:ss Z';
        break;
      case 0:
        pattern0 = "yyyy-MM-dd'T'HH:mm:ss.SSSZZZ";
        break;
      default:throw toJs(new IllegalStateException_0('Unexpected predef type ' + predef));
    }
    return getFormat_0(pattern0, new DateTimeFormatInfoImpl_en);
  }
  dtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  switch (predef.ordinal) {
    case 2:
      pattern = 'y MMMM d, EEEE';
      break;
    case 30:
    case 3:
      pattern = 'y MMMM d';
      break;
    case 29:
    case 4:
      pattern = 'y MMM d';
      break;
    case 32:
    case 5:
      pattern = 'y-MM-dd';
      break;
    case 10:
      pattern = 'y MMMM d, EEEE HH:mm:ss zzzz';
      break;
    case 11:
      pattern = 'y MMMM d HH:mm:ss z';
      break;
    case 12:
      pattern = 'y MMM d HH:mm:ss';
      break;
    case 13:
      pattern = 'y-MM-dd HH:mm';
      break;
    case 14:
      pattern = 'd';
      break;
    case 9:
    case 17:
      pattern = 'HH:mm';
      break;
    case 8:
    case 18:
      pattern = 'HH:mm:ss';
      break;
    case 15:
      pattern = 'h:mm a';
      break;
    case 16:
      pattern = 'h:mm:ss a';
      break;
    case 19:
      pattern = 'mm:ss';
      break;
    case 20:
      pattern = 'LLLL';
      break;
    case 21:
      pattern = 'LLL';
      break;
    case 22:
      pattern = 'MMM d';
      break;
    case 23:
      pattern = 'MMMM d';
      break;
    case 24:
      pattern = 'MM-dd';
      break;
    case 25:
      pattern = 'MMMM d, EEEE';
      break;
    case 6:
      pattern = 'HH:mm:ss zzzz';
      break;
    case 7:
      pattern = 'HH:mm:ss z';
      break;
    case 26:
      pattern = 'y';
      break;
    case 27:
      pattern = 'y MMMM';
      break;
    case 28:
      pattern = 'y MMM';
      break;
    case 31:
      pattern = 'y-MM';
      break;
    case 33:
      pattern = 'y MMM d, EEE';
      break;
    case 34:
      pattern = 'y QQQQ';
      break;
    case 35:
      pattern = 'y Q';
      break;
    default:throw toJs(new IllegalArgumentException_0('Unexpected predefined format ' + predef));
  }
  return getFormat_0(pattern, dtfi);
}

function getFormat_0(pattern, dtfi){
  $clinit_DateTimeFormat_0();
  var defaultDtfi, dtf;
  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  dtf = null;
  dtfi == defaultDtfi && (dtf = castTo($getStringValue(cache, pattern), 149));
  if (!dtf) {
    dtf = new DateTimeFormat(pattern);
    dtfi == defaultDtfi && $putStringValue(cache, pattern, dtf);
  }
  return dtf;
}

function usesFixedEnglishStrings(predef){
  switch (predef.ordinal) {
    case 0:
    case 1:
      return true;
    default:return false;
  }
}

defineClass(149, 452, {149:1}, DateTimeFormat);
var cache;
var Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'DateTimeFormat', 149);
function $clinit_DateTimeFormat$PredefinedFormat(){
  $clinit_DateTimeFormat$PredefinedFormat = emptyMethod;
  ISO_8601 = new DateTimeFormat$PredefinedFormat('ISO_8601', 0);
  RFC_2822 = new DateTimeFormat$PredefinedFormat('RFC_2822', 1);
  DATE_FULL = new DateTimeFormat$PredefinedFormat('DATE_FULL', 2);
  DATE_LONG = new DateTimeFormat$PredefinedFormat('DATE_LONG', 3);
  DATE_MEDIUM = new DateTimeFormat$PredefinedFormat('DATE_MEDIUM', 4);
  DATE_SHORT = new DateTimeFormat$PredefinedFormat('DATE_SHORT', 5);
  TIME_FULL = new DateTimeFormat$PredefinedFormat('TIME_FULL', 6);
  TIME_LONG = new DateTimeFormat$PredefinedFormat('TIME_LONG', 7);
  TIME_MEDIUM = new DateTimeFormat$PredefinedFormat('TIME_MEDIUM', 8);
  TIME_SHORT = new DateTimeFormat$PredefinedFormat('TIME_SHORT', 9);
  DATE_TIME_FULL = new DateTimeFormat$PredefinedFormat('DATE_TIME_FULL', 10);
  DATE_TIME_LONG = new DateTimeFormat$PredefinedFormat('DATE_TIME_LONG', 11);
  DATE_TIME_MEDIUM = new DateTimeFormat$PredefinedFormat('DATE_TIME_MEDIUM', 12);
  DATE_TIME_SHORT = new DateTimeFormat$PredefinedFormat('DATE_TIME_SHORT', 13);
  DAY = new DateTimeFormat$PredefinedFormat('DAY', 14);
  HOUR_MINUTE = new DateTimeFormat$PredefinedFormat('HOUR_MINUTE', 15);
  HOUR_MINUTE_SECOND = new DateTimeFormat$PredefinedFormat('HOUR_MINUTE_SECOND', 16);
  HOUR24_MINUTE = new DateTimeFormat$PredefinedFormat('HOUR24_MINUTE', 17);
  HOUR24_MINUTE_SECOND = new DateTimeFormat$PredefinedFormat('HOUR24_MINUTE_SECOND', 18);
  MINUTE_SECOND = new DateTimeFormat$PredefinedFormat('MINUTE_SECOND', 19);
  MONTH = new DateTimeFormat$PredefinedFormat('MONTH', 20);
  MONTH_ABBR = new DateTimeFormat$PredefinedFormat('MONTH_ABBR', 21);
  MONTH_ABBR_DAY = new DateTimeFormat$PredefinedFormat('MONTH_ABBR_DAY', 22);
  MONTH_DAY = new DateTimeFormat$PredefinedFormat('MONTH_DAY', 23);
  MONTH_NUM_DAY = new DateTimeFormat$PredefinedFormat('MONTH_NUM_DAY', 24);
  MONTH_WEEKDAY_DAY = new DateTimeFormat$PredefinedFormat('MONTH_WEEKDAY_DAY', 25);
  YEAR = new DateTimeFormat$PredefinedFormat('YEAR', 26);
  YEAR_MONTH = new DateTimeFormat$PredefinedFormat('YEAR_MONTH', 27);
  YEAR_MONTH_ABBR = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_ABBR', 28);
  YEAR_MONTH_ABBR_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_ABBR_DAY', 29);
  YEAR_MONTH_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_DAY', 30);
  YEAR_MONTH_NUM = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_NUM', 31);
  YEAR_MONTH_NUM_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_NUM_DAY', 32);
  YEAR_MONTH_WEEKDAY_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_WEEKDAY_DAY', 33);
  YEAR_QUARTER = new DateTimeFormat$PredefinedFormat('YEAR_QUARTER', 34);
  YEAR_QUARTER_ABBR = new DateTimeFormat$PredefinedFormat('YEAR_QUARTER_ABBR', 35);
}

function DateTimeFormat$PredefinedFormat(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_DateTimeFormat$PredefinedFormat();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit, 1), $intern_2, 21, 0, [ISO_8601, RFC_2822, DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR_MINUTE, HOUR_MINUTE_SECOND, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR]);
}

defineClass(21, 5, {21:1, 3:1, 4:1, 5:1}, DateTimeFormat$PredefinedFormat);
var DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, HOUR_MINUTE, HOUR_MINUTE_SECOND, ISO_8601, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, RFC_2822, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR;
var Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit = createForEnum('com.google.gwt.i18n.client', 'DateTimeFormat/PredefinedFormat', 21, Ljava_lang_Enum_2_classLit, values_8);
defineClass(656, 1, {});
var Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DefaultDateTimeFormatInfo', 656);
defineClass(657, 656, {});
var Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'DefaultDateTimeFormatInfo', 657);
function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_HasDirection$Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_2, 99, 0, [RTL, LTR, DEFAULT]);
}

defineClass(99, 5, {99:1, 3:1, 4:1, 5:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 99, Ljava_lang_Enum_2_classLit, values_9);
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  instance_1 = new LocaleInfo;
}

function $getDateTimeFormatInfo(this$static){
  !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl);
  return this$static.dateTimeFormatInfo;
}

function LocaleInfo(){
}

defineClass(317, 1, {}, LocaleInfo);
var instance_1;
var Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'LocaleInfo', 317);
function $getISOTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_2, 110, 15, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ((offset / 60 | 0) / 10 | 0) & $intern_15;
  data_0[2] = data_0[2] + (offset / 60 | 0) % 10 & $intern_15;
  data_0[4] = data_0[4] + (offset % 60 / 10 | 0) & $intern_15;
  data_0[5] = data_0[5] + offset % 10 & $intern_15;
  return valueOf_6(data_0, data_0.length);
}

function $getRFCTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_2, 110, 15, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ((offset / 60 | 0) / 10 | 0) & $intern_15;
  data_0[2] = data_0[2] + (offset / 60 | 0) % 10 & $intern_15;
  data_0[3] = data_0[3] + (offset % 60 / 10 | 0) & $intern_15;
  data_0[4] = data_0[4] + offset % 10 & $intern_15;
  return valueOf_6(data_0, data_0.length);
}

function TimeZone(){
}

function composeGMTString(offset){
  var data_0;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_2, 110, 15, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data_0[3] = 43;
    offset = -offset;
  }
  data_0[4] = data_0[4] + ((offset / 60 | 0) / 10 | 0) & $intern_15;
  data_0[5] = data_0[5] + (offset / 60 | 0) % 10 & $intern_15;
  data_0[7] = data_0[7] + (offset % 60 / 10 | 0) & $intern_15;
  data_0[8] = data_0[8] + offset % 10 & $intern_15;
  return valueOf_6(data_0, data_0.length);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_16, 2, 2, 6, 1);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  return tz;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = offset / 60 | 0;
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + ('' + mins);
}

defineClass(482, 1, {}, TimeZone);
_.standardOffset = 0;
var Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client', 'TimeZone', 482);
function DateTimeFormatInfoImpl(){
}

defineClass(468, 657, {}, DateTimeFormatInfoImpl);
var Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl', 468);
function DateTimeFormatInfoImpl_en(){
}

defineClass(469, 468, {}, DateTimeFormatInfoImpl_en);
var Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_1en_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl_en', 469);
function DateTimeFormat$PatternPart(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineClass(94, 1, {94:1}, DateTimeFormat$PatternPart);
_.abutStart = false;
_.count = 0;
var Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat/PatternPart', 94);
function $fixDaylightSavings(this$static, requestedHours){
  var badHours, copy, day, newTime, originalTimeInMillis, timeDiff, timeDiffHours, timeDiffMinutes;
  requestedHours %= 24;
  if (this$static.jsdate.getHours() != requestedHours) {
    copy = new $wnd.Date(this$static.jsdate.getTime());
    copy.setDate(copy.getDate() + 1);
    timeDiff = this$static.jsdate.getTimezoneOffset() - copy.getTimezoneOffset();
    if (timeDiff > 0) {
      timeDiffHours = timeDiff / 60 | 0;
      timeDiffMinutes = timeDiff % 60;
      day = this$static.jsdate.getDate();
      badHours = this$static.jsdate.getHours();
      badHours + timeDiffHours >= 24 && ++day;
      newTime = new $wnd.Date(this$static.jsdate.getFullYear(), this$static.jsdate.getMonth(), day, requestedHours + timeDiffHours, this$static.jsdate.getMinutes() + timeDiffMinutes, this$static.jsdate.getSeconds(), this$static.jsdate.getMilliseconds());
      this$static.jsdate.setTime(newTime.getTime());
    }
  }
  originalTimeInMillis = this$static.jsdate.getTime();
  this$static.jsdate.setTime(originalTimeInMillis + 3600000);
  this$static.jsdate.getHours() != requestedHours && this$static.jsdate.setTime(originalTimeInMillis);
}

function $setDate(this$static, date){
  var hours;
  hours = this$static.jsdate.getHours();
  this$static.jsdate.setDate(date);
  $fixDaylightSavings(this$static, hours);
}

function $setHours(this$static, hours){
  this$static.jsdate.setHours(hours);
  $fixDaylightSavings(this$static, hours);
}

function $setMinutes(this$static, minutes){
  var hours;
  hours = this$static.jsdate.getHours() + (minutes / 60 | 0);
  this$static.jsdate.setMinutes(minutes);
  $fixDaylightSavings(this$static, hours);
}

function $setMonth(this$static, month){
  var hours;
  hours = this$static.jsdate.getHours();
  this$static.jsdate.setMonth(month);
  $fixDaylightSavings(this$static, hours);
}

function $setSeconds(this$static, seconds){
  var hours;
  hours = this$static.jsdate.getHours() + (seconds / 3600 | 0);
  this$static.jsdate.setSeconds(seconds);
  $fixDaylightSavings(this$static, hours);
}

function $setTime(this$static, time){
  this$static.jsdate.setTime(toDouble_0(time));
}

function $setYear(this$static, year){
  var hours;
  hours = this$static.jsdate.getHours();
  this$static.jsdate.setFullYear(year + $intern_17);
  $fixDaylightSavings(this$static, hours);
}

function Date_0(){
  this.jsdate = new $wnd.Date;
}

function Date_1(year, month, date){
  this.jsdate = new $wnd.Date;
  this.jsdate.setFullYear(year + $intern_17, month, date);
  this.jsdate.setHours(0, 0, 0, 0);
  $fixDaylightSavings(this, 0);
}

function Date_2(date){
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function Date_3(date){
  Date_2.call(this, parse_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

function parse_0(s){
  var parsed;
  parsed = $wnd.Date.parse(s);
  if (isNaN(parsed)) {
    throw toJs(new IllegalArgumentException);
  }
  return fromDouble_0(parsed);
}

defineClass(20, 1, $intern_18, Date_0, Date_1, Date_2, Date_3);
_.compareTo = function compareTo_0(other){
  return this.compareTo_0(castTo(other, 20));
}
;
_.compareTo_0 = function compareTo_1(other){
  return compare_5(this.getTime_0(), other.getTime_0());
}
;
_.equals_0 = function equals_2(obj){
  return instanceOf(obj, 20) && eq(this.getTime_0(), castTo(obj, 20).getTime_0());
}
;
_.getTime_0 = function getTime(){
  return fromDouble_0(this.jsdate.getTime());
}
;
_.hashCode_0 = function hashCode_4(){
  var time;
  return time = this.getTime_0() , toInt_0(xor_0(time, shru_0(time, 32)));
}
;
_.toString_0 = function toString_7(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = padTwo($wnd.Math.abs(offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 20);
function $calcDate(this$static, date){
  var adjustment, daysInCurrentMonth, defaultCenturyStart, offset, orgDayOfMonth, orgMonth, tmp;
  this$static.era == 0 && this$static.year > 0 && (this$static.year = -(this$static.year - 1));
  this$static.year > $intern_19 && $setYear(date, this$static.year - $intern_17);
  orgDayOfMonth = date.jsdate.getDate();
  $setDate(date, 1);
  this$static.month >= 0 && $setMonth(date, this$static.month);
  if (this$static.dayOfMonth >= 0) {
    $setDate(date, this$static.dayOfMonth);
  }
   else if (this$static.month >= 0) {
    tmp = new Date_1(date.jsdate.getFullYear() - $intern_17, date.jsdate.getMonth(), 35);
    daysInCurrentMonth = 35 - tmp.jsdate.getDate();
    $setDate(date, $wnd.Math.min(daysInCurrentMonth, orgDayOfMonth));
  }
   else {
    $setDate(date, orgDayOfMonth);
  }
  this$static.hours < 0 && (this$static.hours = date.jsdate.getHours());
  this$static.ampm > 0 && this$static.hours < 12 && (this$static.hours += 12);
  $setHours(date, this$static.hours == 24 && this$static.midnightIs24?0:this$static.hours);
  this$static.minutes >= 0 && $setMinutes(date, this$static.minutes);
  this$static.seconds >= 0 && $setSeconds(date, this$static.seconds);
  this$static.milliseconds >= 0 && $setTime(date, add_2(mul_0(div_0(fromDouble_0(date.jsdate.getTime()), $intern_5), $intern_5), this$static.milliseconds));
  if (this$static.ambiguousYear) {
    defaultCenturyStart = new Date_0;
    $setYear(defaultCenturyStart, defaultCenturyStart.jsdate.getFullYear() - $intern_17 - 80);
    lt(fromDouble_0(date.jsdate.getTime()), fromDouble_0(defaultCenturyStart.jsdate.getTime())) && $setYear(date, defaultCenturyStart.jsdate.getFullYear() - $intern_17 + 100);
  }
  if (this$static.dayOfWeek >= 0) {
    if (this$static.dayOfMonth == -1) {
      adjustment = (7 + this$static.dayOfWeek - date.jsdate.getDay()) % 7;
      adjustment > 3 && (adjustment -= 7);
      orgMonth = date.jsdate.getMonth();
      $setDate(date, date.jsdate.getDate() + adjustment);
      date.jsdate.getMonth() != orgMonth && $setDate(date, date.jsdate.getDate() + (adjustment > 0?-7:7));
    }
     else {
      if (date.jsdate.getDay() != this$static.dayOfWeek) {
        return false;
      }
    }
  }
  if (this$static.tzOffset > $intern_19) {
    offset = date.jsdate.getTimezoneOffset();
    $setTime(date, add_2(fromDouble_0(date.jsdate.getTime()), (this$static.tzOffset - offset) * 60 * $intern_5));
  }
  return true;
}

function DateRecord(){
  Date_0.call(this);
  this.era = -1;
  this.ambiguousYear = false;
  this.year = $intern_19;
  this.month = -1;
  this.dayOfMonth = -1;
  this.ampm = -1;
  this.midnightIs24 = false;
  this.hours = -1;
  this.minutes = -1;
  this.seconds = -1;
  this.milliseconds = -1;
  this.dayOfWeek = -1;
  this.tzOffset = $intern_19;
}

defineClass(188, 20, $intern_18, DateRecord);
_.ambiguousYear = false;
_.ampm = 0;
_.dayOfMonth = 0;
_.dayOfWeek = 0;
_.era = 0;
_.hours = 0;
_.midnightIs24 = false;
_.milliseconds = 0;
_.minutes = 0;
_.month = 0;
_.seconds = 0;
_.tzOffset = 0;
_.year = 0;
var Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.shared.impl', 'DateRecord', 188);
function deserialize_1(streamReader, instance){
  setAmbiguousYear(instance, $readBoolean(streamReader));
  setAmpm(instance, streamReader.results[--streamReader.index_0]);
  setDayOfMonth(instance, streamReader.results[--streamReader.index_0]);
  setDayOfWeek(instance, streamReader.results[--streamReader.index_0]);
  setEra(instance, streamReader.results[--streamReader.index_0]);
  setHours(instance, streamReader.results[--streamReader.index_0]);
  setMidnightIs24(instance, $readBoolean(streamReader));
  setMilliseconds(instance, streamReader.results[--streamReader.index_0]);
  setMinutes(instance, streamReader.results[--streamReader.index_0]);
  setMonth(instance, streamReader.results[--streamReader.index_0]);
  setSeconds(instance, streamReader.results[--streamReader.index_0]);
  setTzOffset(instance, streamReader.results[--streamReader.index_0]);
  setYear(instance, streamReader.results[--streamReader.index_0]);
}

function instantiate_1(streamReader){
  return new DateRecord;
}

function setAmbiguousYear(instance, value_0){
  instance.ambiguousYear = value_0;
}

function setAmpm(instance, value_0){
  instance.ampm = value_0;
}

function setDayOfMonth(instance, value_0){
  instance.dayOfMonth = value_0;
}

function setDayOfWeek(instance, value_0){
  instance.dayOfWeek = value_0;
}

function setEra(instance, value_0){
  instance.era = value_0;
}

function setHours(instance, value_0){
  instance.hours = value_0;
}

function setMidnightIs24(instance, value_0){
  instance.midnightIs24 = value_0;
}

function setMilliseconds(instance, value_0){
  instance.milliseconds = value_0;
}

function setMinutes(instance, value_0){
  instance.minutes = value_0;
}

function setMonth(instance, value_0){
  instance.month = value_0;
}

function setSeconds(instance, value_0){
  instance.seconds = value_0;
}

function setTzOffset(instance, value_0){
  instance.tzOffset = value_0;
}

function setYear(instance, value_0){
  instance.year = value_0;
}

function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_20;
  a1 = value_0 >> 22 & $intern_20;
  a2 = value_0 < 0?$intern_21:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_22 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_22 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare_0(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_22 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_20;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_20;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_21;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_23 + a.h * $intern_24;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_20;
  a.m = sum1 & $intern_20;
  a.h = sum2 & $intern_21;
  return true;
}

var remainder;
function add_1(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_20, sum1 & $intern_20, sum2 & $intern_21);
}

function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

function compare_0(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_24) {
    a2 = round_int(value_0 / $intern_24);
    value_0 -= a2 * $intern_24;
  }
  a1 = 0;
  if (value_0 >= $intern_23) {
    a1 = round_int(value_0 / $intern_23);
    value_0 -= a1 * $intern_23;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_20;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_20;
  c2 += c1 >> 22;
  c1 &= $intern_20;
  c2 &= $intern_21;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_20;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_20;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_21;
  return create0(neg0, neg1, neg2);
}

function or(a, b){
  return create0(a.l | b.l, a.m | b.m, a.h | b.h);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_20, res1 & $intern_20, res2 & $intern_21);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_22) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_21:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_21:0;
    res1 = negative?$intern_20:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_20, res1 & $intern_20, res2 & $intern_21);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_21;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_20, res1 & $intern_20, res2 & $intern_21);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_20, sum1 & $intern_20, sum2 & $intern_21);
}

function toDouble(a){
  if (compare_0(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_23 + a.h * $intern_24;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_8(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_22 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_8(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_20, $intern_20, 524287);
  MIN_VALUE = create0(0, 0, $intern_22);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 14)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function add_2(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_25 < result && result < $intern_24) {
      return result;
    }
  }
  return createLongEmul(add_1(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function compare_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_23;
  }
  if (a2 == $intern_21) {
    return big_0.l + big_0.m * $intern_23 - $intern_24;
  }
  return big_0;
}

function div_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a / b;
    if ($intern_25 < result && result < $intern_24) {
      return result < 0?$wnd.Math.ceil(result):$wnd.Math.floor(result);
    }
  }
  return createLongEmul(divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, false));
}

function eq(a, b){
  return compare_1(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_25 < value_0 && value_0 < $intern_24) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function gt(a, b){
  return compare_1(a, b) > 0;
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lt(a, b){
  return compare_1(a, b) < 0;
}

function mod(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a % b;
    if ($intern_25 < result && result < $intern_24) {
      return result;
    }
  }
  return createLongEmul((divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, true) , remainder));
}

function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_25 < result && result < $intern_24) {
      return result;
    }
  }
  return createLongEmul(mul(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function neg_0(a){
  var result;
  if (isSmallLong0(a)) {
    result = 0 - a;
    if (!isNaN(result)) {
      return result;
    }
  }
  return createLongEmul(neg(a));
}

function neq(a, b){
  return compare_1(a, b) != 0;
}

function or_0(a, b){
  return createLongEmul(or(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function shru_0(a, n){
  return createLongEmul(shru(isSmallLong0(a)?toBigLong(a):a, n));
}

function sub_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if ($intern_25 < result && result < $intern_24) {
      return result;
    }
  }
  return createLongEmul(sub_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_24;
    a3 = $intern_21;
  }
  a1 = round_int(value_0 / $intern_23);
  a0 = round_int(value_0 - a1 * $intern_23);
  return create0(a0, a1, a3);
}

function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

function toString_9(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_8(a);
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0(new Main1);
}

function $adjustHorizontalConstraints(this$static, parentWidth, l){
  var leftPx, rightPx, widthPx;
  leftPx = l.left_0 * $getUnitSize(this$static, l.leftUnit, false);
  rightPx = l.right * $getUnitSize(this$static, l.rightUnit, false);
  widthPx = l.width_0 * $getUnitSize(this$static, l.widthUnit, false);
  if (l.setLeft && !l.setTargetLeft) {
    l.setLeft = false;
    if (l.setWidth) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
   else if (l.setWidth && !l.setTargetWidth) {
    l.setWidth = false;
    if (l.setLeft) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
  }
   else if (l.setRight && !l.setTargetRight) {
    l.setRight = false;
    if (l.setWidth) {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
  l.setLeft = l.setTargetLeft;
  l.setRight = l.setTargetRight;
  l.setWidth = l.setTargetWidth;
  l.leftUnit = l.targetLeftUnit;
  l.rightUnit = l.targetRightUnit;
  l.widthUnit = l.targetWidthUnit;
}

function $adjustVerticalConstraints(this$static, parentHeight, l){
  var bottomPx, heightPx, topPx;
  topPx = l.top_0 * $getUnitSize(this$static, l.topUnit, true);
  bottomPx = l.bottom * $getUnitSize(this$static, l.bottomUnit, true);
  heightPx = l.height_0 * $getUnitSize(this$static, l.heightUnit, true);
  if (l.setTop && !l.setTargetTop) {
    l.setTop = false;
    if (l.setHeight) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
   else if (l.setHeight && !l.setTargetHeight) {
    l.setHeight = false;
    if (l.setTop) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
  }
   else if (l.setBottom && !l.setTargetBottom) {
    l.setBottom = false;
    if (l.setHeight) {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
  l.setTop = l.setTargetTop;
  l.setBottom = l.setTargetBottom;
  l.setHeight = l.setTargetHeight;
  l.topUnit = l.targetTopUnit;
  l.bottomUnit = l.targetBottomUnit;
  l.heightUnit = l.targetHeightUnit;
}

function $attachChild(this$static, child, userObject){
  var container, layer;
  container = $attachChild_0(this$static.parentElem, child);
  layer = new Layout$Layer(container, child, userObject);
  $add_2(this$static.layers, layer);
  return layer;
}

function $getUnitSize(this$static, unit, vertical){
  return $getUnitSizeInPixels(this$static.impl, this$static.parentElem, unit, vertical);
}

function $layout(this$static, duration, callback){
  var child, l, l$iterator, l$iterator0, parentHeight, parentWidth;
  !!this$static.animation && $cancel(this$static.animation);
  if (duration == 0) {
    for (l$iterator0 = new ArrayList$1(this$static.layers); l$iterator0.i < l$iterator0.this$01.array.length;) {
      l = castTo($next_6(l$iterator0), 90);
      l.left_0 = l.sourceLeft = l.targetLeft;
      l.top_0 = l.sourceTop = l.targetTop;
      l.right = l.sourceRight = l.targetRight;
      l.bottom = l.sourceBottom = l.targetBottom;
      l.width_0 = l.sourceWidth = l.targetWidth;
      l.height_0 = l.sourceHeight = l.targetHeight;
      l.setLeft = l.setTargetLeft;
      l.setTop = l.setTargetTop;
      l.setRight = l.setTargetRight;
      l.setBottom = l.setTargetBottom;
      l.setWidth = l.setTargetWidth;
      l.setHeight = l.setTargetHeight;
      l.leftUnit = l.targetLeftUnit;
      l.topUnit = l.targetTopUnit;
      l.rightUnit = l.targetRightUnit;
      l.bottomUnit = l.targetBottomUnit;
      l.widthUnit = l.targetWidthUnit;
      l.heightUnit = l.targetHeightUnit;
      $layout_0(l);
      !!callback && (child = l.userObject , instanceOf(child, 51) && castTo(child, 51).onResize_0());
    }
    return;
  }
  parentWidth = this$static.parentElem.clientWidth | 0;
  parentHeight = this$static.parentElem.clientHeight | 0;
  for (l$iterator = new ArrayList$1(this$static.layers); l$iterator.i < l$iterator.this$01.array.length;) {
    l = castTo($next_6(l$iterator), 90);
    $adjustHorizontalConstraints(this$static, parentWidth, l);
    $adjustVerticalConstraints(this$static, parentHeight, l);
  }
  this$static.animation = new Layout$1(this$static, callback);
  $run_0(this$static.animation, duration, this$static.parentElem);
}

function $removeChild_0(this$static, layer){
  $removeChild_1(layer.container, layer.child);
  $remove_3(this$static.layers, layer);
}

function Layout(parent_0){
  this.impl = new LayoutImpl;
  this.layers = new ArrayList;
  this.parentElem = parent_0;
  $initParent(this.impl, parent_0);
}

defineClass(174, 1, {}, Layout);
var Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout', 174);
function Layout$1(this$0, val$callback){
  this.this$01 = this$0;
  this.val$callback2 = val$callback;
  Animation.call(this);
}

defineClass(247, 116, {}, Layout$1);
_.onCancel = function onCancel_0(){
  this.this$01.animation = null;
  $layout(this.this$01, 0, null);
}
;
_.onComplete = function onComplete_0(){
  this.this$01.animation = null;
  $layout(this.this$01, 0, null);
}
;
_.onUpdate = function onUpdate(progress){
  var child, l, l$iterator;
  for (l$iterator = new ArrayList$1(this.this$01.layers); l$iterator.i < l$iterator.this$01.array.length;) {
    l = castTo($next_6(l$iterator), 90);
    l.setTargetLeft && (l.left_0 = l.sourceLeft + (l.targetLeft - l.sourceLeft) * progress);
    l.setTargetRight && (l.right = l.sourceRight + (l.targetRight - l.sourceRight) * progress);
    l.setTargetTop && (l.top_0 = l.sourceTop + (l.targetTop - l.sourceTop) * progress);
    l.setTargetBottom && (l.bottom = l.sourceBottom + (l.targetBottom - l.sourceBottom) * progress);
    l.setTargetWidth && (l.width_0 = l.sourceWidth + (l.targetWidth - l.sourceWidth) * progress);
    l.setTargetHeight && (l.height_0 = l.sourceHeight + (l.targetHeight - l.sourceHeight) * progress);
    $layout_0(l);
    !!this.val$callback2 && (child = l.userObject , instanceOf(child, 51) && castTo(child, 51).onResize_0());
  }
}
;
var Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/1', 247);
function $setBottomHeight(this$static, bottom, bottomUnit, height, heightUnit){
  this$static.setTargetBottom = this$static.setTargetHeight = true;
  this$static.setTargetTop = false;
  this$static.targetBottom = bottom;
  this$static.targetHeight = height;
  this$static.targetBottomUnit = bottomUnit;
  this$static.targetHeightUnit = heightUnit;
}

function $setLeftRight(this$static, left, leftUnit, right, rightUnit){
  this$static.setTargetLeft = this$static.setTargetRight = true;
  this$static.setTargetWidth = false;
  this$static.targetLeft = left;
  this$static.targetRight = right;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetRightUnit = rightUnit;
}

function $setLeftWidth(this$static, left, leftUnit, width_0, widthUnit){
  this$static.setTargetLeft = this$static.setTargetWidth = true;
  this$static.setTargetRight = false;
  this$static.targetLeft = left;
  this$static.targetWidth = width_0;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setRightWidth(this$static, right, rightUnit, width_0, widthUnit){
  this$static.setTargetRight = this$static.setTargetWidth = true;
  this$static.setTargetLeft = false;
  this$static.targetRight = right;
  this$static.targetWidth = width_0;
  this$static.targetRightUnit = rightUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setTopBottom(this$static, top_0, topUnit, bottom, bottomUnit){
  this$static.setTargetTop = this$static.setTargetBottom = true;
  this$static.setTargetHeight = false;
  this$static.targetTop = top_0;
  this$static.targetBottom = bottom;
  this$static.targetTopUnit = topUnit;
  this$static.targetBottomUnit = bottomUnit;
}

function $setTopHeight(this$static, top_0, topUnit, height, heightUnit){
  this$static.setTargetTop = this$static.setTargetHeight = true;
  this$static.setTargetBottom = false;
  this$static.targetTop = top_0;
  this$static.targetHeight = height;
  this$static.targetTopUnit = topUnit;
  this$static.targetHeightUnit = heightUnit;
}

function Layout$Layer(container, child, userObject){
  this.targetLeftUnit = ($clinit_Style$Unit() , PX);
  this.targetTopUnit = PX;
  this.targetRightUnit = PX;
  this.targetBottomUnit = PX;
  this.container = container;
  this.child = child;
  this.userObject = userObject;
}

defineClass(90, 1, {90:1}, Layout$Layer);
_.bottom = 0;
_.height_0 = 0;
_.left_0 = 0;
_.right = 0;
_.setBottom = false;
_.setHeight = false;
_.setLeft = false;
_.setRight = false;
_.setTargetBottom = true;
_.setTargetHeight = false;
_.setTargetLeft = true;
_.setTargetRight = true;
_.setTargetTop = true;
_.setTargetWidth = false;
_.setTop = false;
_.setWidth = false;
_.sourceBottom = 0;
_.sourceHeight = 0;
_.sourceLeft = 0;
_.sourceRight = 0;
_.sourceTop = 0;
_.sourceWidth = 0;
_.targetBottom = 0;
_.targetHeight = 0;
_.targetLeft = 0;
_.targetRight = 0;
_.targetTop = 0;
_.targetWidth = 0;
_.top_0 = 0;
_.visible = true;
_.width_0 = 0;
var Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/Layer', 90);
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = emptyMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), CM);
  $appendChild($doc.body, fixedRuler);
}

function $attachChild_0(parent_0, child){
  var container;
  container = $doc.createElement('div');
  container.appendChild(child);
  container.style['position'] = ($clinit_Style$Position() , 'absolute');
  container.style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  $fillParent(child);
  parent_0.insertBefore(container, null);
  return container;
}

function $fillParent(elem){
  var style;
  style = elem.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['left'] = ($clinit_Style$Unit() , '0.0px');
  style['top'] = '0.0px';
  style['right'] = '0.0px';
  style['bottom'] = '0.0px';
}

function $getUnitSizeInPixels(this$static, parent_0, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.ordinal) {
    case 1:
      return (vertical?parent_0.clientHeight | 0:parent_0.clientWidth | 0) / 100;
    case 2:
      return ((this$static.relativeRuler.offsetWidth || 0) | 0) / 10;
    case 3:
      return ((this$static.relativeRuler.offsetHeight || 0) | 0) / 10;
    case 7:
      return ((fixedRuler.offsetWidth || 0) | 0) * 0.1;
    case 8:
      return ((fixedRuler.offsetWidth || 0) | 0) * 0.01;
    case 6:
      return ((fixedRuler.offsetWidth || 0) | 0) * 0.254;
    case 4:
      return ((fixedRuler.offsetWidth || 0) | 0) * 0.00353;
    case 5:
      return ((fixedRuler.offsetWidth || 0) | 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function $initParent(this$static, parent_0){
  parent_0.style['position'] = ($clinit_Style$Position() , 'relative');
  $appendChild(parent_0, this$static.relativeRuler = createRuler(($clinit_Style$Unit() , EM), EX));
}

function $layout_0(layer){
  var style;
  style = layer.container.style;
  layer.visible?(style['display'] = '' , undefined):(style['display'] = ($clinit_Style$Display() , 'none') , undefined);
  style['left'] = layer.setLeft?layer.left_0 + 'px':'';
  style['top'] = layer.setTop?layer.top_0 + 'px':'';
  style['right'] = layer.setRight?layer.right + 'px':'';
  style['bottom'] = layer.setBottom?layer.bottom + 'px':'';
  style['width'] = layer.setWidth?layer.width_0 + 'px':'';
  style['height'] = layer.setHeight?layer.height_0 + 'px':'';
  style = layer.child.style;
  switch (2) {
    case 2:
      style['left'] = ($clinit_Style$Unit() , '0.0px');
      style['right'] = '0.0px';
  }
  switch (2) {
    case 2:
      style['top'] = ($clinit_Style$Unit() , '0.0px');
      style['bottom'] = '0.0px';
  }
}

function $removeChild_1(container, child){
  var parent_0, parent0, style;
  parent0 = $getParentElement(container);
  !!parent0 && parent0.removeChild(container);
  $getParentElement(child) == container && (parent_0 = $getParentElement(child) , !!parent_0 && parent_0.removeChild(child));
  style = child.style;
  style['position'] = '';
  style['left'] = '';
  style['top'] = '';
  style['width'] = '';
  style['height'] = '';
}

function LayoutImpl(){
  $clinit_LayoutImpl();
}

function createRuler(widthUnit, heightUnit){
  var ruler, style;
  ruler = $doc.createElement('div');
  ruler.innerHTML = '&nbsp;';
  style = ruler.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['zIndex'] = '-32767';
  style['top'] = -20 + heightUnit.getType();
  style['width'] = 10 + widthUnit.getType();
  style['height'] = 10 + heightUnit.getType();
  style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  $set_0(($clinit_State() , HIDDEN), ruler, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Boolean_2_classLit, 1), $intern_2, 165, 8, [($clinit_Boolean() , true)]));
  return ruler;
}

defineClass(325, 1, {}, LayoutImpl);
var fixedRuler;
var Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImpl', 325);
function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function $test(this$static, input_0){
  return this$static.test(input_0);
}

function ImageResourcePrototype(url_0, width_0, height){
  this.height_0 = height;
  this.width_0 = width_0;
  this.url_0 = url_0;
}

defineClass(157, 1, {}, ImageResourcePrototype);
_.height_0 = 0;
_.width_0 = 0;
var Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl', 'ImageResourcePrototype', 157);
function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw toJs(new NullPointerException_0('html is null'));
  }
  this.html = html;
}

defineClass(46, 1, $intern_26, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals_0 = function equals_3(obj){
  if (!instanceOf(obj, 130)) {
    return false;
  }
  return $equals_0(this.html, castTo(obj, 130).asString());
}
;
_.hashCode_0 = function hashCode_5(){
  return getHashCode_2(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 46);
function $appendEscaped(this$static, text_0){
  $append_3(this$static.sb, htmlEscape(text_0));
  return this$static;
}

function SafeHtmlBuilder(){
  this.sb = new StringBuilder;
}

defineClass(587, 1, {}, SafeHtmlBuilder);
var Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlBuilder', 587);
function SafeHtmlString(html){
  if (html == null) {
    throw toJs(new NullPointerException_0('html is null'));
  }
  this.html = html;
}

defineClass(200, 1, $intern_26, SafeHtmlString);
_.asString = function asString_1(){
  return this.html;
}
;
_.equals_0 = function equals_4(obj){
  if (!instanceOf(obj, 130)) {
    return false;
  }
  return $equals_0(this.html, castTo(obj, 130).asString());
}
;
_.hashCode_0 = function hashCode_6(){
  return getHashCode_2(this.html);
}
;
_.toString_0 = function toString_11(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 200);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  new SafeHtmlString('');
  HTML_CHARS_RE = new RegExp('[&<>\'"]');
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  if (!$test(HTML_CHARS_RE, s)) {
    return s;
  }
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, GT_RE, HTML_CHARS_RE, LT_RE, QUOT_RE, SQUOT_RE;
function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(71, 1, {664:1, 71:1}, SafeUriString);
_.equals_0 = function equals_5(obj){
  if (!instanceOf(obj, 71)) {
    return false;
  }
  return $equals_0(this.uri_0, castTo(castTo(obj, 664), 71).uri_0);
}
;
_.hashCode_0 = function hashCode_7(){
  return getHashCode_2(this.uri_0);
}
;
_.toString_0 = function toString_12(){
  return 'safe: "' + this.uri_0 + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 71);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

defineClass(654, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 654);
function PassthroughParser(){
}

defineClass(439, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 439);
function PassthroughRenderer(){
}

defineClass(438, 654, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 438);
function $calcNewVelocity(initialVelocity, decelFactor, oldVelocity, minDecel){
  var maxVelocityX, minVelocityX, newVelocity;
  newVelocity = initialVelocity * decelFactor;
  if (oldVelocity >= 0) {
    maxVelocityX = $wnd.Math.max(0, oldVelocity - minDecel);
    newVelocity = $wnd.Math.min(newVelocity, maxVelocityX);
  }
   else {
    minVelocityX = $wnd.Math.min(0, oldVelocity + minDecel);
    newVelocity = $wnd.Math.max(newVelocity, minVelocityX);
  }
  return newVelocity;
}

function $updateState(state){
  var decelFactor, dist, elapsedMillis, ellapsedMillis, initialVelocity, minDecel, newVelocity, newVelocityX, newVelocityY, oldVelocity, position, totalEllapsedMillis;
  ellapsedMillis = state.elapsedMillis;
  totalEllapsedMillis = state.cumulativeElapsedMillis;
  initialVelocity = state.initialVelocity;
  oldVelocity = state.velocity;
  decelFactor = $wnd.Math.pow(0.9993, totalEllapsedMillis);
  minDecel = ellapsedMillis * 5.0E-4;
  newVelocityX = $calcNewVelocity(initialVelocity.x_0, decelFactor, oldVelocity.x_0, minDecel);
  newVelocityY = $calcNewVelocity(initialVelocity.y_0, decelFactor, oldVelocity.y_0, minDecel);
  newVelocity = new Point(newVelocityX, newVelocityY);
  state.velocity = newVelocity;
  elapsedMillis = state.elapsedMillis;
  dist = $mult(newVelocity, new Point(elapsedMillis, elapsedMillis));
  position = state.position_0;
  $setPosition(state, new Point(position.x_0 + dist.x_0, position.y_0 + dist.y_0));
  if ($wnd.Math.abs(newVelocity.x_0) < 0.02 && $wnd.Math.abs(newVelocity.y_0) < 0.02) {
    return false;
  }
  return true;
}

function DefaultMomentum(){
}

defineClass(480, 1, {}, DefaultMomentum);
var Lcom_google_gwt_touch_client_DefaultMomentum_2_classLit = createForClass('com.google.gwt.touch.client', 'DefaultMomentum', 480);
function $setCumulativeElapsedMillis(this$static, cumulativeElapsedMillis){
  this$static.cumulativeElapsedMillis = cumulativeElapsedMillis;
}

function $setElapsedMillis(this$static, elapsedMillis){
  this$static.elapsedMillis = elapsedMillis;
}

function $setPosition(this$static, position){
  this$static.position_0 = position;
}

function Momentum$State(initialPosition, initialVelocity){
  this.initialVelocity = initialVelocity;
  this.position_0 = new Point_0(initialPosition);
  this.velocity = new Point_0(initialVelocity);
}

defineClass(481, 1, {}, Momentum$State);
_.cumulativeElapsedMillis = 0;
_.elapsedMillis = 0;
var Lcom_google_gwt_touch_client_Momentum$State_2_classLit = createForClass('com.google.gwt.touch.client', 'Momentum/State', 481);
function $minus(this$static, c){
  return new Point(this$static.x_0 - c.x_0, this$static.y_0 - c.y_0);
}

function $mult(this$static, c){
  return new Point(this$static.x_0 * c.x_0, this$static.y_0 * c.y_0);
}

function $plus(this$static, c){
  return new Point(this$static.x_0 + c.x_0, this$static.y_0 + c.y_0);
}

function Point(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

function Point_0(c){
  Point.call(this, c.x_0, c.y_0);
}

defineClass(36, 1, {36:1}, Point, Point_0);
_.equals_0 = function equals_6(obj){
  var c;
  if (!instanceOf(obj, 36)) {
    return false;
  }
  c = castTo(obj, 36);
  return this.x_0 == c.x_0 && this.y_0 == c.y_0;
}
;
_.hashCode_0 = function hashCode_8(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString_0 = function toString_13(){
  return 'Point(' + this.x_0 + ',' + this.y_0 + ')';
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lcom_google_gwt_touch_client_Point_2_classLit = createForClass('com.google.gwt.touch.client', 'Point', 36);
function $calculateEndVelocity(from, to){
  var dist, time;
  time = to.time - from.time;
  if (time <= 0) {
    return null;
  }
  dist = $minus(from.point, to.point);
  return new Point(dist.x_0 / time, dist.y_0 / time);
}

function $cancelAll(this$static){
  this$static.touching = false;
  this$static.dragging = false;
  this$static.momentumCommand = null;
}

function $getWidgetScrollPosition(this$static){
  return new Point($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
}

function $hitTest(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = new Point(point1.x_0 - point2.x_0, point1.y_0 - point2.y_0);
  absDiffX = $wnd.Math.abs(diff.x_0);
  absDiffY = $wnd.Math.abs(diff.y_0);
  return absDiffX <= 25 && absDiffY <= 25;
}

function $isClickScrollTriggeringTouch(this$static, clickPoint){
  if (this$static.recentScrollTriggeringTouchPosition.point) {
    return $hitTest(clickPoint, this$static.recentScrollTriggeringTouchPosition.point);
  }
  return false;
}

function $isClickTouchPositionDuringMomentum(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = now_1();
  same = false;
  for (point$iterator = new ArrayList$1(this$static.touchPositionsDuringMomentum); point$iterator.i < point$iterator.this$01.array.length;) {
    point = castTo($next_6(point$iterator), 76);
    if (currentTime - point.time <= 2500 && $hitTest(clickPoint, point.point)) {
      same = true;
      break;
    }
  }
  return same;
}

function $onDragEnd(this$static){
  var endVelocity;
  if (!this$static.momentum) {
    return;
  }
  endVelocity = $calculateEndVelocity(this$static.recentTouchPosition, this$static.lastTouchPosition);
  if (endVelocity) {
    this$static.momentumCommand = new TouchScroller$MomentumCommand(this$static, endVelocity);
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumCommand), 16);
  }
}

function $onTouchEnd(this$static){
  if (!this$static.touching) {
    return;
  }
  this$static.touching = false;
  if (this$static.dragging) {
    this$static.dragging = false;
    $onDragEnd(this$static);
  }
}

function $onTouchMove(this$static, event_0){
  var absDiffX, absDiffY, diff, hMax, hMin, hPosition, touch, touchPoint, touchTime, touches, trackingTime, vMax, vPosition, diff_0, curScrollPosition;
  if (!this$static.touching) {
    return;
  }
  touch = (touches = event_0.nativeEvent.touches , touches.length > 0?touches[0]:null);
  touchPoint = new Point((touch.pageX || 0) | 0, (touch.pageY || 0) | 0);
  touchTime = now_1();
  $setTemporalPoint(this$static.lastTouchPosition, touchPoint, touchTime);
  if (!this$static.dragging) {
    diff = $minus(touchPoint, this$static.startTouchPosition);
    absDiffX = $wnd.Math.abs(diff.x_0);
    absDiffY = $wnd.Math.abs(diff.y_0);
    if (absDiffX > 5 || absDiffY > 5) {
      $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, this$static.recentTouchPosition.point, this$static.recentTouchPosition.time);
      if (absDiffX > absDiffY) {
        hPosition = $getHorizontalScrollPosition(this$static.widget);
        hMin = $getMinimumHorizontalScrollPosition_0(this$static.widget);
        hMax = $getMaximumHorizontalScrollPosition_0(this$static.widget);
        if (diff.x_0 < 0 && hMax <= hPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.x_0 > 0 && hMin >= hPosition) {
          $cancelAll(this$static);
          return;
        }
      }
       else {
        vPosition = $getVerticalScrollPosition(this$static.widget);
        vMax = $getMaximumVerticalScrollPosition(this$static.widget);
        if (diff.y_0 < 0 && vMax <= vPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.y_0 > 0 && 0 >= vPosition) {
          $cancelAll(this$static);
          return;
        }
      }
      this$static.dragging = true;
    }
  }
  !!event_0.nativeEvent && (event_0.nativeEvent.preventDefault() , undefined);
  if (this$static.dragging) {
    diff_0 = $minus(this$static.startTouchPosition, this$static.lastTouchPosition.point);
    curScrollPosition = $plus(this$static.startScrollPosition, diff_0);
    $setHorizontalScrollPosition(this$static.widget, round_int(curScrollPosition.x_0));
    $setVerticalScrollPosition(this$static.widget, round_int(curScrollPosition.y_0));
    trackingTime = touchTime - this$static.recentTouchPosition.time;
    if (trackingTime > 200 && !!this$static.recentTouchPositionOnDeck) {
      $setTemporalPoint(this$static.recentTouchPosition, this$static.recentTouchPositionOnDeck.point, this$static.recentTouchPositionOnDeck.time);
      this$static.recentTouchPositionOnDeck = null;
    }
     else 
      trackingTime > 100 && !this$static.recentTouchPositionOnDeck && (this$static.recentTouchPositionOnDeck = new TouchScroller$TemporalPoint_0(touchPoint, touchTime));
  }
}

function $onTouchStart(this$static, event_0){
  var startTouchTime, touch, touches;
  $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, null, 0);
  if (this$static.touching) {
    return;
  }
  touch = (touches = event_0.nativeEvent.touches , touches.length > 0?touches[0]:null);
  this$static.startTouchPosition = new Point((touch.pageX || 0) | 0, (touch.pageY || 0) | 0);
  startTouchTime = now_1();
  $setTemporalPoint(this$static.recentTouchPosition, this$static.startTouchPosition, startTouchTime);
  $setTemporalPoint(this$static.lastTouchPosition, this$static.startTouchPosition, startTouchTime);
  this$static.recentTouchPositionOnDeck = null;
  if (this$static.momentumCommand) {
    $add_2(this$static.touchPositionsDuringMomentum, new TouchScroller$TemporalPoint_0(this$static.startTouchPosition, startTouchTime));
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumTouchRemovalCommand), 2500);
  }
  this$static.startScrollPosition = new Point($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
  $cancelAll(this$static);
  this$static.touching = true;
}

function $removeAttachHandler(this$static){
  if (this$static.attachHandlerReg) {
    $removeHandler(this$static.attachHandlerReg.real);
    this$static.attachHandlerReg = null;
  }
}

function $removeBustClickHandler(this$static){
  if (this$static.bustClickHandlerReg) {
    $removeHandler(this$static.bustClickHandlerReg.real);
    this$static.bustClickHandlerReg = null;
  }
}

function $setMomentum(this$static, momentum){
  this$static.momentum = momentum;
}

function $setTargetWidget(this$static, widget){
  var reg, reg$iterator;
  if (this$static.widget == widget) {
    return;
  }
  $cancelAll(this$static);
  for (reg$iterator = new ArrayList$1(this$static.handlerRegs); reg$iterator.i < reg$iterator.this$01.array.length;) {
    reg = castTo($next_6(reg$iterator), 666);
    $removeHandler(reg.real);
  }
  this$static.handlerRegs.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  $removeAttachHandler(this$static);
  $removeBustClickHandler(this$static);
  this$static.widget = widget;
  widget.attached && ($removeBustClickHandler(this$static) , this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static)));
  this$static.attachHandlerReg = $addHandler_0(widget, new TouchScroller$1(this$static), (!TYPE_14 && (TYPE_14 = new GwtEvent$Type) , TYPE_14));
  $add_2(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$2(this$static), ($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_13)));
  $add_2(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$3(this$static), ($clinit_TouchMoveEvent() , $clinit_TouchMoveEvent() , TYPE_12)));
  $add_2(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$4(this$static), ($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_11)));
  $add_2(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$5(this$static), ($clinit_TouchCancelEvent() , $clinit_TouchCancelEvent() , TYPE_10)));
}

function $setWidgetScrollPosition(this$static, position){
  $setHorizontalScrollPosition(this$static.widget, round_int(position.x_0));
  $setVerticalScrollPosition(this$static.widget, round_int(position.y_0));
}

function $setupBustClickHandler(this$static){
  $removeBustClickHandler(this$static);
  this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static));
}

function TouchScroller(){
  this.handlerRegs = new ArrayList;
  this.lastTouchPosition = new TouchScroller$TemporalPoint;
  this.recentTouchPosition = new TouchScroller$TemporalPoint;
  this.recentScrollTriggeringTouchPosition = new TouchScroller$TemporalPoint;
  this.touchPositionsDuringMomentum = new ArrayList;
  this.momentumTouchRemovalCommand = new TouchScroller$MomentumTouchRemovalCommand(this);
  $setMomentum(this, new DefaultMomentum);
}

defineClass(442, 1, {}, TouchScroller);
_.dragging = false;
_.touching = false;
var isSupported;
var Lcom_google_gwt_touch_client_TouchScroller_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller', 442);
function TouchScroller$1(this$0){
  this.this$01 = this$0;
}

defineClass(446, 1, {668:1, 15:1}, TouchScroller$1);
var Lcom_google_gwt_touch_client_TouchScroller$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/1', 446);
function TouchScroller$2(this$0){
  this.this$01 = this$0;
}

defineClass(447, 1, {674:1, 15:1}, TouchScroller$2);
var Lcom_google_gwt_touch_client_TouchScroller$2_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/2', 447);
function TouchScroller$3(this$0){
  this.this$01 = this$0;
}

defineClass(448, 1, {675:1, 15:1}, TouchScroller$3);
var Lcom_google_gwt_touch_client_TouchScroller$3_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/3', 448);
function TouchScroller$4(this$0){
  this.this$01 = this$0;
}

defineClass(449, 1, {676:1, 15:1}, TouchScroller$4);
var Lcom_google_gwt_touch_client_TouchScroller$4_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/4', 449);
function TouchScroller$5(this$0){
  this.this$01 = this$0;
}

defineClass(450, 1, {677:1, 15:1}, TouchScroller$5);
var Lcom_google_gwt_touch_client_TouchScroller$5_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/5', 450);
function TouchScroller$6(this$0){
  this.this$01 = this$0;
}

defineClass(201, 1, $intern_27, TouchScroller$6);
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  var clickPoint;
  if (1 == $getTypeInt(event_0.nativeEvent)) {
    clickPoint = new Point((event_0.nativeEvent.clientX || 0) | 0, (event_0.nativeEvent.clientY || 0) | 0);
    if ($isClickScrollTriggeringTouch(this.this$01, clickPoint) || $isClickTouchPositionDuringMomentum(this.this$01, clickPoint)) {
      event_0.isCanceled = true;
      event_0.nativeEvent.stopPropagation();
      event_0.nativeEvent.preventDefault();
    }
  }
}
;
var Lcom_google_gwt_touch_client_TouchScroller$6_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/6', 201);
function $finish(this$static){
  if (this$static.windowResizeHandler) {
    $removeHandler(this$static.windowResizeHandler.real);
    this$static.windowResizeHandler = null;
  }
  this$static == this$static.this$01.momentumCommand && (this$static.this$01.momentumCommand = null);
}

function TouchScroller$MomentumCommand(this$0, endVelocity){
  this.this$01 = this$0;
  this.duration = new Duration;
  this.initialPosition = $getWidgetScrollPosition(this.this$01);
  this.state = new Momentum$State(this.initialPosition, endVelocity);
  this.windowResizeHandler = addResizeHandler(new TouchScroller$MomentumCommand$1(this));
}

defineClass(443, 1, {}, TouchScroller$MomentumCommand);
_.execute_0 = function execute_4(){
  var cumulativeElapsedMillis, hMax, hMin, hPos, notDone, vMax, vPos;
  if (this != this.this$01.momentumCommand) {
    $finish(this);
    return false;
  }
  cumulativeElapsedMillis = $elapsedMillis(this.duration);
  $setElapsedMillis(this.state, cumulativeElapsedMillis - this.lastElapsedMillis);
  this.lastElapsedMillis = cumulativeElapsedMillis;
  $setCumulativeElapsedMillis(this.state, cumulativeElapsedMillis);
  notDone = $updateState(this.state);
  notDone || $finish(this);
  $setWidgetScrollPosition(this.this$01, this.state.position_0);
  hPos = round_int(this.state.position_0.x_0);
  hMin = $getMinimumHorizontalScrollPosition_0(this.this$01.widget);
  hMax = $getMaximumHorizontalScrollPosition_0(this.this$01.widget);
  vMax = $getMaximumVerticalScrollPosition(this.this$01.widget);
  vPos = round_int(this.state.position_0.y_0);
  if ((vMax <= vPos || 0 >= vPos) && (hMax <= hPos || hMin >= hPos)) {
    $finish(this);
    return false;
  }
  return notDone;
}
;
_.lastElapsedMillis = 0;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand', 443);
function TouchScroller$MomentumCommand$1(this$1){
  this.this$11 = this$1;
}

defineClass(445, 1, $intern_28, TouchScroller$MomentumCommand$1);
_.onResize = function onResize(event_0){
  $finish(this.this$11);
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand/1', 445);
function TouchScroller$MomentumTouchRemovalCommand(this$0){
  this.this$01 = this$0;
}

defineClass(444, 1, {}, TouchScroller$MomentumTouchRemovalCommand);
_.execute_0 = function execute_5(){
  var currentTime, iter, point;
  currentTime = now_1();
  iter = new ArrayList$1(this.this$01.touchPositionsDuringMomentum);
  while (iter.i < iter.this$01.array.length) {
    point = castTo($next_6(iter), 76);
    currentTime - point.time >= 2500 && $remove_14(iter);
  }
  return this.this$01.touchPositionsDuringMomentum.array.length != 0;
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumTouchRemovalCommand', 444);
function $setTemporalPoint(this$static, point, time){
  this$static.point = point;
  this$static.time = time;
}

function TouchScroller$TemporalPoint(){
}

function TouchScroller$TemporalPoint_0(point, time){
  this.point = point;
  this.time = time;
}

defineClass(76, 1, {76:1}, TouchScroller$TemporalPoint, TouchScroller$TemporalPoint_0);
_.time = 0;
var Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/TemporalPoint', 76);
function $get(this$static){
  if (!this$static.element) {
    this$static.element = $getElementById($doc, this$static.domId);
    if (!this$static.element) {
      throw toJs(new RuntimeException_0('Cannot find element with id "' + this$static.domId + '". Perhaps it is not attached to the document body.'));
    }
    this$static.element.removeAttribute('id');
  }
  return this$static.element;
}

function LazyDomElement(domId){
  this.domId = domId;
}

defineClass(125, 1, {}, LazyDomElement);
var Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client', 'LazyDomElement', 125);
function attachToDom(element){
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(element);
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = $doc.createElement('div');
    setVisible(hiddenDiv, false);
    $appendChild(($clinit_RootPanel() , $doc.body), hiddenDiv);
  }
}

function orphan(node){
  $removeChild(node.parentNode, node);
}

var hiddenDiv;
function UiBinderUtil$TempAttachment(origParent, origSibling, element){
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineClass(545, 1, {}, UiBinderUtil$TempAttachment);
var Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client', 'UiBinderUtil/TempAttachment', 545);
defineClass(412, 1, {15:1});
var Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client', 'BaseListenerWrapper', 412);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplMozilla();
}

function dispatchEvent_0(evt, elem){
  $clinit_DOM();
  var eventListener;
  eventListener = getEventListener(elem);
  if (!eventListener) {
    return false;
  }
  dispatchEvent_1(evt, elem, eventListener);
  return true;
}

function dispatchEvent_1(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $clinit_DOM();
  $insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  $clinit_DOM();
  var ret;
  ret = fire_5(handlers_0, evt);
  if (!ret && !!evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }
  return ret;
}

function releaseCapture(elem){
  $clinit_DOM();
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  ($clinit_DOMImplStandard() , captureElem) == elem && (captureElem = null);
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setCapture(elem){
  $clinit_DOM();
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  $clinit_DOMImplStandard() , captureElem = elem;
}

function sinkBitlessEvent(elem, eventTypeName){
  var dispatchMap, dispatcher;
  $clinit_DOM();
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $getTypeInt(this$static){
  return $clinit_DOM() , $eventGetTypeInt(this$static.type);
}

function addNativePreviewHandler(handler){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  !TYPE_20 && (TYPE_20 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE_20, handler);
}

function getEventsSunk(elem){
  return $clinit_DOM() , elem.__eventBits || 0;
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  $sinkEvents(elem, eventBits);
}

var handlers_0;
function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_5(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_20 && !!handlers && $isEventHandled(handlers, TYPE_20)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(306, 635, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_20(handler){
  castTo(handler, 615).onPreviewNativeEvent(this);
  singleton.isFirstHandler = false;
}
;
_.getAssociatedType = function getAssociatedType_21(){
  return TYPE_20;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_20, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 306);
function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImpl;
  historyEventSource = new History$HistoryEventSource;
  token_0 = getDecodedHash();
}

function addValueChangeHandler(handler){
  $clinit_History();
  return $addValueChangeHandler(historyEventSource, handler);
}

function getDecodedHash(){
  var hashToken, href_0, hashLoc;
  hashToken = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc > 0?href_0.substring(hashLoc):'');
  if (hashToken == null || hashToken.length == 0) {
    return '';
  }
  return $decode(hashToken.substr(1));
}

function newItem(historyToken){
  $clinit_History();
  var updateToken;
  historyToken = historyToken == null?'':historyToken;
  if (!$equals_0(historyToken, token_0)) {
    token_0 = historyToken;
    updateToken = $wnd.encodeURI(historyToken).replace('#', '%23');
    $wnd.location.hash = updateToken;
    fire_4(historyEventSource, historyToken);
  }
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals_0(hashToken, token_0)) {
    token_0 = hashToken;
    fire_4(historyEventSource, hashToken);
  }
}

var historyEventSource, token_0;
function $addValueChangeHandler(this$static, handler){
  return $addHandler(this$static.handlers, (!TYPE_19 && (TYPE_19 = new GwtEvent$Type) , TYPE_19), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(476, 1, {9:1}, History$HistoryEventSource);
_.fireEvent = function fireEvent_0(event_0){
  $fireEvent(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 476);
function History$HistoryImpl(){
  var handler;
  handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}

defineClass(477, 1, {}, History$HistoryImpl);
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 477);
function $decode(toDecode){
  return $wnd.decodeURI(toDecode.replace('%23', '#'));
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_15?TYPE_15:(TYPE_15 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize_0(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_3((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), width_0);
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_21 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(300, 635, {}, Window$ClosingEvent);
_.dispatch = function dispatch_21(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_22(){
  return TYPE_21;
}
;
var TYPE_21;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 300);
function replace_0(newURL){
  $wnd.location.replace(newURL);
}

function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(138, 92, {9:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 138);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return $intern_29;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_30;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return $intern_31;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_22;
    case 'touchstart':
      return $intern_32;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_23;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_33;
    case 'gesturechange':
      return $intern_34;
    case 'gestureend':
      return $intern_35;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    $initSyntheticMouseUpEvents();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 10)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_3, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $eventGetFromElement(evt){
  if ($equals_0(evt.type, 'mouseover')) {
    return $eventGetRelatedTarget(evt);
  }
  if ($equals_0(evt.type, 'mouseout')) {
    return evt.target;
  }
  return null;
}

function $eventGetToElement(evt){
  if ($equals_0(evt.type, 'mouseover')) {
    return evt.target;
  }
  if ($equals_0(evt.type, 'mouseout')) {
    return $eventGetRelatedTarget(evt);
  }
  return null;
}

function $getChild(elem, index_0){
  var count = 0, child = elem.firstChild;
  while (child) {
    if (child.nodeType == 1) {
      if (index_0 == count)
        return child;
      ++count;
    }
    child = child.nextSibling;
  }
  return null;
}

function $getChildCount(elem){
  var count = 0, child = elem.firstChild;
  while (child) {
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return count;
}

function $initEventSystem(){
  dispatchEvent_2 = $entry(dispatchEvent_3);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $insertChild(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_2:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_2:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_2:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_2:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_2:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_2:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_2:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_2:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_2:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_2:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_2:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_2:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_2:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_2:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_2:null);
  chMask & $intern_29 && (elem.onload = bits & $intern_29?dispatchUnhandledEvent:null);
  chMask & $intern_30 && (elem.onerror = bits & $intern_30?dispatchEvent_2:null);
  chMask & $intern_31 && (elem.onmousewheel = bits & $intern_31?dispatchEvent_2:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_2:null);
  chMask & $intern_22 && (elem.onpaste = bits & $intern_22?dispatchEvent_2:null);
  chMask & $intern_32 && (elem.ontouchstart = bits & $intern_32?dispatchEvent_2:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_2:null);
  chMask & $intern_23 && (elem.ontouchend = bits & $intern_23?dispatchEvent_2:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_2:null);
  chMask & $intern_33 && (elem.ongesturestart = bits & $intern_33?dispatchEvent_2:null);
  chMask & $intern_34 && (elem.ongesturechange = bits & $intern_34?dispatchEvent_2:null);
  chMask & $intern_35 && (elem.ongestureend = bits & $intern_35?dispatchEvent_2:null);
}

function dispatchCapturedEvent(evt){
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOMImplStandard();
  var cancelled;
  cancelled = !previewEvent(evt);
  if (cancelled || !captureElem) {
    return;
  }
  dispatchEvent_0(evt, captureElem) && (evt.stopPropagation() , undefined);
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_3(evt);
}

function dispatchEvent_3(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_1(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = evt.currentTarget;
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_3(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = evt.currentTarget;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_2, dispatchUnhandledEvent;
function $clinit_DOMImplMozilla(){
  $clinit_DOMImplMozilla = emptyMethod;
  $clinit_DOMImplStandard();
  captureEventDispatchers['DOMMouseScroll'] = dispatchCapturedMouseEvent;
}

function $initSyntheticMouseUpEvents(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = ($clinit_DOMImplStandard() , captureElem);
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
  bits & $intern_31 && elem.addEventListener('DOMMouseScroll', ($clinit_DOMImplStandard() , dispatchEvent_2), false);
}

function $get_0(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  if (index_0 < 0) {
    return null;
  }
  return castTo($get_1(this$static.uiObjectList, index_0), 7);
}

function $put(this$static, uiObject){
  var index_0;
  if (!this$static.freeList) {
    index_0 = this$static.uiObjectList.array.length;
    $add_2(this$static.uiObjectList, uiObject);
  }
   else {
    index_0 = this$static.freeList.index_0;
    $set_1(this$static.uiObjectList, index_0, uiObject);
    this$static.freeList = this$static.freeList.next_0;
  }
  ($clinit_DOM() , uiObject.element)['__uiObjectID'] = index_0;
}

function $removeByElement(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  elem['__uiObjectID'] = null;
  $set_1(this$static.uiObjectList, index_0, null);
  this$static.freeList = new ElementMapperImpl$FreeNode(index_0, this$static.freeList);
}

function ElementMapperImpl(){
  this.uiObjectList = new ArrayList;
}

function getIndex(elem){
  var index_0 = elem['__uiObjectID'];
  return index_0 == null?-1:index_0;
}

defineClass(202, 1, {}, ElementMapperImpl);
_.freeList = null;
var Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl', 202);
function ElementMapperImpl$FreeNode(index_0, next){
  this.index_0 = index_0;
  this.next_0 = next;
}

defineClass(451, 1, {}, ElementMapperImpl$FreeNode);
_.index_0 = 0;
var Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl/FreeNode', 451);
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize_0();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function IncompatibleRemoteServiceException(){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function IncompatibleRemoteServiceException_0(msg){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser. ( ' + msg + ' )');
}

function IncompatibleRemoteServiceException_1(cause){
  RuntimeException_1.call(this, 'The response could not be deserialized', cause);
}

defineClass(120, 26, $intern_4, IncompatibleRemoteServiceException, IncompatibleRemoteServiceException_0, IncompatibleRemoteServiceException_1);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 120);
function deserialize_2(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_2(streamReader){
  return new IncompatibleRemoteServiceException;
}

function serialize_1(streamWriter, instance){
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException(s){
  RuntimeException_1.call(this, s, null);
}

function InvocationException_0(s, cause){
  RuntimeException_1.call(this, s, cause);
}

defineClass(101, 26, $intern_4, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'InvocationException', 101);
function $create(this$static, serviceEntryPoint){
  this$static.builder = new RequestBuilder(($clinit_RequestBuilder() , POST), serviceEntryPoint);
  return this$static;
}

function $doFinish(rb){
  $setHeader(rb, 'X-GWT-Permutation', ($clinit_Impl() , $strongName));
  $setHeader(rb, 'X-GWT-Module-Base', getModuleBaseURL());
}

function $doSetCallback(rb, callback){
  throwIfNull('callback', callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data_0){
  rb.requestData = data_0;
}

function $finish_0(this$static){
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  }
   finally {
    this$static.builder = null;
  }
}

function $setCallback(this$static, callback){
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setContentType(this$static){
  $setHeader(this$static.builder, 'Content-Type', 'text/x-gwt-rpc; charset=utf-8');
  return this$static;
}

function $setRequestData(this$static, data_0){
  $doSetRequestData(this$static.builder, data_0);
  return this$static;
}

function RpcRequestBuilder(){
}

defineClass(441, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcRequestBuilder', 441);
function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(319, 26, $intern_4, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 319);
function deserialize_3(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_3(streamReader){
  return new RpcTokenException;
}

function SerializationException(msg){
  Exception_0.call(this, msg);
}

defineClass(38, 16, {38:1, 3:1, 16:1, 14:1}, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'SerializationException', 38);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
  InvocationException.call(this, 'Service implementation URL not specified');
}

defineClass(297, 101, $intern_4, ServiceDefTarget$NoServiceEntryPointSpecifiedException);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 297);
function StatusCodeException(statusCode, statusText, encodedResponse){
  InvocationException.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

defineClass(548, 101, $intern_4, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'StatusCodeException', 548);
function serialize_2(streamWriter, instance){
  $writeString(streamWriter, instance.$_nullField);
}

function deserialize_4(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_4(streamReader){
  return new IOException;
}

function deserialize_5(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_5(streamReader){
  return new UnsupportedEncodingException;
}

function deserialize_6(streamReader, instance){
  deserialize_9(streamReader, instance);
}

function instantiate_6(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Ljava_lang_Double_2_classLit, $intern_2, 167, size_0, 7, 1);
}

function deserialize_7(streamReader, instance){
}

function instantiate_7(streamReader){
  return $readDouble(streamReader);
}

function deserialize_8(streamReader, instance){
}

function instantiate_8(streamReader){
  return valueOf_2($readLong(streamReader));
}

function serialize_3(streamWriter, instance){
  $append(streamWriter, longToBase64(instance.value_0));
}

function deserialize_9(streamReader, instance){
  var itemIndex;
  for (itemIndex = 0; itemIndex < instance.length; ++itemIndex) {
    setCheck(instance, itemIndex, $readObject(streamReader));
  }
}

function deserialize_10(streamReader, instance){
  var i, n;
  for (i = 0 , n = instance.length; i < n; ++i) {
    instance[i] = $getString(streamReader, streamReader.results[--streamReader.index_0]);
  }
}

function instantiate_9(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_16, 2, size_0, 6, 1);
}

function serialize_4(streamWriter, instance){
  var i, n;
  $writeInt(streamWriter, instance.length);
  for (i = 0 , n = instance.length; i < n; ++i) {
    $writeString(streamWriter, instance[i]);
  }
}

function deserialize_11(streamReader, instance){
}

function instantiate_10(streamReader){
  return $getString(streamReader, streamReader.results[--streamReader.index_0]);
}

function serialize_5(streamWriter, instance){
  $append(streamWriter, '' + $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0){
  instance.detailMessage = value_0;
}

function deserialize_12(streamReader, instance){
}

function instantiate_11(streamReader){
  return new Date_4($readLong(streamReader));
}

function deserialize_13(streamReader, instance){
}

function instantiate_12(streamReader){
  return new Time($readLong(streamReader));
}

function deserialize_14(streamReader, instance){
  $setNanos(instance, streamReader.results[--streamReader.index_0]);
}

function instantiate_13(streamReader){
  return new Timestamp($readLong(streamReader));
}

function deserialize_15(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function serialize_6(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function instantiate_14(streamReader){
  return new ArrayList;
}

function deserialize_16(streamReader, instance){
}

function instantiate_15(streamReader){
  var array, i, size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, size_0, 5, 1);
  for (i = 0; i < size_0; ++i) {
    array[i] = $readObject(streamReader);
  }
  return new Arrays$ArrayList(array);
}

function serialize_7(streamWriter, instance){
  var obj, obj$iterator, size_0;
  size_0 = instance.size_1();
  append(streamWriter.encodeBuffer, '' + size_0);
  for (obj$iterator = instance.iterator(); obj$iterator.hasNext_0();) {
    obj = obj$iterator.next_1();
    $writeObject(streamWriter, obj);
  }
}

function deserialize_17(streamReader, instance){
  var i, obj, size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  for (i = 0; i < size_0; ++i) {
    obj = $readObject(streamReader);
    instance.add_0(obj);
  }
}

function serialize_8(streamWriter, instance){
  var obj, obj$iterator, size_0;
  size_0 = instance.size_1();
  append(streamWriter.encodeBuffer, '' + size_0);
  for (obj$iterator = instance.iterator(); obj$iterator.hasNext_0();) {
    obj = obj$iterator.next_1();
    $writeObject(streamWriter, obj);
  }
}

function deserialize_18(streamReader, instance){
}

function instantiate_16(streamReader){
  return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
}

function serialize_9(streamWriter, instance){
}

function serialize_10(streamWriter, instance){
}

function deserialize_19(streamReader, instance){
}

function instantiate_17(streamReader){
  return $clinit_Collections() , new Collections$SingletonList($readObject(streamReader));
}

function serialize_11(streamWriter, instance){
  $writeObject(streamWriter, instance.get_0(0));
}

function deserialize_20(streamReader, instance){
}

function instantiate_18(streamReader){
  return new Date_2($readLong(streamReader));
}

function serialize_12(streamWriter, instance){
  serialize_16(streamWriter, instance);
}

function serialize_13(streamWriter, instance){
  serialize_16(streamWriter, instance);
}

function serialize_14(streamWriter, instance){
  $append(streamWriter, instance.$_nullField?'1':'0');
  serialize_16(streamWriter, instance);
}

function deserialize_21(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function serialize_15(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function instantiate_19(streamReader){
  return new LinkedList;
}

function serialize_16(streamWriter, instance){
  var entry, entry$iterator, size_0;
  size_0 = instance.size_1();
  append(streamWriter.encodeBuffer, '' + size_0);
  for (entry$iterator = instance.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 33);
    $writeObject(streamWriter, entry.getKey());
    $writeObject(streamWriter, entry.getValue());
  }
}

function deserialize_22(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_20(streamReader){
  return new Stack;
}

function serialize_17(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function serialize_18(streamWriter, instance){
  $writeObject(streamWriter, naturalOrderToNull(instance.cmp));
  serialize_16(streamWriter, instance);
}

function deserialize_23(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function serialize_19(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function instantiate_21(streamReader){
  return new Vector;
}

function $setFlags(this$static, flags){
  this$static.flags = flags;
}

function $setVersion(this$static, version){
  this$static.version = version;
}

function base64Append(sb, digit, haveNonZero){
  var c;
  digit > 0 && (haveNonZero = true);
  if (haveNonZero) {
    digit < 26?(c = 65 + digit):digit < 52?(c = 97 + digit - 26):digit < 62?(c = 48 + digit - 52):digit == 62?(c = 36):(c = 95);
    $append_1(sb, c & $intern_15);
  }
  return haveNonZero;
}

function base64Value(digit){
  if (digit >= 65 && digit <= 90) {
    return digit - 65;
  }
  if (digit >= 97) {
    return digit - 97 + 26;
  }
  if (digit >= 48 && digit <= 57) {
    return digit - 48 + 52;
  }
  if (digit == 36) {
    return 62;
  }
  return 63;
}

function longFromBase64(value_0){
  var len, longVal, pos;
  pos = 0;
  longVal = base64Value($charAt(value_0, pos++));
  len = value_0.length;
  while (pos < len) {
    longVal = createLongEmul(shl(isSmallLong0(longVal)?toBigLong(longVal):longVal, 6));
    longVal = or_0(longVal, base64Value($charAt(value_0, pos++)));
  }
  return longVal;
}

function longToBase64(value_0){
  var haveNonZero, high, low, sb, v;
  low = toInt_0(createLongEmul(and(isSmallLong0(value_0)?toBigLong(value_0):value_0, isSmallLong0(-1)?toBigLong(-1):-1)));
  high = toInt_0(createLongEmul(shr(isSmallLong0(value_0)?toBigLong(value_0):value_0, 32)));
  sb = new StringBuilder;
  haveNonZero = base64Append(sb, high >> 28 & 15, false);
  haveNonZero = base64Append(sb, high >> 22 & 63, haveNonZero);
  haveNonZero = base64Append(sb, high >> 16 & 63, haveNonZero);
  haveNonZero = base64Append(sb, high >> 10 & 63, haveNonZero);
  haveNonZero = base64Append(sb, high >> 4 & 63, haveNonZero);
  v = (high & 15) << 2 | low >> 30 & 3;
  haveNonZero = base64Append(sb, v, haveNonZero);
  haveNonZero = base64Append(sb, low >> 24 & 63, haveNonZero);
  haveNonZero = base64Append(sb, low >> 18 & 63, haveNonZero);
  haveNonZero = base64Append(sb, low >> 12 & 63, haveNonZero);
  base64Append(sb, low >> 6 & 63, haveNonZero);
  base64Append(sb, low & 63, true);
  return sb.string;
}

defineClass(196, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStream', 196);
function $readObject(this$static){
  var token, typeSignature, id_0, instance;
  token = this$static.results[--this$static.index_0];
  if (token < 0) {
    return $get_1(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return id_0 = ($add_2(this$static.seenArray, null) , this$static.seenArray.array.length) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set_1(this$static.seenArray, id_0 - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

defineClass(557, 196, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamReader', 557);
function $addString(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = castTo($getStringValue(this$static.stringMap, string), 62);
  if (o) {
    return o.value_0;
  }
  $add_2(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  $putStringValue(this$static.stringMap, string, valueOf_1(index_0));
  return index_0;
}

function $writeInt(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeObject(this$static, instance){
  var objIndex, typeSignature;
  if (instance == null) {
    $append(this$static, '' + $addString(this$static, null));
    return;
  }
  objIndex = $containsKey(this$static.objectMap, instance)?castTo($get_4(this$static.objectMap, instance), 62).value_0:-1;
  if (objIndex >= 0) {
    append(this$static.encodeBuffer, '' + -(objIndex + 1));
    return;
  }
  $put_0(this$static.objectMap, instance, valueOf_1(this$static.objectCount++));
  typeSignature = $getObjectTypeSignature(this$static, instance);
  if (typeSignature == null) {
    throw toJs(new SerializationException('could not get type signature for ' + getClass__Ljava_lang_Class___devirtual$(instance)));
  }
  $append(this$static, '' + $addString(this$static, typeSignature));
  $serialize(this$static.serializer, this$static, instance, typeSignature);
}

function $writeString(this$static, value_0){
  $append(this$static, '' + $addString(this$static, value_0));
}

defineClass(418, 196, {});
_.objectCount = 0;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamWriter', 418);
function $getString(this$static, index_0){
  return index_0 > 0?this$static.stringTable[index_0 - 1]:null;
}

function $prepareToRead(this$static, encoded){
  var versionStr, pos;
  (versionStr = $substring_0(encoded, encoded.lastIndexOf(',') + 1, encoded.lastIndexOf(']')) , pos = versionStr.lastIndexOf('[') , pos >= 0 && (versionStr = versionStr.substr(pos + 1)) , __parseAndValidateInt($trim(versionStr))) < 8?(this$static.results = eval(encoded)):(this$static.results = safeEval(encoded));
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  $setVersion(this$static, this$static.results[--this$static.index_0]);
  $setFlags(this$static, this$static.results[--this$static.index_0]);
  if (this$static.version < 5 || this$static.version > 8) {
    throw toJs(new IncompatibleRemoteServiceException_0('Got version ' + this$static.version + ', expected version between ' + 5 + ' and ' + 8));
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw toJs(new IncompatibleRemoteServiceException_0('Got an unknown flag from server: ' + this$static.flags));
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function $readBoolean(this$static){
  return !!this$static.results[--this$static.index_0];
}

function $readDouble(this$static){
  return Number(this$static.results[--this$static.index_0]);
}

function $readLong(this$static){
  var s = this$static.results[--this$static.index_0];
  return longFromBase64(s);
}

function ClientSerializationStreamReader(serializer){
  this.seenArray = new ArrayList;
  this.serializer = serializer;
}

defineClass(558, 557, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamReader', 558);
function $clinit_ClientSerializationStreamWriter(){
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $append(this$static, token){
  append(this$static.encodeBuffer, token);
}

function $getObjectTypeSignature(this$static, o){
  var clazz, e, clazz_0, superclass;
  clazz = getClass__Ljava_lang_Class___devirtual$(o);
  if (instanceOf(o, 5)) {
    e = castTo(o, 5);
    clazz = (clazz_0 = e.___clazz , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass);
  }
  return $getSerializationSignature(this$static.serializer, clazz);
}

function $toString_1(this$static){
  var buffer;
  buffer = new StringBuilder;
  append(buffer, '' + this$static.version);
  append(buffer, '' + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append_3(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, '' + stringTable.array.length);
  for (s$iterator = new ArrayList$1(stringTable); s$iterator.i < s$iterator.this$01.array.length;) {
    s = castToString($next_6(s$iterator));
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter(serializer, moduleBaseURL, serializationPolicyStrongName){
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap;
  this.stringMap = new HashMap;
  this.stringTable = new ArrayList;
  this.serializer = serializer;
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token){
  $clinit_ClientSerializationStreamWriter();
  sb.string += '' + token;
  sb.string += '|';
}

function getQuotingRegex(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  }
   else if (ua.indexOf('chrome/11') != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  }
   else if (ua.indexOf('webkit') != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  }
   else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str){
  var regex = regex_0;
  var idx = 0;
  var out = '';
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += '\\0';
    }
     else if (ch_0 == 92) {
      out += '\\\\';
    }
     else if (ch_0 == 124) {
      out += '\\!';
    }
     else {
      var hex = ch_0.toString(16);
      out += '\\u0000'.substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

defineClass(419, 418, {}, ClientSerializationStreamWriter);
_.toString_0 = function toString_14(){
  return $toString_1(this);
}
;
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamWriter', 419);
function $createStreamReader(this$static, encoded){
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader(this$static.serializer);
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $createStreamWriter(this$static){
  var clientSerializationStreamWriter;
  clientSerializationStreamWriter = new ClientSerializationStreamWriter(this$static.serializer, this$static.moduleBaseURL, this$static.serializationPolicyName);
  clientSerializationStreamWriter.objectCount = 0;
  $reset(clientSerializationStreamWriter.objectMap);
  $reset(clientSerializationStreamWriter.stringMap);
  clientSerializationStreamWriter.stringTable.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  clientSerializationStreamWriter.encodeBuffer = new StringBuilder;
  $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.moduleBaseURL);
  $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.serializationPolicyStrongName);
  return clientSerializationStreamWriter;
}

function $doInvoke(this$static, responseReader, methodName, statsContext, requestData, callback){
  var ex, iex, rb;
  rb = $doPrepareRequestBuilderImpl(this$static, responseReader, methodName, statsContext, requestData, callback);
  try {
    return throwIfNull('callback', rb.callback) , $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 64)) {
      ex = $e0;
      iex = new InvocationException_0('Unable to initiate the asynchronous service invocation (' + methodName + ') -- check the network connection', ex);
      callback.onFailure(iex);
    }
     else 
      throw toJs($e0);
  }
   finally {
    !!$stats && $stats_0($bytesStat(statsContext, methodName, requestData.length, 'requestSent'));
  }
  return null;
}

function $doPrepareRequestBuilderImpl(this$static, responseReader, methodName, statsContext, requestData, callback){
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw toJs(new ServiceDefTarget$NoServiceEntryPointSpecifiedException);
  }
  responseHandler = new RequestCallbackAdapter(this$static, methodName, statsContext, callback, responseReader);
  !this$static.rpcRequestBuilder && (this$static.rpcRequestBuilder = new RpcRequestBuilder);
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish_0(this$static.rpcRequestBuilder);
}

function RemoteServiceProxy(moduleBaseURL, serializationPolicyName, serializer){
  this.moduleBaseURL = moduleBaseURL;
  this.remoteServiceURL = moduleBaseURL + 'service.s3gwt';
  this.serializer = serializer;
  this.serializationPolicyName = serializationPolicyName;
}

function getEncodedInstance(encodedResponse){
  if ($equals_0(encodedResponse.substr(0, 4), '//OK') || $equals_0(encodedResponse.substr(0, 4), '//EX')) {
    return encodedResponse.substr(4);
  }
  return encodedResponse;
}

defineClass(59, 1, {});
_.createStreamWriter = function createStreamWriter(){
  return $createStreamWriter(this);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy', 59);
function $finish_1(this$static, callback, responseHeader){
  var payload;
  payload = $toString_1(this$static.streamWriter);
  !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'requestSerialized'));
  return $doInvoke(this$static.this$01, responseHeader, this$static.fullServiceName, this$static.statsContext, payload, callback);
}

function $start(this$static, remoteServiceInterfaceName, paramCount){
  !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'begin'));
  this$static.streamWriter = this$static.this$01.createStreamWriter();
  $writeString(this$static.streamWriter, remoteServiceInterfaceName);
  $writeString(this$static.streamWriter, this$static.methodName);
  $writeInt(this$static.streamWriter, paramCount);
  return this$static.streamWriter;
}

function RemoteServiceProxy$ServiceHelper(this$0, serviceName, methodName){
  this.this$01 = this$0;
  this.fullServiceName = serviceName + '.' + methodName;
  this.methodName = methodName;
  this.statsContext = new RpcStatsContext;
}

defineClass(47, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy/ServiceHelper', 47);
function $onError(this$static, exception){
  this$static.callback.onFailure(exception);
}

function $onResponseReceived(this$static, response){
  var caught, e, encodedResponse, result, statusCode;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode = response.xmlHttpRequest.status;
    !!$stats && $stats_0($bytesStat(this$static.statsContext, this$static.methodName, encodedResponse.length, 'responseReceived'));
    statusCode != 200?(caught = new StatusCodeException(statusCode, response.xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new InvocationException('No response payload from ' + this$static.methodName)):$equals_0(encodedResponse.substr(0, 4), '//OK')?(result = this$static.responseReader.read($createStreamReader(this$static.streamFactory, encodedResponse))):$equals_0(encodedResponse.substr(0, 4), '//EX')?(caught = castTo($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), 14)):(caught = new InvocationException(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    }
     else if (instanceOf($e0, 14)) {
      e = $e0;
      caught = e;
    }
     else 
      throw toJs($e0);
  }
   finally {
    !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'responseDeserialized'));
  }
  try {
    !caught?this$static.callback.onSuccess(result):this$static.callback.onFailure(caught);
  }
   finally {
    !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'end'));
  }
}

function RequestCallbackAdapter(streamFactory, methodName, statsContext, callback, responseReader){
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
  this.responseReader = responseReader;
}

defineClass(350, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter', 350);
function $clinit_RequestCallbackAdapter$ResponseReader(){
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1;
  BYTE = new RequestCallbackAdapter$ResponseReader$2;
  CHAR = new RequestCallbackAdapter$ResponseReader$3;
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4;
  FLOAT = new RequestCallbackAdapter$ResponseReader$5;
  INT = new RequestCallbackAdapter$ResponseReader$6;
  LONG = new RequestCallbackAdapter$ResponseReader$7;
  OBJECT = new RequestCallbackAdapter$ResponseReader$8;
  SHORT = new RequestCallbackAdapter$ResponseReader$9;
  STRING = new RequestCallbackAdapter$ResponseReader$10;
  VOID = new RequestCallbackAdapter$ResponseReader$11;
}

function RequestCallbackAdapter$ResponseReader(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, 1), $intern_2, 28, 0, [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

defineClass(28, 5, $intern_36);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader', 28, Ljava_lang_Enum_2_classLit, values_10);
function RequestCallbackAdapter$ResponseReader$1(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BOOLEAN', 0);
}

defineClass(351, 28, $intern_36, RequestCallbackAdapter$ResponseReader$1);
_.read = function read(streamReader){
  return $clinit_Boolean() , $readBoolean(streamReader)?true:false;
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/1', 351, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$10(){
  RequestCallbackAdapter$ResponseReader.call(this, 'STRING', 9);
}

defineClass(360, 28, $intern_36, RequestCallbackAdapter$ResponseReader$10);
_.read = function read_0(streamReader){
  return $getString(streamReader, streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/10', 360, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$11(){
  RequestCallbackAdapter$ResponseReader.call(this, 'VOID', 10);
}

defineClass(361, 28, $intern_36, RequestCallbackAdapter$ResponseReader$11);
_.read = function read_1(streamReader){
  return null;
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/11', 361, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$2(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BYTE', 1);
}

defineClass(352, 28, $intern_36, RequestCallbackAdapter$ResponseReader$2);
_.read = function read_2(streamReader){
  return valueOf(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/2', 352, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$3(){
  RequestCallbackAdapter$ResponseReader.call(this, 'CHAR', 2);
}

defineClass(353, 28, $intern_36, RequestCallbackAdapter$ResponseReader$3);
_.read = function read_3(streamReader){
  return valueOf_0(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/3', 353, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$4(){
  RequestCallbackAdapter$ResponseReader.call(this, 'DOUBLE', 3);
}

defineClass(354, 28, $intern_36, RequestCallbackAdapter$ResponseReader$4);
_.read = function read_4(streamReader){
  return $readDouble(streamReader);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/4', 354, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$5(){
  RequestCallbackAdapter$ResponseReader.call(this, 'FLOAT', 4);
}

defineClass(355, 28, $intern_36, RequestCallbackAdapter$ResponseReader$5);
_.read = function read_5(streamReader){
  return new Float(Number(streamReader.results[--streamReader.index_0]));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/5', 355, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$6(){
  RequestCallbackAdapter$ResponseReader.call(this, 'INT', 5);
}

defineClass(356, 28, $intern_36, RequestCallbackAdapter$ResponseReader$6);
_.read = function read_6(streamReader){
  return valueOf_1(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/6', 356, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$7(){
  RequestCallbackAdapter$ResponseReader.call(this, 'LONG', 6);
}

defineClass(357, 28, $intern_36, RequestCallbackAdapter$ResponseReader$7);
_.read = function read_7(streamReader){
  return valueOf_2($readLong(streamReader));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/7', 357, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$8(){
  RequestCallbackAdapter$ResponseReader.call(this, 'OBJECT', 7);
}

defineClass(358, 28, $intern_36, RequestCallbackAdapter$ResponseReader$8);
_.read = function read_8(streamReader){
  return $readObject(streamReader);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/8', 358, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$9(){
  RequestCallbackAdapter$ResponseReader.call(this, 'SHORT', 8);
}

defineClass(359, 28, $intern_36, RequestCallbackAdapter$ResponseReader$9);
_.read = function read_9(streamReader){
  return valueOf_3(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/9', 359, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function $bytesStat(this$static, method, bytes, eventType){
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $stats_0(data_0){
  return $stats(data_0);
}

function $timeStat(this$static, method, eventType){
  return {moduleName:($clinit_Impl() , $moduleName), sessionId:$sessionId, subSystem:'rpc', evtGroup:this$static.requestId, method:method, millis:(new Date).getTime(), type:eventType};
}

function RpcStatsContext(){
  RpcStatsContext_0.call(this, requestIdCounter++);
}

function RpcStatsContext_0(requestId){
  this.requestId = requestId;
}

defineClass(192, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RpcStatsContext', 192);
function $check(this$static, typeSignature){
  if (!this$static.methodMapNative[typeSignature]) {
    throw toJs(new SerializationException(typeSignature));
  }
}

function $deserialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $getSerializationSignature(this$static, clazz){
  return this$static.signatureMapNative[getHashCode_1(clazz)];
}

function $instantiate(this$static, stream, typeSignature){
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function $serialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $serialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function SerializerBase(methodMapNative, signatureMapNative){
  new HashMap;
  this.methodMapNative = methodMapNative;
  this.signatureMapNative = signatureMapNative;
}

defineClass(60, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 60);
function $deserialize_0(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function $serialize_0(this$static, stream, instance, signature){
  this$static[signature][2](stream, instance);
}

function $addStyleDependentName(this$static, styleSuffix){
  $setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + styleSuffix, true);
}

function $addStyleName(this$static, style){
  setStyleName(($clinit_DOM() , this$static.element), style, true);
}

function $getAbsoluteLeft_0(this$static){
  return $getAbsoluteLeft(($clinit_DOM() , this$static.element));
}

function $getAbsoluteTop_0(this$static){
  return $getAbsoluteTop(($clinit_DOM() , this$static.element));
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $getOffsetHeight(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetHeight');
}

function $getOffsetWidth(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetWidth');
}

function $removeStyleDependentName(this$static, styleSuffix){
  $setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + styleSuffix, false);
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setSize_0(this$static){
  ($clinit_DOM() , this$static.element).style['width'] = '100%';
  this$static.element.style['height'] = '100%';
}

function $setStyleName(this$static, style){
  $setClassName(this$static.getStyleElement(), style);
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(this$static.getStyleElement(), style, add_0);
}

function $setTitle(this$static){
  'Add a person'.length == 0?(($clinit_DOM() , this$static.element).removeAttribute('title') , undefined):(($clinit_DOM() , this$static.element).setAttribute('title', 'Add a person') , undefined);
}

function $setVisible(this$static, visible){
  setVisible(($clinit_DOM() , this$static.element), visible);
}

function $sinkBitlessEvent(this$static, eventTypeName){
  sinkBitlessEvent(($clinit_DOM() , this$static.element), eventTypeName);
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = elem.className || '';
  spaceIdx = $indexOf_2(fullClassName, fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx);
  }
  return fullClassName;
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw toJs(new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.'));
  }
  style = $trim(style);
  if (style.length == 0) {
    throw toJs(new IllegalArgumentException_0('Style names cannot be empty'));
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw toJs(new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.'));
  }
  style = $trim(style);
  if (style.length == 0) {
    throw toJs(new IllegalArgumentException_0('Style names cannot be empty'));
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = (elem.className || '').split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

defineClass(7, 1, {8:1, 7:1});
_.getStyleElement = function getStyleElement(){
  return $clinit_DOM() , this.element;
}
;
_.removeStyleName = function removeStyleName(style){
  setStyleName(this.getStyleElement(), style, false);
}
;
_.resolvePotentialElement = function resolvePotentialElement(){
  throw toJs(new UnsupportedOperationException);
}
;
_.setHeight_0 = function setHeight(height){
  ($clinit_DOM() , this.element).style['height'] = height;
}
;
_.setVisible = function setVisible_0(visible){
  $setVisible(this, visible);
}
;
_.setWidth_0 = function setWidth(width_0){
  ($clinit_DOM() , this.element).style['width'] = width_0;
}
;
_.toString_0 = function toString_15(){
  if (!this.element) {
    return '(null handle)';
  }
  return $toString_0(($clinit_DOM() , this.element));
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 7);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.sinkEvents(typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler_0(this$static, handler, type_0){
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $delegateEvent(target, event_0){
  !!target.handlerManager && $fireEvent(target.handlerManager, event_0);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents(bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static, true);
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = $eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.onUnload();
    fire_0(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      this$static.element.__listener = null;
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_1(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 23)) {
    castTo(this$static.parent_0, 23).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw toJs(new IllegalStateException_0("This widget's parent does not implement HasWidgets"));
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && ($clinit_DOM() , this$static.element.__listener = null , undefined);
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && ($clinit_DOM() , setEventListener(this$static.element, this$static));
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw toJs(new IllegalStateException_0('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

defineClass(6, 7, $intern_37);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent = function fireEvent_1(event_0){
  $fireEvent_0(this, event_0);
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.sinkEvents = function sinkEvents_0(eventBitsToAdd){
  this.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this.element, eventBitsToAdd | (this.element.__eventBits || 0))):(this.eventsToSink |= eventBitsToAdd);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 6);
function $adopt(this$static, child){
  $setParent(child, this$static);
}

function $clear(this$static){
  var it;
  it = new SimplePanel$1(this$static);
  while (it.hasElement) {
    $next_1(it);
    !!it.returned && it.this$01.remove(it.returned);
  }
}

defineClass(633, 6, $intern_38);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 633);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_11(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static){
  return $remove_7(this$static, $get_3(this$static.children));
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $remove_9(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(88, 633, $intern_38);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove_0(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 88);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(293, 88, $intern_38);
_.remove = function remove_1(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 293);
function $clinit_FocusWidget(){
  $clinit_FocusWidget = emptyMethod;
  $clinit_FocusImpl();
}

function $isEnabled(this$static){
  return !($clinit_DOM() , this$static.element)['disabled'];
}

function $onAttach_0(this$static){
  var tabIndex;
  $onAttach(this$static);
  tabIndex = this$static.getTabIndex();
  -1 == tabIndex && this$static.setTabIndex(0);
}

function $setEnabled(this$static, enabled){
  ($clinit_DOM() , this$static.element)['disabled'] = !enabled;
}

function $setFocus(this$static){
  ($clinit_DOM() , this$static.element).focus();
}

function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(133, 6, $intern_37);
_.getTabIndex = function getTabIndex(){
  return ($clinit_DOM() , this.element).tabIndex;
}
;
_.onAttach = function onAttach_0(){
  $onAttach_0(this);
}
;
_.setTabIndex = function setTabIndex(index_0){
  $setTabIndex(($clinit_DOM() , this.element), index_0);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 133);
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ($clinit_LocaleInfo() , ALIGN_LEFT);
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START, ALIGN_RIGHT;
function $setHTML(this$static, html){
  $setTextOrHtml(this$static.directionalTextHelper, html, true);
}

function Anchor_0(){
  $clinit_FocusWidget();
  $setElement(this, $doc.createElement('a'));
  ($clinit_DOM() , this.element).className = 'gwt-Anchor' , undefined;
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

function Anchor_1(text_0){
  $clinit_FocusWidget();
  Anchor_0.call(this);
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
  ($clinit_DOM() , this.element).href = 'javascript:;';
}

defineClass(30, 133, {11:1, 9:1, 10:1, 30:1, 8:1, 12:1, 7:1, 6:1}, Anchor_0, Anchor_1);
_.getTabIndex = function getTabIndex_0(){
  return ($clinit_DOM() , this.element).tabIndex;
}
;
_.setTabIndex = function setTabIndex_0(index_0){
  $setTabIndex(($clinit_DOM() , this.element), index_0);
}
;
var Lcom_google_gwt_user_client_ui_Anchor_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Anchor', 30);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0();) {
    w = castTo(w$iterator.next_1(), 6);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 14)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put_0(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(242, 172, $intern_12, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 242);
function AttachDetachException$1(){
}

defineClass(243, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_6(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 243);
function AttachDetachException$2(){
}

defineClass(244, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_7(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 244);
function $setHTML_0(this$static, html){
  $setInnerHTML(($clinit_DOM() , this$static.element), html);
}

function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(145, 133, $intern_37);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 145);
function Button(){
  var e;
  $clinit_FocusWidget();
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.type = 'button' , e));
  ($clinit_DOM() , this.element).className = 'gwt-Button';
}

function Button_0(html){
  $clinit_FocusWidget();
  Button.call(this);
  $setInnerHTML(($clinit_DOM() , this.element), html);
}

defineClass(83, 145, $intern_37, Button, Button_0);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 83);
function $setCellHorizontalAlignment(td, align_0){
  ($clinit_DOM() , td)['align'] = align_0.textAlignString;
}

function $setCellVerticalAlignment(td, align_0){
  $setCellVerticalAlignment_0(($clinit_DOM() , td), align_0);
}

function $setCellVerticalAlignment_0(td, align_0){
  td.style['verticalAlign'] = align_0.verticalAlignString;
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = ($clinit_DOM() , $doc.createElement('table'));
  this.body_0 = $doc.createElement('tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(171, 88, $intern_38);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 171);
function $addAll(this$static, c){
  var changed, e, e$iterator, old;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    changed = changed | (old = $put_0(this$static.map_0, e, this$static) , old == null);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_2();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

function $retainAll(this$static, c){
  var changed, entry, iter, o, outerIter;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); iter.val$outerIter2.hasNext;) {
    o = (entry = $next_4(iter.val$outerIter2) , entry.getKey());
    if (!$containsKey(c.map_0, o)) {
      $remove_12(iter.val$outerIter2);
      changed = true;
    }
  }
  return changed;
}

function $toArray(this$static, a){
  var entry, i, it, outerIter, size_0;
  size_0 = $size(this$static.map_0);
  a.length < size_0 && (a = stampJavaTypeInfo_0(new Array(size_0), a));
  it = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this$static.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter));
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, (entry = $next_4(it.val$outerIter2) , entry.getKey()));
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

function $toString_2(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_13(joiner, e === this$static?'(this Collection)':e == null?'null':toString_10(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

defineClass(639, 1, {25:1});
_.add_0 = function add_3(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_0 = function remove_2(o){
  return $advanceToFind(this, o, true);
}
;
_.toString_0 = function toString_16(){
  return $toString_2(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 639);
function $indexOf(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_25(toFind, this$static.get_0(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(642, 639, $intern_39);
_.add_1 = function add_4(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_5(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_7(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 24)) {
    return false;
  }
  other = castTo(o, 24);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_9(){
  return hashCode_24(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_1 = function remove_3(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 642);
function $add_1(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
}

function $add_2(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = $toArray(c, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, $size(c.map_0), 5, 1));
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $get_1(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_25(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_2(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0);
  return previous;
}

function $remove_3(this$static, o){
  var i;
  i = $indexOf_0(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i);
  return true;
}

function $set_1(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $toArray_0(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_0(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

defineClass(18, 642, $intern_40, ArrayList);
_.add_1 = function add_6(index_0, o){
  $add_1(this, index_0, o);
}
;
_.add_0 = function add_7(o){
  return $add_2(this, o);
}
;
_.contains = function contains_0(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_0 = function get_0(index_0){
  return $get_1(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_2(){
  return new ArrayList$1(this);
}
;
_.remove_1 = function remove_4(index_0){
  return $remove_2(this, index_0);
}
;
_.remove_0 = function remove_5(o){
  return $remove_3(this, o);
}
;
_.size_1 = function size_1(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 18);
function ChangeListenerCollection(){
  ArrayList.call(this);
}

defineClass(382, 18, $intern_40, ChangeListenerCollection);
var Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ChangeListenerCollection', 382);
function deserialize_24(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_22(streamReader){
  return new ChangeListenerCollection;
}

function serialize_20(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function $setValue(this$static, value_0){
  var oldValue;
  value_0 == null && (value_0 = ($clinit_Boolean() , FALSE_1));
  oldValue = this$static.attached?($clinit_Boolean() , this$static.inputElem.checked?true:false):($clinit_Boolean() , this$static.inputElem.defaultChecked?true:false);
  $setChecked(this$static.inputElem, (checkCriticalNotNull(value_0) , value_0));
  $setDefaultChecked(this$static.inputElem, (checkCriticalNotNull(value_0) , value_0));
  checkCriticalNotNull(value_0);
  if (value_0 == oldValue) {
    return;
  }
}

function CheckBox(){
  var e;
  $clinit_FocusWidget();
  CheckBox_0.call(this, ($clinit_DOM() , e = $doc.createElement('INPUT') , e.type = 'checkbox' , e.value = 'on' , e));
  this.element.className = 'gwt-CheckBox';
}

function CheckBox_0(elem){
  var uid;
  ButtonBase.call(this, ($clinit_DOM() , $doc.createElement('span')));
  this.inputElem = elem;
  this.labelElem = $doc.createElement('label');
  $appendChild(this.element, this.inputElem);
  $appendChild(this.element, this.labelElem);
  uid = $createUniqueId($doc);
  this.inputElem['id'] = uid;
  $setHtmlFor(this.labelElem, uid);
  new DirectionalTextHelper(this.labelElem);
  !!this.inputElem && (this.inputElem.tabIndex = 0 , undefined);
}

defineClass(187, 145, $intern_37, CheckBox);
_.getTabIndex = function getTabIndex_1(){
  return this.inputElem.tabIndex;
}
;
_.onLoad = function onLoad_0(){
  $clinit_DOM();
  this.inputElem.__listener = this;
}
;
_.onUnload = function onUnload_0(){
  $clinit_DOM();
  this.inputElem.__listener = null;
  $setValue(this, this.attached?($clinit_Boolean() , this.inputElem.checked?true:false):($clinit_Boolean() , this.inputElem.defaultChecked?true:false));
}
;
_.setTabIndex = function setTabIndex_1(index_0){
  !!this.inputElem && $setTabIndex(this.inputElem, index_0);
}
;
_.sinkEvents = function sinkEvents_1(eventBitsToAdd){
  this.eventsToSink == -1?sinkEvents(this.inputElem, eventBitsToAdd | getEventsSunk(this.inputElem)):this.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this.element, eventBitsToAdd | (this.element.__eventBits || 0))):(this.eventsToSink |= eventBitsToAdd);
}
;
var Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CheckBox', 187);
function ClickListenerCollection(){
  ArrayList.call(this);
}

defineClass(383, 18, $intern_40, ClickListenerCollection);
var Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ClickListenerCollection', 383);
function deserialize_25(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_23(streamReader){
  return new ClickListenerCollection;
}

function serialize_21(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function $checkInit(this$static){
  if (!this$static.widget) {
    throw toJs(new IllegalStateException_0('initWidget() is not called yet'));
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw toJs(new IllegalStateException_0('Composite.initWidget() may only be called once.'));
  }
  if (!widget) {
    throw toJs(new NullPointerException_0('widget cannot be null'));
  }
  instanceOf(widget, 49) && castTo(widget, 49);
  $removeFromParent(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function $isAttached(this$static){
  if (this$static.widget) {
    return this$static.widget.isAttached();
  }
  return false;
}

defineClass(636, 6, $intern_41);
_.isAttached = function isAttached_0(){
  return $isAttached(this);
}
;
_.onAttach = function onAttach_1(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    this.widget.sinkEvents(this.eventsToSink);
    this.eventsToSink = -1;
  }
  this.widget.onAttach();
  $clinit_DOM();
  this.element.__listener = this;
  this.onLoad();
  fire_0(this, true);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  this.widget.onBrowserEvent(event_0);
}
;
_.onDetach = function onDetach_0(){
  try {
    fire_0(this, false);
  }
   finally {
    this.widget.onDetach();
  }
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, this.widget.resolvePotentialElement());
  return $clinit_DOM() , this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 636);
function $cleanupCaptureState(this$static){
  if (this$static.isCapturing || this$static.isFocusing) {
    releaseCapture(($clinit_DOM() , this$static.element));
    this$static.isCapturing = false;
    this$static.isFocusing = false;
    !this$static.curFace && $setCurrentFace(this$static, this$static.up);
    (1 & this$static.curFace.val$faceID5) > 0 && $toggleDown(this$static);
  }
}

function $getFaceFromID(this$static, id_0){
  switch (id_0) {
    case 1:
      return !this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down;
    case 0:
      return this$static.up;
    case 3:
      return !this$static.downHovering && $setDownHoveringFace(this$static, new CustomButton$2(this$static, (!this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down), 'down-hovering', 3)) , this$static.downHovering;
    case 2:
      return !this$static.upHovering && $setUpHoveringFace(this$static, new CustomButton$2(this$static, this$static.up, 'up-hovering', 2)) , this$static.upHovering;
    case 4:
      return !this$static.upDisabled && $setUpDisabledFace(this$static, new CustomButton$2(this$static, this$static.up, 'up-disabled', 4)) , this$static.upDisabled;
    case 5:
      return !this$static.downDisabled && $setDownDisabledFace(this$static, new CustomButton$2(this$static, (!this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down), 'down-disabled', 5)) , this$static.downDisabled;
    default:throw toJs(new IllegalStateException_0(id_0 + ' is not a known face id.'));
  }
}

function $setCurrentFace(this$static, newFace){
  var pressed;
  if (this$static.curFace != newFace) {
    !!this$static.curFace && $removeStyleDependentName(this$static, this$static.curFace.val$name4);
    this$static.curFace = newFace;
    $setCurrentFaceElement(this$static, $getFace(newFace));
    $addStyleDependentName(this$static, this$static.curFace.val$name4);
    !($clinit_DOM() , this$static.element)['disabled'] && (pressed = (newFace.val$faceID5 & 1) == 1 , $clinit_Roles() , $setAriaPressedState(this$static.element, ($clinit_PressedValue() , pressed?TRUE:FALSE)));
  }
}

function $setCurrentFaceElement(this$static, newFaceElement){
  if (this$static.curFaceElement != newFaceElement) {
    !!this$static.curFaceElement && $removeChild(($clinit_DOM() , this$static.element), this$static.curFaceElement);
    this$static.curFaceElement = newFaceElement;
    $clinit_DOM();
    $appendChild(this$static.element, resolve(this$static.curFaceElement));
  }
}

function $setDownDisabledFace(this$static, downDisabled){
  this$static.downDisabled = downDisabled;
}

function $setDownFace(this$static, down){
  this$static.down = down;
}

function $setDownHoveringFace(this$static, downHovering){
  this$static.downHovering = downHovering;
}

function $setUpDisabledFace(this$static, upDisabled){
  this$static.upDisabled = upDisabled;
}

function $setUpFace(this$static, up){
  this$static.up = up;
}

function $setUpHoveringFace(this$static, upHovering){
  this$static.upHovering = upHovering;
}

function $toggleDown(this$static){
  var newFace, newFaceID;
  newFaceID = (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID5 ^ 1);
  newFace = $getFaceFromID(this$static, newFaceID);
  $setCurrentFace(this$static, newFace);
}

function $toggleHover(this$static){
  var newFace, newFaceID;
  newFaceID = (!this$static.curFace && $setCurrentFace(this$static, this$static.up) , this$static.curFace.val$faceID5 ^ 2);
  newFaceID &= -5;
  newFace = $getFaceFromID(this$static, newFaceID);
  $setCurrentFace(this$static, newFace);
}

defineClass(465, 145, $intern_37);
_.getTabIndex = function getTabIndex_2(){
  return ($clinit_FocusPanel() , $clinit_DOM() , this.element).tabIndex;
}
;
_.onAttach = function onAttach_2(){
  !this.curFace && $setCurrentFace(this, this.up);
  $onAttach_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var keyCode, to, type_0;
  if (($clinit_DOM() , this.element)['disabled']) {
    return;
  }
  type_0 = $eventGetTypeInt(event_0.type);
  switch (type_0) {
    case 1:
      if (!this.allowClick) {
        event_0.stopPropagation();
        return;
      }

      break;
    case 4:
      if ($eventGetButton(event_0) == 1) {
        ($clinit_FocusPanel() , this.element).focus();
        !this.curFace && $setCurrentFace(this, this.up);
        (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this);
        setCapture(this.element);
        this.isCapturing = true;
        event_0.preventDefault();
      }

      break;
    case 8:
      if (this.isCapturing) {
        this.isCapturing = false;
        releaseCapture(this.element);
        !this.curFace && $setCurrentFace(this, this.up);
        (2 & this.curFace.val$faceID5) > 0 && $eventGetButton(event_0) == 1 && $onClick(this);
      }

      break;
    case 64:
      this.isCapturing && (event_0.preventDefault() , undefined);
      break;
    case 32:
      to = $eventGetToElement(event_0);
      if ($isOrHasChild(this.element, event_0.target) && (!to || !$isOrHasChild(this.element, to))) {
        this.isCapturing && (!this.curFace && $setCurrentFace(this, this.up) , (1 & this.curFace.val$faceID5) > 0 && $toggleDown(this));
        !this.curFace && $setCurrentFace(this, this.up);
        (2 & this.curFace.val$faceID5) > 0 && $toggleHover(this);
      }

      break;
    case 16:
      if ($isOrHasChild(this.element, event_0.target)) {
        !this.curFace && $setCurrentFace(this, this.up);
        (2 & this.curFace.val$faceID5) <= 0 && $toggleHover(this);
        this.isCapturing && (!this.curFace && $setCurrentFace(this, this.up) , (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this));
      }

      break;
    case 4096:
      if (this.isFocusing) {
        this.isFocusing = false;
        !this.curFace && $setCurrentFace(this, this.up);
        (1 & this.curFace.val$faceID5) > 0 && $toggleDown(this);
      }

      break;
    case 8192:
      if (this.isCapturing) {
        this.isCapturing = false;
        !this.curFace && $setCurrentFace(this, this.up);
        (1 & this.curFace.val$faceID5) > 0 && $toggleDown(this);
      }

  }
  $onBrowserEvent(this, event_0);
  if (($eventGetTypeInt(event_0.type) & 896) != 0) {
    keyCode = (event_0.keyCode | 0) & $intern_15;
    switch (type_0) {
      case 128:
        if (keyCode == 32) {
          this.isFocusing = true;
          !this.curFace && $setCurrentFace(this, this.up);
          (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this);
        }

        break;
      case 512:
        if (this.isFocusing && keyCode == 32) {
          this.isFocusing = false;
          $onClick(this);
        }

        break;
      case 256:
        if (keyCode == 10 || keyCode == 13) {
          !this.curFace && $setCurrentFace(this, this.up);
          (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this);
          $onClick(this);
        }

    }
  }
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
  $cleanupCaptureState(this);
  !this.curFace && $setCurrentFace(this, this.up);
  (2 & this.curFace.val$faceID5) > 0 && $toggleHover(this);
}
;
_.setTabIndex = function setTabIndex_2(index_0){
  $setTabIndex(($clinit_FocusPanel() , $clinit_DOM() , this.element), index_0);
}
;
_.allowClick = false;
_.isCapturing = false;
_.isFocusing = false;
var Lcom_google_gwt_user_client_ui_CustomButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton', 465);
function $getFace(this$static){
  if (!this$static.face_0) {
    if (!this$static.delegateTo) {
      this$static.face_0 = ($clinit_DOM() , $doc.createElement('div'));
      return this$static.face_0;
    }
     else {
      return $getFace(this$static.delegateTo);
    }
  }
   else {
    return this$static.face_0;
  }
}

function $setHTML_1(this$static, html){
  this$static.face_0 = ($clinit_DOM() , $doc.createElement('div'));
  setStyleName(this$static.face_0, 'html-face', true);
  $setInnerHTML(this$static.face_0, html);
  !!this$static.this$01.curFace && $getFace(this$static.this$01.curFace) == $getFace(this$static) && $setCurrentFaceElement(this$static.this$01, this$static.face_0);
}

defineClass(467, 1, {});
_.toString_0 = function toString_17(){
  return this.val$name4;
}
;
var Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton/Face', 467);
function CustomButton$2(this$0, $anonymous0, val$name, val$faceID){
  this.val$name4 = val$name;
  this.val$faceID5 = val$faceID;
  this.this$01 = this$0;
  this.delegateTo = $anonymous0;
}

defineClass(77, 467, {}, CustomButton$2);
_.val$faceID5 = 0;
var Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton/2', 77);
function $add_3(this$static, w){
  if (this$static.getWidget()) {
    throw toJs(new IllegalStateException_0('SimplePanel can only contain one child widget'));
  }
  this$static.setWidget(w);
}

function $remove_4(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), ($clinit_DOM() , w.element));
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && this$static.remove(this$static.widget);
  this$static.widget = w;
  if (w) {
    $clinit_DOM();
    $appendChild(this$static.getContainerElement(), resolve($getElement(this$static.widget)));
    $setParent(w, this$static);
  }
}

function SimplePanel(){
  SimplePanel_0.call(this, ($clinit_DOM() , $doc.createElement('div')));
}

function SimplePanel_0(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(74, 633, $intern_38, SimplePanel);
_.getContainerElement = function getContainerElement(){
  return $clinit_DOM() , this.element;
}
;
_.getWidget = function getWidget(){
  return this.widget;
}
;
_.iterator = function iterator_3(){
  return new SimplePanel$1(this);
}
;
_.remove = function remove_6(w){
  return $remove_4(this, w);
}
;
_.setWidget = function setWidget(w){
  $setWidget(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 74);
function $clinit_PopupPanel(){
  $clinit_PopupPanel = emptyMethod;
  $clinit_PopupImplMozilla();
}

function $addAutoHidePartner(this$static, partner){
  !this$static.autoHidePartners && (this$static.autoHidePartners = new ArrayList);
  $add_2(this$static.autoHidePartners, partner);
}

function $center(this$static){
  var elem, initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    ($clinit_DOM() , this$static.element).style['visibility'] = 'hidden';
    this$static.isAnimationEnabled = false;
    !this$static.resizeHandlerRegistration && (this$static.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(this$static)));
    $show(this$static);
  }
  elem = ($clinit_DOM() , this$static.element);
  elem.style['left'] = ($clinit_Style$Unit() , '0.0px');
  elem.style['top'] = '0.0px';
  left = $getClientWidth($doc) - $getPropertyInt(this$static.element, 'offsetWidth') >> 1;
  top_0 = $getClientHeight($doc) - $getPropertyInt(this$static.element, 'offsetHeight') >> 1;
  $setPopupPosition(this$static, $wnd.Math.max($getScrollLeft_0($doc) + left, 0), $wnd.Math.max($getScrollTop($doc) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      $setClip(this$static.element, 'rect(0px, 0px, 0px, 0px)');
      this$static.element.style['visibility'] = 'visible';
      $run(this$static.resizeAnimation, 200, now_1(), null);
    }
     else {
      this$static.element.style['visibility'] = 'visible';
    }
  }
}

function $eventTargetsPartner(this$static, event_0){
  var elem, elem$iterator, target;
  if (!this$static.autoHidePartners) {
    return false;
  }
  target = event_0.target;
  if (is_0(target)) {
    for (elem$iterator = new ArrayList$1(this$static.autoHidePartners); elem$iterator.i < elem$iterator.this$01.array.length;) {
      elem = castToJso($next_6(elem$iterator));
      if ($isOrHasChild(elem, target)) {
        return true;
      }
    }
  }
  return false;
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = event_0.target;
  if (is_0(target)) {
    return $isOrHasChild(($clinit_DOM() , this$static.element), target);
  }
  return false;
}

function $getOffsetHeight_0(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetHeight');
}

function $getOffsetWidth_0(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetWidth');
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_1(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight_0(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth_0(this$static.desiredWidth);
  }
}

function $position(this$static, relativeObject, offsetWidth, offsetHeight){
  var distanceFromWindowLeft, distanceFromWindowTop, distanceToWindowBottom, distanceToWindowRight, left, offsetWidthDiff, textBoxOffsetWidth, top_0, windowBottom, windowLeft, windowRight, windowTop;
  textBoxOffsetWidth = $getPropertyInt(($clinit_DOM() , relativeObject.element), 'offsetWidth');
  offsetWidthDiff = offsetWidth - textBoxOffsetWidth;
  $clinit_LocaleInfo();
  left = $getAbsoluteLeft(relativeObject.element);
  if (offsetWidthDiff > 0) {
    windowRight = $getClientWidth($doc) + $getScrollLeft_0($doc);
    windowLeft = $getScrollLeft_0($doc);
    distanceToWindowRight = windowRight - left;
    distanceFromWindowLeft = left - windowLeft;
    distanceToWindowRight < offsetWidth && distanceFromWindowLeft >= offsetWidthDiff && (left -= offsetWidthDiff);
  }
  top_0 = $getAbsoluteTop(relativeObject.element);
  windowTop = $getScrollTop($doc);
  windowBottom = $getScrollTop($doc) + $getClientHeight($doc);
  distanceFromWindowTop = top_0 - windowTop;
  distanceToWindowBottom = windowBottom - (top_0 + $getPropertyInt(relativeObject.element, 'offsetHeight'));
  distanceToWindowBottom < offsetHeight && distanceFromWindowTop >= offsetHeight?(top_0 -= offsetHeight):(top_0 += $getPropertyInt(relativeObject.element, 'offsetHeight'));
  $setPopupPosition(this$static, left, top_0);
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent(event_0);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent) || $eventTargetsPartner(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type_0 = ($clinit_DOM() , $eventGetTypeInt(nativeEvent.type));
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        return;
      }

    case 4:
    case $intern_32:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        this$static.hide(true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case $intern_23:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.target;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $removeAutoHidePartner(this$static, partner){
  !!this$static.autoHidePartners && $remove_3(this$static.autoHidePartners, partner);
}

function $setAnimationType(this$static, type_0){
  this$static.animType = type_0?type_0:($clinit_PopupPanel$AnimationType() , CENTER_1);
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  elem = ($clinit_DOM() , this$static.element);
  elem.style['left'] = left + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setPopupPositionAndShow(this$static, callback){
  ($clinit_DOM() , this$static.element).style['visibility'] = 'hidden';
  this$static.show();
  $setPosition_0(callback, $getPropertyInt(this$static.element, 'offsetWidth'), $getPropertyInt(this$static.element, 'offsetHeight'));
  this$static.element.style['visibility'] = 'visible';
}

function $setWidget_0(this$static, w){
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $showRelativeTo(this$static, target){
  $setPopupPositionAndShow(this$static, new PopupPanel$2(this$static, target));
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4(this$static));
  }
}

function PopupPanel(autoHide){
  $clinit_PopupPanel();
  SimplePanel.call(this);
  this.glassResizer = new PopupPanel$1;
  this.animType = ($clinit_PopupPanel$AnimationType() , CENTER_1);
  this.isAnimationEnabled = false;
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation(this);
  this.topPosition = -1;
  $appendChild(($clinit_DOM() , this.element), $createElement_0());
  $setPopupPosition(this, 0, 0);
  $getStyleElement($getFirstChildElement(this.element)).className = 'gwt-PopupPanel';
  $getContainerElement_0($getFirstChildElement(this.element)).className = 'popupContent';
  this.autoHide = autoHide;
  this.autoHideOnHistoryEvents = autoHide;
}

defineClass(107, 74, $intern_38, PopupPanel);
_.getContainerElement = function getContainerElement_0(){
  return $getContainerElement_0(($clinit_DOM() , $getFirstChildElement(this.element)));
}
;
_.getStyleElement = function getStyleElement_0(){
  return $getStyleElement(($clinit_DOM() , $getFirstChildElement(this.element)));
}
;
_.hide = function hide(autoClosed){
  $hide(this);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  event_0.isFirstHandler && false && (event_0.isCanceled = true);
}
;
_.onUnload = function onUnload_1(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight_0 = function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}
;
_.setVisible = function setVisible_1(visible){
  ($clinit_DOM() , this.element).style['visibility'] = visible?'visible':'hidden';
}
;
_.setWidget = function setWidget_0(w){
  $setWidget_0(this, w);
}
;
_.setWidth_0 = function setWidth_0(width_0){
  this.desiredWidth = width_0;
  $maybeUpdateSize(this);
  width_0.length == 0 && (this.desiredWidth = null);
}
;
_.show = function show(){
  $show(this);
}
;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = 0;
_.modal = false;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = 0;
var Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel', 107);
function $setWidget_1(this$static, w){
  $setWidget(this$static.decPanel, w);
  $maybeUpdateSize(this$static);
}

function DecoratedPopupPanel(autoHide, modal, prefix){
  $clinit_PopupPanel();
  var rowStyles;
  PopupPanel.call(this, autoHide);
  this.modal = modal;
  rowStyles = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, [prefix + 'Top', prefix + 'Middle', prefix + 'Bottom']);
  this.decPanel = new DecoratorPanel(rowStyles);
  $setStyleName(this.decPanel, '');
  setStylePrimaryName($getStyleElement(($clinit_DOM() , $getFirstChildElement(this.element))), 'gwt-DecoratedPopupPanel');
  $setWidget_0(this, this.decPanel);
  setStyleName($getContainerElement_0($getFirstChildElement(this.element)), 'popupContent', false);
  setStyleName($getContainerElement(this.decPanel), prefix + 'Content', true);
}

defineClass(209, 107, $intern_38, DecoratedPopupPanel);
_.doAttachChildren = function doAttachChildren_1(){
  $onAttach(this.decPanel);
}
;
_.doDetachChildren = function doDetachChildren_1(){
  $onDetach(this.decPanel);
}
;
_.getWidget = function getWidget_0(){
  return this.decPanel.widget;
}
;
_.iterator = function iterator_4(){
  return new SimplePanel$1(this.decPanel);
}
;
_.remove = function remove_7(w){
  return $remove_4(this.decPanel, w);
}
;
_.setWidget = function setWidget_1(w){
  $setWidget_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratedPopupPanel', 209);
function $getCellElement(this$static){
  var td, tr;
  tr = ($clinit_DOM() , $getChild(this$static.tbody, 0));
  td = (null , $getChild(tr, 1));
  return null , $getFirstChildElement(td);
}

function $getContainerElement(this$static){
  return $clinit_DOM() , this$static.containerElem;
}

function DecoratorPanel(rowStyles){
  var i, row, table, trElem;
  SimplePanel_0.call(this, ($clinit_DOM() , $doc.createElement('table')));
  table = this.element;
  this.tbody = $doc.createElement('tbody');
  $appendChild(table, resolve(this.tbody));
  table['cellSpacing'] = 0;
  table['cellPadding'] = 0;
  for (i = 0; i < rowStyles.length; i++) {
    row = (trElem = $doc.createElement('tr') , trElem.className = rowStyles[i] || '' , undefined , $clinit_LocaleInfo() , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Left'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Center'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Right'))) , trElem);
    $appendChild(this.tbody, resolve(row));
    i == 1 && (this.containerElem = $getFirstChildElement($getChild(row, 1)));
  }
  this.element.className = 'gwt-DecoratorPanel';
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = ($clinit_DOM() , $doc.createElement('td'));
  inner = $doc.createElement('div');
  $appendChild(tdElem, resolve(inner));
  tdElem.className = styleName || '';
  inner.className = styleName + 'Inner' || '';
  return tdElem;
}

defineClass(584, 74, $intern_38, DecoratorPanel);
_.getContainerElement = function getContainerElement_1(){
  return $getContainerElement(this);
}
;
var Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratorPanel', 584);
function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, $getX(event_0), $getY(event_0));
}

function $continueDragging(this$static, event_0){
  $onMouseMove(this$static, $getX(event_0), $getY(event_0));
}

function $endDragging(this$static, event_0){
  $onMouseUp(($getX(event_0) , $getY(event_0) , this$static));
}

function $hide_0(this$static, autoClosed){
  if (this$static.resizeHandlerRegistration) {
    $removeHandler(this$static.resizeHandlerRegistration.real);
    this$static.resizeHandlerRegistration = null;
  }
  $hide(this$static);
}

function $isCaptionEvent(this$static, event_0){
  var target;
  target = event_0.target;
  if (is_0(target)) {
    return $isOrHasChild($getParentElement(($clinit_DOM() , $getCellElement(this$static.decPanel))), target);
  }
  return false;
}

function $onMouseDown(this$static, x_0, y_0){
  $clinit_DOM();
  if (!sCaptureElem) {
    this$static.dragging = true;
    setCapture(this$static.element);
    this$static.dragStartX = x_0;
    this$static.dragStartY = y_0;
  }
}

function $onMouseMove(this$static, x_0, y_0){
  var absX, absY;
  if (this$static.dragging) {
    absX = x_0 + $getAbsoluteLeft(($clinit_DOM() , this$static.element));
    absY = y_0 + $getAbsoluteTop(this$static.element);
    if (absX < this$static.clientLeft || absX >= this$static.windowWidth || absY < this$static.clientTop) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(($clinit_DOM() , this$static.element));
}

function DialogBox(captionWidget){
  var mouseHandler, td;
  DecoratedPopupPanel.call(this, false, true, 'dialog');
  $removeFromParent(captionWidget);
  this.caption = captionWidget;
  td = ($clinit_DOM() , $getCellElement(this.decPanel));
  $appendChild(td, resolve($getElement(this.caption)));
  $adopt(this, this.caption);
  $getStyleElement($getFirstChildElement(this.element)).className = 'gwt-DialogBox';
  this.windowWidth = $getClientWidth($doc);
  this.clientLeft = $getBodyOffsetLeft($doc);
  this.clientTop = $getBodyOffsetTop($doc);
  mouseHandler = new DialogBox$MouseHandler(this);
  $addDomHandler(this, mouseHandler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_5));
  $addDomHandler(this, mouseHandler, ($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_9));
  $addDomHandler(this, mouseHandler, ($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_6));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_8));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_7));
}

defineClass(127, 209, $intern_38);
_.doAttachChildren = function doAttachChildren_2(){
  try {
    $onAttach(this.decPanel);
  }
   finally {
    $onAttach(this.caption);
  }
}
;
_.doDetachChildren = function doDetachChildren_2(){
  try {
    $onDetach(this.decPanel);
  }
   finally {
    $onDetach(this.caption);
  }
}
;
_.hide = function hide_0(autoClosed){
  $hide_0(this, autoClosed);
}
;
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_1(event_0){
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled && $getTypeInt(event_0.nativeEvent) == 4 && $isCaptionEvent(this, nativeEvent) && (nativeEvent.preventDefault() , undefined);
  event_0.isFirstHandler && false && (event_0.isCanceled = true);
}
;
_.show = function show_0(){
  !this.resizeHandlerRegistration && (this.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(this)));
  $show(this);
}
;
_.clientLeft = 0;
_.clientTop = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.windowWidth = 0;
var Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox', 127);
function DialogBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(214, 1, $intern_28, DialogBox$1);
_.onResize = function onResize_1(event_0){
  this.this$01.windowWidth = event_0.width_0;
}
;
var Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/1', 214);
function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(114, 6, $intern_37);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 114);
function $setText(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
}

function Label(){
  LabelBase.call(this, $doc.createElement('div'));
  ($clinit_DOM() , this.element).className = 'gwt-Label';
}

function Label_0(element){
  LabelBase.call(this, ($equalsIgnoreCase('span', element.tagName) , element));
}

function Label_1(text_0){
  Label.call(this);
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
}

defineClass(44, 114, $intern_42, Label, Label_1);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 44);
function HTML(){
  Label_0.call(this, $doc.createElement('div'));
  ($clinit_DOM() , this.element).className = 'gwt-HTML';
}

function HTML_0(html){
  HTML.call(this);
  $setTextOrHtml(this.directionalTextHelper, html, true);
}

defineClass(37, 44, $intern_42, HTML, HTML_0);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 37);
function DialogBox$CaptionImpl(){
  HTML.call(this);
  ($clinit_DOM() , this.element).className = 'Caption';
}

defineClass(599, 37, $intern_42, DialogBox$CaptionImpl);
var Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/CaptionImpl', 599);
function DialogBox$MouseHandler(this$0){
  this.this$01 = this$0;
}

defineClass(600, 1, {669:1, 673:1, 671:1, 672:1, 670:1, 15:1}, DialogBox$MouseHandler);
var Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/MouseHandler', 600);
function $getTextOrHtml(this$static){
  var elem;
  elem = this$static.isSpanWrapped?$getFirstChildElement(this$static.element):this$static.element;
  return elem.textContent;
}

function $setTextOrHtml(this$static, content_0, isHtml){
  this$static.isSpanWrapped = false;
  isHtml?$setInnerHTML(this$static.element, content_0):$setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.isSpanWrapped = false;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(121, 1, {}, DirectionalTextHelper);
_.isSpanWrapped = false;
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 121);
function $add_4(this$static, w){
  if (!this$static.contentWrapper.widget) {
    $setContent(this$static, w);
  }
   else {
    throw toJs(new IllegalStateException_0('A DisclosurePanel can only contain two Widgets.'));
  }
}

function $remove_5(this$static, w){
  if (w == this$static.contentWrapper.widget) {
    $setContent(this$static, null);
    return true;
  }
  return false;
}

function $setContent(this$static, content_0){
  var currentContent;
  currentContent = this$static.contentWrapper.widget;
  if (currentContent) {
    $setWidget(this$static.contentWrapper, null);
    currentContent.removeStyleName('content');
  }
  if (content_0) {
    $setWidget(this$static.contentWrapper, content_0);
    setStyleName(($clinit_DOM() , content_0.element), 'content', true);
    $setContentDisplay(this$static);
  }
}

function $setContentDisplay(this$static){
  if (this$static.isOpen) {
    $setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + 'closed', false);
    $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'open', true);
  }
   else {
    $setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + 'open', false);
    $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'closed', true);
  }
  if (this$static.contentWrapper.widget) {
    !contentAnimation && (contentAnimation = new DisclosurePanel$ContentAnimation);
    $setOpen_0(contentAnimation, this$static);
  }
}

function $setHeader_0(this$static, headerWidget){
  $setWidget(this$static.header, headerWidget);
}

function $setOpen(this$static, isOpen){
  if (this$static.isOpen != isOpen) {
    this$static.isOpen = isOpen;
    $setContentDisplay(this$static);
    this$static.isOpen?fire_2(this$static):fire_1(this$static);
  }
}

function DisclosurePanel(openImage, closedImage, headerText){
  this.mainPanel = new VerticalPanel;
  this.contentWrapper = new SimplePanel;
  this.header = new DisclosurePanel$ClickableHeader(this);
  $initWidget(this, this.mainPanel);
  $add_10(this.mainPanel, this.header);
  $add_10(this.mainPanel, this.contentWrapper);
  $getElement(this.contentWrapper).style['padding'] = '0px';
  $getElement(this.contentWrapper).style['overflow'] = 'hidden';
  ($clinit_DOM() , this.element).className = 'gwt-DisclosurePanel';
  $setContentDisplay(this);
  $setHeader_0(this, new DisclosurePanel$DefaultHeader(this, openImage, closedImage, headerText));
}

function DisclosurePanel_0(headerText){
  DisclosurePanel.call(this, ($clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelOpenInitializer() , disclosurePanelOpen), ($clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelClosedInitializer() , disclosurePanelClosed), headerText);
}

defineClass(156, 636, {11:1, 9:1, 10:1, 8:1, 23:1, 49:1, 12:1, 7:1, 6:1}, DisclosurePanel_0);
_.iterator = function iterator_5(){
  return createWidgetIterator(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_2, 6, 0, [this.contentWrapper.widget]));
}
;
_.remove = function remove_8(w){
  return $remove_5(this, w);
}
;
_.isOpen = false;
var contentAnimation;
var Lcom_google_gwt_user_client_ui_DisclosurePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DisclosurePanel', 156);
function DisclosurePanel$ClickableHeader(this$0){
  var elem;
  this.this$01 = this$0;
  SimplePanel_0.call(this, ($clinit_DOM() , $doc.createElement('a')));
  elem = this.element;
  elem['href'] = 'javascript:void(0);';
  elem.style['display'] = 'block';
  this.eventsToSink == -1?$sinkEvents(this.element, 1 | (this.element.__eventBits || 0)):(this.eventsToSink |= 1);
  this.element.className = 'header';
}

defineClass(580, 74, $intern_38, DisclosurePanel$ClickableHeader);
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 1:
      event_0.preventDefault();
      $setOpen(this.this$01, !this.this$01.isOpen);
  }
}
;
var Lcom_google_gwt_user_client_ui_DisclosurePanel$ClickableHeader_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DisclosurePanel/ClickableHeader', 580);
function $onUpdate(this$static, progress){
  var height, scrollHeight;
  scrollHeight = $getPropertyInt($getElement(this$static.curPanel.contentWrapper), 'scrollHeight');
  height = round_int(progress * scrollHeight);
  this$static.opening || (height = scrollHeight - height);
  height = $wnd.Math.max(height, 1);
  $getElement(this$static.curPanel.contentWrapper).style['height'] = height + 'px';
  $getElement(this$static.curPanel.contentWrapper).style['width'] = 'auto';
}

function $setOpen_0(this$static, panel){
  $cancel(this$static);
  $setVisible(panel.contentWrapper, panel.isOpen);
  panel.isOpen && panel.contentWrapper.widget.setVisible(true);
}

function DisclosurePanel$ContentAnimation(){
  Animation.call(this);
}

defineClass(581, 116, {}, DisclosurePanel$ContentAnimation);
_.onComplete = function onComplete_1(){
  this.opening || $setVisible(this.curPanel.contentWrapper, false);
  $getElement(this.curPanel.contentWrapper).style['height'] = 'auto';
  this.curPanel = null;
}
;
_.onStart = function onStart_0(){
  $onUpdate(this, (1 + $wnd.Math.cos($intern_1)) / 2);
  if (this.opening) {
    $setVisible(this.curPanel.contentWrapper, true);
    this.curPanel.contentWrapper.widget.setVisible(true);
  }
}
;
_.onUpdate = function onUpdate_0(progress){
  $onUpdate(this, progress);
}
;
_.opening = false;
var Lcom_google_gwt_user_client_ui_DisclosurePanel$ContentAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DisclosurePanel/ContentAnimation', 581);
function DisclosurePanel$DefaultHeader(this$0, openImage, closedImage, text_0){
  DisclosurePanel$DefaultHeader_0.call(this, this$0, new DisclosurePanel$DefaultHeader$2(closedImage, openImage), text_0);
}

function DisclosurePanel$DefaultHeader_0(this$0, imager, text_0){
  var imageTD, root, tbody, tr;
  this.this$01 = this$0;
  this.imager = imager;
  this.iconImage = new Image_1(imager.val$closedImage2);
  root = ($clinit_DOM() , $doc.createElement('table'));
  tbody = $doc.createElement('tbody');
  tr = $doc.createElement('tr');
  imageTD = $doc.createElement('td');
  this.labelTD = $doc.createElement('td');
  $setElement_0(this, root);
  $appendChild(root, resolve(tbody));
  $appendChild(tbody, resolve(tr));
  $appendChild(tr, resolve(imageTD));
  $appendChild(tr, resolve(this.labelTD));
  imageTD['align'] = 'center';
  imageTD['valign'] = 'middle';
  imageTD.style['width'] = $getWidth(this.iconImage) + 'px';
  $appendChild(imageTD, resolve($getElement(this.iconImage)));
  $setInnerText(this.labelTD, text_0);
  $addHandler_0(this$0, this, (!TYPE_17 && (TYPE_17 = new GwtEvent$Type) , TYPE_17));
  $addHandler_0(this$0, this, TYPE_15?TYPE_15:(TYPE_15 = new GwtEvent$Type));
  $updateImage(this.imager, this.this$01.isOpen, this.iconImage);
}

defineClass(210, 6, {216:1, 11:1, 617:1, 15:1, 9:1, 10:1, 8:1, 12:1, 7:1, 6:1}, DisclosurePanel$DefaultHeader);
_.onClose = function onClose(event_0){
  $updateImage(this.imager, this.this$01.isOpen, this.iconImage);
}
;
_.onOpen = function onOpen(event_0){
  $updateImage(this.imager, this.this$01.isOpen, this.iconImage);
}
;
var Lcom_google_gwt_user_client_ui_DisclosurePanel$DefaultHeader_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DisclosurePanel/DefaultHeader', 210);
function $updateImage(this$static, open_0, image){
  open_0?$setResource(image, this$static.val$openImage3):$setResource(image, this$static.val$closedImage2);
}

function DisclosurePanel$DefaultHeader$2(val$closedImage, val$openImage){
  this.val$closedImage2 = val$closedImage;
  this.val$openImage3 = val$openImage;
}

defineClass(582, 1, {}, DisclosurePanel$DefaultHeader$2);
var Lcom_google_gwt_user_client_ui_DisclosurePanel$DefaultHeader$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DisclosurePanel/DefaultHeader/2', 582);
var disclosurePanelClosed, disclosurePanelOpen;
function $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelClosedInitializer(){
  $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelClosedInitializer = emptyMethod;
  disclosurePanelClosed = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString(($clinit_LocaleInfo() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfklEQVR42mNgoDZITk4WosiAtLS0M6mpqb1Amp9cAy4B8X8gfpWenp5MiQEwfB6IbSgxAIaXArEcJQaA8Ddg+NQVFhZykmsADG8MDQ1lJseA5wQDFocBP0FRm5WVxUNOGGwEJi4VcmLhKtC5HuSkg8NA5+bjDCRCAG8UDUoAAIw8kVdwMG+3AAAAAElFTkSuQmCC'))), 16, 16);
}

function $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelOpenInitializer(){
  $clinit_DisclosurePanel_DefaultImages_default_InlineClientBundleGenerator$disclosurePanelOpenInitializer = emptyMethod;
  disclosurePanelOpen = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVR42mNgGD6gsLCQMy0t7TAQXyICn0lOThbCMCQ1NTUfKPmfEAaq68XqitDQUGaggqsEDHgFxPw4vZKenu6BzwCgfDLB8AAq3IjDgPNEBSgwgFSAin9iMcCG6FgBBRSa5qUkRWtWVhYPUNNzqOZvQCxHctoABRg02urITmCgAAUlMrINAKWNwZ2HAAhGkVd3k7/tAAAAAElFTkSuQmCC')), 16, 16);
}

function $doLayout(this$static){
  var bottom, child, child$iterator, data_0, layer, left, right, top_0;
  left = 0;
  top_0 = 0;
  right = 0;
  bottom = 0;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_2(child$iterator);
    data_0 = castTo(child.layoutData, 115);
    layer = data_0.layer;
    if (data_0.hidden) {
      layer.visible = false;
      continue;
    }
    switch ($getResolvedDirection(data_0.direction_0).ordinal) {
      case 0:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setTopHeight(layer, top_0, this$static.unit, data_0.size_0, this$static.unit);
        top_0 += data_0.size_0;
        break;
      case 2:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setBottomHeight(layer, bottom, this$static.unit, data_0.size_0, this$static.unit);
        bottom += data_0.size_0;
        break;
      case 3:
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
        $setLeftWidth(layer, left, this$static.unit, data_0.size_0, this$static.unit);
        left += data_0.size_0;
        break;
      case 1:
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
        $setRightWidth(layer, right, this$static.unit, data_0.size_0, this$static.unit);
        right += data_0.size_0;
        break;
      case 4:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
    }
    layer.visible = true;
  }
}

function $getResolvedDirection(direction){
  if (direction == ($clinit_DockLayoutPanel$Direction() , LINE_START)) {
    return $clinit_LocaleInfo() , WEST;
  }
   else if (direction == LINE_END) {
    return $clinit_LocaleInfo() , EAST;
  }
  return direction;
}

function $insert(this$static, widget, direction, size_0){
  var children, data_0, layer;
  $removeFromParent(widget);
  children = this$static.children;
  $insert_1(children, widget, children.size_0);
  direction == ($clinit_DockLayoutPanel$Direction() , CENTER_0) && (this$static.center = widget);
  layer = $attachChild(this$static.layout, ($clinit_DOM() , widget.element), widget);
  data_0 = new DockLayoutPanel$LayoutData(direction, size_0, layer);
  widget.layoutData = data_0;
  $setParent(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function DockLayoutPanel(unit){
  ComplexPanel.call(this);
  this.unit = unit;
  $setElement(this, $doc.createElement('div'));
  this.layout = new Layout(($clinit_DOM() , this.element));
  this.layoutCmd = new DockLayoutPanel$DockAnimateCommand(this, this.layout);
}

defineClass(223, 88, $intern_43, DockLayoutPanel);
_.onAttach = function onAttach_3(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_2(){
  $onDetach(this);
}
;
_.onResize_0 = function onResize_2(){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_2(child$iterator);
    instanceOf(child, 51) && castTo(child, 51).onResize_0();
  }
}
;
_.remove = function remove_9(w){
  var data_0, removed;
  removed = $remove_0(this, w);
  if (removed) {
    w == this.center && (this.center = null);
    data_0 = castTo(w.layoutData, 115);
    $removeChild_0(this.layout, data_0.layer);
  }
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel', 223);
function $clinit_DockLayoutPanel$Direction(){
  $clinit_DockLayoutPanel$Direction = emptyMethod;
  NORTH = new DockLayoutPanel$Direction('NORTH', 0);
  EAST = new DockLayoutPanel$Direction('EAST', 1);
  SOUTH = new DockLayoutPanel$Direction('SOUTH', 2);
  WEST = new DockLayoutPanel$Direction('WEST', 3);
  CENTER_0 = new DockLayoutPanel$Direction('CENTER', 4);
  LINE_START = new DockLayoutPanel$Direction('LINE_START', 5);
  LINE_END = new DockLayoutPanel$Direction('LINE_END', 6);
}

function DockLayoutPanel$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_DockLayoutPanel$Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_DockLayoutPanel$Direction_2_classLit, 1), $intern_2, 63, 0, [NORTH, EAST, SOUTH, WEST, CENTER_0, LINE_START, LINE_END]);
}

defineClass(63, 5, {63:1, 3:1, 4:1, 5:1}, DockLayoutPanel$Direction);
var CENTER_0, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$Direction_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'DockLayoutPanel/Direction', 63, Ljava_lang_Enum_2_classLit, values_11);
function $schedule_0(this$static){
  this$static.duration = 0;
  this$static.canceled = false;
  if (!this$static.scheduled) {
    this$static.scheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), this$static);
  }
}

function LayoutCommand(layout){
  this.layout = layout;
}

defineClass(173, 1, {}, LayoutCommand);
_.doBeforeLayout = function doBeforeLayout(){
}
;
_.execute_1 = function execute_8(){
  this.scheduled = false;
  if (this.canceled) {
    return;
  }
  this.doBeforeLayout();
  $layout(this.layout, this.duration, new LayoutCommand$1);
}
;
_.canceled = false;
_.duration = 0;
_.scheduled = false;
var Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand', 173);
function DockLayoutPanel$DockAnimateCommand(this$0, layout){
  this.this$01 = this$0;
  LayoutCommand.call(this, layout);
}

defineClass(245, 173, {}, DockLayoutPanel$DockAnimateCommand);
_.doBeforeLayout = function doBeforeLayout_0(){
  $doLayout(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$DockAnimateCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel/DockAnimateCommand', 245);
function DockLayoutPanel$LayoutData(direction, size_0, layer){
  this.direction_0 = direction;
  this.size_0 = size_0;
  this.layer = layer;
}

defineClass(115, 1, {115:1}, DockLayoutPanel$LayoutData);
_.hidden = false;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel/LayoutData', 115);
function $addCells(tbody, row, num){
  var i, rowElem, tdElement;
  rowElem = tbody.rows[row];
  for (i = 0; i < num; i++) {
    tdElement = $doc.createElement('td');
    rowElem.appendChild(tdElement);
  }
}

function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds(this$static, row);
  if (column < 0) {
    throw toJs(new IndexOutOfBoundsException_0('Column ' + column + ' must be non-negative: ' + column));
  }
  cellSize = this$static.getCellCount(row);
  if (cellSize <= column) {
    throw toJs(new IndexOutOfBoundsException_0('Column index: ' + column + ', Column size: ' + this$static.getCellCount(row)));
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.getRowCount();
  if (row >= rowSize || row < 0) {
    throw toJs(new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + rowSize));
  }
}

function $cleanCell(this$static, row, column, clearInnerHTML){
  var td;
  td = $getRawElement(this$static.cellFormatter, row, column);
  $internalClearCell(this$static, ($clinit_DOM() , td), clearInnerHTML);
  return td;
}

function $getCellForEvent(this$static, event_0){
  var column, row, td;
  td = $getEventTargetCell(this$static, event_0.nativeEvent);
  if (!td) {
    return null;
  }
  row = $getParentElement(td).sectionRowIndex;
  column = td.cellIndex;
  return new HTMLTable$Cell(row, column);
}

function $getDOMCellCount(tableBody, row){
  var rowElement;
  rowElement = tableBody.rows[row];
  return rowElement.cells.length;
}

function $getEventTargetCell(this$static, event_0){
  var body_0, td, tr;
  td = ($clinit_DOM() , event_0.target);
  for (; td; td = (null , $getParentElement(td))) {
    if ($equalsIgnoreCase($getPropertyString(td, 'tagName'), 'td')) {
      tr = (null , $getParentElement(td));
      body_0 = (null , $getParentElement(tr));
      if (body_0 == this$static.bodyElem) {
        return td;
      }
    }
    if (td == this$static.bodyElem) {
      return null;
    }
  }
  return null;
}

function $getWidget(this$static, row, column){
  var e, child;
  $checkCellBounds(this$static, row, column);
  return e = $getRawElement(this$static.cellFormatter, row, column) , child = ($clinit_DOM() , $getFirstChildElement(e)) , !child?null:castTo($get_0(this$static.widgetMap, child), 6);
}

function $insertRow(this$static, beforeRow){
  var tr;
  beforeRow != ($clinit_DOM() , this$static.bodyElem).rows.length && $checkRowBounds(this$static, beforeRow);
  tr = $doc.createElement('tr');
  insertChild(this$static.bodyElem, tr, beforeRow);
  return beforeRow;
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = ($clinit_DOM() , $getFirstChildElement(td));
  widget = null;
  !!maybeChild && (widget = castTo($get_0(this$static.widgetMap, maybeChild), 6));
  if (widget) {
    $remove_6(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && (td.innerHTML = '' , undefined);
    return false;
  }
}

function $remove_6(this$static, widget){
  var elem;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = ($clinit_DOM() , widget.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount;
  columnCount = this$static.getCellCount(row);
  for (column = 0; column < columnCount; ++column) {
    $cleanCell(this$static, row, column, false);
  }
  $removeChild(this$static.bodyElem, $getRow(this$static.bodyElem, row));
}

function $setCellFormatter(this$static, cellFormatter){
  this$static.cellFormatter = cellFormatter;
}

function $setColumnFormatter(this$static, formatter){
  !!this$static.columnFormatter && (formatter.columnGroup = this$static.columnFormatter.columnGroup);
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setText_0(this$static, row, column, text_0){
  var td;
  this$static.prepareCell(row, column);
  td = $cleanCell(this$static, row, column, text_0 == null);
  text_0 != null && (td.textContent = text_0 || '' , undefined);
}

function $setWidget_2(this$static, row, column, widget){
  var td;
  this$static.prepareCell(row, column);
  td = $cleanCell(this$static, row, column, true);
  if (widget) {
    $removeFromParent(widget);
    $put(this$static.widgetMap, widget);
    $clinit_DOM();
    $appendChild(td, resolve(widget.element));
    $setParent(widget, this$static);
  }
}

function HTMLTable(){
  this.widgetMap = new ElementMapperImpl;
  this.tableElem = ($clinit_DOM() , $doc.createElement('table'));
  this.bodyElem = $doc.createElement('tbody');
  $appendChild(this.tableElem, resolve(this.bodyElem));
  $setElement(this, this.tableElem);
}

defineClass(183, 633, $intern_38);
_.iterator = function iterator_6(){
  return new HTMLTable$1(this);
}
;
_.remove = function remove_10(widget){
  return $remove_6(this, widget);
}
;
var Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable', 183);
function $getCellCount(this$static, row){
  $checkRowBounds(this$static, row);
  return $getDOMCellCount(($clinit_DOM() , this$static.bodyElem), row);
}

function $getRowCount(this$static){
  return ($clinit_DOM() , this$static.bodyElem).rows.length;
}

function $prepareRow(this$static, row){
  var i, rowCount;
  if (row < 0) {
    throw toJs(new IndexOutOfBoundsException_0('Cannot create a row with a negative index: ' + row));
  }
  rowCount = ($clinit_DOM() , this$static.bodyElem).rows.length;
  for (i = rowCount; i <= row; i++) {
    $insertRow(this$static, i);
  }
}

function $removeAllRows(this$static){
  var i, numRows;
  numRows = ($clinit_DOM() , this$static.bodyElem).rows.length;
  for (i = 0; i < numRows; i++) {
    $removeRow(this$static, 0);
  }
}

function FlexTable(){
  HTMLTable.call(this);
  $setCellFormatter(this, new FlexTable$FlexCellFormatter(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter(this));
}

defineClass(184, 183, $intern_38, FlexTable);
_.getCellCount = function getCellCount(row){
  return $getCellCount(this, row);
}
;
_.getRowCount = function getRowCount(){
  return $getRowCount(this);
}
;
_.prepareCell = function prepareCell(row, column){
  var cellCount, required;
  $prepareRow(this, row);
  if (column < 0) {
    throw toJs(new IndexOutOfBoundsException_0('Cannot create a column with a negative index: ' + column));
  }
  cellCount = ($checkRowBounds(this, row) , $getDOMCellCount(($clinit_DOM() , this.bodyElem), row));
  required = column + 1 - cellCount;
  required > 0 && $addCells(this.bodyElem, row, required);
}
;
var Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlexTable', 184);
function $getCellElement_0(tbody, row, col){
  return tbody.rows[row].cells[col];
}

function $getRawElement(this$static, row, column){
  return $getCellElement_0(this$static.this$01.bodyElem, row, column);
}

function $setAlignment(this$static, row, hAlign, vAlign){
  var elem;
  this$static.this$01.prepareCell(row, 1);
  elem = $getCellElement_0(this$static.this$01.bodyElem, row, 1);
  elem['align'] = hAlign.textAlignString;
  this$static.this$01.prepareCell(row, 1);
  $getCellElement_0(this$static.this$01.bodyElem, row, 1).style['verticalAlign'] = vAlign.verticalAlignString;
}

function $setStyleName_1(this$static, column, styleName){
  this$static.this$01.prepareCell(0, column);
  $setClassName($getCellElement_0(this$static.this$01.bodyElem, 0, column), styleName);
}

function $setWidth_0(this$static, column, width_0){
  this$static.this$01.prepareCell(0, column);
  $getCellElement_0(this$static.this$01.bodyElem, 0, column)['width'] = width_0;
}

function HTMLTable$CellFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(181, 1, {}, HTMLTable$CellFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/CellFormatter', 181);
function FlexTable$FlexCellFormatter(this$0){
  HTMLTable$CellFormatter.call(this, this$0);
}

defineClass(368, 181, {}, FlexTable$FlexCellFormatter);
var Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlexTable/FlexCellFormatter', 368);
function $add_5(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function FlowPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
}

defineClass(106, 88, $intern_38, FlowPanel);
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 106);
function FocusListenerCollection(){
  ArrayList.call(this);
}

defineClass(384, 18, $intern_40, FocusListenerCollection);
var Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusListenerCollection', 384);
function deserialize_26(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_24(streamReader){
  return new FocusListenerCollection;
}

function serialize_22(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function $clinit_FocusPanel(){
  $clinit_FocusPanel = emptyMethod;
  $clinit_FocusImpl();
}

function FormHandlerCollection(){
  ArrayList.call(this);
}

defineClass(385, 18, $intern_40, FormHandlerCollection);
var Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormHandlerCollection', 385);
function deserialize_27(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_25(streamReader){
  return new FormHandlerCollection;
}

function serialize_23(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function $fireSubmitEvent(this$static){
  var event_0;
  event_0 = new FormPanel$SubmitEvent;
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
  return !event_0.canceled;
}

function $setTarget_0(this$static, target){
  $setTarget(($clinit_DOM() , this$static.element), target);
}

function $submit(this$static){
  if (!$fireSubmitEvent(this$static)) {
    return;
  }
  $submit_0(($clinit_DOM() , this$static.element), this$static.synthesizedFrame);
}

function FormPanel(element){
  SimplePanel_0.call(this, element);
  this.frameName = 'FormPanel_' + ($clinit_Impl() , $moduleName) + '_' + ++formId;
  $setTarget_0(this, this.frameName);
  this.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this.element, $intern_29 | (this.element.__eventBits || 0))):(this.eventsToSink |= $intern_29);
}

function FormPanel_0(frameTarget){
  FormPanel_1.call(this, $getPropertyString(($clinit_DOM() , frameTarget.element), 'name'));
}

function FormPanel_1(target){
  SimplePanel_0.call(this, $doc.createElement('form'));
  $setTarget(($clinit_DOM() , this.element), target);
}

defineClass(69, 74, $intern_44, FormPanel_0);
_.onAttach = function onAttach_4(){
  var dummy;
  $onAttach(this);
  if (this.frameName != null) {
    dummy = $doc.createElement('div');
    $setInnerHTML(dummy, $get_2(this.frameName).html);
    this.synthesizedFrame = $getFirstChildElement(dummy);
    $appendChild($doc.body, this.synthesizedFrame);
  }
  $hookEvents(this.synthesizedFrame, ($clinit_DOM() , this.element), this);
}
;
_.onDetach = function onDetach_3(){
  $onDetach(this);
  $unhookEvents(this.synthesizedFrame, ($clinit_DOM() , this.element));
  if (this.synthesizedFrame) {
    $removeChild($doc.body, this.synthesizedFrame);
    this.synthesizedFrame = null;
  }
}
;
_.onFormSubmit = function onFormSubmit(){
  return $fireSubmitEvent(this);
}
;
_.onFrameLoad = function onFrameLoad(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FormPanel$1(this));
}
;
var formId = 0;
var Lcom_google_gwt_user_client_ui_FormPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormPanel', 69);
function FormPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(239, 1, {}, FormPanel$1);
_.execute_1 = function execute_9(){
  $fireEvent_0(this.this$01, new FormPanel$SubmitCompleteEvent($getContents(this.this$01.synthesizedFrame)));
}
;
var Lcom_google_gwt_user_client_ui_FormPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormPanel/1', 239);
function $dispatch_6(this$static, handler){
  $onSubmitComplete(handler.listener, new FormSubmitCompleteEvent((castTo(this$static.source, 69) , this$static.resultHtml)));
}

function FormPanel$SubmitCompleteEvent(resultsHtml){
  this.resultHtml = resultsHtml;
}

defineClass(237, 635, {}, FormPanel$SubmitCompleteEvent);
_.dispatch = function dispatch_22(handler){
  $dispatch_6(this, castTo(handler, 662));
}
;
_.getAssociatedType = function getAssociatedType_23(){
  return !TYPE_22 && (TYPE_22 = new GwtEvent$Type) , TYPE_22;
}
;
var TYPE_22;
var Lcom_google_gwt_user_client_ui_FormPanel$SubmitCompleteEvent_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormPanel/SubmitCompleteEvent', 237);
function $dispatch_7(this$static, handler){
  var fse;
  fse = (castTo(this$static.source, 69) , new FormSubmitEvent);
  $onSubmit(handler.listener, fse);
  fse.setCancelledCalled && $setCanceled(this$static, fse.cancel);
}

function $setCanceled(this$static, canceled){
  this$static.canceled = canceled;
}

function FormPanel$SubmitEvent(){
}

defineClass(238, 635, {}, FormPanel$SubmitEvent);
_.dispatch = function dispatch_23(handler){
  $dispatch_7(this, castTo(handler, 663));
}
;
_.getAssociatedType = function getAssociatedType_24(){
  return !TYPE_23 && (TYPE_23 = new GwtEvent$Type) , TYPE_23;
}
;
_.canceled = false;
var TYPE_23;
var Lcom_google_gwt_user_client_ui_FormPanel$SubmitEvent_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormPanel/SubmitEvent', 238);
function $get_2(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += '<iframe src="about:blank" name=\'';
  $append_3(sb, htmlEscape(arg0));
  sb.string += "' tabindex='-1' style='position:absolute;width:0;height:0;border:0'>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

defineClass(659, 1, {});
var Ljava_util_EventObject_2_classLit = createForClass('java.util', 'EventObject', 659);
function FormSubmitCompleteEvent(resultHtml){
  this.resultHtml = resultHtml;
}

defineClass(564, 659, {}, FormSubmitCompleteEvent);
var Lcom_google_gwt_user_client_ui_FormSubmitCompleteEvent_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormSubmitCompleteEvent', 564);
function FormSubmitEvent(){
}

defineClass(563, 659, {}, FormSubmitEvent);
_.cancel = false;
_.setCancelledCalled = false;
var Lcom_google_gwt_user_client_ui_FormSubmitEvent_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormSubmitEvent', 563);
function Frame_0(element){
  $setElement_0(this, ($clinit_DOM() , element));
}

defineClass(241, 6, $intern_37);
var Lcom_google_gwt_user_client_ui_Frame_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Frame', 241);
function $prepareRow_0(this$static, row){
  if (row < 0) {
    throw toJs(new IndexOutOfBoundsException_0('Cannot access a row with a negative index: ' + row));
  }
  if (row >= this$static.numRows) {
    throw toJs(new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + this$static.numRows));
  }
}

function $removeRow_0(this$static, row){
  $removeRow(this$static, row);
  --this$static.numRows;
}

function $resizeColumns(this$static, columns){
  var i, j, td, tr, tr_0, td_0, td_1;
  if (this$static.numColumns == columns) {
    return;
  }
  if (columns < 0) {
    throw toJs(new IndexOutOfBoundsException_0('Cannot set number of columns to ' + columns));
  }
  if (this$static.numColumns > columns) {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns - 1; j >= columns; j--) {
        $checkCellBounds(this$static, i, j);
        td = $cleanCell(this$static, i, j, false);
        tr = $getRow(this$static.bodyElem, i);
        tr.removeChild(td);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns; j < columns; j++) {
        tr_0 = $getRow(this$static.bodyElem, i);
        td_0 = (td_1 = ($clinit_DOM() , $doc.createElement('td')) , td_1.innerHTML = '&nbsp;' , $clinit_DOM() , td_1);
        $insertChild(tr_0, resolve(td_0), j);
      }
    }
  }
  this$static.numColumns = columns;
  $resizeColumnGroup(this$static.columnFormatter, columns, false);
}

function $resizeRows(this$static, rows_0){
  if (this$static.numRows == rows_0) {
    return;
  }
  if (rows_0 < 0) {
    throw toJs(new IndexOutOfBoundsException_0('Cannot set number of rows to ' + rows_0));
  }
  if (this$static.numRows < rows_0) {
    addRows(($clinit_DOM() , this$static.bodyElem), rows_0 - this$static.numRows, this$static.numColumns);
    this$static.numRows = rows_0;
  }
   else {
    while (this$static.numRows > rows_0) {
      $removeRow_0(this$static, this$static.numRows - 1);
    }
  }
}

function Grid(){
  HTMLTable.call(this);
  $setCellFormatter(this, new HTMLTable$CellFormatter(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter(this));
}

function Grid_0(rows_0, columns){
  Grid.call(this);
  $resizeColumns(this, columns);
  $resizeRows(this, rows_0);
}

function addRows(table, rows_0, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows_0; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

defineClass(124, 183, $intern_38, Grid_0);
_.getCellCount = function getCellCount_0(row){
  return this.numColumns;
}
;
_.getRowCount = function getRowCount_0(){
  return this.numRows;
}
;
_.prepareCell = function prepareCell_0(row, column){
  $prepareRow_0(this, row);
  if (column < 0) {
    throw toJs(new IndexOutOfBoundsException_0('Cannot access a column with a negative index: ' + column));
  }
  if (column >= this.numColumns) {
    throw toJs(new IndexOutOfBoundsException_0('Column index: ' + column + ', Column size: ' + this.numColumns));
  }
}
;
_.numColumns = 0;
_.numRows = 0;
var Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Grid', 124);
function $addAndReplaceElement(this$static, widget, toReplace){
  $addAndReplaceElement_0(this$static, widget, ($clinit_DOM() , toReplace));
}

function $addAndReplaceElement_0(this$static, widget, toReplace){
  var children, next, toRemove;
  if (toReplace == ($clinit_DOM() , widget.element)) {
    return;
  }
  $removeFromParent(widget);
  toRemove = null;
  children = new WidgetCollection$WidgetIterator(this$static.children);
  while (children.index_0 < children.this$01.size_0) {
    next = $next_2(children);
    if ($isOrHasChild(toReplace, next.element)) {
      if (next.element == toReplace) {
        toRemove = next;
        break;
      }
      $remove_10(children);
    }
  }
  $add_11(this$static.children, widget);
  if (!toRemove) {
    $replaceChild(toReplace.parentNode, widget.element, toReplace);
  }
   else {
    $insertBefore(toReplace.parentNode, widget.element, toReplace);
    $remove_0(this$static, toRemove);
  }
  $setParent(widget, this$static);
}

function HTMLPanel(html){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  $setInnerHTML(($clinit_DOM() , this.element), html);
}

defineClass(473, 88, $intern_38, HTMLPanel);
var Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLPanel', 473);
function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.array.length) {
    if ($get_1(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.array.length) {
    throw toJs(new NoSuchElementException);
  }
  result = castTo($get_1(this$static.widgetList, this$static.nextIndex), 6);
  this$static.lastIndex = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function HTMLTable$1(this$0){
  this.this$01 = this$0;
  this.widgetList = this.this$01.widgetMap.uiObjectList;
  $findNext(this);
}

defineClass(367, 1, {}, HTMLTable$1);
_.next_1 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.nextIndex < this.widgetList.array.length;
}
;
_.remove_2 = function remove_11(){
  var w;
  if (this.lastIndex < 0) {
    throw toJs(new IllegalStateException);
  }
  w = castTo($get_1(this.widgetList, this.lastIndex), 6);
  $removeFromParent(w);
  this.lastIndex = -1;
}
;
_.lastIndex = -1;
_.nextIndex = -1;
var Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/1', 367);
function HTMLTable$Cell(rowIndex, cellIndex){
  this.cellIndex_0 = cellIndex;
  this.rowIndex = rowIndex;
}

defineClass(366, 1, {}, HTMLTable$Cell);
_.cellIndex_0 = 0;
_.rowIndex = 0;
var Lcom_google_gwt_user_client_ui_HTMLTable$Cell_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/Cell', 366);
function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = ($clinit_DOM() , $doc.createElement('colgroup'));
    insertChild(this$static.this$01.tableElem, this$static.columnGroup, 0);
    $appendChild(this$static.columnGroup, resolve($doc.createElement('col')));
  }
}

function $resizeColumnGroup(this$static, columns, growOnly){
  var i, num;
  columns = $wnd.Math.max(columns, 1);
  num = this$static.columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; i++) {
      $appendChild(this$static.columnGroup, $doc.createElement('col'));
    }
  }
   else if (!growOnly && num > columns) {
    for (i = num; i > columns; i--) {
      $removeChild(this$static.columnGroup, this$static.columnGroup.lastChild);
    }
  }
}

function HTMLTable$ColumnFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(182, 1, {}, HTMLTable$ColumnFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/ColumnFormatter', 182);
function $getRow(tbody, row){
  return $getRow_0(($clinit_DOM() , tbody), row);
}

function $getRow_0(tbody, row){
  return $clinit_DOM() , tbody.rows[row];
}

function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  ALIGN_MIDDLE = new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_MIDDLE, ALIGN_TOP;
defineClass(632, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 632);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(113, 632, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 113);
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(135, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 135);
function $add_6(this$static, w){
  var td, td_0;
  td = (td_0 = ($clinit_DOM() , $doc.createElement('td')) , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = ($clinit_DOM() , $doc.createElement('tr'));
  $appendChild(this.body_0, resolve(this.tableRow));
  this.table['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

defineClass(84, 171, $intern_38, HorizontalPanel);
_.remove = function remove_12(w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove_0(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 84);
function Hyperlink(){
  Hyperlink_0.call(this, ($clinit_DOM() , $doc.createElement('div')));
}

function Hyperlink_0(elem){
  this.anchorElem = ($clinit_DOM() , $doc.createElement('a'));
  if (!elem) {
    $setElement(this, this.anchorElem);
  }
   else {
    $setElement_0(this, elem);
    $appendChild(this.element, resolve(this.anchorElem));
  }
  this.eventsToSink == -1?$sinkEvents(this.element, 1 | (this.element.__eventBits || 0)):(this.eventsToSink |= 1);
  this.element.className = 'gwt-Hyperlink';
  new DirectionalTextHelper(this.anchorElem);
}

defineClass(163, 6, $intern_37, Hyperlink);
_.onBrowserEvent = function onBrowserEvent_4(event_0){
  var mouseButtons, alt_0, ctrl, meta, shift_0, modifiers, middle, right;
  $onBrowserEvent(this, event_0);
  $clinit_DOM();
  if ($eventGetTypeInt(event_0.type) == 1 && (mouseButtons = $eventGetButton(event_0) , alt_0 = !!event_0.altKey , ctrl = !!event_0.ctrlKey , meta = !!event_0.metaKey , shift_0 = !!event_0.shiftKey , modifiers = alt_0 || ctrl || meta || shift_0 , middle = mouseButtons == 4 , right = mouseButtons == 2 , !modifiers && !middle && !right)) {
    $clinit_History();
    newItem(this.targetHistoryToken);
    event_0.preventDefault();
  }
}
;
var Lcom_google_gwt_user_client_ui_Hyperlink_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Hyperlink', 163);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function $getWidth(this$static){
  return ($clinit_DOM() , this$static.element).width;
}

function $setResource(this$static, resource){
  $setUrl_0(this$static, resource.url_0, resource.width_0, resource.height_0);
}

function $setUrl(this$static, url_0){
  !!this$static.state && (($clinit_DOM() , this$static.element)['__gwtLastUnhandledEvent'] = '' , undefined);
  $setSrc(($clinit_DOM() , this$static.element), url_0.uri_0);
}

function Image_0(){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState(this));
  ($clinit_DOM() , this.element).className = 'gwt-Image';
}

function Image_1(resource){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState_0(this, resource.url_0, resource.width_0, resource.height_0));
  ($clinit_DOM() , this.element).className = 'gwt-Image';
}

defineClass(164, 6, $intern_37, Image_0, Image_1);
_.onBrowserEvent = function onBrowserEvent_5(event_0){
  $clinit_DOM();
  $eventGetTypeInt(event_0.type) == $intern_29 && !!this.state && (this.element['__gwtLastUnhandledEvent'] = '' , undefined);
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_1(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 164);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent');
  $equals_0('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(291, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 291);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(292, 1, {}, Image$State$1);
_.execute_1 = function execute_10(){
  var evt, evt_0;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    $getImageElement(this.val$image2)['__gwtLastUnhandledEvent'] = 'load';
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent($getImageElement(this.val$image2), evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 292);
function $getImageElement(image){
  return $clinit_DOM() , image.element;
}

function $setUrl_0(image, url_0, width_0, height){
  !!image.state && (($clinit_DOM() , image.element)['__gwtLastUnhandledEvent'] = '' , undefined);
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
  $setWidth(image.element, width_0);
  $setHeight(image.element, height);
}

function Image$UnclippedState(image){
  $replaceElement(image, $doc.createElement('img'));
  sinkEvents(($clinit_DOM() , image.element), $intern_29);
  image.eventsToSink == -1?$sinkEvents(image.element, 133398655 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133398655);
}

function Image$UnclippedState_0(image, url_0, width_0, height){
  Image$UnclippedState.call(this, image);
  !!image.state && (($clinit_DOM() , image.element)['__gwtLastUnhandledEvent'] = '' , undefined);
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
  $setWidth(image.element, width_0);
  $setHeight(image.element, height);
}

defineClass(117, 291, {}, Image$UnclippedState, Image$UnclippedState_0);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 117);
function KeyboardListenerCollection(){
  ArrayList.call(this);
}

defineClass(386, 18, $intern_40, KeyboardListenerCollection);
var Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'KeyboardListenerCollection', 386);
function deserialize_28(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_26(streamReader){
  return new KeyboardListenerCollection;
}

function serialize_24(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function LayoutCommand$1(){
}

defineClass(246, 1, {}, LayoutCommand$1);
var Lcom_google_gwt_user_client_ui_LayoutCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand/1', 246);
function $add_7(this$static, widget){
  $insert_0(this$static, widget, this$static.children.size_0);
}

function $insert_0(this$static, widget, beforeIndex){
  var layer;
  $removeFromParent(widget);
  $insert_1(this$static.children, widget, beforeIndex);
  layer = $attachChild(this$static.layout, ($clinit_DOM() , widget.element), widget);
  widget.layoutData = layer;
  $setParent(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function $onResize(this$static){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_2(child$iterator);
    instanceOf(child, 51) && castTo(child, 51).onResize_0();
  }
}

defineClass(553, 88, $intern_43);
_.onAttach = function onAttach_5(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_4(){
  $onDetach(this);
}
;
_.onResize_0 = function onResize_3(){
  $onResize(this);
}
;
_.remove = function remove_13(w){
  var removed;
  removed = $remove_0(this, w);
  removed && $removeChild_0(this.layout, castTo(w.layoutData, 90));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutPanel', 553);
function $addItem(this$static, item_0){
  $insertItem(this$static, item_0, item_0, -1);
}

function $insertItem(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = ($clinit_DOM() , this$static.element);
  option = $doc.createElement('option');
  option.text = item_0;
  option.removeAttribute('bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    select.add(option, null);
  }
   else {
    before = select.options[index_0];
    select.add(option, before);
  }
}

function $setSelectedIndex_0(this$static, index_0){
  $setSelectedIndex(($clinit_DOM() , this$static.element), index_0);
}

function ListBox(){
  $clinit_FocusWidget();
  FocusWidget.call(this, $doc.createElement('select'));
  ($clinit_DOM() , this.element).className = 'gwt-ListBox';
}

defineClass(206, 133, $intern_37, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 206);
defineClass(413, 412, {15:1});
var Lcom_google_gwt_user_client_ui_ListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper', 413);
function ListenerWrapper$WrappedOldFormHandler(listener){
  this.listener = listener;
}

function add_8(source, listener){
  var handlers;
  handlers = new ListenerWrapper$WrappedOldFormHandler(listener);
  $addHandler_0(source, handlers, (!TYPE_23 && (TYPE_23 = new GwtEvent$Type) , TYPE_23));
  $addHandler_0(source, handlers, (!TYPE_22 && (TYPE_22 = new GwtEvent$Type) , TYPE_22));
}

defineClass(414, 413, {15:1, 662:1, 663:1}, ListenerWrapper$WrappedOldFormHandler);
var Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedOldFormHandler_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper/WrappedOldFormHandler', 414);
function LoadListenerCollection(){
  ArrayList.call(this);
}

defineClass(387, 18, $intern_40, LoadListenerCollection);
var Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LoadListenerCollection', 387);
function deserialize_29(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_27(streamReader){
  return new LoadListenerCollection;
}

function serialize_25(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function $addItem_0(this$static, item_0){
  return $insertItem_0(this$static, item_0, this$static.allItems.array.length);
}

function $addItemElement(this$static, beforeIndex, tdElem){
  var tr;
  if (this$static.vertical) {
    tr = ($clinit_DOM() , $doc.createElement('tr'));
    insertChild(this$static.body_0, tr, beforeIndex);
    $appendChild(tr, resolve(tdElem));
  }
   else {
    tr = ($clinit_DOM() , $getChild(this$static.body_0, 0));
    $insertChild(tr, resolve(tdElem), beforeIndex);
  }
}

function $clearItems(this$static){
  var container, item_0, item$iterator;
  $selectItem(this$static, null);
  container = this$static.vertical?this$static.body_0:($clinit_DOM() , $getChild(this$static.body_0, 0));
  while ($clinit_DOM() , $getChildCount(container) > 0) {
    $removeChild(container, $getChild(container, 0));
  }
  for (item$iterator = new ArrayList$1(this$static.allItems); item$iterator.i < item$iterator.this$01.array.length;) {
    item_0 = castTo($next_6(item$iterator), 7);
    item_0.element['colSpan'] = 1;
    castTo(item_0, 53);
  }
  this$static.items.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  this$static.allItems.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

function $doItemAction(this$static, item_0, fireCommand){
  var cmd;
  if (!item_0.enabled) {
    return;
  }
  $selectItem(this$static, item_0);
  if (fireCommand && !!item_0.command) {
    $selectItem(this$static, null);
    ($clinit_FocusPanel() , $clinit_DOM() , this$static.element).blur();
    cmd = item_0.command;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new MenuBar$1(cmd));
  }
}

function $findItem(this$static, hItem){
  var item_0, item$iterator;
  for (item$iterator = new ArrayList$1(this$static.items); item$iterator.i < item$iterator.this$01.array.length;) {
    item_0 = castTo($next_6(item$iterator), 53);
    if ($isOrHasChild(($clinit_DOM() , item_0.element), hItem)) {
      return item_0;
    }
  }
  return null;
}

function $init_0(this$static, vertical){
  var outer_0, table, tr;
  table = ($clinit_DOM() , $doc.createElement('table'));
  this$static.body_0 = $doc.createElement('tbody');
  $appendChild(table, resolve(this$static.body_0));
  if (!vertical) {
    tr = $doc.createElement('tr');
    $appendChild(this$static.body_0, resolve(tr));
  }
  this$static.vertical = vertical;
  outer_0 = ($clinit_FocusPanel() , createFocusable0(($clinit_FocusImpl() , focusHandler_0)?focusHandler_0:(focusHandler_0 = $createFocusHandler())));
  $appendChild(outer_0, resolve(table));
  $setElement_0(this$static, outer_0);
  $clinit_Roles();
  $set(MENUBAR, this$static.element);
  this$static.eventsToSink == -1?$sinkEvents(this$static.element, 2225 | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= 2225);
  this$static.element.className = 'gwt-MenuBar';
  vertical?$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'vertical', true):$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'horizontal', true);
  this$static.element.style['outline'] = '0px';
  this$static.element.setAttribute('hideFocus', 'true');
  $addDomHandler(this$static, new MenuBar$2(this$static), ($clinit_BlurEvent() , $clinit_BlurEvent() , TYPE));
}

function $insertItem_0(this$static, item_0, beforeIndex){
  var i, itemsIndex;
  if (beforeIndex < 0 || beforeIndex > this$static.allItems.array.length) {
    throw toJs(new IndexOutOfBoundsException);
  }
  $add_1(this$static.allItems, beforeIndex, item_0);
  itemsIndex = 0;
  for (i = 0; i < beforeIndex; i++) {
    instanceOf($get_1(this$static.allItems, i), 53) && ++itemsIndex;
  }
  $add_1(this$static.items, itemsIndex, item_0);
  $addItemElement(this$static, beforeIndex, ($clinit_DOM() , item_0.element));
  $setStyleName_0(item_0, getStylePrimaryName(item_0.element) + '-' + 'selected', false);
  $updateSubmenuIcon(this$static, item_0);
  return item_0;
}

function $itemOver(this$static, item_0, focus_0){
  var focus_1;
  if (!!item_0 && !item_0.enabled) {
    return;
  }
  $selectItem(this$static, item_0);
  focus_0 && this$static.focusOnHover && (($clinit_FocusPanel() , $clinit_DOM() , this$static.element).focus() , undefined);
  !!item_0 && this$static.autoOpen && $doItemAction(this$static, item_0, false);
}

function $moveSelectionDown(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  this$static.vertical && $selectNextItem(this$static);
}

function $moveSelectionUp(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  this$static.vertical?$selectPrevItem(this$static):undefined;
}

function $moveToNextItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  !this$static.vertical && $selectNextItem(this$static);
}

function $moveToPrevItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  this$static.vertical?undefined:$selectPrevItem(this$static);
}

function $selectFirstItemIfNoneSelected(this$static){
  var nextItem, nextItem$iterator;
  if (!this$static.selectedItem) {
    for (nextItem$iterator = new ArrayList$1(this$static.items); nextItem$iterator.i < nextItem$iterator.this$01.array.length;) {
      nextItem = castTo($next_6(nextItem$iterator), 53);
      if (nextItem.enabled) {
        $selectItem(this$static, nextItem);
        break;
      }
    }
    return true;
  }
  return false;
}

function $selectItem(this$static, item_0){
  var td, tr;
  if (item_0 == this$static.selectedItem) {
    return;
  }
  if (this$static.selectedItem) {
    $setSelectionStyle(this$static.selectedItem);
    if (this$static.vertical) {
      tr = ($clinit_DOM() , $getParentElement($getElement(this$static.selectedItem)));
      if ($getChildCount(tr) == 2) {
        td = $getChild(tr, 1);
        setStyleName(td, 'subMenuIcon-selected', false);
      }
    }
  }
  if (item_0) {
    $setStyleName_0(item_0, getStylePrimaryName(($clinit_DOM() , item_0.element)) + '-' + 'selected', true);
    if (this$static.vertical) {
      tr = $getParentElement(item_0.element);
      if ($getChildCount(tr) == 2) {
        td = $getChild(tr, 1);
        setStyleName(td, 'subMenuIcon-selected', true);
      }
    }
    $clinit_Roles();
    $setAriaActivedescendantProperty(this$static.element, new Id(item_0.element));
  }
  this$static.selectedItem = item_0;
}

function $selectNextItem(this$static){
  var firstIndex, index_0, itemToBeSelected;
  if (!this$static.selectedItem) {
    return;
  }
  index_0 = $indexOf_0(this$static.items, this$static.selectedItem, 0);
  firstIndex = index_0;
  while (true) {
    index_0 = index_0 + 1;
    index_0 == this$static.items.array.length && (index_0 = 0);
    if (index_0 == firstIndex) {
      itemToBeSelected = castTo($get_1(this$static.items, firstIndex), 53);
      break;
    }
     else {
      itemToBeSelected = castTo($get_1(this$static.items, index_0), 53);
      if (itemToBeSelected.enabled) {
        break;
      }
    }
  }
  $selectItem(this$static, itemToBeSelected);
}

function $selectPrevItem(this$static){
  var firstIndex, index_0, itemToBeSelected;
  if (!this$static.selectedItem) {
    return;
  }
  index_0 = $indexOf_0(this$static.items, this$static.selectedItem, 0);
  firstIndex = index_0;
  while (true) {
    index_0 = index_0 - 1;
    index_0 < 0 && (index_0 = this$static.items.array.length - 1);
    if (index_0 == firstIndex) {
      itemToBeSelected = castTo($get_1(this$static.items, firstIndex), 53);
      break;
    }
     else {
      itemToBeSelected = castTo($get_1(this$static.items, index_0), 53);
      if (itemToBeSelected.enabled) {
        break;
      }
    }
  }
  $selectItem(this$static, itemToBeSelected);
}

function $updateSubmenuIcon(this$static, item_0){
  var container, idx, tdCount, tr;
  if (!this$static.vertical) {
    return;
  }
  idx = $indexOf_0(this$static.allItems, item_0, 0);
  if (idx == -1) {
    return;
  }
  container = this$static.vertical?this$static.body_0:($clinit_DOM() , $getChild(this$static.body_0, 0));
  tr = ($clinit_DOM() , $getChild(container, idx));
  tdCount = $getChildCount(tr);
  tdCount == 2 && $removeChild(tr, $getChild(tr, 1));
  item_0.element['colSpan'] = 2;
}

defineClass(208, 6, $intern_37);
_.onBrowserEvent = function onBrowserEvent_6(event_0){
  var item_0, keyCode;
  item_0 = $findItem(this, ($clinit_DOM() , event_0.target));
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      {
        ($clinit_FocusPanel() , this.element).focus();
        !!item_0 && $doItemAction(this, item_0, true);
        break;
      }

    case 16:
      {
        !!item_0 && $itemOver(this, item_0, true);
        break;
      }

    case 32:
      {
        !!item_0 && $itemOver(this, null, false);
        break;
      }

    case 2048:
      {
        $selectFirstItemIfNoneSelected(this);
        break;
      }

    case 128:
      {
        keyCode = event_0.keyCode | 0;
        $clinit_LocaleInfo();
        keyCode = maybeSwapArrowKeysForRtl(keyCode, false);
        switch (keyCode) {
          case 37:
            $moveToPrevItem(this);
            event_0.stopPropagation();
            event_0.preventDefault();
            break;
          case 39:
            $moveToNextItem(this);
            event_0.stopPropagation();
            event_0.preventDefault();
            break;
          case 38:
            $moveSelectionUp(this);
            event_0.stopPropagation();
            event_0.preventDefault();
            break;
          case 40:
            $moveSelectionDown(this);
            event_0.stopPropagation();
            event_0.preventDefault();
            break;
          case 27:
            $selectItem(this, null);
            event_0.stopPropagation();
            event_0.preventDefault();
            break;
          case 9:
            $selectItem(this, null);
            break;
          case 13:
            if (!$selectFirstItemIfNoneSelected(this)) {
              $doItemAction(this, this.selectedItem, true);
              event_0.stopPropagation();
              event_0.preventDefault();
            }

        }
        break;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach_5(){
  $onDetach(this);
}
;
_.autoOpen = false;
_.focusOnHover = true;
_.vertical = false;
var Lcom_google_gwt_user_client_ui_MenuBar_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar', 208);
function MenuBar$1(val$cmd){
  this.val$cmd2 = val$cmd;
}

defineClass(571, 1, {}, MenuBar$1);
_.execute_1 = function execute_11(){
  $execute_0(this.val$cmd2);
}
;
var Lcom_google_gwt_user_client_ui_MenuBar$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar/1', 571);
function MenuBar$2(this$0){
  this.this$01 = this$0;
}

defineClass(572, 1, {618:1, 15:1}, MenuBar$2);
_.onBlur = function onBlur(event_0){
  $selectItem(this.this$01, null);
}
;
var Lcom_google_gwt_user_client_ui_MenuBar$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar/2', 572);
function $clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer(){
  $clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer = emptyMethod;
  new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString(($clinit_LocaleInfo() , 'data:image/gif;base64,R0lGODlhBQAJAIAAAAAAAAAAACH5BAEAAAEALAAAAAAFAAkAAAIMRB5gp9v2YlJsJRQKADs='))), 5, 9);
}

function $setScheduledCommand(this$static, cmd){
  this$static.command = cmd;
}

function $setSelectionStyle(this$static){
  $setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + 'selected', false);
}

function MenuItem(text_0){
  $setElement_0(this, ($clinit_DOM() , $doc.createElement('td')));
  $setStyleName_0(this, getStylePrimaryName(this.element) + '-' + 'selected', false);
  $setInnerHTML(this.element, text_0);
  this.element.className = 'gwt-MenuItem';
  $setAttribute(this.element, 'id', $createUniqueId($doc));
  $clinit_Roles();
  $set(MENUITEM, this.element);
}

defineClass(53, 7, {8:1, 53:1, 7:1});
_.enabled = true;
var Lcom_google_gwt_user_client_ui_MenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuItem', 53);
function MouseListenerCollection(){
  ArrayList.call(this);
}

defineClass(388, 18, $intern_40, MouseListenerCollection);
var Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MouseListenerCollection', 388);
function deserialize_30(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_28(streamReader){
  return new MouseListenerCollection;
}

function serialize_26(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function MouseWheelListenerCollection(){
  ArrayList.call(this);
}

defineClass(389, 18, $intern_40, MouseWheelListenerCollection);
var Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MouseWheelListenerCollection', 389);
function deserialize_31(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_29(streamReader){
  return new MouseWheelListenerCollection;
}

function serialize_27(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

defineClass(329, 1, {});
var Lcom_google_gwt_user_client_ui_SuggestOracle_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestOracle', 329);
function $add_8(this$static, suggestion){
  var candidate, i, l, realSuggestions, word, words;
  candidate = $normalizeSuggestion(this$static, suggestion);
  realSuggestions = castTo($getStringValue(this$static.toRealSuggestions, candidate), 24);
  if (!realSuggestions) {
    realSuggestions = new ArrayList;
    $putStringValue(this$static.toRealSuggestions, candidate, realSuggestions);
  }
  realSuggestions.add_1(0, suggestion);
  words = $split(candidate);
  for (i = 0; i < words.length; i++) {
    word = words[i];
    $add_9(this$static.tree, word);
    l = castTo($getStringValue(this$static.toCandidates, word), 67);
    if (!l) {
      l = new HashSet;
      $putStringValue(this$static.toCandidates, word, l);
    }
    l.add_0(candidate);
  }
}

function $addAll_1(this$static, collection){
  var suggestion, suggestion$iterator;
  for (suggestion$iterator = collection.iterator(); suggestion$iterator.hasNext_0();) {
    suggestion = castToString(suggestion$iterator.next_1());
    $add_8(this$static, suggestion);
  }
}

function $convertToFormattedSuggestions(this$static, query, candidates){
  var accum, candidate, cursor, entry, entryIterator, formattedSuggestion, i, index_0, part1, part2, realSuggestions, realSuggestionsIterator, realSuggestionsSet, searchWords, suggestion, suggestions, wordBounds;
  suggestions = new ArrayList;
  for (i = 0; i < candidates.array.length; i++) {
    candidate = (checkCriticalElementIndex(i, candidates.array.length) , castToString(candidates.array[i]));
    realSuggestions = castTo($getStringValue(this$static.toRealSuggestions, candidate), 24);
    realSuggestionsSet = new TreeSet;
    $add_14(realSuggestionsSet, castToString(realSuggestions.get_0(0)));
    realSuggestionsIterator = (entryIterator = new TreeMap$EntryIterator((new TreeMap$EntrySet((new AbstractNavigableMap$NavigableKeySet(realSuggestionsSet.map_0)).map_0)).this$01) , new AbstractNavigableMap$NavigableKeySet$1(entryIterator));
    while ($hasNext(realSuggestionsIterator.val$entryIterator2.iter)) {
      cursor = 0;
      index_0 = 0;
      formattedSuggestion = (entry = $next_7(realSuggestionsIterator.val$entryIterator2) , castToString(entry.getKey()));
      accum = new SafeHtmlBuilder;
      searchWords = $split(query);
      while (true) {
        wordBounds = $findNextWord(candidate, searchWords, index_0);
        if (!wordBounds) {
          break;
        }
        if (wordBounds.startIndex == 0 || 32 == $charAt(candidate, wordBounds.startIndex - 1)) {
          part1 = $substring_0(formattedSuggestion, cursor, wordBounds.startIndex);
          part2 = $substring_0(formattedSuggestion, wordBounds.startIndex, wordBounds.endIndex);
          cursor = wordBounds.endIndex;
          $append_3(accum.sb, htmlEscape(part1));
          $append_3(accum.sb, '<strong>');
          $append_3(accum.sb, htmlEscape(part2));
          $append_3(accum.sb, '<\/strong>');
        }
        index_0 = wordBounds.endIndex;
      }
      if (cursor == 0) {
        continue;
      }
      $appendEscaped(accum, formattedSuggestion.substr(cursor));
      suggestion = new MultiWordSuggestOracle$MultiWordSuggestion(formattedSuggestion, (new SafeHtmlString(accum.sb.string)).html);
      suggestions.array[suggestions.array.length] = suggestion;
    }
  }
  return suggestions;
}

function $createCandidatesFromSearch(this$static, query){
  var candidateSet, candidates, i, searchWords, thisWordChoices, word;
  candidates = new ArrayList;
  if (query.length == 0) {
    return candidates;
  }
  searchWords = $split(query);
  candidateSet = null;
  for (i = 0; i < searchWords.length; i++) {
    word = searchWords[i];
    if (word.length == 0 || (new RegExp('^( )$')).test(word)) {
      continue;
    }
    thisWordChoices = $createCandidatesFromWord(this$static, word);
    if (!candidateSet) {
      candidateSet = thisWordChoices;
    }
     else {
      $retainAll(candidateSet, thisWordChoices);
      if ($size(candidateSet.map_0) < 2) {
        break;
      }
    }
  }
  if (candidateSet) {
    $addAll_0(candidates, candidateSet);
    $clinit_Collections();
    sort_0(candidates.array, candidates.array.length);
  }
  return candidates;
}

function $createCandidatesFromWord(this$static, query){
  var belongsTo, candidateSet, i, words;
  candidateSet = new HashSet;
  words = $getSuggestions(this$static.tree, query, $intern_0);
  for (i = 0; i < words.array.length; i++) {
    belongsTo = castTo($get_4(this$static.toCandidates, (checkCriticalElementIndex(i, words.array.length) , words.array[i])), 25);
    !!belongsTo && $addAll(candidateSet, belongsTo);
  }
  return candidateSet;
}

function $findNextWord(candidate, searchWords, indexToStartAt){
  var firstWord, index_0, newWord, word, word$index, word$max;
  firstWord = null;
  for (word$index = 0 , word$max = searchWords.length; word$index < word$max; ++word$index) {
    word = searchWords[word$index];
    index_0 = candidate.indexOf(word, indexToStartAt);
    if (index_0 != -1) {
      newWord = new MultiWordSuggestOracle$WordBounds(index_0, word.length);
      (!firstWord || $compareTo_0(newWord, firstWord) < 0) && (firstWord = newWord);
    }
  }
  return firstWord;
}

function $normalizeSearch(this$static, search){
  search = $normalizeSuggestion(this$static, search);
  search = $replaceAll(search, '\\s+', ' ');
  return $trim(search);
}

function $normalizeSuggestion(this$static, formattedSuggestion){
  var i, ignore, hex, number, regex, replace;
  formattedSuggestion = $toLowerCase(formattedSuggestion, ($clinit_Locale() , ROOT));
  if (this$static.whitespaceChars != null) {
    for (i = 0; i < this$static.whitespaceChars.length; i++) {
      ignore = this$static.whitespaceChars[i];
      formattedSuggestion = (hex = (number = ignore >>> 0 , number.toString(16)) , regex = '\\u' + $substring('0000', hex.length) + hex , replace = String.fromCharCode(32) , formattedSuggestion.replace(new RegExp(regex, 'g'), replace));
    }
  }
  return formattedSuggestion;
}

function $requestDefaultSuggestions(this$static, callback){
  $onSuggestionsReady(callback, this$static.emptyResponse);
}

function $requestSuggestions(this$static, request, callback){
  var candidates, i, limit, query, response, suggestions;
  query = $normalizeSearch(this$static, request.query);
  limit = request.limit;
  candidates = $createCandidatesFromSearch(this$static, query);
  $wnd.Math.max(0, candidates.array.length - limit);
  for (i = candidates.array.length - 1; i > limit; i--) {
    checkCriticalElementIndex(i, candidates.array.length);
    removeFrom(candidates.array, i);
  }
  suggestions = $convertToFormattedSuggestions(this$static, query, candidates);
  response = new SuggestOracle$Response(suggestions);
  $onSuggestionsReady(callback, response);
}

function MultiWordSuggestOracle(){
  MultiWordSuggestOracle_0.call(this);
}

function MultiWordSuggestOracle_0(){
  var i;
  this.emptyResponse = new SuggestOracle$Response(new ArrayList);
  this.tree = new PrefixTree;
  this.toCandidates = new HashMap;
  this.toRealSuggestions = new HashMap;
  this.whitespaceChars = initUnidimensionalArray(C_classLit, $intern_2, 110, ' '.length, 15, 1);
  for (i = 0; i < ' '.length; i++) {
    this.whitespaceChars[i] = (checkCriticalStringElementIndex(i, ' '.length) , ' '.charCodeAt(i));
  }
}

defineClass(140, 329, {}, MultiWordSuggestOracle);
var Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MultiWordSuggestOracle', 140);
function MultiWordSuggestOracle$MultiWordSuggestion(replacementString, displayString){
  this.replacementString = replacementString;
  this.displayString = displayString;
}

defineClass(330, 1, {665:1}, MultiWordSuggestOracle$MultiWordSuggestion);
var Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle$MultiWordSuggestion_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MultiWordSuggestOracle/MultiWordSuggestion', 330);
function $compareTo_0(this$static, that){
  var comparison;
  comparison = this$static.startIndex - that.startIndex;
  comparison == 0 && (comparison = that.endIndex - this$static.endIndex);
  return comparison;
}

function MultiWordSuggestOracle$WordBounds(startIndex, length_0){
  this.startIndex = startIndex;
  this.endIndex = startIndex + length_0;
}

defineClass(141, 1, {141:1, 4:1}, MultiWordSuggestOracle$WordBounds);
_.compareTo = function compareTo_2(that){
  return $compareTo_0(this, castTo(that, 141));
}
;
_.endIndex = 0;
_.startIndex = 0;
var Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle$WordBounds_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MultiWordSuggestOracle/WordBounds', 141);
function $clinit_NamedFrame(){
  $clinit_NamedFrame = emptyMethod;
  PATTERN_NAME = /^[^<>&\'\"]+$/;
}

function NamedFrame(){
  $clinit_NamedFrame();
  Frame_0.call(this, createIFrame());
  ($clinit_DOM() , this.element).className = 'gwt-Frame';
}

function createIFrame(){
  var div, sb;
  if (!PATTERN_NAME.test('_self')) {
    throw toJs(new IllegalArgumentException_0("expecting one or more non-whitespace chars with no '<', '>', or '&'"));
  }
  div = ($clinit_DOM() , $doc.createElement('div'));
  $setInnerHTML(div, (sb = new StringBuilder , sb.string += '<iframe src="about:blank" name=\'' , $append_3(sb, htmlEscape('_self')) , sb.string += "'>" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html);
  return div.firstChild;
}

defineClass(222, 241, $intern_37, NamedFrame);
var PATTERN_NAME;
var Lcom_google_gwt_user_client_ui_NamedFrame_2_classLit = createForClass('com.google.gwt.user.client.ui', 'NamedFrame', 222);
function PopupListenerCollection(){
  ArrayList.call(this);
}

defineClass(390, 18, $intern_40, PopupListenerCollection);
var Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupListenerCollection', 390);
function deserialize_32(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_30(streamReader){
  return new PopupListenerCollection;
}

function serialize_28(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function $onResize_0(){
  var height, width_0, winHeight, winWidth;
  null.$_nullMethod();
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  null.$_nullMethod(($clinit_Style$Display() , 'none'));
  null.$_nullMethod(($clinit_Style$Unit() , '0.0px'));
  null.$_nullMethod('0.0px');
  width_0 = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  null.$_nullMethod($wnd.Math.max(width_0, winWidth) + 'px');
  null.$_nullMethod($wnd.Math.max(height, winHeight) + 'px');
  null.$_nullMethod('block');
}

function PopupPanel$1(){
}

defineClass(434, 1, $intern_28, PopupPanel$1);
_.onResize = function onResize_4(event_0){
  $onResize_0();
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/1', 434);
function $setPosition_0(this$static, offsetWidth, offsetHeight){
  $position(this$static.this$01, this$static.val$target2, offsetWidth, offsetHeight);
}

function PopupPanel$2(this$0, val$target){
  this.this$01 = this$0;
  this.val$target2 = val$target;
}

defineClass(435, 1, {}, PopupPanel$2);
var Lcom_google_gwt_user_client_ui_PopupPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/2', 435);
function PopupPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(436, 1, $intern_27, PopupPanel$3);
_.onPreviewNativeEvent = function onPreviewNativeEvent_2(event_0){
  $previewNativeEvent(this.this$01, event_0);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/3', 436);
function PopupPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(437, 1, $intern_45, PopupPanel$4);
_.onValueChange = function onValueChange(event_0){
  this.this$01.autoHideOnHistoryEvents && this.this$01.hide(false);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/4', 437);
function $clinit_PopupPanel$AnimationType(){
  $clinit_PopupPanel$AnimationType = emptyMethod;
  CENTER_1 = new PopupPanel$AnimationType('CENTER', 0);
  ONE_WAY_CORNER = new PopupPanel$AnimationType('ONE_WAY_CORNER', 1);
  ROLL_DOWN = new PopupPanel$AnimationType('ROLL_DOWN', 2);
}

function PopupPanel$AnimationType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_PopupPanel$AnimationType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit, 1), $intern_2, 108, 0, [CENTER_1, ONE_WAY_CORNER, ROLL_DOWN]);
}

defineClass(108, 5, {108:1, 3:1, 4:1, 5:1}, PopupPanel$AnimationType);
var CENTER_1, ONE_WAY_CORNER, ROLL_DOWN;
var Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'PopupPanel/AnimationType', 108, Ljava_lang_Enum_2_classLit, values_12);
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize_0();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_2(null)), this$static.curPanel);
  }
  $setClip(($clinit_PopupPanel() , $getElement(this$static.curPanel)), 'rect(auto, auto, auto, auto)');
  $getElement(this$static.curPanel).style['overflow'] = 'visible';
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    $getElement(this$static.curPanel).style['position'] = 'absolute';
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_0(($clinit_RootPanel() , get_2(null)), this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_2(null)), this$static.curPanel);
  }
  $getElement(this$static.curPanel).style['overflow'] = 'visible';
}

function $onUpdate_0(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight_0);
  width_0 = round_int(progress * this$static.offsetWidth_0);
  switch (this$static.curPanel.animType.ordinal) {
    case 2:
      right = this$static.offsetWidth_0;
      bottom = height;
      break;
    case 0:
      top_0 = this$static.offsetHeight_0 - height >> 1;
      left = this$static.offsetWidth_0 - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
      break;
    case 1:
      $clinit_LocaleInfo();
      right = width_0;
      bottom = height;
  }
  $setClip(($clinit_PopupPanel() , $getElement(this$static.curPanel)), 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState(this$static, showing, isUnloading){
  var animate;
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  if (this$static.showTimer) {
    $cancel_0(this$static.showTimer);
    this$static.showTimer = null;
    $onComplete(this$static);
  }
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  animate = !isUnloading && this$static.curPanel.isAnimationEnabled;
  this$static.curPanel.animType != ($clinit_PopupPanel$AnimationType() , CENTER_1) && !showing && (animate = false);
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      $getElement(this$static.curPanel).style['position'] = 'absolute';
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      $setClip(($clinit_PopupPanel() , $getElement(this$static.curPanel)), 'rect(0px, 0px, 0px, 0px)');
      $add_0(($clinit_RootPanel() , get_2(null)), this$static.curPanel);
      this$static.showTimer = new PopupPanel$ResizeAnimation$1(this$static);
      $schedule(this$static.showTimer, 1);
    }
     else {
      $run(this$static, 200, now_1(), null);
    }
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function PopupPanel$ResizeAnimation(panel){
  Animation.call(this);
  this.curPanel = panel;
}

defineClass(432, 116, {}, PopupPanel$ResizeAnimation);
_.onComplete = function onComplete_2(){
  $onComplete(this);
}
;
_.onStart = function onStart_1(){
  this.offsetHeight_0 = $getOffsetHeight_0(this.curPanel);
  this.offsetWidth_0 = $getOffsetWidth_0(this.curPanel);
  $getElement(this.curPanel).style['overflow'] = 'hidden';
  $onUpdate_0(this, (1 + $wnd.Math.cos($intern_1)) / 2);
}
;
_.onUpdate = function onUpdate_1(progress){
  $onUpdate_0(this, progress);
}
;
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = -1;
_.showing = false;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation', 432);
function PopupPanel$ResizeAnimation$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(433, 143, {}, PopupPanel$ResizeAnimation$1);
_.run = function run_1(){
  this.this$11.showTimer = null;
  $run(this.this$11, 200, now_1(), null);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation/1', 433);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $add_9(this$static, s){
  var suffixes = this$static.suffixes;
  var subtrees = this$static.subtrees_0;
  var prefixLength = this$static.prefixLength;
  if (s == null || s.length == 0) {
    return false;
  }
  if (s.length <= prefixLength) {
    var safeKey = ':' + s;
    if (suffixes.hasOwnProperty(safeKey)) {
      return false;
    }
     else {
      this$static.size_0++;
      suffixes[safeKey] = true;
      return true;
    }
  }
   else {
    var prefix = ':' + s.slice(0, prefixLength);
    var theTree;
    if (subtrees.hasOwnProperty(prefix)) {
      theTree = subtrees[prefix];
    }
     else {
      theTree = new PrefixTree_0(prefixLength << 1);
      subtrees[prefix] = theTree;
    }
    var slice_0 = s.slice(prefixLength);
    if (theTree.add_2(slice_0)) {
      this$static.size_0++;
      return true;
    }
     else {
      return false;
    }
  }
}

function $contains(this$static, s){
  return $indexOf_0($getSuggestions(this$static, s, 1), s, 0) != -1;
}

function $getSuggestions(this$static, search, limit){
  var toReturn;
  toReturn = new ArrayList;
  search != null && limit > 0 && $suggestImpl(this$static, search, '', toReturn, limit);
  return toReturn;
}

function $suggestImpl(this$static, search, prefix, output, limit){
  var suffixes = this$static.suffixes;
  var subtrees = this$static.subtrees_0;
  var prefixLength = this$static.prefixLength;
  if (search.length > prefix.length + prefixLength) {
    var key = ':' + search.slice(prefix.length, prefix.length + prefixLength);
    if (subtrees.hasOwnProperty(key)) {
      var subtree = subtrees[key];
      var target = prefix + key.substr(1);
      subtree.suggestImpl(search, target, output, limit);
    }
  }
   else {
    for (var suffix in suffixes) {
      if (suffix.indexOf(':') != 0) {
        continue;
      }
      var target = prefix + suffix.substr(1);
      target.indexOf(search) == 0 && output.add_0(target);
      if (output.size_1() >= limit) {
        return;
      }
    }
    for (var key in subtrees) {
      if (key.indexOf(':') != 0) {
        continue;
      }
      var target = prefix + key.substr(1);
      var subtree = subtrees[key];
      if (target.indexOf(search) == 0) {
        if (subtree.size_0 <= limit - output.size_1() || subtree.size_0 == 1) {
          subtree.dump_0(output, target);
        }
         else {
          for (var suffix in subtree.suffixes) {
            suffix.indexOf(':') == 0 && output.add_0(target + suffix.substr(1));
          }
          for (var subkey in subtree.subtrees_0) {
            subkey.indexOf(':') == 0 && output.add_0(target + subkey.substr(1) + '...');
          }
        }
      }
    }
  }
}

function PrefixTree(){
  PrefixTree_1.call(this, 2);
}

function PrefixTree_0(prefixLength){
  PrefixTree_1.call(this, prefixLength);
}

function PrefixTree_1(prefixLength){
  this.prefixLength = prefixLength;
  this.size_0 = 0;
  this.subtrees_0 = {};
  this.suffixes = {};
}

function safe_0(s){
  return ':' + s;
}

function unsafe_0(s){
  return s.substr(1);
}

defineClass(123, 639, {25:1}, PrefixTree, PrefixTree_0);
_.add_0 = function add_9(s){
  return $add_9(this, castToString(s));
}
;
_.add_2 = function add_10(s){
  return $add_9(this, s);
}
;
_.contains = function contains_1(o){
  return instanceOfString(o) && $contains(this, castToString(o));
}
;
_.dump_0 = function dump_0(output, prefix){
  var s, s$iterator;
  for (s$iterator = new PrefixTree$PrefixTreeIterator(this); $nextImpl(s$iterator, true) != null;) {
    s = $next_0(s$iterator);
    output.add_0(prefix + ('' + s));
  }
}
;
_.iterator = function iterator_7(){
  return new PrefixTree$PrefixTreeIterator(this);
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.suggestImpl = function suggestImpl(search, prefix, output, limit){
  $suggestImpl(this, search, prefix, output, limit);
}
;
_.prefixLength = 0;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_PrefixTree_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PrefixTree', 123);
function $addTree(this$static, tree, prefix){
  var suffixes = [];
  for (var suffix in tree.suffixes) {
    suffix.indexOf(':') == 0 && suffixes.push(suffix);
  }
  var frame_0 = {suffixNames:suffixes, subtrees:tree.subtrees_0, prefix:prefix, index:0};
  var stack_0 = this$static.stack_0;
  stack_0.push(frame_0);
}

function $next_0(this$static){
  var toReturn;
  toReturn = $nextImpl(this$static, false);
  if (toReturn == null) {
    if ($nextImpl(this$static, true) != null) {
      throw toJs(new RuntimeException_0('nextImpl() returned null, but hasNext says otherwise'));
    }
     else {
      throw toJs(new NoSuchElementException_0);
    }
  }
  return toReturn;
}

function $nextImpl(this$static, peek){
  var stack_0 = this$static.stack_0;
  var safe = safe_0;
  var unsafe = unsafe_0;
  while (stack_0.length > 0) {
    var frame_0 = stack_0.pop();
    if (frame_0.index < frame_0.suffixNames.length) {
      var toReturn = frame_0.prefix + unsafe(frame_0.suffixNames[frame_0.index]);
      !peek && frame_0.index++;
      if (frame_0.index < frame_0.suffixNames.length) {
        stack_0.push(frame_0);
      }
       else {
        for (key in frame_0.subtrees) {
          if (key.indexOf(':') != 0) {
            continue;
          }
          var target = frame_0.prefix + unsafe(key);
          var subtree = frame_0.subtrees[key];
          this$static.addTree(subtree, target);
        }
      }
      return toReturn;
    }
     else {
      for (var key in frame_0.subtrees) {
        if (key.indexOf(':') != 0) {
          continue;
        }
        var target = frame_0.prefix + unsafe(key);
        var subtree = frame_0.subtrees[key];
        this$static.addTree(subtree, target);
      }
    }
  }
  return null;
}

function PrefixTree$PrefixTreeIterator(tree){
  this.stack_0 = [];
  $addTree(this, tree, '');
}

defineClass(199, 1, {}, PrefixTree$PrefixTreeIterator);
_.next_1 = function next_1(){
  return $next_0(this);
}
;
_.addTree = function addTree(tree, prefix){
  $addTree(this, tree, prefix);
}
;
_.hasNext_0 = function hasNext_0(){
  return $nextImpl(this, true) != null;
}
;
_.remove_2 = function remove_14(){
  throw toJs(new UnsupportedOperationException_0('PrefixTree does not support removal.  Use clear()'));
}
;
var Lcom_google_gwt_user_client_ui_PrefixTree$PrefixTreeIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PrefixTree/PrefixTreeIterator', 199);
function $onClick(this$static){
  var evt;
  !this$static.curFace && $setCurrentFace(this$static, this$static.up);
  (1 & this$static.curFace.val$faceID5) > 0 && $toggleDown(this$static);
  this$static.allowClick = true;
  evt = $createMouseEvent($doc, 'click', true, true, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  $dispatchEvent(($clinit_DOM() , this$static.element), evt);
  this$static.allowClick = false;
}

function PushButton(){
  $clinit_FocusWidget();
  ButtonBase.call(this, ($clinit_FocusPanel() , createFocusable0(($clinit_FocusImpl() , focusHandler_0)?focusHandler_0:(focusHandler_0 = $createFocusHandler()))));
  this.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this.element, 7165 | (this.element.__eventBits || 0))):(this.eventsToSink |= 7165);
  $setUpFace(this, new CustomButton$2(this, null, 'up', 0));
  ($clinit_DOM() , this.element).className = 'gwt-CustomButton';
  $clinit_Roles();
  $set(BUTTON, this.element);
  this.element.className = 'gwt-PushButton';
}

defineClass(466, 465, $intern_37, PushButton);
var Lcom_google_gwt_user_client_ui_PushButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PushButton', 466);
function RootLayoutPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
  this.layout = new Layout(($clinit_DOM() , this.element));
  this.layoutCmd = new LayoutCommand(this.layout);
  addResizeHandler(new RootLayoutPanel$1(this));
}

function get_1(){
  if (!singleton_0) {
    singleton_0 = new RootLayoutPanel;
    $add_0(($clinit_RootPanel() , get_2(null)), singleton_0);
  }
  return singleton_0;
}

defineClass(554, 553, $intern_43, RootLayoutPanel);
_.onLoad = function onLoad_2(){
  $fillParent(this.layout.parentElem);
}
;
var singleton_0;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel', 554);
function RootLayoutPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(555, 1, $intern_28, RootLayoutPanel$1);
_.onResize = function onResize_5(event_0){
  $onResize(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel/1', 555);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_15(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_2(id_0){
  $clinit_RootPanel();
  var elem, rp;
  rp = castTo($getStringValue(rootPanels, id_0), 100);
  elem = null;
  if (id_0 != null) {
    if (!(elem = $getElementById($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || ($clinit_DOM() , rp.element == elem)) {
      return rp;
    }
  }
  if ($size(rootPanels) == 0) {
    addCloseHandler(new RootPanel$2);
    $clinit_LocaleInfo();
  }
  !elem?(rp = new RootPanel$DefaultRootPanel):(rp = new RootPanel(elem));
  $putStringValue(rootPanels, id_0, rp);
  $add_12(widgetsToDetach, rp);
  return rp;
}

defineClass(100, 293, $intern_46, RootPanel);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 100);
function RootPanel$1(){
}

defineClass(295, 1, {}, RootPanel$1);
_.execute_2 = function execute_12(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 295);
function RootPanel$2(){
}

defineClass(296, 1, {216:1, 15:1}, RootPanel$2);
_.onClose = function onClose_0(closeEvent){
  detachWidgets();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 296);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, ($clinit_RootPanel() , $doc.body));
}

defineClass(294, 100, $intern_46, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 294);
function $getMaximumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?0:((scrollable.scrollWidth || 0) | 0) - (scrollable.clientWidth | 0);
}

function $getMinimumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?(scrollable.clientWidth | 0) - ((scrollable.scrollWidth || 0) | 0):0;
}

function $isRtl(scrollable){
  var computedStyle = $doc.defaultView.getComputedStyle(scrollable, null);
  return computedStyle.getPropertyValue('direction') == 'rtl';
}

function ScrollImpl(){
}

defineClass(148, 1, {}, ScrollImpl);
var impl_0;
var Lcom_google_gwt_user_client_ui_ScrollImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollImpl', 148);
function ScrollListenerCollection(){
  ArrayList.call(this);
}

defineClass(391, 18, $intern_40, ScrollListenerCollection);
var Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollListenerCollection', 391);
function deserialize_33(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_31(streamReader){
  return new ScrollListenerCollection;
}

function serialize_29(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function $getHorizontalScrollPosition(this$static){
  return $getScrollLeft(($clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumHorizontalScrollPosition_0(this$static){
  return $getMaximumHorizontalScrollPosition((!impl_0 && (impl_0 = new ScrollImpl) , $clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumVerticalScrollPosition(this$static){
  return ((($clinit_DOM() , this$static.scrollableElem).scrollHeight || 0) | 0) - (this$static.scrollableElem.clientHeight | 0);
}

function $getMinimumHorizontalScrollPosition_0(this$static){
  return $getMinimumHorizontalScrollPosition((!impl_0 && (impl_0 = new ScrollImpl) , $clinit_DOM() , this$static.scrollableElem));
}

function $getVerticalScrollPosition(this$static){
  return (($clinit_DOM() , this$static.scrollableElem).scrollTop || 0) | 0;
}

function $setHorizontalScrollPosition(this$static, position){
  $setScrollLeft(($clinit_DOM() , this$static.scrollableElem), position);
}

function $setTouchScrollingDisabled(this$static){
  var scroller, ua;
  if (this$static.touchScroller) {
    return false;
  }
  this$static.touchScroller = (scroller = (isSupported == null && (isSupported = ($clinit_Boolean() , !impl && (impl = new TouchEvent$TouchSupportDetector) , impl.isSupported && !(ua = navigator.userAgent.toLowerCase() , /android ([3-9]+)\.([0-9]+)/.exec(ua) != null)?true:false)) , $booleanValue(isSupported)?new TouchScroller:null) , !!scroller && $setTargetWidget(scroller, this$static) , scroller);
  return !this$static.touchScroller;
}

function $setVerticalScrollPosition(this$static, position){
  $setScrollTop(($clinit_DOM() , this$static.scrollableElem), position);
}

function ScrollPanel(){
  SimplePanel.call(this);
  this.scrollableElem = ($clinit_DOM() , this.element);
  this.containerElem = $doc.createElement('div');
  $appendChild(this.scrollableElem, this.containerElem);
  this.scrollableElem.style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  this.scrollableElem.style['position'] = ($clinit_Style$Position() , 'relative');
  this.containerElem.style['position'] = 'relative';
  this.scrollableElem.style['zoom'] = '1';
  this.containerElem.style['zoom'] = '1';
  $setTouchScrollingDisabled(this);
  !impl_0 && (impl_0 = new ScrollImpl);
}

defineClass(137, 74, $intern_43, ScrollPanel);
_.getContainerElement = function getContainerElement_2(){
  return $clinit_DOM() , this.containerElem;
}
;
_.onAttach = function onAttach_6(){
  $onAttach(this);
  $clinit_DOM();
  this.scrollableElem.__listener = this;
}
;
_.onDetach = function onDetach_6(){
  $clinit_DOM();
  this.scrollableElem.__listener = null;
  $onDetach(this);
}
;
_.onResize_0 = function onResize_6(){
  var child;
  child = this.widget;
  !!child && instanceOf(child, 51) && castTo(child, 51).onResize_0();
}
;
_.setHeight_0 = function setHeight_1(height){
  ($clinit_DOM() , this.element).style['height'] = height;
}
;
_.setWidth_0 = function setWidth_1(width_0){
  ($clinit_DOM() , this.element).style['width'] = width_0;
}
;
var Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollPanel', 137);
function $next_1(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw toJs(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(134, 1, {}, SimplePanel$1);
_.next_1 = function next_2(){
  return $next_1(this);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.hasElement;
}
;
_.remove_2 = function remove_15(){
  !!this.returned && this.this$01.remove(this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 134);
function $refreshSuggestions(this$static){
  var text_0;
  text_0 = $getText(this$static.box);
  if ($equals_0(text_0, this$static.currentText)) {
    return;
  }
   else {
    this$static.currentText = text_0;
  }
  text_0.length == 0?$requestDefaultSuggestions(this$static.oracle, (new SuggestOracle$Request(null, this$static.limit) , this$static.callback)):$requestSuggestions(this$static.oracle, new SuggestOracle$Request(text_0, this$static.limit), this$static.callback);
}

function $setNewSelection(this$static, curSuggestion){
  this$static.currentText = curSuggestion.replacementString;
  $setText_1(this$static, this$static.currentText);
  $hide(this$static.display_0.suggestionPopup);
}

function $setText_1(this$static, text_0){
  $setText_2(this$static.box, text_0);
}

function SuggestBox(oracle){
  SuggestBox_0.call(this, oracle, new TextBox);
}

function SuggestBox_0(oracle, box){
  SuggestBox_1.call(this, oracle, box, new SuggestBox$DefaultSuggestionDisplay);
}

function SuggestBox_1(oracle, box, suggestDisplay){
  var events;
  this.callback = new SuggestBox$1(this);
  this.suggestionCallback = new SuggestBox$2(this);
  this.box = box;
  this.display_0 = suggestDisplay;
  $initWidget(this, box);
  events = new SuggestBox$1TextBoxEvents(this);
  $addDomHandler(this.box, events, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
  $addDomHandler(this.box, events, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_4));
  $addValueChangeHandler_0(this.box, events);
  this.oracle = oracle;
  ($clinit_DOM() , this.element).className = 'gwt-SuggestBox';
}

defineClass(65, 636, {11:1, 9:1, 10:1, 8:1, 49:1, 12:1, 65:1, 7:1, 6:1}, SuggestBox);
_.limit = 20;
_.selectsFirstItem = true;
var Lcom_google_gwt_user_client_ui_SuggestBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox', 65);
function $onSuggestionsReady(this$static, response){
  if (!$isEnabled(this$static.this$01.box)) {
    return;
  }
  $showSuggestions(this$static.this$01.display_0, this$static.this$01, response.suggestions, this$static.this$01.selectsFirstItem, this$static.this$01.suggestionCallback);
}

function SuggestBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(568, 1, {}, SuggestBox$1);
var Lcom_google_gwt_user_client_ui_SuggestBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/1', 568);
function SuggestBox$1TextBoxEvents(this$0){
  this.this$01 = this$0;
}

defineClass(570, 1, {217:1, 616:1, 129:1, 15:1}, SuggestBox$1TextBoxEvents);
_.onKeyDown = function onKeyDown(event_0){
  var suggestion;
  switch (event_0.nativeEvent.keyCode | 0) {
    case 40:
      $moveSelectionDown_0(this.this$01.display_0);
      this.this$01.display_0.suggestionPopup.showing && !!event_0.nativeEvent && (event_0.nativeEvent.preventDefault() , undefined);
      break;
    case 38:
      $moveSelectionUp_0(this.this$01.display_0);
      this.this$01.display_0.suggestionPopup.showing && !!event_0.nativeEvent && (event_0.nativeEvent.preventDefault() , undefined);
      break;
    case 13:
    case 9:
      suggestion = $getCurrentSelection(this.this$01.display_0);
      !suggestion?$hide(this.this$01.display_0.suggestionPopup):$setNewSelection(this.this$01, suggestion);
  }
}
;
_.onKeyUp = function onKeyUp(event_0){
  $refreshSuggestions(this.this$01);
}
;
_.onValueChange = function onValueChange_0(event_0){
  $delegateEvent(this.this$01, event_0);
}
;
var Lcom_google_gwt_user_client_ui_SuggestBox$1TextBoxEvents_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/1TextBoxEvents', 570);
function $onSuggestionSelected(this$static, suggestion){
  $setFocus(this$static.this$01.box);
  $setNewSelection(this$static.this$01, suggestion);
}

function SuggestBox$2(this$0){
  this.this$01 = this$0;
}

defineClass(569, 1, {}, SuggestBox$2);
var Lcom_google_gwt_user_client_ui_SuggestBox$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/2', 569);
defineClass(660, 1, {});
var Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionDisplay_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/SuggestionDisplay', 660);
function $getCurrentSelection(this$static){
  var item_0;
  if (!this$static.suggestionPopup.showing) {
    return null;
  }
  item_0 = this$static.suggestionMenu.selectedItem;
  return !item_0?null:castTo(item_0, 154).suggestion;
}

function $moveSelectionDown_0(this$static){
  this$static.suggestionPopup.showing && $selectItem_0(this$static.suggestionMenu, $getSelectedItemIndex(this$static.suggestionMenu) + 1);
}

function $moveSelectionUp_0(this$static){
  this$static.suggestionPopup.showing && ($getSelectedItemIndex(this$static.suggestionMenu) == -1?$selectItem_0(this$static.suggestionMenu, this$static.suggestionMenu.items.array.length - 1):$selectItem_0(this$static.suggestionMenu, $getSelectedItemIndex(this$static.suggestionMenu) - 1));
}

function $showSuggestions(this$static, suggestBox, suggestions, isAutoSelectEnabled, callback){
  var anySuggestions, curSuggestion, curSuggestion$iterator, menuItem;
  anySuggestions = !!suggestions && suggestions.array.length > 0;
  if (!anySuggestions && this$static.hideWhenEmpty) {
    $hide(this$static.suggestionPopup);
    return;
  }
  this$static.suggestionPopup.attached && $hide(this$static.suggestionPopup);
  $clearItems(this$static.suggestionMenu);
  for (curSuggestion$iterator = new ArrayList$1(suggestions); curSuggestion$iterator.i < curSuggestion$iterator.this$01.array.length;) {
    curSuggestion = castTo($next_6(curSuggestion$iterator), 665);
    menuItem = new SuggestBox$SuggestionMenuItem(curSuggestion);
    $setScheduledCommand(menuItem, new SuggestBox$DefaultSuggestionDisplay$1(callback, curSuggestion));
    $addItem_0(this$static.suggestionMenu, menuItem);
  }
  isAutoSelectEnabled && anySuggestions && $selectItem_0(this$static.suggestionMenu, 0);
  if (this$static.lastSuggestBox != suggestBox) {
    !!this$static.lastSuggestBox && $removeAutoHidePartner(this$static.suggestionPopup, $getElement(this$static.lastSuggestBox));
    this$static.lastSuggestBox = suggestBox;
    $addAutoHidePartner(this$static.suggestionPopup, ($clinit_DOM() , suggestBox.element));
  }
  $showRelativeTo(this$static.suggestionPopup, suggestBox);
}

function SuggestBox$DefaultSuggestionDisplay(){
  var p;
  this.suggestionMenu = new SuggestBox$SuggestionMenu;
  this.suggestionPopup = (p = new DecoratedPopupPanel(true, false, 'suggestPopup') , $getStyleElement(($clinit_DOM() , $getFirstChildElement(p.element))).className = 'gwt-SuggestBoxPopup' , p.previewAllNativeEvents = true , $setAnimationType(p, ($clinit_PopupPanel$AnimationType() , ROLL_DOWN)) , p);
  $setWidget_1(this.suggestionPopup, this.suggestionMenu);
}

defineClass(565, 660, {}, SuggestBox$DefaultSuggestionDisplay);
_.hideWhenEmpty = true;
_.lastSuggestBox = null;
var Lcom_google_gwt_user_client_ui_SuggestBox$DefaultSuggestionDisplay_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/DefaultSuggestionDisplay', 565);
function $execute_0(this$static){
  $onSuggestionSelected(this$static.val$callback2, this$static.val$curSuggestion3);
}

function SuggestBox$DefaultSuggestionDisplay$1(val$callback, val$curSuggestion){
  this.val$callback2 = val$callback;
  this.val$curSuggestion3 = val$curSuggestion;
}

defineClass(567, 1, {}, SuggestBox$DefaultSuggestionDisplay$1);
_.execute_1 = function execute_13(){
  $execute_0(this);
}
;
var Lcom_google_gwt_user_client_ui_SuggestBox$DefaultSuggestionDisplay$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/DefaultSuggestionDisplay/1', 567);
function $getSelectedItemIndex(this$static){
  var selectedItem;
  selectedItem = this$static.selectedItem;
  if (selectedItem) {
    return $indexOf_0(this$static.items, selectedItem, 0);
  }
  return -1;
}

function $selectItem_0(this$static, index_0){
  var items;
  items = this$static.items;
  index_0 > -1 && index_0 < items.array.length && $itemOver(this$static, (checkCriticalElementIndex(index_0, items.array.length) , castTo(items.array[index_0], 53)), false);
}

function SuggestBox$SuggestionMenu(){
  this.allItems = new ArrayList;
  this.items = new ArrayList;
  $init_0(this, ($clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer() , $clinit_ClippedImagePrototype() , true));
  ($clinit_DOM() , this.element).className = '';
  this.focusOnHover = false;
}

defineClass(566, 208, $intern_37, SuggestBox$SuggestionMenu);
var Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionMenu_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/SuggestionMenu', 566);
function SuggestBox$SuggestionMenuItem(suggestion){
  MenuItem.call(this, suggestion.displayString);
  ($clinit_DOM() , this.element).style['whiteSpace'] = 'nowrap';
  this.element.className = 'item';
  this.suggestion = suggestion;
}

defineClass(154, 53, {8:1, 53:1, 154:1, 7:1}, SuggestBox$SuggestionMenuItem);
var Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionMenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/SuggestionMenuItem', 154);
function SuggestOracle$Request(query, limit){
  this.query = query;
  this.limit = limit;
}

defineClass(176, 1, {}, SuggestOracle$Request);
_.limit = 20;
var Lcom_google_gwt_user_client_ui_SuggestOracle$Request_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestOracle/Request', 176);
function SuggestOracle$Response(suggestions){
  this.suggestions = suggestions;
}

defineClass(177, 1, {}, SuggestOracle$Response);
var Lcom_google_gwt_user_client_ui_SuggestOracle$Response_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestOracle/Response', 177);
function TabListenerCollection(){
  ArrayList.call(this);
}

defineClass(392, 18, $intern_40, TabListenerCollection);
var Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabListenerCollection', 392);
function deserialize_34(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_32(streamReader){
  return new TabListenerCollection;
}

function serialize_30(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function TableListenerCollection(){
  ArrayList.call(this);
}

defineClass(393, 18, $intern_40, TableListenerCollection);
var Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TableListenerCollection', 393);
function deserialize_35(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_33(streamReader){
  return new TableListenerCollection;
}

function serialize_31(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function $addValueChangeHandler_0(this$static, handler){
  if (!this$static.valueChangeHandlerInitialized) {
    this$static.valueChangeHandlerInitialized = true;
    $addDomHandler(this$static, new ValueBoxBase$1(this$static), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0));
  }
  return $addHandler_0(this$static, handler, (!TYPE_19 && (TYPE_19 = new GwtEvent$Type) , TYPE_19));
}

function $getText(this$static){
  return $getPropertyString(($clinit_DOM() , this$static.element), 'value');
}

function $getValueOrThrow(this$static){
  var parseResult, text_0;
  text_0 = $getPropertyString(($clinit_DOM() , this$static.element), 'value');
  parseResult = (checkCriticalNotNull(text_0) , text_0);
  if ($equals_0('', text_0)) {
    return null;
  }
  return parseResult;
}

function $setName_0(this$static, name_0){
  ($clinit_DOM() , this$static.element)['name'] = name_0;
}

function $setReadOnly(this$static){
  ($clinit_DOM() , this$static.element)['readOnly'] = true;
  $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'readonly', true);
}

function $setText_2(this$static, text_0){
  ($clinit_DOM() , this$static.element)['value'] = text_0 != null?text_0:'';
}

function ValueBoxBase(elem){
  $clinit_FocusWidget();
  FocusWidget.call(this, elem);
  $clinit_LocaleInfo();
}

defineClass(375, 133, $intern_37);
_.onBrowserEvent = function onBrowserEvent_7(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_3(){
}
;
_.valueChangeHandlerInitialized = false;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 375);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_FocusWidget();
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase(elem){
  ValueBoxBase.call(this, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser) , elem));
}

defineClass(186, 375, $intern_37);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 186);
function $setCharacterWidth(this$static, width_0){
  $setCols(($clinit_DOM() , this$static.element), width_0);
}

function $setVisibleLines(this$static, lines){
  $setRows(($clinit_DOM() , this$static.element), lines);
}

function TextArea_0(){
  $clinit_TextBoxBase();
  TextBoxBase.call(this, $doc.createElement('textarea'));
  ($clinit_DOM() , this.element).className = 'gwt-TextArea';
}

defineClass(146, 186, $intern_37, TextArea_0);
var Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextArea', 146);
function $setVisibleLength(this$static, length_0){
  $setSize(($clinit_DOM() , this$static.element), length_0);
}

function TextBox(){
  var e;
  $clinit_TextBoxBase();
  TextBox_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e));
}

function TextBox_0(element){
  TextBoxBase.call(this, element);
  ($clinit_DOM() , this.element).className = 'gwt-TextBox';
}

defineClass(50, 186, {11:1, 9:1, 10:1, 8:1, 12:1, 50:1, 7:1, 6:1}, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 50);
function TreeListenerCollection(){
  ArrayList.call(this);
}

defineClass(394, 18, $intern_40, TreeListenerCollection);
var Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TreeListenerCollection', 394);
function deserialize_36(streamReader, instance){
  deserialize_17(streamReader, instance);
}

function instantiate_34(streamReader){
  return new TreeListenerCollection;
}

function serialize_32(streamWriter, instance){
  serialize_8(streamWriter, instance);
}

function ValueBoxBase$1(this$0){
  this.this$01 = this$0;
}

defineClass(380, 1, $intern_47, ValueBoxBase$1);
_.onChange = function onChange(event_0){
  var raw;
  fire_4(this.this$01, (raw = $getValueOrThrow(this.this$01) , raw == null?'':raw));
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase/1', 380);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_2 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_ValueBoxBase$TextAlignment();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_2, 61, 0, [CENTER_2, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(61, 5, $intern_48);
var CENTER_2, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 61, Ljava_lang_Enum_2_classLit, values_13);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(376, 61, $intern_48, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 376, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(377, 61, $intern_48, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 377, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(378, 61, $intern_48, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 378, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(379, 61, $intern_48, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 379, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function $add_10(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_DOM() , $doc.createElement('tr'));
  td = (td_0 = $doc.createElement('td') , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function $remove_7(this$static, w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove_0(this$static, w);
  removed && $removeChild(this$static.body_0, $getParentElement(td));
  return removed;
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  ($clinit_DOM() , this.table)['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

defineClass(70, 171, $intern_38, VerticalPanel);
_.remove = function remove_16(w){
  return $remove_7(this, w);
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 70);
function $add_11(this$static, w){
  $insert_1(this$static, w, this$static.size_0);
}

function $get_3(this$static){
  if (0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  return this$static.array[0];
}

function $indexOf_1(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_1(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 6, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_8(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_9(this$static, w){
  var index_0;
  index_0 = $indexOf_1(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_8(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 6, 4, 0, 1);
}

defineClass(324, 1, {}, WidgetCollection);
_.iterator = function iterator_8(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 324);
function $next_2(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_10(this$static){
  if (!this$static.currentWidget) {
    throw toJs(new IllegalStateException);
  }
  this$static.this$01.parent_0.remove(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(93, 1, {}, WidgetCollection$WidgetIterator);
_.next_1 = function next_3(){
  return $next_2(this);
}
;
_.hasNext_0 = function hasNext_2(){
  return this.index_0 < this.this$01.size_0;
}
;
_.remove_2 = function remove_17(){
  $remove_10(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 93);
function copyWidgetArray(widgets){
  var clone, i;
  clone = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 6, widgets.length, 0, 1);
  for (i = 0; i < widgets.length; i++) {
    clone[i] = widgets[i];
  }
  return clone;
}

function createWidgetIterator(container, contained){
  return new WidgetIterators$1(contained, container);
}

function $gotoNextIndex(this$static){
  ++this$static.index_0;
  while (this$static.index_0 < this$static.val$contained1.length) {
    if (this$static.val$contained1[this$static.index_0]) {
      return;
    }
    ++this$static.index_0;
  }
}

function $next_3(this$static){
  var w;
  if (this$static.index_0 >= this$static.val$contained1.length) {
    throw toJs(new NoSuchElementException);
  }
  this$static.last = this$static.index_0;
  w = this$static.val$contained1[this$static.index_0];
  $gotoNextIndex(this$static);
  return w;
}

function WidgetIterators$1(val$contained, val$container){
  this.val$contained1 = val$contained;
  this.val$container2 = val$container;
  this.widgets = this.val$contained1;
  $gotoNextIndex(this);
}

defineClass(585, 1, {}, WidgetIterators$1);
_.next_1 = function next_4(){
  return $next_3(this);
}
;
_.hasNext_0 = function hasNext_3(){
  return this.index_0 < this.val$contained1.length;
}
;
_.remove_2 = function remove_18(){
  if (this.last < 0) {
    throw toJs(new IllegalStateException);
  }
  if (!this.widgetsWasCopied) {
    this.widgets = copyWidgetArray(this.widgets);
    this.widgetsWasCopied = true;
  }
  $remove_5(this.val$container2, this.val$contained1[this.last]);
  this.last = -1;
}
;
_.index_0 = -1;
_.last = -1;
_.widgetsWasCopied = false;
var Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetIterators/1', 585);
function $clinit_ClippedImageImpl(){
  $clinit_ClippedImageImpl = emptyMethod;
  $clinit_UriUtils();
  new SafeUriString(getModuleBaseURL() + 'clear.cache.gif');
}

function $clinit_ClippedImagePrototype(){
  $clinit_ClippedImagePrototype = emptyMethod;
  $clinit_ClippedImageImpl();
}

function $clinit_FocusImpl(){
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplStandard;
  implPanel?new FocusImpl:implPanel;
}

function FocusImpl(){
}

defineClass(323, 1, {}, FocusImpl);
var implPanel;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImpl', 323);
function $createFocusHandler(){
  return function(evt){
    var div = this.parentNode;
    div.onfocus && $wnd.setTimeout(function(){
      div.focus();
    }
    , 0);
  }
  ;
}

function FocusImplStandard(){
}

function createFocusable0(focusHandler){
  $clinit_FocusImpl();
  var div = $doc.createElement('div');
  div.tabIndex = 0;
  var input_0 = $doc.createElement('input');
  input_0.type = 'text';
  input_0.tabIndex = -1;
  input_0.setAttribute('aria-hidden', 'true');
  var style = input_0.style;
  style.opacity = 0;
  style.height = '1px';
  style.width = '1px';
  style.zIndex = -1;
  style.overflow = 'hidden';
  style.position = 'absolute';
  input_0.addEventListener('focus', focusHandler, false);
  div.appendChild(input_0);
  return div;
}

defineClass(365, 323, {}, FocusImplStandard);
var focusHandler_0;
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImplStandard', 365);
function $getContents(iframe){
  try {
    if (!iframe.contentWindow || !iframe.contentWindow.document)
      return null;
    return iframe.contentWindow.document.body.innerHTML;
  }
   catch (e) {
    return null;
  }
}

function $hookEvents(iframe, form_0, listener){
  iframe && (iframe.onload = $entry(function(){
    if (!iframe.__formAction)
      return;
    listener.onFrameLoad();
  }
  ));
  form_0.onsubmit = $entry(function(){
    iframe && (iframe.__formAction = form_0.action);
    return listener.onFormSubmit();
  }
  );
}

function $submit_0(form_0, iframe){
  iframe && (iframe.__formAction = form_0.action);
  form_0.submit();
}

function $unhookEvents(iframe, form_0){
  iframe && (iframe.onload = null);
  form_0.onsubmit = null;
}

function $clinit_PopupImplMozilla(){
  $clinit_PopupImplMozilla = emptyMethod;
  isFF2Mac = isFF2Mac_0();
}

function $createElement_0(){
  var outerElem;
  outerElem = ($clinit_DOM() , $doc.createElement('div'));
  if (isFF2Mac) {
    outerElem.innerHTML = '<div><\/div>';
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new PopupImplMozilla$1(outerElem));
  }
  return outerElem;
}

function $getContainerElement_0(outerElem){
  return isFF2Mac?$getFirstChildElement(outerElem):outerElem;
}

function $getStyleElement(outerElem){
  return isFF2Mac?outerElem:$getParentElement(outerElem);
}

function $setClip(popup, rect){
  popup.style['clip'] = rect;
  popup.style['display'] = ($clinit_Style$Display() , 'none');
  popup.style['display'] = '';
}

function isFF2Mac_0(){
  function makeVersion(result){
    return parseInt(result[1]) * $intern_5 + parseInt(result[2]);
  }

  var ua = navigator.userAgent;
  if (ua.indexOf('Macintosh') != -1) {
    var result_0 = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
    if (result_0 && result_0.length == 3) {
      if (makeVersion(result_0) <= 1008) {
        return true;
      }
    }
  }
  return false;
}

var isFF2Mac = false;
function PopupImplMozilla$1(val$outerElem){
  this.val$outerElem2 = val$outerElem;
}

defineClass(470, 1, {}, PopupImplMozilla$1);
_.execute_1 = function execute_14(){
  this.val$outerElem2.style['overflow'] = ($clinit_Style$Overflow() , 'auto');
}
;
var Lcom_google_gwt_user_client_ui_impl_PopupImplMozilla$1_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'PopupImplMozilla/1', 470);
function $clinit_CalendarModel(){
  $clinit_CalendarModel = emptyMethod;
  dayOfWeekNames = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_16, 2, 7, 6, 1);
  dayOfMonthNames = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_16, 2, 32, 6, 1);
}

function $formatCurrentMonthAndYear(this$static){
  return $format(getFormat(($clinit_DateTimeFormat$PredefinedFormat() , YEAR_MONTH_ABBR)), this$static.currentMonth, null);
}

function $formatDayOfMonth(date){
  return dayOfMonthNames[date.jsdate.getDate()];
}

function $formatMonth_0(this$static, month){
  return this$static.monthOfYearNames[month];
}

function $getCurrentFirstDayOfFirstWeek(this$static){
  var d, offset, start_0, wkDayOfMonth1st;
  wkDayOfMonth1st = this$static.currentMonth.jsdate.getDay();
  start_0 = ($clinit_CalendarUtil() , $clinit_CalendarUtil() , startingDay);
  if (wkDayOfMonth1st == start_0) {
    return new Date_2(fromDouble_0(this$static.currentMonth.jsdate.getTime()));
  }
   else {
    d = new Date_2(fromDouble_0(this$static.currentMonth.jsdate.getTime()));
    offset = wkDayOfMonth1st - start_0 > 0?wkDayOfMonth1st - start_0:7 - (start_0 - wkDayOfMonth1st);
    $setDate(d, d.jsdate.getDate() + -offset);
    return d;
  }
}

function $isInCurrentMonth(this$static, date){
  return this$static.currentMonth.jsdate.getMonth() == date.jsdate.getMonth();
}

function $isMonthBeforeYear(){
  var i, monthAndYearPattern;
  monthAndYearPattern = getFormat(($clinit_DateTimeFormat$PredefinedFormat() , YEAR_MONTH_ABBR)).pattern;
  for (i = 0; i < monthAndYearPattern.length; ++i) {
    switch (checkCriticalStringElementIndex(i, monthAndYearPattern.length) , monthAndYearPattern.charCodeAt(i)) {
      case 121:
        return false;
      case 77:
      case 76:
        return true;
    }
  }
  return true;
}

function $setCurrentMonth(this$static, currentDate){
  $setYear(this$static.currentMonth, currentDate.jsdate.getFullYear() - $intern_17);
  $setMonth(this$static.currentMonth, currentDate.jsdate.getMonth());
}

function $shiftCurrentMonth(this$static, deltaMonths){
  addMonthsToDate(this$static.currentMonth, deltaMonths);
}

function CalendarModel(){
  $clinit_CalendarModel();
  var date, dayOfWeek, i, i0, i1;
  this.monthOfYearNames = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_16, 2, 12, 6, 1);
  this.currentMonth = new Date_0;
  setToFirstDayOfMonth(this.currentMonth);
  date = new Date_0;
  for (i0 = 1; i0 <= 7; i0++) {
    $setDate(date, i0);
    dayOfWeek = date.jsdate.getDay();
    dayOfWeekNames[dayOfWeek] = $format(($clinit_DateTimeFormat_0() , getFormat_0('ccccc', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), date, null);
  }
  $setMonth(date, 0);
  for (i1 = 1; i1 < 32; ++i1) {
    $setDate(date, i1);
    dayOfMonthNames[i1] = $format(($clinit_DateTimeFormat_0() , getFormat_0('d', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), date, null);
  }
  $setDate(date, 1);
  for (i = 0; i < 12; ++i) {
    $setMonth(date, i);
    this.monthOfYearNames[i] = $format(getFormat(($clinit_DateTimeFormat$PredefinedFormat() , MONTH_ABBR)), date, null);
  }
}

defineClass(431, 1, {}, CalendarModel);
var dayOfMonthNames, dayOfWeekNames;
var Lcom_google_gwt_user_datepicker_client_CalendarModel_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CalendarModel', 431);
function $clinit_CalendarUtil(){
  $clinit_CalendarUtil = emptyMethod;
  $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  firstDayOfWeekend = 6;
  lastDayOfWeekend = 0;
  startingDay = 1;
}

function addMonthsToDate(date, months){
  $clinit_CalendarUtil();
  var month, resultMonth, resultMonthCount, resultYear, year;
  if (months != 0) {
    month = date.jsdate.getMonth();
    year = date.jsdate.getFullYear() - $intern_17;
    resultMonthCount = year * 12 + month + months;
    resultYear = round_int($wnd.Math.floor(resultMonthCount / 12));
    resultMonth = resultMonthCount - resultYear * 12;
    $setMonth(date, resultMonth);
    $setYear(date, resultYear);
  }
}

function copyDate(date){
  $clinit_CalendarUtil();
  var newDate;
  if (!date) {
    return null;
  }
  newDate = new Date_0;
  $setTime(newDate, date.getTime_0());
  return newDate;
}

function getDaysBetween(start_0, finish){
  $clinit_CalendarUtil();
  var aTime, adjust, bTime;
  start_0 = copyDate(start_0);
  resetTime(start_0);
  finish = copyDate(finish);
  resetTime(finish);
  aTime = fromDouble_0(start_0.jsdate.getTime());
  bTime = fromDouble_0(finish.jsdate.getTime());
  adjust = 3600000;
  adjust = compare_1(bTime, aTime) > 0?adjust:neg_0(adjust);
  return toInt_0(div_0(add_2(sub_1(bTime, aTime), adjust), $intern_14));
}

function resetMilliseconds(msec){
  var offset;
  offset = toInt_0(mod(msec, $intern_5));
  offset < 0 && (offset += $intern_5);
  return sub_1(msec, offset);
}

function resetTime(date){
  $clinit_CalendarUtil();
  var msec;
  msec = resetMilliseconds(fromDouble_0(date.jsdate.getTime()));
  date.jsdate.setTime(toDouble_0(msec));
  date.jsdate.setHours(0);
  $fixDaylightSavings(date, 0);
  $setMinutes(date, 0);
  $setSeconds(date, 0);
}

function setToFirstDayOfMonth(date){
  $clinit_CalendarUtil();
  resetTime(date);
  $setDate(date, 1);
}

var firstDayOfWeekend = 0, lastDayOfWeekend = 0, startingDay = 0;
function $addMonths(this$static, numMonths){
  $shiftCurrentMonth(this$static.datePicker.model, numMonths);
  $refreshAll(this$static.datePicker);
}

defineClass(651, 636, $intern_41);
var Lcom_google_gwt_user_datepicker_client_DatePickerComponent_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DatePickerComponent', 651);
defineClass(653, 651, $intern_41);
var Lcom_google_gwt_user_datepicker_client_CalendarView_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CalendarView', 653);
function $getCell(this$static, i){
  return castTo($get_1(this$static.cellList, i), 75);
}

function $isActive(cell){
  return !!cell && cell.enabled;
}

function $setHighlighted(this$static, nextHighlighted){
  var oldHighlighted;
  if (nextHighlighted == this$static.highlightedCell) {
    return;
  }
  oldHighlighted = this$static.highlightedCell;
  this$static.highlightedCell = nextHighlighted;
  !!oldHighlighted && ($fireEvent_0(oldHighlighted.this$11.this$01.datePicker, new DatePicker$DateHighlightEvent) , $updateStyle(oldHighlighted));
  !!this$static.highlightedCell && $onHighlighted(this$static.highlightedCell);
}

function $setSelected(this$static, cell){
  var last;
  last = this$static.selectedCell;
  this$static.selectedCell = cell;
  !!last && $onSelected(last, false);
  !!this$static.selectedCell && $onSelected(this$static.selectedCell, true);
}

defineClass(426, 124, $intern_38);
_.onBrowserEvent = function onBrowserEvent_8(event_0){
  var cell, e, td;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 1:
      {
        cell = (td = $getEventTargetCell(this, event_0) , td?castTo($get_0(this.elementToCell, td), 75):null);
        !!cell && cell.enabled && $setSelected(this, cell);
        break;
      }

    case 32:
      {
        e = $eventGetFromElement(event_0);
        if (e) {
          cell = castTo($get_0(this.elementToCell, e), 75);
          cell == this.highlightedCell && $setHighlighted(this, null);
        }
        break;
      }

    case 16:
      {
        e = $eventGetToElement(event_0);
        if (e) {
          cell = castTo($get_0(this.elementToCell, e), 75);
          !!cell && cell.enabled && $setHighlighted(this, cell);
        }
        break;
      }

  }
}
;
_.onUnload = function onUnload_2(){
  $setHighlighted(this, null);
}
;
var Lcom_google_gwt_user_datepicker_client_CellGridImpl_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CellGridImpl', 426);
function CellGridImpl$Cell(this$0, elem, value_0){
  this.this$01 = this$0;
  this.value_0 = value_0;
  $add_2(this$0.cellList, this);
  !!elem && $setElement_0(this, ($clinit_DOM() , elem));
  $put(this$0.elementToCell, this);
  $addDomHandler(this, new CellGridImpl$Cell$1(this), ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
  $addDomHandler(this, new CellGridImpl$Cell$2(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}

function CellGridImpl$Cell_0(this$0, value_0){
  CellGridImpl$Cell.call(this, this$0, $doc.createElement('div'), value_0);
}

defineClass(75, 6, $intern_49);
_.enabled = true;
var Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CellGridImpl/Cell', 75);
function CellGridImpl$Cell$1(this$1){
  this.this$11 = this$1;
}

defineClass(429, 1, {217:1, 15:1}, CellGridImpl$Cell$1);
_.onKeyDown = function onKeyDown_0(event_0){
  ((event_0.nativeEvent.keyCode | 0) == 13 || (event_0.nativeEvent.keyCode | 0) == 32) && $isActive(this.this$11) && $setSelected(this.this$11.this$01, this.this$11);
}
;
var Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CellGridImpl/Cell/1', 429);
function CellGridImpl$Cell$2(this$1){
  this.this$11 = this$1;
}

defineClass(430, 1, $intern_50, CellGridImpl$Cell$2);
_.onClick = function onClick(event_0){
  $isActive(this.this$11) && $setSelected(this.this$11.this$01, this.this$11);
}
;
var Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell$2_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CellGridImpl/Cell/2', 430);
function $clinit_DateBox(){
  $clinit_DateBox = emptyMethod;
  DEFAULT_FORMAT = new DateBox$DefaultFormat;
}

function $parseDate(this$static, reportError){
  var text_0;
  reportError && setStyleName(($clinit_DOM() , this$static.element), 'dateBoxFormatError', false);
  text_0 = $trim($getText(this$static.box));
  return $parse_1(this$static.format, this$static, text_0, reportError);
}

function $preventDatePickerPopup(this$static){
  this$static.allowDPShow = false;
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new DateBox$1(this$static));
}

function $setValue_0(this$static, date){
  $setValue_1(this$static, copyDate(this$static.picker.value_0), date, false, true);
}

function $setValue_1(this$static, oldDate, date, fireEvents, updateText){
  !!date && $setCurrentMonth_0(this$static.picker, date);
  $setValue_2(this$static.picker, date, false);
  if (updateText) {
    setStyleName(($clinit_DOM() , this$static.element), 'dateBoxFormatError', false);
    $setText_2(this$static.box, $format_0(this$static.format, date));
  }
  fireEvents && !!TYPE_19 && oldDate != date && (!oldDate || !(!!date && eq(fromDouble_0(oldDate.jsdate.getTime()), fromDouble_0(date.jsdate.getTime())))) && $fireEvent_0(this$static, new DateChangeEvent(date));
}

function $showDatePicker(this$static){
  var current;
  current = $parseDate(this$static, false);
  !current && (current = new Date_0);
  $setCurrentMonth_0(this$static.picker, current);
  $showRelativeTo(this$static.popup, this$static);
}

function $updateDateFromTextBox(this$static){
  var parsedDate;
  parsedDate = $parseDate(this$static, true);
  !!parsedDate && $setValue_1(this$static, copyDate(this$static.picker.value_0), parsedDate, true, false);
}

function DateBox(){
  $clinit_DateBox();
  DateBox_0.call(this, new DatePicker, DEFAULT_FORMAT);
}

function DateBox_0(picker, format){
  var handler;
  this.box = new TextBox;
  this.picker = picker;
  this.popup = new PopupPanel(true);
  this.format = format;
  $addAutoHidePartner(this.popup, $getElement(this.box));
  $setWidget_0(this.popup, picker);
  $setStyleName(this.popup, 'dateBoxPopup');
  $initWidget(this, this.box);
  ($clinit_DOM() , this.element).className = 'gwt-DateBox';
  handler = new DateBox$DateBoxHandler(this);
  $addHandler_0(picker, handler, (!TYPE_19 && (TYPE_19 = new GwtEvent$Type) , TYPE_19));
  $addDomHandler(this.box, handler, ($clinit_FocusEvent() , $clinit_FocusEvent() , TYPE_2));
  $addDomHandler(this.box, handler, ($clinit_BlurEvent() , $clinit_BlurEvent() , TYPE));
  $addDomHandler(this.box, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $addDomHandler(this.box, handler, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
  $addHandler_0(this.popup, handler, TYPE_15?TYPE_15:(TYPE_15 = new GwtEvent$Type));
  $setValue_1(this, copyDate(this.picker.value_0), null, false, true);
}

defineClass(185, 636, $intern_41, DateBox);
_.allowDPShow = true;
var DEFAULT_FORMAT;
var Lcom_google_gwt_user_datepicker_client_DateBox_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DateBox', 185);
function DateBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(374, 1, {}, DateBox$1);
_.execute_1 = function execute_15(){
  this.this$01.allowDPShow = true;
}
;
var Lcom_google_gwt_user_datepicker_client_DateBox$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DateBox/1', 374);
function $normalize(this$static, date){
  var dateBox;
  dateBox = this$static.this$01;
  return $parse_1(this$static.this$01.format, dateBox, $format_0(this$static.this$01.format, date), false);
}

function DateBox$DateBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(373, 1, {618:1, 29:1, 667:1, 217:1, 216:1, 129:1, 15:1}, DateBox$DateBoxHandler);
_.onBlur = function onBlur_0(event_0){
  this.this$01.popup.showing || $updateDateFromTextBox(this.this$01);
}
;
_.onClick = function onClick_0(event_0){
  $showDatePicker(this.this$01);
}
;
_.onClose = function onClose_1(event_0){
  this.this$01.allowDPShow && $updateDateFromTextBox(this.this$01);
}
;
_.onKeyDown = function onKeyDown_1(event_0){
  switch (event_0.nativeEvent.keyCode | 0) {
    case 13:
    case 9:
      $updateDateFromTextBox(this.this$01);
    case 27:
    case 38:
      $hide(this.this$01.popup);
      break;
    case 40:
      $showDatePicker(this.this$01);
  }
}
;
_.onValueChange = function onValueChange_1(event_0){
  $setValue_1(this.this$01, $parseDate(this.this$01, false), $normalize(this, castTo(event_0.getValue(), 20)), true, true);
  $hide(this.this$01.popup);
  $preventDatePickerPopup(this.this$01);
  $setFocus(this.this$01.box);
}
;
var Lcom_google_gwt_user_datepicker_client_DateBox$DateBoxHandler_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DateBox/DateBoxHandler', 373);
function $format_0(this$static, date){
  return !date?'':$format(this$static.dateTimeFormat, date, null);
}

function $parse_1(this$static, dateBox, dateText, reportError){
  var date;
  date = null;
  try {
    dateText.length > 0 && (date = $parse_0(this$static.dateTimeFormat, dateText));
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 31)) {
      try {
        date = new Date_3(dateText);
        date = $parse_0(this$static.dateTimeFormat, $format(this$static.dateTimeFormat, date, null));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 31)) {
          reportError && setStyleName(($clinit_DOM() , dateBox.element), 'dateBoxFormatError', true);
          return null;
        }
         else 
          throw toJs($e0);
      }
    }
     else 
      throw toJs($e1);
  }
  return date;
}

function DateBox$DefaultFormat(){
  this.dateTimeFormat = getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_TIME_MEDIUM));
}

defineClass(372, 1, {}, DateBox$DefaultFormat);
var Lcom_google_gwt_user_datepicker_client_DateBox$DefaultFormat_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DateBox/DefaultFormat', 372);
function DateChangeEvent(value_0){
  ValueChangeEvent.call(this, copyDate(value_0));
}

defineClass(205, 204, {}, DateChangeEvent);
_.getValue = function getValue_0(){
  return copyDate(castTo(this.value_0, 20));
}
;
var Lcom_google_gwt_user_datepicker_client_DateChangeEvent_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DateChangeEvent', 205);
function $addStyleToDates(this$static, styleName, date){
  $setStyleName_3(this$static.styler, date, styleName, true);
  $isDateVisible(this$static, date) && $addStyleToDate(this$static.view, styleName, date);
}

function $getStyleOfDate(this$static, date){
  return $getStyleName(this$static.styler, date);
}

function $isDateVisible(this$static, date){
  var first, last, r;
  r = this$static.view;
  first = r.firstDisplayed;
  last = r.lastDisplayed;
  return !!date && ($clinit_CalendarUtil() , first.jsdate.getFullYear() - $intern_17 == date.jsdate.getFullYear() - $intern_17 && first.jsdate.getMonth() == date.jsdate.getMonth() && first.jsdate.getDate() == date.jsdate.getDate() || last.jsdate.getFullYear() - $intern_17 == date.jsdate.getFullYear() - $intern_17 && last.jsdate.getMonth() == date.jsdate.getMonth() && last.jsdate.getDate() == date.jsdate.getDate() || lt(fromDouble_0(first.jsdate.getTime()), fromDouble_0(date.jsdate.getTime())) && gt(fromDouble_0(last.jsdate.getTime()), fromDouble_0(date.jsdate.getTime())));
}

function $refreshAll(this$static){
  $refresh(this$static.view);
  $refresh_0(this$static.monthAndYearSelector);
  $isAttached(this$static) && this$static.view.lastDisplayed;
  $setAriaSelectedCell(this$static.view, this$static.value_0);
}

function $removeStyleFromDates(this$static, styleName, date){
  $setStyleName_3(this$static.styler, date, styleName, false);
  $isDateVisible(this$static, date) && $removeStyleFromDate(this$static.view, styleName, date);
}

function $setCurrentMonth_0(this$static, month){
  $setCurrentMonth(this$static.model, month);
  $refreshAll(this$static);
}

function $setStyleName_2(this$static, styleName){
  this$static.css = new DatePicker$StandardCss(styleName);
  $setClassName(($clinit_DOM() , this$static.element), styleName);
}

function $setValue_2(this$static, newValue, fireEvents){
  var oldValue;
  oldValue = this$static.value_0;
  !!oldValue && $removeStyleFromDates(this$static, this$static.css.baseName + 'Day' + 'Is' + 'Value', oldValue);
  this$static.value_0 = copyDate(newValue);
  !!this$static.value_0 && $addStyleToDates(this$static, this$static.css.baseName + 'Day' + 'Is' + 'Value', this$static.value_0);
  $setAriaSelectedCell(this$static.view, newValue);
  fireEvents && !!TYPE_19 && oldValue != newValue && (!oldValue || !(!!newValue && eq(fromDouble_0(oldValue.jsdate.getTime()), fromDouble_0(newValue.jsdate.getTime())))) && $fireEvent_0(this$static, new DateChangeEvent(newValue));
}

function DatePicker(){
  DatePicker_0.call(this, new DefaultMonthSelector, new DefaultCalendarView, new CalendarModel);
}

function DatePicker_0(monthAndYearSelector, view, model){
  var panel, yearListBox;
  this.styler = new DatePicker$DateStyler;
  this.css = ($clinit_DatePicker$StandardCss() , DEFAULT_0);
  this.model = model;
  this.monthAndYearSelector = monthAndYearSelector;
  monthAndYearSelector.datePicker = this;
  this.view = view;
  view.datePicker = this;
  $setup(view);
  monthAndYearSelector.monthBackwards = $createNavigationButton(monthAndYearSelector, '&lsaquo;', -1, monthAndYearSelector.datePicker.css.baseName + 'PreviousButton');
  monthAndYearSelector.monthForwards = $createNavigationButton(monthAndYearSelector, '&rsaquo;', 1, monthAndYearSelector.datePicker.css.baseName + 'NextButton');
  monthAndYearSelector.yearBackwards = $createNavigationButton(monthAndYearSelector, '&laquo;', -12, monthAndYearSelector.datePicker.css.baseName + 'PreviousYearButton');
  monthAndYearSelector.yearForwards = $createNavigationButton(monthAndYearSelector, '&raquo;', 12, monthAndYearSelector.datePicker.css.baseName + 'NextYearButton');
  monthAndYearSelector.monthSelect = $createMonthSelect(monthAndYearSelector);
  monthAndYearSelector.yearSelect = (yearListBox = new ListBox , $addDomHandler(yearListBox, new DefaultMonthSelector$3(monthAndYearSelector, yearListBox), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0)) , yearListBox);
  monthAndYearSelector.grid = new FlexTable;
  $setStyleName(monthAndYearSelector.grid, monthAndYearSelector.datePicker.css.baseName + 'MonthSelector');
  $setupGrid(monthAndYearSelector);
  $initWidget(monthAndYearSelector, monthAndYearSelector.grid);
  panel = new VerticalPanel;
  $initWidget(this, panel);
  $setClassName(($clinit_DOM() , panel.element), this.css.widgetName);
  $setStyleName_2(this, this.css.widgetName);
  $add_10(panel, this.monthAndYearSelector);
  $add_10(panel, this.view);
  $setCurrentMonth_0(this, new Date_0);
  $addStyleToDates(this, this.css.baseName + 'Day' + 'Is' + 'Today', new Date_0);
}

defineClass(193, 636, $intern_41, DatePicker);
_.onLoad = function onLoad_4(){
}
;
_.visibleYearCount = 21;
_.yearAndMonthDropdownVisible = false;
_.yearArrowsVisible = false;
var Lcom_google_gwt_user_datepicker_client_DatePicker_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DatePicker', 193);
function DatePicker$DateHighlightEvent(){
}

defineClass(195, 645, {}, DatePicker$DateHighlightEvent);
var Lcom_google_gwt_user_datepicker_client_DatePicker$DateHighlightEvent_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DatePicker/DateHighlightEvent', 195);
function $getStyleName(this$static, d){
  return castToString($getStringValue(this$static.info, d.jsdate.getFullYear() - $intern_17 + '/' + d.jsdate.getMonth() + '/' + d.jsdate.getDate()));
}

function $setStyleName_3(this$static, d, styleName, add_0){
  var current, key, newValue;
  styleName = ' ' + styleName + ' ';
  key = d.jsdate.getFullYear() - $intern_17 + '/' + d.jsdate.getMonth() + '/' + d.jsdate.getDate();
  current = castToString($getStringValue(this$static.info, key));
  if (add_0) {
    current == null?$putStringValue(this$static.info, key, styleName):current.indexOf(styleName) == -1 && $putStringValue(this$static.info, key, current + styleName);
  }
   else {
    if (current != null) {
      newValue = $replaceAll(current, styleName, '');
      $trim(newValue).length == 0?$removeStringValue(this$static.info, key):$putStringValue(this$static.info, key, newValue);
    }
  }
}

function DatePicker$DateStyler(){
  this.info = new HashMap;
}

defineClass(409, 1, {}, DatePicker$DateStyler);
var Lcom_google_gwt_user_datepicker_client_DatePicker$DateStyler_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DatePicker/DateStyler', 409);
function $clinit_DatePicker$StandardCss(){
  $clinit_DatePicker$StandardCss = emptyMethod;
  DEFAULT_0 = new DatePicker$StandardCss('gwt-DatePicker');
}

function DatePicker$StandardCss(widgetName){
  $clinit_DatePicker$StandardCss();
  this.widgetName = widgetName;
  this.baseName = 'datePicker';
}

defineClass(194, 1, {}, DatePicker$StandardCss);
var DEFAULT_0;
var Lcom_google_gwt_user_datepicker_client_DatePicker$StandardCss_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DatePicker/StandardCss', 194);
function $addStyleToDate(this$static, styleName, date){
  $addStyleName_0($getCell_0(this$static, date), styleName);
}

function $getCell_0(this$static, d){
  var cell, index_0;
  index_0 = getDaysBetween(this$static.firstDisplayed, d);
  if (index_0 < 0 || this$static.grid.cellList.array.length <= index_0) {
    return null;
  }
  cell = $getCell(this$static.grid, index_0);
  if (cell.value_0.jsdate.getDate() != d.jsdate.getDate()) {
    throw toJs(new IllegalStateException_0(d + ' cannot be associated with cell ' + cell + ' as it has date ' + cell.value_0));
  }
  return cell;
}

function $refresh(this$static){
  var cell, i;
  this$static.firstDisplayed = $getCurrentFirstDayOfFirstWeek(this$static.datePicker.model);
  this$static.firstDisplayed.jsdate.getDate() == 1 && addDays(this$static.firstDisplayed, -7);
  $setTime(this$static.lastDisplayed, fromDouble_0(this$static.firstDisplayed.jsdate.getTime()));
  for (i = 0; i < this$static.grid.cellList.array.length; i++) {
    i != 0 && addDays(this$static.lastDisplayed, 1);
    cell = $getCell(this$static.grid, i);
    $update_0(cell, this$static.lastDisplayed);
  }
  $setAriaSelectedCell(this$static, null);
}

function $removeStyleFromDate(this$static, styleName, date){
  $removeStyleName($getCell_0(this$static, date), styleName);
}

function $setAriaSelectedCell(this$static, date){
  var newSelectedCell;
  !!this$static.ariaSelectedCell && $setAriaSelected(this$static.ariaSelectedCell);
  newSelectedCell = date?$getCell_0(this$static, date):null;
  !!newSelectedCell && ($clinit_Roles() , $setAriaSelectedState(($clinit_DOM() , newSelectedCell.element), ($clinit_SelectedValue() , $clinit_SelectedValue() , TRUE_0)));
  this$static.ariaSelectedCell = newSelectedCell;
}

function $setup(this$static){
  var cell, column, dayIdx, formatter, i, row, shift_0, weekendEndColumn, weekendStartColumn;
  formatter = this$static.grid.cellFormatter;
  weekendStartColumn = -1;
  weekendEndColumn = -1;
  for (i = 0; i < 7; i++) {
    shift_0 = ($clinit_CalendarUtil() , $clinit_CalendarUtil() , startingDay);
    dayIdx = i + shift_0 < 7?i + shift_0:i + shift_0 - 7;
    $setText_0(this$static.grid, 0, i, ($clinit_CalendarModel() , dayOfWeekNames)[dayIdx]);
    if (dayIdx == firstDayOfWeekend || dayIdx == lastDayOfWeekend) {
      $setStyleName_1(formatter, i, this$static.datePicker.css.baseName + 'WeekendLabel');
      weekendStartColumn == -1?(weekendStartColumn = i):(weekendEndColumn = i);
    }
     else {
      $setStyleName_1(formatter, i, this$static.datePicker.css.baseName + 'WeekdayLabel');
    }
  }
  for (row = 1; row <= 6; row++) {
    for (column = 0; column < 7; column++) {
      cell = new DefaultCalendarView$CellGrid$DateCell(this$static.grid, column == weekendStartColumn || column == weekendEndColumn);
      $setWidget_2(this$static.grid, row, column, cell);
    }
  }
  $initWidget(this$static, this$static.grid);
  $setStyleName(this$static.grid, this$static.datePicker.css.baseName + 'Days');
}

function DefaultCalendarView(){
  this.grid = new DefaultCalendarView$CellGrid(this);
  this.lastDisplayed = new Date_0;
}

function addDays(date, days){
  $clinit_CalendarUtil();
  $setDate(date, date.jsdate.getDate() + days);
  resetTime(date);
}

defineClass(425, 653, $intern_41, DefaultCalendarView);
var Lcom_google_gwt_user_datepicker_client_DefaultCalendarView_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultCalendarView', 425);
function DefaultCalendarView$CellGrid(this$0){
  this.this$01 = this$0;
  Grid.call(this);
  this.elementToCell = new ElementMapperImpl;
  this.cellList = new ArrayList;
  this.tableElem['cellPadding'] = 0;
  this.tableElem['cellSpacing'] = 0;
  this.tableElem['border'] = '0';
  this.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this.element, 49 | (this.element.__eventBits || 0))):(this.eventsToSink |= 49);
  $resizeColumns(this, 7);
  $resizeRows(this, 7);
}

defineClass(427, 426, $intern_38, DefaultCalendarView$CellGrid);
var Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultCalendarView/CellGrid', 427);
function $addStyleName_0(this$static, styleName){
  $indexOf_2(this$static.dateStyle, ' ' + styleName + ' ') == -1 && (this$static.dateStyle += styleName + ' ');
  $updateStyle(this$static);
}

function $onHighlighted(this$static){
  $fireEvent_0(this$static.this$11.this$01.datePicker, new DatePicker$DateHighlightEvent);
  $updateStyle(this$static);
}

function $onSelected(this$static, selected){
  if (selected) {
    $setValue_2(this$static.this$11.this$01.datePicker, this$static.value_0, true);
    !$isInCurrentMonth(this$static.this$11.this$01.datePicker.model, this$static.value_0) && $setCurrentMonth_0(this$static.this$11.this$01.datePicker, this$static.value_0);
  }
  $updateStyle(this$static);
}

function $removeStyleName(this$static, styleName){
  this$static.dateStyle = $replace_0(this$static.dateStyle, ' ' + styleName + ' ');
  $updateStyle(this$static);
}

function $setAriaSelected(this$static){
  $clinit_Roles();
  $setAriaSelectedState(($clinit_DOM() , this$static.element), ($clinit_SelectedValue() , $clinit_SelectedValue() , FALSE_0));
}

function $update_0(this$static, current){
  var extraStyle, value_0;
  this$static.enabled = true;
  $updateStyle(this$static);
  $setTime(this$static.value_0, fromDouble_0(current.jsdate.getTime()));
  value_0 = $formatDayOfMonth(this$static.value_0);
  $setInnerText(($clinit_DOM() , this$static.element), value_0);
  this$static.dateStyle = this$static.cellStyle;
  if ($isInCurrentMonth(this$static.this$11.this$01.datePicker.model, this$static.value_0)) {
    this$static.element.tabIndex = 0;
    extraStyle = $getStyleOfDate(this$static.this$11.this$01.datePicker, current);
    extraStyle != null && (this$static.dateStyle += ' ' + extraStyle);
  }
   else {
    this$static.element.tabIndex = -1;
    this$static.dateStyle += ' ' + (this$static.this$11.this$01.datePicker.css.baseName + 'Day' + 'Is' + 'Filler');
  }
  this$static.dateStyle += ' ';
  $updateStyle(this$static);
}

function $updateStyle(this$static){
  var accum;
  accum = this$static.dateStyle;
  if (this$static == this$static.this$01.highlightedCell) {
    accum += ' ' + (this$static.this$11.this$01.datePicker.css.baseName + 'Day' + 'Is' + 'Highlighted');
    this$static == this$static.this$01.highlightedCell && this$static.this$01.selectedCell == this$static && (accum += ' ' + (this$static.this$11.this$01.datePicker.css.baseName + 'Day' + 'Is' + 'Value' + 'AndHighlighted'));
  }
  this$static.enabled || (accum += ' ' + (this$static.this$11.this$01.datePicker.css.baseName + 'Day' + 'Is' + 'Disabled'));
  $setClassName(($clinit_DOM() , this$static.element), accum);
}

function DefaultCalendarView$CellGrid$DateCell(this$1, isWeekend){
  this.this$11 = this$1;
  CellGridImpl$Cell_0.call(this, this$1, new Date_0);
  this.cellStyle = this$1.this$01.datePicker.css.baseName + 'Day';
  isWeekend && (this.cellStyle += ' ' + (this$1.this$01.datePicker.css.baseName + 'Day' + 'Is' + 'Weekend'));
  $setTabIndex(($clinit_DOM() , this.element), $isInCurrentMonth(this.this$11.this$01.datePicker.model, this.value_0)?0:-1);
  $clinit_Roles();
  $setAriaSelectedState(this.element, ($clinit_SelectedValue() , $clinit_SelectedValue() , FALSE_0));
}

defineClass(428, 75, $intern_49, DefaultCalendarView$CellGrid$DateCell);
_.removeStyleName = function removeStyleName_0(styleName){
  $removeStyleName(this, styleName);
}
;
var Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid$DateCell_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultCalendarView/CellGrid/DateCell', 428);
defineClass(652, 651, $intern_41);
var Lcom_google_gwt_user_datepicker_client_MonthSelector_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'MonthSelector', 652);
function $addCell(this$static, widget, width_0, className){
  var cell;
  cell = $getCellCount(this$static.grid, 0);
  $setWidget_2(this$static.grid, 0, cell, widget);
  $setWidth_0(this$static.grid.cellFormatter, cell, width_0);
  className != null && $setStyleName_1(this$static.grid.cellFormatter, cell, className);
  return cell;
}

function $createMonthSelect(this$static){
  var i, monthListBox;
  monthListBox = new ListBox;
  for (i = 0; i < 12; i++) {
    $addItem(monthListBox, $formatMonth_0(this$static.datePicker.model, i));
  }
  $addDomHandler(monthListBox, new DefaultMonthSelector$2(this$static, monthListBox), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0));
  return monthListBox;
}

function $createNavigationButton(this$static, label_0, noOfMonths, styleName){
  var button;
  button = new PushButton;
  $addDomHandler(button, new DefaultMonthSelector$1(this$static, noOfMonths), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $setHTML_1(button.up, label_0);
  $setClassName(($clinit_DOM() , button.element), styleName);
  return button;
}

function $refresh_0(this$static){
  var isMonthCurrentlySelectable, isYearNavigationCurrentlyEnabled;
  (isMonthCurrentlySelectable = !!this$static.monthSelect.parent_0 , isYearNavigationCurrentlyEnabled = !!this$static.yearBackwards.parent_0 , this$static.datePicker.yearAndMonthDropdownVisible != isMonthCurrentlySelectable || this$static.datePicker.yearArrowsVisible != isYearNavigationCurrentlyEnabled) && $setupGrid(this$static);
  $setDate_0(this$static, this$static.datePicker.model.currentMonth);
}

function $setDate_0(this$static, date){
  var endYear, i, month, newDate, startYear, year;
  if (this$static.datePicker.yearAndMonthDropdownVisible) {
    month = date.jsdate.getMonth();
    $setSelectedIndex_0(this$static.monthSelect, month);
    $getElement(this$static.yearSelect).options.length = 0;
    year = date.jsdate.getFullYear() - $intern_17;
    startYear = year - ((this$static.datePicker.visibleYearCount - 1) / 2 | 0);
    endYear = year + (this$static.datePicker.visibleYearCount / 2 | 0);
    newDate = new Date_0;
    for (i = startYear; i <= endYear; i++) {
      $setYear(newDate, i);
      $addItem(this$static.yearSelect, $format(getFormat(($clinit_DateTimeFormat$PredefinedFormat() , YEAR)), newDate, null));
    }
    $setSelectedIndex_0(this$static.yearSelect, year - startYear);
  }
   else {
    $setText_0(this$static.grid, 0, this$static.monthColumn, $formatCurrentMonthAndYear(this$static.datePicker.model));
  }
}

function $setupGrid(this$static){
  $removeAllRows(this$static.grid);
  $insertRow(this$static.grid, 0);
  this$static.datePicker.yearArrowsVisible && $addCell(this$static, this$static.yearBackwards, '1', null);
  $addCell(this$static, this$static.monthBackwards, '1', null);
  if (this$static.datePicker.yearAndMonthDropdownVisible) {
    if ($isMonthBeforeYear()) {
      $addCell(this$static, this$static.monthSelect, '50%', this$static.datePicker.css.baseName + 'Month');
      $addCell(this$static, this$static.yearSelect, '50%', this$static.datePicker.css.baseName + 'Year');
    }
     else {
      $addCell(this$static, this$static.yearSelect, '50%', this$static.datePicker.css.baseName + 'Year');
      $addCell(this$static, this$static.monthSelect, '50%', this$static.datePicker.css.baseName + 'Month');
    }
  }
   else {
    this$static.monthColumn = $addCell(this$static, null, '100%', this$static.datePicker.css.baseName + 'Month');
  }
  $addCell(this$static, this$static.monthForwards, '1', null);
  this$static.datePicker.yearArrowsVisible && $addCell(this$static, this$static.yearForwards, '1', null);
}

function DefaultMonthSelector(){
}

defineClass(421, 652, $intern_41, DefaultMonthSelector);
_.monthColumn = 0;
var Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultMonthSelector', 421);
function DefaultMonthSelector$1(this$0, val$noOfMonths){
  this.this$01 = this$0;
  this.val$noOfMonths2 = val$noOfMonths;
}

defineClass(422, 1, $intern_50, DefaultMonthSelector$1);
_.onClick = function onClick_1(event_0){
  $addMonths(this.this$01, this.val$noOfMonths2);
}
;
_.val$noOfMonths2 = 0;
var Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultMonthSelector/1', 422);
function DefaultMonthSelector$2(this$0, val$monthListBox){
  this.this$01 = this$0;
  this.val$monthListBox2 = val$monthListBox;
}

defineClass(423, 1, $intern_47, DefaultMonthSelector$2);
_.onChange = function onChange_0(event_0){
  var delta, newMonth, previousMonth;
  previousMonth = this.this$01.datePicker.model.currentMonth.jsdate.getMonth();
  newMonth = $getElement(this.val$monthListBox2).selectedIndex;
  delta = newMonth - previousMonth;
  $addMonths(this.this$01, delta);
}
;
var Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$2_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultMonthSelector/2', 423);
function DefaultMonthSelector$3(this$0, val$yearListBox){
  this.this$01 = this$0;
  this.val$yearListBox2 = val$yearListBox;
}

defineClass(424, 1, $intern_47, DefaultMonthSelector$3);
_.onChange = function onChange_1(event_0){
  var deltaYears;
  deltaYears = $getElement(this.val$yearListBox2).selectedIndex - ((this.this$01.datePicker.visibleYearCount - 1) / 2 | 0);
  $addMonths(this.this$01, deltaYears * 12);
}
;
var Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$3_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultMonthSelector/3', 424);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_0('gecko1_8', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(131, 14, $intern_3);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 131);
defineClass(45, 131, $intern_3);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 45);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_10('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 14)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 14):null);
}

defineClass(221, 45, $intern_3, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 221);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(303, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 303);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(304, 1, {614:1}, SimpleEventBus$2);
_.execute_1 = function execute_16(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 304);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(305, 1, {614:1}, SimpleEventBus$3);
_.execute_1 = function execute_17(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 305);
function $onClickAddMore(this$static){
  var hp, emailBox, remove;
  $add_5(this$static.contentPanel, (hp = new HorizontalPanel , hp.table['cellSpacing'] = 5 , emailBox = new TextBox , ($clinit_DOM() , emailBox.element).size = 50 , $add_2(this$static.emailBoxList, emailBox) , $add_6(hp, emailBox) , setStyleName(hp.element, 'alignCenter', true) , remove = new Anchor_1('Remove') , remove.element.href = 'javascript:;' , $add_6(hp, remove) , $addDomHandler(remove, new AddContactWidget$2(this$static, hp, emailBox), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , hp));
}

function $onClickSubmit(this$static){
  var addUserContact, list, textBox, textBox$iterator;
  addUserContact = new AddUserContact_Proxy;
  list = new ArrayList;
  for (textBox$iterator = new ArrayList$1(this$static.emailBoxList); textBox$iterator.i < textBox$iterator.this$01.array.length;) {
    textBox = castTo($next_6(textBox$iterator), 50);
    $equals_0($getPropertyString(($clinit_DOM() , textBox.element), 'value'), '') || $add_2(list, $getPropertyString(textBox.element, 'value'));
  }
  $addUserContacts(addUserContact, list, new AddContactWidget$1);
}

function AddContactWidget(){
  $initWidget(this, $build_f_HTMLPanel1(new AddContactWidget_AddContactWidgetUiBinderImpl$Widgets(this)));
  this.emailBoxList = new ArrayList;
}

defineClass(339, 636, $intern_41, AddContactWidget);
var Lcom_usp_expmgmt_client_AddContactWidget_2_classLit = createForClass('com.usp.expmgmt.client', 'AddContactWidget', 339);
function AddContactWidget$1(){
}

defineClass(340, 1, {}, AddContactWidget$1);
_.onSuccess = function onSuccess(result){
  alert_0(castToString(result));
}
;
_.onFailure = function onFailure(caught){
  alert_0(caught.getMessage());
}
;
var Lcom_usp_expmgmt_client_AddContactWidget$1_2_classLit = createForClass('com.usp.expmgmt.client', 'AddContactWidget/1', 340);
function AddContactWidget$2(this$0, val$hp, val$emailBox){
  this.this$01 = this$0;
  this.val$hp2 = val$hp;
  this.val$emailBox3 = val$emailBox;
}

defineClass(341, 1, $intern_50, AddContactWidget$2);
_.onClick = function onClick_2(event_0){
  $removeFromParent(this.val$hp2);
  $remove_3(this.this$01.emailBoxList, this.val$emailBox3);
}
;
var Lcom_usp_expmgmt_client_AddContactWidget$2_2_classLit = createForClass('com.usp.expmgmt.client', 'AddContactWidget/2', 341);
function $build_f_HTMLPanel1(this$static){
  var __attachRecord__, f_HTMLPanel1, f_Label2, contentPanel, addMoreAnchor, sb, submit, sb_0;
  f_HTMLPanel1 = new HTMLPanel($html3(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3).html);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  $get(this$static.domId0Element);
  $get(this$static.domId1Element);
  $get(this$static.domId2Element);
  $get(this$static.domId3Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (f_Label2 = new Label , $setTextOrHtml(f_Label2.directionalTextHelper, 'Add emails to your contact list.', false) , setStyleName(f_Label2.element, 'GGNBA13HI', true) , f_Label2), $get(this$static.domId0Element));
  $addAndReplaceElement(f_HTMLPanel1, (contentPanel = new FlowPanel , this$static.owner.contentPanel = contentPanel , contentPanel), $get(this$static.domId1Element));
  $addAndReplaceElement(f_HTMLPanel1, (addMoreAnchor = new Anchor_0 , $setHTML(addMoreAnchor, (sb = new StringBuilder , sb.string += 'Add Contact' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(addMoreAnchor.element, 'GGNBA13II', true) , addMoreAnchor.element.href = 'javascript:;' , $addDomHandler(addMoreAnchor, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , addMoreAnchor), $get(this$static.domId2Element));
  $addAndReplaceElement(f_HTMLPanel1, (submit = new Button , $setHTML_0(submit, (sb_0 = new StringBuilder , sb_0.string += 'Submit' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(submit.element, 'GGNBA13II', true) , setStyleName(submit.element, 'GGNBA13GI', true) , $addDomHandler(submit, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , submit), $get(this$static.domId3Element));
  return f_HTMLPanel1;
}

function AddContactWidget_AddContactWidgetUiBinderImpl$Widgets(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new AddContactWidget_AddContactWidgetUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new AddContactWidget_AddContactWidgetUiBinderImpl$Widgets$2(this);
  this.owner = owner;
  this.style_0 = ($clinit_AddContactWidget_AddContactWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_0);
  $ensureInjected(this.style_0);
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
  this.domId3 = $createUniqueId($doc);
  this.domId0Element = new LazyDomElement(this.domId0);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId2Element = new LazyDomElement(this.domId2);
  this.domId3Element = new LazyDomElement(this.domId3);
}

defineClass(415, 1, {}, AddContactWidget_AddContactWidgetUiBinderImpl$Widgets);
var Lcom_usp_expmgmt_client_AddContactWidget_1AddContactWidgetUiBinderImpl$Widgets_2_classLit = createForClass('com.usp.expmgmt.client', 'AddContactWidget_AddContactWidgetUiBinderImpl/Widgets', 415);
function AddContactWidget_AddContactWidgetUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(416, 1, $intern_50, AddContactWidget_AddContactWidgetUiBinderImpl$Widgets$1);
_.onClick = function onClick_3(event_0){
  $onClickAddMore(this.this$11.owner);
}
;
var Lcom_usp_expmgmt_client_AddContactWidget_1AddContactWidgetUiBinderImpl$Widgets$1_2_classLit = createForClass('com.usp.expmgmt.client', 'AddContactWidget_AddContactWidgetUiBinderImpl/Widgets/1', 416);
function AddContactWidget_AddContactWidgetUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(417, 1, $intern_50, AddContactWidget_AddContactWidgetUiBinderImpl$Widgets$2);
_.onClick = function onClick_4(event_0){
  $onClickSubmit(this.this$11.owner);
}
;
var Lcom_usp_expmgmt_client_AddContactWidget_1AddContactWidgetUiBinderImpl$Widgets$2_2_classLit = createForClass('com.usp.expmgmt.client', 'AddContactWidget_AddContactWidgetUiBinderImpl/Widgets/2', 417);
var style_0;
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push(toInject, '.GGNBA13HI{font-weight:bold;font-size:1.5em;padding:1em;}.GGNBA13II{padding:1em;text-align:center;}.GGNBA13GI{display:block;margin:1em;}');
    schedule();
    return true;
  }
  return false;
}

function AddContactWidget_AddContactWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(556, 1, {}, AddContactWidget_AddContactWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_usp_expmgmt_client_AddContactWidget_1AddContactWidgetUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.usp.expmgmt.client', 'AddContactWidget_AddContactWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 556);
function $clinit_AddContactWidget_AddContactWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AddContactWidget_AddContactWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_0 = new AddContactWidget_AddContactWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html3(arg0, arg1, arg2, arg3){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg1));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg2));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg3));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $init_1(this$static, json){
  var i, reports;
  reports = eval(json);
  this$static.grid = new Grid_0(reports.length + 1, 4);
  $setWidget_2(this$static.grid, 0, 0, new HTML_0('<b>Actor Name'));
  $setWidget_2(this$static.grid, 0, 1, new HTML_0('<b>Date'));
  $setWidget_2(this$static.grid, 0, 2, new HTML_0('<b>Changes Made'));
  $setWidget_2(this$static.grid, 0, 3, new HTML_0('<b>Log Message'));
  for (i = 0; i < reports.length; i++) {
    $setText_0(this$static.grid, i + 1, 0, reports[i].actorName);
    $setText_0(this$static.grid, i + 1, 1, '(' + reports[i].date + ')');
    $setWidget_2(this$static.grid, i + 1, 2, new HTML_0(reports[i].changeMessage));
    $setText_0(this$static.grid, i + 1, 3, reports[i].logMessage);
  }
  $add_3(this$static, this$static.grid);
}

function ChangeLogsPopup(){
  $clinit_PopupPanel();
  PopupPanel.call(this, true);
}

defineClass(607, 107, $intern_38, ChangeLogsPopup);
var Lcom_usp_expmgmt_client_ChangeLogsPopup_2_classLit = createForClass('com.usp.expmgmt.client', 'ChangeLogsPopup', 607);
function ContentPaneWidget(){
  $initWidget(this, $build_contentPanel(new ContentPaneWidget_ContentPaneWidgetUiBinderImpl$Widgets(this)));
}

defineClass(225, 636, $intern_41, ContentPaneWidget);
var Lcom_usp_expmgmt_client_ContentPaneWidget_2_classLit = createForClass('com.usp.expmgmt.client', 'ContentPaneWidget', 225);
function $build_contentPanel(this$static){
  var contentPanel, style;
  contentPanel = new ScrollPanel;
  $addStyleName(contentPanel, (style = ($clinit_ContentPaneWidget_ContentPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_1) , $ensureInjected_0(style) , 'GGNBA13KI'));
  this$static.owner.contentPanel = contentPanel;
  return contentPanel;
}

function ContentPaneWidget_ContentPaneWidgetUiBinderImpl$Widgets(owner){
  var style;
  this.owner = owner;
  style = ($clinit_ContentPaneWidget_ContentPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_1);
  $ensureInjected_0(style);
}

defineClass(328, 1, {}, ContentPaneWidget_ContentPaneWidgetUiBinderImpl$Widgets);
var Lcom_usp_expmgmt_client_ContentPaneWidget_1ContentPaneWidgetUiBinderImpl$Widgets_2_classLit = createForClass('com.usp.expmgmt.client', 'ContentPaneWidget_ContentPaneWidgetUiBinderImpl/Widgets', 328);
var style_1;
function $ensureInjected_0(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push(toInject, '.GGNBA13JI{font-weight:bold;}.GGNBA13KI{border:1px SOLID red;}');
    schedule();
    return true;
  }
  return false;
}

function ContentPaneWidget_ContentPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(479, 1, {}, ContentPaneWidget_ContentPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_usp_expmgmt_client_ContentPaneWidget_1ContentPaneWidgetUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.usp.expmgmt.client', 'ContentPaneWidget_ContentPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 479);
function $clinit_ContentPaneWidget_ContentPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_ContentPaneWidget_ContentPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_1 = new ContentPaneWidget_ContentPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $handleOkClick(this$static){
  var service;
  $hide_0(this$static, false);
  service = new ExpenseReportSaver_Proxy;
  $delete(service, this$static.requestString, new DeleteExpenseReportConfirmPopup$1(this$static));
}

function $setRequestString(this$static, requestString){
  this$static.requestString = requestString;
}

function $setWidgetTobeRemoved(this$static, widget){
  this$static.widgetToBeRemoved = widget;
}

function DeleteExpenseReportConfirmPopup(){
  $clinit_PopupPanel();
  DialogBox.call(this, new DialogBox$CaptionImpl);
  $setWidget_1(this, $build_f_FlowPanel1(new DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl$Widgets(this)));
  ($clinit_DOM() , this.element).style['zIndex'] = '999';
  $setText(this.caption, 'Delete Expense Report');
}

defineClass(597, 127, $intern_38, DeleteExpenseReportConfirmPopup);
var Lcom_usp_expmgmt_client_DeleteExpenseReportConfirmPopup_2_classLit = createForClass('com.usp.expmgmt.client', 'DeleteExpenseReportConfirmPopup', 597);
function $onSuccess(this$static){
  var w;
  w = this$static.this$01.widgetToBeRemoved.parent_0;
  $removeFromParent(this$static.this$01.widgetToBeRemoved);
  $removeFromParent(w);
}

function DeleteExpenseReportConfirmPopup$1(this$0){
  this.this$01 = this$0;
}

defineClass(598, 1, {}, DeleteExpenseReportConfirmPopup$1);
_.onSuccess = function onSuccess_0(result){
  var lastArg;
  $onSuccess((lastArg = this , castToString(result) , lastArg));
}
;
_.onFailure = function onFailure_0(caught){
  alert_0(caught.getMessage());
}
;
var Lcom_usp_expmgmt_client_DeleteExpenseReportConfirmPopup$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DeleteExpenseReportConfirmPopup/1', 598);
function $build_f_FlowPanel1(this$static){
  var f_FlowPanel1, f_VerticalPanel2, f_Label3, f_Label4, f_HorizontalPanel5, okButton, cancelButton, sb, sb_0;
  f_FlowPanel1 = new FlowPanel;
  $add_5(f_FlowPanel1, (f_VerticalPanel2 = new VerticalPanel , $add_10(f_VerticalPanel2, (f_Label3 = new Label , $setTextOrHtml(f_Label3.directionalTextHelper, 'Do you want to delete this expense report?', false) , setStyleName(($clinit_DOM() , f_Label3.element), 'GGNBA13FJ', true) , f_Label3)) , $add_10(f_VerticalPanel2, (f_Label4 = new Label , $setTextOrHtml(f_Label4.directionalTextHelper, "Undeletion can't be done. All the logs related to this expense will be deleted.", false) , setStyleName(f_Label4.element, 'GGNBA13DJ', true) , f_Label4)) , $add_10(f_VerticalPanel2, (f_HorizontalPanel5 = new HorizontalPanel , $add_6(f_HorizontalPanel5, (okButton = new Button , $setHTML_0(okButton, (sb_0 = new StringBuilder , sb_0.string += 'Yes, Delete this expense report' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , okButton.element.className = 'GGNBA13FJ' , $addDomHandler(okButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , okButton)) , $add_6(f_HorizontalPanel5, (cancelButton = new Button , $setHTML_0(cancelButton, (sb = new StringBuilder , sb.string += 'Cancel' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , cancelButton.element.className = 'GGNBA13FJ' , $addDomHandler(cancelButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , cancelButton)) , setStyleName(f_HorizontalPanel5.element, 'GGNBA13EJ', true) , f_HorizontalPanel5)) , f_VerticalPanel2.table['cellSpacing'] = 40 , undefined , f_VerticalPanel2));
  return f_FlowPanel1;
}

function DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl$Widgets(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl$Widgets$2(this);
  this.owner = owner;
  this.style_0 = ($clinit_DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_2);
  $ensureInjected_1(this.style_0);
}

defineClass(603, 1, {}, DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl$Widgets);
var Lcom_usp_expmgmt_client_DeleteExpenseReportConfirmPopup_1ConfirmPopupUiBinderImpl$Widgets_2_classLit = createForClass('com.usp.expmgmt.client', 'DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl/Widgets', 603);
function DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(604, 1, $intern_50, DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl$Widgets$1);
_.onClick = function onClick_5(event_0){
  $handleOkClick(this.this$11.owner);
}
;
var Lcom_usp_expmgmt_client_DeleteExpenseReportConfirmPopup_1ConfirmPopupUiBinderImpl$Widgets$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl/Widgets/1', 604);
function DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(605, 1, $intern_50, DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl$Widgets$2);
_.onClick = function onClick_6(event_0){
  $hide_0(this.this$11.owner, false);
}
;
var Lcom_usp_expmgmt_client_DeleteExpenseReportConfirmPopup_1ConfirmPopupUiBinderImpl$Widgets$2_2_classLit = createForClass('com.usp.expmgmt.client', 'DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl/Widgets/2', 605);
var style_2;
function $ensureInjected_1(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push(toInject, '.GGNBA13FJ{font-weight:bold;font-size:20px;}.GGNBA13GJ{background-color:#aaf;}.GGNBA13EJ{width:500px;}.GGNBA13DJ{font-size:20px;color:#f00;}');
    schedule();
    return true;
  }
  return false;
}

function DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(613, 1, {}, DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_usp_expmgmt_client_DeleteExpenseReportConfirmPopup_1ConfirmPopupUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 613);
function $clinit_DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_2 = new DeleteExpenseReportConfirmPopup_ConfirmPopupUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $addToGrid(this$static, email, amount, row){
  var amountBox;
  amountBox = new TextBox;
  $setText_2(amountBox, amount == null?'null':'' + (checkCriticalNotNull(amount) , amount));
  $setWidget_2(this$static.grid, row, 0, new Label_1(email));
  $setWidget_2(this$static.grid, row, 1, amountBox);
}

function $getAnchor(this$static, value_0){
  var anchor;
  anchor = new Anchor_1(value_0);
  $setName(($clinit_DOM() , anchor.element), value_0);
  $addDomHandler(anchor, new DisplayExpenseReport$AnchorClickHandler(anchor, this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  return anchor;
}

function $getJson(this$static){
  var json, list;
  list = $listToString(this$static);
  json = '{"ownerEmail":"' + this$static.report.ownerEmail + '",' + '"description":"' + this$static.report.description + '",' + '"logMessage":"' + $getText(this$static.logMessage_0) + '",' + '"date":"' + this$static.report.date + '",' + '"encodedKey":"' + this$static.report.encodedKey + '",' + '"emailList":' + list[0] + ',' + '"amountList":' + list[1] + '}';
  return json;
}

function $init_2(this$static, json){
  var hp, i;
  $removeAll(this$static);
  this$static.report = eval('(' + json + ')');
  hp = new HorizontalPanel;
  $add_6(hp, new HTML_0('<pre><b>OwnerEmail: ' + this$static.report.ownerEmail + '             ' + this$static.report.date + '<\/pre'));
  $add_10(this$static, hp);
  this$static.grid = new Grid_0(this$static.report.emailList.length + 2, 2);
  for (i = 0; i < this$static.report.emailList.length; i++) {
    $addToGrid(this$static, this$static.report.emailList[i], this$static.report.amountList[i], i);
  }
  if (this$static.type_0 == 0) {
    $setWidget_2(this$static.grid, this$static.report.emailList.length, 0, new HTML_0('LogMessage'));
    $setWidget_2(this$static.grid, this$static.report.emailList.length, 1, this$static.logMessage_0);
    $setWidget_2(this$static.grid, this$static.report.emailList.length + 1, 0, $getAnchor(this$static, 'Delete'));
    $setWidget_2(this$static.grid, this$static.report.emailList.length + 1, 1, $getAnchor(this$static, 'Save'));
    $setAlignment(this$static.grid.cellFormatter, this$static.report.emailList.length + 1, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT), ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  }
  $add_10(this$static, this$static.grid);
  $add_10(this$static, this$static.showLogAnchor);
}

function $listToString(this$static){
  var amountString, emailString, i, result;
  emailString = '[';
  amountString = '[';
  for (i = 0; i < this$static.grid.numRows - 2; i++) {
    emailString = emailString + '"' + $getTextOrHtml(castTo($getWidget(this$static.grid, i, 0), 44).directionalTextHelper) + '",';
    amountString = amountString + ('' + $getText(castTo($getWidget(this$static.grid, i, 1), 50))) + ',';
  }
  emailString = $substring_0(emailString, 0, emailString.length - 1);
  emailString = emailString + ']';
  amountString = $substring_0(amountString, 0, amountString.length - 1);
  amountString = amountString + ']';
  result = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_16, 2, 2, 6, 1);
  result[0] = emailString;
  result[1] = amountString;
  return result;
}

function $removeAll(this$static){
  while (this$static.children.size_0 != 0) {
    $remove_7(this$static, $get_3(this$static.children));
  }
}

function DisplayExpenseReport(type_0){
  VerticalPanel.call(this);
  this.logMessage_0 = new TextArea_0;
  this.showLogAnchor = new Anchor_1('Show Logs');
  $setVisibleLines(this.logMessage_0, 2);
  $setCharacterWidth(this.logMessage_0, 30);
  this.type_0 = type_0;
  $addDomHandler(this.showLogAnchor, new DisplayExpenseReport$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}

defineClass(592, 70, $intern_38, DisplayExpenseReport);
_.type_0 = 0;
var Lcom_usp_expmgmt_client_DisplayExpenseReport_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayExpenseReport', 592);
function DisplayExpenseReport$1(this$0){
  this.this$01 = this$0;
  this.logRetriver = new ChangeLogRetriever_Proxy;
}

defineClass(595, 1, $intern_50, DisplayExpenseReport$1);
_.onClick = function onClick_7(event_0){
  var callback;
  callback = new DisplayExpenseReport$1$1(this);
  $getChangeLogsAsJson(this.logRetriver, this.this$01.report.encodedKey, callback);
}
;
var Lcom_usp_expmgmt_client_DisplayExpenseReport$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayExpenseReport/1', 595);
function $onSuccess_0(this$static, json){
  var pop_0;
  pop_0 = new ChangeLogsPopup;
  $init_1(pop_0, json);
  pop_0.isAnimationEnabled = true;
  $setPopupPosition(pop_0, $getAbsoluteLeft_0(this$static.this$11.this$01.showLogAnchor) + $getOffsetWidth(this$static.this$11.this$01.showLogAnchor), $getAbsoluteTop_0(this$static.this$11.this$01.showLogAnchor) + $getOffsetHeight(this$static.this$11.this$01.showLogAnchor));
  $show(pop_0);
}

function DisplayExpenseReport$1$1(this$1){
  this.this$11 = this$1;
}

defineClass(596, 1, {}, DisplayExpenseReport$1$1);
_.onSuccess = function onSuccess_1(json){
  $onSuccess_0(this, castToString(json));
}
;
_.onFailure = function onFailure_1(caught){
  alert_0(caught.getMessage());
}
;
var Lcom_usp_expmgmt_client_DisplayExpenseReport$1$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayExpenseReport/1/1', 596);
function $clinit_DisplayExpenseReport$AnchorClickHandler(){
  $clinit_DisplayExpenseReport$AnchorClickHandler = emptyMethod;
  service_0 = new ExpenseReportSaver_Proxy;
}

function DisplayExpenseReport$AnchorClickHandler(uiObject, popup){
  $clinit_DisplayExpenseReport$AnchorClickHandler();
  this.callback = new DisplayExpenseReport$AnchorClickHandler$1(this);
  this.uiObject = uiObject;
  this.popup = popup;
  this.deleteExpenseReportConfirm = new DeleteExpenseReportConfirmPopup;
}

defineClass(593, 1, $intern_50, DisplayExpenseReport$AnchorClickHandler);
_.onClick = function onClick_8(event_0){
  $setEnabled(this.uiObject, false);
  if ($equals_0($getElement(this.uiObject).name, 'Save')) {
    $save(service_0, $getJson(this.popup), this.callback);
  }
   else if ($equals_0($getElement(this.uiObject).name, 'Delete')) {
    $setRequestString(this.deleteExpenseReportConfirm, $getJson(this.popup));
    $setWidgetTobeRemoved(this.deleteExpenseReportConfirm, this.popup);
    $center(this.deleteExpenseReportConfirm);
  }
}
;
var service_0;
var Lcom_usp_expmgmt_client_DisplayExpenseReport$AnchorClickHandler_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayExpenseReport/AnchorClickHandler', 593);
function $onSuccess_1(this$static, json){
  $setEnabled(this$static.this$11.uiObject, true);
  $wnd.alert(json);
}

function DisplayExpenseReport$AnchorClickHandler$1(this$1){
  this.this$11 = this$1;
}

defineClass(594, 1, {}, DisplayExpenseReport$AnchorClickHandler$1);
_.onSuccess = function onSuccess_2(json){
  $onSuccess_1(this, castToString(json));
}
;
_.onFailure = function onFailure_2(caught){
  alert_0(caught.getMessage());
  $setEnabled(this.this$11.uiObject, true);
}
;
var Lcom_usp_expmgmt_client_DisplayExpenseReport$AnchorClickHandler$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayExpenseReport/AnchorClickHandler/1', 594);
function $init_3(this$static, json){
  var i, userAndAmountArray, showTab;
  !!this$static.widget && $remove_4(this$static, this$static.widget);
  $add_3(this$static, this$static.flexTable);
  $removeAllRows(this$static.flexTable);
  userAndAmountArray = eval(json);
  for (i = 0; i < userAndAmountArray.length; i++) {
    $insertRow(this$static.flexTable, $getRowCount(this$static.flexTable));
    $setWidget_2(this$static.flexTable, $getRowCount(this$static.flexTable) - 1, 0, new HTML_0(userAndAmountArray[i].email));
    showTab = new Button_0('Show');
    this$static.type_0 == 0?'Show All Claim in Detail'.length == 0?(($clinit_DOM() , showTab.element).removeAttribute('title') , undefined):(($clinit_DOM() , showTab.element).setAttribute('title', 'Show All Claim in Detail') , undefined):this$static.type_0 == 1?'Show All Debts in Detail'.length == 0?(($clinit_DOM() , showTab.element).removeAttribute('title') , undefined):(($clinit_DOM() , showTab.element).setAttribute('title', 'Show All Debts in Detail') , undefined):this$static.type_0 == 2 && (($clinit_DOM() , showTab.element).textContent = 'Poke' , undefined);
    $addDomHandler(showTab, new DisplayTransactionsPanel$ShowClickHandler(this$static, userAndAmountArray[i]), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
    $setText_0(this$static.flexTable, $getRowCount(this$static.flexTable) - 1, 1, valueOf_4(userAndAmountArray[i].amount));
    $setWidget_2(this$static.flexTable, $getRowCount(this$static.flexTable) - 1, 2, showTab);
  }
}

function $removeAll_0(this$static){
  !!this$static.widget && $remove_4(this$static, this$static.widget);
}

function $setOwnerEmail(this$static, ownerEmail){
  this$static.ownerEmail_0 = ownerEmail;
}

function DisplayTransactionsPanel(type_0){
  ScrollPanel.call(this);
  this.flexTable = new FlexTable;
  this.type_0 = type_0;
  this.flexTable.tableElem['cellSpacing'] = 5;
  this.flexTable.tableElem['cellPadding'] = 2;
  this.reportList = new DisplayUserExpenseReportList(type_0);
  $addDomHandler(this.flexTable, new DisplayTransactionsPanel$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}

defineClass(142, 137, $intern_43, DisplayTransactionsPanel);
_.type_0 = 0;
var Lcom_usp_expmgmt_client_DisplayTransactionsPanel_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayTransactionsPanel', 142);
function DisplayTransactionsPanel$1(this$0){
  this.this$01 = this$0;
  new UserExpenseReportRetriever_Proxy;
}

defineClass(334, 1, $intern_50, DisplayTransactionsPanel$1);
_.onClick = function onClick_9(event_0){
  var anchor, cell, col, row, service, userEmail;
  cell = $getCellForEvent(this.this$01.flexTable, event_0);
  col = cell.cellIndex_0;
  row = cell.rowIndex;
  if (col != 3) {
    return;
  }
  anchor = castTo($getWidget(this.this$01.flexTable, row, 3), 30);
  userEmail = ($clinit_DOM() , anchor.element).name;
  service = new ClearClaimsForX_Proxy;
  if (!$wnd.confirm('Click Ok to clear all the claims for ' + userEmail)) {
    return;
  }
  $clearClaims(service, userEmail, new DisplayTransactionsPanel$1$1(this, row));
}
;
var Lcom_usp_expmgmt_client_DisplayTransactionsPanel$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayTransactionsPanel/1', 334);
function $onSuccess_2(this$static, result){
  $wnd.alert(result);
  $removeRow(this$static.this$11.this$01.flexTable, this$static.val$row2);
}

function DisplayTransactionsPanel$1$1(this$1, val$row){
  this.this$11 = this$1;
  this.val$row2 = val$row;
}

defineClass(335, 1, {}, DisplayTransactionsPanel$1$1);
_.onSuccess = function onSuccess_3(result){
  $onSuccess_2(this, castToString(result));
}
;
_.onFailure = function onFailure_3(caught){
  alert_0(caught.getMessage());
}
;
_.val$row2 = 0;
var Lcom_usp_expmgmt_client_DisplayTransactionsPanel$1$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayTransactionsPanel/1/1', 335);
function $sendReminderEmail(userAndAmount){
  var data_0, service;
  service = new SendReminderEmailService_Proxy;
  data_0 = new ReminderEmailData;
  $setAmount(data_0, valueOf_4(userAndAmount.amount));
  $setEmailTo(data_0, userAndAmount.email);
  $sendEmail(service, data_0, new DisplayTransactionsPanel$ShowClickHandler$2(userAndAmount));
}

function DisplayTransactionsPanel$ShowClickHandler(this$0, userAndAmount){
  this.this$01 = this$0;
  this.service = new UserExpenseReportRetriever_Proxy;
  this.callback = new DisplayTransactionsPanel$ShowClickHandler$1(this);
  this.userAndAmount = userAndAmount;
}

defineClass(331, 1, $intern_50, DisplayTransactionsPanel$ShowClickHandler);
_.onClick = function onClick_10(event_0){
  this.this$01.type_0 == 0?$getUserExpenseReportsAsJson(this.service, this.this$01.ownerEmail_0, this.userAndAmount.email, this.callback):this.this$01.type_0 == 1?$getUserExpenseReportsAsJson(this.service, this.userAndAmount.email, this.this$01.ownerEmail_0, this.callback):this.this$01.type_0 == 2 && $sendReminderEmail(this.userAndAmount);
}
;
var Lcom_usp_expmgmt_client_DisplayTransactionsPanel$ShowClickHandler_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayTransactionsPanel/ShowClickHandler', 331);
function $onSuccess_3(this$static, json){
  var header;
  header = '';
  this$static.this$11.this$01.type_0 == 0?(header = 'Claims for ' + this$static.this$11.userAndAmount.email):this$static.this$11.this$01.type_0 == 1 && (header = 'Debts for ' + this$static.this$11.userAndAmount.email);
  $init_4(this$static.this$11.this$01.reportList, json, header);
  $removeAll_0(this$static.this$11.this$01);
  $add_3(this$static.this$11.this$01, this$static.this$11.this$01.reportList);
}

function DisplayTransactionsPanel$ShowClickHandler$1(this$1){
  this.this$11 = this$1;
}

defineClass(332, 1, {}, DisplayTransactionsPanel$ShowClickHandler$1);
_.onSuccess = function onSuccess_4(json){
  $onSuccess_3(this, castToString(json));
}
;
_.onFailure = function onFailure_4(caught){
  replace_0('/logoutURL');
}
;
var Lcom_usp_expmgmt_client_DisplayTransactionsPanel$ShowClickHandler$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayTransactionsPanel/ShowClickHandler/1', 332);
function DisplayTransactionsPanel$ShowClickHandler$2(val$userAndAmount){
  this.val$userAndAmount2 = val$userAndAmount;
}

defineClass(333, 1, {}, DisplayTransactionsPanel$ShowClickHandler$2);
_.onSuccess = function onSuccess_5(result){
  var lastArg;
  alert_0('Poked ' + (lastArg = this , throwClassCastExceptionUnlessNull(result) , lastArg).val$userAndAmount2.email);
}
;
_.onFailure = function onFailure_5(caught){
  $wnd.alert('Poking failed : ' + caught);
}
;
var Lcom_usp_expmgmt_client_DisplayTransactionsPanel$ShowClickHandler$2_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayTransactionsPanel/ShowClickHandler/2', 333);
function $init_4(this$static, json, header){
  var i, reports, description, panel;
  $removeAll_1(this$static);
  this$static.header = header;
  $add_10(this$static, new HTML_0('<b><h3>' + this$static.header));
  reports = eval(json);
  for (i = 0; i < reports.length; i++) {
    $add_10(this$static, (description = reports[i].description , $equals_0(description, '') && (description = reports[i].date) , panel = new DisclosurePanel_0(description + '........' + reports[i].amount) , 'Show in detail'.length == 0?(($clinit_DOM() , panel.element).removeAttribute('title') , undefined):(($clinit_DOM() , panel.element).setAttribute('title', 'Show in detail') , undefined) , $addHandler_0(panel, new DisplayUserExpenseReportList$1(this$static, reports[i], panel), (!TYPE_17 && (TYPE_17 = new GwtEvent$Type) , TYPE_17)) , panel));
  }
}

function $removeAll_1(this$static){
  while (this$static.children.size_0 != 0) {
    $remove_7(this$static, $get_3(this$static.children));
  }
}

function DisplayUserExpenseReportList(type_0){
  VerticalPanel.call(this);
  this.type_0 = type_0;
}

defineClass(369, 70, $intern_38, DisplayUserExpenseReportList);
_.type_0 = 0;
var Lcom_usp_expmgmt_client_DisplayUserExpenseReportList_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayUserExpenseReportList', 369);
function DisplayUserExpenseReportList$1(this$0, val$report, val$panel){
  this.this$01 = this$0;
  this.val$report2 = val$report;
  this.val$panel3 = val$panel;
  this.service = new ExpenseReportRetriever_Proxy;
}

defineClass(370, 1, {617:1, 15:1}, DisplayUserExpenseReportList$1);
_.onOpen = function onOpen_0(event_0){
  $getExpenseReportAsJson(this.service, this.val$report2.key, new DisplayUserExpenseReportList$1$1(this, this.val$panel3));
}
;
var Lcom_usp_expmgmt_client_DisplayUserExpenseReportList$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayUserExpenseReportList/1', 370);
function $onSuccess_4(this$static, json){
  var pop_0;
  $setContent(this$static.val$panel2, null);
  pop_0 = new DisplayExpenseReport(this$static.this$11.this$01.type_0);
  $init_2(pop_0, json);
  $add_4(this$static.val$panel2, pop_0);
}

function DisplayUserExpenseReportList$1$1(this$1, val$panel){
  this.this$11 = this$1;
  this.val$panel2 = val$panel;
}

defineClass(371, 1, {}, DisplayUserExpenseReportList$1$1);
_.onSuccess = function onSuccess_6(json){
  $onSuccess_4(this, castToString(json));
}
;
_.onFailure = function onFailure_6(caught){
  alert_0(caught.getMessage());
}
;
var Lcom_usp_expmgmt_client_DisplayUserExpenseReportList$1$1_2_classLit = createForClass('com.usp.expmgmt.client', 'DisplayUserExpenseReportList/1/1', 371);
function $checkAmount(box){
  var am;
  try {
    am = __parseAndValidateDouble($getPropertyString(($clinit_DOM() , box.element), 'value'));
    if ((checkCriticalNotNull(am) , am) < 0.1) {
      box.element.style['background-color'] = 'red';
      return false;
    }
    box.element.style['background-color'] = 'white';
    return true;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      ($clinit_DOM() , box.element).style['background-color'] = 'red';
      return false;
    }
     else 
      throw toJs($e0);
  }
}

function $checkEmail(box){
  var begin, end, str, reg1, reg2;
  str = $getText(box.box);
  if (str.indexOf('<') != -1) {
    begin = str.indexOf('<');
    end = str.indexOf('>');
    str = str.substr(begin + 1, end - (begin + 1));
  }
  if (reg1 = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/ , reg2 = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/ , !reg1.test(str) && reg2.test(str)) {
    $setText_2(box.box, str);
    ($clinit_DOM() , box.element).style['background-color'] = 'white';
    return true;
  }
   else {
    ($clinit_DOM() , box.element).style['background-color'] = 'red';
    return false;
  }
}

function $distributeTotal(this$static){
  var box, box$iterator, tamount;
  try {
    tamount = __parseAndValidateDouble($getText(this$static.totalAmount));
    tamount = (checkCriticalNotNull(tamount) , tamount) / this$static.amountBoxList.array.length;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      return;
    }
     else 
      throw toJs($e0);
  }
  for (box$iterator = new ArrayList$1(this$static.amountBoxList); box$iterator.i < box$iterator.this$01.array.length;) {
    box = castTo($next_6(box$iterator), 50);
    $setText_2(box, '' + (checkCriticalNotNull(tamount) , tamount));
  }
}

function $getEmailAndAmount(this$static, userEmail){
  var amount, box, hp, remove;
  box = new SuggestBox(this$static.oracle);
  $add_2(this$static.textBoxList, box);
  ($clinit_DOM() , box.element).style['width'] = '200px';
  amount = new TextBox;
  $setName_0(box.box, 'emailArray');
  $setText_2(box.box, userEmail);
  $addValueChangeHandler_0(box.box, new ExpenseForm$6(box));
  amount.element['name'] = 'amountArray';
  amount.element['value'] = '0';
  $add_2(this$static.amountBoxList, amount);
  $addValueChangeHandler_0(amount, new ExpenseForm$7(amount));
  hp = new HorizontalPanel;
  $add_6(hp, box);
  hp.table['cellSpacing'] = 5;
  $add_6(hp, amount);
  remove = new Anchor_1(' Remove');
  'Remove'.length == 0?(remove.element.removeAttribute('title') , undefined):(remove.element.setAttribute('title', 'Remove') , undefined);
  $add_6(hp, remove);
  $addDomHandler(remove, new ExpenseForm$8(this$static, hp, box, amount), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  return hp;
}

function $init_5(this$static, email){
  var hp, hpForTotal;
  $setText_2(this$static.ownerEmail_0, email);
  $setReadOnly(this$static.ownerEmail_0);
  $setVisible(this$static.addMoreDetails, true);
  hp = new HorizontalPanel;
  ($clinit_DOM() , hp.element).style['width'] = '800px';
  $add_6(hp, this$static.dateBox);
  hpForTotal = new HorizontalPanel;
  $add_6(hpForTotal, new HTML_0('<b>Total Amount: '));
  $add_6(hpForTotal, this$static.totalAmount);
  $add_6(hp, hpForTotal);
  $add_6(hp, this$static.ownerEmail_0);
  $setVisible(this$static.ownerEmail_0, false);
  $add_10(this$static.verticalPanel, hp);
  $add_10(this$static.verticalPanel, new HTML_0('<b>Expense Description: '));
  $add_10(this$static.verticalPanel, this$static.descriptionText);
  $add_10(this$static.verticalPanel, this$static.addMoreDetails);
  this$static.registration = $addDomHandler(this$static.addMoreDetails, new ExpenseForm$5(this$static, email), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $setWidget(this$static, this$static.verticalPanel);
  this$static.element.action = '/save_expense';
  return this$static;
}

function $setContacts(this$static){
  var userContactfetcher;
  userContactfetcher = new GetUserContacts_Proxy;
  $getUserContacts(userContactfetcher, new ExpenseForm$9(this$static));
}

function $setOracle(this$static, oracle){
  this$static.oracle = oracle;
}

function ExpenseForm(){
  FormPanel.call(this, $doc.createElement('form'));
  this.textBoxList = new ArrayList;
  this.amountBoxList = new ArrayList;
  this.totalAmount = new TextBox;
  this.addMoreDetails = new Anchor_1('Add More Details to this Expense and Submit');
  this.checkBox = new CheckBox;
  this.sendEmailPanel = new HorizontalPanel;
  this.anchor = new Anchor_1('Add More People to this expense');
  $setTitle(this.anchor);
  this.verticalPanel = new VerticalPanel;
  this.verticalPanel.table['cellSpacing'] = 8;
  this.oracle = new MultiWordSuggestOracle;
  this.button_0 = new Button_0('Submit');
  this.dateBox = new DateBox;
  this.ownerEmail_0 = new TextBox;
  $setName_0(this.ownerEmail_0, 'ownerEmail');
  $setVisibleLength(this.ownerEmail_0, 35);
  $setValue_0(this.dateBox, new Date_0);
  $setName_0(this.dateBox.box, 'date');
  $setVisibleLength(this.dateBox.box, 30);
  this.descriptionText = new TextArea_0;
  $setCharacterWidth(this.descriptionText, 100);
  $setVisibleLines(this.descriptionText, 1);
  $setName_0(this.descriptionText, 'description');
  this.checkBox.inputElem.name = 'sendMail';
  this.checkBox.inputElem.setAttribute('value', 'set');
  $add_6(this.sendEmailPanel, new Label_1('Notify through Email: '));
  $add_6(this.sendEmailPanel, this.checkBox);
  this.sendEmailPanel.table['cellSpacing'] = 8;
  $addDomHandler(this.totalAmount, new ExpenseForm$1(this), ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_4));
  $addDomHandler(this.anchor, new ExpenseForm$2(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $addDomHandler(this.button_0, new ExpenseForm$3(this), (null , TYPE_1));
  add_8(this, new ExpenseForm$4(this));
}

defineClass(307, 69, $intern_44, ExpenseForm);
var Lcom_usp_expmgmt_client_ExpenseForm_2_classLit = createForClass('com.usp.expmgmt.client', 'ExpenseForm', 307);
function ExpenseForm$1(this$0){
  this.this$01 = this$0;
}

defineClass(308, 1, {616:1, 15:1}, ExpenseForm$1);
_.onKeyUp = function onKeyUp_0(event_0){
  $distributeTotal(this.this$01);
}
;
var Lcom_usp_expmgmt_client_ExpenseForm$1_2_classLit = createForClass('com.usp.expmgmt.client', 'ExpenseForm/1', 308);
function ExpenseForm$2(this$0){
  this.this$01 = this$0;
}

defineClass(309, 1, $intern_50, ExpenseForm$2);
_.onClick = function onClick_11(event_0){
  $add_10(this.this$01.verticalPanel, $getEmailAndAmount(this.this$01, ''));
  $add_10(this.this$01.verticalPanel, this.this$01.anchor);
  $add_10(this.this$01.verticalPanel, new HTML_0(' '));
  $add_10(this.this$01.verticalPanel, this.this$01.sendEmailPanel);
  $add_10(this.this$01.verticalPanel, this.this$01.button_0);
  $distributeTotal(this.this$01);
}
;
var Lcom_usp_expmgmt_client_ExpenseForm$2_2_classLit = createForClass('com.usp.expmgmt.client', 'ExpenseForm/2', 309);
function ExpenseForm$3(this$0){
  this.this$01 = this$0;
}

defineClass(310, 1, $intern_50, ExpenseForm$3);
_.onClick = function onClick_12(event_0){
  $setEnabled(this.this$01.button_0, false);
  $submit(this.this$01);
}
;
var Lcom_usp_expmgmt_client_ExpenseForm$3_2_classLit = createForClass('com.usp.expmgmt.client', 'ExpenseForm/3', 310);
function $checkDuplicacy(this$static){
  var i, j, length_0, parent_0;
  length_0 = this$static.this$01.textBoxList.array.length;
  for (i = 0; i < length_0; i++) {
    parent_0 = $getText(castTo($get_1(this$static.this$01.textBoxList, i), 65).box);
    for (j = i + 1; j < length_0; j++) {
      if ($equals_0(parent_0, $getText(castTo($get_1(this$static.this$01.textBoxList, j), 65).box))) {
        $wnd.alert('Duplicates :' + parent_0);
        $getElement(castTo($get_1(this$static.this$01.textBoxList, i), 65)).style['background-color'] = 'blue';
        $getElement(castTo($get_1(this$static.this$01.textBoxList, j), 65)).style['background-color'] = 'blue';
        return true;
      }
    }
  }
  return false;
}

function $onSubmit(this$static, event_0){
  var box, box$iterator, box$iterator0;
  for (box$iterator0 = new ArrayList$1(this$static.this$01.textBoxList); box$iterator0.i < box$iterator0.this$01.array.length;) {
    box = castTo($next_6(box$iterator0), 65);
    $checkEmail(box) || (event_0.cancel = true , event_0.setCancelledCalled = true);
  }
  if (event_0.cancel) {
    $wnd.alert('Invalid email');
    return;
  }
  for (box$iterator = new ArrayList$1(this$static.this$01.amountBoxList); box$iterator.i < box$iterator.this$01.array.length;) {
    box = castTo($next_6(box$iterator), 50);
    $checkAmount(box) || (event_0.cancel = true , event_0.setCancelledCalled = true);
  }
  if (event_0.cancel) {
    $wnd.alert('Invalid amount');
    return;
  }
  if ($getText(this$static.this$01.descriptionText).length > 100) {
    $wnd.alert("Description length can't be more than 100 characters");
    event_0.cancel = true;
    event_0.setCancelledCalled = true;
    return;
  }
  $checkDuplicacy(this$static) && (event_0.cancel = true , event_0.setCancelledCalled = true);
}

function $onSubmitComplete(this$static, event_0){
  $setEnabled(this$static.this$01.button_0, true);
  $setText_2(this$static.this$01.descriptionText, '');
  alert_0(event_0.resultHtml);
  while (this$static.this$01.verticalPanel.children.size_0 != 0) {
    $remove(this$static.this$01.verticalPanel);
  }
  $removeHandler(this$static.this$01.registration.real);
  this$static.this$01.textBoxList.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  this$static.this$01.amountBoxList.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
  $init_5(this$static.this$01, $getText(this$static.this$01.ownerEmail_0));
}

function ExpenseForm$4(this$0){
  this.this$01 = this$0;
}

defineClass(311, 1, {}, ExpenseForm$4);
var Lcom_usp_expmgmt_client_ExpenseForm$4_2_classLit = createForClass('com.usp.expmgmt.client', 'ExpenseForm/4', 311);
function ExpenseForm$5(this$0, val$email){
  this.this$01 = this$0;
  this.val$email2 = val$email;
}

defineClass(312, 1, $intern_50, ExpenseForm$5);
_.onClick = function onClick_13(event_0){
  $setVisible(this.this$01.addMoreDetails, false);
  $add_10(this.this$01.verticalPanel, $getEmailAndAmount(this.this$01, this.val$email2));
  $add_10(this.this$01.verticalPanel, this.this$01.anchor);
  $add_10(this.this$01.verticalPanel, new HTML_0(' '));
  $add_10(this.this$01.verticalPanel, this.this$01.sendEmailPanel);
  $add_10(this.this$01.verticalPanel, this.this$01.button_0);
  $distributeTotal(this.this$01);
}
;
var Lcom_usp_expmgmt_client_ExpenseForm$5_2_classLit = createForClass('com.usp.expmgmt.client', 'ExpenseForm/5', 312);
function ExpenseForm$6(val$box){
  this.val$box2 = val$box;
}

defineClass(313, 1, $intern_45, ExpenseForm$6);
_.onValueChange = function onValueChange_2(event_0){
  !$checkEmail(this.val$box2);
}
;
var Lcom_usp_expmgmt_client_ExpenseForm$6_2_classLit = createForClass('com.usp.expmgmt.client', 'ExpenseForm/6', 313);
function ExpenseForm$7(val$amount){
  this.val$amount2 = val$amount;
}

defineClass(314, 1, $intern_45, ExpenseForm$7);
_.onValueChange = function onValueChange_3(event_0){
  !$checkAmount(this.val$amount2);
}
;
var Lcom_usp_expmgmt_client_ExpenseForm$7_2_classLit = createForClass('com.usp.expmgmt.client', 'ExpenseForm/7', 314);
function ExpenseForm$8(this$0, val$hp, val$box, val$amount){
  this.this$01 = this$0;
  this.val$hp2 = val$hp;
  this.val$box3 = val$box;
  this.val$amount4 = val$amount;
}

defineClass(315, 1, $intern_50, ExpenseForm$8);
_.onClick = function onClick_14(event_0){
  $removeFromParent(this.val$hp2);
  $remove_3(this.this$01.textBoxList, this.val$box3);
  $remove_3(this.this$01.amountBoxList, this.val$amount4);
  $distributeTotal(this.this$01);
  if (this.this$01.amountBoxList.array.length == 0) {
    $setVisible(this.this$01.addMoreDetails, true);
    $removeFromParent(this.this$01.anchor);
    $removeFromParent(this.this$01.button_0);
  }
}
;
var Lcom_usp_expmgmt_client_ExpenseForm$8_2_classLit = createForClass('com.usp.expmgmt.client', 'ExpenseForm/8', 315);
function $onSuccess_5(this$static, result){
  $addAll_1(this$static.this$01.oracle, result);
  $setOracle(this$static.this$01, this$static.this$01.oracle);
}

function ExpenseForm$9(this$0){
  this.this$01 = this$0;
}

defineClass(316, 1, {}, ExpenseForm$9);
_.onSuccess = function onSuccess_7(result){
  $onSuccess_5(this, castTo(result, 24));
}
;
_.onFailure = function onFailure_7(caught){
  alert_0(caught.getMessage());
}
;
var Lcom_usp_expmgmt_client_ExpenseForm$9_2_classLit = createForClass('com.usp.expmgmt.client', 'ExpenseForm/9', 316);
function FeedbackForm(){
  VerticalPanel.call(this);
  this.textArea = new TextArea_0;
  this.submit_0 = new Button_0('Send');
  $add_10(this, new HTML_0('<h2>We value your suggestions....'));
  $setCharacterWidth(this.textArea, 100);
  $setVisibleLines(this.textArea, 4);
  $add_10(this, this.textArea);
  $add_10(this, this.submit_0);
  $addDomHandler(this.submit_0, new FeedbackForm$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}

defineClass(336, 70, $intern_38, FeedbackForm);
var Lcom_usp_expmgmt_client_FeedbackForm_2_classLit = createForClass('com.usp.expmgmt.client', 'FeedbackForm', 336);
function FeedbackForm$1(this$0){
  this.this$01 = this$0;
  this.saver = new FeedbackDataSaver_Proxy;
}

defineClass(337, 1, $intern_50, FeedbackForm$1);
_.onClick = function onClick_15(event_0){
  if ($equals_0($getText(this.this$01.textArea), '')) {
    return;
  }
  if ($getText(this.this$01.textArea).length > 200) {
    $wnd.alert('More than 200 characters are not allowed');
    return;
  }
  $saveFeedback(this.saver, $getText(this.this$01.textArea), new FeedbackForm$1$1(this));
}
;
var Lcom_usp_expmgmt_client_FeedbackForm$1_2_classLit = createForClass('com.usp.expmgmt.client', 'FeedbackForm/1', 337);
function $onSuccess_6(this$static, result){
  $wnd.alert(result);
  $setText_2(this$static.this$11.this$01.textArea, '');
}

function FeedbackForm$1$1(this$1){
  this.this$11 = this$1;
}

defineClass(338, 1, {}, FeedbackForm$1$1);
_.onSuccess = function onSuccess_8(result){
  $onSuccess_6(this, castToString(result));
}
;
_.onFailure = function onFailure_8(caught){
  alert_0(caught.getMessage());
}
;
var Lcom_usp_expmgmt_client_FeedbackForm$1$1_2_classLit = createForClass('com.usp.expmgmt.client', 'FeedbackForm/1/1', 338);
function $clinit_LeftPaneWidget(){
  $clinit_LeftPaneWidget = emptyMethod;
  service_1 = new ExpenseReportRetriever_Proxy;
}

function $handleClickAddContact(this$static){
  $removeClassName($getElement(this$static.currentSelection), 'selected');
  $addClassName($getElement(this$static.addContact), 'selected');
  this$static.currentSelection = this$static.addContact;
  $clear(this$static.centerContentWidget);
  $add_3(this$static.centerContentWidget, this$static.addContactWidget);
}

function $handleClickAddTransaction(this$static){
  $removeClassName($getElement(this$static.currentSelection), 'selected');
  $addClassName($getElement(this$static.addTransaction), 'selected');
  this$static.currentSelection = this$static.addTransaction;
  $clear(this$static.centerContentWidget);
  $add_3(this$static.centerContentWidget, this$static.expenseForm);
}

function $handleClickFeedback(this$static){
  $removeClassName($getElement(this$static.currentSelection), 'selected');
  $addClassName($getElement(this$static.feedback), 'selected');
  this$static.currentSelection = this$static.feedback;
  $clear(this$static.centerContentWidget);
  $add_3(this$static.centerContentWidget, this$static.feedbackForm);
}

function $handleClickHelpAndSupport(this$static){
  var html;
  $removeClassName($getElement(this$static.currentSelection), 'selected');
  $addClassName($getElement(this$static.helpAndSupport), 'selected');
  this$static.currentSelection = this$static.helpAndSupport;
  $clear(this$static.centerContentWidget);
  $add_3(this$static.centerContentWidget, (html = new HTML , $setTextOrHtml(html.directionalTextHelper, '<iframe WIDTH=990 HEIGHT=800 src="https://docs.google.com/document/pub?id=1Yiz-EKi16-9zzxzlOWJiIvB6Qwc7UjdgKIQz2AnMfi4&amp;embedded=true"><\/iframe>', true) , html));
}

function $handleClickNetPayments(this$static){
  $removeClassName($getElement(this$static.currentSelection), 'selected');
  $addClassName($getElement(this$static.netPayments), 'selected');
  this$static.currentSelection = this$static.netPayments;
  $clear(this$static.centerContentWidget);
  $add_3(this$static.centerContentWidget, new Label_1('Please wait.......'));
  $getNetPaymentAsJson(service_1, this$static.dcPanelDebts.ownerEmail_0, new LeftPaneWidget$1(this$static, this$static.dcPanelNetpays));
}

function $handleClickViewClaims(this$static){
  $removeClassName($getElement(this$static.currentSelection), 'selected');
  $addClassName($getElement(this$static.viewClaims), 'selected');
  this$static.currentSelection = this$static.viewClaims;
  $clear(this$static.centerContentWidget);
  $add_3(this$static.centerContentWidget, new Label_1('Please wait.......'));
  $getClaimsAsJson(service_1, this$static.dcPanelClaims.ownerEmail_0, new LeftPaneWidget$1(this$static, this$static.dcPanelClaims));
}

function $handleClickViewDebts(this$static){
  $removeClassName($getElement(this$static.currentSelection), 'selected');
  $addClassName($getElement(this$static.viewDebts), 'selected');
  this$static.currentSelection = this$static.viewDebts;
  $clear(this$static.centerContentWidget);
  $add_3(this$static.centerContentWidget, new Label_1('Please wait.......'));
  $getDebtsAsJson(service_1, this$static.dcPanelDebts.ownerEmail_0, new LeftPaneWidget$1(this$static, this$static.dcPanelDebts));
}

function $init_6(this$static, ownerEmail){
  $setOwnerEmail(this$static.dcPanelClaims, ownerEmail);
  $setOwnerEmail(this$static.dcPanelDebts, ownerEmail);
  $setOwnerEmail(this$static.dcPanelNetpays, ownerEmail);
  $init_5(this$static.expenseForm, ownerEmail);
  $setContacts(this$static.expenseForm);
}

function LeftPaneWidget(centerContentWidget){
  $clinit_LeftPaneWidget();
  new MultiWordSuggestOracle;
  this.dcPanelClaims = new DisplayTransactionsPanel(0);
  this.dcPanelDebts = new DisplayTransactionsPanel(1);
  this.dcPanelNetpays = new DisplayTransactionsPanel(2);
  this.expenseForm = new ExpenseForm;
  this.feedbackForm = new FeedbackForm;
  this.addContactWidget = new AddContactWidget;
  $initWidget(this, $build_f_ScrollPanel1(new LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets(this)));
  this.currentSelection = this.addTransaction;
  this.centerContentWidget = centerContentWidget;
}

defineClass(226, 636, $intern_41, LeftPaneWidget);
var service_1;
var Lcom_usp_expmgmt_client_LeftPaneWidget_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget', 226);
function $onSuccess_7(this$static, result){
  $clear(this$static.this$01.centerContentWidget);
  $add_3(this$static.this$01.centerContentWidget, this$static.val$dp2);
  $init_3(this$static.val$dp2, result);
}

function LeftPaneWidget$1(this$0, val$dp){
  this.this$01 = this$0;
  this.val$dp2 = val$dp;
}

defineClass(136, 1, {}, LeftPaneWidget$1);
_.onSuccess = function onSuccess_9(result){
  $onSuccess_7(this, castToString(result));
}
;
_.onFailure = function onFailure_9(caught){
  alert_0(caught.getMessage());
}
;
var Lcom_usp_expmgmt_client_LeftPaneWidget$1_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget/1', 136);
function $build_f_ScrollPanel1(this$static){
  var f_ScrollPanel1, f_FlowPanel2, addTransaction, sb, viewClaims, viewDebts, netPayments, addContact, sb_0, feedback, helpAndSupport, sb_1, sb_2, sb_3, sb_4, sb_5;
  f_ScrollPanel1 = new ScrollPanel;
  $add_3(f_ScrollPanel1, (f_FlowPanel2 = new FlowPanel , $add_5(f_FlowPanel2, (addTransaction = new Anchor_0 , $setHTML(addTransaction, (sb = new StringBuilder , sb.string += 'Add Transaction' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(($clinit_DOM() , addTransaction.element), 'GGNBA13LI', true) , $addDomHandler(addTransaction, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , this$static.owner.addTransaction = addTransaction , addTransaction)) , $add_5(f_FlowPanel2, (viewClaims = new Anchor_0 , $setHTML(viewClaims, (sb_1 = new StringBuilder , sb_1.string += 'View Claims' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(viewClaims.element, 'GGNBA13LI', true) , $addDomHandler(viewClaims, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , this$static.owner.viewClaims = viewClaims , viewClaims)) , $add_5(f_FlowPanel2, (viewDebts = new Anchor_0 , $setHTML(viewDebts, (sb_2 = new StringBuilder , sb_2.string += 'View Debts' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(viewDebts.element, 'GGNBA13LI', true) , $addDomHandler(viewDebts, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , this$static.owner.viewDebts = viewDebts , viewDebts)) , $add_5(f_FlowPanel2, (netPayments = new Anchor_0 , $setHTML(netPayments, (sb_3 = new StringBuilder , sb_3.string += 'Net Payments' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html) , setStyleName(netPayments.element, 'GGNBA13LI', true) , $addDomHandler(netPayments, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, (null , TYPE_1)) , this$static.owner.netPayments = netPayments , netPayments)) , $add_5(f_FlowPanel2, (addContact = new Anchor_0 , $setHTML(addContact, (sb_0 = new StringBuilder , sb_0.string += 'Add Contact' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(addContact.element, 'GGNBA13LI', true) , $addDomHandler(addContact, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, (null , TYPE_1)) , this$static.owner.addContact = addContact , addContact)) , $add_5(f_FlowPanel2, (feedback = new Anchor_0 , $setHTML(feedback, (sb_4 = new StringBuilder , sb_4.string += 'Feedback' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html) , setStyleName(feedback.element, 'GGNBA13LI', true) , $addDomHandler(feedback, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_1)) , this$static.owner.feedback = feedback , feedback)) , $add_5(f_FlowPanel2, (helpAndSupport = new Anchor_0 , $setHTML(helpAndSupport, (sb_5 = new StringBuilder , sb_5.string += 'Help and Support' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html) , setStyleName(helpAndSupport.element, 'GGNBA13LI', true) , $addDomHandler(helpAndSupport, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, (null , TYPE_1)) , this$static.owner.helpAndSupport = helpAndSupport , helpAndSupport)) , f_FlowPanel2));
  setStyleName(f_ScrollPanel1.element, 'GGNBA13NI', true);
  return f_ScrollPanel1;
}

function LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$2(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$3(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$4(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$5(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$6(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$7(this);
  this.owner = owner;
  this.style_0 = ($clinit_LeftPaneWidget_LeftPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_3);
  $ensureInjected_2(this.style_0);
}

defineClass(342, 1, {}, LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets);
var Lcom_usp_expmgmt_client_LeftPaneWidget_1LeftPaneWidgetUiBinderImpl$Widgets_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget_LeftPaneWidgetUiBinderImpl/Widgets', 342);
function LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(343, 1, $intern_50, LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$1);
_.onClick = function onClick_16(event_0){
  $handleClickAddTransaction(this.this$11.owner);
}
;
var Lcom_usp_expmgmt_client_LeftPaneWidget_1LeftPaneWidgetUiBinderImpl$Widgets$1_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget_LeftPaneWidgetUiBinderImpl/Widgets/1', 343);
function LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(344, 1, $intern_50, LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$2);
_.onClick = function onClick_17(event_0){
  $handleClickViewClaims(this.this$11.owner);
}
;
var Lcom_usp_expmgmt_client_LeftPaneWidget_1LeftPaneWidgetUiBinderImpl$Widgets$2_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget_LeftPaneWidgetUiBinderImpl/Widgets/2', 344);
function LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$3(this$1){
  this.this$11 = this$1;
}

defineClass(345, 1, $intern_50, LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$3);
_.onClick = function onClick_18(event_0){
  $handleClickViewDebts(this.this$11.owner);
}
;
var Lcom_usp_expmgmt_client_LeftPaneWidget_1LeftPaneWidgetUiBinderImpl$Widgets$3_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget_LeftPaneWidgetUiBinderImpl/Widgets/3', 345);
function LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$4(this$1){
  this.this$11 = this$1;
}

defineClass(346, 1, $intern_50, LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$4);
_.onClick = function onClick_19(event_0){
  $handleClickFeedback(this.this$11.owner);
}
;
var Lcom_usp_expmgmt_client_LeftPaneWidget_1LeftPaneWidgetUiBinderImpl$Widgets$4_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget_LeftPaneWidgetUiBinderImpl/Widgets/4', 346);
function LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$5(this$1){
  this.this$11 = this$1;
}

defineClass(347, 1, $intern_50, LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$5);
_.onClick = function onClick_20(event_0){
  $handleClickNetPayments(this.this$11.owner);
}
;
var Lcom_usp_expmgmt_client_LeftPaneWidget_1LeftPaneWidgetUiBinderImpl$Widgets$5_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget_LeftPaneWidgetUiBinderImpl/Widgets/5', 347);
function LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$6(this$1){
  this.this$11 = this$1;
}

defineClass(348, 1, $intern_50, LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$6);
_.onClick = function onClick_21(event_0){
  $handleClickAddContact(this.this$11.owner);
}
;
var Lcom_usp_expmgmt_client_LeftPaneWidget_1LeftPaneWidgetUiBinderImpl$Widgets$6_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget_LeftPaneWidgetUiBinderImpl/Widgets/6', 348);
function LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$7(this$1){
  this.this$11 = this$1;
}

defineClass(349, 1, $intern_50, LeftPaneWidget_LeftPaneWidgetUiBinderImpl$Widgets$7);
_.onClick = function onClick_22(event_0){
  $handleClickHelpAndSupport(this.this$11.owner);
}
;
var Lcom_usp_expmgmt_client_LeftPaneWidget_1LeftPaneWidgetUiBinderImpl$Widgets$7_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget_LeftPaneWidgetUiBinderImpl/Widgets/7', 349);
var style_3;
function $ensureInjected_2(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push(toInject, '.GGNBA13MI{font-weight:bold;}.GGNBA13LI:HOVER{background-color:#d8e9f0;border:1px SOLID blue;font-size:1.4em;color:red;}.GGNBA13LI{font-size:1.2em;margin-top:0.5em;border:1px SOLID green;display:block;}.GGNBA13NI{border:1px SOLID red;}');
    schedule();
    return true;
  }
  return false;
}

function LeftPaneWidget_LeftPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(546, 1, {}, LeftPaneWidget_LeftPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_usp_expmgmt_client_LeftPaneWidget_1LeftPaneWidgetUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.usp.expmgmt.client', 'LeftPaneWidget_LeftPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 546);
function $clinit_LeftPaneWidget_LeftPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_LeftPaneWidget_LeftPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_3 = new LeftPaneWidget_LeftPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $init_7(this$static){
  $insert(this$static.dockLayoutPanel, this$static.topPane, ($clinit_DockLayoutPanel$Direction() , NORTH), 80);
  $insert(this$static.dockLayoutPanel, this$static.leftPane, WEST, 250);
  $insert(this$static.dockLayoutPanel, this$static.contentPane, CENTER_0, 0);
  $setSize_0(this$static.dockLayoutPanel);
  $remove_1(get_2('umasankar'), this$static.im);
  $add_7(get_1(), this$static.dockLayoutPanel);
}

function $onModuleLoad_0(this$static){
  var ownerEmailfetcher;
  $setUrl(this$static.im, ($clinit_UriUtils() , new SafeUriString('loading37.gif')));
  $add_0(get_2('umasankar'), this$static.im);
  ownerEmailfetcher = new GetLoggedInUserEmail_Proxy;
  $getLoggedInUserEmail(ownerEmailfetcher, new Main1$1(this$static));
}

function Main1(){
  new Anchor_1('Add More');
  new FormPanel_0(new NamedFrame);
  new VerticalPanel;
  new HTML;
  new Hyperlink;
  this.dockLayoutPanel = new DockLayoutPanel(($clinit_Style$Unit() , PX));
  this.topPane = new TopPaneWidget;
  this.contentPane = new ContentPaneWidget;
  this.leftPane = new LeftPaneWidget(this.contentPane.contentPanel);
  this.im = new Image_0;
}

defineClass(220, 1, {}, Main1);
var Lcom_usp_expmgmt_client_Main1_2_classLit = createForClass('com.usp.expmgmt.client', 'Main1', 220);
function $onSuccess_8(this$static, result){
  if (result.indexOf('@') != -1) {
    $setOwnerEmail_0(this$static.this$01.topPane, result);
    $init_6(this$static.this$01.leftPane, result);
    $init_7(this$static.this$01);
  }
   else {
    $wnd.open(result, '_self', '');
  }
}

function Main1$1(this$0){
  this.this$01 = this$0;
}

defineClass(228, 1, {}, Main1$1);
_.onSuccess = function onSuccess_10(result){
  $onSuccess_8(this, castToString(result));
}
;
_.onFailure = function onFailure_10(caught){
  replace_0('/logoutURL');
}
;
var Lcom_usp_expmgmt_client_Main1$1_2_classLit = createForClass('com.usp.expmgmt.client', 'Main1/1', 228);
function $setOwnerEmail_0(this$static, ownerEmail){
  $setText(this$static.ownerEmail_0, ownerEmail);
}

function TopPaneWidget(){
  $initWidget(this, $build_f_FlowPanel1_0(new TopPaneWidget_TopPaneWidgetUiBinderImpl$Widgets(this)));
}

defineClass(224, 636, $intern_41, TopPaneWidget);
var Lcom_usp_expmgmt_client_TopPaneWidget_2_classLit = createForClass('com.usp.expmgmt.client', 'TopPaneWidget', 224);
function $build_f_FlowPanel1_0(this$static){
  var f_FlowPanel1, f_Label2, ownerEmail, logout, sb;
  f_FlowPanel1 = new FlowPanel;
  $add_5(f_FlowPanel1, (f_Label2 = new Label , $setTextOrHtml(f_Label2.directionalTextHelper, 'Expense Management System', false) , setStyleName(($clinit_DOM() , f_Label2.element), 'GGNBA13OI', true) , f_Label2));
  $add_5(f_FlowPanel1, (ownerEmail = new Label , setStyleName(ownerEmail.element, 'GGNBA13BJ', true) , this$static.owner.ownerEmail_0 = ownerEmail , ownerEmail));
  $add_5(f_FlowPanel1, (logout = new Anchor_0 , $setHTML(logout, (sb = new StringBuilder , sb.string += 'Logout' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(logout.element, 'GGNBA13AJ', true) , $addDomHandler(logout, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , logout));
  setStyleName(f_FlowPanel1.element, 'GGNBA13CJ', true);
  return f_FlowPanel1;
}

function TopPaneWidget_TopPaneWidgetUiBinderImpl$Widgets(owner){
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new TopPaneWidget_TopPaneWidgetUiBinderImpl$Widgets$1;
  this.owner = owner;
  this.style_0 = ($clinit_TopPaneWidget_TopPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_4);
  $ensureInjected_3(this.style_0);
}

defineClass(326, 1, {}, TopPaneWidget_TopPaneWidgetUiBinderImpl$Widgets);
var Lcom_usp_expmgmt_client_TopPaneWidget_1TopPaneWidgetUiBinderImpl$Widgets_2_classLit = createForClass('com.usp.expmgmt.client', 'TopPaneWidget_TopPaneWidgetUiBinderImpl/Widgets', 326);
function TopPaneWidget_TopPaneWidgetUiBinderImpl$Widgets$1(){
}

defineClass(327, 1, $intern_50, TopPaneWidget_TopPaneWidgetUiBinderImpl$Widgets$1);
_.onClick = function onClick_23(event_0){
  replace_0('/logoutURL');
}
;
var Lcom_usp_expmgmt_client_TopPaneWidget_1TopPaneWidgetUiBinderImpl$Widgets$1_2_classLit = createForClass('com.usp.expmgmt.client', 'TopPaneWidget_TopPaneWidgetUiBinderImpl/Widgets/1', 327);
var style_4;
function $ensureInjected_3(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    inject(($clinit_LocaleInfo() , '.GGNBA13PI{font-weight:bold;}.GGNBA13CJ{border:1px SOLID red;}.GGNBA13BJ{display:block;float:left;font-size:1.5em;margin:15px;font-weight:bold;}.GGNBA13AJ{display:block;font-size:1.5em;float:right;margin:15px;font-weight:bold;}.GGNBA13OI{font-size:2em;text-align:center;}'));
    return true;
  }
  return false;
}

function TopPaneWidget_TopPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(478, 1, {}, TopPaneWidget_TopPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_usp_expmgmt_client_TopPaneWidget_1TopPaneWidgetUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.usp.expmgmt.client', 'TopPaneWidget_TopPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 478);
function $clinit_TopPaneWidget_TopPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_TopPaneWidget_TopPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_4 = new TopPaneWidget_TopPaneWidgetUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $clinit_AddUserContact_Proxy(){
  $clinit_AddUserContact_Proxy = emptyMethod;
  SERIALIZER = new AddUserContact_TypeSerializer;
}

function $addUserContacts(this$static, list, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'AddUserContact_Proxy', 'addUserContacts');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.AddUserContact', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.util.List'));
    $writeObject(streamWriter, list);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function AddUserContact_Proxy(){
  $clinit_AddUserContact_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), '972F49C3A87ACF5C187EAE4CFBC9DE8E', SERIALIZER);
}

defineClass(574, 59, {}, AddUserContact_Proxy);
_.createStreamWriter = function createStreamWriter_0(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER;
var Lcom_usp_expmgmt_client_service_AddUserContact_1Proxy_2_classLit = createForClass('com.usp.expmgmt.client.service', 'AddUserContact_Proxy', 574);
function $clinit_AddUserContact_TypeSerializer(){
  $clinit_AddUserContact_TypeSerializer = emptyMethod;
  methodMapNative_0 = loadMethodsNative();
  signatureMapNative_0 = loadSignaturesNative();
}

function AddUserContact_TypeSerializer(){
  $clinit_AddUserContact_TypeSerializer();
  SerializerBase.call(this, methodMapNative_0, signatureMapNative_0);
}

function loadMethodsNative(){
  var result = {};
  result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_2, deserialize_2, serialize_1];
  result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_3, deserialize_3];
  result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_2];
  result['com.google.gwt.user.client.ui.ChangeListenerCollection/287642957'] = [undefined, undefined, serialize_20];
  result['com.google.gwt.user.client.ui.ClickListenerCollection/2152455986'] = [undefined, undefined, serialize_21];
  result['com.google.gwt.user.client.ui.FocusListenerCollection/119490835'] = [undefined, undefined, serialize_22];
  result['com.google.gwt.user.client.ui.FormHandlerCollection/3088681894'] = [undefined, undefined, serialize_23];
  result['com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242'] = [undefined, undefined, serialize_24];
  result['com.google.gwt.user.client.ui.LoadListenerCollection/3174178888'] = [undefined, undefined, serialize_25];
  result['com.google.gwt.user.client.ui.MouseListenerCollection/465158911'] = [undefined, undefined, serialize_26];
  result['com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552'] = [undefined, undefined, serialize_27];
  result['com.google.gwt.user.client.ui.PopupListenerCollection/1920131050'] = [undefined, undefined, serialize_28];
  result['com.google.gwt.user.client.ui.ScrollListenerCollection/210686268'] = [undefined, undefined, serialize_29];
  result['com.google.gwt.user.client.ui.TabListenerCollection/3768293299'] = [undefined, undefined, serialize_30];
  result['com.google.gwt.user.client.ui.TableListenerCollection/2254740473'] = [undefined, undefined, serialize_31];
  result['com.google.gwt.user.client.ui.TreeListenerCollection/3716243734'] = [undefined, undefined, serialize_32];
  result['java.lang.String/2004016611'] = [instantiate_10, deserialize_11, serialize_5];
  result['[Ljava.lang.String;/2600011424'] = [undefined, undefined, serialize_4];
  result['java.util.ArrayList/4159755760'] = [undefined, undefined, serialize_6];
  result['java.util.Arrays$ArrayList/2507071751'] = [undefined, undefined, serialize_7];
  result['java.util.Collections$EmptyList/4157118744'] = [undefined, undefined, serialize_9];
  result['java.util.Collections$SingletonList/1586180994'] = [undefined, undefined, serialize_11];
  result['java.util.LinkedList/3953877921'] = [undefined, undefined, serialize_15];
  result['java.util.Stack/1346942793'] = [undefined, undefined, serialize_17];
  result['java.util.Vector/3057315478'] = [undefined, undefined, serialize_19];
  result['org.slim3.datastore.S3QueryResultList/3468402502'] = [undefined, undefined, serialize_34];
  return result;
}

function loadSignaturesNative(){
  var result = [];
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ChangeListenerCollection/287642957';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ClickListenerCollection/2152455986';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FocusListenerCollection/119490835';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FormHandlerCollection/3088681894';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.LoadListenerCollection/3174178888';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseListenerCollection/465158911';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.PopupListenerCollection/1920131050';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ScrollListenerCollection/210686268';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TabListenerCollection/3768293299';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TableListenerCollection/2254740473';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TreeListenerCollection/3716243734';
  result[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1))] = '[Ljava.lang.String;/2600011424';
  result[getObjectIdentityHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760';
  result[getObjectIdentityHashCode(Ljava_util_Arrays$ArrayList_2_classLit)] = 'java.util.Arrays$ArrayList/2507071751';
  result[getObjectIdentityHashCode(Ljava_util_Collections$EmptyList_2_classLit)] = 'java.util.Collections$EmptyList/4157118744';
  result[getObjectIdentityHashCode(Ljava_util_Collections$SingletonList_2_classLit)] = 'java.util.Collections$SingletonList/1586180994';
  result[getObjectIdentityHashCode(Ljava_util_LinkedList_2_classLit)] = 'java.util.LinkedList/3953877921';
  result[getObjectIdentityHashCode(Ljava_util_Stack_2_classLit)] = 'java.util.Stack/1346942793';
  result[getObjectIdentityHashCode(Ljava_util_Vector_2_classLit)] = 'java.util.Vector/3057315478';
  result[getObjectIdentityHashCode(Lorg_slim3_datastore_S3QueryResultList_2_classLit)] = 'org.slim3.datastore.S3QueryResultList/3468402502';
  return result;
}

defineClass(578, 60, {}, AddUserContact_TypeSerializer);
var methodMapNative_0, signatureMapNative_0;
var Lcom_usp_expmgmt_client_service_AddUserContact_1TypeSerializer_2_classLit = createForClass('com.usp.expmgmt.client.service', 'AddUserContact_TypeSerializer', 578);
function $clinit_ChangeLogRetriever_Proxy(){
  $clinit_ChangeLogRetriever_Proxy = emptyMethod;
  SERIALIZER_0 = new ChangeLogRetriever_TypeSerializer;
}

function $getChangeLogsAsJson(this$static, expenseReportKey, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'ChangeLogRetriever_Proxy', 'getChangeLogsAsJson');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.ChangeLogRetriever', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, expenseReportKey));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function ChangeLogRetriever_Proxy(){
  $clinit_ChangeLogRetriever_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), '7DB543300CCA37AFB43FA910AD3D9E26', SERIALIZER_0);
}

defineClass(601, 59, {}, ChangeLogRetriever_Proxy);
_.createStreamWriter = function createStreamWriter_1(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER_0;
var Lcom_usp_expmgmt_client_service_ChangeLogRetriever_1Proxy_2_classLit = createForClass('com.usp.expmgmt.client.service', 'ChangeLogRetriever_Proxy', 601);
function $clinit_ChangeLogRetriever_TypeSerializer(){
  var result, result_0;
  $clinit_ChangeLogRetriever_TypeSerializer = emptyMethod;
  methodMapNative_1 = (result = {} , result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_2, deserialize_2, serialize_1] , result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_3, deserialize_3] , result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_2] , result['java.lang.String/2004016611'] = [instantiate_10, deserialize_11, serialize_5] , result);
  signatureMapNative_1 = (result_0 = [] , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109' , result_0[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611' , result_0);
}

function ChangeLogRetriever_TypeSerializer(){
  $clinit_ChangeLogRetriever_TypeSerializer();
  SerializerBase.call(this, methodMapNative_1, signatureMapNative_1);
}

defineClass(602, 60, {}, ChangeLogRetriever_TypeSerializer);
var methodMapNative_1, signatureMapNative_1;
var Lcom_usp_expmgmt_client_service_ChangeLogRetriever_1TypeSerializer_2_classLit = createForClass('com.usp.expmgmt.client.service', 'ChangeLogRetriever_TypeSerializer', 602);
function $clinit_ClearClaimsForX_Proxy(){
  $clinit_ClearClaimsForX_Proxy = emptyMethod;
  SERIALIZER_1 = new ClearClaimsForX_TypeSerializer;
}

function $clearClaims(this$static, userEmail, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'ClearClaimsForX_Proxy', 'clearClaims');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.ClearClaimsForX', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, userEmail));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function ClearClaimsForX_Proxy(){
  $clinit_ClearClaimsForX_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), '769269219B802FA4D0AE226F93402413', SERIALIZER_1);
}

defineClass(562, 59, {}, ClearClaimsForX_Proxy);
_.createStreamWriter = function createStreamWriter_2(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER_1;
var Lcom_usp_expmgmt_client_service_ClearClaimsForX_1Proxy_2_classLit = createForClass('com.usp.expmgmt.client.service', 'ClearClaimsForX_Proxy', 562);
function $clinit_ClearClaimsForX_TypeSerializer(){
  var result, result_0;
  $clinit_ClearClaimsForX_TypeSerializer = emptyMethod;
  methodMapNative_2 = (result = {} , result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_2, deserialize_2, serialize_1] , result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_3, deserialize_3] , result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_2] , result['java.lang.String/2004016611'] = [instantiate_10, deserialize_11, serialize_5] , result);
  signatureMapNative_2 = (result_0 = [] , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109' , result_0[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611' , result_0);
}

function ClearClaimsForX_TypeSerializer(){
  $clinit_ClearClaimsForX_TypeSerializer();
  SerializerBase.call(this, methodMapNative_2, signatureMapNative_2);
}

defineClass(573, 60, {}, ClearClaimsForX_TypeSerializer);
var methodMapNative_2, signatureMapNative_2;
var Lcom_usp_expmgmt_client_service_ClearClaimsForX_1TypeSerializer_2_classLit = createForClass('com.usp.expmgmt.client.service', 'ClearClaimsForX_TypeSerializer', 573);
function $clinit_ExpenseReportRetriever_Proxy(){
  $clinit_ExpenseReportRetriever_Proxy = emptyMethod;
  SERIALIZER_2 = new ExpenseReportRetriever_TypeSerializer;
}

function $getClaimsAsJson(this$static, email, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'ExpenseReportRetriever_Proxy', 'getClaimsAsJson');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.ExpenseReportRetriever', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function $getDebtsAsJson(this$static, email, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'ExpenseReportRetriever_Proxy', 'getDebtsAsJson');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.ExpenseReportRetriever', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, email));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function $getExpenseReportAsJson(this$static, encodedKey, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'ExpenseReportRetriever_Proxy', 'getExpenseReportAsJson');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.ExpenseReportRetriever', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, encodedKey));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function $getNetPaymentAsJson(this$static, loggedInUser, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'ExpenseReportRetriever_Proxy', 'getNetPaymentAsJson');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.ExpenseReportRetriever', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, loggedInUser));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function ExpenseReportRetriever_Proxy(){
  $clinit_ExpenseReportRetriever_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), 'FBD0CDC7D08BF134E8BD40D64F801B53', SERIALIZER_2);
}

defineClass(178, 59, {}, ExpenseReportRetriever_Proxy);
_.createStreamWriter = function createStreamWriter_3(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER_2;
var Lcom_usp_expmgmt_client_service_ExpenseReportRetriever_1Proxy_2_classLit = createForClass('com.usp.expmgmt.client.service', 'ExpenseReportRetriever_Proxy', 178);
function $clinit_ExpenseReportRetriever_TypeSerializer(){
  $clinit_ExpenseReportRetriever_TypeSerializer = emptyMethod;
  methodMapNative_3 = loadMethodsNative_0();
  signatureMapNative_3 = loadSignaturesNative_0();
}

function ExpenseReportRetriever_TypeSerializer(){
  $clinit_ExpenseReportRetriever_TypeSerializer();
  SerializerBase.call(this, methodMapNative_3, signatureMapNative_3);
}

function loadMethodsNative_0(){
  var result = {};
  result['com.google.appengine.api.datastore.AppIdNamespace/2812750239'] = [instantiate, deserialize];
  result['com.google.appengine.api.datastore.Key/1349195865'] = [instantiate_0, deserialize_0];
  result['com.google.gwt.i18n.shared.impl.DateRecord/3173882066'] = [instantiate_1, deserialize_1];
  result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_2, deserialize_2, serialize_1];
  result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_3, deserialize_3];
  result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_2];
  result['com.google.gwt.user.client.ui.ChangeListenerCollection/287642957'] = [instantiate_22, deserialize_24];
  result['com.google.gwt.user.client.ui.ClickListenerCollection/2152455986'] = [instantiate_23, deserialize_25];
  result['com.google.gwt.user.client.ui.FocusListenerCollection/119490835'] = [instantiate_24, deserialize_26];
  result['com.google.gwt.user.client.ui.FormHandlerCollection/3088681894'] = [instantiate_25, deserialize_27];
  result['com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242'] = [instantiate_26, deserialize_28];
  result['com.google.gwt.user.client.ui.LoadListenerCollection/3174178888'] = [instantiate_27, deserialize_29];
  result['com.google.gwt.user.client.ui.MouseListenerCollection/465158911'] = [instantiate_28, deserialize_30];
  result['com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552'] = [instantiate_29, deserialize_31];
  result['com.google.gwt.user.client.ui.PopupListenerCollection/1920131050'] = [instantiate_30, deserialize_32];
  result['com.google.gwt.user.client.ui.ScrollListenerCollection/210686268'] = [instantiate_31, deserialize_33];
  result['com.google.gwt.user.client.ui.TabListenerCollection/3768293299'] = [instantiate_32, deserialize_34];
  result['com.google.gwt.user.client.ui.TableListenerCollection/2254740473'] = [instantiate_33, deserialize_35];
  result['com.google.gwt.user.client.ui.TreeListenerCollection/3716243734'] = [instantiate_34, deserialize_36];
  result['com.usp.expmgmt.shared.model.ExpenseReport/971284897'] = [instantiate_36, deserialize_38];
  result['[Lcom.usp.expmgmt.shared.model.ExpenseReport;/3332617483'] = [instantiate_35, deserialize_37];
  result['java.lang.Double/858496421'] = [instantiate_7, deserialize_7];
  result['[Ljava.lang.Double;/2857560407'] = [instantiate_6, deserialize_6];
  result['java.lang.Long/4227064769'] = [instantiate_8, deserialize_8];
  result['java.lang.String/2004016611'] = [instantiate_10, deserialize_11, serialize_5];
  result['[Ljava.lang.String;/2600011424'] = [instantiate_9, deserialize_10];
  result['java.sql.Date/730999118'] = [instantiate_11, deserialize_12];
  result['java.sql.Time/1816797103'] = [instantiate_12, deserialize_13];
  result['java.sql.Timestamp/3040052672'] = [instantiate_13, deserialize_14];
  result['java.util.ArrayList/4159755760'] = [instantiate_14, deserialize_15];
  result['java.util.Arrays$ArrayList/2507071751'] = [instantiate_15, deserialize_16];
  result['java.util.Collections$EmptyList/4157118744'] = [instantiate_16, deserialize_18];
  result['java.util.Collections$SingletonList/1586180994'] = [instantiate_17, deserialize_19];
  result['java.util.Date/3385151746'] = [instantiate_18, deserialize_20];
  result['java.util.LinkedList/3953877921'] = [instantiate_19, deserialize_21];
  result['java.util.Stack/1346942793'] = [instantiate_20, deserialize_22];
  result['java.util.Vector/3057315478'] = [instantiate_21, deserialize_23];
  result['org.slim3.datastore.S3QueryResultList/3468402502'] = [instantiate_37, deserialize_39];
  return result;
}

function loadSignaturesNative_0(){
  var result = [];
  result[getObjectIdentityHashCode(Lcom_google_appengine_api_datastore_AppIdNamespace_2_classLit)] = 'com.google.appengine.api.datastore.AppIdNamespace/2812750239';
  result[getObjectIdentityHashCode(Lcom_google_appengine_api_datastore_Key_2_classLit)] = 'com.google.appengine.api.datastore.Key/1349195865';
  result[getObjectIdentityHashCode(Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit)] = 'com.google.gwt.i18n.shared.impl.DateRecord/3173882066';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ChangeListenerCollection/287642957';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ClickListenerCollection/2152455986';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FocusListenerCollection/119490835';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FormHandlerCollection/3088681894';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.LoadListenerCollection/3174178888';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseListenerCollection/465158911';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.PopupListenerCollection/1920131050';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ScrollListenerCollection/210686268';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TabListenerCollection/3768293299';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TableListenerCollection/2254740473';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TreeListenerCollection/3716243734';
  result[getObjectIdentityHashCode(Lcom_usp_expmgmt_shared_model_ExpenseReport_2_classLit)] = 'com.usp.expmgmt.shared.model.ExpenseReport/971284897';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Lcom_usp_expmgmt_shared_model_ExpenseReport_2_classLit, 1))] = '[Lcom.usp.expmgmt.shared.model.ExpenseReport;/3332617483';
  result[getObjectIdentityHashCode(Ljava_lang_Double_2_classLit)] = 'java.lang.Double/858496421';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Ljava_lang_Double_2_classLit, 1))] = '[Ljava.lang.Double;/2857560407';
  result[getObjectIdentityHashCode(Ljava_lang_Long_2_classLit)] = 'java.lang.Long/4227064769';
  result[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1))] = '[Ljava.lang.String;/2600011424';
  result[getObjectIdentityHashCode(Ljava_sql_Date_2_classLit)] = 'java.sql.Date/730999118';
  result[getObjectIdentityHashCode(Ljava_sql_Time_2_classLit)] = 'java.sql.Time/1816797103';
  result[getObjectIdentityHashCode(Ljava_sql_Timestamp_2_classLit)] = 'java.sql.Timestamp/3040052672';
  result[getObjectIdentityHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760';
  result[getObjectIdentityHashCode(Ljava_util_Arrays$ArrayList_2_classLit)] = 'java.util.Arrays$ArrayList/2507071751';
  result[getObjectIdentityHashCode(Ljava_util_Collections$EmptyList_2_classLit)] = 'java.util.Collections$EmptyList/4157118744';
  result[getObjectIdentityHashCode(Ljava_util_Collections$SingletonList_2_classLit)] = 'java.util.Collections$SingletonList/1586180994';
  result[getObjectIdentityHashCode(Ljava_util_Date_2_classLit)] = 'java.util.Date/3385151746';
  result[getObjectIdentityHashCode(Ljava_util_LinkedList_2_classLit)] = 'java.util.LinkedList/3953877921';
  result[getObjectIdentityHashCode(Ljava_util_Stack_2_classLit)] = 'java.util.Stack/1346942793';
  result[getObjectIdentityHashCode(Ljava_util_Vector_2_classLit)] = 'java.util.Vector/3057315478';
  result[getObjectIdentityHashCode(Lorg_slim3_datastore_S3QueryResultList_2_classLit)] = 'org.slim3.datastore.S3QueryResultList/3468402502';
  return result;
}

defineClass(381, 60, {}, ExpenseReportRetriever_TypeSerializer);
var methodMapNative_3, signatureMapNative_3;
var Lcom_usp_expmgmt_client_service_ExpenseReportRetriever_1TypeSerializer_2_classLit = createForClass('com.usp.expmgmt.client.service', 'ExpenseReportRetriever_TypeSerializer', 381);
function $clinit_ExpenseReportSaver_Proxy(){
  $clinit_ExpenseReportSaver_Proxy = emptyMethod;
  SERIALIZER_3 = new ExpenseReportSaver_TypeSerializer;
}

function $delete(this$static, json, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'ExpenseReportSaver_Proxy', 'delete');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.ExpenseReportSaver', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, json));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function $save(this$static, name_0, asyncCallback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'ExpenseReportSaver_Proxy', 'save');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.ExpenseReportSaver', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, name_0));
    $finish_1(helper, asyncCallback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
      $setEnabled(asyncCallback.this$11.uiObject, true);
    }
     else 
      throw toJs($e0);
  }
}

function ExpenseReportSaver_Proxy(){
  $clinit_ExpenseReportSaver_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), 'AAC45AA7FB89CFD0517DAE552F4F176D', SERIALIZER_3);
}

defineClass(215, 59, {}, ExpenseReportSaver_Proxy);
_.createStreamWriter = function createStreamWriter_4(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER_3;
var Lcom_usp_expmgmt_client_service_ExpenseReportSaver_1Proxy_2_classLit = createForClass('com.usp.expmgmt.client.service', 'ExpenseReportSaver_Proxy', 215);
function $clinit_ExpenseReportSaver_TypeSerializer(){
  $clinit_ExpenseReportSaver_TypeSerializer = emptyMethod;
  methodMapNative_4 = loadMethodsNative_1();
  signatureMapNative_4 = loadSignaturesNative_1();
}

function ExpenseReportSaver_TypeSerializer(){
  $clinit_ExpenseReportSaver_TypeSerializer();
  SerializerBase.call(this, methodMapNative_4, signatureMapNative_4);
}

function loadMethodsNative_1(){
  var result = {};
  result['com.google.appengine.api.datastore.AppIdNamespace/2812750239'] = [instantiate, deserialize];
  result['com.google.appengine.api.datastore.Key/1349195865'] = [instantiate_0, deserialize_0];
  result['com.google.gwt.i18n.shared.impl.DateRecord/3173882066'] = [instantiate_1, deserialize_1];
  result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_2, deserialize_2, serialize_1];
  result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_3, deserialize_3];
  result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_2];
  result['com.google.gwt.user.client.ui.ChangeListenerCollection/287642957'] = [instantiate_22, deserialize_24];
  result['com.google.gwt.user.client.ui.ClickListenerCollection/2152455986'] = [instantiate_23, deserialize_25];
  result['com.google.gwt.user.client.ui.FocusListenerCollection/119490835'] = [instantiate_24, deserialize_26];
  result['com.google.gwt.user.client.ui.FormHandlerCollection/3088681894'] = [instantiate_25, deserialize_27];
  result['com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242'] = [instantiate_26, deserialize_28];
  result['com.google.gwt.user.client.ui.LoadListenerCollection/3174178888'] = [instantiate_27, deserialize_29];
  result['com.google.gwt.user.client.ui.MouseListenerCollection/465158911'] = [instantiate_28, deserialize_30];
  result['com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552'] = [instantiate_29, deserialize_31];
  result['com.google.gwt.user.client.ui.PopupListenerCollection/1920131050'] = [instantiate_30, deserialize_32];
  result['com.google.gwt.user.client.ui.ScrollListenerCollection/210686268'] = [instantiate_31, deserialize_33];
  result['com.google.gwt.user.client.ui.TabListenerCollection/3768293299'] = [instantiate_32, deserialize_34];
  result['com.google.gwt.user.client.ui.TableListenerCollection/2254740473'] = [instantiate_33, deserialize_35];
  result['com.google.gwt.user.client.ui.TreeListenerCollection/3716243734'] = [instantiate_34, deserialize_36];
  result['com.usp.expmgmt.shared.model.ExpenseReport/971284897'] = [instantiate_36, deserialize_38];
  result['java.lang.Double/858496421'] = [instantiate_7, deserialize_7];
  result['[Ljava.lang.Double;/2857560407'] = [instantiate_6, deserialize_6];
  result['java.lang.Long/4227064769'] = [instantiate_8, deserialize_8];
  result['java.lang.String/2004016611'] = [instantiate_10, deserialize_11, serialize_5];
  result['[Ljava.lang.String;/2600011424'] = [instantiate_9, deserialize_10];
  result['java.sql.Date/730999118'] = [instantiate_11, deserialize_12];
  result['java.sql.Time/1816797103'] = [instantiate_12, deserialize_13];
  result['java.sql.Timestamp/3040052672'] = [instantiate_13, deserialize_14];
  result['java.util.ArrayList/4159755760'] = [instantiate_14, deserialize_15];
  result['java.util.Arrays$ArrayList/2507071751'] = [instantiate_15, deserialize_16];
  result['java.util.Collections$EmptyList/4157118744'] = [instantiate_16, deserialize_18];
  result['java.util.Collections$EmptyMap/4174664486'] = [undefined, undefined, serialize_10];
  result['java.util.Collections$SingletonList/1586180994'] = [instantiate_17, deserialize_19];
  result['java.util.Date/3385151746'] = [instantiate_18, deserialize_20];
  result['java.util.HashMap/1797211028'] = [undefined, undefined, serialize_12];
  result['java.util.IdentityHashMap/1839153020'] = [undefined, undefined, serialize_13];
  result['java.util.LinkedHashMap/3008245022'] = [undefined, undefined, serialize_14];
  result['java.util.LinkedList/3953877921'] = [instantiate_19, deserialize_21];
  result['java.util.Stack/1346942793'] = [instantiate_20, deserialize_22];
  result['java.util.TreeMap/1493889780'] = [undefined, undefined, serialize_18];
  result['java.util.Vector/3057315478'] = [instantiate_21, deserialize_23];
  result['org.slim3.datastore.S3QueryResultList/3468402502'] = [instantiate_37, deserialize_39];
  return result;
}

function loadSignaturesNative_1(){
  var result = [];
  result[getObjectIdentityHashCode(Lcom_google_appengine_api_datastore_AppIdNamespace_2_classLit)] = 'com.google.appengine.api.datastore.AppIdNamespace/2812750239';
  result[getObjectIdentityHashCode(Lcom_google_appengine_api_datastore_Key_2_classLit)] = 'com.google.appengine.api.datastore.Key/1349195865';
  result[getObjectIdentityHashCode(Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit)] = 'com.google.gwt.i18n.shared.impl.DateRecord/3173882066';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ChangeListenerCollection/287642957';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ClickListenerCollection/2152455986';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FocusListenerCollection/119490835';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FormHandlerCollection/3088681894';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.LoadListenerCollection/3174178888';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseListenerCollection/465158911';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.PopupListenerCollection/1920131050';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ScrollListenerCollection/210686268';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TabListenerCollection/3768293299';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TableListenerCollection/2254740473';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TreeListenerCollection/3716243734';
  result[getObjectIdentityHashCode(Lcom_usp_expmgmt_shared_model_ExpenseReport_2_classLit)] = 'com.usp.expmgmt.shared.model.ExpenseReport/971284897';
  result[getObjectIdentityHashCode(Ljava_lang_Double_2_classLit)] = 'java.lang.Double/858496421';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Ljava_lang_Double_2_classLit, 1))] = '[Ljava.lang.Double;/2857560407';
  result[getObjectIdentityHashCode(Ljava_lang_Long_2_classLit)] = 'java.lang.Long/4227064769';
  result[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1))] = '[Ljava.lang.String;/2600011424';
  result[getObjectIdentityHashCode(Ljava_sql_Date_2_classLit)] = 'java.sql.Date/730999118';
  result[getObjectIdentityHashCode(Ljava_sql_Time_2_classLit)] = 'java.sql.Time/1816797103';
  result[getObjectIdentityHashCode(Ljava_sql_Timestamp_2_classLit)] = 'java.sql.Timestamp/3040052672';
  result[getObjectIdentityHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760';
  result[getObjectIdentityHashCode(Ljava_util_Arrays$ArrayList_2_classLit)] = 'java.util.Arrays$ArrayList/2507071751';
  result[getObjectIdentityHashCode(Ljava_util_Collections$EmptyList_2_classLit)] = 'java.util.Collections$EmptyList/4157118744';
  result[getObjectIdentityHashCode(Ljava_util_Collections$EmptyMap_2_classLit)] = 'java.util.Collections$EmptyMap/4174664486';
  result[getObjectIdentityHashCode(Ljava_util_Collections$SingletonList_2_classLit)] = 'java.util.Collections$SingletonList/1586180994';
  result[getObjectIdentityHashCode(Ljava_util_Date_2_classLit)] = 'java.util.Date/3385151746';
  result[getObjectIdentityHashCode(Ljava_util_HashMap_2_classLit)] = 'java.util.HashMap/1797211028';
  result[getObjectIdentityHashCode(Ljava_util_IdentityHashMap_2_classLit)] = 'java.util.IdentityHashMap/1839153020';
  result[getObjectIdentityHashCode(Ljava_util_LinkedHashMap_2_classLit)] = 'java.util.LinkedHashMap/3008245022';
  result[getObjectIdentityHashCode(Ljava_util_LinkedList_2_classLit)] = 'java.util.LinkedList/3953877921';
  result[getObjectIdentityHashCode(Ljava_util_Stack_2_classLit)] = 'java.util.Stack/1346942793';
  result[getObjectIdentityHashCode(Ljava_util_TreeMap_2_classLit)] = 'java.util.TreeMap/1493889780';
  result[getObjectIdentityHashCode(Ljava_util_Vector_2_classLit)] = 'java.util.Vector/3057315478';
  result[getObjectIdentityHashCode(Lorg_slim3_datastore_S3QueryResultList_2_classLit)] = 'org.slim3.datastore.S3QueryResultList/3468402502';
  return result;
}

defineClass(606, 60, {}, ExpenseReportSaver_TypeSerializer);
var methodMapNative_4, signatureMapNative_4;
var Lcom_usp_expmgmt_client_service_ExpenseReportSaver_1TypeSerializer_2_classLit = createForClass('com.usp.expmgmt.client.service', 'ExpenseReportSaver_TypeSerializer', 606);
function $clinit_FeedbackDataSaver_Proxy(){
  $clinit_FeedbackDataSaver_Proxy = emptyMethod;
  SERIALIZER_4 = new FeedbackDataSaver_TypeSerializer;
}

function $saveFeedback(this$static, feedback, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'FeedbackDataSaver_Proxy', 'saveFeedback');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.FeedbackDataSaver', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, feedback));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function FeedbackDataSaver_Proxy(){
  $clinit_FeedbackDataSaver_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), '42664A5126FE8481983CDF22E5A16992', SERIALIZER_4);
}

defineClass(457, 59, {}, FeedbackDataSaver_Proxy);
_.createStreamWriter = function createStreamWriter_5(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER_4;
var Lcom_usp_expmgmt_client_service_FeedbackDataSaver_1Proxy_2_classLit = createForClass('com.usp.expmgmt.client.service', 'FeedbackDataSaver_Proxy', 457);
function $clinit_FeedbackDataSaver_TypeSerializer(){
  var result, result_0;
  $clinit_FeedbackDataSaver_TypeSerializer = emptyMethod;
  methodMapNative_5 = (result = {} , result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_2, deserialize_2, serialize_1] , result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_3, deserialize_3] , result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_2] , result['java.lang.String/2004016611'] = [instantiate_10, deserialize_11, serialize_5] , result);
  signatureMapNative_5 = (result_0 = [] , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109' , result_0[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611' , result_0);
}

function FeedbackDataSaver_TypeSerializer(){
  $clinit_FeedbackDataSaver_TypeSerializer();
  SerializerBase.call(this, methodMapNative_5, signatureMapNative_5);
}

defineClass(472, 60, {}, FeedbackDataSaver_TypeSerializer);
var methodMapNative_5, signatureMapNative_5;
var Lcom_usp_expmgmt_client_service_FeedbackDataSaver_1TypeSerializer_2_classLit = createForClass('com.usp.expmgmt.client.service', 'FeedbackDataSaver_TypeSerializer', 472);
function $clinit_GetLoggedInUserEmail_Proxy(){
  $clinit_GetLoggedInUserEmail_Proxy = emptyMethod;
  SERIALIZER_5 = new GetLoggedInUserEmail_TypeSerializer;
}

function $getLoggedInUserEmail(this$static, callback){
  var helper;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'GetLoggedInUserEmail_Proxy', 'getLoggedInUserEmail');
  try {
    $start(helper, 'com.usp.expmgmt.client.service.GetLoggedInUserEmail', 0);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      replace_0('/logoutURL');
    }
     else 
      throw toJs($e0);
  }
}

function GetLoggedInUserEmail_Proxy(){
  $clinit_GetLoggedInUserEmail_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), 'CFBD467FFEBD46F239E1528671359B46', SERIALIZER_5);
}

defineClass(227, 59, {}, GetLoggedInUserEmail_Proxy);
_.createStreamWriter = function createStreamWriter_6(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER_5;
var Lcom_usp_expmgmt_client_service_GetLoggedInUserEmail_1Proxy_2_classLit = createForClass('com.usp.expmgmt.client.service', 'GetLoggedInUserEmail_Proxy', 227);
function $clinit_GetLoggedInUserEmail_TypeSerializer(){
  var result, result_0;
  $clinit_GetLoggedInUserEmail_TypeSerializer = emptyMethod;
  methodMapNative_6 = (result = {} , result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_2, deserialize_2, serialize_1] , result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_3, deserialize_3] , result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_2] , result['java.lang.String/2004016611'] = [instantiate_10, deserialize_11, serialize_5] , result);
  signatureMapNative_6 = (result_0 = [] , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109' , result_0[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611' , result_0);
}

function GetLoggedInUserEmail_TypeSerializer(){
  $clinit_GetLoggedInUserEmail_TypeSerializer();
  SerializerBase.call(this, methodMapNative_6, signatureMapNative_6);
}

defineClass(318, 60, {}, GetLoggedInUserEmail_TypeSerializer);
var methodMapNative_6, signatureMapNative_6;
var Lcom_usp_expmgmt_client_service_GetLoggedInUserEmail_1TypeSerializer_2_classLit = createForClass('com.usp.expmgmt.client.service', 'GetLoggedInUserEmail_TypeSerializer', 318);
function $clinit_GetUserContacts_Proxy(){
  $clinit_GetUserContacts_Proxy = emptyMethod;
  SERIALIZER_6 = new GetUserContacts_TypeSerializer;
}

function $getUserContacts(this$static, callback){
  var ex, helper;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'GetUserContacts_Proxy', 'getUserContacts');
  try {
    $start(helper, 'com.usp.expmgmt.client.service.GetUserContacts', 0);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      alert_0(ex.detailMessage);
    }
     else 
      throw toJs($e0);
  }
}

function GetUserContacts_Proxy(){
  $clinit_GetUserContacts_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), 'EF8DAFC497376F8F3C4F3E1074172EE3', SERIALIZER_6);
}

defineClass(559, 59, {}, GetUserContacts_Proxy);
_.createStreamWriter = function createStreamWriter_7(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER_6;
var Lcom_usp_expmgmt_client_service_GetUserContacts_1Proxy_2_classLit = createForClass('com.usp.expmgmt.client.service', 'GetUserContacts_Proxy', 559);
function $clinit_GetUserContacts_TypeSerializer(){
  $clinit_GetUserContacts_TypeSerializer = emptyMethod;
  methodMapNative_7 = loadMethodsNative_2();
  signatureMapNative_7 = loadSignaturesNative_2();
}

function GetUserContacts_TypeSerializer(){
  $clinit_GetUserContacts_TypeSerializer();
  SerializerBase.call(this, methodMapNative_7, signatureMapNative_7);
}

function loadMethodsNative_2(){
  var result = {};
  result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_2, deserialize_2, serialize_1];
  result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_3, deserialize_3];
  result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_2];
  result['com.google.gwt.user.client.ui.ChangeListenerCollection/287642957'] = [instantiate_22, deserialize_24];
  result['com.google.gwt.user.client.ui.ClickListenerCollection/2152455986'] = [instantiate_23, deserialize_25];
  result['com.google.gwt.user.client.ui.FocusListenerCollection/119490835'] = [instantiate_24, deserialize_26];
  result['com.google.gwt.user.client.ui.FormHandlerCollection/3088681894'] = [instantiate_25, deserialize_27];
  result['com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242'] = [instantiate_26, deserialize_28];
  result['com.google.gwt.user.client.ui.LoadListenerCollection/3174178888'] = [instantiate_27, deserialize_29];
  result['com.google.gwt.user.client.ui.MouseListenerCollection/465158911'] = [instantiate_28, deserialize_30];
  result['com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552'] = [instantiate_29, deserialize_31];
  result['com.google.gwt.user.client.ui.PopupListenerCollection/1920131050'] = [instantiate_30, deserialize_32];
  result['com.google.gwt.user.client.ui.ScrollListenerCollection/210686268'] = [instantiate_31, deserialize_33];
  result['com.google.gwt.user.client.ui.TabListenerCollection/3768293299'] = [instantiate_32, deserialize_34];
  result['com.google.gwt.user.client.ui.TableListenerCollection/2254740473'] = [instantiate_33, deserialize_35];
  result['com.google.gwt.user.client.ui.TreeListenerCollection/3716243734'] = [instantiate_34, deserialize_36];
  result['java.lang.String/2004016611'] = [instantiate_10, deserialize_11, serialize_5];
  result['[Ljava.lang.String;/2600011424'] = [instantiate_9, deserialize_10];
  result['java.util.ArrayList/4159755760'] = [instantiate_14, deserialize_15];
  result['java.util.Arrays$ArrayList/2507071751'] = [instantiate_15, deserialize_16];
  result['java.util.Collections$EmptyList/4157118744'] = [instantiate_16, deserialize_18];
  result['java.util.Collections$SingletonList/1586180994'] = [instantiate_17, deserialize_19];
  result['java.util.LinkedList/3953877921'] = [instantiate_19, deserialize_21];
  result['java.util.Stack/1346942793'] = [instantiate_20, deserialize_22];
  result['java.util.Vector/3057315478'] = [instantiate_21, deserialize_23];
  result['org.slim3.datastore.S3QueryResultList/3468402502'] = [instantiate_37, deserialize_39];
  return result;
}

function loadSignaturesNative_2(){
  var result = [];
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ChangeListenerCollection/287642957';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ClickListenerCollection/2152455986';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FocusListenerCollection/119490835';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FormHandlerCollection/3088681894';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.LoadListenerCollection/3174178888';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseListenerCollection/465158911';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.PopupListenerCollection/1920131050';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ScrollListenerCollection/210686268';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TabListenerCollection/3768293299';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TableListenerCollection/2254740473';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TreeListenerCollection/3716243734';
  result[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1))] = '[Ljava.lang.String;/2600011424';
  result[getObjectIdentityHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760';
  result[getObjectIdentityHashCode(Ljava_util_Arrays$ArrayList_2_classLit)] = 'java.util.Arrays$ArrayList/2507071751';
  result[getObjectIdentityHashCode(Ljava_util_Collections$EmptyList_2_classLit)] = 'java.util.Collections$EmptyList/4157118744';
  result[getObjectIdentityHashCode(Ljava_util_Collections$SingletonList_2_classLit)] = 'java.util.Collections$SingletonList/1586180994';
  result[getObjectIdentityHashCode(Ljava_util_LinkedList_2_classLit)] = 'java.util.LinkedList/3953877921';
  result[getObjectIdentityHashCode(Ljava_util_Stack_2_classLit)] = 'java.util.Stack/1346942793';
  result[getObjectIdentityHashCode(Ljava_util_Vector_2_classLit)] = 'java.util.Vector/3057315478';
  result[getObjectIdentityHashCode(Lorg_slim3_datastore_S3QueryResultList_2_classLit)] = 'org.slim3.datastore.S3QueryResultList/3468402502';
  return result;
}

defineClass(561, 60, {}, GetUserContacts_TypeSerializer);
var methodMapNative_7, signatureMapNative_7;
var Lcom_usp_expmgmt_client_service_GetUserContacts_1TypeSerializer_2_classLit = createForClass('com.usp.expmgmt.client.service', 'GetUserContacts_TypeSerializer', 561);
function $clinit_SendReminderEmailService_Proxy(){
  $clinit_SendReminderEmailService_Proxy = emptyMethod;
  SERIALIZER_7 = new SendReminderEmailService_TypeSerializer;
}

function $sendEmail(this$static, data_0, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'SendReminderEmailService_Proxy', 'sendEmail');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.SendReminderEmailService', 1);
    $append(streamWriter, '' + $addString(streamWriter, 'com.usp.expmgmt.shared.model.ReminderEmailData/3902976853'));
    $writeObject(streamWriter, data_0);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , VOID));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      ex = $e0;
      $wnd.alert('Poking failed : ' + ex);
    }
     else 
      throw toJs($e0);
  }
}

function SendReminderEmailService_Proxy(){
  $clinit_SendReminderEmailService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), '58D7A18A42E5DE8C2CE9236CA6F2CD5D', SERIALIZER_7);
}

defineClass(575, 59, {}, SendReminderEmailService_Proxy);
_.createStreamWriter = function createStreamWriter_8(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER_7;
var Lcom_usp_expmgmt_client_service_SendReminderEmailService_1Proxy_2_classLit = createForClass('com.usp.expmgmt.client.service', 'SendReminderEmailService_Proxy', 575);
function $clinit_SendReminderEmailService_TypeSerializer(){
  var result, result_0;
  $clinit_SendReminderEmailService_TypeSerializer = emptyMethod;
  methodMapNative_8 = (result = {} , result['com.google.appengine.api.datastore.AppIdNamespace/2812750239'] = [undefined, undefined, serialize] , result['com.google.appengine.api.datastore.Key/1349195865'] = [undefined, undefined, serialize_0] , result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_2, deserialize_2, serialize_1] , result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_3, deserialize_3] , result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_2] , result['com.usp.expmgmt.shared.model.ReminderEmailData/3902976853'] = [undefined, undefined, serialize_33] , result['java.io.IOException/1159940531'] = [instantiate_4, deserialize_4] , result['java.io.UnsupportedEncodingException/1526756933'] = [instantiate_5, deserialize_5] , result['java.lang.Long/4227064769'] = [undefined, undefined, serialize_3] , result['java.lang.String/2004016611'] = [instantiate_10, deserialize_11, serialize_5] , result);
  signatureMapNative_8 = (result_0 = [] , result_0[getObjectIdentityHashCode(Lcom_google_appengine_api_datastore_AppIdNamespace_2_classLit)] = 'com.google.appengine.api.datastore.AppIdNamespace/2812750239' , result_0[getObjectIdentityHashCode(Lcom_google_appengine_api_datastore_Key_2_classLit)] = 'com.google.appengine.api.datastore.Key/1349195865' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109' , result_0[getObjectIdentityHashCode(Lcom_usp_expmgmt_shared_model_ReminderEmailData_2_classLit)] = 'com.usp.expmgmt.shared.model.ReminderEmailData/3902976853' , result_0[getObjectIdentityHashCode(Ljava_io_IOException_2_classLit)] = 'java.io.IOException/1159940531' , result_0[getObjectIdentityHashCode(Ljava_io_UnsupportedEncodingException_2_classLit)] = 'java.io.UnsupportedEncodingException/1526756933' , result_0[getObjectIdentityHashCode(Ljava_lang_Long_2_classLit)] = 'java.lang.Long/4227064769' , result_0[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611' , result_0);
}

function SendReminderEmailService_TypeSerializer(){
  $clinit_SendReminderEmailService_TypeSerializer();
  SerializerBase.call(this, methodMapNative_8, signatureMapNative_8);
}

defineClass(579, 60, {}, SendReminderEmailService_TypeSerializer);
var methodMapNative_8, signatureMapNative_8;
var Lcom_usp_expmgmt_client_service_SendReminderEmailService_1TypeSerializer_2_classLit = createForClass('com.usp.expmgmt.client.service', 'SendReminderEmailService_TypeSerializer', 579);
function $clinit_UserExpenseReportRetriever_Proxy(){
  $clinit_UserExpenseReportRetriever_Proxy = emptyMethod;
  SERIALIZER_8 = new UserExpenseReportRetriever_TypeSerializer;
}

function $getUserExpenseReportsAsJson(this$static, ownerEmail, userEmail, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'UserExpenseReportRetriever_Proxy', 'getUserExpenseReportsAsJson');
  try {
    streamWriter = $start(helper, 'com.usp.expmgmt.client.service.UserExpenseReportRetriever', 2);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, ownerEmail));
    $append(streamWriter, '' + $addString(streamWriter, userEmail));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 38)) {
      replace_0('/logoutURL');
    }
     else 
      throw toJs($e0);
  }
}

function UserExpenseReportRetriever_Proxy(){
  $clinit_UserExpenseReportRetriever_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), '86EC347AFA77D2714E2C1804B86288F2', SERIALIZER_8);
}

defineClass(203, 59, {}, UserExpenseReportRetriever_Proxy);
_.createStreamWriter = function createStreamWriter_9(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER_8;
var Lcom_usp_expmgmt_client_service_UserExpenseReportRetriever_1Proxy_2_classLit = createForClass('com.usp.expmgmt.client.service', 'UserExpenseReportRetriever_Proxy', 203);
function $clinit_UserExpenseReportRetriever_TypeSerializer(){
  $clinit_UserExpenseReportRetriever_TypeSerializer = emptyMethod;
  methodMapNative_9 = loadMethodsNative_3();
  signatureMapNative_9 = loadSignaturesNative_3();
}

function UserExpenseReportRetriever_TypeSerializer(){
  $clinit_UserExpenseReportRetriever_TypeSerializer();
  SerializerBase.call(this, methodMapNative_9, signatureMapNative_9);
}

function loadMethodsNative_3(){
  var result = {};
  result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_2, deserialize_2, serialize_1];
  result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_3, deserialize_3];
  result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_2];
  result['com.google.gwt.user.client.ui.ChangeListenerCollection/287642957'] = [instantiate_22, deserialize_24];
  result['com.google.gwt.user.client.ui.ClickListenerCollection/2152455986'] = [instantiate_23, deserialize_25];
  result['com.google.gwt.user.client.ui.FocusListenerCollection/119490835'] = [instantiate_24, deserialize_26];
  result['com.google.gwt.user.client.ui.FormHandlerCollection/3088681894'] = [instantiate_25, deserialize_27];
  result['com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242'] = [instantiate_26, deserialize_28];
  result['com.google.gwt.user.client.ui.LoadListenerCollection/3174178888'] = [instantiate_27, deserialize_29];
  result['com.google.gwt.user.client.ui.MouseListenerCollection/465158911'] = [instantiate_28, deserialize_30];
  result['com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552'] = [instantiate_29, deserialize_31];
  result['com.google.gwt.user.client.ui.PopupListenerCollection/1920131050'] = [instantiate_30, deserialize_32];
  result['com.google.gwt.user.client.ui.ScrollListenerCollection/210686268'] = [instantiate_31, deserialize_33];
  result['com.google.gwt.user.client.ui.TabListenerCollection/3768293299'] = [instantiate_32, deserialize_34];
  result['com.google.gwt.user.client.ui.TableListenerCollection/2254740473'] = [instantiate_33, deserialize_35];
  result['com.google.gwt.user.client.ui.TreeListenerCollection/3716243734'] = [instantiate_34, deserialize_36];
  result['java.lang.String/2004016611'] = [instantiate_10, deserialize_11, serialize_5];
  result['java.util.ArrayList/4159755760'] = [instantiate_14, deserialize_15];
  result['java.util.Arrays$ArrayList/2507071751'] = [instantiate_15, deserialize_16];
  result['java.util.Collections$EmptyList/4157118744'] = [instantiate_16, deserialize_18];
  result['java.util.Collections$SingletonList/1586180994'] = [instantiate_17, deserialize_19];
  result['java.util.LinkedList/3953877921'] = [instantiate_19, deserialize_21];
  result['java.util.Stack/1346942793'] = [instantiate_20, deserialize_22];
  result['java.util.Vector/3057315478'] = [instantiate_21, deserialize_23];
  result['org.slim3.datastore.S3QueryResultList/3468402502'] = [instantiate_37, deserialize_39];
  return result;
}

function loadSignaturesNative_3(){
  var result = [];
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ChangeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ChangeListenerCollection/287642957';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ClickListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ClickListenerCollection/2152455986';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_FocusListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FocusListenerCollection/119490835';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_FormHandlerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.FormHandlerCollection/3088681894';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_KeyboardListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.KeyboardListenerCollection/1040442242';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_LoadListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.LoadListenerCollection/3174178888';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_MouseListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseListenerCollection/465158911';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_MouseWheelListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.MouseWheelListenerCollection/370304552';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_PopupListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.PopupListenerCollection/1920131050';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_ScrollListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.ScrollListenerCollection/210686268';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TabListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TabListenerCollection/3768293299';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TableListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TableListenerCollection/2254740473';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_ui_TreeListenerCollection_2_classLit)] = 'com.google.gwt.user.client.ui.TreeListenerCollection/3716243734';
  result[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
  result[getObjectIdentityHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760';
  result[getObjectIdentityHashCode(Ljava_util_Arrays$ArrayList_2_classLit)] = 'java.util.Arrays$ArrayList/2507071751';
  result[getObjectIdentityHashCode(Ljava_util_Collections$EmptyList_2_classLit)] = 'java.util.Collections$EmptyList/4157118744';
  result[getObjectIdentityHashCode(Ljava_util_Collections$SingletonList_2_classLit)] = 'java.util.Collections$SingletonList/1586180994';
  result[getObjectIdentityHashCode(Ljava_util_LinkedList_2_classLit)] = 'java.util.LinkedList/3953877921';
  result[getObjectIdentityHashCode(Ljava_util_Stack_2_classLit)] = 'java.util.Stack/1346942793';
  result[getObjectIdentityHashCode(Ljava_util_Vector_2_classLit)] = 'java.util.Vector/3057315478';
  result[getObjectIdentityHashCode(Lorg_slim3_datastore_S3QueryResultList_2_classLit)] = 'org.slim3.datastore.S3QueryResultList/3468402502';
  return result;
}

defineClass(464, 60, {}, UserExpenseReportRetriever_TypeSerializer);
var methodMapNative_9, signatureMapNative_9;
var Lcom_usp_expmgmt_client_service_UserExpenseReportRetriever_1TypeSerializer_2_classLit = createForClass('com.usp.expmgmt.client.service', 'UserExpenseReportRetriever_TypeSerializer', 464);
function ExpenseReport(){
}

defineClass(122, 1, {122:1, 3:1}, ExpenseReport);
_.equals_0 = function equals_8(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (Lcom_usp_expmgmt_shared_model_ExpenseReport_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj)) {
    return false;
  }
  other = castTo(obj, 122);
  if (!this.key_0) {
    if (other.key_0) {
      return false;
    }
  }
   else if (!$equals(this.key_0, other.key_0)) {
    return false;
  }
  return true;
}
;
_.hashCode_0 = function hashCode_10(){
  var result;
  result = 31 + (!this.key_0?0:$hashCode(this.key_0));
  return result;
}
;
_.date_0 = '12th Jan, 2014';
_.dateAndTime = null;
_.description_0 = 'no description';
_.ownerEmail_0 = 'noEmail';
var Lcom_usp_expmgmt_shared_model_ExpenseReport_2_classLit = createForClass('com.usp.expmgmt.shared.model', 'ExpenseReport', 122);
function deserialize_37(streamReader, instance){
  deserialize_9(streamReader, instance);
}

function instantiate_35(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_usp_expmgmt_shared_model_ExpenseReport_2_classLit, $intern_2, 122, size_0, 0, 1);
}

function deserialize_38(streamReader, instance){
  setAmountArray(instance, castTo($readObject(streamReader), 19));
  setAmountList(instance, castTo($readObject(streamReader), 24));
  setDate(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDateAndTime(instance, castTo($readObject(streamReader), 20));
  setDescription(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setEmailArray(instance, castTo($readObject(streamReader), 19));
  setEmailList(instance, castTo($readObject(streamReader), 24));
  setKey(instance, castTo($readObject(streamReader), 104));
  setOwnerEmail(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setVersion(instance, castTo($readObject(streamReader), 72));
}

function instantiate_36(streamReader){
  return new ExpenseReport;
}

function setAmountArray(instance, value_0){
  instance.amountArray = value_0;
}

function setAmountList(instance, value_0){
  instance.amountList_0 = value_0;
}

function setDate(instance, value_0){
  instance.date_0 = value_0;
}

function setDateAndTime(instance, value_0){
  instance.dateAndTime = value_0;
}

function setDescription(instance, value_0){
  instance.description_0 = value_0;
}

function setEmailArray(instance, value_0){
  instance.emailArray = value_0;
}

function setEmailList(instance, value_0){
  instance.emailList_0 = value_0;
}

function setKey(instance, value_0){
  instance.key_0 = value_0;
}

function setOwnerEmail(instance, value_0){
  instance.ownerEmail_0 = value_0;
}

function setVersion(instance, value_0){
  instance.version = value_0;
}

function $setAmount(this$static, amount){
  this$static.amount_0 = amount;
}

function $setEmailTo(this$static, emailTo){
  this$static.emailTo = emailTo;
}

function ReminderEmailData(){
}

defineClass(155, 1, {155:1, 3:1}, ReminderEmailData);
_.equals_0 = function equals_9(obj){
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (Lcom_usp_expmgmt_shared_model_ReminderEmailData_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj)) {
    return false;
  }
  castTo(obj, 155);
  return true;
}
;
_.hashCode_0 = function hashCode_11(){
  return 31;
}
;
var Lcom_usp_expmgmt_shared_model_ReminderEmailData_2_classLit = createForClass('com.usp.expmgmt.shared.model', 'ReminderEmailData', 155);
function serialize_33(streamWriter, instance){
  $writeString(streamWriter, instance.amount_0);
  $writeString(streamWriter, instance.emailTo);
  $writeObject(streamWriter, instance.key_0);
  $writeObject(streamWriter, instance.version);
}

function IOException(){
  Exception.call(this);
}

defineClass(168, 16, $intern_4, IOException);
var Ljava_io_IOException_2_classLit = createForClass('java.io', 'IOException', 168);
function UnsupportedEncodingException(){
  IOException.call(this);
}

defineClass(230, 168, $intern_4, UnsupportedEncodingException);
var Ljava_io_UnsupportedEncodingException_2_classLit = createForClass('java.io', 'UnsupportedEncodingException', 230);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(112, 1, {162:1});
_.toString_0 = function toString_18(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 112);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(299, 26, $intern_4, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 299);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(32, 26, $intern_4, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 32);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

function ArrayIndexOutOfBoundsException_0(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

defineClass(207, 32, $intern_4, ArrayIndexOutOfBoundsException, ArrayIndexOutOfBoundsException_0);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 207);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(298, 26, $intern_4, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 298);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE_1 = false;
}

function $booleanValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

function $compareTo_1(this$static, b){
  return compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare_2(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?$compareTo_9(this$static, castToString(other)):instanceOfDouble(this$static)?$compareTo_4(this$static, (checkCriticalType(other == null || instanceOfDouble(other)) , other)):instanceOfBoolean(this$static)?$compareTo_1(this$static, (checkCriticalType(other == null || instanceOfBoolean(other)) , other)):this$static.compareTo(other);
}

booleanCastMap = {3:1, 165:1, 4:1};
var FALSE_1;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 165);
function __parseAndValidateDouble(s){
  floatRegex == null && (floatRegex = new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$'));
  if (!floatRegex.test(s)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return parseFloat(s);
}

function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 45 || (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 43))?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit_0((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i))) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_19;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(78, 1, {3:1, 78:1});
var floatRegex;
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 78);
function $compareTo_2(this$static, b){
  return this$static.value_0 - b.value_0;
}

function Byte(value_0){
  this.value_0 = value_0;
}

function valueOf(b){
  var rebase, result;
  rebase = b + 128;
  result = ($clinit_Byte$BoxedValues() , boxedValues)[rebase];
  !result && (result = boxedValues[rebase] = new Byte(b));
  return result;
}

defineClass(87, 78, {3:1, 87:1, 4:1, 78:1}, Byte);
_.compareTo = function compareTo_3(b){
  return $compareTo_2(this, castTo(b, 87));
}
;
_.equals_0 = function equals_10(o){
  return instanceOf(o, 87) && castTo(o, 87).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_12(){
  return this.value_0;
}
;
_.toString_0 = function toString_19(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 87);
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Byte_2_classLit, $intern_2, 87, 256, 0, 1);
}

var boxedValues;
function $compareTo_3(this$static, c){
  return this$static.value_0 - c.value_0;
}

function Character(value_0){
  this.value_0 = value_0;
}

function digit_0(c){
  if (c >= 48 && c < 48 + $wnd.Math.min(10, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function valueOf_0(c){
  var result;
  if (c < 128) {
    result = ($clinit_Character$BoxedValues() , boxedValues_0)[c];
    !result && (result = boxedValues_0[c] = new Character(c));
    return result;
  }
  return new Character(c);
}

defineClass(79, 1, {3:1, 79:1, 4:1}, Character);
_.compareTo = function compareTo_4(c){
  return $compareTo_3(this, castTo(c, 79));
}
;
_.equals_0 = function equals_11(o){
  return instanceOf(o, 79) && castTo(o, 79).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_13(){
  return this.value_0;
}
;
_.toString_0 = function toString_20(){
  return String.fromCharCode(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 79);
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Character_2_classLit, $intern_2, 79, 128, 0, 1);
}

var boxedValues_0;
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(229, 26, $intern_4, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 229);
function $compareTo_4(this$static, b){
  return compare_3((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare_3(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

doubleCastMap = {3:1, 4:1, 167:1, 78:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 167);
function $compareTo_5(this$static, b){
  return compare_3(this$static.value_0, b.value_0);
}

function Float(value_0){
  this.value_0 = value_0;
}

defineClass(97, 78, {3:1, 4:1, 97:1, 78:1}, Float);
_.compareTo = function compareTo_5(b){
  return $compareTo_5(this, castTo(b, 97));
}
;
_.equals_0 = function equals_12(o){
  return instanceOf(o, 97) && castTo(o, 97).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_14(){
  return round_int(this.value_0);
}
;
_.toString_0 = function toString_22(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 97);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(31, 26, $intern_51, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 31);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(40, 26, $intern_4, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 40);
function $compareTo_6(this$static, b){
  return compare_4(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function compare_4(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf_1(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_1)[rebase];
    !result && (result = boxedValues_1[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(62, 78, {3:1, 4:1, 62:1, 78:1}, Integer);
_.compareTo = function compareTo_6(b){
  return $compareTo_6(this, castTo(b, 62));
}
;
_.equals_0 = function equals_13(o){
  return instanceOf(o, 62) && castTo(o, 62).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_15(){
  return this.value_0;
}
;
_.toString_0 = function toString_23(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 62);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_1 = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_2, 62, 256, 0, 1);
}

var boxedValues_1;
function $compareTo_7(this$static, b){
  return compare_5(this$static.value_0, b.value_0);
}

function Long(value_0){
  this.value_0 = value_0;
}

function compare_5(x_0, y_0){
  return compare_1(x_0, y_0) < 0?-1:compare_1(x_0, y_0) > 0?1:0;
}

function valueOf_2(i){
  var rebase, result;
  if (compare_1(i, -129) > 0 && compare_1(i, 128) < 0) {
    rebase = toInt_0(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_2)[rebase];
    !result && (result = boxedValues_2[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(72, 78, {3:1, 4:1, 72:1, 78:1}, Long);
_.compareTo = function compareTo_7(b){
  return $compareTo_7(this, castTo(b, 72));
}
;
_.equals_0 = function equals_14(o){
  return instanceOf(o, 72) && eq(castTo(o, 72).value_0, this.value_0);
}
;
_.hashCode_0 = function hashCode_16(){
  return toInt_0(this.value_0);
}
;
_.toString_0 = function toString_24(){
  return '' + toString_9(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 72);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_2 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, $intern_2, 72, 256, 0, 1);
}

var boxedValues_2;
defineClass(698, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(54, 132, $intern_4, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 54);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(98, 31, $intern_51, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 98);
function $compareTo_8(this$static, b){
  return this$static.value_0 - b.value_0;
}

function Short(value_0){
  this.value_0 = value_0;
}

function valueOf_3(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = ($clinit_Short$BoxedValues() , boxedValues_3)[rebase];
    !result && (result = boxedValues_3[rebase] = new Short(s));
    return result;
  }
  return new Short(s);
}

defineClass(80, 78, {3:1, 4:1, 78:1, 80:1}, Short);
_.compareTo = function compareTo_8(b){
  return $compareTo_8(this, castTo(b, 80));
}
;
_.equals_0 = function equals_15(o){
  return instanceOf(o, 80) && castTo(o, 80).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_17(){
  return this.value_0;
}
;
_.toString_0 = function toString_25(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 80);
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = emptyMethod;
  boxedValues_3 = initUnidimensionalArray(Ljava_lang_Short_2_classLit, $intern_2, 80, 256, 0, 1);
}

var boxedValues_3;
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $compareTo_9(this$static, other){
  var a, b;
  a = (checkCriticalNotNull(this$static) , this$static);
  b = (checkCriticalNotNull(other) , other);
  return a == b?0:a < b?-1:1;
}

function $equals_0(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  checkCriticalNotNull(this$static);
  if (other == null) {
    return false;
  }
  if ($equals_0(this$static, other)) {
    return true;
  }
  return this$static.length == other.length && $equals_0(this$static.toLowerCase(), other.toLowerCase());
}

function $indexOf_2(this$static, str){
  return this$static.indexOf(str);
}

function $replace_0(this$static, from){
  var regex;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  return $replaceAll(this$static, regex, ' ');
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $split(this$static){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(' ', 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_16, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '') {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = trail.substr(0, matchIndex);
      trail = $substring_0(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

function $startsWith(this$static, prefix){
  return $equals_0(this$static.substr(0, prefix.length), prefix);
}

function $startsWith_0(this$static, prefix, toffset){
  return toffset >= 0 && $equals_0(this$static.substr(toffset, prefix.length), prefix);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $toLowerCase(this$static, locale){
  return locale == ($clinit_Locale() , $clinit_Locale() , defaultLocale)?this$static.toLocaleLowerCase():this$static.toLowerCase();
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_30) {
    hiSurrogate = 55296 + (codePoint - $intern_30 >> 10 & 1023) & $intern_15;
    loSurrogate = 56320 + (codePoint - $intern_30 & 1023) & $intern_15;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_15);
  }
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    checkCriticalStringElementIndex(pos + 1, replaceStr.length);
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_4(x_0){
  return x_0 == null?'null':'' + (checkCriticalNotNull(x_0) , x_0);
}

function valueOf_5(x_0){
  return valueOf_6(x_0, x_0.length);
}

function valueOf_6(x_0, count){
  var batchEnd, batchStart, s;
  checkCriticalStringBounds(count, x_0.length);
  s = '';
  for (batchStart = 0; batchStart < count;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, count);
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {3:1, 162:1, 4:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(231, 112, {162:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang', 'StringBuffer', 231);
function $append_1(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $replace_1(this$static, start_0, toInsert){
  this$static.string = $substring_0(this$static.string, 0, start_0) + toInsert + this$static.string.substr(9);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(27, 112, {162:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 27);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(170, 32, $intern_4, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 170);
defineClass(702, 1, {});
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(68, 26, $intern_4, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 68);
function Date_4(date){
  Date_2.call(this, date);
}

defineClass(395, 20, $intern_18, Date_4);
_.toString_0 = function toString_26(){
  return '' + ($intern_17 + (this.jsdate.getFullYear() - $intern_17)) + '-' + padTwo(this.jsdate.getMonth() + 1) + '-' + padTwo(this.jsdate.getDate());
}
;
var Ljava_sql_Date_2_classLit = createForClass('java.sql', 'Date', 395);
function Time(time){
  Date_2.call(this, time);
}

defineClass(396, 20, $intern_18, Time);
_.toString_0 = function toString_27(){
  return padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds());
}
;
var Ljava_sql_Time_2_classLit = createForClass('java.sql', 'Time', 396);
function $compareTo_10(this$static, o){
  var cmp;
  cmp = compare_5(fromDouble_0(this$static.jsdate.getTime()), fromDouble_0(o.jsdate.getTime()));
  return cmp == 0?compare_4(this$static.nanos, o.nanos):cmp;
}

function $equals_1(this$static, ts){
  return !!ts && eq(fromDouble_0(this$static.jsdate.getTime()), fromDouble_0(ts.jsdate.getTime())) && this$static.nanos == ts.nanos;
}

function $setNanos(this$static, n){
  if (n < 0 || n > 999999999) {
    throw toJs(new IllegalArgumentException_0('nanos out of range ' + n));
  }
  this$static.nanos = n;
  $setTime(this$static, add_2(mul_0(div_0(fromDouble_0(this$static.jsdate.getTime()), $intern_5), $intern_5), this$static.nanos / 1000000 | 0));
}

function Timestamp(time){
  Date_2.call(this, time);
  this.nanos = toInt_0(mod(time, $intern_5)) * 1000000;
}

function padNine(value_0){
  var asString, toReturn;
  toReturn = new StringBuilder_1('000000000');
  asString = '' + value_0;
  toReturn = $replace_1(toReturn, 9 - asString.length, asString);
  return toReturn.string;
}

defineClass(85, 20, {3:1, 4:1, 85:1, 20:1}, Timestamp);
_.compareTo_0 = function compareTo_9(o){
  return instanceOf(o, 85)?$compareTo_10(this, castTo(o, 85)):$compareTo_10(this, new Timestamp(o.getTime_0()));
}
;
_.equals_0 = function equals_16(ts){
  return instanceOf(ts, 85) && $equals_1(this, castTo(ts, 85));
}
;
_.getTime_0 = function getTime_0(){
  return fromDouble_0(this.jsdate.getTime());
}
;
_.hashCode_0 = function hashCode_18(){
  var time;
  return time = fromDouble_0(this.jsdate.getTime()) , toInt_0(xor_0(time, shru_0(time, 32)));
}
;
_.toString_0 = function toString_28(){
  return '' + ($intern_17 + (this.jsdate.getFullYear() - $intern_17)) + '-' + padTwo(1 + this.jsdate.getMonth()) + '-' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + '.' + padNine(this.nanos);
}
;
_.nanos = 0;
var Ljava_sql_Timestamp_2_classLit = createForClass('java.sql', 'Timestamp', 85);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_1(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext_0();) {
    entry = castTo(iter.next_1(), 33);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_2();
      }
      return entry;
    }
  }
  return null;
}

function $toString_3(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_10(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(638, 1, {55:1});
_.containsEntry = function containsEntry(entry){
  return $containsEntry(this, entry);
}
;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals_0 = function equals_17(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 55)) {
    return false;
  }
  otherMap = castTo(obj, 55);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 33);
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_1 = function get_3(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode_0 = function hashCode_19(){
  return hashCode_23(this.entrySet());
}
;
_.isEmpty = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.remove_3 = function remove_19(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_3(){
  return this.entrySet().size_1();
}
;
_.toString_0 = function toString_29(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 33);
    $add_13(joiner, $toString_3(this, entry.getKey()) + '=' + $toString_3(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 638);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get_4(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_5(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_2(this$static.stringMap, key);
}

function $put_0(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_1(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_1(this$static.hashCodeMap, null, value_0):$put_2(this$static.stringMap, key, value_0);
}

function $remove_11(this$static, key){
  return instanceOfString(key)?$removeStringValue(this$static, key):$remove_16(this$static.hashCodeMap, key);
}

function $removeStringValue(this$static, key){
  return key == null?$remove_16(this$static.hashCodeMap, null):$remove_17(this$static.stringMap, key);
}

function $reset(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

function AbstractHashMap(){
  $reset(this);
}

defineClass(175, 638, {55:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_4(key){
  return $get_4(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put_0(this, key, value_0);
}
;
_.remove_3 = function remove_20(key){
  return $remove_11(this, key);
}
;
_.size_1 = function size_4(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 175);
defineClass(640, 639, $intern_52);
_.equals_0 = function equals_18(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 67)) {
    return false;
  }
  other = castTo(o, 67);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_20(){
  return hashCode_23(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 640);
function $contains_0(this$static, o){
  if (instanceOf(o, 33)) {
    return $containsEntry(this$static.this$01, castTo(o, 33));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(81, 640, $intern_52, AbstractHashMap$EntrySet);
_.contains = function contains_2(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_9(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_0 = function remove_21(entry){
  var key;
  if ($contains_0(this, entry)) {
    key = castTo(entry, 33).getKey();
    $remove_11(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_5(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 81);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_4(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = castTo(this$static.current.next_1(), 33);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_12(this$static){
  checkCriticalState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_2();
  this$static.last = null;
  this$static.hasNext = $computeHasNext(this$static);
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(82, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_5(){
  return $next_4(this);
}
;
_.hasNext_0 = function hasNext_4(){
  return this.hasNext;
}
;
_.remove_2 = function remove_22(){
  $remove_12(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 82);
function $hasNext(this$static){
  return this$static.i < this$static.this$01_0.size_1();
}

function $next_5(this$static){
  checkCriticalElement(this$static.i < this$static.this$01_0.size_1());
  return this$static.this$01_0.get_0(this$static.last = this$static.i++);
}

function $remove_13(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.remove_1(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(179, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_5(){
  return $hasNext(this);
}
;
_.next_1 = function next_6(){
  return $next_5(this);
}
;
_.remove_2 = function remove_23(){
  $remove_13(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 179);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(180, 179, {}, AbstractList$ListIteratorImpl);
_.remove_2 = function remove_24(){
  $remove_13(this);
}
;
_.add_3 = function add_11(o){
  this.this$01.add_1(this.i, o);
  ++this.i;
  this.last = -1;
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 180);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(139, 640, $intern_52, AbstractMap$1);
_.contains = function contains_3(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_10(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove_0 = function remove_25(key){
  if ($containsKey(this.this$01, key)) {
    $remove_11(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_6(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 139);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(119, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_6(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_7(){
  var entry;
  return entry = $next_4(this.val$outerIter2) , entry.getKey();
}
;
_.remove_2 = function remove_26(){
  $remove_12(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 119);
function $setValue_3(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(118, 1, {118:1, 33:1});
_.equals_0 = function equals_19(other){
  var entry;
  if (!instanceOf(other, 33)) {
    return false;
  }
  entry = castTo(other, 33);
  return equals_25(this.key_0, entry.getKey()) && equals_25(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue_1(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_21(){
  return hashCode_26(this.key_0) ^ hashCode_26(this.value_0);
}
;
_.setValue = function setValue(value_0){
  return $setValue_3(this, value_0);
}
;
_.toString_0 = function toString_30(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 118);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(102, 118, {118:1, 102:1, 33:1}, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 102);
defineClass(644, 1, {33:1});
_.equals_0 = function equals_20(other){
  var entry;
  if (!instanceOf(other, 33)) {
    return false;
  }
  entry = castTo(other, 33);
  return equals_25(this.val$entry2.value[0], entry.getKey()) && equals_25($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_22(){
  return hashCode_26(this.val$entry2.value[0]) ^ hashCode_26($getValue(this));
}
;
_.toString_0 = function toString_31(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 644);
function $containsEntry_0(this$static, entry){
  var key, lookupEntry;
  key = entry.getKey();
  lookupEntry = $getEntry_0(this$static, key);
  return !!lookupEntry && equals_25(lookupEntry.value_0, entry.getValue());
}

function $containsKey_0(this$static, k){
  return !!$getEntry_0(this$static, k);
}

defineClass(661, 638, {55:1});
_.containsEntry = function containsEntry_0(entry){
  return $containsEntry_0(this, entry);
}
;
_.containsKey = function containsKey_1(k){
  return $containsKey_0(this, k);
}
;
_.entrySet = function entrySet_0(){
  return new AbstractNavigableMap$EntrySet(this);
}
;
_.get_1 = function get_5(k){
  return getEntryValueOrNull($getEntry_0(this, k));
}
;
var Ljava_util_AbstractNavigableMap_2_classLit = createForClass('java.util', 'AbstractNavigableMap', 661);
function AbstractNavigableMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(212, 640, $intern_52, AbstractNavigableMap$EntrySet);
_.contains = function contains_4(o){
  return instanceOf(o, 33) && $containsEntry_0(this.this$01, castTo(o, 33));
}
;
_.iterator = function iterator_11(){
  return new TreeMap$EntryIterator(this.this$01);
}
;
_.remove_0 = function remove_27(o){
  var entry;
  if (instanceOf(o, 33)) {
    entry = castTo(o, 33);
    return $removeEntry(this.this$01, entry);
  }
  return false;
}
;
_.size_1 = function size_7(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractNavigableMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/EntrySet', 212);
function AbstractNavigableMap$NavigableKeySet(map_0){
  this.map_0 = map_0;
}

defineClass(213, 640, $intern_52, AbstractNavigableMap$NavigableKeySet);
_.contains = function contains_5(o){
  return $containsKey_0(this.map_0, o);
}
;
_.iterator = function iterator_12(){
  var entryIterator;
  return entryIterator = new TreeMap$EntryIterator((new TreeMap$EntrySet(this.map_0)).this$01) , new AbstractNavigableMap$NavigableKeySet$1(entryIterator);
}
;
_.remove_0 = function remove_28(o){
  if ($containsKey_0(this.map_0, o)) {
    $remove_18(this.map_0, o);
    return true;
  }
  return false;
}
;
_.size_1 = function size_8(){
  return this.map_0.size_0;
}
;
var Ljava_util_AbstractNavigableMap$NavigableKeySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/NavigableKeySet', 213);
function AbstractNavigableMap$NavigableKeySet$1(val$entryIterator){
  this.val$entryIterator2 = val$entryIterator;
}

defineClass(159, 1, {}, AbstractNavigableMap$NavigableKeySet$1);
_.hasNext_0 = function hasNext_7(){
  return $hasNext(this.val$entryIterator2.iter);
}
;
_.next_1 = function next_8(){
  var entry;
  return entry = $next_7(this.val$entryIterator2) , entry.getKey();
}
;
_.remove_2 = function remove_29(){
  $remove_19(this.val$entryIterator2);
}
;
var Ljava_util_AbstractNavigableMap$NavigableKeySet$1_2_classLit = createForClass('java.util', 'AbstractNavigableMap/NavigableKeySet/1', 159);
defineClass(643, 642, $intern_39);
_.add_1 = function add_12(index_0, element){
  var iter;
  iter = this.listIterator_0(index_0);
  iter.add_3(element);
}
;
_.get_0 = function get_6(index_0){
  var iter;
  iter = this.listIterator_0(index_0);
  try {
    return iter.next_1();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 52)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't get element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
_.iterator = function iterator_13(){
  return this.listIterator_0(0);
}
;
_.remove_1 = function remove_30(index_0){
  var iter, old;
  iter = this.listIterator_0(index_0);
  try {
    old = iter.next_1();
    iter.remove_2();
    return old;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 52)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't remove element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 643);
function $next_6(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function $remove_14(this$static){
  checkCriticalState(this$static.last != -1);
  $remove_2(this$static.this$01, this$static.i = this$static.last);
  this$static.last = -1;
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(35, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_8(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_9(){
  return $next_6(this);
}
;
_.remove_2 = function remove_31(){
  $remove_14(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 35);
function insertionSort(array, low, high){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && $compare_0(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && $compare_0(src_0[srcLow], src_0[topIdx]) <= 0?setCheck(dest, destLow++, src_0[srcLow++]):setCheck(dest, destLow++, src_0[topIdx++]);
  }
}

function mergeSort(temp, array, low, high, ofs){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort(array, temp, tempLow, tempMid, -ofs);
  mergeSort(array, temp, tempMid, tempHigh, -ofs);
  if ($compare_0(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high);
}

function sort_0(x_0, toIndex){
  var temp;
  checkCriticalArrayBounds(toIndex, x_0.length);
  $clinit_Comparators();
  temp = x_0.slice(0, toIndex);
  mergeSort(temp, x_0, 0, toIndex, -0);
}

function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(397, 642, $intern_40, Arrays$ArrayList);
_.contains = function contains_6(o){
  return $indexOf(this, o) != -1;
}
;
_.get_0 = function get_7(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_9(){
  return this.array.length;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 397);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_23(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_24(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(398, 642, $intern_40, Collections$EmptyList);
_.contains = function contains_7(object){
  return false;
}
;
_.get_0 = function get_8(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_14(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_10(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 398);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(403, 1, {}, Collections$EmptyListIterator);
_.add_3 = function add_13(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.hasNext_0 = function hasNext_9(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_10(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_2 = function remove_32(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 403);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(399, 642, $intern_40, Collections$SingletonList);
_.contains = function contains_8(item_0){
  return equals_25(this.element, item_0);
}
;
_.get_0 = function get_9(index_0){
  checkCriticalElementIndex(index_0, 1);
  return this.element;
}
;
_.size_1 = function size_11(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 399);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  INTERNAL_NATURAL_ORDER = new Comparators$NaturalOrderComparator;
}

function naturalOrderToNull(cmp){
  $clinit_Comparators();
  return cmp == INTERNAL_NATURAL_ORDER?null:cmp;
}

var INTERNAL_NATURAL_ORDER;
function $compare(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}

function $compare_0(a, b){
  return $compare(castTo(a, 4), castTo(b, 4));
}

function Comparators$NaturalOrderComparator(){
}

defineClass(591, 1, $intern_2, Comparators$NaturalOrderComparator);
_.equals_0 = function equals_21(other){
  return this === other;
}
;
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass('java.util', 'Comparators/NaturalOrderComparator', 591);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function recordLastKnownStructure(host, iterator){
  iterator.$modCount = host.$modCount;
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(547, 26, $intern_4, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 547);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_16, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  AbstractHashMap.call(this);
}

defineClass(48, 175, $intern_53, HashMap);
_.equals_1 = function equals_22(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 48);
function $add_12(this$static, o){
  var old;
  old = $put_0(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_1(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_15(this$static, o){
  return $remove_11(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(103, 640, $intern_54, HashSet);
_.add_0 = function add_14(o){
  return $add_12(this, o);
}
;
_.contains = function contains_9(o){
  return $contains_1(this, o);
}
;
_.isEmpty = function isEmpty_2(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_15(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove_0 = function remove_33(o){
  return $remove_15(this, o);
}
;
_.size_1 = function size_12(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 103);
function IdentityHashMap(){
  AbstractHashMap.call(this);
}

defineClass(475, 175, $intern_53, IdentityHashMap);
_.equals_0 = function equals_23(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 55)) {
    return false;
  }
  otherMap = castTo(obj, 55);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 33);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(instanceOfString(otherKey)?$hasStringValue(this, otherKey):!!$getEntry(this.hashCodeMap, otherKey))) {
      return false;
    }
    if (maskUndefined(otherValue) !== maskUndefined(instanceOfString(otherKey)?$getStringValue(this, otherKey):getEntryValueOrNull($getEntry(this.hashCodeMap, otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.equals_1 = function equals_24(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2);
}
;
_.getHashCode = function getHashCode_0(key){
  return getHashCode_1(key);
}
;
_.hashCode_0 = function hashCode_25(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next_4(entry$iterator);
    hashCode += getIdentityHashCode(entry.getKey());
    hashCode += getIdentityHashCode(entry.getValue());
  }
  return hashCode;
}
;
var Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util', 'IdentityHashMap', 475);
function $findEntryInChain(this$static, key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  return $findEntryInChain(this$static, key, $getChainOrEmpty(this$static, key == null?0:this$static.host.getHashCode(key)));
}

function $put_1(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  }
   else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_16(this$static, key){
  var chain, chain0, entry, hashCode, i;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (this$static.host.equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete_0(this$static.backingMap, hashCode);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(406, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_16(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 406);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(191, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_11(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_10(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_2 = function remove_34(){
  $remove_16(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 191);
function $delete_0(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $delete_1(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_2(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_5(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_17(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    $delete_1(this$static.backingMap, key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(404, 1, {}, InternalStringMap);
_.iterator = function iterator_17(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 404);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(190, 1, {}, InternalStringMap$1);
_.next_1 = function next_12(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_11(){
  return !this.current.done;
}
;
_.remove_2 = function remove_35(){
  $remove_17(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 190);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_5(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(405, 644, {33:1}, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_2(){
  return $getValue(this);
}
;
_.setValue = function setValue_0(object){
  return $put_2(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 405);
function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next_0 = next;
  next.prev = prev.next_0 = node;
  ++this$static.size_0;
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next_0.prev = node.prev;
  node.prev.next_0 = node.next_0;
  node.next_0 = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  this.header.next_0 = this.tail;
  this.tail.prev = this.header;
  this.header.prev = this.tail.next_0 = null;
  this.size_0 = 0;
}

defineClass(400, 643, $intern_40, LinkedList);
_.add_0 = function add_15(o){
  $addNode(this, o, this.tail.prev, this.tail);
  return true;
}
;
_.listIterator_0 = function listIterator_2(index_0){
  var i, node;
  checkCriticalPositionIndex(index_0, this.size_0);
  if (index_0 >= this.size_0 >> 1) {
    node = this.tail;
    for (i = this.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this.header.next_0;
    for (i = 0; i < index_0; ++i) {
      node = node.next_0;
    }
  }
  return new LinkedList$ListIteratorImpl(this, index_0, node);
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 400);
function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode = startNode;
  this.currentIndex = index_0;
}

defineClass(474, 1, {}, LinkedList$ListIteratorImpl);
_.add_3 = function add_16(o){
  $addNode(this.this$01, o, this.currentNode.prev, this.currentNode);
  ++this.currentIndex;
  this.lastNode = null;
}
;
_.hasNext_0 = function hasNext_12(){
  return this.currentNode != this.this$01.tail;
}
;
_.hasPrevious = function hasPrevious_1(){
  return this.currentNode.prev != this.this$01.header;
}
;
_.next_1 = function next_13(){
  checkCriticalElement(this.currentNode != this.this$01.tail);
  this.lastNode = this.currentNode;
  this.currentNode = this.currentNode.next_0;
  ++this.currentIndex;
  return this.lastNode.value_0;
}
;
_.previous = function previous_2(){
  checkCriticalElement(this.currentNode.prev != this.this$01.header);
  this.lastNode = this.currentNode = this.currentNode.prev;
  --this.currentIndex;
  return this.lastNode.value_0;
}
;
_.remove_2 = function remove_36(){
  var nextNode;
  checkCriticalState(!!this.lastNode);
  nextNode = this.lastNode.next_0;
  $removeNode(this.this$01, this.lastNode);
  this.currentNode == this.lastNode?(this.currentNode = nextNode):--this.currentIndex;
  this.lastNode = null;
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 474);
function LinkedList$Node(){
}

defineClass(150, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 150);
function $clinit_Locale(){
  $clinit_Locale = emptyMethod;
  ROOT = new Locale$1;
  defaultLocale = new Locale$4;
}

defineClass(629, 1, {});
var ROOT, defaultLocale;
var Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 629);
function Locale$1(){
}

defineClass(232, 629, {}, Locale$1);
_.toString_0 = function toString_32(){
  return '';
}
;
var Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 232);
function Locale$4(){
}

defineClass(233, 629, {}, Locale$4);
_.toString_0 = function toString_33(){
  return 'unknown';
}
;
var Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 233);
function NoSuchElementException(){
  RuntimeException.call(this);
}

function NoSuchElementException_0(){
  RuntimeException_0.call(this, 'No more elements in the iterator');
}

defineClass(52, 26, {3:1, 16:1, 14:1, 52:1}, NoSuchElementException, NoSuchElementException_0);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 52);
function equals_25(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_26(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function Vector(){
  this.arrayList = new ArrayList;
}

function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new ArrayIndexOutOfBoundsException);
  }
}

defineClass(189, 642, $intern_40, Vector);
_.add_1 = function add_17(index_0, o){
  checkArrayElementIndex(index_0, this.arrayList.array.length + 1);
  $add_1(this.arrayList, index_0, o);
}
;
_.add_0 = function add_18(o){
  return $add_2(this.arrayList, o);
}
;
_.contains = function contains_10(elem){
  return $indexOf_0(this.arrayList, elem, 0) != -1;
}
;
_.get_0 = function get_10(index_0){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $get_1(this.arrayList, index_0);
}
;
_.isEmpty = function isEmpty_3(){
  return this.arrayList.array.length == 0;
}
;
_.iterator = function iterator_18(){
  return new ArrayList$1(this.arrayList);
}
;
_.remove_1 = function remove_37(index_0){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $remove_2(this.arrayList, index_0);
}
;
_.size_1 = function size_14(){
  return this.arrayList.array.length;
}
;
_.toString_0 = function toString_34(){
  return $toString_2(this.arrayList);
}
;
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 189);
function Stack(){
  Vector.call(this);
}

defineClass(401, 189, $intern_40, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 401);
function $add_13(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix_0)):$append_3(this$static.builder, this$static.delimiter);
  $append_2(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix_0 = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix_0 + ('' + this.suffix);
}

defineClass(169, 1, {}, StringJoiner);
_.toString_0 = function toString_35(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 169);
function $getEntry_0(this$static, key){
  var c, childNum, tree;
  tree = this$static.root;
  while (tree) {
    c = $compare_0(key, tree.key_0);
    if (c == 0) {
      return tree;
    }
    childNum = c < 0?0:1;
    tree = tree.child[childNum];
  }
  return null;
}

function $inOrderAdd(this$static, list, type_0, current, fromKey, fromInclusive, toKey, toInclusive){
  var leftNode, rightNode;
  if (!current) {
    return;
  }
  leftNode = current.child[0];
  !!leftNode && $inOrderAdd(this$static, list, type_0, leftNode, fromKey, fromInclusive, toKey, toInclusive);
  $inRange(type_0, current.key_0, fromKey, fromInclusive, toKey, toInclusive) && list.add_0(current);
  rightNode = current.child[1];
  !!rightNode && $inOrderAdd(this$static, list, type_0, rightNode, fromKey, fromInclusive, toKey, toInclusive);
}

function $inRange(type_0, key, fromKey, fromInclusive, toKey, toInclusive){
  var compare, compare0;
  if (type_0.fromKeyValid() && (compare0 = $compare(castTo(key, 4), castTo(fromKey, 4)) , compare0 < 0 || !fromInclusive && compare0 == 0)) {
    return false;
  }
  if (type_0.toKeyValid() && (compare = $compare(castTo(key, 4), castTo(toKey, 4)) , compare > 0 || !toInclusive && compare == 0)) {
    return false;
  }
  return true;
}

function $insert_2(this$static, tree, newNode, state){
  var c, childNum;
  if (!tree) {
    return newNode;
  }
   else {
    c = $compare_0(newNode.key_0, tree.key_0);
    if (c == 0) {
      state.value_0 = $setValue_3(tree, newNode.value_0);
      state.found = true;
      return tree;
    }
    childNum = c < 0?0:1;
    tree.child[childNum] = $insert_2(this$static, tree.child[childNum], newNode, state);
    if ($isRed(tree.child[childNum])) {
      if ($isRed(tree.child[1 - childNum])) {
        tree.isRed = true;
        tree.child[0].isRed = false;
        tree.child[1].isRed = false;
      }
       else {
        $isRed(tree.child[childNum].child[childNum])?(tree = $rotateSingle(tree, 1 - childNum)):$isRed(tree.child[childNum].child[1 - childNum]) && (tree = $rotateDouble(tree, 1 - childNum));
      }
    }
  }
  return tree;
}

function $isRed(node){
  return !!node && node.isRed;
}

function $put_3(this$static, key, value_0){
  var node, state;
  node = new TreeMap$Node(key, value_0);
  state = new TreeMap$State;
  this$static.root = $insert_2(this$static, this$static.root, node, state);
  state.found || ++this$static.size_0;
  this$static.root.isRed = false;
  return state.value_0;
}

function $remove_18(this$static, k){
  var state;
  state = new TreeMap$State;
  $removeWithState(this$static, k, state);
  return state.value_0;
}

function $removeEntry(this$static, entry){
  var state;
  state = new TreeMap$State;
  state.matchValue = true;
  state.value_0 = entry.getValue();
  return $removeWithState(this$static, entry.getKey(), state);
}

function $removeWithState(this$static, key, state){
  var c, dir_0, dir2, found, grandparent, head, last, newNode, node, parent_0, sibling;
  if (!this$static.root) {
    return false;
  }
  found = null;
  parent_0 = null;
  head = new TreeMap$Node(null, null);
  dir_0 = 1;
  head.child[1] = this$static.root;
  node = head;
  while (node.child[dir_0]) {
    last = dir_0;
    grandparent = parent_0;
    parent_0 = node;
    node = node.child[dir_0];
    c = $compare_0(key, node.key_0);
    dir_0 = c < 0?0:1;
    c == 0 && (!state.matchValue || equals_25(node.value_0, state.value_0)) && (found = node);
    if (!(!!node && node.isRed) && !$isRed(node.child[dir_0])) {
      if ($isRed(node.child[1 - dir_0])) {
        parent_0 = parent_0.child[last] = $rotateSingle(node, dir_0);
      }
       else if (!$isRed(node.child[1 - dir_0])) {
        sibling = parent_0.child[1 - last];
        if (sibling) {
          if (!$isRed(sibling.child[1 - last]) && !$isRed(sibling.child[last])) {
            parent_0.isRed = false;
            sibling.isRed = true;
            node.isRed = true;
          }
           else {
            dir2 = grandparent.child[1] == parent_0?1:0;
            $isRed(sibling.child[last])?(grandparent.child[dir2] = $rotateDouble(parent_0, last)):$isRed(sibling.child[1 - last]) && (grandparent.child[dir2] = $rotateSingle(parent_0, last));
            node.isRed = grandparent.child[dir2].isRed = true;
            grandparent.child[dir2].child[0].isRed = false;
            grandparent.child[dir2].child[1].isRed = false;
          }
        }
      }
    }
  }
  if (found) {
    state.found = true;
    state.value_0 = found.value_0;
    if (node != found) {
      newNode = new TreeMap$Node(node.key_0, node.value_0);
      $replaceNode_0(head, found, newNode);
      parent_0 == found && (parent_0 = newNode);
    }
    parent_0.child[parent_0.child[1] == node?1:0] = node.child[!node.child[0]?1:0];
    --this$static.size_0;
  }
  this$static.root = head.child[1];
  !!this$static.root && (this$static.root.isRed = false);
  return state.found;
}

function $replaceNode_0(head, node, newNode){
  var direction, parent_0;
  parent_0 = head;
  direction = parent_0.key_0 == null || $compare_0(node.key_0, parent_0.key_0) > 0?1:0;
  while (parent_0.child[direction] != node) {
    parent_0 = parent_0.child[direction];
    direction = $compare_0(node.key_0, parent_0.key_0) > 0?1:0;
  }
  parent_0.child[direction] = newNode;
  newNode.isRed = node.isRed;
  newNode.child[0] = node.child[0];
  newNode.child[1] = node.child[1];
  node.child[0] = null;
  node.child[1] = null;
}

function $rotateDouble(tree, rotateDirection){
  var otherChildDir;
  otherChildDir = 1 - rotateDirection;
  tree.child[otherChildDir] = $rotateSingle(tree.child[otherChildDir], otherChildDir);
  return $rotateSingle(tree, rotateDirection);
}

function $rotateSingle(tree, rotateDirection){
  var otherChildDir, save;
  otherChildDir = 1 - rotateDirection;
  save = tree.child[otherChildDir];
  tree.child[otherChildDir] = save.child[rotateDirection];
  save.child[rotateDirection] = tree;
  tree.isRed = true;
  save.isRed = false;
  return save;
}

function TreeMap(){
  this.root = null;
  this.cmp = ($clinit_Comparators() , $clinit_Comparators() , INTERNAL_NATURAL_ORDER);
}

defineClass(211, 661, $intern_53, TreeMap);
_.entrySet = function entrySet_1(){
  return new TreeMap$EntrySet(this);
}
;
_.put = function put_1(key, value_0){
  return $put_3(this, key, value_0);
}
;
_.remove_3 = function remove_38(k){
  return $remove_18(this, k);
}
;
_.size_1 = function size_15(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_TreeMap_2_classLit = createForClass('java.util', 'TreeMap', 211);
function $next_7(this$static){
  return this$static.last = castTo($next_5(this$static.iter), 33);
}

function $remove_19(this$static){
  $remove_13(this$static.iter);
  $removeEntry(this$static.this$01, this$static.last);
  this$static.last = null;
}

function TreeMap$EntryIterator(this$0){
  TreeMap$EntryIterator_0.call(this, this$0, ($clinit_TreeMap$SubMapType() , All));
}

function TreeMap$EntryIterator_0(this$0, type_0){
  var list;
  this.this$01 = this$0;
  list = new ArrayList;
  $inOrderAdd(this$0, list, type_0, this$0.root, null, false, null, false);
  this.iter = new AbstractList$ListIteratorImpl(list, 0);
}

defineClass(109, 1, {}, TreeMap$EntryIterator);
_.next_1 = function next_14(){
  return $next_7(this);
}
;
_.hasNext_0 = function hasNext_13(){
  return $hasNext(this.iter);
}
;
_.remove_2 = function remove_39(){
  $remove_19(this);
}
;
var Ljava_util_TreeMap$EntryIterator_2_classLit = createForClass('java.util', 'TreeMap/EntryIterator', 109);
function TreeMap$EntrySet(this$0){
  AbstractNavigableMap$EntrySet.call(this, this$0);
}

defineClass(126, 212, $intern_52, TreeMap$EntrySet);
var Ljava_util_TreeMap$EntrySet_2_classLit = createForClass('java.util', 'TreeMap/EntrySet', 126);
function TreeMap$Node(key, value_0){
  AbstractMap$SimpleEntry.call(this, key, value_0);
  this.child = initUnidimensionalArray(Ljava_util_TreeMap$Node_2_classLit, $intern_2, 96, 2, 0, 1);
  this.isRed = true;
}

defineClass(96, 102, {118:1, 102:1, 33:1, 96:1}, TreeMap$Node);
_.isRed = false;
var Ljava_util_TreeMap$Node_2_classLit = createForClass('java.util', 'TreeMap/Node', 96);
function TreeMap$State(){
}

defineClass(158, 1, {}, TreeMap$State);
_.toString_0 = function toString_36(){
  return 'State: mv=' + this.matchValue + ' value=' + this.value_0 + ' done=' + this.done_0 + ' found=' + this.found;
}
;
_.done_0 = false;
_.found = false;
_.matchValue = false;
var Ljava_util_TreeMap$State_2_classLit = createForClass('java.util', 'TreeMap/State', 158);
function $clinit_TreeMap$SubMapType(){
  $clinit_TreeMap$SubMapType = emptyMethod;
  All = new TreeMap$SubMapType('All', 0);
  Head = new TreeMap$SubMapType$1;
  Range_0 = new TreeMap$SubMapType$2;
  Tail = new TreeMap$SubMapType$3;
}

function TreeMap$SubMapType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_TreeMap$SubMapType();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_TreeMap$SubMapType_2_classLit, 1), $intern_2, 66, 0, [All, Head, Range_0, Tail]);
}

defineClass(66, 5, $intern_55, TreeMap$SubMapType);
_.fromKeyValid = function fromKeyValid(){
  return false;
}
;
_.toKeyValid = function toKeyValid(){
  return false;
}
;
var All, Head, Range_0, Tail;
var Ljava_util_TreeMap$SubMapType_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType', 66, Ljava_lang_Enum_2_classLit, values_14);
function TreeMap$SubMapType$1(){
  TreeMap$SubMapType.call(this, 'Head', 1);
}

defineClass(588, 66, $intern_55, TreeMap$SubMapType$1);
_.toKeyValid = function toKeyValid_0(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$1_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/1', 588, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeMap$SubMapType$2(){
  TreeMap$SubMapType.call(this, 'Range', 2);
}

defineClass(589, 66, $intern_55, TreeMap$SubMapType$2);
_.fromKeyValid = function fromKeyValid_0(){
  return true;
}
;
_.toKeyValid = function toKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$2_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/2', 589, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeMap$SubMapType$3(){
  TreeMap$SubMapType.call(this, 'Tail', 3);
}

defineClass(590, 66, $intern_55, TreeMap$SubMapType$3);
_.fromKeyValid = function fromKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$3_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/3', 590, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function $add_14(this$static, o){
  return $put_3(this$static.map_0, o, ($clinit_Boolean() , FALSE_1)) == null;
}

function TreeSet(){
  this.map_0 = new TreeMap;
}

defineClass(586, 640, $intern_54, TreeSet);
_.add_0 = function add_19(o){
  return $add_14(this, o);
}
;
_.contains = function contains_11(o){
  return $containsKey_0(this.map_0, o);
}
;
_.iterator = function iterator_19(){
  var entryIterator;
  return entryIterator = new TreeMap$EntryIterator((new TreeMap$EntrySet((new AbstractNavigableMap$NavigableKeySet(this.map_0)).map_0)).this$01) , new AbstractNavigableMap$NavigableKeySet$1(entryIterator);
}
;
_.remove_0 = function remove_40(o){
  return $remove_18(this.map_0, o) != null;
}
;
_.size_1 = function size_16(){
  return this.map_0.size_0;
}
;
var Ljava_util_TreeSet_2_classLit = createForClass('java.util', 'TreeSet', 586);
function copy_0(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, 0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy_0(values, 0, array, index_0, values.length);
}

function removeFrom(array, index_0){
  array.splice(index_0, 1);
}

defineClass(700, 1, {});
function stampJavaTypeInfo_0(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
}

function getIdentityHashCode(o){
  switch (typeof(o)) {
    case 'string':
      return getHashCode_2(o);
    case 'number':
      return round_int(o);
    case 'boolean':
      return $clinit_Boolean() , o?1231:1237;
    default:return o == null?0:getHashCode_1(o);
  }
}

function getObjectIdentityHashCode(o){
  return getHashCode_1(o);
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end) {
    throw toJs(new IllegalArgumentException_0('fromIndex: 0 > toIndex: ' + end));
  }
  if (end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException_0('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference){
  if (!reference) {
    throw toJs(new NullPointerException_0('Cannot suppress a null exception.'));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalState_0(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
  }
}

function checkCriticalStringBounds(end, length_0){
  if (end > length_0 || end < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

defineClass(697, 1, {});
function getHashCode_1(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_2(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function S3QueryResultList(){
}

defineClass(402, 1, $intern_40, S3QueryResultList);
_.add_1 = function add_20(index_0, element){
  this.delegate.add_1(index_0, element);
}
;
_.add_0 = function add_21(o){
  return this.delegate.add_0(o);
}
;
_.get_0 = function get_11(index_0){
  return this.delegate.get_0(index_0);
}
;
_.isEmpty = function isEmpty_4(){
  return this.delegate.isEmpty();
}
;
_.iterator = function iterator_20(){
  return this.delegate.iterator();
}
;
_.listIterator = function listIterator_3(){
  return this.delegate.listIterator();
}
;
_.listIterator_0 = function listIterator_4(index_0){
  return this.delegate.listIterator_0(index_0);
}
;
_.remove_0 = function remove_41(o){
  return this.delegate.remove_0(o);
}
;
_.size_1 = function size_17(){
  return this.delegate.size_1();
}
;
_.hasNext = false;
var Lorg_slim3_datastore_S3QueryResultList_2_classLit = createForClass('org.slim3.datastore', 'S3QueryResultList', 402);
function deserialize_39(streamReader, instance){
  instance.delegate = castTo($readObject(streamReader), 24);
  instance.encodedCursor = $getString(streamReader, streamReader.results[--streamReader.index_0]);
  instance.encodedFilters = $getString(streamReader, streamReader.results[--streamReader.index_0]);
  instance.encodedSorts = $getString(streamReader, streamReader.results[--streamReader.index_0]);
  instance.hasNext = $readBoolean(streamReader);
}

function instantiate_37(streamReader){
  return new S3QueryResultList;
}

function serialize_34(streamWriter, instance){
  $writeObject(streamWriter, instance.delegate);
  $writeString(streamWriter, instance.encodedCursor);
  $writeString(streamWriter, instance.encodedFilters);
  $writeString(streamWriter, instance.encodedSorts);
  $append(streamWriter, instance.hasNext?'1':'0');
}

var C_classLit = createForPrimitive('char', 'C');
var I_classLit = createForPrimitive('int', 'I');
var Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'XsrfToken', null);
var Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', null);
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', null);
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=main-0.js

