import React, { Component } from "react";

class Creatures extends Component {
    state = {
        newCreatureName: '',
        creatures: [
            'Unicorn',
            'Sphinx',
            'Kappa',
            'Wendigo',
            'Dryad'
        ]
    }
    
    /// staging zone  for new thing
    onChangeCreatureName = (event) => {
        let newCreatureName = event.target.value;
        this.setState({
            newCreatureName: newCreatureName
        })
    }

    onAddCreature = (event) => {
        // Add creature to state

        /* jQuery style
        let newCreature = $('input').val();
        */
       console.log('new creature is', this.state.newCreatureName);

       /* Dont do this
       // Don't mutate the STATE
       // must call setState
       this.state.creatures.push(this.state.newCreatureName)
       */

       this.setState({
            newCreatureName: '',
           creatures: [
            // use spread operator and add new thing
            ...this.state.creatures,
            this.state.newCreatureName
           ]
       })
    }

    render() {
        /*
        ///////////// One Way!
        // For of
        let creaturesListItems = [];
        for (let creature of this.state.creatures) {
            creaturesListItems.push(
                <li>{creature}</li>
            );
        }
        */

        ////// Another one
        /// Older version
        // For each
        /*
        let creaturesListItems = [];
        this.state.creatures.forEach(creature => {
            creaturesListItems.push(
                <li>{creature}</li>
            )
        });
        */

        // Using Array.map()
        // user arrow function
        // can be called in return
        // lower cognitive load
        // let creaturesListItems = this.state.creatures.map(creature => <li>{creature}</li>);

        return (
            <div>
                <input type="text" placeholder="New Creature Name" value={this.state.newCreatureName} onChange={this.onChangeCreatureName} />
                <button onClick={this.onAddCreature}>Add Creature</button>
                <ul>
                    {/* called straight into return instead of render */}
                    {this.state.creatures.map(creature => 
                    <li key={creature}>{creature}<button>Cool</button></li>
                    )}
                    
                </ul>
                TODO: Creatures Component
            </div>
        )
    }
}

export default Creatures;