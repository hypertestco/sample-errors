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


# Guidelines for HyperTest Dashboard
1. HyperTest Dashboard - http://ht-sample-errors.hypertest.demo-k8s.hypertest.co
2. The tests triggered by PR event will be visible in Test Results Section
3. Mirrored Traffic is under Sessions Page, expand the session and click on view under Actions to see requests.
![Screenshot from 2023-03-17 15-05-36](https://user-images.githubusercontent.com/111106290/225867661-ae941912-e09a-416b-9906-daf5e802a720.png)

4. You will not have permission to trigger tests from UI as you will only have guest access.
5. Please go through our usage guides to know more https://docs.hypertest.co/user-guides/usage-guide

# How to Mirror Traffic:
We are capturing all traffic which is coming on http://hypertestco-main-sample-errors.demo-k8s.hypertest.co only.
1. To Mirror Traffic: hit the api request on http://hypertestco-main-sample-errors.demo-k8s.hypertest.co.
2. If you have added a new API, let the master build give you 404, you just have to pass along the right headers etc required to make it work in your version. when the tests will run, the master version will give 404 and yours will give correct response, so we will catch it in regressions.
3. Basically for all scenarios, just hit the request which is working on your build on master build as well to mirror it, i.e. replace the ubase-url of your app to "http://hypertestco-main-sample-errors.demo-k8s.hypertest.co"
4. After hitting the request, you can go to Session tab in http://ht-sample-errors.hypertest.demo-k8s.hypertest.co to view the request

# Guidelines for Forks and Pull Requests
Please take note of below guidelines while forking the repository, creating new branch and raising pull requests
1. Branch name should not contain "/"
2. You are not allowed to modify Package.json and Dockerfile.


# Pull Requests and CI pipeline
* A CI pipeline will run after you raise a PR from your forked repo to this repo
* Pipeline will do the following: Build iamge for your code, deploy it and start a new test on hyperTest

1. Branch name validation - branch name should not contain "/"
2. Package.json and Dockerfile should not be changed
3. Once the above validations passes, it will build and deploy it
4. Your application will be available on http://<your_repo_owner_name>-<your_branch_name>-sample-errors.demo-k8s.hypertest.co
5. For eg: For this branch: owner name is hypertestco and branch name is main so the build for this branch will be deployed on http://hypertestco-main-sample-errors.demo-k8s.hypertest.co
6. The Pipeine will automatically start a new test run in HyperTest where it will compare responses between the main branch build and your PR branch build and give you the analyzed test reports
7. You can see the test results on your github PR itself under checks with name "Hypertest check"
8. NOTE: When the pipeline is runnning, the app will be unavailable for some time while the new build is getting deployed. If the application is down for long, please ensure there is no error while starting your docker image or contact us
9. You can always go to the pipeline running for your PR from your PR or from Actions tab, for more information on what is happening.
