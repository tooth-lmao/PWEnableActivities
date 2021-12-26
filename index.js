const { Plugin } = require('powercord/entities');
const { getModule } = require('powercord/webpack');

module.exports = class SpoilerPlugin extends Plugin {
    startPlugin() {
        console.log(getModule(['getCurrentUser'], false));
    }
    pluginWillUnload() {
      // Unloading Here
    }
  }