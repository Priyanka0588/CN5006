import Recat, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
//import { Link } from 'react-router-dom';
import displayData from './DisplayData';
export default function DeleteBook(props) {
    const [state, setState] = useState([]);
       let params = useParams();
    useEffect(() => {
        console.log("useeff delete" + params.id)
        axios.post("http://;ocalhost:5000/deleteBook/" + params.id)
            .then(res => {

                setState(res.data)
                console.log("data set in the state and state length" + state.length)
            })
            .catch(err => {
                console.log("error has occured")
            })
            .catch(err => {
                console.log("error has occured")
            })
    }, [params.id])
    return (
        <div>
            <DisplayData Books={state}/>
        </div>
    )
}
