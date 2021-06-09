import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NoteRender from "../components/NoteRender";

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

  const Box = styled.div`
    align-items: center;
    position: absolute;
    width: 70%;
    padding: 3rem;
    height: 70%;
    background-color: #274c5e;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  `;

  const SectionTitle = styled.div`
    display: flex;
    width: 60%;
    margin: 0 auto 0;
  `;

  const SectionH1 = styled.h1`
    font-size: 20px;
  `;

  const AddNote = styled.button`
    background-color: #fff;
    margin-left: auto;
    cursor: pointer;
    height: 55px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid white;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    transition: 0.25s;
    &:hover {
      background-color: gray;
      color: white;
    }
  `;

  const NoteContainer = styled.div`
    width: 90%;
    height: 80%;
    margin: 50px auto 0;
    overflow-y: ${note.length > 2 ? "scroll" : "hidden"};
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #274c5e;
    }
    &::-webkit-scrollbar {
      width: 10px;
      background-color: #274c5e;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #3998b3;
    }
  `;

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
      <NoteContainer>{renderNote()}</NoteContainer>
    </Box>
  );
};

export default UserStories;
