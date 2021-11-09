<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String message = "scriptlet";
%>    

<script>
	$(document).ready(function() {
		alert("document ready");
	});
	
	$("#eventBtn").click(function() {
		onclickButton();
		$(this).hide();
	});
</script>

<div><%=message %></div>
<button id="eventBtn">click</button>