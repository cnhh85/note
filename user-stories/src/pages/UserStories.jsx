import React, { useState, useEffect } from "react";
import NoteRender from "../components/NoteRender";
import {
  Box,
  SectionTitle,
  SectionH1,
  AddNote,
  NoteContainer,
} from "../styles";

const UserStories = () => {
  const NoteState = JSON.parse(window.localStorage.getItem("note")) || [
    {
      date: new Date(),
    },
  ];

  const [note, setNote] = useState(NoteState);

  useEffect(() => {
    window.localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  const addNote = () => {
    const tempNotes = [...note];
    const result = { date: new Date() };
    tempNotes.push(result);
    setNote(tempNotes);
  };

  const deleteNote = (idx) => {
    const tempNotes = [...note];
    tempNotes.splice(idx, 1);
    setNote(tempNotes);
  };

  const renderNote = () => {
    return note.map((note, idx) => (
      <NoteRender
        idx={idx}
        key={idx}
        date={note.date}
        delete={() => deleteNote(idx)}
      />
    ));
  };

  return (
    <Box>
      <SectionTitle>
        <SectionH1>Hi</SectionH1>
        <AddNote onClick={addNote}>ADD NOTE</AddNote>
      </SectionTitle>
      <NoteContainer length={note.length > 2 ? "scroll" : "hidden"}>
        {renderNote()}
      </NoteContainer>
    </Box>
  );
};

export default UserStories;
