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
import remark from "remark";
import remark2react from "remark-react";

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
            {remark().use(remark2react).processSync(props.text).contents}
          </TextViewBody>
        )}
      </NoteText>
    </FullNote>
  );
};

export default ViewNote;
