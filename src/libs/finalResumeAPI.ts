//! This is where your endpoint will go, once you have created one.

const endpoint = 'https://egarrisxn.github.io/resume-json/resume.json';

export async function getFinalResumeAPI(): Promise<ResumeData> {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data as ResumeData;
  } catch (error) {
    console.error('Failed to fetch example resume data:', error);
    throw error;
  }
}
