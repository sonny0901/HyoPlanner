import React, { useState } from "react";
import { CalendarWrapper, CalendarHeader, CalendarRow, CalendarCell, CalendarNav, CalendarNavButton, CalendarTitle } from "./Calendar.styled";

function getDaysArray(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];
  let week = new Array(firstDay.getDay()).fill(null);
  for (let d = 1; d <= lastDay.getDate(); d++) {
    week.push(d);
    if (week.length === 7) {
      days.push(week);
      week = [];
    }
  }
  if (week.length) days.push([...week, ...new Array(7 - week.length).fill(null)]);
  return days;
}

export default function Calendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const weeks = getDaysArray(year, month);

  const handlePrev = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };
  const handleNext = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const isToday = (d) =>
    d &&
    year === today.getFullYear() &&
    month === today.getMonth() &&
    d === today.getDate();

  return (
    <CalendarWrapper>
      <CalendarNav>
        <CalendarNavButton onClick={handlePrev}>이전달</CalendarNavButton>
        <CalendarTitle>{year}년 {month + 1}월</CalendarTitle>
        <CalendarNavButton onClick={handleNext}>다음달</CalendarNavButton>
      </CalendarNav>
      <CalendarHeader>
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
          <div key={d} style={{ textAlign: "center" }}>{d}</div>
        ))}
      </CalendarHeader>
      {weeks.map((week, i) => (
        <CalendarRow key={i}>
          {week.map((date, j) => (
            <CalendarCell key={j} $isToday={isToday(date)}>
              {date ? date : ""}
            </CalendarCell>
          ))}
        </CalendarRow>
      ))}
    </CalendarWrapper>
  );
} 