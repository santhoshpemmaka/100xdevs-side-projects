'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchInput = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/search/${search}`);
    }
    return (
        <form onSubmit={(e) => handleSearch(e)}>
            <input
                type="text"
                value={search}
                placeholder='Enter the search term'
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchInput;