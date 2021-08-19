import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { setTeacherIdAC } from "./../../store/reducers/teachersReducer/action";

import { IoIosArrowForward } from "react-icons/io";

import { TeacherContainer, TeacherText, TeacherIcon } from "./Teacher.styled";

interface TeacherProps {
  firstName: string;
  secondName: string;
  _id: string;
}

const Teacher = ({ firstName, secondName, _id }: TeacherProps): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onTeacherBlockClick = () => {
    dispatch(setTeacherIdAC(_id));

    if (_id) {
      history.push("/calendar");
    }
  };

  return (
    <Slide top>
      <TeacherContainer onClick={() => onTeacherBlockClick()}>
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
