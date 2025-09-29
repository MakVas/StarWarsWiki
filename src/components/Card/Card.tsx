import { type ReactNode, useState } from 'react';
import {
    StyledCard,
    TitleRow,
    ExpandArrow,
    ExpandableContent,
} from './Card.css.ts';

type CardProps = {
    title: string;
    details: ReactNode;
};

function Card({ title, details }: CardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <StyledCard
            $expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
        >
            <TitleRow>
                <h2>{title}</h2>
                <ExpandArrow
                    $expanded={expanded}
                    src={'src/assets/icons/expand_arrow.svg'}
                    alt={'Expand'}
                />
            </TitleRow>
            <ExpandableContent $expanded={expanded}>
                {details}
            </ExpandableContent>
        </StyledCard>
    );
}

export default Card;
