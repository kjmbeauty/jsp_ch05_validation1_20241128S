<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원정보 확인</title>
</head>
<body>
	<%
		request.setCharacterEncoding("utf-8");
		
		String mid = request.getParameter("memberId");
		String mpw = request.getParameter("memberPw");	
		String mname = request.getParameter("memberName");	
		String mphone = request.getParameter("memberPhone");	
	
	
	%>

</body>
</html>