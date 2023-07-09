import { HTMLChakraProps, ChakraComponent } from '@chakra-ui/react';
import { ImageProps as ImageProps$1 } from 'next/image';

type ImageProps = ImageProps$1 & Omit<HTMLChakraProps<"img">, keyof ImageProps$1>;
declare const Image: ChakraComponent<"img", ImageProps$1>;

export { Image, ImageProps };
