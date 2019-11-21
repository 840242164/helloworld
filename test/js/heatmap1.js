//一个vue，data里面给两个对象，获取两个接口的
var app = new Vue({
    //创建vue实例
	el:'#app',
	data:{
	self: [],
    sirt: [],        
    },
});

var self = this;
$.ajax({
    //获取所有data
    url: 'http://134.175.42.203/road/1/all',  
    type: 'get',
    cache:false,
    asny:false,
    dataType: 'json'
}).then(function (res) { 

    app.self = res;
    //console.log('数据',app.self);

    var i = 0;
    //在这个循环里，只有doll一组数据
    var intervalId_1 = setInterval(function (){
        i++;
        console.log(i);
        if(i<19){
            var doll_1 = app.self[i];
            //doll只能自己打印，不能加任何东西（文字或者符号）打印
            console.log(doll_1);   
            
                var heatmapInstance1 = h337.create({
                    container: document.querySelector('.heatmap1'),
                    radius: 20,        
                }); 
                var heatmapInstance2 = h337.create({
                    container: document.querySelector('.heatmap2'),
                    radius: 20,       
                }); 

                var dataPoint = [];           
                var data = { 
                max: 200,
                min: 00, 
                data: [ 
                    dataPoint
                ]}; 
                //加到图1
                dataPoint[0]={  //地点1_车图
                    x:196,
                    y:260,
                    value:doll_1.car_num *10
                };
                //加到图2
                dataPoint[1]={  //地点1_人图
                    x:196,
                    y:260,
                    value:doll_1.people_num *10
                };
                if(i == 1){
                    heatmapInstance1.addData(dataPoint[0]);
                    heatmapInstance2.addData(dataPoint[1]);
                    console.log(doll_1.people_num);
                }
                else{
                    heatmapInstance1._renderer._clear();
                    console.log(doll_1.people_num);
                    heatmapInstance2.repaint(dataPoint[1]);
                }
            }
    },7000)
})

    var sirt = this;
    $.ajax({
        //接受数据
        url: 'http://134.175.42.203/road/2/all',  
        type: 'get',
        cache:false,
        asny:false,
        dataType: 'json'
    }).then(function (res) {
    
            app.sirt = res;
            console.log('数据',app.sirt);

             var i = 0;
    //在这个循环里，只有doll一组数据
    var intervalId_1 = setInterval(function (){
        i++;
        if(i<13){
            var doll_2 = app.sirt[i];
            //doll只能自己打印，不能加任何东西（文字或者符号）打印
            //console.log(doll_2);   
             
                var heatmapInstance1 = h337.create({
                    container: document.querySelector('.heatmap1'),
                    radius: 20, 
                    maxOpacity: .8, 
                    minOpacity: 0, 
                    blur: .75, 
                    gradient: { 
                        // enter n keys between 0 and 1 here 
                        // for gradient color customization 
                        '.5': 'blue', 
                        '.8': 'red', 
                        '.95': 'white' 
                    }        
                }); 
                var heatmapInstance2 = h337.create({
                    container: document.querySelector('.heatmap2'),
                    radius: 20,  
                    maxOpacity: .8, 
                    minOpacity: 0, 
                    blur: .75, 
                    gradient: { 
                        // enter n keys between 0 and 1 here 
                        // for gradient color customization 
                        '.5': 'blue', 
                        '.8': 'red', 
                        '.95': 'white' 
                    }      
                }); 
                var dataPoint = [];           
                var data = { 
                max: 200,
                min: 00, 
                data: [ 
                    dataPoint
                ]}; 
                //加到图1
                
                dataPoint[0]={  //地点2_车图
                    x:201,
                    y:315,
                    value:doll_2.car_num 
                };
                heatmapInstance1.addData(dataPoint[0]);
                //加到图2
                dataPoint[1]={  //地点2_人图
                    x:201,
                    y:315,
                    value:doll_2.people_num 
                };
                heatmapInstance2.addData(dataPoint[1]);
            }
        },10000)
    })
