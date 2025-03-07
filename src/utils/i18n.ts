import type { FetchedCourse } from './type'
export function getLocalizedCourses(lang: 'ja' | 'en', fetchedCourses?: FetchedCourse[]) {
  const courses = {
    en: {
      title: 'Udemy Courses',
      list: fetchedCourses?.map((fetchedCourse) => {
        console.log(fetchedCourse.titleEnglish)
        return {
          id: fetchedCourse.id,
          title: fetchedCourse.titleEnglish,
          durationHour: `${fetchedCourse.durationHour} hours`,
          description: fetchedCourse.descriptionEnglish,
          image: {
            url: fetchedCourse.image.url,
          },
          link: fetchedCourse.link,
        }
      }),
    },
    ja: {
      title: 'Udemyコース一覧',
      list: fetchedCourses?.map((fetchedCourse) => {
        return {
          id: fetchedCourse.id,
          title: fetchedCourse.title,
          durationHour: `${fetchedCourse.durationHour} 時間`,
          description: fetchedCourse.description,
          image: {
            url: fetchedCourse.image.url,
          },
          link: fetchedCourse.link,
        }
      }),
    },
  }
  return courses[lang]
}
