package com.wony.dao;

import java.util.List;

import com.wony.vo.WineVO;
 
public interface WineDAO {
    
    public List<WineVO> selectWine() throws Exception;
}
