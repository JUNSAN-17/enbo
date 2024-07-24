import Mock from 'mockjs';

const data = Mock.mock({
    'list|4': [{
        'id|+1': 1,
        'name': '@cname',
        "number|1-36": 2,
        'time': '@datetime',
    }]
})

Mock.mock('/api/data', 'get', data)

Mock.mock('/api/data/Add', 'post', (req) => {
    const newData = JSON.parse(req.body);
    console.log(req.body);
    newData.id = users.length + 1;
    data.push(newData);
    return {
        code: 200,
        data: newData,
        message: 'User added successfully'
    };
})

// Mock.mock('/api/data/delete', 'post', (req) => {
//     const { id } = JSON.parse(req.body);
//     const newData = users.filter(user => user.id !== id);
//     return{
//         newData
//     }
// })


// Mock.mock('/api/data/update', 'post', (req) => {
//     const { id, name, age } = JSON.parse(req.body); 
//     let user = users.find(user => user.id === id);
//     if (user) {
//         user.name = name;
//         user.age = age;
//         return {
//             code: 200,
//             data: user,
//             message: 'User updated successfully'
//         };
//     } else {
//         return {
//             code: 404,
//             message: 'User not found'
//         };
//     }
// });

