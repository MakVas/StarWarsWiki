import { useState, useEffect } from 'react';
import axios from 'axios';
import type { vehicleModel } from '../../models/vehicleModel.ts';
import VehicleCard from '../../components/Cards/VehicleCard/VehicleCard.tsx';

function VehiclesSection() {
    const [input, setInput] = useState<string>('');
    const [data, setData] = useState<vehicleModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            const result: vehicleModel[] = (
                await axios.get('https://swapi.info/api/vehicles')
            ).data;
            setData(result);
            setLoading(false);
        };

        init();
    }, []);

    return (
        <section className={'section vehicles'}>
            <h1>Vehicles search</h1>

            {loading && <p>Loading...</p>}

            {!loading && (
                <>
                    <input
                        type={'text'}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    {data
                        .filter((vehicle) =>
                            vehicle.name
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        )
                        .map((vehicle) => (
                            <VehicleCard key={vehicle.name} vehicle={vehicle} />
                        ))}
                </>
            )}
        </section>
    );
}

export default VehiclesSection;
