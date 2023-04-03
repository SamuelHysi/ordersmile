import { InputBase, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, {useState} from 'react';
import './search.css';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

function SearchComponent( {onSearch} : SearchInputProps ) {

  const [searchText, setSearchText] = useState('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <div className="search-component" >
       <InputBase
        className="search-input"
        sx={{ ml: 1, flex: 1 }}
        onChange={handleSearch}
        placeholder="Search Restaurant"
        inputProps={{ 'aria-label': 'search restaurant' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

    </div>
  );
}

export default SearchComponent;