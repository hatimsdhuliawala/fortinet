import React from 'react';
import axios from 'axios';
import LoadingStateComponent from './loadingState';
import ErrorStateComponent from './errorState';
import DisplayOutageDataComponent from './displayOutageData'

class OutageUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: null,
      metaData: null,
      isLoading: true,
      errorState: false,
      nextUrl: '',
      prevUrl: '',
      currentUrl: 'https://api2.panopta.com/v2/outage?api_key=6369950d-c200-47e5-b943-06047662e4fa',
    }

    this.handleErrorState = this.handleErrorState.bind(this);
    this.nextPreviousPageClick = this.nextPreviousPageClick.bind(this);
  }

  async getUserData(url) {
    const res = await axios.get(url).then(res => {
      const { meta, outage_list } = res.data;
      this.setState({isLoading: false, userData: outage_list,nextUrl: meta.next, prevUrl: meta.previous, errorState: false})
    }).catch((error, data) => {
      this.setState({errorState: true, isLoading: false})
    });
  }

  componentDidMount() {
    this.getUserData(this.state.currentUrl);
  }

  nextPreviousPageClick(url) {
    let createUrl = `${url}&api_key=6369950d-c200-47e5-b943-06047662e4fa`;
    this.setState({isLoading: true, currentUrl: createUrl}, () => {
      this.getUserData(createUrl)
    })
  }

  handleErrorState() {
    this.setState({
      isLoading:true,
      errorState: false,
      currentUrl: 'https://api2.panopta.com/v2/outage?api_key=6369950d-c200-47e5-b943-06047662e4fa'
    }, () => {
      this.getUserData(this.state.currentUrl);
    })

  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <LoadingStateComponent /> :
        this.state.errorState ?
          <ErrorStateComponent handleErrorState={this.handleErrorState}/> :
          <DisplayOutageDataComponent prevUrl={this.state.prevUrl} nextUrl={this.state.nextUrl} userData={this.state.userData} nextPreviousPageClick={this.nextPreviousPageClick} />
        }
      </div>
    )
  }
}

export default OutageUser;
