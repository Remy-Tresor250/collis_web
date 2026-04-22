"use client";

import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type AnimatedChildProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

type AnimatedTextRevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
  play?: boolean;
  duration?: number;
  onRevealComplete?: () => void;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const spaceStyle: CSSProperties = {
  whiteSpace: "pre",
};

const blurVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 10,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function animateNode(
  node: ReactNode,
  stagger: number,
  duration?: number,
  leafClassName?: string,
): ReactNode {
  // Handle arrays (mixed children like "text" + <span> + "text")
  if (Array.isArray(node)) {
    return node.map((child, i) => (
      <Fragment key={i}>
        {animateNode(child, stagger, duration, leafClassName)}
      </Fragment>
    ));
  }

  if (typeof node === "string") {
    const tokens = node.split(/(\s+)/);
    return tokens.map((token, tokenIndex) => {
      if (/^\s+$/.test(token)) {
        return Array.from(token).map((_, chIndex) => (
          <motion.span
            key={`space-${tokenIndex}-${chIndex}`}
            variants={blurVariants}
            transition={{ duration: duration ?? 2, ease: "easeOut" }}
            className="inline-block will-change-[filter,opacity,transform]"
            style={spaceStyle}
          >
            {"\u00A0"}
          </motion.span>
        ));
      }
      return (
        <span
          key={`word-${tokenIndex}`}
          className="inline-block whitespace-nowrap"
        >
          {Array.from(token).map((character, chIndex) => (
            <motion.span
              key={`${character}-${tokenIndex}-${chIndex}`}
              variants={blurVariants}
              transition={{ duration: duration ?? 2, ease: "easeOut" }}
              className={joinClasses(
                "inline-block will-change-[filter,opacity,transform]",
                leafClassName,
              )}
            >
              {character}
            </motion.span>
          ))}
        </span>
      );
    });
  }

  if (typeof node === "number") {
    return animateNode(String(node), stagger, duration, leafClassName);
  }

  if (!isValidElement<AnimatedChildProps>(node)) {
    return node;
  }

  // For nested <span> children (e.g. chip spans), do NOT propagate
  // leafClassName — they have their own background/foreground styles.
  const existingChildren = Children.map(node.props.children, (child) =>
    animateNode(child, stagger, duration),
  );

  if (typeof node.type === "string" && node.type === "span") {
    const spanClassName = node.props.className ?? "";

    const isGradientSpan = /bg-clip-text/.test(spanClassName);

    if (isGradientSpan) {
      const gradientTokens = spanClassName
        .split(" ")
        .filter((cls) =>
          /(bg-clip-text|text-transparent|bg-gradient-to-\w+|(?:^|:)from-|(?:^|:)via-|(?:^|:)to-)/.test(
            cls,
          ),
        )
        .join(" ");

      const wrapperTokens = spanClassName
        .split(" ")
        .filter(
          (cls) =>
            !/(bg-clip-text|text-transparent|bg-gradient-to-\w+|(?:^|:)from-|(?:^|:)via-|(?:^|:)to-)/.test(
              cls,
            ),
        )
        .join(" ");

      const gradientChildren = Children.map(node.props.children, (child) =>
        animateNode(child, stagger, duration, gradientTokens),
      );

      return (
        <span className={wrapperTokens} style={node.props.style}>
          {gradientChildren}
        </span>
      );
    }

    return (
      <motion.span
        variants={blurVariants}
        transition={{ duration: duration ?? 2, ease: "easeOut" }}
        className={joinClasses("inline-block", spanClassName)}
        style={node.props.style}
      >
        {existingChildren}
      </motion.span>
    );
  }

  return cloneElement(
    node as ReactElement<AnimatedChildProps>,
    undefined,
    existingChildren,
  );
}

function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (!isValidElement<AnimatedChildProps>(node)) return "";
  return Children.toArray(node.props.children)
    .map((child) => extractText(child))
    .join("");
}

export default function AnimatedTextReveal<T extends ElementType = "p">({
  as,
  children,
  className,
  contentClassName,
  delay = 0,
  stagger = 0.018,
  amount = 0.45,
  play = true,
  onRevealComplete,
  duration,
  ...props
}: AnimatedTextRevealProps<T>) {
  const Component = (as ?? "p") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  // once:false so isInView flips back false when scrolled past —
  // needed for fast-forward. Re-play prevention is handled by refs below.
  const isInView = useInView(ref, { once: false, amount });

  // Refs only — changes never re-render, so `animate` can never flip back
  // to "hidden" once it has been set to "visible".
  const animationFired = useRef(false);
  const completionFired = useRef(false);

  const prefersReducedMotion = useReducedMotion();
  const gradientLeafClasses = useMemo(() => {
    if (!contentClassName) return undefined;
    const gradientTokens = contentClassName
      .split(" ")
      .filter((cls) =>
        /(?:^|:)(bg-clip-text|text-transparent|bg-gradient-to-\w+|from-|via-|to-)/.test(
          cls,
        ),
      );
    return gradientTokens.length > 0 ? gradientTokens.join(" ") : undefined;
  }, [contentClassName]);

  const animatedChildren = useMemo(
    () => animateNode(children, stagger, duration, gradientLeafClasses),
    [children, stagger, duration, gradientLeafClasses],
  );
  const accessibleText = useMemo(
    () =>
      Children.toArray(children)
        .map((c) => extractText(c))
        .join(""),
    [children],
  );

  const [shouldAnimate, setShouldAnimate] = useState(false);

  const [snapVisible, setSnapVisible] = useState(false);

  useEffect(() => {
    if (play && isInView && !animationFired.current) {
      animationFired.current = true;
      setShouldAnimate(true);
    }
  }, [play, isInView]);

  // Track whether this element has ever entered the viewport.
  const hasBeenSeen = useRef(false);
  useEffect(() => {
    if (isInView) hasBeenSeen.current = true;
  }, [isInView]);

  useEffect(() => {
    if (hasBeenSeen.current && !isInView && !completionFired.current) {
      completionFired.current = true;
      animationFired.current = true;
      setSnapVisible(true);
      onRevealComplete?.();
    }
  }, [isInView, onRevealComplete]);

  // Reduced-motion path.
  useEffect(() => {
    if (!prefersReducedMotion || !shouldAnimate || completionFired.current)
      return;
    completionFired.current = true;
    onRevealComplete?.();
  }, [onRevealComplete, prefersReducedMotion, shouldAnimate]);

  if (prefersReducedMotion) {
    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  }

  // When snapping, we bypass the stagger entirely: render a plain visible
  // span with no animation so every character is immediately readable.
  if (snapVisible) {
    return (
      <Component ref={ref} className={className} {...props}>
        <span className={joinClasses("block", contentClassName)}>
          {children}
        </span>
      </Component>
    );
  }

  return (
    <Component ref={ref} className={className} {...props}>
      <span className="block relative" style={{ minHeight: "1em" }}>
        {/* Spacer — invisible but holds exact layout height from first render */}
        <span
          aria-hidden="true"
          className={joinClasses("block invisible", contentClassName)}
          style={{ userSelect: "none", pointerEvents: "none" }}
        >
          {children}
        </span>

        {/* Animated overlay — sits on top of spacer, out of flow */}
        <motion.span
          aria-hidden="true"
          className={joinClasses("absolute inset-0 block", contentClassName)}
          variants={{
            hidden: {
              opacity: 1,
              filter: "blur(0px)",
            },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                delay,
                duration: duration ?? 1.68,
                ease: "easeOut",
                delayChildren: 0.06,
                staggerChildren: stagger,
              },
            },
          }}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          onAnimationComplete={(definition) => {
            if (
              definition !== "visible" ||
              completionFired.current ||
              !shouldAnimate
            )
              return;
            completionFired.current = true;
            onRevealComplete?.();
          }}
        >
          {animatedChildren}
        </motion.span>

        <span className="sr-only">{accessibleText}</span>
      </span>
    </Component>
  );
}
