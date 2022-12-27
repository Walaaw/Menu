import React from 'react';
export default function Menu({menu}) {
  return (
    <>
     {menu.map((item)=>{
        const {id ,title,price,img ,desc}=item;
        console.log(img);
        return <div key={id} className="col-md-6">
        <div className="item">
            <div className="row">
                <div className="col-md-5">
                  <div className='right my-4'>
                  <img src={require(`../../${img}`)} alt="meal" className='w-100 h-100' />
                  </div>
                </div>
                <div className="col-md-7">
                   <div className='left my-4'>
                  <div className=' title d-flex justify-content-between align-items-center'>
                  <h5>{title}</h5>
                  <p>{`$${price}`}</p>
                  </div>
                  <p className=' text-muted p-2'>{desc}</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
     })}
    
    </>
   
  )
}
