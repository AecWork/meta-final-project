import { renderHook } from "@testing-library/react";
import usePageLoaded from "../usePageLoaded/usePageLoaded.ts";

test('Page loaded detection', () => {
    const { result } = renderHook(() => usePageLoaded());

    expect(result.current).toBe(true);
})