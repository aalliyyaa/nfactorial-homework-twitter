import TweetList from "./TweetList/TweetList";
import NewTweet from "./NewTweet/NewTweet";

export default function Home(){
    return(
        <div className="w-50 mt-3 ml-3 mx-3"> 
        <h5> Home</h5>
        <NewTweet/>
        <TweetList/>
        </div>
        
    )
}