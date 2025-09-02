import { useState } from 'react';

import { StyledFilmCard, ExpandArrow } from './FilmCard.css.ts';

import type { filmModel } from '../../../models/filmModel.ts';

function FilmCard({ film }: { film: filmModel }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <StyledFilmCard
            $expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
        >
            <h2>
                Episode {film.episode_id}: {film.title}
            </h2>
            <ExpandArrow
                $expanded={expanded}
                src={'src/assets/icons/expand_arrow.svg'}
                alt={'Expand'}
            />
        </StyledFilmCard>
    );
}

export default FilmCard;
