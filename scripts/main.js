import CohortForm from "./cohorts/CohortForm.js"
import { CohortList } from "./cohorts/CohortList.js"
import { getCohorts } from "./cohorts/CohortProvider.js"

getCohorts().then(CohortList)
CohortForm()
