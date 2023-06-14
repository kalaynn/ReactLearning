import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                className={`w-full cursor-pointer flex ${
                    note.id === props.currentNote.id ? "bg-mauve text-slate-100" : "text-slate-500"
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <div className="flex justify-between w-full p-6 overflow-hidden">
                    <div className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">
                        {note.body.split("\n")[0] ? note.body.split("\n")[0] : "[Empty line]"}
                    </div>
                    <div
                        className=""
                        onClick={() => props.deleteNote(note.id)}
                    >
                        X
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <section className="overflow-y-auto h-screen max-w-xs">
            <div className="flex justify-around m-4">
                <h3 className="text-2xl font-semibold">Notes</h3>
                <button className="cursor-pointer bg-mauve text-slate-100 h-8 w-8 rounded" onClick={props.createNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
