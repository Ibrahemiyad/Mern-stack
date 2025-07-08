import React, {useState} from "react";

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Promise resolved successfully!");
    }
    else {
        reject("Promise rejected!");
    }
});
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
