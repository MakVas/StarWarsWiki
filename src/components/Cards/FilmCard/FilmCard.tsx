import type { filmModel } from '../../../models/filmModel.ts';

function FilmCard({ film }: { film: filmModel }) {
    return (
        <div className={'film-card'}>
            <h2 className={'film-card__title'}>
                Episode {film.episode_id}: {film.title}
            </h2>
        </div>
    );
}

export default FilmCard;
