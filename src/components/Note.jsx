import NoteItem from "./NoteItem";
import { useSelector } from "react-redux";
const Note = () => {
  const create_note = useSelector((state) => state.note.note);
  const newNote  = [...create_note]
  newNote.shift()
  return (
    <div className="w-full mt-5 flex justify-evenly flex-wrap">
      {newNote.map((item,key)=>(
      <NoteItem item={item} key={key}/>
      ))}
    </div>
  );
};

export default Note;
