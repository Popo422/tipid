import React, { Component } from "react";

export default class AbsoluteOutsideAlerter extends Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.props.clickedOutside) {
        event.stopPropagation();
        this.props.clickedOutside();
      }
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef} className={this.props.className}>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            ref: this.setWrapperRef
          })
        )}
      </div>
    );
  }
}
