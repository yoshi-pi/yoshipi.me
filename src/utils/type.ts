export interface FetchedCourse {
  id: string
  title: string
  titleEnglish: string
  durationHour: number
  description: string
  descriptionEnglish: string
  image: {
    url: string
  }
  link: string
}
