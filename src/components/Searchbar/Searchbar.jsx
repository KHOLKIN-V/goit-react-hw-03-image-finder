import React, { Component } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import cs from "./Searchbar.module.css";

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: "",
  };

  imageChange = (e) => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  };

  imageSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === "") {
      toast.warn("Введите запрос!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    return (
      <>
        <header className={cs.Searchbar}>
          <form className={cs.SearchForm} onSubmit={this.imageSubmit}>
            <button type="submit" className={cs.SearchFormBtn}>
              <span className={cs.SearchFormBtnLabel}>Search</span>
            </button>

            <input
              className={cs.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.imageChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
