import styled from "@emotion/styled";

export const StatisticsPaper = styled.section`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    background-color: ${p => p.theme.colors.page};
    border-radius: ${p => p.theme.radii.normal};
    margin-bottom: ${p => p.theme.space[4]}px;
    box-shadow: ${p=>p.theme.shadow};
`;

export const StatisticsTitle = styled.h2`
    display: block;
    text-align: center;    
    background-color: ${p => p.theme.colors.secondary};        
    margin-top: ${p => p.theme.space[3]}px;
    border-top-left-radius: ${p => p.theme.radii.normal};
    border-top-right-radius: ${p => p.theme.radii.normal};
    border-bottom: 1px solid ${p => p.theme.text.primary};
`;

export const StatList = styled.ul`
display:flex;
justify-content: space-between;
`;