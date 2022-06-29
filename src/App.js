import React, { useState, useEffect } from "react";
import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Notes } from "./MyComponents/Notes";
import { AddNote } from "./MyComponents/AddNote";

function App() {
  const deleteNote = (sno) => {
    setNotes(
      notes.filter((e) => {
        return e.sno !== sno;
      })
    );
  };
  const addNotes = (title, desc) => {
    let sno;
    if (notes.length === 0) {
      sno = 0;
    } else {
      sno = notes[notes.length - 1].sno + 1;
    }
    const myNote = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setNotes([...notes, myNote]);
  };
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header />
      <AddNote addNotes={addNotes} />

      {notes.map((noteItem) => {
        return (
          <Notes
            title={noteItem.title}
            desc={noteItem.desc}
            key={noteItem.sno}
            sno={noteItem.sno}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
