<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="short" uri="WEB-INF/customTags.tld" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Cart</h1>
<table border="1">
	<tr>
		<th>Name</th>
		<th>Short description</th>
		<th>Price</th>
		<th>Quantity</th>
		<th>Total</th>
	</tr>
	<c:set var="sum" value="0" />
	<c:forEach var="item" items="${items}">
		<c:set var="amnt" value="${item.value.amount}" />
		<c:set var="price" value="${item.value.product.priceInEuro}" />
		<tr>
			<td>${item.value.product.productName}</td>
			<td>Nothing! (her skal shorttext brukes, men trenger først 
			velfungerende description.)</td>
		
			<td>${item.value.product.priceInEuro}</td>
			<td>${item.value.amount}</td>
<!--  			<td>asd</td> -->
	<td> some stuff
<%-- 	<c:set var="x"><customTags:cc price="${price}" amount="${amount}" /></c:set> --%>
	</td>

		</tr>

<%-- <c:set var="sum" value="${sum + x}" /> --%>
	</c:forEach>
	<tr>
		<td colspan="4"></td>
		<td>SumDYNAMISKSNART</td>
	</tr>
</table>

<short:ShortText maxChars="10">Sup ma bitches!</short:ShortText>

</body>
</html>