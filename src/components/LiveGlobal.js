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
                        <td data-label="ID">{list.attributes.OBJECTID}</td>
                        <td data-label="Negara">{list.attributes.Country_Region}</td>
                        <td data-label="Positif">{list.attributes.Confirmed}</td>
                        <td data-label="Meninggal">{list.attributes.Deaths}</td>
                        <td data-label="Sembuh">{list.attributes.Recovered}</td>
                      </tr>
                    ))}
                  </tbody>                   
                </table>
            </div>
        );
    };
};

export default LiveGlobal;