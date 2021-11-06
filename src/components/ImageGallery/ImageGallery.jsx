import React from "react";

import cs from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ onSearch, onOpenImage }) => {
  console.log(onSearch);
  return (
    <>
      <ul className={cs.ImageGallery}>
        {/* {!onSearch && <h3 style={{ textAlign: "center" }}>Введите название</h3>} */}
        {onSearch.map((pic) => (
          <li className={cs.ImageGallery} key={pic.id} onClick={onOpenImage}>
            <ImageGalleryItem webformatURL={pic.webformatURL} />
          </li>
        ))}
      </ul>
    </>
  );
};

// class ImageGallery extends Component {
//   state = {
//     key: "23540071-e77d0cd4225c02caa21321106",
//     page: 1,
//     query: null,
//     loading: false,
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.onSearch !== this.props.onSearch) {
//       this.setState({ loading: true });
//       fetch(
//         `https://pixabay.com/api/?q=${this.props.onSearch}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then((r) => r.json())
//         .then((query) => this.setState({ query }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   render() {
//     const { query, loading } = this.state;
//     return (
//       <>
//         <ul className={cs.ImageGallery}>
//           {loading && (
//             <Loader
//               type="Puff"
//               color="#00BFFF"
//               height={100}
//               width={100}
//               timeout={3000} //3 secs
//             />
//           )}
//           {!this.props.onSearch && (
//             <h3 style={{ textAlign: "center" }}>Введите название</h3>
//           )}
//           {query &&
//             query.hits.map(({ id, webformatURL }) => (
//               <>
//                 <li className={cs.ImageGalleryItem} key={id} onClick={this.}>
//                   <ImageGalleryItem webformatURL={webformatURL} />
//                 </li>
//               </>
//             ))}
//         </ul>
//       </>
//     );
//   }
// }

//   Profile.propTypes = {
//     name: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.objectOf(PropTypes.number.isRequired),
//   };

export default ImageGallery;
