import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getPictures } from '../services/getPictures'
import { Notify } from "notiflix";
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';


export class App extends Component {
  state = {
    query: '',
    pictures: [],
    page: 1,
    selectedPicture: null,
    isLoading: false,
    showBtn: false,
    error: null,
}

   onFormSubmit = query => {
    this.setState({ query, pictures: [], page: 1 });
  }
  
  componentDidUpdate = (_, prevState) => {
    const { query, page } = this.state;

    if (prevState.query!== query || prevState.page !== page) {
      this.setState({ isLoading: true });

      getPictures(query, page)
        .then(pictures => {
          if (pictures.data.hits.length === 0)
            Notify.warning(`No results for ${query} :(. Please enter valid search query`);
          
          if (pictures.data.totalHits > 12 && page < Math.ceil(pictures.data.totalHits / 12)) this.setState({ showBtn: true })
          else { this.setState({ showBtn: false }) }

          if (prevState.query !== query) this.setState({ pictures: [...pictures.data.hits] })
          else this.setState({ pictures: [...prevState.pictures, ...pictures.data.hits] });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({isLoading: false}));
    }
  };

   onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

   onSelectedPicture = pictureUrl => {
    this.setState({ selectedPicture: pictureUrl });
   };
  
  closeModal = () => {
    this.setState({ selectedPicture: null });
  };
  
  render() {
    const { pictures, error, isLoading, showBtn, selectedPicture } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onFormSubmit} />
        {error && <div>{error.message}. Please reload the page</div>}
        {isLoading && <Loader/>}
        <ImageGallery pictures={pictures} onSelectedPicture={this.onSelectedPicture} />
        {showBtn && <Button onLoadMore={this.onLoadMore} />}
        {selectedPicture !== null && (
          <Modal src={selectedPicture } closeModal ={this.closeModal} />
        )}
        {/* {this.state.query && <div>тут буде колекція під запит після фетча в стейт запишемо</div>} */}
      </div>
    );
  }
};


//  componentDidMount() {
//     fetch(`${BASE_URL}?key=${KEY}&per_page=12&q=cat&page=1&image_type=photo&orientation=horizontal`).then(responce => responce.json()).then(query => this.setState({query}))
//   }