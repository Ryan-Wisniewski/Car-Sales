//actions for reducers here
export const addFeature = () => {
    console.log('action create was invoked')
    return { type: 'ADD_FEATURE' }
}

export const removeFeature = () => {
    console.log('action remove was invoked')
    return { type: 'REMOVE_FEATURE' }
}