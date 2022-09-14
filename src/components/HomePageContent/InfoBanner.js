import React from 'react'
const banner={
bigBanner:{backgroundColor:"#fff",
height:"15rem",
width:'17rem',
borderTopLeftRadius:"2rem",
borderTopRightRadius:"2rem",
borderBottomLeftRadius:"2rem",
borderBottomRightRadius:"2rem",
boxShadow:"0.2rem 0.2rem 0.2rem 0.2rem #d3d3d359",
alignItems:"center",
display:"flex",
marginRight:"2rem",
},


smallBanner:{
    backgroundColor:"#CE2673",
    height:"4rem",
    width:"4rem",
    position:"absolute",
    boxShadow:"0.1rem 0.1rem 0.1rem 0.1rem #d3d3d359 -0.1rem",
    borderTopLeftRadius:"1rem",
    borderTopRightRadius:"1rem",
    borderBottomLeftRadius:"1rem",
    borderBottomRightRadius:"1rem",
    marginBottom:"14.5rem",
    marginLeft:"2rem",
    display:"flex",
},
}



const InfoBanner = () => {
  return (<div style={{marginLeft:"19rem"}}>
    <div style={{paddingTop:"5rem"}}>
    <div style={banner.bigBanner}><div style={banner.smallBanner}><img src="perks-icon.png" alt="" height={50} style={{alignSelf:"center"}}></img></div></div>
    </div>
    </div>

  )
}

export default InfoBanner