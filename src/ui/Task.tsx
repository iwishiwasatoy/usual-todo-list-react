export default function Task({
	id,
	task,
	isDone,
	description,
}: { id: string; task: string; isDone: boolean; description }) {
	return <div>{isDone.valueOf}</div>;
}
