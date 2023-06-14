import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
    const [notes, setNotes] = React.useState(() => JSON.parse(window.localStorage.getItem('react_project_notes') || []));
    const [currentNoteId, setCurrentNoteId] = React.useState(() => (notes[0] && notes[0].id) || "");

    React.useEffect(() => {
        window.localStorage.setItem('react_project_notes', JSON.stringify(notes));
    },[notes])
    
    function createNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now()
        };

        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }
    
    function updateNote(text) {
        let updatedNotes = notes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text, updatedAt: Date.now() }
                : oldNote
        })

        updatedNotes = updatedNotes.sort((a, b) => {
            return a.updatedAt >= b.updatedAt ? -1 : 1;
        });

        setNotes(updatedNotes);
    }

    function deleteNote(id) {
        setNotes(oldNotes => {
            return oldNotes.filter(note => note.id !== id);
        });
    }
    
    function findNote(id) {
        return notes.find(note => {
            return note.id === id
        }) || notes[0];
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[20, 80]} 
                direction="horizontal" 
                className="flex text-slate-800"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findNote(currentNoteId)}
                    setCurrentNoteId={setCurrentNoteId}
                    createNote={createNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findNote(currentNoteId)} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="w-full h-full flex flex-col justify-center items-center bg-slate-100 text-slate-800">
                <h1>You have no notes</h1>
                <button 
                    className="cursor-pointer bg-mauve rounded p-4 text-slate-100" 
                    onClick={createNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
