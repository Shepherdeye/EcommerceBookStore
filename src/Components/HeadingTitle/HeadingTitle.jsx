import React from 'react'

export const HeadingTitle = ({title}) => {
  return (
    <div style={divStyle}>
        <h2 style={h2Style}>{title}</h2>
    </div>
  )
}



const divStyle= {
    backgroundColor:"#fff",
    padding:"10px 30px"
}
const h2Style= {
    color:"#1926d2",
    fontSize: "25px",
    borderBottom:"#1926d2 2px solid",
    width:"max-content",
    fontWeight:"600",
    paddingBottom:"5px",
    fontFamily:"Cambria",
    marginBottom:"20px",
    marginTop:"20px"


}