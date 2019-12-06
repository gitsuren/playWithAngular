
###https://stackoverflow.com/questions/37564906/what-are-all-the-index-ts-used-for

`index.ts` is similar `index.js` in nodejs or `index.html` is web site hosting.

So when you say `import {} from 'directory_name'` it will look for `index.ts` inside the specified directory and import whatever is exported there.

For example if you have `calculator/index.ts` as

```
export function add() {...}
export function multiply() {...}
```
You can do
```
import { add, multiply } from './calculator';
```


CHUCK NORIS JOKES API:
#####https://api.icndb.com/jokes/random/5?escape=javascript&limitTo=[nerdy]
https://chuck-norris-angular-jokes-3dsshr.stackblitz.io
