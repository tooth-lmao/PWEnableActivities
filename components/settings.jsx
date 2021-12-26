const { React } = require('powercord/webpack');
const { TextInput } = require('powercord/components/settings'); 

module.exports = class settings extends React.PureComponent {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
          <TextInput
            onChange={val => {
              this.props.updateSetting('settingToSave', val)
              var wordlist = val
              console.log(wordlist)
            }}
            defaultValue={this.props.getSetting('settingToSave', 'defaultValue')}
            note='Ex: "spider-man, harry potter, netflix" '
           >
            Word List
          </TextInput>
        </div>
      )
    }
  }
