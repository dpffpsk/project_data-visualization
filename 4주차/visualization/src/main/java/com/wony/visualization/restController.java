package com.wony.visualization;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wony.service.WineService;
import com.wony.vo.WineVO;

@RestController
public class restController {
    
    private static final Logger logger = LoggerFactory.getLogger(restController.class);
    
    @Inject
    private WineService service;
    
    /**
     * Simply selects the home view to render by returning its name.
     */
    @RequestMapping(value = "/data")
    public List<WineVO> WineList() throws Exception{
 
        logger.info("home");
        
        List<WineVO> wineList = service.selectWine();
        
        //model.addAttribute("movieList", movieList);
 
        return wineList;
    }
    
}
