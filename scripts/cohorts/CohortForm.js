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
  <section>
    <div class="dh-Form flexColumnWrap align-center">
      <form>
        <fieldset class="text-center">
          <input type="text" id="formCohortName" class="mar0 marLRH marBH" placeholder="Add New Cohort...">
          <button id="saveCohort" class="marLRH">Add New Cohort</button>
        </fieldset>
      </form>
    </div>
  </section>
  `
}

const CohortForm = () => {
  render()
}

export default CohortForm
