## Cert-Gen
Cert-Gen is an online Certificate Generator. Where users can create,view and download their certificates.

## Tech Stack
-  Frontend/Backend: Nextjs
- DB: Postgresql
- ORM: Prisma
- Genrating-pdf: pdf-lib
- Rendering-pdf: react-pdf
- UI: Tailwind, Shadcn, AceternityUI

### Local Setup
- Clone the repo
- Install the dependencies ```yarn```
- Copy the .env.example file to .env ```cp .env.example .env```
- Open the .env file and update the DATABASE_URL with your Postgresql connection string.
- Migrate the DB  ```npx prisma migrate dev```
- Run ```yarn dev``` and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Contributions
I love and welcome open source contributions, if you have any queries, concerns or enhancements which you feel elevate or bring value to the repo, kindly feel free to raise them. Your feedback is valuable and will help me to improve Cert-Gen.

To contribute, you can:

-   **Raise an issue**  : If you encounter any problems or have suggestions for improvements, please create an issue on this GitHub repository. I will review it and work together with you to find a solution.
    
-   **Submit a pull request**  : If you have a specific improvement in mind, you can fork the repository, make your changes, and submit a pull request. I will review your changes and merge them if they align with the project's goals.
    

Thank you for your support !!!