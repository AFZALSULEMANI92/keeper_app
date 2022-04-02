import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);
  function addNote(newnote) {
    setnotes((prevNotes) => {
      return [...prevNotes, newnote];
    });
  }
  function deletenote(id) {
    setnotes((prevNotes) => {
      return prevNotes.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            ondelete={deletenote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
