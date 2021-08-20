import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DayPicker from "react-day-picker";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { RootState } from "../../store/store";

import { setChosenDateAC } from "../../store/reducers/teachersReducer/action";

import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from "./../../const/const";

import Button from "../common/UI/Button/Button";

import { CalendarContainer, CalendarTitle, CalendarBlock, CalendarButtons } from "./Calendar.styled";

import "react-day-picker/lib/style.css";

const Calendar = (): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { teacherId, date } = useSelector((state: RootState) => state.teachersReducer);

  const onDayClick = (e: { toLocaleString: (arg0: string, arg1: { timeZoneName: string }) => string }): void => {
    const date = e.toLocaleString("uk-UA", { timeZoneName: "short" }).slice(0, 10);
    dispatch(setChosenDateAC(date));

    if (date) {
      history.push({
        pathname: "/timetable",
        state: {
          chosenDate: date,
        },
      });
    }
  };

  const onCancelButtonClick = () => {
    history.replace("/teachers");
  };

  if (!teacherId && !date) {
    history.push("/teachers");
  }

  return (
    <Slide top>
      <CalendarContainer>
        <Slide top>
          <CalendarTitle>Выберите дату для просмотра расписания.</CalendarTitle>
        </Slide>

        <Slide top>
          <CalendarBlock>
            <DayPicker
              onDayClick={onDayClick}
              locale="ru"
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              firstDayOfWeek={1}
              todayButton="Сегодня"
              disabledDays={[new Date(2017, 3, 12), { daysOfWeek: [0, 6] }]}
            />
          </CalendarBlock>
        </Slide>

        <CalendarButtons>
          <Slide top>
            <Button primary text="Назад" onClick={onCancelButtonClick} />
          </Slide>
        </CalendarButtons>
      </CalendarContainer>
    </Slide>
  );
};

export default Calendar;
