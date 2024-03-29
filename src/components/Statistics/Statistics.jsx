import PropTypes from 'prop-types';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Paper, StatList } from 'components/Statistics/Statistics.styled';
import { NameOfTask } from 'components/HomeworkTitle/HomeworkTitle.styled';


export const Statistics = ({ title, stats }) => {
    return <Paper>                
        {title && <NameOfTask>{ title }</NameOfTask>}
        <StatList>
            {stats.map(item => {
                return (<StatisticsList key={item.id} label={item.label} percentage={item.percentage} />)
            })}
        </StatList>
    </Paper>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    })).isRequired,
}