/**
 * Created by Orion on 27.03.2016.
 */

var data = { method: 'data' };
var obj = [];
var array = [];

function funcSuccess(data){
    var arr = data.split('][');
    var weight = arr[0].replace(/(\[|\])/g, '');
    var date = arr[1].replace(/(\[|\])/g, '');
    var weight_obj = weight.split(',');
    var date_obj = date.split(',');
    weight_obj.forEach(function(e) {
        var c = e.replace(/(")/g, '');
        array.push(Number(c));
    });
    date_obj.forEach(function(e) {
        var c = e.replace(/(")/g, '');
        obj.push(c);
    });
    graph(obj, array);
}

$.ajax({
    url: "handle.php",
    type: "GET",
    data: (data),
    dataType: "html",
    success: funcSuccess
});