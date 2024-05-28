


export const home=async(req,res,next)=>{
    try {
        res.status(200).json({message:"Hello World..!!"});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:"Internal Server Error..!!"});
    }
}