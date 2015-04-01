function draw_the_chart_with_random_numbers () {

	var array_for_labels = [];
	var data_for_line_1 = [];
	var data_for_line_2 = [];
	var sum_of_all_randomized_numbers = 0;
	var sum_of_all_fixed_numbers = 0;
	var a_fixed_number = 5

	var i = 0;

	while (i < 100) {
		array_for_labels.push(i);

		var a_random_number = Math.floor(Math.random() * 9) + 1;
			sum_of_all_randomized_numbers += a_random_number
			sum_of_all_fixed_numbers += a_fixed_number;

		data_for_line_1.push(sum_of_all_randomized_numbers);

		data_for_line_2.push(sum_of_all_fixed_numbers);
		i++;
		console.log(i + ". Durchgang");
	}

	var data = {
	    labels: array_for_labels,
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: data_for_line_1
	        },
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: data_for_line_2
	        }
	    ]
	};

	// Get context with jQuery - using jQuery's .get() method.
	var ctx = $("#myChart").get(0).getContext("2d");

	// This will get the first returned node in the jQuery collection.
	var myLineChart = new Chart(ctx).Line(data);

}

$("#btn_start_function").click(function(){
	draw_the_chart_with_random_numbers();
})









