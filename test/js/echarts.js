
//柱状图
$.ajax({
    type: "get",
    url: 'https://scauxo.cn/rjb/api/sort',
    cache:false,
    asny:false,
    dataType: "json",
    success: function(data) {
        var xA = [];
        var yA = [];
        for(var i = 0; i < data.data.length; i++) {
            xA.push(data.data[i].MovieName);
            yA.push(data.data[i].BoxOffice);
        }
        var myChart = echarts.init(document.getElementById('res'));
        var option = {
        title: {
            text: '实时票房'
        },
        tooltip: {},
        legend: {
            data: ['金额/万元']
        },
        grid: {
            y2: 140
        },
        xAxis: {
            data: xA,
            axisLabel: {
                interval: 0,
                rotate: -25
            }
        },
        yAxis: {},
        series: [{
            name: '金额/万元',
            type: 'bar',
            data: yA,
        }]
    };
    myChart.setOption(option);
    }
});	