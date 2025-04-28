//! Once you are finished using the example resume, you may delete this.

import exampleData from '../../public/data/example.json';

const remoteEndpoint =
  process.env.NEXT_PUBLIC_RESUME_API_URL ||
  'https://egarrisxn.github.io/resume-json/resume.json';

export async function getExampleAPI(): Promise<{ resumeData: ResumeData }> {
  if (process.env.NEXT_PUBLIC_USE_LOCAL_DATA === 'true') {
    console.log('Using local example data');
    return { resumeData: exampleData as ResumeData };
  } else {
    console.log('Fetching example data from:', remoteEndpoint);
    try {
      const res = await fetch(remoteEndpoint);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch example resume data:', error);
      throw error;
    }
  }
}
