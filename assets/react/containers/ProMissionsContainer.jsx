const React = require("react");
const Container = require("flux/util");


class ReactContainer extends React.Component {
  static calculateState() {}
  static getStores() {}
  render() {
    return <View {...this.state} />;
  }
}

module.exports = Container.create(ReactContainer);
