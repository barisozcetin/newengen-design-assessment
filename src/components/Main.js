import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <main className="content">
        <div className="swatch--grid">
          <div className="swatch--card">
            <div className="swatch--color" />
            <div className="swatch--title">#DCDCDC</div>
          </div>
        </div>
        <style jsx>{`
          .content {
            grid-area: content;
          }
          .swatch--grid {
            display: grid;
            grid-gap: 15px;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 200px 200px 200px;
          }
        `}</style>
      </main>
    );
  }
}

export default Main;
