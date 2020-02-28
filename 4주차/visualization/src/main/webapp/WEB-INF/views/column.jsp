<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>Bar Chart</title>
    <%@include file="./common_resource.jsp"%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/column.js"></script>
 	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
 	<link href="${pageContext.request.contextPath}/resources/css/home.css" rel="stylesheet" />
</head>
<body>
<h1>Draw ColumnChart</h1>
<select name="number" id="num" ></select>
<button id="draw_chart" class="button">CREATE</button>
<p>select number(1~1599)</p>
<div id="wineChart" style="margin-top:-18px; margin-left:100px; "></div>

</body>
</html>
