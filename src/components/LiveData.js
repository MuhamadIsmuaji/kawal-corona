import React from 'react';
import axios from 'axios';

class LiveData extends React.Component {
    state = ({ positif: [], meninggal: [], sembuh: [], indo: [] });

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

        axios.get('https://api.kawalcorona.com/indonesia/').then(response => {
            console.log(response);
            this.setState({ indo: response.data });
        });
    }

    render() {
        return (
            <div>
              <div className="ui grid">
                <div className="four wide column">
                  <div className="ui fluid card">
                    <div className="image">
                      <img src="assets/icon/bersedih.jpg" alt="bersedih"/>
                    </div>
                    <div className="content">
                      <a href="t" className="header">{this.state.positif.name}</a>
                      <div className="description">
                        {this.state.positif.value} ORANG
                      </div>
                    </div>
                  </div>
                </div>
                 
                 <div className="four wide column">
                  <div className="ui fluid card">
                    <div className="image">
                      <img src="assets/icon/gembira.jpg" alt="gembira"/>
                    </div>
                    <div className="content">
                      <a href="t" className="header center">{this.state.sembuh.name}</a>
                      <div className="description">
                        {this.state.sembuh.value} ORANG
                      </div>
                    </div>
                  </div>
                </div>

                <div className="four wide column">
                  <div className="ui fluid card">
                    <div className="image">
                      <img src="assets/icon/menangis.jpg" alt="menangis"/>
                    </div>
                    <div className="content">
                      <a href="t" className="header">{this.state.meninggal.name}</a>
                      <div className="description">
                        {this.state.meninggal.value} ORANG
                      </div>
                    </div>
                  </div>
                </div>

                <div className="four wide column">
                  <div className="ui fluid card">
                    <div className="image">
                      <img src="assets/icon/indonesia.jpg" alt="indonesia"/>
                    </div>
                    <div className="content">
                      <a href="t" className="header">{this.state.indo.map(indo =>(indo.name))}</a>
                      <div className="description">
                        Positif : {this.state.indo.map(indo =>(indo.positif))} | 
                        Sembuh : {this.state.indo.map(indo =>(indo.sembuh))} | 
                        Death : {this.state.indo.map(indo =>(indo.meninggal))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    };
}

export default LiveData;