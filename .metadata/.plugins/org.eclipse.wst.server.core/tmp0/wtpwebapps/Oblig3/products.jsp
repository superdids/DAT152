<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="custom" uri="WEB-INF/customTags.tld" %>
<fmt:setLocale value="${language}" />
<fmt:setBundle basename="no.hib.dat152.i18n.text" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="${language}">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Products</title>
</head>
<body>

<c:set var="url" value="products" />
<jsp:include page="selectLanguage.jsp" />

<table>
<c:forEach var="description" items="${descriptions}">
<tr><td colspan="2"><h2>${description.product.productName}</h2></td></tr>
<tr>
	<td>
		<img src="${description.product.relativePathToImg}" height="150"/>
	</td>
	<td style="vertical-align:top">
		<c:set var="eurVal">
			<fmt:message key="currency.euroValue" />
		</c:set>
		<fmt:message key="products.label.name" />: ${description.product.productName} <br />
		<fmt:message key="currency.symbol" /> <custom:price price="${description.product.priceInEuro}" language="${language}" valueInEuros="${eurVal}" /> <br />
		<fmt:message key="products.label.description" />: ${description.text} <br/><br/>
		<form action="products" method="POST">
			<fmt:message key="products.button.submit" var="buttonValue" />
			<input type="hidden" name="item" value="p${description.id.productNumber}" />
			<input type="submit" value="${buttonValue}" />
		</form>
		</td>
</tr>
</c:forEach>
</table>
<br />
<br />
<a href="home"><fmt:message key="link.home" /></a>
<a href="cart"><fmt:message key="link.cart" /></a>
<br />
<br />
<custom:CopyrightSince year="2008">Høgskolen i Bergen</custom:CopyrightSince>

</body>
</html>