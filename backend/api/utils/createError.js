const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
  //d
    return err;
  };
  
  export default createError;