import React, { useState, useEffect } from "react";
import remark from "remark";
import remark2react from "remark-react";
import ViewNote from "./ViewNote.jsx";
import {
  Note,
  NoteProperty,
  NoteDate,
  NoteView,
  NoteEdit,
  NoteDelete,
  NoteText,
  TextBody,
} from "../styles";

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
