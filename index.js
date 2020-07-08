const inqiurer = require("inquirer");
const fs = require("fs");
const prompts = require('./utils/prompts');
const API = require('./utils/api')
//const util = require("util");
//const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

//const writeToFileAsync = util.promisify(fs.writeFile);

function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

const init = async () => {
  try {
    const promptResponse = await inqiurer.prompt(prompts);
    // API.getUserProfile(promptResponse.github)
    // .then(res => console.log(res))
    const githubResponse = await API.getUserProfile(promptResponse.github);
    const data = {
      ...promptResponse,
      url: githubResponse.data.avatar_url,
      email: githubResponse.data.email
    }
    console.log(data)
    if(githubResponse.data.email) {
      data["email"] = githubResponse.data.email;
    }
    writeToFile("README.md", generateMarkdown(data))

  } catch (error) {
    console.log(error)
  }
}

init();
