import { useState } from 'react';

import {
    StyledFilmCard,
    ExpandArrow,
    FilmInfo,
    TitleRow,
} from './FilmCard.css.ts';

import type { filmModel } from '../../../models/filmModel.ts';

function FilmCard({ film }: { film: filmModel }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <StyledFilmCard
            $expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
        >
            <TitleRow>
                <h2>
                    Episode {film.episode_id}: {film.title} (
                    {film.release_date.slice(0, 4)})
                </h2>
                <ExpandArrow
                    $expanded={expanded}
                    src={'src/assets/icons/expand_arrow.svg'}
                    alt={'Expand'}
                />
            </TitleRow>

            <FilmInfo $expanded={expanded}>
                <p>{film.opening_crawl}</p>
                <p>
                    <b>Directed by: </b> {film.director}, <b>Produced by: </b>{' '}
                    {film.producer}
                </p>
            </FilmInfo>
        </StyledFilmCard>
    );
}

export { FilmCard };
