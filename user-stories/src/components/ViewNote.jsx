import {
  NoteView,
  NoteDate,
  NoteViewEdit,
  NoteProperty,
  FullNote,
  NoteText,
  CloseView,
  TextViewBody,
  EditContainer,
} from "../styles";
import ReactMarkdown from 'react-markdown'

const ViewNote = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <FullNote>
      <NoteProperty>
        <NoteDate>{props.date}</NoteDate>
        {props.edit ? (
          <NoteView onClick={props.toggleEdit}>
            <i className="icofont-eye-alt"></i>
          </NoteView>
        ) : (
          <NoteViewEdit onClick={props.toggleEdit}>
            <i className="icofont-pencil-alt-2"></i>
          </NoteViewEdit>
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
          <TextViewBody>
          <ReactMarkdown>{props.text}</ReactMarkdown>
          </TextViewBody>
        )}
      </NoteText>
    </FullNote>
  );
};

export default ViewNote;
