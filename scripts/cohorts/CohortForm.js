// form HTML

import { createCohort } from "./CohortProvider.js"

const formContainer = document.querySelector(".cohortForm")

formContainer.addEventListener("click", e => {
  if (e.target.id === "saveCohort") {
    const newCohort = {
      name: document.querySelector("#formCohortName").value,
    }
    //  send newly created Cohort data to db.json
    createCohort(newCohort)
  }
})

const render = () => {
  formContainer.innerHTML = `
    <div class="form">
      <form>
        <fieldset>
          <label>Cohort Name:</label>
          <input type="text" id="formCohortName">
        </fieldset>
      </form>
      <button id="saveCohort">Add New Cohort</button>
    </div>
  `
}

const CohortForm = () => {
  render()
}

export default CohortForm
