# influxdb-client-apis

Contains generated client APIs for InfluxDB v2.1. See https://github.com/influxdata/influxdb-client-js to know more.

## Build

```bash
$ yarn build
```

## Re-generate APIs code

- fetch latest versions of openapi files
  - `wget -O resources/oss.yml https://raw.githubusercontent.com/influxdata/openapi/master/contracts/oss.yml`
  - `wget -O resources/invocable-scripts.yml https://raw.githubusercontent.com/influxdata/openapi/master/contracts/invocable-scripts.yml`
  - `wget -O resources/cloud.yml https://raw.githubusercontent.com/influxdata/openapi/master/contracts/cloud.yml`
- re-generate src/generated/types.ts and resources/operations.json using [oats](https://github.com/bonitoo-io/oats)
  - `rm -rf src/generated/*.ts`
  - `oats -i 'types' --storeOperations resources/operations.json --cloudApiSpec resources/cloud.yml resources/oss.yml resources/invocable-scripts.yml > src/generated/types.ts`
- generate src/generated APIs from resources/operations.json
  - `yarn generate`
- validate
  - `yarn test`
