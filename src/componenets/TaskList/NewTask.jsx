import React from 'react'

const NewTask = ({data}) => {
    // console.log();
    // localStorage.clear()
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400  rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category || 'no Catagory'}</h3>
                <h4 className='text-sm'>{data.taskDate || 'no date'}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle || 'untitled task'}</h2>
            <p className='text-sm mt-2 break-words '>
                {data.taskDescription || 'no descrition'}
            </p>
            <div className='mt-4'>
                
                <button className='bg-blue-900 py-1 px-2 text-sm w-full'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask