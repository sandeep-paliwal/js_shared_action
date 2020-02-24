const core = require('@actions/core')
const github = require('@actions/github')
const execSync = require('child_process').execSync

try {
  // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput('who-to-greet');
  // console.log(`Hello ${nameToGreet}!`);
  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  var options = {
      stdio: 'inherit' //feed all child process logging into parent process
  }
   child = execSync('sudo npm install -g @adobe/aio-cli', options)
   child = execSync('sudo aio -v', options)
   child = execSync('sudo aio app deploy', options)

} catch (error) {
  core.setFailed(error.message);
}
