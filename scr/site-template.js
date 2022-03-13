/**
 * Format card
 * takes: an employee object.
 * returns: a formatted employee card
 */
const createCard = employee => {
  const role = employee.getRole();
  let custom;
  switch (role) {
    case 'Manager':
      custom = `<strong>Office Number:</strong> ${employee.getOfficeNumber()}`;
      break;
    case 'Engineer':
      custom = `<strong>Github:</strong> <a href="${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
      break;
    case 'Intern':
      custom = `<strong>School:</strong> ${employee.getSchool()}`;
      break;
    default:
      break;
  }
  return `
    <article class="card">
      <div class="card-header">
        <h3 class="card-title">${employee.getName()}</h3>
        <h4 class="card-subtitle">${role}</h4>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>ID:</strong> ${employee.getID()}</li>
          <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
          <li class="list-group-item">${custom}</li>
        </ul>
      </div>
    </article>`
}

/**
 * called from outside the file to format the HTML to be written to the file.
 */
const formatHTML = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>Team Profile</title>
  </head>
  <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        ${data.managers.map((employee) => {
            return createCard(employee);
          })
          .join("")}
        ${data.engineers.map((employee) => {
          return createCard(employee);
        })
        .join("")}
        ${data.interns.map((employee) => {
          return createCard(employee);
        })
        .join("")}
      </main>
  </body>
  </html>`;
};

module.exports = formatHTML;