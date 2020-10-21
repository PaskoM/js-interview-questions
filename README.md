Interview questions
===

## What is going to be the value in each line?

- `typeof "bla"`
- `typeof 0`
- `typeof null`
- `typeof NaN`
- `typeof {}`
- `typeof []`
- `typeof function () {}`

## What will be the context? Why?

```js
const o = {
  m() {
    console.log(this);
  }
};

const { m } = o;

o.m();
m();
```

## In what order will be the numbers logged? Why?

```js
console.log(1);
setTimeout(() => console.log(2), 10);
setTimeout(() => console.log(3), 0);
console.log(4);
```

## What will be logged?

```js
const o = {
  movie: 'Lion King',
  name: 'Pumba',
};

const p = Object.create(o);
p.name = 'Timon';

Object.keys(p).forEach(k => console.log(k));
```

## What numbers will be logged? How to fix it?

```js
for (i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

## Explain the concept of Event Delegation

## Explain the difference between debouncing and throttling

## Explain the concept of dependency injection

## What practices do you know to fix circular dependencies?
