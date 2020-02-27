package com.wony.visualization;


import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;


@Controller
public class ColumnController {
    
    private static final Logger logger = LoggerFactory.getLogger(ColumnController.class);
    

	@RequestMapping(value = "/column", method = RequestMethod.GET)
	public String column(Locale locale, Model model) {
 
        logger.info("column");
        
 
        return "column";
    }
    
}