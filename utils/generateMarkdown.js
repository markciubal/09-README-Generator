// Create render functions for each section.
const renderTitle = (title) => {
  return `# ${title}
  
`;
}

const renderDescription = (description) => {
  let descriptionMarkdown = `## Description
${description}

`
  return descriptionMarkdown;
}

const renderTableOfContents = () => {
  return `## Table of Contents
- [Descrption](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

`;
}

const renderInstallation = () => {
  return `## Installation
npm install

`;
}

const renderUsage = (usage) => {
  return `## Usage
${usage}

`;
}

const renderCredits = (fname, lname) => {
  return `## Credits
Made by: ${fname} ${lname}

`
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => { 

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicense = (license) => {
  switch (license) {
    case 'MIT':
      return `## License
MIT

`;
      break;
    default:
      return "Other";
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { fname, lname, title, description, usage, location, hex, linkedin, github, license } = data;
  let markdown = renderTitle(title);
  markdown += renderTableOfContents();
  markdown += renderDescription(description);
  markdown += renderInstallation();
  markdown += renderUsage(usage);
  markdown += renderCredits(fname, lname);
  markdown += renderLicense(license);
  return markdown;
}

module.exports = generateMarkdown;
