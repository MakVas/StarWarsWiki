export type planetModel = {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    terrain: string;
    population: string;
};

export const defaultPlanet: planetModel = {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    terrain: '',
    population: '',
};
