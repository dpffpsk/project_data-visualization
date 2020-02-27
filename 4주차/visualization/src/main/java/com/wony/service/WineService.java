package com.wony.service;

import java.util.List;

import com.wony.vo.WineVO;
 
public interface WineService {
    
    public List<WineVO> selectWine() throws Exception;
}