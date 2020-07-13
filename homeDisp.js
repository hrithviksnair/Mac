// Home Page Functions

/*$(document).ready(function() {
	$('#catOpt').on('click change', function() {
		$("input[name=refType]:radio").click( function () {
			if ($('input[name=refType]:checked').val() == "newRef" ) {
				console.log("New Refresh Request");
			}
			else {
				console.log("Nothing!");
			}
		});
	});
});*/


$(document).ready(function(){
        $('#catOpt').change(function(){
            radioOpt = $("input[name='refType']:checked").val();
            if (radioOpt == "newRef") {
            	$('#reqForm').show();
            	$('#goBtn').show();
            }
            else {

            }
        });
    });