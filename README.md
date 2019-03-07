# lusa-pkg-email-templates
This repository provides functionality to lusa-email-boilerplate repositories.  With a set src/temp/dist folder structure, it is able to build new template content or read existing content from `src/content.json`, build [Inky HTML](https://foundation.zurb.com/emails/docs/inky.html), build stylesheets in accordance to the [Lilly Design System](https://designsystem.lilly.com/designers-guide-for-emails.html), and finalize html ready for shipping.

# Installation
```bash
npm install i -S lusa-pkg-email-templates
```

# Usage
The below code snipped is used in lusa-email-boilerplate
```js
'use strict';

const { build, rebuild, develop } = require('lusa-pkg-email-templates');
const path = require('path');

module.exports = async () => {
  // builds new template, overriding existing one if present
  const projectFolder = path.join(__dirname, '..');
  await build(projectFolder, true);
  
  // starts watch-rebuild server
  await develop(projectFolder);
  
  // rebuilds existing template
  await rebuild(projectFolder, false);
}
```

## Build Process
1. **`build-options`** - build options - such as mmn, template type, and footers - from
  * command line arguments (`get-options-from-command`)
  * wizard (`ask-user`)
  * existing template (`get-options-from-template`)
2. **`build-content`** - for a new template, generate example/templated content and layouts
  * `configure-handlebars.forTemplateContent()`
  * compile handlebars with content from options
3. **`build-html`** - build the base email content, which will be the same for all variations, then build all variations with the base email as the layout.
  * `build-base-email`
    * `configure-handlebars.forBaseEmail()` - build all email content excluding footers
    * compile and inject content
  * `build-footer-variations`
    * `configure-handlebars.forVariation()` - inject footer content specific to that variation
4. **`build-stylesheet`** - compile sass files from Inky, the design system, and src/styles.scss
  * save styles.css to temp folder
5. **`finalize-html`** - the final stage to the email build process.  All tasks which do not fall under the scope listed above will be completed at the end, including:
  * `inline-styles` - remove extra comments, inline CSS, and inject media queries into final HTML to dist folder
  * `build-alert-variations` - add custom headers & footers to final HTML in dist folder
  * `parse-data` - pull critical information out of content.json and write to dist/data.json
  
## Handlebars Content
**`configure-handlebars`** provides the ability to instantiate handlebars with only the partials, helpers, and content needed to complete the task at hand.  

* `forTemplateContent` will build a `content.json` file as a starting point for development, with predifined layouts such as branded-1, unbranded-2, or kitchen-sink.
* `forBaseEmail` contains the bulk of the email build tool handlebars code.  It builds out content cards and is where all of the major content block structure derive from.
* `forVariation` uses an existing **baseEmail** as the layout.  Every footer will use a unique instance of handlebars - where the 'footer' partial used in the base email will provide content unique to that footer.  All footer content is maintained within this directory.

# Testing & Validation
Automatic testing is done with unit tests and locked content tests.  Manual testing is done in two stages - functional test to confirm the beta performs as expected with the email boilerplate, and a behavioral test in litmus to examine cross-client compatibility of the final output.

### Unit Testing
`npm run test` runs all unit tests within the lib folder.  To ensure high fidelity, code coverage (calculated with `npm run coverage` must be above 95%. Whenever a new javascript files is added, it should have a unit test file to accompany it.

### Locked Content Testing
[WORK IN PROGRESS] Locked content is maintained in ``test/locked-content/content.json``. `npm run test-locked-content` will generate output with the email build tool, and check for respective pieces of content in each variation of a test email to verify locked content appears as expected.

### functional testing
Manual testing should take place on the last 3 days of every sprint cycle (as is documented in JIRA).  The first step includes cloning down the email boilerplate, installing a beta version of the build tool, and running a full build process start to finish on a locked transcript.  This transcript should include every type of card with several edge cases to determine behavioral problems.

### behavioral testing
Once the functional test is complete (pass/fail), at least a single variation should be tested in litmus and a thorough litmus check run agains the email in all prioritized email clients.  All issues should be noted, communicated to developers, and added/removed to/from the 'known issues' article in confluence.

Test sends should also be sent through both sendgrid and salesforce to examine behavior in outlook.

#### B) Build, Rebuild and Develop Scripts
Go through the checklist below to ensure all scripts are functional prior to promoting a beta release.  This checklist should also accompany all pre-release quality assurance checklists.
###### 1. *`npm run build`* - select *kitchen-sink* template and all footers.
* (x) pulls up wizard
* (x) user can navigate through all questions
* (x) generates `/src` and `/dist` directories with proper output
  * all html files in dist folder
  * content.json and styles.scss in src

###### 2. *`npm run build pp-in-us-0001 kitchen-sink lilly,healthlink,ska,none,alert`*
* (x) wizard asks user if they can overwrite existing template
* (x) wizard aborts build when no is clicked
* (x) generates `/src` and `/dist` directories with proper output

###### 3. *`npm run rebuild`*
* (x) no wizard is pulled up
* (x) build process completes

###### 4. *`npm run dev`* or *`npm run develop`*
  * navigate to web browser
  * open http://localhost:3000/
    * (x) emails in dist folder are represented on screen
    * (x) all emails can be previewed
    * (x) all emails have applied design system styles
 
