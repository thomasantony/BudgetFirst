# budget-app

My prototype for the budget app.

To run the prototype UI without packaging into an app. First run

    npm install

Then run the following commands in separate terminals

    npm run hot-server
    npm run start-hot

The development build allows hot module replacement so that you can see changes updated without having to
refresh the page.

To build the app:

    npm install  
    npm run build  
    npm run package  

You can package the app for all 3 platforms (win/osx/linux) by running:

    npm run package-all

There are also some react-redux actions and reducers I have implemented which will be used to make the prototype functional. I have also written some tests for these reducers that can be run using:

    npm run test
