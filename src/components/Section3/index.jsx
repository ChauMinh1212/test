import React, { useEffect, useState } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';

Section3.propTypes = {
    
};

function Section3(props) {
    const URL_API = 'https://jsonplaceholder.typicode.com/todos'
    const [result, setResult] = useState([])
    useEffect(() => {
        const getResult = async ()=> {
            const result = await axios.get(URL_API)
            setResult(result.data)
        }
        getResult()
    }, [])
    const taskCompleted = result.filter(x => x.completed === true)
    const id10 = result.filter(x => x.userId === 10)
    const taskNotCompleted = id10.filter(x => x.completed === false)
    return (
        <div>
            <p style={{fontWeight: '600', marginBottom: '20px'}}>Section 3</p>
            <p>Số nhiệm vụ hoàn thành là {taskCompleted.length}</p>
            <p>Số nhiệm vụ id 10 chưa hoàn thành là {taskNotCompleted.length}</p>
        </div>
    );
}

export default Section3;