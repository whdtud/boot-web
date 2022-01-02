$(function() {
	initGnb();
	
	function initGnb() {
		var wrapper = $(".header");
		var header = $(".header");
		var GNB = header.find(".GNB");
		if (!GNB.length)
			return false;
		
		var maskDIV = GNB.find(".inner");
		var dimDIV = GNB.find(".dimmed");
		var gnbUL = GNB.find("ul.gnb");
		var subDIV = gnbUL.find(".gnbSub");
		var isSubOutside = !gnbUL.find(".gnbSub").length;
		var mainMenu = gnbUL.find("> li");
		var mainBar = maskDIV.find(".depth1-bar");
		
		var isAutoLease = GNB.hasClass("gnbAuto");
		var isFinanceLease = GNB.hasClass("gnbKbpl");
		var oneLineHeight = GNB.height() || 80;
		var wrapperZindex = 1000;
		var ableDepth2Out = isAutoLease || isFinanceLease;
		var isTab, isAccessibility = false;
		var isMainOver = false;
		var mainIndex = 0;
		var mainBarAddL = 4, mainBarAddW = mainBarAddL * 2;
		
		mainMenu.on("focusin", "> a", function() {
			console.log("focusin");
			if (isTab) enterDepth1($(this).parent().index());
		});
		
		mainMenu.on("focusout", "> a", function() {
			console.log("focusout");
		});
		
		mainMenu.on("mouseenter", function() {
			console.log("mouseenter");
			var index = $(this).index();
			overMain(index);
			
			if (ableDepth2Out) {
				var isDepth2 = $(this).find(".gnbSub").length;
				if (isDepth2) 
					openSub(index);
			} else {
				openSub(index);
			}
		});
		
		function enterDepth1(index) {
			overMain(index);
			openSub(index);
		}
		
		function overMain(index) {
			var depth1 = mainMenu.eq(index);
			var marginL = parseInt(depth1.css("margin-left").replace(/[^0-9]/g, "")) || 0;
			var depth1X = (index ? marginL : 0) + depth1.position().left;
			var depth1W = depth1.width();
			var d = !isMainOver ? 400 : 460;
			var e = !isMainOver ? "easeInOutQuint" : "easeOutQuint";
			if (isMainOver == false) mainBar.stop().css({ left: depth1X, width: 0});
			mainBar.stop().animate({ left: depth1X - mainBarAddL, width: depth1W + mainBarAddW}, { duration: d, easing: e });
			mainIndex = index;
			isMainOver = true;
		}
		
		function openSub(index) {
			subDIV.hide();
			var depth2Wrap = subDIV.eq(!isSubOutside ? index : 0);
			if (ableDepth2Out) depth2Wrap = mainMenu.eq(index).find(".gnbSub");
			depth2Wrap.show();
			var d = !isAccessibility ? 300 : 0;
			dimDIV.stop().show().animate({ opacity: 0.5 }, { duration: d, easing: "easeOutQuad" });
			maskDIV.css({ height: depth2Wrap.height() + oneLineHeight });
			wrapper.css({ zIndex: (wrapperZindex * 10) + 1 });
			var depth2UL = depth2Wrap.find("ul.gnbDep2");
			depth2UL.find(">li").css({ height: depth2UL.height() });
		}
	}
})