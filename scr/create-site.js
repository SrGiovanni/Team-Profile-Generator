const fs = require('fs');
/**
 * Write file function to dist folder
 */
 const writeIndexFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
              ok: true,
              message: 'HTML File created!'
            });
        });
    });
};
/**
 * Copy the CSS file to the dist folder
 */
const copyCSSFile = () => {
return new Promise((resolve, reject) =>{
    fs.copyFile("./scr/style.css", './dist/style.css', err => {
        // if there is an error, reject the promise and send error to the catch method
        if (err) {
            reject(err);
            return;
        }
        // success condition 
        resolve({
            ok: true,
            message: 'CSS File copied!'
        })
        });
})
};

module.exports = {writeIndexFile, copyCSSFile};