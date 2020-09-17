import React, {Component} from 'react';

class CreatureForm extends Component {
    state = {
        newCreatureName: ''
    }

    /// staging zone  for new thing
    //Capture and store new creature name
    onChangeCreatureName = (event) => {
        let newCreatureName = event.target.value;
        console.log('new creature', newCreatureName)
        this.setState({
            newCreatureName: newCreatureName
        })
    }

    render() {

        return(
            <div>
                <h1>Form goes here</h1>
                <input 
                    type="text" 
                    placeholder="New Creature Name" 
                    value={this.state.newCreatureName} 
                    onChange={this.onChangeCreatureName} 
                />
                {/* use prop functions to smuggle information to parent */}
                <button onClick={() => this.props.onAddCreature(this.state.newCreatureName)}>Add Creature</button>
            </div>
        )
    }

}

export default CreatureForm;