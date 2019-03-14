import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ButtonIcon from "../buttons/ButtonIcon";
/**
 * @class ModalCard - Is the card for the modals and it contains a clear icon by default
 */
class PopOver extends PureComponent {
  /**
   * @property {func} onClose - The function to close the modal
   * @property {node} children - The content of the modal
   * @property {string} className - Just in case you need another class
   */
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const { onClose, children, className } = this.props;
    return (
      <div className={classNames("popOver", className)}>
        <div className="icons">
          <ButtonIcon iconName="clear" onClick={onClose} />
        </div>
        <div className="modal--content">{children}</div>
      </div>
    );
  }
}

PopOver.defaultProps = {
  className: ""
};
export default PopOver;