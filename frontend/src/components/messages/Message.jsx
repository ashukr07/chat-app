
const Message = () => {
  return (
    <div className="chat chat-end"> 
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img 
                    alt="Chat Bubble component"
                    src = ""
                />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">It was said that you would, destroy the Sith, not join them.</div>
        <div className="chat-footer opacity-50 text-xs gap-1">12:42</div>
    </div>
  )
}

export default Message