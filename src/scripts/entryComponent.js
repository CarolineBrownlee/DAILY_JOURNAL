

const createJournalEntryComponent = journalEntry => {
    return `
    <section class="section">

        <h1>${journalEntry.date}</h1>

        <h2 class="concept">${journalEntry.concept}</h2>

        <div class="content">${journalEntry.content}</div>
        <div class="mood">${journalEntry.mood}</div>

    </section>
`  
}


export default createJournalEntryComponent

