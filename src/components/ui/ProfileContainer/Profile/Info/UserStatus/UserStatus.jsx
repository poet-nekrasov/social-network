import React from "react";

class UserStatus extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });

    this.props.updateProfileStatus(this.state.status);
  }

  handleChangeStatus(event) {
    this.setState({
      status: event.target.value
    });
  }

  render() {
    console.log('render');
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              onBlur={this.deactivateEditMode.bind(this)}
              onChange={this.handleChangeStatus.bind(this)}
              type="text"
              autoFocus
              placeholder="Enter text is here"
              value={this.state.status}
            />

            <button>
              Set status
            </button>
          </div>
        ) : (
          <span onDoubleClick={this.activateEditMode.bind(this)} >
            {this.state.status}
          </span>
        )}
      </div>
    );
  }
}

export default UserStatus;
