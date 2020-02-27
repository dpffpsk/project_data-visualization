<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
 
<title>Pie Chart</title>
    <%@include file="./common_resource.jsp"%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/pie.js"></script>
 	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<link href="${pageContext.request.contextPath}/resources/css/home.css" rel="stylesheet" />
</head>
<body>
<h1>Draw PieChart</h1>

<input type="text" name="number" id= num>
<button id="draw_chart" class="button">CREATE</button>
<p>1~1599 사이의 수를 입력하세요.</p>
<div id="wineChart"></div>

</body>
</html>
