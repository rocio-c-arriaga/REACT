import React from 'react';

class Bloques extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.data.name || '',
            description: props.data.description || '',
            value: props.data.value || 0,
        };
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }
}
export default Locales;