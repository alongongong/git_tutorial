package member.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.bean.MemberDTO;
import member.dao.MemberDAO;

@WebServlet("/WriteServlet")
public class WriteServlet extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		// 데이터
		request.setCharacterEncoding("UTF-8"); // 한글처리 - post방식 일 때
		// get방식은 주소타고 넘어오면서 한글이 깨지지 않음.
		// post방식은 넘어올 때 한글이 깨지니까 한글처리 필수!
		
		String name = request.getParameter("name");
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		String gender = request.getParameter("gender");
		String email1 = request.getParameter("email1");
		String email2 = request.getParameter("email2");
		String tel1 = request.getParameter("tel1");
		String tel2 = request.getParameter("tel2");
		String tel3 = request.getParameter("tel3");
		String zipcode = request.getParameter("zipcode");
		String addr1 = request.getParameter("addr1");
		String addr2 = request.getParameter("addr2");
		
		MemberDTO memberDTO = new MemberDTO(); // DAO로 자료를 들고가야하니까!
		memberDTO.setName(name);
		memberDTO.setId(id);
		memberDTO.setPwd(pwd);
		memberDTO.setGender(gender);
		memberDTO.setEmail1(email1);
		memberDTO.setEmail2(email2);
		memberDTO.setTel1(tel1);
		memberDTO.setTel2(tel2);
		memberDTO.setTel3(tel3);
		memberDTO.setZipcode(zipcode);
		memberDTO.setAddr1(addr1);
		memberDTO.setAddr2(addr2);
		
		// DB
		// 할 일이 너무 많으니 DAO한테 할일을 넘김.
		MemberDAO memberDAO = MemberDAO.getInstance(); // 싱글톤 - 1번 생성해서 계속 사용한다.
		memberDAO.write(memberDTO); // memberDAO의 write메소트 호풀
		
		// 응답
		response.setContentType("text/html;charset=UTF-8"); // 응답부분에 한글처리.
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head>");
		out.println("</head>");
		out.println("<body>");
		out.println("회원가입을 축하합니다.<br><br>");
		out.println("<input type='button' value='로그인' onclick=location='/memberServlet/member/loginForm.html'>");
		out.println("</body>");
		out.println("</html>");
	}

}
