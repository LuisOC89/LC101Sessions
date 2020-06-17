# POST Form Submission
## Form Submission Using POST
Instead of using GET and query parameters to submit form data, we can use POST. To submit a form using a POST request, set the form's `method` attribute to `"POST"`. Form data submitted via POST will be submitted in the body of the HTTP request. Data submitted by GET requests is less secure than POST because GET request URLs and the query parameters are cached and logged, possibly leaking sensitive data.

>Example  
Form with `method="POST"`  
```html
<form action="" method="POST">
   <label>Username <input type="text" name="username"></label>
   <label>Team Name <input type="text" name="team"></label>
   <button>Submit</button>
</form>
```

## Send Form Submission to a Server
The `action` and `method` attributes allows us to choose where the form request will be sent and what type of request will be sent. How do we configure what happens in response to a form submission?

`Form handlers` are web server actions that receive, inspect, and process requests. They then send a response to the client. For this unit we are going to use form handlers that have already been created for us.

Example
When submitted this form will send a POST request to the form handler defined by the action attribute.
```html
<form action="https://handlers.education.launchcode.org/request-parrot" method="POST">
   <label>Username <input type="text" name="username"></label>
   <label>Team Name <input type="text" name="team"></label>
   <button>Submit</button>
</form>
```

repl.it

Try It!
Open example form that uses POST in a browser.
Open the network tab of the developer tools
Check "Persist Logs" in the network tab
Screen shot of firefox browser with form loaded and network tab open.
Firefox browser with form loaded, network tab open, and Persist logs checked

Enter data into the inputs
Type tracking into Username input
Type Requests into Team Name input
Click Submit button
Web page showing submitted values and the entries in network tab.
Firefox browser with request handler loaded and network tab showing requests

Inspect the data sent in the POST request
POST request highlighted with Params tab open showing Form data.
POST request highlighted with Params tab open showing Form data

Warning
Using POST for form submissions adds a very low level of security. Using HTTPS instead of HTTP adds a higher level of security. Configuring HTTPS is beyond the scope of this class