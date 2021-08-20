import React from "react";
import { useSelector } from "react-redux";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { RootState } from "../../store/store";

import TimetableCard from "./../TimetableCard/TimetableCard";
import LoaderSpinner from "./../common/UI/LoaderSpinner/LoaderSpinner";

import {
  TimetableCardsContainer,
  TimetableCardsDate,
  TimetableCardsText,
  TimetableCardsImage,
} from "./TimetableCards.styled";

import noDataImage01 from "./../../assets/no-data-vector.svg";

const TimetableCards = (): React.ReactElement => {
  const { timetable, date, loadingTimetable } = useSelector((state: RootState) => state.teachersReducer);

  return (
    <Slide top>
      <TimetableCardsContainer>
        {loadingTimetable ? (
          <LoaderSpinner />
        ) : (
          <>
            <Slide top>
              <TimetableCardsDate>Выбраная дата: {date}</TimetableCardsDate>
            </Slide>
            {timetable.length === 0 && (
              <>
                <Slide top>
                  <TimetableCardsText>На эту дату расписания нет.</TimetableCardsText>
                  <TimetableCardsImage src={noDataImage01} />
                </Slide>
              </>
            )}
            {timetable.map((table) => {
              const { _id, order, data } = table;

              return <TimetableCard key={_id} order={order} data={data} />;
            })}
          </>
        )}
      </TimetableCardsContainer>
    </Slide>
  );
};

export default TimetableCards;
