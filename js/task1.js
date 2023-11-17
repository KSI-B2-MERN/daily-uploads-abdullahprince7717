//Digital Clock - Unsuccessful Attempt

// clockPromise = () => {
//     return new Promise(function (resolve) {
clockPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let date = new Date().toLocaleTimeString();
        let time = date
        resolve(time);
    }, 1000);
    // let date = new Date().toLocaleTimeString();
    // let time = date
    // resolve(time)
});

const clock = async () => {
    while (true) {
        try {
            const time = await clockPromise;
            console.log(time);
        } catch (err) {
            console.log(err);
        }
    }
}

clock();
