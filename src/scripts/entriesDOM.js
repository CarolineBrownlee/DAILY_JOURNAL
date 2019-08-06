const journalEntryContainer = document.querySelector("#entryLog")

const entryToDom = (string) => {
    journalEntryContainer.innerHTML += string
}


export default entryToDom