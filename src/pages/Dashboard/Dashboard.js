import React, { Component, Fragment } from 'react';
import './styles/Dashboard.scss';
import BoxInfo from '../../components/BoxInfo/BoxInfo';


class Dashboard extends Component {
  render() {
    return (
      <Fragment>        
        <section className='Dashboard-BoxInfo'>
          <BoxInfo
            title='Título'
            count='10'
          />
        </section>
      </Fragment>
    );
  }
}

export default Dashboard;
