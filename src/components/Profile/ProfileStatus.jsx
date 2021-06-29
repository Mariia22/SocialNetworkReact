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
        this.props.updateStatus(this.state.status);
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
                    <div onClick={this.activateInput}><span>{this.props.status || '======'}</span></div>}
                {!this.state.isEdit &&
                    <div><input autoFocus={true} onBlur={this.deactivateInput} onChange={this.changeStatus} value={this.state.status} type="text" /></div>
                }
            </div >
        );
    }
}
export default ProfileStatus;