# Development Setup


## Prerequisites

There are two prerequisites for development of this module:
1. Install a licensed copy of FoundryVTT as outlined in the [installation instructions](https://foundryvtt.com/article/installation/).  Take particular note of the "User Data Path" configured in the "Settings" menu.
2. Install [Node.js](https://nodejs.org/) and check the version; this is known to work on v22.11.0.

```
> node --version
v22.11.0
```


## Source Code & Build

Clone the repository into the "User Data Path" `Data/modules` directory of the FoundryVTT installation:
```
> git clone https://github.com/NekroDarkmoon/bulk-tasks.git bulk-tasks
```

Development can occur in any IDE; Visual Studio Code is a common choice:
```
> code bulk-tasks
```

Install of the NPM dependencies:
```
> npm install
```

Finally, build the module:
```
> npm run build
```

This produces three output files:
* `bulkTasks.css`
* `bulkTasks.js`
* `bulkTasks.js.map`

The `bulkTasks.css` and `bulkTasks.js` files are referenced from the `module.json`:
```
{
  ...
	"esmodules": ["bulkTasks.js"],
	"styles": ["bulkTasks.css"],
  ...
}
```

The `bulkTasks.js.map` provide source code mapping for the `bulkTasks.js` file.


## Manual Testing

Cloning of the `bulk-data` module into the `Data/modules/bulk-data` directory results in the `modules.json` file being in exactly the correct location to load a module.

In order to use the module:
1. Start FoundryVTT and enter the administration console.
2. Navigate to the "Add-on Modules" tab.
3. The "Bulk Tests" module should appear in this directory; if it does not restart FoundryVTT.
4. Lock the by right-clicking "Bulk Tests" and selecting "Lock Module".  This is important to prevent FoundryVTT from automatically updating the module to the released version.
5. Create a new Game World, launch it, and join as a Gamemaster.
6. In the "Manage Modules" menu, enable "Bulk Tasks" and reload the FoundryVTT.

Console logs for the Bulk Tasks module can viewed in the Console tab under the diagnostics menu with the `F12` keypress.

After source code changes are made, apply those changes through:
```
> npm run build
```

Then in FoundryVTT reload the user interface with `F5`.
