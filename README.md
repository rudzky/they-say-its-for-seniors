# Create a reusable table
This is basically a hook called **useTable** which takes object as a parameter and returns object with two arrays. First is called **headers** and contains table headers, second is called **rows** and contains objects, each of which represents a row of data.
________
Here is simple mocked data

```javascript
const mockData = [
  {
    id: "1",
    name: "Lucas",
    favouriteFood: "Lasagne",
  },
  {
    id: "2",
    name: "Larry",
    favouriteFood: "Pizza",
  },
];

```
And here is array of objects, each of which has two params: 

- accessor (which needs to be same as property name in data we're gonna use)
- label (which is going to be render in table head) 
```javascript
const COLUMNS = [
  {
    accessor: "id",
    label: "ID",
  },
  {
    accessor: "name",
    label: "Name",
  },
  {
    accessor: "favouriteFood",
    label: "Favourite Food",
  },
];
```

```javascript
const { headers, rows } = useTable({ columns: COLUMNS, data: mockData });
```
