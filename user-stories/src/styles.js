import styled from "styled-components";

export const Box = styled.div`
  align-items: center;
  position: absolute;
  width: 70%;
  padding: 3rem;
  height: 70%;
  background-color: #274c5e;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const SectionTitle = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto 0;
`;

export const SectionH1 = styled.h1`
  font-size: 20px;
`;

export const AddNote = styled.button`
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  transition: 0.25s;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

export const NoteContainer = styled.div`
  width: 90%;
  height: 80%;
  margin: 50px auto 0;
  overflow-y: ${(props) => props.length};
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

//NoteRender.jsx

export const Note = styled.div`
  margin: 0 auto 25px 20px;
  width: 1150px;
  height: 200px;
  border-radius: 20px;
  background-color: #247d96;
  color: #fff;
`;

export const NoteProperty = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
`;

export const NoteDate = styled.p`
  font-size: 15px;
  margin: 15px auto 15px 30px;
`;

export const NoteView = styled.div`
  margin: auto 20px auto;
  cursor: pointer;
  font-size: 27px;
`;

export const NoteEdit = styled.div`
  margin: auto 20px auto;
  cursor: pointer;
  font-size: 20px;
`;

export const NoteDelete = styled.div`
  margin: auto 30px auto 20px;
  cursor: pointer;
  font-size: 20px;
`;

export const NoteText = styled.div`
  margin: 20px 70px;
  text-align: left;
`;

export const TextBody = styled.p`
  margin: 10px 20px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

//ViewNote.jsx

export const NoteViewEdit = styled.div`
  margin: auto 20px auto;
  cursor: pointer;
  font-size: 20px;
`;

export const FullNote = styled.div`
  width: 1150px;
  height: 700px;
  border-radius: 20px;
  background-color: #247d96;
  color: #fff;
  position: fixed;
  top: 125px;
`;

export const CloseView = styled.div`
  margin: auto 30px auto 20px;
  cursor: pointer;
  font-size: 20px;
`;

export const TextViewBody = styled.p`
  margin: 10px 20px;
  font-size: 16px;
  overflow-y: scroll;
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

export const EditContainer = styled.textarea`
  margin-top: 30px;
  font-size: 16px;
  overflow-y: scroll;
  width: 100%;
  height: 200px;
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
