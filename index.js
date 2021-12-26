const { Plugin } = require('powercord/entities');
const { getModule } = require('powercord/webpack');

const Settings = require("./components/settings.jsx");

module.exports = class SpoilerPlugin extends Plugin {
    startPlugin() {
        console.log(getModule(['getCurrentUser'], false));
        powercord.api.settings.registerSettings(this.entityID, {
          category: this.entityID,
          label: 'Mute Words', // This will be the Name visible in the Settings Panel
          render: Settings
        })
    }
    pluginWillUnload() {
      powercord.api.settings.unregisterSettings(this.entityID);
    }
  }