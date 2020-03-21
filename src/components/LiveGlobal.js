import React from 'react';
import axios from 'axios';

class LiveGlobal extends React.Component {
    state = { list: [] }

    componentDidMount() {
        axios.get('https://api.kawalcorona.com/').then(response => {
            console.log(response);
            this.setState({ list: response.data });
        });
    };

    render() {
        return (
            <div>
                <table className="ui celled striped table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Negara</th>
                      <th>Positif</th>
                      <th>Meninggal</th>
                      <th>Sembuh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list.map(list => (
                      <tr>
                        <td data-label="ID">{}</td>
                        <td data-label="Negara">{this.state.list.Country_Region}</td>
                        <td data-label="Positif">{this.state.list.Confirmed}</td>
                        <td data-label="Meninggal">{this.state.list.Deaths}</td>
                        <td data-label="Sembuh">{this.state.list.Recovered}</td>
                      </tr>
                    ))}
                  </tbody>
                    
                </table>
            </div>
        );
    };
};

export default LiveGlobal;