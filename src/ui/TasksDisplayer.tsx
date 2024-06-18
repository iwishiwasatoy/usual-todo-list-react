import { useContext, useState, useId } from "react";
import { taskContext } from "./TaskContextProvider";
import Task from "./Task";

export default function TasksDisplayer() {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const { setTasks, tasks } = useContext(taskContext)!;
	const [inputVal, setInputval] = useState("");
	function addTask(tsk: string) {
		let nId: number;
		if (tasks.length === 0) {
			nId = 1;
		} else {
			nId = tasks.sort((a, b) => b.id - a.id)[0].id + 1;
		}
		setTasks((oldTasks) => [...oldTasks, { id: nId, title: tsk }]);
	}
	return (
		<div>
			<div>
				<input
					type="text"
					value={inputVal}
					onChange={(e) => setInputval(() => e.target.value)}
				/>
				<button onClick={() => addTask(inputVal)}>Add task</button>
				<h1>{inputVal}</h1>
			</div>
			{tasks.map(({ id, description, title, isDone }) => {
				return (
					<Task
						key={id}
						id={id}
						description={description}
						title={title}
						isDone={isDone}
					/>
				);
			})}
		</div>
	);
}
