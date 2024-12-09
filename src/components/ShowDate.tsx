
type Props = {
    timeStamp: string
}

const ShowDate = ({timeStamp}: Props) => {
    const date = new Date(timeStamp);
    const currentDate = date.toLocaleDateString('en-GB',{
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })

    const curentTime = date.toLocaleTimeString('en-GB',{
        hour:'2-digit',
        minute: '2-digit',
        hour12: true
    })
  return (
    <div>
        <p>{currentDate}</p>
        <p>{curentTime}</p>
    </div>
  )
}

export default ShowDate