import { Elon, King } from "../Images/Images"
import Tweet from "./Tweet"

export default function TweetList({tweets, deleteTweet}){
    // const tweets = [
    //     {
    //         authorName: 'Elon Musk',
    //         authoruserName: '@elonmusk',
    //         img: Elon,
    //         update:'Tesla team just completed a 500 mile drive with a Tesla Semi weighing in at 81,000 lbs!',
    //         reply:'234K',
    //         retweet:'228K',
    //         like:'347K'
    //     },
    //     {
    //         authorName: 'Stephen King',
    //         authoruserName: '@StephenKing',
    //         img: King,
    //         update:'I think Elon Musk is a visionary. Almost singlehandedly, he’s changed the way Americans think about automobiles. I have a Tesla and love it. That said, he’s been a terrible fit for Twitter. He appears to be making it up as he goes along.',
    //         reply:'234K',
    //         retweet:'228K',
    //         like:'347K'
    //     },
    // ]
    return tweets.map((tweet)=><Tweet tweet = {tweet} key={tweet.id} deleteTweet={deleteTweet}/>
    )
}