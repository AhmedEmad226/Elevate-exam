declare type Subject = {
  _id: string,
  name: string,
  icon: string,
  createdAt:string
}

declare type Subjects = {
  message: 'success',
  metadata: {
    currentPage:number,
    limit:number,
    numberOfPages:number
  },
  subjects: Subject[]
}