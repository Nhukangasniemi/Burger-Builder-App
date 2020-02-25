import React, { useEffect, useState } from "react";
import Modal from "./../../UI/Modal/Modal";
import Auxiliary from "./../Auxiliary/Auxiliary";

const withErrorHandler = (WrappedComponent: any, axios: any) => {
  return (props: any) => {
    const [error, setError] = useState<any>(null);
    let reqInterceptor: any;
    let resInterceptor: any;

    useEffect(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      reqInterceptor = axios.interceptors.request.use((req: any) => {
        setError(null);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      resInterceptor = axios.interceptors.response.use(
        (res: any) => res,
        (error: any) => {
          setError(error);
        }
      );
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      }; 
    }, []);

    const errorConfirmHandler = () => {
      setError(null);
    };

    return (
      <Auxiliary>
        <Modal show={error} modalClosed={errorConfirmHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxiliary>
    );
  };
};

export default withErrorHandler;
