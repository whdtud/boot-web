function ajaxCall(url) {
	$.ajax({
		url: url,
		method: "POST",
		dataType: "html",
		success: function(data) {
			console.log(data);
			$("#main_contents").html(data);
		},
		error: function(request, status, error) {
			alert("request: " + request + ", status: " + status + ", error: " + error);
		}
	})
}

function onclickButton() {
	alert("cmn onclickButton");
	
}