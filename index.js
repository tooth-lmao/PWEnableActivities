const { Plugin } = require('powercord/entities');
const { getModule, messages, FluxDispatcher } = require('powercord/webpack');
const { inject, uninject } = require("powercord/injector");
const Settings = require("./components/settings.jsx");

module.exports = class SpoilerPlugin extends Plugin {
    startPlugin() {
        webpackChunkdiscord_app.push([
			[Math.random().toString(36)],
			{},
			(e) => {
			  for (const id in e.c) {
				const m = e.c[id].exports;
				if (m?.default?.getEnabledAppIds) {
				  const saved = m.default.getEnabledAppIds;
				  window.disableActivities = () => {
					m.default.getEnabledAppIds = saved;
					window.disableActivities = undefined;
				  };
		  
				  m.default.getEnabledAppIds = () => [
					"755827207812677713",
					"832012774040141894",
					"832013003968348200",
					"878067389634314250",
					"879863976006127627",
					"879863686565621790",
					"852509694341283871",
					"880218394199220334",
					"773336526917861400",
					"814288819477020702",
					"879864070101172255",
					"879863881349087252",
					"832012854282158180",
					"763133495793942528",
					"880218832743055411",
					"878067427668275241",
					"879864010126786570",
					"879864104980979792",
					"891001866073296967",
					"832012586023256104",
					"832012682520428625",
					"832013108234289153",
				  ];
				  return;
				}
			  }
			},
		  ]);
    pluginWillUnload(); {
    
    }
  }}