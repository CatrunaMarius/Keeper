import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

  //  ======= condition rendem =======
  const [isExpanded, setExpended] = useState(false)

  function expand(){
    setExpended(true)
  }

  //========= Start Partea 1 ===========
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // ===== partea 1 + add  setNote- ========
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  //============= End partea 1 ====================

  return (
    <div>
      <form className="create-note">
       {/* ===== condition rendem ===== */}
        {isExpanded && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> }


        <textarea
          name="content"
        // ===== condition rendem =====
        onClick={expand}
        //===========================
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          // ===== condition rendem =====
          rows={isExpanded ? 3: 1}
          //========================
        />
        
        {/* === style react and condition rendem === */}
        <Zoom in={isExpanded }>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
