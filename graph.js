/**
 * Created by Orion on 27.03.2016.
 */
function graph(obj, array){
    $('#container').highcharts({
        title: {
            text: 'My Weight',
            x: -20 //center
        },
        subtitle: {
            text: 'Days',
            x: -20
        },
        xAxis: {
            categories: obj
        },
        yAxis: {
            title: {
                text: 'Weight'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' kg'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2016',
            data: array
        }]
    });
}