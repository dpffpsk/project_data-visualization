$( document ).ready(function() {
	drawChart();
});
 
 

google.charts.load('current', {'packages':['corechart']});


google.charts.setOnLoadCallback(drawChart);


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
          var avg = [8.3, 0.53, 0.27, 2.5, 0.087, 15.9, 46.7, 0.9967, 3.31, 0.66, 10.4, 5.6 ]
          
          data.addColumn('string', 'dataX');
          data.addColumn('number', 'wine');
          data.addColumn('number', 'average');
          data.addRows([[x_data[0], args[num-1].fixed_acidity, avg[0]]]);
          data.addRows([[x_data[1], args[num-1].volatile_acidity, avg[1]]]);
          data.addRows([[x_data[2], args[num-1].citric_acid, avg[2]]]);
          data.addRows([[x_data[3], args[num-1].residual_sugar, avg[3]]]);
          data.addRows([[x_data[4], args[num-1].chlorides, avg[4]]]);
          data.addRows([[x_data[5], args[num-1].free_sulfur_dioxide, avg[5]]]);
          data.addRows([[x_data[6], args[num-1].total_sulfur_dioxide, avg[6]]]);
          data.addRows([[x_data[7], args[num-1].density, avg[7]]]);
          data.addRows([[x_data[8], args[num-1].pH, avg[8]]]);
          data.addRows([[x_data[9], args[num-1].sulphates, avg[9]]]);
          data.addRows([[x_data[10], args[num-1].alcohol, avg[10]]]);
          data.addRows([[x_data[11], args[num-1].quality, avg[11]]]);
          
          var options = {

                  width: 1200,
                  height: 600
                  
        	      };
          var chart = new google.visualization.ColumnChart(document.getElementById('wineChart'));
          chart.draw(data, options);
      }
  });  
 });
}