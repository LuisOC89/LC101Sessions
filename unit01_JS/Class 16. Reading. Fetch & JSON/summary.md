1. What is an API?  
Application Programming Interface -> Used by programs to communicate.

2. What is JSON?  
Javascript Object Notation -> One of the leading formats used in the web.
It uses key/value pairs. A JSON key MUST be a string, but the value may be a 
number, string, boolean, array, object, or null.
Ex:
```JSON
{
    "hits": 3,
    "book": [
        {
            "title": "An Astronaut's Guide to Life on Earth",
             "author": "Chris Hadfield",
             "ISBN": 9780316253017,
             "year_published": 2013,
             "subject": ["Hadfield, Chris", "Astronauts", "Biography"],
             "available": true
        },
        {
            "title": "Astronaut",
            "author": "Lucy M. George",
            "ISBN": 9781609929411,
            "year_published": 2016,
            "subject": ["Astronauts", "Juvenile Fiction", "Space stations"],
            "available": false
        },
        {
            "title": "Astronaut Ellen Ochoa",
            "author": "Heather E. Schwartz",
            "ISBN": 9781512434491,
            "year_published": 2018,
            "subject": ["Ochoa Ellen", "Women astronauts", "Astronauts", "Biography", "Women scientists", "Hispanic American women"],
            "available": true
        }
    ]
}
```

3. Differences between JSON and object notation:
- Only double quotes allowed, not single quote nor dot notation.  

4. Asynchronous vs. Synchronous  
**Asynchronous**: Not simultaneous or concurrent in time. At the same time.
**Synchronous**: Simultaneous or concurrent in time. One after the other.

5. A `promise` is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred).

6. `.then` will execute after a `promise (an event)` happens. 
