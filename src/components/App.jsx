import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // const [currentTitle, setCT] = useState("");
  // const [currentContent, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    // console.log(note);
    console.log(notes);
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNotes(id) {
    setNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
        // title={currentTitle}
        // setCT={setCT}
        // content={currentContent}
        // setContent={setContent}
      />
      {notes.map((noteItem, index) => {
        // console.log(noteItem);
        console.log(index);
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            del={deleteNotes}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content={"Note content"} /> */}

      <Footer />
    </div>
  );
}

export default App;
