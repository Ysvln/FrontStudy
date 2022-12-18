// mockData
const musicListData = [
  {
    src: "../assets/img/iu_0.jpg",
    color: ["#0272a4", "#f6a564"],
  },
  {
    src: "../assets/img/iu_1.jpg",
    color: ["#b6bfc8", "#36595b"],
  },
  {
    src: "../assets/img/iu_2.jpg",
    color: ["#e58e82", "#6f569f"],
  },
];

// 요소 정리

/*
1. list_btn_group > ul
    - li태그의 자식요소로 이미지를 갖고
    - 해당 ul의 자식으로서 추가

2. list_btn_group > button:first-child
    list_btn_group > button:last-child
    p.s let currentPlayIndex = 0 ;

3. disk_inner
    선택된 노래가 바뀔 때마다 디스크 내부의 원은 바뀐다.

4. main
    선택된 노래가 바뀔 때마다 배경화면이 바뀐다.
    선택된 노래가 실행되면 앨범 이미지로 바뀐다.
    p.s let playStatus = 0; 혹은 false;

4. .disk 
    애니메이션을 추가해야할 disk 태그
    .active 클래스로 활용하기 (애니메이션) 
    >> play btn 클릭했을 때 active 추가


5. play_btn_group > button:first-child
    play_btn_group > button:last-child
        ** play 버튼이 눌러졌을 때 배경 화면이 그라데이션에서
        앨범 이미지로 변경 및 디스크 회전
        ** 중지 버튼이 눌러지면 디스크 회전 중지 배경화면 그라데이션으로

6. 생성된 ul>li의 이미지 태그를 가지고 올 것입니다.
    현재 선책된 노래의 focus
    흰색 테두리 + 크기 커짐

    + 이미지 눌렀을 때도 이동 가능

    // ~금요일까지
*/

// 과제
// CSS 속성 그라데이션 이용해야함
// button에 클래스명 없는데 줘도 됨
