import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #eee;
  padding: 12px 4px 8px 4px;
  box-shadow: none;
`;

export const CalendarNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
  color: #111;
`;

export const CalendarNavButton = styled.button`
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #eee;
  background: #fff;
  font-size: 14px;
  color: #111;
  outline: none;
`;

export const CalendarTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

export const CalendarHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 4px;
  font-weight: 600;
  color: #888;
  font-size: 13px;
`;

export const CalendarRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 2px;
`;

export const CalendarCell = styled.div`
  margin: 1px;
  aspect-ratio: 1 / 1;
  display: flex;
  font-weight: 500;
  color: #222;
  background: #fff;
  border: 1px solid #f3f3f3;
  font-size: 14px;
`; 