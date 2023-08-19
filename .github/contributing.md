# contributing

- install node using nvm/fnm. reference the `.nvmrc`. installing these tools is not covered here
- install pnpm
- `pnpm install`
- `pnpm dev`
- go nuts

## updating the data

The data is currently maintained in a spreadsheet. The current model has very simple attribute scoring using 0-3 integer values, or `na` for not applicable. Generally, int values are relative to the collective. 3 = excellent, 2 = ok/good/acceptable, 1 = minimal, 0 = incapable/inadequate. This is likely to change in the future.

- Fork it, and update the URLs in [./scripts/prepare-data.mjs](../scripts/prepare-data.mjs). You can find the URL in the aforementioned module.
- `rm data*` before running dev or build to get fresh copies.
- run `pnpm prepare:data` or just start the app in dev mode (`pnpm dev`) to update data

## updating the model

see [./src/app/model/{model-name}](../src/app/model/basic.ts).
