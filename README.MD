# Common types

A collection of TypeScript types I use sometimes.

## Examples

Use `Predicate` and `TypePredicate` to create an iterator filter function:

```ts
import { Predicate TypePredicate } from "@garretmh/common-types";

function* filter<T>(iter: Iterable<T>, fn: Predicate<T>): Iterable<T>;

function* filter<T, U>(iter: Iterable<T>, fn: TypePredicate<T, U>): Iterable<U>;

function* filter<T, U>(
  iter: Iterable<T>,
  fn: TypePredicate<T, U>,
): Iterable<U> {
  for (const item of iter) {
    if (fn(item)) {
      yield item;
    }
  }
}
```

Use `TemplateTag` to create URI encoded template strings:

```ts
import { TemplateTag } from "@garretmh/common-types";

const uri: TemplateTag = (template, ...vars) =>
  String.raw({ raw: template.map(encodeURI) }, ...vars.map(encodeURIComponent));

uri`/users/${userId}/books?genre=${genre}`;
```
