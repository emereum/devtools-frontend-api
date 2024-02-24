# devtools-frontend-api

A build of `devtools-frontend` with some polyfills to make the tracing API useable in Node.


## Usage

```sh
yarn add emereum/devtools-frontend-api
```

```ts
import 'devtools-frontend-api/devtools_frontend_polyfills.js';
import { TraceModel } from 'devtools-frontend-api/dist/models/trace/trace';
import * as Handlers from 'devtools-frontend-api/dist/models/trace/handlers/handlers';
import { promises as fs } from 'fs';

(async function() {
    const traceFile = JSON.parse(await fs.readFile('./path/to/trace', { encoding: 'utf-8' }));
    const model = new TraceModel.Model({
      userTimings: Handlers.ModelHandlers.UserTimings,
      pageLoadMetrics: Handlers.ModelHandlers.PageLoadMetrics,
      Screenshots: Handlers.ModelHandlers.Screenshots,
      layoutShifts: Handlers.ModelHandlers.LayoutShifts,
    });
    await model.parse(traceFile.traceEvents);
    const trace = model.traceParsedData(0);
    console.log(JSON.stringify(trace, null, 2));
})();

```