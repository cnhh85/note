import React, { useState, useEffect } from "react";
import styled from "styled-components";
import remark from "remark";
import remark2react from "remark-react";
import ViewNote from "./ViewNote.jsx";

const Note = styled.div`
  margin: 0 auto 25px 20px;
  width: 1150px;
  height: 200px;
  border-radius: 20px;
  background-color: #247d96;
  color: #fff;
`;

const NoteProperty = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
`;

const NoteDate = styled.p`
  font-size: 15px;
  margin: 15px auto 15px 30px;
`;

const NoteView = styled.div`
  margin: auto 20px auto;
  cursor: pointer;
  font-size: 27px;
`;

const NoteEdit = styled.div`
  margin: auto 20px auto;
  cursor: pointer;
  font-size: 20px;
`;

const NoteDelete = styled.div`
  margin: auto 30px auto 20px;
  cursor: pointer;
  font-size: 20px;
`;

const NoteText = styled.div`
  margin: 20px 70px;
  text-align: left;
`;

const TextBody = styled.p`
  margin: 10px 20px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const NoteRender = (props) => {
  const NoteState =
    window.localStorage.getItem(`note-${props.idx}`) || "# Hello World";
  const [text, setText] = useState(NoteState);

  useEffect(() => {
    window.localStorage.setItem(`note-${props.idx}`, text);

    return () => {
      window.localStorage.removeItem(`note-${props.idx}`);
    };
  }, [text, props.idx]);

  const [toggleView, setToggleView] = useState({
    show: false,
    edit: false,
  });

  const changeToggleView = (toggle) => {
    setToggleView({ show: !toggle.show, edit: toggle });
  };

  const changeToggleEdit = () => {
    setToggleView({ show: toggleView.show, edit: !toggleView.edit });
  };

  const changeToggleShow = () => {
    setToggleView({ show: !toggleView.show, edit: toggleView.edit });
  };

  const handleChange = (newValue) => {
    setText(newValue);
  };

  return (
    <Note>
      <NoteProperty>
        <NoteDate>{props.date.toString()}</NoteDate>
        <NoteView onClick={() => changeToggleView(false)}>
          <i className="icofont-eye-alt"></i>
        </NoteView>
        <NoteEdit onClick={() => changeToggleView(true)}>
          <i className="icofont-pencil-alt-2"></i>
        </NoteEdit>
        <NoteDelete onClick={props.delete}>
          <i className="icofont-trash"></i>
        </NoteDelete>
      </NoteProperty>
      <NoteText>
        <TextBody>
          {remark().use(remark2react).processSync(text).contents}
        </TextBody>
      </NoteText>
      {toggleView.show ? (
        <ViewNote
          toggleEdit={() => changeToggleEdit()}
          toggleShow={() => changeToggleShow()}
          date={props.date.toString()}
          edit={toggleView.edit}
          text={text}
          onChange={handleChange}
        />
      ) : null}
    </Note>
  );
};

export default NoteRender;
