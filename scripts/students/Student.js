export const StudentHTML = (studentObj, cohortObj) => {
  return `
    <div class="ContainBox student">
      <h5 class="marT0 marBH">${studentObj.firstName} ${studentObj.lastName}</h5>
      <p class="marTB0">${cohortObj.name}</p>
    </div>
  `
}
