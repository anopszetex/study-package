# my-package
creating a simple package for study

restore dependencies as from package-lock.json
`npm ci`

## Example Docs

## Usage

```js
import { mapAsync } from '@anopszetex/my-package'

const items = [1, 2];

const total = mapAsync(items, (item) => item * 2);

console.log([...total]);
//=> [2, 4, 6]

const total = mapAsync(items)((row) => row * 2);

console.log([...total]);
//=> [2, 4, 6]
```
