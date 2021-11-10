//JavaScript
function check() {
	document.getElementById("nameDiv").innerText="";
	document.getElementById("idDiv").innerText="";
	document.getElementById("pwdDiv").innerText="";
	document.getElementById("repwdDiv").innerText="";
	if(document.form.name.value=="")
		document.getElementById("nameDiv").innerText="이름을 입력하세요.";
	else if(document.form.id.value=="")
		document.getElementById("idDiv").innerText="아이디를 입력하세요.";
	else if(document.form.pwd.value=="")
		document.getElementById("pwdDiv").innerText="비밀번호를 입력하세요.";
	else if(document.form.repwd.value!=document.form.pwd.value)
		document.getElementById("repwdDiv").innerText="비밀번호가 일치하지 않습니다.";
	else
		document.form.submit();
}

function emailIn() {
	if(document.getElementById("email3").value=="gmail.com")
		document.form.email2.value="gmail.com";
	else if(document.getElementById("email3").value=="daum.net")
		document.form.email2.value="daum.net";
	else if(document.getElementById("email3").value=="naver.com")
		document.form.email2.value="naver.com";
}

/* function emailIn() {
	if(document.form.email3.value=="self")
		document.form.email2.value="";
	else if(document.form.email3.value=="gmail")
		document.form.email2.value="gmail.com";
	else if(document.form.email3.value=="daum")
		document.form.email2.value="daum.net";
	else if(document.form.email3.value=="naver")
		document.form.email2.value="naver.com";
} */

//jQuery
$(function(){ // 온로드와 같은 개념!
	
	// 회원가입 버튼을 눌렀을 때,
	$('#writeBtn').click(function(){
		//초기화
		$('#nameDiv').empty();
		$('#idDiv').empty();
		$('#pwdDiv').empty();
		$('#repwdDiv').empty();
		
		/*
		// 아이디 속성으로 유효성 검사
		if($('#name')) 
			$('#nameDiv').html('이름을 입력해주세요');
		else if($('#id')) 
			$('#idDiv').html('아이디를 입력해주세요');
		else if($('#pwd')) 
			$('#pwdDiv').html('비밀번호를 입력해주세요');
		else if($('#repwd')) 
			$('#repwdDiv').html('비밀번호가 일치하지 않습니다.');
		else 
			$('form[name="form"]').submit();
		*/
		
		// 네임속성으로 유효성 검사
		if($('input[name="name"]').val()=='') {
			$('#nameDiv').html('이름을 입력해주세요');
			$('#name').focus();
		}
		else if($('input[name="id"]').val()=='') {
			$('#idDiv').html('아이디를 입력해주세요');
			$('#id').focus();
		}
		else if($('input[name="pwd"]').val()=='') {
			$('#pwdDiv').html('비밀번호를 입력해주세요');
			$('#pwd').focus();
		}
		else if($('input[name="repwd"]').val()=='') {
			$('#repwdDiv').html('비밀번호가 일치하지 않습니다.');
			$('#repwd').focus();
		}
		else
			$('form[name="form"]').submit();
	});
	
	// 로그인 버튼을 눌렀을 때,
	$('#loginBtn').click(function(){
		// 초기화
		$('#idDiv').empty();
		$('#pwdDiv').empty();
		
		if($('input[name="id"]').val()=='') {
			$('#idDiv').html('아이디를 입력해주세요');
			$('#id').focus();
		} else if($('input[name="pwd"]').val()=='') {
			$('#pwdDiv').html('비밀번호를 입력해주세요');
			$('#pwd').focus();
		} else
			$('form[name="loginForm"]').submit();
	});
});


// 우편번호
 function execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    /*if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("sample6_extraAddress").value = extraAddr;*/
                
                } else {
                    document.getElementById("sample6_extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('zipcode').value = data.zonecode;
                document.getElementById("addr1").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("addr2").focus();
            }
        }).open();
    }

// id 중복체크
function checkId() {
	document.getElementById("idDiv").innerText="";
	if(document.getElementById("id").value=="") {
		document.getElementById("idDiv").innerText="아이디를 입력하세요.";
		document.form.id.focus();
	} else {
		/*
		var checkId="checkId"
		window.open("",checkId, "width=300 height=100 top=200 left=700");
		
		var frmData = document.form;
		frmData.target = checkId;
		frmData.action = "/memberServlet/CheckIdServlet";
		frmData.submit();
		*/
		
		
		var id = document.getElementById("id").value;
		window.open("/memberServlet/CheckIdServlet?id=" + id, "","width=300 height=100 top=200 left=700");
		// 이건 get방식 (데이터를 주소에 실어 보냄.)
		
	}
}