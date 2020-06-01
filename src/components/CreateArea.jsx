import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function NewNote(event) {
    // Set the values of title and content
    // console.log(props);
    // props.setCT()
    props.onAdd(note);
    event.preventDefault();
  }
  function handleChange(event) {
    // console.log(event.target);
    const { name, value } = event.target;

    setNote(prevNote => {
      // console.log(prevNote);
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form onChange={handleChange}>
        <input name="title" value={note.title} placeholder="Title" />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={NewNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

// ct {title: "", setCT: function bound dispatchAction(), content: "", setContent: function bound dispatchAction()
