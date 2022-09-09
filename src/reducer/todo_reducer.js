const initState = {
  todo: [],
};

const todoreducer = (state = initState, action) => {
  if (action.type === "ADD_TODO") {
    let task = [action.a[0], action.a[1].title, action.a[1].Discription];
    let a = state.todo.filter((todo) => {
      return todo[0] === task[0];
    });
    if (a[0] === undefined) {
      console.log("mill gya");
      state.todo.push(task);
    }
    // let task = [action.todo[0], action.todo[1]];
    //state.todo.push(task);
    //console.log(state);
    return { ...state };
  }

  if (action.type === "Fetch") {
    // console.log(action.a[0], action.a[1].title,action.a[1].Discription);
    let task = [action.a[0], action.a[1].title, action.a[1].Discription];
    state.todo.push(task);
    return { ...state };
  }
  if (action.type === "Delete") {
    // console.log(action.a[0], action.a[1].title,action.a[1].Discription);

    let task = state.todo.filter((todo) => {
      return todo[0] !== action.id;
    });

    state.todo = task;
    return { ...state };
  }

  if (action.type === "Edit") {
    // console.log(action.a[0], action.a[1].title,action.a[1].Discription);

    let task = state.todo.filter((todo) => {
      return todo[0] === action.task[0];
    });
console.log(state.todo)
    let a = state.todo.indexOf(task)
    console.log(a)
    task[0][1] = action.task[1]
    task[0][2] = action.task[2]
    console.log(task)
    
    return { ...state };
  }
  if (action.type === "logout") {
    let task = []
    state.todo = task;
       return { ...state };
     }

  return state;
};

export default todoreducer;
