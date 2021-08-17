import styled from "styled-components";

import { colors } from "../../styles/colorPalette";
import { boxShadow } from "../../styles/globalStylesVariables";

import { s20, s32, s48, s64, s96, s160 } from "./../../styles/spacer";

const TeachersContainer = styled.div`
  display: flex;

  width: 1000px;
  min-height: 666px;

  margin: auto;
  margin-top: ${s96};
  margin-bottom: ${s64};

  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

const TeachersContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;

  padding: ${s64} 0;
`;

const TeachersContainerLeftImage = styled.img`
  display: block;

  width: 75%;
`;

const TeachersContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;

  padding: ${s48} ${s32};

  background-color: ${colors.primary};

  div {
    width: 100%;
  }
`;

export { TeachersContainer, TeachersContainerLeft, TeachersContainerLeftImage, TeachersContainerRight };
