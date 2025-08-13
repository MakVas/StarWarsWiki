import type { vehicleModel } from '../../../models/vehicleModel.ts';

function VehicleCard({ vehicle }: { vehicle: vehicleModel }) {
    return (
        <div className={'vehicle-card'}>
            <h2 className={'vehicle-card__name'}>{vehicle.name}</h2>
        </div>
    );
}

export default VehicleCard;
