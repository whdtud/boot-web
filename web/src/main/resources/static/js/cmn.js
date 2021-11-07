function ajaxCall(url) {
	$.ajax({
		url: url,
		method: "POST",
		dataType: "html",
		success: function(data) {
			console.log(data);
			$("#content").html(data);
		},
		error: function(request, status, error) {
			alert("error: ", error);
		}
	})
}

function onclickButton() {
	alert("cmn onclickButton");
}