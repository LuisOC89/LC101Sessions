
Forms need to have an `input` element.
Input will contain `type`, `name` and `value`.

To enable submission in a form, a `button` or a `type=submit` is required.
The form tag must contain an '`action`' attribute. If not provided, it will submit it in the current page.
By default, `GET` method is selected to submit a form.  

To submit form as a POST, you will need to assign `method` attribute of the `form` to `POST`.

Interesting: `GET` requests can be cached, `POST` requests cannot. SO don't use GET to *authorization/authentication*.

HTTPS is more secured than HTTP.

To check support by browsers:  
[https://caniuse.com/](https://caniuse.com/)  