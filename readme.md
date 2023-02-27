# First install nodejs & then setup eslint.
1. cd boilerplate
2. npm init -y
3. npm i -D eslint eslint-config-airbnb-base eslint-plugin-import
4. Create .eslintrc.js: module.exports = { "extends": "airbnb-base" };
5. In VS Code, [Ctrl + Shift + X] Or for mac users [Cmd + Shift + X] & Search ESLint & Install ESLint
6. Restart VS Code

![EsLint](Reference - https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6)

Now copy paste below lines in your .eslintrc.js

* module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "camelcase": "off",
        "comma-dangle": "off",
        "newline-per-chained-call": "off",
        "class-methods-use-this": "off",
        "no-underscore-dangle": "off",
        "no-await-in-loop": "off"
    }
} *

# Guidelines for starting the app.
1. npm i in the project directory.
2. For run the server on local use ```npm run local```
3. Hit ping API http://localhost:{process.env.PORT}/test/v1/ping you will get success response.





# Guidelines for Forks and Pull Requests
Please take note of below guidelines while forking the repository,creating new branch and raising pull requests
1. Branch name should not contain "/"
2. You are not allowed to modify Package.json and Dockerfile.


# Pull Requests and CI pipeline
* A CI pipeline will run after you raise a PR from your forked repo to this repo
* Pipeline will do the following:
1. Branch name validation - branch name should not contain "/"
2. Package.json and Dockerfile should not be changed
3. Once the above validations passes, it will build and deploy it
4. Your application will be available on http://<your_repo_owner_name>:<your_branch_name>-sample-errors.demo-k8s.hypertest.co
5. For eg: For this branch: owner name is hypertestco and branch name is main so the build for this branch will be deployed on http://hypertestco-main-sample-errors.demo-k8s.hypertest.co
6. The Pipeine will automatically start a new test run in HyperTest where it will be comparing responses between the main branch build and your PR branch build
7. You can see the test results on your github PR itself under checks with name "Hypertest check"
8. NOTE: When the pipeline is runnning, the app will be unavailable for some time while the new build is getting deployed

# Mirror Traffic:
* To Mirror Traffic: hit the request on http://hypertestco-main-sample-errors.demo-k8s.hypertest.co
