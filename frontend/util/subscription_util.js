export const createSubscription = data => {
    return $.ajax({
        method: "POST",
        url: `/api/subscription`,
        data: data
    });
}

export const deleteSubscription = data => {
    return $.ajax({
        method: "DELETE",
        url: `/api/subscription`,
        data: data
    });
}