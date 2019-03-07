'use strict';

const fs = require('fs');
const path = require('path');

const {
  inform, debug, succeeded,
} = require('../log');

module.exports = async (projectFolder, templateContent) => {
  const { mmn, footers: { variations: { alert } } } = templateContent;

  if (alert !== 'false') {
    inform('Building Alert Variations');

    const alertEmailContent = await fs.readFileSync(`${projectFolder}/dist/${mmn}-alert.html`, 'utf8');

    const buildTasks = Object.keys(alert).map(async (alertVariation) => {
      if (alert[alertVariation] !== 'false') {
        debug(`building alert${alertVariation} variation`);
        const alertHeader = await fs.readFileSync(path.join(__dirname, `alertContent/header${alertVariation}.html`));
        const alertFooter = await fs.readFileSync(path.join(__dirname, `alertContent/footer${alertVariation}.html`));

        const alertVariationContent = alertEmailContent
          .replace('<!-- special header placeholder -->', alertHeader)
          .replace('<!-- special footer placeholder -->', alertFooter);

        await fs.writeFileSync(`${projectFolder}/dist/${mmn}-alert${alertVariation}.html`, alertVariationContent);
        debug(`======== alert${alertVariation} variation built`);
      }
    });

    await Promise.all(buildTasks);
    succeeded('Built Alert Variations');
  }
};
