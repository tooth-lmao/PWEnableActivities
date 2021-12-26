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
          var msg = message.content.toLowerCase();
          var wordlist = ["spider-man", "spider", "tobey", "andrew"]
          if(wordlist.includes(msg)) {
            
            console.log('funciona carago')

            const message = args[0].message;
						document.getElementById(
							`chat-messages-${message.id}`
						).style.display = 'none';

						powercord.api.notices.sendToast('message-hidden', {
							header: 'Success!',
							type: 'success',
							timeout: 10000,
							content:
								'The message has been hidden. To bring it back, switch to another channel then switch to this one.',
							buttons: [
								{
									text: 'Dismiss',
									look: 'filled',
									size: 'small',
									onClick: () =>
										powercord.api.notices.closeToast(
											'message-hidden'
										),
								},
							],
						});
          }
        });


    pluginWillUnload(); {
      powercord.api.settings.unregisterSettings(this.entityID)
    }
  }}