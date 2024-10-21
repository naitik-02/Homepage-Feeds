import React from 'react'

function Card() {
  return (
    <div class="card p-1 h-[200px]">
  <div className="uppertext flex  justify-between">
    <div className=''>
<span>Contacts</span> filter <span>logo</span>
    </div>
    <button className='bg-blue-500 text-[7px] text-white px-1 py-0 rounded-md'>+newContact</button>
  </div>
  
</div>
  )
}

export default Card