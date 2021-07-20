const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dir/index.html', fileContent, err => {
            // if tehres an error, reject the promise and send the error to the promise .catch() method
            if(err) {
                reject(err);
                // return out of the function here to make sure the promise doesn't accidentally execute the resolve() as well
            return;
            }

            // if everything went well, resolve the Promise and send the successfull data to the .then() method
            resolve({
                ok:true,
                message: 'File has been created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
            fs.copyFile('./src/style.css', './dir/style.css', err => {
                // if there's an error, reject the promise and send the error to the promise ,catch() method
            if(err) {
                reject(err);
                // return out of the function here to make sure the Promise doesnt accidentally exectue the resolve() function 
            return;
            }

            // if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok:true,
                message: 'Style sheet has been copied successfully!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };