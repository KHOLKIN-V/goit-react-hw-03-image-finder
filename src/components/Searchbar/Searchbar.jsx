import React, { Component } from "react";
// import { toast } from "react-toastify";
import cs from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  imageChange = (e) => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  };

  imageSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === "") {
      //   toast.warn("Введите запрос!", {
      //     position: "top-right",
      //     autoClose: 2000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });
      return alert("Введите запрос!");
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

//   Profile.propTypes = {
//     name: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.objectOf(PropTypes.number.isRequired),
//   };

export default Searchbar;
