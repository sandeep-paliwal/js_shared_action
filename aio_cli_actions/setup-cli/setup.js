const core = require('@actions/core')
const github = require('@actions/github')
const execSync = require('child_process').execSync
const util = require('util')

try {
  let options = {
      stdio: 'inherit',
      env: process.env
  }
   child = execSync('sudo npm install -g @adobe/aio-cli', options)
   child = execSync('sudo aio -v', options)

} catch (error) {
  core.setFailed(error.message);
}
