import { Comment, Elon, Heart, Update } from "../Images/Images";

export default function Tweet(item){
    return(
        <div className="mt-3 mx-5">
            <p className="mx-5" style={{fontSize:13,fontWeight:'600' }}>You might like! <span>See more</span></p>

       <div className="d-flex">

       <div className="d-flex">
           <img src={item.img} style={{width:50, height:50, borderRadius:50}}/>
           </div>
           <div>
           <div className="mx-3">
        <div className="d-flex" style={{gap:'10px'}}> <p>{item.authorName}</p>
        <span>{item.authoruserName}</span>
        </div>
        <div> <p>{item.update}</p></div>
       
       </div>
       
        <div className="d-flex justify-content-between" style={{width:'80%', opacity:'60%'}}>
        <div className="d-flex">
       <div style={{width:20, height:20}}>{Comment}</div> 
        <p className='px-1'>{item.reply}</p>
       </div>
       <div className="d-flex">
       <div style={{width:20, height:20}}>{Update}</div> 
        <p className='px-1'>{item.retweet}</p>
       </div>
       <div className="d-flex">
       <div style={{width:20, height:20}}>{Heart}</div> 
        <p className='px-1'>{item.like}</p>
       </div>
        </div>
        
           </div>


       </div>
        

       
        </div>

    )
}