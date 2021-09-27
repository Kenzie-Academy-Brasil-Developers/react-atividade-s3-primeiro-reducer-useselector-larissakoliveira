import { useDispatch } from "react-redux"
import { addNumber, subNumber } from "../../store/modules/CounterResults/actions";

const Counter = () => {

    const dispatch = useDispatch();

    return(
        <>
        <button onClick={()=>dispatch(addNumber(1))}>Add</button>
        <button onClick={()=>dispatch(subNumber(1))}>Sub</button>
        </>
    )
}

export default Counter