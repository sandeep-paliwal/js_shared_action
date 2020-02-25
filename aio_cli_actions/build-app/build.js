const core = require('@actions/core')
const github = require('@actions/github')
const execSync = require('child_process').execSync
const util = require('util')

try {
  let options = {
      stdio: 'inherit',
      env: process.env
  }
   child = execSync('aio app deploy --skip-deploy', options)

} catch (error) {
  core.setFailed(error.message);
}
