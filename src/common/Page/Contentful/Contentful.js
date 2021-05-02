import React from 'react';
import './styles.scss';
import * as contentful from 'contentful';

class Contentful extends React.Component{

  client = contentful.createClient({
    space: "g020kd6rtcdp",
    accessToken: "8114b5373c2ee370055987d06a52747d139dd1451617f935c7ad10f7065a5ad9"
  });

  state = {
    items: [],
    work: []

  }
  

  componentDidMount = () => {
    this.client.getEntries()
    .then((response) => {
      this.setState({
        items: response.items
      });
    });
  }

  render(){
    return (

      
      <div>

          {
          this.state.items.map((item) => (
            <div className="hover-title">
              <a href={item.fields.title} rel="history">{item.fields.title}</a>
            </div>
          ))
          }

        {


          this.state.items.map((item) => (
            <div className="hover-image">
              <img src={item.fields.thumbnail.fields.file.url}/>
            </div>
           ))
        }
        
      </div>
    );  
  }
}


export default Contentful;