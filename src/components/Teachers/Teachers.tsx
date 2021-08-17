import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";

import Teacher from "./../Teacher/Teacher";

import {
  TeachersContainer,
  TeachersContainerLeft,
  TeachersContainerLeftImage,
  TeachersContainerRight,
} from "./Teachers.styled";

import selectionImage01 from "./../../assets/selection-vector.svg";

const Teachers = (): React.ReactElement => {
  return (
    <Slide top>
      <TeachersContainer>
        <TeachersContainerLeft>
          <TeachersContainerLeftImage src={selectionImage01} />
        </TeachersContainerLeft>
        <TeachersContainerRight>
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
        </TeachersContainerRight>
      </TeachersContainer>
    </Slide>
  );
};

export default Teachers;
