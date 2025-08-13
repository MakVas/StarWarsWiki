import type { starshipModel } from '../../../models/starshipModel.ts';

function StarshipCard({ starship }: { starship: starshipModel }) {
    return (
        <div className={'starship-card'}>
            <h2 className={'starship-card__name'}>{starship.name}</h2>
        </div>
    );
}

export default StarshipCard;
