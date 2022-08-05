import PropTypes, { arrayOf, shape } from 'prop-types';
import { Transaction } from "components/Transaction/Transaction";
import { Table, Thead, Tr, Th, Tbody } from 'components/TransactionHistory/TransactionHistory.styled';
import { Paper } from 'components/Statistics/Statistics.styled';
import { NameOfTask } from 'components/HomeworkTitle/HomeworkTitle.styled';

export const TransactionHistory = ({ items }) => {
    return (<Paper>
    <NameOfTask>Transaction History</NameOfTask>
        <Table>        
    <Thead>            
        <Tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
        </Tr>
    </Thead>

    <Tbody>
        {items.map(({id, type, amount, currency}) => <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency} />)
        }  
    </Tbody>
        </Table>
        </Paper>)
}

TransactionHistory.propTypes = {
    items: arrayOf(shape({
    id:PropTypes.string.isRequired,
})).isRequired,
}