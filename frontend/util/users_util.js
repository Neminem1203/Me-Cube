export const receiveUsers = userList => {
    return $.ajax({
        method: "GET",
        url: "/api/users",
        data: {user_list: userList}
    });
}
export const receiveUser = id => {
    return $.ajax({
        method:"GET",
        url: `/api/users/${id}`
    });
}

export const createUser = user => {
    return $.ajax({
        method: "POST",
        url: '/api/users',
        data: {user}
    });
}

export const login = user => {
    return $.ajax({
        method: "POST",
        url: '/api/session',
        data: user
    });
}

export const logout = () =>{
    return $.ajax({
        method: "DELETE",
        url: '/api/session/'
    });
}

export const updateUser = user =>{
    return $ajax({
        method: "PATCH",
        url: `api/user/${user.id}`,
        data: user,
        contentType: false,
        processData: false
    })
}