import { expect, test } from "vitest";
import { AsyncData } from "../src/AsyncData";
import { Option } from "../src/Option";
import { Result } from "../src/Result";
import { decode, encode } from "../src/Serializer";

test("Serializer", () => {
  const start = {
    value: AsyncData.Done(
      Result.Ok(
        Result.Error({
          value: Option.Some(1),
          nothing: Option.None(),
          loading: AsyncData.Loading(),
          notAsked: AsyncData.NotAsked(),
        }),
      ),
    ),
  };
  expect(encode(start)).toEqual(encode(start));
  expect(encode(start)).toContain("__boxed_type__");
  expect(decode(encode(start))).toEqual(start);
  expect(decode(encode(start)).value.map(() => "Hello")).toEqual(
    AsyncData.Done("Hello"),
  );
});
