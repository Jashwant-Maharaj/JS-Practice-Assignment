fetch('https://api.countapi.xyz/update/default/110c9625-2f1f-4d7a-a655-3376e34a8b99/?amount=1')
	.then(res => res.json())
	.then(res => {
        alert("You have visited this site " + res.value + " times");
    })