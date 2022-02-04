const renderLicenseBadge = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `
  ![License](https://img.shields.io/badge/License-${licenseText.split(' ').join('_')}-blue.svg)
  
  `;
};

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  }
  else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  else if (license === 'ISC License') {
    return 'https://opensource.org/licenses/ISC'
  }
  else if (license === 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  else if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
};

function renderLicenseSection(license) {
  if (!license) {
    return ''
  }

  return `
  ## License
  [${license}](${renderLicenseLink(license)})
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ![Github License](http://img.shields.io/badge/license-${data.license}-blue.svg)


  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}


  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Please do not hesitate to contact with any questions or concerns!
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: <${data.email}>
`;
}





module.exports = generateMarkdown;
