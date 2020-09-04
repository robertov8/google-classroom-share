import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import Skeleton from 'react-loading-skeleton';

class GoogleShareToClassRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scriptLoaded: false,
      scriptError: false
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-underscore-dangle
    window.___gcfg = {
      parsetags: 'explicit'
    };
    const {
      onShareComplete,
      onShareStart
    } = this.props;
    window.onShareComplete = onShareComplete;
    window.onShareStart = onShareStart;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.scriptLoaded && !nextState.scriptError) {
      window.gapi.sharetoclassroom.go('content');
      return true;
    }

    return false;
  }

  handleScriptCreate() {
    this.setState({
      scriptLoaded: false
    });
  }

  handleScriptError() {
    this.setState({
      scriptLoaded: false
    });
  }

  handleScriptLoad() {
    this.setState({
      scriptLoaded: true
    });
  }

  render() {
    const {
      scriptLoaded
    } = this.state;
    const {
      body,
      itemType,
      size,
      theme,
      title,
      url
    } = this.props;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Script, {
      url: "https://apis.google.com/js/platform.js",
      onCreate: () => this.handleScriptCreate(),
      onError: () => this.handleScriptError(),
      onLoad: () => this.handleScriptLoad()
    }), !scriptLoaded && /*#__PURE__*/React.createElement(Skeleton, {
      height: size,
      width: size,
      duration: 20
    }), /*#__PURE__*/React.createElement("div", {
      className: "g-sharetoclassroom",
      "data-body": body,
      "data-itemtype": itemType,
      "data-onsharecomplete": "onShareComplete",
      "data-onsharestart": "onShareStart",
      "data-size": size,
      "data-theme": theme,
      "data-title": title,
      "data-url": url
    }));
  }

}

GoogleShareToClassRoom.defaultProps = {
  body: null,
  itemType: null,
  onShareComplete: () => {},
  onShareStart: () => {},
  size: 32,
  theme: 'classic',
  title: null,
  url: null
};
GoogleShareToClassRoom.propTypes = {
  body: PropTypes.string,
  itemType: PropTypes.oneOf(['announcement', 'assignment', 'material', 'question']),
  onShareComplete: PropTypes.func,
  onShareStart: PropTypes.func,
  size: PropTypes.number,
  theme: PropTypes.oneOf(['classic', 'dark', 'light']),
  title: PropTypes.string,
  url: PropTypes.string
};
export default GoogleShareToClassRoom;