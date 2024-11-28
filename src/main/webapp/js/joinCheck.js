/**
 * 
 */

function joinCheck() {  //유효성 체크 함수 joinCheck 선언
	
	var joinForm = document.joinForm  // 변수 선언
	
	/* 아이디가 공란으로 입력되었는지 유효성 검사 */
	if(joinForm.memberId.value.length == 0) {
		alert("아이디는 필수 입력사항입니다.\n다시 확인 후 가입해주세요.");
		joinForm.memberId.focus();//해당 폼 위치로 커서를 이동시킴
		return false;
	}
	
	if(joinForm.memberPw.value.length == 0) {
			alert("비밀번호는 필수 입력사항입니다.\n다시 확인 후 가입해주세요.");
			joinForm.memberPw.focus();//해당 폼 위치로 커서를 이동시킴
			return false;
	}
	
	
	
	
	
	
	
	if(joinForm.memberName.value.length == 0) {
			alert("이름은 필수 입력사항입니다.\n다시 확인 후 가입해주세요.");
			joinForm.memberName.focus();//해당 폼 위치로 커서를 이동시킴
			return false;
	}
	
	var hangul = /^[ㄱ-ㅎ|가-힣]*$/;
	var eng = /^[a-z|A-Z]*$/;
	var number = /^[0-9]*$/;
	
	
	
	if(joinForm.memberPhone.value.length == 0) {
			alert("전화번호는 필수 입력사항입니다.\n다시 확인 후 가입해주세요.");
			joinForm.memberPhone.focus();//해당 폼 위치로 커서를 이동시킴
			return false;
	}
	
	return true;
}
