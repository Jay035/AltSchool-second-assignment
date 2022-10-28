import Axios from 'axios';

export default function Users() {
    // Axios.get('https://randomuser.me/api/?results=5000').then(res => {
    //     console.log(res.data)
    // }).catch(err => console.log(err.message))

    fetch('https://randomuser.me/api/').then(res => {
        const result = res.json();
        console.log(result)
    }).catch(err => console.log(err.message))

  return (
    <div className='container users-page'>Users
        
    </div>
  )
}
