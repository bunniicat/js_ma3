//Console.log out elements in JSON file

let questionTwo = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}

for (let i=0; i<questionTwo.video.length; i++) {
    for (key in questionTwo.video[i]) {
        if (questionTwo.video[i].hasOwnProperty(key)) {
            console.log(questionTwo.video[i][key]);
        }
    }
}
