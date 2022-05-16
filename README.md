![](https://img.shields.io/badge/Microverse-blueviolet) 

# Microverse Staff Api

> Api for some microverse staff members

## Built With

- Express
- NodeJs
- MongoDB (Mongoose)
- JavaScript

## Getting Started

## Base URL

[https://microverse-staff.herokuapp.com/api/v1/](https://microverse-staff.herokuapp.com/api/v1/)

### Endpoints
/staff/all

Allowed actions:

- **Get** to get all available staff list

Parameters:

- No parameters required

Return value success : json with all available staff

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

Return value error : json with error message 

```
        {
          status: 404,
          errors: { msg: "No Result Found" },
        }
```

### Install

No need to install. Open the index.html file with a browser.

### Usage

You can navigate through the navigation bar to see the different pages.

### Run tests

You can use npm test to run all the tests

### Deployment

You can check the Github Pages link.

## Authors

👤 **Author**

- GitHub: [@ichala](https://github.com/ichala/)
- LinkedIn: [alijendoubi](https://www.linkedin.com/in/alijendoubi/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

-Thank you to Microverse Inc.

## 📝 License

This project is [MIT](./MIT.md) licensed.
