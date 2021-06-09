import styled from "styled-components";
const Note = () => {
  const Box = styled.div`
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
    margin: 0 60px;
    ${'' /* width: 70%; */}
    justify-content: center;
  `;
  const SectionH1 = styled.h1`
    font-size: 20px;
  `;
  const AddNote = styled.button`
    background-color: #fff;
    margin-right: 0;
    margin-left: auto;
  `;
  return (
    <Box>
      <SectionTitle>
        <SectionH1>Hi</SectionH1>
        <AddNote>Add note</AddNote>
      </SectionTitle>
    </Box>
  );
};

export default Note;
