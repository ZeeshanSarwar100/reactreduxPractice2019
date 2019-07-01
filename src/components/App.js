import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class   App extends React.Component {
  state = {
    images : []
  }
 
       onSearchSubmit = async (term) => {
 //    console.log("from callback function ", term);
      const response = await axios.get('https://api.unsplash.com//search/photos' ,  {
        params: { query: term},
        headers: {
          Authorization: 'Client-ID fb5d34d7e3ef5ed2252a48380962dbf64fe1867486aa7ea505f96bfc0e35d410' 
        }

      })
      //.then(response =>{

        //console.log("response from get request to photos api" , response.data.results)
      //console.log(this)
        this.setState({ images : response.data.results})
      
      


}
 
 
 
    render() {

    
  return (
    <div>
      <SearchBar onSubmit = {this.onSearchSubmit} />
    Found : {this.state.images} images
    </div>
  );
}
}

export default App;
