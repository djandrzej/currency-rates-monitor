import React, {PropTypes} from 'react';

const CurrencyItemCode = ({
    code
}) => (
    <span className="currency-item-code">{code}</span>
);

CurrencyItemCode.propTypes = {
    code: PropTypes.string.isRequired
};

export default CurrencyItemCode;
