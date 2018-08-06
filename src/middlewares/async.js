export default ({dispatch}) => (next) => (action) => {
    // determ if the action has promise on payload
    // if it does wai for resolving
    // if it does not , then send 
    if(!action.payload || !action.payload.then) {
        return next(action);
    }

    // there is a promise in paload, we wait for the promise to resolve(get its data)
    // and create a new action with that data and dispatch it with only data as a payload:
    // waiting:
    action.payload.then((response) => {
         const newAction = { ...action, payload: response}
         dispatch(newAction);
    });
}
