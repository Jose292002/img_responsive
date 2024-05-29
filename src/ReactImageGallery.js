import React, {useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const images = [
    "https://picsum.photos/2000/2000",
    "https://picsum.photos/3000/2000",
    "https://picsum.photos/2000/1500",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1500/1000",
]
const ReactImageGallery = () =>{

    const[data, setData] = useState({img:'', i:0})

    const viewImage = (img, i) => {
       setData({img, i})
    }

    const imgAction = (action) => {
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i + 1});
        }
        if(action === 'previous-img'){
            setData({img: images[i - 1], i: i - 1});
        }
        if(!action){
            setData({img: '', i: 0});
        }
    }
    return(
        <>
            {data.img &&
                < div style={{
                    width:'100%',
                    height:'100vh',
                    background:'black',
                    position:'fixed',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    overflow:'hidden',
                }}>
                    <button onClick={() =>imgAction()} style={{position:'absolute', top:'10px', right:'10px',
                         backgroundColor:'#BF4040',
                         width:'40px', 
                         height:'40px' }}>X</button>
                    <button onClick={() => imgAction('previous-img')} style={{borderRadius:'8px', 
                        backgroundColor:'#FCCB00',
                         width:'90px',
                         height:'50px' }}>PREVIOUS</button>
                     <img src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}}/>
                     <button onClick={() => imgAction('next-img')} style={{borderRadius:'8px', 
                        backgroundColor:'#1273DE', 
                        width:'90px', 
                        height:'50px'}}>NEXT</button>
                </div>
                
            }
                <div style={{padding:'10px'}}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                    >
                    <Masonry gutter='20px'>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{width: "100%", display: "block", cursor:'pointer'}}
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>            
        </>
    );
};

export default ReactImageGallery;