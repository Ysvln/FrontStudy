// 1. 가장 큰 값 구하기
// 함수의 이름은 maxValue 입니다.
// 인자로는 정수들이 들어있는 배열을 파라미터로 전달받습니다.
// 배열로 전달받은 숫자 중 가장 큰 숫자와
// 숫자를 내림차순으로 정렬된 배열을 객체 형태로 반환해야 합니다.

function maxValue(newArr) {
  // 배열을 파라미터로 전달 받음
  const maxValue = Math.max(...newArr);
  // 내림차순
  const sortArr = newArr.sort().reverse();
  return { maxValue, sortArr };
}

console.log(maxValue([1, 2, 3, 4, 5]));
