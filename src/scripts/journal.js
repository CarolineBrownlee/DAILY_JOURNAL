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
            entryToDom(filteredArray) // clear the dom and put filtered Array on the dom
        }) 
    })
})

// Once you have filtered the entries by mood, invoke the function
//  that renders the HTML representations to the DOM and pass it the filtered array of entries.


