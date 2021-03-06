import React, { ChangeEvent } from 'react'

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}
type StateType = {
  isEdit: boolean
  status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
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
  changeStatus = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: event.target.value
    })
  }
  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.isEdit &&
          <div onClick={this.activateInput}><span>{this.props.status || '======'}</span></div>}
        {!this.state.isEdit &&
          <div><input autoFocus={true} onBlur={this.deactivateInput} onChange={this.changeStatus} value={this.state.status || ''} type="text" /></div>
        }
      </div >
    );
  }
}
export default ProfileStatus;