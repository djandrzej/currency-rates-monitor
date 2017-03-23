import React, {PropTypes} from 'react';

import Button from './Button';

const CurrencyItemRemoveButton = ({
    onClick
}) => (
    <Button className="currency-item-remove-button"
            onClick={onClick}>
        X
    </Button>
);

CurrencyItemRemoveButton.propTypes = {
    onClick: PropTypes.func
};

CurrencyItemRemoveButton.defaultProps = {
    onClick: () => {}
};

export default CurrencyItemRemoveButton;
