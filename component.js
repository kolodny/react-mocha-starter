var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {name: 'World'};
  },
  render: function () {
    return (
      <div>Hello {this.props.name}!</div>
    );
  }
});
