import PropTypes from 'prop-types';
import { StatisticsListItem, Label } from 'components/StatisticsList/StatisticsList.styled';

export const StatisticsList = ({ label, percentage }) => {        
        return <StatisticsListItem>
            <Label>{label}</Label>
            <span>{percentage}%</span>
        </StatisticsListItem>
    
}

StatisticsList.propTypes = {
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
}