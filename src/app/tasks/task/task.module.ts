 export interface Task {
  id: string;
  userid: string;
  title: string;
  summary: string;
  duedate: string;
 }
export interface NewTaskData{
    title: string;
    summary: string;
    date: string;
}