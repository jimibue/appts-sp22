// a list needs two things
// 1. a list of item (data)
// 2. it needs to be told how to render data (how it should look)

const List = ({data, renderItem, header})=>{

    const renderList =()=>{
     
        if(!data){
            // break the app...
            throw 'data prop required'
        }

        // default if we are not told how to renderData
        // stringify it
        if(!renderItem){
           return JSON.stringify(data)
        }
        // here we are told so just map over data and pass renderData
        // list data => jsx using map
        // map wants a fucntion to tell how to change each thing in array
        return data.map(renderItem)
    }
    return (
        <div>
            {header && <h1>{header}</h1>}
            {renderList()}
        </div>
    )

}
export default List