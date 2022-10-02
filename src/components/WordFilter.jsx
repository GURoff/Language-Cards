import React from 'react';
import MyInput from './UI/Input/MyInput';
import MySelect from './UI/Select/MySelect';

const WordFilter = ({filter, setFilter}) => {
    return (
        <div>
            {/* Input for search */}
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search..."
            />
            {/* Select for sort by... */}
            <MySelect
                defaultValue="Sort by..."
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    { value: 'input', name: 'base language' },
                    { value: 'output', name: 'target language' },
                ]}
            />
        </div>
    );
}

export default WordFilter;
