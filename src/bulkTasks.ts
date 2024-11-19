// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                      Imports
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
import './scss/main.scss';
import { moduleId, moduleName } from './constants.ts';


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                        Main
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
Hooks.on('init', () => {
  // TODO: Register settings
  console.log(`${moduleName} | Initialized.`);
});

Hooks.on('renderSidebarTab', async (app, html) => {
  // addBulkButton(app, html);
});

Hooks.on('setup', async () => {
  console.log(`${moduleName} | Setup Complete.`);
});

Hooks.on('ready', async () => {
  // templateLoader();
  console.log(`${moduleName} | Ready.`);
});
