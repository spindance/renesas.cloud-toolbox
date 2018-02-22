/**
 * @file Converts our markdown document files to PDF, using https://www.npmjs.com/package/markdown-pdf
 * Just invoke with `node markdownDocsToPdf.js`
 */

const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const markdownpdf = require('markdown-pdf');


const CSS_PATH = path.resolve(__dirname, 'markdownDocs.css');
const PATH_TO_DOC_DIR = path.resolve(__dirname, '..', 'doc');
const PATH_TO_EXPORT_DIR = path.join(PATH_TO_DOC_DIR, 'pdf_exports');

const DOCS_TO_CONVERT = [
  'Adding_Cloud_Accounts',
  'Setting_Up_Voice_Speakers',
  'Running_the_Demo',
  'Possible_Voice_Commands'
];

console.log('Exporting markdown documents...');

DOCS_TO_CONVERT.forEach((docName) => {
  const pathToOrigDoc = path.join(PATH_TO_DOC_DIR, `${docName}.md`);
  const pathToExportDoc = path.join(PATH_TO_EXPORT_DIR, `${docName}.pdf`);

  const options = {
    cssPath: CSS_PATH,
    remarkable: {
      breaks: false
    }
  };

  markdownpdf(options)
    .from(pathToOrigDoc)
    .to(pathToExportDoc, () => {
      console.log(`${docName}.md... Done`)
    });
});
