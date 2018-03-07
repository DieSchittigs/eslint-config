# eslint-config
The default eslint configuration used by us at _Die Schittigs_.

### Differences from `airbnb-base`
We use [`airbnb-base`](https://github.com/airbnb/javascript) as our default configuration, but override some of its settings.

#### Indentation
Code is indented by 4 spaces, not 2.

#### Trailing commas
Trailing commas in arrays are allowed, but not recommended and as such throw a warning:

```javascript
const value = [
    1, 
    2, 
    3, // This is valid, but throws a warning
];
```

#### Template strings
Template strings are preferred over string concatenation, but only warnings are thrown:

```javascript
// Perfect
const url = `${protocol}://${host}/${query}`;

// Not ideal, but accepted
const url = protocol + '://' + host + '/' + query;
```

#### Infix and Suffix operators
The `++` and `--` unary operators are often disallowed when semicolons are omitted, because they can lead to unexpected behavior. Since our code style requires semicolons, there is no reason to disallow syntax such as `i++`.
