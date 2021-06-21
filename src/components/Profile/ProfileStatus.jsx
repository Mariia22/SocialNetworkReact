import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        isEdit: true
    }
    activateInput = () => {
        this.setState({
            isEdit: false
        })
    }
    deactivateInput = () => {
        this.setState({
            isEdit: true
        })
    }
    render() {
        return (
            <div>
                {this.state.isEdit &&
                    <div onClick={this.activateInput}><span>There is status here</span></div>}
                {!this.state.isEdit &&
                    <div><input onBlur={this.deactivateInput} type="text" /></div>
                }
            </div >
        );
    }
}
export default ProfileStatus;