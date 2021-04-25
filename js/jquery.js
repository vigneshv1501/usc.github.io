$(document).ready(function(){
			$('[data-toggle="popover"]').popover({
					placement : 'top',
					html : true,
					title : 'Follow',
					content : "Follow us on facebook and twitter</a>"
				});
				$(document).on("click", ".popover .close" , function(){
					$(this).parents(".popover").popover('hide');
				});
			});
			
			$(document).ready(function(){
			  $('[data-toggle="tooltip"]').tooltip();   
			});