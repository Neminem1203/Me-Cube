import * as SubscriptionAPIUtil from "../util/subscription_util";
import { loginUser } from "./users_actions";
import { receiveUserError } from "./modal_actions";

export const newSubscription = subscription => dispatch => {
    return SubscriptionAPIUtil.createSubscription(subscription).then(
        user => dispatch(loginUser(user)), 
        error => dispatch(receiveUserError(error.responseJSON))
    )
}

export const removeSubscription = subscription => dispatch => {
    return SubscriptionAPIUtil.deleteSubscription(subscription).then(
        user => dispatch(loginUser(user)),
        error => dispatch(receiveUserError(error.responseJSON))
    )
}