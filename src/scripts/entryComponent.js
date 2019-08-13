

const createJournalEntryComponent = journalEntry => {
    return `
    <section class="journalEntry--${journalEntry.id}">

        <h1>${journalEntry.date}</h1>

        <h2 class="concept">${journalEntry.concept}</h2>

        <div class="content">${journalEntry.content}</div>
        <div class="mood">${journalEntry.mood}</div>
        <button id="editBTN--${journalEntry.id}">Edit</button>
        <button type="button" id="deleteBTN--${journalEntry.id}" class="delete-button">
            Delete Journal Entry
        </button>
    </section>
`  
}


export default createJournalEntryComponent
