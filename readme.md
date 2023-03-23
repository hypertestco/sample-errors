# Guidelines for starting the app.
1. npm i in the project directory.
2. For run the server on local use ```npm run local```
3. Hit ping API http://localhost:{process.env.PORT}/test/v1/ping you will get success response.


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
7. You can see the test results on your github PR itself under checks with name "Hypertest check", it also has a link which will redirect you to your test run on HyperTest Dashboard
![image](https://user-images.githubusercontent.com/111106290/225868698-01c9b583-7b39-4425-b07e-3a2ab76dca98.png)


8. NOTE: When the pipeline is runnning, the app will be unavailable for some time while the new build is getting deployed. If the application is down for long, please ensure there is no error while starting your docker image or contact us
9. You can always go to the pipeline running for your PR from your PR or from Actions tab, for more information on what is happening.


# Access HyperTest Dashboard
1. Central HyperTest Dashboard - http://central.hypertest.demo-k8s.hypertest.co/
2. Sevice HyperTest Dashboard - http://ht-sample-errors.hypertest.demo-k8s.hypertest.co
3. Sign Up on central dashboard using your email id, you will get default guest role access which is read only access
4. Refer to our User management guide to know more - https://docs.hypertest.co/user-guides/user-management
5. Navigate to Sevice HyperTest Dashboard on http://ht-sample-errors.hypertest.demo-k8s.hypertest.co
6. The tests triggered by PR event will be visible in Test Results Section
![image](https://user-images.githubusercontent.com/111106290/225873484-ef9faa9c-53b8-46fd-b735-546e64f3a749.png)


7.Details for your CI can be clicking on view more details in your test run , you can verify your PR number from here if needed
![image](https://user-images.githubusercontent.com/111106290/225873955-890ec6c6-b50b-43c6-9a01-a8a918bd4491.png)


8. Mirrored Traffic is under Sessions Page, expand the session and click on view under Actions to see requests.
![Screenshot from 2023-03-17 15-05-36](https://user-images.githubusercontent.com/111106290/225867661-ae941912-e09a-416b-9906-daf5e802a720.png)

9. You will not have permission to trigger tests from UI as you will only have guest access.
10. Please go through our usage guides to know more https://docs.hypertest.co/user-guides/usage-guide

# How to Mirror Traffic:
We are capturing all traffic which is coming on http://hypertestco-main-sample-errors.demo-k8s.hypertest.co only.
1. To Mirror Traffic: hit the api request on http://hypertestco-main-sample-errors.demo-k8s.hypertest.co.
2. If you have added a new API, let the master build give you 404, you just have to pass along the right headers etc required to make it work in your version. when the tests will run, the master version will give 404 and yours will give correct response, so we will catch it in regressions.
3. Basically for all scenarios, just hit the request which is working on your build on master build as well to mirror it, i.e. replace the ubase-url of your app to "http://hypertestco-main-sample-errors.demo-k8s.hypertest.co"
4. After hitting the request, you can go to Session tab in http://ht-sample-errors.hypertest.demo-k8s.hypertest.co to view the request
