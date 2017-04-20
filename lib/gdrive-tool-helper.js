#!/usr/bin/env node
import shell from "shelljs";
import Promise from "bluebird";

export default class {
  constructor(filePath, parentFolderId) {
    this.filePath = filePath;
    this.parentFolderId = parentFolderId;
  }

  uploadFile() {
    return Promise.promisify(shell.exec)("gdrive upload -p " + this.parentFolderId + " " + this.filePath);
  }
}
