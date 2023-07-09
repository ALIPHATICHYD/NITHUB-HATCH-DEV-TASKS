// src/link.tsx
import {
  forwardRef,
  chakra,
  useStyleConfig,
  omitThemingProps
} from "@chakra-ui/react";
import NextLink from "next/link.js";
import { jsx } from "react/jsx-runtime";
var cx = (...classNames) => classNames.filter(Boolean).join(" ");
var Link = forwardRef(function Link2(props, ref) {
  const styles = useStyleConfig("Link", props);
  const { className, isExternal, href, children, ...rest } = omitThemingProps(props);
  return /* @__PURE__ */ jsx(
    chakra.a,
    {
      target: isExternal ? "_blank" : void 0,
      ref,
      href,
      ...rest,
      className: cx("chakra-link", className),
      __css: styles,
      as: NextLink,
      children
    }
  );
});

export {
  Link
};
