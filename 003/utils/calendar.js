import { selectLangMonth } from "./selectLanguge";

/** 전체 핸들러, (date객체, lang) => dates */
function getDatesHandler(currentDate, lang) {
  let result;
  const MYYYY = getMonthYear(currentDate);
  result = setDates(...MYYYY);

  return result;
}

/** (date객체) => [month, year] */
function getMonthYear(currentDate) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  return [month, year];
}

/** (month, year, lang) => 언어에 맞는 string  */
function getMonthYearString(month, year, lang) {
  return `${selectLangMonth(month, lang)} ${year}`;
}

/** (month, year) => 달력에 표시될 number[] */
function setDates(month, year) {
  const prevLast = new Date(year, month, 0);
  const thisLast = new Date(year, month + 1, 0);

  const prevLastDate = prevLast.getDate();
  const prevLastDay = prevLast.getDay();

  const thisLastDate = thisLast.getDate();
  const thisLastDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...[...Array(thisLastDate + 1).keys()].slice(1)];
  const nextDates = [];

  if (prevLastDay !== 6) {
    for (let i = 0; i < prevLastDay + 1; i++) {
      prevDates.unshift(prevLastDate - i);
    }
  }

  for (let i = 1; i < 7 - thisLastDay; i++) {
    nextDates.push(i);
  }

  return prevDates.concat(thisDates, nextDates);
}

/** 0부터 6마다 자른 이중배열 반환 (dates: number[]) => number[][] */
function getNestedDates(datesArr) {
  let result = [[]];
  for (let i = 0; i < datesArr.length; i++) {
    if (i % 7 === 0) {
      result.push([]);
    }
    result[result.length - 1].push(datesArr[i]);
  }
  return result;
}

/** month의 처음과 끝의 이차원 좌표를 구하는 함수 (currentDate) => {monthStartMap: {row: number, cell: number}, monthEndMap: {row: number, cell: number} } */
function isMonthMap(currentDate, dates) {
  const thisMonthEndAt = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const indexOfOne = dates.indexOf(1);
  const indexOfLast = indexOfOne + thisMonthEndAt - 1;

  const monthStartMap = {
    row: Math.floor(indexOfOne / 7),
    cell: indexOfOne % 7,
  };
  const monthEndMap = {
    row: Math.floor(indexOfLast / 7),
    cell: indexOfLast % 7,
  };

  return { monthStartMap, monthEndMap };
}

/** (rowIdx, cellIdx) => {isPrevMonth, isNextMonth} */
const getIsMonth = (rowIdx, cellIdx, { monthStartMap, monthEndMap }) => {
  // monthStartMap보다 row가 같거나 작고, cell이 작을 때
  const isPrevMonth =
    rowIdx - 1 <= monthStartMap.row && cellIdx < monthStartMap.cell;

  // monthEndMap보다 row가 같거나 크고, cell이 클 때
  const isNextMonth = rowIdx > monthEndMap.row && cellIdx > monthEndMap.cell;

  return { isPrevMonth, isNextMonth };
};

export {
  getDatesHandler,
  getMonthYear,
  getMonthYearString,
  setDates,
  getNestedDates,
  isMonthMap,
  getIsMonth,
};
