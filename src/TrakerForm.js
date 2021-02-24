import React , { useState  } from 'react';
import History from './History'

const TrakerForm = ()=>{
    const [data,setData] = useState([]);
    const [description, setDescription] = useState('');
    const [inputValue,setInputValue]=useState('');
    const [remander , setRemander] = useState(0);
    const [income , setIncome] =useState(0);
    const [expense , setExpense] = useState(0);  

    const submitHandle = (e)=>{
        e.preventDefault();
        if(inputValue !== '' && description !== ''){
            setData([...data,{amount: inputValue , id:Date.now() , describe: description }])
        if(inputValue >= 0 && description!=''){
            setIncome(Number(income)+Number(inputValue));
            setRemander(Number(remander)+Number(inputValue));
        }else if(inputValue < 0 && description!=''){
            setExpense(Number(expense)-Number(inputValue));
            setRemander(Number(remander)+Number(inputValue));
        }
        setInputValue('');
        setDescription('');
        }else{
            setInputValue('');
            setDescription('');
            alert('Enter Amount and Description Both');
        }
    }
    
    const deleteHandler = (id) => {
        var filteredData = data.filter(item => {
            return (item.id !== id)
        })
        setData([...filteredData])
    }

    return(
        <>
            <><h4>{`Your Balance : ${remander}₹`}</h4></>
            <div className='income'><h5>{`Income : ${income}₹`}</h5></div>
            <div className='expense'><h5>{`Expense : ${expense}₹`}</h5></div>
            <form onSubmit={submitHandle}>
                <input className='search-description' type='text' value={description} placeholder='Enter Amount Description' onChange={(e)=>setDescription(e.target.value)}></input>
                <br />
                <input className='search-amount' type='text' value={inputValue} placeholder='Enter Amount Here' onChange={(e)=>setInputValue(e.target.value)}></input>
                <br />
                <button className='search-btn' type='submit'>Submit</button>
                <p><span className='income'>positive(+)</span> shows Income , <span className='expense'>Negative(-)</span> shows Expense</p>
            </form>
            <h2>History</h2>
            <History data={data} deleteHandler={deleteHandler}/>
            
        </>
    )
}

export default TrakerForm