import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // const [currentTitle, setCT] = useState("");
  // const [currentContent, setContent] = useState("");
  const [noteArray, setNoteArray] = useState("");

  function addNote(note) {
    console.log(note);
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
      <Note key={1} title="Note title" content={"Note content"} />
      <Footer />
    </div>
  );
}

export default App;
