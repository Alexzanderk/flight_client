import React from 'react';
import SearchInput from './SearchField/SearchInputWithDownshift';

const SearchFields = () => (
	<SearchInput>
		<SearchInput.InputFrom />
		<SearchInput.InputTo />
	</SearchInput>
);

export default SearchFields;
