import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        direction?: "up" | "down" | "left" | "right";
        behavior?: "scroll" | "slide" | "alternate";
        scrollamount?: number | string;
        scrolldelay?: number | string;
        loop?: number | string;
      };
    }
  }
}
