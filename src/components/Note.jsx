import React from "react";
import Notes from '../notes';

const Array = Notes;
const AllNotes = (val) => {
    return ( <div className="note" key={val.key}>
    <h1>{val.title}</h1>
<p>{val.content}</p>
  </div>)
   
}
  

function Note() {
 return  (
   Array.map(AllNotes)
   
  );
}

export default Note;
