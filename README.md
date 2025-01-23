# LibEMG Dataset Page

## Adding to the Leaderboard 

1. Ensure that you are using the LibEMG splits (either using the evaluate function or your own evaluation).
2. Update the `public/datasets.json` file with your results. You can include as many datasets as you want. For classification datasets the appropriate metric is classification accuracy and for regression datasets its mean absolute error. Both can be extracted through LibEMG.
3. Make a pull request into main that we will review and merge after all appropriate information is included.

## Quick Setup

1. Ensure you have [Node.js](https://nodejs.org/) installed. Check your installation by running:

    ```bash
    node -v
    ```

2. In the project directory, install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

5. Customize the template by navigating to the `/src/components` directory. Modify texts, pictures, and other information as needed.