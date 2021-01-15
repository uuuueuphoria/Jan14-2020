import { httpGetRequest } from './util/fetch-data.js';
import employeeView from './views/employee.js';
import createElementFromTemplate from './util/createElementFromTemplate';
import markupContainer from './util/addMarkupToPage';
window.addEventListener('load', function (e) {
  // HTTP GET Method request for JSON data
  //"https://reqres.in/api/users"
  //create VIEW, a template literal string of markup
  //convert the template to a dom node
  //seed the template with the data
  //wrap the data in container to the dom
  httpGetRequest('https://reqres.in/api/users').then((result) => {
    //passing data and getting back an array of template literals with data inside
    const templates = employeeView(result.data);
    const markup = createElementFromTemplate(templates);
    const employees = markupContainer('aside', 'display', markup);
    document.querySelector('.display').prepend(employees);
  });
});
