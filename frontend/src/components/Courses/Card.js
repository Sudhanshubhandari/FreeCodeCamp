import React from 'react'

const Card = ({item}) => {
  return (
    <div className='bg-gray-300  m-1 h-12 border-stone-950 border-2 flex items-center p-6 tc'> 
     
    {(item.courseType === "comp" )? (
      <i className="uil uil-monitor"   style={{ fontSize: '34px' }}></i>
    ) : (item.courseType === "react" )? (
        <i className="uil uil-react" style={{ fontSize: '34px' }}></i>
        ) : (item.courseType === "javascript") ? (
        <i className="uil uil-java-script" style={{ fontSize: '34px' }}></i>
    ) : (item.courseType === "db") ? (
        <i className="uil uil-selfie" style={{ fontSize: '34px' }}></i>
    ) : (item.courseType === "back") ? (
        <i className="uil uil-server" style={{ fontSize: '34px' }}></i>
    ) : (item.courseType === "result") ? (
        <i className="uil uil-file-check-alt" style={{ fontSize: '34px' }}></i>
    ) : (
      <div>no image</div>
    )}
    &nbsp;&nbsp;&nbsp;
     {item.courseTitle}
  </div>
  )
}

export default Card