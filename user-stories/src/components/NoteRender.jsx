import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
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

  const createdOn = new Date(props.date)
  let date = createdOn.getDate()
  let month = createdOn.getMonth() + 1
  const yyyy = createdOn.getFullYear()

  let hours = createdOn.getHours()
  const minutes = createdOn.getMinutes()
  let seconds = createdOn.getSeconds()

  if (date < 10) {
    date = `0${date}`
  }
  if (month < 10) {
    month = `0${month}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  hours = hours > 12 ? hours - 12 : hours < 10 ? '0' + hours : hours

  const formattedDate = `${date}-${month}-${yyyy} ${hours}:${minutes}:${seconds} ${
    createdOn.getHours() > 12 ? 'PM' : 'AM'
  }`

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
        <NoteDate>{formattedDate}</NoteDate>
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
        <ReactMarkdown>{text}</ReactMarkdown>
        </TextBody>
      </NoteText>
      {toggleView.show ? (
        <ViewNote
          toggleEdit={() => changeToggleEdit()}
          toggleShow={() => changeToggleShow()}
          date={formattedDate}
          edit={toggleView.edit}
          text={text}
          onChange={handleChange}
        />
      ) : null}
    </Note>
  );
};

export default NoteRender;
