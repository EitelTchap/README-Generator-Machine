// function to generate markdown for README
function generateMarkdown(data) {

  return `
  
# ${data.title}

${data.license[0][1]}



## Description 

${data.description}


## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#Contributions)
* [Test](#Test)


## Installation

${data.installation}


## Usage 

${data.usage}


## License

The license used is: ${data.license[0][0]}


## Contributions

${data.contributions}


## Tests

${data.test}


---

© Eitel production. All Rights Reserved.`;

}

module.exports = generateMarkdown;
