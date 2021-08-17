import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { IoIosArrowForward } from "react-icons/io";

import { TeacherContainer, TeacherText, TeacherIcon } from "./Teacher.styled";

const Teacher = (): React.ReactElement => {
  return (
    <Slide top>
      <TeacherContainer>
        <TeacherText>
          Kotov Maxim
          <TeacherIcon>
            <IoIosArrowForward />
          </TeacherIcon>
        </TeacherText>
      </TeacherContainer>
    </Slide>
  );
};

export default Teacher;
