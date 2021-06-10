import styled from "styled-components";

const FullNote = styled.div`
  width: 1150px;
  height: 700px;
  border-radius: 20px;
  background-color: #247d96;
  color: #fff;
  position: fixed;
  top: 125px;
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

const CloseView = styled.div`
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

const EditContainer = styled.textarea`
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

const ViewNote = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <FullNote>
      <NoteProperty>
        <NoteDate>{props.date.toString()}</NoteDate>
        {props.edit ? (
          <NoteView onClick={props.toggleEdit}>
            <i className="icofont-eye-alt"></i>
          </NoteView>
        ) : (
          <NoteEdit onClick={props.toggleEdit}>
            <i className="icofont-pencil-alt-2"></i>
          </NoteEdit>
        )}
        <CloseView onClick={props.toggleShow}>
          <i className="icofont-close"></i>
        </CloseView>
      </NoteProperty>
      <NoteText>
        {props.edit ? (
          <EditContainer
            defaultValue={props.text}
            onChange={handleChange}
          ></EditContainer>
        ) : (
          <TextBody>{props.text}</TextBody>
        )}
      </NoteText>
    </FullNote>
  );
};

export default ViewNote;
