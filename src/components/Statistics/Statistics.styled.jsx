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

export const StatList = styled.ul`
display:flex;
justify-content: space-between;
`;