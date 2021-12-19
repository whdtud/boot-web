$(function() {
	initGnb();
	
	function initGnb() {
		var header = $(".header");
		var gnbUL = header.find("url.gnb");
		
		if (gnbUL.length <= 0)
			return false;
			
		var mainMenus = gnbUL.find("> li");
		
		
	}
})