export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";

export const buyItem = (feature,car) => {
    return { type: ADD_FEATURE , payload: feature , id: car }
}

export const removeFeature = (feature,car) => {
    return { type: REMOVE_FEATURE , payload: feature, id: car }
}