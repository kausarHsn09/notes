import React, { useEffect, useRef, useState } from "react";

const CreateNotes = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  function handleClick(){
    setIsOpen(true)
  }
 
  useEffect(()=>{
    const handleWindow = ()=> setIsOpen(false)
    window.addEventListener('click',handleWindow)
    
  },[setIsOpen])

 
  return (
    <>
   { !isOpen &&( <div ref={ref} className="w-full flex justify-center" onClick={handleClick}>
      <div className="notes_creator cursor-text px-9 py-3 mt-10 bg-white rounded-[20px] flex flex-row w-[515px] h-auto">
        <p className="font-inter text-[#6b7280] text-md ">Take a note </p>
      </div>
    </div>)
}
   {isOpen && (
     <div className="w-full flex justify-center" >
     <div className="notes_creator cursor-text px-9 py-5 mt-10 bg-white rounded-[20px] flex flex-col w-[515px] h-auto">
       <input type="text"  placeholder="Create Notes" />
       <textarea name="" id="" cols="20" rows="10"></textarea>
     </div>
   </div>
   )}
    </>
  );
}; 

export default CreateNotes;
