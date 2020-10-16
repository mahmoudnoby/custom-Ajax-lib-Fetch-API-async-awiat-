
/** 
 * Custom Easy HTTP Library 
 * Library for making http requests using fetch api and (async/await)
 * @version 3.0.0
 * @author Mahmoud Noby
 * @license MIT
 * 
 * 
*/

class EasyHttp {
  // Get Data
 async get(url) {   
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }

  //Post Data
 async post(url, data) {
    const response = await fetch(url, {
      method:'POST',
      headers: {"Content-type": "application/json"
        },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  }

    //Post Data
   async put(url, data) {
     const response = await fetch( url, 
      {
        method:'PUT',
        headers: {
          "Content-type": "application/json"
        },
          body: JSON.stringify(data)
        });
     const responseData = await response.json();
     return responseData;   
    }

  // Get Data
 async delete(url) {   
    const response = await fetch( url, 
      {
        method:'DELETE',
        headers: {
          "Content-type": "application/json"
        }
        });
     const responseData = await  'Post Deleted...';
     return responseData;  
  }

}