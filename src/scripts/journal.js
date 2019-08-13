// Reference to dom
// Event listener
// Get data
// Html Representation
// Render to dom

import API from "./data.js"
import createJournalEntryComponent from "./entryComponent.js"
import entryToDom from "./entriesDOM.js"


        API.getJournalEntries().then(entriesArray => {
            entriesArray.forEach(entry => {
                const journalHTML = createJournalEntryComponent(entry)
                entryToDom(journalHTML)
       })
    })

const submitJournalEntry = document.querySelector("#BTN")

const date = document.getElementById("journalDate")
const concept = document.getElementById("conceptsCovered")
const content = document.getElementById("content")
const mood = document.getElementById("mood")

const createNewJournalEntry = (date, concept, content, mood) => {
    return {
    "date": date.value,
    "concept": concept.value,
    "content": content.value,
    "mood": mood.value
    }
}


const journalEntryContainer = document.querySelector("#entryLog")

document.querySelector("#BTN").addEventListener("click", () => {
    const journalEntryObject = createNewJournalEntry(date, concept, content, mood)
        API.saveJournalEntry(journalEntryObject)
        .then(API.getJournalEntries)
        .then(entries => {
            journalEntryContainer.innerHTML = ""
            entries.forEach(entry => {
                const journalHTML = createJournalEntryComponent(entry)
                entryToDom(journalHTML)
        })
})
        .then(() => {
            date.value = ""
            concept.value = ""
            content.value = ""
            mood.value = ""
        })
})


        


const radioButtons = document.getElementsByName("mood")

radioButtons.forEach(button => {
   button.addEventListener("click", event => {
        const mood = event.target.value
        // get journal entries (api.getjournalentries)
        API.getJournalEntries().then(entries => {
            const filteredArray = entries.filter(entry => entry.mood === mood)
            return filteredArray
        })
        .then(filteredArray => {
            journalEntryContainer.innerHTML = ""
            filteredArray.forEach(entry => {
                const moodEntry = createJournalEntryComponent(entry)
                entryToDom(moodEntry)

            }); // clear the dom and put filtered Array on the dom
        }) 
    })
})



// delete entry

journalEntryContainer.addEventListener("click", () => {
        if (event.target.id.startsWith("deleteBTN--")) {
            const entryToDelete = event.target.id.split("--")[1]
            
            API.deleteEntry(entryToDelete)
            .then(API.getJournalEntries)
            .then(entries => {
                journalEntryContainer.innerHTML = ""
                entryToDom(entries)   
            })
        } else if (event.target.id.startsWith("editBTN--")) {
        submitJournalEntry.value = "Save Entry"
        const entryToEdit = event.target.id.split("--")[1]

        API.getSingleJournalEntry(entryToEdit)
            .then(entry => {
                hiddenJournalId.value = entry.id
                date.value = entry.date
                concept.value = entry.concept
                entry.value = entry.entry
                mood.value = entry.mood
            })
    }
})



