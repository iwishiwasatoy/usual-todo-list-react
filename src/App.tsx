import Task from "./ui/Task";
import TaskContextProvider from "./ui/TaskContextProvider";
import { useContext } from "react";
import { taskContext } from "./ui/TaskContextProvider";
import TasksDisplayer from "./ui/TasksDisplayer";
function App() {
	return (
		<TaskContextProvider>
			<TasksDisplayer />
			{/* <div className="maincontainer min-h-screen border-4 border-dotted border-black">
				...
			</div> */}
		</TaskContextProvider>
	);
}

export default App;
