package com.boot.web.dev.core;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class AjaxController {

	@PostMapping(value="jspCall", produces="text/plain;charset=utf-8")
	public String jspCall() {
		return "ajaxContent";
	}
}
