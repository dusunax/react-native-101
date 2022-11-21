/** (lang) => 언어에 맞는 days 배열을 return */
function selectLangDays(lang) {
  let days;
  const ENG = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const KOR = ["월", "화", "수", "목", "금", "토", "일"];

  days = lang === "kor" ? KOR : ENG;

  return days;
}

/** (month의 index, lang) => 해당 달의 string을 return */
function selectLangMonth(idx, lang) {
  let month;
  const ENG = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  month = lang === "kor" ? idx + "월" : ENG[idx];

  return month;
}

export { selectLangDays, selectLangMonth };
