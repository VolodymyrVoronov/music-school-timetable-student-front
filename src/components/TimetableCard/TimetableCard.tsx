import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";

import {
  TimetableCardContainer,
  TimetableCardNumber,
  TimetableCardTime,
  TimetableCardText,
} from "./TimetableCard.styled";

interface TimetableCardProps {
  order: number;
  data: { lessonStart: string; lessonEnd: string; student: string };
}

const TimetableCard = ({ order, data }: TimetableCardProps): React.ReactElement => {
  const { lessonStart, lessonEnd, student } = data;

  return (
    <TimetableCardContainer>
      <TimetableCardNumber>{order}</TimetableCardNumber>
      <TimetableCardTime>
        {lessonStart && (
          <>
            Начало: <span>{lessonStart}</span>
          </>
        )}
      </TimetableCardTime>
      <TimetableCardTime>
        {lessonEnd && (
          <>
            Конец: <span>{lessonEnd}</span>
          </>
        )}
      </TimetableCardTime>
      <TimetableCardText>{student}</TimetableCardText>
    </TimetableCardContainer>
  );
};

export default TimetableCard;
