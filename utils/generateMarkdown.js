function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents

* Installation

* Usage

* License

* Contributing

* Tests

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

## Tests

for the tests to run in the application use the following command:
${data.test}

## Questions

For questions about the project contact ${data.github} or directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
