import React from "react";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { IoIosArrowForward } from "react-icons/io";

import { TeacherContainer, TeacherText, TeacherIcon } from "./Teacher.styled";

interface TeacherProps {
  firstName: string;
  secondName: string;
  _id: string;
}

const Teacher = ({ firstName, secondName, _id }: TeacherProps): React.ReactElement => {
  return (
    <Slide top>
      <TeacherContainer>
        <TeacherText>
          {secondName} {firstName}
          <TeacherIcon>
            <IoIosArrowForward />
          </TeacherIcon>
        </TeacherText>
      </TeacherContainer>
    </Slide>
  );
};

export default Teacher;
