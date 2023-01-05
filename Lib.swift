var dic: [Int: CInt] = [0: 42]

@_cdecl("get_value")
func getValue() -> CInt {
    dic[0] ?? -1
}
