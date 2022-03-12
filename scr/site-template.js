

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
      <title>Team Profile</title>
  </head>
  <body>
      <header>
      <h1>My Team</h1>
      </header>
  </body>
  </html>`;
};

module.exports = {formatHTML};