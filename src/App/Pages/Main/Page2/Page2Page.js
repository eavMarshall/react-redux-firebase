import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as Common from '../../../../CommonReducer.js';

class Page2Page extends Component {

  render() {
    return (
      <div>
        <h1>This is the Page 2 page</h1>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    CommonReducer : Common.CommonReducer
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedPageID: state.Common.Session.selectedPageID
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Page2Page);
