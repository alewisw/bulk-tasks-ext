# Import File Format

There are three import file formats supported:
1. Single Document: Import a single FoundryVTT [Document](https://foundryvtt.com/api/classes/foundry.abstract.Document.html).
2. Multi-document Package: Import a JSON file that contains multiple documents in the `package` format.
3. Multi-document JSON Lines: Import a file in [JSON Lines](https://jsonlines.org/) format where each line is a FoundryVTT Document.


## Single Document

A single document file is identified by:
* the filename having a `.json` suffix; and
* the file being a single JSON object that DOES NOT contain a `package` field.

The single document must be a FoundryVTT [Primary Document](https://foundryvtt.wiki/en/development/api/document#primary-documents).

The JSON form of primary documents do not have an explicity mechanism to identify their type; as such, the type is inferred based on the content of the document.

| Document Type | Priority | Field Presence Inference Rule |
| ------------- | -------- | ----------------------------- |
| [Actor](https://foundryvtt.com/api/interfaces/foundry.types.ActorData.html) | 1 | `system` is present, `prototypeToken` is present, `items` is an array |
| [Item](https://foundryvtt.com/api/interfaces/foundry.types.ItemData.html) | 2 | `system` is present, `type` is present, `text` is not present, `pages` is not present |
| [Journal](https://foundryvtt.com/api/interfaces/foundry.types.JournalEntryData.html) | 3 | `pages` is an array, `name` is present |
| [Macro](https://foundryvtt.com/api/interfaces/foundry.types.MacroData.html) | 4 | `command` is present, `scope` is present |
| [Scene](https://foundryvtt.com/api/interfaces/foundry.types.SceneData.html) | 5 | `grid` is present, `fog` is present |
| [Playlist](https://foundryvtt.com/api/interfaces/foundry.types.PlaylistData.html) | 6 | `channel` is present, `playing` is present, `seed` is present, `sounds` is present |
| [RollTable](https://foundryvtt.com/api/interfaces/foundry.types.RollTableData.html) | 7 | `results` is present, `displayRoll` is present, `replacement` is present |
| [Folder](https://foundryvtt.com/api/interfaces/foundry.types.FolderData.html) | 8 | `name` is present, `type` is present, `sorting` is present |

Documents can be imported with or without their IDs.  When the "Keep IDs on Import" setting is enabled, the `_id` field is preserved.


## Multi-document Package

The multi-document package is identified by:
* the filename having a `.json` suffix; and
* the file being a single JSON object that has a `package` field.

The format of the multi-document package is like:
```
{
  "package": { },
  "items": [
    { <Single Document 1> },
    { <Single Document 2> },
    { ... },
    { <Single Document N> },
  ],
  "folders": [
    { <Folder Document 1> },
    { <Folder Document 2> },
    { ... },
    { <Folder Document N> },
  ]
}
```

## Multi-document JSON Lines

The multi-document JSON lines is identified by NOT having a `.json` suffix; that is - it is the fall-back document format.

The format of the multi-document JSON lines package is like:
```
{ <Single Document 1> }
{ <Single Document 2> }
{ ... }
{ <Single Document N> }
```
