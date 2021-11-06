import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {clearFilters} = props
  const renderRatingsList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onChangeRating = () => changeRating(rating.ratingId)
      const isActive = rating.ratingId === activeRatingId
      const ratingClassName = isActive ? 'active-category category' : 'category'

      return (
        <li className="list-item" onClick={onChangeRating}>
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-item"
          />
          <p className={ratingClassName}>&up</p>
        </li>
      )
    })
  }

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCategory => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategory = () => changeCategory(eachCategory.categoryId)
      const isActive = eachCategory.categoryId === activeCategoryId

      const categoryClassName = isActive
        ? 'active-category category'
        : 'category'

      return (
        <li className="list-item">
          <button
            type="button"
            className={categoryClassName}
            onClick={onClickCategory}
            key={eachCategory.categoryId}
          >
            <p>{eachCategory.name}</p>
          </button>
        </li>
      )
    })
  }

  const onClickEnter = event => {
    const {onSearch} = props
    if (event.key === 'Enter') {
      onSearch()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchBar = () => {
    const {searchInput} = props

    return (
      <div className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onClickEnter}
        />
        <BsSearch />
      </div>
    )
  }

  const onClickClearFilter = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      {renderSearchBar()}
      <h1>Category</h1>
      {renderCategoryList()}
      <h1>Rating</h1>
      {renderRatingsList()}
      <button
        type="button"
        className="clear-filter-btn"
        onClick={onClickClearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
