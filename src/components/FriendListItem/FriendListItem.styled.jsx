import styled from "@emotion/styled";

const getStatusColor = p => {
    return p => p.status ? p.theme.status.online : p.theme.status.offline;
}

export const Friend = styled.li`
    display: flex;
    flex-direction: row;   
    align-items: center;
    padding-bottom: ${ p => p.theme.space[2] }px;
    padding-top: ${ p => p.theme.space[2] }px;
    box-shadow: ${p => p.theme.shadow};
    &:not(:last-child){        
        border-bottom: 1px solid ${ p => p.theme.text.primary };
        margin-bottom: ${p=>p.theme.space[2]}px;
    }
`;

export const FriendAvatar = styled.img`
    display: block;
    width: 20%;   
    margin-right: ${p=>p.theme.space[4]}px; 
`;

export const FriendName = styled.p`
    font-size: ${ p => p.theme.fontSizes.l };
`;

export const FriendStatus = styled.span`
    display: block;    
    width: 20px;
    height: 20px;
    background-color: ${getStatusColor};
    margin-right: ${ p => p.theme.space[4] }px;
    margin-left: ${ p => p.theme.space[4] }px;
    border-radius: ${ p => p.theme.radii.circle };
`;

