
module.exports = {
	    
    getCommits: async (req, res) => {
        
        console.log(req.params.username);
        console.log(req.params.repo);

        res.status(200).json({    
            data: "",
            message:"Successful request",
            status: "success"
        });

    }
}