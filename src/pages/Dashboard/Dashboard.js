import React, { Component, Fragment } from 'react';


import BoxInfo from '../../components/BoxInfo/BoxInfo';
import Header from '../../components/Header';
import BusInfo from '../../components/BusInfo/BusInfo';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';
import './styles/Dashboard.scss';


class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Header background='#0893C3'>
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
