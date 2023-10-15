const NoteItem = ({item}) => {
  const {title,description} = item
  
  const desWordCount =  description.split(" ")
 

  return (
    <div className="note_Container mt-4 px-4 py-5 bg-white w-[230px] h-auto rounded-2xl">
    <p className="font-semibold mt-2 text-[14px]	font-inter">
      {" "}
   {title}
    </p>
    <h3 className={` ${desWordCount.length> 5 || description.length > 5 ? ` text-[22px]`:` text-[36px]`}  mt-2 font-medium text-left  leading-12 font-inter`}>
      {description}
    </h3>

    <ul className="list-disc mt-3 list-inside	">
      <li>First List </li>
      <li>First List </li>
      <li>First List </li>
    </ul>

    <div className="w-full flex flex-wrap justify-start mt-3">
      <span className="rounded-full mt-2 m-1 bg-[#E9EDF1] text-[14px] text-[#6b7280] px-3">
        Work
      </span>
      <span className="rounded-full mt-2 m-1 bg-[#E9EDF1] text-[14px] text-[#6b7280] px-3">
        Personal
      </span>
    </div>
  </div>
  )
}

export default NoteItem