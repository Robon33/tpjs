/**
 * Créez une fonction asynchrone qui attend 2 seconde
 *
 * utilisez new Promise
 */

 const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };
  sleep();
  
  module.exports = { sleep };