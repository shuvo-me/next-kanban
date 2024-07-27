export type TaskType = {
  title: string,
  description: string,
  tags: string[],
  dueDate: string,
  image?: string,
  users?: string[]
}

export type ListType = {
    title: string,
    id: string,
    tasks: Array<TaskType>
}