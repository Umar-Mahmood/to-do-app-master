const initState = {
  user: ""
};

const authreducer = (state = initState, action) => {
    if (action.type === "login") {
     let mail = action.mail;
     state.user = mail
        return { ...state };
      }
      if (action.type === "logout") {
        let mail = ""
        state.user = mail
           return { ...state };
         }
        if (action.type === "set_local_user") {
          let mail = action.local_user;
          state.user = mail
             return { ...state };
           }
  return state;
};

export default authreducer;
