import Mock from 'mockjs';
Mock.mock('/api/users', 'get', {
    code: '0',
    msg: 'success',
    'list|5': [{ name: '@name', age: '@integer(18, 25)'}]
})
