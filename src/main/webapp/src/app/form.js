import React, {Component} from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lst: [],
      given: '',
      original: '',
      reversed: ''
    };

    this.handleFetchData = this.handleFetchData.bind(this);
  }

  handleFetchData(e) {
    this.setState({given: e.target.value});
    fetch('reverser/jsonbasedreverser/' + e.target.value).then(res => {
      return res.json();
    }).then(res => {
      this.setState({lst: res, original: res.original, reversed: res.reversed});
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.given} onChange={this.handleFetchData}/>
        <h4>{this.state.given}</h4>
        <h4>{this.state.original}</h4>
        <h4>{this.state.reversed}</h4>
      </div>

    );
  }
}
