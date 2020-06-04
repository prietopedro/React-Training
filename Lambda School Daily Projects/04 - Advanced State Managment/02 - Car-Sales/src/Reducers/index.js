import {ADD_FEATURE, REMOVE_FEATURE} from "../Actions"
const initialState = {
  Mustang:{
    id: 1,
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
},
BMW:{
  id: 2,
  additionalPrice: 0,
  car: {
    price: 70000,
    name: '2019 BMW M5',
    image:
      'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/24-bmw-m5-2018-review-static.jpg?itok=P2zksdLt',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-8 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
},
Mercedes:{
  id: 2,
  additionalPrice: 0,
  car: {
    price: 60000,
    name: '2019 Mercedes CLS',
    image:
      'https://di-uploads-pod7.dealerinspire.com/mercedesbenzofmassapequa/uploads/2017/12/CLS-Front-2.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-8 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}
}

export const reducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_FEATURE:
          let removedFeature = state[action.id].additionalFeatures.filter(feature => feature.id !== action.payload.id)
          return {
            ...state,
            [action.id]: {
              car: {...state[action.id].car , features:[...state[action.id].car.features, action.payload]},
              additionalPrice: state[action.id].additionalPrice + action.payload.price,
              additionalFeatures: removedFeature
            }
          };
          case REMOVE_FEATURE:
            let removed = state[action.id].car.features.filter(feature=>feature.id !== action.payload.id)
            return {
              ...state,
              [action.id]: {
                car: {...state[action.id].car , features: removed},
                additionalPrice: state[action.id].additionalPrice - action.payload.price,
                additionalFeatures: [...state[action.id].additionalFeatures, action.payload]
              }
            }
        default: 
            return state
    }
}