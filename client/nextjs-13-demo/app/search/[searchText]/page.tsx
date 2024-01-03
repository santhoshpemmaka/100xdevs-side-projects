import React from 'react'

const SearchText = (props:any) => {
    const searchText = props.params.searchText;
  return (
      <div>
          <p>You search for: {searchText}</p>

      </div>
      
  )
}

export default SearchText