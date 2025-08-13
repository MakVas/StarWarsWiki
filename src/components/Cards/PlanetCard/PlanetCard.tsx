import type { planetModel } from '../../../models/planetModel.ts';

function PlanetCard({ planet }: { planet: planetModel }) {
    return (
        <div className={'planet-card'}>
            <h2 className={'planet-card__name'}>{planet.name}</h2>
        </div>
    );
}

export default PlanetCard;
