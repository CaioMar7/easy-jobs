import { ReactNode, ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface ActionLinkBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string | undefined;
    children: ReactNode
}

export const ActionLinkBtn: React.FC<ActionLinkBtnProps> = ({to, children}) => {
    return (
        <Container to={to ? to : ""} > 
            {children} 
        </Container>
    )
}