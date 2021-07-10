import { connect } from 'react-redux'

function A(props) {
    const handleAdd = () => {
        console.log('a', props);
        props.addOne()
    }
    const handleDel = () => {
        props.delOne()
    }
    return (
        <>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleDel}>-</button>
        </>
    )
}
const mapDispatchToProps = dispatch => {
    //返回一个对象，用props可以调用
    return {
        addOne: () => {
            dispatch({
                type: 'add'
            })
        },
        delOne: () => {
            dispatch({
                type: 'del'
            })
        }
    }
}
// 只发送，第一个参数填null即可，用connect对A组件加强
export default connect(null, mapDispatchToProps)(A)
