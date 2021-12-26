const { Plugin } = require('powercord/entities');
const { getModule, messages, FluxDispatcher } = require('powercord/webpack');
const { inject, uninject } = require("powercord/injector");
const { words } = require("./settings.jsx");
 const Settings = require("./components/settings.jsx");

module.exports = class SpoilerPlugin extends Plugin {
    startPlugin() {
        powercord.api.settings.registerSettings(this.entityID, {
          category: this.entityID,
          label: 'Mute Words', 
          render: Settings
        })
        
        FluxDispatcher.subscribe("MESSAGE_CREATE", ({ message }) => {
          var msg = message.content.toLowerCase();
          if(msg.includes("asd")) {
            console.log("Spoiler detected")
          }
        })
    pluginWillUnload(); {
      powercord.api.settings.unregisterSettings(this.entityID)
    }
  }}