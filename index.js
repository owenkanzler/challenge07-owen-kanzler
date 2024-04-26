const fs = require("fs");
const inquirer = require("inquirer");

// Function to generate the README content based on user inputs
function generateREADME(answers) {
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    tests,
    license,
    githubUsername,
    email,
  } = answers;

  // Generate README content with user inputs
  const readmeContent = `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is covered under the ${license} license.

## Contributing
${contribution}

## Tests
${tests}

## Questions
For additional questions, you can reach me through my [GitHub profile](https://github.com/${githubUsername}) or via email at ${email}.
    `;

  // Write README file
  fs.writeFile("README.md", readmeContent, (err) => {
    if (err) {
      console.error("Error writing README:", err);
    } else {
      console.log("README.md file created successfully!");
    }
  });
}

// Prompt user for project information
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter your project title:",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description:",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information:",
    },
    {
      type: "input",
      name: "contribution",
      message: "Enter contribution guidelines:",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license:",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause"],
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
  ])
  .then((answers) => {
    generateREADME(answers);
  })
  .catch((err) => {
    console.error("Error occurred during prompt:", err);
  });
