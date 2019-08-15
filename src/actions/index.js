//actions for reducers here
export const addFeature = (price) => {
    console.log('action create was invoked', price)
    return { 
        type: 'ADD_FEATURE',
        payload: price
    }
}

export const removeFeature = () => {
    console.log('action remove was invoked')
    return { type: 'REMOVE_FEATURE' }
}