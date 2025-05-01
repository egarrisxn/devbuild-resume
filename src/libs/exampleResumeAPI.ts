//! Once you are finished using the example resume, you may delete this.

import exampleData from '../../public/data/example.json';

const endpoint =
  process.env.NEXT_PUBLIC_RESUME_API_URL ||
  'https://egarrisxn.github.io/resume-json/resume.json';

export async function getExampleResumeAPI(): Promise<ResumeData> {
  if (process.env.NEXT_PUBLIC_USE_LOCAL_DATA === 'true') {
    console.log('Using local example data');
    return exampleData as ResumeData;
  } else {
    console.log('Fetching example data from:', endpoint);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      return data as ResumeData;
    } catch (error) {
      console.error('Failed to fetch example resume data:', error);
      throw error;
    }
  }
}
