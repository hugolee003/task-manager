<!-- Back to Top Navigation Anchor -->

<a name="readme-top"></a>

<!-- Project Shields -->
<div align="left">
  


<div>
  <p align="center">
    <a href="https://github.com/hugolee003/task-manager#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://motionless-ox-zipper.cyclic.app/">Demo</a>
    ·
    <a href="https://github.com/hugolee003/task-manager/issues">Report Bug</a>
    ·
    <a href="https://github.com/hugolee/task-manager/issues">Request Feature</a>
  </p>
</div>

<!-- About the API -->

## Task Manager

&mdash; a simple task management API which i built as a take home assignment project by <a href="https://www.github.com/hugolee003">Ugochukwu</a>, a Backend Engineering student at <a href="https://altschoolafrica.com/schools/engineering">AltSchool Africa</a>.

<p align="right"><a href="#readme-top">back to top</a></p>

### Built With:

<div align="center">

![Javascript][javascript]
![Node.js][node]
![Express.js][express]
![MongoDB][mongodb]

</div>

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- Task management Requirements -->

## Requirements

<details>

<summary> <strong>Requirements for the take home project</strong> </summary>

- [x] CRUD Operations: People should be able to create, read, update, and delete tasks. Each
task should have a title and a description.

- [x] Database: Use MongoDB for data storage. You can create a simple instance on
https://www.mongodb.com/cloud/atlas/register
  
- [x] Validation: Implement validation to ensure that all task entries have the necessary fields (i.e.,
title and description).

<p align="right"><a href="#readme-top">back to top</a></p>

---

</details>

<br>

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)

#### Clone this repo

```sh
git clone https://github.com/hugolee003/task-manager.git
```

#### Install project dependencies

```sh
npm install
```

#### Update .env with [example.env](https://github.com/hugolee003/blogify/blob/main/example.env)

#### Run a development server

```sh
npm run dev
```

#### For testing, run

```sh
npm run test
```

### Models

#### Tasks

| field     | data_type     | constraints      |
| --------- | ------------- | ---------------- |
| title     | string        |     required     |
| description | string      |      required    |
| status    | string        | enum ['Todo', 'In Progress', 'Completed']|


<p align="right"><a href="#readme-top">back to top</a></p>

---

## Usage

### Base URL

- https://motionless-ox-zipper.cyclic.app/

### Creating a task

- Route: /tasks
- Method: POST

:point_down: Body

```json
{
    "title": "bimpe",
    "description": "wake up by 6:30am today",
    "status": "Completed"
}
```

:point_down: Response

```json
{
        "_id": "648d3285322a9779c4de3bc5",
        "title": "bimpe",
        "description": "wake up by 6:30am today",
        "status": "Completed",
        "createdAt": "2023-06-17T04:11:49.796Z",
        "updatedAt": "2023-06-17T04:11:49.796Z",
        "__v": 0
    }
```

<p align="left"><a href="#readme-top">back to top</a></p>

---

### Reading all tasks

- Route: /tasks
- Method: Get

:point_down: Body

```json

```

:point_down: Response

```json
[
    {
        "_id": "648cf85ef5fd11f8dbca40ce",
        "title": "Hello Wolrd",
        "description": "HOW ARE YOU",
        "status": "Todo",
        "__v": 0
    },
    {
        "_id": "648d03a7ee5745ac97f091c8",
        "title": "features",
        "description": "new features will be regularly updated to this CRUD app",
        "status": "Todo",
        "__v": 0
    },
    {
        "_id": "648d05ab3c018153d29ffcfd",
        "title": "mojo",
        "description": "wake up by 6:30am today",
        "status": "Completed",
        "__v": 0
    },
    {
        "_id": "648d05d9afe58089fedef175",
        "title": "mojo",
        "description": "wake up by 6:30am today",
        "status": "Completed",
        "createdAt": "2023-06-17T01:01:13.164Z",
        "updatedAt": "2023-06-17T01:01:13.164Z",
        "__v": 0
    },
    {
        "_id": "648d2bb1f802ad39646bd86e",
        "title": "mojo",
        "description": "wake up by 6:30am today",
        "status": "todo",
        "createdAt": "2023-06-17T03:42:41.997Z",
        "updatedAt": "2023-06-17T03:43:54.053Z",
        "__v": 0
    },
    {
        "_id": "648d2c84bcc1064268dfeaba",
        "title": "bimpe",
        "description": "wake up by 6:30am today",
        "status": "Completed",
        "createdAt": "2023-06-17T03:46:12.272Z",
        "updatedAt": "2023-06-17T03:46:12.272Z",
        "__v": 0
    },
    {
        "_id": "648d3285322a9779c4de3bc5",
        "title": "bimpe",
        "description": "wake up by 6:30am today",
        "status": "Completed",
        "createdAt": "2023-06-17T04:11:49.796Z",
        "updatedAt": "2023-06-17T04:11:49.796Z",
        "__v": 0
    }
]
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Update the task

- Route: /tasks/:id
- Method: PUT

:point_down: Body

```json
{
    "title": "Alarm",
    "description": "wake up by 7:30 instead",
    "status": "In Progress"
}
```

:point_down: Response

```json
{
    "_id": "648cf85ef5fd11f8dbca40ce",
    "title": "Alarm",
    "description": "wake up by 7:30 instead",
    "status": "In Progress",
    "__v": 0,
    "updatedAt": "2023-06-17T06:42:25.120Z"
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Delete specific tasks 

- Route: /tasks/:id
- Method: DELETE

 

<p align="right"><a href="#readme-top">back to top</a></p>

---


<!-- Contact -->

## Contact

- Twitter - [@hugo_lee003](https://twitter.com/hugo_lee003)
- email - jamesegeonu003@gmail.com

Project Link: [Task manager](https://github.com/hugolee003/task-manager)

<p align="right"><a href="#readme-top">back to top</a></p>

---


<p align="right"><a href="#readme-top">back to top</a></p>
<!-- Markdown Links & Images -->

[twitter-shield]: https://img.shields.io/badge/-@hugo_lee003-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/hugo_lee003
[twitter-url]: https://twitter.com/hugo_lee003
[javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1C
[node]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[express]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[mongodb]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
