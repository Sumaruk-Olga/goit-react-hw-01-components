import styled from "@emotion/styled";

export const Container = styled.div`    
    display: 'flex';
    height: 100%;
    flex-direction: 'column';    
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.text.primary};
    background-color: ${p => p.theme.colors.primary};    
`;

