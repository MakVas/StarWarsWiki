import type { peopleModel } from '../../../models/peopleModel.ts';

function PeopleCard({ people }: { people: peopleModel }) {
    return (
        <div className={'people-card'}>
            <h2 className={'people-card__name'}>{people.name}</h2>
        </div>
    );
}

export default PeopleCard;
