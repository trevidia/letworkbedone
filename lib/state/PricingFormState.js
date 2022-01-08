export function init(initial) {
    return initial
}

export const initialPricingState = {
    basic: {
        description: "",
        delivery: "",
        revision: "",
        price: "",
        attributes: []
    },
    standard: {
        description: "",
        delivery: "",
        revision: "",
        price: "",
        attributes: []
    },
    premium: {
        description: "",
        delivery: "",
        revision: "",
        price: "",
        attributes: []
    },
    extras: []
}

export const pricingActions = {
    addBasicDescription: "basic_description",
    addStandardDescription: "standard_description",
    addPremiumDescription: "premium_description",
    addBasicDelivery: "basic_delivery",
    addStandardDelivery: "standard_delivery",
    addPremiumDelivery: "premium_delivery",
    addBasicSpecs: "basic_specs",
    addAllBasicSpecs: "all_basic_specs",
    addStandardSpecs: "standard_specs",
    addPremiumSpecs: "premium_specs",
    addBasicRevision: "basic_revision",
    addStandardRevision: "standard_revision",
    addPremiumRevision: "premium_revision",
    addBasicPrice: "basic_Price",
    addStandardPrice: "standard_Price",
    addPremiumPrice: "premium_Price",
    addGigExtra: "gig_extra", removeGigExtra: "remove_extra",
    editGigExtra: "edit_extra"
}

export const pricingReducer = (state, action) => {
    const attributeChecker = (condition, returnValue1, returnValue2) => {
        if (condition) {
            return returnValue1
        } else {
            return returnValue2
        }
    }
    switch (action.type) {
        case pricingActions.addBasicDescription:
            return {...state, basic: {...state.basic, description: action.payload}}
        case pricingActions.addStandardDescription:
            return {...state, standard: {...state.standard, description: action.payload}}
        case pricingActions.addPremiumDescription:
            return {...state, premium: {...state.premium, description: action.payload}}
        case pricingActions.addBasicDelivery:
            return {...state, basic: {...state.basic, delivery: action.payload}}
        case pricingActions.addStandardDelivery:
            return {...state, standard: {...state.standard, delivery: action.payload}}
        case pricingActions.addPremiumDelivery:
            return {...state, premium: {...state.premium, delivery: action.payload}}
        case pricingActions.addAllBasicSpecs:
            return {...state, basic: {...state.basic, attributes: action.payload}}
        case pricingActions.addBasicSpecs:
            let newBasicAttributes = state.basic.attributes.filter((el) => {
                return el.attributeId !== action.payload.attributeId
            })
            let basicCondition = state.basic.attributes.find((el) => {
                return el.attributeId === action.payload.attributeId
            }) === undefined
            let returnBasicValue1 = {
                ...state,
                basic: {...state.basic, attributes: [...state.basic.attributes, action.payload]}
            }
            let returnBasicValue2 = {
                ...state,
                basic: {...state.basic, attributes: [...newBasicAttributes, action.payload]}
            }
            return attributeChecker(basicCondition, returnBasicValue1, returnBasicValue2)
        case pricingActions.addStandardSpecs:
            let newStandardAttributes = state.standard.attributes.filter((el) => {
                return el.attributeId !== action.payload.attributeId
            })
            let standardCondition = state.standard.attributes.find((el) => {
                return el.attributeId === action.payload.attributeId
            }) === undefined
            let returnStandardValue1 = {
                ...state,
                standard: {...state.standard, attributes: [...state.standard.attributes, action.payload]}
            }
            let returnStandardValue2 = {
                ...state,
                standard: {...state.standard, attributes: [...newStandardAttributes, action.payload]}
            }
            return attributeChecker(standardCondition, returnStandardValue1, returnStandardValue2)
        case pricingActions.addPremiumSpecs:
            let newPremiumAttributes = state.premium.attributes.filter((el) => {
                return el.attributeId !== action.payload.attributeId
            })
            let premiumCondition = state.premium.attributes.find((el) => {
                return el.attributeId === action.payload.attributeId
            }) === undefined
            let returnPremiumValue1 = {
                ...state,
                premium: {...state.premium, attributes: [...state.premium.attributes, action.payload]}
            }
            let returnPremiumValue2 = {
                ...state,
                premium: {...state.premium, attributes: [...newPremiumAttributes, action.payload]}
            }
            return attributeChecker(premiumCondition, returnPremiumValue1, returnPremiumValue2)
        case pricingActions.addBasicRevision:
            return {...state, basic: {...state.basic, revision: action.payload}}
        case pricingActions.addStandardRevision:
            return {...state, standard: {...state.standard, revision: action.payload}}
        case pricingActions.addPremiumRevision:
            return {...state, premium: {...state.premium, revision: action.payload}}
        case pricingActions.addBasicPrice:
            return {...state, basic: {...state.basic, price: action.payload}}
        case pricingActions.addStandardPrice:
            return {...state, standard: {...state.standard, price: action.payload}}
        case pricingActions.addPremiumPrice:
            return {...state, premium: {...state.premium, price: action.payload}}
        case pricingActions.addGigExtra:
            let gigExtras = state.extras.filter((el) => {
                return el.title !== action.payload.title
            })
            let extraCondition = state.extras.find((el) => {
                return el.title === action.payload.title
            }) === undefined
            let extra = state.extras.find((el) => {
                return el.title === action.payload.title
            })
            console.log(extra, 'extra')
            console.log(action.payload, 'payload')
            console.log({...extra, ...action.payload}, 'final')
            let gigExtraValue1 = {...state, extras: [...state.extras, {...action.payload}]}
            let gigExtraValue2 = {...state, extras: [...gigExtras, {...extra, ...action.payload}]}
            return attributeChecker(extraCondition, gigExtraValue1, gigExtraValue2)
        case pricingActions.removeGigExtra:
            if (state.extras.length !== 0) {
                return {...state, extras: state.extras.filter(el => el.title !== action.payload)}
            } else {
                return state
            }
        case pricingActions.editGigExtra:
            let currentExtra = state.extras.find((extra) => extra.title === action.payload.pastTitle)
            let otherExtras = state.extras.filter((extra) => extra.title !== action.payload.pastTitle)
            let newExtra = {
                title: action.payload.newTitle,
                price: action.payload.price,
                custom: "true",
                additionalDays: "0"
            }
            return {...state, extras: [...otherExtras, newExtra]}
    }
}
