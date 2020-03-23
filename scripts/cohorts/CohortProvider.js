// set up a var to revceive copy of our cohorts db
let cohorts = []

// eventHub baby
const eventHub = document.querySelector(".container")

// ƒ that makes copyt of our cohorts
export const useCohorts = () => cohorts.slice()

// send message out to app from via eventHub that X has changed
const dispatchStateChangeEvent = () => {
  const cohortStateChangedEvent = new CustomEvent("cohortStateChanged")
  eventHub.dispatchEvent(cohortStateChangedEvent)
}
// need method that fetches GETs cohorts db
export const getCohorts = () => {
  return fetch("http://localhost:8088/cohorts")
    .then(response => response.json())
    .then(parsedCohorts => {
      cohorts = parsedCohorts
    })
}

// Need POST method
// gonna need a method that creates (POSTs) cohorts
export const createCohort = cohortObj => {
  return fetch("http://localhost:8088/cohorts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cohortObj),
  })
    .then(getCohorts)
    .then(dispatchStateChangeEvent)
}
