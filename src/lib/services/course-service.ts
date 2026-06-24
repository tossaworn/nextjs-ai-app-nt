export type Course = {
  title: string;
  picture: string;
  detail: string;
};

type CourseResponse = {
  data: Course[];
};

export async function getCourses(): Promise<Course[]> {
  const response = await fetch('https://api.codingthailand.com/api/course', {
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch courses: ${response.status}`);
  }

  const json: CourseResponse = await response.json();
  return json.data;
}
