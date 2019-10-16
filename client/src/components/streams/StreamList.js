import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    return <div>StreamList</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(this.props.streams)
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
