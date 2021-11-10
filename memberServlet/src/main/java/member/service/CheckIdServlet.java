package member.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.dao.MemberDAO;

@WebServlet("/CheckIdServlet")
public class CheckIdServlet extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 데이터
		String id = request.getParameter("id");
		
		// DB
		MemberDAO memberDAO = MemberDAO.getInstance();
		boolean checkId = memberDAO.checkId(id);
		
		// 응답
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head>");
		out.println("</head>");
		out.println("<body>");
		out.println("<h2>아이디 중복확인</h2>");
		if(checkId) {
			out.println("아이디 "+id+"는 사용 불가능");
		} else {
			out.println("아이디 "+id+"는 사용 가능");
		}
		out.println("</body>");
		out.println("</html>");
	}

}
