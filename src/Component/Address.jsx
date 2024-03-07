import './Address.css'

const Address = () => {
  return (
    <div className='Addresses'>
      <div className='address'>
        <p className='add-type'>Default Address</p>
        <p className='username'>Rebela Ray</p>
        <p className='full-add'>1, R.N Tagore Road</p>
        <p className='pin'>700001</p>
        <p className='mobile'>(+91) 9000001343</p>
        <button className='select-add' type='submit'>Deliver Here</button>
        <button className='del-add' type='submit'><i className="fa-solid fa-trash-can" /></button>
        <button className='edit-add' type='submit'><i className="fa-solid fa-pen-to-square"/></button>
      </div>
      <button className='add-new-add' type='submit'>Add New Address</button>
    </div>
  )
}

export default Address
