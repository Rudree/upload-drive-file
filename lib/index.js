#!/usr/bin/env node
import GDriveToolHelper from "./gdrive-tool-helper";

const filePath = process.argv[2];
const folderUrl = process.argv[3];

if (filePath && folderUrl) {
  let gDriveToolHelper = new GDriveToolHelper(filePath , folderUrl.split("folders/").pop());
  gDriveToolHelper.uploadFile()
  .then(data => console.log(" \nUploading completed!\nPlease check "+ folderUrl))
  .catch(error => console.log(error));
} else {
  console.log("Error: Please enter filePath and folderUrl");
}
