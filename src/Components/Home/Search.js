export default function Search({text, onChangetextInput2, makeSearch }){
    return(
        <div className="p-3 d-flex flex-column" style={{borderBottom:'2px solid whitesmoke'}}>
        <div>
        {/* <button onClick={makeSearch}>Search</button> */}
       <input onChange={onChangetextInput2} value={text} placeholder='   Search in Twitter' style ={{border:'none', borderRadius:'100px' ,fontSize:16, outline:'none', background:'whitesmoke'}} className='mx-3'/>
    </div>
    </div>
    )
}