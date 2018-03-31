import React, { Component, Fragment } from 'react';
import * as BusyApi from "../../api/BusyApi";
import * as mockdados from "./mockdados";

import { NavbarList } from '../../components/Navbar';
import BoxInfo from '../../components/BoxInfo/BoxInfo';
import Header from '../../components/Header';
import BusInfo from '../../components/BusInfo/BusInfo';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';
import './styles/Dashboard.scss';


class Dashboard extends Component {
  state = {
    inputText: '',
    results: [],
    linha: '',
    bus: {}
  }

  getLinha = () => {
    this.setState({
      results: mockdados.linha8000
    })
    // BusyApi.getLinhas(this.state.inputText)
    //   .then(({ data }) => {
    //     this.setState({
    //       results: data
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
  }

  getBus = () => {
    this.setState({
      bus: mockdados.busLinha
    })
    // BusyApi.getOnibusLinha(this.state.inputText)
    //   .then(({ data }) => {
    //     this.setState({
    //       bus: data
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
  }

  handleInputChange = () => {
    this.setState({
      inputText: this.search.value
    }, () => {
      if (this.state.inputText.length >= 3) {
        setTimeout(() => {
          this.getLinha()
        }, 500);
      } else {
        this.setState({
          results: []
        })
      }
    })

  }

  handleClick = (cl) => {
    console.log('this is:', cl);
    this.setState({
      linha: cl
    }, () => {
      this.getBus()
    })
  }
  
  render() {
    console.log(this.state)
    const nav = <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 485.213 485.213">
      <g>
        <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465    C318.424,257.208,257.206,318.416,181.956,318.416z" fill="#FFFFFF" />
        <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z" fill="#FFFFFF" />
      </g>
    </svg>

const items = this.state.results && this.state.results.map(
  (item, index) =>
  <NavbarList key={index} className='list-item-bus' >
          <div onClick={() => this.handleClick(item.cl)}>
            <span>{item.lt}-{item.tl} -> {item.sl === 1 ? `${item.tp}` : `${item.ts}`}</span>
            <br />
            <span>{item.ts} / {item.tp}</span>
          </div>
        </NavbarList>
    )
    return (
      <Fragment>
        <Header background='#0893C3' burger={nav}>
          <input
            placeholder="procura ae"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          {items}
        </Header>
        <BusInfo
          linha='1234-10'
          trajeto="TERM. JD. BOLADO / JD. OSASCO"
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

        <GoogleMaps />

      </Fragment>
    );
  }
}

export default Dashboard;
