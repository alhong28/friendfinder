
app.get("/api/friends", function(req, res) {
	res.json(friends);
});

app.post("/api/friends", function(req, res) {

	var newFriend = req.body;

	//trying to get difference between scores

	
})