import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
export const sendMessage = async (req,res) =>{
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        //this is not gonna work because we haven't defined userId in the request 
        const senderId = req.user._id;
        //this is finding the conversation where the participants has both senderId and receiverId
        let conversation = await Conversation.findOne({
            participants: { $all:[senderId,receiverId]},
        });
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,receiverId,message,
        })
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        //SOCKET IO FUNCTIONALITY WILL GO HERE



        // await conversation.save();
        // await newMessage.save();

        //this will run in parallel
        await Promise.all([conversation.save(),newMessage.save()])
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ",error.message)
        res.status(500).json({error:"Internal server errror"});
    }
}

export const getMessages = async(req,res) =>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");
        //instead of getting reference now we are getting the object iteself
        if(!conversation) return res.status(200).json([]);
        const messages = conversation.messages;
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessage controller: ",error.message)
        res.status(500).json({error:"Internal server errror"});
    }
}