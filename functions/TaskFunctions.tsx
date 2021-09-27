interface arrElement {
  title: string;
  text: string;
  isDone: boolean;
  textExpanded: boolean;
}

const addTask = (task: arrElement, setter: (prev: any) => void) => {
  setter((prev: arrElement[]) => [...prev, task]);
};

const removeTask = (
  taskId: number,
  fullArr: arrElement[],
  setter: (arr: arrElement[]) => void
) => {
  const newArray = fullArr.filter((el, i) => i !== taskId);
  setter(newArray);
};

export { addTask, removeTask };
