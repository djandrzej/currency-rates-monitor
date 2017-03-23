import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import pureRender from 'pure-render-decorator';
import autobind from 'autobind-decorator';

@pureRender
export default class Button extends Component {

    static propTypes = {
        disabled: PropTypes.bool,
        onClick: PropTypes.func,
        className: PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        onClick: () => {}
    };

    @autobind
    handleClick() {
        const {onClick, disabled} = this.props;
        if (!disabled) {
            onClick();
        }
    }

    render() {
        const {disabled, className, children} = this.props;
        return (
            <div onClick={this.handleClick} className={
                cx('button', className, {
                    'button-disabled': disabled
                })}>
                {children}
            </div>
        );
    }

}
