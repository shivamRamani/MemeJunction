import * as api from '../api/index'
import { notify } from '../components/Toast/Toast';

export const signin =(formData,navigate) => async(dispatch) =>{
    try {
        const { data } = await api.signin(formData);
        const action = {type: 'AUTH',data};
        dispatch(action);
        navigate("/");
        notify.success('Logged In');
    } catch (error) {
        let massage=error.response.data.massage;
        
        if(massage){
            notify.error(massage);
        }
        else notify.error("Something went wrong");
    }
}

export const signup =(formData,navigate) => async(dispatch) =>{

    try {
        const { data } = await api.signup(formData);
        notify.success('Logged In');
        const action = {type: 'AUTH',data};
        dispatch(action);
        navigate("/");
    } catch (error) {
        let massage=error.response.data.massage;
        
        if(massage){
            notify.error(massage);
        }
        else notify.error("Something went wrong");
        
    }
}