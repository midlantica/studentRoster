import CohortForm from "./cohorts/CohortForm.js"
import { CohortList } from "./cohorts/CohortList.js"
import { getCohorts } from "./cohorts/CohortProvider.js"
import StudentList from "./students/StudentList.js"
import { getStudents } from "./students/StudentProvider.js"

getCohorts().then(CohortList)
CohortForm()
getStudents().then(StudentList)
