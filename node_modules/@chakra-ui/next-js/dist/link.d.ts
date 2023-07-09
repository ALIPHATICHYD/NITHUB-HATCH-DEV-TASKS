import { HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { LinkProps as LinkProps$1 } from 'next/link';
import { FC, RefAttributes } from 'react';

type Pretty<T> = {
    [K in keyof T]: T[K];
} & {};
type Merge<P, T> = Pretty<Omit<P, keyof T> & T>;
type LegacyProps = "as" | "legacyBehavior" | "passHref";
type LinkComponent = FC<RefAttributes<HTMLAnchorElement> & LinkProps>;
type LinkProps = Merge<HTMLChakraProps<"a"> & ThemingProps<"Link">, Omit<LinkProps$1, LegacyProps>>;
declare const Link: LinkComponent;

export { Link, LinkProps };
