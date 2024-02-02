import React, {useState} from 'react'
import ApiClient from '../assets/ApiClient.js';
import './Page1.css'

export const Page1 = () => {
  const [arr, setArr] = useState([]);
  let m = []
  async function networkCall(){
    m = await ApiClient.read();
    setArr(m);
  }
  networkCall();
  console.log("array hai", arr);
  return (
    <div className='d-flex hy'>
        {arr.map(obj=>{
          return <div className='hello'>  
            <div class="card text-bg-light mb-3">
              <div class="card-header">UserId:- {obj.userId}</div>
              <div class="card-body">
                <h5 class="card-title">ID:- {obj.id}</h5>
                <p class="card-text">Title:- {obj.title}</p>
                <p class="card-text">Status:- {obj.completed ? "True" : "False"}</p>
              </div>
            </div>
          </div>
        })}
    </div>
  )
}
export default Page1;
