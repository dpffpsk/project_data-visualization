<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
 
<title>Home</title>
    <%@include file="./common_resource.jsp"%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/area.js"></script>
	<link href="${pageContext.request.contextPath}/resources/css/home.css" rel="stylesheet" />
	
</head>
<body>

<h1>Data Visualization</h1>
<h4>Google Chart</h4>

<div style="margin-right:500px;">
	<a href="./pie">
		<img alt="P_chart" src="./img/chart_pie.PNG" width="500px" height="300px">
	</a>	
</div>
<div style="margin-top:-300px; margin-left:500px;">
	<a href="./column">
		<img alt="C_chart" src="./img/chart_column.PNG" width="600px" height="350px">
	</a>
</div>
<div style="margin-right:500px;">
	<a href="./line">
		<img alt="L_chart" src="./img/chart_line.PNG" width="500px" height="300px">
	</a>
</div>
<div style="margin-top:-300px; margin-left:500px;">
	<a href="./area">
		<img alt="A_chart" src="./img/chart_area.PNG" width="500px" height="300px">
	</a>
</div>

</body>
</html>
