import React from 'react';
import ReactDom from 'react-dom';


class Button extends React.Component {

    constructor(props) {
        super(props)
        this.state = {message:''}
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        if (this.state.message == '') {
            this.setState({message: 'It works!'})
        } else {
            this.setState({message: ''})
        }
    }

    render() {
        return (
            <div>
            <p><input type="button" class="btn btn-danger" value="Click Me!"
                      onClick={this.clickHandler} /></p>
            <p>{this.state.message}</p>
            </div>
        )
    }
}

ReactDom.render(
    <Button />,
    document.getElementById('root')
)