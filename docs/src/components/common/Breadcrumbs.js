import React, { Component } from "react";
import { Link } from "gatsby";

export default class Breadcrumbs extends Component {
  static defaultProps = {
    breadcrumbs: [],
  };

  render() {
    const { breadcrumbs } = this.props;

    return (
      <>
        <div className="pb-5 flex items-center">
          <Link to="/">
            <i className="opacity-25 hover:opacity-50 icon-home" />
          </Link>
          {breadcrumbs.map((breadcrumb) => (
            <div className="flex items-center" style={{ height: 15 }}>
              <span className="inline ml-3 mr-2 text-gray-400">/</span>
              <Link to={breadcrumb.link}>
                <span className="text-gray-800">{breadcrumb.text}</span>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}
