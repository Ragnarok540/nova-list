export interface Task {
  code: number,
  name: string,
  description: string,
  deadline_date: string,
  deadline_time: string,
  urgent: string,
  important: string,
  task_state: number,
  estimate: number,
  unit: number
}
