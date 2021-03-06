export const actionType = {
    INFO_COMPANY: "INFO_COMPANY",
    DEFAULT:'DEFAULT',
    INFO_DASHBOARD:'INFO_DASHBOARD',
    INFO_USERS: 'INFO_USERS',
    INFO_REPORTS: 'INFO_REPORTS',
    FILTER:'FILTER'

};

const defaultState = {
    infoCompany: {
        _id:"",
        name:"",
        ownerEmail:"",
        ownerPassword:"",
        description:"",
        logo:"",
        imageQuality:"",
        orderValue:0,
        active: null,
        createAt:"",
        language:"",
        totalSpace:0,
        useSpace:0,
    },
    infoDashboard:{
        userCount:0,
        reportCount:0,
        lastFiveReports:[],
    },
    infoUsers:[],
    infoReports:[],
    filter:[],
};

export default function Info(state = defaultState, action) {
    switch (action.type) {
        case "INFO_COMPANY":
            return {...state, infoCompany: action.payload};
            break;
        case "DEFAULT":
            return defaultState;
            break;
        case "INFO_DASHBOARD":
            return {...state, infoDashboard: action.payload};
            break;
        case "INFO_USERS":
            return {...state, infoUsers: action.payload};
            break;
        case "INFO_REPORTS":
            return {...state, infoReports: action.payload};
            break;
        case "FILTER":
            return {...state, filter: action.payload};
            break;
        default:
            return state;
    }
}