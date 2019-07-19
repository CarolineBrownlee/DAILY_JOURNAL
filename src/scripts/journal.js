
const journalEntries = [
    {
        date: "July 12, 2019",
        concept: "JavaScript Objects and Arrays",
        content: "Worked with objects and arrays and logging to the console",
        mood: "confused"
    },

    {
        date: "July 12, 2019",
        concept: "Flexbox",
        content: "I learned to use flexbox to style in CSS.",
        mood: "happy"
    },

    {
        date: "July 12, 2019",
        concept: "Group Project",
        content: "Learned to work in a group to build and design a tribute sight for John Legend.",
        mood: "happy"
    },

    {
        date: "July 12, 2019",
        concept: "Using GitHub",
        content: "We learned to set up repositories and push to master through the command line.",
        mood: "confused"
    }, 
    {
        date: "July 19, 2019",
        concept: "Worked with Bryan on Complicated Shit",
        content: "Figured it out...sort of.",
        mood: "confused"
    }, 

]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)*/

const journalEntryContainer = document.querySelector(".entryLog")

const makeJournalEntryComponent = journalEntry => {
    const entryLog =
    `
    <section>

        <h1>${journalEntry.date}</h1>

        <h2>${journalEntry.concept}</h2>

        <div>${journalEntry.content}</div>
        <div>${journalEntry.mood}</div>

    </section>

`
    journalEntryContainer.innerHTML += entryLog   
}


// makeJournalEntryComponent(journalEntries[0])
journalEntries.forEach(entry => makeJournalEntryComponent(entry) ) 

// /*
//     Purpose: To render all journal entries to the DOM

//     Arguments: entries (array of objects)
// */
// const renderJournalEntries = (entries) => {

// }

// // Invoke the render function
// renderJournalEntries(journalEntries)