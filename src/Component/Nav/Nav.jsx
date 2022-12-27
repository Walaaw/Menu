import React from 'react'

export default function Nav({categories, difargument}) {
 
  return (
   <>
   <ul class="nav justify-content-center">
    {categories.map((cat,idx)=>{
      return  <li key={idx} class="nav-item">
      <button className='btn px-3 py-2 m-1' onClick={()=>{
        difargument(cat);
      }}> {cat} </button>
    </li>
    })}
</ul>
   </>
  )
}
