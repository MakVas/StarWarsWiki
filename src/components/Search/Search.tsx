import { SearchBar, Hilt } from './Search.css.ts';

interface SearchProps {
    value: string;
    onChange: (value: string) => void;
}

function Search({ value, onChange }: SearchProps) {
    return (
        <SearchBar>
            <Hilt src={'/lightsaber.png'} alt={'Hilt'} />
            <input
                type={'text'}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </SearchBar>
    );
}

export default Search;
