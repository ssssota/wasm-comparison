const std = @import("std");

pub fn main() void {}

export fn add(a: i32, b: i32) i32 {
    return a + b;
}

export fn tarai(x: i32, y: i32, z: i32) i32 {
    if (x <= y) return y;
    return tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y));
}

test "add" {
    try std.testing.expect(add(40, 2) == 42);
}
