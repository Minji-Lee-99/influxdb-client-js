# influxdb-client-js

[![CircleCI](https://circleci.com/gh/influxdata/influxdb-client-js.svg?style=svg)](https://circleci.com/gh/influxdata/influxdb-client-js)
[![codecov](https://codecov.io/gh/influxdata/influxdb-client-js/branch/master/graph/badge.svg)](https://codecov.io/gh/influxdata/influxdb-client-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/influxdata/influxdb-client-js.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/influxdata/influxdb-client-js/context:javascript)
[![License](https://img.shields.io/github/license/influxdata/influxdb-client-js.svg)](https://github.com/influxdata/influxdb-client-js/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@influxdata/influxdb-client)](https://www.npmjs.com/package/@influxdata/influxdb-client)
[![Slack Status](https://img.shields.io/badge/slack-join_chat-white.svg?logo=slack&style=social)](https://www.influxdata.com/slack)

This repository contains the reference JavaScript client for InfluxDB 2.0. This client supports Node.js, browser, and Deno environments.

#### Note: Use this client library with InfluxDB 2.x and InfluxDB 1.8+. For connecting to InfluxDB 1.7 or earlier instances, see the [node-influx](https://github.com/node-influx/node-influx) client library.

## Documentation

This section contains links to the client library documentation.

* [Product documentation](https://docs.influxdata.com/influxdb/v2.0/api-guide/client-libraries/nodejs/), [Getting Started](#usage)
* [Examples](examples#influxdb-client-examples)
* [API Reference](https://influxdata.github.io/influxdb-client-js/influxdb-client.html)
* [Changelog](CHANGELOG.md)

## Features

InfluxDB 2.0 client consists of two main packages

- @influxdata/influxdb-client
  - Querying data using the Flux language
  - Writing data
    - batched in chunks on background
    - automatic retries on write failures
- @influxdata/influxdb-client-apis
  - provides all other InfluxDB 2.0 APIs for managing
    - sources, buckets
    - tasks
    - authorizations
    - health check
    - ...
  - built on top of @influxdata/influxdb-client

## Installation

To write or query InfluxDB, add `@influxdata/influxdb-client` as a dependency to your project using your favorite package manager.

```
$ npm install --save @influxdata/influxdb-client
$ yarn add @influxdata/influxdb-client
$ pnpm add @influxdata/influxdb-client
```

[@influxdata/influxdb-client](./packages/core/README.md) module primarily works in Node.js (main CJS and module ESM), but also provides a bundled ESM distribution for browsers. If you target browsers or clients that don't support ESM, see [@influxdata/influxdb-client-browser](./packages/core-browser/README.md) for UMD distributions.

To use InfluxDB management APIs in your project, also add `@influxdata/influxdb-client-apis` as a dependency to your project.

```
$ npm install --save @influxdata/influxdb-client-apis
$ yarn add @influxdata/influxdb-client-apis
$ pnpm add @influxdata/influxdb-client-apis
```

## Usage

Use the following examples to get started with the JavaScript client for InfluxDB:

- @influxdata/influxdb-client
  - [write points](./examples/write.js)
  - [query data](./examples/query.ts)
- @influxdata/influxdb-client-apis
  - [setup / onboarding](./examples/onboarding.js)
  - [create bucket](./examples/createBucket.js)
  - [health](./examples/health.js)

See [examples](./examples/README.md) for more advanced use case like the following:

- Execute parameterized queries.
- Use the client library with InfluxDB 1.8+.
- Use the client library in the browser or Deno.
- Process InfluxDB query results with RX Observables.
- Customize the writing of measurement points to InfluxDB.
- Visualize query results in [Giraffe](https://github.com/influxdata/giraffe).

JavaScript client API Reference Documentation is available online at https://influxdata.github.io/influxdb-client-js/ .

## Contributing

To contribute code, fork the repository and submit a pull request in GitHub to the JavaScript client `master` branch.

Build Requirements:

- Node.js v14 LTS
  ```bash
  node --version
  ```
- yarn 1.9.4. or higher
  ```bash
  yarn -v
  ```

Run tests:

```bash
$ yarn test
```

Check code coverage:

```bash
$ yarn coverage
```

Build distributions:

```bash
$ yarn build
```

## License

The InfluxDB 2.0 JavaScript client is released under the [MIT License](https://opensource.org/licenses/MIT).
