const core = require('@actions/core')
const github = require('@actions/github')
const execSync = require('child_process').execSync
const util = require('util')

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const namespace = core.getInput('AIO_RUNTIME_NAMESPACE');
  console.log(`Namespace ${namespace}!`);
  process.env.AIO_RUNTIME_NAMESPACE = namespace
  const auth = core.getInput('AIO_RUNTIME_AUTH');
  if(auth) {
    console.log(`auth present`);
    process.env.AIO_RUNTIME_AUTH = auth
  }
  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  let env = {
    AIO_RUNTIME_NAMESPACE: namespace
  }
  let options = {
      stdio: 'inherit',
      env: process.env
  }
console.log("options " + util.inspect(options))
// child = execSync('node test.js', options)
   child = execSync('sudo npm install -g @adobe/aio-cli', options)
   child = execSync('sudo aio -v', options)
   child = execSync('sudo --preserve-env aio app deploy', options)

} catch (error) {
  core.setFailed(error.message);
}
