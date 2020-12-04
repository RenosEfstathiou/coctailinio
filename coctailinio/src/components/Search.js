import React, { useState } from 'react';

const Search = () => {
  const [formData, setFormData] = useState({ search: '', option: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className='search-section mt-1'>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          id='search'
          className='form__input'
          placeholder='Search...'
          onChange={e => handleChange(e)}
        />
        <div className='ml-3 mr-5 '>
          <label htmlFor='options' className='form__select-label mr-1'>
            Search by:
          </label>
          <select
            name='option'
            id='options'
            onChange={e => handleChange(e)}
            className='form__select-option'
          >
            <option value='name'>name</option>
            <option value='ingredient'>ingredient</option>
          </select>
        </div>

        <button type='submit' className='btn btn__submit'>
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
