import styled from "@emotion/styled";

export const Tr = styled.tr`    
    display: flex;
    flex-direction: row;
    &:nth-of-type(2n) {
        background-color: ${p=>p.theme.colors.accent};
    }
`;

export const Td = styled.td` 
    text-align: center;
    display: block;
    width: 33%;
    border: 1px solid ${p => p.theme.colors.page};    
`;