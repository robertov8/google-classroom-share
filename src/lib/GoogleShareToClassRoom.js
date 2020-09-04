import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import Skeleton from 'react-loading-skeleton';

class GoogleShareToClassRoom extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      scriptLoaded: false,
      scriptError: false,
    };
  }

  componentDidMount() {
    window.___gcfg = { parsetags: 'explicit' };

    window.onShareComplete = this.props.onShareComplete;
    window.onShareStart = this.props.onShareStart;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextState.scriptLoaded && !nextState.scriptError) {
      window.gapi.sharetoclassroom.go('content');
    }
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
  }

  render() {
    const {
      body, itemType, size, theme, title, url,
    } = this.props;

    return (
      <div>
        <Script
          url="https://apis.google.com/js/platform.js"
          onCreate={this.handleScriptCreate}
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        />

        {!this.state.scriptLoaded && (
          <Skeleton
            height={size}
            width={size}
            duration={20}
          />
        )}

        <div
          className="g-sharetoclassroom"
          data-body={body}
          data-itemtype={itemType}
          data-onsharecomplete="onShareComplete"
          data-onsharestart="onShareStart"
          data-size={size}
          data-theme={theme}
          data-title={title}
          data-url={url}
        />

      </div>
    );
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
  url: null,
};

GoogleShareToClassRoom.propTypes = {
  body: PropTypes.string,
  itemType: PropTypes.oneOf([
    'announcement',
    'assignment',
    'material',
    'question',
  ]),
  onShareComplete: PropTypes.func,
  onShareStart: PropTypes.func,
  size: PropTypes.number,
  theme: PropTypes.oneOf(['classic', 'dark', 'light']),
  title: PropTypes.string,
  url: PropTypes.string,
};

export default GoogleShareToClassRoom;
