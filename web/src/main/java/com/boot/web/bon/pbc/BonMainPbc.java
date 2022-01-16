package com.boot.web.bon.pbc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BonMainPbc {

	@GetMapping("/bonMain")
	public String execute() {
		return "thymeleaf/bonMain";
	}
}
