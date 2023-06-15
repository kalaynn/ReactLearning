import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { notesCollection } from "./firebase"

export default function App() {
    const [notes, setNotes] = React.useState([]);
    const [currentNoteId, setCurrentNoteId] = React.useState("");
    const [editorText, setEditorText] = React.useState("");

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

            if (! currentNoteId) {
                setCurrentNoteId(notesArray[0]?.id);
            }
        });

        return unsubscribe;
    }, [])

    React.useEffect(() => {
        if (! currentNoteId) {
            return;
        }

        setEditorText(findNote(currentNoteId).body);
    }, [currentNoteId])

    React.useEffect(() => {
        // debounce by waiting 500 ms and checking that changes have settled
        const timeoutId = setTimeout(() => {
            if (editorText !== findNote(currentNoteId).body) {
                updateNote(editorText);
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [editorText])
    
    async function createNote() {
        const noteReference = await addDoc(notesCollection, {
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now()
        })

        setCurrentNoteId(noteReference.id);
    }
    
    function updateNote(body) {
        const noteReference = doc(notesCollection, currentNoteId);

        updateDoc(noteReference, {
            body: body,
            updatedAt: Date.now()
        });
    }

    async function deleteNote(noteId) {
        const noteReference = doc(notesCollection, noteId);

        await deleteDoc(noteReference);
    }
    
    function findNote(noteId) {
        return notes.find(note => {
            return note.id === noteId
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
                <Editor 
                    editorText={editorText} 
                    setEditorText={setEditorText} 
                />
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
