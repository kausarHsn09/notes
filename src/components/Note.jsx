import NoteItem from "./NoteItem";
import { useSelector } from "react-redux";
const Note = () => {
  const create_note = useSelector((state) => state.note.note);
  return (
    <div className="w-full mt-5 flex justify-evenly flex-wrap">
      {create_note.map((item,key)=>(
      <NoteItem item={item} key={key}/>
      ))}
    </div>
  );
};

export default Note;
