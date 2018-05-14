function chekNum(obj){
    obj.value = obj.value.replace(/[^\d.]/g,"");
    obj.value = obj.value.replace(/^\./g,"");
    obj.value = obj.value.replace(/\.{2,}/g,".");
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    if(obj.value.length > 11){
        obj.value = obj.value.substring(0,11);
    }
}