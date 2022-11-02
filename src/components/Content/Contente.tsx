import React from "react";
import DivContent from "./StyledContent";


interface ContentProps {
    text:string,
    sorc:string
}

const ContenteMain: React.FC<ContentProps> = ({text,sorc}) => {
    return (
        <DivContent>
            <img src={sorc}  alt="Logo react" />
            <p>{text}</p>
        </DivContent>
    )
}

export default ContenteMain