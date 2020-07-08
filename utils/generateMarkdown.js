function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents

* [Installation] (#installation)

* [Usage](#usage)

* [License](#liscense)

* [Contributing](#contributing)

* [Tests](#tests)

* links

* Questions

## Installation

To install necessary dependencies, run the following command:
${data.installation}

## Usage
${data.usage}

## Contributing 
${data.contributing}

## License
${data.license}

## Link to project URL
${data.URL_project}

## Questions

For questions about the project contact ${data.github} or directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
