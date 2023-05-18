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
- [Contribution](#contribution)
- [Questions](#questions)
- [Tests](#tests)
- [Github](#github)
- [License](#license)
- [Credits](#credits)

`;
}

const renderInstallation = (installation) => {
  return "## Installation\n```bash\nnpm install\n```\n" + installation + "\n";
}

const renderUsage = (usage) => {
  return "## Usage\n```bash\nnode index.js\n```\n" + usage + "\n";
}

const renderTests = (tests) => {
  return `## Tests
${tests}

`
}
const renderContribution = (contribution) => {
  return `## Contribution
${contribution}

`
}

const renderCredits = (fname, lname) => {
  return `## Credits
Made by: ${fname} ${lname}

`
}

const renderGithub = (github) => {
  return `## Github
Github: [${github}](https://www.github.com/${github})

`
}

const renderQuestions = (questions, email) => {
  return `## Questions
  ### Have questions for me?
  [Email me!](mailto:${email})

  ### Know anything about this?
  ${questions}

  `
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => { 
  switch (license) {
    case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`;
      break;
    
    case 'unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n`;
      break;
    default:
      return "Other";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// const renderLicenseLink = (license) => {

// }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicense = (license) => {
  switch (license) {
    case 'MIT':
      return `## License
### MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

`;
    case 'unlicense':
      return `## License

### The Unlicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>

`;
      break;
    default:
      return "Other";
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { fname, lname, title, description, installation, usage, contribution, tests, questions, email, github, license } = data;
  let markdown = renderTitle(title);
  markdown += renderLicenseBadge(license);
  markdown += renderTableOfContents();
  markdown += renderDescription(description);
  markdown += renderInstallation(installation);
  markdown += renderUsage(usage);
  markdown += renderContribution(contribution);
  markdown += renderTests(tests);
  markdown += renderQuestions(questions, email);
  markdown += renderGithub(github);
  markdown += renderLicense(license);
  markdown += renderCredits(fname, lname);

  return markdown;
}

module.exports = generateMarkdown;
