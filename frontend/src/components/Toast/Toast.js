
import React, { memo } from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const notify={

    success(massage){
        toast.success(massage);
    },
    error(massage){
        toast.error(massage);
    },
    warning(massage){
        toast.warning(massage);
    }

}

const Toast = ()=> {

  return (
    <>
        <ToastContainer />
    </>
  )
}

export default Toast