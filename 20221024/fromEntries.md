Object.fromEntries()是Object.entries()的逆操作

Object.fromEntries([
    ['foo', 'bar'],
    ['baz', '42']
])

{
    foo: "bar",
    baz: 42
}


Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))