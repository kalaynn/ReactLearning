import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { notesCollection } from "./firebase"

export default function App() {
    const [notes, setNotes] = React.useState([]);
    const [currentNoteId, setCurrentNoteId] = React.useState("");

    React.useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
            let notesArray = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))

            notesArray = notesArray.sort((a, b) => {
                return a.updatedAt >= b.updatedAt ? -1 : 1;
            });

            setNotes(notesArray);
        });

        return unsubscribe;
    },[])
    
    async function createNote() {
        const newNote = await addDoc(notesCollection, {
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now()
        })

        setCurrentNoteId(newNote.id);
    }
    
    async function updateNote(text) {
        const noteReference = doc(notesCollection, currentNoteId);

        await updateDoc(noteReference, {
            body: text,
            updatedAt: Date.now()
        });
    }

    async function deleteNote(id) {
        const noteReference = doc(notesCollection, id);

        await deleteDoc(noteReference);
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
