import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListQuestions } from "../actions/actionPost";
import Question from "./Question";
const ListQuestion = ({ id }) => {
  const dispatch = useDispatch();
  const listquestion = useSelector((state) => state.listQuestion);
  const { questions, error } = listquestion;
  useEffect(() => {
    dispatch(ListQuestions(id));
  }, []);
  return (
    <div className="col-lg-4 row mb-3 listquestion">
      {id == 2 ? (
        <h5 className="title_list_question ">Bài viết mới nhất</h5>
      ) : (
        <h5 className="title_list_question ">Câu hỏi mới nhất</h5>
      )}

      {questions ? (
        questions.map((question) => (
          <Question key={question.id} question={question} />
        ))
      ) : (
        <p>Khong co...</p>
      )}
    </div>
  );
};

export default ListQuestion;
