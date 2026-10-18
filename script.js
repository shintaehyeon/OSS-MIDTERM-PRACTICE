//1. html에서 id가 searchForm인요소찾기
const form = document.querySelector("#searchForm");

form.addEventListener("submit",function(event){
 event.preventDefault();
//Form은 기본적으로 데이터를 제출하려고 해. 우리는 서버로 보내지 않고 JavaScript에서 직접 처리할 거니까 기본 제출 동작을 막는 거야.
//전역변수로 설정하면 오류가남. 제출이되면 매개변수로 선언해야됨 아니면오류가남

}); //form이 제출되면 중괄호 안의 코드를 실행해라.


const keyword=document.querySelector("#search").value;
//value는 사용자가 입력한 글자를 가져오는 속성이야. 예를 들어 HTML 기초를 입력했다면 keyword에 "HTML 기초"가 저장돼.

document.querySelector("#result").textContent= "검색한 도서명"+keyword;
//textContent는 해당 HTML 요소 안의 글자를 변경하는 속성이야.

let books = ["HTML 기초 ","CSS 입문","JS 기초"];