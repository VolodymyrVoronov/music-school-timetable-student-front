import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s8, s16, s20, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const TeacherContainer = styled.div`
  display: flex;
`;

const TeacherText = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: ${s8} 0;
  padding: ${s8} ${s16};

  font-size: 22px;
  line-height: 26px;
  font-weight: 700;

  color: ${colors.white};

  border: 1px solid ${colors.whiteOpacity05};

  transition: 250ms ease;

  &:hover {
    cursor: pointer;

    border-color: ${colors.whiteOpacity09};

    transition: 250ms ease;
  }
`;

const TeacherIcon = styled.span`
  display: flex;
`;

export { TeacherContainer, TeacherText, TeacherIcon };
