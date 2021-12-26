const { Plugin } = require('powercord/entities');
const { getModule, messages, FluxDispatcher } = require('powercord/webpack');
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
        
        FluxDispatcher.subscribe("MESSAGE_CREATE", ({ message }) => {
          var msgContent = message.content.toLowerCase;
          console.log(msgContent);
        })
        }
    }
    pluginWillUnload(); {
      powercord.api.settings.unregisterSettings(this.entityID)
    }
  }