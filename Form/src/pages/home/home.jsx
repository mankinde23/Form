import React from 'react'
import '../home/home.css'

const Home = () => {
  return (
    <div className='form-container'>
      <form className='form'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' />

        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' />
        <button>Submit</button>



      </form>
    </div>
  )
}

export default Home
