import { connect } from 'react-redux'

function B(props) {
    return (
        <div className="App">
            {props.count}
        </div>
    );
}
const mapStateToProps = (state) => {
    console.log('b',state);
    return state
}
export default connect(mapStateToProps, null)(B);
