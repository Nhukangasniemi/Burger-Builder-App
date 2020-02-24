import React, { useEffect, useState } from "react";
import Modal from './../../UI/Modal/Modal';
import Auxiliary from './../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponet: any, axios: any) => {
  return (props: any) => {
    const [error, setError] = useState<any>(null)

    useEffect(() => {
      axios.interceptors.request.use((req: any) => {
        setError(null)
        return req
      })
      axios.interceptors.response.use((res:any) => res, (error: any) => {
        setError(error)
      })
    }, [])

    const errorConfirmHandler = () => {
      setError(null)
    }

    return (
        <Auxiliary>
            <Modal show={error} modalClosed={errorConfirmHandler}>
                {(error? error.message : null)}
            </Modal>
            <WrappedComponet {...props} />
        </Auxiliary>
    );
  };
};

export default withErrorHandler;
