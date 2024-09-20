const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };
  //dd
  export default getCurrentUser