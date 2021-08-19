import React from "react";
import { useDispatch, useSelector } from "react-redux";
//@ts-ignore
import Slide from "react-reveal/Slide";

import { RootState } from "../../store/store";

import { getTechers } from "../../store/reducers/teachersReducer/action";

import Teacher from "./../Teacher/Teacher";
import LoaderSpinner from "./../common/UI/LoaderSpinner/LoaderSpinner";

import {
  TeachersContainer,
  TeachersContainerLeft,
  TeachersContainerLeftImage,
  TeachersContainerRight,
} from "./Teachers.styled";

import selectionImage01 from "./../../assets/selection-vector.svg";

const Teachers = (): React.ReactElement => {
  const dispatch = useDispatch();

  const { teachers, loadingTeachers } = useSelector((state: RootState) => state.teachersReducer);

  React.useEffect(() => {
    dispatch(getTechers());
  }, []);

  return (
    <Slide top>
      <TeachersContainer>
        <TeachersContainerLeft>
          <TeachersContainerLeftImage src={selectionImage01} />
        </TeachersContainerLeft>
        <TeachersContainerRight>
          {loadingTeachers ? (
            <LoaderSpinner bgColor="#ffffff" />
          ) : (
            <>
              {teachers.map((teacher) => {
                const { firstName, secondName, _id } = teacher;

                return <Teacher key={_id} firstName={firstName} secondName={secondName} _id={_id} />;
              })}
            </>
          )}
        </TeachersContainerRight>
      </TeachersContainer>
    </Slide>
  );
};

export default Teachers;
