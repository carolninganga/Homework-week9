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
    const githubResponse = await API.getUserProfile(promptResponse.github);
    const data = {
      ...promptResponse,
      url: githubResponse.data.avatar_url,
      email: githubResponse.data.email
    }
console.log(promptResponse);
    if(githubResponse.data.email === "null") {
      data["email"] = "null";
    }
    writeToFile("README.md", generateMarkdown(data))

  } catch (error) {
    console.log(error)
  }
}

init();
