const axios = require('axios').default;

let main_url = "https://api.github.com";

async function getCommits(username, repo){

    // Make a request for a user with a given ID
    let request =  await axios.get(main_url + '/repos/'+username+'/'+repo+'/commits')
    .then(function (response) {
    // handle success
        return response.data;
    })
    .catch(function (error) {
    // handle error
        return "error"; 
    });

    return request;
}

module.exports = {
	    
    getCommits: async (req, res) => {

        let commits_data = await getCommits(req.params.username, req.params.repo);
        if(commits_data == "error"){
            return res.status(401).json({    
                data: {},
                message:"Error getting commits, please make sure user and repo are valid",
                status: "error"
            });
        }

        

        return res.status(200).json({    
            data: commits_data,
            message:"Successful request",
            status: "success"
        });

    }
}