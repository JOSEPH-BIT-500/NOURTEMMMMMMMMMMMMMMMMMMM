import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOURTEM'S WORLD" },
      {
        name: "description",
        content:
          "Step inside NOURTEM'S WORLD — a chaotic neon mind. Hit SWAG to dive into the memory stream.",
      },
      { property: "og:title", content: "NOURTEM'S WORLD" },
      {
        property: "og:description",
        content: "Enter the memory stream. Scroll through someone's mind.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      title="NOURTEM'S WORLD"
      src="/world.html"
      allow="autoplay; fullscreen"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        background: "#0a0a0a",
      }}
    />
  );
}
