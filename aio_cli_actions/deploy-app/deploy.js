const core = require('@actions/core')
const github = require('@actions/github')
const execSync = require('child_process').execSync
const util = require('util')

try {
  const namespace = core.getInput('AIO_RUNTIME_NAMESPACE');
  console.log(`Namespace ${namespace}!`);
  process.env.AIO_RUNTIME_NAMESPACE = namespace
  const auth = core.getInput('AIO_RUNTIME_AUTH');
  if(auth) {
    console.log(`auth present`);
    process.env.AIO_RUNTIME_AUTH = auth
  }

  let options = {
      stdio: 'inherit',
      env: process.env
  }
   child = execSync('sudo --preserve-env aio app deploy', options)

} catch (error) {
  core.setFailed(error.message);
}
