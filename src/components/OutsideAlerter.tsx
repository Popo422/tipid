import React, { Component } from "react";

/**
 * Component that alerts if you click outside of it
 * Were kinda having trouble with the burger so I decided to customize it a bit
 */
export default class OutsideAlerter extends Component {
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

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      //   alert("You clicked outside of me!");
      if (this.props.clickedOutside) {
        event.stopPropagation();
        this.props.clickedOutside();
      }
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
