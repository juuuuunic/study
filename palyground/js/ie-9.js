
document.addEventListener("DOMContentLoaded", function(){
	selectBox();
});


function selectBox(){
	var $select = document.getElementsByTagName('select');
	for(var i =0; i < $select.length; i++){
		var label = $select[i][$select[i].selectedIndex].innerHTML;
		var $label = $select[i].previousSibling.previousSibling;
		$label.innerHTML = label;

		$select[i].addEventListener('change', function(event){

			var $el = this;
			var label2 = $el[$el.selectedIndex].innerHTML;
			var $label2 = $el.previousSibling.previousSibling;
			$label2.innerHTML = label2;

		});

	}
}
