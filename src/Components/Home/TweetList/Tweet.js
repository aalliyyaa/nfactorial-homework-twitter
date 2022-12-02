import { Comment, DELETE, Elon, Heart, SHARE, Update } from "../Images/Images";

export default function Tweet({tweet,deleteTweet}){

    return(
        <div className="mt-3 mx-5">
            <p className="mx-5" style={{fontSize:12,fontWeight:'600' }}>You might like! 
            <span style={{color:'#1D9BF0'}}>See more</span>
            {tweet.minutes? <p>{tweet.minutes}</p>: <p>Long time ago </p>}
            </p>

       <div className="d-flex">

       <div className="d-flex">
           <img src={tweet.img} style={{width:50, height:50, borderRadius:50}}/>
           </div>
           <div className="w-100">
           <div className="mx-3">
        <div className="d-flex" style={{gap:'10px'}}> <p>{tweet.authorName}</p>
        <span>{tweet.authoruserName}</span>
        </div>
        <div> <p>{tweet.update}</p></div>
        
       
       </div>

      

       
       
        <div className="d-flex justify-content-between" style={{width:'80%', opacity:'60%'}}>
        <div className="d-flex">
       <div style={{width:20, height:20}}>{Comment}</div> 
        <p className='px-1'>{tweet.reply}</p>
       </div>
       <div className="d-flex">
       <div style={{width:20, height:20}}>{Update}</div> 
        <p className='px-1'>{tweet.retweet}</p>
       </div>
       <div className="d-flex">
       <div style={{width:20, height:20}}>{Heart}</div> 
        <p className='px-1'>{tweet.like}</p>
       </div>
       <div className='d-flex'>
                        <div style={{width:20, height:20}}>{SHARE} </div>
                    </div>
        </div>
        
           </div>

           <div className="d-flex justify-content-center">
            <button onClick={()=>deleteTweet(tweet.id)} style={{width: 35, height: 35, border:'none', backgroundColor:'transparent'}}>
                    {DELETE}
                </button>
                </div>

            
       </div>
        

       
        </div>

    )
}