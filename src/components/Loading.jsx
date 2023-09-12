const Loading = ({theme}) => {
  return (
    <div className="flex justify-center m-auto"> 
    <div className={`loading spinner-border text-${theme || "success"}`}></div> </div>
  )
}

export default Loading