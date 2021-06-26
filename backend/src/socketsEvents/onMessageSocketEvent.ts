async function onMessageSocketEvent (socket: Socket, data: Message) {
    if(data.to !== "school"){
        socket.emit("message-error", {"message": "The message target is invalid."});
        return;
    }

    if(typeof data.id !== "number"){
        socket.emit("message-error", {"message": "The message target id is invalid."});
        return;
    }

    if(!await getMemberBySchoolIdAndUserId(data.id, socket.userId)){
        socket.emit("message-error", {"message": "You are not in this school."});
        return;
    }

    if(typeof data.message !== "string"){
        socket.emit("message-error", {"message": "The message content is invalid."});
        return;
    }

    const user = await getUserById(socket.userId) as DatabaseUserRow;
    const result = {
        "to": data.to,
        "id": data.id,
        "firstName": user.first_name,
        "lastName": user.last_name,
        "message": data.message
    };

    io.to(data.to + "-" + data.id).emit("message", result);
}