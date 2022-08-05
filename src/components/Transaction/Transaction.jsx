import PropTypes from 'prop-types';
// import { Tr } from 'components/TransactionHistory/TransactionHistory.styled';
import { Tr, Td } from 'components/Transaction/Transaction.styled';
export const Transaction = ({ type, amount, currency }) => {
    return <Tr>
        <Td>{ type }</Td>
        <Td>{ amount }</Td>
        <Td>{ currency }</Td>
    </Tr>
}

Transaction.protoTypes = {
    type:PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}