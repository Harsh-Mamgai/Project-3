import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos';
export const ApiClient = {
  async read(){
      try{
          const res = await axios.get(url);
          return res.data;
      }
      catch(err){
          throw err;
      }
  }
}
export default ApiClient;
