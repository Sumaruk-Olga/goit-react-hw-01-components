import styled from "@emotion/styled";

export const Title = styled.h2`
    display: block;
    text-align: center;    
    background-color: ${p => p.theme.colors.secondary};
    border-top-left-radius: ${p => p.theme.radii.normal};
    border-top-right-radius: ${p => p.theme.radii.normal};
    margin-bottom: ${p => p.theme.space[3]}px;
`

export const Paper = styled.div`
    width: 50%;
    background-color: ${p => p.theme.colors.page};
    margin-left: auto;
    margin-right: auto;
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadow};
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 70%;
    border-bottom: 1px solid ${p => p.theme.colors.secondary};
`;

export const Avatar = styled.img`
    display: block;
    width: 100%;
`;

export const Name = styled.p`
    width: 100%;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: bold;
    margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Tag = styled.p`
    width: 100%;
    text-align: center;
    color: ${p => p.theme.colors.secondary};
    margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Location = styled.p`
    width: 100%;
    text-align: center;
    color: ${p => p.theme.text.secondary};
`;

export const Stats = styled.ul`
    display: flex;
    flex-direction:row;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 33%;
    align-items: center;

    &:not(:last-child){
        margin-right: ${p => p.theme.space[2]}px;
        border-right: 1px solid ${p => p.theme.colors.secondary};
    }
`;

export const Label = styled.span`
    color: ${p => p.theme.text.secondary};
    font-weight:normal;
`;

export const Quantity = styled.span`
    color: ${p => p.theme.colors.secondary};
    font-weight: bold;
`;