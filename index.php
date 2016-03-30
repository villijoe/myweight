<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MyWeight</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
</head>
<body>
    <div id="container" style="min-width: 310px; height: 700px; margin: 0 auto"></div>
    <form style="position: absolute; top: 0; right: 0;">
        <p>Date</p>
        <input type="date" />
        <p>Weight</p>
        <input type="number" /><br /><br />
        <input type="submit" />
    </form>
    <script src="ajax.js"></script>
    <script src="graph.js"></script>
</body>
</html>