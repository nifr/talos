//usr/bin/env -S pkgx +go@1.25.1 go run $0 $@; exit $?

// This script does NOT work with a shebang line "#!/usr/bin/env [..]"
// Instead we use "//" as go does not allow "#" comments
//
// attention: this scripts name MUST end with .go otherwise "go run [..]" will error as follows:
// > go: cannot find main module, but found [..]

package main

func main() {
    println("Hello world!")
}
