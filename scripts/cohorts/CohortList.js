import { CohortHTML } from "./Cohort.js"
import { useCohorts } from "./CohortProvider.js"

const cohortContainer = document.querySelector(".cohortList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("cohortStateChanged", () => {
  cohortContainer.innerHTML = ""
  render()
})

const render = () => {
  const allCohorts = useCohorts()

  for (const singleCohort of allCohorts) {
    cohortContainer.innerHTML += CohortHTML(singleCohort)
  }
}

export const CohortList = () => {
  render()
}
