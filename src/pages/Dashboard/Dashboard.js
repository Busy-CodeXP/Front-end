import React, { Component } from 'react';
import * as BusyApi from "../../api/BusyApi";
// import * as mockdados from "./mockdados";

import { NavbarList } from '../../components/Navbar';
import BoxInfo from '../../components/BoxInfo/BoxInfo';
import Header from '../../components/Header';
import BusInfo from '../../components/BusInfo/BusInfo';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';
import './styles/Dashboard.scss';
import Loading from '../../components/Loading/Loading';


class Dashboard extends Component {
  state = {
    inputText: '',
    listaLinhas: [],
    codigoLinha: '',
    todosOnibusLinha: {},
    onibus: {},
    busLinha: {},
    loading: false
  }


  getOnibus = (param) => {
    this.setState({
      onibus: param
    })
  }
  getLinha = () => {
    BusyApi.getLinhas(this.state.inputText)
      .then(({ data }) => {
        this.setState({
          listaLinhas: data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getBus = () => {
    BusyApi.getOnibusLinha(this.state.codigoLinha)
      .then(({ data }) => {
        this.setState({
          todosOnibusLinha: data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleInputChange = () => {
    this.setState({
      inputText: this.search.value,
    }, () => {
      if (this.state.inputText.length >= 4) {
        this.setState({loading:true})
        setTimeout(() => {
          this.getLinha();          
        }, 500);
        
      } else {
        this.setState({
          listaLinhas: [],
          loading:false
        })
      }
    })

  }

  handleClick = (cl) => {
    this.setState({
      codigoLinha: cl
    }, () => {
      this.getBus()
    })
  }

  busInfo = (linha) => {
    this.setState({
      busLinha: linha
    })
  }

  closeMenu = () => {
    if (this.header) {
      this.header.getNavbar().closeMenu()
    }
  }

  render() {
    const nav = <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 485.213 485.213">
      <g>
        <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465    C318.424,257.208,257.206,318.416,181.956,318.416z" fill="#FFFFFF" />
        <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z" fill="#FFFFFF" />
      </g>
    </svg>

    const items = this.state.listaLinhas && this.state.listaLinhas.map(
      (item, index) =>
        <NavbarList onClick={this.closeMenu} key={index} className='list-item-bus' >
          <div onClick={() => { this.handleClick(item.cl); this.busInfo(item) }}  >
            <span>{item.lt}-{item.tl} &#10144; {item.sl === 1 ? `${item.tp}` : `${item.ts}`}</span>
            <br />
            <span>{item.ts} / {item.tp}</span>
          </div>
        </NavbarList>
    )
    const {
      busLinha, loading, listaLinhas
    } = this.state
    return (
      <div className='Dashboard'>
        <Header ref={(header) => this.header = header} background='linear-gradient(to bottom right, #5f3fff, #8DDEFF)' burger={nav}>
          <input className='search'
            placeholder="Pesquise sua linha"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />

          {loading && listaLinhas.length === 0 ? <Loading/> : items}
          {/* {items.length > 0 ? items : <Loading/>} */}
        </Header>


        {busLinha.cl !== undefined ? (
          <BusInfo
            linha={`${busLinha.lt} - ${busLinha.tl}`}
            trajeto={`${busLinha.ts} / ${busLinha.tp}`}
          />
        ) : (
            <BusInfo />
          )}



        <section className='Dashboard-BoxInfo'>
          <BoxInfo
            title='Lotação'
            count={this.state.onibus.lotacao}
            porcent={this.state.onibus.lotacao}
          />
          <BoxInfo
            title='Capacidade'
            count={this.state.onibus.capacidade}
          />
          <BoxInfo
            title='Acessibilidade'
            count={this.state.onibus.a === true ? 'Possui' : this.state.onibus.a === false ? 'Não Possui' : ''}
          />
        </section>


        <GoogleMaps data={this.state.todosOnibusLinha} algumacoisa={this.getOnibus} />

      </div>
    );
  }
}

export default Dashboard;
