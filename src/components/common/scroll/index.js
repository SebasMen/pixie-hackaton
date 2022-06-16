import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

export default class ColoredScrollbars extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = { top: 0 };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.renderView = this.renderView.bind(this);
    this.renderThumb = this.renderThumb.bind(this);
  }

  handleUpdate(values) {
    const { top } = values;
    this.setState({ top });
  }

  renderView({ style, ...props }) {
    const viewStyle = {
      paddingLeft: 22,
      paddingRight: 22,
    };
    return (
      <div
        className='box'
        style={{ ...style, ...viewStyle }}
        {...props}/>
    );
  }

  renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: '#a3988c',
      borderRadius: '2px'
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props}/>
    );
  }

  renderTrack({ style, ...props }) {
    const trackStyle = {
      backgroundColor: '#fce6ce',
      height: '100%',
      top: 0,
      right: 0,
    };
    return (
      <div
        style={{ ...style, ...trackStyle }}
        {...props}/>
    );
  }

  render() {
    return (
      <Scrollbars
        renderView={this.renderView}
        renderThumbVertical={this.renderThumb}
        renderTrackVertical={this.renderTrack}
        onUpdate={this.handleUpdate}
        {...this.props}/>
    );
  }
}
