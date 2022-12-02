import React from "react";
import TweetList from "./TweetList/TweetList";
import NewTweet from "./NewTweet/NewTweet";
import { Dog, Elon, King } from "./Images/Images";
import Search from "./Search";


class Home extends React.Component{
    constructor(){
        super();
        this.state={
            content:'',
            text:'',

            tweets : [
                {   
                    id:0,
                    authorName: 'Elon Musk',
                    authoruserName: '@elonmusk',
                    img: Elon,
                    update:'Tesla team just completed a 500 mile drive with a Tesla Semi weighing in at 81,000 lbs!',
                    reply:'234K',
                    retweet:'228K',
                    like:'347K',
                    topic:'Tesla'
                },
                {
                    id:1,
                    authorName: 'Stephen King',
                    authoruserName: '@StephenKing',
                    img: King,
                    update:'I think Elon Musk is a visionary. Almost singlehandedly, he’s changed the way Americans think about automobiles. I have a Tesla and love it. That said, he’s been a terrible fit for Twitter. He appears to be making it up as he goes along.',
                    reply:'234K',
                    retweet:'228K',
                    like:'347K',
                    topic: 'Books'
                }
            ],

            filteredTweets:[
                {   
                    id:0,
                    authorName: 'Elon Musk',
                    authoruserName: '@elonmusk',
                    img: Elon,
                    update:'Tesla team just completed a 500 mile drive with a Tesla Semi weighing in at 81,000 lbs!',
                    reply:'234K',
                    retweet:'228K',
                    like:'347K',
                    topic:'Tesla'
                },
                {
                    id:1,
                    authorName: 'Stephen King',
                    authoruserName: '@StephenKing',
                    img: King,
                    update:'I think Elon Musk is a visionary. Almost singlehandedly, he’s changed the way Americans think about automobiles. I have a Tesla and love it. That said, he’s been a terrible fit for Twitter. He appears to be making it up as he goes along.',
                    reply:'234K',
                    retweet:'228K',
                    like:'347K',
                    topic: 'Books'
                },

            ]

            

        }
    }

    onChangetextInput=(e)=>{
        this.setState({
            content:e.target.value
        })
    }

    onChangetextInput2=(e)=>{
        this.setState({
            text: e.target.value, 
            tweets: this.state.tweets.filter(item => item.update.includes(e.target.value))
        })
    }

    addToTweets =()=>{
        const newTweet={
            id: this.state.tweets.length-1,
            authorName: 'Suzie',
            authoruserName: '@GoldenRetriver',
            img: Dog,
            update:this.state.content,
            reply:0,
            retweet:0,
            like:0,
            minutes: '1m',
            topic:'Dogs'
        }

        this.setState({
            tweets: [...this.state.tweets,newTweet],
            content:''
        })

    }

    deleteTweet =(id)=>{
        this.setState({
            tweets: this.state.tweets.filter(item=>item.id!==id)
        })
    }

    filterTweetsByTopic=(topic)=>{
        this.setState({
            filteredTweets: this.state.tweets.filter(item => item.topic ===topic)
                })

    }

    makeSearch =() => {
        console.log(this.state.text)
        this.setState({
            tweets: this.state.tweets.filter(item => item.update.includes(this.state.text))
        })

    }


    render(){
       const {tweets, content, text}=this.state;

    
    return(
        <div className="d-flex">
        <div className="w-30 mt-3 ml-3 mx-3"> 
        <h5> Home</h5>
        <NewTweet content={content} onChangetextInput={this.onChangetextInput} onTweet={this.addToTweets}/>
        <TweetList tweets={tweets} deleteTweet={this.deleteTweet}/>
        {/* <div>
            <button onClick={()=>this.filterTweetsByTopic('Tesla')}> Tesla</button>
            <button onClick={()=>this.filterTweetsByTopic('Books')}> Books</button>
            <button onClick={()=>this.filterTweetsByTopic('Dogs')}> Dogs</button>


        </div>
          */}

          </div>
          <Search text={text} onChangetextInput2={this.onChangetextInput2} makeSearch={this.makeSearch}/>
        
        </div>
        
    )
}
}

export default Home;