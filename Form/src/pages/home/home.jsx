import React from 'react'

const Home = () => {
  return (
    <div>
      <form>
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
