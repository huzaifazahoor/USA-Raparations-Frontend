$(document).ready(function(){
	$(".mypiccol").on("scroll", function() {
		console.log("o");
		var pos = $('.mypiccol').scrollTop();
		console.log(pos);
		if(pos < 165)
		{
			$(".image").attr("src", "./img/chattelslavery07.jpg");
		}if(pos > 165 && pos < 316)
		{
			$(".image").attr("src", "./img/convictleasing02.png");
		}if(pos > 316 && pos<575)
		{
			$(".image").attr("src", "./img/CivilRights.jpg");
		}if(pos > 575)
		{
			$(".image").attr("src", "./img/massincarceration.jpg");
		}
	var scrollHeight = $(document).height();
	var scrollPosition = $(".mypiccol").height() + $(".mypiccol").scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	    console.log("o");
	}
});
});
  
	/*var header = document.getElementById("myDIV");
	var btns = header.getElementsByClassName("mybtn");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
  });
}*/

$(document).ready(function () {
  $('div.btn1').click(function() {
  $('html, body').animate({
    scrollTop: $("div.who").offset().top
  }, 1000)
}), 
  $('div.btn2').click(function (){
    $('html, body').animate({
      scrollTop: $("div.what").offset().top
    }, 1000)
  }),
  $('div.btn3').click(function (){
    $('html, body').animate({
      scrollTop: $("div.why").offset().top
    }, 1000)
  }),
  $('a.btn4').click(function (){
    $('html, body').animate({
      scrollTop: $("div.flags").offset().top
    }, 1000)
  })
});

$(document).ready(function(){
	
	$('div.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('div.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})