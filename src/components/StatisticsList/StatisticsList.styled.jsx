import styled from "@emotion/styled";    
import { getColor } from "utiles/getColor";
 
export const StatisticsListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
    background-color: ${getColor};
`;

export const Label = styled.span`
font-weight: bold;
display: block;
width: 100%;
text-align: center;
`;

