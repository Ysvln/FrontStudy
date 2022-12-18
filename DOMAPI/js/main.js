// ---------------------------------------문제 1번
window.onload = function () {
  const loadingText = document.querySelector("#display");
  loadingText.innerText = "로딩 중 변경 텍스트 입니다.";
};

// ---------------------------------------문제 2번
const tab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".block");

function onTabClick(tabContentIndex) {
  tab.forEach(function (item) {
    item.style.backgroundColor = "";
    item.style.color = "";
  });
  tabContent.forEach(function (item) {
    item.style.display = "none";
  });

  tab[tabContentIndex].style.backgroundColor = "#0797ce";
  tab[tabContentIndex].style.color = "#fff";
  tabContent[tabContentIndex].style.display = "block";
  tabContent[tabContentIndex].style.backgroundColor = "transparent";
}

// tab.forEach((tab) => {
//     tab.addEventListener('click', onTabClick);
// });

// ---------------------------------------문제 4번
let verifyInput = document.querySelector("#te_input");
// 1. 숫자 입력 방지
function verifyInputValue() {
  const regExp = /[0-9]/;
  if (regExp.test(verifyInput.value)) {
    alert("숫자가 입력되었습니다.");
    verifyInput.value = "";
    console.log(verifyInput.value);
  } else {
    return true;
  }
}
//e.target.value
verifyInput.addEventListener("keyup", verifyInputValue);

// 2. 길이 제한 attr 변경
function addAttribute() {
  verifyInput.setAttribute("maxLength", 10);
}
addAttribute();

// ---------------------------------------문제 5번

const form = document.querySelector("#form");
const sendBtn = document.querySelector("#send");
const listDataInput = document.querySelector("#list_data");
const addList = document.querySelectorAll(".liclass");

// 글자 출력 콜백 함수
function printText(e) {
  e.preventDefault();
  // console.log("저장클릭");
  let listDataInputValue = listDataInput.value;
  // 여기 수정 필요.. 배열에서 push...?
  for (var i = 0; i < 2; i++) {
    console.log(addList);
    addList[i].innerText = listDataInputValue;
    break;
  }
  return (listDataInput.value = "");
  // console.log(listDataInputValue);
}

// 저장 했을 때 글자가 출력되는 함수
form.addEventListener("submit", printText);

//초기화 버튼
function reset_list() {
  for (var i = 0; i < 2; i++) {
    addList[i].innerText = "";
  }
}
