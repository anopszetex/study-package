# study-package
creating a simple package for study

### Quick start

Create a folder and make it your current working directory:
```sh
mkdir my-app
cd my-app
```

Install dependencies:
```sh
npm i
```

To start the app:
```sh
npm run dev
```

### Install
To install my-package in an existing project as a dependency:

Install with npm:
```sh 
npm i @anopszetex/my-package
```
Install with yarn:
```sh
yarn add @anopszetex/my-package
```

## Example Usage

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
