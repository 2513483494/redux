import { Input, List, Button } from 'antd'
import 'antd/dist/antd.css'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { changeInput, addEvent, delEvent } from '../../action/action'
// 11
let v1
const C = (props) => {
    const [v, setv] = useState('')
    useEffect(() => {
        v1 = v
        props.changeInput()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [v])
    const { placcHolder, list, inputValue } = props
    const onChange = (v) => {
        setv(v.target.value)

    }
    const addEvent = () => {
        props.addEvent()
        v1 = ''
    }
    const delEvent = (i) => {
        props.delEvent(i)
    }
    return (
        <div>
            <div>
                <Input
                    placeholder={placcHolder}
                    style={{ width: 300 }}
                    onChange={onChange}
                    value={inputValue}
                />
                <p>{inputValue}</p>
                <Button type="primary" onClick={addEvent}>增加</Button>
            </div>
            <div>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, i) => (
                        <List.Item onClick={() => delEvent(i)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeInput: () => dispatch(changeInput(v1)),
        addEvent: () => {
            if (v1 === '') {
                return
            }
            dispatch(addEvent(v1))
        },
        delEvent: (i) => {
            dispatch(delEvent(i))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(C)