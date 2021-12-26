const { React } = require('powercord/webpack');
const { TextInput } = require('powercord/components/settings'); 

module.exports = class settings extends React.PureComponent {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { getSetting, toggleSetting, updateSetting } = this.props;
      return(
        <div>
          <TextInput
            onChange={val => {
              updateSetting('settingToSave', val)
              var wordlist = val
            }}
            defaultValue={getSetting('settingToSave', 'defaultValue')}
            note='Ex: "spider-man, harry potter, netflix" '
           >
            Word List
          </TextInput>
        </div>
      )
    }
  }
