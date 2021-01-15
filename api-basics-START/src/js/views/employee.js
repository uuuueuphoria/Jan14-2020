/*
    @ method employeeView
    @param data to markup in the template
*/

function employeeView(employees) {
  //bring data create a array of template strings
  //returning the template strings as an array
  const templateMarkup = employees.map((employee, index) => {
    const template = `<figure>
<img src="${employee.avatar}" alt="" width="140" height="140" loading="lazy"> 
<figcaption>
<ul>
<li>${employee.first_name} ${employee.last_name}</li>
<li>${employee.email}</li>
</ul>
</figcaption>
</figure>`;

    return template;
  });

  return templateMarkup;
}

export default employeeView;
