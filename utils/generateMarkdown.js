// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }

  const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPL 3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD 3": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  };

  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }

  const links = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
    "BSD 3": "https://opensource.org/licenses/BSD-3-Clause"
  };

  return links[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }

  const licenseTexts = {
    MIT: `MIT License

    `,
    "Apache 2.0": `Apache License 2.0

    `,
    "GPL 3.0": `GNU General Public License v3.0

    `,
    "BSD 3": `BSD 3-Clause License

    `
  };

  return licenseTexts[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${licenseSection}For more information on this license, please visit [${licenseLink}](${licenseLink}).

## Questions

If you have any questions or issues, please contact ${data.github} at ${data.email}.
`;
}

module.exports = generateMarkdown;
