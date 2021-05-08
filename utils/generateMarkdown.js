function renderLicenseBadge(license) {
    if (license === 'unlicense') return '';

    const badgeName = license.replace('-', ' ');

    return `![${license}](https://img.shields.io/badge/license-${badgeName}-green?style=flat)`;
}

function renderLicenseLink(license) {
    if (license === 'unlicense') return '';

    return `[${license}](https://choosealicense.com/licenses/${license}/)`;
}

function renderLicenseContent(license) {
    if (license === 'unlicense') return '';

    return `Licensed under the ${renderLicenseLink(license)} license.`;
}

function renderTableOfContents(sections) {
    let content = '';

    sections.forEach((section, index) => {
        content += `${index !== 0 ? '\n' : ''}- [${section}](#${section.replace(' ', '-').toLowerCase()})`;
    });

    return content;
}

function renderQuestionContent(github, email) {
    let content = '';

    if (github !== '') {
        content += `Author [GitHub profile](https://github.com/${github}).\n`;
    }

    if (email !== '') {
        content += `You can also reach author with additional questions by [${email}](mailto:${email}).`;
    }

    return content;
}

function renderSection(name, content) {
    return `## ${name}
${content}
`;
}


function generateMarkdown(data) {
    const {
        title,
        description,
        installation,
        usage,
        contributing,
        tests,
        license,
        github,
        email,
    } = data;

    const tableContentSections = [
        'Installation',
        'Usage',
        'Contributing',
        'Tests',
        'License',
        'Questions',
    ];

    return `# ${title}
${renderLicenseBadge(license)}

${renderSection('Description', description)}
${renderSection('Table of Contents', renderTableOfContents(tableContentSections))}
${renderSection('Installation', installation)}
${renderSection('Usage', usage)}
${renderSection('Contributing', contributing)}
${renderSection('Tests', tests)}
${renderSection('License', renderLicenseContent(license))}
${renderSection('Questions', renderQuestionContent(github, email))}`;
}

module.exports = generateMarkdown;
