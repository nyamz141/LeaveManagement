## Backend API Reference

### Testing with Postman

#### To create a new request
```http
  POST http://172.105.181.131:9000/requests/create
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `employeeName` | `string` | Any employee name |
| `employeeId` | `string` | Any employee ID |
| `leaveReason` | `string` | Any Reason |
| `daysRequested` | `string` | Days being requested |

```
{
  "employeeName":"Name Lastname",
  "employeeId":"1234567890",
  "leaveReason":"I want to go bird watching",
  "daysRequested":"10"
}
```
Expected Response
```
{
    "result": {
        "id": "f4d176ed-0c36-4572-8165-b0bebba3dc84",
        "requestStatus": "Pending",
        "requestDate": "Monday, 13 March 2023 10:50:06"
    },
    "id": 3,
    "exception": null,
    "status": 5,
    "isCanceled": false,
    "isCompleted": true,
    "isCompletedSuccessfully": true,
    "creationOptions": 0,
    "asyncState": null,
    "isFaulted": false
}
```
### To update an existing request
 Requires a valid request ID
```http
  POST http://172.105.181.131:9000/requests/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `requestId`      | `string` | A valid request id alrady in the system |
| `leaveReason`      | `string` | Updated leave reason |
| `daysRequested`      | `string` | Updated number of days |

```
  {
    "requestId":"b9e65c53-129c-447c-99a5-9c2d44331a73",
    "leaveReason": "Swimming in a river",
    "daysRequested":"15"
  }
```
Expected Response. is a request with ID similar to update request
```
{
    "result": {
        "id": "b9e65c53-129c-447c-99a5-9c2d44331a73",
        "requestStatus": "Pending",
        "requestDate": "Monday, 13 March 2023 10:50:06"
    },
    "id": 7,
    "exception": null,
    "status": 5,
    "isCanceled": false,
    "isCompleted": true,
    "isCompletedSuccessfully": true,
    "creationOptions": 0,
    "asyncState": null,
    "isFaulted": false
}
```

### To retrieve all leave requests
```http
  POST http://172.105.181.131:9000/requests/retrieve
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `employeeId`      | `string` | A valid employee id |

```
  {
    "employeeId":"1234567890"
  }
```
Expected Response is an array of all requests made under that ID

### To delete a leave request

```http
  POST http://172.105.181.131:9000/requests/Delete
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `employeeId`      | `string` | A valid request id |

```
  {
    "requestId":"9986a302-ae8d-4058-8c70-a887e5592c0e"
  }
```
Expected Response is a string indicating request has been removed

```
Request: 9986a302-ae8d-4058-8c70-a887e5592c0e has been removed from the system
```