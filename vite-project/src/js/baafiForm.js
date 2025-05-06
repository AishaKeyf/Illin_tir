export const initialState = {
    magac: '',
    dada: '',
    jinsi: '',
    halkee: '',
    xilligii: '',
    sharraxaad: ''
}


export const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.feild]: action.value }
    }
}