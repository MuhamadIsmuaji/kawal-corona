import React from 'react';
import axios from 'axios';

class LiveData extends React.Component {
    state = ({ positif: [], meninggal: [], sembuh: [] });

    componentDidMount() {
        axios.get('https://api.kawalcorona.com/positif/').then(response => {
            console.log(response);
            this.setState({ positif: response.data });
        });

        axios.get('https://api.kawalcorona.com/meninggal/').then(response => {
            console.log(response);
            this.setState({ meninggal: response.data });
        });

        axios.get('https://api.kawalcorona.com/sembuh/').then(response => {
            console.log(response);
            this.setState({ sembuh: response.data });
        });
    }

    render() {
        return (
            <div>
              <div class="ui circular segment">
                 <h2 class="ui header">
                  {this.state.positif.name}
                  <div class="sub header">{this.state.positif.value} Orang</div>
                  </h2>
              </div>
              
              <div class="ui circular segment">
                  <h2 class="ui header">
                   {this.state.meninggal.name}
                   <div class="sub header">{this.state.meninggal.value} Orang</div>
                </h2>
              </div>
              <div class="ui circular segment">
                  <h2 class="ui header">
                   {this.state.sembuh.name}
                   <div class="sub header">{this.state.sembuh.value} Orang</div>
                </h2>
              </div>           
            </div>
        );
    };
}

export default LiveData;