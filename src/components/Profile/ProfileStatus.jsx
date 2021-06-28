import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        isEdit: true,
        status: this.props.status
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
    changeStatus = (event) => {
        this.setState({
            status: event.target.value
        })
    }
    render() {
        return (
            <div>
                {this.state.isEdit &&
                    <div onClick={this.activateInput}><span>There is status here</span></div>}
                {!this.state.isEdit &&
                    <div><input onFocus={true} onBlur={this.deactivateInput} onChange={this.changeStatus} type="text" /></div>
                }
            </div >
        );
    }
}
export default ProfileStatus;