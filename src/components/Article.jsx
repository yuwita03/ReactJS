function Article (props){
    return(
        <>
        <div>{props.tittle}</div>
        <small>Date: {props.date}, tags: {props.tags.join(', ')}</small>
        </>
    ) 
    

}

export default Article;