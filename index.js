const { Plugin } = require('powercord/entities');
const { getModule, messages, FluxDispatcher } = require('powercord/webpack');
const { inject, uninject } = require("powercord/injector");
const Settings = require("./components/settings.jsx");

module.exports = class SpoilerPlugin extends Plugin {
    startPlugin() {
        powercord.api.settings.registerSettings(this.entityID, {
          category: this.entityID,
          label: 'Mute Words', 
          render: Settings
        })
        
        FluxDispatcher.subscribe("MESSAGE_CREATE", ({ message }) => {
          var wordlist = ["spider-man", "harry potter"];
          var msg = message.content.toLowerCase();
          if(wordlist.includes(msg)) {
            console.log("Word detected")
          }
        })
    pluginWillUnload(); {
      powercord.api.settings.unregisterSettings(this.entityID)
    }
  }}