$( document ).ready(function() {
	createSelect();
	drawChart();
});
 
 

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function createSelect(){
	for(var n=1; n<1600; n++){
		var ops = document.getElementById("num").options;
		var op = new Option();
		op.value = n;
		op.text = n;
	    ops.add(op);
	}
}


function drawChart() {
  $("#draw_chart").click(function(){  
  var url = "/visualization/data";  
  var wineList;
  var num = document.getElementById('num').value;
  $.ajax({      
      type:"POST",  
      url: url,            
      success:function(args){
          wineList = args;
          var data = new google.visualization.DataTable();
          var x_data = ['fixed_acidity', 'volatile_acidity', 'citric_acid', 'residual_sugar', 'chlorides', 'free_sulfur_dioxide', 'total_sulfur_dioxide', 'density', 'pH', 'sulphates', 'alcohol', 'quality'];

          
          data.addColumn('string', 'dataX');
          data.addColumn('number', 'wine');

          data.addRows([[x_data[0], args[num-1].fixed_acidity]]);
          data.addRows([[x_data[1], args[num-1].volatile_acidity]]);
          data.addRows([[x_data[2], args[num-1].citric_acid]]);
          data.addRows([[x_data[3], args[num-1].residual_sugar]]);
          data.addRows([[x_data[4], args[num-1].chlorides]]);
          data.addRows([[x_data[5], args[num-1].free_sulfur_dioxide]]);
          data.addRows([[x_data[6], args[num-1].total_sulfur_dioxide]]);
          data.addRows([[x_data[7], args[num-1].density]]);
          data.addRows([[x_data[8], args[num-1].pH]]);
          data.addRows([[x_data[9], args[num-1].sulphates]]);
          data.addRows([[x_data[10], args[num-1].alcohol]]);
          data.addRows([[x_data[11], args[num-1].quality]]);
          
          var options = {
                  width: 1600,
                  height: 600,
        		  sliceVisibilityThreshold: 0.0001
        	      };
          
          var chart = new google.visualization.PieChart(document.getElementById('wineChart'));
          chart.draw(data, options);
      }
  });  
 });
}