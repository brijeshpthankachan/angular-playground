# Notes

## Installing bootstrap

`npm install bootstrap`

in the angular.json file

```javascript
"scripts": [
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]

"styles": [
    "styles.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
    ]
```

In the router.navigate method of the Angular Router service, the first parameter is a commands array that specifies the destination URL and any optional parameters

`this.router.navigate(['dashboard'])`

This would navigate to the dashboard route of your application.

If the destination route includes route parameters or query parameters, you can include them in the commands array as additional elements

`this.router.navigate(['products', 'category', '1234'], { queryParams: { sortBy: 'price' }})`

This would navigate to the **products/category/1234 route and pass a query parameter sortBy=price**
