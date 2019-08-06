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


document.querySelector("#BTN").addEventListener("click", () => {
    const journalEntryObject = createNewJournalEntry(date, concept, content, mood)
        console.log(journalEntryObject)
        API.saveJournalEntry(journalEntryObject).then(result => {
           // then get array then render array
    })
})


// Add new method named saveJournalEntry to your data module. It should take the entry object as an argument.
// Implement the method using fetch to perform a POST request.
// In main module, invoke method to save entry, then add item to local array.
// Update DOM with updated array values.
// post.then(get).then(render)



// allEntries.push({date, concept, entry, mood})
// renderJournalEntries(allEntries)
