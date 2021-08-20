import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s24, s32, s48, s96 } from "./../../styles/spacer";

const TimetableCardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 1000px;
  min-height: 666px;

  margin: auto;
  margin-top: ${s96};
  margin-bottom: ${s32};
  padding: ${s24};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

const TimetableCardsDate = styled.p`
  display: flex;
  justify-content: center;

  margin-bottom: ${s24};

  font-size: 24px;
  line-height: 28px;
  font-weight: 500;

  color: ${colors.primary};
`;

const TimetableCardsText = styled.p`
  display: flex;
  justify-content: center;

  margin-top: ${s24};

  font-size: 24px;
  line-height: 28px;
  font-weight: 500;

  color: ${colors.primary};
`;

const TimetableCardsImage = styled.img`
  display: block;

  width: 35%;

  margin: 0 auto;
  margin-top: ${s48};
`;

export { TimetableCardsContainer, TimetableCardsDate, TimetableCardsText, TimetableCardsImage };
