const { Plugin } = require('powercord/entities');
const { getModule, messages } = require('powercord/webpack');
const { inject, uninject } = require("powercord/injector");

const Settings = require("./components/settings.jsx");

module.exports = class SpoilerPlugin extends Plugin {
    startPlugin() {
        console.log(getModule(['getCurrentUser'], false));
        powercord.api.settings.registerSettings(this.entityID, {
          category: this.entityID,
          label: 'Mute Words', 
          render: Settings
        })
        
        inject('spoiler', messages, 'sendMessage', (args) => {
          if (args[1].content.includes('lmao')) { // args[1] is the actual message
            args[1].content = args[1].content.replace('lmao', 'kek');
          }
          return args; // Always return the Args (or res, if you're post-patching)
        }, true); // Prepatching
    }
    pluginWillUnload() {
      powercord.api.settings.unregisterSettings(this.entityID);
      uninject('spoiler');
    }
  }