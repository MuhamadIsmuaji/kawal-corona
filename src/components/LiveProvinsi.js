import React from 'react';
import axios from 'axios';

class LiveProvinsi extends React.Component {
    state = ({ provinsi: [] });

    componentDidMount() {
        axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
        .then(response => {
            console.log(response);
            this.setState({ provinsi: response.data });
        })
    }

    render() {
        return (
            <div>
              <table className="ui inverted teal table">
                 <thead>
                   <tr>
                      <th>ID</th>
                      <th>Provinsi</th>
                      <th>Positif</th>
                      <th>Sembuh</th>
                      <th>Meninggal</th>
                   </tr>
                 </thead>
                 <tbody>
                    {this.state.provinsi.map(provinsi => (
                        <tr>
                          <td>{provinsi.attributes.Kode_Provi}</td>
                          <td>{provinsi.attributes.Provinsi}</td>
                          <td>{provinsi.attributes.Kasus_Posi}</td>
                          <td>{provinsi.attributes.Kasus_Semb}</td>
                          <td>{provinsi.attributes.Kasus_Meni}</td>
                        </tr>
                    ))}
                 </tbody>
              </table>
            </div>
        )
    }
}

export default LiveProvinsi;