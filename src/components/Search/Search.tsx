import { SearchBar, Hilt } from './Search.css.ts';

interface SearchProps {
    value: string;
    onChange: (value: string) => void;
}

function Search({ value, onChange }: SearchProps) {
    return (
        <SearchBar>
            <Hilt src={'src/assets/lightsaber.png'} alt={'Hilt'} />
            <input
                type={'text'}
                value={value}
                placeholder={'Search...'}
                onChange={(e) => onChange(e.target.value)}
            />
        </SearchBar>
    );
}

export default Search;
