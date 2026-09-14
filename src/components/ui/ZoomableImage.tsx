"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/cn";

const MIN_SCALE = 1;
const MAX_SCALE = 3.5;
const SCALE_STEP = 0.5;

function emitLightbox(open: boolean) {
  window.dispatchEvent(new CustomEvent("naturland:lightbox", { detail: { open } }));
}

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  width?: number;
  height?: number;
  decoding?: "async" | "auto" | "sync";
  unoptimized?: boolean;
};

export function ZoomableImage({
  src,
  alt,
  className,
  sizes,
  priority,
  quality,
  fill,
  width,
  height,
  decoding,
  unoptimized,
}: ZoomableImageProps) {
  const labelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setScale(1);
  }, []);

  useEffect(() => {
    if (!open) return;

    emitLightbox(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setScale((value) => Math.min(MAX_SCALE, value + SCALE_STEP));
      }
      if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        setScale((value) => Math.max(MIN_SCALE, value - SCALE_STEP));
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      emitLightbox(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const zoomIn = () => setScale((value) => Math.min(MAX_SCALE, +(value + SCALE_STEP).toFixed(2)));
  const zoomOut = () => setScale((value) => Math.max(MIN_SCALE, +(value - SCALE_STEP).toFixed(2)));

  const lightbox =
    mounted && open
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex flex-col bg-[#1c140e]/96"
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelId}
          >
            <p id={labelId} className="sr-only">
              {alt}
            </p>

            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4 sm:p-5">
              <p className="pointer-events-none max-w-[55%] pt-1 text-[12px] tracking-[0.12em] text-ivory/70 uppercase">
                {scale > 1 ? "Scrollen zum Verschieben" : "Zum Zoomen + drücken"}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center border border-ivory/25 bg-[#1c140e]/70 text-ivory backdrop-blur-sm transition-colors hover:border-ivory/60 hover:bg-[#1c140e]"
                aria-label="Bild schliessen"
              >
                <X size={18} />
              </button>
            </div>

            <div
              className="min-h-0 flex-1 overflow-auto"
              onClick={close}
            >
              <div
                className={cn(
                  "flex min-h-full min-w-full items-center justify-center p-4 pt-16 pb-24 sm:p-8 sm:pt-20 sm:pb-28",
                  scale > 1 && "items-start justify-start",
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  onClick={(event) => {
                    event.stopPropagation();
                    if (scale >= MAX_SCALE) setScale(1);
                    else zoomIn();
                  }}
                  className={cn(
                    "select-none",
                    scale === 1 ? "cursor-zoom-in" : "cursor-zoom-out",
                  )}
                  style={
                    scale === 1
                      ? { maxWidth: "92vw", maxHeight: "78vh", width: "auto", height: "auto" }
                      : {
                          width: `${Math.round(scale * 92)}vw`,
                          maxWidth: "none",
                          height: "auto",
                        }
                  }
                />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <div className="pointer-events-auto flex items-center gap-1 border border-ivory/20 bg-[#1c140e]/80 p-1 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={scale <= MIN_SCALE}
                  className="flex h-11 w-11 items-center justify-center text-ivory disabled:opacity-30"
                  aria-label="Verkleinern"
                >
                  <ZoomOut size={18} />
                </button>
                <span className="min-w-[3.25rem] text-center text-[12px] tracking-[0.14em] text-ivory/80 tabular-nums">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={scale >= MAX_SCALE}
                  className="flex h-11 w-11 items-center justify-center text-ivory disabled:opacity-30"
                  aria-label="Vergrössern"
                >
                  <ZoomIn size={18} />
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${alt} vergrössern`}
        className={cn(
          "group/zoom relative block cursor-zoom-in text-left",
          fill && "absolute inset-0 h-full w-full",
          !fill && "w-full",
        )}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            quality={quality}
            unoptimized={unoptimized}
            sizes={sizes}
            className={className}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            decoding={decoding}
            className={className}
          />
        )}
        <span className="pointer-events-none absolute right-3 bottom-3 z-10 flex h-9 w-9 items-center justify-center border border-ink/10 bg-ivory/85 text-ink opacity-90 shadow-sm backdrop-blur-sm transition-opacity group-hover/zoom:opacity-100 sm:opacity-0 sm:group-hover/zoom:opacity-100">
          <ZoomIn size={16} />
        </span>
      </button>
      {lightbox}
    </>
  );
}
