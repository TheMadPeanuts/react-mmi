/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return (
      <div className="Machine">
  
      <div className="MachineHeader">
        <h3>{this.props.title} | {this.props.isActive}</h3>
        
      </div>
      
      <div className="Machine1">
        <p>je dis {this.props.title} | {this.props.isActive}</p>
      </div>
      
      </div>
      
      );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
