import React, { useRef } from "react";
import { connect } from "react-redux";

import { setTextFilter, unsetTextFilter} from "../../actions/filterActions";


const Search = ({ setTextFilter, clearFilter,  text }) => {

  const searchInput = useRef()

  const clearInput = () => {
    clearFilter()
    searchInput.current.value = ""
  }

  return (
  <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        <i className="fa fa-search" aria-hidden="true" />
      </span>
    </div>
    <input
      className="form-control mr-1"
      type="text"
      placeholder="Que estas buscando?"
      onChange={e => setTextFilter(e.target.value)}
      ref={searchInput}
    />
    <button 
      className="btn btn-outline-danger" 
      onClick={ clearInput }
      disabled={ text.length > 0 ? false : true}>
      Borrar filtro
    </button>
  </div>
)
};

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  clearFilter: () => dispatch(unsetTextFilter())
});

const mapStateToProps = state => ({
  text: state.filters.text
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
