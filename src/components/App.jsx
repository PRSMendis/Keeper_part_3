import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [currentTitle, setCT] = useState("");
  const [currentContent, setContent] = useState("");

  // function NewNote() {}

  return (
    <div>
      <Header />
      <CreateArea
        title={currentTitle}
        setCT={setCT}
        content={currentContent}
        setContent={setContent}
      />
      <Note key={1} title="Note title" content={"Note content"} />
      <Footer />
    </div>
  );
}

export default App;
