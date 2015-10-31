<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="cs" uri="WEB-INF/customTags.tld" %>
<fmt:setLocale value="${language}" />
<fmt:setBundle basename="no.hib.dat152.i18n.text" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="${language}">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Welcome</title>
</head>
<body>

<c:set var="url" value="home" />
<jsp:include page="selectLanguage.jsp" />
<H1>Kaffekopper AS</H1>

<img src="images/java.png" height="200" />

<!-- p taggen under skal også være dynamisk -->
<p><label for="text"><fmt:message key="home.label.text" /></label> 
<a href="products"><fmt:message key="home.label.products" /></a></p>

<cs:CopyrightSince year="2008">Høgskolen i Bergen</cs:CopyrightSince>

</body>
</html>