import styled from "styled-components";

import { colors } from "../../styles/colorPalette";

import { s8, s16, s32 } from "./../../styles/spacer";

const TimetableCardContainer = styled.div`
  display: flex;
  justify-content: start;

  padding: ${s16} ${s8};

  border-bottom: 2px solid ${colors.primary};

  transition: 0.25s ease;

  &:last-child {
    border-bottom: none;
  }
`;

const TimetableCardNumber = styled.p`
  display: flex;
  flex-basis: 50px;

  margin-right: ${s32};

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.primary};
`;

const TimetableCardTime = styled.p`
  display: flex;
  flex-basis: 175px;

  margin: 0 ${s16};

  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.primary};

  span {
    margin-left: ${s16};

    font-weight: 700;
  }
`;

const TimetableCardText = styled.p`
  display: flex;
  flex-basis: auto;

  margin: 0 ${s16};

  font-size: 18px;
  line-height: 24px;
  font-weight: 700;

  color: ${colors.primary};
`;

export { TimetableCardContainer, TimetableCardNumber, TimetableCardTime, TimetableCardText };
