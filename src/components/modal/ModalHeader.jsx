import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ModalHeader extends PureComponent {
  /**
   * @property {string} title - Title of the modal
   */
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    return (
      <div className="modal--header">
        <h2>{title}</h2>
      </div>
    );
  }
}

export default ModalHeader;