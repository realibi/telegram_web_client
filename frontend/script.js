const BACKEND_URL = "http://localhost:8080";

const getUsers = async () => {
    let settings = {
        url: BACKEND_URL + '/users',
        method: 'get'
    }

    return await $.ajax(settings);
}

const drawUsers = async () => {
    let users = await getUsers();
    let usersBlock = $("#users");
    for(let item of users) {
        usersBlock.append(
            `
                <div onclick="setUser(${item.chatId})">
                    <p>${item.fullName}</p>
                </div>
            `
        );
    }
}
drawUsers();
