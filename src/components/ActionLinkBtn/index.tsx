import { ReactNode, ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

import { Link } from "react-router-dom";

interface ActionLinkBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string | undefined;
    children: ReactNode
}

export const ActionLinkBtn: React.FC<ActionLinkBtnProps> = ({to, children, ...buttonProps}) => {
    return (
        <Container {...buttonProps}>
            <Link to={to ? to : ""} > {children} </Link>
        </Container>
    )
}