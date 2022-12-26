import styled  from "styled-components";

export const Box = styled.div`
    box-sizing: 'border-box';
    min-width: 0;
    margin: 4px 4px 4px 4px;
    background-color: rgb(238, 242, 244);
    height: 100vh;
`;

export const AppWrapper = styled.div`
    transition: margin-left .5s;
    margin-left: ${props => props.isNavOpen ? '250px' : '80px'};
`;

export const SideNav = styled.nav`
    box-sizing: 'border-box';
    max-height: 100%;
    margin: 4px 4px 100px ${props => props.customMarginLeft || '4px'};
    position: ${props => props.customPosition || 'fixed'};
    width: ${props => props.customWidth || 'auto'};
    z-index: 20;
    top: ${props => props.customTop || '0'};
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    background-color: rgb(238, 242, 244);
    top: 42px;

    a {
        padding: 8px 8px 8px 8px;
        text-decoration: none;
        font-size: 14px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    a:hover {
        color: #f1f1f1;
    }
`;

export const ButtonWrapper = styled.button`
    color: #19857b;
    border: 1px solid rgba(25, 133, 123, 0.5);
    font-size: 0.8125rem;
    min-width: fit-content;
    padding: 4px 4px 4px 4px;
    margin: 4px;
    border-radius: 3px;

    :hover {
        background-color: rgba(0, 0, 0, 0.04);
    }

`;

export const ToggleButton = styled(ButtonWrapper)`
    box-sizing: 'border-box';
    margin: 4px 4px 4px 4px;
`;

export const SvgWrapper = styled.span`
`;

export const TextWrapper = styled.span`
`;