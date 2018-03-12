import React, { Component, Fragment } from 'react';


import BoxInfo from '../../components/BoxInfo/BoxInfo';
import Header from '../../components/Header';
import BusInfo from '../../components/BusInfo/BusInfo';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';
import './styles/Dashboard.scss';


class Dashboard extends Component {
  render() {
    const nav = <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 485.213 485.213">
    <g>
      <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465    C318.424,257.208,257.206,318.416,181.956,318.416z" fill="#FFFFFF"/>
      <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z" fill="#FFFFFF"/>
    </g>
  </svg>

    return (
      <Fragment>
        <Header background='#0893C3' burger={nav}>
        </Header>

        <BusInfo
          linha='1234-10'
          trajeto='TERM. JD. BOLADO / JD. OSASCO'
        />

        <section className='Dashboard-BoxInfo'>
          <BoxInfo
            title='TÍTULO'
            count='10'
          />
          <BoxInfo
            title='TÍTULO'
            count='50'
          />
          <BoxInfo
            title='TÍTULO'
            count='100'
          />
        </section>

        <GoogleMaps/>
        
      </Fragment>
    );
  }
}

export default Dashboard;
