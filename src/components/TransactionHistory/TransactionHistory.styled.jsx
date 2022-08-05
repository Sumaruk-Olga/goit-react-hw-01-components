import styled from "@emotion/styled";

export const Table = styled.table`
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    
`;

export const Thead = styled.thead`
    display: block;
    width: 100%;
    background-color: ${p => p.theme.colors.secondary};
    opacity: 0.5;
`;

export const Tr = styled.tr`    
    display: flex;
    flex-direction: row;    
`;

export const Th = styled.th`    
    width: 33%;    
    border: 1px solid ${p=>p.theme.colors.page};
`;

export const Tbody = styled.tbody`
display: block;
`;