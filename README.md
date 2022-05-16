![](https://img.shields.io/badge/Microverse-blueviolet) 

# Microverse Staff Api

> Api for some microverse staff members

## Built With

- Express
- NodeJs
- MongoDB (Mongoose)
- JavaScript


## Base URL

[https://microverse-staff.herokuapp.com/api/v1/](https://microverse-staff.herokuapp.com/api/v1/)

### Endpoints
### `/staff/all`

Allowed actions:

- **Get** to get all available staff list

Parameters:

- No parameters required

Return value success : json with result array of all staff members available

```
{
    "status": 200,
    "msg": "Success",
    "result": [
        {
            "_id": "6282352e3dde6c78f8526274",
            "name": "Ariel Camus ",
            "role": "Founder & CEO",
            "bio": "Ariel Camus was born in Mendoza, Argentina, but left the country when an economic crisis occurred in 2001. For this reason, Camus’s family decided to move to Spain, where he lived in the Canary Islands for four years, until he moved to Madrid to study telecommunications engineering. In his last university years, Ariel started his first startup: TouristEye, an online platform that allowed users to evaluate, review, and plans the destinations and activities of their trip. The organization gained value thanks to the millions of downloads and constant interaction with the client until Ariel decided to sell it to Lonely Planet, an Australian company focused on travel books.",
            "image": "https://media-exp1.licdn.com/dms/image/C4E03AQFXayVCV182CQ/profile-displayphoto-shrink_800_800/0/1552471131044?e=1658361600&v=beta&t=CZRApY7ISQkz7tuOdEfl8uDEl7PWsgB_M_HUoLdENJE",
            "linkedIn": "https://www.linkedin.com/in/arielcamus/",
            "createdAt": "2022-05-16T11:27:42.376Z",
            "updatedAt": "2022-05-16T11:27:42.376Z",
            "__v": 0
        },
       ...
        {
            "_id": "6282352e3dde6c78f852627c",
            "name": "Scott Anderson",
            "role": "Program Director",
            "bio": "Inclusive leader, experienced in overseeing the development and delivery of a diverse commercial training portfolio. Excited by leadership, operational transformation for growth and change management. ",
            "image": "https://media-exp1.licdn.com/dms/image/C4E03AQFjeHADcAjPhQ/profile-displayphoto-shrink_800_800/0/1565192216537?e=1658361600&v=beta&t=Do5A2yH4ZITJTJ2yiWlfkaGNWU_82MY5mcadYEEqoIc",
            "linkedIn": "https://www.linkedin.com/in/scott-anderson-336729162/",
            "createdAt": "2022-05-16T11:27:42.377Z",
            "updatedAt": "2022-05-16T11:27:42.377Z",
            "__v": 0
        }
    ]
}
```


### `/staff/all/:id`


Allowed actions:

- **Get** to get a single staff member with a provided id

Parameters:

- :id (staff id) 

example : [https://microverse-staff.herokuapp.com/api/v1/staff/single/6282352e3dde6c78f852627c](https://microverse-staff.herokuapp.com/api/v1/staff/single/6282352e3dde6c78f852627c)

Return value success : json with a result object of the stuff member

```

{
    "status": 200,
    "msg": "Success",
    "result": {
        "_id": "6282352e3dde6c78f852627c",
        "name": "Scott Anderson",
        "role": "Program Director",
        "bio": "Inclusive leader, experienced in overseeing the development and delivery of a diverse commercial training portfolio. Excited by leadership, operational transformation for growth and change management. ",
        "image": "https://media-exp1.licdn.com/dms/image/C4E03AQFjeHADcAjPhQ/profile-displayphoto-shrink_800_800/0/1565192216537?e=1658361600&v=beta&t=Do5A2yH4ZITJTJ2yiWlfkaGNWU_82MY5mcadYEEqoIc",
        "linkedIn": "https://www.linkedin.com/in/scott-anderson-336729162/",
        "createdAt": "2022-05-16T11:27:42.377Z",
        "updatedAt": "2022-05-16T11:27:42.377Z",
        "__v": 0
    }
```

### `/staff/:limit`


Allowed actions:

- **Get** to get a single/many result depend on the provided limit

Parameters:

- :limit (max result number)

example : [https://microverse-staff.herokuapp.com/api/v1/staff/2](https://microverse-staff.herokuapp.com/api/v1/staff/2)

Return value success : json with a result array with the requested number of stuff members

```
{
    "status": 200,
    "msg": "Success",
    "result": [
        {
            "_id": "6282352e3dde6c78f8526274",
            "name": "Ariel Camus ",
            "role": "Founder & CEO",
            "bio": "Ariel Camus was born in Mendoza, Argentina, but left the country when an economic crisis occurred in 2001. For this reason, Camus’s family decided to move to Spain, where he lived in the Canary Islands for four years, until he moved to Madrid to study telecommunications engineering. In his last university years, Ariel started his first startup: TouristEye, an online platform that allowed users to evaluate, review, and plans the destinations and activities of their trip. The organization gained value thanks to the millions of downloads and constant interaction with the client until Ariel decided to sell it to Lonely Planet, an Australian company focused on travel books.",
            "image": "https://media-exp1.licdn.com/dms/image/C4E03AQFXayVCV182CQ/profile-displayphoto-shrink_800_800/0/1552471131044?e=1658361600&v=beta&t=CZRApY7ISQkz7tuOdEfl8uDEl7PWsgB_M_HUoLdENJE",
            "linkedIn": "https://www.linkedin.com/in/arielcamus/",
            "createdAt": "2022-05-16T11:27:42.376Z",
            "updatedAt": "2022-05-16T11:27:42.376Z",
            "__v": 0
        },
        {
            "_id": "6282352e3dde6c78f8526275",
            "name": "Riley Spicer",
            "role": "Product & Learning Director",
            "bio": "I'm passionate about cultivating communities where we can work together to create the world we want to live in. After attending a coding bootcamp focused on increasing gender diversity in tech in Seattle, I worked as a full stack software engineer at AWS building out web apps supporting millions of hits per months. After spending a few years solidifying my tech skills, I shifted from development to join a remote, mission driven company. Now I lead Product at Microverse, where we're building a global, multi-cultural school preparing the next wave of talent for our increasingly international, remote world. We help our students from all around the world achieve life changing career goals and help companies cultivate talent without location constraints",
            "image": "https://media-exp1.licdn.com/dms/image/C5603AQHAtlUmCTAsPA/profile-displayphoto-shrink_800_800/0/1642801688567?e=1658361600&v=beta&t=PJ6H1SzHAK2nrQcyKnGHDIgckKaLUmhMcQ_vy6etse0",
            "linkedIn": "https://www.linkedin.com/in/rileyspicer/",
            "createdAt": "2022-05-16T11:27:42.377Z",
            "updatedAt": "2022-05-16T11:27:42.377Z",
            "__v": 0
        }
    ]
}
```

## Authors

👤 **Author**

- GitHub: [@ichala](https://github.com/ichala/)
- LinkedIn: [alijendoubi](https://www.linkedin.com/in/alijendoubi/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!




