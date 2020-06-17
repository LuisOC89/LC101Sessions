# Interview Questions and Concepts

1. What is the **client-server model**?  
The Internet uses the **client-server model**.  
A **server** is an application that provides resources---such as raw data, web pages, or images.  
A **client** is an application that requests resources from a server (like a web browser -> IE, Chrome, Safari).  

3. Most Important Protocol for Web Developers?  
A protocol is a standard for communication between computers (HTTP, TCP/IP, DNS). 
HTTP -> **_Hypertext Transfer Protocol_** -> Takes care of structure of web requests and responses.  
A client (usually a web browser) makes a request to a web server. Based on the details of the request, the server formulates and sends a response. The response is parsed and displayed by the browser.

4. **localhost** -> Used for local development  
Every server on the internet has a numerical address known as an **IP address**.    
Every computer uses the special **IP address** `127.0.0.1` to refer to itself. This often has the alias `localhost`.  

5. Web Addresses  
When a client requests a resource from a server, it does so using a **Uniform Resource Locator (URL)**. URLs are also called **web addresses**.  
Ex: 
- [https://www.launchcode.org](https://www.launchcode.org)
- [https://en.wikipedia.org/wiki/Client–server_model](https://en.wikipedia.org/wiki/Client–server_model)
- [https://duckduckgo.com/?q=javascript](https://duckduckgo.com/?q=javascript)

6. Structure of a URL:  
scheme://host:port/path?query_string  
Only scheme and host are required.  

7. The scheme  
- http (default if not indicated) -> local or in same server  
- https -> external or secure  

8. Ports (optional)   
When coding locally, you will have to assign ports to your apps.  
Your computer will have different ports available.  
Some default ports: 
80 -> Web servers
5432 -> PSQL  
6379 -> Redis  
9200 -> Elasticsearch  

9. Path  
Subaddress inside service  
Once in the store -> Where is the icecream section?  

10. Query strings  -> Usually filters -> **key/value** pairs.
`?q=launchcode&atb=v167-5__&ia=web`

11. Requests include:  
- URL  
- Method -> GET, POST, PUT, PATCH, DELETE, etc... Similar to CRUD -> Create, Read, Update, Delete  
- Headers.
- Parameters (path, query).
- Body or payload (if it applies).

12. Responses include:
- Status code of the response -> 2xx (successful), 3xx (redirection), 4xx (client error), 5xx (server error)  
- Headers.
- Response payload.

13. GET requests and searchs?  
POST when too many search fields.

14. POST with no body?  
When copying or subscribing (when adding info without passing info).  

15. REST protocol.
To learn more about requests.  

16. GET are used to get info, POST are used to submit info in a form.  

17. You can look at the requests being mad using your developer tools -> Network Tab -> Select all (not only XHR).  


