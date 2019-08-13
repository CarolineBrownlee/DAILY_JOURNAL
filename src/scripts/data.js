

const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
        .then(response => response.json())
    },
    saveJournalEntry(entry) {

    return fetch("http://localhost:8088/entries", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry),
    })
    },
    deleteEntry (journalEntryid) {
        return fetch(`http://localhost:8088/entries/${journalEntryid}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    editJournal(entryId) {
        return fetch(`http://localhost:8088/entries/${entryId}`)
            .then(response => response.json())
    },
    getSingleJournalEntry(journalEntryId) {
        return fetch(`http://localhost:8088/entries/${journalEntryId}`)
        .then(response => response.json())
    }
}

export default API
