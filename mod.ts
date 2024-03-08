/** A value that is either the given type or nullish */
export type Maybe<T> = T | null | undefined;

/** A nullish value is either null or undefined */
export type Nullish = null | undefined;

/** A function that indicates something about value passed in to it */
export type Predicate<T = unknown> = (x: T) => boolean;

/** A function that narrows the type of value passed in to it */
export type TypePredicate<T, U extends T> = (x: T) => x is U;

/**
 * Tag function for parsing tagged template literals
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
 */
export type TemplateTag<T = string> = (
  template: TemplateStringsArray,
  ...substitutions: any[]
) => T;

/** A parsed JSON value */
export type json =
  | string
  | number
  | boolean
  | null
  | json[]
  | { [key: string]: json };

/** A JSON stringify-able value */
export type jsonable =
  | string
  | number
  | boolean
  | null
  | undefined
  | jsonable[]
  | { [key: string]: jsonable }
  | { toJSON(): jsonable };
