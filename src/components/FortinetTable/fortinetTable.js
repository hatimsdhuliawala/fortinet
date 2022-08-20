import React from 'react';
import axios from 'axios';
import LoadingState from './loadingState';
import ErrorState from './errorState';

class FortinetTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: null,
      isLoading: true,
      errorState: false,
      nextUrl: '',
      prevUrl: '',
      currentUrl: 'https://api2.panopta.com/v2/ouage?api_key=6369950d-c200-47e5-b943-06047662e4fa',
    }

    this.nextPreviousPage = this.nextPreviousPage.bind(this);
    this.handleErrorState = this.handleErrorState.bind(this);
  }

  async getUserData(url) {
    const res = await axios.get(url).then(res => {
      console.log(res.data)
      const { meta, outage_list } = res.data;
      this.setState({isLoading: false, userData: outage_list, nextUrl: meta.next, prevUrl: meta.previous})
    }).catch((error, data) => {
      this.setState({errorState: true, isLoading: false})
    });
  }

  componentDidMount() {
    this.getUserData(this.state.currentUrl);
  }

  nextPreviousPage(url) {
    this.setState({isLoading: true, currentUrl: url})
    this.getUserData(url)
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
        {this.state.isLoading ? <LoadingState /> :
        this.state.errorState ?
          <ErrorState handleErrorState={this.handleErrorState}/> :
          this.state.currentUrl}
      </div>
    )
  }
}

export default FortinetTable;
