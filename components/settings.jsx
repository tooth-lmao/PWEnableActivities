const { React } = require('powercord/webpack'); // We have to import React
const { TextInput } = require('powercord/components/settings'); // Here we Import the TextInput Component for later use

module.exports = class settings extends React.PureComponent {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
          <TextInput
            onChange={val => this.props.updateSetting('settingToSave', val)}
            defaultValue={this.props.getSetting('settingToSave', 'defaultValue')}
            required={false}
            disabled={false}
            note='This will be shown below the Text Input as a note'
           >
            Settings Field
          </TextInput>
        </div>
      )
    }
  }