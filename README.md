# DevBuild Resume

[![devbuildresume](https://github.com/user-attachments/assets/17dbf147-47c5-4849-8756-175f683ce531)](https://devbuild-resume.vercel.app/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub repo size](https://img.shields.io/github/repo-size/egarrisxn/devbuild-resume)](https://github.com/egarrisxn/devbuild-resume)
[![GitHub last commit](https://img.shields.io/github/last-commit/egarrisxn/devbuild-resume)](https://github.com/egarrisxn/devbuild-resume/commits/main)

**DevBuild Resume** is a modern and efficient web application designed to help developers create professional resumes quickly. Built with the latest web technologies like **Next.js 15**, **React 19**, **Material-Tailwind**, **Tailwind CSS v4**, and **TypeScript**, it offers a streamlined experience for showcasing your skills and experience with a clean, developer-focused aesthetic.

## ✨ Key Features

- **Effortless Resume Creation:** Simple and intuitive process to build your resume.
- **Developer-Centric Design:** Clean and modern layout tailored for technical professionals.
- **Data-Driven Approach:** Resume content is managed through a separate JSON file for easy updates.
- **Image Flexibility:** Option to include your avatar and other images in your resume.
- **Powered by Cutting-Edge Tech:** Leverages the speed and power of Next.js and React.
- **Styled with Modern UI Libraries:** Utilizes Material-Tailwind on top of Tailwind CSS for beautiful and responsive components.
- **Type Safety with TypeScript:** Ensures code maintainability and reduces errors.
- **Easy Deployment:** Designed for seamless deployment on platforms like Vercel.

### ⚠️ Important Note on ATS Compatibility

While **DevBuild Resume** focuses on a visually appealing and developer-friendly design, please be aware that advanced styling might not be fully compatible with all Applicant Tracking Systems (ATS). For optimal ATS results, consider generating a plain text version or simplifying the design elements.

## 🛠️ Technologies Used

- **Framework:** [Next.js 15](https://nextjs.org/) - The React Framework for Production
- **UI Library:** [React 19](https://react.dev/) - A JavaScript library for building user interfaces
- **Component Library:** [Material-Tailwind](https://www.material-tailwind.com/) - Material Design UI kit for Tailwind CSS
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - A utility-first CSS framework
- **Language:** [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- **Deployment:** [Vercel](https://vercel.com/) - Platform for frontend frameworks and more

## 📂 JSON Data Management

**DevBuild Resume** adopts a flexible approach by fetching resume data from a JSON file. This allows you to update your resume content without needing to redeploy the application.

1.  **GitHub Repository:** You'll host your resume data (the `resume.json` file and an `images` folder for your avatar) in a separate GitHub repository.
2.  **`resume.json`:** This file contains all your resume information, following the structure defined in the `public/data/template.json` file of this application.
3.  **`images` Folder:** Store any images you want to include in your resume (like your avatar) in this folder within your data repository.
4.  **GitHub Pages:** You will deploy this data repository as a static site using GitHub Pages. This will give you a public URL for your data.
5.  **API Endpoint Configuration:** Update the `src/libs/resumeAPI.ts` (or similar file) in this application with the URL of your GitHub Pages deployment.

This separation of data and application makes updating your resume incredibly easy – just modify the `resume.json` file and push the changes to your data repository!

## 🚀 Deployment

This project is designed for easy deployment on [Vercel](https://vercel.com/). The platform automatically detects the Next.js project and handles the build and deployment process seamlessly.

[![Vercel](https://vercel.com/button)](https://devbuild-resume.vercel.app/)

[**Live Demo**](https://devbuild-resume.vercel.app/)

## ⚙️ How to Run Locally

Get a local copy up and running by following these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/egarrisxn/devbuild-resume.git](https://github.com/egarrisxn/devbuild-resume.git)
    cd devbuild-resume
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
4.  **Open your browser:** Navigate to `http://localhost:3000` to view the application.

## 💡 Usage

1.  **Navigate to the "Docs" Page:** Click on the "Instructions" link or go to `/info` in your local development environment or the live demo.
2.  **Follow the On-Screen Instructions:** The "Docs" page provides a step-by-step guide on how to set up your resume data using a separate GitHub repository and GitHub Pages.
3.  **Update the API Endpoint:** Once your GitHub Pages site is live, update the data endpoint in the application code as instructed on the "Docs" page.
4.  **View Your Resume:** Navigate to the "Final Resume" link or `/final-resume` to see your generated resume.

## 🤝 Contributing

We welcome contributions! If you have ideas for improvements, bug fixes, or new features, please feel free to:

1.  Fork the repository.
2.  Create a new branch for your feature or fix.
3.  Commit your changes.
4.  Push to your branch.
5.  Open a pull request.

## 💬 Feedback

Your feedback is valuable! If you encounter any issues, have suggestions, or would like to request a new feature, please [open an issue on GitHub](https://github.com/egarrisxn/devbuild-resume/issues).

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## ❓ Questions?

If you have any questions, comments, or concerns, don't hesitate to reach out:

- **GitHub:** [EGARRISXN](https://github.com/EGARRISXN)
- **Email:** egarrisxn@gmail.com

---

Thank you for using **DevBuild Resume**! We hope it helps you create a fantastic resume.
