# Sample project for Declarative Gherkin via Cucumber

This is a training aide to help people learn Declarative Gherkin.  It is not
easy to learn Declarative Gherkin.  Thus, this app helps people understand how
to take what they learned in training and see a working implementation.

Start with our [declarative gherkin docs](./docs/declarative-gherkin.md) to learn more about Declarative Gherkin and key concepts around Centralized Data Management, Cucumber Logging as well as app-specific terms used in the app like Back-end Ratio and Credit Score.

The [first-bank-of-change/features](first-bank-of-change/features) folder contains Declarative Gherkin feature files (Given, When, Then style tests).

See [Cucumber Logging](./docs/cucumber-logging.md) to troubleshoot e2e tests.

## How to run the full declarative Gherkin demo (app and end to end tests)

```
# clone the repo, then go to the app folder
cd first-bank-of-change

# install node depencies
make npm install

# spin up selenium via VNC so we can do testing - this does not return to shell - leave it running
docker compose up selenium
```

Open browser to http://localhost:7900/?autoconnect=1&resize=scale&password=secret

```
# in a new shell in the first-bank-of-change folder - run the end to end tests
make npm run e2e
```

You should see the tests run against the browser in the VNC viewer browser window.

The run should fail due to one failing test, but otherwise all tests should execute.

Open the file `./first-bank-of-change/.tmp/report/index.html` in a browser to see the report.

## Run the Example App

This demo uses a single app with everything running in memory.  No servers are
used for this demo.

```
# clone the repo, then go to the app folder
cd first-bank-of-change

# start the app
make npm run start
```

Open browser to  http://localhost:4200

## Local Development

When developing locally, you can run `make npm run start` it will watch your file
changes and reload.

In addition, when working on e2e tests, run
`make npm run e2e-dev`, it only runs the test suite.

To run lint, use `make npm run lint`.

To run unit tests, use `make npm run test`.

## More Info

### Generate Cucumber Step Definitions

WebdriverIO Cucumber framework does not generate the step definitions when
they are missing.  So, we use the VS Code extension
[Jest-cucumber code generator](https://marketplace.visualstudio.com/items?itemName=Piotr-Porzuczek.jest-cucumber-code-generator-extension).  

**NOTE:** the plugin generates regex requiring alteration, example:

Failing regex:

```gehrkin
Then(/^they see a submittal response (.*)$/
```

Correct regex: (Double quotes)

```gehrkin
Then(/^they see a submittal response "(.*)"$/
```

Without the double quotes, the string will contain them and fail comparisons.


### WARNING

At the time of writing 2 vulnerabilities are present in upstream
npm dependencies.  

- Meow issue
  - @wdio/devtools-service@7.7.3 requires trim-newlines@^1.0.0 via a transitive dependency on meow@3.7.0
  - Waiting for meow to release its patch and be picked up
  - [Mewo issue](https://github.com/sindresorhus/meow/issues/186)
- ecstatic issue
  - @nrwl/web@12.3.6 requires ecstatic@^3.3.2 via http-server@0.12.3
  - @nrwl/react@12.3.6 requires ecstatic@^3.3.2 via a transitive dependency on http-server@0.12.3
  - This is being fixed by http-server in this [PR](https://github.com/http-party/http-server/pull/631)
