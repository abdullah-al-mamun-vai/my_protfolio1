$(document).ready(function() {
	$(".name").typing({
	 	strings: ['abdullah al mamun'],
	 	eraseDelay: 10,
	 	color:'#fff',
	 	typingColor:'black',
	 	typingOpacity:'0.1',
		cursorBlink:true,
		fade:false,
		loopCount:1000,
	});
	$(".sk1").pieChart({
            barColor: "#30bae7",
            trackColor: "#dfe8ed",
            size: "170",
            lineWidth: "10",
          });
          $(".sk2").pieChart({
            barColor: "#d74680",
            trackColor: "#dfe8ed",
            size: "170",
            lineWidth: "10",
          });
          $(".sk3").pieChart({
            barColor: "#15c7a8",
            trackColor: "#dfe8ed",
            size: "170",
            lineWidth: "10",
          });
          $(".sk4").pieChart({
            barColor: "#eb7d4b",
            trackColor: "#dfe8ed",
            size: "170",
            lineWidth: "10",
          });
          $('.jq1').LineProgressbar({
  percentage: 95,
  fillBackgroundColor: '#3498db',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '10px',
});
$('.jq2').LineProgressbar({
  percentage: 95,
  fillBackgroundColor: 'orange',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '10px',
});
$('.jq3').LineProgressbar({
  percentage: 90,
  fillBackgroundColor: 'yellow',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '10px',
});
$('.jq4').LineProgressbar({
  percentage: 90,
  fillBackgroundColor: 'green',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '10px',
});
$('.jq5').LineProgressbar({
  percentage: 95,
  fillBackgroundColor: 'green',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '10px',
});
	$('.progress').progress({

  // height of the progress bar
  size: '5px',

  // or 'bottom'
  position: 'bottom',

  // background color
  wapperBg: '#eee',

  // inner color
  innerBg: '#50bcb6'
  
});
	$('a').smoothScroll();
	$('body').materialScrollTop();
	$('.nav-area').sticky();
	$('.nav-area').slicknav();
});
jQuery(document).ready(function($) {
	



});
