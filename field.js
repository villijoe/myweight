/**
 * Created by Orion on 31.03.2016.
 */
var weight = 0;
var field = $("#weight");
field.keypress(function(){
   weight += field.length;
    console.log(weight);
    setTimeout("if (weight == 3) { field.val(field.val() + '.'); }", 50);
});