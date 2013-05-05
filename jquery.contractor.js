/*

*******************************************************************************************

Contractor - a jQuery plugin by Kristijan Burnik

*******************************************************************************************


*/
$.fn.extend({
	contractor:function(){
		// $o == baseElement on which contractor is applied
		var $o = $(this);
		
		//create contractor
		var baseClass = "contractor_overlay";
		var $c = $("<div>").addClass(baseClass);
		var allowAction = true,state = 1;
		var offset = 9;
		var maxWidth = $o.width();
		var animDuration = 0;
		
		var attr = {
			0:{width:'0px', classes:baseClass+' closed',func:$o.hide},
			1:{width:maxWidth, classes:baseClass+' open',func:$o.show}
		}
		
		$o.mouseenter(function(e){
			allowAction = false;
		}).mouseleave(function(){
			allowAction = true;
		}).mousedown(function(){
			allowAction = false;
		});
		
		$($o).css("border-right","1px dotted #777777");
		
		$c.mouseover(function(){
			if (allowAction) {
				$c.addClass("hover");
			} else {
				$c.removeClass("hover");
			}
		}).mouseout(function(){
			$c.removeClass("hover");
		}).mousedown(function(){
			if (allowAction) {
				$c.width('');
				state = 1 - state;
				$o.animate({width:attr[state].width},animDuration,function(){
						$c.removeClass().addClass(attr[state].classes);
						if (state) {
							$o.show();
						} else {
							$o.hide();
						}
				});
			}
		});
		
		
		
		
		
		$c.insertAfter($o);
		$c.append($o);
		
		
		$c.height($o.height());
	}
});